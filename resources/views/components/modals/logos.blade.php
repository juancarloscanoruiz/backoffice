<div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <div class="modal" id="show-logos" style="overflow: auto">
                <div class="modal-dialog modal-dialog-centered" style="max-width: 1500px;">
                    <div class="modal-content py-4" style="border-radius: 0;">
                        <h2 class="h2 text-center a-text-black-brown-two">MENÚ DE CANALES</h2>
                        <hr class="hr col-11" />

                        <div class="container-fluid px-5">
                            <div class="row">
                                <!-- IMG -->
                                <div class="col-11 mt-4">
                                    <div class="row">
                                        <div class="col-3 offset-1">
                                            <div class="container-logo">
                                                <img class="bor responsi-img img_logo_0" src="./images/synopsis/image-synopsis-horizontal.png" alt="" />
                                                <input class="d-none previewImage" id="img_logo_0" type="file" accept="image/*" mvh="logoCanalClaro" />
                                                <div class="container-camera">
                                                    <label for="img_logo_0" class="cursor-pointer">
                                                        <p class="text-center a-text-bold-warm text-plus mb-0">
                                                            <img class="camera_0" src="./images/basic-icons/camara.svg" /><span class="d-block">86px X 18px</span>
                                                        </p>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-3 offset-1">
                                            <div class="container-logo">
                                                <img class="bor responsi-img img_logo_1" src="./images/synopsis/image-synopsis-horizontal.png" alt="" />
                                                <input class="d-none previewImage" id="img_logo_1" type="file" accept="image/*" mvh="logoConcertChannel" />
                                                <div class="container-camera">
                                                    <label for="img_logo_1" class="cursor-pointer">
                                                        <p class="text-center a-text-bold-warm text-plus mb-0">
                                                            <img class="camera_0" src="./images/basic-icons/camara.svg" /><span class="d-block">86px X 18px</span>
                                                        </p>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-3 offset-1">
                                            <div class="container-logo">
                                                <img class="bor responsi-img img_logo_2" src="./images/synopsis/image-synopsis-horizontal.png" alt="" />
                                                <input class="d-none previewImage" id="img_logo_2" type="file" accept="image/*" mvh="logoClaroCinema" />
                                                <div class="container-camera">
                                                    <label for="img_logo_2" class="cursor-pointer">
                                                        <p class="text-center a-text-bold-warm text-plus mb-0">
                                                            <img class="camera_0" src="./images/basic-icons/camara.svg" /><span class="d-block">86px X 18px</span>
                                                        </p>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- URL -->
                                <div class="col-11 mt-5">
                                    <div class="row">
                                        <div class="col-3 offset-1 show-url">
                                            <img class="cursor-pointer float-left mr-2" src="./images/basic-icons/link.svg" alt="logo-link">
                                            <div class="d-flex">
                                                <input type="text" id="link-logo-canal-claro" class="url-mvh a-text-bold-warm text-normal" placeholder=" Enlace o URL">
                                            </div>
                                        </div>
                                        <div class="col-3 offset-1 show-url">
                                            <img class="cursor-pointer float-left mr-2" src="./images/basic-icons/link.svg" alt="logo-link">
                                            <div class="d-flex">
                                                <input type="text" id="link-logo-concert-channel" class="url-mvh a-text-bold-warm text-normal" placeholder=" Enlace o URL">
                                            </div>
                                        </div>
                                        <div class="col-3 offset-1 show-url">
                                            <img class="cursor-pointer float-left mr-2" src="./images/basic-icons/link.svg" alt="logo-link">
                                            <div class="d-flex">
                                                <input type="text" id="link-logo-claro-cinema" class="url-mvh a-text-bold-warm text-normal" placeholder=" Enlace o URL">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="content mt-5">
                                <div class="d-flex justify-content-center">
                                    <button id="btn-acepta-logos" class="m-0 mr-4 btn-grilla a-btn-basic-small text-plus a-text-MBlack">ACEPTAR</button>
                                    <a href="#delete-info" class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel" data-toggle="modal">CANCELAR</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .slider-item-active {
        background-color: #0097a9;
        color: #fff;
    }

    .container-logo {
        height: 176px;
    }

    .url-mvh {
        width: 100%;
        height: 43px;
        -o-object-fit: contain;
        object-fit: contain;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
        background-color: white;
        border: none;
    }
</style>