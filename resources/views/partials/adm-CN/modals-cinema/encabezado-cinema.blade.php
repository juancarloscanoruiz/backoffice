<div class="modal modal-encabezado-cinema p-0 m-0" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg modal-dialog-centered " role="document" style="max-width:1000px;">
        <div class="modal-content align-item-center centro w-100 border-radius">

            <div class="modal-body">

                <p class="text-normal d-flex ml-3 text-center a-text-black-brown-two pt-3">CARGAR IMÁGENES EN FORMATO
                    PNG</p>
                <h2 class="h2 text-center a-text-black-brown-two pt-3">ENCABEZADO </h2>
                <hr class="d-flex align-content-center separationhr col-11 mt-3 mb-0">
                <div class="container-promo-cinema  border-radius mt-4">
                    <div class="justify-content-around">
                        <div class="d-flex p-4 position-relative logo-lading-container mb-3">
                            <div class="bor mx-auto position-relative thumbnail-image-program"
                                id="thumbnail-home-horizontal">
                                <input type="file" name="image-icon1" id="image-icon1"
                                    class="input-image-program logo-landing d-none">
                                <label for="image-icon1"
                                    class="mb-0 cursor-pointer  d-flex justify-content-center align-items-center h-100 flex-column load-modales">
                                    <div class="label-no-image">
                                        <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                                            class="add-photo " style="z-index:100" />
                                        <span class="a-text-bold-warm text-plus p-2 pr-3 pl-3  white-shadow"
                                            style="z-index:100">472px X
                                            295px</span>
                                    </div>

                                    <img src=""
                                        class="w-100 h-100 cursor-pointer prev-image-program thumbnail-image-program logo-header-claro-cinema"
                                        id="" />
                                </label>
                            </div>

                            <input type=" text" name="links" id="hoy-channel"
                                class="url-input container-promotitle-cinema cinema-header-input-title1 text-normal ml-3 a-text-black-black hoy-en-cinema text-uppercase"
                                placeholder="TÍTULO">

                            <input type="text" name="links" id="concert-link"
                                class="url-input container-promotitle-cinema text-normal cinema-header-input-title2 a-text-black-tomato ml-3 cinema-input-title mr-3 text-uppercase"
                                placeholder="TÍTULO">
                            <div>
                                <input type="text"
                                    class="a-btn-basic-medium a-btn-teal btn-header-claro-cinema  pl-2 a-text-MBlack text-normal a-text-bold-white hoy-en height-btn text-uppercase"
                                    value="" placeholder="VER PROGRAMACIÓN">

                                <div class="d-flex mt-5 position-absolute mr-4" style="right:0">
                                    <img src="{{ asset('/images/basic-icons/link.svg') }}" alt="logo-link" class="mr-3">
                                    <a href="#url-encabezado" role="button" data-toggle="modal">
                                        <input type="text" name="links"
                                            class="link-button-header-cinema urls a-text-bold-warm text-normal "
                                            placeholder=" Enlace o URL"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center  mb-3 d-flex justify-content-center pb-2 mt-4">
                    <button
                        class="d-flex m-0  mr-3  btn-grilla a-btn-basic-small a-btn-basic-small text-uppercase a-text-MBlack text-plus edit-landing-modal-button"
                        id="edit-logos-button" data-dismiss="modal">ACEPTAR</button>
                    <a href="#delete-info-encabezado" role="button"
                        class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel"
                        data-toggle="modal">CANCELAR</a>

                </div>


            </div>
        </div>
    </div>

    <!--Vinculo para url-->

    <div class="modal url-encabezado" data-backdrop-limit="1" id="url-encabezado" tabindex="-1" role="dialog"
        data-modal-parent="#url-encabezado">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content  ">
                <div class="modal-body pl-5 ml-3 ">
                    <p class="a-text-medium-warm-grey-three h3 mt-5 d-flex centro">Vínculo a una página Web
                        existente.
                    </p>
                    <div class="mt-5 d-flex ">
                        <img src="{{ asset('/images/basic-icons/link.svg') }}" alt="logo-link" class="mr-3">
                        <input type="text" name="links"
                            class="urls a-text-bold-warm text-normal url-container link-button-header-cinema"
                            placeholder=" Enlace o URL">
                    </div>
                </div>

                <div class="text-center  mb-4 d-flex justify-content-center pb-2 mt-4">
                    <button
                        class="d-flex m-0  mr-3  btn-grilla a-btn-basic-small a-btn-basic-small text-uppercase a-text-MBlack text-plus"
                        id="" data-dismiss="modal">ACEPTAR</button>
                    <a href="#delete-info-encabezado" role="button"
                        class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel"
                        data-toggle="modal">CANCELAR</a>

                </div>
            </div>
        </div>
    </div>

    <!--modal para perder lo hecho en los landing de edit-->
    <div class=" modal  delete-info-encabezado" data-backdrop-limit="1" id="delete-info-encabezado" tabindex="-1"
        role="dialog" data-modal-parent="#modalbanner">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content  ">
                <div class="modal-body ">
                    <img src="images/basic-icons/delete.svg" alt="advertencia de borrado" class="mx-auto d-flex mt-5 ">
                    <p class="a-text-medium-warm-grey-three h3 mt-5 centro">¿Deseas abandonar la edición?</p>
                    <p class="a-text-medium-warm-grey-three h3 mt-4 centro">Perderás los cambios.</p>
                </div>

                <div class="text-center mb-5 mt-4 pt-3 pb-4">
                    <button type="button"
                        class="a-btn-basic-small a-btn-border-tomato mr-3 a-text-bold-tomato text-normal"
                        data-dismiss="modal" data-dismiss="modal" data-dismiss="modal"
                        id="close_modals">ACEPTAR</button>

                    <button type="button" class="a-btn-basic-small a-btn-tomato  a-text-MBlack  text-normal"
                        data-dismiss="modal" data-dismiss="modal" aria-hidden="true">CANCELAR</button>
                </div>
            </div>
        </div>
    </div>
</div>
