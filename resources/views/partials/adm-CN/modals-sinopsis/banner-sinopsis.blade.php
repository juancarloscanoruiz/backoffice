<div class="modal modal-programming-sinopsis pr-0" id="modaledi" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLongTitle" aria-hidden="true" style="padding: 0px !important">
    <div class="modal-dialog modal-dialog-centered m-0" role="document" style="max-width: 100%;">
        <div class="modal-content">
            <div class="modal-body">
                <h2 class="h2 text-center a-text-black-brown-two pt-3">BANNER - SINOPSIS </h2>
                <hr class="d-flex align-content-center separationhr col-11 mt-3 mb-0">
                <!--Slider pagination-->
                <div class="dots-container mx-auto d-flex justify-content-between">
                    <div class="d-flex">
                        <!--dots-->
                        <div class="programming-slider-dots-sinopsis mt-5 mb-5"></div>
                        <!--add slide-->
                     
                    </div>
                    <!--Calendar-->
                    <div class="d-flex align-items-center">
                        <div>
                            <h3 class="text-uppercase h3 a-text-black-brown-two">Vigencia</h3>
                        </div>

                        <input type="text" id="programming-carrusel-calendar" class="d-none">
                        <label for="programming-carrusel-calendar"
                            class="ml-4 mb-0 date-button date-start-table d-flex align-items-center  pl-3 pr-3"
                            id="date-start-table">
                            <img src="./images/calendario.svg" alt="">
                            <div class="ml-3">
                                <p class="text-small d-block mb-0 a-text-semibold-warmgrey">Inicio</p>
                                <p class="text-normal mb-0 a-text-bold-charcoal" id="start-date-text">DD-MM-YYYY</p>
                            </div>
                        </label>

                        <!--Fecha de fin de calendario-->
                        <label for="programming-carrusel-calendar"
                            class="mb-0 ml-4 date-button date-end-table d-flex align-items-center pl-3 pr-3">
                            <img src="./images/calendario.svg" alt="">
                            <div class="ml-3">
                                <p class="text-small d-block mb-0 a-text-semibold-warmgrey">Fin</p>
                                <p class="text-normal mb-0 a-text-bold-charcoal" id="end-date-text">DD-MM-YYYY</p>
                            </div>
                        </label>
                    </div>
                </div>

                <!--Slider-->
                <div class="programming-slider-sinopsis mx-auto">

                    <div class="bor thumbnail-image-program position-relative h-100">
                        <input type="file" name="image_programming[]" id="image_programming_1"
                            class="input-image-program d-none image_programming " data-index="1">
                        <label for="image_programming_1"
                            class="h-100 mb-0 d-flex justify-content-center  align-items-center flex-column   load-programming-carousel">
                            <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                                class=" cursor-pointer add-photo " />
                            <span class="a-text-bold-warm text-plus mt-3 banner-text pl-4 pr-4 pt-2 pb-2">1191px X 471px</span>
                            <img src="{{ asset('/images/synopsis/image-synopsis-carrusel.jpg') }}"
                                class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                        </label>
                    </div>

                    <div class="bor thumbnail-image-program position-relative h-100">
                        <input type="file" name="image_programming[]" id="image_programming_2"
                            class="input-image-program d-none image_programming " data-index="2">
                        <label for="image_programming_2"
                            class="h-100 mb-0 d-flex justify-content-center align-items-center  flex-column load-modales">
                            <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                                class=" cursor-pointer add-photo " />
                            <span class="a-text-bold-warm text-plus mt-3 pl-4 pr-4 pt-2 pb-2">1191px X 471px</span>
                            <img src="{{ asset('/images/synopsis/image-synopsis-carrusel.jpg') }}"
                                class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                        </label>
                    </div>

                    <div class="bor thumbnail-image-program position-relative h-100">
                        <input type="file" name="image_programming[]" id="image_programming_3"
                            class="input-image-program d-none image_programming" data-index="3">
                        <label for="image_programming_3"
                            class="h-100 mb-0 d-flex justify-content-center  align-items-center flex-column load-modales">
                            <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                                class=" cursor-pointer add-photo" />
                            <span class="a-text-bold-warm text-plus mt-3 pl-4 pr-4 pt-2 pb-2">1191px X 471px</span>
                            <img src="{{ asset('/images/synopsis/image-synopsis-carrusel.jpg') }}"
                                class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                        </label>
                    </div>

                    <div class="bor thumbnail-image-program position-relative h-100">
                        <input type="file" name="image_programming[]" id="image_programming_3"
                            class="input-image-program d-none image_programming" data-index="3">
                        <label for="image_programming_3"
                            class="h-100 mb-0 d-flex justify-content-center  align-items-center flex-column load-modales">
                            <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                                class=" cursor-pointer add-photo" />
                            <span class="a-text-bold-warm text-plus mt-3 pl-4 pr-4 pt-2 pb-2">1191px X 471px</span>
                            <img src="{{ asset('/images/synopsis/image-synopsis-carrusel.jpg') }}"
                                class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                        </label>
                    </div>

                </div>
                <!--Buttons-->
                <div class="text-center mb-3 d-flex justify-content-center">
                    <button
                        class="button-modal-canal-claro edit-landing-modal-button d-flex  disabled-btn mr-3 text-uppercase  m-0 btn-landing a-btn-basic-small  text-uppercase text-plus a-text-bold-teal banner-slider-button"
                        landing="canal claro" data-dismiss="modal">aceptar</button>
                    <a href="#delete-info-sinopsis" role="button"
                        class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel"
                        data-toggle="modal">CANCELAR</a>

                    <!-- <button
                      class="d-inline-block text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal" data-toggle="modal"   >cancelar</button>-->
                </div>

            </div>

        </div>
    </div>
</div>

<!--modal para perder lo hecho en los landing de edit-->
<div class=" modal  delete-info-sinopsis" data-backdrop-limit="1" id="delete-info-sinopsis" tabindex="-1"
    role="dialog" data-modal-parent="#modalbanner">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content  ">
            <div class="modal-body ">
                <img src="images/basic-icons/delete.svg" alt="advertencia de borrado" class="mx-auto d-flex mt-5 ">
                <p class="a-text-medium-warm-grey-three h3 mt-5 centro">¿Deseas abandonar la edición?</p>
                <p class="a-text-medium-warm-grey-three h3 mt-4 centro">Perderás los cambios.</p>
            </div>

            <div class="text-center mb-5 mt-4 pt-3 pb-4">
                <button type="button" class="a-btn-basic-small a-btn-border-tomato mr-3 a-text-bold-tomato text-normal"
                    data-dismiss="modal" data-dismiss="modal" data-dismiss="modal" id="close_modals-sinopsis">ACEPTAR</button>

                <button type="button" class="a-btn-basic-small a-btn-tomato  a-text-MBlack  text-normal"
                    data-dismiss="modal" data-dismiss="modal" aria-hidden="true">CANCELAR</button>
            </div>
        </div>
    </div>
</div>
</div>
