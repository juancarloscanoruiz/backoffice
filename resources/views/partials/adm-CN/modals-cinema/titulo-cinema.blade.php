

<div class="modal modal-title-cinema p-0 m-0" tabindex="-1" role="dialog" id="modaltitles"  >
  <div class="modal-dialog modal-lg modal-dialog-centered " role="document" >
    <div class="modal-content align-item-center border-radius centro w-100" >
     
      <div class="modal-body">

         <h2 class="h2 text-center a-text-black-brown-two pt-3">TÍTULO </h2>
         <hr class="d-flex align-content-center separationhr col-11 mt-3 mb-0">
         <div class="container-title-cinema mt-4 m-5">
             <div class="d-flex justify-content-around">
             <input type="text" name="links" id="hoy-channel"
                                            class="url-input p-4 pt-4 pb-4 h3 m-2  input-border input-title-cinema  a-text-MBlack hoy-en text-uppercase" placeholder=" LAS" style="width:317px;" >
                                            <input type="text" name="links" id="LAS"
                                            class="url-input p-4 pt-4 pb-4 h3 m-2 input-border  input-title-cinema a-text-black-yellow-two cinema-title-input text-uppercase" placeholder=" TÍTULO" style="width:317px;">
            
             </div>
             <div>

             <input type="text" name="links" id="hoy-channel"
                                            class="url-input p-3 container-width m-2  input-border input-title-cinema text-normal a-text-MBlack  pl-4 hoy-en text-uppercase" placeholder=" SUBTITULO" >
            </div>

         </div>

         <div class="text-center  mb-3 d-flex justify-content-center pb-2 mt-4">
                            <button
                                class="d-flex m-0  mr-3  btn-grilla a-btn-basic-small a-btn-basic-small text-uppercase a-text-MBlack text-plus edit-landing-modal-button"
                                id="edit-logos-button" data-dismiss="modal">ACEPTAR</button>
                            <a href="#delete-info-title" role="button"
                                class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel"
                                data-toggle="modal">CANCELAR</a>

                        </div>
      
     
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
