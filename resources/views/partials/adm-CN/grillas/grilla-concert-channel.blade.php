<?php

//recuperamos datos obtenidos por la API
$last_edition = $respuesta->data->grilla[0]->last_edition;
$edited_for = $respuesta->data->grilla[0]->edited_for;
$rol_user_edit = $respuesta->data->grilla[0]->user_rol;
$programs = $respuesta->data->grilla[0]->programs;
$grill = $respuesta->data->grilla;

if ($rol_user_edit == "root") {
    $rol_user_edit = "Súper Usuario";
}

if (is_null($last_edition) && is_null($edited_for) && is_null($rol_user_edit)) {
    // si ninguno esta definido significa que a este dia no se la a registrado nada, ni en la version del usario ni en la version maestra

    $last_edition_day = "0";
    $last_edition_hour = "0";
    $edited_for = "Nueva Entrada";
    $rol_user_edit = "";
} else {
    // $last_edition = explode('T',$last_edition) ;
    // $last_edition_day = $last_edition[0] ;
    // $hour = explode('.',$last_edition[1]);
    //$last_edition_hour = $hour[0]." UTC";
}

$data_for_new_entry = json_encode([
    'usuario_id' => session('id_user'),
    'landing_id' => 2,
    'version_id' => $respuesta->data->grilla[0]->version_id,
    'version_number' => $respuesta->data->grilla[0]->version_number
]);

//Schedule-item-date

?>

<style>
.bootstrap-select > .dropdown-toggle {
    position: relative;
    width: 100%;
    z-index: 1;
    text-align: right;
    white-space: nowrap;
    overflow: auto;
    height: 70px;

}
.bootstrap-select .btn:not(.bs-placeholder) {
  word-spacing: 100px;
  white-space: normal!important;
  word-wrap: break-word!important;
}
      .dropdown-item.active, .dropdown-item:active {
    color: black;
    text-decoration: none;
    background-color: #fff;}

    .dropdown-item{
    display: inline-block;
    position: relative;
    line-height: 0;
    top: 0;
    margin-top: 12px;
    left: 25px;
    height: 0px;
    width: 0px;
    border-radius: 0em;
    border: 2px solid #979797;
    background-color: white;

    padding: 0.45em;
    }
    .bootstrap-select.show-tick .dropdown-menu .selected span.check-mark {
    position: absolute;
    display: inline-block;
    left: 3px;
    top: 0px;
}

.bootstrap-select.show-tick .dropdown-menu li a span.text {
    margin-left: 15px;
}
.btn-light {
    color: #4a4a4a;
    background-color: transparent;
    border-color: transparent;
}

    .bootstrap-select .bs-ok-default:after {
    content: '';
    display: block;
    width: 0.5em;
    left: 5px;
    top: 2px;
    height: 0.8em;
    border-style: solid;
    border-color:#0097a9;
    border-width: 0 0.26em 0.26em 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    }
</style>



<div class="grilla-claro-canal">
    <div class="ml-5 float-left">
        <div><span class="a-text-black-light text-plus">Última edición : <span class="zona">{{$last_edition}}</span> </span></div>
        <span class="a-text-black-light text-plus">Editado por: <label class="zona"> {{$edited_for}} (<label class="zona ">{{$rol_user_edit}}</label>)</label></span>
    </div>
    <div class="d-flex float-right mr-5 ">
        <button class="btn-grilla a-btn-basic-small text-uppercase a-text-MBlack  text-plus mr-3 gril-concert" id="btn-grilla"><span>Grilla</span></button>
        <button class="text-uppercase btn-landing a-btn-basic-small a-text-semi-brown-two text-plus lan-concert" id="btn-landing"><span>Landing</span></button>
    </div>
    <div class="clearfix"></div>
</div>
<div id="bodymenu">
    <div id="grilla">
        <div class=" d-flex ml-5 pt-5 pb-4">
            <div>
                <input id="inp_programing" api='<?php echo $data_for_new_entry; ?>' type="file" class="d-none">
                <label for="inp_programing"  class="cursor-pointer a-btn-orange a-btn-basic-medium pl-2 d-flex align-items-center justify-content-center upload-files" style="padding-left:.2rem"><span class="  text-crea pr-2"><img src="./images/clip.svg" alt="" class="cursor-pointer pr-2">Cargar archivos</span></label>
            </div>
            <!--Fecha de inicio de calendario-->
            <div class="position-relative vueCalendar">
                <input type="text" id="date-start-input" landing="Concert Channel">
                <label for="date-start-input" class="mb-0 ml-5 date-button date-start-table d-flex align-items-center pl-3 pr-3" id="date-start-table">
                    <img src="./images/calendario.svg" alt="">
                    <div class="ml-3">
                        <p class="text-small d-block mb-0 a-text-semibold-warmgrey">Inicio</p>
                    <p class="text-normal mb-0 a-text-bold-charcoal" id="start-date-text">{{$firstDate}}</p>
                    </div>
                </label>
            </div>
            <!--Fecha de fin de calendario-->
            <label for="date-start-input" class="mb-0 ml-5 date-button date-end-table d-flex align-items-center pl-3 pr-3  vueCalendar">
                <img src="./images/calendario.svg" alt="">
                <div class="ml-3">
                    <p class="text-small d-block mb-0 a-text-semibold-warmgrey">Fin</p>
                <p class="text-normal mb-0 a-text-bold-charcoal" id="end-date-text">{{$lastDate}}</p>
                </div>
            </label>
        </div>

        <!--end-->

        <div id="rempla-claro-canal" class="landing-table table-porcent">
            <div id="tb1" class="ml-5 pr-5 conten-tab">
                <div class="mr-5 grilla-body position-relative">
                    <div class="contenedor-fila" id="grilla-header">
                        <div class="contenedor-columna centro centro title-table" id="acciones">
                            <span class="a-text-semibold-white text-normal">Acciones</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table" id="estado">
                            <span class="a-text-semibold-white text-normal">Estado</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table" id="alerta">
                            <span class="a-text-semibold-white text-normal">Alerta</span>
                        </div>

                        <div class="contenedor-columna centro centro title-table" id="program-title-original">
                            <span class="a-text-semibold-white text-normal">Program Title Original</span>
                        </div>

                        <div class="contenedor-columna centro  centro title-table" id="establecer-landing" style="width: 241px">
                            <span class="a-text-semibold-white text-normal">Establecer en landing</span>
                        </div>
                        <div class="contenedor-columna centro  centro title-table" id="landing-programar">
                            <span class="a-text-semibold-white text-normal">Landing de Canal Claro <br />Programar publicación</span>
                        </div>

                        <div class="contenedor-columna centro  centro title-table" id="establecer-home">
                            <span class="a-text-semibold-white text-normal">Establecer en Home</span>
                        </div>
                        <div class="contenedor-columna centro  centro title-table" id="programar-home-publicacion">
                            <span class="a-text-semibold-white text-normal">Home<br /> Progamar publicación</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table" id="imagenes">
                            <span class="a-text-semibold-white text-normal">Imágenes</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table" id="schedule-item-date-time">
                            <span class="a-text-semibold-white text-normal">Schedule Item<br> Date Time</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table" id="schedule-item-date">
                            <span class="a-text-semibold-white text-normal">Schedule Item<br> Long Date</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table" id="schedule-item-time">
                            <span class="a-text-semibold-white text-normal">Schedule Item<br> Long Time (GMT)</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table" id="estimated-duration">
                            <span class="a-text-semibold-white text-normal">Estimated Schedule Item Duration</span>
                        </div>
                        <div class="contenedor-columna centro  centro title-table" id="program-year">
                            <span class="a-text-semibold-white text-normal">Program Year<br> Produced</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table" id="program-genre">
                            <span class="a-text-semibold-white text-normal">Program Genre List</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table" id="program-title-alternate">
                            <span class="a-text-semibold-white text-normal">Program Title Alternate </span>
                        </div>
                        <div class="contenedor-columna centro  centro title-table" id="program-episode-season">
                            <span class="a-text-semibold-white text-normal">Program Episode<br> Season</span>
                        </div>
                        <div class="contenedor-columna centro  centro title-table" id="program-episode-number">
                            <span class="a-text-semibold-white text-normal">Program Episode<br> Number</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table" id="synopsis">
                            <span class="a-text-semibold-white text-normal">Synopsis</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table" id="rating-code">
                            <span class="a-text-semibold-white text-normal">Schedule Item<br> Rating Code</span>
                        </div>
                        <div class="contenedor-columna centro  centro title-table" id="subbed">
                            <span class="a-text-semibold-white text-normal">Scheduled<br> Version SUBBED</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table" id="dubbed">
                            <span class="a-text-semibold-white text-normal">Scheduled Version DUBBED </span>
                        </div>
                        <div class="contenedor-columna centro  centro title-table" id="audio" style="width: 126px">
                            <span class="a-text-semibold-white text-normal">Audio 5.1<br> available</span>
                        </div>
                    </div>
                    @if (count($programs)==0)

                    <div class="contenedor-fila" id="programacion-claro-canal">
                        <!--Acciones-->
                        <div class="contenedor-columna centro"></div>
                        <!--Estado-->
                        <div class="contenedor-columna centro"></div>
                        <!--Alerta-->
                        <div class="contenedor-columna centro"></div>
                        <!--Program Titlte Original-->
                        <div class="contenedor-columna centro">
                            <!--<textarea name="" id="" cols="30" rows="2"></textarea>-->
                        </div>
                        <!--Establecer en landing-->
                        <div class="contenedor-columna centro">
                        </div>
                        <!--Landing Programar Publicación-->
                        <div class="contenedor-columna centro">
                        </div>
                        <!--Establecer en home-->
                        <div class="contenedor-columna centro"></div>
                        <!--Programar publicación home-->
                        <div class="contenedor-columna centro"></div>
                        <!--Imágenes-->
                        <div class="contenedor-columna centro"></div>
                        <!--Schedule Item Date time-->
                        <div class="contenedor-columna centro"></div>
                        <!--Schedule item log date-->
                        <div class="contenedor-columna centro"></div>
                        <!--Schedule item log time-->
                        <div class="contenedor-columna centro"></div>
                        <!--Estimated Schedule item duration-->
                        <div class="contenedor-columna centro"></div>
                        <!--Program Year produced-->
                        <div class="contenedor-columna centro"></div>
                        <!--Program genre list-->
                        <div class="contenedor-columna centro"></div>
                        <!--Program title alternate-->
                        <div class="contenedor-columna centro"></div>
                        <!--Program episode season-->
                        <div class="contenedor-columna centro"></div>
                        <!--Program episode number-->
                        <div class="contenedor-columna centro"></div>
                        <!--Synopsis-->
                        <div class="contenedor-columna centro"></div>
                        <!--Schedule item rating code-->
                        <div class="contenedor-columna centro"></div>
                        <!--Scheduled version subbed-->
                        <div class="contenedor-columna centro"></div>
                         <!--Scheduled version dubbed-->
                        <div class="contenedor-columna centro"></div>
                        <!--Audio 5.1-->
                        <div class="contenedor-columna centro"></div>
                    </div>
                    @else
                    @for ($indexGrill = 0; $indexGrill < count($grill); $indexGrill++)
                    <?php $programs=$grill[$indexGrill]->programs?>
                    @for ($indexPrograms = 0; $indexPrograms < count($programs); $indexPrograms++)

                    <div class="contenedor-fila" id="programacion-claro-{{$programs[$indexPrograms]->chapter_id }}">
                        <!--ACCIONES-->
                    <div class="contenedor-columna selectable-column centro cursor-pointer" id="entrada-{{$programs[$indexPrograms]->chapter_id }}" rel="acciones"><img src="./images/basic-icons/pencil-edit-teal.svg" class="mr-3 edit-row-pencil" alt="pencil"><img src="./images/eliminar-acti.svg" class="delete-row-pencil trash-row" alt="trash" chapter_id="{{$programs[$indexPrograms]->chapter_id}}"></div>
                        <!--ESTADO-->
                        <div class="contenedor-columna centro editable-column cursor-pointer" id="estado-{{$programs[$indexPrograms]->chapter_id }}">
                            @if ($respuesta->data->grilla[0]->version_origin === "master")
                            <span class="program-original">Aprobado</span>
                            @else
                            <span class="program-original">Pendiente de revisión</span>
                            @endif
                        </div>
                        <!--ALERTA-->
                        <div class="contenedor-columna centro editable-column" id="alerta-{{$programs[$indexPrograms]->chapter_id }}"></div>
                        <!--PROGRAM TITLE ORIGINAL-->
                        <div class="contenedor-columna selectable-column centro centro editable-column" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" key="title" rel="program-title-original" id="title-{{$programs[$indexPrograms]->chapter_id }}">
                            <textarea id="program-title" name="" class="editable-attribute program-original edit-cell" id="lb-title-{{$programs[$indexPrograms]->chapter_id }}">{{$programs[$indexPrograms]->title}}</textarea>
                        </div>
                        <!--ESTABLECER EN LANDING-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="establecer-landing" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" key="in_landing">
                            <!--Si no han elegido una sección del landing, entonces las opción
                               por defecto es "No"
                            -->
                                @if ($programs[$indexPrograms]->in_landing == 0)
                                    <div class='yes-no mt-3'>
                                        <input type="radio" name="sino-landing-{{$programs[$indexPrograms]->chapter_id }}" id="yes-landing-{{$programs[$indexPrograms]->chapter_id }}" value="1"  class="switch-landing" />
                                        <label for="yes-landing-{{$programs[$indexPrograms]->chapter_id }}" id="siestado-landing-{{$programs[$indexPrograms]->chapter_id }}" class="si-estilo cursor-pointer switch-label">
                                            Sí</label>
                                        <input type="radio" name="sino-landing-{{$programs[$indexPrograms]->chapter_id }}" id="no-landing-{{$programs[$indexPrograms]->chapter_id }}" value="0" checked class="switch-landing switch-table" />
                                        <label for="no-landing-{{$programs[$indexPrograms]->chapter_id }}" id="noestado-landing-{{$programs[$indexPrograms]->chapter_id }}" class="no-estilo cursor-pointer switch-label">
                                            No</label>
                                    </div>
                                    <div class="establecer-options pointer-none">
                                        <div class=" d-flex mt-2 ml-2 pt-2">
                                            <label class="checkradio d-flex  ml-2">
                                                <input type="radio" name="dontlose-{{$programs[$indexPrograms]->chapter_id}}" value="1" class="switch-table">
                                                <span class="checkmark"></span>
                                            </label>
                                            <span class="text-left cursor-pointer a-text-medium-warmgrey ml-2">Carrusel 1</span>
                                        </div>
                                        <div class="d-flex ml-2 pt-2 pb-2">
                                            <label class="checkradio d-flex ml-2">
                                                <input type="radio" name="dontlose-{{$programs[$indexPrograms]->chapter_id}}" value="2" class="switch-table">
                                                <span class="checkmark"></span>
                                            </label>
                                            <span class="text-left cursor-pointer a-text-medium-warmgrey ml-2">Carrusel 2</span>
                                        </div>
                                    </div>
                                @else
                                    <div class='yes-no mt-3'>
                                        <input type="radio" name="sino-landing-{{$programs[$indexPrograms]->chapter_id }}" id="yes-landing-{{$programs[$indexPrograms]->chapter_id }}" value="1" checked />
                                        <label for="yes-landing-{{$programs[$indexPrograms]->chapter_id }}" id="siestado-landing-{{$programs[$indexPrograms]->chapter_id }}" class="si-estilo cursor-pointer switch-label">
                                            Sí</label>
                                        <input type="radio" class="switch-table switch-landing" name="sino-landing-{{$programs[$indexPrograms]->chapter_id }}" id="no-landing-{{$programs[$indexPrograms]->chapter_id }}" value="0"  />
                                        <label for="no-landing-{{$programs[$indexPrograms]->chapter_id }}" id="noestado-landing-{{$programs[$indexPrograms]->chapter_id }}" class="no-estilo cursor-pointer switch-label">
                                            No</label>
                                    </div>
                                    @if ($programs[$indexPrograms]->in_landing == 1)
                                        <div class="establecer-options">
                                            <div class=" d-flex mt-2 ml-2 pt-2">
                                                <label class="checkradio d-flex  ml-2">
                                                    <input type="radio" checked name="dontlose-{{$programs[$indexPrograms]->chapter_id}}" class="switch-table" value="1" />
                                                    <span class="checkmark"></span>
                                                </label>
                                                <span class="text-left cursor-pointer a-text-medium-brownish ml-2">Carrusel 1</span>
                                            </div>
                                            <div class="d-flex ml-2 pt-2 pb-2">
                                                <label class="checkradio d-flex ml-2">
                                                    <input type="radio" name="dontlose-{{$programs[$indexPrograms]->chapter_id}}" class="switch-table" value="2" />
                                                    <span class="checkmark"></span>
                                                </label>
                                                <span class="text-left cursor-pointer a-text-medium-brownish ml-2">Carrusel 2</span>
                                            </div>
                                        </div>
                                    @else
                                        <div class="establecer-options">
                                            <div class=" d-flex mt-2 ml-2 pt-2">
                                                <label class="checkradio d-flex  ml-2">
                                                    <input type="radio" checked name="dontlose-{{$programs[$indexPrograms]->chapter_id}}" class="switch-table" value="1" />
                                                    <span class="checkmark"></span>
                                                </label>
                                                <span class="text-left cursor-pointer a-text-medium-brownish ml-2">Carrusel 1</span>
                                            </div>
                                            <div class="d-flex ml-2 pt-2 pb-2">
                                                <label class="checkradio d-flex ml-2">
                                                    <input type="radio" name="dontlose-{{$programs[$indexPrograms]->chapter_id}}" class="switch-table" value="2" />
                                                    <span class="checkmark"></span>
                                                </label>
                                                <span class="text-left cursor-pointer a-text-medium-brownish ml-2">Carrusel 2</span>
                                            </div>
                                        </div>
                                    @endif

                                @endif
                        </div>
                        <!--Programar publicacición landing-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="landing-programar" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" key="in_landing_publicacion">
                            @if ($programs[$indexPrograms]->in_landing == 0)
                                <div class="programar-content pointer-none">
                                    <div class="programar-schedule d-flex justify-content-end" key="in_landing_begin">
                                        <div>
                                            <label for="programar-landing" class="a-text-bold-brownish text-normal">Inicio: </label>
                                            <input type="text" id="programar-landing" class="editable-attribute landing-start-day schedule-date-input a-text-medium-brownish table-input" placeholder="00-00-0000">
                                        </div>
                                        <div>
                                            <input type="text" id="programar-landing" class="editable-attribute landing-start-hours time-seconds-input a-text-medium-brownish table-input" placeholder="00:00:00">
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-end programar-schedule" key="in_landing_expiration">
                                        <div>
                                            <label for="programar-landing-end-date" class="a-text-bold-brownish text-normal">Fin: </label>
                                            <input type="text" id="programar-landing-end-date" class="landing-expiration-day editable-attribute schedule-date-input a-text-medium-brownish table-input" placeholder="00-00-0000">
                                        </div>
                                        <div>
                                            <input type="text" id="programar-landing-end-hrs" class="landing-expiration-hours editable-attribute time-seconds-input a-text-medium-brownish table-input" placeholder="00:00:00">
                                        </div>
                                    </div>
                                </div>
                            @else
                                <?php

                                    //Dividimos la hora y la fecha de inicio en landing
                                    $scheduleBegin = explode(" ", $programs[$indexPrograms]->in_landing_begin);
                                    //Dividimos la hora y la fecha de inicio en landing
                                    $scheduleExpiration = explode(" ", $programs[$indexPrograms]->in_landing_expiration);
                                    //Obtenemos la hora de inicio
                                    $timeBegin = isset($scheduleBegin[1]) ? $scheduleBegin[1] : null;
                                    //Obtenemos la fecha de inicio
                                    $dateBegin = isset($scheduleBegin[0]) ? explode("-", $scheduleBegin[0]) : null;
                                    //Obtenemos el año de la fecha de inicio
                                    $dateBeginYear = isset($dateBegin[0]) ? $dateBegin[0] : null;

                                    //Obtenemos el mes de la fecha de inicio
                                    $dateBeginMoth = isset($dateBegin[1]) ? $dateBegin[1] : null;
                                    //Obtenemos el día de la fecha de inicio
                                    $dateBeginDay = isset($dateBegin[2]) ? $dateBegin[2] : null;
                                    //Obtenemos la hora fin
                                    $timeExpiration = isset($scheduleExpiration[1]) ? $scheduleExpiration[1] : null;
                                    //Obtemnemos la fecha de fin
                                    $dateExpiration = explode("-", $scheduleExpiration[0]);
                                    $dateExpirationYear = isset($dateExpiration[2]) ? $dateExpiration[2] : null;
                                    //Obtenemos el mes de la fecha de inicio
                                    $dateExpirationMonth = isset($dateExpiration[1]) ? $dateExpiration[1] : null;
                                    //Obtenemos el día de la fecha de inicio
                                    $dateExpirationDay = isset($dateExpiration[0]) ? $dateExpiration[0] : null;

                                ?>
                                <div class="landing-programar-content">
                                    <div class="programar-schedule d-flex justify-content-end" key="in_landing_begin">
                                        <div>
                                            <label for="programar-landing" class="a-text-bold-brownish text-normal">Inicio: </label>
                                            <input value="{{$dateBeginDay}}-{{$dateBeginMoth}}-{{$dateBeginYear}}" type="text" id="programar-landing" class="editable-attribute landing-start-day schedule-date-input a-text-medium-brownish table-input" placeholder="00-00-0000" chapter="{{$programs[$indexPrograms]->chapter_id}}" >
                                        </div>
                                        <div>
                                            <input value="{{$timeBegin}}" type="text" id="programar-landing" class="editable-attribute landing-start-hours time-seconds-input a-text-medium-brownish table-input" placeholder="00:00:00">
                                        </div>
                                    </div>
                                    <div class="programar-schedule d-flex justify-content-end" key="in_landing_expiration">
                                        <div>
                                            <label for="programar-landing-end-date" class="a-text-bold-brownish text-normal">Fin: </label>
                                        <input value="{{$dateExpirationDay}}-{{$dateExpirationMonth}}-{{$dateExpirationYear}}" type="text" id="programar-landing-end-date" class=" landing-expiration-day editable-attribute schedule-date-input a-text-medium-brownish table-input" placeholder="00-00-0000">
                                        </div>
                                        <div>
                                        <input value="{{$timeExpiration}}" type="text" id="programar-landing-end-hrs" class="landing-expiration-hours editable-attribute time-seconds-input a-text-medium-brownish table-input" placeholder="00:00:00">
                                        </div>
                                    </div>
                                </div>
                            @endif
                        </div>
                        <!--ESTABLECER EN HOME-->
                        @if ($programs[$indexPrograms]->in_home == 0)
                            <div class="contenedor-columna selectable-column centro editable-column" id="programar-{{$programs[$indexPrograms]->chapter_id }}" rel="establecer-home" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" key="in_home">
                                <div class="yes-no">
                                    <input type="radio" name="yes-no-{{$programs[$indexPrograms]->chapter_id }}" id="programar-si-{{$programs[$indexPrograms]->chapter_id }}" value="1" class="switch-home switch-table"/>
                                    <label for="programar-si-{{$programs[$indexPrograms]->chapter_id }}" id="siestado-{{$programs[$indexPrograms]->chapter_id }}" class=" switch-label si-estilo cursor-pointer">
                                        Sí</label>
                                    <input type="radio" name="yes-no-{{$programs[$indexPrograms]->chapter_id }}" id="programar-no-{{$programs[$indexPrograms]->chapter_id }}" value="0" class="switch-home switch-table" checked />
                                    <label for="programar-no-{{$programs[$indexPrograms]->chapter_id }}" id="noestado-{{$programs[$indexPrograms]->chapter_id }}" class="switch-label no-estilo cursor-pointer">
                                        No</label>
                                </div>
                            </div>
                        @else
                            <div class="contenedor-columna selectable-column centro editable-column" id="programar-{{$programs[$indexPrograms]->chapter_id }}" rel="establecer-home" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" key="in_home">
                                <div class="yes-no">
                                    <input type="radio" name="yes-no-{{$programs[$indexPrograms]->chapter_id }}" id="programar-si-{{$programs[$indexPrograms]->chapter_id }}" value="1" class="switch-home switch-table"  checked/>
                                    <label for="programar-si-{{$programs[$indexPrograms]->chapter_id }}" id="siestado-{{$programs[$indexPrograms]->chapter_id }}" class=" switch-label si-estilo cursor-pointer">
                                        Sí</label>
                                    <input type="radio" name="yes-no-{{$programs[$indexPrograms]->chapter_id }}" id="programar-no-{{$programs[$indexPrograms]->chapter_id }}" value="0" class="switch-home switch-table" />
                                    <label for="programar-no-{{$programs[$indexPrograms]->chapter_id }}" id="noestado-{{$programs[$indexPrograms]->chapter_id }}" class="switch-label no-estilo cursor-pointer">
                                        No</label>
                                </div>
                            </div>
                        @endif

                        <!--HOME PROGRAMAR PUBLICACIÓN-->
                        @if ($programs[$indexPrograms]->in_home == 0)

                            <div class="contenedor-columna selectable-column centro editable-column" rel="programar-home-publicacion" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" key="in_home_publicacion">
                                <div class="programar-content pointer-none">
                                    <div class="d-flex justify-content-end programar-schedule" key="in_home_begin">
                                        <div>
                                            <label for="programar-home-date" class="a-text-bold-brownish text-normal">Inicio: </label>
                                            <input type="text" id="programar-home-start-date" class="editable-attribute home-start-day schedule-date-input a-text-medium-brownish table-input" placeholder="00-00-0000">
                                        </div>
                                        <div>
                                            <input type="text" id="programar-home-start-hrs" class="editable-attribute home-start-hours time-seconds-input a-text-medium-brownish table-input" placeholder="00:00:00">
                                        </div>
                                    </div>
                                    <div class="programar-schedule d-flex justify-content-end" key="in_home_expiration">
                                        <div>
                                            <label for="programar-home-end-date" class="a-text-bold-brownish text-normal">Fin: </label>
                                            <input type="text" id="programar-home-end-date" class=" home-expiration-day editable-attribute schedule-date-input a-text-medium-brownish table-input" placeholder="00-00-0000">
                                        </div>
                                        <div>
                                            <input type="text" id="programar-home-end-hrs" class="home-expiration-hours editable-attribute time-seconds-input a-text-medium-brownish table-input" placeholder="00:00:00">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @else
                            <?php
                                //Extraemos la fecha y la hora de inicio
                                $inHomeBegin = explode(" ", $programs[$indexPrograms]->in_home_begin);
                                //Guardamos la fecha
                                $inHomeBeginDate = explode("-", $inHomeBegin[0]);
                                //Guardamos la hora
                                $inHomeBeginTime = isset($inHomeBegin[1]) ? $inHomeBegin[1] : null;
                                //Obtenemos el año
                                $inHomeBeginYear = isset($inHomeBeginDate[0]) ? $inHomeBeginDate[0] : null;
                                $inHomeBeginMonth = isset($inHomeBeginDate[1]) ? $inHomeBeginDate[1] : null;
                                $inHomeBeginDay = isset($inHomeBeginDate[2]) ? $inHomeBeginDate[2] : null;
                                //Obtenemos el mes

                                //Obtenemos el día

                                //Extreamos la fecha y hora final
                                $inHomeExpiration = explode(" ", $programs[$indexPrograms]->in_home_expiration);
                                //Guardamos la fecha
                                $inHomeExpirationDate = explode("-" ,$inHomeExpiration[0]);
                                //Obtenemos el año
                                $inHomeExpirationYear = isset($inHomeExpirationDate[0]) ? $inHomeExpirationDate[0] : null;
                                //Obtenemos el mes
                                $inHomeExpirationMonth = isset($inHomeExpirationDate[1]) ? $inHomeExpirationDate[1] : null;
                                //Obtenemos el día
                                $inHomeExpirationDay = isset($inHomeExpirationDate[2]) ? $inHomeExpirationDate[2] : null;
                                //Guardamos la hora
                                $inHomeExpirationTime = isset($inHomeExpiration[1]) ? $inHomeExpiration[1] : null;
                            ?>
                            <div class="contenedor-columna selectable-column centro editable-column" rel="programar-home-publicacion" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" key="in_home_publicacion">
                                <div class="programar-content">
                                    <div class="d-flex justify-content-end programar-schedule" key="in_home_begin">
                                        <div>
                                            <label for="programar-home-date" class="a-text-bold-brownish text-normal">Inicio: </label>
                                            <input type="text" value="{{$inHomeBeginDay}}-{{$inHomeBeginMonth}}-{{$inHomeBeginYear}}" id="programar-home-start-date" class="editable-attribute home-start-day schedule-date-input a-text-medium-brownish table-input" placeholder="00-00-0000">
                                        </div>
                                        <div>
                                            <input type="text" id="programar-home-start-hrs" class="editable-attribute home-start-hours time-seconds-input a-text-medium-brownish table-input" value="{{$inHomeBeginTime}}" placeholder="00:00:00">
                                        </div>
                                    </div>
                                    <div class="programar-schedule d-flex justify-content-end" key="in_home_expiration">
                                        <div>
                                            <label for="programar-home-end-date" class="a-text-bold-brownish text-normal">Fin: </label>
                                        <input value="{{$inHomeExpirationDay}}-{{$inHomeExpirationMonth}}-{{$inHomeExpirationYear}}" type="text" id="programar-home-end-date" class=" home-expiration-day editable-attribute schedule-date-input a-text-medium-brownish table-input" placeholder="00-00-0000">
                                        </div>
                                        <div>
                                            <input value="{{$inHomeExpirationTime}}" type="text" id="programar-home-end-hrs" class="home-expiration-hours editable-attribute time-seconds-input a-text-medium-brownish table-input" placeholder="00:00:00">
                                        </div>
                                    </div>
                                </div>
                        </div>
                        @endif

                        <!--Imágenes-->
                        @if ($programs[$indexPrograms]->images->cantity_images_uploaded == 0)
                            <div class="contenedor-columna selectable-column centro editable-column" rel="imagenes" id="img-{{ $programs[$indexPrograms]->chapter_id }}">
                                <a href="{{ route ('upimage', $programs[$indexPrograms]->chapter_id)}}">
                                    <div class="image-ta position-relative">
                                    <img src="{{asset('images/add-icon.svg')}}" alt="añadir imagenes" class="add-images-icon upload-files">

                                    <img src="{{$programs[$indexPrograms]->images->thumbnail_list_horizontal}}" alt="" class="image-program">
                                    </div>
                                </a>
                            <span class="d-block a-text-regular-brownishtwo pt-2">Añade imágenes</span>
                                <div>
                                    <span class="a-text-regular-brownishtwo">{{$programs[$indexPrograms]->images->cantity_images_uploaded}}</span><span class="a-text-regular-brownishtwo">/9</span>
                                </div>
                            </div>
                        @else
                            <div class="contenedor-columna selectable-column centro editable-column" rel="imagenes" id="img-{{ $programs[$indexPrograms]->chapter_id }}">
                                <a href="{{ route ('upimage', $programs[$indexPrograms]->chapter_id)}}">
                                    <div class="image-ta position-relative">
                                        <img src="{{asset('/images/basic-icons/pencil-edit-teal.svg')}}" alt="añadir imagenes" class="add-images-icon upload-files">
                                        <img src="{{$programs[$indexPrograms]->images->thumbnail_list_horizontal}}" alt="" class="image-program">
                                    </div>
                                </a>
                            <span class="d-block a-text-regular-brownishtwo pt-2">Modifica imágenes</span>
                                <div>
                                    <span class="a-text-regular-brownishtwo">{{$programs[$indexPrograms]->images->cantity_images_uploaded}}</span><span class="a-text-regular-brownishtwo">/9</span>
                                </div>
                            </div>
                        @endif

                        <?php
                        if($programs[$indexPrograms]->day){
                            $scheduleDate = explode("-", $programs[$indexPrograms]->day);
                            $day = $scheduleDate[2];
                            $month = $scheduleDate[1];
                            $year = $scheduleDate[0];
                        }

                        ?>
                        <!--Schedule item long date time-->
                        <div class="contenedor-columna centro editable-column" rel="schedule-item-date-time">
                            <div class="schedule-date">
                                <label class='a-text-medium-brownish d-flex justify-content-center  pb-2' type=date>{{$day . "-" . $month . "-" .$year}}</label> <label class='a-text-medium-brownish d-flex justify-content-center' type='time' style='line-height:0px;'>{{$programs[$indexPrograms]->programing}} HRS</label>
                            </div>
                        </div>
                        <!--Schedule item long date-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="schedule-item-date" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" key="day">
                            <div class="schedule-date">
                                <input type="text" name="" class="editable-attribute table-input schedule-date-input text-center a-text-regular-brownishtwo" value="{{$day . "-" . $month . "-" .$year}}">
                            </div>
                        </div>
                        <!--Schedule Item Long Time (GMT)-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="schedule-item-time" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" key="programing">
                            <div class="schedule-date">
                                <input type="text" class="editable-attribute table-input text-center schedule-time-input a-text-regular-brownishtwo" value="{{$programs[$indexPrograms]->programing}}">
                            </div>
                        </div>
                        <!--Estimated Schedule Item Duration-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="estimated-duration" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" key="duration">
                            <div class="schedule-date">
                                <input type="text" class="editable-attribute table-input text-center time-seconds-input a-text-regular-brownishtwo" value="{{$programs[$indexPrograms]->duration}}" />
                            </div>
                        </div>
                        <!--Program Year Produced-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="program-year" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" key="program_year_produced">
                            <div class="schedule-date">
                                <input type="text" class="editable-attribute table-input text-center year-input a-text-regular-brownishtwo" value="{{$programs[$indexPrograms]->program_year_produced}}" placeholder="YYYY" />
                            </div>
                        </div>
                        <!--Program genre list-->
                        <div class="contenedor-columna selectable-column centro editable-column a-text-regular-brownishtwo" rel="program-genre" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" key="genre">
                            <div class="schedule-date">
                                <div class="d-flex justify-content-center">
                                    <?php
                                    $genre = "";
                                    $genreProgram = $programs[$indexPrograms]->genre;
                                        for ($i=0; $i < count($genreProgram); $i++) {
                                            if($genreProgram[$i] == ""){
                                                $genre = "Select Option";
                                                break;
                                            }
                                            $genre = $genre . $genreProgram[$i] . " ";
                                        }
                                    ?>

                                    <select class="selectpicker dropup a-text-regular-brownishtwo text-normal show-tick" title="{{$genre}}" multiple data-live-search="true" data-live-search-placeholder="Buscar" data-header="Program List"  data-dropup-auto="false">
                                        @for ($i = 0; $i < count($genres); $i++)
                                            <option class="a-text-regular-brownishtwo text-normal" value="{{$genres[$i]->title}}">{{$genres[$i]->title}}</option>
                                        @endfor
                                    </select>
                                </div>
                            </div>
                        </div>
                        <!--Program title alternate (subtítulo de la película o nombre del capítulo
                        de la serie-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="program-title-alternate" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" key="subtitle">
                            <textarea class="editable-attribute program-original edit-cell" id="lb-subtitle-{{$programs[$indexPrograms]->chapter_id }}">{{$programs[$indexPrograms]->subtitle}}</textarea>
                        </div>
                        <!--Program episode season-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="program-episode-season" key="season" chapter_id="{{$programs[$indexPrograms]->chapter_id}}">
                            <input class="a-text-regular-brownishtwo text-center editable-attribute table-input" value="{{$programs[$indexPrograms]->seasons}}" />
                        </div>
                        <!--Program episode number-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="program-episode-number" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" key="program_episode_number">
                            <input class="a-text-regular-brownishtwo table-input text-center editable-attribute" value="{{$programs[$indexPrograms]->program_episode_number}}" />
                        </div>
                        <!--Synopsis-->
                    <div class="contenedor-columna selectable-column centro editable-column" rel="synopsis" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" key="synopsis" synopsis="{{$programs[$indexPrograms]->synopsis}}">
                            <div class="program-original text-left edit-cell">
                                <span class="mb-0 lb-synopsis" id="lb-synopsis-{{$programs[$indexPrograms]->chapter_id }}">{{$programs[$indexPrograms]->synopsis}}</span>
                                <span class="text-normal cursor-pointer a-text-bold-teal see-more" program_title="{{$programs[$indexPrograms]->title}}">Ver más...</span>
                            </div>
                        </div>
                        <!--Rating-->
                        <div class="contenedor-columna selectable-column centro" rel="rating-code" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" key="rating">
                            <div class="schedule-date">
                                <input class="editable-attribute text-center table-input a-text-regular-brownishtwo" value="{{$programs[$indexPrograms]->rating}}" />
                            </div>
                        </div>
                        <!--SUBBED-->
                        @if ($programs[$indexPrograms]->subbed == 1)
                            <div class="contenedor-columna selectable-column centro editable-column" rel="subbed" key="subbed" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" >
                                <div class="schedule-date">
                                    <div class="yes-no">
                                        <input type="radio" id="yes-subbed-{{$programs[$indexPrograms]->chapter_id}}" name="subbed-{{$programs[$indexPrograms]->chapter_id}}" value="1" checked class="switch-table" />
                                        <label for="yes-subbed-{{$programs[$indexPrograms]->chapter_id}}" id="siestado-date2" class="switch-label cursor-pointer si-estilo">
                                            Sí</label>
                                        <input type="radio" id="no-subbed-{{$programs[$indexPrograms]->chapter_id}}" name="subbed-{{$programs[$indexPrograms]->chapter_id}}" value="0" class="switch-table" />
                                        <label for="no-subbed-{{$programs[$indexPrograms]->chapter_id}}" id="noestado-date2" class="switch-label cursor-pointer no-estilo">
                                            No</label>
                                    </div>
                                </div>
                            </div>
                        @else
                            <div class="contenedor-columna selectable-column centro editable-column" rel="subbed" key="subbed" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" >
                                <div class="schedule-date">
                                    <div class="yes-no">
                                        <input type="radio" id="yes-subbed-{{$programs[$indexPrograms]->chapter_id}}" name="subbed-{{$programs[$indexPrograms]->chapter_id}}" value="1" class="switch-table" />
                                        <label for="yes-subbed-{{$programs[$indexPrograms]->chapter_id}}" id="siestado-date2" class="switch-label cursor-pointer si-estilo">
                                            Sí</label>
                                        <input type="radio" id="no-subbed-{{$programs[$indexPrograms]->chapter_id}}" name="subbed-{{$programs[$indexPrograms]->chapter_id}}" value="0" checked class="switch-table" />
                                        <label for="no-subbed-{{$programs[$indexPrograms]->chapter_id}}" id="noestado-date2" class="switch-label cursor-pointer no-estilo">
                                            No</label>
                                    </div>
                                </div>
                            </div>
                        @endif

                        <!--DUBBED-->
                        @if ($programs[$indexPrograms]->dubbed == 1)
                            <div class="contenedor-columna selectable-column centro editable-column" rel="dubbed" key="dubbed" chapter_id="{{$programs[$indexPrograms]->chapter_id}}">
                                <div class="schedule-date">
                                    <div class="yes-no" chapter_id="{{$programs[$indexPrograms]->chapter_id}}">
                                        <input type="radio" id="yes-dubbed-{{$programs[$indexPrograms]->chapter_id}}" name="dubbed-{{$programs[$indexPrograms]->chapter_id}}" checked value="1" class="switch-table"/>
                                        <label for="yes-dubbed-{{$programs[$indexPrograms]->chapter_id}}" id="siestado-date1" class="switch-label cursor-pointer si-estilo">
                                            Sí</label>
                                        <input type="radio" id="no-dubbed-{{$programs[$indexPrograms]->chapter_id}}" name="dubbed-{{$programs[$indexPrograms]->chapter_id}}" value="0"  class="switch-table" />
                                        <label for="no-dubbed-{{$programs[$indexPrograms]->chapter_id}}" id="noestado-date1" class="switch-label cursor-pointer no-estilo">
                                            No</label>
                                    </div>
                                </div>
                            </div>
                        @else
                            <div class="contenedor-columna selectable-column centro editable-column" rel="dubbed" key="dubbed" chapter_id="{{$programs[$indexPrograms]->chapter_id}}">
                                <div class="schedule-date">
                                    <div class="yes-no" chapter_id="{{$programs[$indexPrograms]->chapter_id}}">
                                        <input type="radio" id="yes-dubbed-{{$programs[$indexPrograms]->chapter_id}}" name="dubbed-{{$programs[$indexPrograms]->chapter_id}}" value="1" class="switch-table"/>
                                        <label for="yes-dubbed-{{$programs[$indexPrograms]->chapter_id}}" id="siestado-date1" class="switch-label cursor-pointer si-estilo">
                                            Sí</label>
                                        <input type="radio" id="no-dubbed-{{$programs[$indexPrograms]->chapter_id}}" name="dubbed-{{$programs[$indexPrograms]->chapter_id}}" value="0" checked class="switch-table" />
                                        <label for="no-dubbed-{{$programs[$indexPrograms]->chapter_id}}" id="noestado-date1" class="switch-label cursor-pointer no-estilo">
                                            No</label>
                                    </div>
                                </div>
                            </div>
                        @endif

                        <!--AUDIO 5.1-->
                        @if ($programs[$indexPrograms]->audio5 == 1)
                            <div class="contenedor-columna selectable-column centro editable-column" rel="audio" key="audio5" chapter_id="{{$programs[$indexPrograms]->chapter_id}}">
                                <div class="schedule-date">
                                    <div class="yes-no" chapter_id="{{$programs[$indexPrograms]->chapter_id}}">
                                        <input type="radio" id="yes-audio-{{$programs[$indexPrograms]->chapter_id}}" name="audio-{{$programs[$indexPrograms]->chapter_id}}" value="1" class="switch-table" checked />
                                        <label for="yes-audio-{{$programs[$indexPrograms]->chapter_id}}" id="siestado-date" class="switch-label cursor-pointer si-estilo">
                                            Sí</label>
                                        <input type="radio" id="no-audio-{{$programs[$indexPrograms]->chapter_id}}" name="audio-{{$programs[$indexPrograms]->chapter_id}}" value="0" class="switch-table" />
                                        <label for="no-audio-{{$programs[$indexPrograms]->chapter_id}}" id="noestado-date" class="switch-label cursor-pointer no-estilo">
                                            No</label>
                                    </div>
                                </div>
                            </div>
                        @else
                            <div class="contenedor-columna selectable-column centro editable-column" rel="audio" key="audio5" chapter_id="{{$programs[$indexPrograms]->chapter_id}}">
                                <div class="schedule-date">
                                    <div class="yes-no" chapter_id="{{$programs[$indexPrograms]->chapter_id}}">
                                        <input type="radio" id="yes-audio-{{$programs[$indexPrograms]->chapter_id}}" name="audio-{{$programs[$indexPrograms]->chapter_id}}" value="1" class="switch-table"/>
                                        <label for="yes-audio-{{$programs[$indexPrograms]->chapter_id}}" id="siestado-date" class="switch-label cursor-pointer si-estilo">
                                            Sí</label>
                                        <input type="radio" id="no-audio-{{$programs[$indexPrograms]->chapter_id}}" name="audio-{{$programs[$indexPrograms]->chapter_id}}" value="0" class="switch-table" checked />
                                        <label for="no-audio-{{$programs[$indexPrograms]->chapter_id}}" id="noestado-date" class="switch-label cursor-pointer no-estilo">
                                            No</label>
                                    </div>
                                </div>
                            </div>
                        @endif

                </div>
                @endfor
                @endfor
                @endif

            </div>
        </div>
        <!--cierre del div conten-tab-->
        <div class="contenedor mb-5 ml-5 pr-5">
            <div class="contenedor-columna centro">
                <div id="agregar-concert-channel" class="d-flex align-items-center a-btn-basic-large a-btn-teal signo justify-content-center  ml-2">
                    <span class="text-crea" style="cursor:pointer">Crear nueva entrada</span>
                </div>
            </div>
        </div>
    </div>
</div>
    <!-- Modal de confirmación al eliminar un programa-->
    <div class="modal" id="confirmation-delete" tabindex="-1" role="dialog"  aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered " role="document">
    <div class="modal-content">
      <div class="modal-body">
          <div class="centro justify-content-center">
          <img src="images/checkers/ready.svg" alt="hecho" class=" pt-5">
        <p class="a-text-medium-warm-grey-three h3 mt-5 mb-5">Se ha eliminado la fila</p>
        <button type="button" class="a-btn-basic-small btn-grilla mb-5 a-text-bold-white text-normal" data-dismiss="modal" chapter_id="">ACEPTAR</button>
        </div>
    </div>
    </div>
  </div>
</div>
@include('partials.adm-CN.grillas.modales-grilla.delete-row')
@include('partials.adm-CN.grillas.modales-grilla.synopsis')
@include('partials.adm-CN.grillas.modales-grilla.load-file')
@include('partials.adm-CN.grillas.modales-grilla.add-info')
@include('partials.adm-CN.grillas.modales-grilla.file-date-before')

