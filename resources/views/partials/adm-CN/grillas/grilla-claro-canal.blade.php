
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
    $rol_user_edit="super usuario";
}

if(is_null($last_edition) && is_null($edited_for) && is_null($rol_user_edit)){
    // si ninguno esta definido significa que a este dia no se la a registrado nada, ni en la version del usario ni en la version maestra

        $last_edition = "0";
        $edited_for = "Nueva Entrada";
        $rol_user_edit = "";
}

$data_for_new_entry = json_encode([
    'usuario_id' => session('id_user'),
    'landing_id' => 1,
    'version_id' => $respuesta->data->version_id,
    'version_number' => $respuesta->data->version_number
]);

?>
<div class="grilla-claro-canal">
    <div class=" ml-5"> <span cass="zona">Última edición : </span>
    <label class=" text-menu-selec separacion">{{$last_edition}}</label>
        <label class="text-menu-selec">{{$last_edition}}</label>
        <div class="d-flex float-right  ml-btn   mr-5 ">
        <button class="btn-grilla a-btn-basic-small text-grilla mr-3 gril-claro" id="btn-grilla"><span>Grilla</span></button>
        <button class="btn-landing a-btn-basic-small text-landing lan-claro" id="btn-landing" ><span>Landing</span></button>
    </div>
    <div class="clearfix"></div>
    </div>
    <div class=" mb-2 ml-5 ">
    <span class="zona">Por : </span><label class="text-menu-selec separacion"><span> {{$edited_for}}</span> </label> <label class="text-menu-selec">{{$rol_user_edit}}</label>
   
</div>

   
    <div id="bodymenu">
        <div id="grilla">


            <div class=" d-flex ml-4 pl-3 pt-5 mb-3">
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
                        <label onclick="subirArchivos()" for="inp_programing_claro_canal" class=" a-btn-orange a-btn-basic-medium pl-2 d-flex align-items-center position-absolute justify-content-center" style="padding-left:.2rem"><span class="  text-crea pr-4"><img src="./images/clip.svg" alt="" class=" mr-4 pr-2">Cargar archivos</span></label>
    
                    @else
                        <input id="inp_programing_claro_canal" type="file" >
                        <label for="inp_programing_claro_canal" class="a-btn-orange a-btn-basic-medium pl-2 d-flex align-items-center position-absolute justify-content-center" style="padding-left:.2rem"><span class="  text-crea pr-4"><img src="./images/clip.svg" alt="" class=" mr-4 pr-2">Cargar archivos</span></label>
    
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
                            <span class="text-public"> Acciones</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table">
                            <span class="text-public">Estado</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table">
                            <span class="text-public">Alerta</span>
                        </div>
                        <div class="contenedor-columna centro  centro title-table">
                            <span class="text-public"> Seleccionar</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table">
                            <span class="text-public">Program Title Original</span>
                        </div>
                        <div class="contenedor-columna centro  centro title-table">
                            <span class="text-public">Programar publicación</span>
                        </div>
                        <div class="contenedor-columna centro  centro title-table">
                            <span class="text-public">Periodicidad</span>
                        </div>
                        <div class="contenedor-columna centro  centro title-table">
                            <span class="text-public">Establecer en Home</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table">
                            <span class="text-public">Establecer en landing</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table">
                            <span class="text-public"> Imagenes</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table">
                            <span class="text-public">Schedule Item Date Time</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table">
                            <span class="text-public">Schedule Item Long Date</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table">
                            <span class="text-public">Schedule Item Long Time< (GMT)</span> </div> <div class="contenedor-columna centro centro title-table">
                                    <span class="text-public">Estimated Schedule Item Duration</span>
                        </div>
                        <div class="contenedor-columna centro  centro title-table">
                            <span class="text-public">Program Year Produced</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table">
                            <span class="text-public">Program Genre List</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table">
                            <span class="text-public">Program Title Alternate </span>
                        </div>
                        <div class="contenedor-columna centro  centro title-table">
                            <span class="text-public">Program Episode Season</span>
                        </div>
                        <div class="contenedor-columna centro  centro title-table">
                            <span class="text-public">Program Episode Number</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table">
                            <span class="text-public">Synopsis</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table">
                            <span class="text-public">Schedule Item Rating Code</span>
                        </div>
                        <div class="contenedor-columna centro  centro title-table">
                            <span class="text-public">Scheduled Version SUBBED (1=Yes/0=No)</span>
                        </div>
                        <div class="contenedor-columna centro centro title-table">
                            <span class="text-public">Scheduled Version DUBBED (1=Yes/0=No)</span>
                        </div>
                        <div class="contenedor-columna centro  centro title-table">
                            <span class="text-public">Audio 5.1 available
                                (1=Yes/0=No)</span>
                        </div>
                    </div>
                    @if (count($programs)==0)
                   
                    <div class="contenedor-fila" id="programacion-claro-canal">
                        <div class="contenedor-columna centro"></div>
                        <div class="contenedor-columna centro"></div>
                        <div class="contenedor-columna centro"></div>
                        <div class="contenedor-columna centro"></div>
                        <div class="contenedor-columna centro"></div>
                        <div class="contenedor-columna centro"></div>
                        <div class="contenedor-columna centro"></div>
                        <div class="contenedor-columna centro"></div>
                        <div class="contenedor-columna centro"></div>
                        <div class="contenedor-columna centro"></div>
                        <div class="contenedor-columna centro"></div>
                        <div class="contenedor-columna centro"></div>
                        <div class="contenedor-columna centro"></div>
                        <div class="contenedor-columna centro"></div>
                        <div class="contenedor-columna centro"></div>
                        <div class="contenedor-columna centro"></div>
                        <div class="contenedor-columna centro"></div>
                        <div class="contenedor-columna centro"></div>
                        <div class="contenedor-columna centro"></div>
                        <div class="contenedor-columna centro"></div>
                        <div class="contenedor-columna centro"></div>
                        <div class="contenedor-columna centro"></div>
                        <div class="contenedor-columna centro"></div>
                        <div class="contenedor-columna centro"></div>
                       
                    </div>
                    @else

                    @for ($indexPrograms = 0; $indexPrograms < count($programs); $indexPrograms++)
                        
                <div class="contenedor-fila" id="programacion-claro-{{$programs[$indexPrograms]->id }}">
                        <div class="contenedor-columna centro " id="entrada-{{$programs[$indexPrograms]->id }}"> <img src="./images/basic-icons/trash.svg" class="mx-auto"alt=""> <img src="./images/basic-icons/pencil-edit-teal.svg" class="mx-auto"alt=""></div>
                        <div class="contenedor-columna centro " id="estado-{{$programs[$indexPrograms]->id }}">
                           @if ($respuesta->data->version_origin === "master")
                                <img src="./images/apro-naran.svg" class="mx-auto" alt=""><br>
                                <span class="program-original"> Aprobado </span>
                           @else
                                <img src="./images/pendientes.svg" class="mx-auto" alt=""><br>
                                <span class="program-original"> Pendiente de revisión </span>  
                           @endif
                        </div>
                        <div class="contenedor-columna centro " id="alerta-{{$programs[$indexPrograms]->id }}"></div>
                        <div class="contenedor-columna centro " id="seleccionar-{{$programs[$indexPrograms]->id }}">  
                            <label class="mg6 checkradio">
                            <input type="checkbox" id="cb-seleccionar-{{$programs[$indexPrograms]->id }}">
                            <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="contenedor-columna centro centro" id="title-{{$programs[$indexPrograms]->id }}">
                            <label class="program-original" id="lb-title-{{$programs[$indexPrograms]->id }}"> {{$programs[$indexPrograms]->title }}</label>
                             <img src="./images/pencil.svg"  alt="" class=""class="pencil">
           
                        </div>
                        <div class="contenedor-columna centro " id="programar-{{$programs[$indexPrograms]->id }}">
                            <div class="yes-no">
                                <input type="radio" name="yes-no-{{$programs[$indexPrograms]->id }}" id="programar-si-{{$programs[$indexPrograms]->id }}" checked />
                                <label for="si-{{$programs[$indexPrograms]->id }}" id="siestado-{{$programs[$indexPrograms]->id }}" class="si-estilo">
                                  Sí</label>
                                <input type="radio" name="yes-no-{{$programs[$indexPrograms]->id }}" id="programar-no-{{$programs[$indexPrograms]->id }}" />
                                <label for="no-{{$programs[$indexPrograms]->id }}" id="noestado-{{$programs[$indexPrograms]->id }}" class="no-estilo">
                                  No</label>
                              </div>
                              <img src="./images/pencil.svg" alt=""class="pencil1">
            
                              <div class=" d-flex fechas ">
                                 <label class="date" type=date>{{$programs[$indexPrograms]->day }}</label> <label class="date" type="time">00:00</label>
                              </div>
                        </div>
                        <div class="contenedor-columna centro">
                            <div class="periodicidad">
                                <input type="radio" name="si-no-periodicidad-{{$programs[$indexPrograms]->id }}" id="yes-periodicidad-{{$programs[$indexPrograms]->id }}" checked="true" />
                                <label for="yes-periodicidad-{{$programs[$indexPrograms]->id }} " id="siestado-periodicidad-{{$programs[$indexPrograms]->id }}" class="si-estilo1">
                                  Sí</label>
                                <input type="radio" name="si-no-periodicidad-{{$programs[$indexPrograms]->id }}" id="no-periodicidad-{{$programs[$indexPrograms]->id }}" checked="false"/>
                                <label for="no-periodicidad-{{$programs[$indexPrograms]->id }}" id="noestado-periodicidad-{{$programs[$indexPrograms]->id }}" class="no-estilo1">
                                  No</label>
                            </div>
                        </div>
                        <div class="contenedor-columna centro"><label class="mg6 checkradio  mb-5">
                            @if ($programs[$indexPrograms]->in_home == 1)
                                <input type="checkbox" id="in_home-{{$programs[$indexPrograms]->id}}" checked>
                                <span class="checkmark"></span>
                                </label>
                                <div class="vigencia mt-5" style="text-align: center">  
                                    @if ($programs[$indexPrograms]->in_home_expiration == null)
                                        <label class="text-public">Permanente</label>
                                    @else
                                        <label class="text-public">{{$programs[$indexPrograms]->in_home_expiration}}</label>
                                    @endif        
                                   
                                    <img src="./images/pencil.svg" alt=""class="pencil">
                                </div>
                            @else
                                <input type="checkbox" id="in_home-{{$programs[$indexPrograms]->id}}">
                                <span class="checkmark"></span>
                                </label>
                                <div class="vigencia mt-5">          
                                    <label class="text-public">Vigencia en home</label>
                                    <img src="./images/pencil.svg" alt=""class="pencil">
                                </div>
                            @endif
                        </div>   
                        <div class="contenedor-columna centro">
                            <div class=" d-flex mt-3 ml-4"><span class="text-lan ml-5 mtop-8"> No te pierdas</span>
                                <label class="checkradio">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    </label>
                                </div>
                                    <div class="d-flex ml-4"><span class="text-lan ml-5 mtop-8 mb-4"> Solo por canal claro</span>
                                    <label class="checkradio">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    </label>
                                    </div>
                                    <div class="vige-lan">
                                    <label class="text-public">Vigencia en landing</label>
                                    </div>
                        </div>
                        <div class="contenedor-columna centro">
                            <div class="image-ta">
                                <img src="./images/pencil.svg" alt=""class="pencil2">
                                </div>
                        </div>
                        <div class="contenedor-columna centro ">
                            <div class="schedule-date">
                                <label class="a-text-regular-brownishtwo text-small">{{$programs[$indexPrograms]->day}} {{$programs[$indexPrograms]->programing}}</label>
                                <img src="./images/pencil.svg" alt=""class="pencil">
                            </div>
                        </div>
                        <div class="contenedor-columna centro ">
                            <div class="schedule-date">
                                <label class="a-text-regular-brownishtwo text-small" >{{$programs[$indexPrograms]->day}}</label>
                                <img src="./images/pencil.svg" alt=""class="pencil">
                            </div>
                        </div>
                        <div class="contenedor-columna centro">
                            <div class="schedule-date">
                                <label class="a-text-regular-brownishtwo text-small" >{{$programs[$indexPrograms]->programing}}</label>
                                <img src="./images/pencil.svg" alt=""class="pencil">
                            </div>
                        </div>
                        <div class="contenedor-columna centro">
                            <div class="schedule-date">
                                <label class="a-text-regular-brownishtwo text-small" >12:07:19 AM</label>
                                <img src="./images/pencil.svg" alt=""class="pencil">
                            </div>
                        </div>
                        <div class="contenedor-columna centro">
                            <div class="schedule-date">
                                <label class="a-text-regular-brownishtwo text-small" >1982</label>
                                <img src="./images/pencil.svg" alt=""class="pencil">
                            </div>
                        </div>
                        <div class="contenedor-columna centro">
                            <div class="schedule-date">
                                <label class="a-text-regular-brownishtwo text-small">Animación, Cultura, Series</label>
                                <img src="./images/pencil.svg" alt="" class="pencil">
                            </div>
                        </div>
                        <div class="contenedor-columna centro">
                            <label class="a-text-regular-brownishtwo text-small">{{$programs[$indexPrograms]->subtitle}}</label>
                            <img src="./images/pencil.svg" alt="" class="pencil">
                       
                        </div>
                        <div class="contenedor-columna centro">
                            <label class="a-text-regular-brownishtwo text-small" >{{$programs[$indexPrograms]->id}}</label>
                            <img src="./images/pencil.svg" alt="" class="pencil">
                       </div>
                        <div class="contenedor-columna centro">  
                            <label class="a-text-regular-brownishtwo text-small">{{$programs[$indexPrograms]->program_episode_number}}</label>
                            <img src="./images/pencil.svg" alt="" class="pencil">
                       </div>
                        <div class="contenedor-columna centro" style="white-space: auto;">  
                            <label class="a-text-regular-brownishtwo text-small">{{$programs[$indexPrograms]->short_synopsis}}</label>
                        <img src="./images/pencil.svg" alt="" class="pencil">
                        </div>
                        <div class="contenedor-columna centro">
                            <div class="schedule-date">
                                <label class="a-text-regular-brownishtwo text-small" >{{$programs[$indexPrograms]->rating}}</label>
                                <img src="./images/pencil.svg" alt="" class="pencil">
                            </div>
                        </div>
                        <div class="contenedor-columna centro">
                            <div class="schedule-date">
                                <label class="a-text-regular-brownishtwo text-small" >0</label>
                                <img src="./images/pencil.svg" alt="" class="pencil">
                            </div>
                        </div>
                        <div class="contenedor-columna centro">
                            <div class="schedule-date">
                                <label class="a-text-regular-brownishtwo text-small" >0</label>
                                <img src="./images/pencil.svg" alt="" class="pencil">
                            </div>
                        </div>
                        <div class="contenedor-columna centro">
                            <div class="schedule-date">
                                <label class="a-text-regular-brownishtwo text-small" >0</label>
                                <img src="./images/pencil.svg" alt="" class="pencil">
                            </div>
                        </div>
                       
                    </div>
                    @endfor

                    @endif
                        

                </div>
                <div class="contenedor mb-5 ml-5 pr-5">
                    <div class="contenedor-columna centro">
                        <div id="agregar-canal-claro" onclick='nuevo_programa(<?php echo $data_for_new_entry ;?>)' class="d-flex align-items-center a-btn-basic-large a-btn-teal signo justify-content-center  ml-2">
                            <span class="text-crea">Crear nueva entrada</span>
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
