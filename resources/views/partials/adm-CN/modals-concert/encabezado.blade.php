<div class="modal modal-encabezados modal-header-concert-channel p-0 m-0" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg modal-dialog-centered " role="document" style="max-width:1000px;">
        <div class="modal-content align-item-center centro w-100">
            <div class="modal-body">
                <p class="text-normal d-flex ml-3 text-center a-text-black-brown-two pt-3">CARGAR IMÁGENES EN FORMATO
                    PNG</p>
                <h2 class="h2 text-center a-text-black-brown-two pt-3">ENCABEZADO </h2>
                <hr class="d-flex align-content-center separationhr col-11 mt-3 mb-0">
                <div class="container-promo mt-4">
                    <div class="justify-content-around">
                        <div class="d-flex p-4 position-relative logo-lading-container mb-3">
                            <div class="bor mx-auto position-relative thumbnail-image-program"
                                id="thumbnail-home-horizontal">
                                <input type="file" name="image-icon1" id="header-lading-concert-logo"
                                    class="input-image-program logo-landing d-none">
                                <label for="header-lading-concert-logo"
                                    class="mb-0 cursor-pointer p-4 d-flex justify-content-center align-items-center h-100 flex-column load-modales">
                                    <div class="label-no-image">
                                        <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                                            class="add-photo " style="z-index:10000" />
                                        <span class="a-text-bold-warm text-plus p-2 pr-3 pl-3  white-shadow"
                                            style="z-index:10000">86px X 18px</span>
                                    </div>
                                    <img src="{{ asset('/images/synopsis/image-synopsis-horizontal.png') }}"
                                        class="w-100 h-100 cursor-pointer prev-image-program thumbnail-image-program"
                                        id="icon_canal_claro_edit" />
                                </label>
                            </div>

                            <input type="text" name="links" id="hoy-channel"
                                class="text-uppercase modal-header-title-1 url-input container-promo text-normal ml-3 a-text-bold-white hoy-en"
                                value="">

                            <input type="text" name="links" id="concert-link"
                                class="text-uppercase modal-header-title-2 url-input container-promo text-normal a-text-bold-bright-cyan ml-3 concert-input mr-3">
                            <div>

                                <input type="text"
                                    class="modal-header-button-title a-btn-basic-medium a-btn-pink  pl-3 a-text-MBlack text-normal a-text-bold-white hoy-en height-btn"
                                    value="" placeholder="VER PROGRAMACIÓN">
                                <div class="d-flex mt-5 position-absolute mr-4" style="right:0">
                                    <a href="#url-encabezado-concert" role="button" data-toggle="modal">
                                        <img src="{{ asset('/images/basic-icons/link.svg') }}" alt="logo-link"
                                            class="mr-3"></a>
                                    <input type="text" name="links" id="link-logo-canal-claro"
                                        class="modal-header-button-link urls a-text-bold-warm text-normal "
                                        placeholder="Enlace o URL">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="text-center  mb-3 d-flex justify-content-center pb-2 mt-4">
                    <button
                        class="d-flex m-0  mr-3 button-modal-concert-channel  btn-grilla a-btn-basic-small a-btn-basic-small text-uppercase a-text-MBlack text-plus"
                        id="edit-header-landing-concert">ACEPTAR</button>
                    <a href="#url-encabezado-concert" role="button"
                        class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel"
                        data-dismiss="modal">CANCELAR</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!--Vinculo para url-->
<div class=" modal url-encabezado" data-backdrop-limit="1" id="url-encabezado-concert" tabindex="-1" role="dialog"
    data-modal-parent="#url-encabezado-concert">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body pl-5 ml-3">
                <p class="a-text-medium-warm-grey-three h3 mt-5 d-flex centro">Vínculo a una página Web existente.
                </p>
                <div class="mt-5 d-flex ">
                    <img src="{{ asset('/images/basic-icons/link.svg') }}" alt="logo-link" class="mr-3">
                    <input type="text" name="links" id="link-button-concert-channel"
                        class="urls a-text-bold-warm text-normal url-container" placeholder="Enlace o URL">
                </div>
            </div>

            <div class="text-center  mb-4 d-flex justify-content-center pb-2 mt-4">
                <button
                    class="d-flex m-0  mr-3  btn-grilla a-btn-basic-small a-btn-basic-small text-uppercase a-text-MBlack text-plus"
                    id="close_modals">ACEPTAR</button>
                <a href="#delete-info-encabezado" role="button"
                    class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel"
                    data-dismiss=""="modal">CANCELAR</a>

            </div>
        </div>
    </div>
</div>

<!--modal para perder lo hecho en los landing de edit-->
<div class=" modal  delete-info-encabezado" data-backdrop-limit="1" id="delete-info-encabezado" tabindex="-1"
    role="dialog" data-modal-parent="#modalbanner">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body">
                <img src="images/basic-icons/delete.svg" alt="advertencia de borrado" class="mx-auto d-flex mt-5 ">
                <p class="a-text-medium-warm-grey-three h3 mt-5 centro">¿Deseas abandonar la edición?</p>
                <p class="a-text-medium-warm-grey-three h3 mt-4 centro">Perderás los cambios.</p>
            </div>

            <div class="text-center mb-5 mt-4 pt-3 pb-4">
                <button type="button" class="a-btn-basic-small a-btn-border-tomato mr-3 a-text-bold-tomato h1"
                    data-dismiss="modal" data-dismiss="modal" data-dismiss="modal" id="close_modals">ACEPTAR</button>

                <button type="button" class="a-btn-basic-small a-btn-tomato  a-text-MBlack  h1" data-dismiss="modal"
                    data-dismiss="modal" aria-hidden="true">CANCELAR</button>
            </div>
        </div>
    </div>
</div>
