@extends('layaout.app')

@section('content')

<body class="bg-dark">
    <button id="btn-test">Modal</button>

    <!-- PROMO LANDING CANAL CLARO 1 -->
    <div id="modal-promo" class="modal">
        <div class="modal-promo-claro">
            <p>CARGAR IMAGENES EN FORMATO JPG O VIDEOS MP4</p>
            <span class="h3">PROMO</span>
            <hr class="hr-promo">

            <div class="img-content">
                <div class="position-relative h-100">
                    <label for="promo-claro">
                        <div id="img-promo-claro">
                            <img src="images/modals/img-back-promo.png">
                        </div>
                        <input required class="d-none" id="promo-claro" name="img-promo-claro" type="file">
                    </label>
                </div>
            </div>
            <div class="btn-content btn-content-promo">
                <button class="a-btn-basic-small">ACEPTAR</button>
                <button data-dismiss="modal" class="ml-5 a-btn-basic-small">CANCELAR</button>
            </div>
        </div>
    </div>
    <!-- PROMO LANDING CANAL CLARO 1 -->

    <!-- ENCABEZADO LANDING CANAL CLARO 1 -->

    <div id="modal-header" class="modal">
        <div class="modal-header-claro">
            <p class="p-text-bold-black">CARGAR IMAGENES FORMATO PNG</p>
            <p class="p-title-black">ENCABEZADO</p>
            <hr>
            <div class="content">
                <div class="img-content-header">
                    <div class="position-relative h-100">
                        <label for="header-claro">
                            <div id="img-header-claro">
                                <img src="images/modals/img-header.png">
                            </div>
                            <input required class="d-none" id="header-claro" name="img-header-claro" type="file">
                        </label>
                        <small class="error">INTENTA DE NUEVO CON UNA IMAGEN PNG</small>
                    </div>
                </div>
                <div class="txt-content">
                    <p>HOY EN</p>
                </div>
                <div class="txt-content">
                    <span>CANAL CLARO</span>
                </div>
                <div class="programacion-content">
                    <a class="btn-tomato" href="#">VER PROGRAMACIÓN</a>
                </div>
            </div>
            <div class="url-content">
                <img src="images/basic-icons/link.svg">
                <input class="input-url" placeholder="Enlace o URL" type="text">
            </div>
            <div class="modal-footer">
                <div class="btn-content m-auto">
                    <button class="a-btn-basic-small" style="opacity: .5;">ACEPTAR</button>
                    <button data-dismiss="modal" class="ml-5 a-btn-basic-small">CANCELAR</button>
                </div>
            </div>
        </div>
    </div>
    <!-- ENCABEZADO LANDING CANAL CLARO 1 -->

    <!-- ENCABEZADO LANDING CANAL CLARO 5 -->
    <div id="modal-url" class="modal">
        <div class="modal-url">
            <p>Vínculo a una página web existente</p>
            <div class="url-modal-content">
                <img width="57px" src="images/basic-icons/link.svg" alt="">
                <input class="input-url-modal" placeholder="Pega el enlace o URL" type="text">
                <small class="error">INTENTA DE NUEVO CON UNA IMAGEN PNG</small>
            </div>
            <div class="modal-footer">
                <div class="m-auto btn-content">
                    <button class="a-btn-basic-small">ACEPTAR</button>
                    <button data-dismiss="modal" class="ml-5 a-btn-basic-small">CANCELAR</button>
                </div>
            </div>
        </div>
    </div>
    <!-- ENCABEZADO LANDING CANAL CLARO 5 -->

    <!-- TEXTO-PROMO LANDING CANAL CLARO 1 -->
    <div id="modal-title" class="modal">
        <div class="modal-title">
            <p class="h3">TITULO</p>
            <hr class="hr-promo">

            <div class="title-modal-content">
                <input class="input-title" type="text" placeholder="TITULO">
                <input class="input-sub-title" type="text" placeholder="SUBTITULO">
            </div>

            <div class="modal-footer">
                <div class="m-auto btn-content">
                    <button class="a-btn-basic-small">ACEPTAR</button>
                    <button data-dismiss="modal" class="ml-5 a-btn-basic-small">CANCELAR</button>
                </div>
            </div>
        </div>
    </div>
    <!-- TEXTO-PROMO LANDING CANAL CLARO 1 -->

    <!-- BANNER LANDING CANAL CLARO 4 -->
    <div id="modal-banner" class="modal">
        <div class="modal-banner-claro">
            <p class="text-plus modal-banner-p">CARGAR IMAGENES EN FORMATO JPG</p>
            <span class="h3">BANNER - CANAL CLARO</span>
            <hr class="hr-banner">

            <div class="d-flex content-calendario">
                <!--dots-->
                <div class="programming-slider-dots">
                    <ul class="slick-dots" style="" role="tablist">
                        <li class="slick-active" role="presentation">
                            <p class="mb-0 a-text-bold-teal slider-pagination-item mr-4 mb-3">1</p>
                        </li>
                        <li role="presentation">
                            <p class="mb-0 a-text-bold-teal slider-pagination-item mr-4 mb-3">2</p>
                        </li>
                        <li role="presentation">
                            <p class="mb-0 a-text-bold-teal slider-pagination-item mr-4 mb-3">3</p>
                        </li>
                        <li role="presentation">
                            <p class="mb-0 a-text-bold-teal slider-pagination-item mr-4 mb-3">4</p>
                        </li>
                        <!--add slide-->
                        <img src="/images/add-icon.svg" class="add-programming-image cursor-pointer">
                    </ul>
                </div>

                <div class="d-flex align-items-center">
                    <span class="h3 my-0">VIGENCIA</span>

                    <input type="text" id="date-start-input">
                    <label for="date-start-input" class="ml-4 mb-0 date-button date-start-table d-flex align-items-center pl-3 pr-3" id="date-start-table">
                        <img src="./images/calendario.svg" alt="">
                        <div class="ml-3">
                            <p class="text-small d-block mb-0 a-text-semibold-warmgrey">Inicio</p>
                            <p class="text-normal mb-0 a-text-bold-charcoal" id="start-date-text">DD-MM-YYYY</p>
                        </div>
                    </label>

                    <label for="date-start-input" class="mb-0 ml-4 date-button date-end-table d-flex align-items-center pl-3 pr-3">
                        <img src="./images/calendario.svg" alt="">
                        <div class="ml-3">
                            <p class="text-small d-block mb-0 a-text-semibold-warmgrey">Fin</p>
                            <p class="text-normal mb-0 a-text-bold-charcoal" id="end-date-text">DD-MM-YYYY</p>
                        </div>
                    </label>
                </div>
            </div>
            
            <div class="img-content-banner mt-2">
                <div class="position-relative h-100">
                    <label for="banner-claro">
                        <div id="img-banner-claro">
                            <img src="images/modals/CANAL-CLARO-03-A.jpg">
                        </div>
                        <input required class="d-none" id="banner-claro" name="img-banner-claro" type="file">
                    </label>
                </div>
            </div>

            <div class="modal-footer mt-5">
                <div class="m-auto btn-content">
                    <button class="a-btn-basic-small">ACEPTAR</button>
                    <button data-dismiss="modal" class="ml-5 a-btn-basic-small">CANCELAR</button>
                </div>
            </div>
            
        </div>
    </div>
    <!-- BANNER LANDING CANAL CLARO 4 -->

</body>

@endsection