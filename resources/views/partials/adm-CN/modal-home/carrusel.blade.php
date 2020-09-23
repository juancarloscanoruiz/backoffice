<div id="modal-carrusel-home" class="modal modal-edit-program-carrusel" style="overflow: auto;">
    <div class="modal-dialog-centered modal-dialog max-width-modal-xl">
        <div class="modal-content modal-carrusel-home">
            <!-- TEXTO -->
            <p class="text-normal d-flex text-center a-text-black-brown-two">CARGAR IMÁGENES EN FORMATO JPG</p>
            <h2 class="h2 text-center a-text-black-brown-two pt-2 text-uppercase ">HOME - <span class="changelanding text-uppercase">CANAL CLARO</span> - CARRUSEL PROMO</h2>
            <hr class="hr">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 mx-auto">
                        <div class="row">
                            <div class="col-12 p-0">
                                <!-- DOCTS -->
                                <div class="float-right">
                                    <div class="d-flex">
                                        <div class="position-relative slaider-docts slaider-home-dots carrusel1-slider-dots1 my-3"></div>
                                        <!-- <img src="{{ asset('images/add-icon.svg') }}" class="add-programming-image mb-3 cursor-pointer"> -->
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 p-0 mb-5">
                                <!--Estado y alertas del programa-->
                                <section class="d-flex justify-content-between">
                                    <div class="col-5">
                                        <h3 class="h3 a-text-semibold-warmgrey text-uppercase mb-4">Estado</h3>
                                        <div class="state-container py-2 d-flex align-items-center justify-content-center">
                                            <img src="{{ asset('/images/basic-icons/pencil-edit-teal.svg') }}" alt="">
                                            <p class="mb-0 ml-3 a-text-bold-teal">En edición</p>
                                        </div>
                                    </div>
                                    <div class="col-5">
                                        <h3 class="h3 a-text-semibold-warmgrey text-uppercase mb-4">Alerta</h3>
                                        <div class="py-2 alert-container d-flex align-items-center justify-content-center">
                                            <img src="{{ asset('/images/basic-icons/warning-orange-icon.svg') }}" alt="">
                                            <p class="mb-0 ml-3 a-text-bold-orange">Proporcionar información</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div class="col-12">
                                <!-- CLASE QUE AL CUAL ESTA CONECTADO LA FUNCION DE GET -->
                                <div class="row carrusel-home-obj">
                                    <div class="col-8">
                                        <div class="row">
                                            <!--Landing-->
                                            <div class="col-6 edit-program-data-container">
                                                <div class="edit-data-container">
                                                    <p class="mb-3 text-plus text-plus text-uppercase a-text-bold-coolgray float-left">Estableceren landing</p>
                                                    <!--Switch-->
                                                    <div class="d-flex align-items-center mb-3 pl-5">
                                                        <input type="radio" id="yes-landing-carrusel1" value="3" class="edit-switch-landing edit-landing-yes" />
                                                        <label for="yes-landing-carrusel1" id="siestado-landing" class="mb-0 si-estilo cursor-pointer switch-label">Sí</label>
                                                        <input type="radio" id="no-landing-carrusel1" value="0" class="edit-switch-landing switch-table-edit edit-landing-no" checked />
                                                        <label for="no-landing-carrusel1" id="noestado-landing" class="mb-0 no-estilo cursor-pointer switch-label">No</label>
                                                    </div>
                                                    <!--Inputs radio-->
                                                    <div class="d-flex align-items-center mb-3">
                                                        <span class="a-text-bold-silver cursor-pointer ml-2 text-uppercase">Carrusel 1</span>
                                                    </div>
                                                    <div>
                                                        <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Fecha</p>
                                                        <div class="row">
                                                            <div class="col-6 mb-4">
                                                                <div class="text-center edit-rectangle-max-container py-2 d-flex align-content-center justify-content-center">
                                                                    <p class="text-small-rectangle a-text-bold-warm">Inicio</p>
                                                                    <img src="./images/calendario.svg" alt="" class="mr-3">
                                                                    <span class="a-text-bold-warm mt-3">
                                                                        <input key="" type=" text" class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date" placeholder="00-00-0000"></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-6">
                                                                <div class="text-center edit-rectangle-max-container py-2 d-flex align-content-center justify-content-center">
                                                                    <p class="text-small-rectangle a-text-bold-warm">Fin</p>
                                                                    <img src="./images/calendario.svg" alt="" class="mr-3">
                                                                    <span class="a-text-bold-warm mt-3">
                                                                        <input key="" type=" text" class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date" placeholder="00-00-0000"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                                                        <div class="row">
                                                            <div class="col-6">
                                                                <div class="text-center edit-rectangle-max-container py-2 d-flex align-content-center justify-content-center">
                                                                    <p class="text-small-rectangle a-text-bold-warm">Fin</p>
                                                                    <img src="./images/reloj.svg" alt="" class="mr-3">
                                                                    <span class="a-text-bold-warm mt-3">
                                                                        <input key="" type="text" class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date" placeholder="00:00:00"></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-6">
                                                                <div class="text-center edit-rectangle-max-container py-2 d-flex align-content-center justify-content-center">
                                                                    <p class="text-small-rectangle a-text-bold-warm">Fin</p>
                                                                    <img src="./images/reloj.svg" alt="" class="mr-3">
                                                                    <span class="a-text-bold-warm mt-3">
                                                                        <input key="" type="text" class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date" placeholder="00:00:00"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- DATA TIME -->
                                            <div class="col-6 edit-program-data-container">
                                                <div class="edit-data-container">
                                                    <p class="text-plus text-plus text-uppercase a-text-bold-coolgray" style="margin-bottom: 72px;">Schedule Item Date time</p>
                                                    <div class="row">
                                                        <div class="col-6 mb-4">
                                                            <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Fecha</p>
                                                            <div class="text-center edit-rectangle-max-container py-2 d-flex align-content-center justify-content-center" style="margin-bottom: 99px">
                                                                <img src="./images/calendario.svg" alt="" class="mr-3">
                                                                <span class="a-text-bold-warm mt-2">
                                                                    <input key="" type=" text" class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date" placeholder="00-00-0000"></span>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                                                            <div class="text-center edit-rectangle-max-container d-flex align-content-center justify-content-center py-2">
                                                                <img src="./images/reloj.svg" alt="" class="mr-3">
                                                                <span class="a-text-bold-warm mt-2"><input type="text" class="time-seconds-input input-basic edit-program-input a-text-bold-warm edit-schedule-item-time text-uppercase" placeholder="00:00:00"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!--Home-->
                                            <div class="col-6 edit-program-data-container mt-3">
                                                <div class="edit-data-container">
                                                    <p class="mb-3 text-plus text-plus text-uppercase a-text-bold-coolgray float-left">Establecer en home</p>
                                                    <!--Switch-->
                                                    <div class="d-flex align-items-center pl-5">
                                                        <input type="radio" id="edit-in-home-yes" value="1" class="edit-switch-home edit-program-switch edit-in-home-yes" key="in_home" />
                                                        <label for="edit-in-home-yes" id="siestado-landing" class="si-estilo cursor-pointer mb-0 switch-label">Sí</label>
                                                        <input type="radio" id="edit-in-home-no" value="0" checked class="edit-switch-home edit-program-switch edit-in-home-no" key="in_home" />
                                                        <label for="edit-in-home-no" id="noestado-landing" class="mb-0 no-estilo cursor-pointer switch-label">No</label>
                                                    </div>
                                                    <div>
                                                        <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Fecha</p>
                                                        <div class="row">
                                                            <div class="col-6 mb-4">
                                                                <div class="text-center edit-rectangle-max-container py-2 d-flex align-content-center justify-content-center">
                                                                    <p class="text-small-rectangle a-text-bold-warm">Inicio</p>
                                                                    <img src="./images/calendario.svg" alt="" class="mr-3">
                                                                    <span class="a-text-bold-warm mt-3">
                                                                        <input key="" type=" text" class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date" placeholder="00-00-0000"></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-6">
                                                                <div class="text-center edit-rectangle-max-container py-2 d-flex align-content-center justify-content-center">
                                                                    <p class="text-small-rectangle a-text-bold-warm">Fin</p>
                                                                    <img src="./images/calendario.svg" alt="" class="mr-3">
                                                                    <span class="a-text-bold-warm mt-3">
                                                                        <input key="" type=" text" class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date" placeholder="00-00-0000"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                                                        <div class="row">
                                                            <div class="col-6">
                                                                <div class="text-center edit-rectangle-max-container py-2 d-flex align-content-center justify-content-center">
                                                                    <p class="text-small-rectangle a-text-bold-warm">Fin</p>
                                                                    <img src="./images/reloj.svg" alt="" class="mr-3">
                                                                    <span class="a-text-bold-warm mt-3">
                                                                        <input key="" type="text" class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date" placeholder="00:00:00"></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-6">
                                                                <div class="text-center edit-rectangle-max-container py-2 d-flex align-content-center justify-content-center">
                                                                    <p class="text-small-rectangle a-text-bold-warm">Fin</p>
                                                                    <img src="./images/reloj.svg" alt="" class="mr-3">
                                                                    <span class="a-text-bold-warm mt-3">
                                                                        <input key="" type="text" class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date" placeholder="00:00:00"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- UNICOS Y DIFERENTES -->
                                            <div class="col-6 mt-3">
                                                <div class="edit-data-container d-flex justify-content-between m-schedule">
                                                    <p class="mb-0 text-plus text-uppercase a-text-bold-brown-two">Schedule version <br> subbed</p>
                                                    <div class="d-flex">
                                                        <input type="radio" id="yes-subbed" value="1" class="edit-program-switch switch-landing edit-subbed-yes" key="subbed" />
                                                        <label for="yes-subbed" id="siestado-landing" class="si-estilo cursor-pointer mb-0 switch-label">Sí</label>
                                                        <input type="radio" id="no-dubbed" value="0" checked class="edit-program-switch switch-landing switch-table-edit edit-subbed-no" key="subbed" />
                                                        <label for="no-dubbed" id="noestado-landing" class="mb-0 no-estilo cursor-pointer switch-label">No</label>
                                                    </div>
                                                </div>
                                                <div class="edit-data-container d-flex justify-content-between m-schedule">
                                                    <p class="mb-0 text-plus text-uppercase a-text-bold-brown-two">Schedule version <br> dubbed
                                                    </p>
                                                    <div class="d-flex">
                                                        <input type="radio" id="yes-dubbed" value="1" class="edit-program-switch switch-landing edit-dubbed-yes" key="dubbed" />
                                                        <label for="yes-dubbed" id="siestado-landing" class="si-estilo cursor-pointer mb-0 switch-label">Sí</label>
                                                        <input type="radio" id="no-dubbed" value="0" checked class="edit-program-switch switch-landing switch-table-edit edit-dubbed-no" key="dubbed" />
                                                        <label for="no-dubbed" id="noestado-landing" class="mb-0 no-estilo cursor-pointer switch-label">No</label>
                                                    </div>
                                                </div>
                                                <div class="edit-data-container d-flex justify-content-between">
                                                    <p class="mb-0 text-plus text-uppercase a-text-bold-brown-two">Audio 5.1 available</p>
                                                    <div class="d-flex">
                                                        <input type="radio" id="yes-audio5" value="1" class="edit-program-switch switch-landing edit-audio5-yes" key="audio5" />
                                                        <label for="yes-audio5" id="siestado-landing" class="si-estilo cursor-pointer mb-0 switch-label">Sí</label>
                                                        <input type="radio" id="no-audio5" value="0" checked class="edit-program-switch switch-landing switch-table-edit edit-audio5-no" key="audio5" />
                                                        <label for="no-audio5" id="noestado-landing" class="mb-0 no-estilo cursor-pointer switch-label">No</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- UNICOS Y DIFERENTES -->
                                        </div>
                                    </div>
                                    <div class="col-4 p-0" id="img_carrusel_home">
                                        <div>
                                            <!-- IMG -->
                                            <div class="position-relative text-center">
                                                <img class="img-back-modal img-carrusel-home" id="img-carrusel-home" src="images/modals/back-large.svg">
                                            </div>
                                            <!-- BTN ICONOS -->
                                            <div class="modal-img-carrusel">
                                                <!-- INPUTS -->
                                                <input class="d-none" id="img_carrusel" name="img-carrusel" type="file">
                                                <!-- LABEL -->
                                                <label for="img_carrusel" class="add-file load-programming-carousel">
                                                    <img id="camera" class="cursor-pointer mb-2" src="./images/basic-icons/camara.svg" alt="add-photo" />
                                                    <br>
                                                    <p class="a-text-bold-warm text-plus">472px X 295px</p>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- NOMBRE DE LA IMAGEN -->
                                    <div class="offset-8 col-4 p-0">
                                        <span class="a-text-bold-brown-two text-plus my-4 d-block">NombreDeLaImagen_Home_Vertical_20200709.jpg</span>
                                    </div>
                                    <!-- SINOPSIS -->
                                    <div class="col-12">
                                        <section class="mb-5 edit-program-data-container">
                                            <h3 class="h3 text-uppercase a-text-bold-brown-two mb-3">Sinopsis</h3>
                                            <!--Textarea-->
                                            <textarea key="synopsis" class="edit-synopsis edit-program-textarea edit-program-attribute-text a-text-semibold-warmgrey p-3" id="prog_sinopsis"></textarea>
                                        </section>
                                    </div>
                                    <div class="col-12">
                                        <div class="row">
                                            <!--Program episode season-->
                                            <div class="col-4 edit-program-data-container">
                                                <div class="edit-data-container">
                                                    <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program episode season</p>
                                                    <div class="mb-3 text-center edit-rectangle-small-container  backwhite py-3">
                                                        <input type="text" key="season" class="edit-program-season text-center input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase" placeholder="00">
                                                    </div>
                                                </div>
                                            </div>
                                            <!--Program episode number-->
                                            <div class="col-4 edit-program-data-container">
                                                <div class="edit-data-container">
                                                    <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program episode number</p>
                                                    <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                                                        <input type="text" key="program_episode_number" class="text-center edit-episode-number input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase" placeholder="000">
                                                    </div>
                                                </div>
                                            </div>
                                            <!--Program year produced-->
                                            <div class="col-4 edit-program-data-container">
                                                <div class="edit-data-container">
                                                    <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program year produced</p>
                                                    <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                                                        <input type="text" key="program_year_produced" class="year-input text-center edit-year-produced input-basic edit-program-attribute-text edit-program-input a-text-bold-warm text-uppercase" placeholder="YYYY">
                                                    </div>
                                                </div>
                                            </div>
                                            <!--Program title alternate-->
                                            <div class="col-4 edit-program-data-container mt-3">
                                                <div class="edit-data-container">
                                                    <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program title alternate</p>
                                                    <div class="mb-3 edit-rectangle-container p-3">
                                                        <input type="text" key="subtitle" class="w-100 edit-program-subtitle input-basic edit-program-input edit-program-attribute-text a-text-bold-warm" placeholder="Program Title Alternate">
                                                    </div>
                                                </div>
                                            </div>
                                            <!--Program genre list-->
                                            <div class="col-4 edit-program-data-container position-relative mt-3" id="edit-genre-container">
                                                <div class="edit-data-container">
                                                    <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program genre list</p>
                                                    <div class="mb-3 edit-rectangle-container ">
                                                        <select class="list1 mb-0 a-text-regular-brownishtwo text-normal  input-basic show-tick" id="edit-program-genres" title="Genere list" multiple data-live-search="true" data-live-search-placeholder="Buscar" data-header="Program List" data-dropup-auto="false" key="genre">
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- CODE -->
                                            <div class="col-4 edit-program-data-container mt-3">
                                                <div class="edit-data-container">
                                                    <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule item rating code</p>
                                                    <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                                                        <input type="text" key="rating" class="text-center edit-program-attribute-text input-basic edit-program-input a-text-bold-warm text-uppercase edit-rating-code" placeholder="PG-00">
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- DATE -->
                                            <div class="col-4 edit-program-data-container mt-3">
                                                <div class="edit-data-container d-flex flex-column justify-content-between h-100">
                                                    <p class="text-plus text-uppercase a-text-bold-brown-two">Schedule item log date</p>
                                                    <p class="a-text-medium-brown-two text-plus text-uppercase">Fecha</p>
                                                    <div class="mb-3 text-center edit-rectangle-small-container  backwhite py-3 d-flex align-items-center justify-content-center">
                                                        <img src="{{ asset('images/calendario.svg') }}" alt="" class="mr-3">
                                                        <input type="text" key="day" class="edit-schedule-date edit-program-attribute-text schedule-date-input input-basic edit-program-input a-text-bold-warm text-uppercase" placeholder="DD:MM:YY">
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- GMT -->
                                            <div class="col-4 edit-program-data-container mt-3">
                                                <div class="edit-data-container h-100 d-flex flex-column justify-content-between">
                                                    <p class="text-plus text-uppercase a-text-bold-brown-two pb-4">Schedule item log time (gmt)</p>
                                                    <p class="a-text-medium-brown-two text-plus text-uppercase ">HORA</p>
                                                    <div class="mb-3 text-center edit-rectangle-small-container  backwhite py-3 d-flex align-items-center justify-content-center">
                                                        <img src="{{ asset('images/reloj.svg') }}" alt="" class="mr-3">
                                                        <input type="text" key="programing" class="edit-schedule-item-time edit-program-attribute-text time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase" placeholder="00:00:00">
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- DURATION -->
                                            <div class="col-4 edit-program-data-container mt-3">
                                                <div class="edit-data-container d-flex flex-column justify-content-between h-100">
                                                    <p class=" text-plus text-uppercase a-text-bold-brown-two">estimated schedule item duration</p>
                                                    <p class="a-text-medium-brown-two text-plus text-uppercase ">HORA</p>
                                                    <div class="mb-3 text-center edit-rectangle-small-container  backwhite py-3 d-flex align-items-center justify-content-center">
                                                        <img src="{{ asset('images/reloj.svg') }}" alt="" class="mr-3">
                                                        <input type="text" key="duration" class="edit-program-duration edit-program-attribute-text time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase" placeholder="00:00:00">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- BOTONES -->
            <div class="content my-4">
                <div class="d-flex justify-content-center">
                    <button data-dismiss="modal" id="acepta_carrusel_home" class="m-0 mr-4 btn-grilla a-btn-basic-small text-plus a-text-MBlack modal-edit-program-carrusel acepta_carrusel_home">ACEPTAR</button>
                    <!-- <a href="#delete-info" role="button" class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel" data-toggle="modal">CANCELAR</a> -->
                </div>
            </div>
        </div>
    </div>
</div>