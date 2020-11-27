//JQUERY
import $, { isEmptyObject } from "jquery";
//Métodos para aplicar ciertos estilos a las filas y columnas
import { selectRow, selectColumn, showLandingSchedule } from "./UI/UI.js";

//View
import ProgramView from "./views/program.js";
let programView = new ProgramView();
import LandingView from "./views/landing";
let landingView = new LandingView();

//Librería para mostrar calendario
import Litepicker from "litepicker";
//Servicios para editar campos en la grilla''
import {
    addImagesModalBanner,
    addImagesModalIcons,
    editAttributeProgram,
    filterDates
} from "./services/generalSchedule.js";

//Servicios para editar landing
import {
    updateImagesOfProgrammingSlider,
    updateLogosOfLanding,
    getChapterInfo,
    updateImageProgramOfLanding,
    getProgramming,
    getContentConcertChannel,
    getContentConcertChannelHeader,
    getContentConcertChannelBlockHeader3,
    getContentConcertChannelBlock4One,
    getContentConcertChannelBlock4OTwo,
    editHeaderLanding,
    editHomeHeader,
    editElementLanding,
    editPromoLandingCinema,
    getConcertChannelPromo,
    editPromoLanding,
    getProgrammingLanding,
    getProgramsLanding,
    getPromotionalsProgramsCarousel,
    getModalsCanalClaro,
    editHeaderLandingClaro,
    editElementLandingClaro,
    editPromoLandingClaro,
    getContentClaroCinema,
    getProgrammingSynopsis,
    getSynopsis,
    editAttributeSynopsis,
    updateImagesSynopsis,
    getContentHomeHeader,
    getCarruselHome,
    editHeaderHome,
    getContentHomeCinema,
    getContentHomeHeaderCinema
} from "./services/landing.js";

//Configraciones para la librería de Cleave JS
import {
    cleaveConfig,
    scheduleTimeConfig,
    timeWithSeconds,
    year
} from "./config/config.js";

import { calendarSlick } from "./config/slick.js";

//Métodos para mostrar las vistas de "Landing" o "Grilla"
import { showlanding } from "./UI/UI.js";

//Config

import { resetIframe } from "./vendor/easyXDM.js";

import {
    createSlickSlider,
    createCalendarDays,
    getDayName,
    getMonthAndYear,
    getMonthAndYearmin
} from "./vendor/slick.js";

import { previewPage } from "./preview/prev.js";

import { modalClose, modalUrlClose, programmingPencil } from "./store/eventos/evn";

import { getProgramacion } from './store/getters'

function eventsGrilla() {
    const baseURL = "http://www.claronetworks.openofficedospuntocero.info/v1.2/";

    let landingSinopsis = document.getElementById("prev-sinopsis-landing");
    if (landingSinopsis) {
        console.log("Found you");
        let date = new Date();
        let day = ("0" + date.getUTCDate()).slice(-2);
        let month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
        let year = date.getUTCFullYear();
        getProgrammingSynopsis("canal-claro", `${year}-${month}-${day}`);
    }
    $(".sinopsis-master").on("click", ".edit-synopsis-pencil", function () {
        $("#sinopsis-container iframe").remove();
        var socketSynopsis = new easyXDM.Socket(LandingSinopsis);
        $("body").append(
            `<div class="loader-view-container pointer-none">
                 <img src="./images/loader.gif" class="loader"/>
             </div>`
        );

        let id = $(this).attr("chapter_id");
        programView.renderSynopsis(id, socketSynopsis);

        $("#device-size").load("imports #device-size-edit", function () {
            $(".a-prev-image").click(function () {
                previewPage($(this));
            });
        });
    });
    //Prev

    let SinopsisLandingPrev = {
        remote: `${baseURL}sinopsis-prev.php`,
        //remote: `http://localhost:8888/MaquetaCNetworks/sinopsis-prev.php`,
        container: document.getElementById("sinopsis-container"),
        onMessage: function (message, origin) {
            this.container.getElementsByTagName("iframe")[0].style.height =
                message + "px";
            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };

    $(".btn-sis").click(function () {
        let key = $(this).attr("key");
        let date = new Date();
        let day = ("0" + date.getUTCDate()).slice(-2);
        let month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
        let year = date.getUTCFullYear();
        $(".content-table").html(" ");
        getProgrammingSynopsis(key, `${year}-${month}-${day}`);
    });

    //calendario de sinopsis
    let calendarsinopsis = $(".calendar-sinopsis-slider");
    $(".calendar-sinopsis-slider").slick({
        slidesToShow: 11,
        slidesToScroll: 11,
        infinite: true,
        dots: false,
        centerMode: false,
        arrows: true,
        prevArrow: '<img src="./images/prev.png" class="arrow-prev" />',
        nextArrow: '<img src="./images/next.png" class="arrow-next" />'
    });
    calendarsinopsis.slick("unslick");
    createCalendarDays(calendarsinopsis, "synopsis-calendar-item");

    createSlickSlider(calendarsinopsis, calendarSlick);

    $(".calendar-sinopsis-slider").on(
        "click",
        ".synopsis-calendar-item",
        function () {
            $(".synopsis-calendar-item").removeClass("programming-item-active");
            $(this).addClass("programming-item-active");
            console.log($(this).attr("date"));
            getProgrammingSynopsis("canal-claro", $(this).attr("date"));
        }
    );
    $(".calendar-sinopsis-slider").on(
        "click",
        ".synopsis-calendar-item",
        function () {
            $(".synopsis-calendar-item").removeClass("programming-item-active");
            $(this).addClass("programming-item-active");
            console.log($(this).attr("date"));
            getProgrammingSynopsis("concert-channel", $(this).attr("date"));
        }
    );
    $(".calendar-sinopsis-slider").on(
        "click",
        ".synopsis-calendar-item",
        function () {
            $(".synopsis-calendar-item").removeClass("programming-item-active");
            $(this).addClass("programming-item-active");
            console.log($(this).attr("date"));
            getProgrammingSynopsis("claro-cinema", $(this).attr("date"));
        }
    );

    //Previsualizar el video que subió el usuario en el landing de concert channel
    $("#video-promo-file").change(function () {
        if (this.files && this.files[0]) {
            let file = this.files[0];
            var reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = function (e) {
                // The file reader gives us an ArrayBuffer:
                let buffer = e.target.result;

                // We have to convert the buffer to a blob:
                let videoBlob = new Blob([new Uint8Array(buffer)], {
                    type: "video/mp4"
                });

                // The blob gives us a URL to the video file:
                let url = window.URL.createObjectURL(videoBlob);
                $("#concert-promo-container video").remove();
                $("#concert-promo-container").append(
                    `
                    <video class="w-100 h-100" id="video-promo-concert" style="display: block" controls muted autoplay>
                        <source src="${url}" type="video/mp4">
                    </video>
                    `
                );
            };
        }
    });

    //CAMBIAR EL NÚMERO DE LA IMAGEN EN EL SLIDER DE SINOPSIS
    $(".carrusel2-slider").on("afterChange", function (slick, currentSlide) {
        $(".current-slide-number").text(currentSlide.currentSlide + 1);
    });

    //CAMBIAR EL NÚMERO DE LA IMAGEN EN EL SLIDER DE SINOPSIS
    $(".carrusel1-slider").on("afterChange", function (slick, currentSlide) {
        $(".current-slide-number").text(currentSlide.currentSlide + 1);
    });

    $(".btn-prueba").click(function () {
        getHeaderLanding();
    });

    let LandingHomeCinema = {
        remote: `${baseURL}home-edi-cinema.php`,
        container: document.getElementById("navbar-prev-home-cinema"),
        onMessage: function (message, origin) {
            let json = JSON.parse(message);
            console.log(json.type)
            if (typeof json == "object") {
                switch (json.type) {
                    case "slider-pagination":
                        landingView.renderHomeBanner();
                        break;
                    case "home-claro-carrousel-main":
                        let date = new Date();
                        let day = ("0" + date.getUTCDate()).slice(-2);
                        let month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
                        let year = date.getUTCFullYear();
                        let currentDate = `${year}-${month}-${day}`;
                        getProgrammingLanding(currentDate, "claro-cinema");
                        break;
                    case "cinema-home-header":
                        getContentHomeHeaderCinema();
                        break;
                    case "cinema-home-slider":
                        let landing = "Claro Cinema";
                        getCarruselHome(landing);
                        break;
                    default:
                        break;
                }
            }
            this.container.getElementsByTagName("iframe")[0].style.height =
                message + "px";
            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };

    ////////////
    let NavbarHomeCinema = document.getElementById("navbar-prev-home-cinema");
    if (NavbarHomeCinema) {
        $("#navbar-prev-home-cinema  iframe").remove();
        new easyXDM.Socket(LandingHomeCinema);
    }
    let confPrevHomeCinema = {
        remote: `${baseURL}home-prev.php`,
        container: document.getElementById("navbar-prev-home-cinema"),
        onMessage: function (message, origin) {
            console.log(message);
            this.container.getElementsByTagName("iframe")[0].style.height =
                message + "px";
            this.container.getElementsByTagName("iframe")[0];

            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };

    //previsualizar canal claro
    $("#prev-landing-cinema").click(function () {
        //Landing canal claro
        resetIframe($("#navbar-prev-home-cinema iframe"), confPrevHomeCinema);
        $("#prev-mobile")
            .removeClass("pointer-none")
            .addClass("cursor-pointer");
        $("#prev-tablet")
            .removeClass("pointer-none")
            .addClass("cursor-pointer");
    });
    $("#edit-landing-cinema").click(function () {
        resetIframe($("#navbar-prev-home-cinema iframe"), LandingHomeCinema);

        $("#prev-mobile")
            .removeClass("cursor-pointer")
            .addClass("pointer-none");
        $("#prev-mobile").css("opacity", "0.4");
        $("#prev-tablet")
            .removeClass("cursor-pointer")
            .addClass("pointer-none");
        $("#prev-tablet").css("opacity", "0.4");
        $("#prev-desktop").css("opacity", "1");
    });

    /////////////

    let LandingSinopsis = {
        remote: `${baseURL}sinopsis-edi.php`,
        //remote: `http://localhost:8888/MaquetaCNetworks/sinopsis-edi.php`,
        container: document.getElementById("sinopsis-container"),
        onMessage: function (message, origin) {
            let json = JSON.parse(message);
            if (typeof json == "object") {
                let loader = `
                        <div class="loader-view-container" id="loader1">
                            <img src="./images/loader.gif" class="loader" alt="">
                        </div>
                            `;

                switch (json.type) {
                    case "slider-pagination":
                        $("body").append(
                            `<div class="loader-view-container pointer-none">
                                <img src="./images/loader.gif" class="loader"/>
                            </div>`
                        );
                        let data = getSynopsis(json.id);
                        data.then(data => {
                            if (data.code == 200) {
                                let programminfSliderSynopsis = $(
                                    ".programming-slider-sinopsis"
                                );
                                let index = 1;
                                let slide = "";
                                let image = "";
                                while (true) {
                                    if (
                                        data.data[
                                        `image_background_${index}`
                                        ] !== undefined
                                    ) {
                                        image =
                                            data.data[
                                            `image_background_${index}`
                                            ];
                                        if (
                                            data.data[
                                            `image_background_${index}`
                                            ] == null
                                        ) {
                                            image =
                                                "./images/synopsis/image-synopsis-carrusel.jpg";
                                        }
                                        slide += `
                                        <div class="bor thumbnail-image-program position-relative h-100">
                                            <input type="file" id="image_banner_synopsis_${index}"
                                            class="input-image-program d-none input-banner-synopsis" data-index="1">
                                            <label for="image_banner_synopsis_${index}"
                                            class="h-100 mb-0 d-flex justify-content-center  align-items-center flex-column   load-programming-carousel">
                                            <img src="./images/synopsis/camara.svg" alt="add-photo"
                                            class=" cursor-pointer add-photo " />
                                            <span class="a-text-bold-warm text-plus mt-3 banner-text pl-4 pr-4 pt-2 pb-2">1191px X 471px</span>
                                            <img src="${image}"
                                            class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                                            </label>
                                        </div>
                                        `;
                                        index++;
                                    } else {
                                        break;
                                    }
                                }
                                programminfSliderSynopsis.html(slide);
                                $(
                                    ".modal-programming-sinopsis .input-banner-synopsis"
                                ).val("");
                                $(".modal-programming-sinopsis").modal("show");
                                try {
                                    programminfSliderSynopsis.slick("unslick");
                                    programminfSliderSynopsis.slick({
                                        slidesToShow: 1,
                                        dots: true,
                                        appendDots: $(
                                            ".programming-slider-dots-sinopsis"
                                        ),
                                        initialSlide: 0,
                                        infinite: false,
                                        customPaging: function (slider, i) {
                                            var thumb = $(
                                                slider.$slides[i]
                                            ).data();
                                            return (
                                                "<p class='a-text-bold-teal slider-pagination-item'>" +
                                                (i + 1) +
                                                "</p>"
                                            );
                                        }
                                    });
                                } catch (error) {
                                    programminfSliderSynopsis.slick({
                                        slidesToShow: 1,
                                        dots: true,
                                        appendDots: $(
                                            ".programming-slider-dots-sinopsis"
                                        ),
                                        initialSlide: 0,
                                        infinite: false,
                                        customPaging: function (slider, i) {
                                            var thumb = $(
                                                slider.$slides[i]
                                            ).data();
                                            return (
                                                "<p class='a-text-bold-teal slider-pagination-item'>" +
                                                (i + 1) +
                                                "</p>"
                                            );
                                        }
                                    });
                                }
                                let buttonSynopsisBannerModal = $(
                                    "#banner-sinopsis-modal-button"
                                );
                                buttonSynopsisBannerModal.attr(
                                    "landing_id",
                                    data.data.landing_id
                                );
                                buttonSynopsisBannerModal.attr(
                                    "chapter_id",
                                    data.data.chapter_id
                                );
                                //Previsualizar una imagen en el banner
                                $(
                                    ".modal-programming-sinopsis .input-image-program"
                                ).change(function () {
                                    let currentInput = $(this);
                                    if (this.files && this.files[0]) {
                                        var reader = new FileReader();
                                        reader.onload = function (e) {
                                            currentInput
                                                .next()
                                                .children(".prev-image-program")
                                                .attr("src", e.target.result)
                                                .addClass("h-100 w-100")
                                                .css("z-index", "2");
                                        };
                                        reader.readAsDataURL(this.files[0]);
                                        buttonSynopsisBannerModal.removeClass([
                                            "disabled-btn",
                                            "a-text-bold-teal",
                                            "btn-landing"
                                        ]);
                                        buttonSynopsisBannerModal.addClass([
                                            "btn-grilla",
                                            "a-text-bold-white"
                                        ]);
                                    }
                                });
                            }
                            $(".loader-view-container").remove();
                        });

                        break;
                    case "synopsis-main-image":
                        $("body").append(
                            `<div class="loader-view-container pointer-none">
                                <img src="./images/loader.gif" class="loader"/>
                            </div>`
                        );
                        data = getSynopsis(json.id);
                        data.then(data => {
                            if (data.code == 200) {
                                //Verificamos si tiene una imagen
                                let image =
                                    data.data.image_synopsis ||
                                    "./images/synopsis/image-synopsis.svg";
                                $(".loader-view-container").remove();
                                //Limpiamos input
                                $("#image-synopsis").val();
                                //Button
                                $("#upload-image-synopsis").attr(
                                    "landing_id",
                                    data.data.landing_id
                                );
                                //Para el botón le agregamos un atributo
                                $("#upload-image-synopsis").attr(
                                    "chapter_id",
                                    data.data.chapter_id
                                );
                                $(".image-synopsis-modal").attr("src", image);
                                $(".modal-image-synopsis").modal("show");
                            }
                        });
                        $(".modal-image-synopsis .input-image-program").change(
                            function () {
                                let currentInput = $(this);
                                if (this.files && this.files[0]) {
                                    var reader = new FileReader();
                                    reader.onload = function (e) {
                                        currentInput
                                            .next()
                                            .children(".prev-image-program")
                                            .attr("src", e.target.result)
                                            .addClass("h-100 w-100")
                                            .css("z-index", "2");
                                    };
                                    reader.readAsDataURL(this.files[0]);
                                }
                            }
                        );

                        break;

                    case "synopsis-description-container":
                        programView.renderDescriptionSynopsis(json.id);
                        break;
                    case "synopsis-images-container":
                        $("body").append(
                            `<div class="loader-view-container pointer-none">
                                <img src="./images/loader.gif" class="loader"/>
                            </div>`
                        );
                        data = getSynopsis(json.id);
                        let buttonImageSynopsisModal = $(
                            "#images-synopsis-modal-button"
                        );
                        data.then(data => {
                            if (data.code == 200) {
                                //Limpiar inputs
                                $(".image-synopsis-input").val();

                                let imageSynopsisFrame1 =
                                    data.data.image_synopsis_frame_1 ||
                                    "./images/synopsis/image-synopsis-horizontal.png";
                                let imageSynopsisFrame2 =
                                    data.data.image_synopsis_frame_2 ||
                                    "./images/synopsis/image-synopsis-horizontal.png";
                                let imageSynopsisFrame3 =
                                    data.data.image_synopsis_frame_3 ||
                                    "./images/synopsis/image-synopsis-horizontal.png";
                                $(".image-synopsis-frame-1").attr(
                                    "src",
                                    imageSynopsisFrame1
                                );
                                $(".image-synopsis-frame-2").attr(
                                    "src",
                                    imageSynopsisFrame2
                                );
                                $(".image-synopsis-frame-3").attr(
                                    "src",
                                    imageSynopsisFrame3
                                );
                                $(".modal-synopsis-images-container").modal(
                                    "show"
                                );
                                $(".loader-view-container").remove();
                            }
                            buttonImageSynopsisModal.attr(
                                "landing_id",
                                data.data.landing_id
                            );
                            buttonImageSynopsisModal.attr(
                                "chapter_id",
                                data.data.chapter_id
                            );
                        });

                        $(
                            ".modal-synopsis-images-container .input-image-program"
                        ).change(function () {
                            let currentInput = $(this);
                            if (this.files && this.files[0]) {
                                var reader = new FileReader();
                                reader.onload = function (e) {
                                    currentInput
                                        .next()
                                        .children(".prev-image-program")
                                        .attr("src", e.target.result)
                                        .addClass("h-100 w-100")
                                        .css("z-index", "2");
                                };
                                reader.readAsDataURL(this.files[0]);

                                buttonImageSynopsisModal.removeClass([
                                    "disabled-btn",
                                    "a-text-bold-teal",
                                    "btn-landing"
                                ]);
                                buttonImageSynopsisModal.addClass([
                                    "btn-grilla",
                                    "a-text-bold-white"
                                ]);
                            }
                        });
                        break;
                    case "synopsis-datails-container":
                        programView.renderDetailsSynopsis(json.id);
                        break;

                    default:
                        break;
                }
            }
            this.container.getElementsByTagName("iframe")[0].style.height =
                message + "px";
            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };

    let LandingSinopsisPrev = {
        remote: `${baseURL}sinopsis-prev.php`,
        //remote: `http://localhost:8888/MaquetaCNetworks/sinopsis-prev.php`,
        container: document.getElementById("sinopsis-container"),
        onMessage: function (message, origin) {
            this.container.getElementsByTagName("iframe")[0].style.height =
                message + "px";
            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };

    let navbarPrevSINOPSIS = document.getElementById("sinopsis-container");
    // let sinopsisLanding = $('.sinopsis-container');
    if (navbarPrevSINOPSIS) {
        $("#sinopsis-container iframe").remove();
        var socketSynopsis = new easyXDM.Socket(LandingSinopsis);
        $("#synopsis-table-canal-claro").on(
            "click",
            ".edit-synopsis-pencil",
            function () {
                $("body").append(
                    `<div class="loader-view-container pointer-none">
                        <img src="./images/loader.gif" class="loader"/>
                    </div>`
                );
                let id = $(this).attr("chapter_id");
                programView.renderSynopsis(id, socketSynopsis);
                $(".device-size").load("imports #device-size-edit");
            }
        );
        $("#synopsis-table-canal-claro").on(
            "click",
            ".prev-synopsis-pencil",
            function () {
                $("body").append(
                    `<div class="loader-view-container pointer-none">
                        <img src="./images/loader.gif" class="loader"/>
                    </div>`
                );
                $("#sinopsis-container iframe").remove();
                let id = $(this).attr("chapter_id");
                socketSynopsis = new easyXDM.Socket(LandingSinopsisPrev);
                programView.renderSynopsis(id, socketSynopsis);
                $("#prev-synopsis").prop("checked", true);
                $(".device-size").load("imports #device-size-prev", function () {
                    $(".a-prev-image").click(function () {
                        previewPage($(this));
                    });
                });
            }
        );
    }

    if (navbarPrevSINOPSIS) {
        $("#sinopsis-container iframe").remove();
        var socketSynopsis = new easyXDM.Socket(LandingSinopsis);
        $("#synopsis-table-concert-channel").on(
            "click",
            ".edit-synopsis-pencil",
            function () {
                $("body").append(
                    `<div class="loader-view-container pointer-none">
                        <img src="./images/loader.gif" class="loader"/>
                    </div>`
                );
                let id = $(this).attr("chapter_id");
                programView.renderSynopsis(id, socketSynopsis);
            }
        );
        $("#synopsis-table-concert-channel").on(
            "click",
            ".prev-synopsis-pencil",
            function () {
                $("body").append(
                    `<div class="loader-view-container pointer-none">
                        <img src="./images/loader.gif" class="loader"/>
                    </div>`
                );
                $("#sinopsis-container iframe").remove();
                let id = $(this).attr("chapter_id");
                socketSynopsis = new easyXDM.Socket(LandingSinopsisPrev);
                programView.renderSynopsis(id, socketSynopsis);
                $("#device-size").load("imports #device-size-prev", function () {
                    $(".a-prev-image").click(function () {
                        previewPage($(this));
                    });
                });
                $("#prev-synopsis").prop("checked", true);
            }
        );
    }
    if (navbarPrevSINOPSIS) {
        $("#sinopsis-container iframe").remove();
        var socketSynopsis = new easyXDM.Socket(LandingSinopsis);
        $("#synopsis-table-claro-cinema").on(
            "click",
            ".edit-synopsis-pencil",
            function () {
                $("body").append(
                    `<div class="loader-view-container pointer-none">
                        <img src="./images/loader.gif" class="loader"/>
                    </div>`
                );
                let id = $(this).attr("chapter_id");
                programView.renderSynopsis(id, socketSynopsis);
            }
        );
        $("#synopsis-table-claro-cinema").on(
            "click",
            ".prev-synopsis-pencil",
            function () {
                $("body").append(
                    `<div class="loader-view-container pointer-none">
                        <img src="./images/loader.gif" class="loader"/>
                    </div>`
                );
                let id = $(this).attr("chapter_id");
                $("#sinopsis-container iframe").remove();
                socketSynopsis = new easyXDM.Socket(LandingSinopsisPrev);
                programView.renderSynopsis(id, socketSynopsis);
                $("#device-size").load("imports #device-size-prev", function () {
                    $(".a-prev-image").click(function () {
                        previewPage($(this));
                    });
                });
                $("#prev-synopsis").prop("checked", true);
            }
        );
    }
    //Editar información de sinopsis
    programView.editDetailsSynopsis(socketSynopsis);
    programView.editAttributesSynopsis(socketSynopsis);
    programView.renderPrevSynopsis();
    programView.renderEditSynopsis(socketSynopsis, LandingSinopsis);
    programView.editImagesSynopsis(socketSynopsis);
    programView.editImageSynopsis(socketSynopsis);
    programView.editImagesBanner(socketSynopsis);

    let confLandingClaroCinema = {
        remote: `${baseURL}claro-cinema-edi.php`,
        // remote: `http://localhost/MaquetaCNetworks/claro-cinema-edi.php`,
        container: document.getElementById("navbar-prev-claro-cinema"),
        onMessage: function (message, origin) {
            let json = JSON.parse(message);
            if (typeof json == "object") {
                let loader = `
                        <div class="loader-view-container" id="loader1">
                            <img src="./images/loader.gif" class="loader" alt="">
                        </div>
                            `;
                console.log(json.type)
                switch (json.type) {
                    case "slider-pagination":
                        getContentClaroCinema("slider-pagination");
                        break;
                    case "current-programming-cinema":
                        let date = new Date();
                        let day = ("0" + date.getUTCDate()).slice(-2);
                        let month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
                        let year = date.getUTCFullYear();
                        let currentDate = `${year}-${month}-${day}`;
                        getProgrammingLanding(currentDate, "claro-cinema");
                        programmingPencil()
                        break;
                    case "header-landing-cinema":
                        modalUrlClose()
                        getContentClaroCinema("header-landing-cinema");
                        break;
                    case "title-cinema":
                        getContentClaroCinema("title-cinema");
                        break;
                    case "promo-cinema":
                        getContentClaroCinema("promo-cinema");
                        break;
                    case "title-carrusel1":
                        getContentClaroCinema("title-carrusel1");
                        break;
                    case "carrusel1":
                        let landing = "Claro Cinema";
                        let id = 1;
                        getPromotionalsProgramsCarousel(
                            id,
                            landing,
                            "header-background thumbnail-header-cinema"
                        );
                        break;
                    case "title-carrusel2":
                        getContentClaroCinema("title-carrusel2");
                        break;
                    case "carrusel2":
                        landing = "Claro Cinema";
                        id = 2;
                        getPromotionalsProgramsCarousel(
                            id,
                            landing,
                            "header-background thumbnail-header-cinema"
                        );
                        break;
                    default:
                        break;
                }
            }
            this.container.getElementsByTagName("iframe")[0].style.height =
                message + "px";
            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };
    //Landing de claro cinema

    let navbarLandingClaroCinema = document.getElementById(
        "navbar-prev-claro-cinema"
    );
    if (navbarLandingClaroCinema) {
        $("#navbar-prev-claro-cinema iframe").remove();
        new easyXDM.Socket(confLandingClaroCinema);
    }
    let confPrevClaroCinema = {
        remote: `${baseURL}claro-cinema-prev.php`,
        container: document.getElementById("navbar-prev-claro-cinema"),
        onMessage: function (message, origin) {
            console.log(message);
            this.container.getElementsByTagName("iframe")[0].style.height =
                message + "px";
            this.container.getElementsByTagName("iframe")[0];

            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };

    //previsualizar concert channel
    $("#prev-landing-cinema").click(function () {
        //Landing concert channel
        resetIframe($("#navbar-prev-claro-cinema iframe"), confPrevClaroCinema);
        $("#prev-mobile")
            .removeClass("pointer-none")
            .addClass("cursor-pointer");
        $("#prev-tablet")
            .removeClass("pointer-none")
            .addClass("cursor-pointer");
    });
    $("#edit-landing-cinema").click(function () {
        resetIframe(
            $("#navbar-prev-claro-cinema iframe"),
            confLandingClaroCinema
        );

        $("#prev-mobile")
            .removeClass("cursor-pointer")
            .addClass("pointer-none");
        $("#prev-mobile").css("opacity", "0.4");
        $("#prev-tablet")
            .removeClass("cursor-pointer")
            .addClass("pointer-none");
        $("#prev-tablet").css("opacity", "0.4");
        $("#prev-desktop").css("opacity", "1");
    });

    /* Concert channel */
    let confLandingConcertChannel = {
        remote: `${baseURL}concert-channel-edi.php`,
        //remote: `http://localhost:8888/MaquetaCNetworks/concert-channel-edi.php`,
        container: document.getElementById("navbar-prev-concert-channel"),
        onMessage: function (message, origin) {
            let json = JSON.parse(message);
            if (typeof json == "object") {
                let loader = `
                        <div class="loader-view-container" id="loader1">
                            <img src="./images/loader.gif" class="loader" alt="">
                        </div>
                                `;
                switch (json.type) {
                    case "current-programming-concert":
                        let date = new Date();
                        let day = ("0" + date.getUTCDate()).slice(-2);
                        let month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
                        let year = date.getUTCFullYear();
                        let currentDate = `${year}-${month}-${day}`;
                        getProgrammingLanding(
                            currentDate,
                            "concert-channel",
                            ""
                        );
                        break;
                    case "header-landing-concert":
                        modalClose()
                        getContentConcertChannelHeader();
                        break;
                    case "pencil-header":
                        getContentConcertChannelBlockHeader3();
                        break;
                    case "pencil-video":
                        getConcertChannelPromo();
                        break;
                    case "pencil-header1":
                        getContentConcertChannelBlock4One();
                        break;
                    case "header2":
                        getContentConcertChannelBlock4OTwo();
                        break;

                    case "pencil-carrusel1":
                        let landing = "Concert Channel";
                        let id = 1;
                        getPromotionalsProgramsCarousel(
                            id,
                            landing,
                            "header-background-blue thumbnail-header-concert"
                        );
                        break;
                    case "pencil-carrusel2":
                        landing = "Concert Channel";
                        id = 2;
                        getPromotionalsProgramsCarousel(
                            id,
                            landing,
                            "header-background-blue thumbnail-header-concert"
                        );
                        break;
                    case "slider-pagination":
                        getContentConcertChannel("slider-pagination");
                        break;
                    case "pencil-header1":
                        $("body").append(loader);
                        setTimeout(function () {
                            $(".modal-titles").modal("show");
                            $("#loader1").remove();
                        }, 3000);

                        break;
                    case "header2":
                        $("body").append(loader);
                        setTimeout(function () {
                            $(".modal-titles").modal("show");
                            $("#loader1").remove();
                        }, 3000);

                        break;

                    default:
                        break;
                }
            }
            this.container.getElementsByTagName("iframe")[0].style.height =
                message + "px";
            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };
    let confPrevConcert = {
        remote: `${baseURL}concert-channel-prev.php`,
        container: document.getElementById("navbar-prev-concert-channel"),
        onMessage: function (message, origin) {
            console.log(message);
            this.container.getElementsByTagName("iframe")[0].style.height =
                message + "px";

            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };

    //previsualizar concert channel
    $("#prev-landing-concert").click(function () {
        resetIframe($("#navbar-prev-concert-channel iframe"), confPrevConcert);
        $("body").append(`<div class="loader-view-container" id="loader1">
        <img src="./images/loader.gif" class="loader" alt="">
        </div>`);

       setTimeout(function () {
        //Landing concert channel
        resetIframe($("#navbar-prev-concert-channel iframe"), confPrevConcert);
        $("#prev-mobile")
            .removeClass("pointer-none")
            .addClass("cursor-pointer");
        $("#prev-tablet")
            .removeClass("pointer-none")
            .addClass("cursor-pointer");

            $("#loader1").remove();
        }, 2000);
    });
    $("#edit-landing-concert").click(function () {
        resetIframe(
            $("#navbar-prev-concert-channel iframe"),
            confLandingConcertChannel
        );

        $("body").append(`<div class="loader-view-container" id="loader1">
        <img src="./images/loader.gif" class="loader" alt="">
        </div>`);

       setTimeout(function () {
        $("#prev-mobile")
            .removeClass("cursor-pointer")
            .addClass("pointer-none");
        $("#prev-mobile").css("opacity", "0.4");
        $("#prev-tablet")
            .removeClass("cursor-pointer")
            .addClass("pointer-none");
        $("#prev-tablet").css("opacity", "0.4");
        $("#prev-desktop").css("opacity", "1");
    });
    $(".button-modal-concert-channel").click(function () {
        resetIframe(
            $("#navbar-prev-concert-channel iframe"),
            confLandingConcertChannel
        );
    });
    $(".modal-edit-program-carrusel").on(
        "click",
        ".button-modal-concert-channel",
        function () {
            resetIframe(
                $("#navbar-prev-concert-channel iframe"),
                confLandingConcertChannel
            );
        }
    );
    $(".modal-edit-program-carrusel").on(
        "click",
        ".modal-button-landing-concert",
        function () {
            resetIframe(
                $("#navbar-prev-concert-channel iframe"),
                confLandingConcertChannel
            );
        }
    );

    $(".calendar-slider2").on(
        "click",
        ".programming-concert-landing",
        function () {
            $(".programming-concert-landing").removeClass(
                "programming-item-active"
            );
            $(this).addClass("programming-item-active");
            getProgramsLanding($(this).attr("date"), "concert-channel");
        }
    );
    $(".calendar-slider2").on(
        "click",
        ".programming-canal-landing",
        function () {
            $(".programming-canal-landing").removeClass(
                "programming-item-active"
            );
            $(this).addClass("programming-item-active");
            console.log($(this).attr("date"));
            getProgramsLanding($(this).attr("date"), "canal-claro");
        }
    );
    //Pencil Chanel
    $(".modal-programming-landing").on(
        "click",
        ".programming-pencil-canal-claro",
        function () {
            let chapterId = $(this).attr("chapter_id");
            $(".modal-programming-landing").modal("hide");
            getChapterInfo(chapterId, "thumbnail-header-claro");
        }
    );
    //Pencil Canal claro
    $(".modal-programming-landing").on(
        "click",
        ".programming-pencil-concert-channel",
        function () {
            let chapterId = $(this).attr("chapter_id");
            $(".modal-programming-landing").modal("hide");
            getChapterInfo(chapterId, "thumbnail-header-concert");
        }
    );

    //Modal de link para botón
    $("#url-encabezado-concert").on("show.bs.modal", function () {
        let link = $(
            ".modal-header-concert-channel .modal-header-button-link"
        ).val();
        $("#link-button-concert-channel").val(link);
    });
    $("#url-encabezado-concert").on("hidden.bs.modal", function () {
        let link = $("#link-button-concert-channel").val();
        $(".modal-header-concert-channel .modal-header-button-link").val(link);
    });

    //Concert channel promo
    $("#upload-concert-promo-button").click(function () {
        let file = "";
        if (document.getElementById("video-promo-file-concert").files[0]) {
            file = document.getElementById("video-promo-file-concert").files[0];
        } else if (document.getElementById("image-promo-concert").files[0]) {
            file = document.getElementById("image-promo-concert").files[0];
        } else {
            file = $("#link-promo-concert").val();
        }

        if(file){
            let landing = "Concert Channel";
            let data = new FormData();
            let key = $(this).attr("key");
            data.append("promo", file);
            data.append("landing", landing);
            data.append("key", key);
            editPromoLanding(data);
        }else{
            $(".modal-promos-concert").modal("hide");
        }


    });

    //Concert Channel Header
    $("#edit-header-landing-concert").click(function () {
        let landing = "Concert Channel";
        let title1 =
            $(".modal-header-concert-channel .modal-header-title-1").val() ||
            "";
        let title2 =
            $(".modal-header-concert-channel .modal-header-title-2").val() ||
            "";
        let logo =
            document.getElementById("header-lading-concert-logo").files[0] ||
            "";
        let link = $(
            ".modal-header-concert-channel .modal-header-button-link"
        ).val();
        let data = new FormData();
        data.append("landing", landing);
        data.append("title1", title1);
        data.append("title2", title2);
        data.append("logo", logo);
        data.append("link", link);
        editHeaderLanding(data);
    });

    //Edicion del header del home
    //Edicion del header del home
    $(".modal-home-encabezado").on(
        "click",
        "#edit-home-encabezado-mobile",
        function () {
            let landing = $(".modal-home-encabezado").attr("landing");
            let container = "";
            let options = "";
            switch (landing) {
                case "canal-claro":
                    container = $("#navbar-prev-home iframe");
                    options = LandingHomeClaro;
                    break;
                case "admin":
                    container = $("#navbar-prev-home-landing iframe");
                    options = LandingHome;

                    break;
                case "claro-cinema":
                    container = $("#navbar-prev-home-cinema iframe");
                    options = LandingHomeCinema;
                    break;
                case "concert-channel":
                    container = $("#navbar-prev-home-concert iframe");
                    options = LandingHomeConcert;
                    break;
                default:
                    break;
            }
            landingView.uploadHomeBannerImages(container, options);
        }
    );
    $(".modal-home-encabezado").on(
        "click",
        "#edit-home-encabezado",
        function () {
            let videoimage =
                document.getElementById("video-promo-header-home").files[0] ||
                "";

            let title = $(".modal-home-encabezado .header-title-1").val() || "";
            let subtitle =
                $(".modal-home-encabezado .header-title-2").val() || "";

            let data = new FormData();

            data.append("video", videoimage);
            data.append("title", title);
            data.append("subtitle", subtitle);
            editHomeHeader(data);
            let landing = $(".modal-home-encabezado").attr("landing");
            switch (landing) {
                case "canal-claro":
                    resetIframe(
                        $("#navbar-prev-home iframe"),
                        LandingHomeClaro
                    );
                    break;
                case "admin":
                    resetIframe(
                        $("#navbar-prev-home-landing iframe"),
                        LandingHome
                    );
                    break;
                case "claro-cinema":
                    resetIframe(
                        $("#navbar-prev-home-cinema iframe"),
                        LandingHomeCinema
                    );
                    break;
                case "concert-channel":
                    resetIframe(
                        $("#navbar-prev-home-concert iframe"),
                        LandingHomeConcert
                    );
                    break;
                default:
                    break;
            }

            // if (landing == "claro-cinema") {
            //     resetIframe(
            //         $("#navbar-prev-home-cinema iframe"),
            //         LandingHomeCinema
            //     );
            // }
            if (landing == "concert-channel") {
                resetIframe(
                    $("#navbar-prev-home-concert iframe"),
                    LandingHomeConcert
                );
            }
        }
    );

    //Previsualizar el video que subió el usuario en el landing de home
    $("#video-promo-header-home").change(function () {
        if (this.files && this.files[0]) {
            let file = this.files[0];
            var reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = function (e) {
                // The file reader gives us an ArrayBuffer:
                let buffer = e.target.result;

                // We have to convert the buffer to a blob:
                let videoBlob = new Blob([new Uint8Array(buffer)], {
                    type: "video/mp4"
                });

                // The blob gives us a URL to the video file:
                let url = window.URL.createObjectURL(videoBlob);
                $("#video-promo-header-home").html(
                    `
                <video class="w-100 h-100 home-video" id="video-promo-header-home" style="display: block" controls muted autoplay>
                <source src="${url}" type="video/mp4">

                 </video>

                `
                );
            };
        }
    });

    $("#edit-titles-landing-concert").click(function () {
        //Title

        let value = $(".modal-concert-title").val();
        let key = $(".modal-concert-title").attr("key");
        let landing = "Concert Channel";
        editElementLanding({
            value: value,
            key: key,
            landing: landing
        });

        //Subtitle
        let valueSub = $(".modal-concert-subtitle").val();
        let keySub = $(".modal-concert-subtitle").attr("key");
        editElementLanding({
            value: valueSub,
            key: keySub,
            landing: landing
        });
    });

    function checkURL(url) {
        return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
    }

    //Previsualizar el video que subió el usuario en el landing de concert channel
    let videoPromoInput = $("#video-promo-file-concert");
    $("#video-promo-file-concert").change(function () {
        console.log('metodo concert')
        $("#image-promo-concert").val("");
        if (this.files && this.files[0]) {
            let file = this.files[0];
            var reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = function (e) {
                // The file reader gives us an ArrayBuffer:
                let buffer = e.target.result;

                // We have to convert the buffer to a blob:
                let videoBlob = new Blob([new Uint8Array(buffer)], {
                    type: "video/mp4"
                });

                // The blob gives us a URL to the video file:
                let url = window.URL.createObjectURL(videoBlob);

                $("#concert-promo-container").html(`<video class="w-100 h-100" id="video-promo-concert" style="display: block" controls muted autoplay><source src="${url}" type="video/mp4"></video>`);
                $("#cinema-promo-container").html(`<video class="w-100 h-100" id="video-promo-concert" style="display: block" controls muted autoplay><source src="${url}" type="video/mp4"></video>`);
            };
        }
    });

    $("#image-promo-concert").change(function () {
        videoPromoInput.val("");
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $("#concert-promo-container").html(`
                <img src="${e.target.result}" alt="" class="d-flex w-100" id="promo-image-concert">
                `);
            };
        }
        reader.readAsDataURL(this.files[0]);
    });

    $("#close-modal-promos-concert").click(function () {
        $("#link-promo-concert").val("");
    });

    $("#url-promo-concert-button").on("click", function () {
        let link = $("#link-promo-concert").val();
        let prevContainer = $("#concert-promo-container");
        let videoInput = $("#video-promo-file-concert");
        let imageInput = $("#image-promo-concert");
        if (checkURL(link)) {
            //Insertamos una nueva imagen con el link
            prevContainer.html(`
            <img src="${link}" alt="" class="d-flex w-100" id="promo-image-concert">
            `);
            //Limpiamos los input
            videoInput.val("");
            imageInput.val("");
        } else {
            prevContainer.html(
                `
                <video class="w-100 h-100" id="video-promo-concert" style="display: block" controls muted autoplay>
                    <source src="${link}" type="video/mp4">
                </video>
                `
            );
            //Limpiamos input
            videoInput.val("");
            imageInput.val("");
        }
    });

    //Landing de concert channel
    let navbarPrevConcertChannel = document.getElementById(
        "navbar-prev-concert-channel"
    );
    if (navbarPrevConcertChannel) {
        $("#navbar-prev-concert-channel iframe").remove();
        new easyXDM.Socket(confLandingConcertChannel);
    }

    //loader, antes de subir un archivo
    $(".upload-files").on("click", function () {
        const loader = `
        <div class="loader-view-container" id="loader2">
          <img src="./images/loader.gif" class="loader" alt="">
        </div>
        `;
        $("body").append(loader);
        setTimeout(function () {
            $("#loader2").remove();
        }, 3000);
    });

    //Evento para cuando cerramos el selectpicker

    $(".calendar-slider").on("click", ".programming-item", function () {
        $(".programming-item").removeClass("programming-item-active");
        $(this).addClass("programming-item-active");
        let date = $(this).attr("date");
        let section = $(this).attr("section_id");
        let time = $(".current").attr("schedule");
        getProgramming(date, section, time);
    });

    $(".thermometer-schedule-list").on("click", ".unavailable", function () {
        let chapter_id = $(this).attr("chapter_id");
        getChapterInfo(chapter_id, 'thumbnail-header-claro');
    });

    $(".modal-edit-program-carrusel").on(
        "change",
        ".edit-image-carrusel",
        function () {
            let image = this.files[0];
            let name = $(this).attr("program");
            let landing = $(this).attr("landing");
            let chapter_id = $(this).attr("chapter_id");
            console.log(landing, name, chapter_id);
            let data = new FormData();

            data.append("image-horizontal", image);
            data.append("landing", landing);
            data.append("chapter_id", chapter_id);
            data.append("name", name);
            updateImageProgramOfLanding(data);
        }
    );

    $("#edit-image-horizontal").on("change", function () {
        let image = this.files[0];
        let editProgramDataContainer = $(".edit-program-data-container");
        let name = editProgramDataContainer.attr("program");
        let landing = editProgramDataContainer.attr("section");
        let chapter_id = editProgramDataContainer.attr("chapter_id");

        let data = new FormData();

        data.append("image-horizontal", image);
        data.append("landing", landing);
        data.append("chapter_id", chapter_id);
        data.append("name", name);
        updateImageProgramOfLanding(data);
    });

    $(".edit-program-attribute-text").keydown(function (e) {
        if (e.which === 13 && !e.shiftKey) {
            let key = $(this).attr("key");
            let chapter_id = $(".edit-program-data-container").attr(
                "chapter_id"
            );
            console.log($(".edit-program-data-container-s").attr("chapter_id"));
            let value = $(this).val();
            switch (key) {
                case "in_home_begin":
                    if (
                        $(".edit-home-date-begin").val() &&
                        $(".edit-home-time-begin").val()
                    ) {
                        value = `${$(this).val()} ${$(
                            ".edit-home-time-begin"
                        ).val()}`;

                        editAttributeProgram(chapter_id, key, value);
                        $(this).blur();
                    } else if (
                        $(".edit-home-date-begin").val() &&
                        !$(".edit-home-time-begin").val()
                    ) {
                        let date = $(this)
                            .val()
                            .split("-");
                        value = `${date[2]}-${date[1]}-${date[0]} 00:00:00`;
                        editAttributeProgram(chapter_id, key, value);
                        $(this).blur();
                    }

                    break;
                case "in_home_expiration":
                    if (
                        $(".edit-home-date-expiration").val() &&
                        $(".edit-home-time-expiration").val()
                    ) {
                        let date = $(".edit-home-date-expiration")
                            .val()
                            .split("-");
                        value = `${date[2]}-${date[1]}-${date[0]} ${$(
                            ".edit-home-time-expiration"
                        ).val()}`;

                        editAttributeProgram(chapter_id, key, value);
                        $(this).blur();
                    } else if (
                        $(".edit-home-date-expiration").val() &&
                        !$(".edit-home-time-expiration").val()
                    ) {
                        let date = $(".edit-home-date-expiration")
                            .val()
                            .split("-");
                        value = `${date[2]}-${date[1]}-${date[0]} 00:00:00`;
                        editAttributeProgram(chapter_id, key, value);
                        $(this).blur();
                    }

                    break;
                case "in_landing_begin":
                    if (
                        $(".edit-landing-date-begin").val() &&
                        $(".edit-landing-time-begin").val()
                    ) {
                        let date = $(".edit-landing-date-begin")
                            .val()
                            .split("-");
                        value = `${date[2]}-${date[1]}-${date[0]} ${$(
                            ".edit-landing-time-begin"
                        ).val()}`;

                        editAttributeProgram(chapter_id, key, value);
                        $(this).blur();
                    } else if (
                        $(".edit-landing-date-begin").val() &&
                        !$(".edit-landing-time-begin").val()
                    ) {
                        let date = $(".edit-landing-date-begin")
                            .val()
                            .split("-");
                        value = `${date[2]}-${date[1]}-${date[0]} 00:00:00`;

                        editAttributeProgram(chapter_id, key, value);
                        $(this).blur();
                    }

                    break;
                case "in_landing_expiration":
                    if (
                        $(".edit-landing-date-end").val() &&
                        $(".edit-landing-time-end").val()
                    ) {
                        let date = $(".edit-landing-date-end")
                            .val()
                            .split("-");
                        value = `${date[2]}-${date[1]}-${date[0]} ${$(
                            ".edit-landing-time-end"
                        ).val()}`;
                        editAttributeProgram(chapter_id, key, value);
                        $(this).blur();
                    } else if (
                        $(".edit-landing-date-end").val() &&
                        !$(".edit-landing-time-end").val()
                    ) {
                        let date = $(".edit-landing-date-end")
                            .val()
                            .split("-");
                        value = `${date[2]}-${date[1]}-${date[0]} 00:00:00`;

                        editAttributeProgram(chapter_id, key, value);
                        $(this).blur();
                    }

                    break;
                default:
                    editAttributeProgram(chapter_id, key, value);
                    $(this).blur();
                    break;
            }

            //let iframe = $("#navbar-prev-programacion iframe").attr("src");
            //$("#navbar-prev-programacion iframe").attr("src", iframe);
        }
    });
    $(".modal-programming-carousel-claro").on(
        "change",
        ".input-image-program",
        function () {
            let currentInput = $(this);
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    currentInput
                        .next()
                        .children(".prev-image-program")
                        .attr("src", e.target.result)
                        .addClass("h-100 w-100")
                        .css("z-index", "2");
                };

                reader.readAsDataURL(this.files[0]);
            }
        }
    );
    $(".modal-programming-carousel-concert").on(
        "change",
        ".input-image-program",
        function () {
            let currentInput = $(this);
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    currentInput
                        .next()
                        .children(".prev-image-program")
                        .attr("src", e.target.result)
                        .addClass("h-100 w-100")
                        .css("z-index", "2");
                };

                reader.readAsDataURL(this.files[0]);
            }
        }
    );
    $(".modal-edit-program-carrusel").on(
        "change",
        ".input-image-program",
        function () {
            let currentInput = $(this);

            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    currentInput
                        .next()
                        .children(".prev-image-program")
                        .attr("src", e.target.result)
                        .addClass("h-100 w-100")
                        .css("z-index", "2");
                };

                reader.readAsDataURL(this.files[0]);
            }
        }
    );

    //Editar datos de un programa de un carrusel en el landing
    $(".modal-edit-program-carrusel").on(
        "keydown",
        ".edit-program-attribute-text",

        function (e) {
            if (e.which === 13 && !e.shiftKey) {
                let key = $(this).attr("key");
                let chapter_id = $(this).attr("chapter_id");
                let value = $(this).val();

                switch (key) {
                    case "in_home_begin":
                        if (
                            $(
                                ".modal-edit-program-carrusel .edit-home-date-begin"
                            ).val() &&
                            $(
                                ".modal-edit-program-carrusel .edit-home-time-begin"
                            ).val()
                        ) {
                            let date = $(
                                ".modal-edit-program-carrusel .edit-home-date-begin"
                            )
                                .val()
                                .split("-");
                            value = `${date[2]}-${date[1]}-${date[0]} ${$(
                                ".modal-edit-program-carrusel .edit-home-time-begin"
                            ).val()}`;

                            editAttributeProgram(chapter_id, key, value);
                            $(this).blur();
                        } else if (
                            $(
                                ".modal-edit-program-carrusel .edit-home-date-begin"
                            ).val() &&
                            !$(
                                ".modal-edit-program-carrusel .edit-home-time-begin"
                            ).val()
                        ) {
                            let date = $(
                                ".modal-edit-program-carrusel .edit-home-date-begin"
                            )
                                .val()
                                .split("-");
                            value = `${date[2]}-${date[1]}-${date[0]} 00:00:00`;
                            editAttributeProgram(chapter_id, key, value);
                            $(this).blur();
                        }

                        break;
                    case "in_home_expiration":
                        if (
                            $(
                                ".modal-edit-program-carrusel .edit-home-date-end"
                            ).val() &&
                            $(
                                ".modal-edit-program-carrusel .edit-home-time-end"
                            ).val()
                        ) {
                            let date = $(
                                ".modal-edit-program-carrusel .edit-home-date-end"
                            )
                                .val()
                                .split("-");
                            value = `${date[2]}-${date[1]}-${date[0]} ${$(
                                ".modal-edit-program-carrusel .edit-home-time-end"
                            ).val()}`;

                            editAttributeProgram(chapter_id, key, value);
                            $(this).blur();
                        } else if (
                            $(
                                ".modal-edit-program-carrusel .edit-home-date-end"
                            ).val() &&
                            !$(
                                ".modal-edit-program-carrusel .edit-home-time-end"
                            ).val()
                        ) {
                            let date = $(
                                ".modal-edit-program-carrusel .edit-home-date-end"
                            )
                                .val()
                                .split("-");
                            value = `${date[2]}-${date[1]}-${date[0]} 00:00:00`;
                            editAttributeProgram(chapter_id, key, value);
                            $(this).blur();
                        }

                        break;
                    case "in_landing_begin":
                        if (
                            $(
                                ".modal-edit-program-carrusel .edit-landing-date-begin"
                            ).val() &&
                            $(
                                ".modal-edit-program-carrusel .edit-landing-time-begin"
                            ).val()
                        ) {
                            let date = $(
                                ".modal-edit-program-carrusel .edit-landing-date-begin"
                            )
                                .val()
                                .split("-");

                            value = `${date[2]}-${date[1]}-${date[0]} ${$(
                                ".modal-edit-program-carrusel .edit-landing-time-begin"
                            ).val()}`;

                            editAttributeProgram(chapter_id, key, value);
                            $(this).blur();
                        } else if (
                            $(
                                ".modal-edit-program-carrusel .edit-landing-date-begin"
                            ).val() &&
                            !$(
                                ".modal-edit-program-carrusel .edit-landing-time-begin"
                            ).val()
                        ) {
                            let date = $(
                                ".modal-edit-program-carrusel .edit-landing-date-begin"
                            )
                                .val()
                                .split("-");
                            value = `${date[2]}-${date[1]}-${date[0]} 00:00:00`;

                            editAttributeProgram(chapter_id, key, value);
                            $(this).blur();
                        }

                        break;
                    case "in_landing_expiration":
                        //Si se escribió la hora y la fecha
                        if (
                            $(
                                ".modal-edit-program-carrusel .edit-landing-date-end"
                            ).val() &&
                            $(
                                ".modal-edit-program-carrusel .edit-landing-time-end"
                            ).val()
                        ) {
                            let date = $(
                                ".modal-edit-program-carrusel  .edit-landing-date-end"
                            )
                                .val()
                                .split("-");
                            value = `${date[2]}-${date[1]}-${date[0]} ${$(
                                ".modal-edit-program-carrusel  .edit-landing-time-end"
                            ).val()}`;
                            editAttributeProgram(chapter_id, key, value);
                            $(this).blur();
                        } else if (
                            $(
                                ".modal-edit-program-carrusel .edit-landing-date-end"
                            ).val() &&
                            !$(
                                ".modal-edit-program-carrusel .edit-landing-time-end"
                            ).val()
                        ) {
                            let date = $(
                                ".modal-edit-program-carrusel .edit-landing-date-end"
                            )
                                .val()
                                .split("-");
                            value = `${date[2]}-${date[1]}-${date[0]} 00:00:00`;

                            editAttributeProgram(chapter_id, key, value);
                            $(this).blur();
                        }

                        break;
                    default:
                        editAttributeProgram(chapter_id, key, value);
                        $(this).blur();
                        break;
                }

                //let iframe = $("#navbar-prev-programacion iframe").attr("src");
                //$("#navbar-prev-programacion iframe").attr("src", iframe);
            }
        }
    );

    $(".edit-program-attribute-text").blur(function (e) {
        console.log("blur");
        let key = $(this).attr("key");
        let chapter_id = $(".edit-program-data-container").attr("chapter_id");
        let value = $(this).val();
        switch (key) {
            case "in_home_begin":
                if (
                    $(".edit-home-date-begin").val() &&
                    $(".edit-home-time-begin").val()
                ) {
                    value = `${$(this).val()} ${$(
                        ".edit-home-time-begin"
                    ).val()}`;

                    editAttributeProgram(chapter_id, key, value);
                } else if (
                    $(".edit-home-date-begin").val() &&
                    !$(".edit-home-time-begin").val()
                ) {
                    let date = $(this)
                        .val()
                        .split("-");
                    value = `${date[2]}-${date[1]}-${date[0]} 00:00:00`;
                    editAttributeProgram(chapter_id, key, value);
                }

                break;
            case "in_home_expiration":
                if (
                    $(".edit-home-date-expiration").val() &&
                    $(".edit-home-time-expiration").val()
                ) {
                    let date = $(".edit-home-date-expiration")
                        .val()
                        .split("-");
                    value = `${date[2]}-${date[1]}-${date[0]} ${$(
                        ".edit-home-time-expiration"
                    ).val()}`;

                    editAttributeProgram(chapter_id, key, value);
                } else if (
                    $(".edit-home-date-expiration").val() &&
                    !$(".edit-home-time-expiration").val()
                ) {
                    let date = $(".edit-home-date-expiration")
                        .val()
                        .split("-");
                    value = `${date[2]}-${date[1]}-${date[0]} 00:00:00`;
                    editAttributeProgram(chapter_id, key, value);
                }

                break;
            case "in_landing_begin":
                if (
                    $(".edit-landing-date-begin").val() &&
                    $(".edit-landing-time-begin").val()
                ) {
                    let date = $(".edit-landing-date-begin")
                        .val()
                        .split("-");
                    value = `${date[2]}-${date[1]}-${date[0]} ${$(
                        ".edit-landing-time-begin"
                    ).val()}`;

                    editAttributeProgram(chapter_id, key, value);
                } else if (
                    $(".edit-landing-date-begin").val() &&
                    !$(".edit-landing-time-begin").val()
                ) {
                    let date = $(".edit-landing-date-begin")
                        .val()
                        .split("-");
                    value = `${date[2]}-${date[1]}-${date[0]} 00:00:00`;
                    editAttributeProgram(chapter_id, key, value);
                }

                break;
            case "in_landing_expiration":
                if (
                    $(".edit-landing-date-end").val() &&
                    $(".edit-landing-time-end").val()
                ) {
                    let date = $(".edit-landing-date-end")
                        .val()
                        .split("-");
                    value = `${date[2]}-${date[1]}-${date[0]} ${$(
                        ".edit-landing-time-end"
                    ).val()}`;
                    editAttributeProgram(chapter_id, key, value);
                } else if (
                    $(".edit-landing-date-end").val() &&
                    !$(".edit-landing-time-end").val()
                ) {
                    let date = $(".edit-landing-date-end")
                        .val()
                        .split("-");
                    value = `${date[2]}-${date[1]}-${date[0]} 00:00:00`;

                    editAttributeProgram(chapter_id, key, value);
                }
                break;
            default:
                editAttributeProgram(chapter_id, key, value);
                break;
        }

        //let iframe = $("#navbar-prev-programacion iframe").attr("src");
        //$("#navbar-prev-programacion iframe").attr("src", iframe);
    });
    $(".modal-edit-program-carrusel").on(
        "blur",
        ".edit-program-attribute-text",
        function (e) {
            let key = $(this).attr("key");
            let chapter_id = $(this).attr("chapter_id");
            let value = $(this).val();
            switch (key) {
                case "in_home_begin":
                    if (
                        $(
                            ".modal-edit-program-carrusel .edit-home-date-begin"
                        ).val() &&
                        $(
                            ".modal-edit-program-carrusel .edit-home-time-begin"
                        ).val()
                    ) {
                        let date = $(
                            ".modal-edit-program-carrusel .edit-home-date-begin"
                        ).val();
                        value = `${date[2]}-${date[1]}-${date[0]} ${$(
                            ".modal-edit-program-carrusel .edit-home-time-begin"
                        ).val()}`;

                        chapter_id, key, value;
                    } else if (
                        $(
                            ".modal-edit-program-carrusel .edit-home-date-begin"
                        ).val() &&
                        !$(
                            ".modal-edit-program-carrusel .edit-home-time-begin"
                        ).val()
                    ) {
                        let date = $(
                            ".modal-edit-program-carrusel .edit-home-date-begin"
                        )
                            .val()
                            .split("-");
                        value = `${date[2]}-${date[1]}-${date[0]} 00:00:00`;
                        editAttributeProgram(chapter_id, key, value);
                    }

                    break;
                case "in_home_expiration":
                    if (
                        $(
                            ".modal-edit-program-carrusel .edit-home-date-expiration"
                        ).val() &&
                        $(
                            ".modal-edit-program-carrusel .edit-home-time-expiration"
                        ).val()
                    ) {
                        let date = $(
                            ".modal-edit-program-carrusel .edit-home-date-expiration"
                        )
                            .val()
                            .split("-");
                        value = `${date[2]}-${date[1]}-${date[0]} ${$(
                            ".modal-edit-program-carrusel .edit-home-time-expiration"
                        ).val()}`;
                        console.log(date);
                        editAttributeProgram(chapter_id, key, value);
                    } else if (
                        $(
                            ".modal-edit-program-carrusel .edit-home-date-expiration"
                        ).val() &&
                        !$(
                            ".modal-edit-program-carrusel .edit-home-time-expiration"
                        ).val()
                    ) {
                        let date = $(
                            ".modal-edit-program-carrusel .edit-home-date-expiration"
                        )
                            .val()
                            .split("-");
                        value = `${date[2]}-${date[1]}-${date[0]} 00:00:00`;
                        editAttributeProgram(chapter_id, key, value);
                    }

                    break;
                case "in_landing_begin":
                    if (
                        $(
                            ".modal-edit-program-carrusel .edit-landing-date-begin"
                        ).val() &&
                        $(
                            ".modal-edit-program-carrusel .edit-landing-time-begin"
                        ).val()
                    ) {
                        let date = $(
                            ".modal-edit-program-carrusel .edit-landing-date-begin"
                        )
                            .val()
                            .split("-");
                        value = `${date[2]}-${date[1]}-${date[0]} ${$(
                            ".modal-edit-program-carrusel .edit-landing-time-begin"
                        ).val()}`;

                        editAttributeProgram(chapter_id, key, value);
                    } else if (
                        $(
                            ".modal-edit-program-carrusel .edit-landing-date-begin"
                        ).val() &&
                        !$(
                            ".modal-edit-program-carrusel .edit-landing-time-begin"
                        ).val()
                    ) {
                        let date = $(
                            ".modal-edit-program-carrusel .edit-landing-date-begin"
                        )
                            .val()
                            .split("-");
                        value = `${date[2]}-${date[1]}-${date[0]} 00:00:00`;
                        editAttributeProgram(chapter_id, key, value);
                    }

                    break;
                case "in_landing_expiration":
                    if (
                        $(
                            ".modal-edit-program-carrusel .edit-landing-date-end"
                        ).val() &&
                        $(
                            ".modal-edit-program-carrusel .edit-landing-time-end"
                        ).val()
                    ) {
                        let date = $(
                            ".modal-edit-program-carrusel .edit-landing-date-end"
                        )
                            .val()
                            .split("-");
                        value = `${date[2]}-${date[1]}-${date[0]} ${$(
                            ".modal-edit-program-carrusel .edit-landing-time-end"
                        ).val()}`;
                        editAttributeProgram(chapter_id, key, value);
                    } else if (
                        $(
                            ".modal-edit-program-carrusel .edit-landing-date-end"
                        ).val() &&
                        !$(
                            ".modal-edit-program-carrusel .edit-landing-time-end"
                        ).val()
                    ) {
                        let date = $(
                            ".modal-edit-program-carrusel .edit-landing-date-end"
                        )
                            .val()
                            .split("-");
                        value = `${date[2]}-${date[1]}-${date[0]} 00:00:00`;

                        editAttributeProgram(chapter_id, key, value);
                    }
                    break;
                default:
                    editAttributeProgram(chapter_id, key, value);
                    break;
            }

            //let iframe = $("#navbar-prev-programacion iframe").attr("src");
            //$("#navbar-prev-programacion iframe").attr("src", iframe);
        }
    );

    $(".edit-program-switch").click(function () {
        let value = $(this).val();
        let key = $(this).attr("key");
        let chapter_id = $(".edit-program-data-container").attr("chapter_id");
        editAttributeProgram(chapter_id, key, value);
    });
    $(".modal-edit-program-carrusel").on(
        "click",
        ".edit-program-switch",
        function () {
            let value = $(this).val();
            let key = $(this).attr("key");
            let chapter_id = $(this).attr("chapter_id");
            editAttributeProgram(chapter_id, key, value);
        }
    );

    $(".edit-switch-home").click(function () {
        if ($(this).val() == 0) {
            $(".edit-home-date-end").val("");
            $(".edit-home-date-begin").val("");
            $(".edit-home-time-end").val("");
            $(".edit-home-time-begin").val("");
        }
    });
    $(".modal-edit-program-carrusel").on(
        "click",
        ".edit-switch-home",
        function () {
            if ($(this).val() == 0) {
                $(".edit-home-date-end").val("");
                $(".edit-home-date-begin").val("");
                $(".edit-home-time-end").val("");
                $(".edit-home-time-begin").val("");
            }
        }
    );

    $(".edit-switch-landing").click(function () {
        let chapter_id = $(".edit-program-data-container").attr("chapter_id");
        let value = $(this).val();
        let key = $(this).attr("key");
        if ($(this).val() == 0) {
            $(".edit-landing-date-end").val("");
            $(".edit-landing-date-begin").val("");
            $(".edit-landing-time-end").val("");
            $(".edit-landing-time-begin").val("");
            $("#landing-section-1").prop("checked", false);
            $("#landing-section-1").attr("disabled", true);
            $("#landing-section-2").prop("checked", false);
            $("#landing-section-2").attr("disabled", true);
            editAttributeProgram(chapter_id, key, value);
        } else {
            $("#landing-section-1").attr("disabled", false);
            $("#landing-section-2").attr("disabled", false);
        }
    });
    //
    $(".modal-edit-program-carrusel").on(
        "click",
        ".edit-switch-landing",
        function () {
            let chapter_id = $(
                ".modal-edit-program-carrusel .edit-program-data-container"
            ).attr("chapter_id");
            let value = $(this).val();
            let key = $(this).attr("key");
            if ($(this).val() == 0) {
                $(".edit-landing-date-end").val("");
                $(".edit-landing-date-begin").val("");
                $(".edit-landing-time-end").val("");
                $(".edit-landing-time-begin").val("");
                $("#landing-section-1").prop("checked", false);
                $("#landing-section-1").attr("disabled", true);
                $("#landing-section-2").prop("checked", false);
                $("#landing-section-2").attr("disabled", true);
                editAttributeProgram(chapter_id, key, value);
            } else {
                $("#landing-section-1").attr("disabled", false);
                $("#landing-section-2").attr("disabled", false);
                editAttributeProgram(chapter_id, key, value);
            }
        }
    );
    //loader, antes de subir un archivo
    $(".load-modales").click(function () {
        $(".modal-edit-icons .modal-content").append(
            `<div class="loader-view-container pointer-none" >
            <img src="./images/loader.gif" class="loader"/>
        </div>`
        );

        setTimeout(function () {
            $(".loader-view-container").remove();
        }, 3000);
    });
    //loader, antes de subir un archivo
    $(".load-modal-programming").click(function () {
        $(".modal-edit-program .modal-content").append(
            `<div class="loader-view-container pointer-none" >
            <img src="./images/loader.gif" class="loader"/>
        </div>`
        );

        setTimeout(function () {
            $(".loader-view-container").remove();
        }, 3000);
    });
    //loader, antes de subir un archivo
    $(".load-programming-carousel").click(function () {
        $(".modal-programming-carousel .modal-content").append(
            `<div class="loader-view-container pointer-none" >
            <img src="./images/loader.gif" class="loader"/>
        </div>`
        );
        setTimeout(function () {
            $(".loader-view-container").remove();
        }, 3000);
    });

    //activacion de paginacion
    $(".slider-logo").click(function () {
        $(".slider-pagination").removeClass("slider-pagination-active") &
            $(".slider-pagination").removeClass("a-text-bold-white");
        $(" .slider-pagination").addClass("a-text-bold-teal");

        $(this)
            .find(".slider-pagination")
            .addClass("slider-pagination-active") &
            $(this)
                .find(".slider-pagination")
                .addClass("a-text-bold-white") &
            $(this)
                .find(".slider-pagination")
                .removeClass("a-text-bold-teal");
    });
    $("#edit-logos-button").click(function () {
        let data = new FormData();
        //Canal claro
        let logoUrlCanalClaro =
            document.getElementById("image-icon1").files[0] || "";
        data.append("logoCanalClaro", logoUrlCanalClaro);
        let urlCanalClaro = $("#link-logo-canal-claro").val() || "";
        data.append("urlCanalClaro", urlCanalClaro);

        //Concert channel
        let logoUrlConcertChannel =
            document.getElementById("image-icon2").files[0] || "";
        data.append("logoConcertChannel", logoUrlConcertChannel);
        let urlConertChannel = $("#link-logo-concert-channel").val() || "";
        data.append("urlConcertChannel", urlConertChannel);

        //Claro cinema
        let logoUrlClaroCinema =
            document.getElementById("image-icon3").files[0] || "";
        data.append("logoClaroCinema", logoUrlClaroCinema);
        let urlClaroCinema = $("#link-logo-claro-cinema").val() || "";
        data.append("urlClaroCinema", urlClaroCinema);
        updateLogosOfLanding(data);
    });

    $("#image-programming-button").click(function () {
        /*
            Arreglo para saber la posición de las imágenes que cargo el usuario
            es decir, saber si subió la 1 y 3, o 2,3 etc.
        */
        let imagesPositions = [];
        //Arreglo para guardar imágenes de los usuarios
        let imagesProgramming = [];
        //Recorremos cada input para obtener las imágenes
        $(".image_programming").each(function () {
            if (this.files[0]) {
                imagesPositions.push($(this).attr("data-index"));
            }

            imagesProgramming.push(this.files[0]);
        });

        let data = new FormData();

        //Hacemos un for para mandar file1, file2, etc. en el form data
        for (let index = 0; index < imagesProgramming.length; index++) {
            let file = "file" + (index + 1).toString();
            file = file.toString();
            data.append(file, imagesProgramming[index]);
        }
        //Posiciones de las imágenes
        data.append("positions", imagesPositions);

        //Hora inicio y fin
        data.append("date", $("#date-start-input").val());

        updateImagesOfProgrammingSlider(data);
    });

    //para agregar un slider más en cinema
    $(".add-programming-image").click(function () {
        let slideIndex = $(".load-programming-carousel").length + 1;
        //Cada vez que se haga click, el contador incrementa

        //Agregamos un slide al slider de programación
        $(".programming-slider-claro-cinema").slick(
            "slickAdd",
            `
            <div class="slick-slide">
                <div>
                <div class="bor thumbnail-image-program position-relative h-100">
                <input type="file" name="image_programming[]" id="image_programming_${slideIndex}" class="input-image-program d-none image_programming " data-index="${slideIndex}">
                    <label for="image_programming_${slideIndex}" class="h-100 mb-0 d-flex justify-content-center  align-items-center flex-column    ">
                        <img src="./images/synopsis/camara.svg" alt="add-photo" class=" cursor-pointer add-photo " />
                        <span class="a-text-bold-warm text-plus p-2 banner-text mt-3">1920px X 657px</span>
                        <img src="./images/synopsis/image-synopsis-carrusel.jpg" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program">
                    </label>
                    </div>
                </div>
            </div>
            `
        );
    });

    //para agregar un slider más en carrusel2-concert
    $(".add-programming-image").click(function () {
        let sliderIndex = $(".load-programming-carousel").length + 1;
        $(".carrusel2-slider").slick(
            "slickAdd",
            `
        <!--otro slider-->
<div>

<section class="edit-program-image">
    <select
        class=".header-background1 thumbnail-header thumbnail-header-claro w-100 a-text-MBlack h2 d-flex align-items-center justify-content-between position-relative programs-catalogue"
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
                    <input type="radio"  id="yes-landing-carrusel" value="3"
                        class="edit-switch-landing edit-landing-yes" key="in_landing" />
                    <label for="yes-landing-carrusel" id="siestado-landing"
                        class="mb-0 si-estilo cursor-pointer switch-label">
                        Sí</label>
                    <input type="radio"  id="no-landing-carrusel" value="0"
                        class="edit-switch-landing switch-table-edit edit-landing-no"
                         checked/>
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
                    <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Fecha
                    </p>
                    <div class="mb-3 text-center edit-rectangle-small-container  backwhite py-3">
                        <span class="a-text-bold-warm">Inicio: <input type="text"
                                class="input-basic edit-program-input a-text-bold-warm edit-program-attribute-text schedule-date-input edit-landing-date-begin"
                                placeholder="00-00-0000" key="in_landing_begin" /></span>
                    </div>
                    <div class="mb-4 text-center edit-rectangle-small-container backwhite py-3">
                        <span class="a-text-bold-warm">Fin: <input type="text"
                                class="input-basic edit-program-input a-text-bold-warm edit-program-attribute-text schedule-date-input edit-landing-date-end"
                                key="in_landing_expiration" placeholder="00-00-0000"></span>
                    </div>
                </div>
                <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                    <span class="a-text-bold-warm">Inicio: <input type="text"
                            class="time-seconds-input input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase edit-landing-time-begin"
                            key="in_landing_begin" placeholder="00:00:00"></span>
                </div>
                <div class="text-center edit-rectangle-small-container backwhite py-3">
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
                    <input type="radio"  id="edit-in-home-yes" value="1"
                        class="edit-switch-home edit-program-switch edit-in-home-yes"
                        key="in_home" />
                    <label for="edit-in-home-yes" id="siestado-landing"
                        class="si-estilo cursor-pointer mb-0 switch-label">
                        Sí</label>
                    <input type="radio"  id="edit-in-home-no" value="0"
                        checked class="edit-switch-home edit-program-switch edit-in-home-no"
                        key="in_home" />
                    <label for="edit-in-home-no" id="noestado-landing"
                        class="mb-0 no-estilo cursor-pointer switch-label">
                        No</label>
                </div>
                <div>
                    <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Fecha
                    </p>
                    <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                        <span class="a-text-bold-warm">Inicio: <input key="in_home_begin"
                                type="text"
                                class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-home-date-begin edit-program-attribute-text"
                                placeholder="00-00-0000" /></span>
                    </div>
                    <div class="mb-4 text-center edit-rectangle-small-container  backwhite py-3">
                        <span class="a-text-bold-warm">Fin:
                            <input type="text" key="in_home_expiration"
                                class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-home-date-end edit-program-attribute-text"
                                placeholder="00-00-0000"></span>
                    </div>
                </div>
                <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                    <span class="a-text-bold-warm">Inicio: <input key="in_home_begin"
                            type="text"
                            class="time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase edit-home-time-begin"
                            placeholder="00:00:00"></span>
                </div>
                <div class="text-center edit-rectangle-small-container backwhite py-3">
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
                    <div class="text-center edit-rectangle-small-container backwhite py-2 d-flex align-content-center justify-content-center"
                        style="margin-bottom: 81px">
                        <img src="{{ asset('images/calendario.svg') }}" alt=""
                                class="mr-3">
                        <span class="a-text-bold-warm mt-3">

                            <input key="" type=" text"
                                class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date"
                                placeholder="00-00-0000"></span>
                    </div>
                </div>
                <p class="mb-3 pt-3 text-plus a-text-medium-coolgray text-uppercase">Hora
                </p>
                <div
                    class="text-center edit-rectangle-small-container  backwhite d-flex align-content-center justify-content-center py-2">
                    <img
                            src="{{ asset('images/reloj.svg') }}" alt="" class="mr-3">
                    <span class="a-text-bold-warm mt-3"><input
                            type="text"
                            class="time-seconds-input input-basic edit-program-input a-text-bold-warm edit-schedule-item-time text-uppercase"
                            placeholder="00:00:00"></span>
                </div>
            </div>
        </div>
    </div>
</section>
<!--Sinopsis-->
<section class=" edit-program-data-container">
    <h3 class="h3 text-uppercase a-text-bold-brown-two mb-3">Sinopsis</h3>
    <!--Textarea-->
    <textarea key="synopsis"
        class="edit-synopsis edit-program-textarea edit-program-attribute-text a-text-semibold-warmgrey p-3"
        id="prog_sinopsis"></textarea>
        <button class="a-btn-teal a-btn-basic-small text-normal a-text-MBlack float-right btn-actual d-flex align-items-center justify-content-center" ><img src="./images/basic-icons/enter.svg" alt=""> ACTUALIZAR</button>
        <div class="clearfix"></div>
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
                <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
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
                <div class="mb-3 text-center edit-rectangle-small-container  backwhite py-3">
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
                <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
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
                <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
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
                        class="mb-3 text-center edit-rectangle-small-container backwhite py-3 d-flex align-items-center justify-content-center">
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
                        class="mb-3 text-center edit-rectangle-small-container backwhite py-3 d-flex align-items-center justify-content-center">
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
                        class="mb-3 text-center edit-rectangle-small-container backwhite py-3 d-flex align-items-center justify-content-center">
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
                    <input type="radio"  id="yes-subbed" value="1"
                        class="edit-program-switch switch-landing edit-subbed-yes"
                        key="subbed" />
                    <label for="yes-subbed" id="siestado-landing"
                        class="si-estilo cursor-pointer mb-0 switch-label">
                        Sí</label>
                    <input type="radio"  id="no-dubbed" value="0" checked
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
                    <input type="radio"  id="yes-dubbed" value="1"
                        class="edit-program-switch switch-landing edit-dubbed-yes"
                        key="dubbed" />
                    <label for="yes-dubbed" id="siestado-landing"
                        class="si-estilo cursor-pointer mb-0 switch-label">
                        Sí</label>
                    <input type="radio"  id="no-dubbed" value="0" checked
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
                    <input type="radio"  id="yes-audio5" value="1"
                        class="edit-program-switch switch-landing edit-audio5-yes"
                        key="audio5" />
                    <label for="yes-audio5" id="siestado-landing"
                        class="si-estilo cursor-pointer mb-0 switch-label">
                        Sí</label>
                    <input type="radio"  id="no-audio5" value="0" checked
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
    data-dismiss="modal">ACEPTAR</button>
</section>

</div>
</div>

       <!--fin del otro slider-->
`
        );
    });
    //para agregar un slider más en carrusel1-concert
    $(".add-programming-image").click(function () {
        let slideIndex = $(".load-programming-carousel").length + 1;
        //Cada vez que se haga click, el contador incrementa

        //Agregamos un slide al slider de programación
        $(".carrusel1-slider").slick(
            "slickAdd",
            `
            <div class="slick-slide">
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
                                <input type="radio"  id="yes-landing-carrusel1" value="3"
                                    class="edit-switch-landing edit-landing-yes"  />
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
                                    1</span>

                            </div>
                            <div>
                                <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Fecha
                                </p>
                                <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                                    <span class="a-text-bold-warm">Inicio: <input type="text"
                                            class="input-basic edit-program-input a-text-bold-warm edit-program-attribute-text schedule-date-input edit-landing-date-begin"
                                            placeholder="00-00-0000" key="in_landing_begin" /></span>
                                </div>
                                <div class="mb-4 text-center edit-rectangle-small-container backwhite py-3">
                                    <span class="a-text-bold-warm">Fin: <input type="text"
                                            class="input-basic edit-program-input a-text-bold-warm edit-program-attribute-text schedule-date-input edit-landing-date-end"
                                            key="in_landing_expiration" placeholder="00-00-0000"></span>
                                </div>
                            </div>
                            <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                            <div class="mb-3 text-center edit-rectangle-small-container  backwhite py-3">
                                <span class="a-text-bold-warm">Inicio: <input type="text"
                                        class="time-seconds-input input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase edit-landing-time-begin"
                                        key="in_landing_begin" placeholder="00:00:00"></span>
                            </div>
                            <div class="text-center edit-rectangle-small-container backwhite py-3">
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
                                <input type="radio"  id="edit-in-home-yes" value="1"
                                    class="edit-switch-home edit-program-switch edit-in-home-yes"
                                    key="in_home" />
                                <label for="edit-in-home-yes" id="siestado-landing"
                                    class="si-estilo cursor-pointer mb-0 switch-label">
                                    Sí</label>
                                <input type="radio"  id="edit-in-home-no" value="0"
                                    checked class="edit-switch-home edit-program-switch edit-in-home-no"
                                    key="in_home" />
                                <label for="edit-in-home-no" id="noestado-landing"
                                    class="mb-0 no-estilo cursor-pointer switch-label">
                                    No</label>
                            </div>
                            <div>
                                <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Fecha
                                </p>
                                <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                                    <span class="a-text-bold-warm">Inicio: <input key="in_home_begin"
                                            type="text"
                                            class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-home-date-begin edit-program-attribute-text"
                                            placeholder="00-00-0000" /></span>
                                </div>
                                <div class="mb-4 text-center edit-rectangle-small-container  backwhite py-3">
                                    <span class="a-text-bold-warm">Fin:
                                        <input type="text" key="in_home_expiration"
                                            class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-home-date-end edit-program-attribute-text"
                                            placeholder="00-00-0000"></span>
                                </div>
                            </div>
                            <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                            <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                                <span class="a-text-bold-warm">Inicio: <input key="in_home_begin"
                                        type="text"
                                        class="time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase edit-home-time-begin"
                                        placeholder="00:00:00"></span>
                            </div>
                            <div class="text-center edit-rectangle-small-container backwhite py-3">
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
                                <div class="text-center edit-rectangle-small-container backwhite py-2 d-flex align-content-center justify-content-center"
                                    style="margin-bottom: 81px">
                                    <img src="{{ asset('images/calendario.svg') }}" alt=""
                                            class="mr-3">
                                    <span class="a-text-bold-warm mt-3">

                                        <input key="" type=" text"
                                            class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date"
                                            placeholder="00-00-0000"></span>
                                </div>
                            </div>
                            <p class="mb-3 pt-3 text-plus a-text-medium-coolgray text-uppercase">Hora
                            </p>
                            <div
                                class="text-center edit-rectangle-small-container backwhite d-flex align-content-center justify-content-center py-2">
                                <img
                                        src="{{ asset('images/reloj.svg') }}" alt="" class="mr-3">
                                <span class="a-text-bold-warm mt-3"><input
                                        type="text"
                                        class="time-seconds-input input-basic edit-program-input a-text-bold-warm edit-schedule-item-time text-uppercase"
                                        placeholder="00:00:00"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!--Sinopsis-->
            <section class=" edit-program-data-container">
                <h3 class="h3 text-uppercase a-text-bold-brown-two mb-3">Sinopsis</h3>
                <!--Textarea-->
                <textarea key="synopsis"
                    class="edit-synopsis edit-program-textarea edit-program-attribute-text a-text-semibold-warmgrey p-3"
                    id="prog_sinopsis"></textarea>
                    <button class="a-btn-teal a-btn-basic-small text-normal a-text-MBlack float-right btn-actual d-flex align-items-center justify-content-center" ><img src="./images/basic-icons/enter.svg" alt=""> ACTUALIZAR</button>
                    <div class="clearfix"></div>
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
                            <div class="mb-3 text-center edit-rectangle-small-container  backwhite py-3">
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
                            <div class="mb-3 text-center edit-rectangle-small-container backwhite  py-3">
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
                            <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
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
                            <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
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
                                    class="mb-3 text-center edit-rectangle-small-container backwhite py-3 d-flex align-items-center justify-content-center">
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
                                    class="mb-3 text-center edit-rectangle-small-container  backwhite py-3 d-flex align-items-center justify-content-center">
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
                                    class="mb-3 text-center edit-rectangle-small-container backwhite py-3 d-flex align-items-center justify-content-center">
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
                                <input type="radio"  id="yes-subbed" value="1"
                                    class="edit-program-switch switch-landing edit-subbed-yes"
                                    key="subbed" />
                                <label for="yes-subbed" id="siestado-landing"
                                    class="si-estilo cursor-pointer mb-0 switch-label">
                                    Sí</label>
                                <input type="radio"  id="no-dubbed" value="0" checked
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
                                <input type="radio"  id="yes-dubbed" value="1"
                                    class="edit-program-switch switch-landing edit-dubbed-yes"
                                    key="dubbed" />
                                <label for="yes-dubbed" id="siestado-landing"
                                    class="si-estilo cursor-pointer mb-0 switch-label">
                                    Sí</label>
                                <input type="radio"  id="no-dubbed" value="0" checked
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
                                <input type="radio"  id="yes-audio5" value="1"
                                    class="edit-program-switch switch-landing edit-audio5-yes"
                                    key="audio5" />
                                <label for="yes-audio5" id="siestado-landing"
                                    class="si-estilo cursor-pointer mb-0 switch-label">
                                    Sí</label>
                                <input type="radio"  id="no-audio5" value="0" checked
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
                data-dismiss="modal">ACEPTAR</button>
        </section>

    </div>

            </div>
            `
        );
    });

    //Declaramos un contador para poder diferenciar los label de los slides que se van creando

    //Añadimos un slide al slider de imágenes de programación
    $(".add-banner-image").click(function () {
        //Cada vez que se haga click, el contador incrementa
        let slideIndex = $(".load-programming-carousel").length + 1;

        //Agregamos un slide al slider de programación
        $(".programming-slider-canal-claro").slick(
            "slickAdd",
            `
            <div class="slick-slide">
                <div>
                    <div class="bor thumbnail-image-program position-relative h-100">
                        <input type="file" name="image_programming[]" id="image_programming_${slideIndex}" class="input-image-program image_programming" data-index="${slideIndex}" tabindex="0">
                        <label for="image_programming_${slideIndex}" class="h-100 mb-0 d-flex justify-content-center align-items-center flex-column load-programming-carousel">
                            <img src="./images/synopsis/camara.svg" alt="add-photo" class=" cursor-pointer add-photo">
                            <span class="a-text-bold-warm text-plus mt-3">1920px X 657px</span>
                            <img src="./images/synopsis/image-synopsis-carrusel.jpg" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program">
                        </label>
                    </div>
                </div>
            </div>
            `
        );
    });

    /*function preloader() {
        console.log("si entra al metodo desde submenu");
        document.getElementById("loader-view").style.display = "none";
        document.getElementById("navbar-prev-programacion").style.display =
            "block";
    }
    window.onload = preloader;*/

    //Landing de programación de claro cinema

    let confProgramacionClaroCinema = {
        remote: `${baseURL}programacion-edi-cinema.php`,
        container: document.getElementById("navbar-prev-programacion-cinema"),
        onMessage: function (message, origin) {
            let json = JSON.parse(message);
            if (typeof json == "object") {
                let loader = `
                        <div class="loader-view-container" id="loader1">
                            <img src="./images/loader.gif" class="loader" alt="">
                        </div>
                            `;
                switch (json.type) {
                    case "program":
                        $('.edit-landing-modal-button').attr('landing', 'cinema')
                        getChapterInfo(json.chapterId, 'thumbnail-header-cinema');
                        break;
                    case "slider-pagination":
                        $("body").append(loader);

                        setTimeout(function () {
                            $("#loader1").remove();
                            getProgramacion(1)
                        }, 3000);

                        break;
                    case "synopsis":
                        document
                            .querySelector("body")
                            .insertAdjacentHTML("beforeend", loader);
                        window.location.href =
                            "http://back.claronetworks.openofficedospuntocero.info/backoffice/public/landing/edit-program";
                        break;
                    case "menu-logos":
                        $("body").append(loader);
                        setTimeout(function () {
                            addImagesModalIcons();

                            $(".modal-edit-icons").modal("show");

                            $("#loader1").remove();
                        }, 3000);
                        break;

                    default:
                        break;
                }
            }
            this.container.getElementsByTagName("iframe")[0].style.height =
                message + "px";
            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };

    ////////////
    let navbarPrograContainerCinema = document.getElementById(
        "navbar-prev-programacion-cinema"
    );
    if (navbarPrograContainerCinema) {
        $("#navbar-prev-programacion-cinema iframe").remove();
        new easyXDM.Socket(confProgramacionClaroCinema);
    }
    let confPrevProgramacionCinema = {
        remote: `${baseURL}programacion-prev-cinema.php`,
        container: document.getElementById("navbar-prev-programacion-cinema"),
        onMessage: function (message, origin) {
            console.log(message);
            this.container.getElementsByTagName("iframe")[0].style.height =
                message + "px";
            this.container.getElementsByTagName("iframe")[0];

            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };

    //previsualizar canal claro
    $("#prev-landing-cinema").click(function () {
        //Landing canal claro
        resetIframe(
            $("#navbar-prev-programacion-cinema iframe"),
            confPrevProgramacionCinema
        );
        $("#prev-mobile")
            .removeClass("pointer-none")
            .addClass("cursor-pointer");
        $("#prev-tablet")
            .removeClass("pointer-none")
            .addClass("cursor-pointer");
    });
    $("#edit-landing-cinema").click(function () {
        resetIframe(
            $("#navbar-prev-programacion-cinema iframe"),
            confProgramacionClaroCinema
        );

        $("#prev-mobile")
            .removeClass("cursor-pointer")
            .addClass("pointer-none");
        $("#prev-mobile").css("opacity", "0.4");
        $("#prev-tablet")
            .removeClass("cursor-pointer")
            .addClass("pointer-none");
        $("#prev-tablet").css("opacity", "0.4");
        $("#prev-desktop").css("opacity", "1");
    });

    /////////////

    $(".modal-program-claro-cinema").click(function () {
        resetIframe(
            $("#navbar-prev-programacion-cinema iframe"),
            confProgramacionClaroCinema
        );
    });

    //Landing de programacion de concert channel

    let confProgramacionConcertChannel = {
        remote: `${baseURL}programacion-edi-concert.php`,
        container: document.getElementById("navbar-prev-programacion-concert"),
        onMessage: function (message, origin) {
            let json = JSON.parse(message);
            if (typeof json == "object") {
                let loader = `
                        <div class="loader-view-container" id="loader1">
                            <img src="./images/loader.gif" class="loader" alt="">
                        </div>
                            `;
                switch (json.type) {
                    case "program":
                        getChapterInfo(json.chapterId, 'thumbnail-header-concert');
                        break;
                    case "slider-pagination":
                        $("body").append(loader);

                        setTimeout(function () {
                            $(".modal-programming-carousel").modal("show");
                            $("#loader1").remove();
                            let id_slide = json.id_slide;
                            let totales = json.totales;

                            addImagesModalBanner(id_slide, totales);
                        }, 3000);

                        break;
                    case "synopsis":
                        document
                            .querySelector("body")
                            .insertAdjacentHTML("beforeend", loader);
                        window.location.href =
                            "http://back.claronetworks.openofficedospuntocero.info/backoffice/public/landing/edit-program";
                        break;
                    case "menu-logos":
                        $("body").append(loader);
                        setTimeout(function () {
                            addImagesModalIcons();
                            $(".modal-edit-icons").modal("show");
                            $("#loader1").remove();
                        }, 3000);
                        break;

                    default:
                        break;
                }
            }
            this.container.getElementsByTagName("iframe")[0].style.height =
                message + "px";
            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };

    ////////////
    let navbarPrograContainerConcert = document.getElementById(
        "navbar-prev-programacion-concert"
    );
    if (navbarPrograContainerConcert) {
        $("#navbar-prev-programacion-concert iframe").remove();
        new easyXDM.Socket(confProgramacionConcertChannel);
    }
    let confPrevProgramacionConcert = {
        remote: `${baseURL}programacion-prev-concert.php`,
        container: document.getElementById("navbar-prev-programacion-concert"),
        onMessage: function (message, origin) {
            console.log(message);
            this.container.getElementsByTagName("iframe")[0].style.height =
                message + "px";
            this.container.getElementsByTagName("iframe")[0];

            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };

    //previsualizar canal claro
    $("#prev-landing-concert").click(function () {
        //Landing canal claro
        resetIframe(
            $("#navbar-prev-programacion-concert iframe"),
            confPrevProgramacionConcert
        );
        $("#prev-mobile")
            .removeClass("pointer-none")
            .addClass("cursor-pointer");
        $("#prev-tablet")
            .removeClass("pointer-none")
            .addClass("cursor-pointer");
    });
    $("#edit-landing-concert").click(function () {
        resetIframe(
            $("#navbar-prev-programacion-concert iframe"),
            confProgramacionConcertChannel
        );

        $("#prev-mobile")
            .removeClass("cursor-pointer")
            .addClass("pointer-none");
        $("#prev-mobile").css("opacity", "0.4");
        $("#prev-tablet")
            .removeClass("cursor-pointer")
            .addClass("pointer-none");
        $("#prev-tablet").css("opacity", "0.4");
        $("#prev-desktop").css("opacity", "1");
    });

    /////////////

    $(".modal-program-concert-channel").click(function () {
        resetIframe(
            $("#navbar-prev-programacion-concert iframe"),
            confProgramacionConcertChannel
        );
    });

    //Landing de programación de claro canal
    //Canal claro

    let confIframe = {
        remote: `${baseURL}programacion-edi.php`,
        container: document.getElementById("navbar-prev-programacion"),
        onMessage: function (message, origin) {
            let json = JSON.parse(message);
            if (typeof json == "object") {
                let loader = `
                        <div class="loader-view-container" id="loader1">
                            <img src="./images/loader.gif" class="loader" alt="">
                        </div>
                            `;
                switch (json.type) {
                    case "program":
                        $('.edit-landing-modal-button').attr('landing', 'canal')
                        getChapterInfo(json.chapterId, 'thumbnail-header-claro');
                        break;
                    case "slider-pagination":
                        $("body").append(loader);

                        setTimeout(function () {
                            $(".modal-programming-carousel").modal("show");

                            $("#loader1").remove();

                            let id_slide = json.id_slide;
                            let totales = json.totales;

                            addImagesModalBanner(id_slide, totales);
                        }, 3000);

                        break;
                    case "synopsis":
                        document
                            .querySelector("body")
                            .insertAdjacentHTML("beforeend", loader);
                        window.location.href =
                            "http://back.claronetworks.openofficedospuntocero.info/backoffice/public/landing/edit-program";
                        break;
                    case "menu-logos":
                        $("body").append(loader);
                        setTimeout(function () {
                            addImagesModalIcons();

                            $(".modal-edit-icons").modal("show");
                            $("#loader1").remove();
                        }, 3000);
                        break;

                    default:
                        break;
                }
            }
            this.container.getElementsByTagName("iframe")[0].style.height =
                message + "px";
            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };
    $(".edit-landing-modal-button").click(function () {
        let landing = $(this).attr('landing')
        if (landing == 'canal') {
            $("#navbar-prev-programacion iframe").remove();
            resetIframe($("#navbar-prev-programacion iframe"), confIframe);
        }
        if (landing == 'concert') {

        }
        if (landing == 'cinema') {
            $("#navbar-prev-programacion-cinema iframe").remove();
            resetIframe($("#navbar-prev-programacion-cinema iframe"), confProgramacionClaroCinema);
        }

    });
    ////////////
    let navbarPrograContainer = document.getElementById(
        "navbar-prev-programacion"
    );
    if (navbarPrograContainer) {
        $("#navbar-prev-programacion iframe").remove();
        new easyXDM.Socket(confIframe);
    }
    let confPrevProgramacion = {
        remote: `${baseURL}programacion-prev.php`,
        container: document.getElementById("navbar-prev-programacion"),
        onMessage: function (message, origin) {
            console.log(message);
            this.container.getElementsByTagName("iframe")[0].style.height =
                message + "px";
            this.container.getElementsByTagName("iframe")[0];

            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };

    // $("#edit").click(function () {
    //     resetIframe($("#navbar-prev-programacion iframe"), confIframe);

    //     $("#prev-mobile").removeClass("cursor-pointer").addClass("pointer-none");
    //     $("#prev-mobile").css("opacity", "0.4");
    //     $("#prev-tablet").removeClass("cursor-pointer").addClass("pointer-none");
    //     $("#prev-tablet").css("opacity", "0.4");
    //     $("#prev-desktop").css("opacity", "1");
    // });

    /////////////
    $(".input-image-program").change(function () {
        let currentInput = $(this);
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                currentInput
                    .next()
                    .children(".prev-image-program")
                    .attr("src", e.target.result)
                    .addClass("h-100 w-100")
                    .css("z-index", "2");
            };

            reader.readAsDataURL(this.files[0]);
        }
    });

    $(".select-carrusel").selectpicker({
        filter: true,
        multipleSeparator: ", "
    });
    let imageTriangle = `
    <img src="./images/triangle.svg" alt="" class="position-absolute cursor-pointer dropimg">
`;
    $(".edit-program-image .bootstrap-select").append(imageTriangle);
    //selectpicker para el campo de género en un programa
    $(".selectpicker").selectpicker({
        filter: true,
        multipleSeparator: ", "
    });

    /*
        Obtener el valor de las cateogrías seleccionadas y colocarlas
        en un string
    */
    let genres = "";
    let selectpicker = $(".selectpicker");
    //Verificamos si el usuario ha seleccionado un género o categoría
    selectpicker.on("change", function () {
        //Obtenemos los valores del selectpicker
        let selected = $(this).val();
        //Obtenemos el número de valores que hemos obtenido del arreglo
        let selectedLength = selected.length;
        genres = "";
        for (let index = 0; index < selectedLength; index++) {
            //Si es la primera palabra o la última, no agregamos una coma
            if (selectedLength - 1 == index) {
                genres += `${selected[index]}`;
            } else {
                genres += `${selected[index]},`;
            }
        }
    });
    //Evento para cuando cerramos el selectpicker
    selectpicker.on("hide.bs.select", function () {
        //Seleccionamos la columna en la que estamos
        let currentColumn = $(this).closest(".contenedor-columna");
        //Obtenemos el cahpter_id de la columna
        let chapterId = currentColumn.attr("chapter_id");
        //Obtenemos la key
        let key = currentColumn.attr("key");
        //Obtenemos los géneros que pudo haber seleccionado el usuario
        let keyValue = genres;
        //Hacemos la petición

        editAttributeProgram(chapterId, key, keyValue);
    });

    $("button[id=btn-landing]").click(function () {
        if (
            $(this).hasClass("btn-landing") &
            $(this).hasClass("a-text-semi-brown-two")
        ) {
            $(this)
                .removeClass("btn-landing")
                .addClass("btn-grilla");
            $(this)
                .removeClass("a-text-semi-brown-two")
                .addClass("a-text-MBlack");
            $("button[id=btn-grilla]")
                .addClass("btn-landing")
                .removeClass("btn-grilla");
            $("button[id=btn-grilla]")
                .addClass("a-text-semi-brown-two")
                .removeClass("a-text-MBlack");
        }
    });
    //Al momento de dar click en el boton de grilla
    $("button[id=btn-grilla]").click(function () {
        if (
            $(this).hasClass("btn-landing") &
            $(this).hasClass("a-text-semi-brown-two")
        ) {
            $(this)
                .addClass("btn-grilla")
                .removeClass("btn-landing");
            $(this)
                .addClass("a-text-MBlack") //text-grilla
                .removeClass("a-text-semi-brown-two"); //text-landing
            $("button[id=btn-landing]")
                .addClass("btn-landing")
                .removeClass("btn-grilla");
            $("button[id=btn-landing]")
                .addClass("a-text-semi-brown-two")
                .removeClass("a-text-MBlack");
        }
    });

    //Al dar click en el botón, mostramos la pantalla "landing" de la grilla de canal claro

    /* Al dar click en el switch de "Establecer en lading", aplicamos ciertos estilos */
    $(".switch-landing").click(function () {
        let currentColumn = $(this).closest(".contenedor-columna");
        let landingOptionsChecks = currentColumn.children(
            ".establecer-options"
        );

        //Si el switch de landing está activo, permitimos elegir la sección en donde se quiere publicar
        if ($(this).val() == 1) {
            landingOptionsChecks.css("pointer-events", "all");
            currentColumn
                .next()
                .children(".programar-content")
                .css("pointer-events", "all");
        } else {
            landingOptionsChecks.css("pointer-events", "none");
            //Hacemos que no se pueda escribir en los campos siguientes
            currentColumn
                .next()
                .children(".programar-content")
                .css("pointer-events", "none");

            //"Vaciar" inputs al momento de que el usuario da click en "No"
            currentColumn
                .next()
                .find("input")
                .val("");
            currentColumn
                .children(".establecer-options")
                .find("input")
                .prop("checked", false);
        }
    });

    /* Al dar click en el switch de "Establecer en Home", aplicamos ciertos estilos */
    $(".switch-home").click(function () {
        let currentColumn = $(this).closest(".contenedor-columna");

        if ($(this).val() == 1) {
            currentColumn
                .next()
                .children(".programar-content")
                .css("pointer-events", "all");
        } else {
            //Hacemos que no se pueda escribir en los campos siguientes
            currentColumn
                .next()
                .children(".programar-content")
                .css("pointer-events", "none");

            //"Vaciar" inputs al momento de que el usuario da click en "No"
            currentColumn
                .next()
                .find("input")
                .val("");
            currentColumn
                .children(".establecer-options")
                .find("input")
                .prop("checked", false);
        }
    });
    //Mostrar la sinópsis completa en modal
    $(".see-more").click(function () {
        let currentColumn = $(this).closest(".contenedor-columna");
        //Sinopsis actual del programa sin tener el texto truncado con "..."
        let synopsis = currentColumn.attr("synopsis");
        let chapterId = currentColumn.attr("chapter_id");
        //Id del programa actual
        let program = $(this)
            .prev()
            .attr("id");
        let key = currentColumn.attr("key");
        //Creamos los atributos en el botón del modal de sinopsis para saber qué programa estamos editando
        $(".edit-synopsis-button").attr({
            chapter_id: chapterId,
            key: key,
            synopsis: synopsis,
            program: program
        });
        //Pasamos al textarea del modal la sinopsis actual del programa
        $(".modal-textarea").val(synopsis);
        //Ponemos el título del programa en el header del modal
        $(".modal-program-title").text($(this).attr("program_title"));
        //Hacemos aparecer el modal
        $(".modal-synopsis").modal("show");
    });

    //botón de modal de edición de de sinopsis
    $(".edit-synopsis-button").click(function () {
        let chapterId = $(this).attr("chapter_id");
        let key = $(this).attr("key");
        //Obtenemos la sinopsis nueva del textarea del modal
        let keyValue = $("#synopsis-content").val();
        //Programa del cual se está actualizando al sinopsis
        let program = $(this).attr("program");
        //Cambiamos el atributo "sinopsis" en el programa de la grilla
        $("#" + program)
            .closest(".contenedor-columna")
            .attr("synopsis", keyValue);
        //Truncamos el texto en grilla con tres puntos...
        if (keyValue.length > 200) {
            let text = keyValue.substr(0, 200) + "...";
            $("#" + program).text(text);
        } else {
            $("#" + program).text(keyValue);
        }
        //Hacemos la petición para cambiar la sinopsis
        editAttributeProgram(chapterId, key, keyValue);
        //Ocultamos el modal
        $(".modal-synopsis").modal("hide");
    });
    //Removemos las instancias de litepicker que sobran
    $(".litepicker").remove();
    $(".date-modal").remove();
    //Sacamos la fecha actual para ponerla en el calendario
    let currentDate = new Date();
    //Obtenemos el año
    let calendarYear = currentDate.getFullYear();
    //obtenemos el mes
    let calendarMonth = currentDate.getMonth() + 1;
    //Obtenemos el día
    let calendarDay = currentDate.getDate();
    let dateStartInput = document.getElementById("date-start-input");
    if (dateStartInput) {
        //Iniciamos el calendario Litepicker
        let picker = new Litepicker({
            element: document.getElementById("date-start-input"),
            format: "YYYY-MM-DD",
            delimiter: ",",
            minDate: `${calendarYear}-${calendarMonth}-${calendarDay}`,
            //Al aparecer, aplicamos estilos parecidos a los de un modal
            onShow: function () {
                picker.picker.style.left = "50%";
                picker.picker.style.top = "50%";
                picker.picker.style.transform = "translate(-50%, -50%)";
                $(".litepicker").wrap(
                    "<div class='date-modal' id='modal-container'></div>"
                );
                $("#modal-container").css("display", "block");
            },
            //Evento que utilizamos cada vez que el calendario se oculta
            onHide: function () {
                $("#modal-container").css("display", "none");
            },
            onSelect: function () {
                //Separamos las dos fechas
                let fullDate = document
                    .getElementById("date-start-input")
                    .value.split(",");
                //  Fecha inicial del datepicker
                let startDate = fullDate[0];
                //Separamos la primer fecha
                let startDateSplit = startDate.split("-");
                //Creamos una nueva fecha empezando por año
                let startDateFull = `${startDateSplit[2]}-${startDateSplit[1]}-${startDateSplit[0]}`;
                $("#start-date-text").text(startDateFull);

                //   Fecha final del datepicker

                let landing = $("#date-start-input").attr("landing");

                let endDate = fullDate[1];
                filterDates(startDate, endDate, landing);
                let endDateSplit = endDate.split("-");
                let endDateFull = `${endDateSplit[2]}-${endDateSplit[1]}-${endDateSplit[0]}`;
                $("#end-date-text").text(endDateFull);
            },
            numberOfMonths: 1,
            numberOfColumns: 1,
            singleMode: false
        });
    }

    let programmingCarruselPicker = document.getElementById(
        "programming-carrusel-calendar"
    );

    if (programmingCarruselPicker) {
        //Iniciamos el calendario Litepicker
        let picker = new Litepicker({
            element: programmingCarruselPicker,
            format: "YYYY-MM-DD",
            delimiter: ",",
            minDate: `${calendarYear}-${calendarMonth}-${calendarDay}`,
            //Al aparecer, aplicamos estilos parecidos a los de un modal
            onShow: function () {
                picker.picker.style.left = "50%";
                picker.picker.style.top = "50%";
                picker.picker.style.transform = "translate(-50%, -50%)";
                $(".litepicker").wrap(
                    "<div class='date-modal' id='modal-container'></div>"
                );
                $("#modal-container").css("display", "block");
            },
            //Evento que utilizamos cada vez que el calendario se oculta
            onHide: function () {
                $("#modal-container").css("display", "none");
            },
            onSelect: function () {
                //Separamos las dos fechas
                let fullDate = document
                    .getElementById("programming-carrusel-calendar")
                    .value.split(",");
                //  Fecha inicial del datepicker
                let startDate = fullDate[0];
                //Separamos la primer fecha
                let startDateSplit = startDate.split("-");
                //Creamos una nueva fecha empezando por año
                let startDateFull = `${startDateSplit[2]}-${startDateSplit[1]}-${startDateSplit[0]}`;
                $("#start-date-text").text(startDateFull);
                //   Fecha final del datepicker
                let endDate = fullDate[1];
                let endDateSplit = endDate.split("-");
                let endDateFull = `${endDateSplit[2]}-${endDateSplit[1]}-${endDateSplit[0]}`;
                $("#end-date-text").text(endDateFull);
            },
            numberOfMonths: 1,
            numberOfColumns: 1,
            singleMode: false
        });
    }

    $("#close_modals").click(function () {
        console.log("cerrar");
        $(".modal").modal("hide");
        $("#modaledi").modal("hide");
        $(".modal").modal("hide");

        // $(".modal-delete-user").modal("hide");
        //$(".modal-edit-icons").modal("hide");
        // $(".modal-edit-program").modal("hide");
    });
    $(".close-modal-concert").click(function () {
        $(".modal").modal("hide");
    });
    //cerrar los dos modales
    $("#close_modals-claro").click(function () {
        $(".modal").modal("hide");
    });
    $("#close_modals-sinopsis").click(function () {
        $("#delete-info-sinopsis").modal("hide");
        $(".modal-programming-sinopsis").modal("hide");
        $(".delete-image-sinopsis").modal("hide");
        $(".modal-image-synopsis").modal("hide");
        $(".delete-sinopsis").modal("hide");
        $(".modal-edit-synopsis").modal("hide");
    });

    $('.close_modals-sinopsis').on('click', function () {
        $('.modal-landing-synopsis').modal('hide')
        $('.modal-edit-synopsis').modal('hide')
        $('.modal-info-synopsis').modal('hide')
    })

    /* Al dar "enter" cancelamos el salto de línea,
        conseguimos el valor del campo de la grilla
        y hacemos la petición
    */
    let editableAttribute = $(".editable-attribute");
    editableAttribute.keydown(function (e) {
        //Si la tecla que presionamos fue "Enter"
        if (e.which === 13 && !e.shiftKey) {
            let key = $(this)
                .closest(".contenedor-columna")
                .attr("key");
            let keyValue = "";
            let chapterId = $(this)
                .closest(".contenedor-columna")
                .attr("chapter_id");
            switch (key) {
                //Verificamos si lo que estamos editando es Schedule Item Long Date
                case "day":
                    //Seperamos la fecha
                    let date = $(this)
                        .val()
                        .split("-");
                    //Volvemos a unir la fecha empezando por el año y mandamos la petición
                    keyValue = `${date[2]}-${date[1]}-${date[0]}`;
                    editAttributeProgram(chapterId, key, keyValue);
                    break;
                //Verificamos si el campo que estamos editando es el año de producción
                case "program_year_produced":
                    //Convertimos el año a entero
                    keyValue = parseInt($(this).val());
                    //Hacemos la petición
                    editAttributeProgram(chapterId, key, keyValue);
                    break;
                //Verificamos si el campo editable, es el de programar publicación para Landing
                case "in_landing_publicacion":
                    let schedule = $(this)
                        .closest(".programar-schedule")
                        .attr("key");
                    let parent = $(this).closest(".programar-schedule");
                    //Verificamos si es la fecha de inicio
                    if (schedule == "in_landing_begin") {
                        //Obtenemos el div padre para saber qué horario y fecha andamos modificando

                        //Obteemos la fecha y la dividimos
                        let date = parent
                            .find(".landing-start-day")
                            .val()
                            .split("-");
                        //Re hacemos la fecha
                        let day = `${date[2]}-${date[1]}-${date[0]}`;
                        let hours = parent.find(".landing-start-hours").val(); //Obtenemos hora

                        //En caso de tener ambos valores, hacemos al petición
                        if (day != "" && hours != "") {
                            keyValue = `${day} ${hours}`;
                            editAttributeProgram(chapterId, schedule, keyValue);
                        }
                        //En caso de solo tener el día, mandamos la hora en 0
                        else if (day != "" && hours == "") {
                            hours = "00:00:00";
                            keyValue = `${day} ${hours}`;
                            editAttributeProgram(chapterId, schedule, keyValue);
                        }
                    }
                    //Verificamos si es la fecha fin
                    else if (schedule == "in_landing_expiration") {
                        let date = parent
                            .find(".landing-expiration-day")
                            .val()
                            .split("-"); //Obtenemos fecha
                        let hours = parent
                            .find(".landing-expiration-hours")
                            .val(); //Obtenemos hora
                        let day = `${date[2]}-${date[1]}-${date[0]}`;
                        //En caso de tener ambos valores, hacemos la petición

                        if (date != "" && hours != "") {
                            let day = `${date[2]}-${date[1]}-${date[0]}`;
                            keyValue = `${day} ${hours}`;
                            editAttributeProgram(chapterId, schedule, keyValue);
                        }
                        //En caso de solo tener el día, la hora la igualamos a 0 y hacemos la petición
                        else if (date != "" && hours == "") {
                            hours = "00:00:00";
                            keyValue = `${day} ${hours}`;
                            editAttributeProgram(chapterId, schedule, keyValue);
                        }
                    }

                    break;
                case "in_home_publicacion":
                    let scheduleHome = $(this)
                        .closest(".programar-schedule")
                        .attr("key");

                    //Verificamos si es la fecha de inicio del home
                    if (scheduleHome == "in_home_begin") {
                        //Obtenemos la fecha
                        let date = $(".home-start-day")
                            .val()
                            .split("-");
                        let day = `${date[2]}-${date[1]}-${date[0]}`;
                        //Obtenemos la hora
                        let hours = $(".home-start-hours").val();
                        //Si ambos no están vacíos, hacemos la petición
                        if (date != "" && hours != "") {
                            keyValue = `${day} ${hours}`;
                            editAttributeProgram(
                                chapterId,
                                scheduleHome,
                                keyValue
                            );
                        }
                        //En caso de que la hora venga vacía, la igualamos a 0
                        else if (date != "" && hours == "") {
                            hours = "00:00:00";
                            keyValue = `${day} ${hours}`;
                            editAttributeProgram(
                                chapterId,
                                scheduleHome,
                                keyValue
                            );
                        }
                    } else if (scheduleHome == "in_home_expiration") {
                        //Obtenemos la fecha
                        let date = $(".home-expiration-day")
                            .val()
                            .split("-");
                        let day = `${date[2]}-${date[1]}-${date[0]}`;
                        //Obtenemos la hora
                        let hours = $(".home-expiration-hours").val();

                        //Si ambos no están vacíos, hacemos la petición
                        if (date != "" && hours != "") {
                            keyValue = `${day} ${hours}`;
                            editAttributeProgram(
                                chapterId,
                                scheduleHome,
                                keyValue
                            );
                        }
                        //En caso de que la hora venga vacía, la igualamos a 0
                        else if (date != "" && hours == "") {
                            hours = "00:00:00";
                            keyValue = `${day} ${hours}`;
                            editAttributeProgram(
                                chapterId,
                                scheduleHome,
                                keyValue
                            );
                        }
                    }
                    break;
                default:
                    //Si no es ninguno de los casos, sacamos el valor del campo directamente
                    keyValue = $(this).val();
                    //Hacemos la petición
                    editAttributeProgram(chapterId, key, keyValue);
                    break;
            }
            //Quitamos el comportamiento por defecto
            e.preventDefault();
            //Después de dar click, "sacamos" al usuario del input
            $(this).blur();
            return false;
        }
    });

    //Se ejecuta cuando editamos un campo y damos click "fuera" del input
    editableAttribute.blur(function () {
        let currentColumn = $(this).closest(".contenedor-columna");
        let key = currentColumn.attr("key");
        let keyValue = $(this).val();
        let chapterId = currentColumn.attr("chapter_id");
        //Verificamos el campo que estamos editando
        switch (key) {
            //Verificamos si lo que estamos editando es Schedule Item Long Date
            case "day":
                //Seperamos la fecha
                let date = $(this)
                    .val()
                    .split("-");
                //Volvemos a unir la fecha empezando por el año y mandamos la petición
                keyValue = `${date[2]}-${date[1]}-${date[0]}`;
                editAttributeProgram(chapterId, key, keyValue);
                break;
            //En caso de que el campo que estemos editando, sea el de programar publicación para landing
            case "in_landing_publicacion":
                let schedule = $(this)
                    .closest(".programar-schedule")
                    .attr("key");
                let parent = $(this).closest(".programar-schedule");
                //Verificamos si es la fecha de inicio
                if (schedule == "in_landing_begin") {
                    //Obtenemos el div padre para saber qué horario y fecha andamos modificando

                    //Obteemos la fecha y la dividimos
                    let date = parent
                        .find(".landing-start-day")
                        .val()
                        .split("-");
                    //Re hacemos la fecha
                    let day = `${date[2]}-${date[1]}-${date[0]}`;
                    let hours = parent.find(".landing-start-hours").val(); //Obtenemos hora

                    //En caso de tener ambos valores, hacemos al petición
                    if (day != "" && hours != "") {
                        keyValue = `${day} ${hours}`;
                        editAttributeProgram(chapterId, schedule, keyValue);
                    }
                    //En caso de solo tener el día, mandamos la hora en 0
                    else if (day != "" && hours == "") {
                        hours = "00:00:00";
                        keyValue = `${day} ${hours}`;
                        editAttributeProgram(chapterId, schedule, keyValue);
                    }
                }
                //Verificamos si es la fecha fin
                else if (schedule == "in_landing_expiration") {
                    let date = parent
                        .find(".landing-expiration-day")
                        .val()
                        .split("-"); //Obtenemos fecha
                    let hours = parent.find(".landing-expiration-hours").val(); //Obtenemos hora
                    let day = `${date[2]}-${date[1]}-${date[0]}`;
                    //En caso de tener ambos valores, hacemos la petición

                    if (date != "" && hours != "") {
                        let day = `${date[2]}-${date[1]}-${date[0]}`;
                        keyValue = `${day} ${hours}`;
                        editAttributeProgram(chapterId, schedule, keyValue);
                    }
                    //En caso de solo tener el día, la hora la igualamos a 0 y hacemos la petición
                    else if (date != "" && hours == "") {
                        hours = "00:00:00";
                        keyValue = `${day} ${hours}`;
                        editAttributeProgram(chapterId, schedule, keyValue);
                    }
                }

                break;
            case "in_home_publicacion":
                let scheduleHome = $(this)
                    .closest(".programar-schedule")
                    .attr("key");
                let parentHome = $(this).closest(".programar-schedule");
                //Verificamos si es la fecha de inicio del home
                if (scheduleHome == "in_home_begin") {
                    //Obtenemos la fecha
                    let date = parentHome
                        .find(".home-start-day")
                        .val()
                        .split("-");
                    let day = `${date[2]}-${date[1]}-${date[0]}`;
                    //Obtenemos la hora
                    let hours = parentHome.find(".home-start-hours").val();
                    //Si ambos no están vacíos, hacemos la petición
                    if (date != "" && hours != "") {
                        keyValue = `${day} ${hours}`;
                        editAttributeProgram(chapterId, scheduleHome, keyValue);
                    }
                    //En caso de que la hora venga vacía, la igualamos a 0
                    else if (date != "" && hours == "") {
                        hours = "00:00:00";
                        keyValue = `${day} ${hours}`;
                        editAttributeProgram(chapterId, scheduleHome, keyValue);
                    }
                } else if (scheduleHome == "in_home_expiration") {
                    //Obtenemos la fecha
                    let date = parentHome
                        .find(".home-expiration-day")
                        .val()
                        .split("-");
                    let day = `${date[2]}-${date[1]}-${date[0]}`;
                    //Obtenemos la hora
                    let hours = parentHome.find(".home-expiration-hours").val();

                    //Si ambos no están vacíos, hacemos la petición
                    if (date != "" && hours != "") {
                        day = `${date[2]}-${date[1]}-${date[0]}`;
                        keyValue = `${day} ${hours}`;
                        editAttributeProgram(chapterId, scheduleHome, keyValue);
                    }
                    //En caso de que la hora venga vacía, la igualamos a 0
                    else if (date != "" && hours == "") {
                        hours = "00:00:00";
                        keyValue = `${day} ${hours}`;
                        editAttributeProgram(chapterId, scheduleHome, keyValue);
                    }
                }

                break;
            default:
                editAttributeProgram(chapterId, key, keyValue);
                break;
        }
    });

    //Sacar los valores de los switches en la grilla
    $(".switch-table").click(function () {
        let currentColumn = $(this).closest(".contenedor-columna");
        //Sacamos el valor del switch o radio button
        let keyValue = $(this).val();
        //De la columna, sacamos el chapter_id
        let chapterId = currentColumn.attr("chapter_id");
        //De la columna, sacamos la "key" necesaria para saber qué campo estamos editando
        let key = currentColumn.attr("key");
        //Hacemos la petición
        editAttributeProgram(chapterId, key, keyValue);
    });
    //Sacar los valores de los switches en el modal de edicion
    $(".switch-table-edit").click(function () {
        let chapter_id = $(".edit-program-data-container").attr("chapter_id");
        let value = $(this).val();
        let key = $(this).attr("key");
        //Hacemos la petición
        editAttributeProgram(chapter_id, key, value);
    });

    /*
    Permite a todos los campos de Schedule item log time tener el formato
    tiempo en hh:mm
    */
    $(".schedule-time-input")
        .toArray()
        .forEach(scheduleTime => {
            new Cleave(scheduleTime, scheduleTimeConfig);
        });
    /*
    Permite a todos los campos de Schedule item log date tener el formato YYYY-MM-DD
    */
    $(".schedule-date-input")
        .toArray()
        .forEach(scheduleDate => {
            new Cleave(scheduleDate, cleaveConfig);
        });
    /*
    Permite a todos los input con la clase time-seconds-input el formato de tiempo hh:mm:ss
    */
    $(".time-seconds-input")
        .toArray()
        .forEach(timeInput => {
            new Cleave(timeInput, timeWithSeconds);
        });

    /*
    Permite a todos los input con la clase year-input tener el formato YYYY
    */
    $(".year-input")
        .toArray()
        .forEach(yearInput => {
            new Cleave(yearInput, year);
        });

    //Truncar texto de sinópsis con "..."
    $(".lb-synopsis").each(function (index, element) {
        if ($(this).text().length > 200) {
            let text =
                $(this)
                    .text()
                    .substr(0, 200) + "...";
            $(this).text(text);
        }
    });

    $(".listcinema").selectpicker({
        multipleSeparator: " ",
        filter: true
    });
    //Al dar click en el lápiz, habilitamos la edición de la fila y aplicamos estilos
    $(".edit-row-pencil").click(selectRow);
    //Al dar click en una columna, aplicamos estilos
    $(".selectable-column").click(selectColumn);

    $(".selectpicker")
        .selectpicker({
            multipleSeparator: " ",
            filter: true
        })
        .on("changed.bs.select", function () {
            $(this).selectpicker("refresh");
        });

    $("#inp_programing").on("change", function () {
        /**
         * JS hace dos cambios en el submit, por lo que se hacen dos llamados a esta funcion
         * esto para no caursar poroblemas mayores se manda a null e value del form
         * saldra un error de Jquery ignorar -> TypeError: "this.files[0] is undefined"
         */
        try {
            var file = this.files[0];
            var filename = this.files[0].name;

            if (filename != null) {
                var splName = filename.split(".");
                var fileFormat = splName[splName.length - 1];
                if (fileFormat != "xlsx" && fileFormat != "xls") {
                    $(".load-file").modal("show");
                } else {
                    var data_for_api = $(this).attr("api");
                    sendFilePHP(file, data_for_api);
                    console.log(this.files[0].name);
                }
            }
        } catch (error) {
            console.log(error);
        }
        this.value = null; //aqui para evitar que se hagan registros dobles
    });
    /**
     * Eviar archivo mediante ajax a un "controlador" php
     */

    function updateGrill(landing) {
        let canal = "canal-claro";
        switch (landing) {
            case 1:
                canal = "canal-claro";
                break;
            case 2:
                canal = "concert-channel";
                break;
            case 3:
                canal = "claro-cinema";
                break;
            default:
                break;
        }
        $.ajax({
            type: "POST",
            url: "view",
            data: {
                view: "grilla-" + canal + "-button"
            },
            beforeSend: function () {
                const loader = `
                <div class="loader-view-container">
                <img src="./images/loader.gif" class="loader" alt="">
                </div>
                `;
                $("body").append(loader);
            },
            success: function (result) {
                console.log("grilla de canal claro");
                console.log(result);
                $("#general-programming").html("");
                $("#general-programming").html(result);
                eventsGrilla();
                $(".loader-view-container").remove();
            }
        });
    }

    function sendFilePHP(file, data_for_api) {
        console.log("enviando a php");
        //creamos un dato de formulario para pasarlo en el ajax
        let data = new FormData();
        data.append("file", file);
        data.append("datos", data_for_api);

        //Realizamos el ajax
        $.ajax({
            type: "POST",
            data: data,
            processData: false, //esto es para poder pasar el archivo
            contentType: false, //esto es para poder pasar el archivo
            url: "general-program/captureExcel",
            beforeSend: function () {
                $("body").append(
                    `<div class="loader-view-container pointer-none">
                        <img src="./images/loader.gif" class="loader"/>
                    </div>`
                );
            },
            success: function (result) {
                var existe_programacion = JSON.parse(result);
                if (existe_programacion.data == 1) {
                    $(".loader-view-container").remove();

                    console.log("Preguntamos al usuario");
                    $("#programas_procesados_por_el_excel").val(result);
                    $(".modal-information").modal("show");
                } else {
                    $(".loader-view-container").remove();

                    if (existe_programacion.data == -1) {
                        console.log("es de un dia anterior");
                        $(".modal-before").modal("show");
                    } else {
                        console.log("se agregó la programación");
                        let landing = JSON.parse(data_for_api).landing_id;

                        updateGrill(landing);
                        $(".loader-view-container").remove();
                    }
                }
            }
        }).fail(function (e) {
            $(".loader-view-container").remove();
            console.log(e);
        });
    }
    $("#acccion-programacion-remplaza").click(function () {
        console.log("Se remplaza la programacion");
        let data = JSON.parse($("#programas_procesados_por_el_excel").val());
        console.log(data);

        $.ajax({
            type: "POST",
            data: data,
            url: "general-program/changePrograming",
            beforeSend: function () {
                $(".modal-information .modal-content").prepend(
                    `<div class="loader-container pointer-none">
                        <img src="./images/loader.gif" class="loader"/>
                    </div>`
                );
            },

            success: function (result) {
                updateGrill(data.landing_id);
                $(".loader-container").remove();
                $(".modal-information").modal("hide");
                console.log(JSON.parse(result));
            }
        }).fail(function (e) {
            console.log(e);
            $(".loader-container").remove();
            $(".modal-information").modal("hide");
        });
    });

    $("#acccion-programacion-agrega").click(function () {
        console.log("Se agrega la programacion");
        let data = JSON.parse($("#programas_procesados_por_el_excel").val());
        console.log(data);
        $.ajax({
            type: "POST",
            data: data,
            url: "general-program/addPrograming",
            beforeSend: function () {
                $(".modal-information .modal-con tent").prepend(
                    `<div class="loader-container pointer-none">
                        <img src="./images/loader.gif" class="loader"/>
                    </div>`
                );
            },
            success: function (result) {
                updateGrill(data.landing_id);
                $(".loader-container").remove();
                $(".modal-information").modal("hide");
                console.log(JSON.parse(result));
            }
        }).fail(function (e) {
            console.log(e);
            $(".loader-container").remove();
            $(".modal-information").modal("hide");
        });
    });
    $("#acccion-programacion-cancela").click(function () {
        console.log("Se cancela la programacion");
        $("#programas_procesados_por_el_excel").val(" ");
        let programas = $("#programas_procesados_por_el_excel").val();
        console.log(programas);
        $(".modal-information").modal("hide");
    });

    // CANAL CLARO
    const LOADER = `<div class="loader-view-container" id="loader1">
            <img src="./images/loader.gif" class="loader" alt="">
            </div>`;

    let landingCanalClaro = {
        remote: `${baseURL}claro-canal-edi.php`,
        // remote: `http://www.claronetworks.openofficedospuntocero.info/v1.2/claro-canal-edi.php`,
        container: document.getElementById("navbar-prev-canal-claro"),
        onMessage: function (message, origin) {
            let json = JSON.parse(message);

            if (typeof json == "object") {
                switch (json.type) {
                    case "claro-header":
                        getModalsCanalClaro(json.type);
                        break;
                    case "claro-programacion":
                        $("body").append(LOADER);
                        setTimeout(function () {
                            let date = new Date();
                            let day = ("0" + date.getUTCDate()).slice(-2);
                            let month = ("0" + (date.getUTCMonth() + 1)).slice(
                                -2
                            );
                            let year = date.getUTCFullYear();
                            let currentDate = `${year}-${month}-${day}`;
                            getProgrammingLanding(
                                currentDate,
                                "canal-claro",
                                ""
                            );
                            $("#loader1").remove();
                        }, 3000);
                        break;
                    case "claro-title":
                        getModalsCanalClaro(json.type);
                        break;
                    case "claro-promo":
                        getModalsCanalClaro(json.type);
                        break;
                    case "claro-carrusel1":
                        let id = 1;
                        let landing = "Canal Claro";
                        getPromotionalsProgramsCarousel(
                            id,
                            landing,
                            "thumbnail-header-claro"
                        );

                        break;
                    case "claro-carrusel2":
                        id = 2;
                        landing = "Canal Claro";
                        getPromotionalsProgramsCarousel(
                            id,
                            landing,
                            "thumbnail-header-claro "
                        );
                        break;
                    case "claro-carrusel-title":
                        getModalsCanalClaro(json.type);
                        break;
                    case "claro-carrusel-title2":
                        getModalsCanalClaro(json.type);
                        break;
                    case "btn-redirect-header":
                        getModalsCanalClaro(json.type);
                        break;
                    case "slider-pagination":
                        getModalsCanalClaro("slider-pagination");
                        break;
                }
            }
            this.container.getElementsByTagName("iframe")[0].style.height =
                message + "px";
            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };

    //Landing de claro canal

    let navbarLandingCanalClaro = document.getElementById(
        "navbar-prev-canal-claro"
    );
    if (navbarLandingCanalClaro) {
        $("#navbar-prev-canal-claro iframe").remove();
        new easyXDM.Socket(landingCanalClaro);
    }
    let confPrevClaroCanal = {
        remote: `${baseURL}claro-canal-prev.php`,
        container: document.getElementById("navbar-prev-canal-claro"),
        onMessage: function (message, origin) {
            console.log(message);
            this.container.getElementsByTagName("iframe")[0].style.height =
                message + "px";
            this.container.getElementsByTagName("iframe")[0];

            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };
     //previsualizar claro canal
     $("#prev-landing-claro").click(function () {
         $("body").append(`<div class="loader-view-container" id="loader1">
         <img src="./images/loader.gif" class="loader" alt="">
         </div>`);
        resetIframe($("#navbar-prev-canal-claro iframe"), confPrevClaroCanal);
        setTimeout(function () {
            $("#prev-mobile")
            .removeClass("pointer-none")
            .addClass("cursor-pointer");
        $("#prev-tablet")
            .removeClass("pointer-none")
            .addClass("cursor-pointer");
            $("#loader1").remove();
        }, 2000);
        //Landing claro canal
    });
    $("#edit-landing-claro").click(function () {
        $("body").append(`<div class="loader-view-container" id="loader1">
        <img src="./images/loader.gif" class="loader" alt="">
        </div>`);
        resetIframe(
            $("#navbar-prev-canal-claro iframe"),
            landingCanalClaro
        );
        setTimeout(function () {
        $("#prev-mobile")
            .removeClass("cursor-pointer")
            .addClass("pointer-none");
        $("#prev-mobile").css("opacity", "0.4");
        $("#prev-tablet")
            .removeClass("cursor-pointer")
            .addClass("pointer-none");
        $("#prev-tablet").css("opacity", "0.4");
        $("#prev-desktop").css("opacity", "1");
        $("#loader1").remove();
    }, 2000);
    });


    // BTN MODAL URL ENCABEZADO
    $("#url-encabezado").click(function () {
        $("#modal-url").modal("show");
    });
    // BTN MODAL URL PROMO
    $("#url-promo").click(function () {
        $("#modal-url").modal("show");
    });
    // BTN BANNER
    $("#banner-claro").change(function () {
        File(this);
    });
    // BTN BANNER
    $("#btn-acepta-url").click(function () {
        $("#modal-url").modal("hide");
        let url = $(".input-url-modal").val() || "";
        $("#inp-text-modal-4").val(url);
    });
    // FILE PARA BANNER
    var fileSrt = new FileReader();

    var fileReader = new FileReader();

    function File(objFileInput) {
        $("body").append(LOADER);
        if (objFileInput.files[0]) {
            fileSrt.onload = function (e) {
                $("#" + objFileInput.name).html(
                    '<img class="img-claro-back" src="' +
                    e.target.result +
                    '" /> <img class="img-add-photo" src="images/basic-icons/pencil-edit-teal.svg" alt="add-photo" /> <span class="text-add-photo">472px X 295px</span>'
                );
            };
            fileSrt.readAsDataURL(objFileInput.files[0]);
        }
        $("#loader1").remove();
    }
    // CARGAR IMG HEADER
    $("#img-header").change(function () {
        FileHeader(this);
    });

    // FILE HEADER
    function FileHeader(objFileInput) {
        $("body").append(LOADER);
        if (objFileInput.files[0]) {
            fileSrt.onload = function (e) {
                $("#img-header-claro").html(
                    '<img src="' + e.target.result + '" />'
                );
            };
            fileSrt.readAsDataURL(objFileInput.files[0]);
            $("#loader1").remove();
        }
    }
    // IMG DE PROMO
    $("#promo-claro-img").change(function () {
        FilePromoImg(this);
    });
    // IMG DE PROMO CARGAR
    function FilePromoImg(objFileInput) {
        $("body").append(LOADER);
        if (objFileInput.files[0]) {
            fileSrt.onload = function (e) {
                $("#back-promo-claro").html(
                    '<img class="img-back-modal img-promo" src="' +
                    e.target.result +
                    '" />'
                );
            };
        }
        fileSrt.readAsDataURL(objFileInput.files[0]);
        $(".loader-view-container").remove();
    }
    // VIDEO DE PROMO
    $("#promo-claro-video").change(function () {
        FilePromoVideo(this);
    });
    // VIDEO DE PROMO CARGAR
    function FilePromoVideo(objFileInput) {
        $("body").append(LOADER);
        if (objFileInput.files[0]) {
            fileSrt.onload = function (e) {
                $("#back-promo-claro").html(
                    '<video autoplay controls class="img-back-modal img-promo" src="' +
                    e.target.result +
                    '" /></video>'
                );
                $(".loader-view-container").remove();
            };
            fileSrt.readAsDataURL(objFileInput.files[0]);
        }
    }
    // IMG DE CARRUSEL 1
    $("#carrusel1-claro-img").change(function () {
        FileCarrusel1Img(this);
    });
    // IMG DE CARRUSEL 1 CARGAR
    function FileCarrusel1Img(objFileInput) {
        $("body").append(LOADER);
        if (objFileInput.files[0]) {
            fileSrt.onload = function (e) {
                $("#back-carrusel1-claro").html(
                    '<img class="img-back-modal img-carrusel" src="' +
                    e.target.result +
                    '" /> <img src="images/heart-icon.svg" class="heart-icon-carrusel" alt="heart-icon" />'
                );
            };
        }
        fileSrt.readAsDataURL(objFileInput.files[0]);
        $(".loader-view-container").remove();
    }

    //CLARO CANAL POST HEADER
    // HEADER EDIT CANAL CLARO
    $("#btn-acepta-modal-header").click(function () {
        let landing = "Canal Claro";
        let title1 = $(".inp-text-modal-1").val() || "";
        let title2 = $(".inp-text-modal-2").val() || "";
        let logo = document.getElementById("img-header").files[0] || "";
        let link = $("#inp-text-modal-4").val() || "";
        let data = new FormData();
        data.append("landing", landing);
        data.append("title1", title1);
        data.append("title2", title2);
        data.append("logo", logo);
        data.append("link", link);
        editHeaderLandingClaro(data);
        resetIframe($("#navbar-prev-canal-claro iframe"), landingCanalClaro);
    });

    $(".button-modal-canal-claro").click(function () {
        resetIframe($("#navbar-prev-canal-claro iframe"), landingCanalClaro);
    });

    $(".modal-edit-program-carrusel").on(
        "click",
        ".button-modal-canal-claro",
        function () {
            resetIframe(
                $("#navbar-prev-canal-claro iframe"),
                landingCanalClaro
            );
        }
    );

    $(".modal-edit-program-carrusel").on(
        "click",
        ".button-modal-claro-cinema",
        function () {
            $(".modal-edit-program-carrusel").modal("hide");
            resetIframe($("#navbar-prev-claro-cinema iframe"), confPrevClaroCinema);
        }
    );
    // HEADER EDIT CANAL CLARO
    // TITLE EDIT CANAL CLARO
    $(".btn-acepta-modal-title").click(function () {
        // TITULO
        let value = $(".inp-title-modal").val();
        let key = $(".inp-title-modal").attr("key");
        let landing = "Canal Claro";
        editElementLandingClaro({
            value: value,
            key: key,
            landing: landing
        });
        // SUB TITULO
        let valueSub = $(".inp-sub-title-modal").val();
        let keySub = $(".inp-sub-title-modal").attr("key");
        editElementLandingClaro({
            value: valueSub,
            key: keySub,
            landing: landing
        });
        resetIframe($("#navbar-prev-canal-claro iframe"), landingCanalClaro);
    });
    // TITLE EDIT CANAL CLARO
    // HEADER EDIT CANAL CLARO
    $("#btn-acepta-modal-promo").click(function () {
        let landing = "Canal Claro";
        let img = document.getElementById("promo-claro-img").files[0] || "";
        let video = document.getElementById("promo-claro-video").files[0] || "";
        let key = "block_3_video_url";
        let data = new FormData();
        data.append("landing", landing);
        data.append("img", img);
        data.append("video", video);
        data.append("key", key);
        editPromoLandingClaro(data);
        resetIframe($("#navbar-prev-canal-claro iframe"), landingCanalClaro);
    });
    // HEADER EDIT CANAL CLARO

    // CANAL CLARO

    // CARGAR IMG HEADER
    $("#image-icon1").change(function () {
        FileHeaderCinema(this);
    });

    // FILE HEADER
    function FileHeaderCinema(objFileInput) {
        $("body").append(LOADER);
        if (objFileInput.files[0]) {
            fileSrt.onload = function (e) {
                $(".logo-header-claro-cinema").attr("src", e.target.result);
            };
            fileSrt.readAsDataURL(objFileInput.files[0]);
            $("#loader1").remove();
        }
    }

    // HEADER EDIT CANAL CLARO
    $("#btn-acepta-modal-header-cinema").click(function () {
        let landing = "Claro Cinema";
        let title1 = $("#ipt-heade").val() || "";
        let title2 = $("#ipt-heade-1").val() || "";
        let logo = document.getElementById("image-icon1").files[0] || "";
        let link = $("#inp-text-modal-4").val() || "";
        let data = new FormData();
        data.append("landing", landing);
        data.append("title1", title1);
        data.append("title2", title2);
        data.append("logo", logo);
        data.append("link", link);
        editHeaderLandingClaro(data);
        resetIframe(
            $("#navbar-prev-claro-cinema iframe"),
            confLandingClaroCinema
        );
    });
    // HEADER EDIT CANAL CLARO
    // TITLE EDIT CANAL CLARO
    $("#edit-titulos-cinema").click(function () {
        // TITULO
        let value = $("#ipt-titulo-cinema-1").val();
        let key = $("#ipt-titulo-cinema-1").attr("key");
        let landing = "Claro Cinema";
        editElementLandingClaro({
            value: value,
            key: key,
            landing: landing
        });
        // SUB TITULO
        let valueSub = $("#ipt-titulo-cinema-2").val();
        let keySub = $("#ipt-titulo-cinema-2").attr("key");
        editElementLandingClaro({
            value: valueSub,
            key: keySub,
            landing: landing
        });
        // SUB TITULO 2
        let valueSub2 = $("#ipt-titulo-cinema-3").val();
        let keySub2 = $("#ipt-titulo-cinema-3").attr("key");
        editElementLandingClaro({
            value: valueSub2,
            key: keySub2,
            landing: landing
        });
        resetIframe(
            $("#navbar-prev-claro-cinema iframe"),
            confLandingClaroCinema
        );
    });
    // TITLE EDIT CANAL CLARO
    // IMG DE PROMO
    $("#image-promo-concert").change(function () {
        FilePromoImg(this);
    });
    // IMG DE PROMO CARGAR
    // function FilePromoImg(objFileInput) {
    //     $("body").append(LOADER);
    //     if (objFileInput.files[0]) {
    //         fileSrt.onload = function (e) {
    //             $("#cinema-promo-container").html(
    //                 '<img src="' +
    //                 e.target.result +
    //                 '" alt="" class="d-flex w-100" id="promo-image-concert">'
    //             );
    //         };
    //     }
    //     fileSrt.readAsDataURL(objFileInput.files[0]);
    //     $(".loader-view-container").remove();
    // }
    // VIDEO DE PROMO
    $("#video-promo-file-concert").change(function () {
        FilePromoVideo(this);
    });
    // VIDEO DE PROMO CARGAR
    // function FilePromoVideo(objFileInput) {
    //     $("body").append(LOADER);
    //     if (objFileInput.files[0]) {
    //         fileSrt.onload = function (e) {
    //             $("#cinema-promo-container").html(
    //                 '<video class="w-100 h-100" id="video-promo-concert" style="display: block" controls muted autoplay> <source src="' +
    //                 e.target.result +
    //                 '" type="video/mp4"> </video>'
    //             );
    //             $(".loader-view-container").remove();
    //         };
    //         fileSrt.readAsDataURL(objFileInput.files[0]);
    //     }
    // }
    // HEADER EDIT CANAL CLARO
    // HEADER EDIT CANAL CLARO
    $("#btn-acepta-promo-cinema").click(function () {
        let file = "";
        if (document.getElementById("video-promo-file-concert").files[0]) {
            file = document.getElementById("video-promo-file-concert").files[0];
        } else if (document.getElementById("image-promo-concert").files[0]) {
            file = document.getElementById("image-promo-concert").files[0];
        } else {
            file = $("#link-promo-concert").val();
        }

        console.log(file)

        let landing = "Claro Cinema";
        let data = new FormData();
        let key = "block_3_video_url";
        data.append("promo", file);
        data.append("landing", landing);
        data.append("key", key);
        editPromoLandingCinema(data);
        resetIframe(
            $("#navbar-prev-claro-cinema iframe"),
            confLandingClaroCinema
        );
        $("#loader1").remove();
    });

    // HOME
    $("#logo_home").change(function () {
        viewImg(this, "#img-logo-home");
        viewEdit();
    });

    function viewImg(objFileInput, container) {
        $("body").append(LOADER);
        if (objFileInput.files[0]) {
            fileSrt.onload = function (e) {
                $(container).attr("src", e.target.result);
            };
            fileSrt.readAsDataURL(objFileInput.files[0]);
            $("#loader1").remove();
        }
    }

    function viewEdit() {
        $("#camera").attr("src", "./images/lapiz-acti.svg");
    }

    $("#btn_pruebas").click(function () {
        // getContentHomeHeader('claro-home-header');
        // let landing = 'Canal Claro';
        // getCarruselHome(landing);
        // landingView.renderHomeHeaderClaroCinema();
        // getContentHomeCinema('claro-home-header');
        // $('#modal-terminos-footer').modal('show');
        // $('.modal-footer').modal('show');
        landingView.renderContentFooter("footer-concert-channel");
    });

    $("#modal_url").click(function () {
        let url = $("#inp_url").val();
        $("#inp_url_modal").val(url);
        $("#url").modal("show");
    });
    $("#inp_url").click(function () {
        let url = $("#inp_url").val();
        $("#inp_url_modal").val(url);
        $("#url").modal("show");
    });
    $("#btn-url").click(function () {
        let url = $("#inp_url_modal").val();
        $("#inp_url").val(url);
        $("#url").modal("hide");
    });
    $("#close_all_modal").click(function () {
        $("#delete-info").modal("hide");
        $(".modal-programming-carousel").modal("hide");
        $(".modal-edit-icons").modal("hide");
        $(".modal-landing-sinopsis").modal("hide");
        $("#modal-logo-home").modal("hide");
        $("#modal-carrusel-home").modal("hide");
        $("#modal-terminos-footer").modal("hide");
        $("#modal-privacy-footer").modal("hide");
        $("#url").modal("hide");
        $("#modaledi").modal("hide");
    });

    // FOOTER

    // FOOTER

    $("#acepta_canales_home").click(function () {
        let landing = $("#landing_name").val();
        let logo = document.getElementById("logo_home").files[0] || "";
        let subtitle = $("#inp_canales_subtitulo").val() || "";
        let link = $("#inp_url").val() || "";
        let data = new FormData();
        data.append("landing", landing);
        console.log(landing);
        data.append("logo", logo);
        data.append("subtitle", subtitle);
        data.append("link", link);
        editHeaderHome(data);
        if (landing == "Canal Claro") {
            resetIframe($("#navbar-prev-home iframe"), LandingHomeClaro);
        }
        if (landing == "Claro Cinema") {
            resetIframe(
                $("#navbar-prev-home-cinema iframe"),
                LandingHomeCinema
            );
        }
        if (landing == "Concert Channel") {
            resetIframe(
                $("#navbar-prev-home-concert iframe"),
                LandingHomeConcert
            );
        }
    });

    // HOME
    $(".acepta_carrusel_home").click(function () {
        const loader = `
        <div class="loader-view-container" id="loader1">
          <img src="./images/loader.gif" class="loader" alt="">
        </div>
        `;
        $("body").append(loader);

        setTimeout(function () {
            $("#loader1").remove();
            console.log("si lo borra");
        }, 2000);
    });

    /* MVC */

    let LandingHomeClaro = {
        remote: `${baseURL}home-edi-claro.php`,
        // remote: `http://localhost/MaquetaCNetworks/home-edi-claro.php`,
        container: document.getElementById("navbar-prev-home"),
        onMessage: function (message, origin) {
            let json = JSON.parse(message);
            if (typeof json == "object") {
                switch (json.type) {
                    case "slider-pagination":
                        landingView.renderHomeBanner();
                        break;
                    case "home-claro-carrousel-main":
                        let date = new Date();
                        let day = ("0" + date.getUTCDate()).slice(-2);
                        let month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
                        let year = date.getUTCFullYear();
                        let currentDate = `${year}-${month}-${day}`;
                        getProgrammingLanding(currentDate, "canal-claro");
                        break;

                    case "claro-home-header":
                        landingView.renderHomeHeaderCanalClaro();
                        break;
                    case "claro-home-slider":
                        let landing = "Canal Claro";
                        getCarruselHome(landing);
                        break;
                    default:
                        break;
                }
            }
            this.container.getElementsByTagName("iframe")[0].style.height =
                message + "px";
            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };
    let NavbarHomeClaro = document.getElementById("navbar-prev-home");
    if (NavbarHomeClaro) {
        $("#navbar-prev-home iframe").remove();
        new easyXDM.Socket(LandingHomeClaro);
    }

    let confHomeClaroCanal = {
        remote: `${baseURL}home-prev.php`,
        container: document.getElementById("navbar-prev-home"),
        onMessage: function (message, origin) {
            console.log(message);
            this.container.getElementsByTagName("iframe")[0].style.height =
                message + "px";
            this.container.getElementsByTagName("iframe")[0];

            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";

            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };

    let LandingHomeConcert = {
        remote: `${baseURL}home-edi-concert.php`,
        //    remote: `http://localhost/MaquetaCNetworks/home-edi-concert.php`,
        container: document.getElementById("navbar-prev-home-concert"),
        onMessage: function (message, origin) {
            let json = JSON.parse(message);
            if (typeof json == "object") {
                switch (json.type) {
                    case "slider-pagination":
                        landingView.renderHomeBanner();
                        break;
                    case "home-claro-carrousel-main":
                        let date = new Date();
                        let day = ("0" + date.getUTCDate()).slice(-2);
                        let month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
                        let year = date.getUTCFullYear();
                        let currentDate = `${year}-${month}-${day}`;
                        // getProgrammingLanding(currentDate, "concert channel", 'home');
                        getProgrammingLanding(currentDate, "concert-channel");
                        break;
                    case "concert-home-header":
                        landingView.renderHomeHeaderConcertChannel();
                        break;
                    case "concert-home-slider":
                        let landing = "Concert Channel";
                        getCarruselHome(landing);
                        break;
                    default:
                        break;
                }
            }
            this.container.getElementsByTagName("iframe")[0].style.height =
                message + "px";
            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };

    let NavbarHomeConcert = document.getElementById("navbar-prev-home-concert");
    if (NavbarHomeConcert) {
        $("#navbar-prev-home-concert iframe").remove();
        new easyXDM.Socket(LandingHomeConcert);
    }

    ////////////

    let confPrevHomeConcert = {
        remote: `${baseURL}home-prev.php`,
        container: document.getElementById("navbar-prev-home-concert"),
        onMessage: function (message, origin) {
            console.log(message);
            this.container.getElementsByTagName("iframe")[0].style.height =
                message + "px";
            this.container.getElementsByTagName("iframe")[0];

            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };

    //previsualizar canal claro
    // $("#prev-landing-concert").click(function () {
    //     //Landing canal claro
    //     resetIframe($("#navbar-prev-home-concert iframe"), confPrevHomeConcert);
    //     $("#prev-mobile")
    //         .removeClass("pointer-none")
    //         .addClass("cursor-pointer");
    //     $("#prev-tablet")
    //         .removeClass("pointer-none")
    //         .addClass("cursor-pointer");
    // });
    $("#edit-landing-concert").click(function () {
        resetIframe($("#navbar-prev-home-concert iframe"), LandingHomeConcert);

        $("#prev-mobile")
            .removeClass("cursor-pointer")
            .addClass("pointer-none");
        $("#prev-mobile").css("opacity", "0.4");
        $("#prev-tablet")
            .removeClass("cursor-pointer")
            .addClass("pointer-none");
        $("#prev-tablet").css("opacity", "0.4");
        $("#prev-desktop").css("opacity", "1");
    });
    let LandingHome = {
        remote: `${baseURL}home-edi.php`,
        container: document.getElementById("navbar-prev-home-landing"),
        onMessage: function (message, origin) {
            let json = JSON.parse(message);
            if (typeof json == "object") {
                const loader = `
                <div class="loader-view-container" id="loader1">
                  <img src="./images/loader.gif" class="loader" alt="">
                </div>
                `;
                switch (json.type) {
                    case "slider-pagination":
                        landingView.renderHomeBanner();
                        break;

                    case "home-logos":
                        $("body").append(loader);

                        setTimeout(function () {
                            $("#loader1").remove();
                            addImagesModalIcons();
                            $(".modal-edit-icons").modal("show");
                        }, 3000);

                        break;
                    case "home-carrousel-main":
                        let date = new Date();
                        let day = ("0" + date.getUTCDate()).slice(-2);
                        let month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
                        let year = date.getUTCFullYear();
                        let currentDate = `${year}-${month}-${day}`;
                        getProgrammingLanding(currentDate, "canal-claro");
                        break;
                    case "claro-home-header":
                        getContentHomeHeader(json.type);
                        break;
                    case "claro-home-slider":
                        let landingclaro = "Canal Claro";
                        getCarruselHome(landingclaro);
                        break;
                    case "channel-home-header":
                        landingView.renderHomeHeaderConcertChannel();
                        break;
                    case "channel-home-slider":
                        let landingconcert = "Concert Channel";
                        getCarruselHome(landingconcert);
                        break;
                    case "cinema-home-header":
                        getContentHomeHeaderCinema();
                        break;
                    case "cinema-home-slider":
                        let landingcinema = "Claro Cinema";
                        getCarruselHome(landingcinema);
                        break;
                    default:
                        break;
                }
            }
            this.container.getElementsByTagName("iframe")[0].style.height =
                message + "px";
            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };

    let navbarHome = document.getElementById("navbar-prev-home-landing");
    if (navbarHome) {
        new easyXDM.Socket(LandingHome);

        $("#prev").click(function () {
            $("#navbar-prev-home-landing iframe").remove();
            new easyXDM.Socket({
                remote: `${baseURL}home-prev.php`,
                container: document.getElementById("navbar-prev-home-landing"),
                onMessage: function (message, origin) {
                    this.container.getElementsByTagName(
                        "iframe"
                    )[0].style.height = message + "px";
                    this.container.getElementsByTagName(
                        "iframe"
                    )[0].style.boxShadow =
                        "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });

            $("#prev-mobile")
                .removeClass("pointer-none")
                .addClass("cursor-pointer");
            $("#prev-tablet")
                .removeClass("pointer-none")
                .addClass("cursor-pointer");
        });

        $("#editar").click(function () {
            //Al dar click en switch de previsualizar, removemos el iframe e insertamos otro
            $("#navbar-prev-home-landing iframe").remove();
            new easyXDM.Socket(LandingHome);

            $("#prev-mobile")
                .removeClass("cursor-pointer")
                .addClass("pointer-none");
            $("#prev-mobile").css("opacity", "0.4");
            $("#prev-tablet")
                .removeClass("cursor-pointer")
                .addClass("pointer-none");
            $("#prev-tablet").css("opacity", "0.4");
            $("#prev-desktop").css("opacity", "1");
        });
    }

    /* MVC */

    $(".thumbnail-image-program").click(function () {
        let id = this.firstElementChild.attributes[4].value;
        $("#image_programming_" + id).change(function () {
            let data = this;
            if (data.files[0]) {
                fileSrt.onload = function (e) {
                    $(".img_image_programming_" + id).attr(
                        "src",
                        e.target.result
                    );
                };
            }
            fileSrt.readAsDataURL(data.files[0]);
        });
    });

    $(".load-programming-carousel").click(function () {
        alert(this);
        console.log(this);
        console.log(this.firstElementChild.attributes[4].value);
    });

    // $('.thumbnail-image-program').click(function () {
    //     let id = $(".thumbnail-image-program label").attr("id");
    //     // let id = $('.load-programming-carousel').attr('id')
    //     console.log(id);
    //     $('#' + id).change(function () {
    //         let data = this
    //         if (data.files[0]) {
    //             fileSrt.onload = function (e) {
    //                 $(".img_" + id).attr('src', e.target.result);
    //             };
    //         }
    //         fileSrt.readAsDataURL(data.files[0]);
    //     });
    // });

    // $('.load-programming-carousel').click(function () {
    //     let id = $('.load-programming-carousel').attr('key');
    //     alert(id);
    //     $('#' + id).change(function () {s
    //         let data = this
    //         var fileSrt = new FileReader();
    //         if (data.files[0]) {
    //             fileSrt.onload = function (e) {
    //                 $(".img_" + id).attr('src', e.target.result);
    //             };
    //         }
    //         fileSrt.readAsDataURL(data.files[0]);
    //     });
    // })

    // $("#edit-program-modal-button").click(function () {
    //     resetIframe(
    //         $("#navbar-prev-concert-channel iframe"),
    //         confLandingConcertChannel
    //     );
    // });

    $('#acepta_carrusel_home').on('click', function () {
        let landing = $(this).attr('landing');
        console.log(landing)
        if (landing == 'canal_claro') {
            resetIframe($("#navbar-prev-home iframe"), LandingHomeClaro);
        }
        if (landing == 'concert_channel') {
            LandingHomeConcert
            resetIframe($("#navbar-prev-home-concert iframe"), LandingHomeConcert);
        }
        if (landing == 'claro_cinema') {
            resetIframe($("#navbar-prev-home-cinema iframe"), LandingHomeCinema);
        }
    })

    $("#device-size").load("imports #device-size-edit");

    $("#edit").click(function () {
        let id = $(".navbar-progra-active").attr("rel");

        console.log(id)

        if (id == undefined) {
            let programacion = document.getElementById('navbar-prev-programacion')
            if (programacion) {
                resetIframe($("#navbar-prev-programacion iframe"), confIframe);
            }
        }

        let canalClaro = "#navbar-prev-canal-claro";
        let programacion = "#navbar-prev-programacion";
        let home = "#navbar-prev-home";

        $("#" + id + " iframe").remove();

        $("#device-size").load("imports #device-size-edit");
        switch ("#" + id) {
            case programacion:
                resetIframe($("#navbar-prev-programacion iframe"), confIframe);
                break;
            case canalClaro:
                resetIframe($("#navbar-prev-canal-claro iframe"), landingCanalClaro);
                break;
            case home:
                resetIframe($("#navbar-prev-home iframe"), LandingHomeClaro);
                break;
        }

    })

    $("#prev").click(function () {
        let id = $(".navbar-progra-active").attr("rel");

        console.log(id)

        if (id == undefined) {
            let programacion = document.getElementById('navbar-prev-programacion')
            if (programacion) {
                resetIframe($("#navbar-prev-programacion iframe"), confPrevProgramacion);
            }
        }

        let canalClaro = "#navbar-prev-canal-claro";
        let programacion = "#navbar-prev-programacion";
        let home = "#navbar-prev-home";

        $("#" + id + " iframe").remove();

        $("#device-size").load("imports #device-size-prev", function () {
            $(".a-prev-image").click(function () {
                previewPage($(this));
            });
        });

        switch ("#" + id) {
            case programacion:
                resetIframe(
                    $("#navbar-prev-programacion iframe"), confPrevProgramacion);
                break;
            case canalClaro:
                resetIframe(
                    $("#navbar-prev-canal-claro iframe"), confPrevClaroCanal);
                break;
            case home:
                resetIframe($("#navbar-prev-home iframe"), LandingHomeClaro);
                break;
        }
    })

    $("#edit-concert").click(function () {
        let id = $(".navbar-progra-active").attr("rel");

        console.log(id)

        let programacion = "#navbar-prev-programacion-concert";
        let concertChannel = "#navbar-prev-concert-channel";
        let home = "#navbar-prev-home-concert";

        $("#" + id + " iframe").remove();

        $("#device-size").load("imports #device-size-edit");
        switch ("#" + id) {
            case programacion:
                resetIframe($("#navbar-prev-programacion-concert iframe"), confProgramacionConcertChannel);
                break;
            case home:
                resetIframe($("#navbar-prev-home-concert iframe"), LandingHomeConcert);
                break;
            case concertChannel:
                resetIframe($("#navbar-prev-concert-channel iframe"), confLandingConcertChannel);
                break;
        }
    })

    $("#prev-landing-concert").click(function () {
        let id = $(".navbar-progra-active").attr("rel");

        console.log(id)

        let programacion = "#navbar-prev-programacion-concert";
        let concertChannel = "#navbar-prev-concert-channel";
        let home = "#navbar-prev-home-concert";

        $("#" + id + " iframe").remove();

        $("#device-size").load("imports #device-size-prev", function () {
            $(".a-prev-image").click(function () {
                previewPage($(this));
            });
        });

        switch ("#" + id) {
            case programacion:
                resetIframe(
                    $("#navbar-prev-programacion-concert iframe"), confPrevProgramacionConcert);
                break;
            case home:
                resetIframe($("#navbar-prev-home-concert iframe"), confPrevHomeConcert);
                break;
            case concertChannel:
                resetIframe($("#navbar-prev-concert-channel iframe"), confPrevConcert);
                break;
        }
    })

    $('.close-all-modal').on('click', function () {
        $('.modal-edit-icons').modal('hide')
    })
}

export { eventsGrilla };
