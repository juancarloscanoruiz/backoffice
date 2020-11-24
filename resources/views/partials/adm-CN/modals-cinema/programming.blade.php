<div class="modal pr-0 modal-programming-landing" id="modaledi" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document" style="max-width: 100%">
        <div class="modal-content">
            <div class="modal-body">
                <img src="{{ asset('/images/home/cinema-home-img.svg') }}" class="moda-programming-landing-logo" style="width: 100px;">
                <p class="a-text-bold-tomato h2 text-uppercase text-center">Programación</p>
                <!--Slider de calendario-->
                <h3 class="h3 a-text-semibold-brownish-grey-three text-uppercase mb-4 mt-5 slider-calendar-current-date" id="slider-calendar-current-date">Octubre 2020</h3>
                <section class="col-10 mx-auto">
                    <div class="mb-5 calendar-slider2">
                        <li class="programming-item programming-item-active py-2">
                            <p class="mb-0">MIER</p>
                            <p class="mb-0">01</p>
                        </li>
                        <li class="programming-item py-2">
                            <p class="mb-0">MIER</p>
                            <p class="mb-0">01</p>
                        </li>
                        <li class="programming-item py-2">
                            <p class="mb-0">MIER</p>
                            <p class="mb-0">01</p>
                        </li>
                        <li class="programming-item py-2">
                            <p class="mb-0">MIER</p>
                            <p class="mb-0">01</p>
                        </li>
                        <li class="programming-item py-2">
                            <p class="mb-0">MIER</p>
                            <p class="mb-0">01</p>
                        </li>
                        <li class="programming-item py-2">
                            <p class="mb-0">MIER</p>
                            <p class="mb-0">01</p>
                        </li>
                        <li class="programming-item py-2">
                            <p class="mb-0">MIER</p>
                            <p class="mb-0">01</p>
                        </li>
                        <li class="programming-item py-2">
                            <p class="mb-0">MIER</p>
                            <p class="mb-0">01</p>
                        </li>
                        <li class="programming-item py-2">

                            <p class="mb-0">MIER</p>
                            <p class="mb-0">01</p>

                        </li>
                        <li class="programming-item py-2">
                            <p class="mb-0">MIER</p>
                            <p class="mb-0">01</p>
                        </li>
                        <li class="programming-item py-2">

                            <p class="mb-0">MIER</p>
                            <p class="mb-0">01</p>

                        </li>
                        <li class="programming-item py-2">

                            <p class="mb-0">MIER</p>
                            <p class="mb-0">01</p>

                        </li>
                        <li class="programming-item py-2">

                            <p class="mb-0">MIER</p>
                            <p class="mb-0">01</p>

                        </li>
                        <li class="programming-item py-2">
                            <p class="mb-0">MIER</p>
                            <p class="mb-0">01</p>

                        </li>
                    </div>
                </section>
                <div class="modal-programming-contanier">
                    <div class="p-3 border-t border-r border-l border-b position-relative mb-3">
                        <img src="{{ asset('/images/pencil.svg') }}" alt="" class="pencil pencil-edit" chapter_id="${program.chapter_id}">
                        <div class="schedule-container col-12 p-5 mx-auto mt-0">
                            <p class="mb-3 h3 schedule-title a-text-plus a-text-black-brown-two">
                                Lorem ipsum
                            </p>
                            <div class="schedule-item-body">
                                <div class="schedule-poster">
                                    <div class="poster">
                                        <div class="thumbnail-edit" _id="${program.chapter_id}">
                                            <img src="{{ asset('/images/synopsis/image-synopsis-horizontal.png') }}" class="w-100" alt="">
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
                                            <button title="Agregar a mi lista" class="button-none add-favorites programing-button" type="button" _id="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="44" viewBox="0 0 48 44">
                                                    <path class="heart-gray" fill="none" fill-rule=" evenodd" stroke="#7A7777" stroke-width="3" d="M33.709 2c-2.54 0-4.866.82-6.914 2.438-1.033.817-1.97 1.816-2.795 2.983-.825-1.166-1.762-2.166-2.795-2.983C19.157 2.821 16.83 2 14.29 2c-3.397 0-6.523 1.39-8.8 3.915C3.24 8.409 2 11.818 2 15.512c0 3.802 1.387 7.283 4.364 10.954 2.663 3.284 6.491 6.617 10.924 10.477 1.514 1.318 2.886 2.198 4.667 3.79C22.426 41.152 23.374 42 24 42c.626 0 1.574-.847 2.044-1.267 1.782-1.592 3.155-2.472 4.669-3.791 4.432-3.86 8.26-7.192 10.923-10.477C44.614 22.795 46 19.315 46 15.511c0-3.693-1.24-7.102-3.49-9.596C40.231 3.39 37.105 2 33.708 2z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="schedule-description a-text-regular-warm-grey-five s1" id="synopsis-edi"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Integer et nunc elit. Proin et nibh vitae massa molestie blandit eget at
                                            neque.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-3 border-t border-r border-l border-b position-relative mb-3">
                        <img src="{{ asset('/images/pencil.svg') }}" alt="" class="pencil pencil-edit" chapter_id="${program.chapter_id}">
                        <div class="schedule-container col-12 p-5 mx-auto mt-0">
                            <p class="mb-3 h3 schedule-title a-text-plus a-text-black-brown-two">
                                Lorem ipsum
                            </p>
                            <div class="schedule-item-body">
                                <div class="schedule-poster">
                                    <div class="poster">
                                        <div class="thumbnail-edit" _id="${program.chapter_id}">
                                            <img src="{{ asset('/images/synopsis/image-synopsis-horizontal.png') }}" class="w-100" alt="">
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
                                            <button title="Agregar a mi lista" class="button-none add-favorites programing-button" type="button" _id="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="44" viewBox="0 0 48 44">
                                                    <path class="heart-gray" fill="none" fill-rule=" evenodd" stroke="#7A7777" stroke-width="3" d="M33.709 2c-2.54 0-4.866.82-6.914 2.438-1.033.817-1.97 1.816-2.795 2.983-.825-1.166-1.762-2.166-2.795-2.983C19.157 2.821 16.83 2 14.29 2c-3.397 0-6.523 1.39-8.8 3.915C3.24 8.409 2 11.818 2 15.512c0 3.802 1.387 7.283 4.364 10.954 2.663 3.284 6.491 6.617 10.924 10.477 1.514 1.318 2.886 2.198 4.667 3.79C22.426 41.152 23.374 42 24 42c.626 0 1.574-.847 2.044-1.267 1.782-1.592 3.155-2.472 4.669-3.791 4.432-3.86 8.26-7.192 10.923-10.477C44.614 22.795 46 19.315 46 15.511c0-3.693-1.24-7.102-3.49-9.596C40.231 3.39 37.105 2 33.708 2z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="schedule-description a-text-regular-warm-grey-five s1" id="synopsis-edi"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Integer et nunc elit. Proin et nibh vitae massa molestie blandit eget at
                                            neque.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-3 border-t border-r border-l border-b position-relative mb-3">
                        <img src="{{ asset('/images/pencil.svg') }}" alt="" class="pencil pencil-edit" chapter_id="${program.chapter_id}">
                        <div class="schedule-container col-12 p-5 mx-auto mt-0">
                            <p class="mb-3 h3 schedule-title a-text-plus a-text-black-brown-two">
                                Lorem ipsum
                            </p>
                            <div class="schedule-item-body">
                                <div class="schedule-poster">
                                    <div class="poster">
                                        <div class="thumbnail-edit" _id="${program.chapter_id}">
                                            <img src="{{ asset('/images/synopsis/image-synopsis-horizontal.png') }}" class="w-100" alt="">
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
                                            <button title="Agregar a mi lista" class="button-none add-favorites programing-button" type="button" _id="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="44" viewBox="0 0 48 44">
                                                    <path class="heart-gray" fill="none" fill-rule=" evenodd" stroke="#7A7777" stroke-width="3" d="M33.709 2c-2.54 0-4.866.82-6.914 2.438-1.033.817-1.97 1.816-2.795 2.983-.825-1.166-1.762-2.166-2.795-2.983C19.157 2.821 16.83 2 14.29 2c-3.397 0-6.523 1.39-8.8 3.915C3.24 8.409 2 11.818 2 15.512c0 3.802 1.387 7.283 4.364 10.954 2.663 3.284 6.491 6.617 10.924 10.477 1.514 1.318 2.886 2.198 4.667 3.79C22.426 41.152 23.374 42 24 42c.626 0 1.574-.847 2.044-1.267 1.782-1.592 3.155-2.472 4.669-3.791 4.432-3.86 8.26-7.192 10.923-10.477C44.614 22.795 46 19.315 46 15.511c0-3.693-1.24-7.102-3.49-9.596C40.231 3.39 37.105 2 33.708 2z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="schedule-description a-text-regular-warm-grey-five s1" id="synopsis-edi"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Integer et nunc elit. Proin et nibh vitae massa molestie blandit eget at
                                            neque.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="d-flex justify-content-center">
                        <button id="btn-acepta-modal-promo" class="m-0 mr-4 btn-grilla a-btn-basic-small text-plus a-text-MBlack">ACEPTAR</button>
                        <a href="#delete-info-programming" role="button" class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel" data-toggle="modal">CANCELAR</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal" data-backdrop-limit="1" id="delete-info-programming" tabindex="-1" role="dialog" data-modal-parent="#delete-info-programming">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content  ">
            <div class="modal-body ">
                <img src="images/basic-icons/delete.svg" alt="advertencia de borrado" class="mx-auto d-flex mt-5 ">
                <p class="a-text-medium-warm-grey-three h3 mt-5 centro">¿Deseas abandonar la edición?</p>
                <p class="a-text-medium-warm-grey-three h3 mt-4 centro">Perderás los cambios.</p>
            </div>

            <div class="text-center mb-5 mt-4 pt-3 pb-4">
                <button type="button" class="a-btn-basic-small a-btn-border-tomato mr-3 a-text-bold-tomato h1 close-modal-concert">ACEPTAR</button>

                <button type="button" class="a-btn-basic-small a-btn-tomato  a-text-MBlack  h1" data-dismiss="modal" aria-hidden="true">CANCELAR</button>
            </div>
        </div>
    </div>
</div>