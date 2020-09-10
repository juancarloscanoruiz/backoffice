<div id="modal-carrusel-home" class="modal">
    <div class="modal-dialog-centered">
        <div class="modal-content modal-carrusel-home max-width-modal-xl">
            <!-- TEXTO -->
            <p class="text-normal d-flex text-center a-text-black-brown-two">CARGAR IMÁGENES EN FORMATO JPG</p>
            <h2 class="h2 text-center a-text-black-brown-two pt-2">HOME - <span class="h1 btn-red">CANAL CLARO</span> - CARRUSEL PROMO</h2>
            <hr class="hr">

            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 mx-auto p-0">
                        <!-- DOCTS -->
                        <div class="float-right">
                            <div class="d-flex pl-5">
                                <div class=" position-relative carrusel1-slider-dots1 mt-4 mb-4"> </div>
                                <img src="{{ asset('images/add-icon.svg') }}" class="add-programming-image mb-3  cursor-pointer">
                            </div>
                        </div>
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
                                    <img src="{{ asset('/images/basic-icons/warning-orange-icon.svg') }}" alt="">
                                    <p class="mb-0 ml-3 a-text-bold-orange">Proporcionar información</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <!-- BOTONES -->
            <div class="content mt-4">
                <div class="d-flex justify-content-center">
                    <button id="acepta_carrusel_home" class="m-0 mr-4 btn-grilla a-btn-basic-small text-plus a-text-MBlack">ACEPTAR</button>
                    <a href="#delete-info" role="button" class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel" data-toggle="modal">CANCELAR</a>
                </div>
            </div>
        </div>
    </div>
</div>