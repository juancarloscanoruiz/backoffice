<div class="modal pr-0 fade modal-edit-program-carrusel2 " id="modaledicarrusel" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLongTitle" aria-hidden="true" style="overflow: auto;">
    <div class="modal-dialog modal-dialog-centered m-0" role="document" style="max-width: 100%">
        <div class="modal-content">
            <div class="modal-body ">
                <h2 class="edit-program-modal-title h2 text-center a-text-black-brown-two pt-5">PROGRAMACIÓN PRINCIPAL -
                    CARRUSEL 2</h2>
                <hr class="d-flex align-content-center separationhr col-11 mt-3 mb-0">

                <div class="col-11 mx-auto">
                    <div class="float-right">
                        <div class="d-flex pl-5 ">
                            <div class=" position-relative carrusel2-slider-dots1 mt-4 mb-4"> </div>
                            <img src="{{ asset('images/add-icon.svg') }}"
                                class="add-programming-image mb-3  cursor-pointer">
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <!--Estado y alertas del programa-->
                    <section class="mt-4 d-flex justify-content-between">
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

                    <div class="edit-info-container mt-5">
                        <!--Imagen de programa en slider-->
                        <div class="current-slide-container a-text-bold-teal mb-2">
                            <p class="mb-0 a-text-bold-teal current-slide-number">1</p>
                        </div>
                        <!--sliderparacarrusel-->
                        <div class="carrusel2-slider">
                            <div>

                                <section class="edit-program-image">
                                    <select
                                        class="thumbnail-header1 thumbnail-header thumbnail-header-claro w-100 a-text-MBlack h2 d-flex align-items-center justify-content-between position-relative programs-catalogue"
                                        title="TÍTULO DEL PROGRAMA" id="prog_titulo_programa" data-live-search="true"
                                        data-live-search-placeholder="Agregar título de nuevo programa"
                                        name="thumbnail-header1" key="title">
                                    </select>
                                    <!--Imagen del programa--->
                                    <div class="edit-thumbnail position-relative">

                                        <input type="file" name="image-horizontal" id="edit-image-horizontal"
                                            class="input-image-program d-none ">
                                        <label for="edit-image-horizontal"
                                            class="load-modal-programming load-photo d-inline" id="imagenes">
                                            <img src="{{ asset('/images/heart-icon.svg') }}"
                                                class="thumbnail-heart-icon" alt="heart-icon" />
                                            <div class="edit-program-camera text-center">
                                                <img src="{{ asset('/images/synopsis/camara.svg') }}"
                                                    class="edit-program-icon-image" alt="camera" />
                                                <p
                                                    class="p-2 mb-0 text-center size-thumbnail-text text-plus a-text-bold-brown-two">
                                                    472
                                                    x 245px</p>
                                            </div>

                                            <img src="{{ asset('/images/synopsis/image-synopsis-carrusel.jpg') }}"
                                                alt=""
                                                class="thumbnail-image-prev edit-image-program prev-image-program" />
                                        </label>
                                    </div>
                                    <!--Nombre de la imagen-->
                                    <p class="a-text-bold-brown-two text-plus mt-4 mb-5">NombreDeLaImagen</p>
                                </section>
                                <!--Establecer en landing, home, schedule item date time-->
                                <section class="mb-5">
                                    <div class="row">
                                        <!--Landing-->
                                        <div class="col-4 edit-program-data-container edit-data-container-large">
                                            <div class="edit-data-container h-100">
                                                <p class="mb-3 text-plus text-plus text-uppercase a-text-bold-coolgray">
                                                    Establecer
                                                    en landing
                                                </p>
                                                <!--Switch-->
                                                <div class="d-flex align-items-center mb-3">
                                                    <input type="radio" id="yes-landing-carrusel1" value="3"
                                                        class="edit-switch-landing edit-landing-yes" />
                                                    <label for="yes-landing-carrusel1" id="siestado-landing"
                                                        class="mb-0 si-estilo cursor-pointer switch-label">
                                                        Sí</label>
                                                    <input type="radio" id="no-landing-carrusel1" value="0"
                                                        class="edit-switch-landing switch-table-edit edit-landing-no"
                                                        checked />
                                                    <label for="no-landing-carrusel1" id="noestado-landing"
                                                        class="mb-0 no-estilo cursor-pointer switch-label">
                                                        No</label>
                                                </div>
                                                <!--Inputs radio-->
                                                <div class="d-flex align-items-center mb-3">

                                                    <span
                                                        class="a-text-bold-silver cursor-pointer ml-2 text-uppercase">Carrusel
                                                        2</span>

                                                </div>
                                                <div>
                                                    <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">
                                                        Fecha
                                                    </p>
                                                    <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                        <span class="a-text-bold-warm">Inicio: <input type="text"
                                                                class="input-basic edit-program-input a-text-bold-warm edit-program-attribute-text schedule-date-input edit-landing-date-begin"
                                                                placeholder="00-00-0000"
                                                                key="in_landing_begin" /></span>
                                                    </div>
                                                    <div class="mb-4 text-center edit-rectangle-small-container py-3">
                                                        <span class="a-text-bold-warm">Fin: <input type="text"
                                                                class="input-basic edit-program-input a-text-bold-warm edit-program-attribute-text schedule-date-input edit-landing-date-end"
                                                                key="in_landing_expiration"
                                                                placeholder="00-00-0000"></span>
                                                    </div>
                                                </div>
                                                <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                                                <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                    <span class="a-text-bold-warm">Inicio: <input type="text"
                                                            class="time-seconds-input input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase edit-landing-time-begin"
                                                            key="in_landing_begin" placeholder="00:00:00"></span>
                                                </div>
                                                <div class="text-center edit-rectangle-small-container py-3">
                                                    <span class="a-text-bold-warm">Fin: <input type="text"
                                                            class="time-seconds-input input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase edit-landing-time-end"
                                                            key="in_landing_expiration" placeholder="00:00:00"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <!--Home-->
                                        <div class="col-4 edit-program-data-container edit-data-container-large">
                                            <div class="edit-data-container h-100">
                                                <p class="mb-3 text-plus text-plus text-uppercase a-text-bold-coolgray">
                                                    Establecer
                                                    en home
                                                </p>
                                                <!--Switch-->
                                                <div class="d-flex align-items-center edit-switches-home-container">
                                                    <input type="radio" id="edit-in-home-yes" value="1"
                                                        class="edit-switch-home edit-program-switch edit-in-home-yes"
                                                        key="in_home" />
                                                    <label for="edit-in-home-yes" id="siestado-landing"
                                                        class="si-estilo cursor-pointer mb-0 switch-label">
                                                        Sí</label>
                                                    <input type="radio" id="edit-in-home-no" value="0" checked
                                                        class="edit-switch-home edit-program-switch edit-in-home-no"
                                                        key="in_home" />
                                                    <label for="edit-in-home-no" id="noestado-landing"
                                                        class="mb-0 no-estilo cursor-pointer switch-label">
                                                        No</label>
                                                </div>
                                                <div>
                                                    <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">
                                                        Fecha
                                                    </p>
                                                    <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                        <span class="a-text-bold-warm">Inicio: <input
                                                                key="in_home_begin" type="text"
                                                                class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-home-date-begin edit-program-attribute-text"
                                                                placeholder="00-00-0000" /></span>
                                                    </div>
                                                    <div class="mb-4 text-center edit-rectangle-small-container py-3">
                                                        <span class="a-text-bold-warm">Fin:
                                                            <input type="text" key="in_home_expiration"
                                                                class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-home-date-end edit-program-attribute-text"
                                                                placeholder="00-00-0000"></span>
                                                    </div>
                                                </div>
                                                <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                                                <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                    <span class="a-text-bold-warm">Inicio: <input key="in_home_begin"
                                                            type="text"
                                                            class="time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase edit-home-time-begin"
                                                            placeholder="00:00:00"></span>
                                                </div>
                                                <div class="text-center edit-rectangle-small-container py-3">
                                                    <span class="a-text-bold-warm">Fin: <input type="text"
                                                            class="time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase edit-home-time-end"
                                                            placeholder="00:00:00"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4 edit-program-data-container edit-data-container-large">
                                            <div class="edit-data-container h-100">
                                                <p
                                                    class="edit-date-time-title text-plus text-plus text-uppercase a-text-bold-coolgray">
                                                    Schedule Item Date time
                                                </p>
                                                <div>
                                                    <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">
                                                        Fecha
                                                    </p>
                                                    <div class="text-center edit-rectangle-small-container py-2 d-flex align-content-center justify-content-center"
                                                        style="margin-bottom: 81px">
                                                        <img src="{{ asset('images/calendario.svg') }}" alt=""
                                                            class="mr-3">
                                                        <span class="a-text-bold-warm mt-3">

                                                            <input key="" type=" text"
                                                                class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date"
                                                                placeholder="00-00-0000"></span>
                                                    </div>
                                                </div>
                                                <p class="mb-3 pt-3 text-plus a-text-medium-coolgray text-uppercase">
                                                    Hora
                                                </p>
                                                <div
                                                    class="text-center edit-rectangle-small-container d-flex align-content-center justify-content-center py-2">
                                                    <img src="{{ asset('images/reloj.svg') }}" alt="" class="mr-3">
                                                    <span class="a-text-bold-warm mt-3"><input type="text"
                                                            class="time-seconds-input input-basic edit-program-input a-text-bold-warm edit-schedule-item-time text-uppercase"
                                                            placeholder="00:00:00"></span>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </section>
                                <!--Sinopsis-->
                                <section class="mb-5 edit-program-data-container">
                                    <h3 class="h3 text-uppercase a-text-bold-brown-two mb-3">Sinopsis</h3>
                                    <!--Textarea-->
                                    <textarea key="synopsis"
                                        class="edit-synopsis edit-program-textarea edit-program-attribute-text a-text-semibold-warmgrey p-3"
                                        id="prog_sinopsis"></textarea>
                                </section>
                                <section class="mb-3">
                                    <div class="row">
                                        <!--Program episode season-->
                                        <div class="col-4 edit-program-data-container">
                                            <div class="edit-data-container">
                                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program
                                                    episode
                                                    season
                                                </p>
                                                <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                    <input type="text" key="season"
                                                        class="edit-program-season text-center input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase"
                                                        placeholder="00">
                                                </div>
                                            </div>
                                        </div>
                                        <!--Program episode number-->
                                        <div class="col-4 edit-program-data-container">
                                            <div class="edit-data-container">
                                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program
                                                    episode
                                                    number
                                                </p>
                                                <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                    <input type="text" key="program_episode_number"
                                                        class="text-center edit-episode-number input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase"
                                                        placeholder="000">
                                                </div>
                                            </div>
                                        </div>
                                        <!--Program year produced-->
                                        <div class="col-4 edit-program-data-container">
                                            <div class="edit-data-container">
                                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program
                                                    year
                                                    produced
                                                </p>
                                                <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                    <input type="text" key="program_year_produced"
                                                        class="year-input text-center edit-year-produced input-basic edit-program-attribute-text edit-program-input a-text-bold-warm text-uppercase"
                                                        placeholder="YYYY">
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </section>
                                <section class="mb-3">
                                    <div class="row">
                                        <!--Program title alternate-->
                                        <div class="col-4 edit-program-data-container">
                                            <div class="edit-data-container">
                                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program
                                                    title
                                                    alternate
                                                </p>
                                                <div class="mb-3 edit-rectangle-container p-3">
                                                    <input type="text" key="subtitle"
                                                        class="w-100 edit-program-subtitle input-basic edit-program-input edit-program-attribute-text a-text-bold-warm"
                                                        placeholder="Program Title Alternate">
                                                </div>
                                            </div>
                                        </div>
                                        <!--Program genre list-->
                                        <div class="col-4 edit-program-data-container position-relative"
                                            id="edit-genre-container">
                                            <div class="edit-data-container">
                                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program
                                                    genre
                                                    list
                                                </p>
                                                <div class="mb-3 edit-rectangle-container ">
                                                    <select
                                                        class="list1 mb-0 a-text-regular-brownishtwo text-normal  input-basic show-tick"
                                                        id="edit-program-genres" title="Genere list" multiple
                                                        data-live-search="true" data-live-search-placeholder="Buscar"
                                                        data-header="Program List" data-dropup-auto="false" key="genre">
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <!---->
                                        <div class="col-4 edit-program-data-container">
                                            <div class="edit-data-container">
                                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule
                                                    item
                                                    rating
                                                    code
                                                </p>
                                                <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                    <input type="text" key="rating"
                                                        class="text-center edit-program-attribute-text input-basic edit-program-input a-text-bold-warm text-uppercase edit-rating-code"
                                                        placeholder="PG-00">
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </section>
                                <section class="mb-3">
                                    <div class="row">
                                        <!--Schedule item log date-->
                                        <div class="col-4 edit-program-data-container">
                                            <div
                                                class="edit-data-container d-flex flex-column justify-content-between h-100">
                                                <p class="text-plus text-uppercase a-text-bold-brown-two">Schedule item
                                                    log
                                                    date
                                                </p>
                                                <div>
                                                    <p class="a-text-medium-brown-two text-plus text-uppercase
                                                ">Fecha
                                                    </p>
                                                    <div
                                                        class="mb-3 text-center edit-rectangle-small-container py-3 d-flex align-items-center justify-content-center">
                                                        <img src="{{ asset('images/calendario.svg') }}" alt=""
                                                            class="mr-3">
                                                        <input type="text" key="day"
                                                            class="edit-schedule-date edit-program-attribute-text schedule-date-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                                            placeholder="DD:MM:YY">
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-4 edit-program-data-container">
                                            <div
                                                class="edit-data-container h-100 d-flex flex-column justify-content-between">
                                                <p class="text-plus text-uppercase a-text-bold-brown-two pb-4">Schedule
                                                    item log
                                                    time (gmt)
                                                </p>
                                                <div>
                                                    <p class="a-text-medium-brown-two text-plus text-uppercase ">HORA
                                                    </p>
                                                    <div
                                                        class="mb-3 text-center edit-rectangle-small-container py-3 d-flex align-items-center justify-content-center">
                                                        <img src="{{ asset('images/reloj.svg') }}" alt="" class="mr-3">
                                                        <input type="text" key="programing"
                                                            class="edit-schedule-item-time edit-program-attribute-text time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                                            placeholder="00:00:00">
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-4 edit-program-data-container">
                                            <div
                                                class="edit-data-container d-flex flex-column justify-content-between h-100">
                                                <p class=" text-plus text-uppercase a-text-bold-brown-two">estimated
                                                    schedule item duration
                                                </p>
                                                <div>
                                                    <p class="a-text-medium-brown-two text-plus text-uppercase ">HORA
                                                    </p>
                                                    <div
                                                        class="mb-3 text-center edit-rectangle-small-container py-3 d-flex align-items-center justify-content-center">
                                                        <img src="{{ asset('images/reloj.svg') }}" alt="" class="mr-3">
                                                        <input type="text" key="duration"
                                                            class="edit-program-duration edit-program-attribute-text time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                                            placeholder="00:00:00">
                                                    </div>
                                                </div>

                                            </div>
                                        </div> 
                                    </div>
                                </section>
                                <section class="mb-5">
                                    <div class="row">
                                        <!--Schedule item log date-->
                                        <div class="col-4 edit-program-data-container">
                                            <div class="edit-data-container d-flex justify-content-between">
                                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule
                                                    version
                                                    subbed
                                                </p>
                                                <div class="d-flex">
                                                    <input type="radio" id="yes-subbed" value="1"
                                                        class="edit-program-switch switch-landing edit-subbed-yes"
                                                        key="subbed" />
                                                    <label for="yes-subbed" id="siestado-landing"
                                                        class="si-estilo cursor-pointer mb-0 switch-label">
                                                        Sí</label>
                                                    <input type="radio" id="no-dubbed" value="0" checked
                                                        class="edit-program-switch switch-landing switch-table-edit edit-subbed-no"
                                                        key="subbed" />
                                                    <label for="no-dubbed" id="noestado-landing"
                                                        class="mb-0 no-estilo cursor-pointer switch-label">
                                                        No</label>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-4 edit-program-data-container">
                                            <div class="edit-data-container d-flex justify-content-between">
                                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule
                                                    version
                                                    dubbed
                                                </p>
                                                <div class="d-flex">
                                                    <input type="radio" id="yes-dubbed" value="1"
                                                        class="edit-program-switch switch-landing edit-dubbed-yes"
                                                        key="dubbed" />
                                                    <label for="yes-dubbed" id="siestado-landing"
                                                        class="si-estilo cursor-pointer mb-0 switch-label">
                                                        Sí</label>
                                                    <input type="radio" id="no-dubbed" value="0" checked
                                                        class="edit-program-switch switch-landing switch-table-edit edit-dubbed-no"
                                                        key="dubbed" />
                                                    <label for="no-dubbed" id="noestado-landing"
                                                        class="mb-0 no-estilo cursor-pointer switch-label">
                                                        No</label>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-4 edit-program-data-container">
                                            <div class="edit-data-container d-flex justify-content-between">
                                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Audio
                                                    5.1<br>
                                                    available
                                                </p>
                                                <div class="d-flex">
                                                    <input type="radio" id="yes-audio5" value="1"
                                                        class="edit-program-switch switch-landing edit-audio5-yes"
                                                        key="audio5" />
                                                    <label for="yes-audio5" id="siestado-landing"
                                                        class="si-estilo cursor-pointer mb-0 switch-label">
                                                        Sí</label>
                                                    <input type="radio" id="no-audio5" value="0" checked
                                                        class="edit-program-switch switch-landing switch-table-edit edit-audio5-no"
                                                        key="audio5" />
                                                    <label for="no-audio5" id="noestado-landing"
                                                        class="mb-0 no-estilo cursor-pointer switch-label">
                                                        No</label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div class=" d-flex justify-content-center">
                                    <section class="text-center mb-3 d-flex justify-content-center">
                                        <button
                                            class="d-flex  mr-3  m-0 text-uppercase btn-grilla a-btn-basic-small btn-grilla a-btn-basic-small text-uppercase a-text-MBlack text-plus edit-landing-modal-button"
                                            data-dismiss="modal" id="edit-program-modal-button">ACEPTAR</button>
                                    </section>

                                </div>
                            </div>
                            <!--otro slider-->
                            <div>

                                <section class="edit-program-image">
                                    <select
                                        class="thumbnail-header1 thumbnail-header thumbnail-header-claro w-100 a-text-MBlack h2 d-flex align-items-center justify-content-between position-relative programs-catalogue"
                                        title="TÍTULO DEL PROGRAMA" id="prog_titulo_programa" data-live-search="true"
                                        data-live-search-placeholder="Agregar título de nuevo programa"
                                        name="thumbnail-header1" key="title">
                                    </select>
                                    <!--Imagen del programa--->
                                    <div class="edit-thumbnail position-relative">

                                        <input type="file" name="image-horizontal" id="edit-image-horizontal"
                                            class="input-image-program d-none ">
                                        <label for="edit-image-horizontal"
                                            class="load-modal-programming load-photo d-inline" id="imagenes">
                                            <img src="{{ asset('/images/heart-icon.svg') }}"
                                                class="thumbnail-heart-icon" alt="heart-icon" />
                                            <div class="edit-program-camera text-center">
                                                <img src="{{ asset('/images/synopsis/camara.svg') }}"
                                                    class="edit-program-icon-image" alt="camera" />
                                                <p
                                                    class="p-2 mb-0 text-center size-thumbnail-text text-plus a-text-bold-brown-two">
                                                    472
                                                    x 245px</p>
                                            </div>

                                            <img src="{{ asset('/images/synopsis/image-synopsis-carrusel.jpg') }}"
                                                alt=""
                                                class="thumbnail-image-prev edit-image-program prev-image-program" />
                                        </label>
                                    </div>
                                    <!--Nombre de la imagen-->
                                    <p class="a-text-bold-brown-two text-plus mt-4 mb-5">NombreDeLaImagen</p>
                                </section>
                                <!--Establecer en landing, home, schedule item date time-->
                                <section class="mb-5">
                                    <div class="row">
                                        <!--Landing-->
                                        <div class="col-4 edit-program-data-container edit-data-container-large">
                                            <div class="edit-data-container h-100">
                                                <p class="mb-3 text-plus text-plus text-uppercase a-text-bold-coolgray">
                                                    Establecer
                                                    en landing
                                                </p>
                                                <!--Switch-->
                                                <div class="d-flex align-items-center mb-3">
                                                    <input type="radio" id="yes-landing-carrusel" value="3"
                                                        class="edit-switch-landing edit-landing-yes" key="in_landing" />
                                                    <label for="yes-landing-carrusel" id="siestado-landing"
                                                        class="mb-0 si-estilo cursor-pointer switch-label">
                                                        Sí</label>
                                                    <input type="radio" id="no-landing-carrusel" value="0"
                                                        class="edit-switch-landing switch-table-edit edit-landing-no"
                                                        checked />
                                                    <label for="no-landing-carrusel" id="noestado-landing"
                                                        class="mb-0 no-estilo cursor-pointer switch-label">
                                                        No</label>
                                                </div>
                                                <!--Inputs radio-->
                                                <div class="d-flex align-items-center mb-3">

                                                    <span
                                                        class="a-text-bold-silver cursor-pointer ml-2 text-uppercase">Carrusel
                                                        2</span>


                                                </div>
                                                <div>
                                                    <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">
                                                        Fecha
                                                    </p>
                                                    <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                        <span class="a-text-bold-warm">Inicio: <input type="text"
                                                                class="input-basic edit-program-input a-text-bold-warm edit-program-attribute-text schedule-date-input edit-landing-date-begin"
                                                                placeholder="00-00-0000"
                                                                key="in_landing_begin" /></span>
                                                    </div>
                                                    <div class="mb-4 text-center edit-rectangle-small-container py-3">
                                                        <span class="a-text-bold-warm">Fin: <input type="text"
                                                                class="input-basic edit-program-input a-text-bold-warm edit-program-attribute-text schedule-date-input edit-landing-date-end"
                                                                key="in_landing_expiration"
                                                                placeholder="00-00-0000"></span>
                                                    </div>
                                                </div>
                                                <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                                                <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                    <span class="a-text-bold-warm">Inicio: <input type="text"
                                                            class="time-seconds-input input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase edit-landing-time-begin"
                                                            key="in_landing_begin" placeholder="00:00:00"></span>
                                                </div>
                                                <div class="text-center edit-rectangle-small-container py-3">
                                                    <span class="a-text-bold-warm">Fin: <input type="text"
                                                            class="time-seconds-input input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase edit-landing-time-end"
                                                            key="in_landing_expiration" placeholder="00:00:00"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <!--Home-->
                                        <div class="col-4 edit-program-data-container edit-data-container-large">
                                            <div class="edit-data-container h-100">
                                                <p class="mb-3 text-plus text-plus text-uppercase a-text-bold-coolgray">
                                                    Establecer
                                                    en home
                                                </p>
                                                <!--Switch-->
                                                <div class="d-flex align-items-center edit-switches-home-container">
                                                    <input type="radio" id="edit-in-home-yes" value="1"
                                                        class="edit-switch-home edit-program-switch edit-in-home-yes"
                                                        key="in_home" />
                                                    <label for="edit-in-home-yes" id="siestado-landing"
                                                        class="si-estilo cursor-pointer mb-0 switch-label">
                                                        Sí</label>
                                                    <input type="radio" id="edit-in-home-no" value="0" checked
                                                        class="edit-switch-home edit-program-switch edit-in-home-no"
                                                        key="in_home" />
                                                    <label for="edit-in-home-no" id="noestado-landing"
                                                        class="mb-0 no-estilo cursor-pointer switch-label">
                                                        No</label>
                                                </div>
                                                <div>
                                                    <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">
                                                        Fecha
                                                    </p>
                                                    <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                        <span class="a-text-bold-warm">Inicio: <input
                                                                key="in_home_begin" type="text"
                                                                class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-home-date-begin edit-program-attribute-text"
                                                                placeholder="00-00-0000" /></span>
                                                    </div>
                                                    <div class="mb-4 text-center edit-rectangle-small-container py-3">
                                                        <span class="a-text-bold-warm">Fin:
                                                            <input type="text" key="in_home_expiration"
                                                                class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-home-date-end edit-program-attribute-text"
                                                                placeholder="00-00-0000"></span>
                                                    </div>
                                                </div>
                                                <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                                                <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                    <span class="a-text-bold-warm">Inicio: <input key="in_home_begin"
                                                            type="text"
                                                            class="time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase edit-home-time-begin"
                                                            placeholder="00:00:00"></span>
                                                </div>
                                                <div class="text-center edit-rectangle-small-container py-3">
                                                    <span class="a-text-bold-warm">Fin: <input type="text"
                                                            class="time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase edit-home-time-end"
                                                            placeholder="00:00:00"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4 edit-program-data-container edit-data-container-large">
                                            <div class="edit-data-container h-100">
                                                <p
                                                    class="edit-date-time-title text-plus text-plus text-uppercase a-text-bold-coolgray">
                                                    Schedule Item Date time
                                                </p>
                                                <div>
                                                    <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">
                                                        Fecha
                                                    </p>
                                                    <div class="text-center edit-rectangle-small-container py-2 d-flex align-content-center justify-content-center"
                                                        style="margin-bottom: 81px">
                                                        <img src="{{ asset('images/calendario.svg') }}" alt=""
                                                            class="mr-3">
                                                        <span class="a-text-bold-warm mt-3">

                                                            <input key="" type=" text"
                                                                class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date"
                                                                placeholder="00-00-0000"></span>
                                                    </div>
                                                </div>
                                                <p class="mb-3 pt-3 text-plus a-text-medium-coolgray text-uppercase">
                                                    Hora
                                                </p>
                                                <div
                                                    class="text-center edit-rectangle-small-container d-flex align-content-center justify-content-center py-2">
                                                    <img src="{{ asset('images/reloj.svg') }}" alt="" class="mr-3">
                                                    <span class="a-text-bold-warm mt-3"><input type="text"
                                                            class="time-seconds-input input-basic edit-program-input a-text-bold-warm edit-schedule-item-time text-uppercase"
                                                            placeholder="00:00:00"></span>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </section>
                                <!--Sinopsis-->
                                <section class="mb-5 edit-program-data-container">
                                    <h3 class="h3 text-uppercase a-text-bold-brown-two mb-3">Sinopsis</h3>
                                    <!--Textarea-->
                                    <textarea key="synopsis"
                                        class="edit-synopsis edit-program-textarea edit-program-attribute-text a-text-semibold-warmgrey p-3"
                                        id="prog_sinopsis"></textarea>
                                </section>
                                <section class="mb-3">
                                    <div class="row">
                                        <!--Program episode season-->
                                        <div class="col-4 edit-program-data-container">
                                            <div class="edit-data-container">
                                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program
                                                    episode
                                                    season
                                                </p>
                                                <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                    <input type="text" key="season"
                                                        class="edit-program-season text-center input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase"
                                                        placeholder="00">
                                                </div>
                                            </div>
                                        </div>
                                        <!--Program episode number-->
                                        <div class="col-4 edit-program-data-container">
                                            <div class="edit-data-container">
                                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program
                                                    episode
                                                    number
                                                </p>
                                                <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                    <input type="text" key="program_episode_number"
                                                        class="text-center edit-episode-number input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase"
                                                        placeholder="000">
                                                </div>
                                            </div>
                                        </div>
                                        <!--Program year produced-->
                                        <div class="col-4 edit-program-data-container">
                                            <div class="edit-data-container">
                                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program
                                                    year
                                                    produced
                                                </p>
                                                <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                    <input type="text" key="program_year_produced"
                                                        class="year-input text-center edit-year-produced input-basic edit-program-attribute-text edit-program-input a-text-bold-warm text-uppercase"
                                                        placeholder="YYYY">
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </section>
                                <section class="mb-3">
                                    <div class="row">
                                        <!--Program title alternate-->
                                        <div class="col-4 edit-program-data-container">
                                            <div class="edit-data-container">
                                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program
                                                    title
                                                    alternate
                                                </p>
                                                <div class="mb-3 edit-rectangle-container p-3">
                                                    <input type="text" key="subtitle"
                                                        class="w-100 edit-program-subtitle input-basic edit-program-input edit-program-attribute-text a-text-bold-warm"
                                                        placeholder="Program Title Alternate">
                                                </div>
                                            </div>
                                        </div>
                                        <!--Program genre list-->
                                        <div class="col-4 edit-program-data-container position-relative"
                                            id="edit-genre-container">
                                            <div class="edit-data-container">
                                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program
                                                    genre
                                                    list
                                                </p>
                                                <div class="mb-3 edit-rectangle-container ">
                                                    <select
                                                        class="list1 mb-0 a-text-regular-brownishtwo text-normal  input-basic show-tick"
                                                        id="edit-program-genres" title="Genere list" multiple
                                                        data-live-search="true" data-live-search-placeholder="Buscar"
                                                        data-header="Program List" data-dropup-auto="false" key="genre">
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <!---->
                                        <div class="col-4 edit-program-data-container">
                                            <div class="edit-data-container">
                                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule
                                                    item
                                                    rating
                                                    code
                                                </p>
                                                <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                    <input type="text" key="rating"
                                                        class="text-center edit-program-attribute-text input-basic edit-program-input a-text-bold-warm text-uppercase edit-rating-code"
                                                        placeholder="PG-00">
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </section>
                                <section class="mb-3">
                                    <div class="row">
                                        <!--Schedule item log date-->
                                        <div class="col-4 edit-program-data-container">
                                            <div
                                                class="edit-data-container d-flex flex-column justify-content-between h-100">
                                                <p class="text-plus text-uppercase a-text-bold-brown-two">Schedule item
                                                    log
                                                    date
                                                </p>
                                                <div>
                                                    <p class="a-text-medium-brown-two text-plus text-uppercase
                    ">Fecha
                                                    </p>
                                                    <div
                                                        class="mb-3 text-center edit-rectangle-small-container py-3 d-flex align-items-center justify-content-center">
                                                        <img src="{{ asset('images/calendario.svg') }}" alt=""
                                                            class="mr-3">
                                                        <input type="text" key="day"
                                                            class="edit-schedule-date edit-program-attribute-text schedule-date-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                                            placeholder="DD:MM:YY">
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-4 edit-program-data-container">
                                            <div
                                                class="edit-data-container h-100 d-flex flex-column justify-content-between">
                                                <p class="text-plus text-uppercase a-text-bold-brown-two pb-4">Schedule
                                                    item log
                                                    time (gmt)
                                                </p>
                                                <div>
                                                    <p class="a-text-medium-brown-two text-plus text-uppercase ">HORA
                                                    </p>
                                                    <div
                                                        class="mb-3 text-center edit-rectangle-small-container py-3 d-flex align-items-center justify-content-center">
                                                        <img src="{{ asset('images/reloj.svg') }}" alt="" class="mr-3">
                                                        <input type="text" key="programing"
                                                            class="edit-schedule-item-time edit-program-attribute-text time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                                            placeholder="00:00:00">
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-4 edit-program-data-container">
                                            <div
                                                class="edit-data-container d-flex flex-column justify-content-between h-100">
                                                <p class=" text-plus text-uppercase a-text-bold-brown-two">estimated
                                                    schedule item duration
                                                </p>
                                                <div>
                                                    <p class="a-text-medium-brown-two text-plus text-uppercase ">HORA
                                                    </p>
                                                    <div
                                                        class="mb-3 text-center edit-rectangle-small-container py-3 d-flex align-items-center justify-content-center">
                                                        <img src="{{ asset('images/reloj.svg') }}" alt="" class="mr-3">
                                                        <input type="text" key="duration"
                                                            class="edit-program-duration edit-program-attribute-text time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                                            placeholder="00:00:00">
                                                    </div>
                                                </div>

                                            </div>
                                        </div> 
                                    </div>
                                </section>
                                <section class="mb-5">
                                    <div class="row">
                                        <!--Schedule item log date-->
                                        <div class="col-4 edit-program-data-container">
                                            <div class="edit-data-container d-flex justify-content-between">
                                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule
                                                    version
                                                    subbed
                                                </p>
                                                <div class="d-flex">
                                                    <input type="radio" id="yes-subbed" value="1"
                                                        class="edit-program-switch switch-landing edit-subbed-yes"
                                                        key="subbed" />
                                                    <label for="yes-subbed" id="siestado-landing"
                                                        class="si-estilo cursor-pointer mb-0 switch-label">
                                                        Sí</label>
                                                    <input type="radio" id="no-dubbed" value="0" checked
                                                        class="edit-program-switch switch-landing switch-table-edit edit-subbed-no"
                                                        key="subbed" />
                                                    <label for="no-dubbed" id="noestado-landing"
                                                        class="mb-0 no-estilo cursor-pointer switch-label">
                                                        No</label>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-4 edit-program-data-container">
                                            <div class="edit-data-container d-flex justify-content-between">
                                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule
                                                    version
                                                    dubbed
                                                </p>
                                                <div class="d-flex">
                                                    <input type="radio" id="yes-dubbed" value="1"
                                                        class="edit-program-switch switch-landing edit-dubbed-yes"
                                                        key="dubbed" />
                                                    <label for="yes-dubbed" id="siestado-landing"
                                                        class="si-estilo cursor-pointer mb-0 switch-label">
                                                        Sí</label>
                                                    <input type="radio" id="no-dubbed" value="0" checked
                                                        class="edit-program-switch switch-landing switch-table-edit edit-dubbed-no"
                                                        key="dubbed" />
                                                    <label for="no-dubbed" id="noestado-landing"
                                                        class="mb-0 no-estilo cursor-pointer switch-label">
                                                        No</label>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-4 edit-program-data-container">
                                            <div class="edit-data-container d-flex justify-content-between">
                                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Audio
                                                    5.1<br>
                                                    available
                                                </p>
                                                <div class="d-flex">
                                                    <input type="radio" id="yes-audio5" value="1"
                                                        class="edit-program-switch switch-landing edit-audio5-yes"
                                                        key="audio5" />
                                                    <label for="yes-audio5" id="siestado-landing"
                                                        class="si-estilo cursor-pointer mb-0 switch-label">
                                                        Sí</label>
                                                    <input type="radio" id="no-audio5" value="0" checked
                                                        class="edit-program-switch switch-landing switch-table-edit edit-audio5-no"
                                                        key="audio5" />
                                                    <label for="no-audio5" id="noestado-landing"
                                                        class="mb-0 no-estilo cursor-pointer switch-label">
                                                        No</label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div class=" d-flex justify-content-center">
                                    <section class="text-center mb-3 d-flex justify-content-center">
                                        <button
                                            class="d-flex  mr-3  m-0 text-uppercase btn-grilla a-btn-basic-small btn-grilla a-btn-basic-small text-uppercase a-text-MBlack text-plus edit-landing-modal-button"
                                            data-dismiss="modal" id="edit-program-modal-button">ACEPTAR</button>
                                    </section>

                                </div>
                            </div>

                            <!--fin del otro slider-->
                            <!--otro slider-->
                            <div>

                                <section class="edit-program-image">
                                    <select
                                        class="thumbnail-header1 thumbnail-header thumbnail-header-claro w-100 a-text-MBlack h2 d-flex align-items-center justify-content-between position-relative programs-catalogue"
                                        title="TÍTULO DEL PROGRAMA" id="prog_titulo_programa" data-live-search="true"
                                        data-live-search-placeholder="Agregar título de nuevo programa"
                                        name="thumbnail-header1" key="title">
                                    </select>
                                    <!--Imagen del programa--->
                                    <div class="edit-thumbnail position-relative">

                                        <input type="file" name="image-horizontal" id="edit-image-horizontal"
                                            class="input-image-program d-none ">
                                        <label for="edit-image-horizontal"
                                            class="load-modal-programming load-photo d-inline" id="imagenes">
                                            <img src="{{ asset('/images/heart-icon.svg') }}"
                                                class="thumbnail-heart-icon" alt="heart-icon" />
                                            <div class="edit-program-camera text-center">
                                                <img src="{{ asset('/images/synopsis/camara.svg') }}"
                                                    class="edit-program-icon-image" alt="camera" />
                                                <p
                                                    class="p-2 mb-0 text-center size-thumbnail-text text-plus a-text-bold-brown-two">
                                                    472
                                                    x 245px</p>
                                            </div>

                                            <img src="{{ asset('/images/synopsis/image-synopsis-carrusel.jpg') }}"
                                                alt=""
                                                class="thumbnail-image-prev edit-image-program prev-image-program" />
                                        </label>
                                    </div>
                                    <!--Nombre de la imagen-->
                                    <p class="a-text-bold-brown-two text-plus mt-4 mb-5">NombreDeLaImagen</p>
                                </section>
                                <!--Establecer en landing, home, schedule item date time-->
                                <section class="mb-5">
                                    <div class="row">
                                        <!--Landing-->
                                        <div class="col-4 edit-program-data-container edit-data-container-large">
                                            <div class="edit-data-container h-100">
                                                <p class="mb-3 text-plus text-plus text-uppercase a-text-bold-coolgray">
                                                    Establecer
                                                    en landing
                                                </p>
                                                <!--Switch-->
                                                <div class="d-flex align-items-center mb-3">
                                                    <input type="radio" id="yes-landing-carrusel" value="3"
                                                        class="edit-switch-landing edit-landing-yes" key="in_landing" />
                                                    <label for="yes-landing-carrusel" id="siestado-landing"
                                                        class="mb-0 si-estilo cursor-pointer switch-label">
                                                        Sí</label>
                                                    <input type="radio" id="no-landing-carrusel" value="0"
                                                        class="edit-switch-landing switch-table-edit edit-landing-no"
                                                        checked />
                                                    <label for="no-landing-carrusel" id="noestado-landing"
                                                        class="mb-0 no-estilo cursor-pointer switch-label">
                                                        No</label>
                                                </div>
                                                <!--Inputs radio-->
                                                <div class="d-flex align-items-center mb-3">

                                                    <span
                                                        class="a-text-bold-silver cursor-pointer ml-2 text-uppercase">Carrusel
                                                        2</span>

                                                </div>
                                                <div>
                                                    <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">
                                                        Fecha
                                                    </p>
                                                    <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                        <span class="a-text-bold-warm">Inicio: <input type="text"
                                                                class="input-basic edit-program-input a-text-bold-warm edit-program-attribute-text schedule-date-input edit-landing-date-begin"
                                                                placeholder="00-00-0000"
                                                                key="in_landing_begin" /></span>
                                                    </div>
                                                    <div class="mb-4 text-center edit-rectangle-small-container py-3">
                                                        <span class="a-text-bold-warm">Fin: <input type="text"
                                                                class="input-basic edit-program-input a-text-bold-warm edit-program-attribute-text schedule-date-input edit-landing-date-end"
                                                                key="in_landing_expiration"
                                                                placeholder="00-00-0000"></span>
                                                    </div>
                                                </div>
                                                <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                                                <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                    <span class="a-text-bold-warm">Inicio: <input type="text"
                                                            class="time-seconds-input input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase edit-landing-time-begin"
                                                            key="in_landing_begin" placeholder="00:00:00"></span>
                                                </div>
                                                <div class="text-center edit-rectangle-small-container py-3">
                                                    <span class="a-text-bold-warm">Fin: <input type="text"
                                                            class="time-seconds-input input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase edit-landing-time-end"
                                                            key="in_landing_expiration" placeholder="00:00:00"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <!--Home-->
                                        <div class="col-4 edit-program-data-container edit-data-container-large">
                                            <div class="edit-data-container h-100">
                                                <p class="mb-3 text-plus text-plus text-uppercase a-text-bold-coolgray">
                                                    Establecer
                                                    en home
                                                </p>
                                                <!--Switch-->
                                                <div class="d-flex align-items-center edit-switches-home-container">
                                                    <input type="radio" id="edit-in-home-yes" value="1"
                                                        class="edit-switch-home edit-program-switch edit-in-home-yes"
                                                        key="in_home" />
                                                    <label for="edit-in-home-yes" id="siestado-landing"
                                                        class="si-estilo cursor-pointer mb-0 switch-label">
                                                        Sí</label>
                                                    <input type="radio" id="edit-in-home-no" value="0" checked
                                                        class="edit-switch-home edit-program-switch edit-in-home-no"
                                                        key="in_home" />
                                                    <label for="edit-in-home-no" id="noestado-landing"
                                                        class="mb-0 no-estilo cursor-pointer switch-label">
                                                        No</label>
                                                </div>
                                                <div>
                                                    <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">
                                                        Fecha
                                                    </p>
                                                    <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                        <span class="a-text-bold-warm">Inicio: <input
                                                                key="in_home_begin" type="text"
                                                                class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-home-date-begin edit-program-attribute-text"
                                                                placeholder="00-00-0000" /></span>
                                                    </div>
                                                    <div class="mb-4 text-center edit-rectangle-small-container py-3">
                                                        <span class="a-text-bold-warm">Fin:
                                                            <input type="text" key="in_home_expiration"
                                                                class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-home-date-end edit-program-attribute-text"
                                                                placeholder="00-00-0000"></span>
                                                    </div>
                                                </div>
                                                <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                                                <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                    <span class="a-text-bold-warm">Inicio: <input key="in_home_begin"
                                                            type="text"
                                                            class="time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase edit-home-time-begin"
                                                            placeholder="00:00:00"></span>
                                                </div>
                                                <div class="text-center edit-rectangle-small-container py-3">
                                                    <span class="a-text-bold-warm">Fin: <input type="text"
                                                            class="time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase edit-home-time-end"
                                                            placeholder="00:00:00"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4 edit-program-data-container edit-data-container-large">
                                            <div class="edit-data-container h-100">
                                                <p
                                                    class="edit-date-time-title text-plus text-plus text-uppercase a-text-bold-coolgray">
                                                    Schedule Item Date time
                                                </p>
                                                <div>
                                                    <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">
                                                        Fecha
                                                    </p>
                                                    <div class="text-center edit-rectangle-small-container py-2 d-flex align-content-center justify-content-center"
                                                        style="margin-bottom: 81px">
                                                        <img src="{{ asset('images/calendario.svg') }}" alt=""
                                                            class="mr-3">
                                                        <span class="a-text-bold-warm mt-3">

                                                            <input key="" type=" text"
                                                                class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date"
                                                                placeholder="00-00-0000"></span>
                                                    </div>
                                                </div>
                                                <p class="mb-3 pt-3 text-plus a-text-medium-coolgray text-uppercase">
                                                    Hora
                                                </p>
                                                <div
                                                    class="text-center edit-rectangle-small-container d-flex align-content-center justify-content-center py-2">
                                                    <img src="{{ asset('images/reloj.svg') }}" alt="" class="mr-3">
                                                    <span class="a-text-bold-warm mt-3"><input type="text"
                                                            class="time-seconds-input input-basic edit-program-input a-text-bold-warm edit-schedule-item-time text-uppercase"
                                                            placeholder="00:00:00"></span>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </section>
                                <!--Sinopsis-->
                                <section class="mb-5 edit-program-data-container">
                                    <h3 class="h3 text-uppercase a-text-bold-brown-two mb-3">Sinopsis</h3>
                                    <!--Textarea-->
                                    <textarea key="synopsis"
                                        class="edit-synopsis edit-program-textarea edit-program-attribute-text a-text-semibold-warmgrey p-3"
                                        id="prog_sinopsis"></textarea>
                                </section>
                                <section class="mb-3">
                                    <div class="row">
                                        <!--Program episode season-->
                                        <div class="col-4 edit-program-data-container">
                                            <div class="edit-data-container">
                                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program
                                                    episode
                                                    season
                                                </p>
                                                <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                    <input type="text" key="season"
                                                        class="edit-program-season text-center input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase"
                                                        placeholder="00">
                                                </div>
                                            </div>
                                        </div>
                                        <!--Program episode number-->
                                        <div class="col-4 edit-program-data-container">
                                            <div class="edit-data-container">
                                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program
                                                    episode
                                                    number
                                                </p>
                                                <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                    <input type="text" key="program_episode_number"
                                                        class="text-center edit-episode-number input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase"
                                                        placeholder="000">
                                                </div>
                                            </div>
                                        </div>
                                        <!--Program year produced-->
                                        <div class="col-4 edit-program-data-container">
                                            <div class="edit-data-container">
                                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program
                                                    year
                                                    produced
                                                </p>
                                                <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                    <input type="text" key="program_year_produced"
                                                        class="year-input text-center edit-year-produced input-basic edit-program-attribute-text edit-program-input a-text-bold-warm text-uppercase"
                                                        placeholder="YYYY">
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </section>
                                <section class="mb-3">
                                    <div class="row">
                                        <!--Program title alternate-->
                                        <div class="col-4 edit-program-data-container">
                                            <div class="edit-data-container">
                                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program
                                                    title
                                                    alternate
                                                </p>
                                                <div class="mb-3 edit-rectangle-container p-3">
                                                    <input type="text" key="subtitle"
                                                        class="w-100 edit-program-subtitle input-basic edit-program-input edit-program-attribute-text a-text-bold-warm"
                                                        placeholder="Program Title Alternate">
                                                </div>
                                            </div>
                                        </div>
                                        <!--Program genre list-->
                                        <div class="col-4 edit-program-data-container position-relative"
                                            id="edit-genre-container">
                                            <div class="edit-data-container">
                                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program
                                                    genre
                                                    list
                                                </p>
                                                <div class="mb-3 edit-rectangle-container ">
                                                    <select
                                                        class="list1 mb-0 a-text-regular-brownishtwo text-normal  input-basic show-tick"
                                                        id="edit-program-genres" title="Genere list" multiple
                                                        data-live-search="true" data-live-search-placeholder="Buscar"
                                                        data-header="Program List" data-dropup-auto="false" key="genre">
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <!---->
                                        <div class="col-4 edit-program-data-container">
                                            <div class="edit-data-container">
                                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule
                                                    item
                                                    rating
                                                    code
                                                </p>
                                                <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                    <input type="text" key="rating"
                                                        class="text-center edit-program-attribute-text input-basic edit-program-input a-text-bold-warm text-uppercase edit-rating-code"
                                                        placeholder="PG-00">
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </section>
                                <section class="mb-3">
                                    <div class="row">
                                        <!--Schedule item log date-->
                                        <div class="col-4 edit-program-data-container">
                                            <div
                                                class="edit-data-container d-flex flex-column justify-content-between h-100">
                                                <p class="text-plus text-uppercase a-text-bold-brown-two">Schedule item
                                                    log
                                                    date
                                                </p>
                                                <div>
                                                    <p class="a-text-medium-brown-two text-plus text-uppercase
                    ">Fecha
                                                    </p>
                                                    <div
                                                        class="mb-3 text-center edit-rectangle-small-container py-3 d-flex align-items-center justify-content-center">
                                                        <img src="{{ asset('images/calendario.svg') }}" alt=""
                                                            class="mr-3">
                                                        <input type="text" key="day"
                                                            class="edit-schedule-date edit-program-attribute-text schedule-date-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                                            placeholder="DD:MM:YY">
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-4 edit-program-data-container">
                                            <div
                                                class="edit-data-container h-100 d-flex flex-column justify-content-between">
                                                <p class="text-plus text-uppercase a-text-bold-brown-two pb-4">Schedule
                                                    item log
                                                    time (gmt)
                                                </p>
                                                <div>
                                                    <p class="a-text-medium-brown-two text-plus text-uppercase ">HORA
                                                    </p>
                                                    <div
                                                        class="mb-3 text-center edit-rectangle-small-container py-3 d-flex align-items-center justify-content-center">
                                                        <img src="{{ asset('images/reloj.svg') }}" alt="" class="mr-3">
                                                        <input type="text" key="programing"
                                                            class="edit-schedule-item-time edit-program-attribute-text time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                                            placeholder="00:00:00">
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-4 edit-program-data-container">
                                            <div
                                                class="edit-data-container d-flex flex-column justify-content-between h-100">
                                                <p class=" text-plus text-uppercase a-text-bold-brown-two">estimated
                                                    schedule item duration
                                                </p>
                                                <div>
                                                    <p class="a-text-medium-brown-two text-plus text-uppercase ">HORA
                                                    </p>
                                                    <div
                                                        class="mb-3 text-center edit-rectangle-small-container py-3 d-flex align-items-center justify-content-center">
                                                        <img src="{{ asset('images/reloj.svg') }}" alt="" class="mr-3">
                                                        <input type="text" key="duration"
                                                            class="edit-program-duration edit-program-attribute-text time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                                            placeholder="00:00:00">
                                                    </div>
                                                </div>

                                            </div>
                                        </div> 
                                    </div>
                                </section>
                                <section class="mb-5">
                                    <div class="row">
                                        <!--Schedule item log date-->
                                        <div class="col-4 edit-program-data-container">
                                            <div class="edit-data-container d-flex justify-content-between">
                                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule
                                                    version
                                                    subbed
                                                </p>
                                                <div class="d-flex">
                                                    <input type="radio" id="yes-subbed" value="1"
                                                        class="edit-program-switch switch-landing edit-subbed-yes"
                                                        key="subbed" />
                                                    <label for="yes-subbed" id="siestado-landing"
                                                        class="si-estilo cursor-pointer mb-0 switch-label">
                                                        Sí</label>
                                                    <input type="radio" id="no-dubbed" value="0" checked
                                                        class="edit-program-switch switch-landing switch-table-edit edit-subbed-no"
                                                        key="subbed" />
                                                    <label for="no-dubbed" id="noestado-landing"
                                                        class="mb-0 no-estilo cursor-pointer switch-label">
                                                        No</label>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-4 edit-program-data-container">
                                            <div class="edit-data-container d-flex justify-content-between">
                                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule
                                                    version
                                                    dubbed
                                                </p>
                                                <div class="d-flex">
                                                    <input type="radio" id="yes-dubbed" value="1"
                                                        class="edit-program-switch switch-landing edit-dubbed-yes"
                                                        key="dubbed" />
                                                    <label for="yes-dubbed" id="siestado-landing"
                                                        class="si-estilo cursor-pointer mb-0 switch-label">
                                                        Sí</label>
                                                    <input type="radio" id="no-dubbed" value="0" checked
                                                        class="edit-program-switch switch-landing switch-table-edit edit-dubbed-no"
                                                        key="dubbed" />
                                                    <label for="no-dubbed" id="noestado-landing"
                                                        class="mb-0 no-estilo cursor-pointer switch-label">
                                                        No</label>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-4 edit-program-data-container">
                                            <div class="edit-data-container d-flex justify-content-between">
                                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Audio
                                                    5.1<br>
                                                    available
                                                </p>
                                                <div class="d-flex">
                                                    <input type="radio" id="yes-audio5" value="1"
                                                        class="edit-program-switch switch-landing edit-audio5-yes"
                                                        key="audio5" />
                                                    <label for="yes-audio5" id="siestado-landing"
                                                        class="si-estilo cursor-pointer mb-0 switch-label">
                                                        Sí</label>
                                                    <input type="radio" id="no-audio5" value="0" checked
                                                        class="edit-program-switch switch-landing switch-table-edit edit-audio5-no"
                                                        key="audio5" />
                                                    <label for="no-audio5" id="noestado-landing"
                                                        class="mb-0 no-estilo cursor-pointer switch-label">
                                                        No</label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div class=" d-flex justify-content-center">
                                    <section class="text-center mb-3 d-flex justify-content-center">
                                        <button
                                            class="d-flex  mr-3  m-0 text-uppercase btn-grilla a-btn-basic-small btn-grilla a-btn-basic-small text-uppercase a-text-MBlack text-plus edit-landing-modal-button"
                                            data-dismiss="modal" id="edit-program-modal-button">ACEPTAR</button>
                                    </section>

                                </div>
                            </div>

                            <!--fin del otro slider-->


                        </div>
                    </div>

                </div>
            </div>
        </div>
