@extends('layaout.app')

@section('content')

    <body>
        @include('partials.headers.headerPrograGeneral')
        <div id="title" class="mt-3">
            <div class="float-left ml-5 mb-2 " style="margin-left: 7%;">
                <div class="d-flex pointer-none">
                    <button class="btn-apro  a-text-MBlack mr-3  text-normal gril-claro" id="btn-grilla"><span>Aprobar
                            cambios</span></button>
                    <button class="btn-recha  a-text-MBlack text-normal lan-claro" id="btn-landing"><span>Rechazar
                            cambios</span></button>
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
                    <img src="./images/mobile.svg" class="a-prev-image ml-3 mr-3 op-inac pointer-none" alt="mobile"
                        id="prev-mobile">
                    <img src="./images/tablet.svg" class="a-prev-image op-inac pointer-none" alt="tablet" id="prev-tablet">
                    <img src="./images/pc.svg" class="a-prev-image ml-3 op-ac cursor-pointer" alt="pc" id="prev-desktop">
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="ml-5 float-left mb-4">
                <div><span class="a-text-black-light text-plus">Última edición : <span class="zona" id="date-edit"><?php echo $edited['last_edition']; ?></span> </span></div>
                <span class="a-text-black-light text-plus">Editado por: <?php echo $edited['edited_for']; ?> <label class="zona"> (<label class="zona "><?php echo $edited['rol']; ?></label>)</label></span>
            </div>

            <div class=" mr-5 d-flex float-right ">
                <button class="btn-zona zona">Zona horaria <img src="./images/gmt-icon.svg" class="Icon_paises1"
                        style="width:32px" /></button>
            </div>
            <div class="clearfix"></div>
            <div class="centro">
                <div class="navbar-progra-content my-5" id="navbar-prev-home-landing">

                </div>
            </div>
            @include('partials.adm-CN.modals-home.home-encabezado', ['landing' => 'admin']);
            @include('partials.adm-CN.modal-home.logo');
            @include('partials.adm-CN.modal-home.carrusel');
            @include('partials.adm-CN.modals-concert.carrusel');
            @include('partials.adm-CN.modals-concert.programming')
            @include('partials.adm-CN.modals-claro.index');

            @include('partials.adm-CN.modal-generic.advertencia');
            @include('partials.adm-CN.modal-generic.url');
    </body>
@endsection
