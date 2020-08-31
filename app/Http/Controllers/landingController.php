<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class landingController extends Controller
{

    private $url = "http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/";

    public function showCanalClaroLanding()
    {
        return view('admin-site.landings.apro-claro');
    }

    public function showConcertChannelLanding()
    {
        return view('admin-site.landings.apro-concert');
    }

    public function showClaroCinemaLanding()
    {
        return view('admin-site.landings.claro-cinema');
    }

    public function showProgramacionLanding()
    {
        return view('admin-site.landings.programacion');
    }

    public function showHomeLanding()
    {
        return view('admin-site.landings.home');
    }

    public function showEditProgramView()
    {
        return view('.admin-site.landings.edit-program.edit-program');
    }

    public function showProgrammingSlider()
    {
        return view('admin-site.landings.programming-carrusel');
    }

    public function storeImages($name, $file, $url)
    {
        $extension = $file->extension();
        $path = url('/storage') . "/" . substr($file->storeAs($url, $name . "." . $extension), 7);
        return $path;
    }

    public function updateImageProgramOfLanding(Request $request)
    {
        $name = str_replace(" ", "", $request->input('name'));
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);

        switch ($request->input('landing')) {
            case 1:
                $pathImageHorizontal = $this->storeImages($name . $request->input('chapter_id'), $request->file('image-horizontal'), "public/canal-claro/horizontal/");
                break;
            case 2:
                $pathImageHorizontal = $this->storeImages($name . $request->input('chapter_id'), $request->file('image-horizontal'), "public/concert-channel/horizontal/");
                break;
            case 3:
                $pathImageHorizontal = $this->storeImages($name . $request->input('chapter_id'), $request->file('image-horizontal'), "public/claro-cinema/horizontal/");
                break;

            default:

                break;
        }

        var_dump($pathImageHorizontal);

        $response = $client->post(
            $this->url . "program/CaptureImagesForChapter",
            ['body' => json_encode(
                [
                    'usuario_id' => session('id_user'),
                    'chapter_id' => $request->input('chapter_id'),
                    "thumbnail_list_horizontal" => $pathImageHorizontal,
                    "thumbnail_list_vertical" => "",
                    "image_synopsis" => "",
                    "image_synopsis_frame_1" => "",
                    "image_synopsis_frame_2" => "",
                    "image_synopsis_frame_3" => "",
                    "image_background_1" => "",
                    "image_background_2" => "",
                    "image_background_3" => ""
                ]
            )]
        );

        var_dump($response->getBody()->getContents());
    }

    public function updateProgramminSliderImages(Request $request)
    {
        //Imágene que subió el usuario
        $files = $request->file();
        //POsiciones de las imágenes
        $positions = explode(",", $request->input("positions"));
        $dates = ["00-00-0000", "00-00-0000"];
        if ($request->input("dates")) {
            $dates = explode(",", $request->input("date"));
        }
        $counter = 0;
        $images = [];
        foreach ($files as $file) {
            $newFile = $this->storeImages("imageProgrammingSlider" . $positions[$counter], $file, "public/programacion/banner");
            $counter++;
            array_push($images, $newFile);
        }
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);

        $response = $client->post(
            $this->url . "programation/setImageSlider",
            ['body' => json_encode(
                [
                    'usuario_id' => session('id_user'),
                    'value' => $images,
                    'positions' => $positions,
                    'schedule_date' => $dates[0],
                    'expiration_date' => $dates[1]
                ]
            )]
        );
        $respuesta =  $response->getBody()->getContents();
        echo ($respuesta);
    }

    public function updateLandingLogo(Request $request)
    {
        $files = $request->file();
        $logoCanalClaro = $request->file("logoCanalClaro");
        $logoConcertChannel = $request->file("logoConcertChannel");
        $urlCanalClaro = $request->input("urlCanalClaro");
        $urlConcertChannel = $request->input("urlConcertChannel");
        $urlClaroCinema = $request->input("urlClaroCinema");
        $pathCanalClaro = "";
        $pathConcertChannel = "";
        $pathClaroCinema = "";

        $logoClaroCinema = $request->file("logoClaroCinema");
        if ($logoCanalClaro) {
            $pathCanalClaro = $this->storeImages("logoCanalClaroNav", $logoCanalClaro, "public/canal-claro/logos");
        }

        if ($logoConcertChannel) {
            $pathConcertChannel = $this->storeImages("logoConcertChannelNav", $logoConcertChannel, "public/claro-cinema/logos");
        }

        if ($logoClaroCinema) {
            $pathClaroCinema = $this->storeImages("logoClaroCinemaNav", $logoClaroCinema, "public/concert-channel/logos");
        }

        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);

        $response = $client->post(
            $this->url . "programation/setIconChannel",
            ['body' => json_encode(
                [
                    'usuario_id' => session('id_user'),
                    'concert_channel' => [
                        'icon' => $pathConcertChannel,
                        'url' => $urlConcertChannel
                    ],
                    'canal_claro' => [
                        'icon' => $pathCanalClaro,
                        'url' => $urlCanalClaro
                    ],
                    'claro_cinema' => [
                        'icon' => $pathClaroCinema,
                        'url' => $urlClaroCinema
                    ],

                ]
            )]
        );

        $respuesta =  $response->getBody()->getContents();
        echo ($respuesta);
    }

    public function newProgram(Request $request)
    {

        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);
        $response = $client->post(
            $this->url . "program/newEntryGrill",
            ['body' => json_encode(
                [
                    "usuario_id" => session('id_user'),
                    "landing" => $request->input('landing'),
                    "day" => date('Y-m-d')
                ]
            )]
        );
        //Empieza segunda petición para cambiar horario de nuevo programa
        $respuesta = json_decode($response->getBody()->getContents());
        if ($respuesta->code == 200) {
            //Hacemos de nuevo una llamada a la api para registrar el horario endonde se encuentra
            $responseProgramming = $client->post(
                $this->url . "program/editChapter",
                ['body' => json_encode(
                    [
                        'usuario_id' => session('id_user'),
                        'chapter_id' => $respuesta->data->chapter_id,
                        'key' => "programing",
                        'value' => $request->input('schedule'),
                    ]
                )]
            );

            $respuesta =  json_decode($response->getBody());
            echo (json_encode($respuesta->data));
            //End primera petición
        }


        //var_dump($response->getBody()->getContents());
    }
    public function newProgramByDate(Request $request)
    {
        switch ($request->input('landing')) {
            case 1:
                $channel = "Claro Canal";
                break;
            case 2:
                $channel = "Concert Channel";

                break;
            case 3:
                $channel = "Claro Cinema";

                break;

            default:
                # code...
                break;
        }
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);
        $response = $client->post(
            $this->url . "program/newEntryGrill",
            ['body' => json_encode(
                [
                    "usuario_id" => session('id_user'),
                    "landing" => $channel,
                    "day" => $request->day

                ]
            )]
        );
        //Empieza segunda petición para cambiar horario de nuevo programa
        $respuesta = json_decode($response->getBody()->getContents());
        if ($respuesta->code == 200) {
            //Hacemos de nuevo una llamada a la api para registrar el horario endonde se encuentra
            $responseProgramming = $client->post(
                $this->url . "program/editChapter",
                ['body' => json_encode(
                    [
                        'usuario_id' => session('id_user'),
                        'chapter_id' => $respuesta->data->chapter_id,
                        'key' => "programing",
                        'value' => $request->time,
                    ]
                )]
            );

            $respuesta =  json_decode($response->getBody());
            echo (json_encode($respuesta->data));
            //End primera petición
        }


        //var_dump($response->getBody()->getContents());
    }
    public function getChapterInfo($id)
    {
        $client = new Client();
        $response = $client->get(
            $this->url . "programation/getChapter/" . $id
        );

        $respuesta =  json_decode($response->getBody());
        echo (json_encode($respuesta->data));
    }
    public function getSection($section)
    {
        $client = new Client();
        $response = $client->get(
            $this->url . "section/" . $section
        );

        $respuesta =  json_decode($response->getBody());
        echo (json_encode($respuesta->data));
    }

    public function getProgramming(Request $request)
    {
        $client = new Client();
        $response = $client->get(
            $this->url . "programation/getChapterByDate/" . $request->input('date') . "&" . $request->input('time') . "&" . $request->input('section')
        );
        $respuesta =  json_decode($response->getBody());
        echo (json_encode($respuesta->data));
    }

    public function editHeaderLanding(Request $request)
    {
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);
        $logo = "";
        if ($request->file('logo')) {
            $logo = $this->storeImages("logoLanding", $request->file('logo'), "public/concert-channel/logos");
        }
        $response = $client->post(
            $this->url . "section/editBlockProgramingLanding",
            ['body' => json_encode(
                [
                    "usuario_id" => session('id_user'),
                    "landing" => $request->input('landing'),
                    "icon_chanel" => $logo,
                    "title_1" => $request->input('title1'),
                    "title_2" => $request->input('title2'),
                    "url_programation" => $request->input("link")
                ]
            )]
        );

        echo ($response->getBody()->getContents());
    }

    public function getContentConcertChannel(Request $request)
    {
        $client = new Client();
        $response = $client->get(
            $this->url . "section/concert_channel"
        );

        echo ($response->getBody()->getContents());
    }

    public function editElementLanding(Request $request)
    {
        $value = $request->input('value');
        if ($request->file('promo')) {
            $value = $this->storeImages("PromoLanding", $request->file('promo'), "public/concert-channel/promo");
        }
        if ($request->input('promo')) {
            $value = $request->input('promo');
        }

        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);
        $response = $client->post(
            $this->url . "section/editElement",
            ['body' => json_encode(
                [
                    "usuario_id" => session('id_user'),
                    "value" => $value,
                    "key" => $request->input('key'),
                    "landing" => $request->input('landing'),
                ]
            )]
        );

        echo ($response->getBody()->getContents());
    }

    public function getProgrammingLanding(Request $request)
    {
        $client = new Client();
        $response = $client->get(
            $this->url . "sprogram/actual_programing_programation/gmt&" . date('Y-m-d')
        );
        echo ($response->getBody()->getContents());
    }
    // CANAL CLARO
    public function getModalsCanalClaro()
    {
        $client = new Client();
        $response = $client->get(
            $this->url . "section/canal_claro"
        );
        $respuesta =  $response->getBody();
        echo ($respuesta);
    }

    // HEADER
    public function editHeaderLandingClaro(Request $request)
    {
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);
        $logo = "";
        if ($request->file('logo')) {
            $logo = $this->storeImages("logoLanding", $request->file('logo'), "public/canal-claro/logos");
        }
        $response = $client->post(
            $this->url . "section/editBlockProgramingLanding",
            ['body' => json_encode(
                [
                    "usuario_id" => session('id_user'),
                    "landing" => $request->input('landing'),
                    "icon_chanel" => $logo,
                    "title_1" => $request->input('title1'),
                    "title_2" => $request->input('title2'),
                    "url_programation" => $request->input("link")
                ]
            )]
        );

        echo ($response->getBody()->getContents());
    }

    // TITULO
    public function editElementLandingClaro(Request $request)
    {
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);
        $response = $client->post(
            $this->url . "section/editElement",
            ['body' => json_encode(
                [
                    "usuario_id" => session('id_user'),
                    "value" => $request->input('value'),
                    "key" => $request->input('key'),
                    "landing" => $request->input('landing'),
                ]
            )]
        );

        echo ($response->getBody()->getContents());
    }

    function getContentClaroCinema(){
        $client = new Client();
        $response = $client->get(
            $this->url . "section/claro_cinema"
        );

        echo ($response->getBody()->getContents());
    }

    function getPromotionalsProgramsCarousel(Request $request){
        $client = new Client();
        $response = $client->get(
            $this->url . "section/getCarrusel/".$request->input("landing")."&".$request->input('idCarousel')
        );

        echo ($response->getBody()->getContents());
    }

    // PROMO
    public function editPromoLandingClaro(Request $request)
    {
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);
        $img = "";
        $video = "";
        if ($request->file('img')) {
            $img = $this->storeImages("promoClaroCanal", $request->file('img'), "public/canal-claro/promo");
        }
        if ($request->file('video')) {
            $video = $this->storeImages("promoVideoClaroCanal", $request->file('video'), "public/canal-claro/promo");
        }
        var_dump($video);
        if ($img != "") {
            $response = $client->post(
                $this->url . "section/editElement",
                ['body' => json_encode(
                    [
                        "usuario_id" => session('id_user'),
                        "value" => $img,
                        "key" => $request->input('key'),
                        "landing" => $request->input('landing'),
                    ]
                )]
            );
        }
        if ($video != "") {
            $response = $client->post(
                $this->url . "section/editElement",
                ['body' => json_encode(
                    [
                        "usuario_id" => session('id_user'),
                        "value" => $video,
                        "key" => $request->input('key'),
                        "landing" => $request->input('landing'),
                    ]
                )]
            );
        }

        echo ($response->getBody()->getContents());
    }
    // CANAL CLARO
}
