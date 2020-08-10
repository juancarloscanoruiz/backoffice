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

            $genres = $respuesta->data->genres;
            $genre = "";
            for ($i = 0; $i < count($genres); $i++) {
                $genre .= "<option  value='" . $genres[$i]->title . "'>" . $genres[$i]->title . "</option>";
            }
            $chapter_id = $respuesta->data->chapter_id;
            $respuestaProgramming = json_decode($responseProgramming->getBody()->getContents());

            if($respuestaProgramming->code == 200){
                $html = "
                <!--Establecer en landing, home, schedule item date time-->
                <section class='edit-program-image'>
                <select
                    class='thumbnail-header1 thumbnail-header w-100 a-text-MBlack h2 d-flex align-items-center justify-content-between position-relative programs-catalogue'
                    title='TÍTULO DEL PROGRAMA' id='prog_titulo_programa' data-live-search='true' data-live-search-placeholder='Agregar título de nuevo programa' name='thumbnail-header1' key='title'>
                </select>

                <img src='".asset('/images/triangle.svg')."' alt='' class='position-absolute dropimg'>
                <!--Imagen del programa--->
                <div class='edit-thumbnail position-relative'>
                    <input type='file' name='image-horizontal' id='edit-image-horizontal' class='input-image-program d-none '>
                    <label for='edit-image-horizontal' class='load-photo'>
                        <img src='".asset('/images/heart-icon.svg')."' class='thumbnail-heart-icon '
                        alt='camera' />
                    <div class='edit-program-camera'>
                        <img src='".asset('/images/synopsis/camara.svg')."' class='load-photo' alt='camera' />
                        <p class='p-2 mb-0 text-center size-thumbnail-text text-plus a-text-bold-brown-two'>
                            472
                            x 245px</p>
                    </div>

                    <img src='".asset('/images/synopsis/image-synopsis-carrusel.jpg')."' alt=''
                        class='thumbnail-image-prev edit-image-program prev-image-program' />
                    </label>
                </div>
                <!--Nombre de la imagen-->
                <p class='a-text-bold-brown-two text-plus mt-4 mb-5'>NombreDeLaImagen</p>
            </section>
                <section class='mb-5'>
                    <div class='row'>
                        <!--Landing-->
                        <div class='col-4 edit-program-data-container edit-data-container-large' chapter_id='".$chapter_id."'>
                            <div class='edit-data-container h-100'>
                                <p class='mb-3 text-plus text-plus text-uppercase a-text-bold-coolgray'>
                                    Establecer
                                    en landing
                                </p>
                                <!--Switch-->
                                <div class='d-flex align-items-center mb-3'>
                                    <input type='radio' name='sino-landing' id='yes-landing' value='1'
                                        class='edit-switch-landing edit-landing-yes' key='in_landing' />
                                    <label for='yes-landing' id='siestado-landing'
                                        class='mb-0 si-estilo cursor-pointer switch-label'>
                                        Sí</label>
                                    <input type='radio' name='sino-landing' id='no-landing-".$chapter_id."' value='0'
                                        class='edit-switch-landing switch-table edit-landing-no' key='in_landing'/>
                                    <label for='no-landing-".$chapter_id."' id='noestado-landing'
                                        class='mb-0 no-estilo cursor-pointer switch-label'>
                                        No</label>
                                </div>
                                <!--Inputs radio-->
                                <div class='d-flex align-items-center mb-3'>
                                    <label class='checkradio d-flex ml-2 mb-0' for='landing-section-2'>
                                        <input type='radio' checked name='dontlose' class='switch-table edit-carrusel-1'
                                            value='2' id='landing-section-2' key='in_landing' />
                                        <span class='checkmark'></span>
                                    </label>
                                    <span class='a-text-bold-silver cursor-pointer ml-2 text-uppercase'>Carrusel
                                        1</span>
                                    <label class='checkradio d-flex ml-2 mb-0' for='landing-section-2-'>
                                        <input type='radio' checked name='dontlose' class='mb-0 switch-table edit-carrusel-2'
                                            value='2' id='landing-section-2' key='in_landing'/>
                                        <span class='checkmark'></span>
                                    </label>
                                    <span class='cursor-pointer a-text-bold-silver ml-2 text-uppercase'>Carrusel
                                        2</span>
                                </div>
                                <div>
                                    <p class='mb-3 text-plus a-text-medium-coolgray text-uppercase'>Fecha</p>
                                    <div class='mb-3 text-center edit-rectangle-small-container py-3'>
                                        <span class='a-text-bold-warm'>Inicio: <input type='text'
                                                class='input-basic edit-program-input a-text-bold-warm edit-program-attribute-text schedule-date-input edit-landing-date-begin'
                                                placeholder='00-00-0000' key='in_landing_begin' /></span>
                                    </div>
                                    <div class='mb-4 text-center edit-rectangle-small-container py-3'>
                                        <span class='a-text-bold-warm'>Fin: <input type='text'
                                                class='input-basic edit-program-input a-text-bold-warm edit-program-attribute-text schedule-date-input edit-landing-date-end' key='in_landing_expiration'
                                                placeholder='00-00-0000'></span>
                                    </div>
                                </div>
                                <p class='mb-3 text-plus a-text-medium-coolgray text-uppercase'>Hora</p>
                                <div class='mb-3 text-center edit-rectangle-small-container py-3'>
                                    <span class='a-text-bold-warm'>Inicio: <input type='text'
                                            class='time-seconds-input input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase edit-landing-time-begin' key='in_landing_begin'
                                            placeholder='00:00:00'></span>
                                </div>
                                <div class='text-center edit-rectangle-small-container py-3'>
                                    <span class='a-text-bold-warm'>Fin: <input type='text'
                                            class='time-seconds-input input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase edit-landing-time-end' key='in_landing_expiration'
                                            placeholder='00:00:00'></span>
                                </div>
                            </div>
                        </div>
                        <!--Home-->
                        <div class='col-4 edit-program-data-container edit-data-container-large' chapter_id='".$chapter_id."'>
                            <div class='edit-data-container h-100'>
                                <p class='mb-3 text-plus text-plus text-uppercase a-text-bold-coolgray'>
                                    Establecer
                                    en home
                                </p>
                                <!--Switch-->
                                <div class='d-flex align-items-center edit-switches-home-container'>
                                    <input type='radio' name='sino-home' id='edit-in-home-yes' value='1'
                                        class='edit-switch-home edit-program-switch edit-in-home-yes' key='in_home'/>
                                    <label for='edit-in-home-yes' id='siestado-landing'
                                        class='si-estilo cursor-pointer mb-0 switch-label'>
                                        Sí</label>
                                    <input type='radio' name='sino-home' id='edit-in-home-no' value='0' checked
                                        class='edit-switch-home edit-program-switch edit-in-home-no' key='in_home'/>
                                    <label for='edit-in-home-no' id='noestado-landing'
                                        class='mb-0 no-estilo cursor-pointer switch-label'>
                                        No</label>
                                </div>
                                <div>
                                    <p class='mb-3 text-plus a-text-medium-coolgray text-uppercase'>Fecha</p>
                                    <div class='mb-3 text-center edit-rectangle-small-container py-3'>
                                        <span class='a-text-bold-warm'>Inicio: <input key='in_home_begin' type='text'
                                                class='input-basic edit-program-input a-text-bold-warm schedule-date-input edit-home-date-begin edit-program-attribute-text'
                                                placeholder='00-00-0000' /></span>
                                    </div>
                                    <div class='mb-4 text-center edit-rectangle-small-container py-3'>
                                        <span class='a-text-bold-warm'>Fin:
                                            <input type='text' key='in_home_expiration'
                                                class='input-basic edit-program-input a-text-bold-warm schedule-date-input edit-home-date-end edit-program-attribute-text'
                                                placeholder='00-00-0000'></span>
                                    </div>
                                </div>
                                <p class='mb-3 text-plus a-text-medium-coolgray text-uppercase'>Hora</p>
                                <div class='mb-3 text-center edit-rectangle-small-container py-3'>
                                    <span class='a-text-bold-warm'>Inicio: <input key='in_home_begin' type='text'
                                            class='time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase edit-home-time-begin'
                                            placeholder='00:00:00'></span>
                                </div>
                                <div class='text-center edit-rectangle-small-container py-3'>
                                    <span class='a-text-bold-warm'>Fin: <input type='text'
                                            class='time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase edit-home-time-end'
                                            placeholder='00:00:00'></span>
                                </div>
                            </div>
                        </div>
                        <div class='col-4 edit-program-data-container edit-data-container-large' chapter_id='".$chapter_id."'>
                            <div class='edit-data-container h-100'>
                                <p
                                    class='edit-date-time-title text-plus text-plus text-uppercase a-text-bold-coolgray'>
                                    Schedule Item Date time
                                </p>
                                <div>
                                    <p class='mb-3 text-plus a-text-medium-coolgray text-uppercase'>Fecha</p>
                                    <div class='mb-3 text-center edit-rectangle-small-container py-3'>
                                        <span class='a-text-bold-warm'>
                                            <img src='".asset('images/calendario.svg')."' alt='' class='mr-3'>
                                            <input key='' type=' text'
                                                class='input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date'
                                                placeholder='00-00-0000'></span>
                                    </div>
                                </div>
                                <p class='mb-3 text-plus a-text-medium-coolgray text-uppercase'>Hora</p>
                                <div class='text-center edit-rectangle-small-container py-3'>
                                    <span class='a-text-bold-warm'><img src='{{ asset('images/reloj.svg') }}'
                                            alt='' class='mr-3'><input type='text'
                                            class='time-seconds-input input-basic edit-program-input a-text-bold-warm edit-schedule-item-time text-uppercase'
                                            placeholder='00:00:00'></span>
                                </div>
                            </div>
                        </div> 
                    </div>
                </section>
                <!--Sinopsis-->
                <section class='mb-5 edit-program-data-container' chapter_id='".$chapter_id."'>
                    <h3 class='h3 text-uppercase a-text-bold-brown-two mb-3'>Sinopsis</h3>
                    <!--Textarea-->
                    <textarea key='synopsis' class='edit-synopsis edit-program-textarea edit-program-attribute-text a-text-semibold-warmgrey p-3' id='prog_sinopsis'></textarea>
                </section>
                <section class='mb-3'>
                    <div class='row'>
                        <!--Program episode season-->
                        <div class='col-4 edit-program-data-container' chapter_id='".$chapter_id."'>
                            <div class='edit-data-container'>
                                <p class='mb-3 text-plus text-uppercase a-text-bold-brown-two'>Program episode
                                    season
                                </p>
                                <div class='mb-3 text-center edit-rectangle-small-container py-3'>
                                    <input type='text' key='season'
                                        class='edit-program-season text-center input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase'
                                        placeholder='00'>
                                </div>
                            </div>
                        </div>
                        <!--Program episode number-->
                        <div class='col-4 edit-program-data-container' chapter_id='".$chapter_id."'>
                            <div class='edit-data-container'>
                                <p class='mb-3 text-plus text-uppercase a-text-bold-brown-two'>Program episode
                                    number
                                </p>
                                <div class='mb-3 text-center edit-rectangle-small-container py-3'>
                                    <input type='text' key='program_episode_number'
                                        class='text-center edit-episode-number input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase'
                                        placeholder='000'>
                                </div>
                            </div>
                        </div>
                        <!--Program year produced-->
                        <div class='col-4 edit-program-data-container' chapter_id='".$chapter_id."'>
                            <div class='edit-data-container'>
                                <p class='mb-3 text-plus text-uppercase a-text-bold-brown-two'>Program year
                                    produced
                                </p>
                                <div class='mb-3 text-center edit-rectangle-small-container py-3'>
                                    <input type='text' key='program_year_produced'
                                        class='year-input text-center edit-year-produced input-basic edit-program-attribute-text edit-program-input a-text-bold-warm text-uppercase'
                                        placeholder='YYYY'>
                                </div>
                            </div>
                        </div> 
                    </div>
                </section>
                <section class='mb-3'>
                    <div class='row'>
                        <!--Program title alternate-->
                        <div class='col-4 edit-program-data-container' chapter_id='".$chapter_id."'>
                            <div class='edit-data-container'>
                                <p class='mb-3 text-plus text-uppercase a-text-bold-brown-two'>Program title
                                    alternate
                                </p>
                                <div class='mb-3 edit-rectangle-container p-3'>
                                    <input type='text' key='subtitle'
                                        class='w-100 edit-program-subtitle input-basic edit-program-input edit-program-attribute-text a-text-bold-warm'
                                        placeholder='Program Title Alternate'>
                                </div>
                            </div>
                        </div>
                        <!--Program genre list-->
                        <div class='col-4 edit-program-data-container' chapter_id='".$chapter_id."' id='edit-genre-container'>
                            <div class='edit-data-container'>
                                <p class='mb-3 text-plus text-uppercase a-text-bold-brown-two'>Program genre
                                    list
                                </p>
                                <div class='mb-3 edit-rectangle-container '>
                                    <select
                                        class='list1 mb-0 a-text-regular-brownishtwo text-normal show-tick' id='edit-program-genres'
                                        title='Genere list' multiple data-live-search='true'
                                        data-live-search-placeholder='Buscar' data-header='Program List'
                                        data-dropup-auto='false' key='genre'>
                                        $genre
                                    </select>
                                </div>
                            </div>
                        </div>
                        <!---->
                        <div class='col-4 edit-program-data-container' chapter_id='".$chapter_id."'>
                            <div class='edit-data-container'>
                                <p class='mb-3 text-plus text-uppercase a-text-bold-brown-two'>Schedule item
                                    rating
                                    code
                                </p>
                                <div class='mb-3 text-center edit-rectangle-small-container py-3'>
                                    <input type='text' key='rating'
                                        class='text-center edit-program-attribute-text input-basic edit-program-input a-text-bold-warm text-uppercase edit-rating-code'
                                        placeholder='PG-00'>
                                </div>
                            </div>
                        </div> 
                    </div>
                </section>
                <section class='mb-3'>
                    <div class='row'>
                        <!--Schedule item log date-->
                        <div class='col-4 edit-program-data-container' chapter_id='".$chapter_id."'>
                            <div class='edit-data-container h-100'>
                                <p class='mb-3 text-plus text-uppercase a-text-bold-brown-two'>Schedule item log
                                    date
                                </p>
                                <p class='a-text-medium-brown-two text-plus text-uppercase'>Fecha</p>
                                <div
                                    class='mb-3 text-center edit-rectangle-small-container py-3 d-flex align-items-center justify-content-center'>
                                    <img src='".asset('images/calendario.svg')."' alt='' class='mr-3'>
                                    <input type='text' key='day'
                                        class='edit-schedule-date edit-program-attribute-text schedule-date-input input-basic edit-program-input a-text-bold-warm text-uppercase'
                                        placeholder='DD:MM:YY'>
                                </div>
                            </div>
                        </div>
                        <div class='col-4 edit-program-data-container' chapter_id='".$chapter_id."'>
                            <div class='edit-data-container h-100'>
                                <p class='mb-3 text-plus text-uppercase a-text-bold-brown-two'>Schedule item log
                                    time (gmt)
                                </p>
                                <p class='a-text-medium-brown-two text-plus text-uppercase'>HORA</p>
                                <div
                                    class='mb-3 text-center edit-rectangle-small-container py-3 d-flex align-items-center justify-content-center'>
                                    <img src='".asset('images/reloj.svg')."' alt='' class='mr-3'>
                                    <input type='text' key='programing'
                                        class='edit-schedule-item-time edit-program-attribute-text time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase'
                                        placeholder='00:00:00'>
                                </div>
                            </div>
                        </div>
                        <div class='col-4 edit-program-data-container' chapter_id='".$chapter_id."'>
                            <div class='edit-data-container'>
                                <p class='mb-3 text-plus text-uppercase a-text-bold-brown-two'>estimated schedule item duration
                                </p>
                                <p class='a-text-medium-brown-two text-plus text-uppercase'>HORA</p>
                                <div
                                    class='mb-3 text-center edit-rectangle-small-container py-3 d-flex align-items-center justify-content-center'>
                                    <img src='".asset('images/reloj.svg')."' alt='' class='mr-3'>
                                    <input type='text' key='duration'
                                        class='edit-program-duration edit-program-attribute-text time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase'
                                        placeholder='00:00:00'>
                                </div>
                            </div>
                        </div> 
                    </div>
                </section>
                <section class='mb-5'>
                    <div class='row'>
                        <!--Schedule item log date-->
                        <div class='col-4 edit-program-data-container' chapter_id='".$chapter_id."'>
                            <div class='edit-data-container d-flex justify-content-between'>
                                <p class='mb-3 text-plus text-uppercase a-text-bold-brown-two'>Schedule version
                                    subbed
                                </p>
                                <div class='d-flex'>
                                    <input type='radio' name='subbed' id='yes-subbed' value='1'
                                        class='edit-program-switch switch-landing edit-subbed-yes' key='subbed'/>
                                    <label for='yes-subbed' id='siestado-landing'
                                        class='si-estilo cursor-pointer mb-0 switch-label'>
                                        Sí</label>
                                    <input type='radio' name='subbed' id='no-dubbed' value='0' checked
                                        class='edit-program-switch switch-landing switch-table edit-subbed-no' key='subbed'/>
                                    <label for='no-dubbed' id='noestado-landing'
                                        class='mb-0 no-estilo cursor-pointer switch-label'>
                                        No</label>
                                </div>

                            </div>
                        </div>
                        <div class='col-4 edit-program-data-container' chapter_id='".$chapter_id."'>
                            <div class='edit-data-container d-flex justify-content-between'>
                                <p class='mb-3 text-plus text-uppercase a-text-bold-brown-two'>Schedule version
                                    dubbed
                                </p>
                                <div class='d-flex'>
                                    <input type='radio' name='dubbed' id='yes-dubbed' value='1'
                                        class='edit-program-switch switch-landing edit-dubbed-yes' key='dubbed'/>
                                    <label for='yes-dubbed' id='siestado-landing'
                                        class='si-estilo cursor-pointer mb-0 switch-label'>
                                        Sí</label>
                                    <input type='radio' name='dubbed' id='no-dubbed' value='0' checked
                                        class='edit-program-switch switch-landing switch-table edit-dubbed-no' key='dubbed'/>
                                    <label for='no-dubbed' id='noestado-landing'
                                        class='mb-0 no-estilo cursor-pointer switch-label'>
                                        No</label>
                                </div>

                            </div>
                        </div>
                        <div class='col-4 edit-program-data-container' chapter_id='".$chapter_id."'>
                            <div class='edit-data-container d-flex justify-content-between'>
                                <p class='mb-3 text-plus text-uppercase a-text-bold-brown-two'>Audio 5.1<br>
                                    available
                                </p>
                                <div class='d-flex'>
                                    <input type='radio' name='audio5' id='yes-audio5' value='1'
                                        class='edit-program-switch switch-landing edit-audio5-yes' key='audio5'/>
                                    <label for='yes-audio5' id='siestado-landing'
                                        class='si-estilo cursor-pointer mb-0 switch-label'>
                                        Sí</label>
                                    <input type='radio' name='audio5' id='no-audio5' value='0' checked
                                        class='edit-program-switch switch-landing switch-table edit-audio5-no' key='audio5'/>
                                    <label for='no-audio5' id='noestado-landing'
                                        class='mb-0 no-estilo cursor-pointer switch-label'>
                                        No</label>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>";
                echo ($html);
                //End segunda petición
            }
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
}
