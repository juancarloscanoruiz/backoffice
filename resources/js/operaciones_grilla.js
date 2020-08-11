//JQUERY
import $, {
    isEmptyObject
} from "jquery";
//Métodos para aplicar ciertos estilos a las filas y columnas
import {
    selectRow,
    selectColumn
} from "./UI/UI.js";

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
    getProgramming
} from "./services/landing.js";

//Configraciones para la librería de Cleave JS
import {
    cleaveConfig,
    scheduleTimeConfig,
    timeWithSeconds,
    year
} from "./config/config.js";

//Métodos para mostrar las vistas de "Landing" o "Grilla"
import {
    showlanding
} from "./UI/UI.js";

function eventsGrilla() {


    //Evento para cuando cerramos el selectpicker


    $('.calendar-slider').on("click", ".programming-item", function () {
        $('.programming-item').removeClass("programming-item-active");
        $(this).addClass("programming-item-active");
        let date = $(this).attr("date")
        let section = $(this).attr("section_id");
        let time = $('.current').attr("schedule");
        console.log(date, section, time);
        getProgramming(date, section, time);
    })

    $(".thermometer-schedule-list").on("click", ".unavailable", function () {
        let chapter_id = $(this).attr("chapter_id");
        getChapterInfo(chapter_id);
    });

    $(".edit-landing-modal-button").click(function () {
        let iframe = $("#navbar-prev-programacion iframe").attr("src");

        $("#navbar-prev-programacion iframe").attr("src", iframe);
    });

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
                        console.log(value);
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
                        console.log(value);
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
                        console.log("in_landing_begin" + date);
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
                        console.log(value);
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
                        console.log($(".edit-landing-time-end").val());
                        console.log("landing_expiration con tiempo: " + value);
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
                        console.log("landing_expiration sin tiempo: " + value);
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

    $(".edit-synopsis").blur(function (e) {
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
                    console.log(value);
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
                    console.log(value);
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
                    console.log("landing_expiration sin tiempo: " + value);
                    editAttributeProgram(chapter_id, key, value);
                    $(this).blur();
                }

                break;
            default:
                editAttributeProgram(chapter_id, key, value);
                break;
        }

        //let iframe = $("#navbar-prev-programacion iframe").attr("src");
        //$("#navbar-prev-programacion iframe").attr("src", iframe);
    });

    $(".edit-program-switch").click(function () {
        let value = $(this).val();
        let key = $(this).attr("key");
        let chapter_id = $(".edit-program-data-container").attr("chapter_id");
        editAttributeProgram(chapter_id, key, value);
    });

    $(".edit-switch-home").click(function () {
        console.log($(this).val());
        if ($(this).val() == 0) {
            $(".edit-home-date-end").val("");
            $(".edit-home-date-begin").val("");
            $(".edit-home-time-end").val("");
            $(".edit-home-time-begin").val("");
        }
    });

    $(".edit-switch-landing").click(function () {
        if ($(this).val() == 0) {
            $(".edit-landing-date-end").val("");
            $(".edit-landing-date-begin").val("");
            $(".edit-landing-time-end").val("");
            $(".edit-landing-time-begin").val("");
        }
    });
    //loader, antes de subir un archivo
    $(".load-modales").click(function () {
        $(".modal-edit-icons .modal-content").append(
            `<div class="loader-view-container pointer-none" >
            <img src="./images/loader.gif" class="loader"/>
        </div>`
        );
        console.log("si lo agrega");
        setTimeout(function () {
            $(".loader-view-container").remove();
            console.log("si lo borra");
        }, 3000);
    });
    //loader, antes de subir un archivo
    $(".load-modal-programming").click(function () {
        $(".modal-edit-program .modal-content").append(
            `<div class="loader-view-container pointer-none" >
            <img src="./images/loader.gif" class="loader"/>
        </div>`
        );
        console.log("si lo agrega");
        setTimeout(function () {
            $(".loader-view-container").remove();
            console.log("si lo borra");
        }, 3000);
    });
    //loader, antes de subir un archivo
    $(".load-programming-carousel").click(function () {
        $(".modal-programming-carousel .modal-content").append(
            `<div class="loader-view-container pointer-none" >
            <img src="./images/loader.gif" class="loader"/>
        </div>`
        );
        console.log("si lo agrega");
        setTimeout(function () {
            $(".loader-view-container").remove();
            console.log("si lo borra");
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

    //Declaramos un contador para poder diferenciar los label de los slides que se van creando
    let slideIndex = 3;
    //Añadimos un slide al slider de imágenes de programación
    $(".add-programming-image").click(function () {
        //Cada vez que se haga click, el contador incrementa
        slideIndex++;
        //Agregamos un slide al slider de programación
        $(".programming-slider").slick(
            "slickAdd",
            `
            <div class="slick-slide">
                <div>
                    <div class="bor thumbnail-image-program position-relative h-100">
                    <input type="file" name="image_programming[]" id="image_programming_${slideIndex}" class="input-image-program d-none" tabindex="0">
                        <label for="image_programming_${slideIndex}" class="h-100 mb-0 d-flex justify-content-center align-items-center flex-column">
                            <img src="http://localhost:8888/backoffice/public/images/synopsis/camara.svg" alt="add-photo" class=" cursor-pointer add-photo">
                            <span class="a-text-bold-warm text-plus mt-3">1000px X 342px</span>
                            <img src="http://localhost:8888/backoffice/public/images/synopsis/image-synopsis-carrusel.jpg" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program">
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
    let navbarPrograContainer = document.getElementById(
        "navbar-prev-programacion"
    );

    //Verificamos si existe el contenedor para insertar el iframe
    if (navbarPrograContainer) {
        $("#edit-program-modal-button").click(function () {
            socketProgramacion.destroy();
            let newSocketProgramación = new easyXDM.Socket({
                remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/programacion-edi.php",
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
                                getChapterInfo(json.chapterId);
                                break;
                            case "slider-pagination":
                                $("body").append(loader);
                                setTimeout(function () {
                                    $(".modal-programming-carousel").modal(
                                        "show"
                                    );
                                    $("#loader1").remove();
                                    $(".programming-slider").slick({
                                        slidesToShow: 1,
                                        dots: true,
                                        appendDots: $(
                                            ".programming-slider-dots"
                                        ),
                                        initialSlide: 0,
                                        infinite: false,
                                        arrows: true,
                                        prevArrow: '<img src="./images/synopsis/arrow.svg" class="cursor-pointer arrow-left-programming" />',
                                        nextArrow: '<img src="./images/synopsis/arrow.svg" class="cursor-pointer arrow-right-programming" />',
                                        customPaging: function (slider, i) {
                                            var thumb = $(
                                                slider.$slides[i]
                                            ).data();
                                            return (
                                                "<p class='mb-0 a-text-bold-teal slider-pagination-item mr-4'>" +
                                                (i + 1) +
                                                "</p>"
                                            );
                                        }
                                    });
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
                                    $(".modal-edit-icons").modal("show");

                                    $("#loader1").remove();
                                }, 3000);
                                break;

                            default:
                                break;
                        }
                    }
                    this.container.getElementsByTagName(
                        "iframe"
                    )[0].style.height = message + "px";
                    this.container.getElementsByTagName(
                            "iframe"
                        )[0].style.boxShadow =
                        "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
        });
        let socketProgramacion = new easyXDM.Socket({
            remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/programacion-edi.php",
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
                            getChapterInfo(json.chapterId);
                            break;
                        case "slider-pagination":
                            $("body").append(loader);
                            setTimeout(function () {
                                $(".modal-programming-carousel").modal("show");
                                $("#loader1").remove();
                                $(".programming-slider").slick({
                                    slidesToShow: 1,
                                    dots: true,
                                    appendDots: $(".programming-slider-dots"),
                                    initialSlide: 0,
                                    infinite: false,
                                    arrows: true,
                                    prevArrow: '<img src="./images/synopsis/arrow.svg" class="cursor-pointer arrow-left-programming" />',
                                    nextArrow: '<img src="./images/synopsis/arrow.svg" class="cursor-pointer arrow-right-programming" />',
                                    customPaging: function (slider, i) {
                                        var thumb = $(slider.$slides[i]).data();
                                        return (
                                            "<p class='mb-0 a-text-bold-teal slider-pagination-item mr-4'>" +
                                            (i + 1) +
                                            "</p>"
                                        );
                                    }
                                });
                                addImagesModalBanner();
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
                this.container.getElementsByTagName(
                    "iframe"
                )[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
            }
        });
        let socketProgramacionPrev = "";
        let socketProgramacionEdi = "";
        $("#prev").click(function () {
            socketProgramacion.destroy();
            socketProgramacionPrev = new easyXDM.Socket({
                remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/programacion-prev.php",
                container: document.getElementById("navbar-prev-programacion"),
                onMessage: function (message, origin) {
                    this.container.getElementsByTagName(
                        "iframe"
                    )[0].style.height = message + "px";
                    this.container
                        .getElementsByTagName("iframe")[0]
                        .setAttribute("scrolling", "no");
                    this.container.getElementsByTagName(
                            "iframe"
                        )[0].style.boxShadow =
                        "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
        });

        $("#editar").click(function () {
            socketProgramacionPrev.destroy();
            socketProgramacionEdi = new easyXDM.Socket({
                remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/programacion-edi.php",
                container: document.getElementById("navbar-prev-programacion"),
                onMessage: function (message, origin) {
                    let json = JSON.parse(message);
                    if (typeof json == "object") {
                        let loader = `
                            <div class="loader-view-container">
                                <img src="./images/loader.gif" class="loader" alt="">
                            </div>
                                `;
                        switch (json.type) {
                            case "program":
                                console.log(json.chapterId);
                                getChapterInfo(json.chapterId);
                                break;
                            case "slider-pagination":
                                $(".modal-programming-carousel").modal("show");

                                $(".programming-slider").slick({
                                    slidesToShow: 1,
                                    dots: true,
                                    appendDots: $(".programming-slider-dots"),
                                    initialSlide: 0,
                                    infinite: false,
                                    arrows: true,
                                    prevArrow: '<img src="./images/synopsis/arrow.svg" class="cursor-pointer arrow-left-programming" />',
                                    nextArrow: '<img src="./images/synopsis/arrow.svg" class="cursor-pointer arrow-right-programming" />',
                                    customPaging: function (slider, i) {
                                        var thumb = $(slider.$slides[i]).data();
                                        return (
                                            "<p class='mb-0 a-text-bold-teal slider-pagination-item mr-4'>" +
                                            (i + 1) +
                                            "</p>"
                                        );
                                    }
                                });

                                break;
                            case "synopsis":
                                document
                                    .querySelector("body")
                                    .insertAdjacentHTML("beforeend", loader);
                                window.location.href =
                                    "http://back.claronetworks.openofficedospuntocero.info/backoffice/public/landing/edit-program";
                                break;
                            case "menu-logos":
                                $(".modal-edit-icons").modal("show");

                                break;

                            default:
                                break;
                        }
                    }
                    this.container.getElementsByTagName(
                        "iframe"
                    )[0].style.height = message + "px";
                    this.container.getElementsByTagName(
                            "iframe"
                        )[0].style.boxShadow =
                        "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
        });

        /*$('.edi-concert').click(function () {
            socketProgramacionPrev.destroy();
            socketProgramacionEdi = new easyXDM.Socket({
                remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/programacion-edi.php",
                container: document.getElementById("navbar-prev-programacion"),
                onMessage: function (message, origin) {
                    let json = JSON.parse(message);
                    if (typeof json == "object") {
                        let loader = `
                            <div class="loader-view-container">
                                <img src="./images/loader.gif" class="loader" alt="">
                            </div>
                                `;
                        switch (json.type) {
                            case "program":
                                console.log(json.chapterId);
                                getChapterInfo(json.chapterId);
                                break;
                            case "slider-pagination":
                                $(".modal-programming-carousel").modal("show");

                                $(".programming-slider").slick({
                                    slidesToShow: 1,
                                    dots: true,
                                    appendDots: $(".programming-slider-dots"),
                                    initialSlide: 0,
                                    infinite: false,
                                    arrows: true,
                                    prevArrow: '<img src="./images/synopsis/arrow.svg" class="cursor-pointer arrow-left-programming" />',
                                    nextArrow: '<img src="./images/synopsis/arrow.svg" class="cursor-pointer arrow-right-programming" />',
                                    customPaging: function (slider, i) {
                                        var thumb = $(slider.$slides[i]).data();
                                        return (
                                            "<p class='mb-0 a-text-bold-teal slider-pagination-item mr-4'>" +
                                            (i + 1) +
                                            "</p>"
                                        );
                                    }
                                });

                                break;
                            case "synopsis":
                                document
                                    .querySelector("body")
                                    .insertAdjacentHTML("beforeend", loader);
                                window.location.href =
                                    "http://back.claronetworks.openofficedospuntocero.info/backoffice/public/landing/edit-program";
                                break;
                            case "menu-logos":
                                $(".modal-edit-icons").modal("show");

                                break;

                            default:
                                break;
                        }
                    }
                    this.container.getElementsByTagName("iframe")[0].style.height =
                        message + "px";
                    this.container.getElementsByTagName(
                        "iframe"
                    )[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
        })

        $('.prev-concert').click(function () {
            socketProgramacion.destroy();
            socketProgramacionPrev = new easyXDM.Socket({
                remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/programacion-prev.php",
                container: document.getElementById("navbar-prev-programacion"),
                onMessage: function (message, origin) {
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                        "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
        });

        $('.prev-cinema').click(function () {
            socketProgramacion.destroy();
            socketProgramacionPrev = new easyXDM.Socket({
                remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/programacion-prev.php",
                container: document.getElementById("navbar-prev-programacion"),
                onMessage: function (message, origin) {
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                        "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
        })

        $('.edi-cinema').click(function () {
            socketProgramacionPrev.destroy();
            socketProgramacionEdi = new easyXDM.Socket({
                remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/programacion-edi.php",
                container: document.getElementById("navbar-prev-programacion"),
                onMessage: function (message, origin) {
                    let json = JSON.parse(message);
                    if (typeof json == "object") {
                        let loader = `
                            <div class="loader-view-container">
                                <img src="./images/loader.gif" class="loader" alt="">
                            </div>
                                `;
                        switch (json.type) {
                            case "program":
                                console.log(json.chapterId);
                                getChapterInfo(json.chapterId);
                                break;
                            case "slider-pagination":
                                $(".modal-programming-carousel").modal("show");

                                $(".programming-slider").slick({
                                    slidesToShow: 1,
                                    dots: true,
                                    appendDots: $(".programming-slider-dots"),
                                    initialSlide: 0,
                                    infinite: false,
                                    arrows: true,
                                    prevArrow: '<img src="./images/synopsis/arrow.svg" class="cursor-pointer arrow-left-programming" />',
                                    nextArrow: '<img src="./images/synopsis/arrow.svg" class="cursor-pointer arrow-right-programming" />',
                                    customPaging: function (slider, i) {
                                        var thumb = $(slider.$slides[i]).data();
                                        return (
                                            "<p class='mb-0 a-text-bold-teal slider-pagination-item mr-4'>" +
                                            (i + 1) +
                                            "</p>"
                                        );
                                    }
                                });

                                break;
                            case "synopsis":
                                document
                                    .querySelector("body")
                                    .insertAdjacentHTML("beforeend", loader);
                                window.location.href =
                                    "http://back.claronetworks.openofficedospuntocero.info/backoffice/public/landing/edit-program";
                                break;
                            case "menu-logos":
                                $(".modal-edit-icons").modal("show");

                                break;

                            default:
                                break;
                        }
                    }
                    this.container.getElementsByTagName("iframe")[0].style.height =
                        message + "px";
                    this.container.getElementsByTagName(
                        "iframe"
                    )[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
        })*/
    }

    $(".input-image-program").change(function () {
        console.log("Imges");
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
        console.log(keyValue);
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
    $(".lan-claro").click(function () {
        showlanding();
    });

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
                //console.log("El landing es: "+landing);
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
        console.log("cerrar_modals");
        $(".modal-programming-carousel").modal("hide");
        $(".modal-delete-user").modal("hide");
        $(".modal-edit-icons").modal("hide");
        $(".modal-edit-program").modal("hide");
    });
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
                        console.log(day, hours);
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
                        console.log(day, hours);
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
                    console.log(day, hours);
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
                    console.log(day, hours);
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
                    console.log(day, hours);
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

    /*     //EDITAR CLARO CANAL
        $("#edit").click(function () {
            if ($('input[id="edit"]').is(":checked")) {
                $("#navbar-prev-canal-claro").html(`

                <script>
                new easyXDM.Socket({
                    remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/claro-canal-edi.php",
                    container: "navbar-prev-canal-claro",
                    onMessage: function(message, origin) {
                        console.log(message);
                        this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                        this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                        this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";

                    }
                });
                </script>`);
                $("#navbar-prev-home").html(` <script>
                new easyXDM.Socket({
                    remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/home-edi.php",
                    container: "navbar-prev-home",
                    onMessage: function(message, origin) {
                        console.log(message);
                        this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                        this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                        this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                    }
                });
                </script>`);
                $("#navbar-prev-programacion").html(` <script>
                new easyXDM.Socket({
                remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/programacion-edi.php",
                container: "navbar-prev-programacion",
                    onMessage: function(message, origin) {
                        console.log(message);
                        this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                        this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                        this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                    }
                });
                </script>`);
            }
        });

        //PREV CLARO CANAL
        $("#prev").click(function () {
            if ($('input[id="prev"]').is(":checked")) {
                $("#navbar-prev-canal-claro").html(`
                <script>
                    new easyXDM.Socket({
                        remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/claro-canal-prev.php",
                        container: "navbar-prev-canal-claro",
                        onMessage: function(message, origin) {
                            console.log(message);
                            this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                            this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                            this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                        }
                    });
                </script>
                `);

                $("#navbar-prev-programacion").html(` <script>
                new easyXDM.Socket({
                remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/programacion-prev.php",
                container: "navbar-prev-programacion",
                    onMessage: function(message, origin) {
                        console.log(message);
                        this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                        this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                        this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                    }
                });
                </script>`);
                $("#navbar-prev-home").html(` <script>
                new easyXDM.Socket({
                remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/home-prev.php",
                container: "navbar-prev-home",
                    onMessage: function(message, origin) {
                        console.log(message);
                        this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                        this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                        this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                    }
                });
                </script>`);
            }
        }); */

    //EDITAR CINEMA
    $(".edi-cinema").click(function () {
        if ($('input[id="edit"]').is(":checked")) {
            $("#navbar-prev-claro-cinema").html(` <script>
      new easyXDM.Socket({
        remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/claro-cinema-edi.php",
        container: "navbar-prev-claro-cinema",
          onMessage: function(message, origin) {
              console.log(message);
              this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
              this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
              this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";

          }
      });
  </script>`);
            $("#navbar-prev-programacion").html(` <script>
            new easyXDM.Socket({
                remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/programacion-edi.php",
                container: "navbar-prev-programacion",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);
            $("#navbar-prev-home").html(` <script>
            new easyXDM.Socket({
                remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/home-edi.php",
                container: "navbar-prev-home",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);
        }
    });
    //PREV CINEMA
    $(".prev-cinema").click(function () {
        if ($('input[id="prev"]').is(":checked")) {
            $("#navbar-prev-claro-cinema").html(` <script>
            new easyXDM.Socket({
                remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/claro-cinema-prev.php",
                container: "navbar-prev-claro-cinema",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);
            $("#navbar-prev-programacion").html(` <script>
            new easyXDM.Socket({
            remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/programacion-prev.php",
            container: "navbar-prev-programacion",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);

            $("#navbar-prev-home").html(` <script>
            new easyXDM.Socket({
            remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/home-prev.php",
            container: "navbar-prev-home",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);
        }
    });
    //EDITAR CONCERT
    $(".edi-concert").click(function () {
        console.log("editar");
        if ($('input[id="edit"]').is(":checked")) {
            $("#navbar-prev-concert-channel").html(` <script>
            new easyXDM.Socket({
            remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/concert-channel-edi.php",
            container: "navbar-prev-concert-channel",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);
            $("#navbar-prev-programacion").html(` <script>
            new easyXDM.Socket({
            remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/programacion-edi.php",
            container: "navbar-prev-programacion",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);
            $("#navbar-prev-home").html(` <script>
            new easyXDM.Socket({
              remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/home-edi.php",
              container: "navbar-prev-home",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);
        }
    });
    //PREV CONCERT
    $(".prev-concert").click(function () {
        console.log("prev concert channel");
        if ($('input[id="prev"]').is(":checked")) {
            $("#navbar-prev-concert-channel").html(` <script>
            new easyXDM.Socket({
                remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/concert-channel-prev.php",
                container: "navbar-prev-concert-channel",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);
            $("#navbar-prev-programacion").html(` <script>
            new easyXDM.Socket({
            remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/programacion-prev.php",
            container: "navbar-prev-programacion",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);
            $("#navbar-prev-home").html(` <script>
            new easyXDM.Socket({
              remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/home-prev.php",
              container: "navbar-prev-home",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);
        }
    });
    /*     //EDITAR HOME
        $(".edi-home").click(function () {
            if ($('input[id="edit"]').is(":checked")) {
                $("#navbar-prev-home").html(` <script>
                new easyXDM.Socket({
                remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/home-edi.php",
                container: "navbar-prev-home",
                onMessage: function(message, origin) {
                        console.log(message);
                        this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                        this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                        this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";

                    }
                });
                </script>`);
                $("#navbar-prev-programacion").html(` <script>
                new easyXDM.Socket({
                remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/programacion-prev.php",
                container: "navbar-prev-programacion",
                    onMessage: function(message, origin) {
                        console.log(message);
                        this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                        this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                        this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                    }
                });
                </script>`);
            }
        });
        //PREV HOME
        $(".prev-home").click(function () {
            if ($('input[id="prev"]').is(":checked")) {
                $("#navbar-prev-home").html(` <script>
                new easyXDM.Socket({
                    remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/home-edi.php",
                    container: "navbar-prev-home",
                    onMessage: function(message, origin) {
                        console.log(message);
                        this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                        this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                        this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                    }
                });
                </script>`);
                $("#navbar-prev-programacion").html(` <script>
                new easyXDM.Socket({
                remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/programacion-prev.php",
                container: "navbar-prev-programacion",
                    onMessage: function(message, origin) {
                        console.log(message);
                        this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                        this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                        this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                    }
                });
                </script>`);
            }
        }); */
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
}

export {
    eventsGrilla
};
