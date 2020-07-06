
<script src="{{ asset('/js/main.js')}}"></script>
<script src="{{ asset('/js/admin.js')}}"></script>
<script src="{{ asset('/js/lib/datepicker.min.js')}}"></script>
<link href="{{ asset('css/datepicker.min.css')}}"rel="stylesheet">
<?php
//recuperamos datos obtenidos por la API
$last_edition = $respuesta->data->last_edition;
$edited_for = $respuesta->data->edited_for;
$rol_user_edit = $respuesta->data->user_rol;
$programs = $respuesta->data->programs;
if($rol_user_edit == "root"){
    $rol_user_edit="Súper Usuario";
}

if(is_null($last_edition) && is_null($edited_for) && is_null($rol_user_edit)){
    // si ninguno esta definido significa que a este dia no se la a registrado nada, ni en la version del usario ni en la version maestra

        $last_edition_day = "0";
        $last_edition_hour = "0";
        $edited_for = "Nueva Entrada";
        $rol_user_edit = "";
}else{
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
            <div><span class="a-text-black-light text-plus">Última edición : <span class="zona"> hey lo {{$last_edition}}</span> </span></div>
            <span class="a-text-black-light text-plus">Por : </span>
            <label class="zona  separacion"> {{$edited_for}} </label>
            <label class="zona ">{{$rol_user_edit}}</label>
        </div>
        <div class="d-flex float-right mr-5 ">
            <button class="btn-grilla a-btn-basic-small text-uppercase a-text-MBlack  text-plus mr-3 gril-claro" id="btn-grilla"><span>Grilla</span></button>
            <button class="text-uppercase btn-landing a-btn-basic-small a-text-semi-brown-two text-plus lan-claro" id="btn-landing" ><span>Landing</span></button>
        </div>
        <div class="clearfix"></div>
    </div>
    <div id="bodymenu">
        <div id="grilla">


            <div class=" d-flex ml-4 pl-3 pt-5 pb-4">
            <div class="position-relative">
                    <label for="date-schedule-landing">
                        <img src="./images/calendario.svg" class="ml-2 mb-3 calendar" alt="">
                    </label>
                    <input type="text" name="" id="date-schedule-landing">
                </div>
                <div id="meses" class="d-flex align-items-center mb-3  ml-5 ">
                    <img src="./images/arrow-light.svg" alt="" class=" mr-4 arrow-r180 arrow-left">
                    <p class=" flex-caption mb-0 progra-month"></p>
                    <img src="./images/arrow-dark.svg" alt="" class=" ml-4 arrow-right">

                </div>
                <div id="dias" class="d-flex align-items-center mb-3 ml-5 ">
                    <img src="./images/arrow-light.svg" alt="" class=" mr-4 arrow-r180 arrow-left">
                    <p class=" flex-caption mb-0 day" id="schedule-day"></p>
                    <img src="./images/arrow-dark.svg" alt="" class=" ml-4 arrow-right">

                </div>

                <div class="  ml-5    ">

                    @if (count($respuesta->data->programs)!=0)
                        <input disabled id="inp_programing_claro_canal" type="file" >
                        <label onclick="subirArchivos()" for="inp_programing_claro_canal" class=" a-btn-orange a-btn-basic-medium pl-2 d-flex align-items-center position-absolute justify-content-center" style="padding-left:.2rem"><span class="  text-crea pr-2"><img src="./images/clip.svg" alt="" class="  pr-2">Cargar archivos</span></label>

                    @else
                        <input id="inp_programing_claro_canal" type="file" >
                        <label for="inp_programing_claro_canal" class="a-btn-orange a-btn-basic-medium pl-2 d-flex align-items-center position-absolute justify-content-center" style="padding-left:.2rem"><span class="  text-crea pr-2"><img src="./images/clip.svg" alt="" class="  pr-2">Cargar archivos</span></label>

                    @endif
                    <!--
                <button class="btn-cargar " id="file" ><span class=" d-flex align-items-center text-crea"><img src="./images/clip.svg" alt="" class=" mr-2">Cargar archivos</span></button>
                 -->
                </div>

            </div>

            <!--end-->

            <div id="rempla-claro-canal">
                <div id="tb1" class="contenedor-tabla  ml-5 pr-5">
                    <div class="contenedor-fila">
                        <div class="contenedor-columna centro centro title-table">
                            <span class="a-text-semibold-white text-normal"> Acciones</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table">
                            <span class="a-text-semibold-white text-normal">Estado</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table">
                            <span class="a-text-semibold-white text-normal">Alerta</span>
                        </div>

                        <div class="contenedor-columna centro centro title-table">
                            <span class="a-text-semibold-white text-normal">Program Title Original</span>
                        </div>
                        <div class="contenedor-columna centro  centro title-table">
                            <span class="a-text-semibold-white text-normal">Establecer en landing</span>
                        </div>
                        <div class="contenedor-columna centro  centro title-table">
                            <span class="a-text-semibold-white text-normal">Landing de Canal ClaroProgramar publicación</span>
                        </div>

                        <div class="contenedor-columna centro  centro title-table">
                            <span class="a-text-semibold-white text-normal">Establecer en Home</span>
                        </div>
                        <div class="contenedor-columna centro  centro title-table">
                            <span class="a-text-semibold-white text-normal">Home Progamar publicación</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table">
                            <span class="a-text-semibold-white text-normal"> Imagenes</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table">
                            <span class="a-text-semibold-white text-normal">Schedule Item Date Time</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table">
                            <span class="a-text-semibold-white text-normal">Schedule Item Long Date</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table">
                            <span class="a-text-semibold-white text-normal">Schedule Item Long Time< (GMT)</span>
                         </div>
                         <div class="contenedor-columna centro centro title-table">
                                    <span class="a-text-semibold-white text-normal">Estimated Schedule Item Duration</span>
                        </div>
                        <div class="contenedor-columna centro  centro title-table">
                            <span class="a-text-semibold-white text-normal">Program Year Produced</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table">
                            <span class="a-text-semibold-white text-normal">Program Genre List</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table">
                            <span class="a-text-semibold-white text-normal">Program Title Alternate </span>
                        </div>
                        <div class="contenedor-columna centro  centro title-table">
                            <span class="a-text-semibold-white text-normal">Program Episode Season</span>
                        </div>
                        <div class="contenedor-columna centro  centro title-table">
                            <span class="a-text-semibold-white text-normal">Program Episode Number</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table">
                            <span class="a-text-semibold-white text-normal">Synopsis</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table">
                            <span class="a-text-semibold-white text-normal">Schedule Item Rating Code</span>
                        </div>
                        <div class="contenedor-columna centro  centro title-table">
                            <span class="a-text-semibold-white text-normal">Scheduled Version SUBBED (1=Yes/0=No)</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table">
                            <span class="a-text-semibold-white text-normal">Scheduled Version DUBBED (1=Yes/0=No)</span>
                        </div>
                        <div class="contenedor-columna centro  centro title-table">
                            <span class="a-text-semibold-white text-normal">Audio 5.1 available
                                (1=Yes/0=No)</span>
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
                            <input type="text" class="date-input" placeholder="">
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
                        <!--Program episode season-->
                        <div class="contenedor-columna centro"></div>
                        <!--Program episode number-->
                        <div class="contenedor-columna centro"></div>
                        <!--Synopsis-->
                        <div class="contenedor-columna centro"></div>
                        <!--Schedule item rating code-->
                        <div class="contenedor-columna centro"></div>
                        <!--Scheduled version dubbed-->
                        <div class="contenedor-columna centro"></div>
                        <!--Audio 5.1-->
                        <div class="contenedor-columna centro"></div>
                        <div class="contenedor-columna centro"></div>
                        <div class="contenedor-columna centro"></div>
                    </div>
                    @else

                    @for ($indexPrograms = 0; $indexPrograms < count($programs); $indexPrograms++)

                <div class="contenedor-fila" id="programacion-claro-{{$programs[$indexPrograms]->id }}">
                        <!--IMÁGENES-->
                        <div class="contenedor-columna centro " id="entrada-{{$programs[$indexPrograms]->id }}"><img src="./images/basic-icons/pencil-edit-teal.svg" class="mr-3" alt="pencil"><img src="./images/basic-icons/trash.svg" alt="trash"></div>
                        <!--ESTADO-->
                        <div class="contenedor-columna centro" id="estado-{{$programs[$indexPrograms]->id }}">
                           @if ($respuesta->data->version_origin === "master")
                                <span class="program-original">Aprobado</span>
                           @else
                                <span class="program-original">Pendiente de revisión</span>
                           @endif
                        </div>
                        <!--ALERTA-->
                        <div class="contenedor-columna centro " id="alerta-{{$programs[$indexPrograms]->id }}"></div>
                        <!--PROGRAM TITLE ORIGINAL-->
                        <div class="contenedor-columna centro centro" id="title-{{$programs[$indexPrograms]->id }}">
                            <textarea name="" class="program-original edit-cell" id="lb-title-{{$programs[$indexPrograms]->id }}">{{$programs[$indexPrograms]->title}}</textarea>
                        </div>
                        <!--ESTABLECER EN LANDING-->
                        <div class="contenedor-columna centro">
                            <!--aqui hace falta cambiar las funciones para los landings-->
                            <div class='yes-no mt-3'>
                                <input type="radio" name="sino-landing-{{$programs[$indexPrograms]->id }}" id="yes-landing-{{$programs[$indexPrograms]->id }}" value="1" />
                                <label for="yes-landing-{{$programs[$indexPrograms]->id }}" id="siestado-landing-{{$programs[$indexPrograms]->id }}" class="si-estilo">
                                    Sí</label>
                                <input type="radio" name="sino-landing-{{$programs[$indexPrograms]->id }}" id="no-landing-{{$programs[$indexPrograms]->id }}" value="0" checked/>
                                <label for="no-landing-{{$programs[$indexPrograms]->id }}" id="noestado-landing-{{$programs[$indexPrograms]->id }}" class="no-estilo">
                                    No</label>
                            </div>
                            <div class=" d-flex mt-3 ml-4"><span class="a-text-medium-brownish ml-5"> No te pierdas</span>
                                <label class="checkradio">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    </label>
                                </div>
                                    <div class="d-flex ml-4 pt-3 pb-3"><span class="a-text-medium-brownish ml-5"> Solo por canal claro</span>
                                    <label class="checkradio">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    </label>
                                </div>
                        </div>
                        <!--Programar publicacición landing-->
                        <div class="contenedor-columna centro">
                            <!--<label class="a-text-medium-brownish text-small d-flex justify-content-center" type="date">DD-MM-YYYY</label> <label class="a-text-medium-brownish text-small d-flex justify-content-center" type="time" style="line-height:0px;">00:00:00 HRS</label>-->
                            <div class="">
                                <label for="programar-landing" class="a-text-bold-brownish text-normal">Inicio: </label>
                                <input type="text" id="programar-landing" placeholder="00-00-0000">
                            </div>
                            <div class="">
                                <input type="text" id="programar-landing" placeholder="00-00-0000">
                            </div>

                        </div>
                        <!--ESTABLECER EN HOME-->
                        <div class="contenedor-columna centro" id="programar-{{$programs[$indexPrograms]->id }}">
                            <div class="yes-no">
                                <input type="radio" name="yes-no-{{$programs[$indexPrograms]->id }}" id="programar-si-{{$programs[$indexPrograms]->id }}" value="1" />
                                <label for="programar-si-{{$programs[$indexPrograms]->id }}" id="siestado-{{$programs[$indexPrograms]->id }}" class="si-estilo">
                                  Sí</label>
                                <input type="radio" name="yes-no-{{$programs[$indexPrograms]->id }}" id="programar-no-{{$programs[$indexPrograms]->id }}" value="0" checked/>
                                <label for="programar-no-{{$programs[$indexPrograms]->id }}" id="noestado-{{$programs[$indexPrograms]->id }}" class="no-estilo">
                                  No</label>
                            </div>
                        </div>
                        <!--HOME PROGRAMAR PUBLICACIÓN-->
                        <div class="contenedor-columna centro">
                            <div >
                                <label class="a-text-medium-brownish text-small d-flex justify-content-center pb-2 pt-2" type="date">DD-MM-YYYY</label> <label class="a-text-medium-brownish text-small d-flex justify-content-center" type="time" style="line-height:0px;">00:00:00 HRS</label>
                            </div>
                        </div>

                        <div class="contenedor-columna centro">
                            <div class="image-ta position-relative">
                            <img src="{{asset('images/add-icon.svg')}}" alt="añadir imagenes" class="add-images-icon">
                                </div>
                                <span class="a-text-regular-brownishtwo text-small">Añade imagenes</span>
                        </div>
                        <div class="contenedor-columna centro ">
                            <div class="schedule-date">
                            <label class='a-text-medium-brownish text-small d-flex justify-content-center  pb-2' type=date>{{$programs[$indexPrograms]->day}}</label> <label class='a-text-medium-brownish text-small d-flex justify-content-center' type='time' style='line-height:0px;'>{{$programs[$indexPrograms]->programing}} HRS</label>


                            </div>
                        </div>
                        <!--Schedule item long date-->
                        <div class="contenedor-columna centro ">
                            <div class="schedule-date">
                            <input type="text" name="" class="table-input schedule-date text-center a-text-regular-brownishtwo text-small" value="{{$programs[$indexPrograms]->day}}">
                            </div>
                        </div>
                        <!--Schedule Item Long Time (GMT)-->
                        <div class="contenedor-columna centro">
                            <div class="schedule-date">
                                <input type="text" class="table-input text-center schedule-time a-text-regular-brownishtwo text-small" value="{{$programs[$indexPrograms]->programing}}">
                            </div>
                        </div>
                        <div class="contenedor-columna centro">
                            <div class="schedule-date">
                                <label class="a-text-regular-brownishtwo text-small" >
                                    {{$programs[$indexPrograms]->duration}}
                                </label>

                            </div>
                        </div>
                        <div class="contenedor-columna centro">
                            <div class="schedule-date">
                                <label class="a-text-regular-brownishtwo text-small" >1982</label>

                            </div>
                        </div>
                        <div class="contenedor-columna centro">
                            <div class="schedule-date">
                                <label class="a-text-regular-brownishtwo text-small">Animación, Cultura, Series</label>

                            </div>
                        </div>
                        <div class="contenedor-columna centro">
                            <label class="a-text-regular-brownishtwo text-small">{{$programs[$indexPrograms]->subtitle}}</label>


                        </div>
                        <div class="contenedor-columna centro">
                            <label class="a-text-regular-brownishtwo text-small" >{{$programs[$indexPrograms]->id}}</label>

                       </div>
                        <div class="contenedor-columna centro">
                            <label class="a-text-regular-brownishtwo text-small">{{$programs[$indexPrograms]->program_episode_number}}</label>

                       </div>
                        <div class="contenedor-columna centro">
                            <label class="a-text-regular-brownishtwo text-small p-2">{{$programs[$indexPrograms]->synopsis}}</label>

                        </div>
                        <div class="contenedor-columna centro">
                            <div class="schedule-date">
                                <label class="a-text-regular-brownishtwo text-small" >{{$programs[$indexPrograms]->rating}}</label>

                            </div>
                        </div>
                        <div class="contenedor-columna centro">
                            <div class="schedule-date">
                            <div class="yes-no">
                    <input type="radio" id="yes-date2"  value="1" checked />
                    <label for="yes-date2" id="siestado-date2" class="si-estilo">
                      Sí</label>
                    <input type="radio"  id="no-date2" value="0"/>
                    <label for="no-date2" id="noestado-date2"class="no-estilo">
                      No</label>
                </div>

                            </div>
                        </div>
                        <div class="contenedor-columna centro">
                            <div class="schedule-date">
                            <div class="yes-no">
                    <input type="radio" id="yes-date1"  value="1" checked />
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
                    <input type="radio" id="yes-date"  value="1" checked />
                    <label for="yes-date" id="siestado-date" class="si-estilo">
                      Sí</label>
                    <input type="radio"  id="no-date" value="0"/>
                    <label for="no-date" id="noestado-date"class="no-estilo">
                      No</label>
                </div>


                            </div>
                        </div>

                    </div>
                    @endfor

                    @endif


                </div>
                <div class="contenedor mb-5 ml-5 pr-5">
                    <div class="contenedor-columna centro">
                        <div id="agregar-canal-claro" onclick='nuevo_programa(<?php echo $data_for_new_entry ;?>)' class="d-flex align-items-center a-btn-basic-large a-btn-teal signo justify-content-center  ml-2">
                            <span class="text-crea" style="cursor:pointer">Crear nueva entrada</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script>

    function nuevo_programa(data){
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

     function subirArchivos(){
         let disabled = $('#inp_programing_claro_canal').prop('disabled');
         if(disabled == true){
             var pregunta = confirm('Este día ya tiene programacion,¿Quieres subir un archivo?');
             if(pregunta == true){
                 $('#inp_programing_claro_canal').prop('disabled',false);
             }
         }

     }

</script>
