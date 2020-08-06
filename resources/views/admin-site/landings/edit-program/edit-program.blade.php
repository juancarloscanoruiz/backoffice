@extends('layaout.app')
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.css" />
@yield('scripts')

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js"></script>


<div class="modal fade " id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true"style="  display:contents;  overflow: auto;">
  <div class="modal-dialog" role="document"style="    max-width: 1250px;">
    <div class="modal-content">
      <div class="modal-body pt-0">
        <h3 class="a-text-bold-black h3 ml-5 mt-4">CANAL CLARO</h3>
        <h4 class="a-text-bold-black mt-4 text-plus ml-5 mb-4"> CARGAR IMÁGENES EN FORMATO JPG</h4>
        <h2 class="h2 text-center a-text-black-brown-two ">PROGRAMACIÓN PRINCIPAL - CARRUSEL 1</h2>
        <hr class="d-flex align-content-center separationhr col-11 mt-5 mb-0">
        <div class="col-11 mx-auto">
            <!--Estado y alertas del programa-->
            <section class="mt-4 d-flex justify-content-between">
                <div class="col-5">
                    <h3 class="h3 a-text-semibold-warmgrey text-uppercase mb-4">Estado</h3>
                    <div class="state-container py-2 d-flex align-items-center justify-content-center">
                        <img src="{{ asset('/images/basic-icons/pencil-edit-teal.svg') }}" alt="">
                        <p class="mb-0 ml-3 a-text-bold-teal">En edición</p>
                    </div>
                </div>
                <div class="col-5">
                    <h3 class="h3 a-text-semibold-warmgrey text-uppercase mb-4">Alerta</h3>
                    <div class="py-2 alert-container d-flex align-items-center justify-content-center">
                        <img src="
                                                                                                                                        {{ asset('/images/basic-icons/warning-orange-icon.svg') }}"
                            alt="">
                        <p class="mb-0 ml-3 a-text-bold-orange">Proporcionar información</p>
                    </div>
                </div>

            </section>
            <!--Slider de calendario-->
            <section class="col-8 mx-auto">
                <h3 class="h3 a-text-semibold-brownish-grey-three text-uppercase mb-5 mt-6"
                    id="slider-calendar-current-date">Octubre 2020</h3>
                <div class="mb-5 calendar-slider">
                    <li class="programming-item programming-item-active">
                        <p class="mb-0">MIER</p>
                        <p class="mb-0">01</p>
                    </li>
                    <li class="programming-item">
                        <p class="mb-0">MIER</p>
                        <p class="mb-0">01</p>
                    </li>
                    <li class="programming-item">
                        <p class="mb-0">MIER</p>
                        <p class="mb-0">01</p>
                    </li>
                    <li class="programming-item">
                        <p class="mb-0">MIER</p>
                        <p class="mb-0">01</p>
                    </li>
                    <li class="programming-item">

                        <p class="mb-0">MIER</p>
                        <p class="mb-0">01</p>

                    </li>
                    <li class="programming-item">

                        <p class="mb-0">MIER</p>
                        <p class="mb-0">01</p>

                    </li>
                    <li class="programming-item">

                        <p class="mb-0">MIER</p>
                        <p class="mb-0">01</p>

                    </li>
                    <li class="programming-item">

                        <p class="mb-0">MIER</p>
                        <p class="mb-0">01</p>

                    </li>
                    <li class="programming-item">

                        <p class="mb-0">MIER</p>
                        <p class="mb-0">01</p>

                    </li>
                    <li class="programming-item">
                        <p class="mb-0">MIER</p>
                        <p class="mb-0">01</p>
                    </li>
                    <li class="programming-item">

                        <p class="mb-0">MIER</p>
                        <p class="mb-0">01</p>

                    </li>
                    <li class="programming-item">

                        <p class="mb-0">MIER</p>
                        <p class="mb-0">01</p>

                    </li>
                    <li class="programming-item">

                        <p class="mb-0">MIER</p>
                        <p class="mb-0">01</p>

                    </li>
                    <li class="programming-item">
                        <p class="mb-0">MIER</p>
                        <p class="mb-0">01</p>

                    </li>
                </div>
            </section>
            <!--Termómetro para elegir los horarios-->
            <section class="thermometer mb-4">
                <div class="thermometer-hours-container mt-4">
                    <ul class="thermometer-hours-list d-flex pr-3 pl-3">
                        <li class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">1</li>
                        <li class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">2</li>
                        <li class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">3</li>
                        <li class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">4</li>
                        <li class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">5</li>
                        <li class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">6</li>
                        <li class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">7</li>
                        <li class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">8</li>
                        <li class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">9</li>
                        <li class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">10</li>
                        <li class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">11</li>
                        <li class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">12</li>
                        <li class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">13</li>
                        <li class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">14</li>
                        <li class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">15</li>
                        <li class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">16</li>
                        <li class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">17</li>
                        <li class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">18</li>
                        <li class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">19</li>
                        <li class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">20</li>
                        <li class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">21</li>
                        <li class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">22</li>
                        <li class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">23</li>
                    </ul>
                </div>
                <div class="position-relative mt-4">
                    <img src="{{ asset('/images/arrow-dark.svg') }}" class="arrow-thermometer arrow-thermometer-left"
                        alt="arrow-left">
                    <div class="thermometer-container">
                        <ul class="thermometer-schedule-list d-flex p-3">
                            <li class="thermometer-schedule-item mr-1"></li>
                            <li class="thermometer-schedule-item mr-1"></li>
                            <li class="thermometer-schedule-item mr-1"></li>
                            <li class="thermometer-schedule-item mr-1"></li>
                            <li class="thermometer-schedule-item mr-1"></li>
                            <li class="thermometer-schedule-item mr-1"></li>
                            <li class="thermometer-schedule-item mr-1"></li>
                            <li class="thermometer-schedule-item mr-1"></li>
                            <li class="thermometer-schedule-item mr-1"></li>
                            <li class="thermometer-schedule-item mr-1"></li>
                            <li class="thermometer-schedule-item mr-1"></li>
                            <li class="thermometer-schedule-item mr-1"></li>
                            <li class="thermometer-schedule-item mr-1"></li>
                            <li class="thermometer-schedule-item mr-1"></li>
                            <li class="thermometer-schedule-item mr-1"></li>
                            <li class="thermometer-schedule-item mr-1"></li>
                            <li class="thermometer-schedule-item mr-1"></li>
                            <li class="thermometer-schedule-item mr-1"></li>
                            <li class="thermometer-schedule-item mr-1"></li>
                            <li class="thermometer-schedule-item mr-1"></li>
                            <li class="thermometer-schedule-item mr-1"></li>
                            <li class="thermometer-schedule-item mr-1"></li>
                            <li class="thermometer-schedule-item"></li>
                        </ul>
                    </div>
                    <img src="{{ asset('/images/arrow-dark.svg') }}" class="arrow-thermometer arrow-thermometer-right"
                        alt="arrow-right">
                </div>
            </section>
            <div class="thermometer-notation mt-4 mb-7">
                <ul class="p-0 thermometer-notation-list d-flex">
                    <li class="d-flex mr-5 thermometer-notation-item thermometer-notation-blue a-text-semi-brown-two">
                        Horario de programación actual
                    <li>
                    <li class="d-flex mr-5 thermometer-notation-item thermometer-notation-orange a-text-semi-brown-two">
                        Horario ocupado
                    <li>
                    <li class="d-flex mr-5 thermometer-notation-item thermometer-notation-gray a-text-semi-brown-two">
                        Horario disponible
                    <li>
                </ul>
            </div>
            <!--Imagen de programa en slider-->
            <section>
                <div class="justify-content-center">

  <select class="thumbnail-header1 thumbnail-header  align-items-center justify-content-between w-100" data-dropup-auto="false" >
                                            <option class="edit-program-input text-uppercase a-text-black-warmrey backwhite h2" value="">caballeros de zodiaco</option>
                                            <option class="edit-program-input text-uppercase a-text-black-warmrey backwhite h2" value="">caballeros de zodiaco2</option>
                                            <option class="edit-program-input text-uppercase a-text-black-warmrey backwhite h2" value="">caballeros de zodiaco3</option>


                                            </select>


                <img src="{{ asset('/images/triangle.svg') }}" alt="" class="position-absolute dropimg">
                </div>
                <div class="edit-thumbnail position-relative">
                    <img src="{{ asset('/images/heart-icon.svg') }}" class="thumbnail-heart-icon" alt="camera" />
                    <div class="edit-program-camera">
                        <img src="{{ asset('/images/synopsis/camara.svg') }}" class="" alt="camera" />
                        <p class="p-2 mb-0 text-center size-thumbnail-text text-plus a-text-bold-brown-two">472 x 245px</p>
                    </div>

                    <img src="{{ asset('/images/synopsis/image-synopsis-carrusel.jpg') }}" alt=""
                        class="thumbnail-image-prev">
                </div>
                <!--Nombre de la imagen-->
                <p class="a-text-bold-brown-two text-plus mt-4 mb-5">NombreDeLaImagen</p>
            </section>
            <!--Establecer en landing, home, schedule item date time-->
            <section class="mb-5">
                <div class="row">
                    <!--Landing-->
                    <div class="col-4">
                        <div class="edit-data-container">
                            <p class="mb-3 text-plus text-plus text-uppercase a-text-bold-coolgray">Establecer en landing
                            </p>
                            <!--Switch-->
                            <div class="d-flex align-items-center mb-3">
                                <input type="radio" name="sino-landing" id="yes-landing" value="1" class="switch-landing" />
                                <label for="yes-landing" id="siestado-landing"
                                    class="mb-0 si-estilo cursor-pointer switch-label">
                                    Sí</label>
                                <input type="radio" name="sino-landing" id="no-landing" value="0" checked
                                    class="switch-landing switch-table" />
                                <label for="no-landing" id="noestado-landing"
                                    class="mb-0 no-estilo cursor-pointer switch-label">
                                    No</label>
                            </div>
                            <!--Inputs radio-->
                            <div class="d-flex align-items-center mb-3">
                                <label class="checkradio d-flex ml-2 mb-0" for="landing-section-2">
                                    <input type="radio" checked name="dontlose" class="switch-table" value="2"
                                        id="landing-section-2" />
                                    <span class="checkmark"></span>
                                </label>
                                <span class="a-text-bold-silver cursor-pointer ml-2 text-uppercase">Carrusel 1</span>
                                <label class="checkradio d-flex ml-2 mb-0" for="landing-section-2-">
                                    <input type="radio" checked name="dontlose" class="mb-0 switch-table" value="2"
                                        id="landing-section-2" />
                                    <span class="checkmark"></span>
                                </label>
                                <span class="cursor-pointer a-text-bold-silver ml-2 text-uppercase">Carrusel 2</span>
                            </div>
                            <div>
                                <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Fecha</p>
                                <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                    <span class="a-text-bold-warm">Inicio: <input type="text"
                                            class="input-basic edit-program-input a-text-bold-warm schedule-date-input"
                                            placeholder="00-00-0000"></span>
                                </div>
                                <div class="mb-4 text-center edit-rectangle-small-container py-3">
                                    <span class="a-text-bold-warm">Fin: <input type="text"
                                            class="input-basic edit-program-input a-text-bold-warm schedule-date-input"
                                            placeholder="00-00-0000"></span>
                                </div>
                            </div>
                            <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                            <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                <span class="a-text-bold-warm">Inicio: <input type="text"
                                        class="time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                        placeholder="00:00:00"></span>
                            </div>
                            <div class="text-center edit-rectangle-small-container py-3">
                                <span class="a-text-bold-warm">Fin: <input type="text"
                                        class="time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                        placeholder="00:00:00"></span>
                            </div>
                        </div>
                    </div>
                    <!--Home-->
                    <div class="col-4">
                        <div class="edit-data-container">
                            <p class="mb-3 text-plus text-plus text-uppercase a-text-bold-coolgray">Establecer en home
                            </p>
                            <!--Switch-->
                            <div class="d-flex align-items-center edit-switches-home-container">
                                <input type="radio" name="sino-home" id="yes-landing" value="1" class="switch-landing" />
                                <label for="yes-landing" id="siestado-landing"
                                    class="si-estilo cursor-pointer mb-0 switch-label">
                                    Sí</label>
                                <input type="radio" name="sino-home" id="no-landing" value="0" checked
                                    class="switch-landing switch-table" />
                                <label for="no-landing" id="noestado-landing"
                                    class="mb-0 no-estilo cursor-pointer switch-label">
                                    No</label>
                            </div>
                            <div>
                                <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Fecha</p>
                                <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                    <span class="a-text-bold-warm">Inicio: <input type="text"
                                            class="input-basic edit-program-input a-text-bold-warm schedule-date-input"
                                            placeholder="00-00-0000"></span>
                                </div>
                                <div class="mb-4 text-center edit-rectangle-small-container py-3">
                                    <span class="a-text-bold-warm">Fin: <input type="text"
                                            class="input-basic edit-program-input a-text-bold-warm schedule-date-input"
                                            placeholder="00-00-0000"></span>
                                </div>
                            </div>
                            <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                            <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                <span class="a-text-bold-warm">Inicio: <input type="text"
                                        class="time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                        placeholder="00:00:00"></span>
                            </div>
                            <div class="text-center edit-rectangle-small-container py-3">
                                <span class="a-text-bold-warm">Fin: <input type="text"
                                        class="time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                        placeholder="00:00:00"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="edit-data-container">
                            <p class="edit-date-time-title text-plus text-plus text-uppercase a-text-bold-coolgray">
                                Schedule Item Date time
                            </p>
                            <div>
                                <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Fecha</p>
                                <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                    <span class="a-text-bold-warm">
                                        <img src="{{ asset('images/calendario.svg') }}" alt="" class="mr-3">
                                        <input type=" text"
                                            class="input-basic edit-program-input a-text-bold-warm schedule-date-input"
                                            placeholder="00-00-0000"></span>
                                </div>
                            </div>
                            <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                            <div class="text-center edit-rectangle-small-container py-3">
                                <span class="a-text-bold-warm"><img src="{{ asset('images/reloj.svg') }}" alt=""
                                        class="mr-3"><input type="text"
                                        class="time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                        placeholder="00:00:00"></span>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
            <!--Sinopsis-->
            <section class="mb-5">
                <h3 class="h3 text-uppercase a-text-bold-brown-two mb-3">Sinopsis</h3>
                <!--Textarea-->
                <textarea class="edit-program-textarea a-text-semibold-warmgrey p-3"></textarea>
            </section>

            <section class="mb-3">
                <div class="row">
                    <!--Program episode season-->
                    <div class="col-4">
                        <div class="edit-data-container">
                            <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program episode season
                            </p>
                            <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                <input type="text"
                                    class="text-center input-basic edit-program-input a-text-bold-warm text-uppercase"
                                    placeholder="00">
                            </div>
                        </div>
                    </div>
                    <!--Program episode number-->
                    <div class="col-4">
                        <div class="edit-data-container">
                            <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program episode number
                            </p>
                            <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                <input type="text"
                                    class="text-center input-basic edit-program-input a-text-bold-warm text-uppercase"
                                    placeholder="000">
                            </div>
                        </div>
                    </div>
                    <!--Program year produced-->
                    <div class="col-4">
                        <div class="edit-data-container">
                            <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program year produced
                            </p>
                            <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                <input type="text"
                                    class="year-input text-center input-basic edit-program-input a-text-bold-warm text-uppercase"
                                    placeholder="YYYY">
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
            <section class="mb-3">
                <div class="row">
                    <!--Program title alternate-->
                    <div class="col-4">
                        <div class="edit-data-container">
                            <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program title alternate
                            </p>
                            <div class="mb-3 edit-rectangle-container p-3">
                                <input type="text" class="w-100 input-basic edit-program-input a-text-bold-warm"
                                    placeholder="Program Title Alternate">
                            </div>
                        </div>
                    </div>
                    <!--Program genre list-->
                    <div class="col-4">
                        <div class="edit-data-container">
                            <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program genre list
                            </p>

                            <select class="selectpicker dropup a-text-regular-brownishtwo text-normal show-tick" title="" multiple data-live-search="true" data-live-search-placeholder="Buscar" data-header="Program List"  data-dropup-auto="false">
                                <option class="a-text-regular-brownishtwo text-normal" value="">NAda</option>
                                <option class="a-text-regular-brownishtwo text-normal" value="">NAda</option>
                        </select>

                        </div>
                    </div>
                    <!---->
                    <div class="col-4">
                        <div class="edit-data-container">
                            <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule item rating code
                            </p>
                            <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                <input type="text"
                                    class="text-center input-basic edit-program-input a-text-bold-warm text-uppercase"
                                    placeholder="PG-00">
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
            <section class="mb-3">
                <div class="row">
                    <!--Schedule item log date-->
                    <div class="col-4">
                        <div class="edit-data-container">
                            <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule item log date
                            </p>
                            <p class="a-text-medium-brown-two text-plus text-uppercase">Fecha</p>
                            <div
                                class="mb-3 text-center edit-rectangle-small-container py-3 d-flex align-items-center justify-content-center">
                                <img src="{{ asset('images/calendario.svg') }}" alt="" class="mr-3">
                                <input type="text"
                                    class="schedule-date-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                    placeholder="DD:MM:YY">
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="edit-data-container">
                            <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule item log time (gmt)
                            </p>
                            <p class="a-text-medium-brown-two text-plus text-uppercase">HORA</p>
                            <div
                                class="mb-3 text-center edit-rectangle-small-container py-3 d-flex align-items-center justify-content-center">
                                <img src="{{ asset('images/reloj.svg') }}" alt="" class="mr-3">
                                <input type="text"
                                    class="time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                    placeholder="00:00:00">
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="edit-data-container">
                            <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule item log time (gmt)
                            </p>
                            <p class="a-text-medium-brown-two text-plus text-uppercase">HORA</p>
                            <div
                                class="mb-3 text-center edit-rectangle-small-container py-3 d-flex align-items-center justify-content-center">
                                <img src="{{ asset('images/reloj.svg') }}" alt="" class="mr-3">
                                <input type="text"
                                    class="time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                    placeholder="00:00:00">
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
            <section class="mb-5">
                <div class="row">
                    <!--Schedule item log date-->
                    <div class="col-4">
                        <div class="edit-data-container d-flex justify-content-between">
                            <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule version subbed
                            </p>
                            <div class="d-flex">
                                <input type="radio" name="subbed" id="yes-subbed" value="1" class="switch-landing" />
                                <label for="yes-subbed" id="siestado-landing"
                                    class="si-estilo cursor-pointer mb-0 switch-label">
                                    Sí</label>
                                <input type="radio" name="subbed" id="no-dubbed" value="0" checked
                                    class="switch-landing switch-table" />
                                <label for="no-dubbed" id="noestado-landing"
                                    class="mb-0 no-estilo cursor-pointer switch-label">
                                    No</label>
                            </div>

                        </div>
                    </div>
                    <div class="col-4">
                        <div class="edit-data-container d-flex justify-content-between">
                            <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule version dubbed
                            </p>
                            <div class="d-flex">
                                <input type="radio" name="dubbed" id="yes-dubbed" value="1" class="switch-landing" />
                                <label for="yes-dubbed" id="siestado-landing"
                                    class="si-estilo cursor-pointer mb-0 switch-label">
                                    Sí</label>
                                <input type="radio" name="dubbed" id="no-dubbed" value="0" checked
                                    class="switch-landing switch-table" />
                                <label for="no-dubbed" id="noestado-landing"
                                    class="mb-0 no-estilo cursor-pointer switch-label">
                                    No</label>
                            </div>

                        </div>
                    </div>
                    <div class="col-4">
                        <div class="edit-data-container d-flex justify-content-between">
                            <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Audio 5.1<br> available
                            </p>
                            <div class="d-flex">
                                <input type="radio" name="audio5" id="yes-audio5" value="1" class="switch-landing" />
                                <label for="yes-audio5" id="siestado-landing"
                                    class="si-estilo cursor-pointer mb-0 switch-label">
                                    Sí</label>
                                <input type="radio" name="audio5" id="no-audio5" value="0" checked
                                    class="switch-landing switch-table" />
                                <label for="no-audio5" id="noestado-landing"
                                    class="mb-0 no-estilo cursor-pointer switch-label">
                                    No</label>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
</div>
      </div>
      <div class="modal-footer d-flex justify-content-center">
      <section class="text-center mb-5">
                <button
                    class="d-inline-block mr-3 text-uppercase btn-grilla a-btn-basic-small btn-grilla a-btn-basic-small text-uppercase a-text-MBlack text-plus" data-dismiss="modal">aceptar</button>
                <button
                    class="d-inline-block text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal" data-dismiss="modal">cancelar</button>
            </section>

      </div>
    </div>
  </div>
</div>
