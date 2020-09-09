<div class="modal modal-image-synopsis p-0 m-0" tabindex="-1" role="dialog" id="">
    <div class="modal-dialog modal-lg modal-dialog-centered " role="document">
        <div class="modal-content  align-item-center centro w-100">
            <div class="modal-body ">

                <p class="text-normal d-flex ml-3 text-center a-text-black-brown-two pt-3">CARGAR IMÁGENES EN FORMATO
                    JPG </p>
                <h2 class="h2 text-center a-text-black-brown-two pt-3">IMAGEN </h2>
                <hr class="d-flex align-content-center separationhr col-11 mt-3 mb-0">
                <div class="container-image-synopsis p-3 justify-content-center d-flex align-content-center mt-4 align-items-center mx-auto container-image" >
                    <div
                        class="justify-content-around position-absolute d-flex  align-items-center">                 
                        <input type="file" name="" id="image-synopsis" class="d-none">
                        <label for="image-synopsis"
                            class="mb-0 cursor-pointer  d-flex justify-content-center align-items-center h-100 mb-3 flex-column load-modales">
                            <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                                class="add-photo promo-icon cursor-pointer" style="width:95px" />
                            <span class="a-text-bold-warm text-plus p-2 pr-3 pl-3 mr-4 white-shadow">Añade tu archivo
                                jpg 472px X 295px </span>
                        </label>                    
                    </div>

                    <div class="position-relative " id="">
                    <img src="{{ asset('/images/synopsis/image-synopsis.svg') }}" alt="add-photo"/>
                    </div>

                </div>
                <div class="ml-5 pl-5 mt-3" style="text-align:initial;">
                    <span
                        class="a-text-bold-brown-two text-normal">Nombre_Sinópsis_CanalClaro_20200709.jpg</span><br>
                   
                </div>
                <div class="text-center  mb-4 d-flex justify-content-center pb-2 mt-4">
                    <button
                        class="d-flex m-0  mr-3  btn-landing disabled-btn  a-btn-basic-small text-uppercase text-plus a-text-bold-teal edit-landing-modal-button"
                        id="upload-image-synopsis">ACEPTAR</button>
                    <a href="#delete-image-sinopsis" role="button"
                        class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel"
                        data-toggle="modal">CANCELAR</a>
                </div>
            </div>
        </div>
    </div>
</div>



<!--modal para perder lo hecho en los landing de edit-->
<div class=" modal  delete-image-sinopsis" data-backdrop-limit="1" id="delete-image-sinopsis" tabindex="-1" role="dialog"
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
                    data-dismiss="modal" data-dismiss="modal" data-dismiss="modal"
                    id="close_modals-sinopsis">ACEPTAR</button>

                <button type="button" class="a-btn-basic-small a-btn-tomato  a-text-MBlack  text-normal"
                    data-dismiss="modal" data-dismiss="modal" aria-hidden="true">CANCELAR</button>
            </div>
        </div>
    </div>
</div>
