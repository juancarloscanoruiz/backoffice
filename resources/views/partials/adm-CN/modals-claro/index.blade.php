<body class="bg-dark">
    <!-- <button id="btn-test">Modal</button> -->

    <!-- MODAL HEADER - ENCABEZADO LANDING CANAL CLARO 1 -->
    <div id="modal-header" class="modal">
        <div class="modal-dialog-centered">
            <div class="modal-header-claro">
                <!-- TEXTO -->
                <p class="p-text-modal-sub">CARGAR IMAGENES EN FORMATO PNG</p>
                <h3 class="p-title-modal">ENCABEZADO</h3>
                <hr class="hr">
                <div class="content-item-center">
                    <!-- IMG -->
                    <div class="img-content-header">
                        <div class="content-img-modal">
                            <label for="img-header">
                                <div id="img-header-claro">
                                    <!-- IMG -->
                                </div>
                                <input required class="d-none" id="img-header" name="img-header-claro" type="file">
                            </label>
                        </div>
                    </div>
                    <!-- HOY EN  -->
                    <div class="inp-content">
                        <input class="inp-text-modal-1" type="text">
                    </div>
                    <!-- CANAL CLARO -->
                    <div class="inp-content">
                        <input class="inp-text-modal-2" type="text">
                    </div>
                    <!-- VER PROGRAMACIÓN -->
                    <input class="inp-text-modal-3" type="text">
                </div>
                <div class="content">
                    <div class="float-right mt-3">
                        <img class="cursor-pointer" id="url-encabezado" src="./images/basic-icons/link.svg"
                            style="width: 40px;">
                        <input id="inp-text-modal-3" class="input-url" placeholder="Enlace o URL" type="text">
                    </div>
                </div>
                <!-- BOTONES -->
                <div class="content">
                    <div class="d-flex justify-content-center mt-3">
                        <button id="btn-acepta-modal-header"
                            class="m-0 mr-4 btn-grilla a-btn-basic-small text-plus a-text-MBlack">ACEPTAR</button>
                        <button data-dismiss="modal"
                            class="m-0 btn-landing a-btn-basic-small text-plus a-text-bold-teal">CANCELAR</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- MODAL HEADER - ENCABEZADO LANDING CANAL CLARO 1 -->

    <!-- MODAL TITULO - TEXTO-PROMO LANDING CANAL CLARO 1 -->
    <div id="modal-title" class="modal">
        <div class="modal-dialog-centered modal-dialog modal-lg">
            <div class="modal-title-claro modal-content">
                <!-- TEXTO -->
                <h2 class="p-title-modal">TÍTULO</h2>
                <hr class="hr">
                <!-- TITULO Y SUBTITULO -->
                <div class="title-modal-content">
                    <input id="inp-title-modal" class="inp-title-modal" type="text">
                    <input id="inp-sub-title-modal" class="inp-sub-title-modal" type="text">
                </div>
                <!-- BOTONES -->
                <div class="content">
                    <div class="d-flex justify-content-center mt-3">
                        <button id="btn-acepta-modal-title"
                            class="m-0 mr-4 btn-grilla a-btn-basic-small text-plus a-text-MBlack">ACEPTAR</button>
                        <button data-dismiss="modal"
                            class="m-0 btn-landing a-btn-basic-small text-plus a-text-bold-teal">CANCELAR</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- MODAL TITULO - TEXTO-PROMO LANDING CANAL CLARO 1 -->

    <!-- MODAL PROMO - PROMO LANDING CANAL CLARO 1 -->
    <div id="modal-promo" class="modal">
        <div class="modal-dialog-centered modal-dialog modal-lg">
            <div class="modal-promo-claro modal-content">
                <!-- TEXTO -->
                <p class="p-text-modal-sub">CARGAR IMÁGENES EN FORMATO JPG O VIDEOS MP4</p>
                <h3 class="p-title-modal mt-3">PROMO</h3>
                <hr class="hr">
                <!-- IMG -->
                <div class="position-relative text-center" id="back-promo-claro">
                    <img class="img-back-modal img-promo" src="images/modals/img-back-promo.png">
                </div>
                <!-- BTN ICONOS -->
                <div class="img-promo-claro">
                    <!-- INPUTS -->
                    <input class="d-none" id="promo-claro-img" name="img-promo-claro" type="file">
                    <input class="d-none" id="promo-claro-video" name="video-promo-claro" type="file">
                    <!-- LABEL -->
                    <label for="promo-claro-img" class="add-file">
                        <img class="cursor-pointer mb-2" src="images/modals/camara.svg" alt="add-photo" />
                        <span>Añade tu archivo jpg 472px X 295px</span>
                    </label>
                    <label for="promo-claro-video" class="add-file">
                        <img class="cursor-pointer mb-2" src="images/basic-icons/video.svg" alt="add-video" />
                        <span>Añade tu archivo mp4 1280px X 720px</span>
                    </label>
                    <label class="add-file">
                        <img id="url-promo" class="cursor-pointer mb-2" src="images/basic-icons/link.svg"
                            alt="add-link" />
                        <span class="py-3">Utiliza un enlace o URL</span>
                    </label>
                </div>
                <!-- NOMBRES DE IMG Ó VIDEO -->
                <div class="content ml-3 mt-3 mb-2 text-bold" style="font-weight: 600;">
                    <p>Nombre_Prómocion_CanalClaro_20200709.jpg</p>
                    <p>Nombre_Prómocion_CanalClaro_20200709.jpg</p>
                </div>
                <!-- BOTONES -->
                <div class="content">
                    <div class="d-flex justify-content-center">
                        <button id="btn-acepta-modal-promo"
                            class="m-0 mr-4 btn-grilla a-btn-basic-small text-plus a-text-MBlack">ACEPTAR</button>
                        <button data-dismiss="modal"
                            class="m-0 btn-landing a-btn-basic-small text-plus a-text-bold-teal">CANCELAR</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- MODAL PROMO - PROMO LANDING CANAL CLARO 1 -->

    <!-- MODAL LINK - ENCABEZADO LANDING CANAL CLARO 5 -->
    <div id="modal-url" class="modal">
        <div class="modal-dialog-centered modal-dialog modal-lg">
            <div class="modal-link-claro modal-content">
                <!-- TEXTO  -->
                <p>Vínculo a una página web existente</p>
                <!-- LINK -->
                <div class="d-flex my-5">
                    <img class="mr-3" src="images/basic-icons/link.svg" alt="Link" style="width: 40px;">
                    <input class="input-url-modal" placeholder="Pega el enlace o URL" type="text">
                    <small class="error">INTENTA DE NUEVO CON UNA IMAGEN PNG</small>
                </div>
                <!-- BOTONES -->
                <div class="content">
                    <div class="d-flex justify-content-center">
                        <button class="m-0 mr-4 btn-grilla a-btn-basic-small text-plus a-text-MBlack">ACEPTAR</button>
                        <button data-dismiss="modal"
                            class="m-0 btn-landing a-btn-basic-small text-plus a-text-bold-teal">CANCELAR</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ENCABEZADO LANDING CANAL CLARO 5 -->

    <!-- BANNER LANDING CANAL CLARO 4 -->
    <!-- <div id="modal-banner" class="modal">
        <div class="modal-banner-claro">
            <p class="text-plus text-banner-p">CARGAR IMAGENES EN FORMATO JPG</p>
            <span class="h3">BANNER - CANAL CLARO</span>
            <hr class="hr">

            <div class="d-flex content-calendario">
                dots
                <div class="programming-slider-dots">
                    <ul class="slick-dots" role="tablist">
                        <li class="slick-active" role="presentation">
                            <p class="mb-0 a-text-bold-teal slider-pagination-item mr-4 mb-3">1</p>
                        </li>
                        <li role="presentation">
                            <p class="mb-0 a-text-bold-teal slider-pagination-item mr-4 mb-3">2</p>
                        </li>
                        <li role="presentation">
                            <p class="mb-0 a-text-bold-teal slider-pagination-item mr-4 mb-3">3</p>
                        </li>
                        <li role="presentation">
                            <p class="mb-0 a-text-bold-teal slider-pagination-item mr-4 mb-3">4</p>
                        </li>
                        add slide
                        <img src="/images/add-icon.svg" class="add-programming-image cursor-pointer">
                    </ul>
                </div>

                <div class="d-flex align-items-center">
                    <span class="h3 my-0 pr-4">VIGENCIA</span>

                    <input type="text" id="date-start-input">
                    <label for="date-start-input" class="ml-4 mb-0 date-button date-start-table d-flex align-items-center pl-3 pr-3" id="date-start-table">
                        <img src="./images/calendario.svg" alt="">
                        <div class="ml-3">
                            <p class="text-small d-block mb-0 a-text-semibold-warmgrey">Inicio</p>
                            <p class="text-normal mb-0 a-text-bold-charcoal" id="start-date-text">DD-MM-YYYY</p>
                        </div>
                    </label>

                    <label for="date-start-input" class="mb-0 ml-4 date-button date-end-table d-flex align-items-center pl-3 pr-3">
                        <img src="./images/calendario.svg" alt="">
                        <div class="ml-3">
                            <p class="text-small d-block mb-0 a-text-semibold-warmgrey">Fin</p>
                            <p class="text-normal mb-0 a-text-bold-charcoal" id="end-date-text">DD-MM-YYYY</p>
                        </div>
                    </label>
                </div>
            </div>

            <div class="img-content-banner mt-4">
                <div class="position-relative h-100">
                    BTN ARROWS
                    <img src="images/synopsis/arrow.svg" class="arrow-modal-right">
                    <img src="images/synopsis/arrow.svg" class="arrow-modal-left">
                    LABEL IMAGEN
                    <label for="banner-claro">
                        <div id="img-banner-claro">
                            <img src="images/modals/img-banner.png" style="width: 100%;">
                            <img class="img-add-photo" src="images/modals/camara.svg" alt="add-photo" />
                            <span class="text-add-photo">472px X 295px</span>
                        </div>
                        <input required class="d-none" id="banner-claro" name="img-banner-claro" type="file">
                    </label>
                </div>
            </div>

            <br><br>
            <div class="d-flex justify-content-center btn-modal-progra">
                <button class="a-btn-basic-small btn-grilla a-text-MBlack mr-3">ACEPTAR</button>
                <button data-dismiss="modal" class="ml-3  a-btn-basic-small btn-landing a-text-bold-teal">CANCELAR</button>
            </div>
        </div>
    </div> -->
    <!-- BANNER LANDING CANAL CLARO 4 -->

    <!-- SLAIDER -->
    <div class="modal pr-0 modal-programming-landing" id="modal-edi-claro" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document" style="max-width: 100%">
            <div class="modal-content">
                <div class="modal-body">
                    <img src="images/modals/tv-1.svg" class="modal-programming-landing-logo">
                    <p class="a-text-bold-tomato h2 text-uppercase text-center">Programación</p>
                    <!--Slider de calendario-->
                    <h3 class="h3 a-text-semibold-brownish-grey-three text-uppercase mb-4 mt-5"
                        id="slider-calendar-current-date">Octubre 2020</h3>
                    <img src="/images/modals/arrow-right.svg" class="float-left" alt="">
                    <img src="/images/modals/arrow-left.svg" class="float-right" alt="">
                    <section class="col-10 mx-auto">
                        <div class="mb-5 calendar-slider2 day-style">
                            <li class="programming-item programming-item-active py-2">
                                <p class="mb-0">MIE</p>
                                <p class="mb-0">01</p>
                            </li>
                            <li class="programming-item py-2">
                                <p class="mb-0">MIE</p>
                                <p class="mb-0">01</p>
                            </li>
                            <li class="programming-item py-2">
                                <p class="mb-0">MIE</p>
                                <p class="mb-0">01</p>
                            </li>
                            <li class="programming-item py-2">
                                <p class="mb-0">MIE</p>
                                <p class="mb-0">01</p>
                            </li>
                            <li class="programming-item py-2">
                                <p class="mb-0">MIE</p>
                                <p class="mb-0">01</p>
                            </li>
                            <li class="programming-item py-2">
                                <p class="mb-0">MIE</p>
                                <p class="mb-0">01</p>
                            </li>
                            <li class="programming-item py-2">
                                <p class="mb-0">MIE</p>
                                <p class="mb-0">01</p>
                            </li>
                            <li class="programming-item py-2">
                                <p class="mb-0">MIE</p>
                                <p class="mb-0">01</p>
                            </li>
                            <li class="programming-item py-2">

                                <p class="mb-0">MIE</p>
                                <p class="mb-0">01</p>

                            </li>
                            <li class="programming-item py-2">
                                <p class="mb-0">MIE</p>
                                <p class="mb-0">01</p>
                            </li>
                            <li class="programming-item py-2">

                                <p class="mb-0">MIE</p>
                                <p class="mb-0">01</p>

                            </li>
                            <li class="programming-item py-2">

                                <p class="mb-0">MIE</p>
                                <p class="mb-0">01</p>

                            </li>
                        </div>
                    </section>
                    <div class="p-3 border-t border-r border-l border-b position-relative mb-3">
                        <img src="{{ asset('/images/pencil.svg') }}" alt="" class="pencil pencil-edit"
                            chapter_id="${program.chapter_id}">
                        <div class="schedule-container col-12 p-5 mx-auto mt-0">
                            <p class="mb-3 h3 schedule-title a-text-plus a-text-black-brown-two">
                                Lorem ipsum
                            </p>
                            <div class="schedule-item-body">
                                <div class="schedule-poster">
                                    <div class="poster">
                                        <div class="thumbnail-edit" _id="${program.chapter_id}">
                                            <img src="{{ asset('/images/synopsis/image-synopsis-horizontal.png') }}"
                                                class="w-100" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="schedule-details">
                                    <div class="schedule-details-header">
                                        <div>
                                            <p class="schedule a-text-semi-brown-two">
                                                ${program.time} hrs.
                                            </p>
                                            <p class="rating a-text-semibold-warm-grey-five">
                                                Clasificación: A
                                            </p>
                                        </div>
                                        <div>
                                            <button title="Agregar a mi lista"
                                                class="button-none add-favorites programing-button" type="button"
                                                _id="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="44"
                                                    viewBox="0 0 48 44">
                                                    <path class="heart-gray" fill="none" fill-rule=" evenodd"
                                                        stroke="#7A7777" stroke-width="3"
                                                        d="M33.709 2c-2.54 0-4.866.82-6.914 2.438-1.033.817-1.97 1.816-2.795 2.983-.825-1.166-1.762-2.166-2.795-2.983C19.157 2.821 16.83 2 14.29 2c-3.397 0-6.523 1.39-8.8 3.915C3.24 8.409 2 11.818 2 15.512c0 3.802 1.387 7.283 4.364 10.954 2.663 3.284 6.491 6.617 10.924 10.477 1.514 1.318 2.886 2.198 4.667 3.79C22.426 41.152 23.374 42 24 42c.626 0 1.574-.847 2.044-1.267 1.782-1.592 3.155-2.472 4.669-3.791 4.432-3.86 8.26-7.192 10.923-10.477C44.614 22.795 46 19.315 46 15.511c0-3.693-1.24-7.102-3.49-9.596C40.231 3.39 37.105 2 33.708 2z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="schedule-description a-text-regular-warm-grey-five s1"
                                            id="synopsis-edi"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Integer et nunc elit. Proin et nibh vitae massa molestie blandit eget at
                                            neque.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-3 border-t border-r border-l border-b position-relative mb-3">
                        <img src="{{ asset('/images/pencil.svg') }}" alt="" class="pencil pencil-edit"
                            chapter_id="${program.chapter_id}">
                        <div class="schedule-container col-12 p-5 mx-auto mt-0">
                            <p class="mb-3 h3 schedule-title a-text-plus a-text-black-brown-two">
                                Lorem ipsum
                            </p>
                            <div class="schedule-item-body">
                                <div class="schedule-poster">
                                    <div class="poster">
                                        <div class="thumbnail-edit" _id="${program.chapter_id}">
                                            <img src="{{ asset('/images/synopsis/image-synopsis-horizontal.png') }}"
                                                class="w-100" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="schedule-details">
                                    <div class="schedule-details-header">
                                        <div>
                                            <p class="schedule a-text-semi-brown-two">
                                                ${program.time} hrs.
                                            </p>
                                            <p class="rating a-text-semibold-warm-grey-five">
                                                Clasificación: A
                                            </p>
                                        </div>
                                        <div>
                                            <button title="Agregar a mi lista"
                                                class="button-none add-favorites programing-button" type="button"
                                                _id="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="44"
                                                    viewBox="0 0 48 44">
                                                    <path class="heart-gray" fill="none" fill-rule=" evenodd"
                                                        stroke="#7A7777" stroke-width="3"
                                                        d="M33.709 2c-2.54 0-4.866.82-6.914 2.438-1.033.817-1.97 1.816-2.795 2.983-.825-1.166-1.762-2.166-2.795-2.983C19.157 2.821 16.83 2 14.29 2c-3.397 0-6.523 1.39-8.8 3.915C3.24 8.409 2 11.818 2 15.512c0 3.802 1.387 7.283 4.364 10.954 2.663 3.284 6.491 6.617 10.924 10.477 1.514 1.318 2.886 2.198 4.667 3.79C22.426 41.152 23.374 42 24 42c.626 0 1.574-.847 2.044-1.267 1.782-1.592 3.155-2.472 4.669-3.791 4.432-3.86 8.26-7.192 10.923-10.477C44.614 22.795 46 19.315 46 15.511c0-3.693-1.24-7.102-3.49-9.596C40.231 3.39 37.105 2 33.708 2z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="schedule-description a-text-regular-warm-grey-five s1"
                                            id="synopsis-edi"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Integer et nunc elit. Proin et nibh vitae massa molestie blandit eget at
                                            neque.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-3 border-t border-r border-l border-b position-relative mb-3">
                        <img src="{{ asset('/images/pencil.svg') }}" alt="" class="pencil pencil-edit"
                            chapter_id="${program.chapter_id}">
                        <div class="schedule-container col-12 p-5 mx-auto mt-0">
                            <p class="mb-3 h3 schedule-title a-text-plus a-text-black-brown-two">
                                Lorem ipsum
                            </p>
                            <div class="schedule-item-body">
                                <div class="schedule-poster">
                                    <div class="poster">
                                        <div class="thumbnail-edit" _id="${program.chapter_id}">
                                            <img src="{{ asset('/images/synopsis/image-synopsis-horizontal.png') }}"
                                                class="w-100" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="schedule-details">
                                    <div class="schedule-details-header">
                                        <div>
                                            <p class="schedule a-text-semi-brown-two">
                                                ${program.time} hrs.
                                            </p>
                                            <p class="rating a-text-semibold-warm-grey-five">
                                                Clasificación: A
                                            </p>
                                        </div>
                                        <div>
                                            <button title="Agregar a mi lista"
                                                class="button-none add-favorites programing-button" type="button"
                                                _id="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="44"
                                                    viewBox="0 0 48 44">
                                                    <path class="heart-gray" fill="none" fill-rule=" evenodd"
                                                        stroke="#7A7777" stroke-width="3"
                                                        d="M33.709 2c-2.54 0-4.866.82-6.914 2.438-1.033.817-1.97 1.816-2.795 2.983-.825-1.166-1.762-2.166-2.795-2.983C19.157 2.821 16.83 2 14.29 2c-3.397 0-6.523 1.39-8.8 3.915C3.24 8.409 2 11.818 2 15.512c0 3.802 1.387 7.283 4.364 10.954 2.663 3.284 6.491 6.617 10.924 10.477 1.514 1.318 2.886 2.198 4.667 3.79C22.426 41.152 23.374 42 24 42c.626 0 1.574-.847 2.044-1.267 1.782-1.592 3.155-2.472 4.669-3.791 4.432-3.86 8.26-7.192 10.923-10.477C44.614 22.795 46 19.315 46 15.511c0-3.693-1.24-7.102-3.49-9.596C40.231 3.39 37.105 2 33.708 2z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="schedule-description a-text-regular-warm-grey-five s1"
                                            id="synopsis-edi"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Integer et nunc elit. Proin et nibh vitae massa molestie blandit eget at
                                            neque.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- SLAIDER -->









    <!-- **************************************************************************************************** -->
    <div class="modal show modal-delete-user" id="savesino" role="dialog">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content align-item-center centro  modal-save">
                <div class="modal-body ">
                    <img src="./images/bien.svg" alt="aprovado" class="m-3">
                    <h3 class="h3 a-text-medium-brownish mt-3 mb-3">Fueron guardados los cambios en la sinópsis de:</h3>
                    <div class="d-flex justify-content-center mb-5">
                        <label for="" class="h3 a-text-bold-brownish">Mad Men</label>
                    </div>
                    <div class="d-flex justify-content-center mb-5">
                        <button type="button" class="a-btn-border-teal  a-btn-general-modal text-no  mr-5 btn-focus"
                            id="back-list" data-dismiss="modal">VOLVER AL LISTADO</button>

                        <button type="button" class="a-btn-teal  a-btn-general-modal text-si  btn-focus"
                            id="modal-button" data-dismiss="modal">SIGUIENTE SINÓPSIS</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--menu de logos-->
    <div class="modal  modal-edit-icons pr-0" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered m-0" role="document">
            <div class="modal-content align-item-center centro " style="width: 100%">
                <div class="modal-body ">
                    <h2 class="h2 text-center a-text-black-brown-two mt-2 ">MENÚ DE CANALES</h2>
                    <hr class="d-flex align-content-center separationhr mb-4 col-12">
                    <!--div padre-->
                    <form>
                        <div class="d-flex justify-content-around col-11 mb-5 mt-5">
                            <!--Div primer logo-->
                            <div class="d-flex justify-content-center  slider-logo mt-5">
                                <!--pagination-->
                                <div class=" d-flex programming-dots ">
                                    <p
                                        class=' a-text-bold-white slider-pagination slider-pagination-logo slider-pagination-active '>
                                        1</p>
                                </div>
                                <div class="centro position-relative logo-lading-container mb-3">
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

                                    <!--Div de los url-->
                                    <div class="mt-5 d-flex justify-content-center">
                                        <img src="{{ asset('/images/basic-icons/link.svg') }}" alt="logo-link"
                                            class="mr-3">
                                        <input type="text" name="links" id="link-logo-canal-claro"
                                            class="urls a-text-bold-warm text-normal" placeholder=" Enlace o URL">

                                    </div>

                                </div>
                            </div>
                            <div class="d-flex justify-content-center   slider-logo mt-5">
                                <!--pagination-->
                                <div class=" d-flex programming-dots ">
                                    <p class='a-text-bold-teal slider-pagination slider-pagination-logo pag'>2</p>
                                </div>
                                <!--cargar imagenes-->
                                <div class="centro position-relative mb-3 logo-lading-container">
                                    <div class="bor mx-auto position-relative thumbnail-image-program"
                                        id="thumbnail-home-horizontal">
                                        <input type="file" name="image-icon2" id="image-icon2"
                                            class="input-image-program logo-landing d-none">
                                        <label for="image-icon2"
                                            class="mb-0 cursor-pointer d-flex justify-content-center align-items-center h-100 flex-column load-modales">
                                            <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                                                class="add-photo " style="z-index:10000" />
                                            <span class="a-text-bold-warm text-plus p-2 pr-3 pl-3  white-shadow"
                                                style="z-index:10000">472px X
                                                295px</span>
                                            <img src="{{ asset('/images/synopsis/image-synopsis-horizontal.png') }}"
                                                class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program"
                                                id="icon_concert_channel_edit" />
                                        </label>
                                    </div>
                                    <!--div urls-->
                                    <div class="mt-5 d-flex justify-content-center">
                                        <img src="{{ asset('/images/basic-icons/link.svg') }}" alt="logo-link"
                                            class="mr-3">
                                        <input type="text" name="links" id="link-logo-concert-channel"
                                            class="urls a-text-bold-warm text-normal" placeholder=" Enlace o URL">

                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center slider-logo mt-5 ">
                                <!--pagination-->
                                <div class=" programming-dots ">
                                    <p class='a-text-bold-teal slider-pagination slider-pagination-logo '>3 </p>
                                </div>
                                <!--cargar imagenes-->
                                <div class="centro position-relative mb-3 logo-lading-container">
                                    <div class="bor mx-auto position-relative thumbnail-image-program"
                                        id="thumbnail-home-horizontal">
                                        <input type="file" name="image-icon3" id="image-icon3"
                                            class="input-image-program logo-landing d-none">
                                        <label for="image-icon3"
                                            class="mb-0 cursor-pointer d-flex justify-content-center align-items-center h-100 flex-column load-modales">
                                            <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                                                class="add-photo " style="z-index:10000" />
                                            <span class="a-text-bold-warm text-plus p-2 pr-3 pl-3  white-shadow"
                                                style="z-index:10000">472px X
                                                295px</span>
                                            <img src="{{ asset('/images/synopsis/image-synopsis-horizontal.png') }}"
                                                class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program"
                                                id="icon_claro_cinema_edit" />
                                        </label>
                                    </div>
                                    <!--div urls-->
                                    <div class="mt-5 d-flex justify-content-center">
                                        <img src="{{ asset('/images/basic-icons/link.svg') }}" alt="logo-link"
                                            class="mr-3">
                                        <input type="text" name="links" id="link-logo-claro-cinema"
                                            class="urls a-text-bold-warm text-normal" placeholder=" Enlace o URL">
                                    </div>
                                </div>
                            </div>

                        </div>
                        <!--div botones-->
                        <div class="text-center  mb-4 d-flex justify-content-center pb-2">
                            <button
                                class="d-flex m-0  mr-3  btn-grilla a-btn-basic-small a-btn-basic-small text-uppercase a-text-MBlack text-plus edit-landing-modal-button"
                                id="edit-logos-button" data-dismiss="modal">ACEPTAR</button>
                            <a href="#delete-info" role="button"
                                class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel"
                                data-toggle="modal">CANCELAR</a>

                        </div>
                    </form>
                </div>

            </div>
        </div>

    </div>
    <div class="modal pr-0 fade modal-edit-program" id="modaledi" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLongTitle" aria-hidden="true" style="overflow: auto;">
        <div class="modal-dialog modal-dialog-centered m-0" role="document" style="max-width: 100%">
            <div class="modal-content">
                <div class="modal-body pt-0">
                    <h2 class="edit-program-modal-title h2 text-center a-text-black-brown-two pt-3">PROGRAMACIÓN
                        PRINCIPAL - CARRUSEL 1</h2>
                    <hr class="d-flex align-content-center separationhr col-11 mt-3 mb-0">

                    <div class="col-11 mx-auto">
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
                                    <img src="
                                                                                                                                              {{ asset('/images/basic-icons/warning-orange-icon.svg') }}"
                                        alt="">
                                    <p class="mb-0 ml-3 a-text-bold-orange">Proporcionar información</p>
                                </div>
                            </div>

                        </section>
                        <!--Slider de calendario-->
                        <section class="col-8 mx-auto">
                            <h3 class="h3 a-text-semibold-brownish-grey-three text-uppercase mb-5 mt-6"
                                id="slider-calendar-current-date">Octubre 2020</h3>
                            <div class="mb-5 calendar-slider">
                                <li class="programming-item programming-item-active">
                                    <p class="mb-0">MIER</p>
                                    <p class="mb-0">01</p>
                                </li>
                                <li class="programming-item">
                                    <p class="mb-0">MIER</p>
                                    <p class="mb-0">01</p>
                                </li>
                                <li class="programming-item">
                                    <p class="mb-0">MIER</p>
                                    <p class="mb-0">01</p>
                                </li>
                                <li class="programming-item">
                                    <p class="mb-0">MIER</p>
                                    <p class="mb-0">01</p>
                                </li>
                                <li class="programming-item">
                                    <p class="mb-0">MIER</p>
                                    <p class="mb-0">01</p>
                                </li>
                                <li class="programming-item">
                                    <p class="mb-0">MIER</p>
                                    <p class="mb-0">01</p>
                                </li>
                                <li class="programming-item">
                                    <p class="mb-0">MIER</p>
                                    <p class="mb-0">01</p>
                                </li>
                                <li class="programming-item">
                                    <p class="mb-0">MIER</p>
                                    <p class="mb-0">01</p>
                                </li>
                                <li class="programming-item">

                                    <p class="mb-0">MIER</p>
                                    <p class="mb-0">01</p>

                                </li>
                                <li class="programming-item">
                                    <p class="mb-0">MIER</p>
                                    <p class="mb-0">01</p>
                                </li>
                                <li class="programming-item">

                                    <p class="mb-0">MIER</p>
                                    <p class="mb-0">01</p>

                                </li>
                                <li class="programming-item">

                                    <p class="mb-0">MIER</p>
                                    <p class="mb-0">01</p>

                                </li>
                                <li class="programming-item">

                                    <p class="mb-0">MIER</p>
                                    <p class="mb-0">01</p>

                                </li>
                                <li class="programming-item">
                                    <p class="mb-0">MIER</p>
                                    <p class="mb-0">01</p>

                                </li>
                            </div>
                        </section>
                        <!--Termómetro para elegir los horarios-->
                        <section class="thermometer mb-4">
                            <div class="thermometer-hours-container mt-4">
                                <ul class="thermometer-hours-list d-flex pr-3 pl-3">
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        0
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        1
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        2
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        3
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        4
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        5
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        6
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        7
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        8
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        9
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        10
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        11
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        12
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        13
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        14
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        15
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        16
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        17
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        18
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        19
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        20
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        21
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        22
                                    </li>
                                    <li
                                        class="thermometer-hours-item mr-1 text-center text-plus a-text-black-brown-two">
                                        23
                                    </li>
                                </ul>
                            </div>
                            <div class="position-relative mt-4">
                                <img src="{{ asset('/images/arrow-dark.svg') }}"
                                    class="arrow-thermometer arrow-thermometer-left" alt="arrow-left">
                                <div class="thermometer-container">
                                    <ul class="thermometer-schedule-list d-flex p-3">

                                    </ul>
                                </div>
                                <img src="{{ asset('/images/arrow-dark.svg') }}"
                                    class="arrow-thermometer arrow-thermometer-right" alt="arrow-right">
                            </div>
                        </section>
                        <div class="thermometer-notation mt-4 mb-7">
                            <ul class="p-0 thermometer-notation-list d-flex">
                                <li
                                    class="d-flex mr-5 thermometer-notation-item thermometer-notation-blue a-text-semi-brown-two">
                                    Horario de programación actual
                                <li>
                                <li
                                    class="d-flex mr-5 thermometer-notation-item thermometer-notation-orange a-text-semi-brown-two">
                                    Horario ocupado
                                <li>
                                <li
                                    class="d-flex mr-5 thermometer-notation-item thermometer-notation-gray a-text-semi-brown-two">
                                    Horario disponible
                                <li>
                            </ul>
                        </div>
                        <div class="edit-info-container">
                            <!--Imagen de programa en slider-->
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
                                        <img src="{{ asset('/images/heart-icon.svg') }}" class="thumbnail-heart-icon"
                                            alt="heart-icon" />
                                        <div class="edit-program-camera text-center">
                                            <img src="{{ asset('/images/synopsis/camara.svg') }}"
                                                class="edit-program-icon-image" alt="camera" />
                                            <p
                                                class="p-2 mb-0 text-center size-thumbnail-text text-plus a-text-bold-brown-two">
                                                472
                                                x 245px</p>
                                        </div>

                                        <img src="{{ asset('/images/synopsis/image-synopsis-carrusel.jpg') }}" alt=""
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
                                                <input type="radio" name="sino-landing" id="yes-landing" value="3"
                                                    class="edit-switch-landing edit-landing-yes" key="in_landing" />
                                                <label for="yes-landing" id="siestado-landing"
                                                    class="mb-0 si-estilo cursor-pointer switch-label">
                                                    Sí</label>
                                                <input type="radio" name="sino-landing" id="no-landing" value="0"
                                                    class="edit-switch-landing switch-table-edit edit-landing-no"
                                                    key="in_landing" />
                                                <label for="no-landing" id="noestado-landing"
                                                    class="mb-0 no-estilo cursor-pointer switch-label">
                                                    No</label>
                                            </div>
                                            <!--Inputs radio-->
                                            <div class="d-flex align-items-center mb-3">
                                                <label class="checkradio d-flex ml-2 mb-0" for="landing-section-1">
                                                    <input type="radio" disabled name="dontlose"
                                                        class="switch-table-edit edit-carrusel-1" value="1"
                                                        id="landing-section-1" key="in_landing" />
                                                    <span class="checkmark"></span>
                                                </label>
                                                <span
                                                    class="a-text-bold-silver cursor-pointer ml-2 text-uppercase">Carrusel
                                                    1</span>
                                                <label class="checkradio d-flex ml-2 mb-0" for="landing-section-2">
                                                    <input type="radio" disabled name="dontlose"
                                                        class="mb-0 switch-table-edit edit-carrusel-2" value="2"
                                                        id="landing-section-2" key="in_landing" />
                                                    <span class="checkmark"></span>
                                                </label>
                                                <span
                                                    class="cursor-pointer a-text-bold-silver ml-2 text-uppercase">Carrusel
                                                    2</span>
                                            </div>
                                            <div>
                                                <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Fecha
                                                </p>
                                                <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                    <span class="a-text-bold-warm">Inicio: <input type="text"
                                                            class="input-basic edit-program-input a-text-bold-warm edit-program-attribute-text schedule-date-input edit-landing-date-begin"
                                                            placeholder="00-00-0000" key="in_landing_begin" /></span>
                                                </div>
                                                <div class="mb-4 text-center edit-rectangle-small-container py-3">
                                                    <span class="a-text-bold-warm">Fin: <input type="text"
                                                            class="input-basic edit-program-input a-text-bold-warm edit-program-attribute-text schedule-date-input edit-landing-date-end"
                                                            key="in_landing_expiration" placeholder="00-00-0000"></span>
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
                                                <input type="radio" name="sino-home" id="edit-in-home-yes" value="1"
                                                    class="edit-switch-home edit-program-switch edit-in-home-yes"
                                                    key="in_home" />
                                                <label for="edit-in-home-yes" id="siestado-landing"
                                                    class="si-estilo cursor-pointer mb-0 switch-label">
                                                    Sí</label>
                                                <input type="radio" name="sino-home" id="edit-in-home-no" value="0"
                                                    checked class="edit-switch-home edit-program-switch edit-in-home-no"
                                                    key="in_home" />
                                                <label for="edit-in-home-no" id="noestado-landing"
                                                    class="mb-0 no-estilo cursor-pointer switch-label">
                                                    No</label>
                                            </div>
                                            <div>
                                                <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Fecha
                                                </p>
                                                <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                                    <span class="a-text-bold-warm">Inicio: <input key="in_home_begin"
                                                            type="text"
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
                                                <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Fecha
                                                </p>
                                                <div class="text-center edit-rectangle-small-container py-2 d-flex align-content-center justify-content-center"
                                                    style="margin-bottom: 81px">
                                                    <span class="a-text-bold-warm">
                                                        <img src="{{ asset('images/calendario.svg') }}" alt=""
                                                            class="mr-3">
                                                        <input key="" type=" text"
                                                            class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date"
                                                            placeholder="00-00-0000"></span>
                                                </div>
                                            </div>
                                            <p class="mb-3 pt-3 text-plus a-text-medium-coolgray text-uppercase">Hora
                                            </p>
                                            <div
                                                class="text-center edit-rectangle-small-container d-flex align-content-center justify-content-center py-2">
                                                <span class="a-text-bold-warm"><img
                                                        src="{{ asset('images/reloj.svg') }}" alt="" class="mr-3"><input
                                                        type="text"
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
                                            <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program year
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
                                            <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program title
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
                                            <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program genre
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
                                            <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule item
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
                                            <p class="text-plus text-uppercase a-text-bold-brown-two">Schedule item log
                                                date
                                            </p>
                                            <div>
                                                <p class="a-text-medium-brown-two text-plus text-uppercase
                                                ">Fecha
                                                </p>
                                                <div
                                                    class="mb-3 text-center edit-rectangle-small-container py-3 d-flex align-items-center justify-content-center">
                                                    <img src="{{ asset('images/calendario.svg') }}" alt="" class="mr-3">
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
                                                <input type="radio" name="subbed" id="yes-subbed" value="1"
                                                    class="edit-program-switch switch-landing edit-subbed-yes"
                                                    key="subbed" />
                                                <label for="yes-subbed" id="siestado-landing"
                                                    class="si-estilo cursor-pointer mb-0 switch-label">
                                                    Sí</label>
                                                <input type="radio" name="subbed" id="no-dubbed" value="0" checked
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
                                                <input type="radio" name="dubbed" id="yes-dubbed" value="1"
                                                    class="edit-program-switch switch-landing edit-dubbed-yes"
                                                    key="dubbed" />
                                                <label for="yes-dubbed" id="siestado-landing"
                                                    class="si-estilo cursor-pointer mb-0 switch-label">
                                                    Sí</label>
                                                <input type="radio" name="dubbed" id="no-dubbed" value="0" checked
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
                                            <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Audio 5.1<br>
                                                available
                                            </p>
                                            <div class="d-flex">
                                                <input type="radio" name="audio5" id="yes-audio5" value="1"
                                                    class="edit-program-switch switch-landing edit-audio5-yes"
                                                    key="audio5" />
                                                <label for="yes-audio5" id="siestado-landing"
                                                    class="si-estilo cursor-pointer mb-0 switch-label">
                                                    Sí</label>
                                                <input type="radio" name="audio5" id="no-audio5" value="0" checked
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
                        </div>

                    </div>
                    <div class=" d-flex justify-content-center">
                        <section class="text-center mb-3 d-flex justify-content-center">
                            <button
                                class="d-flex  mr-3  m-0 text-uppercase btn-grilla a-btn-basic-small btn-grilla a-btn-basic-small text-uppercase a-text-MBlack text-plus edit-landing-modal-button"
                                data-dismiss="modal" id="edit-program-modal-button">ACEPTAR</button>
                        </section>

                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="modal modal-programming-carousel pr-0" id="modaledi" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLongTitle" aria-hidden="true" style="padding: 0px !important">
        <div class="modal-dialog modal-dialog-centered m-0" role="document" style="max-width: 100%;">
            <div class="modal-content">
                <div class="modal-body">


                    <h2 class="h2 text-center a-text-black-brown-two pt-3">BANNER PROGRAMACIÓN - CARRUSEL </h2>
                    <hr class="d-flex align-content-center separationhr col-11 mt-3 mb-0">
                    <!--Slider pagination-->
                    <div class="dots-container mx-auto d-flex justify-content-between">
                        <div class="d-flex">
                            <!--dots-->
                            <div class="programming-slider-dots mt-5 mb-5"></div>
                            <!--add slide-->
                            <img src="{{ asset('images/add-icon.svg') }}" class="add-programming-image cursor-pointer">
                        </div>
                        <!--Calendar-->
                        <div class="d-flex align-items-center">
                            <div>
                                <h3 class="text-uppercase h3 a-text-black-brown-two">Vigencia</h3>
                            </div>

                            <input type="text" id="programming-carrusel-calendar " class="d-none">
                            <label for="programming-carrusel-calendar"
                                class="ml-4 mb-0 date-button date-start-table d-flex align-items-center  pl-3 pr-3"
                                id="date-start-table">
                                <img src="./images/calendario.svg" alt="">
                                <div class="ml-3">
                                    <p class="text-small d-block mb-0 a-text-semibold-warmgrey">Inicio</p>
                                    <p class="text-normal mb-0 a-text-bold-charcoal" id="start-date-text">DD-MM-YYYY</p>
                                </div>
                            </label>

                            <!--Fecha de fin de calendario-->
                            <label for="programming-carrusel-calendar"
                                class="mb-0 ml-4 date-button date-end-table d-flex align-items-center pl-3 pr-3">
                                <img src="./images/calendario.svg" alt="">
                                <div class="ml-3">
                                    <p class="text-small d-block mb-0 a-text-semibold-warmgrey">Fin</p>
                                    <p class="text-normal mb-0 a-text-bold-charcoal" id="end-date-text">DD-MM-YYYY</p>
                                </div>
                            </label>
                        </div>
                    </div>

                    <!--Slider-->
                    <div class="programming-slider mx-auto">
                        <!--Slide
                  <div class="bor thumbnail-image-program position-relative h-100">
                      <input type="file" name="image_programming[]" id="image_programming_1" class="input-image-program d-none image_programming " data-index="1">
                      <label for="image_programming_1"
                          class="h-100 mb-0 d-flex justify-content-center  align-items-center flex-column   load-programming-carousel">
                          <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                              class=" cursor-pointer add-photo " />
                          <span class="a-text-bold-warm text-plus mt-3">1000px X 342px</span>
                          <img src="{{ asset('/images/synopsis/image-synopsis-carrusel.jpg') }}"
                              class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                      </label>
                  </div>
                  Slide
                  <div class="bor thumbnail-image-program position-relative h-100">
                      <input type="file" name="image_programming[]" id="image_programming_2" class="input-image-program d-none image_programming " data-index="2">
                      <label for="image_programming_2"
                          class="h-100 mb-0 d-flex justify-content-center align-items-center  flex-column load-modales">
                          <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                              class=" cursor-pointer add-photo " />
                          <span class="a-text-bold-warm text-plus mt-3">1000px X 342px</span>
                          <img src="{{ asset('/images/synopsis/image-synopsis-carrusel.jpg') }}"
                              class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                      </label>
                  </div>
                  Slide
                  <div class="bor thumbnail-image-program position-relative h-100">
                      <input type="file" name="image_programming[]" id="image_programming_3" class="input-image-program d-none image_programming" data-index="3">
                      <label for="image_programming_3"
                          class="h-100 mb-0 d-flex justify-content-center  align-items-center flex-column load-modales">
                          <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                              class=" cursor-pointer add-photo" />
                          <span class="a-text-bold-warm text-plus mt-3">1000px X 342px</span>
                          <img src="{{ asset('/images/synopsis/image-synopsis-carrusel.jpg') }}"
                              class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                      </label>
                  </div>
                   Slide
                   <div class="bor thumbnail-image-program position-relative h-100">
                      <input type="file" name="image_programming[]" id="image_programming_3" class="input-image-program d-none image_programming" data-index="3">
                      <label for="image_programming_3"
                          class="h-100 mb-0 d-flex justify-content-center  align-items-center flex-column load-modales">
                          <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                              class=" cursor-pointer add-photo" />
                          <span class="a-text-bold-warm text-plus mt-3">1000px X 342px</span>
                          <img src="{{ asset('/images/synopsis/image-synopsis-carrusel.jpg') }}"
                              class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                      </label>
                  </div>


              End slider-->
                    </div>
                    <!--Buttons-->
                    <div class="text-center mb-3 d-flex justify-content-center">
                        <button
                            class="edit-landing-modal-button d-flex mr-3 text-uppercase  m-0 btn-grilla a-btn-basic-small btn-grilla a-btn-basic-small text-uppercase a-text-MBlack text-plus"
                            id="image-programming-button" landin="canal claro">aceptar</button>
                        <a href="#delete-info" role="button"
                            class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel"
                            data-toggle="modal">CANCELAR</a>

                        <!-- <button
                      class="d-inline-block text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal" data-toggle="modal"   >cancelar</button>-->
                    </div>

                </div>

            </div>
        </div>
    </div>

    <!--modal para perder lo hecho en los landing de edit-->
    <div class=" modal  delete-info" data-backdrop-limit="1" id="delete-info" tabindex="-1" role="dialog"
        data-modal-parent="#modalbanner">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content  ">
                <div class="modal-body ">
                    <img src="images/basic-icons/delete.svg" alt="advertencia de borrado" class="mx-auto d-flex mt-5 ">
                    <p class="a-text-medium-warm-grey-three h3 mt-5 centro">Se perderá toda la información, NO PODRÁS
                        recuperar la <span class="h3 a-text-bold-warm-grey-three"> información.</span></p>
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
    <!-- **************************************************************************************************** -->

</body>
