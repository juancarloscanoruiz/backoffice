<body>
    <main>
        <div id="menu">
            <div class="container-fluid">
                <div class="col-12">
                    <nav class="d-flex col-xl-11 navbar-expand-sm justify-content-center mb-5 mx-auto" id="option">
                        <div class="navbar-progra d-flex align-items-center justify-content-center mt-2">
                            <img src="./images/arrow-gray.svg" alt="flecha" class="arrow-progra arrow-progra-left">
                            <div class="navbar-progra-item navbar-progra-item-border navbar-programacion   navbar-progra-active navbar-prev-programacion" navbar-index="1" rel="navbar-prev-programacion">
                                <div class="navbar-progra-item-container ml-3 mr-3">
                                    <p class="a-text-bold-two py-2 px-3 mb-0">PROGRAMACIÓN</p>
                                </div>
                            </div>
                            <div class="navbar-progra-item navbar-progra-item-border navbar-sinopsis " navbar-index="2" rel="navbar-prev-sinopsis">
                                <div class="navbar-progra-item-container ml-3 mr-3">
                                    <p class=" a-text-bold-two py-2 px-3 mb-0">SINOPSIS</p>
                                </div>
                            </div>

                            <div class="navbar-progra-item navbar-progra-item-border navbar-canal-claro" navbar-index="3" rel="navbar-prev-canal-claro">
                                <div class="navbar-progra-item-container ml-3 mr-3">
                                    <p class="py-2 px-3 mb-0 a-text-bold-two">CANAL CLARO</p>
                                </div>
                            </div>
                            <div class="navbar-progra-item navbar-prev-home navbar-home" navbar-index="4" rel="navbar-prev-home">
                                <div class="navbar-progra-item-container ml-3 mr-3">
                                    <p class=" a-text-bold-two py-2 px-3 mb-0">HOME</p>
                                </div>
                            </div>
                            <img src="./images/arrow-gray.svg" alt="flecha" class="arrow-progra arrow-progra-right">
                        </div>
                    </nav>
                    @include('components.previsualizacion')
                    <div class="navbar mb-4">
                        <div></div>
                        <div>
                            <button class="btn-zona zona">Zona horaria<img src="./images/gmt-icon.svg" alt="Zona Horaria" class="ml-2" style="width: 32px;"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid subMenuLandingCase mb-5" landing="Canal Claro">
            <div class="row">
                <div class="col-8 mx-auto">
                    <h3 class="monthSliderCalendar a-text-semibold-brownish-grey-three text-uppercase"></h3>
                    <div class="slick-calendario"></div>
                </div>

                <div class="col-11 mx-auto p-0 content-table show-sinopsis-table"></div>

                <div class="col-12 text-center">
                    <div id="iframe-canal-claro"></div>
                </div>
            </div>
        </div>
    </main>
</body>
@include('components.modals.banner')
@include('components.modals.logos')
@include('components.modals.header')
@include('components.modals.programacion')
@include('components.modals.titulo')
@include('components.modals.termometro')
@include('components.modals.sinopsis')
@include('components.modals.promo')

@include('components.modals.generic.advertencia')
@include('components.modals.generic.advertencia-url')
@include('components.modals.generic.url')