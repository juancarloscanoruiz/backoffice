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
                    <div class="navbar">
                        <!-- BOTONES APROBAR Y RECHAZAR CAMBIOS -->
                        <div class="d-flex">
                            <button class="a-text-MBlack btn-apro mr-3">Aprobar cambios</button>
                            <button class="a-text-MBlack btn-recha">Rechazar cambios</button>
                        </div>
                        <!-- EDITAR - PRVISUALIZAR -->
                        <div class="d-flex float-right pb-2 mr-1">
                            <form action="" name="formilariosexo" id="formulariosexo" class="formulario">
                                <div class=" d-flex prev text-small a-text-medium-brownish location mt-2">
                                    <input type="radio" name="sexo" id="edit" checked />
                                    <label for="edit" id="editar" class="mujer-estilo d-flex align-items-center pl-4 pt-3" mvh="0">
                                        <p class=" a-prev-title">EDITAR</p>
                                    </label>
                                    <input type="radio" name="sexo" id="prev" />
                                    <label for="prev" id="previsualiza" class="hombre-estilo pl-2 pt-3" mvh="0"> 
                                        <p class=" a-prev-title ">PREVISUALIZAR</p>
                                    </label>
                                </div>
                            </form>
                            <div id="mvhImg"></div>
                        </div>
                    </div>
                    <div class="navbar mb-4">
                        <div></div>
                        <div>
                            <button class="btn-zona zona">Zona horaria<img src="./images/gmt-icon.svg" alt="Zona Horaria" class="ml-2" style="width: 32px;"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid subMenuLandingCase" landing="Canal Claro">
            <div class="row">
                <div class="col-8 mx-auto">
                    <h3 class="monthSliderCalendar a-text-semibold-brownish-grey-three text-uppercase"></h3>
                    <div class="slick-calendario calendar-sinopsis-slider"></div>
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
@include('components.modals.sinopsis')

@include('components.modals.generic.advertencia')
@include('components.modals.generic.advertencia-url')
@include('components.modals.generic.url')