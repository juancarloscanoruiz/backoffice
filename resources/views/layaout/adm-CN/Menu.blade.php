@unless (Auth::check())


@extends('layaout.app')

@section('content')

    <style>
        #inp_programing {
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
        <div class=" mr-5 d-flex float-right position-zona">
            <button class="btn-zona zona">Zona horaria <img src="./images/paises/chile.svg" class="Icon_paises1" /></button>
        </div>
        <nav class="d-flex col-xl-12 navbar-expand-sm justify-content-center position-nav">
            <ul class="d-flex justify-content-center navbar-nav">
                <li class="nav-item br-r ">
                    <button class="btn-menu-select  menu bn-nav" id="grilla-canal-claro-button">Canal Claro</button>
                    <img src="./images/paises/chile.svg" alt="" class="subimage">
                </li>
                <li class="nav-item br-r">
                    <button id="grilla-concert-channel-button" class="btn-menu-all  text-menu-selec bn-nav ">Concert Channel</button>
                </li>
                <li class="nav-item br-r">
                    <button id="grilla-claro-cinema-button" class="btn-menu-all   text-menu-selec bn-nav">Claro Cinema</button>
                </li>
                <li class="nav-item br-r">
                    <button class="btn-menu-inac  text-menu-selec">Nuesta Visión*</button>
                </li>
                <li class="nav-item br-r ">
                    <button class="btn-menu-inac text-menu-selec">Claro Sport*</button>
                </li>
                <li class="nav-item ">
                    <button id="grilla-home-button" class="btn-menu-all  text-menu-selec bn-nav"> Home</button>
                </li>
            </ul>
        </nav>
        <div id="general-programming">
        @include('layaout.adm-CN.grillas.grilla-claro-canal')
          
        </div>

    </main>

</body>

@endsection
@endunless