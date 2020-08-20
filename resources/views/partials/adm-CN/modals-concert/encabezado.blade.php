@extends('layaout.app')


<div class="modal" tabindex="-1" role="dialog"style="    display: contents;">
  <div class="modal-dialog modal-lg modal-dialog-centered " role="document" style="max-width:1000px;     transform: translate(-50px);">
    <div class="modal-content align-item-center centro w-100" >
     
      <div class="modal-body">

      <p class="text-normal d-flex ml-3 text-center a-text-black-brown-two pt-3">CARGAR IMÁGENES EN FORMATO PNG</p>
         <h2 class="h2 text-center a-text-black-brown-two pt-3">ENCABEZADO </h2>
         <hr class="d-flex align-content-center separationhr col-11 mt-3 mb-0">
         <div class="container-promo mt-4">
             <div class="justify-content-around">
             <div class="d-flex p-4 position-relative logo-lading-container mb-3">
                                    <div class="bor mx-auto position-relative thumbnail-image-program"
                                        id="thumbnail-home-horizontal">
                                        <input type="file" name="image-icon1" id="image-icon1"
                                            class="input-image-program logo-landing d-none">
                                        <label for="image-icon1"
                                            class="mb-0 cursor-pointer  d-flex justify-content-center align-items-center h-100 flex-column load-modales">
                                            <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                                                class="add-photo " style="z-index:10000" />
                                            <span class="a-text-bold-warm text-plus p-2 pr-3 pl-3  white-shadow"
                                                style="z-index:10000">472px X
                                                295px</span>
                                            <img src="{{ asset('/images/synopsis/image-synopsis-horizontal.png') }}"
                                                class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program"
                                                id="icon_canal_claro_edit" />
                                        </label>
                                    </div>
                 
                 <input type="text" name="links" id="hoy-channel"
                                            class="url-input container-promo text-normal ml-3 a-text-bold-white hoy-en" placeholder=" HOY EN" >

                 <input type="text" name="links" id="concert-link"
                                            class="url-input container-promo text-normal a-text-bold-bright-cyan ml-3 concert-input mr-3" placeholder=" CONCERT CHANNEL" >
                                        <div>
                                            <button class="a-btn-basic-medium a-btn-pink a-text-MBlack">VER PROGRAMACIÓN</button>
                                            <div class="d-flex mt-5 position-absolute mr-4"style="right:0">
                                            <img src="{{ asset('/images/basic-icons/link.svg') }}" alt="logo-link"
                                            class="mr-3">
                                            <a href="#url-promo" role="button"
                                
                                data-toggle="modal">  
                                        <input type="text" name="links" id="link-logo-canal-claro"
                                            class="urls a-text-bold-warm text-normal " placeholder=" Enlace o URL" ></a>
                                            </div>
                                            </div>




             </div>


         </div>
         </div>
         <div class="text-center  mb-3 d-flex justify-content-center pb-2 mt-4">
                            <button
                                class="d-flex m-0  mr-3  btn-grilla a-btn-basic-small a-btn-basic-small text-uppercase a-text-MBlack text-plus edit-landing-modal-button"
                                id="edit-logos-button" data-dismiss="modal">ACEPTAR</button>
                            <a href="#delete-info" role="button"
                                class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel"
                                data-toggle="modal">CANCELAR</a>

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

