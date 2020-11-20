<body>
    <main>
        <div id="menu">
            <!--Navbar para ir viendo previsualizaciones de landings-->
            <nav class="d-flex col-xl-11 navbar-expand-sm  mx-auto justify-content-center mb-5" id="option">
                <div class="navbar-progra d-flex align-items-center justify-content-center mt-2">
                    <img src="./images/arrow-gray.svg" alt="flecha" class="arrow-progra arrow-progra-left">

                    <div class="navbar-progra-item navbar-progra-item-border navbar-programacion navbar-progra-active navbar-prev-programacion"
                        navbar-index="1" rel="navbar-prev-programacion-concert">
                        <div class="navbar-progra-item-container ml-3 mr-3">
                            <p class="a-text-bold-two py-2 px-3 mb-0">PROGRAMACIÓN</p>
                        </div>
                    </div>

                    <div class="navbar-progra-item navbar-progra-item-border navbar-sinopsis " navbar-index="2"
                        rel="navbar-prev-sinopsis">
                        <div class="navbar-progra-item-container ml-3 mr-3">
                            <p class=" a-text-bold-two py-2 px-3 mb-0">SINOPSIS</p>
                        </div>
                    </div>
                    <div class="navbar-progra-item navbar-progra-item-border navbar-canal-claro" navbar-index=" 3"
                        rel="navbar-prev-concert-channel">
                        <div class="navbar-progra-item-container ml-3 mr-3">
                            <p class="py-2 px-3 mb-0 a-text-bold-two">CONCERT CHANNEL</p>
                        </div>
                    </div>


                    <div class="navbar-progra-item navbar-prev-home navbar-home" navbar-index="4"
                        rel="navbar-prev-home-concert">
                        <div class="navbar-progra-item-container ml-3 mr-3">
                            <p class=" a-text-bold-two py-2 px-3 mb-0">HOME</p>
                        </div>
                    </div>
                    <img src="./images/arrow-gray.svg" alt="flecha" class="arrow-progra arrow-progra-right">

                </div>
            </nav>
            <!--End navbar-->
            <!--Editar o previsualizar-->
            <div class="d-flex float-right mb-4 pb-2 mr-5">
                <form action="" name="formilariosexo" id="formulariosexo" class="formulario">
                    <div class=" d-flex prev text-small a-text-medium-brownish location mt-2">
                        <input type="radio" name="sexo" id="edit-landing-concert" class="edi-concert" checked />
                        <label for="edit-landing-concert" class="mujer-estilo d-flex align-items-center pl-4 pt-3">
                            <p class=" a-prev-title">EDITAR</p>
                        </label>
                        <input type="radio" name="sexo" id="prev-landing-concert" class="prev-concert"
                            onload="preloader()" />
                        <label for="prev-landing-concert" id="previsualiza" class="hombre-estilo pl-2 pt-3">
                            <p class=" a-prev-title ">PREVISUALIZAR</p>
                        </label>
                    </div>
                </form>
                <!--Iconos para previsualizar en diferentes tamaños-->

                <div class="pt-2">
                    <img src="./images/mobile.svg" class="a-prev-image ml-3 mr-3 op-inac pointer-none" alt="mobile"
                        id="prev-mobile">
                    <img src="./images/tablet.svg" class="a-prev-image op-inac pointer-none" alt="tablet"
                        id="prev-tablet">
                    <img src="./images/pc.svg" class="a-prev-image ml-3 op-ac cursor-pointer" alt="pc"
                        id="prev-desktop">
                </div>

            </div>

            <!--Buttons-->
            <div class="float-left ml-5 mb-4 ">
                <div class="d-flex  ">
                    <button class="btn-apro  a-text-MBlack  text-normal mr-3 gril-claro" id="btn-grilla"><span>Aprobar
                            cambios</span></button>
                    <button class="btn-recha  a-text-MBlack text-normal lan-claro" id="btn-landing"><span>Rechazar
                            cambios</span></button>
                </div>
            </div>

            <!--Botón zona horaria-->
            <div class="clearfix"></div>
            <div class=" mr-5 d-flex float-right ">
                <div class="btn-zona zona"><span class="mr-3">Zona horaria</span> <img
                        src={{ asset('images/gmt-icon.svg') }} class="Icon_paises1" /></div>
            </div>
            <div class="clearfix"></div>
            <!--iframe de programación-->
            <div class="centro ">

                <div class="navbar-progra-content mb-5 mt-5 navbar-prev-programacion"
                    id="navbar-prev-programacion-concert">
                </div>
            </div>
            <!--sinopsis-->
            <!--Slider de calendario-->

            <div class="navbar-progra-content navbar-sinopsis" id="navbar-prev-sinopsis">
                <section class="col-8 mx-auto">
                    <h3 class="h3 a-text-semibold-brownish-grey-three text-uppercase mb-5 mt-6"
                        id="slider-calendar-current-date">Octubre 2020</h3>
                    <div class="mb-5 calendar-sinopsis-slider"></div>
                </section>
                <div id="prev-sinopsis">
                    <div class="mx-auto shadow mt-5 col-10 p-0 mb-5 content-table" id="synopsis-table-concert-channel">
                        <div class="contenedor-fila">
                            <div class="contenedor-columna centro synop titletable">
                                <span class="a-text-MBlack a-text-prev">Programa</span>
                            </div>
                            <div class="contenedor-columna centro  landins titletable">
                                <span class="a-text-MBlack a-text-prev">Caracteres</span>
                            </div>
                            <div class="contenedor-columna centro landins titletable">
                                <span class="a-text-MBlack a-text-prev">Imágenes</span>
                            </div>
                            <div class="contenedor-columna centro landins titletable">
                                <span class="a-text-MBlack a-text-prev">Acciones</span>
                            </div>
                            <div class="contenedor-columna centro landins titletable">
                                <span class="a-text-MBlack a-text-prev">Landing</span>
                            </div>
                        </div>
                        <!--fin de titulos-->
                        <div class="contenedor-fila">
                            <div class="contenedor-columna">
                                <span class="a-text-medium-black text-normal pd-5">Mad Men</span>
                            </div>
                            <div class="contenedor-columna centro">
                                <span class="a-text-semibold-tomato text-normal pl-3 ">0</span>
                            </div>
                            <div class="contenedor-columna centro">
                                <span class="a-text-semibold-tomato text-normal ">0/8</span>
                            </div>
                            <div class="contenedor-columna centro">
                                <input type="image" src="./images/lapiz-acti.svg" alt="" class="btn-focus edi mr-3" />
                                <input type="image" src="./images/ojito-acti.svg" alt="" class=" btn-focus edi" />
                            </div>
                            <div class="contenedor-columna centro ">
                                <div class="d-flex align-items-center justify-content-center mb-2 mt-2">
                                    <input type="radio" id="yes-landing" value="3"
                                        class="edit-switch-landing edit-landing-yes" />
                                    <label for="yes-landing" id="siestado-landing"
                                        class="mb-0 si-estilo cursor-pointer switch-label">
                                        Sí</label>
                                    <input type="radio" id="no-landing" value="0"
                                        class="edit-switch-landing switch-table-edit edit-landing-no" checked />
                                    <label for="no-landing" id="noestado-landing"
                                        class="mb-0 no-estilo cursor-pointer switch-label">
                                        No</label>
                                </div>
                            </div>
                        </div>

                        <div class="contenedor-fila">
                            <div class="contenedor-columna">
                                <span class="a-text-medium-black text-normal pd-5">Dress Code</span>
                            </div>
                            <div class="contenedor-columna centro ">
                                <span class="a-text-semibold-orange text-normal ">143</span>
                            </div>
                            <div class="contenedor-columna centro ">
                                <span class="a-text-semibold-orange text-normal ">5/8</span>
                            </div>
                            <div class="contenedor-columna centro">
                                <input type="image" src="./images/lapiz-acti.svg" alt="" class=" btn-focus edi mr-3" />
                                <input type="image" src="./images/ojito-acti.svg" alt="" class=" btn-focus edi" />
                            </div>
                            <div class="contenedor-columna centro ">
                                <div class="d-flex align-items-center justify-content-center mb-2 mt-2">
                                    <input type="radio" id="yes-landing" value="3"
                                        class="edit-switch-landing edit-landing-yes" />
                                    <label for="yes-landing" id="siestado-landing"
                                        class="mb-0 si-estilo cursor-pointer switch-label">
                                        Sí</label>
                                    <input type="radio" id="no-landing" value="0"
                                        class="edit-switch-landing switch-table-edit edit-landing-no" checked />
                                    <label for="no-landing" id="noestado-landing"
                                        class="mb-0 no-estilo cursor-pointer switch-label">
                                        No</label>
                                </div>
                            </div>
                        </div>
                        <div class="contenedor-fila">
                            <div class="contenedor-columna">
                                <span class="a-text-medium-black text-normal pd-5">Gran Hotel</span>
                            </div>
                            <div class="contenedor-columna centro ">
                                <span class="a-text-semibold-greyish-brown-two  text-normal ">144</span>
                            </div>
                            <div class="contenedor-columna centro ">
                                <span class="a-text-semibold-greyish-brown-two text-normal ">8/8</span>
                            </div>
                            <div class="contenedor-columna centro">
                                <input type="image" src="./images/lapiz-acti.svg" alt="" class=" btn-focus edi mr-3" />
                                <input type="image" src="./images/ojito-acti.svg" alt="" class=" btn-focus edi" />
                            </div>
                            <div class="contenedor-columna centro ">
                                <div class="d-flex align-items-center justify-content-center mb-2 mt-2">
                                    <input type="radio" id="yes-landing" value="3"
                                        class="edit-switch-landing edit-landing-yes" checked />
                                    <label for="yes-landing" id="siestado-landing"
                                        class="mb-0 si-estilo cursor-pointer switch-label">
                                        Sí</label>
                                    <input type="radio" id="no-landing" value="0"
                                        class="edit-switch-landing switch-table-edit edit-landing-no" />
                                    <label for="no-landing" id="noestado-landing"
                                        class="mb-0 no-estilo cursor-pointer switch-label">
                                        No</label>
                                </div>
                            </div>
                        </div>
                        <div class="contenedor-fila">
                            <div class="contenedor-columna">
                                <span class="a-text-medium-black text-normal pd-5">Planeta Tierra</span>
                            </div>
                            <div class="contenedor-columna centro ">
                                <span class="a-text-semibold-tomato text-normal pl-2">20</span>
                            </div>
                            <div class="contenedor-columna centro ">
                                <span class="a-text-semibold-tomato text-normal ">4/8</span>
                            </div>

                            <div class="contenedor-columna centro">
                                <input type="image" src="./images/lapiz-acti.svg" alt="" class=" btn-focus edi mr-3" />
                                <input type="image" src="./images/ojito-acti.svg" alt="" class=" btn-focus edi" />
                            </div>
                            <div class="contenedor-columna centro ">
                                <div class="d-flex align-items-center justify-content-center mb-2 mt-2">
                                    <input type="radio" id="yes-landing" value="3"
                                        class="edit-switch-landing edit-landing-yes" />
                                    <label for="yes-landing" id="siestado-landing"
                                        class="mb-0 si-estilo cursor-pointer switch-label">
                                        Sí</label>
                                    <input type="radio" id="no-landing" value="0"
                                        class="edit-switch-landing switch-table-edit edit-landing-no" checked />
                                    <label for="no-landing" id="noestado-landing"
                                        class="mb-0 no-estilo cursor-pointer switch-label">
                                        No</label>
                                </div>
                            </div>
                        </div>

                        <div class="contenedor-fila">
                            <div class="contenedor-columna">
                                <span class="a-text-medium-black text-normal pd-5">La Caja de Pandora</span>
                            </div>
                            <div class="contenedor-columna centro ">
                                <span class="a-text-semibold-orange text-normal ">143</span>
                            </div>
                            <div class="contenedor-columna centro ">
                                <span class="a-text-semibold-orange text-normal ">5/8</span>
                            </div>
                            <div class="contenedor-columna centro">
                                <input type="image" src="./images/lapiz-acti.svg" alt="" class=" btn-focus edi mr-3" />
                                <input type="image" src="./images/ojito-acti.svg" alt="" class=" btn-focus edi" />
                            </div>
                            <div class="contenedor-columna centro ">
                                <div class="d-flex align-items-center justify-content-center mb-2 mt-2">
                                    <input type="radio" id="yes-landing" value="3"
                                        class="edit-switch-landing edit-landing-yes" />
                                    <label for="yes-landing" id="siestado-landing"
                                        class="mb-0 si-estilo cursor-pointer switch-label">
                                        Sí</label>
                                    <input type="radio" id="no-landing" value="0"
                                        class="edit-switch-landing switch-table-edit edit-landing-no" checked />
                                    <label for="no-landing" id="noestado-landing"
                                        class="mb-0 no-estilo cursor-pointer switch-label">
                                        No</label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <!--iframe de concert-channel-->
            <div class="centro">
                <div class="navbar-progra-content navbar-prev-concert-channel mb-5 mt-5"
                    id="navbar-prev-concert-channel">
                </div>
            </div>

            <!--iframe de home-->
            <div class="centro ">
                <div class="navbar-progra-content mb-5 mt-5" id="navbar-prev-home-concert">
                </div>
            </div>
        </div>
    </main>

    @include('partials.adm-CN.modals-claro.index');
    @include('partials.adm-CN.modals-concert.titulo')
    @include('partials.adm-CN.sinopsis');
    @include('partials.adm-CN.modals-concert.promo-concert')
    @include('partials.adm-CN.modals-concert.encabezado')
    @include('partials.adm-CN.modals-concert.banner-concert');

    <!--HOME-->
    @include('partials.adm-CN.modals-home.home-encabezado', ['landing' => 'concert-channel']);
    @include('partials.adm-CN.modal-home.logo');
    @include('partials.adm-CN.modal-home.carrusel')
    @include('partials.adm-CN.modals-concert.programming');

    @include('partials.adm-CN.modal-generic.advertencia');
    @include('partials.adm-CN.modal-generic.url');
    @include('components.modals.carrusel')

</body>
