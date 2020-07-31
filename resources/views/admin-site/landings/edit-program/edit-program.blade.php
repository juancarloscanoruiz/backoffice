@extends('layaout.app')

@section('content')

    <body>
        @include('partials.headers.headerPrograGeneral')
        <div class="ml-5 float-left">
            <div>
                <span class="a-text-black-light text-plus">Última edición : <span class="zona"> </span> </span>
            </div>
            <span class="a-text-black-light text-plus">Editado por:</span>
        </div>
        <div class="clearfix"></div>
        <h3 class="a-text-bold-black h3 ml-5 mt-4">CANAL CLARO</h3>
        <h4 class="a-text-bold-black mt-4 text-plus ml-5 mb-4"> CARGAR IMÁGENES EN FORMATO JPG</h4>
        <h2 class="h2 text-center a-text-black-brown-two ">PROGRAMACIÓN PRINCIPAL - CARRUSEL 1</h2>
        <hr class="d-flex align-content-center separationhr col-11 mt-5 mb-0">

        <div class="col-10 mx-auto">
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
                    <div class="py-2 alert-container d-flex align-items-center justify-content-center"">
                                                    <img src=" {{ asset('/images/basic-icons/warning-orange-icon.svg') }}"
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
                <div class="thumbnail-header d-flex align-items-center justify-content-between px-4">
                    <input type="text" value="Título del programa"
                        class="edit-program-input text-uppercase a-text-MBlack h2">
                    <img src="{{ asset('/images/triangle.svg') }}" alt="">
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
            <section>
                <div class="row">
                    <!--Landing-->
                    <div class="col-4">
                        <div class="edit-data-container">
                            <p class="mb-0 text-plus text-plus text-uppercase a-text-bold-coolgray">Establecer en landing
                            </p>
                            <label class="checkradio d-flex ml-2" for="landing-section-2">
                                <input type="radio" checked name="dontlose" class="switch-table" value="2"
                                    id="landing-section-2" />
                                <span class="checkmark"></span>
                            </label>
                            <span class="cursor-pointer a-text-medium-brownish ml-2">Contenio exclusivo</span>
                            <label class="checkradio d-flex ml-2" for="landing-section-2-">
                                <input type="radio" checked name="dontlose" class="switch-table" value="2"
                                    id="landing-section-2" />
                                <span class="checkmark"></span>
                            </label>
                            <span class="cursor-pointer a-text-medium-brownish ml-2">Contenio exclusivo</span>
                        </div>
                    </div> 
                    <div class="col-4"></div> 
                    <div class="col-4"></div> 
                </div>
            </section>
        </div>

    </body>
@endsection
