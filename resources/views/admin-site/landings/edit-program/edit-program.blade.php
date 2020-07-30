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
            <div class="thermometer">
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
                <div class="thermometer-container mt-4">
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
            </div>
            <div class="thermometer-notation mt-4">
                <ul class="p-0 thermometer-notation-list d-flex">
                    <li class="d-flex mr-5 thermometer-notation-item thermometer-notation-blue a-text-semi-brown-two">
                            Horario de programación actual
                        <li>
                    <li class="d-flex mr-5 thermometer-notation-item thermometer-notation-orange a-text-semi-brown-two">Horario ocupado<li>
                    <li class="d-flex mr-5 thermometer-notation-item thermometer-notation-gray a-text-semi-brown-two">Horario disponible<li>
                </ul>
            </div>
        </div>

    </body>
@endsection
