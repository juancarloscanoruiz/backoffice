<script src="{{ asset('/js/lib/easyXDM.min.js') }}"></script>



<script>
    new easyXDM.Socket({
        remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/home-edi.php",
        container: "navbar-prev-home",
        onMessage: function(message, origin) {
            console.log(message);
            this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
            this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";

        }
    });
</script>


<body>
    <main>

        <div id="menu">
            <nav class="d-flex col-xl-11 navbar-expand-sm justify-content-center mb-5" id="option">
                <div class="navbar-progra d-flex align-items-center justify-content-center mt-5">
                    <img src="./images/arrow-gray.svg" alt="flecha" class="arrow-progra arrow-progra-left">
                    <div class="navbar-progra-item navbar-progra-item-border navbar-progra-active navbar-programacion navbar-prev-programacion" navbar-index="1" rel="navbar-prev-programacion">
                        <div class="navbar-progra-item-container ml-3 mr-3">
                            <p class="a-text-regular-blacktwo py-2 px-3 mb-0">PROGRAMACIÓN</p>
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


                    <div class="navbar-progra-item navbar-prev-home navbar-home pointer-none" navbar-index="4" rel="navbar-prev-home">
                        <div class="navbar-progra-item-container ml-3 mr-3">
                            <p class="a-text-bold-light py-2 px-3 mb-0">HOME</p>
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
                <div class="pt-2">
                    <img src="./images/mobile.svg" class="a-prev-image ml-3 mr-3" alt="mobile" id="prev-mobile">
                    <img src="./images/tablet.svg" class="a-prev-image" alt="tablet" id="prev-tablet">
                    <img src="./images/pc.svg" class="a-prev-image ml-3" alt="pc" id="prev-desktop">
                </div>
            </div>
            <div class="float-left ml-5 mb-4 ">
                <div class="d-flex  ">
                    <button class="btn-apro  text-grilla mr-3 gril-claro" id="btn-grilla"><span>Aprobar
                            cambios</span></button>
                    <button class="btn-recha  text-grilla lan-claro" id="btn-landing"><span>Rechazar
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
                <div class="navbar-progra-content mb-5 navbar-prev-programacion mt-5"
                    id="navbar-prev-programacion-cinema">
                </div>
            </div>
            <!--landing de sinopsis-->
            <div class="navbar-progra-content navbar-sinopsis" id="navbar-prev-sinopsis">
                <section class="col-8 mx-auto">
                    <h3 class="h3 a-text-semibold-brownish-grey-three text-uppercase mb-5 mt-6" id="slider-calendar-current-date">Octubre 2020</h3>
                    <h3 class="h3 a-text-semibold-brownish-grey-three text-uppercase mb-5 mt-6"
                        id="slider-calendar-current-date">Octubre 2020</h3>
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
                <div class="navbar-progra-content mb-5 mt-5" id="navbar-prev-home">
                </div>
            </div>
        </div>
    </main>
    <!--inicio de modales para edición-->

    <!--menu de logos-->
    <div class="modal  modal-edit-icons pr-0" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered m-0" role="document">
            <div class="modal-content align-item-center centro " style="width: 100%">
                <div class="modal-body ">
                    <h2 class="h2 text-center a-text-black-brown-two mt-2 ">MENÚ DE CANALES</h2>
                    <hr class="d-flex align-content-center separationhr mb-4 col-12">
                    <!--div padre-->
                    <form>
                        <div class="d-flex justify-content-around col-11 mb-5 mt-5">
                            <!--Div primer logo-->
                            <div class="d-flex justify-content-center  slider-logo mt-5">
                                <!--pagination-->
                                <div class=" d-flex programming-dots ">
                                    <p class=' a-text-bold-white slider-pagination slider-pagination-logo slider-pagination-active '>
                                        1</p>
                                </div>
                                <div class="centro position-relative logo-lading-container mb-3">
                                    <div class="bor mx-auto position-relative thumbnail-image-program" id="thumbnail-home-horizontal">
                                        <input type="file" name="image-icon1" id="image-icon1" class="input-image-program logo-landing d-none">
                                        <label for="image-icon1" class="mb-0 cursor-pointer  d-flex justify-content-center align-items-center h-100 flex-column load-modales">
                                            <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo" class="add-photo " style="z-index:10000" />
                                            <span class="a-text-bold-warm text-plus p-2 pr-3 pl-3  white-shadow" style="z-index:10000">472px X
                                                295px</span>
                                            <img src="{{ asset('/images/synopsis/image-synopsis-horizontal.png') }}" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                                        </label>
                                    </div>

                                    <!--Div de los url-->
                                    <div class="mt-5 d-flex justify-content-center">
                                        <img src="{{ asset('/images/basic-icons/link.svg') }}" alt="logo-link" class="mr-3">
                                        <input type="text" name="links" id="link-logo-canal-claro" class="urls a-text-bold-warm text-normal" placeholder=" Enlace o URL">

                                    </div>

                                </div>
                            </div>
                            <div class="d-flex justify-content-center   slider-logo mt-5">
                                <!--pagination-->
                                <div class=" d-flex programming-dots ">
                                    <p class='a-text-bold-teal slider-pagination slider-pagination-logo pag'>2</p>
                                </div>
                                <!--cargar imagenes-->
                                <div class="centro position-relative mb-3 logo-lading-container">
                                    <div class="bor mx-auto position-relative thumbnail-image-program" id="thumbnail-home-horizontal">
                                        <input type="file" name="image-icon2" id="image-icon2" class="input-image-program logo-landing d-none">
                                        <label for="image-icon2" class="mb-0 cursor-pointer d-flex justify-content-center align-items-center h-100 flex-column load-modales">
                                            <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo" class="add-photo " style="z-index:10000" />
                                            <span class="a-text-bold-warm text-plus p-2 pr-3 pl-3  white-shadow" style="z-index:10000">472px X
                                                295px</span>
                                            <img src="{{ asset('/images/synopsis/image-synopsis-horizontal.png') }}" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                                        </label>
                                    </div>
                                    <!--div urls-->
                                    <div class="mt-5 d-flex justify-content-center">
                                        <img src="{{ asset('/images/basic-icons/link.svg') }}" alt="logo-link" class="mr-3">
                                        <input type="text" name="links" id="link-logo-concert-channel" class="urls a-text-bold-warm text-normal" placeholder=" Enlace o URL">

                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center slider-logo mt-5 ">
                                <!--pagination-->
                                <div class=" programming-dots ">
                                    <p class='a-text-bold-teal slider-pagination slider-pagination-logo '>3 </p>
                                </div>
                                <!--cargar imagenes-->
                                <div class="centro position-relative mb-3 logo-lading-container">
                                    <div class="bor mx-auto position-relative thumbnail-image-program" id="thumbnail-home-horizontal">
                                        <input type="file" name="image-icon3" id="image-icon3" class="input-image-program logo-landing d-none">
                                        <label for="image-icon3" class="mb-0 cursor-pointer d-flex justify-content-center align-items-center h-100 flex-column load-modales">
                                            <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo" class="add-photo " style="z-index:10000" />
                                            <span class="a-text-bold-warm text-plus p-2 pr-3 pl-3  white-shadow" style="z-index:10000">472px X
                                                295px</span>
                                            <img src="{{ asset('/images/synopsis/image-synopsis-horizontal.png') }}" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                                        </label>
                                    </div>
                                    <!--div urls-->
                                    <div class="mt-5 d-flex justify-content-center">
                                        <img src="{{ asset('/images/basic-icons/link.svg') }}" alt="logo-link" class="mr-3">
                                        <input type="text" name="links" id="link-logo-claro-cinema" class="urls a-text-bold-warm text-normal" placeholder=" Enlace o URL">
                                    </div>
                                </div>
                            </div>

                        </div>
                        <!--div botones-->
                        <div class="text-center  mb-4 d-flex justify-content-center pb-2">
                            <button class="d-flex m-0  mr-3  btn-grilla a-btn-basic-small a-btn-basic-small text-uppercase a-text-MBlack text-plus edit-landing-modal-button" id="edit-logos-button" data-dismiss="modal">ACEPTAR</button>
                            <a href="#delete-info" role="button" class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel" data-toggle="modal">CANCELAR</a>

                        </div>
                    </form>
                </div>

            </div>
        </div>

    </div>
    @include('admin-site.landings.edit-program.edit-program', array('style' => 'thumbnail-header-cinema',
    "modalButtonClass" => "modal-program-claro-cinema"))
    <div class="modal modal-programming-carousel pr-0" id="modaledi" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" style="padding: 0px !important">
        <div class="modal-dialog modal-dialog-centered m-0" role="document" style="max-width: 100%;">
            <div class="modal-content">
                <div class="modal-body">


                    <h2 class="h2 text-center a-text-black-brown-two pt-3">BANNER PROGRAMACIÓN - CARRUSEL </h2>
                    <hr class="d-flex align-content-center separationhr col-11 mt-3 mb-0">
                    <!--Slider pagination-->
                    <div class="dots-container mx-auto d-flex justify-content-between">
                        <div class="d-flex">
                            <!--dots-->
                            <div class="programming-slider-dots mt-5 mb-5"></div>
                            <!--add slide-->
                            <img src="{{ asset('images/add-icon.svg') }}" class="add-programming-image cursor-pointer">
                        </div>
                        <!--Calendar-->
                        <div class="d-flex align-items-center">
                            <div>
                                <h3 class="text-uppercase h3 a-text-black-brown-two">Vigencia</h3>
                            </div>

                            <input type="text" id="programming-carrusel-calendar " class="d-none">
                            <label for="programming-carrusel-calendar" class="ml-4 mb-0 date-button date-start-table d-flex align-items-center  pl-3 pr-3" id="date-start-table">
                                <img src="./images/calendario.svg" alt="">
                                <div class="ml-3">
                                    <p class="text-small d-block mb-0 a-text-semibold-warmgrey">Inicio</p>
                                    <p class="text-normal mb-0 a-text-bold-charcoal" id="start-date-text">DD-MM-YYYY</p>
                                </div>
                            </label>

                            <!--Fecha de fin de calendario-->
                            <label for="programming-carrusel-calendar" class="mb-0 ml-4 date-button date-end-table d-flex align-items-center pl-3 pr-3">
                                <img src="./images/calendario.svg" alt="">
                                <div class="ml-3">
                                    <p class="text-small d-block mb-0 a-text-semibold-warmgrey">Fin</p>
                                    <p class="text-normal mb-0 a-text-bold-charcoal" id="end-date-text">DD-MM-YYYY</p>
                                </div>
                            </label>
                        </div>
                    </div>

                    <!--Slider-->
                    <div class="programming-slider mx-auto">
                        <!--Slide
                  <div class="bor thumbnail-image-program position-relative h-100">
                      <input type="file" name="image_programming[]" id="image_programming_1" class="input-image-program d-none image_programming " data-index="1">
                      <label for="image_programming_1"
                          class="h-100 mb-0 d-flex justify-content-center  align-items-center flex-column   load-programming-carousel">
                          <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                              class=" cursor-pointer add-photo " />
                          <span class="a-text-bold-warm text-plus mt-3">1000px X 342px</span>
                          <img src="{{ asset('/images/synopsis/image-synopsis-carrusel.jpg') }}"
                              class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                      </label>
                  </div>
                  Slide
                  <div class="bor thumbnail-image-program position-relative h-100">
                      <input type="file" name="image_programming[]" id="image_programming_2" class="input-image-program d-none image_programming " data-index="2">
                      <label for="image_programming_2"
                          class="h-100 mb-0 d-flex justify-content-center align-items-center  flex-column load-modales">
                          <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                              class=" cursor-pointer add-photo " />
                          <span class="a-text-bold-warm text-plus mt-3">1000px X 342px</span>
                          <img src="{{ asset('/images/synopsis/image-synopsis-carrusel.jpg') }}"
                              class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                      </label>
                  </div>
                Slide
                  <div class="bor thumbnail-image-program position-relative h-100">
                      <input type="file" name="image_programming[]" id="image_programming_3" class="input-image-program d-none image_programming" data-index="3">
                      <label for="image_programming_3"
                          class="h-100 mb-0 d-flex justify-content-center  align-items-center flex-column load-modales">
                          <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                              class=" cursor-pointer add-photo" />
                          <span class="a-text-bold-warm text-plus mt-3">1000px X 342px</span>
                          <img src="{{ asset('/images/synopsis/image-synopsis-carrusel.jpg') }}"
                              class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                      </label>
                  </div>
                   Slide
                   <div class="bor thumbnail-image-program position-relative h-100">
                      <input type="file" name="image_programming[]" id="image_programming_3" class="input-image-program d-none image_programming" data-index="3">
                      <label for="image_programming_3"
                          class="h-100 mb-0 d-flex justify-content-center  align-items-center flex-column load-modales">
                          <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                              class=" cursor-pointer add-photo" />
                          <span class="a-text-bold-warm text-plus mt-3">1000px X 342px</span>
                          <img src="{{ asset('/images/synopsis/image-synopsis-carrusel.jpg') }}"
                              class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                      </label>
                  </div>


              End slider-->
                    </div>
                    <!--Buttons-->
                    <div class="text-center mb-3 d-flex justify-content-center">
                        <button class="edit-landing-modal-button d-flex mr-3 text-uppercase  m-0 btn-grilla a-btn-basic-small btn-grilla a-btn-basic-small text-uppercase a-text-MBlack text-plus" id="image-programming-button" landin="canal claro">aceptar</button>
                        <a href="#delete-info" role="button" class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel" data-toggle="modal">CANCELAR</a>

                        <!-- <button
                      class="d-inline-block text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal" data-toggle="modal"   >cancelar</button>-->
                    </div>

                </div>

            </div>
        </div>
    </div>

    <!--modal para perder lo hecho en los landing de edit-->
    <div class=" modal  delete-info" data-backdrop-limit="1" id="delete-info" tabindex="-1" role="dialog" data-modal-parent="#modalbanner">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content  ">
                <div class="modal-body ">
                    <img src="images/basic-icons/delete.svg" alt="advertencia de borrado" class="mx-auto d-flex mt-5 ">
                    <p class="a-text-medium-warm-grey-three h3 mt-5 centro">Se perderá toda la información, NO PODRÁS
                        recuperar la <span class="h3 a-text-bold-warm-grey-three"> información.</span></p>
                </div>

                <div class="text-center mb-5 mt-4 pt-3 pb-4">
                    <button type="button" class="a-btn-basic-small a-btn-border-tomato mr-3 a-text-bold-tomato text-normal" data-dismiss="modal" data-dismiss="modal" data-dismiss="modal" id="close_modals">ACEPTAR</button>

                    <button type="button" class="a-btn-basic-small a-btn-tomato  a-text-MBlack  text-normal" data-dismiss="modal" data-dismiss="modal" aria-hidden="true">CANCELAR</button>
                </div>
            </div>
        </div>
    </div>

    </div>

    @include('partials.adm-CN.modals-cinema.titulo-cinema')
    @include('partials.adm-CN.modals-concert.programming');
    @include('partials.adm-CN.modals-cinema.promo-cinema')
    @include('partials.adm-CN.modals-cinema.banner-cinema')
    @include('partials.adm-CN.modals-cinema.encabezado-cinema')
    @include('partials.adm-CN.modals-cinema.titulo-carrusel1')
    @include('partials.adm-CN.modals-concert.carrusel');

    @include('partials.adm-CN.modals-cinema.modal-advertencia')
    @include('partials.adm-CN.modals-cinema.modal-url')

</body>