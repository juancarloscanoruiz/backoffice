<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Shared\Date;
use Illuminate\Support\Facades\Crypt;


class ProgramacionGeneralController extends Controller
{
    private $url = "http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/";

    //MÉTODOS PARA GESTION DE PROGRAMACION GENERAL DEL BACKOFFICE DE CLARO NETWORKS

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

        $firstDay = date('Y-m-d');
        $client = new Client();
        $response = $client->get(
            $this->url . "program/getProgramingGrillFirst/" . $firstDay . "&Claro Canal&" . session('id_user')
        );

        $respuesta =  json_decode($response->getBody());
        //var_dump($respuesta->data->grilla);
        $firstDate = $this->getDateCalendar($respuesta->data->first_day_calendar);
        $lastDate = $this->getDateCalendar($respuesta->data->last_day_calendar);

        if ($respuesta->code == 200) {
            return view('admin-site.Menu', compact("respuesta", "firstDate", "lastDate"));
        } else {
            return back()->with("error", "Por el momento no podemos obtneer informacion intenta mas tarde");
        };
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
        # obtener conteo e iterar
        $totalDeHojas = $documento->getSheetCount();
        #iterar por hojas
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
                            $objFecha = Date::excelToDateTimeObject($value);
                            $cadena_nuevo_formato =  date_format($objFecha, 'Y-m-d');;

                            $programa['Vigencia_home'] = $cadena_nuevo_formato;
                            break;
                        case 6:
                            # code...
                            $programa['Establecer_landing'] = $value;
                            break;
                        case 7:
                            # code...
                            $objFecha = Date::excelToDateTimeObject($value);
                            $cadena_nuevo_formato =  date_format($objFecha, 'Y-m-d');;
                            $programa['Vigencia_landing'] = $cadena_nuevo_formato;
                            break;
                        case 8:
                            # code...
                            $objFecha = Date::excelToDateTimeObject($value);
                            $cadena_nuevo_formato =  date_format($objFecha, 'Y-m-d H:i:s');;


                            $programa['Schedule_Item_Date_Time'] = $cadena_nuevo_formato;
                            break;
                        case 9:
                            # code...
                            $objFecha = Date::excelToDateTimeObject($value);
                            $cadena_nuevo_formato =  date_format($objFecha, 'Y-m-d');;

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
        //$programas=json_encode($programas);

        $htmlProgrmacion = "<div id='tb1' class='d-flex  ml-5 pr-5'style='width:112%;'>
        <div class'conten-tab'>
        <div class='contenedor-fila'>
            <div class='contenedor-columna centro centro title-table'>
                <span class='a-text-semibold-white text-normal'> Entrada</span>
            </div>
            <div class='contenedor-columna centro centro title-table'>
                <span class='a-text-semibold-white text-normal'>Estado</span>
            </div>
            <div class='contenedor-columna centro centro title-table'>
                <span class='a-text-semibold-white text-normal'>Alerta</span>
            </div>

            <div class='contenedor-columna centro centro title-table'>
                <span class='a-text-semibold-white text-normal'>Program Title Original</span>
            </div>
            <div class='contenedor-columna centro  centro title-table'>
                <span class='a-text-semibold-white text-normal'>Programar publicación</span>
            </div>

            <div class='contenedor-columna centro  centro title-table'>
                <span class='a-text-semibold-white text-normal'>Establecer en Home</span>
            </div>
            <div class='contenedor-columna centro centro title-table'>
                <span class='a-text-semibold-white text-normal'>Establecer en landing</span>
            </div>
            <div class='contenedor-columna centro centro title-table'>
                <span class='a-text-semibold-white text-normal'> Imagenes</span>
            </div>
            <div class='contenedor-columna centro centro title-table'>
                <span class='a-text-semibold-white text-normal'>Schedule Item Date Time</span>
            </div>
            <div class='contenedor-columna centro centro title-table'>
                <span class='a-text-semibold-white text-normal'>Schedule Item Long Date</span>
            </div>
            <div class='contenedor-columna centro centro title-table'>
                <span class='a-text-semibold-white text-normal'>Schedule Item Long Time< (GMT)</span>
             </div>
             <div class='contenedor-columna centro centro title-table'>
             <span class='a-text-semibold-white text-normal'>Estimated Schedule Item Duration</span>
 </div>
            <div class='contenedor-columna centro  centro title-table'>
                <span class='a-text-semibold-white text-normal'>Program Year Produced</span>
            </div>
            <div class='contenedor-columna centro centro title-table'>
                <span class='a-text-semibold-white text-normal'>Program Genre List</span>
            </div>
            <div class='contenedor-columna centro centro title-table'>
                <span class='a-text-semibold-white text-normal'>Program Title Alternate </span>
            </div>
            <div class='contenedor-columna centro  centro title-table'>
                <span class='a-text-semibold-white text-normal'>Program Episode Season</span>
            </div>
            <div class='contenedor-columna centro  centro title-table'>
                <span class='a-text-semibold-white text-normal'>Program Episode Number</span>
            </div>
            <div class='contenedor-columna centro centro title-table'>
                <span class='a-text-semibold-white text-normal'>Synopsis</span>
            </div>
            <div class='contenedor-columna centro centro title-table'>
                <span class='a-text-semibold-white text-normal'>Schedule Item Rating Code</span>
            </div>
            <div class='contenedor-columna centro  centro title-table'>
                <span class='a-text-semibold-white text-normal'>Scheduled Version SUBBED (1=Yes/0=No)</span>
            </div>
            <div class='contenedor-columna centro centro title-table'>
                <span class='a-text-semibold-white text-normal'>Scheduled Version DUBBED (1=Yes/0=No)</span>
            </div>
            <div class='contenedor-columna centro  centro title-table'>
                <span class='a-text-semibold-white text-normal'>Audio 5.1 available
                    (1=Yes/0=No)</span>
            </div>
        </div>";

        for ($indexProgramas = 0; $indexProgramas < count($programas); $indexProgramas++) {
            $htmlProgrmacion = $htmlProgrmacion . '
            <div class="contenedor-fila" id="programa_' . $programas[$indexProgramas]['Program_Title'] . '">
                <div class="contenedor-columna centro" id="">
                <img src="./images/basic-icons/trash.svg" class="mx-auto pr-2"alt="icono para borrar"> <img src="./images/basic-icons/pencil-edit-teal.svg" class="mx-auto"alt="lapiz para editar">
                </div>
                <div class="contenedor-columna centro">

                <span class="a-text-bold-orange text-normal"> Pendiente de revisión </span>
                </div>
                <div class="contenedor-columna centro"></div>

                <div class="contenedor-columna centro">
                    <label class="program-original">' . $programas[$indexProgramas]['Program_Title'] . '</label>

                </div>
                <div class="contenedor-columna centro">
                <div class="yes-no">
                            <input type="radio" name="yes-no" id="si' . $indexProgramas . '" checked />
                            <label for="si' . $indexProgramas . '" id="siestado" class="si-estilo">
                            Sí</label>
                            <input type="radio" name="yes-no" id="no' . $indexProgramas . '" />
                            <label for="no' . $indexProgramas . '" id="noestado" class="no-estilo">
                            No</label>
                        </div>

                        <div>
                            <label class="a-text-medium-brownish text-small d-flex justify-content-center pt-2 pb-2" type=date>07-01-2019</label> <label class="a-text-medium-brownish text-small d-flex justify-content-center" type="time" style="line-height:0px;">11:00:00  HRS</label>
                        </div>

                </div>
                <div class="contenedor-columna centro">
                <div class="yes-no">
                            <input type="radio" name="si-no" id="yes" checked />
                            <label for="yes" id="siestado" class="si-estilo">
                            Sí</label>
                            <input type="radio" name="si-no" id="nop" />
                            <label for="nop" id="noestado" class="no-estilo">
                            No</label>
                        </div>
                        <div >
                        <label class="a-text-medium-brownish text-small d-flex justify-content-center pt-2 pb-2" type="date">DD-MM-YYYY</label> <label class="a-text-medium-brownish text-small d-flex justify-content-center" type="time" style="line-height:0px;">00:00:00 HRS</label>
                     </div>
                </div>

                <div class="contenedor-columna centro">
                <div class="yes-no pt-2">
                <input type="radio" name="yes-landings"id="yes-landings"  value="1" checked="true" />
                <label for="yes-landings " id="siestado-landings" class="si-estilo">
                  Sí</label>
                <input type="radio" name="si-no-landings" id="no-landings" />
                <label for="no-landings" id="noestado-landings"class="no-estilo">
                  No</label>
            </div>
                <div class=" d-flex mt-2 ml-2 pt-2">
                <label class="checkradio d-flex  ml-2">
                <input type="radio" name="dontlose">
                <span class="checkmark"></span>
                </label>

                <span class="text-lan ml-2 "> No te pierdas</span>

                </div>
                    <div class="d-flex ml-2 mt-2 mb-2">
                    <label class="checkradio d-flex  ml-2">
                    <input type="radio" name="dontlose">
                    <span class="checkmark"></span>
                    </label>
                    <span class="text-lan ml-2 "> Solo por canal claro</span>

                    </div>

                </div>
                <div class="contenedor-columna centro">
                    <div class="image-ta">
                    <img src="" alt="añadir imagenes">
                    </div>
                    <span class="a-text-regular-brownishtwo text-small">Añade imagenes</span>

                </div>
                <div class="contenedor-columna centro">
                    <div class="schedule-date">
                    <label class="a-text-medium-brownish text-small d-flex justify-content-center pb-2" type=date>DD-MM-YYYY</label> <label class="a-text-medium-brownish text-small d-flex justify-content-center" type="time" >00:00:00 HRS</label>

                    </div>
                </div>
                <div class="contenedor-columna centro">
                <div class="schedule-date">
                <label class="a-text-medium-brownish text-small d-flex justify-content-center" type="date">DD-MM-YYYY</label>

                    </div>
                </div>
                <div class="contenedor-columna centro">
                <div class="schedule-date">
                <label class="a-text-medium-brownish text-small d-flex justify-content-center" type="time" >00:00:00 HRS</label>
                    </div>
                </div>
                <div class="contenedor-columna centro">
                <div class="schedule-date">
                <label class="a-text-medium-brownish text-small d-flex justify-content-center" type="time" >00:00:00 HRS</label>
                    </div>
                </div>
                <div class="contenedor-columna centro">
                <div class="schedule-date">
                <label class="a-text-medium-brownish text-small d-flex justify-content-center" type="date">YYYY</label>

                    </div>
                </div>
                <div class="contenedor-columna centro">
                <div class="schedule-date">
                        <label class="a-text-regular-brownishtwo text-small">Animación, Cultura, Series</label>

                    </div>
                </div>
                <div class="contenedor-columna centro">
                <div class="schedule-date">
                        <label class="a-text-regular-brownishtwo text-small">Cantinflas y sus amigos: James Watt</label>

                    </div>
                </div>
                <div class="contenedor-columna centro">
                <div class="schedule-date">
                        <label class="a-text-regular-brownishtwo text-small" >3</label>

                    </div>
                </div>
                <div class="contenedor-columna centro">
                <div class="schedule-date">
                        <label class="a-text-regular-brownishtwo text-small">28</label>

                    </div>
                </div>
                <div class="contenedor-columna centro ">
                <div class="schedule-date">
                        <label class="a-text-regular-brownishtwo text-small p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br>eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br>eiusmod tempor incididunt ut labore et dolore magna aliqua.  </label>

                    </div>
                </div>
                <div class="contenedor-columna centro">
                <div class="schedule-date">
                        <label class="a-text-regular-brownishtwo text-small" >PG-13</label>

                    </div>
                </div>
                <div class="contenedor-columna centro">
                <div class="schedule-date">
                <div class="yes-no">
                <input type="radio" id="yes-date2"  value="1" checked="true" />
                <label for="yes-date2" id="siestado-date2" class="si-estilo">
                  Sí</label>
                <input type="radio"  id="no-date2" value="0" />
                <label for="no-date2" id="noestado-date2"class="no-estilo">
                  No</label>
            </div>

                    </div>
                </div>
                <div class="contenedor-columna centro">
                <div class="schedule-date">
                <div class="yes-no">
                <input type="radio" id="yes-date1"  value="1" checked="true" />
                <label for="yes-date1" id="siestado-date1" class="si-estilo">
                  Sí</label>
                <input type="radio"  id="no-date1" value="0"/>
                <label for="no-date1" id="noestado-date1"class="no-estilo">
                  No</label>
            </div>

                    </div>
                </div>
                <div class="contenedor-columna centro">
                <div class="schedule-date">
                <div class="yes-no">
                <input type="radio" id="yes-date"  value="1" checked="true" />
                <label for="yes-date" id="siestado-date" class="si-estilo">
                  Sí</label>
                <input type="radio"  id="no-date" value="0"/>
                <label for="no-date" id="noestado-date"class="no-estilo">
                  No</label>
            </div>
                    </div>
                </div>
            </div>
            </div>
            ';
        }

        //hacemos la llamada a la API
        $data = json_decode($data);
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
        $respuesta =  $response->getBody()->getContents();

        //echo ($respuesta);
    }
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
            $chapter_id = $respuesta->data;
            $html = "
            <div class='contenedor-fila' id='programacion-claro-$chapter_id'>
            <!--ACCIONES-->
            <div class='contenedor-columna selectable-column centro cursor-pointer' id='entrada-$chapter_id' rel='acciones'><img src='./images/basic-icons/pencil-edit-teal.svg' class='mr-3 edit-row-pencil' alt='pencil'><img src='./images/basic-icons/trash.svg' class='trash-row' alt='trash'></div>
            <!--ESTADO-->
            <div class='contenedor-columna centro editable-column cursor-pointer' id='estado-$chapter_id'>
                <span class='program-original'></span>
            </div>
            <!--ALERTA-->
            <div class='contenedor-columna centro editable-column' id='alerta-$chapter_id'></div>
            <!--PROGRAM TITLE ORIGINAL-->
            <div class='contenedor-columna selectable-column centro centro editable-column' chapter_id='" . $chapter_id . "' key='title' rel='program-title-original' id='title-$chapter_id'>
                <textarea id='program-title' name='' class='editable-attribute program-original edit-cell'></textarea>
            </div>
            <!--ESTABLECER EN LANDING-->
            <div class='contenedor-columna selectable-column centro editable-column' rel='establecer-landing' chapter_id='" . $chapter_id . "' key=''>
                <!--Si no han elegido una sección del landing, entonces las opción
                por defecto es 'No'
                -->
                        <div class='yes-no mt-3'>
                            <input type='radio' name='sino-landing-$chapter_id' id='yes-landing-$chapter_id' value='1' class='switch-landing'>
                            <label for='yes-landing-$chapter_id' id='siestado-landing-$chapter_id' class='si-estilo cursor-pointer switch-label'>
                                Sí</label>
                            <input type='radio' name='sino-landing-$chapter_id' id='no-landing-$chapter_id' value='0' checked='' class='switch-landing'>
                            <label for='no-landing-$chapter_id' id='noestado-landing-$chapter_id' class='no-estilo cursor-pointer switch-label'>
                                No</label>
                        </div>
                        <div class='establecer-options pointer-none'>
                            <div class=' d-flex mt-2 ml-2 pt-2'>
                                <label class='checkradio d-flex  ml-2'>
                                    <input type='radio' name='dontlose'>
                                    <span class='checkmark'></span>
                                </label>
                                <span class='cursor-pointer a-text-medium-warmgrey ml-2'>Tienes que verlo</span>
                            </div>
                            <div class='d-flex ml-2 pt-2 pb-2'>
                                <label class='checkradio d-flex ml-2'>
                                    <input type='radio' name='dontlose'>
                                    <span class='checkmark'></span>
                                </label>
                                <span class='cursor-pointer a-text-medium-warmgrey ml-2'>Contenido exclusivo</span>
                            </div>
                        </div>

                                            </div>
            <!--Programar publicacición landing-->
            <div class='contenedor-columna selectable-column centro editable-column' rel='landing-programar' chapter_id='" . $chapter_id . "' key=''>
                                                <div class='programar-content pointer-none'>
                        <div class='d-flex justify-content-end'>
                            <div>
                                <label for='programar-landing' class='a-text-bold-brownish text-normal'>Inicio: </label>
                                <input type='text' id='programar-landing' class='schedule-date-input a-text-medium-brownish table-input' placeholder='00-00-0000'>
                            </div>
                            <div>
                                <input type='text' id='programar-landing' class='time-seconds-input a-text-medium-brownish table-input' placeholder='00:00:00'>
                            </div>
                        </div>
                        <div class='d-flex justify-content-end'>
                            <div>
                                <label for='programar-landing-end-date' class='a-text-bold-brownish text-normal'>Fin: </label>
                                <input type='text' id='programar-landing-end-date' class='schedule-date-input a-text-medium-brownish table-input' placeholder='00-00-0000'>
                            </div>
                            <div>
                                <input type='text' id='programar-landing-end-hrs' class='time-seconds-input a-text-medium-brownish table-input' placeholder='00:00:00'>
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
            <div class='contenedor-columna selectable-column centro editable-column' rel='programar-home-publicacion' chapter_id='" . $chapter_id . "'>
                <div class='d-flex justify-content-end programar-content'>
                    <div>
                        <label for='programar-home-date' class='a-text-bold-brownish text-normal'>Inicio: </label>
                        <input type='text' id='programar-home-start-date' class='schedule-date-input a-text-medium-brownish table-input' placeholder='0000-00-00'>
                    </div>
                    <div>
                        <input type='text' id='programar-home-start-hrs' class='time-seconds-input a-text-medium-brownish table-input' placeholder='00:00:00'>
                    </div>
                </div>
                <div class='d-flex justify-content-end'>
                    <div>
                        <label for='programar-home-end-date' class='a-text-bold-brownish text-normal'>Fin: </label>
                        <input type='text' id='programar-home-end-date' class='schedule-date-input a-text-medium-brownish table-input' placeholder='0000-00-00'>
                    </div>
                    <div>
                        <input type='text' id='programar-home-end-hrs' class='time-seconds-input a-text-medium-brownish table-input' placeholder='00:00:00'>
                    </div>
                </div>
            </div>
            <!--Imágenes-->
                <div class='contenedor-columna selectable-column centro editable-column' rel='imagenes'>
                    <a href='upimage/$chapter_id'>
                        <div class='image-ta position-relative'>
                            <img src='images/basic-icons/pencil-edit-teal.svg' alt='añadir imagenes' class='add-images-icon'>

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
                                    <div class='contenedor-columna selectable-column centro editable-column' rel='schedule-item-date' chapter_id='$chapter_id' key=''>
                <div class='schedule-date'>
                    <input type='text' name='' class='table-input schedule-date-input text-center a-text-regular-brownishtwo' value=''>
                </div>
            </div>
            <!--Schedule Item Long Time (GMT)-->
            <div class='contenedor-columna selectable-column centro editable-column' rel='schedule-item-time' chapter_id='" . $chapter_id . "' key=''>
                <div class='schedule-date'>
                    <input type='text' class='table-input text-center schedule-time-input a-text-regular-brownishtwo' value=''>
                </div>
            </div>
            <!--Estimated Schedule Item Duration-->
            <div class='contenedor-columna selectable-column centro editable-column' rel='estimated-duration' chapter_id='$chapter_id' key=''>
                <div class='schedule-date'>
                    <input type='text' class='table-input text-center time-seconds-input a-text-regular-brownishtwo' value=''>
                </div>
            </div>
            <!--Program Year Produced-->
            <div class='contenedor-columna selectable-column centro editable-column' rel='program-year' chapter_id='$chapter_id' key=''>
                <div class='schedule-date'>
                    <input type='text' class='table-input text-center year-input a-text-regular-brownishtwo' value='' placeholder='YYYY'>
                </div>
            </div>
            <!--Program genre list-->
            <div class='contenedor-columna selectable-column centro editable-column' rel='program-genre' chapter_id='$chapter_id' key=''>
                <div class='schedule-date'>
                    <div class='d-flex justify-content-center'>

                        <select class='selectpicker dropup a-text-black-warmrey text-normal show-tick' title='Select Option' multiple data-live-search='true' data-live-search-placeholder='Buscar' data-header='Program List'  data-dropup-auto='false'>
                            <option class='a-text-bold-brown-two text-small'>Animación</option>
                            <option class='a-text-bold-brown-two text-small'>Cultura</option>
                            <option class='a-text-bold-brown-two text-small'>Series</option>
                            <option class='a-text-bold-brown-two text-small'>Comedia</option>
                            <option class='a-text-bold-brown-two text-small'>Romance</option>

                        </select>
                    </div>
                </div>
            </div>
            <!--Program title alternate (subtítulo de la película o nombre del capítulo
            de la serie-->
            <div class='contenedor-columna selectable-column centro editable-column' rel='program-title-alternate' chapter_id='" . $chapter_id . "' key=''>
                <textarea class='program-original edit-cell' id='lb-subtitle-$chapter_id'></textarea>
            </div>
            <!--Program episode season-->
            <div class='contenedor-columna selectable-column centro editable-column' rel='program-episode-season' chapter_id='" . $chapter_id . "'>
                <input class='a-text-regular-brownishtwo text-center editable-attribute table-input' value='' />
            </div>
            <!--Program episode number-->
            <div class='contenedor-columna selectable-column centro editable-column' rel='program-episode-number' chapter_id='" . $chapter_id . "' key=''>
                <input class='a-text-regular-brownishtwo text-center editable-attribute table-input' value='' />
            </div>
            <!--Synopsis-->
            <div class='contenedor-columna selectable-column centro editable-column' rel='synopsis' chapter_id='" . $chapter_id . "' key=''>
                <span class='mb-0 lb-synopsis' id='lb-synopsis-" . $chapter_id . " }}'></span>
                <span class='text-normal cursor-pointer a-text-bold-teal see-more' program_title=''>Ver más...</span>
            </div>
            <!--Rating-->
            <div class='contenedor-columna selectable-column centro' rel='rating-code' key='' chapter_id='" . $chapter_id . "'>
                <div class='schedule-date'>
                    <input class='text-center table-input a-text-regular-brownishtwo' value=''>
                </div>
            </div>
            <!--SUBBED-->
            <div class='contenedor-columna selectable-column centro editable-column' rel='subbed' key='' chapter_id='" . $chapter_id . "'>
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
            <div class='contenedor-columna selectable-column centro editable-column' rel='dubbed' key=''>
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
            <div class='contenedor-columna selectable-column centro editable-column' rel='audio' key=''>
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


    public function storeImages($id, $landing, $title, $file, $type)
    {
        $decrypted = Crypt::decrypt($id);
        $extension = $file->extension();
        $path = substr($file->storeAs("public/" . $landing . "/" . $type . "", str_replace(" ", "", $title) . $decrypted . "_" . $type . "" . "." . $extension), 7);
        return $path;
    }

    public function updateImages(Request $request)
    {
        $pathSynopsis3 = "";
        $pathSynopsis2 = "";
        $pathSynopsis1 = "";
        $pathSynopsis = "";
        $pathImageVertical = "";
        $pathImageHorizontal = "";
        $landingId = Crypt::decrypt($request->input('landing_id'));
        switch ($landingId) {
            case 1:
                if ($request->file('image-vertical')) {
                    $pathImageVertical = $this->storeImages($request->input('id'), "canal-claro", $request->input('title'), $request->file("image-vertical"), "vertical");
                    echo ($pathImageVertical);
                }
                if ($request->file('image-horizontal')) {
                    $pathImageHorizontal = $this->storeImages($request->input('id'), "canal-claro", $request->input('title'), $request->file("image-horizontal"), "horizontal");
                    echo ($pathImageHorizontal);
                }

                if ($request->file('image-synopsis')) {
                    $pathSynopsis = $this->storeImages($request->input('id'), "canal-claro", $request->input('title'), $request->file("image-synopsis"), "sinopsis");
                    echo ($pathSynopsis);
                }

                if ($request->file('image-synopsis-1')) {
                    $pathSynopsis1 = $this->storeImages($request->input('id'), "canal-claro", $request->input('title'), $request->file("image-synopsis-1"), "sinopsis1");
                    echo ($pathSynopsis1);
                }
                if ($request->file('image-synopsis-2')) {
                    $pathSynopsis2 = $this->storeImages($request->input('id'), "canal-claro", $request->input('title'), $request->file("image-synopsis-2"), "sinopsis2");
                    echo ($pathSynopsis2);
                }
                if ($request->file('image-synopsis-3')) {
                    $pathSynopsis3 = $this->storeImages($request->input('id'), "canal-claro", $request->input('title'), $request->file("image-synopsis-3"), "sinopsis3");
                    echo ($pathSynopsis3);
                }
                break;

            default:
                # code...
                break;
        }

        return redirect()->route('programacion_general');
        /*$decrypted = Crypt::decrypt($request->input('id'));
        $extension = $request->file('image-synopsis-3')->extension();
        $request->file('image-synopsis-3')->storeAs('public/canal-claro/synopsis-3', str_replace(" ", "", $request->input('title')) . $decrypted . "_Sinopsis3" . "." . $extension);*/
    }

    public function filterDates(Request $request)
    {

        $client = new Client();
        $response = $client->get(
            $this->url . "program/getProgramingGrill/" . $request->input('startDate') . "&" . $request->input('lastDate') . "&Claro Canal&" . session('id_user')
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
}
