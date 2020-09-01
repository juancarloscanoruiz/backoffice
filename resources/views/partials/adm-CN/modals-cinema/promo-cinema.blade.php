<div class="modal modal-promo-cinema p-0 m-0" tabindex="-1" role="dialog" id="modalpromos">
    <div class="modal-dialog modal-lg modal-dialog-centered " role="document">
        <div class="modal-content  align-item-center centro  border-radius w-100">
            <div class="modal-body ">

                <p class="text-normal d-flex ml-3 text-center a-text-black-brown-two pt-3 mb-2">CARGAR IMÁGENES EN
                    FORMATO
                    JPG O VIDEOS MP4</p>
                <h2 class="h2 text-center a-text-black-brown-two ">PROMO </h2>
                <hr class="d-flex align-content-center separationhr col-11 mt-3 mb-0">
                <div class="container-promo-cinema p-3  mt-4">
                    <div
                        class="justify-content-around position-absolute d-flex input-promo-container align-items-center">
                        <input type="file" name="" id="image-promo-concert" class="d-none">
                        <label for="image-promo-concert"
                            class="mb-0 cursor-pointer  d-flex justify-content-center align-items-center h-100 mb-3 flex-column load-modales">
                            <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                                class="add-photo promo-icon cursor-pointer" style="width:95px" />
                            <span class="a-text-bold-warm text-plus p-2 pr-3 pl-3 mr-4 white-shadow">Añade tu archivo
                                jpg 472px X 295px </span>
                        </label>
                        <input type="file" name="" id="video-promo-file-concert" class="d-none file-video"
                            accept="video/*">
                        <label for="video-promo-file-concert"
                            class="mb-0 cursor-pointer  d-flex justify-content-center align-items-center h-100 flex-column load-modales">
                            <img src="{{ asset('/images/basic-icons/video.svg') }}" alt="add-photo"
                                class="add-photo promo-icon cursor-pointer" />
                            <span class="a-text-bold-warm text-plus p-2 pr-3 pl-3 mr-4 white-shadow mt-3">Añade tu
                                archivo mp4 472px X 295px </span>
                        </label>

                        <label for="url-promo"
                            class="mb-0 cursor-pointer  d-flex justify-content-center align-items-center w-50   h-100 flex-column load-modales">
                            <a href="#url-promo-concert" role="button" data-toggle="modal" class="link-url-modal">
                                <img src="{{ asset('/images/basic-icons/link.svg') }}" alt="add-photo"
                                    class="add-photo cursor-pointer promo-icon" /></a>
                            <span class="a-text-bold-warm text-plus p-2 pr-3 pl-3  white-shadow mt-3">Utiliza un enlace
                                o URL </span>
                        </label>
                    </div>

                    <div class="position-relative" id="cinema-promo-container">

                    </div>

                </div>
                <div class="ml-4 mt-3" style="text-align:initial;">
                    <p class="a-text-bold-brown-two text-normal">Nombre_Promoción_ClaroCinema_20200709.jpg</p>
                    <p class="a-text-bold-brown-two text-normal ">Nombre_Promoción_ClaroCinema_20200709.mp4</p>
                </div>
                <div class="text-center  mb-4 d-flex justify-content-center pb-2 mt-4">
                    <button
                        class="upload-promo-button d-flex m-0  mr-3  btn-grilla a-btn-basic-small a-btn-basic-small text-uppercase a-text-MBlack text-plus edit-landing-modal-button"
                        data-dismiss="modal">ACEPTAR</button>
                    <a href="#delete-info-promos" role="button"
                        class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel"
                        data-toggle="modal">CANCELAR</a>

                </div>



            </div>
        </div>
    </div>
</div>


<!--Vinculo para url-->

<div class=" modal  url-promo" data-backdrop-limit="1" id="url-promo" tabindex="-1" role="dialog"
    data-modal-parent="#url-promo">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content  ">
            <div class="modal-body pl-5 ml-3 ">

                <p class="a-text-medium-warm-grey-three h3 mt-5 d-flex centro">Vínculo a una página Web existente.</p>
                <div class="mt-5 d-flex ">
                    <img src="{{ asset('/images/basic-icons/link.svg') }}" alt="logo-link" class="mr-3">
                    <input type="text" name="links" id="link-logo-canal-claro"
                        class="urls a-text-bold-warm text-normal url-container" placeholder=" Enlace o URL">

                </div>
            </div>

            <div class="text-center  mb-4 d-flex justify-content-center pb-2 mt-4">
                <button
                    class="d-flex m-0  mr-3  btn-grilla a-btn-basic-small a-btn-basic-small text-uppercase a-text-MBlack text-plus"
                    id="" data-dismiss="modal">ACEPTAR</button>
                <a href="#delete-info" role="button"
                    class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel"
                    data-toggle="modal">CANCELAR</a>

            </div>
        </div>
    </div>
</div>



<!--modal para perder lo hecho en los landing de edit-->
<div class=" modal  delete-info-promo" data-backdrop-limit="1" id="delete-info-promo" tabindex="-1" role="dialog"
    data-modal-parent="#modalpromos">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content  ">
            <div class="modal-body ">
                <img src="images/basic-icons/delete.svg" alt="advertencia de borrado" class="mx-auto d-flex mt-5 ">
                <p class="a-text-medium-warm-grey-three h3 mt-5 centro">¿Deseas abandonar la edición?</p>
                <p class="a-text-medium-warm-grey-three h3 mt-4 centro">Perderás los cambios.</p>
            </div>

            <div class="text-center mb-5 mt-4 pt-3 pb-4">
                <button type="button" class="a-btn-basic-small a-btn-border-tomato mr-3 a-text-bold-tomato text-normal"
                    data-dismiss="modal" data-dismiss="modal" data-dismiss="modal" id="close_modals">ACEPTAR</button>

                <button type="button" class="a-btn-basic-small a-btn-tomato  a-text-MBlack  text-normal"
                    data-dismiss="modal" data-dismiss="modal" aria-hidden="true">CANCELAR</button>
            </div>
        </div>
    </div>
</div>
