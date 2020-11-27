<div class="modal modal-info-synopsis p-0 m-0" tabindex="-1" role="dialog" id="" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered " role="document">
        <div class="modal-content align-item-center centro w-100">
            <div class="modal-body">
                <h2 class="h2 text-center a-text-black-brown-two pt-3">INFORMACIÓN</h2>
                <hr class="d-flex align-content-center separationhr col-11 mt-3 mb-0">
                <div class="container-image-synopsis mt-5 m-5" style="    border-radius: 0px;">
                    <div class="d-flex justify-content-around pt-4">
                        <div class="mt-2">
                            <p class="a-text-bold-white text-plus mb-0">DURACIÓN</p>
                            <input type="text" name="duracion" id="duration-synopsis" class=" input-information text-uppercase text-normal a-text-semibold-white  container-title-cinema" placeholder="00" style="text-align: end;"> <span class="a-text-bold-white text-normal">min</span>
                        </div>
                        <div class="mt-2">

                            <p class="a-text-bold-white text-plus mb-0">AÑO</p>
                            <input type="text" name="duracion" id="year-synopsis" class=" centro input-information text-uppercase text-normal a-text-semibold-white  container-title-cinema" placeholder="YYYY">
                        </div>
                    </div>
                    <div class="d-flex justify-content-around mt-4 pb-4">
                        <div class="mt-2">
                            <p class="a-text-bold-white text-plus mb-0">TEMPORADAS</p>
                            <input type="text" name="duracion" id="seasons-synopsis" class=" centro input-information text-uppercase text-normal a-text-semibold-white  container-title-cinema" placeholder="00">
                        </div>
                        <div class="mt-2">

                            <p class="a-text-bold-white text-plus mb-0">CLASIFICACIÓN</p>
                            <input type="text" name="duracion" id="rating-synopsis" class=" centro input-information text-uppercase text-normal a-text-semibold-white  container-title-cinema" placeholder="YYYY">
                        </div>
                    </div>

                </div>
                <div class="text-center  mb-3 d-flex justify-content-center pb-2 mt-4">
                    <button class="d-flex m-0  mr-3  btn-grilla a-btn-basic-small a-btn-basic-small text-uppercase a-text-MBlack text-plus" id="details-synopsis-modal-button" data-dismiss="modal">ACEPTAR</button>
                    <a href="#delete-info-si" role="button" class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel" data-toggle="modal">CANCELAR</a>
                </div>
            </div>
        </div>
    </div>
</div>

<!--modal para perder lo hecho en los landing de edit-->
<div class=" modal  delete-info-si" data-backdrop-limit="1" id="delete-info-si" tabindex="-1" role="dialog" data-modal-parent="#modalpromos">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content  ">
            <div class="modal-body ">
                <img src="images/basic-icons/delete.svg" alt="advertencia de borrado" class="mx-auto d-flex mt-5 ">
                <p class="a-text-medium-warm-grey-three h3 mt-5 centro">¿Deseas abandonar la edición?</p>
                <p class="a-text-medium-warm-grey-three h3 mt-4 centro">Perderás los cambios.</p>
            </div>

            <div class="text-center mb-5 mt-4 pt-3 pb-4">
                <button type="button" class="a-btn-basic-small a-btn-border-tomato mr-3 a-text-bold-tomato close_modals-sinopsis" data-dismiss="modal" data-dismiss="modal" data-dismiss="modal" id="close_modals-sinopsis">ACEPTAR</button>

                <button type="button" class="a-btn-basic-small a-btn-tomato  a-text-MBlack  text-normal" data-dismiss="modal" data-dismiss="modal" aria-hidden="true">CANCELAR</button>
            </div>
        </div>
    </div>
</div>