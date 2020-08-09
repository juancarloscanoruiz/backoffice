
<script>
    new easyXDM.Socket({
        remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/claro-canal-edi.php",
        container: "navbar-prev-canal-claro",
        onMessage: function(message, origin) {
            this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
            this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    });
</script>

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
            <div class="navbar-progra d-flex align-items-center justify-content-center mt-2">
                    <img src="./images/arrow-gray.svg" alt="flecha" class="arrow-progra arrow-progra-left">
            <div class="navbar-progra-item navbar-progra-item-border navbar-programacion   navbar-progra-active navbar-prev-programacion"
                        navbar-index="1" rel="navbar-prev-programacion">
                        <div class="navbar-progra-item-container ml-3 mr-3">
                            <p class="a-text-regular-blacktwo py-2 px-3 mb-0">PROGRAMACIÓN</p>
                        </div>

                    </div>


                    <div class="navbar-progra-item navbar-progra-item-border navbar-sinopsis pointer-none" navbar-index="2"
                        rel="navbar-prev-sinopsis" >
                        <div class="navbar-progra-item-container ml-3 mr-3">
                            <p class=" a-text-bold-light py-2 px-3 mb-0">SINÓPSIS</p>
                        </div>
                    </div>

<!--inicio de claro canal-->

                    <div class="navbar-progra-item navbar-progra-item-border navbar-canal-claro pointer-none"
                        navbar-index="3" rel="navbar-prev-canal-claro" >
                        <div class="navbar-progra-item-container ml-3 mr-3">
                            <p class="py-2 px-3 mb-0  a-text-bold-light">CANAL CLARO</p>

                        </div>
                    </div>
<!--fin de claro canal-->

                    <div class="navbar-progra-item navbar-prev-home navbar-home pointer-none" navbar-index="4"
                        rel="navbar-prev-home" >
                        <div class="navbar-progra-item-container ml-3 mr-3">
                            <p class=" a-text-bold-light py-2 px-3 mb-0">HOME</p>
                        </div>

                    </div>

                    <img src="./images/arrow-gray.svg" alt="flecha" class="arrow-progra arrow-progra-right">
                    <!--<span class="p-3 arrow arrow-right">><span>-->
                </div>

            </nav>

            <div class="d-flex float-right mb-4 pb-2 mr-5">
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
            <div class="float-left ml-5 mb-4 ">
            <div class="d-flex  ">
                    <button class="btn-apro  text-grilla mr-3 gril-claro" id="btn-grilla"><span>Aprobar cambios</span></button>
                    <button class="btn-recha  text-grilla lan-claro" id="btn-landing" ><span>Rechazar cambios</span></button>
                </div>
               <!-- <div>
                    <label class=" d-inline-block mr-4 pl-4 mb-5 mt-3 checksquare" style="vertical-align: middle;">
                        <input type="checkbox" id="viewcarga">
                        <span class="checkmark1 border-green"></span>
                    </label><span class=" ml-2 a-text-green mr-4">Guardar cambios</span>
                    <label class=" d-inline-block mr-4 pl-4 mb-5 mt-3 checksquare" style="vertical-align: middle;">
                        <input type="checkbox">
                        <span class="checkmark2  border-red"></span>
                    </label><span class=" ml-2 a-text-red">No guardar cambios</span>
                </div>-->
            </div>
            <div class="clearfix"></div>
            <div class=" mr-5 d-flex float-right mb-5">
                <div class="btn-zona zona"><span class="mr-3">Zona horaria</span> <img
                        src={{ asset('images/gmt-icon.svg') }} class="Icon_paises1" width="32px"/></div>
            </div>
            <div class="clearfix"></div>
               <!--colocacion de ifram de programacion-->
            <div class="centro ">
                <div class="navbar-progra-content mb-5 navbar-prev-programacion" id="navbar-prev-programacion">
                </div>
            </div>

            <!--colocacion de iframde sinopsis-->
            <div class="navbar-progra-content navbar-sinopsis" id="navbar-prev-sinopsis">
                <div id="prev-sinopsis">
                </div>
                <div class="clearfix"></div>
                <div class="mx-auto shadow mt-5  mb-5 content-table">
                    <div class="contenedor-fila">
                        <div class="contenedor-columna centro program titletable">
                            <span class="a-text-white-regular a-text-prev">Programa</span>
                        </div>
                        <div class="contenedor-columna centro channel titletable">
                            <span class="a-text-white-regular a-text-prev">Canal</span>
                        </div>
                        <div class="contenedor-columna centro channel titletable">
                            <span class="a-text-white-regular a-text-prev">Acciones</span>
                        </div>
                        <div class="contenedor-columna centro channel  titletable">
                            <span class="a-text-white-regular a-text-prev">Revisión</span>
                        </div>
                    </div>
                    <div class="contenedor-fila">
                        <div class="contenedor-columna">
                            <span class="a-text-medium-black text-normal pd-5">Mad Men</span>
                        </div>
                        <div class="contenedor-columna centro">
                            <span class="a-text-medium-black text-normal ">Canal Claro</span>
                        </div>
                        <div class="contenedor-columna centro">
                            <input type="image" src="./images/lapiz-acti.svg" alt="" class=" btn-focus edi"
                                onClick="watchsinopsis()">
                        </div>
                        <div class="contenedor-columna centro ">
                            <label class=" d-inline-block mr-4 pl-4 mb-5 mt-3 checksquare">
                                <input type="checkbox">
                                <span class="checkmark1"></span>
                            </label>
                        </div>
                    </div>
                    <div class="contenedor-fila">
                        <div class="contenedor-columna">
                            <span class="a-text-medium-black text-normal pd-5">Mad Men</span>
                        </div>
                        <div class="contenedor-columna centro">
                            <span class="a-text-medium-black  text-normal ">Canal Claro</span>
                        </div>
                        <div class="contenedor-columna centro">
                            <input type="image" src="./images/lapiz-acti.svg" alt="" class=" btn-focus edi ">
                        </div>
                        <div class="contenedor-columna centro ">
                            <label class=" d-inline-block mr-4 pl-4 mb-5 mt-3 checksquare">
                                <input type="checkbox">
                                <span class="checkmark1"></span>
                            </label>
                        </div>
                    </div>
                    <div class="contenedor-fila">
                        <div class="contenedor-columna">
                            <span class="a-text-medium-black text-normal pd-5">Mad Men</span>
                        </div>
                        <div class="contenedor-columna centro ">
                            <span class="a-text-medium-black text-normal ">Canal Claro</span>
                        </div>
                        <div class="contenedor-columna centro ">
                            <input type="image" src="./images/lapiz-acti.svg" alt="" class=" btn-focus edi">
                        </div>
                        <div class="contenedor-columna centro">
                            <label class=" d-inline-block mr-4 pl-4 mb-5 mt-3 checksquare">
                                <input type="checkbox">
                                <span class="checkmark1"></span>
                            </label>
                        </div>
                    </div>
                    <div class="contenedor-fila">
                        <div class="contenedor-columna">
                            <span class="a-text-medium-black text-normal pd-5">Mad Men</span>
                        </div>
                        <div class="contenedor-columna centro ">
                            <span class="a-text-medium-black text-normal ">Canal Claro</span>
                        </div>
                        <div class="contenedor-columna centro">
                            <input type="image" src="./images/lapiz-acti.svg" alt="" class=" btn-focus edi">
                        </div>
                        <div class="contenedor-columna centro">
                            <label class=" d-inline-block mr-4 pl-4 mb-5 mt-3 checksquare">
                                <input type="checkbox">
                                <span class="checkmark1"></span>
                            </label>
                        </div>
                    </div>
                    <div class="contenedor-fila">
                        <div class="contenedor-columna">
                            <span class="a-text-medium-black text-normal pd-5">Mad Men</span>
                        </div>
                        <div class="contenedor-columna centro ">
                            <span class="a-text-medium-black text-normal ">Canal Claro</span>
                        </div>
                        <div class="contenedor-columna centro">
                            <input type="image" src="./images/lapiz-acti.svg" alt="" class=" btn-focus edi">
                        </div>
                        <div class="contenedor-columna centro">
                            <label class=" d-inline-block mr-4 pl-4 mb-5 mt-3 checksquare">
                                <input type="checkbox">
                                <span class="checkmark1"></span>
                            </label>
                        </div>
                    </div>
                </div>

            </div>
            <!--iframe de canal claro-->
            <div class="centro">
                <div class="navbar-progra-content navbar-prev-canal-claro mb-5" id="navbar-prev-canal-claro">
                </div>
            </div>
            <!--iframe de home-->
            <div class="centro ">
                <div class="navbar-progra-content mb-5" id="navbar-prev-home">
                </div>
            </div>
        </div>
    </main>
    <div class="modal show modal-delete-user" id="savesino" role="dialog">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content align-item-center centro  modal-save">
                <div class="modal-body ">
                    <img src="./images/bien.svg" alt="aprovado" class="m-3">
                    <h3 class="h3 a-text-medium-brownish mt-3 mb-3">Fueron guardados los cambios en la sinópsis de:</h3>
                    <div class="d-flex justify-content-center mb-5">
                        <label for="" class="h3 a-text-bold-brownish">Mad Men</label>
                    </div>
                    <div class="d-flex justify-content-center mb-5">
                        <button type="button" class="a-btn-border-teal  a-btn-general-modal text-no  mr-5 btn-focus"
                            id="back-list" data-dismiss="modal">VOLVER AL LISTADO</button>

                        <button type="button" class="a-btn-teal  a-btn-general-modal text-si  btn-focus"
                            id="modal-button" data-dismiss="modal">SIGUIENTE SINÓPSIS</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade modal-edit-icons pr-0" id="savesino" role="dialog" tabindex="-1">
        <div class="modal-dialog modal-lg modal-dialog-centered m-0"  >
            <div class="modal-content align-item-center centro " style="width: 100%" >
                <div class="modal-body ">
                    <h2 class="h2 text-center a-text-black-brown-two mt-2 ">MENÚ DE CANALES</h2>
                    <hr class="d-flex align-content-center separationhr mb-4 col-12">
                    <!--div padre-->
                    <div class="d-flex justify-content-around col-11 mb-5 mt-5">
                        <!--Div primer logo-->
                        <div class="d-flex justify-content-center mt-5">
                            <!--pagination-->
                            <div class=" d-flex programming-dots ">
                                <p class=' a-text-bold-white slider-pagination slider-pagination-active '>1</p>
                            </div>
                            <div class="centro position-relative logo-lading-container mb-3" >
                                <div class="bor mx-auto position-relative thumbnail-image-program"
                                    id="thumbnail-home-horizontal">
                                    <input type="file" name="image-icon1" id="image-icon1"
                                        class="input-image-program logo-landing d-none">
                                    <label for="image-icon1"
                                        class="mb-0 cursor-pointer d-flex justify-content-center align-items-center h-100 flex-column">
                                        <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                                            class="add-photo" />
                                        <span class="a-text-bold-warm text-plus p-2 pr-3 pl-3  white-shadow">472px X
                                            295px</span>
                                        <img src="{{ asset('/images/synopsis/image-synopsis-horizontal.png') }}"
                                            class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                                    </label>
                                </div>

                                <!--Div de los url-->
                                <div class="mt-5 d-flex justify-content-center">
                                    <img src="{{ asset('/images/basic-icons/link.svg') }}" alt="logo-link" class="mr-3">
                                    <input type="text" name="links" id="link-logo-canal-claro"
                                        class="urls a-text-bold-warm text-normal" placeholder=" Enlace o URL">

                                </div>

                            </div>
                        </div>
                        <div class="d-flex justify-content-center mt-5">
                            <!--pagination-->
                            <div class=" d-flex programming-dots ">
                                <p class='a-text-bold-teal slider-pagination pag'>2</p>
                            </div>
                            <!--cargar imagenes-->
                            <div class="centro position-relative mb-3 logo-lading-container">
                                <div class="bor mx-auto position-relative thumbnail-image-program"
                                    id="thumbnail-home-horizontal">
                                    <input type="file" name="image-icon2" id="image-icon2"
                                        class="input-image-program logo-landing d-none">
                                    <label for="image-icon2"
                                        class="mb-0 cursor-pointer d-flex justify-content-center align-items-center h-100 flex-column">
                                        <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                                            class="add-photo" />
                                        <span class="a-text-bold-warm text-plus  p-2 pr-3 pl-3  white-shadow">472px X
                                            295px</span>
                                        <img src="{{ asset('/images/synopsis/image-synopsis-horizontal.png') }}"
                                            class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                                    </label>
                                </div>
                                <!--div urls-->
                                <div class="mt-5 d-flex justify-content-center">
                                    <img src="{{ asset('/images/basic-icons/link.svg') }}" alt="logo-link" class="mr-3">
                                    <input type="text" name="links" id="link-logo-concert-channel"
                                        class="urls a-text-bold-warm text-normal" placeholder=" Enlace o URL">

                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center mt-5">
                            <!--pagination-->
                            <div class=" programming-dots ">
                                <p class='a-text-bold-teal slider-pagination '>3 </p>
                            </div>
                            <!--cargar imagenes-->
                            <div class="centro position-relative mb-3 logo-lading-container">
                                <div class="bor mx-auto position-relative thumbnail-image-program"
                                    id="thumbnail-home-horizontal">
                                    <input type="file" name="image-icon3" id="image-icon3"
                                        class="input-image-program logo-landing d-none">
                                    <label for="image-icon3"
                                        class="mb-0 cursor-pointer d-flex justify-content-center align-items-center h-100 flex-column">
                                        <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                                            class="add-photo" />
                                        <span class="a-text-bold-warm text-plus  white-shadow  p-2 pr-3 pl-3  ">472px X
                                            295px</span>
                                        <img src="{{ asset('/images/synopsis/image-synopsis-horizontal.png') }}"
                                            class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                                    </label>
                                </div>
                                <!--div urls-->
                                <div class="mt-5 d-flex justify-content-center">
                                    <img src="{{ asset('/images/basic-icons/link.svg') }}" alt="logo-link" class="mr-3">
                                    <input type="text" name="links" id="link-logo-claro-cinema"
                                        class="urls a-text-bold-warm text-normal" placeholder=" Enlace o URL">
                                </div>
                            </div>
                        </div>

                    </div>
                    <!--div botones-->
                    <div class="text-center  mb-4 d-flex justify-content-center pb-2">
                        <button
                            class="d-flex m-0  mr-3 text-uppercase btn-grilla a-btn-basic-small btn-grilla a-btn-basic-small text-uppercase a-text-MBlack text-plus" id="edit-logos-button">ACEPTAR</button>
                            <a href="#delete-info" role="button" class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal" data-toggle="modal">CANCELAR</a>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal pr-0 fade modal-edit-program" id="modaledi" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle"
        aria-hidden="true" style="overflow: auto;">
        <div class="modal-dialog modal-dialog-centered m-0" role="document" style="max-width: 100%">
            <div class="modal-content">
                <div class="modal-body pt-0">
                    <h2 class="h2 text-center a-text-black-brown-two pt-3">PROGRAMACIÓN PRINCIPAL - CARRUSEL 1</h2>
                    <hr class="d-flex align-content-center separationhr col-11 mt-3 mb-0">

                    <div class="col-11 mx-auto">
                        <!--Estado y alertas del programa-->
                        <section class="mt-4 d-flex justify-content-between">
                            <div class="col-5">
                                <h3 class="h3 a-text-semibold-warmgrey text-uppercase mb-4">Estado</h3>
                                <div class="state-container py-2 d-flex align-items-center justify-content-center">
                                    <img src="{{ asset('/images/basic-icons/pencil-edit-teal.svg') }}" alt="">
                                    <p class="mb-0 ml-3 a-text-bold-teal">En edición</p>
                                </div>
                            </div>
                            <div class="col-5">
                                <h3 class="h3 a-text-semibold-warmgrey text-uppercase mb-4">Alerta</h3>
                                <div class="py-2 alert-container d-flex align-items-center justify-content-center">
                                    <img src="
                                                                                                                                              {{ asset('/images/basic-icons/warning-orange-icon.svg') }}"
                                        alt="">
                                    <p class="mb-0 ml-3 a-text-bold-orange">Proporcionar información</p>
                                </div>
                            </div>

                        </section>
                        <!--Slider de calendario-->
                        <section class="col-8 mx-auto">
                            <h3 class="h3 a-text-semibold-brownish-grey-three text-uppercase mb-5 mt-6"
                                id="slider-calendar-current-date">Octubre 2020</h3>
                            <div class="mb-5 calendar-slider">
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
                        <!--Termómetro para elegir los horarios-->
                        <section class="thermometer mb-4">
                            <div class="thermometer-hours-container mt-4">
                                <ul class="thermometer-hours-list d-flex pr-3 pl-3">
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        1
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        2
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        3
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        4
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        5
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        6
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        7
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        8
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        9
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        10
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        11
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        12
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        13
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        14
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        15
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        16
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        17
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        18
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        19
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        20
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        21
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        22
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        23
                                    </li>
                                </ul>
                            </div>
                            <div class="position-relative mt-4">
                                <img src="{{ asset('/images/arrow-dark.svg') }}"
                                    class="arrow-thermometer arrow-thermometer-left" alt="arrow-left">
                                <div class="thermometer-container">
                                    <ul class="thermometer-schedule-list d-flex p-3">
                                        <li class="thermometer-schedule-item mr-1 d-flex align-items-center">
                                            <div class="w-50 h-100"></div>
                                            <div class="w-50 h-100"></div>
                                        </li>
                                        <li class="thermometer-schedule-item mr-1"></li>
                                        <li class="thermometer-schedule-item mr-1"></li>
                                        <li class="thermometer-schedule-item mr-1"></li>
                                        <li class="thermometer-schedule-item mr-1"></li>
                                        <li class="thermometer-schedule-item mr-1"></li>
                                        <li class="thermometer-schedule-item mr-1"></li>
                                        <li class="thermometer-schedule-item mr-1"></li>
                                        <li class="thermometer-schedule-item mr-1"></li>
                                        <li class="thermometer-schedule-item mr-1"></li>
                                        <li class="thermometer-schedule-item mr-1"></li>
                                        <li class="thermometer-schedule-item mr-1"></li>
                                        <li class="thermometer-schedule-item mr-1"></li>
                                        <li class="thermometer-schedule-item mr-1"></li>
                                        <li class="thermometer-schedule-item mr-1"></li>
                                        <li class="thermometer-schedule-item mr-1"></li>
                                        <li class="thermometer-schedule-item mr-1"></li>
                                        <li class="thermometer-schedule-item mr-1"></li>
                                        <li class="thermometer-schedule-item mr-1"></li>
                                        <li class="thermometer-schedule-item mr-1"></li>
                                        <li class="thermometer-schedule-item mr-1"></li>
                                        <li class="thermometer-schedule-item mr-1"></li>
                                        <li class="thermometer-schedule-item"></li>
                                    </ul>
                                </div>
                                <img src="{{ asset('/images/arrow-dark.svg') }}"
                                    class="arrow-thermometer arrow-thermometer-right" alt="arrow-right">
                            </div>
                        </section>
                        <div class="thermometer-notation mt-4 mb-7">
                            <ul class="p-0 thermometer-notation-list d-flex">
                                <li
                                    class="d-flex mr-5 thermometer-notation-item thermometer-notation-blue a-text-semi-brown-two">
                                    Horario de programación actual
                                <li>
                                <li
                                    class="d-flex mr-5 thermometer-notation-item thermometer-notation-orange a-text-semi-brown-two">
                                    Horario ocupado
                                <li>
                                <li
                                    class="d-flex mr-5 thermometer-notation-item thermometer-notation-gray a-text-semi-brown-two">
                                    Horario disponible
                                <li>
                            </ul>
                        </div>
                        <!--Imagen de programa en slider-->
                        <section class="edit-program-image">
                            <select
                                class="thumbnail-header1 thumbnail-header w-100 a-text-MBlack h2 d-flex align-items-center justify-content-between position-relative programs-catalogue"
                                title="TÍTULO DEL PROGRAMA" id="prog_titulo_programa" data-live-search="true" data-live-search-placeholder="Agregar título de nuevo programa" name="thumbnail-header1" key="title">
                            </select>

                            <img src="{{ asset('/images/triangle.svg') }}" alt="" class="position-absolute dropimg">
                            <!--Imagen del programa--->
                            <input type="file" name="image-horizontal" id="imageThumb-horizontal" class="input-image-program d-none">
                            <div class="edit-thumbnail position-relative">
                                <img src="{{ asset('/images/heart-icon.svg') }}" class="thumbnail-heart-icon"
                                    alt="camera" />
                                <div class="edit-program-camera">
                                    <img src="{{ asset('/images/synopsis/camara.svg') }}" class="" alt="camera" />
                                    <p class="p-2 mb-0 text-center size-thumbnail-text text-plus a-text-bold-brown-two">
                                        472
                                        x 245px</p>
                                </div>

                                <img src="{{ asset('/images/synopsis/image-synopsis-carrusel.jpg') }}" alt=""
                                    class="thumbnail-image-prev edit-image-program" />
                            </div>
                            <!--Nombre de la imagen-->
                            <p class="a-text-bold-brown-two text-plus mt-4 mb-5">NombreDeLaImagen</p>
                        </section>
                        <!--Establecer en landing, home, schedule item date time-->
                        <section class="mb-5">
                            <div class="row">
                                <!--Landing-->
                                <div class="col-4 edit-program-data-container edit-data-container-large">
                                    <div class="edit-data-container h-100">
                                        <p class="mb-3 text-plus text-plus text-uppercase a-text-bold-coolgray">
                                            Establecer
                                            en landing
                                        </p>
                                        <!--Switch-->
                                        <div class="d-flex align-items-center mb-3">
                                            <input type="radio" name="sino-landing" id="yes-landing" value="1"
                                                class="edit-switch-landing edit-landing-yes" key="in_landing" />
                                            <label for="yes-landing" id="siestado-landing"
                                                class="mb-0 si-estilo cursor-pointer switch-label">
                                                Sí</label>
                                            <input type="radio" name="sino-landing" id="no-landing" value="0"
                                                class="edit-switch-landing switch-table edit-landing-no" key="in_landing"/>
                                            <label for="no-landing" id="noestado-landing"
                                                class="mb-0 no-estilo cursor-pointer switch-label">
                                                No</label>
                                        </div>
                                        <!--Inputs radio-->
                                        <div class="d-flex align-items-center mb-3">
                                            <label class="checkradio d-flex ml-2 mb-0" for="landing-section-2">
                                                <input type="radio" checked name="dontlose" class="switch-table edit-carrusel-1"
                                                    value="2" id="landing-section-2" key="in_landing" />
                                                <span class="checkmark"></span>
                                            </label>
                                            <span class="a-text-bold-silver cursor-pointer ml-2 text-uppercase">Carrusel
                                                1</span>
                                            <label class="checkradio d-flex ml-2 mb-0" for="landing-section-2-">
                                                <input type="radio" checked name="dontlose" class="mb-0 switch-table edit-carrusel-2"
                                                    value="2" id="landing-section-2" key="in_landing"/>
                                                <span class="checkmark"></span>
                                            </label>
                                            <span class="cursor-pointer a-text-bold-silver ml-2 text-uppercase">Carrusel
                                                2</span>
                                        </div>
                                        <div>
                                            <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Fecha</p>
                                            <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                <span class="a-text-bold-warm">Inicio: <input type="text"
                                                        class="input-basic edit-program-input a-text-bold-warm edit-program-attribute-text schedule-date-input edit-landing-date-begin"
                                                        placeholder="00-00-0000" key="in_landing_begin" /></span>
                                            </div>
                                            <div class="mb-4 text-center edit-rectangle-small-container py-3">
                                                <span class="a-text-bold-warm">Fin: <input type="text"
                                                        class="input-basic edit-program-input a-text-bold-warm edit-program-attribute-text schedule-date-input edit-landing-date-end" key="in_landing_expiration"
                                                        placeholder="00-00-0000"></span>
                                            </div>
                                        </div>
                                        <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                                        <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                            <span class="a-text-bold-warm">Inicio: <input type="text"
                                                    class="time-seconds-input input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase edit-landing-time-begin" key="in_landing_begin"
                                                    placeholder="00:00:00"></span>
                                        </div>
                                        <div class="text-center edit-rectangle-small-container py-3">
                                            <span class="a-text-bold-warm">Fin: <input type="text"
                                                    class="time-seconds-input input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase edit-landing-time-end" key="in_landing_expiration"
                                                    placeholder="00:00:00"></span>
                                        </div>
                                    </div>
                                </div>
                                <!--Home-->
                                <div class="col-4 edit-program-data-container edit-data-container-large">
                                    <div class="edit-data-container h-100">
                                        <p class="mb-3 text-plus text-plus text-uppercase a-text-bold-coolgray">
                                            Establecer
                                            en home
                                        </p>
                                        <!--Switch-->
                                        <div class="d-flex align-items-center edit-switches-home-container">
                                            <input type="radio" name="sino-home" id="edit-in-home-yes" value="1"
                                                class="edit-switch-home edit-program-switch edit-in-home-yes" key="in_home"/>
                                            <label for="edit-in-home-yes" id="siestado-landing"
                                                class="si-estilo cursor-pointer mb-0 switch-label">
                                                Sí</label>
                                            <input type="radio" name="sino-home" id="edit-in-home-no" value="0" checked
                                                class="edit-switch-home edit-program-switch edit-in-home-no" key="in_home"/>
                                            <label for="edit-in-home-no" id="noestado-landing"
                                                class="mb-0 no-estilo cursor-pointer switch-label">
                                                No</label>
                                        </div>
                                        <div>
                                            <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Fecha</p>
                                            <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                <span class="a-text-bold-warm">Inicio: <input key="in_home_begin" type="text"
                                                        class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-home-date-begin edit-program-attribute-text"
                                                        placeholder="00-00-0000" /></span>
                                            </div>
                                            <div class="mb-4 text-center edit-rectangle-small-container py-3">
                                                <span class="a-text-bold-warm">Fin:
                                                    <input type="text" key="in_home_expiration"
                                                        class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-home-date-end edit-program-attribute-text"
                                                        placeholder="00-00-0000"></span>
                                            </div>
                                        </div>
                                        <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                                        <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                            <span class="a-text-bold-warm">Inicio: <input key="in_home_begin" type="text"
                                                    class="time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase edit-home-time-begin"
                                                    placeholder="00:00:00"></span>
                                        </div>
                                        <div class="text-center edit-rectangle-small-container py-3">
                                            <span class="a-text-bold-warm">Fin: <input type="text"
                                                    class="time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase edit-home-time-end"
                                                    placeholder="00:00:00"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4 edit-program-data-container edit-data-container-large">
                                    <div class="edit-data-container h-100">
                                        <p
                                            class="edit-date-time-title text-plus text-plus text-uppercase a-text-bold-coolgray">
                                            Schedule Item Date time
                                        </p>
                                        <div>
                                            <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Fecha</p>
                                            <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                <span class="a-text-bold-warm">
                                                    <img src="{{ asset('images/calendario.svg') }}" alt="" class="mr-3">
                                                    <input key="" type=" text"
                                                        class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date"
                                                        placeholder="00-00-0000"></span>
                                            </div>
                                        </div>
                                        <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                                        <div class="text-center edit-rectangle-small-container py-3">
                                            <span class="a-text-bold-warm"><img src="{{ asset('images/reloj.svg') }}"
                                                    alt="" class="mr-3"><input type="text"
                                                    class="time-seconds-input input-basic edit-program-input a-text-bold-warm edit-schedule-item-time text-uppercase"
                                                    placeholder="00:00:00"></span>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </section>
                        <!--Sinopsis-->
                        <section class="mb-5 edit-program-data-container">
                            <h3 class="h3 text-uppercase a-text-bold-brown-two mb-3">Sinopsis</h3>
                            <!--Textarea-->
                            <textarea key="synopsis" class="edit-program-textarea edit-program-attribute-text a-text-semibold-warmgrey p-3" id="prog_sinopsis"></textarea>
                        </section>
                        <section class="mb-3">
                            <div class="row">
                                <!--Program episode season-->
                                <div class="col-4 edit-program-data-container">
                                    <div class="edit-data-container">
                                        <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program episode
                                            season
                                        </p>
                                        <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                            <input type="text" key="season"
                                                class="edit-program-season text-center input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase"
                                                placeholder="00">
                                        </div>
                                    </div>
                                </div>
                                <!--Program episode number-->
                                <div class="col-4 edit-program-data-container">
                                    <div class="edit-data-container">
                                        <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program episode
                                            number
                                        </p>
                                        <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                            <input type="text" key="program_episode_number"
                                                class="text-center edit-episode-number input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase"
                                                placeholder="000">
                                        </div>
                                    </div>
                                </div>
                                <!--Program year produced-->
                                <div class="col-4 edit-program-data-container">
                                    <div class="edit-data-container">
                                        <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program year
                                            produced
                                        </p>
                                        <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                            <input type="text" key="program_year_produced"
                                                class="year-input text-center edit-year-produced input-basic edit-program-attribute-text edit-program-input a-text-bold-warm text-uppercase"
                                                placeholder="YYYY">
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </section>
                        <section class="mb-3">
                            <div class="row">
                                <!--Program title alternate-->
                                <div class="col-4 edit-program-data-container">
                                    <div class="edit-data-container">
                                        <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program title
                                            alternate
                                        </p>
                                        <div class="mb-3 edit-rectangle-container p-3">
                                            <input type="text" key="subtitle"
                                                class="w-100 edit-program-subtitle input-basic edit-program-input edit-program-attribute-text a-text-bold-warm"
                                                placeholder="Program Title Alternate">
                                        </div>
                                    </div>
                                </div>
                                <!--Program genre list-->
                                <div class="col-4 edit-program-data-container" id="edit-genre-container">
                                    <div class="edit-data-container">
                                        <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program genre
                                            list
                                        </p>
                                        <div class="mb-3 edit-rectangle-container ">
                                            <select
                                                class="list1 mb-0 a-text-regular-brownishtwo text-normal show-tick" id="edit-program-genres"
                                                title="Genere list" multiple data-live-search="true"
                                                data-live-search-placeholder="Buscar" data-header="Program List"
                                                data-dropup-auto="false" key="genre">
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <!---->
                                <div class="col-4 edit-program-data-container">
                                    <div class="edit-data-container">
                                        <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule item
                                            rating
                                            code
                                        </p>
                                        <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                            <input type="text" key="rating"
                                                class="text-center edit-program-attribute-text input-basic edit-program-input a-text-bold-warm text-uppercase edit-rating-code"
                                                placeholder="PG-00">
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </section>
                        <section class="mb-3">
                            <div class="row">
                                <!--Schedule item log date-->
                                <div class="col-4 edit-program-data-container">
                                    <div class="edit-data-container">
                                        <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule item log
                                            date
                                        </p>
                                        <p class="a-text-medium-brown-two text-plus text-uppercase">Fecha</p>
                                        <div
                                            class="mb-3 text-center edit-rectangle-small-container py-3 d-flex align-items-center justify-content-center">
                                            <img src="{{ asset('images/calendario.svg') }}" alt="" class="mr-3">
                                            <input type="text" key="day"
                                                class="edit-schedule-date edit-program-attribute-text schedule-date-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                                placeholder="DD:MM:YY">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4 edit-program-data-container">
                                    <div class="edit-data-container">
                                        <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule item log
                                            time (gmt)
                                        </p>
                                        <p class="a-text-medium-brown-two text-plus text-uppercase">HORA</p>
                                        <div
                                            class="mb-3 text-center edit-rectangle-small-container py-3 d-flex align-items-center justify-content-center">
                                            <img src="{{ asset('images/reloj.svg') }}" alt="" class="mr-3">
                                            <input type="text" key="programing"
                                                class="edit-schedule-item-time edit-program-attribute-text time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                                placeholder="00:00:00">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4 edit-program-data-container">
                                    <div class="edit-data-container">
                                        <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">estimated schedule item duration
                                        </p>
                                        <p class="a-text-medium-brown-two text-plus text-uppercase">HORA</p>
                                        <div
                                            class="mb-3 text-center edit-rectangle-small-container py-3 d-flex align-items-center justify-content-center">
                                            <img src="{{ asset('images/reloj.svg') }}" alt="" class="mr-3">
                                            <input type="text" key="duration"
                                                class="edit-program-duration edit-program-attribute-text time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                                placeholder="00:00:00">
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </section>
                        <section class="mb-5">
                            <div class="row">
                                <!--Schedule item log date-->
                                <div class="col-4 edit-program-data-container">
                                    <div class="edit-data-container d-flex justify-content-between">
                                        <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule version
                                            subbed
                                        </p>
                                        <div class="d-flex">
                                            <input type="radio" name="subbed" id="yes-subbed" value="1"
                                                class="edit-program-switch switch-landing edit-subbed-yes" key="subbed"/>
                                            <label for="yes-subbed" id="siestado-landing"
                                                class="si-estilo cursor-pointer mb-0 switch-label">
                                                Sí</label>
                                            <input type="radio" name="subbed" id="no-dubbed" value="0" checked
                                                class="edit-program-switch switch-landing switch-table edit-subbed-no" key="subbed"/>
                                            <label for="no-dubbed" id="noestado-landing"
                                                class="mb-0 no-estilo cursor-pointer switch-label">
                                                No</label>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-4 edit-program-data-container">
                                    <div class="edit-data-container d-flex justify-content-between">
                                        <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule version
                                            dubbed
                                        </p>
                                        <div class="d-flex">
                                            <input type="radio" name="dubbed" id="yes-dubbed" value="1"
                                                class="edit-program-switch switch-landing edit-dubbed-yes" key="dubbed"/>
                                            <label for="yes-dubbed" id="siestado-landing"
                                                class="si-estilo cursor-pointer mb-0 switch-label">
                                                Sí</label>
                                            <input type="radio" name="dubbed" id="no-dubbed" value="0" checked
                                                class="edit-program-switch switch-landing switch-table edit-dubbed-no" key="dubbed"/>
                                            <label for="no-dubbed" id="noestado-landing"
                                                class="mb-0 no-estilo cursor-pointer switch-label">
                                                No</label>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-4 edit-program-data-container">
                                    <div class="edit-data-container d-flex justify-content-between">
                                        <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Audio 5.1<br>
                                            available
                                        </p>
                                        <div class="d-flex">
                                            <input type="radio" name="audio5" id="yes-audio5" value="1"
                                                class="edit-program-switch switch-landing edit-audio5-yes" key="audio5"/>
                                            <label for="yes-audio5" id="siestado-landing"
                                                class="si-estilo cursor-pointer mb-0 switch-label">
                                                Sí</label>
                                            <input type="radio" name="audio5" id="no-audio5" value="0" checked
                                                class="edit-program-switch switch-landing switch-table edit-audio5-no" key="audio5"/>
                                            <label for="no-audio5" id="noestado-landing"
                                                class="mb-0 no-estilo cursor-pointer switch-label">
                                                No</label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class=" d-flex justify-content-center">
                    <section class="text-center mb-3 d-flex justify-content-center">
                        <button
                            class="d-flex  mr-3  m-0 text-uppercase btn-grilla a-btn-basic-small btn-grilla a-btn-basic-small text-uppercase a-text-MBlack text-plus"
                            data-dismiss="modal">ACEPTAR</button>
                    </section>

                </div>
                </div>

            </div>
        </div>
    </div>
    <div class="modal modal-programming-carousel pr-0" id="modaledi" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" style="padding: 0px !important" >
        <div class="modal-dialog modal-dialog-centered m-0" role="document" style="max-width: 100%;">
          <div class="modal-content" >
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
                      <input type="text" id="programming-carrusel-calendar" class="d-none">
                      <label for="programming-carrusel-calendar"
                          class="ml-4 mb-0 date-button date-start-table d-flex align-items-center pl-3 pr-3"
                          id="date-start-table">
                          <img src="./images/calendario.svg" alt="">
                          <div class="ml-3">
                              <p class="text-small d-block mb-0 a-text-semibold-warmgrey">Inicio</p>
                              <p class="text-normal mb-0 a-text-bold-charcoal" id="start-date-text">DD-MM-YYYY</p>
                          </div>
                      </label>

                      <!--Fecha de fin de calendario-->
                      <label for="programming-carrusel-calendar"
                          class="mb-0 ml-4 date-button date-end-table d-flex align-items-center pl-3 pr-3">
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
                  <!--Slide-->
                  <div class="bor thumbnail-image-program position-relative h-100">
                      <input type="file" name="image_programming[]" id="image_programming_1" class="input-image-program d-none image_programming" data-index="1">
                      <label for="image_programming_1"
                          class="h-100 mb-0 d-flex justify-content-center align-items-center flex-column">
                          <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                              class=" cursor-pointer add-photo" />
                          <span class="a-text-bold-warm text-plus mt-3">1000px X 342px</span>
                          <img src="{{ asset('/images/synopsis/image-synopsis-carrusel.jpg') }}"
                              class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                      </label>
                  </div>
                  <!--Slide-->
                  <div class="bor thumbnail-image-program position-relative h-100">
                      <input type="file" name="image_programming[]" id="image_programming_2" class="input-image-program d-none image_programming" data-index="2">
                      <label for="image_programming_2"
                          class="h-100 mb-0 d-flex justify-content-center align-items-center flex-column">
                          <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                              class=" cursor-pointer add-photo" />
                          <span class="a-text-bold-warm text-plus mt-3">1000px X 342px</span>
                          <img src="{{ asset('/images/synopsis/image-synopsis-carrusel.jpg') }}"
                              class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                      </label>
                  </div>
                  <!--Slide-->
                  <div class="bor thumbnail-image-program position-relative h-100">
                      <input type="file" name="image_programming[]" id="image_programming_3" class="input-image-program d-none image_programming" data-index="3">
                      <label for="image_programming_3"
                          class="h-100 mb-0 d-flex justify-content-center align-items-center flex-column">
                          <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                              class=" cursor-pointer add-photo" />
                          <span class="a-text-bold-warm text-plus mt-3">1000px X 342px</span>
                          <img src="{{ asset('/images/synopsis/image-synopsis-carrusel.jpg') }}"
                              class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                      </label>
                  </div>
              </div>
              <!--End slider-->
              <!--Buttons-->
              <div class="text-center mb-3 d-flex justify-content-center">
                  <button
                      class="d-flex mr-3 text-uppercase  m-0 btn-grilla a-btn-basic-small btn-grilla a-btn-basic-small text-uppercase a-text-MBlack text-plus" id="image-programming-button" landin="canal claro">aceptar</button>
                      <a href="#delete-info" role="button" class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal" data-toggle="modal">CANCELAR</a>

                     <!-- <button
                      class="d-inline-block text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal" data-toggle="modal"   >cancelar</button>-->
              </div>

            </div>

          </div>
        </div>
      </div>

   <!--modal para perder lo hecho en los landing de edit-->
      <div class=" modal  delete-info" data-backdrop-limit="1" id="delete-info" tabindex="-1" role="dialog"  data-modal-parent="#modalbanner">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content  ">
          <div class="modal-body ">
          <img src="images/basic-icons/delete.svg" alt="advertencia de borrado" class="mx-auto d-flex mt-5 ">
            <p class="a-text-medium-warm-grey-three h3 mt-5 centro">Se perderá toda la información, NO PODRÁS
                recuperar la <span class="h3 a-text-bold-warm-grey-three"> información.</span></p>
          </div>

          <div class="text-center mb-5 mt-4 pt-3 pb-4">
            <button type="button" class="a-btn-basic-small a-btn-border-tomato mr-3 a-text-bold-tomato text-normal"data-dismiss="modal" data-dismiss="modal"data-dismiss="modal"id="close_modals" >ACEPTAR</button>

            <button type="button" class="a-btn-basic-small a-btn-tomato  a-text-MBlack  text-normal" data-dismiss="modal" data-dismiss="modal" aria-hidden="true">CANCELAR</button>
          </div>
        </div>
      </div>
    </div>

  </div>

    </body>
