<div id="modal-promo" class="modal">
    <div class="modal-dialog-centered modal-dialog modal-lg">
        <div class="modal-promo-claro modal-content">
            <!-- TEXTO -->
            <p class="text-normal d-flex ml-3 text-center a-text-black-brown-two pt-3">CARGAR IMÁGENES EN FORMATO JPG O VIDEOS MP4</p>
            <h2 class="h2 text-center a-text-black-brown-two pt-3">PROMO</h2>
            <hr class="d-flex align-content-center separationhr col-11 mt-3 mb-4">
            <!-- IMG -->
            <div class="position-relative text-center" id="back-promo-claro">
                <img class="img-back-modal img-promo" src="images/modals/img-back-promo.png">
            </div>
            <!-- BTN ICONOS -->
            <div class="img-promo-claro">
                <!-- INPUTS -->
                <input class="d-none" id="promo-claro-img" name="img-promo-claro" type="file">
                <input class="d-none" id="promo-claro-video" name="video-promo-claro" type="file">
                <!-- LABEL -->
                <label for="promo-claro-img" class="add-file">
                    <img class="cursor-pointer mb-2" src="images/basic-icons/camara.svg" alt="add-photo" />
                    <span class="a-text-bold-warm text-plus">Añade tu archivo jpg 472px X 295px</span>
                </label>
                <label for="promo-claro-video" class="add-file">
                    <img class="cursor-pointer mb-2" src="images/basic-icons/video.svg" alt="add-video" />
                    <span class="a-text-bold-warm text-plus">Añade tu archivo mp4 1280px X 720px</span>
                </label>
                <label class="add-file">
                    <img id="url-promo" class="cursor-pointer mb-2" src="images/basic-icons/link.svg" alt="add-link" />
                    <span class="py-3 a-text-bold-warm text-plus">Utiliza un enlace o URL</span>
                </label>
            </div>
            <!-- BOTONES -->
            <div class="content">
                <div class="d-flex justify-content-center">
                    <button id="btn-acepta-modal-promo" class="m-0 mr-4 btn-grilla a-btn-basic-small text-plus a-text-MBlack">ACEPTAR</button>
                    <a href="#delete-info" role="button" class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel" data-toggle="modal">CANCELAR</a>
                </div>
            </div>
        </div>
    </div>
</div>