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
        $data['edited'] = $this->getSectionBack('Canal Claro');

        return view('admin-site.landings.apro-claro', $data);
    }

    public function showConcertChannelLanding()
    {
        $data['edited'] = $this->getSectionBack('Concert Channel');

        return view('admin-site.landings.apro-concert', $data);
    }

    public function showClaroCinemaLanding()
    {
        $data['edited'] = $this->getSectionBack('Claro Cinema');

        return view('admin-site.landings.claro-cinema', $data);
    }

    public function showProgramacionLanding()
    {
        $data['edited'] = $this->getSectionBack('Programation');

        return view('admin-site.landings.programacion', $data);
    }

    public function showHomeLanding()
    {
        $data['edited'] = $this->getSectionBack('Home');

        return view('admin-site.landings.home', $data);
        // return view('partials.adm-CN.grillas.grilla-home');

    }
    public function showFooterLanding()
    {
        $data['edited'] = $this->getSectionBack('Footer');
        return view('admin-site.landings.footer', $data);
    }
    public function showSinopsisLanding()
    {
        return view('admin-site.landings.sinopsis');
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
    public function getSectionBack($landing)
    {
        $client = new Client();
        $response = $client->get(
            $this->url . "sectionBack/GetLastEdition/" . $landing
        );

        $respuesta =  json_decode($response->getBody());
        try {
            if ($respuesta->code == 200) {
                $respuesta = [
                    "last_edition" => $respuesta->data->last_edition,
                    "edited_for" => $respuesta->data->edited_for,
                    "rol" => $respuesta->data->rol,
                ];
                return $respuesta;
            } else {
                $respuesta = [
                    "last_edition" => "",
                    "edited_for" => "",
                    "rol" => "",
                ];
                return $respuesta;
            }
        } catch (\Throwable $th) {
            //throw $th;
        }
    }
    public function captureImagesForChapter(Request $request)
    {
        $name = str_replace(" ", "", $request->input('name'));
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);

        $pathImageVertical = $this->storeImages($name, $request->file('thumbnail_list_vertical'), "public/carrusel-home/vertical");

        $response = $client->post(
            $this->url . "program/CaptureImagesForChapter",
            ['body' => json_encode(
                [
                    'usuario_id' => session('id_user'),
                    'chapter_id' => $request->input('chapter_id'),
                    "thumbnail_list_horizontal" => "",
                    "thumbnail_list_vertical" => "$pathImageVertical",
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

    public function getContentHome()
    {
        $client = new Client();
        $response = $client->get(
            $this->url . "section/home"
        );

        echo ($response->getBody()->getContents());
    }

    public function editHomeHeader(Request $request)
    {

        $counter = 1;
        $images = [];
        $positions = explode(",", $request->input("positions"));
        $files = $request->file();
        foreach ($files as $file) {
            $image = $this->storeImages("imageMobile" . $counter, $file, "public/home/banner");
            $counter++;
            array_push($images, $image);
        }


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
                    "subtitle" => $request->input('subtitle'),
                    "images" => $images,
                    "positions" => $positions
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
            $this->url . "program/actual_programing_programation/gmt&" . $request->input("date") . '&0'
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


    function editBlockSynopsis(Request $request)
    {
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

    function editHeaderHome(Request $request)
    {
        $folderLanding = "";
        switch ($request->input("landing")) {
            case 'Canal Claro':
                $folderLanding = "canal-claro";
                $landing = 'canal_claro';
                break;
            case 'Concert Channel':
                $folderLanding = "concert-channel";
                $landing = 'concert_channel';
                break;
            case 'Claro Cinema':
                $folderLanding = "claro-cinema";
                $landing = 'claro_cinema';
                break;

            default:
                break;
        }
        $client = new Client(['headers' => ['Content-Type' => 'application/json']]);
        $logo = "";
        if ($request->file('logo')) {
            $logo = $this->storeImages("logo-home", $request->file('logo'), "public/" . $folderLanding . "/logos");
        }
        $response = $client->post(
            $this->url . "section/editBlockChannelHome",
            ['body' => json_encode(
                [
                    "usuario_id" => session('id_user'),
                    "channel" => $landing,
                    "subtitle" => $request->input('subtitle'),
                    "icon" => $logo,
                    "button_title" => "",
                    "button_url" => $request->input('link'),
                    "legend" => "",
                    "inicio" => "",
                    "fin" => ""
                ]
            )]
        );
        echo ($response->getBody()->getContents());
    }

    function getContentFooter()
    {
        $client = new Client();
        $response = $client->get(
            $this->url . "section/footer"
        );
        return $response->getBody()->getContents();
    }

    function updateInfoFooter(Request $request)
    {
        $value = "";
        switch ($request->input('key')) {
            case 'image_right':
                $value = $this->storeImages("imageRight", $request->file('image'), "public/footer/imageRight");
                break;
            case 'image_left':
                $value = $this->storeImages("imageLeft", $request->file('image'), "public/footer/imageLeft");
                break;
            case 'facebook_canal_claro_icon':
                $value = $this->storeImages("facebookCanalClaroIcon", $request->file('image'), "public/footer/canal-claro/icons");
                break;
            case 'instagram_canal_claro_icon':
                $value = $this->storeImages("instagramCanalClaroIcon", $request->file('image'), "public/footer/canal-claro/icons");
                break;
            case 'twitter_canal_claro_icon':
                $value = $this->storeImages("twitterCanalClaroIcon", $request->file('image'), "public/footer/canal-claro/icons");
                break;
            case 'youtube_canal_claro_icon':
                $value = $this->storeImages("youtubeCanalClaroIcon", $request->file('image'), "public/footer/canal-claro/icons");
                break;
            case 'facebook_concert_channel_icon':
                $value = $this->storeImages("facebookConcertChannelIcon", $request->file('image'), "public/footer/concert-channel/icons");
                break;
            case 'twitter_concert_channel_icon':
                $value = $this->storeImages("twitterConcertChannelIcon", $request->file('image'), "public/footer/concert-channel/icons");
                break;
            case 'about_icon':
                $value = $this->storeImages("aboutIcon", $request->file('image'), "public/footer/");
                break;
            case 'menu_2_opcion_1_icon':
                $value = $this->storeImages("option1", $request->file('image'), "public/footer/menu2/");
                break;
            case 'menu_2_opcion_2_icon':
                $value = $this->storeImages("option2", $request->file('image'), "public/footer/menu2/");
                break;
            case 'menu_2_opcion_3_icon':
                $value = $this->storeImages("option3", $request->file('image'), "public/footer/menu2/");
                break;
            case 'menu_2_opcion_4_icon':
                $value = $this->storeImages("option4", $request->file('image'), "public/footer/menu2/");
                break;
            case 'menu_2_opcion_5_icon':
                $value = $this->storeImages("option5", $request->file('image'), "public/footer/menu2/");
                break;
            case 'menu_2_opcion_6_icon':
                $value = $this->storeImages("option6", $request->file('image'), "public/footer/menu2/");
                break;
            case 'menu_2_opcion_7_icon':
                $value = $this->storeImages("option7", $request->file('image'), "public/footer/menu2/");
                break;
            default:
                $value = $request->input('text');
                break;
        }

        $client = new Client(['headers' => ['Content-Type' => 'application/json']]);
        $response = $client->post(
            $this->url . "section/editFooter",
            ['body' => json_encode(
                [
                    "usuario_id" => session('id_user'),
                    "key" => $request->input('key'),
                    "value" => $value,
                ]
            )]
        );
        return $response->getBody()->getContents();
    }

    function getContentRights()
    {
        $client = new Client();
        $response = $client->get(
            $this->url . "section/about"
        );
        return $response->getBody()->getContents();
    }

    function updateInfoTermsAndPrivacy(Request $request)
    {
        $client = new Client(['headers' => ['Content-Type' => 'application/json']]);
        $response = $client->post(
            $this->url . "section/editAbout",
            ['body' => json_encode(
                [
                    "usuario_id" => session('id_user'),
                    "title" => $request->input('title'),
                    "text" => $request->input("text"),
                    "landing" => $request->input('landing'),
                ]
            )]
        );
        return $response->getBody()->getContents();
    }

    public function setImgCarruselHome(Request $request)
    {
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);

        switch ($request->input('landing')) {
            case 'canal_claro':
                $img = $this->storeImages($request->input('chapter_id'), $request->file('thumbnail_list_vertical'), "public/canal-claro/section-home-vertical");
                break;
            case 'concert_channel':
                $img = $this->storeImages($request->input('chapter_id'), $request->file('thumbnail_list_vertical'), "public/concert-channel/section-home-vertical");
                break;
            case 'claro_cinema':
                $img = $this->storeImages($request->input('chapter_id'), $request->file('thumbnail_list_vertical'), "public/claro-cinema/section-home-vertical");
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
                    "thumbnail_list_horizontal" => "",
                    "thumbnail_list_vertical" => $img,
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

        return $response->getBody()->getContents();
    }

    function getSynopsisTable()
    {
        $date = date('y-m-d');
        $client = new Client();
        $response = $client->get(
            $this->url . "program/getSinospsisTable/" . $date
        );
        echo ($response->getBody()->getContents());
    }
}
