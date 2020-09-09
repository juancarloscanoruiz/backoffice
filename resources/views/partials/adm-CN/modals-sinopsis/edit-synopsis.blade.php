<div class="modal modal-edit-synopsis p-0 m-0" tabindex="-1" role="dialog" id="modalpromos">
    <div class="modal-dialog modal-lg modal-dialog-centered " role="document" style="max-width: 1000px;">
        <div class="modal-content  align-item-center centro w-100">
            <div class="modal-body ">
                <h2 class="h2 text-center a-text-black-brown-two pt-3">SINOPSIS</h2>
                <hr class="d-flex align-content-center separationhr col-11 mt-3 mb-0">
                <div class="container-image-synopsis p-3 justify-content-center d-flex align-content-center mt-4 align-items-center mx-auto container-edit-sinopsis" >
                    <div class="container-edit-sinopsis h-100">
                <h1 class="a-text-MBlack h3 d-flex justify-content-center mt-3"> MAD MEN</h1>
                <textarea id="synopsis" name="" class="editable-attribute edit-text-synopsis container-image-synopsis a-text-medium-white" >En Nueva York durante los años 60, el dominante líder Don Draper lucha por mantenerse en la cima del grupo en las oficinas de la agencia de publicidad Sterling Cooper, de la avenida Madison, donde existe mucha presión.
                </textarea>
                </div>
                    
                </div>
              
                <div class="text-center  mb-4 d-flex justify-content-center pb-2 mt-4">
                    <button  class="d-flex m-0  mr-3  btn-landing a-btn-basic-small disabled-btn text-uppercase text-plus a-text-bold-teal edit-landing-modal-button"   id="upload-image-synopsis">ACEPTAR</button>
                    <a href="#delete-sinopsis" role="button"     class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel"
                        data-toggle="modal">CANCELAR</a>
                </div>
            </div>
        </div>
    </div>
</div>



<!--modal para perder lo hecho en los landing de edit-->
<div class=" modal  delete-sinopsis" data-backdrop-limit="1" id="delete-sinopsis" tabindex="-1" role="dialog"
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
                    data-dismiss="modal" data-dismiss="modal" data-dismiss="modal" id="close_modals-sinopsiss">ACEPTAR</button>

                <button type="button" class="a-btn-basic-small a-btn-tomato  a-text-MBlack  text-normal"
                    data-dismiss="modal" data-dismiss="modal" aria-hidden="true">CANCELAR</button>
            </div>
        </div>
    </div>
</div>
