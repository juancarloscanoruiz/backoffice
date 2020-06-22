
 <script src="{{ asset('/js/main.js')}}"></script>
<script src="{{ asset('/js/admin.js')}}"></script>
<script src="{{ asset('/js/lib/datepicker.min.js')}}"></script>
<link href="{{ asset('css/datepicker.min.css')}}"rel="stylesheet">

<div class="grilla-claro-cinema">
    <div class=" ml-5"> <span class="zona">Última edición : </span>
        <label class=" text-menu-selec separacion"> Septiembre 17 2019 </label>
        <label class="text-menu-selec">18:33:25</label>
    </div>
    <div class="float-right mb-2 mr-5 ali">
        <span class="zona">Por : </span><label class="text-menu-selec separacion"><span> Antonio López Pérez</span> </label> <label class="text-menu-selec">Usuario editor</label>
    </div>
    <div class="d-flex float-right mt-2 ml-btn mb-5  mr-5">
        <button class="btn-grilla  text-grilla mr-3 " id="btn-grilla" onClick="grilla()"><span>Grilla</span></button>
        <button class="btn-landing  text-landing" id="btn-landing" onClick="viewlandingcinema()"><span>Landing</span></button>
    </div>
    <div id="bodymenu">
        <div id="grilla">
            <div class="  ml-5  mb12  ">
                <input id="inp_programing" type="file">
                <label for="inp_programing" class="btn-cargar pl-2" style="display: flex; align-items:center;position: absolute;padding-left:.2rem"><span class="  text-crea"><img src="./images/clip.svg" alt="" class=" mr-2">Cargar archivos</span></label>
                <!--
            <button class="btn-cargar " id="file" ><span class=" d-flex align-items-center text-crea"><img src="./images/clip.svg" alt="" class=" mr-2">Cargar archivos</span></button>
             -->
            </div>
            <div class=" d-flex ml-5 pl-2 pt7 mb-3">
                <div id="meses" class="d-flex align-items-center mb-3 br-r ">
                    <img src="./images/arrow-light.svg" alt="" class=" mr-4 arrow-r180 arrow-left">
                    <p class=" flex-caption mb-0 progra-month"></p>
                    <img src="./images/arrow-dark.svg" alt="" class=" ml-4 arrow-right">

                </div>
                <div id="dias" class="d-flex align-items-center mb-3 br-r ">
                    <img src="./images/arrow-light.svg" alt="" class=" mr-4 arrow-r180 arrow-left">
                    <p class=" flex-caption mb-0 day" id="schedule-day"></p>
                    <img src="./images/arrow-dark.svg" alt="" class=" ml-4 arrow-right">

                </div>
                <div class="position-relative">
                    <label for="date-schedule-landing">
                        <img src="./images/calendario.svg" class="ml-2 mb-3 calendar" alt="">
                    </label>
                    <input type="text" name="" id="date-schedule-landing">
                </div>
            </div>

            <!--end-->

            <div id="rempla">
                <div id="tb1" class="contenedor-tabla  ml-5 pr-5">
                    <div class="contenedor-fila">
                        <div class="contenedor-columna centro title-table">
                            <span class="text-public"> Entrada</span>
                        </div>
                        <div class="contenedor-columna centro title-table">
                            <span class="text-public">Estado</span>
                        </div>
                        <div class="contenedor-columna centro title-table">
                            <span class="text-public">Alerta</span>
                        </div>
                        <div class="contenedor-columna  centro title-table">
                            <span class="text-public"> Seleccionar</span>
                        </div>
                        <div class="contenedor-columna centro title-table">
                            <span class="text-public">Program Title Original</span>
                        </div>
                        <div class="contenedor-columna  centro title-table">
                            <span class="text-public">Programar publicación</span>
                        </div>
                        <div class="contenedor-columna  centro title-table">
                            <span class="text-public">Periodicidad</span>
                        </div>
                        <div class="contenedor-columna  centro title-table">
                            <span class="text-public">Establecer en Home</span>
                        </div>
                        <div class="contenedor-columna centro title-table">
                            <span class="text-public">Establecer en landing</span>
                        </div>
                        <div class="contenedor-columna centro title-table">
                            <span class="text-public"> Imagenes</span>
                        </div>
                        <div class="contenedor-columna centro title-table">
                            <span class="text-public">Schedule Item Date Time</span>
                        </div>
                        <div class="contenedor-columna centro title-table">
                            <span class="text-public">Schedule Item Long Date</span>
                        </div>
                        <div class="contenedor-columna centro title-table">
                            <span class="text-public">Schedule Item Long Time< (GMT)</span> </div> <div class="contenedor-columna centro title-table">
                                    <span class="text-public">Estimated Schedule Item Duration</span>
                        </div>
                        <div class="contenedor-columna  centro title-table">
                            <span class="text-public">Program Year Produced</span>
                        </div>
                        <div class="contenedor-columna centro title-table">
                            <span class="text-public">Program Genre List</span>
                        </div>
                        <div class="contenedor-columna centro title-table">
                            <span class="text-public">Program Title Alternate </span>
                        </div>
                        <div class="contenedor-columna  centro title-table">
                            <span class="text-public">Program Episode Season</span>
                        </div>
                        <div class="contenedor-columna  centro title-table">
                            <span class="text-public">Program Episode Number</span>
                        </div>
                        <div class="contenedor-columna centro title-table">
                            <span class="text-public">Synopsis</span>
                        </div>
                        <div class="contenedor-columna centro title-table">
                            <span class="text-public">Schedule Item Rating Code</span>
                        </div>
                        <div class="contenedor-columna  centro title-table">
                            <span class="text-public">Scheduled Version SUBBED (1=Yes/0=No)</span>
                        </div>
                        <div class="contenedor-columna centro title-table">
                            <span class="text-public">Scheduled Version DUBBED (1=Yes/0=No)</span>
                        </div>
                        <div class="contenedor-columna  centro title-table">
                            <span class="text-public">Audio 5.1 available
                                (1=Yes/0=No)</span>
                        </div>
                    </div>
                    <div class="contenedor-fila" id="programacion-concert-channel">
                        <div class="contenedor-columna"></div>
                        <div class="contenedor-columna"></div>
                        <div class="contenedor-columna"></div>
                        <div class="contenedor-columna"></div>
                        <div class="contenedor-columna"></div>
                        <div class="contenedor-columna"></div>
                        <div class="contenedor-columna"></div>
                        <div class="contenedor-columna"></div>
                        <div class="contenedor-columna"></div>
                        <div class="contenedor-columna"></div>
                        <div class="contenedor-columna"></div>
                        <div class="contenedor-columna"></div>
                        <div class="contenedor-columna"></div>
                        <div class="contenedor-columna"></div>
                        <div class="contenedor-columna"></div>
                        <div class="contenedor-columna"></div>
                        <div class="contenedor-columna"></div>
                        <div class="contenedor-columna"></div>
                        <div class="contenedor-columna"></div>
                        <div class="contenedor-columna"></div>
                        <div class="contenedor-columna"></div>
                        <div class="contenedor-columna"></div>
                        <div class="contenedor-columna"></div>
                        <div class="contenedor-columna"></div>
                    </div>
                </div>
                <div class="contenedor mb-5 ml-5 pr-5">
                    <div class="contenedor-columna">
                        <div id="agregar" class="d-flex align-items-center btn-crear signo justify-content-center  ml-2">
                            <span class="text-crea">Crear nueva entrada</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
