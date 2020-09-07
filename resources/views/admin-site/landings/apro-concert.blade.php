@extends('layaout.app')

@section('content')
@section('styles')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.css" />
@endsection
@section('scripts')
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js"></script>
@endsection

<body>
    @include('partials.headers.headerPrograGeneral')
    <div id="title" class="mt-3">
        <div class="float-left ml-5 mb-2 " style="margin-left: 7%;">
            <div class="d-flex">
                <button class="btn-apro  text-grilla mr-3 gril-claro" id="btn-grilla"><span>Aprobar
                        cambios</span></button>
                <button class="btn-recha  text-grilla lan-claro" id="btn-landing"><span>Rechazar cambios</span></button>
            </div>
        </div>
        <div class="d-flex float-right mb-4 mr-5 ">
            <form action="" name="formilariosexo" id="formulariosexo" class="formulario">
                <div class=" d-flex prev text-small a-text-medium-brownish location mt-2">
                    <input type="radio" name="sexo" id="edit" checked />
                    <label for="edit" id="editar" class="mujer-estilo d-flex align-items-center pl-4 pt-3">
                        <p class=" a-prev-title">EDITAR</p>
                    </label>
                    <input type="radio" name="sexo" id="prev" />
                    <label for="prev" id="previsualiza" class="hombre-estilo pl-2 pt-3">
                        <p class=" a-prev-title ">PREVISUALIZAR</p>
                    </label>
                </div>
            </form>
            <div class="pt-2">
                <img src="./images/mobile.svg" class="a-prev-image ml-3 mr-3" alt="mobile" id="prev-mobile">
                <img src="./images/tablet.svg" class="a-prev-image" alt="tablet" id="prev-tablet">
                <img src="./images/pc.svg" class="a-prev-image ml-3" alt="pc" id="prev-desktop">
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="ml-5 float-left mb-4">
            <div><span class="a-text-black-light text-plus">Última edición : <span class="zona">septiembre 17
                        2019</span> </span></div>
            <span class="a-text-black-light text-plus">Editado por: <label class="zona"> Antonio Pérez López (<label
                        class="zona ">Usuario aprobador</label>)</label></span>
        </div>

        <div class=" mr-5 d-flex float-right ">
            <button class="btn-zona zona">Zona horaria <img src="./images/gmt-icon.svg" class="Icon_paises1"
                    style="width:32px" /></button>
        </div>
        <div class="clearfix"></div>
        <div class="centro">
            <div class="navbar-progra-content navbar-prev-concert-channel mb-5" id="navbar-prev-concert-channel">
            </div>
        </div>
        @include('partials.adm-CN.modals-concert.titulo')
        @include('partials.adm-CN.modals-concert.promo-concert')
        @include('partials.adm-CN.modals-concert.banner-concert')
        @include('partials.adm-CN.modals-concert.encabezado')
        @include('partials.adm-CN.modals-concert.carrusel')
        @include('partials.adm-CN.modals-concert.programming')
</body>
@endsection
