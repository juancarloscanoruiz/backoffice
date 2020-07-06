


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
            <span class="text-titulo-rojo">1ERO DE OCTUBRE - 1ERO DE NOVIEMBRE</span>
        </div>

        <nav class="d-flex col-xl-12 navbar-expand-sm justify-content-center position-nav pt-5">
            <ul class="d-flex justify-content-center navbar-nav">
                <li class="nav-item br-r ">
                    <button class="btn-menu-select a-btn-basic-medium text-normal menu bn-nav text-uppercase" id="grilla-canal-claro-button">Canal Claro</button>

                </li>
                <li class="nav-item br-r">
                    <button id="grilla-concert-channel-button" class="btn-menu-all a-btn-basic-medium a-text-bold-brown-two text-normal bn-nav text-uppercase">Concert Channel</button>
                </li>
                <li class="nav-item br-r">
                    <button id="grilla-claro-cinema-button" class="btn-menu-all  a-btn-basic-medium a-text-bold-brown-two text-normal bn-nav text-uppercase">Claro Cinema</button>
                </li>
                <li class="nav-item br-r">
                    <button class="btn-menu-inac a-btn-basic-medium text-normal a-text-bold-brown-two text-uppercase">Nuestra Visión*</button>
                </li>
                <li class="nav-item br-r ">
                    <button class="btn-menu-inac  a-btn-basic-medium  text-normal a-text-bold-brown-two text-uppercase">Claro Sport*</button>
                </li>
                <li class="nav-item ">
                    <button id="grilla-home-button" class="btn-menu-all a-btn-basic-medium  a-text-bold-brown-two text-normal bn-nav text-uppercase"> Home</button>
                </li>
            </ul>
        </nav>
        <div id="general-programming">
        @include('partials.adm-CN.grillas.grilla-claro-canal')

        </div>

    </main>

</body>

@endsection
