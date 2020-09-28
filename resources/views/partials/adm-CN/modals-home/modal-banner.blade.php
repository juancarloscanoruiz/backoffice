@extends('layaout.app')

@section('content')
<div class="modal modal-home-encabezado p-0 m-0" tabindex="-1" role="dialog" id="">
    <div class="modal-dialog modal-lg modal-dialog-centered " role="document" style=" max-width: 1178px;">
        <div class="modal-content  align-item-center centro " >
            <div class="modal-body ">

                <p class="text-normal d-flex ml-3 text-center a-text-black-brown-two pt-3">CARGAR IMÁGENES EN FORMATO
                    JPG O VIDEOS  MP4 </p>
                <h2 class="h2 text-center a-text-black-brown-two pt-3">HOME - ENCABEZADO </h2>
                <hr class="d-flex align-content-center separationhr col-11 mt-3 mb-0">

            

                 <!--Calendar-->
                 <div class="col-12 mx-auto">
                
                <div class="d-flex align-items-center justify-content-around  mt-4 mb-4 mr-4">
                <div class="d-flex">
                 <form action="" name="bannermovil" id="bannermovil" class="">
                    <div class=" d-flex prev text-small a-text-medium-brownish location mt-2">
                        <input type="radio" name="pc" id="pc" checked />
                        <label for="pc" id="pc" class="mujer-estilo d-flex align-items-center pl-4 pt-3">
                            <p class=" a-prev-title">PC</p>
                        </label>
                        <input type="radio" name="pc" id="movil" />
                        <label for="movil" id="movil" class="hombre-estilo pl-2 pt-3">
                            <p class=" a-prev-title ">MÓVIL</p>
                        </label>
                    </div>
                </form>
                </div>

                <div class="d-flex">
                        <div>
                            <h3 class="text-uppercase h3 a-text-black-brown-two">Vigencia</h3>
                        </div>

                        <input type="text" id="programming-carrusel-calendar" class="d-none">
                        <label for="programming-carrusel-calendar" class="ml-4 mb-0 date-button date-start-table d-flex align-items-center  pl-3 pr-3" id="date-start-table">
                            <img src="./images/calendario.svg" alt="">
                            <div class="ml-3">
                                <p class="text-small d-block mb-0 a-text-semibold-warmgrey">Inicio</p>
                                <p class="text-normal mb-0 a-text-bold-charcoal" id="start-date-text">DD-MM-YYYY</p>
                            </div>
                        </label>

                        <!--Fecha de fin de calendario-->
                        <label for="programming-carrusel-calendar" class="mb-0 ml-4 date-button date-end-table d-flex align-items-center pl-3 pr-3">
                            <img src="./images/calendario.svg" alt="">
                            <div class="ml-3">
                                <p class="text-small d-block mb-0 a-text-semibold-warmgrey">Fin</p>
                                <p class="text-normal mb-0 a-text-bold-charcoal" id="end-date-text">DD-MM-YYYY</p>
                            </div>
                        </label>
                    </div>
</div>
<div class="pc">
                        <!-- parte del home-->
                        <div class="d-flex col-12 mb-5 mx-auto">
                        <div class="mr-5 mx-auto">
                        <div class="d-flex">
                        <!--dots-->
                        <div class="programming-slider-dots-home mt-5 mb-5"></div>
                        <!--add slide-->
                        <img src="{{ asset('images/add-icon.svg') }}" class="add-banner-image cursor-pointer mb-3">
                    </div>
                  <!--  <div class="shadowblack position-absolute">
                        <img src="./images/basic-icons/GMT-White.svg" alt="" class="float-right">
                        </div>-->
                    <div class="programming-slider-home mx-auto ">
                       
                    <div class="bor thumbnail-image-program position-relative h-100">
                        <input type="file" name="image_programming[]" id="image_programming_1" class="input-image-program d-none image_programming " data-index="1">
                        <label for="image_programming_1" class="h-100 mb-0 d-flex justify-content-center  align-items-center flex-column   load-programming-carousel">
                            <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo" class=" cursor-pointer add-photo " />
                            <span class="a-text-bold-warm text-plus mt-3 banner-text"> 472px X 295px </span>
                            <img src="{{ asset('/images/synopsis/image-synopsis-carrusel.jpg') }}" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                        </label>
                    </div>

                    <div class="bor thumbnail-image-program position-relative h-100">
                        <input type="file" name="image_programming[]" id="image_programming_1" class="input-image-program d-none image_programming " data-index="1">
                        <label for="image_programming_1" class="h-100 mb-0 d-flex justify-content-center  align-items-center flex-column   load-programming-carousel">
                            <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo" class=" cursor-pointer add-photo " />
                            <span class="a-text-bold-warm text-plus mt-3 banner-text">472px X 295px </span>
                            <img src="{{ asset('/images/synopsis/image-synopsis-carrusel.jpg') }}" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                        </label>
                    </div>

                    <div class="bor thumbnail-image-program position-relative h-100">
                        <input type="file" name="image_programming[]" id="image_programming_1" class="input-image-program d-none image_programming " data-index="1">
                        <label for="image_programming_1" class="h-100 mb-0 d-flex justify-content-center  align-items-center flex-column   load-programming-carousel">
                            <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo" class=" cursor-pointer add-photo " />
                            <span class="a-text-bold-warm text-plus mt-3 banner-text">472px X 295px </span>
                            <img src="{{ asset('/images/synopsis/image-synopsis-carrusel.jpg') }}" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                        </label>
                    </div>

                    <div class="bor thumbnail-image-program position-relative h-100">
                        <input type="file" name="image_programming[]" id="image_programming_1" class="input-image-program d-none image_programming " data-index="1">
                        <label for="image_programming_1" class="h-100 mb-0 d-flex justify-content-center  align-items-center flex-column   load-programming-carousel">
                            <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo" class=" cursor-pointer add-photo " />
                            <span class="a-text-bold-warm text-plus mt-3 banner-text">472px X 295px </span>
                            <img src="{{ asset('/images/synopsis/image-synopsis-carrusel.jpg') }}" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                        </label>
                        
                    </div>
                    </div>
                   
                      
                        
                       
                        </div>
                        </div>
                        <div class="d-flex mr-5 mb-3">
                        <span
                        class="a-text-bold-brown-two text-normal">Nombre_Promoción_ConcertChannel_20200709.mp4</span>
                        </div>
                        <div class="clearfix"></div>

       <div class="text-center  mb-4 d-flex justify-content-center pb-2">
                            <button
                                class="d-flex m-0  mr-3  btn-grilla a-btn-basic-small  text-uppercase a-text-MBlack text-plus edit-landing-modal-button"
                                id="edit-home-encabezado" data-dismiss="modal">ACEPTAR</button>
                            <a href="#delete-info-encabezado-home" role="button"
                                class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel"
                                data-toggle="modal">CANCELAR</a>

                        </div>
      </div>
      </div>
    </div>
  </div>
</div>


<!--modal para perder lo hecho en los landing de edit-->
<div class="modal delete-info-encabezado-home" data-backdrop-limit="1" id="delete-info-encabezado-home" tabindex="-1" role="dialog"
    data-modal-parent="#delete-concert-button">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content  ">
            <div class="modal-body ">
                <img src="images/basic-icons/delete.svg" alt="advertencia de borrado" class="mx-auto d-flex mt-5 ">
                <p class="a-text-medium-warm-grey-three h3 mt-5 centro">¿Deseas abandonar la edición?</p>
                <p class="a-text-medium-warm-grey-three h3 mt-4 centro">Perderás los cambios.</p>
            </div>

            <div class="text-center mb-5 mt-4 pt-3 pb-4">
                <button type="button"
                    class="a-btn-basic-small a-btn-border-tomato mr-3 a-text-bold-tomato h1 close-modal-concert">ACEPTAR</button>

                <button type="button" class="a-btn-basic-small a-btn-tomato  a-text-MBlack  h1"
                    data-dismiss="modal" data-dismiss="modal" aria-hidden="true">CANCELAR</button>
            </div>
        </div>
    </div>
</div>