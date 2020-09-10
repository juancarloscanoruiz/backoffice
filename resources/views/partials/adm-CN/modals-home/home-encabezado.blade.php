<div class="modal modal-home-encabezado p-0 m-0" tabindex="-1" role="dialog" id="">
    <div class="modal-dialog modal-lg modal-dialog-centered " role="document" style="max-width: 1350px;">
        <div class="modal-content  align-item-center centro " >
            <div class="modal-body ">

                <p class="text-normal d-flex ml-3 text-center a-text-black-brown-two pt-3">CARGAR IMÁGENES EN FORMATO
                    JPG O VIDEOS  MP4 </p>
                <h2 class="h2 text-center a-text-black-brown-two pt-3">HOME - ENCABEZADO </h2>
                <hr class="d-flex align-content-center separationhr col-11 mt-3 mb-0">

                <!--Calendar-->
                <div class="col-12 mx-auto">
                <div class="d-flex align-items-center float-right mt-4 mb-4 mr-4">
                            <div>
                                <h3 class="text-uppercase h3 a-text-black-brown-two">Vigencia</h3>
                            </div>

                            <input type="text" id="programming-carrusel-calendar " class="d-none">
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
              <div class="clearfix"></div>

                        <!-- parte del home-->
                        <div class="d-flex justify-content-around col-11 mx-auto">
                        <div class="mr-5">
                        <img src="./images/home/claro-logo.svg" class="d-flex mb-2 ml-4">
                        <!--navbar-->
                        <div class="claro-navbar d-flex ml-3 mt-0 claro-navbar-black">
        <div>
            <a href="" class="navbar-link text-decoration-none">
                <p class="navbar-item-black text-semibold">Canal Claro</p>
            </a>
        </div>
        <div>
            <a href="" class="navbar-link text-decoration-none">
                <p class="navbar-item-black text-semibold">Concert Channel</p>
            </a>
        </div>
        <div>
            <a href="" class="navbar-link text-decoration-none">
                <p class="navbar-item-black text-semibold">Claro Cinema</p>
            </a>
        </div>
        <div>
            <a target="_blank" href="" class="navbar-link text-decoration-none">
                <p class="navbar-item-black text-semibold">Nuestra Visión</p>
            </a>
        </div>
        <div>
            <a href="" target="_blank" class="navbar-link text-decoration-none">
                <p class="navbar-item-black text-semibold">Claro Sports</p>
            </a>
        </div>
        <!-- <div>
      <a href="programacion.php" class="navbar-link text-decoration-none">
        <p class="navbar-item">Programación</p>
      </a>
    </div>-->
    </div>

                        <!--inputs-->
                        <input type="text" name="" id="" class="input-title-home a-text-black-teal title-home text-uppercase pl-4  mt-6 title-home-enca border-none opa-holder ml-3" placeholder="TITULO">
                        <input type="text" name="" id="" class="input-subtitle-home a-text-black-blacktwo title-home text-uppercase pl-4 subtitle-home-enca border-none opa-holder mt-2 ml-3" placeholder="SUBTITULO">

                        </div>
                        <div class="float-right  d-flex ">
                        <input type="file" name="" id="image-promo-concert" class="d-none">
                       <!-- <label for="image-promo-concert"
                            class="mb-0 cursor-pointer  d-flex justify-content-center align-items-center h-100 mb-3 flex-column load-modales">
                            <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                                class="add-photo promo-icon cursor-pointer" style="width:95px" />                        
                            <span class="a-text-bold-warm text-plus p-2 pr-3 pl-3 mr-4 white-shadow">Añade tu archivo
                                jpg 472px X 295px </span>-->
                                <img src="./images/synopsis/home-video.svg" class="">
                        </label>
                        <input type="file" name="" id="video-home" class="d-none file-video"
                            accept="video/*">
                        <label for="video-home"
                            class="mb-0 cursor-pointer circle-video d-flex justify-content-center align-items-center h-100 flex-column load-modales">
                            <img src="{{ asset('/images/basic-icons/video.svg') }}" alt="add-photo"
                                class="add-photo promo-icon cursor-pointer" />
                            <span class="a-text-bold-warm text-plus p-2 pr-3 pl-3 mr-4 white-shadow mt-3">Añade tu
                                archivo mp4 472px X 295px </span>
                        </label>
                        </div>
                        
                        <div class="clearfix"></div>

                        </div>
                        </div>
                    
       <div class="text-center  mb-4 d-flex justify-content-center pb-2">
                            <button
                                class="d-flex m-0  mr-3  btn-landing disabled-btn a-btn-basic-small  text-uppercase a-text-bold-teal text-plus edit-landing-modal-button"
                                id="edit-logos-button" data-dismiss="modal">ACEPTAR</button>
                            <a href="#delete-info-synopsis" role="button"
                                class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel"
                                data-toggle="modal">CANCELAR</a>

                        </div>
      </div>
      
    </div>
  </div>
</div>