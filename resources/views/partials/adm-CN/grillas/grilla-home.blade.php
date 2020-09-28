
<div class="grilla-home">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-md-6 pl-0">
                <!-- ULTIMA EDICION -->
                <div class="ml-5">
                <div><span class="a-text-black-light text-plus">Última edición : <span class="zona date-edit" id="date-edit">
                            </span> </span></div>
                <span class="a-text-black-light text-plus">Editado por: <label class="zona"> {{ session('name') }} (<label
                            class="zona ">{{ session('rol_name') }}</label>)</label></span>
            </div>
            
               
            </div>
            <div class="col-12 col-md-6 pr-0">
                <!--Editar o previsualizar-->
                <div class="d-flex float-right mb-4 pb-2 mr-5">
                    <form action="" name="formilariosexo" id="formulariosexo" class="formulario">
                        <div class=" d-flex prev text-small a-text-medium-brownish location mt-2">
                            <input type="radio" name="sexo" id="edit-landing-concert" class="edi-concert" checked />
                            <label for="edit-landing-concert" id="edit-landing-concert" class="mujer-estilo d-flex align-items-center pl-4 pt-3">
                                <p class=" a-prev-title">EDITAR</p>
                            </label>
                            <input type="radio" name="sexo" id="prev-landing-concert" class="prev-concert" onload="preloader()" />
                            <label for="prev-landing-concert" id="previsualiza" class="hombre-estilo pl-2 pt-3">
                                <p class=" a-prev-title ">PREVISUALIZAR</p>
                            </label>
                        </div>
                    </form>
                    <!--Iconos para previsualizar en diferentes tamaños-->
                    <div class="pt-2">
                    <img src="./images/mobile.svg" class="a-prev-image ml-3 mr-3 op-inac" alt="mobile" id="prev-mobile">
                    <img src="./images/tablet.svg" class="a-prev-image op-inac" alt="tablet" id="prev-tablet">
                    <img src="./images/pc.svg" class="a-prev-image ml-3 op-ac" alt="pc" id="prev-desktop">
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 pl-0">
                <!--Buttons-->
                <div class="float-left ml-5 mb-4 ">
                    <div class="d-flex">
                    <button class="btn-apro a-text-MBlack text-normal mr-3 gril-claro" id="btn-grilla"><span>Aprobar
                            cambios</span></button>
                    <button class="btn-recha a-text-MBlack text-normal lan-claro" id="btn-landing"><span>Rechazar
                            cambios</span></button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 pr-0">
                <!--Botón zona horaria-->
                <div class="mr-5 d-flex float-right ">
                    <div class="btn-zona zona"><span class="mr-3">Zona horaria</span> <img src={{ asset('images/gmt-icon.svg') }} class="Icon_paises1" /></div>
                </div>
            </div>
        </div>
    </div>
    <!--iframe de home-->
    <div class="centro">
        <div class="navbar-progra-content my-5" id="navbar_prev_home_landing">
            
        </div>
    </div>

</div>
@include('partials.adm-CN.modals-home.home-encabezado');
@include('partials.adm-CN.modal-home.logo');
@include('partials.adm-CN.modal-home.carrusel');
@include('partials.adm-CN.modals-concert.programming')
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
                                            <img src="{{ asset('/images/synopsis/image-synopsis-horizontal.png') }}" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" id="icon_canal_claro_edit" />
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
                                            <img src="{{ asset('/images/synopsis/image-synopsis-horizontal.png') }}" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" id="icon_concert_channel_edit" />
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
                                            <img src="{{ asset('/images/synopsis/image-synopsis-horizontal.png') }}" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" id="icon_claro_cinema_edit" />
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