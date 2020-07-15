<?php
//recuperamos datos obtenidos por la API
$last_edition = $respuesta->data->last_edition;
$edited_for = $respuesta->data->edited_for;
$rol_user_edit = $respuesta->data->user_rol;
$programs = $respuesta->data->programs;

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
    'landing_id' => 1,
    'version_id' => $respuesta->data->version_id,
    'version_number' => $respuesta->data->version_number
]);

?>
<input type="hidden" name="data_for_api" id="data_for_api" value='<?php echo $data_for_new_entry; ?>' />
<div class="grilla-claro-canal">
    <div class="ml-5 float-left">
        <div><span class="a-text-black-light text-plus">Última edición : <span class="zona">Julio 10, 2020 09:50:30{{$last_edition}}</span> </span></div>
        <span class="a-text-black-light text-plus">Editado por: <label class="zona"> {{$edited_for}} (<label class="zona ">{{$rol_user_edit}}</label>)</label></span>
    </div>
    <div class="d-flex float-right mr-5 ">
        <button class="btn-grilla a-btn-basic-small text-uppercase a-text-MBlack  text-plus mr-3 gril-claro" id="btn-grilla"><span>Grilla</span></button>
        <button class="text-uppercase btn-landing a-btn-basic-small a-text-semi-brown-two text-plus lan-claro" id="btn-landing"><span>Landing</span></button>
    </div>
    <div class="clearfix"></div>
</div>
<div id="bodymenu">
    <div id="grilla">
        <div class=" d-flex ml-5 pt-5 pb-4">
            <div>
                @if (count($respuesta->data->programs)!=0)
                <input disabled id="inp_programing_claro_canal" type="file">
                <label onclick="subirArchivos()" for="inp_programing_claro_canal" class="cursor-pointer a-btn-orange a-btn-basic-medium pl-2 mb-0 d-flex align-items-center justify-content-center" style="padding-left:.2rem"><span class="  text-crea pr-2"><img src="./images/clip.svg" alt="" class="cursor-pointer pr-2">Cargar archivos</span></label>

                @else
                <input id="inp_programing_claro_canal" type="file">
                <label for="inp_programing_claro_canal" class="a-btn-orange a-btn-basic-medium pl-2 d-flex align-items-center justify-content-center" style="padding-left:.2rem"><span class="  text-crea pr-2"><img src="./images/clip.svg" alt="" class="cursor-pointer pr-2">Cargar archivos</span></label>
                @endif
            </div>
            <div class="position-relative">
                <input type="text" id="date-start-input">
                <label for="date-start-input" class="mb-0 ml-5 date-button date-start-table d-flex align-items-center pl-3 pr-3" id="date-start-table">
                    <img src="./images/calendario.svg" alt="">
                    <div class="ml-3">
                        <p class="text-small d-block mb-0 a-text-semibold-warmgrey">Inicio</p>
                        <p class="text-normal mb-0 a-text-bold-charcoal" id="start-date-text">DD-MM-YYYY</p>
                    </div>
                </label>
            </div>

            <label for="date-start-input" class="mb-0 ml-5 date-button date-end-table d-flex align-items-center pl-3 pr-3">
                <img src="./images/calendario.svg" alt="">
                <div class="ml-3">
                    <p class="text-small d-block mb-0 a-text-semibold-warmgrey">Fin</p>
                    <p class="text-normal mb-0 a-text-bold-charcoal" id="end-date-text">DD-MM-YYYY</p>
                </div>
            </label>
            <!--<div class="position-relative">
                    <label for="date-schedule-landing">
                        <img src="./images/calendario.svg" class="ml-2 mb-3 calendar" alt="">
                    </label>
                    <input type="text" name="" id="date-schedule-landing">
                </div>-->
            <!--<div id="meses" class="d-flex align-items-center mb-3  ml-5 ">
                    <img src="./images/arrow-light.svg" alt="" class=" mr-4 arrow-r180 arrow-left">
                    <p class=" flex-caption mb-0 progra-month"></p>
                    <img src="./images/arrow-dark.svg" alt="" class=" ml-4 arrow-right">

                </div>
                <div id="dias" class="d-flex align-items-center mb-3 ml-5 ">
                    <img src="./images/arrow-light.svg" alt="" class=" mr-4 arrow-r180 arrow-left">
                    <p class=" flex-caption mb-0 day" id="schedule-day"></p>
                    <img src="./images/arrow-dark.svg" alt="" class=" ml-4 arrow-right">

                </div>-->
        </div>

        <!--end-->

        <div id="rempla-claro-canal" class="landing-table">
            <div id="tb1" class="ml-5 pr-5 conten-tab">
                <div>
                    <div class="contenedor-fila">
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
                            <span class="a-text-semibold-white text-normal">Landing de Canal ClaroProgramar publicación</span>
                        </div>

                        <div class="contenedor-columna centro  centro title-table" id="establecer-home">
                            <span class="a-text-semibold-white text-normal">Establecer en Home</span>
                        </div>
                        <div class="contenedor-columna centro  centro title-table" id="programar-home-publicacion">
                            <span class="a-text-semibold-white text-normal">Home Progamar publicación</span>
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
                            <input type="text" class="date-input editable-attribute" placeholder="attribute" />
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

                    @for ($indexPrograms = 0; $indexPrograms < count($programs); $indexPrograms++) <div class="contenedor-fila" id="programacion-claro-{{$programs[$indexPrograms]->program_id }}">
                        <!--ACCIONES-->
                        <div class="contenedor-columna selectable-column centro cursor-pointer" id="entrada-{{$programs[$indexPrograms]->chapter_id }}" rel="acciones"><img src="./images/basic-icons/pencil-edit-teal.svg" class="mr-3 edit-row-pencil" alt="pencil"><img src="./images/eliminar-acti.svg" class="delete-row-pencil trash-row" alt="trash"></div>
                        <!--ESTADO-->
                        <div class="contenedor-columna centro editable-column cursor-pointer" id="estado-{{$programs[$indexPrograms]->chapter_id }}">
                            @if ($respuesta->data->version_origin === "master")
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
                        <div class="contenedor-columna selectable-column centro editable-column" rel="establecer-landing" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" key="">
                            <!--Si no han elegido una sección del landing, entonces las opción
                               por defecto es "No"
                            -->
                                @if ($programs[$indexPrograms]->in_landing == 0)
                                    <div class='yes-no mt-3'>
                                        <input type="radio" name="sino-landing-{{$programs[$indexPrograms]->chapter_id }}" id="yes-landing-{{$programs[$indexPrograms]->chapter_id }}" value="1"  class="switch-landing" />
                                        <label for="yes-landing-{{$programs[$indexPrograms]->chapter_id }}" id="siestado-landing-{{$programs[$indexPrograms]->chapter_id }}" class="si-estilo cursor-pointer switch-label">
                                            Sí</label>
                                        <input type="radio" name="sino-landing-{{$programs[$indexPrograms]->chapter_id }}" id="no-landing-{{$programs[$indexPrograms]->chapter_id }}" value="0" checked class="switch-landing" />
                                        <label for="no-landing-{{$programs[$indexPrograms]->chapter_id }}" id="noestado-landing-{{$programs[$indexPrograms]->chapter_id }}" class="no-estilo cursor-pointer switch-label">
                                            No</label>
                                    </div>
                                    <div class="establecer-options pointer-none">
                                        <div class=" d-flex mt-2 ml-2 pt-2">
                                            <label class="checkradio d-flex  ml-2">
                                                <input type="radio" name="dontlose">
                                                <span class="checkmark"></span>
                                            </label>
                                            <span class="cursor-pointer a-text-medium-warmgrey ml-2">Tienes que verlo</span>
                                        </div>
                                        <div class="d-flex ml-2 pt-2 pb-2">
                                            <label class="checkradio d-flex ml-2">
                                                <input type="radio" name="dontlose">
                                                <span class="checkmark"></span>
                                            </label>
                                            <span class="cursor-pointer a-text-medium-warmgrey ml-2">Contenido exclusivo</span>
                                        </div>
                                    </div>

                                @else
                                    <div class='yes-no mt-3'>
                                        <input type="radio" name="sino-landing-{{$programs[$indexPrograms]->chapter_id }}" id="yes-landing-{{$programs[$indexPrograms]->chapter_id }}" value="1" checked/>
                                        <label for="yes-landing-{{$programs[$indexPrograms]->chapter_id }}" id="siestado-landing-{{$programs[$indexPrograms]->chapter_id }}" class="si-estilo cursor-pointer switch-landing">
                                            Sí</label>
                                        <input type="radio" name="sino-landing-{{$programs[$indexPrograms]->chapter_id }}" id="no-landing-{{$programs[$indexPrograms]->chapter_id }}" value="0"  />
                                        <label for="no-landing-{{$programs[$indexPrograms]->chapter_id }}" id="noestado-landing-{{$programs[$indexPrograms]->chapter_id }}" class="no-estilo cursor-pointer switch-landing">
                                            No</label>
                                    </div>
                                    <div class="establecer-options pointer-none">
                                        <div class=" d-flex mt-2 ml-2 pt-2">
                                            <label class="checkradio d-flex  ml-2">
                                                <input type="radio" name="dontlose">
                                                <span class="checkmark"></span>
                                            </label>
                                            <span class="cursor-pointer a-text-medium-brownish ml-2">Tienes que verlo</span>
                                        </div>
                                        <div class="d-flex ml-2 pt-2 pb-2">
                                            <label class="checkradio d-flex ml-2">
                                                <input type="radio" name="dontlose">
                                                <span class="checkmark"></span>
                                            </label>
                                            <span class="cursor-pointer a-text-medium-brownish ml-2">Contenio exclusivo</span>
                                        </div>
                                    </div>
                                @endif
                        </div>
                        <!--Programar publicacición landing-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="landing-programar" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" key="">
                            @if ($programs[$indexPrograms]->in_landing == 0)
                                <div class="programar-content pointer-none">
                                    <div class="d-flex justify-content-end">
                                        <div>
                                            <label for="programar-landing" class="a-text-bold-brownish text-normal">Inicio: </label>
                                            <input type="text" id="programar-landing" class="schedule-date-input a-text-medium-brownish table-input" placeholder="00-00-0000">
                                        </div>
                                        <div>
                                            <input type="text" id="programar-landing" class="time-seconds-input a-text-medium-brownish table-input" placeholder="00:00:00">
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-end">
                                        <div>
                                            <label for="programar-landing-end-date" class="a-text-bold-brownish text-normal">Fin: </label>
                                            <input type="text" id="programar-landing-end-date" class="schedule-date-input a-text-medium-brownish table-input" placeholder="00-00-0000">
                                        </div>
                                        <div>
                                            <input type="text" id="programar-landing-end-hrs" class="time-seconds-input a-text-medium-brownish table-input" placeholder="00:00:00">
                                        </div>
                                    </div>
                                </div>
                            @else
                                <div class="landing-programar-content">
                                    <div class="d-flex justify-content-end">
                                        <div>
                                            <label for="programar-landing" class="a-text-bold-brownish text-normal">Inicio: </label>
                                            <input type="text" id="programar-landing" class="schedule-date-input a-text-medium-brownish table-input" placeholder="0000-00-00">
                                        </div>
                                        <div>
                                            <input type="text" id="programar-landing" class="time-seconds-input a-text-medium-brownish table-input" placeholder="00:00:00">
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-end">
                                        <div>
                                            <label for="programar-landing-end-date" class="a-text-bold-brownish text-normal">Fin: </label>
                                            <input type="text" id="programar-landing-end-date" class="schedule-date-input a-text-medium-brownish table-input" placeholder="0000-00-00">
                                        </div>
                                        <div>
                                            <input type="text" id="programar-landing-end-hrs" class="time-seconds-input a-text-medium-brownish table-input" placeholder="00:00:00">
                                        </div>
                                    </div>
                                </div>
                            @endif
                        </div>
                        <!--ESTABLECER EN HOME-->
                        <div class="contenedor-columna selectable-column centro editable-column" id="programar-{{$programs[$indexPrograms]->chapter_id }}" rel="establecer-home" chapter_id="{{$programs[$indexPrograms]->chapter_id}}">
                            <div class="yes-no">
                                <input type="radio" name="yes-no-{{$programs[$indexPrograms]->chapter_id }}" id="programar-si-{{$programs[$indexPrograms]->chapter_id }}" value="1" class="switch-home"/>
                                <label for="programar-si-{{$programs[$indexPrograms]->chapter_id }}" id="siestado-{{$programs[$indexPrograms]->chapter_id }}" class=" switch-label si-estilo cursor-pointer">
                                    Sí</label>
                                <input type="radio" name="yes-no-{{$programs[$indexPrograms]->chapter_id }}" id="programar-no-{{$programs[$indexPrograms]->chapter_id }}" value="0" class="switch-home" checked />
                                <label for="programar-no-{{$programs[$indexPrograms]->chapter_id }}" id="noestado-{{$programs[$indexPrograms]->chapter_id }}" class="switch-label no-estilo cursor-pointer">
                                    No</label>
                            </div>
                        </div>
                        <!--HOME PROGRAMAR PUBLICACIÓN-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="programar-home-publicacion" chapter_id="{{$programs[$indexPrograms]->chapter_id}}">
                            <div class="d-flex justify-content-end programar-content">
                                <div>
                                    <label for="programar-home-date" class="a-text-bold-brownish text-normal">Inicio: </label>
                                    <input type="text" id="programar-home-start-date" class="schedule-date-input a-text-medium-brownish table-input" placeholder="0000-00-00">
                                </div>
                                <div>
                                    <input type="text" id="programar-home-start-hrs" class="time-seconds-input a-text-medium-brownish table-input" placeholder="00:00:00">
                                </div>
                            </div>
                            <div class="d-flex justify-content-end">
                                <div>
                                    <label for="programar-home-end-date" class="a-text-bold-brownish text-normal">Fin: </label>
                                    <input type="text" id="programar-home-end-date" class="schedule-date-input a-text-medium-brownish table-input" placeholder="0000-00-00">
                                </div>
                                <div>
                                    <input type="text" id="programar-home-end-hrs" class="time-seconds-input a-text-medium-brownish table-input" placeholder="00:00:00">
                                </div>
                            </div>
                        </div>
                        <!--Imágenes-->
                        @if ($programs[$indexPrograms]->images->cantity_images_uploaded_program < 9)
                            <div class="contenedor-columna selectable-column centro editable-column" rel="imagenes">
                                <a href="{{ route ('upimage', $programs[$indexPrograms]->chapter_id)}}">
                                    <div class="image-ta position-relative">
                                    <img src="{{asset('images/add-icon.svg')}}" alt="añadir imagenes" class="add-images-icon">
                                    <img src="{{$programs[$indexPrograms]->images->thumbnail_list_horizontal}}" alt="" class="image-program">
                                    </div>
                                </a>
                            <span class="d-block a-text-regular-brownishtwo pt-2">Añade imágenes</span>
                                <div>
                                    <span class="a-text-regular-brownishtwo">{{$programs[$indexPrograms]->images->cantity_images_uploaded_program}}</span><span class="a-text-regular-brownishtwo">/9</span>
                                </div>
                            </div>
                        @else
                            <div class="contenedor-columna selectable-column centro editable-column" rel="imagenes">
                                <a href="{{ route ('upimage', $programs[$indexPrograms]->chapter_id)}}">
                                    <div class="image-ta position-relative">
                                        <img src="{{asset('/images/basic-icons/pencil-edit-teal.svg')}}" alt="añadir imagenes" class="add-images-icon">
                                        <img src="{{$programs[$indexPrograms]->images->thumbnail_list_horizontal}}" alt="" class="image-program">
                                    </div>
                                </a>
                            <span class="d-block a-text-regular-brownishtwo pt-2">Modica imágenes</span>
                                <div>
                                    <span class="a-text-regular-brownishtwo">{{$programs[$indexPrograms]->images->cantity_images_uploaded_program}}</span><span class="a-text-regular-brownishtwo">/9</span>
                                </div>
                            </div>
                        @endif


                        <!--Schedule item long date time-->
                        <div class="contenedor-columna centro editable-column" rel="schedule-item-date-time">
                            <div class="schedule-date">
                                <label class='a-text-medium-brownish d-flex justify-content-center  pb-2' type=date>{{$programs[$indexPrograms]->day}}</label> <label class='a-text-medium-brownish d-flex justify-content-center' type='time' style='line-height:0px;'>{{$programs[$indexPrograms]->programing}} HRS</label>
                            </div>
                        </div>
                        <!--Schedule item long date-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="schedule-item-date" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" key="">
                            <div class="schedule-date">
                                <input type="text" name="" class="table-input schedule-date-input text-center a-text-regular-brownishtwo" value="{{$programs[$indexPrograms]->day}}">
                            </div>
                        </div>
                        <!--Schedule Item Long Time (GMT)-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="schedule-item-time" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" key="">
                            <div class="schedule-date">
                                <input type="text" class="table-input text-center schedule-time-input a-text-regular-brownishtwo" value="{{$programs[$indexPrograms]->programing}}">
                            </div>
                        </div>
                        <!--Estimated Schedule Item Duration-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="estimated-duration" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" key="">
                            <div class="schedule-date">
                                <input type="text" class="table-input text-center time-seconds-input a-text-regular-brownishtwo" value="{{$programs[$indexPrograms]->duration}}">
                            </div>
                        </div>
                        <!--Program Year Produced-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="program-year" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" key="">
                            <div class="schedule-date">
                                <input type="text" class="table-input text-center year-input a-text-regular-brownishtwo" value="{{$programs[$indexPrograms]->program_year_produced}}" placeholder="YYYY">
                            </div>
                        </div>
                        <!--Program genre list-->
                        <div class="contenedor-columna selectable-column centro editable-column a-text-regular-brownishtwo" rel="program-genre" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" key="">
                            <div class="schedule-date">
                                <div>
                            <details class="sel_users" name="genero"  style="width: 300px;" >
                                <option></option>
                                <option class="a-text-bold-warm text-normal" value='animacion'>Animación</option>
                                <option class="a-text-bold-warm text-normal" value='cultura'>Cultura</option>
                                <option class="a-text-bold-warm text-normal" value='series'>Series</option> 
                                <option class="a-text-bold-warm text-normal" value='comedia'>Comedia</option> 
                                <option class="a-text-bold-warm text-normal" value='romance'>Romance</option> 
</details>
                            </div>
                            </div>
                        </div>
                        <!--Program title alternate (subtítulo de la película o nombre del capítulo
                        de la serie-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="program-title-alternate" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" key="">
                            <textarea class="program-original edit-cell" id="lb-subtitle-{{$programs[$indexPrograms]->chapter_id }}">{{$programs[$indexPrograms]->subtitle}}</textarea>
                        </div>
                        <!--Program episode season-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="program-episode-season" chapter_id="{{$programs[$indexPrograms]->chapter_id}}">
                            <label class="a-text-regular-brownishtwo">{{$programs[$indexPrograms]->chapter_id}}</label>
                        </div>
                        <!--Program episode number-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="program-episode-number" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" key="">
                            <label class="a-text-regular-brownishtwo">{{$programs[$indexPrograms]->program_episode_number}}</label>
                        </div>
                        <!--Synopsis-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="synopsis" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" key="">
                            <div class="program-original text-left edit-cell" id="lb-synopsis-{{$programs[$indexPrograms]->chapter_id }}">
                                <span class="mb-0 lb-synopsis">{{$programs[$indexPrograms]->synopsis}}</span>
                                <span class="text-normal cursor-pointer a-text-bold-teal see-more" program_title="{{$programs[$indexPrograms]->title}}">Ver más...</span>
                            </div>
                        </div>
                        <!--Rating-->
                        <div class="contenedor-columna selectable-column centro" rel="rating-code" key="" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" key="">
                            <div class="schedule-date">
                                <input class="text-center table-input a-text-regular-brownishtwo" value="{{$programs[$indexPrograms]->rating}}" />
                            </div>
                        </div>
                        <!--SUBBED-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="subbed" key="" chapter_id="{{$programs[$indexPrograms]->chapter_id}}" >
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
                        <!--DUBBED-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="dubbed" key="">
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
                        <!--AUDIO 5.1-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="audio" key="">
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
                </div>
                @endfor

                @endif


            </div>
        </div>
        <!--cierre del div conten-tab-->
        <div class="contenedor mb-5 ml-5 pr-5">
            <div class="contenedor-columna centro">
                <div id="agregar-canal-claro" onclick='nuevo_programa(<?php echo $data_for_new_entry; ?>)' class="d-flex align-items-center a-btn-basic-large a-btn-teal signo justify-content-center  ml-2">
                    <span class="text-crea" style="cursor:pointer">Crear nueva entrada</span>
                </div>
            </div>
        </div>
    </div>
</div>
    <!-- Modal eliminar fila-->
    <div class="modal modal-delete-row " tabindex="-1" role="dialog"  aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered " role="document">
    <div class="modal-content">
      <div class="modal-body">
          <div class="centro justify-content-center">
          <img src="images/checkers/ready.svg" alt="hecho" class=" pt-5">
        <p class="a-text-medium-warm-grey-three h3 mt-5 mb-5">Se ha eliminado la fila</p>
        <button type="button" class="a-btn-basic-small  a-btn-teal a-text-bold-white text-plus mb-5" data-dismiss="modal">Aceptar</button>
        </div>
    </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div class="modal fade modal-synopsis
" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <h3 class="text-center a-text-bold-brown-two h3 modal-program-title pt-5 pb-4"></h3>
                <div class="pl-5 pr-5">
                    <textarea name="" id="" class="modal-textarea a-text a-text-medium-warm-grey-three"></textarea>
                    <div class="text-center pt-4 pb-4">
                        <button class="a-btn-basic-small mr-3 a-button-outline-teal a-text-bold-teal text-plus">ACEPTAR</button>
                        <button data-dismiss="modal" class="a-btn-basic-small a-button-primary-teal a-text-MBlack text-plus">CANCELAR</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

<script>
    function nuevo_programa(data) {
        console.log(data);

        $.ajax({
            type: "POST",
            url: "general-program/newRow",
            data: data,
            success: function(result) {
                //var fila =
                //' <div class="contenedor-fila"><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div></div> ';
                $("#tb1").append(result);
                console.log('php responde');
                console.log(result);
            }
        });

    }

    function subirArchivos() {
        let disabled = $('#inp_programing_claro_canal').prop('disabled');
        if (disabled == true) {
            var pregunta = confirm('Este día ya tiene programacion,¿Quieres subir un archivo?');
            if (pregunta == true) {
                $('#inp_programing_claro_canal').prop('disabled', false);
            }
        }

    }
</script>
