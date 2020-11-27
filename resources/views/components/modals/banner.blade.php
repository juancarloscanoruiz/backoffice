<div class="modal" id="show-banner" style="overflow: auto; z-index: 1100">
    <div class="modal-dialog modal-lg modal-dialog-centered" style="max-width: 1500px;">
        <div class="modal-content py-4" style="border-radius: 0;">
            <h2 class="h2 text-center a-text-black-brown-two titulo-banner">TTITULO DEL BANNER</h2>
            <hr class="hr col-11" />
            <div class="container px-5">
                <div class="row">
                    <div class="col-12">
                        <div class="navbar px-0 pb-5 pt-4">
                            <!-- DOCTS -->
                            <div class="d-flex align-items-center col-4">
                                <div class="position-relative carrusel1-slider-dots1 slick-dots-mvh slick-dots-banner"></div>
                            </div>
                            <div>
                                <h3 class="text-uppercase h3 a-text-black-brown-two">Vigencia</h3>
                            </div>
                            <div class="d-flex">
                                <input type="text" id="programming-modal" class="d-none" />
                                <label for="programming-modal" class="ml-4 mb-0 date-button date-start-table d-flex align-items-center pl-3 pr-3 vueCalendar">
                                    <img src="./images/calendario.svg" alt="" />
                                    <div class="ml-3">
                                        <p class="text-small d-block mb-0 a-text-semibold-warmgrey">Inicio</p>
                                        <p class="text-normal mb-0 a-text-bold-charcoal" id="start-date-text">DD-MM-YYYY</p>
                                    </div>
                                </label>
                                <label for="programming-modal" class="mb-0 ml-4 date-button date-end-table d-flex align-items-center pl-3 pr-3 vueCalendar">
                                    <img src="./images/calendario.svg" alt="" />
                                    <div class="ml-3">
                                        <p class="text-small d-block mb-0 a-text-semibold-warmgrey">Fin</p>
                                        <p class="text-normal mb-0 a-text-bold-charcoal" id="end-date-text">DD-MM-YYYY</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slick-mvh">
                    <div class="slick-banner">
                        <div class="container-banner">
                            <img class="banner bor responsi-img img_banner_0" src="./images/synopsis/image-synopsis-carrusel.jpg" alt="" />
                            <input class="d-none previewImage" id="img_banner_0" type="file" accept="image/*" />
                            <div class="container-camera">
                                <label for="img_banner_0" class="cursor-pointer">
                                    <p class="text-center a-text-bold-warm text-plus mb-0">
                                        <img class="camera_0" src="./images/basic-icons/camara.svg" /><span>1920px X 657px</span>
                                    </p>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content mt-4">
                <div class="d-flex justify-content-center">
                    <button id="btn-acepta-banner" class="m-0 mr-4 btn-grilla a-btn-basic-small text-plus a-text-MBlack">ACEPTAR</button>
                    <a href="#delete-info" class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel" data-toggle="modal">CANCELAR</a>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .responsi-img {
        width: 100%;
        height: 100%;
    }

    .container-camera {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
        align-items: center;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container-camera img {
        width: 70px;
        margin: auto auto 5px;
    }

    .container-camera span {
        background: #fff;
        border-radius: 10px;
        padding: 5px 10px;
        display: inline;
        opacity: 0.8;
    }

    .container-banner {
        height: 385px;
    }

    .modal {
        padding-right: 0 !important;
    }
</style>