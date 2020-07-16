

<?php
    $date = explode("-", $respuesta->data->grilla[0]->programs[0]->day);
    $day = $date[2];
    $month = "";
    $year = "";
    //Sacamos el nombre del mes actual
    switch ($date[1]) {
        case '01':
            $month = "Enero";
            break;
        case '02':
        $month = "Febrero";
            break;
        case '03':
        $month = "Marzo";
            break;
        case '04':
        $month = "Abril";
            break;
        case '05':
            $month = "Mayo";
            break;
        case '06':
        $month = "Junio";
            break;
        case '07':
        $month = "Julio";
            break;
        case '08':
        $month = "Agosto";
            break;
        case '09':
        $month = "Septiembre";
            break;
        case '10':
        $month = "Octubre";
            break;
        case '11':
        $month = "Noviembre";
            break;
        case '12':
        $month = "Diciembre";
            break;
        default:
            # code...
            break;
    }

?>
@extends('layaout.app')

@section('scripts')
    <script src="{{ asset('/js/lib/easyXDM.min.js')  }}"></script>
@endsection

@section('content')

    <style>
        #inp_programing_claro_canal {
            display: none;
        }
        #inp_programing_claro_cinema {
            display: none;
        }
        #inp_programing_concert_channel {
            display: none;
        }
    </style>

<body>
    <main>
    @include('partials.headers.headerPrograGeneral')
        <div class="justify-content-center centro mx-auto position-title">
            <span class="text-titulo">PROGRAMACIÓN GENERAL <br> DEL </span>
        <span class="text-titulo-rojo text-uppercase">{{$day}} DE {{$month}}</span>
        </div>

        <nav class="d-flex col-xl-12 navbar-expand-sm justify-content-center position-nav pt-5">
            <ul class="d-flex justify-content-center navbar-nav">
                <li class="nav-item br-r ">
                    <button class="btn-menu-select a-btn-basic-medium text-normal menu bn-nav text-uppercase" id="grilla-canal-claro-button">Canal Claro</button>

                </li>
                <li class="nav-item br-r">
                    <button id="grilla-concert-channel-button" class="btn-menu-all a-btn-basic-medium a-text-bold-brown-two text-plus bn-nav text-uppercase">Concert Channel</button>
                </li>
                <li class="nav-item br-r">
                    <button id="grilla-claro-cinema-button" class="btn-menu-all  a-btn-basic-medium a-text-bold-brown-two text-plus bn-nav text-uppercase">Claro Cinema</button>
                </li>
                <li class="nav-item br-r">
                    <button class="btn-menu-inac a-btn-basic-medium text-plus a-text-bold-light text-uppercase">Nuestra Visión*</button>
                </li>
                <li class="nav-item br-r ">
                    <button class="btn-menu-inac  a-btn-basic-medium  text-plus a-text-bold-light text-uppercase">Claro Sport*</button>
                </li>
                <li class="nav-item ">
                    <button id="grilla-home-button" class="btn-menu-all a-btn-basic-medium  a-text-bold-brown-two text-plus bn-nav text-uppercase"> Home</button>
                </li>
            </ul>
        </nav>
        <div id="general-programming">
        @include('partials.adm-CN.grillas.grilla-claro-canal')

        </div>

    </main>

</body>

@endsection
