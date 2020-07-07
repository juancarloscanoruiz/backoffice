<div class="grilla-home">
<div class=" ml-5"> <span cass="a-text-black-light text-normal">Última edición : </span>
    <label class=" zona text-normal separacion">{{$last_edition}}</label>
        <label class="zona-text-normal">{{$last_edition}}</label>
        <div class="d-flex float-right  ml-btn   mr-5 ">
        <button class="btn-grilla a-btn-basic-small text-grilla mr-3 gril-claro" id="btn-grilla"><span>Grilla</span></button>
        <button class="btn-landing a-btn-basic-small text-landing lan-claro" id="btn-landing" ><span>Landing</span></button>
    </div>
    </div>
    <div class=" mb-2 ml-5 ">
    <span class="a-text-black-light">Por : </span>
    <label class="zona text-normal separacion"> {{$edited_for}} </label>
     <label class="zona text-normal">{{$rol_user_edit}}</label>

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

            <div id="rempla">
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

                        <div class="contenedor-columna centro centro title-table">
                            <span class="text-public">Program Title Original</span>
                        </div>
                        <div class="contenedor-columna centro  centro title-table">
                            <span class="text-public">Programar publicación</span>
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
                    <div class="contenedor-fila" id="programacion-concert-channel">
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
                </div>
                <div class="contenedor mb-5 ml-5 pr-5">
                    <div class="contenedor-columna">
                        <div id="agregar" class="d-flex align-items-center a-btn-basic-large a-btn-teal signo justify-content-center  ml-2">
                        <span class="text-crea" style="cursor:pointer">Crear nueva entrada</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
