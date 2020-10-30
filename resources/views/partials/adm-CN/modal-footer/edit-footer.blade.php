<div class="modal fade modal-footer" style="display: none; overflow: auto;">
    <div class="modal-dialog-centered modal-dialog max-width-modal-xl">
        <div class="modal-content">

            <div class="col-11 mx-auto">
                <p class="mb-2 mt-4 a-text-bold-black text-uppercase">Cargar imágenes en formato png</p>
                <h3
                    class="a-text-black-brown-two mb-0 text-center h3 d-flex justify-content-center mt-5 text-uppercase">
                    Footer
                </h3>
                <hr class="d-flex align-content-center separationhr col-11 mt-4 mb-5">
                <!---Imágenes de footer-->
                <div class="d-flex align-items-center justify-content-center mb-5">
                    <!--Imagen izquierda-->
                    <div class="bor mr-4 position-relative footer-image">
                        <input type="file" id="footer-image-left-input"
                            class="input-image-program footer-input-image d-none" key="image_left">
                        <label for="footer-image-left-input"
                            class="label-footer-main-image mb-0 cursor-pointer d-flex justify-content-center align-items-center h-100 flex-column load-modales">
                            <img src="./images/basic-icons/pencil-edit-teal.svg"
                                alt="add-photo" class="add-photo mb-3" style="z-index:10000">
                            <span class="a-text-bold-greyish-brown-two text-plus p-2 pr-3 pl-3  white-shadow"
                                style="z-index:10000">500px
                                X
                                376px</span>
                            <img src="{{ asset('images/synopsis/image-synopsis-horizontal.png') }}"
                                class="w-100 h-100 footer-image-left cursor-pointer image-cover prev-image-program thumbnail-image-program"
                                id="icon_concert_channel_edit">
                        </label>
                    </div>
                    <!--Imágen derecha-->
                    <div class="bor position-relative footer-image">
                        <input type="file" id="footer-image-right-input"
                            class="input-image-program footer-input-image d-none" key="image_right">
                        <label for="footer-image-right-input"
                            class="label-footer-main-image mb-0 cursor-pointer d-flex justify-content-center align-items-center h-100 flex-column load-modales">
                            <img src="./images/basic-icons/pencil-edit-teal.svg"
                                alt="add-photo" class="add-photo mb-3" style="z-index:10000">
                            <span class="a-text-bold-greyish-brown-two text-plus p-2 pr-3 pl-3  white-shadow"
                                style="z-index:10000">500px
                                X
                                376px</span>
                            <img src="{{ asset('images/synopsis/image-synopsis-horizontal.png') }}"
                                class="w-100 footer-image-right h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program"
                                id="icon_concert_channel_edit">
                        </label>
                    </div>
                </div>
                <div class="col-8 mx-auto text-center" id="social-media">
                    <!--¡Síguenos!-->
                    <input
                        class="footer-input-text w-100 border-0 shadow-black py-2 mb-5 h2 text-center text-uppercase a-text-black-tomato"
                        value="¡Síguenos!" />
                    <!--Redes sociales-->
                    <div class="d-flex justify-content-center mb-5">
                        <!--Facebook-->
                        <div id="social-media-1">
                            <div class="d-flex align-items-center mr-2 flex-column">
                                <input type="file" name="image-icon2" id="social-media-1-input"
                                    class="input-image-program footer-input-image d-none">
                                <label for="social-media-1-input"
                                    class="position-relative label-footer cursor-pointer d-flex justify-content-center align-items-center flex-column oval-icon-social-media">
                                    <div class="mask-white"></div>
                                    <img src="./images/basic-icons/pencil-edit-teal.svg"
                                        alt="add-photo" class="add-photo" style="z-index:10000">
                                    <span class="a-text-bold-greyish-brown-two">58px X 58px</span>
                                    <img src=""
                                        class="w-100 cursor-pointer image-cover prev-image-program thumbnail-image-program"
                                        id="footer-social-media-icon-1">
                                </label>
                                <div>
                                    <img class="inp_url" src="{{ asset('images/basic-icons/link.svg') }}" alt=""
                                        id="media-link-1">
                                    <input class="inp_url border-0 shadow-black a-text-bold-warm py-2 input-url-footer"
                                        value="" id="footer-social-media-link-1" />
                                </div>
                            </div>
                        </div>

                        <!--Instagram-->
                        <div id="social-media-2">
                            <div class="d-flex align-items-center mr-2 flex-column">
                                <input type="file" id="social-media-2-input"
                                    class="input-image-program footer-input-image d-none">
                                <label for="social-media-2-input"
                                    class="position-relative label-footer cursor-pointer d-flex justify-content-center align-items-center flex-column oval-icon-social-media">
                                    <img src="./images/basic-icons/pencil-edit-teal.svg"
                                        alt="add-photo" class="add-photo" style="z-index:10000">
                                    <div class="mask-white"></div>
                                    <span class="a-text-bold-greyish-brown-two">58px X 58px</span>
                                    <img src=""
                                        class="w-100 cursor-pointer image-cover prev-image-program thumbnail-image-program"
                                        id="footer-social-media-icon-2">
                                </label>
                                <div>
                                    <img class="inp_url" src="{{ asset('images/basic-icons/link.svg') }}" alt=""
                                        id="media-link-2">
                                    <input class="inp_url border-0 shadow-black a-text-bold-warm py-2 input-url-footer"
                                        value="" id="footer-social-media-link-2" />
                                </div>
                            </div>
                        </div>

                        <!--Twitter-->
                        <div id="social-media-3">
                            <div class="d-flex align-items-center mr-2 flex-column">
                                <input type="file" id="social-media-3-input"
                                    class="input-image-program footer-input-image d-none">
                                <label for="social-media-3-input"
                                    class="position-relative label-footer cursor-pointer d-flex justify-content-center align-items-center flex-column oval-icon-social-media">
                                    <div class="mask-white"></div>
                                    <img src="./images/basic-icons/pencil-edit-teal.svg"
                                        alt="add-photo" class="add-photo" style="z-index:10000">
                                    <span class="a-text-bold-greyish-brown-two">58px X 58px</span>
                                    <img src=""
                                        class="w-100 cursor-pointer image-cover prev-image-program thumbnail-image-program"
                                        id="footer-social-media-icon-3">
                                </label>
                                <div>
                                    <img class="inp_url" src="{{ asset('images/basic-icons/link.svg') }}" alt=""
                                        id="media-link-3">
                                    <input class="inp_url border-0 shadow-black a-text-bold-warm py-2 input-url-footer"
                                        value="" id="footer-social-media-link-3" />
                                </div>
                            </div>
                        </div>

                        <!--Youtube-->
                        <div id="social-media-4">
                            <div class="d-flex align-items-center flex-column">
                                <input type="file" name="image-icon2" id="social-media-4-input"
                                    class="input-image-program footer-input-image d-none">
                                <label for="social-media-4-input"
                                    class="position-relative label-footer cursor-pointer d-flex justify-content-center align-items-center flex-column oval-icon-social-media">
                                    <div class="mask-white"></div>
                                    <img src="./images/basic-icons/pencil-edit-teal.svg"
                                        alt="add-photo" class="add-photo" style="z-index:10000">
                                    <span class="a-text-bold-greyish-brown-two">58px X 58px</span>
                                    <img src=""
                                        class="w-100 cursor-pointer image-cover prev-image-program thumbnail-image-program"
                                        id="footer-social-media-icon-4">
                                </label>
                                <div>
                                    <img class="inp_url" src="{{ asset('images/basic-icons/link.svg') }}" alt=""
                                        id="media-link-4">
                                    <input class="inp_url border-0 shadow-black a-text-bold-warm py-2 input-url-footer"
                                        value="" id="footer-social-media-link-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!---Links a landings-->
                <div class="mb-5 d-flex justify-content-center">
                    <div class="d-flex align-items-center">
                        <div class="menu-item-container d-flex flex-column mr-4">
                            <!--¿Quiénes Somos?--->
                            <input type="text" key="menu_1_opcion_1_title" value="¿Quiénes Somos?"
                                class="border-0 footer-input-text text-center p-2 inpuut-footer-menu-item shadow-black a-text-bold-warm"
                                id="footer-menu-1-opcion1-title">
                            <div class="no-gutters d-flex mt-4">
                                <div class="col-4">
                                    <img class="inp_url" src="{{ asset('images/basic-icons/link.svg') }}" alt=""
                                        id="opcion1-link">
                                </div>
                                <div class="col-8">
                                    <input
                                        class="inp_url w-100 border-0 shadow-black a-text-bold-warm py-2 input-url-footer"
                                        id="footer-menu-1-opcion1-link" />
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-column mr-4 menu-item-container">
                            <!--Canal Claro--->
                            <input type="text" key="menu_1_opcion_2_title" value="Canal Claro"
                                class="border-0 footer-input-text text-center p-2 inpuut-footer-menu-item shadow-black a-text-bold-warm"
                                id="footer-menu-1-opcion2-title">
                            <div class="no-gutters d-flex mt-4">
                                <div class="col-4">
                                    <img class="inp_url" src="{{ asset('images/basic-icons/link.svg') }}" alt=""
                                        id="opcion2-link">
                                </div>
                                <div class="col-8">
                                    <input
                                        class="inp_url w-100 border-0 shadow-black a-text-bold-warm py-2 input-url-footer"
                                        id="footer-menu-1-opcion2-link" />
                                </div>
                            </div>
                        </div>
                        <!--Concert Channel-->
                        <div class="d-flex flex-column mr-4 menu-item-container">
                            <input type="text" key="menu_1_opcion_4_title" value="Concert Channel"
                                class="border-0 footer-input-text text-center p-2 inpuut-footer-menu-item shadow-black a-text-bold-warm"
                                id="footer-menu-1-opcion3-title">
                            <div class="no-gutters d-flex mt-4">
                                <div class="col-4">
                                    <img class="inp_url" src="{{ asset('images/basic-icons/link.svg') }}" alt=""
                                        id="opcion3-link">
                                </div>
                                <div class="col-8">
                                    <input
                                        class="inp_url w-100 border-0 shadow-black a-text-bold-warm py-2 input-url-footer"
                                        value="www.facebookd.com" id="footer-menu-1-opcion3-link" />
                                </div>
                            </div>
                        </div>
                        <!--Claro Cinema-->
                        <div class="d-flex flex-column mr-4 menu-item-container">
                            <input type="text" key="menu_1_opcion_3_title" value="Claro Cinema"
                                class="border-0 footer-input-text text-center p-2 inpuut-footer-menu-item shadow-black a-text-bold-warm"
                                id="footer-menu-1-opcion4-title">
                            <div class="no-gutters d-flex mt-4">
                                <div class="col-4">
                                    <img class="inp_url" src="{{ asset('images/basic-icons/link.svg') }}" alt=""
                                        id="opcion4-link">
                                </div>
                                <div class="col-8">
                                    <input
                                        class="inp_url w-100 border-0 shadow-black a-text-bold-warm py-2 input-url-footer"
                                        value="www.facebookd.com" id="footer-menu-1-opcion4-link" />
                                </div>
                            </div>
                        </div>
                        <!--Nuestra Visión-->
                        <div class="d-flex flex-column mr-4 menu-item-container">
                            <input type="text" key="menu_1_opcion_6_title" value="Nuestra Visión"
                                class="border-0 footer-input-text text-center p-2 inpuut-footer-menu-item shadow-black a-text-bold-warm"
                                id="footer-menu-1-opcion5-title">
                            <div class="no-gutters d-flex mt-4">
                                <div class="col-4">
                                    <img class="inp_url" src="{{ asset('images/basic-icons/link.svg') }}" alt=""
                                        id="opcion5-link">
                                </div>
                                <div class="col-8">
                                    <input
                                        class="inp_url w-100 border-0 shadow-black a-text-bold-warm py-2 input-url-footer"
                                        value="www.facebookd.com" id="footer-menu-1-opcion5-link" />
                                </div>
                            </div>
                        </div>
                        <!--Claro Sports-->
                        <div class="d-flex flex-column menu-item-container">
                            <input type="text" key="menu_1_opcion_5_title" value="Claro Sports"
                                class="border-0 footer-input-text text-center p-2 inpuut-footer-menu-item shadow-black a-text-bold-warm"
                                id="footer-menu-1-opcion6-title">
                            <div class="no-gutters d-flex mt-4">
                                <div class="col-4">
                                    <img class="inp_url" src="{{ asset('images/basic-icons/link.svg') }}" alt=""
                                        id="opcion6-link">
                                </div>
                                <div class="col-8">
                                    <input
                                        class="inp_url w-100 border-0 shadow-black a-text-bold-warm py-2 input-url-footer"
                                        value="www.facebookd.com" id="footer-menu-1-opcion6-link" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Claro networks icon footer-->
                <div class="mb-3">
                    <input type="file" id="about_icon" class="input-image-program footer-input-image d-none"
                        key="about_icon">
                    <label for="about_icon"
                        class="bor label-footer-icon position-relative cursor-pointer d-flex justify-content-center align-items-center flex-column">
                        <img src="./images/basic-icons/pencil-edit-teal.svg" alt="add-photo"
                            class="add-photo" style="z-index:10000">

                        <img src="{{ asset('images/synopsis/image-synopsis-horizontal.png') }}"
                            class="w-100 cursor-pointer image-cover prev-image-program thumbnail-image-program"
                            id="footer-about-icon">
                        <span class="white-shadow p-2 a-text-bold-greyish-brown-two">86px X
                            51px</span>
                    </label>
                </div>
                <!--terms legend-->
                <div class="mb-5 row">
                    <div class="col-8">
                        <input type="text" class="footer-input-text border-0 shadow-black p-2 a-text-bold-warm w-100"
                            value="" id="footer-rights-legend" key="about_legend">
                    </div>

                </div>
                <!--Terminos y condiciones, aviso de privacidad-->
                <div class="mb-5 row">
                    <div class="col-4">
                        <div class="border-0 shadow-black p-2 a-text-bold-warm w-100 tericon">
                            <div class="d-flex align-items-center">
                                <img class="mr-2" src="{{ asset('images/basic-icons/pencil-edit-teal.svg') }}" alt="">
                                <p class="mb-0" id="footer-legend-terms">Terminos y condiciones
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="border-0 shadow-black p-2 a-text-bold-warm w-100">
                            <div class="d-flex align-items-center" id="notice-privacy">
                                <img class="mr-2" src="{{ asset('images/basic-icons/pencil-edit-teal.svg') }}" alt="">
                                <p class="mb-0" id="footer-legend-privacy">Aviso de privacidad
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Footer icons-->
                <div class="d-flex mb-5">
                    <!--Icon 1-->
                    <div class="mr-1">
                        <p class='ml-auto a-text-bold-teal  slider-pagination-item activando-ando'>1</p>
                        <input type="file" name="image-icon2" id="menu_2_opcion_1_icon" key="menu_2_opcion_1_icon"
                            class="footer-input-image input-image-program logo-landing d-none">
                        <label for="menu_2_opcion_1_icon"
                            class="w-100 bor label-footer-option position-relative cursor-pointer d-flex justify-content-center align-items-center flex-column">
                            <img src="./images/basic-icons/pencil-edit-teal.svg"
                                alt="add-photo" class="add-photo" style="z-index:10000">

                            <img src="{{ asset('images/synopsis/image-synopsis-horizontal.png') }}"
                                class="w-100 cursor-pointer image-cover prev-image-program thumbnail-image-program"
                                id="footer-icon-1">
                            <span class="white-shadow p-2 a-text-bold-greyish-brown-two">80px X
                                55px</span>
                        </label>
                        <div class="no-gutters d-flex mt-4">
                            <div class="col-4">
                                <img class="inp_url" src="{{ asset('images/basic-icons/link.svg') }}" alt=""
                                    id="link-1">
                            </div>
                            <div class="col-8">
                                <input
                                    class="inp_url w-100 border-0 shadow-black a-text-bold-warm py-2 input-url-footer"
                                    value="" id="footer-icon-link-1" />
                            </div>
                        </div>
                    </div>
                    <!--Icon 2-->
                    <div class="mr-1">
                        <p class='ml-auto a-text-bold-teal slider-pagination-item activando-ando'>2</p>
                        <input type="file" name="image-icon2" id="menu_2_opcion_2_icon"
                            class="input-image-program footer-input-image logo-landing d-none"
                            key="menu_2_opcion_2_icon">
                        <label for="menu_2_opcion_2_icon"
                            class="w-100 bor label-footer-option position-relative cursor-pointer d-flex justify-content-center align-items-center flex-column">
                            <img src="./images/basic-icons/pencil-edit-teal.svg"
                                alt="add-photo" class="add-photo" style="z-index:10000">

                            <img src="{{ asset('images/synopsis/image-synopsis-horizontal.png') }}"
                                class="w-100 cursor-pointer image-cover prev-image-program thumbnail-image-program"
                                id="footer-icon-2">
                            <span class="white-shadow p-2 a-text-bold-greyish-brown-two">80px X
                                55px</span>
                        </label>
                        <div class="no-gutters d-flex mt-4">
                            <div class="col-4">
                                <img class="inp_url" src="{{ asset('images/basic-icons/link.svg') }}" alt=""
                                    id="link-2">
                            </div>
                            <div class="col-8">
                                <input
                                    class="inp_url w-100 border-0 shadow-black a-text-bold-warm py-2 input-url-footer"
                                    value="" id="footer-icon-link-2" />
                            </div>
                        </div>
                    </div>
                    <!--Icon 3-->
                    <div class="mr-1">
                        <p class='ml-auto a-text-bold-teal slider-pagination-item activando-ando'>3</p>
                        <input type="file" id="menu_2_opcion_3_icon" key="menu_2_opcion_3_icon"
                            class="input-image-program footer-input-image logo-landing d-none">
                        <label for="menu_2_opcion_3_icon"
                            class="w-100 bor label-footer-option position-relative cursor-pointer d-flex justify-content-center align-items-center flex-column">
                            <img src="./images/basic-icons/pencil-edit-teal.svg"
                                alt="add-photo" class="add-photo" style="z-index:10000">

                            <img src="{{ asset('images/synopsis/image-synopsis-horizontal.png') }}"
                                class="w-100 cursor-pointer image-cover prev-image-program thumbnail-image-program"
                                id="footer-icon-3">
                            <span class="white-shadow p-2 a-text-bold-greyish-brown-two">80px X
                                55px</span>
                        </label>
                        <div class="no-gutters d-flex mt-4">
                            <div class="col-4">
                                <img class="inp_url" src="{{ asset('images/basic-icons/link.svg') }}" alt=""
                                    id="link-3">
                            </div>
                            <div class="col-8">
                                <input
                                    class="inp_url w-100 border-0 shadow-black a-text-bold-warm py-2 input-url-footer"
                                    value="" id="footer-icon-link-3" />
                            </div>
                        </div>
                    </div>
                    <!--Icon 4-->
                    <div class="mr-1">
                        <p class='ml-auto a-text-bold-teal slider-pagination-item activando-ando'>4</p>
                        <input type="file" id="menu_2_opcion_4_icon" key="menu_2_opcion_4_icon"
                            class="input-image-program footer-input-image d-none">
                        <label for="menu_2_opcion_4_icon"
                            class="w-100 bor label-footer-option position-relative cursor-pointer d-flex justify-content-center align-items-center flex-column">
                            <img src="./images/basic-icons/pencil-edit-teal.svg"
                                alt="add-photo" class="add-photo" style="z-index:10000">

                            <img src="{{ asset('images/synopsis/image-synopsis-horizontal.png') }}"
                                class="w-100 cursor-pointer image-cover prev-image-program thumbnail-image-program"
                                id="footer-icon-4">
                            <span class="white-shadow p-2 a-text-bold-greyish-brown-two">80px X
                                55px</span>
                        </label>
                        <div class="no-gutters d-flex mt-4">
                            <div class="col-4">
                                <img class="inp_url" src="{{ asset('images/basic-icons/link.svg') }}" alt=""
                                    id="link-4">
                            </div>
                            <div class="col-8">
                                <input
                                    class="inp_url w-100 border-0 shadow-black a-text-bold-warm py-2 input-url-footer"
                                    value="" id="footer-icon-link-4" />
                            </div>
                        </div>
                    </div>
                    <!--Icon 5-->
                    <div class="mr-1">
                        <p class='ml-auto a-text-bold-teal slider-pagination-item activando-ando'>5</p>
                        <input type="file" id="menu_2_opcion_5_icon" key="menu_2_opcion_5_icon"
                            class="input-image-program footer-input-image d-none">
                        <label for="menu_2_opcion_5_icon"
                            class="w-100 bor label-footer-option position-relative cursor-pointer d-flex justify-content-center align-items-center flex-column">
                            <img src="./images/basic-icons/pencil-edit-teal.svg"
                                alt="add-photo" class="add-photo" style="z-index:10000">

                            <img src="{{ asset('images/synopsis/image-synopsis-horizontal.png') }}"
                                class="w-100 cursor-pointer image-cover prev-image-program thumbnail-image-program"
                                id="footer-icon-5">
                            <span class="white-shadow p-2 a-text-bold-greyish-brown-two">80px X
                                55px</span>
                        </label>
                        <div class="no-gutters d-flex mt-4">
                            <div class="col-4">
                                <img class="inp_url" src="{{ asset('images/basic-icons/link.svg') }}" alt=""
                                    id="link-5">
                            </div>
                            <div class="col-8">
                                <input
                                    class="inp_url w-100 border-0 shadow-black a-text-bold-warm py-2 input-url-footer"
                                    value="" id="footer-icon-link-5" />
                            </div>
                        </div>
                    </div>
                    <!--Icon 6-->
                    <div class="mr-1">
                        <p class='ml-auto a-text-bold-teal slider-pagination-item activando-ando'>6</p>
                        <input type="file" id="menu_2_opcion_6_icon" key="menu_2_opcion_6_icon"
                            class="input-image-program footer-input-image d-none">
                        <label for="menu_2_opcion_6_icon"
                            class="w-100 bor label-footer-option position-relative cursor-pointer d-flex justify-content-center align-items-center flex-column">
                            <img src="./images/basic-icons/pencil-edit-teal.svg"
                                alt="add-photo" class="add-photo" style="z-index:10000">

                            <img src="{{ asset('images/synopsis/image-synopsis-horizontal.png') }}"
                                class="w-100 cursor-pointer image-cover prev-image-program thumbnail-image-program"
                                id="footer-icon-6">
                            <span class="white-shadow p-2 a-text-bold-greyish-brown-two">80px X
                                55px</span>
                        </label>
                        <div class="no-gutters d-flex mt-4">
                            <div class="col-4">
                                <img class="inp_url" src="{{ asset('images/basic-icons/link.svg') }}" alt=""
                                    id="link-6">
                            </div>
                            <div class="col-8">
                                <input
                                    class="inp_url w-100 border-0 shadow-black a-text-bold-warm py-2 input-url-footer"
                                    value="" id="footer-icon-link-6" />
                            </div>
                        </div>
                    </div>
                    <!--Icon 7-->
                    <div>
                        <p class='ml-auto a-text-bold-teal slider-pagination-item activando-ando'>7</p>
                        <input type="file" id="menu_2_opcion_7_icon" key="menu_2_opcion_7_icon"
                            class="input-image-program footer-input-image d-none">
                        <label for="menu_2_opcion_7_icon"
                            class="w-100 bor label-footer-option position-relative cursor-pointer d-flex justify-content-center align-items-center flex-column">
                            <img src="./images/basic-icons/pencil-edit-teal.svg"
                                alt="add-photo" class="add-photo" style="z-index:10000">

                            <img src="{{ asset('images/synopsis/image-synopsis-horizontal.png') }}"
                                class="w-100 cursor-pointer image-cover prev-image-program thumbnail-image-program"
                                id="footer-icon-7">
                            <span class="white-shadow p-2 a-text-bold-greyish-brown-two">80px X
                                55px</span>
                        </label>
                        <div class="no-gutters d-flex mt-4">
                            <div class="col-4">
                                <img class="inp_url" src="{{ asset('images/basic-icons/link.svg') }}" alt=""
                                    id="link-7">
                            </div>
                            <div class="col-8">
                                <input
                                    class="inp_url w-100 border-0 shadow-black a-text-bold-warm py-2 input-url-footer"
                                    value="" id="footer-icon-link-7" />
                            </div>
                        </div>
                    </div>
                </div>
                <!--Buttons--->
                <div class="mb-5 d-flex justify-content-center">
                    <button
                        class="d-flex  mr-3  m-0 text-uppercase btn-grilla a-btn-basic-small btn-grilla a-btn-basic-small text-uppercase a-text-MBlack text-plus"
                        data-dismiss="modal">ACEPTAR</button>
                </div>
            </div>

        </div>
    </div>
</div>
