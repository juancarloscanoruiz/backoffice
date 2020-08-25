@extends('layaout.app')

<div class="modal modal-promo-cinema p-0 m-0" tabindex="-1" role="dialog" id="modalpromos" >
  <div class="modal-dialog modal-lg modal-dialog-centered " role="document">
    <div class="modal-content  align-item-center centro w-100"  >    
      <div class="modal-body ">
    
      <p class="text-normal d-flex ml-3 text-center a-text-black-brown-two pt-3">CARGAR IMÁGENES EN FORMATO JPG O VIDEOS MP4</p>
         <h2 class="h2 text-center a-text-black-brown-two pt-3">PROMO </h2>
         <hr class="d-flex align-content-center separationhr col-11 mt-3 mb-0">
         <div class="container-promo-cinema p-3  mt-4">
                   
         <div class="justify-content-around position-absolute d-flex p-5  div-promo"> 
            <input type="file" name="" id="image-promo"class="d-none">
            <label for="image-promo"  class="mb-0 cursor-pointer  d-flex justify-content-center align-items-center h-100 mb-3 flex-column load-modales"> 
                <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo" class="add-photo  cursor-pointer " style="width:95px" />
                <span  class="a-text-bold-warm text-plus p-2 pr-3 pl-3 mr-4 white-shadow">Añade tu archivo jpg 472px  X  295px </span>
                </label>
                <input type="file" name="" id="video-promo"class="d-none file-video" accept="video/*">
            <label for="video-promo"   class="mb-0 cursor-pointer  d-flex justify-content-center align-items-center h-100 flex-column load-modales"> 
                <img src="{{ asset('/images/basic-icons/video.svg') }}" alt="add-photo" class="add-photo  cursor-pointer " style="width:70px" />
                <span  class="a-text-bold-warm text-plus p-2 pr-3 pl-3 mr-4 white-shadow mt-3">Añade tu archivo mp4 472px  X  295px </span>
                    <video width="472"class="d-none" id="video-promo" controls>  <source src="" type="video/mp4"></video>
            </label>
        
            <label for="url-promo"   class="mb-0 cursor-pointer  d-flex justify-content-center align-items-center w-50   h-100 flex-column load-modales"> 
            <a href="#url-promo" role="button"
                                
                                data-toggle="modal">   <img src="{{ asset('/images/basic-icons/link.svg')  }}" alt="add-photo" class="add-photo  cursor-pointer  " style="width:70px"/></a>
                <span  class="a-text-bold-warm text-plus p-2 pr-3 pl-3  white-shadow mt-3">Utiliza un enlace o URL </span>

            </label>
           
            </div>
            <img src="./images/synopsis/background-promo1.svg" alt="" class="d-flex w-100">
         </div>
         <div class="ml-3 mt-3"style="text-align:initial;">
         <span class="a-text-bold-brown-two text-normal">Nombre_Promoción_ConcertChannel_20200709.jpg</span><br>
         <span class="a-text-bold-brown-two text-normal ">Nombre_Promoción_ConcertChannel_20200709.mp4</span>
         </div>
         <div class="text-center  mb-4 d-flex justify-content-center pb-2 mt-4">
                            <button
                                class="d-flex m-0  mr-3  btn-grilla a-btn-basic-small a-btn-basic-small text-uppercase a-text-MBlack text-plus edit-landing-modal-button"
                                id="edit-logos-button" data-dismiss="modal">ACEPTAR</button>
                            <a href="#delete-info-promos" role="button"
                                class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel"
                                data-toggle="modal">CANCELAR</a>

                        </div>

            
        
        </div>
    </div>
  </div>
</div>
 

    <!--Vinculo para url-->

    <div class=" modal  url-promo" data-backdrop-limit="1" id="url-promo" tabindex="-1" role="dialog"
        data-modal-parent="#url-promo">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content  ">
                <div class="modal-body pl-5 ml-3 ">

                    <p class="a-text-medium-warm-grey-three h3 mt-5 d-flex centro">Vínculo a una página Web existente.</p>
                      <div class="mt-5 d-flex ">
                                        <img src="{{ asset('/images/basic-icons/link.svg') }}" alt="logo-link"
                                            class="mr-3">
                                        <input type="text" name="links" id="link-logo-canal-claro"
                                            class="urls a-text-bold-warm text-normal url-container" placeholder=" Enlace o URL" >

                                    </div>
                </div>

                <div class="text-center  mb-4 d-flex justify-content-center pb-2 mt-4">
                            <button
                                class="d-flex m-0  mr-3  btn-grilla a-btn-basic-small a-btn-basic-small text-uppercase a-text-MBlack text-plus"
                                id="" data-dismiss="modal">ACEPTAR</button>
                            <a href="#delete-info" role="button"
                                class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel"
                                data-toggle="modal">CANCELAR</a>

                        </div>
            </div>
        </div>
    </div>



 <!--modal para perder lo hecho en los landing de edit-->
 <div class=" modal  delete-info-promo" data-backdrop-limit="1" id="delete-info-promo" tabindex="-1" role="dialog"
        data-modal-parent="#modalpromos">
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

