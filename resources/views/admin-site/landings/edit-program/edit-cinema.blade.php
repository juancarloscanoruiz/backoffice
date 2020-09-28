@extends('layaout.app')

@yield('styles')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.css" />
    @yield('scripts')
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js"></script>



  <div class="modal pr-0  modal-edit-program" id="modaledi" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle"
        aria-hidden="true" style="overflow: auto;     display: contents;">
        <div class="modal-dialog modal-dialog-centered m-0" role="document" style="max-width: 100%">
            <div class="modal-content">
                <div class="modal-body pt-0">
                    <h2 class="edit-program-modal-title h2 text-center a-text-black-brown-two pt-3">HOME - CLARO CINEMA - CARRUSEL PROMO </h2>
                    <hr class="d-flex align-content-center separationhr col-11 mt-3 mb-0">

                    <div class="col-11 mx-auto">
                        <div class="float-right" >
                            <div class="d-flex pl-5 ">
                                <div class=" position-relative programming-slider-dots1 mt-4 mb-4">    </div>
                                <img src="{{ asset('images/add-icon.svg') }}" class="add-programming-image mb-3  cursor-pointer">
                            </div>
                        </div>
                      <div class="clearfix"></div>
                        <!--Estado y alertas del programa-->
                        <section class=" d-flex justify-content-between mb-4">
                            <div class="col-5">
                                <h3 class="h3 a-text-semibold-warmgrey text-uppercase mb-4">Estado</h3>
                                <div class="state-container py-2 d-flex align-items-center justify-content-center">
                                    <img src="{{ asset('/images/basic-icons/pencil-edit-teal.svg') }}" alt="">
                                    <p class="mb-0 ml-3 a-text-bold-teal">En edición</p>
                                </div>
                            </div>
                            <div class="col-5" style="margin-right: -12px;">
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
                      <!--  <section class="col-8 mx-auto">
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
                        </section>-->
                        <!--Termómetro para elegir los horarios-->
                      <!--  <section class="thermometer mb-4">
                            <div class="thermometer-hours-container mt-4">
                                <ul class="thermometer-hours-list d-flex pr-3 pl-3">
                                    <li
                                    class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        0
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        1
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        2
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        3
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        4
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        5
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        6
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        7
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        8
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        9
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        10
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        11
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        12
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        13
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        14
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        15
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        16
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        17
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        18
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        19
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        20
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        21
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        22
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        23
                                    </li>
                                </ul>
                            </div>
                            <div class="position-relative mt-4">
                                <img src="{{ asset('/images/arrow-dark.svg') }}"
                                    class="arrow-thermometer arrow-thermometer-left" alt="arrow-left">
                                <div class="thermometer-container">
                                    <ul class="thermometer-schedule-list d-flex p-3">

                                    </ul>
                                </div>
                                <img src="{{ asset('/images/arrow-dark.svg') }}"
                                    class="arrow-thermometer arrow-thermometer-right" alt="arrow-right">
                            </div>
                        </section>
                        <div class="thermometer-notation mt-4 mb-7">
                            <ul class="p-0 thermometer-notation-list d-flex">
                                <li
                                    class="d-flex mr-5 thermometer-notation-item thermometer-notation-blue a-text-semi-brown-two">
                                    Horario de programación actual
                                <li>
                                <li
                                    class="d-flex mr-5 thermometer-notation-item thermometer-notation-orange a-text-semi-brown-two">
                                    Horario ocupado
                                <li>
                                <li
                                    class="d-flex mr-5 thermometer-notation-item thermometer-notation-gray a-text-semi-brown-two">
                                    Horario disponible
                                <li>
                            </ul>
                        </div>
                        <div class="edit-info-container">-->
                        <div class="mt-2 mb-2 ">
                    <div class="current-slide-container a-text-bold-teal mb-2" style="display:contents;">
                <p class="mb-0 a-text-bold-teal current-slide-number">1</p>
            </div>
            </div>
                    <div class="d-flex  mt-2 justify-content-around mb-5">
                    <div class="col-4 m-2">
                    <section class="mb-3">
                            <div class="row">
                    <div class="w-100 edit-program-data-container ">
                                    <div class="edit-data-container h-100">
                                        <p class="mb-3 text-plus text-plus text-uppercase a-text-bold-coolgray">
                                            Establecer
                                            en landing
                                        </p>
                                        <!--Switch-->
                                        <div class="d-flex align-items-center mb-3">
                                            <input type="radio" name="sino-landing" id="yes-landing" value="3"
                                                class="edit-switch-landing edit-landing-yes" key="in_landing" />
                                            <label for="yes-landing" id="siestado-landing"
                                                class="mb-0 si-estilo cursor-pointer switch-label">
                                                Sí</label>
                                            <input type="radio" name="sino-landing" id="no-landing" value="0"
                                                class="edit-switch-landing switch-table-edit edit-landing-no" key="in_landing"checked/>
                                            <label for="no-landing" id="noestado-landing"
                                                class="mb-0 no-estilo cursor-pointer switch-label">
                                                No</label>
                                        </div>
                                                                              <!--Inputs radio-->
                                        <div class="d-flex align-items-center mb-3">
                                            <label class="checkradio d-flex ml-2 mb-0" for="landing-section-1">
                                                <input type="radio" disabled name="dontlose" class="switch-table-edit edit-carrusel-1"
                                                    value="1" id="landing-section-1" key="in_landing" />
                                                <span class="checkmark"></span>
                                            </label>
                                            <span class="a-text-bold-silver cursor-pointer ml-2 text-uppercase">Carrusel
                                                1</span>
                                            <label class="checkradio d-flex ml-2 mb-0" for="landing-section-2">
                                                <input type="radio" disabled name="dontlose" class="mb-0 switch-table-edit edit-carrusel-2"
                                                    value="2" id="landing-section-2" key="in_landing"/>
                                                <span class="checkmark"></span>
                                            </label>
                                            <span class="cursor-pointer a-text-bold-silver ml-2 text-uppercase">Carrusel
                                                2</span>
                                        </div>
                                        <div>
                                            <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Fecha</p>
                                            <div class="d-flex justify-content-around">
                                            <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3 mr-3">
                                                <span class="a-text-bold-warm">Inicio: <input type="text"
                                                        class="input-basic edit-program-input a-text-bold-warm edit-program-attribute-text schedule-date-input edit-landing-date-begin"
                                                        placeholder="00-00-0000" key="in_landing_begin" /></span>
                                            </div>
                                            <div class="mb-4 text-center edit-rectangle-small-container backwhite py-3">
                                                <span class="a-text-bold-warm">Fin: <input type="text"
                                                        class="input-basic edit-program-input a-text-bold-warm edit-program-attribute-text schedule-date-input edit-landing-date-end" key="in_landing_expiration"
                                                        placeholder="00-00-0000"></span>
                                            </div>
                                            </div>
                                        </div>
                                        <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                                        <div class="d-flex justify-content-around">
                                        <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3 mr-3">
                                            <span class="a-text-bold-warm">Inicio: <input type="text"
                                                    class="time-seconds-input input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase edit-landing-time-begin" key="in_landing_begin"
                                                    placeholder="00:00:00"></span>
                                        </div>
                                        <div class="text-center edit-rectangle-small-container backwhite py-3">
                                            <span class="a-text-bold-warm">Fin: <input type="text"
                                                    class="time-seconds-input input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase edit-landing-time-end" key="in_landing_expiration"
                                                    placeholder="00:00:00"></span>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                </section>
                                <!--Home-->
                                <section class="mb-3">
                            <div class="row">
                                <div class="w-100 edit-program-data-container ">
                                    <div class="edit-data-container h-100">
                                        <p class="mb-3 text-plus text-plus text-uppercase a-text-bold-coolgray">
                                            Establecer
                                            en home
                                        </p>
                                        <!--Switch-->
                                        <div class="d-flex align-items-center edit-switches-home-container">
                                            <input type="radio" name="sino-home" id="edit-in-home-yes" value="1"
                                                class="edit-switch-home edit-program-switch edit-in-home-yes" key="in_home"/>
                                            <label for="edit-in-home-yes" id="siestado-landing"
                                                class="si-estilo cursor-pointer mb-0 switch-label">
                                                Sí</label>
                                            <input type="radio" name="sino-home" id="edit-in-home-no" value="0" checked
                                                class="edit-switch-home edit-program-switch edit-in-home-no" key="in_home"/>
                                            <label for="edit-in-home-no" id="noestado-landing"
                                                class="mb-0 no-estilo cursor-pointer switch-label">
                                                No</label>
                                        </div>
                                        <div>
                                            <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Fecha</p>
                                            <div class="d-flex justify-content-around">
                                            <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3 mr-3">
                                                <span class="a-text-bold-warm">Inicio: <input key="in_home_begin" type="text"
                                                        class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-home-date-begin edit-program-attribute-text"
                                                        placeholder="00-00-0000" /></span>
                                            </div>
                                            <div class="mb-4 text-center edit-rectangle-small-container  backwhite py-3">
                                                <span class="a-text-bold-warm">Fin:
                                                    <input type="text" key="in_home_expiration"
                                                        class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-home-date-end edit-program-attribute-text"
                                                        placeholder="00-00-0000"></span>
                                            </div>
                                            </div>
                                        </div>
                                        <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                                        <div class="d-flex justify-content-around">
                                        <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3 mr-3">
                                            <span class="a-text-bold-warm">Inicio: <input key="in_home_begin" type="text"
                                                    class="time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase edit-home-time-begin"
                                                    placeholder="00:00:00"></span>
                                        </div>
                                        <div class="text-center edit-rectangle-small-container backwhite py-3">
                                            <span class="a-text-bold-warm">Fin: <input type="text"
                                                    class="time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase edit-home-time-end"
                                                    placeholder="00:00:00"></span>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                              </section>

                    </div>
                    <div class="col-4 m-2">
                    <section class="mb-3">
                            <div class="row">
                    <div class="w-100 edit-program-data-container ">
                                    <div class="edit-data-container h-100">
                                        <p
                                            class="edit-date-time-title1 text-plus text-plus text-uppercase a-text-bold-coolgray">
                                            Schedule Item Date time
                                        </p>
                                        <div>
                                            <p class="mb-3 pb-1 text-plus a-text-medium-coolgray text-uppercase">Fecha</p>
                                            <div class="text-center edit-rectangle-small-container backwhite py-2 d-flex align-content-center justify-content-center mb-2" >
                                                <span class="a-text-bold-warm">
                                                    <img src="{{ asset('images/calendario.svg') }}" alt="" class="mr-3">
                                                    <input key="" type=" text"
                                                        class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date"
                                                        placeholder="00-00-0000"></span>
                                            </div>
                                        </div>
                                        <p class="mb-3 pt-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                                        <div class="text-center edit-rectangle-small-container backwhite d-flex align-content-center justify-content-center mb-3 py-2">
                                            <span class="a-text-bold-warm"><img src="{{ asset('images/reloj.svg') }}"
                                                    alt="" class="mr-3"><input type="text"
                                                    class="time-seconds-input input-basic edit-program-input a-text-bold-warm edit-schedule-item-time text-uppercase"
                                                    placeholder="00:00:00"></span>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            </section>
                            <section class="mb-5" style="margin-top:-21px" >
                            <div class="row">
                            <div class="w-100 edit-program-data-container">
                                    <div class="edit-data-container d-flex justify-content-between">
                                        <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule version
                                            subbed
                                        </p>
                                        <div class="d-flex">
                                            <input type="radio" name="subbed" id="yes-subbed" value="1"
                                                class="edit-program-switch switch-landing edit-subbed-yes" key="subbed"/>
                                            <label for="yes-subbed" id="siestado-landing"
                                                class="si-estilo cursor-pointer mb-0 switch-label">
                                                Sí</label>
                                            <input type="radio" name="subbed" id="no-dubbed" value="0" checked
                                                class="edit-program-switch switch-landing switch-table-edit edit-subbed-no" key="subbed"/>
                                            <label for="no-dubbed" id="noestado-landing"
                                                class="mb-0 no-estilo cursor-pointer switch-label">
                                                No</label>
                                        </div>

                                    </div>
                                </div>
                                </section>
                                <section class="mb-5 mt-5">
                            <div class="row">
                                <div class="w-100 edit-program-data-container">
                                    <div class="edit-data-container d-flex justify-content-between">
                                        <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule version
                                            dubbed
                                        </p>
                                        <div class="d-flex">
                                            <input type="radio" name="dubbed" id="yes-dubbed" value="1"
                                                class="edit-program-switch switch-landing edit-dubbed-yes" key="dubbed"/>
                                            <label for="yes-dubbed" id="siestado-landing"
                                                class="si-estilo cursor-pointer mb-0 switch-label">
                                                Sí</label>
                                            <input type="radio" name="dubbed" id="no-dubbed" value="0" checked
                                                class="edit-program-switch switch-landing switch-table-edit edit-dubbed-no" key="dubbed"/>
                                            <label for="no-dubbed" id="noestado-landing"
                                                class="mb-0 no-estilo cursor-pointer switch-label">
                                                No</label>
                                        </div>

                                    </div>
                                </div>
                                </section>
                                <section class="pt-4">
                            <div class="row">
                                <div class="w-100 edit-program-data-container">
                                    <div class="edit-data-container d-flex justify-content-between">
                                        <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Audio 5.1<br>
                                            available
                                        </p>
                                        <div class="d-flex">
                                            <input type="radio" name="audio5" id="yes-audio5" value="1"
                                                class="edit-program-switch switch-landing edit-audio5-yes" key="audio5"/>
                                            <label for="yes-audio5" id="siestado-landing"
                                                class="si-estilo cursor-pointer mb-0 switch-label">
                                                Sí</label>
                                            <input type="radio" name="audio5" id="no-audio5" value="0" checked
                                                class="edit-program-switch switch-landing switch-table-edit edit-audio5-no" key="audio5"/>
                                            <label for="no-audio5" id="noestado-landing"
                                                class="mb-0 no-estilo cursor-pointer switch-label">
                                                No</label>
                                        </div>

                                    </div>
                                </div>
                                </section>
                    </div>
                    <div class="col-4 mb-4 mt-2">
                   
            <div class="cinema-image-slider mx-auto mb-0">
              
                    <div class="bor thumbnail-image-program position-relative h-100" >
                        <input type="file" name="image_background_1" id="image_background_1" class="input-image-program d-none">
                        <label for="edit-image-horizontal" class="load-modal-programming load-photo d-inline" id="imagenes">
                                    <img src="{{ asset('/images/heart-icon.svg') }}" class="thumbnail-heart-icon"
                                    alt="heart-icon" />
                        <label for="image_background_1" class="h-100 mb-0 d-flex justify-content-center align-items-center flex-column load-picture">
                        <img src="{{asset('/images/synopsis/camara.svg')}}" alt="add-photo"  class=" cursor-pointer add-photo"/>
                            <span class="a-text-bold-warm text-plus mt-3">1000px X 342px</span>
                        <img src="{{asset('/images/synopsis/image-vertical.svg')}}" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                        </label>
                    </div>
            

                    <div class="bor thumbnail-image-program position-relative h-100" >
                        <input type="file" name="image_background_2" id="image_background_2" class="input-image-program d-none">
                        <label for="image_background_2" class="h-100 mb-0 d-flex justify-content-center align-items-center flex-column load-picture">
                            <img src="{{asset('/images/synopsis/camara.svg')}}" alt="add-photo"  class=" cursor-pointer add-photo"/>
                            <span class="a-text-bold-warm text-plus mt-3">1000px X 342px</span>
                            <img src="{{asset('/images/synopsis/image-vertical.svg')}}" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                        </label>
                    </div>
               
                    <div class="bor thumbnail-image-program position-relative h-100" >
                        <input type="file" name="image_background_3" id="image_background_3" class="input-image-program d-none">
                        <label for="image_background_3" class="h-100 mb-0 d-flex justify-content-center align-items-center flex-column load-picture">
                            <img src="{{asset('/images/synopsis/camara.svg')}}" alt="add-photo"  class=" cursor-pointer add-photo"/>
                                <span class="a-text-bold-warm text-plus mt-3">1000px X 342px</span>
                            <img src="{{asset('/images/synopsis/image-vertical.svg')}}" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                        </label>
                    </div>
                  
            </div>
            <p class="a-text-bold-brown-two text-plus mt-2">NombreDeLaImagen</p>
                    </div>


                    </div>
            
                        <!--Sinopsis-->
                        <section class=" edit-program-data-container">
                            <h3 class="h3 text-uppercase a-text-bold-brown-two mb-3">Sinopsis</h3>
                            <!--Textarea-->
                            <textarea key="synopsis" class="edit-synopsis edit-program-textarea edit-program-attribute-text a-text-semibold-warmgrey p-3" id="prog_sinopsis"></textarea>
                            <button class="a-btn-teal a-btn-basic-small text-normal a-text-MBlack float-right btn-actual d-flex align-items-center justify-content-center" ><img src="./images/basic-icons/enter.svg" alt=""> ACTUALIZAR</button>
                                <div class="clearfix"></div>
                        </section>
                        <section class="mb-3">
                            <div class="row">
                                <!--Program episode season-->
                                <div class="col-4 edit-program-data-container">
                                    <div class="edit-data-container">
                                        <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program episode
                                            season
                                        </p>
                                        <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                                            <input type="text" key="season"
                                                class="edit-program-season text-center input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase"
                                                placeholder="00">
                                        </div>
                                    </div>
                                </div>
                                <!--Program episode number-->
                                <div class="col-4 edit-program-data-container">
                                    <div class="edit-data-container">
                                        <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program episode
                                            number
                                        </p>
                                        <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                                            <input type="text" key="program_episode_number"
                                                class="text-center edit-episode-number input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase"
                                                placeholder="000">
                                        </div>
                                    </div>
                                </div>
                                <!--Program year produced-->
                                <div class="col-4 edit-program-data-container">
                                    <div class="edit-data-container">
                                        <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program year
                                            produced
                                        </p>
                                        <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                                            <input type="text" key="program_year_produced"
                                                class="year-input text-center edit-year-produced input-basic edit-program-attribute-text edit-program-input a-text-bold-warm text-uppercase"
                                                placeholder="YYYY">
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </section>
                        <section class="mb-3">
                            <div class="row">
                                <!--Program title alternate-->
                                <div class="col-4 edit-program-data-container">
                                    <div class="edit-data-container">
                                        <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program title
                                            alternate
                                        </p>
                                        <div class="mb-3 edit-rectangle-container backwhite p-3">
                                            <input type="text" key="subtitle"
                                                class="w-100 edit-program-subtitle input-basic edit-program-input edit-program-attribute-text a-text-bold-warm"
                                                placeholder="Program Title Alternate">
                                        </div>
                                    </div>
                                </div>
                                <!--Program genre list-->
                                <div class="col-4 edit-program-data-container position-relative" id="edit-genre-container">
                                    <div class="edit-data-container">
                                        <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program genre
                                            list
                                        </p>
                                        <div class="mb-3 edit-rectangle-container backwhite ">
                                            <select
                                                class="listcinema mb-0 a-text-regular-brownishtwo text-normal  input-basic show-tick" id="edit-program-genres"
                                                title="Genere list" multiple data-live-search="true"
                                                data-live-search-placeholder="Buscar" data-header="Program List"
                                                data-dropup-auto="false">

                                              
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <!---->
                                <div class="col-4 edit-program-data-container">
                                    <div class="edit-data-container">
                                        <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule item
                                            rating
                                            code
                                        </p>
                                        <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                                            <input type="text" key="rating"
                                                class="text-center edit-program-attribute-text input-basic edit-program-input a-text-bold-warm text-uppercase edit-rating-code"
                                                placeholder="PG-00">
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </section>
                        <section class="mb-3">
                            <div class="row">
                                <!--Schedule item log date-->
                                <div class="col-4 edit-program-data-container">
                                    <div class="edit-data-container h-100">
                                        <p style="margin-bottom: 43px" class="text-plus text-uppercase a-text-bold-brown-two">Schedule item log
                                            date
                                        </p>
                                        <p class="a-text-medium-brown-two text-plus text-uppercase pt-5">Fecha</p>
                                        <div
                                            class="mb-3 text-center edit-rectangle-small-container backwhite py-3 d-flex align-items-center justify-content-center">
                                            <img src="{{ asset('images/calendario.svg') }}" alt="" class="mr-3">
                                            <input type="text" key="day"
                                                class="edit-schedule-date edit-program-attribute-text schedule-date-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                                placeholder="DD:MM:YY">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4 edit-program-data-container">
                                    <div class="edit-data-container h-100">
                                        <p style="margin-bottom: 43px" class="text-plus text-uppercase a-text-bold-brown-two pb-4">Schedule item log
                                            time (gmt)
                                        </p>
                                        <p class="a-text-medium-brown-two text-plus text-uppercase pt-4">HORA</p>
                                        <div
                                            class="mb-3 text-center edit-rectangle-small-container  backwhite py-3 d-flex align-items-center justify-content-center">
                                            <img src="{{ asset('images/reloj.svg') }}" alt="" class="mr-3">
                                            <input type="text" key="programing"
                                                class="edit-schedule-item-time edit-program-attribute-text time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                                placeholder="00:00:00">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4 edit-program-data-container">
                                    <div class="edit-data-container h-100">
                                        <p class=" text-plus text-uppercase a-text-bold-brown-two "style="margin-bottom: 43px" >estimated schedule item duration
                                        </p>
                                        <p class="a-text-medium-brown-two text-plus text-uppercase pt-4">HORA</p>
                                        <div
                                            class="mb-3 text-center edit-rectangle-small-container  backwhite py-3 d-flex align-items-center justify-content-center">
                                            <img src="{{ asset('images/reloj.svg') }}" alt="" class="mr-3">
                                            <input type="text" key="duration"
                                                class="edit-program-duration edit-program-attribute-text time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                                placeholder="00:00:00">
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </section>
                                              </div>

                    </div>
                    <div class=" d-flex justify-content-center">
                    <section class="text-center mb-3 d-flex justify-content-center">
                        <button
                            class="d-flex  mr-3  m-0 text-uppercase btn-grilla a-btn-basic-small btn-grilla a-btn-basic-small text-uppercase a-text-MBlack text-plus edit-landing-modal-button"
                            data-dismiss="modal" id="edit-program-modal-button">ACEPTAR</button>
                    </section>

                </div>
                </div>

            </div>
        </div>
    </div>
  