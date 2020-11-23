<div class="modal" id="show-chapter" style="overflow: auto;">
    <div class="modal-dialog modal-lg modal-dialog-centered" style="max-width: 100%;">
        <div class="modal-content py-4" style="border-radius: 0;">
            <h2 class="edit-program-modal-title h2 text-center a-text-black-brown-two pt-3">PROGRAMACIÓN PRINCIPAL - CARRUSEL 1</h2>
            <hr class="hr col-11" />
            <div class="container-fluid">
                <div class="row">
                    <!-- ESTADO DE EDICION -->
                    <div class="col-11 mx-auto mt-4 d-flex justify-content-between">
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
                    </div>
                    <!-- SLIDER DE DIAS -->
                    <div class="col-8 mx-auto mt-5">
                        <h3 class="monthSliderCalendarChapter a-text-semibold-brownish-grey-three text-uppercase"></h3>
                        <div class="slick-calendarioChapter"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>