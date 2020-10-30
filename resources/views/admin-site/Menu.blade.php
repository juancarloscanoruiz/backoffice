@extends('layaout.app')

<?php
$last_edition = $respuesta->data->grilla[0]->last_edition;
$edited_for = $respuesta->data->grilla[0]->edited_for;
$rol_user_edit = $respuesta->data->grilla[0]->user_rol;

if ($rol_user_edit == 'root') {
    $rol_user_edit = 'Súper Usuario';
}
?>

@section('scripts')
<script src="{{ asset('/js/lib/easyXDM.min.js')  }}"></script>
@endsection

@section('content')

<style>
    #inp_programing {
        display: none;
    }
</style>

<body>
    <main>
        <div id="app">
            @include('partials.headers.headerPrograGeneral')
            <div class="justify-content-center centro mx-auto position-title">
                <span class="text-titulo">PROGRAMACIÓN GENERAL <br> DEL </span>
                <span class="text-titulo-rojo text-uppercase">{{$respuesta->data->first_day}} <span class="text-titulo">AL</span> {{$respuesta->data->last_day}}</span>
            </div>
            <menu-component></menu-component>
            <!-- <nav class="d-flex col-xl-12 navbar-expand-sm justify-content-center position-nav pt-5">
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
                        <button class="btn-menu-inac  a-btn-basic-medium  text-plus a-text-bold-light text-uppercase">Claro Sports*</button>
                    </li>
                    <li class="nav-item ">
                        <button id="grilla-home-button" class="btn-menu-all a-btn-basic-medium  a-text-bold-brown-two text-plus bn-nav text-uppercase btn-home-iframe"> Home</button>
                    </li>
                </ul>
            </nav> -->
            <!-- <div class="grilla-claro-canal">
                <div class="ml-5 float-left">
                    <div><span class="a-text-black-light text-plus">Última edición : <span class="zona">{{ $last_edition }}</span>
                        </span></div>
                    <span class="a-text-black-light text-plus">Editado por: <label class="zona"> {{ $edited_for }} (<label class="zona ">{{ $rol_user_edit }}</label>)</label></span>
                </div>
                <btn-component></btn-component>
                <div class="clearfix"></div>
            </div> -->
            <!-- <claro-networks-component></claro-networks-component> -->
            <div id="general-programming">
                @include('partials.adm-CN.grillas.grilla-claro-canal')
            </div>
        </div>

    </main>

</body>

@endsection