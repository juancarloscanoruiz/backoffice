<div class="modal modal-titles modal-titles-concert-channel p-0 m-0" tabindex="-1" role="dialog" id="modaltitles">
    <div class="modal-dialog modal-lg modal-dialog-centered " role="document">
        <div class="modal-content align-item-center centro border-radius w-100">
            <div class="modal-body">
                <h2 class="h2 text-center a-text-black-brown-two pt-3">TÍTULO </h2>
                <hr class="d-flex align-content-center separationhr col-11 mt-3 mb-0">
                <div class="container-promotitle border-radius mt-4 m-5">
                    <div>
                        <input type="text" name="links" id="hoy-channel"
                            class="section-landing-title modal-concert-title text-uppercase a-text-black-bright-cyan url-input p-4 pt-5 pb-5 h3 m-2 container-width container-title concert-input-title"
                            placeholder="TÍTULO">
                    </div>
                    <div>

                        <input type="text" name="links" id="hoy-channel"
                            class="section-landing-subtitle modal-concert-subtitle text-uppercase url-input p-3 a-text-bold-white container-width m-2 container-title text-normal  pl-4 hoy-en"
                            placeholder="SUBTITULO">
                    </div>

                </div>

                <div class="text-center  mb-3 d-flex justify-content-center pb-2 mt-4">
                    <button
                        class="d-flex m-0  mr-3  btn-landing opacity a-btn-basic-small text-uppercase a-text-MBlack text-plus edit-titles-modal"
                        id="edit-titles-landing-concert" data-dismiss="modal">ACEPTAR</button>
                    <a href="#delete-info-titles" role="button"
                        class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel"
                        data-dismiss="modal">CANCELAR</a>

                </div>
            </div>
        </div>
    </div>



    <!--modal para perder lo hecho en los landing de edit-->
    <div class=" modal  delete-info-title" data-backdrop-limit="1" id="delete-info-title" tabindex="-1" role="dialog"
        data-modal-parent="#modaltitles">
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
