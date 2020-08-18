<script src="{{ asset('/js/lib/easyXDM.min.js') }}"></script>

<script>
    new easyXDM.Socket({
        remote: "http://localhost:8888/MaquetaCNetworks/concert-channel-edi.php",
        container: "navbar-prev-concert-channel",
        onMessage: function(message, origin) {
            console.log(message);
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
            <!--Navbar para ir viendo previsualizaciones de landings-->
            <nav class="d-flex col-xl-11 navbar-expand-sm justify-content-center mb-5" id="option">
                <div class="navbar-progra d-flex align-items-center justify-content-center mt-5">
                    <img src="./images/arrow-gray.svg" alt="flecha" class="arrow-progra arrow-progra-left">

                    <div class="navbar-progra-item navbar-progra-item-border navbar-programacion navbar-progra-active navbar-prev-programacion"
                        navbar-index="1" rel="navbar-prev-programacion-concert">
                        <div class="navbar-progra-item-container ml-3 mr-3">
                            <p class="a-text-bold-two py-2 px-3 mb-0">PROGRAMACIÓN</p>
                        </div>
                    </div>

                    <div class="navbar-progra-item navbar-progra-item-border navbar-sinopsis pointer-none" navbar-index="2"
                        rel="navbar-prev-sinopsis">
                        <div class="navbar-progra-item-container ml-3 mr-3">
                            <p class=" a-text-bold-light py-2 px-3 mb-0">SINÓPSIS</p>
                        </div>
                    </div>
                    <div class="navbar-progra-item navbar-progra-item-border navbar-canal-claro
                        navbar-index="3" rel="navbar-prev-concert-channel">
                        <div class="navbar-progra-item-container ml-3 mr-3">
                            <p class="py-2 px-3 mb-0 a-text-bold-two">CONCERT CHANNEL</p>
                        </div>
                    </div>


                    <div class="navbar-progra-item navbar-prev-home navbar-home pointer-none" navbar-index="4"
                        rel="navbar-prev-home">
                        <div class="navbar-progra-item-container ml-3 mr-3">
                            <p class="  a-text-bold-light py-2 px-3 mb-0">HOME</p>
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
                        <input type="radio" name="sexo" id="edit" class="edi-concert" checked />
                        <label for="edit" id="editar" class="mujer-estilo d-flex align-items-center pl-4 pt-3">
                            <p class=" a-prev-title">EDITAR</p>
                        </label>
                        <input type="radio" name="sexo" id="prev" class="prev-concert"onload="preloader()" />
                        <label for="prev" id="previsualiza" class="hombre-estilo pl-2 pt-3">
                            <p class=" a-prev-title ">PREVISUALIZAR</p>
                        </label>
                    </div>
                </form>
                <!--Iconos para previsualizar en diferentes tamaños-->
                <div class="pt-2">
                    <img src="./images/mobile.svg" class="a-prev-image ml-3 mr-3" alt="mobile" id="prev-mobile">
                    <img src="./images/tablet.svg" class="a-prev-image" alt="tablet" id="prev-tablet">
                    <img src="./images/pc.svg" class="a-prev-image ml-3" alt="pc" id="prev-desktop">
                </div>
            </div>
            <!--Buttons-->
            <div class="float-left ml-5 mb-4 ">
            <div class="d-flex  ">
                    <button class="btn-apro  text-grilla mr-3 gril-claro" id="btn-grilla"><span>Aprobar cambios</span></button>
                    <button class="btn-recha  text-grilla lan-claro" id="btn-landing" ><span>Rechazar cambios</span></button>
                </div>
            </div>

            <!--Botón zona horaria-->
            <div class="clearfix"></div>
            <div class=" mr-5 d-flex float-right mb-5">
                <div class="btn-zona zona"><span class="mr-3">Zona horaria</span> <img
                        src={{ asset('images/gmt-icon.svg') }} class="Icon_paises1" /></div>
            </div>
            <div class="clearfix"></div>
            <!--iframe de programación-->
            <div class="centro ">
                <div class="load-view pointer-none" id="loader-view"></div>
                  <div class="navbar-progra-content mb-5 navbar-prev-programacion" onload='preloader()' id="navbar-prev-programacion-concert" style="display:none;">
                    </div>
                </div>
          <!--sinopsis-->
            <div class="navbar-progra-content navbar-sinopsis" id="navbar-prev-sinopsis">
                <div id="prev-sinopsis">
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
                                    onClick="watchsinopsis()" />
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
                                <input type="image" src="./images/lapiz-acti.svg" alt="" class=" btn-focus edi" />
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
                                <input type="image" src="./images/lapiz-acti.svg" alt="" class=" btn-focus edi"></input>
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
                                <input type="image" src="./images/lapiz-acti.svg" alt="" class=" btn-focus edi"></input>
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
                                <input type="image" src="./images/lapiz-acti.svg" alt="" class=" btn-focus edi"></input>
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
            </div>
            <!--iframe de concert-channel-->
            <div class="centro">
                <div class="navbar-progra-content navbar-prev-concert-channel mb-5" id="navbar-prev-concert-channel">
                </div>
            </div>

           <!--iframe de home-->
            <div class="centro ">
                <div class="navbar-progra-content mb-5" id="navbar-prev-home">
                </div>
            </div>
        </div>
    </main>
    <!--inicio de modales para edición-->

       <!--menu de logos-->
       <div class="modal  modal-edit-icons pr-0"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div class="modal-dialog modal-lg modal-dialog-centered m-0"role="document"  >
            <div class="modal-content align-item-center centro " style="width: 100%" >
                <div class="modal-body ">
                    <h2 class="h2 text-center a-text-black-brown-two mt-2 ">MENÚ DE CANALES</h2>
                    <hr class="d-flex align-content-center separationhr mb-4 col-12">
                    <!--div padre-->
                  <form >
                    <div class="d-flex justify-content-around col-11 mb-5 mt-5">
                        <!--Div primer logo-->
                        <div class="d-flex justify-content-center  slider-logo mt-5">
                            <!--pagination-->
                            <div class=" d-flex programming-dots ">
                                <p class=' a-text-bold-white slider-pagination slider-pagination-logo slider-pagination-active '>1</p>
                            </div>
                            <div class="centro position-relative logo-lading-container mb-3" >
                                <div class="bor mx-auto position-relative thumbnail-image-program"
                                    id="thumbnail-home-horizontal">
                                    <input type="file" name="image-icon1" id="image-icon1"
                                        class="input-image-program logo-landing d-none" >
                                    <label for="image-icon1"
                                        class="mb-0 cursor-pointer  d-flex justify-content-center align-items-center h-100 flex-column load-modales"  >
                                        <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                                        class="add-photo " style="z-index:10000"/>
                                        <span class="a-text-bold-warm text-plus p-2 pr-3 pl-3  white-shadow" style="z-index:10000">472px X
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
                        <div class="d-flex justify-content-center   slider-logo mt-5">
                            <!--pagination-->
                            <div class=" d-flex programming-dots ">
                                <p class='a-text-bold-teal slider-pagination slider-pagination-logo pag'>2</p>
                            </div>
                            <!--cargar imagenes-->
                            <div class="centro position-relative mb-3 logo-lading-container">
                                <div class="bor mx-auto position-relative thumbnail-image-program"
                                    id="thumbnail-home-horizontal">
                                    <input type="file" name="image-icon2" id="image-icon2"
                                        class="input-image-program logo-landing d-none" >
                                    <label for="image-icon2"
                                        class="mb-0 cursor-pointer d-flex justify-content-center align-items-center h-100 flex-column load-modales" >
                                        <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                                        class="add-photo " style="z-index:10000"/>
                                        <span class="a-text-bold-warm text-plus p-2 pr-3 pl-3  white-shadow" style="z-index:10000">472px X
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
                        <div class="d-flex justify-content-center slider-logo mt-5 ">
                            <!--pagination-->
                            <div class=" programming-dots ">
                                <p class='a-text-bold-teal slider-pagination slider-pagination-logo '>3 </p>
                            </div>
                            <!--cargar imagenes-->
                            <div class="centro position-relative mb-3 logo-lading-container">
                                <div class="bor mx-auto position-relative thumbnail-image-program"
                                    id="thumbnail-home-horizontal">
                                    <input type="file" name="image-icon3" id="image-icon3"
                                        class="input-image-program logo-landing d-none"  >
                                    <label for="image-icon3"
                                        class="mb-0 cursor-pointer d-flex justify-content-center align-items-center h-100 flex-column load-modales">
                                        <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                                        class="add-photo " style="z-index:10000"/>
                                        <span class="a-text-bold-warm text-plus p-2 pr-3 pl-3  white-shadow" style="z-index:10000">472px X
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
                            class="d-flex m-0  mr-3  btn-grilla a-btn-basic-small a-btn-basic-small text-uppercase a-text-MBlack text-plus edit-landing-modal-button" id="edit-logos-button" data-dismiss="modal">ACEPTAR</button>
                            <a href="#delete-info" role="button" class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel" data-toggle="modal">CANCELAR</a>

                    </div>
                    </form>
                </div>

            </div>
        </div>

    </div>
    @include('admin-site.landings.edit-program.edit-program', array('style' => 'thumbnail-header-concert', "modalButtonClass" => "modal-program-concert-channel"))
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

                      <input type="text" id="programming-carrusel-calendar " class="d-none">
                      <label for="programming-carrusel-calendar"
                          class="ml-4 mb-0 date-button date-start-table d-flex align-items-center  pl-3 pr-3"
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
                  <button
                      class="edit-landing-modal-button d-flex mr-3 text-uppercase  m-0 btn-grilla a-btn-basic-small btn-grilla a-btn-basic-small text-uppercase a-text-MBlack text-plus" id="image-programming-button" landin="canal claro">aceptar</button>
                      <a href="#delete-info" role="button" class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel" data-toggle="modal">CANCELAR</a>

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
