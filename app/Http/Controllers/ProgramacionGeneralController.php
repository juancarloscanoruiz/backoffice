<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Shared\Date;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Routing\UrlGenerator;


class ProgramacionGeneralController extends Controller
{
    private $url = "http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/";

    //MÉTODOS PARA GESTION DE PROGRAMACION GENERAL DEL BACKOFFICE DE CLARO NETWORKS

    public function onlyday(Request $request)
    {

        //se obtine la version que se peuda editar
        //si el usuario tiene una version se muestra si no se muestra la version maestra del dia
        //en caso de que ninguna tenga datos se mostrara la maestra pero cn valores vacios, es decir al grilla aparecera en blanco
        //el dia en que inicia la version maestra es:
        //$hoy = '2020-07-02';
        try {
            $firstDay = date('Y-m-d');
            $usuario_id = session('id_user');
            if (!isset($usuario_id)) {
                $usuario_id = -1;
            }
            $client = new Client();
            $response = $client->get(
                $this->url . "program/getProgramingGrillFirst/" . $firstDay . "&Claro Canal&" . $usuario_id
            );

            $respuesta =  json_decode($response->getBody());

            $firstDate = $this->getDateCalendar($respuesta->data->first_day_calendar);
            $lastDate = $this->getDateCalendar($respuesta->data->last_day_calendar);
            $genres = $respuesta->data->genres;
            //var_dump($respuesta->data->grilla);
            if ($respuesta->code == 200) {
                return view('partials.backs.back-progra-claro', compact("respuesta", "firstDate", "lastDate", "genres"));
            } else {
                return back()->with("error", "Por el momento no podemos obtneer informacion intenta mas tarde");
            };
        } catch (\GuzzleHttp\Exception\ClientException $e) {

            $response = $e->getResponse();
            if ($response && $response->getStatusCode() == 406 || $response && $response->getStatusCode() == 404) {
                // Do something with a 406 response here (as an example).
                return redirect('/');
            }
        }
    }


    public function getDateCalendar($date)
    {
        $dateArray = explode("-", $date);

        switch ($dateArray[1]) {
            case '01':
                $nameMonth = "Ene";
                break;
            case '02':
                $nameMonth = "Feb";
                break;
            case '03':
                $nameMonth = "Mar";
                break;
            case '04':
                $nameMonth = "Abr";
                break;
            case '05':
                $nameMonth = "May";
                break;
            case '06':
                $nameMonth = "Jun";
                break;
            case '07':
                $nameMonth = "Jul";
                break;
            case '08':
                $nameMonth = "Ago";
                break;
            case '09':
                $nameMonth = "Sep";
                break;
            case '10':
                $nameMonth = "Oct";
                break;
            case '11':
                $nameMonth = "Nov";
                break;
            case '12':
                $nameMonth = "Dic";
                break;
            default:
                # code...
                break;
        }
        $finalDate = $dateArray[2] . " " . $nameMonth . " " . $dateArray[0];
        return $finalDate;
    }

    public function index(Request $request)
    {
        //se obtine la version que se peuda editar
        //si el usuario tiene una version se muestra si no se muestra la version maestra del dia
        //en caso de que ninguna tenga datos se mostrara la maestra pero cn valores vacios, es decir al grilla aparecera en blanco
        //el dia en que inicia la version maestra es:
        //$hoy = '2020-07-02';
        try {
            $firstDay = date('Y-m-d');
            $usuario_id = session('id_user');
            if (!isset($usuario_id)) {
                $usuario_id = -1;
            }
            $client = new Client();
            $response = $client->get(
                $this->url . "program/getProgramingGrillFirst/" . $firstDay . "&Claro Canal&" . $usuario_id
            );

            $respuesta =  json_decode($response->getBody());

            $firstDate = $this->getDateCalendar($respuesta->data->first_day_calendar);
            $lastDate = $this->getDateCalendar($respuesta->data->last_day_calendar);
            $genres = $respuesta->data->genres;
            //var_dump($respuesta->data->grilla);
            if ($respuesta->code == 200) {
                return view('admin-site.Menu', compact("respuesta", "firstDate", "lastDate", "genres"));
            } else {
                return back()->with("error", "Por el momento no podemos obtneer informacion intenta mas tarde");
            };
        } catch (\GuzzleHttp\Exception\ClientException $e) {

            $response = $e->getResponse();
            if ($response && $response->getStatusCode() == 406 || $response && $response->getStatusCode() == 404) {
                // Do something with a 406 response here (as an example).
                return redirect('/');
            }
        }
    }

    public function getGrilla(Request $request)
    {
        $firstDay = "";
        $lastDay = "";
        if ($request->input('last-day') && $request->input('first-day')) {
            $firstDay = $request->input('last-day');
            $lastDay = $request->input('first-day');
        } else {
            $firstDay = date('Y-m-d');
            $lastDay = date('Y-m-d');
        }
        //se obtine la version que se peuda editar
        //si el usuario tiene una version se muestra si no se muestra la version maestra del dia
        //en caso de que ninguna tenga datos se mostrara la maestra pero cn valores vacios, es decir al grilla aparecera en blanco
        //el dia en que inicia la version maestra es:

        $hoy = date('Y-m-d');
        $client = new Client();
        $response = $client->get(
            $this->url . "program/VersionEditable/" . $hoy . "&Claro Canal&" . session('id_user')
        );
        $respuesta =  json_decode($response->getBody());

        if ($respuesta->code == 200) {
            return view('layaout.adm-CN.Menu')->with('respuesta', $respuesta);
        } else {
            return back()->with("error", "Por el momento no podemos obtneer informacion intenta mas tarde");
        };
    }

    public function getImages($idimages)
    {
        $client = new Client();
        $response = $client->get(
            $this->url . "program/getImagesChapter/" . $idimages
        );
        $responseArray = json_decode($response->getBody()->getContents(), true);
        //var_dump($responseArray);
        if ($responseArray["code"] == 200) {
            return view('partials.adm-CN.image')->with('response', $responseArray["data"]);
        } else {
            return $responseArray;
        }
    }
    public function captureExcel(Request $request)
    {
        //obtnemos el archvio
        $new_file = $_FILES['file'];
        $data = $request->datos;
        $ruta = $new_file['tmp_name'];
        $documento = IOFactory::load($ruta);
        #iterar por hojas
        $hojaActual = $documento->getSheet(0);

        $fecha_del_documento = $hojaActual->getCellByColumnAndRow(9, 3);
        $fecha_del_documento = $fecha_del_documento->getValue();

        $objFecha = Date::excelToDateTimeObject($fecha_del_documento);
        $cadena_nuevo_formato =  date_format($objFecha, 'Y-m-d');

        $fecha_del_documento = $cadena_nuevo_formato;
        $fecha_actual = date('Y-m-d');
        if ($fecha_del_documento < $fecha_actual) {
            $respuesta = [
                "code" => 400,
                "message" => "La programacion Es de un dia enterior",
                "data" => -1
            ];

            echo (json_encode($respuesta));
        } else {
            # obtener conteo e iterar
            $totalDeHojas = $documento->getSheetCount();

            $programas = [];
            for ($indiceHoja = 0; $indiceHoja < $totalDeHojas; $indiceHoja++) {
                $hojaActual = $documento->getSheet($indiceHoja);
                # Calcular el máximo valor de la fila
                $numeroMayorDeFila = $hojaActual->getHighestRow(); // Numérico
                $letraMayorDeColumna = $hojaActual->getHighestColumn(); // Letra
                # Convertir la letra al número de columna correspondiente
                $numeroMayorDeColumna = \PhpOffice\PhpSpreadsheet\Cell\Coordinate::columnIndexFromString($letraMayorDeColumna);
                # Iterar filas con ciclo for e índices
                for ($indiceFila = 3; $indiceFila <= $numeroMayorDeFila; $indiceFila++) {
                    # declaramos un arreglo que contendra los datos
                    $programa = [];
                    for ($indiceColumna = 1; $indiceColumna <= $numeroMayorDeColumna; $indiceColumna++) {
                        # Obtener celda por columna y fila
                        $celda = $hojaActual->getCellByColumnAndRow($indiceColumna, $indiceFila);
                        # Y ahora que tenemos una celda trabajamos con ella
                        $value = $celda->getValue();
                        switch ($indiceColumna) {
                            case 1:
                                # Titulo del programa...
                                $programa['Program_Title'] = $value;
                                break;
                            case 2:
                                # code...
                                $programa['Programar_publicacion'] = $value;
                                break;
                            case 3:
                                # code...
                                $programa['Periodicidad'] = $value;
                                break;
                            case 4:
                                # code...
                                $programa['Establecer_home'] = $value;
                                break;
                            case 5:
                                # code...
                                try {
                                    $objFecha = Date::excelToDateTimeObject($value);
                                    $cadena_nuevo_formato =  date_format($objFecha, 'Y-m-d');
                                } catch (\Throwable $th) {
                                    $cadena_nuevo_formato = "2020-01-01";
                                }

                                $programa['Vigencia_home'] = $cadena_nuevo_formato;
                                break;
                            case 6:
                                # code...
                                $programa['Establecer_landing'] = $value;
                                break;
                            case 7:
                                # code...
                                try {
                                    $objFecha = Date::excelToDateTimeObject($value);
                                    $cadena_nuevo_formato =  date_format($objFecha, 'Y-m-d');
                                } catch (\Throwable $th) {
                                    $cadena_nuevo_formato = "2020-01-01";
                                }
                                $programa['Vigencia_landing'] = $cadena_nuevo_formato;
                                break;
                            case 8:
                                # code...
                                $objFecha = Date::excelToDateTimeObject($value);
                                $cadena_nuevo_formato =  date_format($objFecha, 'Y-m-d H:i:s');


                                $programa['Schedule_Item_Date_Time'] = $cadena_nuevo_formato;
                                break;
                            case 9:
                                # code...
                                $objFecha = Date::excelToDateTimeObject($value);
                                $cadena_nuevo_formato =  date_format($objFecha, 'Y-m-d');

                                $programa['Schedule_Item_Long_Date'] = $cadena_nuevo_formato;

                                break;
                            case 10:
                                # code...
                                $objFecha = Date::excelToDateTimeObject($value);
                                $cadena_nuevo_formato =  date_format($objFecha, 'H:i:s');

                                $programa['Schedule_Item_Long_Time'] = $cadena_nuevo_formato;
                                break;
                            case 11:
                                # code...
                                $objFecha = Date::excelToDateTimeObject($value);
                                $cadena_nuevo_formato =  date_format($objFecha, 'H:i:s');
                                $programa['Estimed_Schedule_Item_Duration'] = $cadena_nuevo_formato;
                                break;
                            case 12:
                                # code...
                                $programa['Program_Year_Produced'] = $value;
                                break;
                            case 13:
                                # code...
                                $programa['Program_Genre_List'] = $value;
                                break;
                            case 14:
                                # code...
                                $programa['Program_Title_Alternate'] = $value;
                                break;
                            case 15:
                                # code...
                                $programa['Program_Episode_Season'] = $value;
                                break;
                            case 16:
                                # code...
                                $programa['Program_Episode_Number'] = $value;
                                break;
                            case 17:
                                # code...
                                $programa['Synopsis'] = $value;
                                break;
                            case 18:
                                # code...
                                $programa['Schedule_Item_Rating_Code'] = $value;
                                break;
                            case 19:
                                # code...
                                $programa['Scheduled_Version_SUBBED'] = $value;
                                break;
                            case 20:
                                # code...
                                $programa['Scheduled_Version_DUBBED'] = $value;
                                break;
                            case 21:
                                # code...
                                $programa['Audio_5.1_avalieble'] = $value;
                                break;
                            default:
                                # code...
                                break;
                        }
                    }
                    $programas[$indiceFila - 3] = $programa;
                }
            }

            #ahora checamos si este dia ya tiene programación
            $data = json_decode($data);
            $client = new Client([
                'headers' => ['Content-Type' => 'application/json']
            ]);
            $response = $client->post(
                $this->url . "program/chekChapterExist",
                ['body' => json_encode(
                    [
                        'usuario_id' =>  session('id_user'),
                        'landing_id' => $data->landing_id,
                        'day' => $fecha_del_documento,
                        'version_id' => $data->version_id,
                        "programas" => $programas
                    ]
                )]
            );
            $respuesta =  json_decode($response->getBody());
            #vemos que es lo que dice la API
            if ($respuesta->data == 1) {
                #tiene progrmacion este dia entonces mandamos el modal

                $respuesta->landing_id = $data->landing_id;
                $respuesta->version_id = $data->version_id;
                $respuesta->version_number = $data->version_number;
                $respuesta->action_date = $fecha_del_documento;

                $respuesta->programas = $programas;

                echo (json_encode($respuesta));
            } else {
                //hacemos la llamad


                $client = new Client([
                    'headers' => ['Content-Type' => 'application/json']
                ]);
                $response = $client->post(
                    $this->url . "program/CapturePrograming",
                    ['body' => json_encode(
                        [
                            'usuario_id' => $data->usuario_id,
                            'landing_id' => $data->landing_id,
                            'version_id' => $data->version_id,
                            'version_number' => $data->version_number,
                            'programs' => $programas
                        ]
                    )]
                );
                $respuesta =  $response->getBody();
                echo ($respuesta);
            }
        }
    }
    public function changePrograming(Request $request)
    {
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);
        $response = $client->post(
            $this->url . "program/changePrograming",
            ['body' => json_encode(
                [
                    'usuario_id' => session('id_user'),
                    'landing_id' => $request->landing_id,
                    'version_id' => $request->version_id,
                    'version_number' => $request->version_number,
                    'day' => $request->action_date,
                ]
            )]
        );
        $respuesta =  $response->getBody();
        echo ($respuesta);
    }
    public function addPrograming(Request $request)
    {
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);
        $response = $client->post(
            $this->url . "program/CapturePrograming",
            ['body' => json_encode(
                [
                    'usuario_id' => session('id_user'),
                    'landing_id' => $request->landing_id,
                    'version_id' => $request->version_id,
                    'version_number' => $request->version_number,
                    'programs' => $request->programas
                ]
            )]
        );
        $respuesta =  $response->getBody();
        echo ($respuesta);
    }
    public function cancelPrograming(Request $request)
    {
        $client = new Client();
        $response = $client->get(
            $this->url . "program/deleteProgramationTemporal/" . $request->version_id
        );
        $respuesta =  json_decode($response->getBody());

        echo ($respuesta);
    }
    //hacemos la llamada a la API

    public function newRow(Request $request)
    {
        //Obtenemos los datos de la vista en especifico
        $data = $request->all();
        //solicitamos a la api para obtener el id temporal del nuevo programa
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);
        $response = $client->post(
            $this->url . "program/newEntryGrill",
            ['body' => json_encode(
                [
                    'usuario_id' =>  session('id_user'),
                    'landing' => $request->landing,
                    'day' => date('Y-m-d'),
                ]
            )]
        );
        $respuesta =  json_decode($response->getBody());
        if ($respuesta->code == 200) {
            //var_dump($respuesta);
            $genres = $respuesta->data->genres;
            $genre = "";
            for ($i = 0; $i < count($genres); $i++) {
                $genre .= "<option  class='a-text-regular-brownishtwo text-normal'>" . $genres[$i]->title . "</option>";
            }
            $chapter_id = $respuesta->data->chapter_id;
            $html = "
            <div class='contenedor-fila' id='programacion-claro-$chapter_id'>
            <!--ACCIONES-->
            <div class='contenedor-columna selectable-column centro cursor-pointer' id='entrada-$chapter_id' rel='acciones'><img src='./images/basic-icons/pencil-edit-teal.svg' class='mr-3 edit-row-pencil' alt='pencil'><img src='./images/basic-icons/trash.svg' class='trash-row' alt='trash' chapter_id='" . $chapter_id . "'></div>
            <!--ESTADO-->
            <div class='contenedor-columna centro editable-column cursor-pointer' id='estado-$chapter_id'>
                <span class='program-original'></span>
            </div>
            <!--ALERTA-->
            <div class='contenedor-columna centro editable-column' id='alerta-$chapter_id'></div>
            <!--PROGRAM TITLE ORIGINAL-->
            <div class='contenedor-columna selectable-column centro centro editable-column' chapter_id='" . $chapter_id . "' key='title' rel='program-title-original' id='title-$chapter_id'>
                <textarea id='program-title' name='' class='editable-attribute program-original edit-cell' placeholder='Título original...'></textarea>
            </div>
            <!--ESTABLECER EN LANDING-->
            <div class='contenedor-columna selectable-column centro editable-column' rel='establecer-landing' chapter_id='" . $chapter_id . "' key='in_landing'>
                <!--Si no han elegido una sección del landing, entonces las opción
                por defecto es 'No'
                -->
                        <div class='yes-no mt-3'>
                            <input type='radio' name='sino-landing-$chapter_id' id='yes-landing-$chapter_id' value='1' class='switch-landing'>
                            <label for='yes-landing-$chapter_id' id='siestado-landing-$chapter_id' class='si-estilo cursor-pointer switch-label'>
                                Sí</label>
                            <input type='radio' name='sino-landing-$chapter_id' id='no-landing-$chapter_id' value='0' checked='' class='switch-landing switch-table'>
                            <label for='no-landing-$chapter_id' id='noestado-landing-$chapter_id' class='no-estilo cursor-pointer switch-label'>
                                No</label>
                        </div>
                        <div class='establecer-options pointer-none'>
                            <div class=' d-flex mt-2 ml-2 pt-2'>
                                <label class='checkradio d-flex  ml-2'>
                                    <input type='radio' name='dontlose' class='switch-table' value='1'>
                                    <span class='checkmark'></span>
                                </label>
                                <span class='cursor-pointer a-text-medium-warmgrey ml-2'>Tienes que verlo</span>
                            </div>
                            <div class='d-flex ml-2 pt-2 pb-2'>
                                <label class='checkradio d-flex ml-2'>
                                    <input type='radio' name='dontlose' class='switch-table' value='2'>
                                    <span class='checkmark'></span>
                                </label>
                                <span class='cursor-pointer a-text-medium-warmgrey ml-2'>Contenido exclusivo</span>
                            </div>
                        </div>
                    </div>
            <!--Programar publicacición landing-->
            <div class='contenedor-columna selectable-column centro editable-column' rel='landing-programar' chapter_id='" . $chapter_id . "' key='in_landing_publicacion'>
                    <div class='programar-content pointer-none'>
                        <div class='programar-schedule d-flex justify-content-end' key='in_landing_begin'>
                            <div>
                                <label for='programar-landing' class='a-text-bold-brownish text-normal'>Inicio: </label>
                                <input type='text' id='programar-landing' class='landing-start-day  editable-attribute schedule-date-input a-text-medium-brownish table-input' placeholder='00-00-0000'>
                            </div>
                            <div>
                                <input type='text' id='programar-landing' class='editable-attribute landing-start-hours time-seconds-input a-text-medium-brownish table-input' placeholder='00:00:00'>
                            </div>
                        </div>
                        <div class='programar-schedule d-flex justify-content-end'key='in_landing_expiration' >
                            <div>
                                <label for='programar-landing-end-date' class='a-text-bold-brownish text-normal'>Fin: </label>
                                <input type='text' id='programar-landing-end-date' class='editable-attribute landing-expiration-day schedule-date-input a-text-medium-brownish table-input' placeholder='00-00-0000'>
                            </div>
                            <div>
                                <input type='text' id='programar-landing-end-hrs' class='landing-expiration-hours editable-attribute time-seconds-input a-text-medium-brownish table-input' placeholder='00:00:00'>
                            </div>
                        </div>
                    </div>
                </div>
            <!--ESTABLECER EN HOME-->
            <div class='contenedor-columna selectable-column centro editable-column' id='programar-$chapter_id' rel='establecer-home' chapter_id='" . $chapter_id . "'>
                <div class='yes-no'>
                    <input type='radio' name='yes-no-$chapter_id' id='programar-si-$chapter_id' value='1' class='switch-home'>
                    <label for='programar-si-$chapter_id' id='siestado-$chapter_id' class=' switch-label si-estilo cursor-pointer'>
                        Sí</label>
                    <input type='radio' name='yes-no-$chapter_id' id='programar-no-$chapter_id' value='0' class='switch-home' checked=''>
                    <label for='programar-no-$chapter_id' id='noestado-$chapter_id' class='switch-label no-estilo cursor-pointer'>
                        No</label>
                </div>
            </div>
            <!--HOME PROGRAMAR PUBLICACIÓN-->
            <div class='contenedor-columna selectable-column centro editable-column' rel='programar-home-publicacion' chapter_id='" . $chapter_id . "' key='in_home_publicacion'>
                <div class='programar-schedule d-flex justify-content-end programar-content' key='in_home_begin'>
                    <div>
                        <label for='programar-home-date' class='a-text-bold-brownish text-normal'>Inicio: </label>
                        <input type='text' id='programar-home-start-date' class='home-start-day editable-attribute schedule-date-input a-text-medium-brownish table-input' placeholder='00-00-0000'>
                    </div>
                    <div>
                        <input type='text' id='programar-home-start-hrs' class='home-start-hours editable-attribute time-seconds-input a-text-medium-brownish table-input' placeholder='00:00:00'>
                    </div>
                </div>
                <div class='programar-schedule d-flex justify-content-end' key='in_home_expiration'>
                    <div>
                        <label for='programar-home-end-date' class='a-text-bold-brownish text-normal'>Fin: </label>
                        <input type='text' id='programar-home-end-date' class='home-expiration-day editable-attribute schedule-date-input a-text-medium-brownish table-input' placeholder='00-00-0000'>
                    </div>
                    <div>
                        <input type='text' id='programar-home-end-hrs' class='home-expiration-hours editable-attribute time-seconds-input a-text-medium-brownish table-input' placeholder='00:00:00'>
                    </div>
                </div>
            </div>
            <!--Imágenes-->
                <div class='contenedor-columna selectable-column centro editable-column' rel='imagenes'>
                    <a href='upimage/$chapter_id'>
                        <div class='image-ta position-relative'>
                            <img src='./images/add-icon.svg' alt='añadir imagenes' class='add-images-icon upload-files'>
                        </div>
                    </a>
                <span class='d-block a-text-regular-brownishtwo pt-2'>Añade imágenes</span>
                    <div>
                        <span class='a-text-regular-brownishtwo'>0</span><span class='a-text-regular-brownishtwo'>/9</span>
                    </div>
                </div>
            <!--Schedule item long date time-->
            <div class='contenedor-columna centro editable-column' rel='schedule-item-date-time'>
                <div class='schedule-date'>
                    <label class='a-text-medium-brownish d-flex justify-content-center  pb-2' type='date'></label> <label class='a-text-medium-brownish d-flex justify-content-center' type='time' style='line-height:0px;'></label>
                </div>
            </div>
            <!--Schedule item long date-->
            <div class='contenedor-columna selectable-column centro editable-column' rel='schedule-item-date' chapter_id='$chapter_id' key='day'>
                <div class='schedule-date'>
                    <input type='text' name='' class='editable-attribute table-input schedule-date-input text-center a-text-regular-brownishtwo' value='' placeholder='DD-MM-YYYY'>
                </div>
            </div>
            <!--Schedule Item Long Time (GMT)-->
            <div class='contenedor-columna selectable-column centro editable-column' rel='schedule-item-time' chapter_id='" . $chapter_id . "' key='programing'>
                <div class='schedule-date'>
                    <input type='text' class='editable-attribute table-input text-center schedule-time-input a-text-regular-brownishtwo' value='' placeholder='HH:MM'>
                </div>
            </div>
            <!--Estimated Schedule Item Duration-->
            <div class='contenedor-columna selectable-column centro editable-column' rel='estimated-duration' chapter_id='$chapter_id' key='duration'>
                <div class='schedule-date'>
                    <input type='text' class='editable-attribute table-input text-center time-seconds-input a-text-regular-brownishtwo' value='' placeholder='HH:MM:SS'>
                </div>
            </div>
            <!--Program Year Produced-->
            <div class='contenedor-columna selectable-column centro editable-column' rel='program-year' chapter_id='$chapter_id' key='program_year_produced'>
                <div class='schedule-date'>
                    <input type='text' class='editable-attribute table-input text-center year-input a-text-regular-brownishtwo' value='' placeholder='YYYY'>
                </div>
            </div>
            <!--Program genre list-->
            <div class='contenedor-columna selectable-column centro editable-column' rel='program-genre' chapter_id='$chapter_id' key='genre'>
                <div class='schedule-date'>
                    <div class='d-flex justify-content-center'>

                    <select class='selectpicker dropup a-text-regular-brownishtwo text-normal show-tick' title='Select Option' multiple data-live-search='true' data-live-search-placeholder='Buscar' data-header='Program List'  data-dropup-auto='false'>
                        " . $genre . "
                    </select>
                    </div>
                </div>
            </div>
            <!--Program title alternate (subtítulo de la película o nombre del capítulo
            de la serie-->
            <div class='contenedor-columna selectable-column centro editable-column' rel='program-title-alternate' chapter_id='" . $chapter_id . "' key='subtitle'>
                <textarea class='program-original editable-attribute edit-cell' id='lb-subtitle-$chapter_id' placeholder='Título alternativo...'></textarea>
            </div>
            <!--Program episode season-->
            <div class='contenedor-columna selectable-column centro editable-column' rel='program-episode-season' chapter_id='" . $chapter_id . "' key='season'>
                <input class='w-100 a-text-regular-brownishtwo text-center editable-attribute table-input' value='' placeholder='Temporada...'/>
            </div>
            <!--Program episode number-->
            <div class='contenedor-columna selectable-column centro editable-column' rel='program-episode-number' chapter_id='" . $chapter_id . "' key='program_episode_number'>
                <input class='w-100 a-text-regular-brownishtwo text-center editable-attribute table-input' value='' placeholder='Episodio...'/>
            </div>
            <!--Synopsis-->
            <div class='contenedor-columna selectable-column centro editable-column' rel='synopsis' chapter_id='" . $chapter_id . "' key='synopsis'>
                <div class='program-original text-left edit-cell'>
                    <span class='mb-0 lb-synopsis' id='lb-synopsis-" . $chapter_id . "'></span>
                    <span class='text-normal cursor-pointer a-text-bold-teal see-more' program_title=''>Ver más...</span>
                </div>
            </div>
            <!--Rating-->
            <div class='contenedor-columna selectable-column centro' rel='rating-code' key='rating' chapter_id='" . $chapter_id . "'>
                <div class='schedule-date'>
                    <input class='editable-attribute text-center table-input a-text-regular-brownishtwo' value='' placeholder='Clasificación...'>
                </div>
            </div>
            <!--SUBBED-->
            <div class='contenedor-columna selectable-column centro editable-column' rel='subbed' key='subbed' chapter_id='" . $chapter_id . "'>
                <div class='schedule-date'>
                    <div class='yes-no'>
                        <input type='radio' id='yes-subbed-$chapter_id' name='subbed-$chapter_id' value='1' class='switch-table'>
                        <label for='yes-subbed-$chapter_id' id='siestado-date2' class='switch-label cursor-pointer si-estilo'>
                            Sí</label>
                        <input type='radio' id='no-subbed-$chapter_id' name='subbed-$chapter_id' value='0' checked='' class='switch-table'>
                        <label for='no-subbed-$chapter_id' id='noestado-date2' class='switch-label cursor-pointer no-estilo'>
                            No</label>
                    </div>
                </div>
            </div>
            <!--DUBBED-->
            <div class='contenedor-columna selectable-column centro editable-column' rel='dubbed' key='dubbed' chapter_id='" . $chapter_id . "'>
                <div class='schedule-date'>
                    <div class='yes-no' chapter_id='" . $chapter_id . "'>
                        <input type='radio' id='yes-dubbed-$chapter_id' name='dubbed-$chapter_id' value='1' class='switch-table'>
                        <label for='yes-dubbed-$chapter_id' id='siestado-date1' class='switch-label cursor-pointer si-estilo'>
                            Sí</label>
                        <input type='radio' id='no-dubbed-$chapter_id' name='dubbed-$chapter_id' value='0' checked='' class='switch-table'>
                        <label for='no-dubbed-$chapter_id' id='noestado-date1' class='switch-label cursor-pointer no-estilo'>
                            No</label>
                    </div>
                </div>
            </div>
            <!--AUDIO 5.1-->
            <div class='contenedor-columna selectable-column centro editable-column' rel='audio' key='audio5' chapter_id='" . $chapter_id . "'>
                <div class='schedule-date'>
                    <div class='yes-no' chapter_id='" . $chapter_id . "'>
                        <input type='radio' id='yes-audio-$chapter_id' name='audio-$chapter_id' value='1' class='switch-table'>
                        <label for='yes-audio-$chapter_id' id='siestado-date' class='switch-label cursor-pointer si-estilo'>
                            Sí</label>
                        <input type='radio' id='no-audio-$chapter_id' name='audio-$chapter_id' value='0' class='switch-table' checked=''>
                        <label for='no-audio-$chapter_id' id='noestado-date' class='switch-label cursor-pointer no-estilo'>
                            No</label>
                    </div>
                </div>
            </div>
    </div>
            ";
            echo ($html);
        } else {
            return json_encode($request->all());
        }
    }

    public function editAttribute(Request $request)
    {
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);

        $response = $client->post(
            $this->url . "program/editChapter",
            ['body' => json_encode(
                [
                    'usuario_id' => session('id_user'),
                    'chapter_id' => $request->input('chapter_id'),
                    'key' => $request->input('key'),
                    'value' => $request->input('keyValue'),
                ]
            )]
        );
        var_dump($response->getBody()->getContents());
    }
    public function editSynopsis(Request $request)
    {
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);

        $response = $client->post(
            $this->url . "program/editSinopsisLanding",
            ['body' => json_encode(
                [
                    'usuario_id' => session('id_user'),
                    'chapter_id' => $request->input('chapterId'),
                    'change' => $request->input('change'),
                    'synopsis' => $request->input('synopsis'),
                    'title' => $request->input('title'),
                ]
            )]
        );
        return $response->getBody()->getContents();
    }


    /*
        Guardamos las imágenes en laravel
    */
    public function storeImages($id, $landing, $title, $file, $type)
    {
        $decrypted = Crypt::decrypt($id);
        $extension = $file->extension();
        //$path = substr($file->storeAs("public/" . $landing . "/" . $type . "", str_replace(" ", "", $title) . $decrypted . "_" . $type . "" . "." . $extension), 7);
        $path = url('/storage') . "/" . substr($file->storeAs("public/" . $landing . "/" . $type . "", str_replace(" ", "", $title) . $decrypted . "_" . $type . "" . "." . $extension), 7);
        return $path;
    }


    /*
    Actualizamos las rutas de las imágenes y mandamos llamar a la API
    */
    public function updateImages(Request $request)
    {

        $chapterId = Crypt::decrypt($request->input('id'));
        $pathSynopsis3 = "";
        $pathSynopsis2 = "";
        $pathSynopsis1 = "";
        $pathSynopsis = "";
        $pathImageVertical = "";
        $pathImageHorizontal = "";
        $pathImageSlider1 = "";
        $pathImageSlider2 = "";
        $pathImageSlider3 = "";
        $landingId = Crypt::decrypt($request->input('landing_id'));
        switch ($landingId) {
            case 1:
                if ($request->file('image-vertical')) {
                    $pathImageVertical = $this->storeImages($request->input('id'), "canal-claro", $request->input('title'), $request->file("image-vertical"), "vertical");
                }
                if ($request->file('image-horizontal')) {
                    $pathImageHorizontal = $this->storeImages($request->input('id'), "canal-claro", $request->input('title'), $request->file("image-horizontal"), "horizontal");
                }

                if ($request->file('image-synopsis')) {
                    $pathSynopsis = $this->storeImages($request->input('id'), "canal-claro", $request->input('title'), $request->file("image-synopsis"), "sinopsis");
                }

                if ($request->file('image-synopsis-1')) {
                    $pathSynopsis1 = $this->storeImages($request->input('id'), "canal-claro", $request->input('title'), $request->file("image-synopsis-1"), "sinopsis1");
                }
                if ($request->file('image-synopsis-2')) {
                    $pathSynopsis2 = $this->storeImages($request->input('id'), "canal-claro", $request->input('title'), $request->file("image-synopsis-2"), "sinopsis2");
                }
                if ($request->file('image-synopsis-3')) {
                    $pathSynopsis3 = $this->storeImages($request->input('id'), "canal-claro", $request->input('title'), $request->file("image-synopsis-3"), "sinopsis3");
                }

                if ($request->file('image_background_1')) {
                    $pathImageSlider1 = $this->storeImages($request->input('id'), "canal-claro", $request->input('title'), $request->file("image_background_1"), "slider1");
                }
                if ($request->file('image_background_2')) {
                    $pathImageSlider2 = $this->storeImages($request->input('id'), "canal-claro", $request->input('title'), $request->file("image_background_2"), "slider2");
                }
                if ($request->file('image_background_3')) {
                    $pathImageSlider3 = $this->storeImages($request->input('id'), "canal-claro", $request->input('title'), $request->file("image_background_3"), "slider3");
                }
                break;
            case 2:
                if ($request->file('image-vertical')) {
                    $pathImageVertical = $this->storeImages($request->input('id'), "concert-channel", $request->input('title'), $request->file("image-vertical"), "vertical");
                }
                if ($request->file('image-horizontal')) {
                    $pathImageHorizontal = $this->storeImages($request->input('id'), "concert-channel", $request->input('title'), $request->file("image-horizontal"), "horizontal");
                }

                if ($request->file('image-synopsis')) {
                    $pathSynopsis = $this->storeImages($request->input('id'), "concert-channel", $request->input('title'), $request->file("image-synopsis"), "sinopsis");
                }

                if ($request->file('image-synopsis-1')) {
                    $pathSynopsis1 = $this->storeImages($request->input('id'), "concert-channel", $request->input('title'), $request->file("image-synopsis-1"), "sinopsis1");
                }
                if ($request->file('image-synopsis-2')) {
                    $pathSynopsis2 = $this->storeImages($request->input('id'), "concert-channel", $request->input('title'), $request->file("image-synopsis-2"), "sinopsis2");
                }
                if ($request->file('image-synopsis-3')) {
                    $pathSynopsis3 = $this->storeImages($request->input('id'), "concert-channel", $request->input('title'), $request->file("image-synopsis-3"), "sinopsis3");
                }

                if ($request->file('image_background_1')) {
                    $pathImageSlider1 = $this->storeImages($request->input('id'), "concert-channel", $request->input('title'), $request->file("image_background_1"), "slider1");
                }
                if ($request->file('image_background_2')) {
                    $pathImageSlider2 = $this->storeImages($request->input('id'), "concert-channel", $request->input('title'), $request->file("image_background_2"), "slider2");
                }
                if ($request->file('image_background_3')) {
                    $pathImageSlider3 = $this->storeImages($request->input('id'), "concert-channel", $request->input('title'), $request->file("image_background_3"), "slider3");
                }
                break;
            case 3:
                if ($request->file('image-vertical')) {
                    $pathImageVertical = $this->storeImages($request->input('id'), "claro-cinema", $request->input('title'), $request->file("image-vertical"), "vertical");
                }
                if ($request->file('image-horizontal')) {
                    $pathImageHorizontal = $this->storeImages($request->input('id'), "claro-cinema", $request->input('title'), $request->file("image-horizontal"), "horizontal");
                }

                if ($request->file('image-synopsis')) {
                    $pathSynopsis = $this->storeImages($request->input('id'), "claro-cinema", $request->input('title'), $request->file("image-synopsis"), "sinopsis");
                }

                if ($request->file('image-synopsis-1')) {
                    $pathSynopsis1 = $this->storeImages($request->input('id'), "claro-cinema", $request->input('title'), $request->file("image-synopsis-1"), "sinopsis1");
                }
                if ($request->file('image-synopsis-2')) {
                    $pathSynopsis2 = $this->storeImages($request->input('id'), "claro-cinema", $request->input('title'), $request->file("image-synopsis-2"), "sinopsis2");
                }
                if ($request->file('image-synopsis-3')) {
                    $pathSynopsis3 = $this->storeImages($request->input('id'), "claro-cinema", $request->input('title'), $request->file("image-synopsis-3"), "sinopsis3");
                }

                if ($request->file('image_background_1')) {
                    $pathImageSlider1 = $this->storeImages($request->input('id'), "claro-cinema", $request->input('title'), $request->file("image_background_1"), "slider1");
                }
                if ($request->file('image_background_2')) {
                    $pathImageSlider2 = $this->storeImages($request->input('id'), "claro-cinema", $request->input('title'), $request->file("image_background_2"), "slider2");
                }
                if ($request->file('image_background_3')) {
                    $pathImageSlider3 = $this->storeImages($request->input('id'), "claro-cinema", $request->input('title'), $request->file("image_background_3"), "slider3");
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

        $respuesta =  json_decode($response->getBody());
        //var_dump($respuesta);
        if ($respuesta->code == 200) {

            return redirect()->route('programacion_general_id', ['id' => $chapterId]);
        }
    }

    public function filterDates(Request $request)
    {

        $client = new Client();
        $response = $client->get(
            $this->url . "program/getProgramingGrill/" . $request->input('startDate') . "&" . $request->input('lastDate') . "&" . $request->landing . "&" . session('id_user')
        );
        echo ($response->getBody()->getContents());
    }
    public function deleteChapter(Request $request)
    {

        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);

        $response = $client->post(
            $this->url . "program/deleteChapter",
            ['body' => json_encode(
                [
                    'usuario_id' => session('id_user'),
                    'chapter_id' => (int)$request->chapter_id,

                ]
            )]
        );
        $respuesta =  $response->getBody();
        echo $respuesta;
    }

    public function getFirstGrilla()
    {
        $date = date('y-m-d');
        $usuario_id = session('id_user');

        $client = new Client();

        $response = $client->get(
            $this->url . "program/getProgramingGrillFirst/" . $date . "&Claro Canal&" . $usuario_id
        );
        return $response->getBody()->getContents();
    }
}
