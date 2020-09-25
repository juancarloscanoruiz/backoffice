<div id="modal-logo-home" class="modal" style="overflow: auto;">
    <input type="hidden" id="landing_name" name="landing_typo">
    <div class="modal-dialog-centered modal-dialog modal-logo-home-width">
        <div class="modal-content modal-logo-home">
            <!-- TEXTO -->
            <p class="text-normal d-flex text-center a-text-black-brown-two">CARGAR IMÁGENES EN FORMATO PNG</p>
            <h2 class="h2 text-center a-text-black-brown-two pt-2">HOME - CANALES</h2>
            <hr class="hr">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-md-6 p-0">
                        <!-- BTN ICONOS -->
                        <div id="dinamic_width" class="home-logo-container position-relative p-3">
                            <!-- INPUTS -->
                            <input class="d-none" id="logo_home" name="img-logo" type="file">
                            <!-- LABEL -->
                            <img class="img-back-modal-enable" id="img-logo-home">
                            <label for="logo_home" class="add-file positiion-relative">
                                <img id="camera" class="d-block mx-auto cursor-pointer mb-2" src="./images/basic-icons/camara.svg" alt="add-photo" />
                                <p class="text-center a-text-bold-warm text-plus">472px X 295px</p>
                            </label>

                        </div>
                    </div>
                    <!-- BTN Y LINK -->
                    <div class="col-12 col-md-6 p-0">
                        <div class="text-right m-0">
                            <button id="dinamic_btn" class="btn-camales">VER <span class="h3 ml-2">+</span></button>
                            <div class="mt-4">
                                <img class="cursor-pointer modal_url" id="modal_url" src="./images/basic-icons/link.svg" style="width: 40px;">
                                <input id="inp_url" class="inp_url input-url width-url a-text-bold-warm text-normal" placeholder="Enlace o URL" type="text">
                            </div>
                        </div>
                    </div>
                    <!-- NOMBRE DE LA IMAGEN -->
                    <div class="col-12 p-0">
                        <span class="a-text-bold-brown-two text-normal my-4 d-block">Nombredelaimagen_Home.png</span>
                    </div>
                    <!-- SUBTITULO -->
                    <input id="inp_canales_subtitulo" class="a-text-bold-coolgray ipt-home-canales  text-uppercase" placeholder="SUBTITULO" type="text">
                </div>
            </div>
            <!-- BOTONES -->
            <div class="content mt-4">
                <div class="d-flex justify-content-center">
                    <button id="acepta_canales_home" class="m-0 mr-4 btn-grilla a-btn-basic-small text-plus a-text-MBlack">ACEPTAR</button>
                    <a href="#delete-info" role="button" class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel" data-toggle="modal">CANCELAR</a>
                </div>
            </div>
        </div>
    </div>
</div>
