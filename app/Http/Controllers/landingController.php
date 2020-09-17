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
    public function showFooterLanding()
    {
        return view('admin-site.landings.footer');
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

    public function getContentHome(Request $request)
    {
        $client = new Client();
        $response = $client->get(
            $this->url . "section/home"
        );

        echo ($response->getBody()->getContents());
    }
   
    public function editHomeHeader(Request $request)  
    { 
      
        
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);
        $videoimage = "";
        if ($request->file('video')) {
            $videoimage = $this->storeImages("videoimage", $request->file('video'), "public/home/video");
        }
       
        $response = $client->post(
            $this->url . "section/editBlock1Home",
            ['body' => json_encode(
                [
                    "usuario_id" => session('id_user'),  
                    "video" => $videoimage,         
                    "title" => $request->input('title'),
                    "subtitle" => $request->input('subtitle')
                    
                ]
            )]
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

    public function editPromoLandingCinema(Request $request)
    {
        $value = $request->input('value');
        if ($request->file('promo')) {
            $value = $this->storeImages("PromoLanding", $request->file('promo'), "public/claro-cinema/promo");
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
            $this->url . "program/actual_programing_programation/gmt&" . $request->input("date")
        );
        echo ($response->getBody()->getContents());
    }
    // CANAL CLARO

    // GET MODAL HEADER, TITLE PROMO
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
        $folderLanding = "";
        switch ($request->input("landing")) {
            case 'Canal Claro':
                $folderLanding = "canal-claro";
                break;
            case 'Concert Channel':
                $folderLanding = "concert-channel";
                break;
            case 'Claro Cinema':
                $folderLanding = "claro-cinema";
                break;

            default:
                # code...
                break;
        }
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);
        $logo = "";
        if ($request->file('logo')) {
            $logo = $this->storeImages("logoLanding", $request->file('logo'), "public/" . $folderLanding . "/logos");
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

    function getContentClaroCinema()
    {
        $client = new Client();
        $response = $client->get(
            $this->url . "section/claro_cinema"
            // $this->url . "section/canal_claro"
        );

        echo ($response->getBody()->getContents());
    }

    function getPromotionalsProgramsCarousel(Request $request)
    {
        $client = new Client();
        $response = $client->get(
            $this->url . "section/getCarrusel/" . $request->input("landing") . "&" . $request->input('idCarousel')
        );

        echo ($response->getBody()->getContents());
    }

    public function editPromoLandingClaro(Request $request)
    {
        $folderLanding = "";
        switch ($request->input("landing")) {
            case 'Canal Claro':
                $folderLanding = "canal-claro";
                break;
            case 'Concert Channel':
                $folderLanding = "concert-channel";
                break;
            case 'Claro Cinema':
                $folderLanding = "claro-cinema";
                break;

            default:
                # code...
                break;
        }
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);
        $img = "";
        $video = "";
        if ($request->file('img')) {
            $img = $this->storeImages("canal-claro-promo", $request->file('img'), 'public/' + $folderLanding + '/promo');
        }
        if ($request->file('video')) {
            $video = $this->storeImages("canal-claro-promo", $request->file('video'), 'public/' + $folderLanding + '/promo');
        }
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

    function setImageSliderBanner(Request $request)
    {

        $folderLanding = "";
        switch ($request->input("landing")) {
            case 'Canal Claro':
                $folderLanding = "canal-claro";
                break;
            case 'Concert Channel':
                $folderLanding = "concert-channel";
                break;
            case 'Claro Cinema':
                $folderLanding = "claro-cinema";
                break;

            default:
                # code...
                break;
        }
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
            $newFile = $this->storeImages("imageBannerSlider" . $positions[$counter], $file, "public/" . $folderLanding . "/banner");
            $counter++;
            array_push($images, $newFile);
        }

        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);

        $response = $client->post(
            $this->url . "section/setImageSlider",
            ['body' => json_encode(
                [
                    'usuario_id' => session('id_user'),
                    'landing' => $request->input("landing"),
                    'positions' => $positions,
                    'value' => $images,

                ]
            )]
        );
        $respuesta =  $response->getBody()->getContents();
        echo ($respuesta);
    }

    function getProgrammingSynopsisTable(Request $request)
    {
        $client = new Client();
        $response = $client->get(
            $this->url . "program/getSinospsisTable/" . $request->input("date")
        );
        echo ($response->getBody()->getContents());
    }

    function getSynopsis(Request $request)
    {

        $client = new Client();
        $response = $client->get(
            $this->url . "program/getSynopsis/" . $request->input("chapter_id")
        );

        return $response->getBody()->getContents();
    }


    function editBlockSynopsis(Request $request){
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);

        $response = $client->post(
            $this->url . "program/editBolckSinopsis",
            ['body' => json_encode(
                [
                    'usuario_id' => session('id_user'),
                    'chapter_id' => $request->input('chapter_id'),
                    'duration' => $request->input('duration'),
                    'year' => $request->input('year'),
                    'seasons' => $request->input('season'),
                    'rating' => $request->input('rating')
                ]
            )]
        );
        return $response->getBody()->getContents();
    }

    public function storeImagesSynopsis($id, $landing, $title, $file, $type)
    {

        $extension = $file->extension();
        //$path = substr($file->storeAs("public/" . $landing . "/" . $type . "", str_replace(" ", "", $title) . $decrypted . "_" . $type . "" . "." . $extension), 7);
        $path = url('/storage') . "/" . substr($file->storeAs("public/" . $landing . "/" . $type . "", str_replace(" ", "", $title) . $id . "_" . $type . "" . "." . $extension), 7);
        return $path;
    }

    public function updateImages(Request $request)
    {

        $chapterId = $request->input('chapter_id');
        $pathSynopsis3 = "";
        $pathSynopsis2 = "";
        $pathSynopsis1 = "";
        $pathSynopsis = "";
        $pathImageVertical = "";
        $pathImageHorizontal = "";
        $pathImageSlider1 = "";
        $pathImageSlider2 = "";
        $pathImageSlider3 = "";
        $landingId = $request->input('landing_id');
        switch ($landingId) {
            case 1:
                if ($request->file('image-vertical')) {
                    $pathImageVertical = $this->storeImagesSynopsis($request->input('id'), "canal-claro", $request->input('title'), $request->file("image-vertical"), "vertical");
                }
                if ($request->file('image-horizontal')) {
                    $pathImageHorizontal = $this->storeImagesSynopsis($request->input('id'), "canal-claro", $request->input('title'), $request->file("image-horizontal"), "horizontal");
                }

                if ($request->file('image-synopsis')) {
                    $pathSynopsis = $this->storeImagesSynopsis($request->input('id'), "canal-claro", $request->input('title'), $request->file("image-synopsis"), "sinopsis");
                }

                if ($request->file('image-synopsis-1')) {
                    $pathSynopsis1 = $this->storeImagesSynopsis($request->input('id'), "canal-claro", $request->input('title'), $request->file("image-synopsis-1"), "sinopsis1");
                }
                if ($request->file('image-synopsis-2')) {
                    $pathSynopsis2 = $this->storeImagesSynopsis($request->input('id'), "canal-claro", $request->input('title'), $request->file("image-synopsis-2"), "sinopsis2");
                }
                if ($request->file('image-synopsis-3')) {
                    $pathSynopsis3 = $this->storeImagesSynopsis($request->input('id'), "canal-claro", $request->input('title'), $request->file("image-synopsis-3"), "sinopsis3");
                }

                if ($request->file('image_background_1')) {
                    $pathImageSlider1 = $this->storeImagesSynopsis($request->input('id'), "canal-claro", $request->input('title'), $request->file("image_background_1"), "slider1");
                }
                if ($request->file('image_background_2')) {
                    $pathImageSlider2 = $this->storeImagesSynopsis($request->input('id'), "canal-claro", $request->input('title'), $request->file("image_background_2"), "slider2");
                }
                if ($request->file('image_background_3')) {
                    $pathImageSlider3 = $this->storeImagesSynopsis($request->input('id'), "canal-claro", $request->input('title'), $request->file("image_background_3"), "slider3");
                }
                break;
            case 2:
                if ($request->file('image-vertical')) {
                    $pathImageVertical = $this->storeImagesSynopsis($request->input('id'), "concert-channel", $request->input('title'), $request->file("image-vertical"), "vertical");
                }
                if ($request->file('image-horizontal')) {
                    $pathImageHorizontal = $this->storeImagesSynopsis($request->input('id'), "concert-channel", $request->input('title'), $request->file("image-horizontal"), "horizontal");
                }

                if ($request->file('image-synopsis')) {
                    $pathSynopsis = $this->storeImagesSynopsis($request->input('id'), "concert-channel", $request->input('title'), $request->file("image-synopsis"), "sinopsis");
                }

                if ($request->file('image-synopsis-1')) {
                    $pathSynopsis1 = $this->storeImagesSynopsis($request->input('id'), "concert-channel", $request->input('title'), $request->file("image-synopsis-1"), "sinopsis1");
                }
                if ($request->file('image-synopsis-2')) {
                    $pathSynopsis2 = $this->storeImagesSynopsis($request->input('id'), "concert-channel", $request->input('title'), $request->file("image-synopsis-2"), "sinopsis2");
                }
                if ($request->file('image-synopsis-3')) {
                    $pathSynopsis3 = $this->storeImagesSynopsis($request->input('id'), "concert-channel", $request->input('title'), $request->file("image-synopsis-3"), "sinopsis3");
                }

                if ($request->file('image_background_1')) {
                    $pathImageSlider1 = $this->storeImagesSynopsis($request->input('id'), "concert-channel", $request->input('title'), $request->file("image_background_1"), "slider1");
                }
                if ($request->file('image_background_2')) {
                    $pathImageSlider2 = $this->storeImagesSynopsis($request->input('id'), "concert-channel", $request->input('title'), $request->file("image_background_2"), "slider2");
                }
                if ($request->file('image_background_3')) {
                    $pathImageSlider3 = $this->storeImagesSynopsis($request->input('id'), "concert-channel", $request->input('title'), $request->file("image_background_3"), "slider3");
                }
                break;
            case 3:
                if ($request->file('image-vertical')) {
                    $pathImageVertical = $this->storeImagesSynopsis($request->input('id'), "claro-cinema", $request->input('title'), $request->file("image-vertical"), "vertical");
                }
                if ($request->file('image-horizontal')) {
                    $pathImageHorizontal = $this->storeImagesSynopsis($request->input('id'), "claro-cinema", $request->input('title'), $request->file("image-horizontal"), "horizontal");
                }

                if ($request->file('image-synopsis')) {
                    $pathSynopsis = $this->storeImagesSynopsis($request->input('id'), "claro-cinema", $request->input('title'), $request->file("image-synopsis"), "sinopsis");
                }

                if ($request->file('image-synopsis-1')) {
                    $pathSynopsis1 = $this->storeImagesSynopsis($request->input('id'), "claro-cinema", $request->input('title'), $request->file("image-synopsis-1"), "sinopsis1");
                }
                if ($request->file('image-synopsis-2')) {
                    $pathSynopsis2 = $this->storeImagesSynopsis($request->input('id'), "claro-cinema", $request->input('title'), $request->file("image-synopsis-2"), "sinopsis2");
                }
                if ($request->file('image-synopsis-3')) {
                    $pathSynopsis3 = $this->storeImagesSynopsis($request->input('id'), "claro-cinema", $request->input('title'), $request->file("image-synopsis-3"), "sinopsis3");
                }

                if ($request->file('image_background_1')) {
                    $pathImageSlider1 = $this->storeImagesSynopsis($request->input('id'), "claro-cinema", $request->input('title'), $request->file("image_background_1"), "slider1");
                }
                if ($request->file('image_background_2')) {
                    $pathImageSlider2 = $this->storeImagesSynopsis($request->input('id'), "claro-cinema", $request->input('title'), $request->file("image_background_2"), "slider2");
                }
                if ($request->file('image_background_3')) {
                    $pathImageSlider3 = $this->storeImagesSynopsis($request->input('id'), "claro-cinema", $request->input('title'), $request->file("image_background_3"), "slider3");
                }
                break;

            default:
                break;
        }
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);

        $response = $client->post(
            $this->url . "program/CaptureImagesForChapter",
            ['body' => json_encode(
                [
                    'usuario_id' => session('id_user'),
                    'chapter_id' => $chapterId,
                    "thumbnail_list_horizontal" => $pathImageHorizontal,
                    "thumbnail_list_vertical" => $pathImageVertical,
                    "image_synopsis" => $pathSynopsis,
                    "image_synopsis_frame_1" => $pathSynopsis1,
                    "image_synopsis_frame_2" => $pathSynopsis2,
                    "image_synopsis_frame_3" => $pathSynopsis3,
                    "image_background_1" => $pathImageSlider1,
                    "image_background_2" => $pathImageSlider2,
                    "image_background_3" => $pathImageSlider3
                ]
            )]
        );


        return $response->getBody()->getContents();
    }
    function homeCarrusel(Request $request)
    {
        $client = new Client();
        $response = $client->get(
            $this->url . "section/getCarruselHome/" . $request->input("landing")
        );

        echo ($response->getBody()->getContents());
    }
}
