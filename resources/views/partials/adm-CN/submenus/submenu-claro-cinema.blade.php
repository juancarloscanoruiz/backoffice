<script src="{{ asset('/js/lib/easyXDM.min.js') }}"></script>





<body>
    <main>

        <div id="menu">
            <nav class="d-flex col-xl-11 navbar-expand-sm justify-content-center mb-5" id="option">
                <div class="navbar-progra d-flex align-items-center justify-content-center mt-2">
                    <img src="./images/arrow-gray.svg" alt="flecha" class="arrow-progra arrow-progra-left">
                    <div class="navbar-progra-item navbar-progra-item-border navbar-progra-active navbar-programacion navbar-prev-programacion" navbar-index="1" rel="navbar-prev-programacion">
                        <div class="navbar-progra-item-container ml-3 mr-3">
                            <p class="a-text-bold-two py-2 px-3 mb-0">PROGRAMACIÓN</p>
                        </div>

                    </div>

                    <div class="navbar-progra-item navbar-progra-item-border navbar-sinopsis " navbar-index="2" rel="navbar-prev-sinopsis">
                        <div class="navbar-progra-item-container ml-3 mr-3">
                            <p class=" a-text-bold-two py-2 px-3 mb-0">SINOPSIS</p>
                        </div>
                    </div>
                    <div class="navbar-progra-item navbar-progra-item-border  navbar-canal-claro " navbar-index="3" rel="navbar-prev-claro-cinema">
                        <div class="navbar-progra-item-container ml-3 mr-3">
                            <p class="py-2 px-3 mb-0 a-text-bold-two">CLARO CINEMA</p>

                        </div>
                    </div>


                    <div class="navbar-progra-item navbar-prev-home navbar-home " navbar-index="4" rel="navbar-prev-home-cinema">
                        <div class="navbar-progra-item-container ml-3 mr-3">
                            <p class="a-text-bold-two py-2 px-3 mb-0">HOME</p>
                        </div>
                    </div>
                    <img src="./images/arrow-gray.svg" alt="flecha" class="arrow-progra arrow-progra-right">
                    <!--<span class="p-3 arrow arrow-right">><span>-->
                </div>

            </nav>
            <div class="d-flex float-right mb-4 pb-2 mr-5">
                <form action="" name="formilariosexo" id="formulariosexo" class="formulario">
                    <div class=" d-flex prev text-small a-text-medium-brownish location mt-2">
                        <input type="radio" name="sexo" id="edit" class="edi-cinema" checked />
                        <label for="edit" id="editar" class="mujer-estilo d-flex align-items-center pl-4 pt-3">
                            <p class=" a-prev-title">EDITAR</p>
                        </label>
                        <input type="radio" name="sexo" id="prev" class="prev-cinema" />
                        <label for="prev" id="previsualiza" class="hombre-estilo pl-2 pt-3">
                            <p class=" a-prev-title ">PREVISUALIZAR</p>
                        </label>
                    </div>
                </form>
                <div id="device-size">
                    <div class="pt-2">
                        <img src="./images/pc.svg" class="a-prev-image ml-3 op-ac" alt="pc" id="prev-desktop">
                    </div>
                </div>
            </div>
            <div class="float-left ml-5 mb-4 ">
                <div class="d-flex  ">
                    <button class="btn-apro  a-text-MBlack  text-normal mr-3 gril-claro" id="btn-grilla"><span>Aprobar
                            cambios</span></button>
                    <button class="btn-recha  a-text-MBlack text-normal lan-claro" id="btn-landing"><span>Rechazar
                            cambios</span></button>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class=" mr-5 d-flex float-right">
                <div class="btn-zona zona"><span class="mr-3">Zona horaria</span> <img src={{ asset('images/gmt-icon.svg') }} class="Icon_paises1" /></div>
            </div>

            <div class="clearfix"></div>
            <!--iframe de programación-->
            <div class="centro ">
                <div class="navbar-progra-content mb-5 navbar-prev-programacion mt-5" id="navbar-prev-programacion-cinema">
                </div>
            </div>
            <!--landing de sinopsis-->
            <div class="navbar-progra-content navbar-sinopsis" id="navbar-prev-sinopsis">
                <section class="col-8 mx-auto">
                    <h3 class="h3 a-text-semibold-brownish-grey-three text-uppercase mb-5 mt-6" id="slider-calendar-current-date">Octubre 2020</h3>
                    <div class="mb-5 calendar-sinopsis-slider">
                        <li class="programming-item programming-item-active">
                            <p class="mb-0">MIER</p>
                            <p class="mb-0">01</p>
                        </li>
                        <li class="programming-item">
                            <p class="mb-0">MIER</p>
                            <p class="mb-0">01</p>
                        </li>
                        <li class="programming-item">
                            <p class="mb-0">MIER</p>
                            <p class="mb-0">01</p>
                        </li>
                        <li class="programming-item">
                            <p class="mb-0">MIER</p>
                            <p class="mb-0">01</p>
                        </li>
                        <li class="programming-item">
                            <p class="mb-0">MIER</p>
                            <p class="mb-0">01</p>
                        </li>
                        <li class="programming-item">
                            <p class="mb-0">MIER</p>
                            <p class="mb-0">01</p>
                        </li>
                        <li class="programming-item">
                            <p class="mb-0">MIER</p>
                            <p class="mb-0">01</p>
                        </li>
                        <li class="programming-item">
                            <p class="mb-0">MIER</p>
                            <p class="mb-0">01</p>
                        </li>
                        <li class="programming-item">

                            <p class="mb-0">MIER</p>
                            <p class="mb-0">01</p>

                        </li>
                        <li class="programming-item">
                            <p class="mb-0">MIER</p>
                            <p class="mb-0">01</p>
                        </li>
                        <li class="programming-item">

                            <p class="mb-0">MIER</p>
                            <p class="mb-0">01</p>

                        </li>
                        <li class="programming-item">

                            <p class="mb-0">MIER</p>
                            <p class="mb-0">01</p>

                        </li>
                        <li class="programming-item">

                            <p class="mb-0">MIER</p>
                            <p class="mb-0">01</p>

                        </li>
                        <li class="programming-item">
                            <p class="mb-0">MIER</p>
                            <p class="mb-0">01</p>

                        </li>
                    </div>
                </section>

                <div id="prev-sinopsis">
                    <div class="mx-auto shadow mt-5 col-10 p-0 mb-5 content-table" id="synopsis-table-claro-cinema">
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
                                <span class="a-text-semibold-tomato text-normal pl-3">0</span>
                            </div>
                            <div class="contenedor-columna centro">
                                <span class="a-text-semibold-tomato text-normal ">0/8</span>
                            </div>
                            <div class="contenedor-columna centro">
                                <input type="image" src="./images/lapiz-acti.svg" alt="" class=" btn-focus edi mr-3" />
                                <input type="image" src="./images/ojito-acti.svg" alt="" class=" btn-focus edi" />
                            </div>
                            <div class="contenedor-columna centro ">
                                <div class="d-flex align-items-center justify-content-center mb-2 mt-2">
                                    <input type="radio" id="yes-landing" value="3" class="edit-switch-landing edit-landing-yes" />
                                    <label for="yes-landing" id="siestado-landing" class="mb-0 si-estilo cursor-pointer switch-label">
                                        Sí</label>
                                    <input type="radio" id="no-landing" value="0" class="edit-switch-landing switch-table-edit edit-landing-no" checked />
                                    <label for="no-landing" id="noestado-landing" class="mb-0 no-estilo cursor-pointer switch-label">
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
                                    <input type="radio" id="yes-landing" value="3" class="edit-switch-landing edit-landing-yes" />
                                    <label for="yes-landing" id="siestado-landing" class="mb-0 si-estilo cursor-pointer switch-label">
                                        Sí</label>
                                    <input type="radio" id="no-landing" value="0" class="edit-switch-landing switch-table-edit edit-landing-no" checked />
                                    <label for="no-landing" id="noestado-landing" class="mb-0 no-estilo cursor-pointer switch-label">
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
                                    <input type="radio" id="yes-landing" value="3" class="edit-switch-landing edit-landing-yes" checked />
                                    <label for="yes-landing" id="siestado-landing" class="mb-0 si-estilo cursor-pointer switch-label">
                                        Sí</label>
                                    <input type="radio" id="no-landing" value="0" class="edit-switch-landing switch-table-edit edit-landing-no" />
                                    <label for="no-landing" id="noestado-landing" class="mb-0 no-estilo cursor-pointer switch-label">
                                        No</label>
                                </div>
                            </div>
                        </div>
                        <div class="contenedor-fila">
                            <div class="contenedor-columna">
                                <span class="a-text-medium-black text-normal pd-5">Planeta Tierra</span>
                            </div>
                            <div class="contenedor-columna centro ">
                                <span class="a-text-semibold-tomato text-normal pl-2 ">20</span>
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
                                    <input type="radio" id="yes-landing" value="3" class="edit-switch-landing edit-landing-yes" />
                                    <label for="yes-landing" id="siestado-landing" class="mb-0 si-estilo cursor-pointer switch-label">
                                        Sí</label>
                                    <input type="radio" id="no-landing" value="0" class="edit-switch-landing switch-table-edit edit-landing-no" checked />
                                    <label for="no-landing" id="noestado-landing" class="mb-0 no-estilo cursor-pointer switch-label">
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
                                    <input type="radio" id="yes-landing" value="3" class="edit-switch-landing edit-landing-yes" />
                                    <label for="yes-landing" id="siestado-landing" class="mb-0 si-estilo cursor-pointer switch-label">
                                        Sí</label>
                                    <input type="radio" id="no-landing" value="0" class="edit-switch-landing switch-table-edit edit-landing-no" checked />
                                    <label for="no-landing" id="noestado-landing" class="mb-0 no-estilo cursor-pointer switch-label">
                                        No</label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <!--iframe de claro cinema-->
            <div class="centro">
                <div class="navbar-progra-content navbar-prev-claro-cinema mb-5 mt-5" id="navbar-prev-claro-cinema">
                </div>
            </div>
            <!--iframe de home-->
            <div class="centro ">
                <div class="navbar-progra-content mb-5 mt-5" id="navbar-prev-home-cinema">
                </div>
            </div>
        </div>
    </main>
    <!--inicio de modales para edición-->

    <!--HOME-->

    @include('partials.adm-CN.modals-claro.index');

    @include('partials.adm-CN.modal-home.carrusel')

    @include('partials.adm-CN.modals-home.home-encabezado');
    @include('partials.adm-CN.modal-home.logo');
    @include('partials.adm-CN.sinopsis');
    @include('partials.adm-CN.modals-cinema.titulo-cinema')
    @include('partials.adm-CN.modals-cinema.promo-cinema')
    @include('partials.adm-CN.modals-cinema.banner-cinema')
    @include('partials.adm-CN.modals-cinema.encabezado-cinema')
    @include('partials.adm-CN.modals-concert.carrusel');
    @include('partials.adm-CN.modals-cinema.programming');

    @include('partials.adm-CN.modal-generic.advertencia');
    @include('partials.adm-CN.modal-generic.url');
</body>