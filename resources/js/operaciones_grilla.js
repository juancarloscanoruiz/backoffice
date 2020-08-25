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
    getProgramming,
    getContentConcertChannelHeader
} from "./services/landing.js";

//Configraciones para la librería de Cleave JS
import {
    cleaveConfig,
    scheduleTimeConfig,
    timeWithSeconds,
    year
} from "./config/config.js";

//Configraciones para la librería de Cleave JS
import {
    calendarSlick
} from "./config/slick.js";


//Métodos para mostrar las vistas de "Landing" o "Grilla"
import {
    showlanding
} from "./UI/UI.js";

//Config

import {
    resetIframe
} from "./vendor/easyXDM.js";

import {
    createSlickSlider,
    createCalendarDays
} from "./vendor/slick.js";

function eventsGrilla() {

    $('.btn-prueba').click(function () {
        getHeaderLanding()
    })
    const baseURL = "http://www.claronetworks.openofficedospuntocero.info/v1.2/"

    //Landing de concert channel
    let confLandingConcertChannel = {
        remote: `${baseURL}concert-channel-edi.php`,
        // remote: `http://localhost/MaquetaCNetworks/concert-channel-edi.php`,
        // remote: `http://localhost/MaquetaCNetworks/claro-canal-edi.php`,
        container: document.getElementById(
            "navbar-prev-concert-channel"
        ),
        onMessage: function (message, origin) {
            let json = JSON.parse(message);
            console.log(this.remote);
            console.log('Hola', json);
            if (typeof json == "object") {
                let loader = `
                        <div class="loader-view-container" id="loader1">
                            <img src="./images/loader.gif" class="loader" alt="">
                        </div>
                            `;

                switch (json.type) {

                    case "current-programming-concert":
                        let calendarSlider2 = $(".calendar-slider2");
                        $("body").append(loader);
                        $('.modal-programming-landing').modal("show");
                        $('.loader-view-container').remove();
                        createCalendarDays(calendarSlider2);
                        try {
                            calendarSlider2.slick("unslick");
                            createSlickSlider(calendarSlider2, calendarSlick);
                        } catch (error) {
                            createSlickSlider(calendarSlider2, calendarSlick);

                        }
                        break;
                    case "header-landing-concert":
                        getContentConcertChannelHeader();
                        $("#loader1").remove();
                        break;
                    case "pencil-header":
                        $("body").append(loader);
                        setTimeout(function () {
                            $('.modal-titles').modal("show");

                        }, 3000);


                        break;
                    case "pencil-video":
                        $("body").append(loader);
                        setTimeout(function () {
                            $('.modal-promos').modal("show");
                            $("#loader1").remove();
                        }, 3000);

                        break;
                    case "pencil-header1":
                        $("body").append(loader);
                        setTimeout(function () {
                            $('.modal-titles').modal("show");
                            $("#loader1").remove();
                        }, 3000);


                        break;
                    case "header2":
                        $("body").append(loader);
                        setTimeout(function () {
                            $('.modal-titles').modal("show");
                            $("#loader1").remove();
                        }, 3000);



                        break;
                    case "pencil-carusel1":
                        $("body").append(loader);
                        setTimeout(function () {
                            $('.modal-edit-program-carrusel').modal("show");
                            $("#loader1").remove();
                        }, 3000);
                        break;

                    case "pencil-carusel2":
                        $("body").append(loader);
                        setTimeout(function () {
                            $('.modal-edit-program-carrusel2').modal("show");
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
    let navbarPrevConcertChannel = document.getElementById("navbar-prev-concert-channel");
    if (navbarPrevConcertChannel) {
        console.log('Entro if Concer');
        $('#navbar-prev-concert-channel iframe').remove();
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
        console.log(date, section, time);
        getProgramming(date, section, time);
    });

    $(".thermometer-schedule-list").on("click", ".unavailable", function () {
        let chapter_id = $(this).attr("chapter_id");
        getChapterInfo(chapter_id);
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

    $(".edit-program-attribute-text").blur(function (e) {
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
                    console.log(value);
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
                    console.log("landing_expiration sin tiempo: " + value);
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

    $(".edit-program-switch").click(function () {
        let value = $(this).val();
        let key = $(this).attr("key");
        let chapter_id = $(".edit-program-data-container").attr("chapter_id");
        editAttributeProgram(chapter_id, key, value);
    });

    $(".edit-switch-home").click(function () {
        if ($(this).val() == 0) {
            $(".edit-home-date-end").val("");
            $(".edit-home-date-begin").val("");
            $(".edit-home-time-end").val("");
            $(".edit-home-time-begin").val("");
        }
    });

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


    //para agregar un slider más en cinema
    $(".add-programming-image").click(function () {
        let slideIndex = $(".load-programming-carousel").length + 1;
        //Cada vez que se haga click, el contador incrementa

        //Agregamos un slide al slider de programación
        $(".cinema-image-slider").slick(
            "slickAdd",
            `
            <div class="slick-slide">
                <div>
                    <div class="bor thumbnail-image-program position-relative h-100">
                    <input type="file" name="image_programming[]" id="image_programming_${slideIndex}" class="input-image-program d-none" tabindex="0">
                        <label for="image_programming_${slideIndex}" class="h-100 mb-0 d-flex justify-content-center align-items-center flex-column load-programming-carousel">
                            <img src="./images/synopsis/camara.svg" alt="add-photo" class=" cursor-pointer add-photo">
                            <span class="a-text-bold-warm text-plus mt-3">1000px X 342px</span>
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
            "slickAdd", `
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
                    class="text-center edit-rectangle-small-container d-flex align-content-center justify-content-center py-2">
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
    data-dismiss="modal" id="edit-program-modal-button">ACEPTAR</button>
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
                                class="text-center edit-rectangle-small-container d-flex align-content-center justify-content-center py-2">
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
                data-dismiss="modal" id="edit-program-modal-button">ACEPTAR</button>
        </section>

    </div>

            </div>
            `
        );
    });

    //Declaramos un contador para poder diferenciar los label de los slides que se van creando

    //Añadimos un slide al slider de imágenes de programación
    $(".add-programming-image").click(function () {
        let slideIndex = $(".load-programming-carousel").length + 1;
        //Cada vez que se haga click, el contador incrementa

        //Agregamos un slide al slider de programación
        $(".programming-slider").slick(
            "slickAdd",
            `
            <div class="slick-slide">
                <div>
                    <div class="bor thumbnail-image-program position-relative h-100">
                    <input type="file" name="image_programming[]" id="image_programming_${slideIndex}" class="input-image-program d-none" tabindex="0">
                        <label for="image_programming_${slideIndex}" class="h-100 mb-0 d-flex justify-content-center align-items-center flex-column load-programming-carousel">
                            <img src="./images/synopsis/camara.svg" alt="add-photo" class=" cursor-pointer add-photo">
                            <span class="a-text-bold-warm text-plus mt-3">1000px X 342px</span>
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
    let navbarPrograContainerCinema = document.getElementById(
        "navbar-prev-programacion-cinema"
    );

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
                        getChapterInfo(json.chapterId);
                        break;
                    case "slider-pagination":
                        $("body").append(loader);

                        setTimeout(function () {
                            $(".modal-programming-carousel").modal("show");
                            $("#loader1").remove();

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
            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };
    let iframeProgramacionCinema = $("#navbar-prev-programacion-cinema iframe");
    if (navbarPrograContainerCinema) {
        iframeProgramacionCinema.remove();
        new easyXDM.Socket(confProgramacionClaroCinema);
    }

    $(".modal-program-claro-cinema").click(function () {
        resetIframe($("#navbar-prev-programacion-cinema iframe"), confProgramacionClaroCinema);
    });

    //Landing de programacion de concert channel
    let navbarPrograContainerConcert = document.getElementById(
        "navbar-prev-programacion-concert"
    );
    let iframeProgramacionConcert = $("#navbar-prev-programacion-concert iframe");
    let confProgramacionConcertChannel = {
        remote: `${baseURL}programacion-edi-concert.php`,
        container: document.getElementById(
            "navbar-prev-programacion-concert"
        ),
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
            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };
    if (navbarPrograContainerConcert) {
        iframeProgramacionConcert.remove();
        new easyXDM.Socket(confProgramacionConcertChannel);
    }

    $(".modal-program-concert-channel").click(function () {
        resetIframe($("#navbar-prev-programacion-concert iframe"), confProgramacionConcertChannel);
    });


    //Landing de programación de claro canal
    //Canal claro
    let navbarPrograContainer = document.getElementById(
        "navbar-prev-programacion"
    );
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
                        getChapterInfo(json.chapterId);
                        break;
                    case "slider-pagination":
                        $("body").append(loader);

                        setTimeout(function () {
                            $(".modal-programming-carousel").modal("show");
                            $("#loader1").remove();

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
            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };
    $(".edit-landing-modal-button").click(function () {
        resetIframe($("#navbar-prev-programacion iframe"), confIframe);
    });

    //Verificamos si existe el contenedor para insertar el iframe
    if (navbarPrograContainer) {
        new easyXDM.Socket(confIframe);
        //Al dar click en switch de previsualizar, removemos el iframe e insertamos otro
        $("#prev").click(function () {
            $("#navbar-prev-programacion iframe").remove();
            new easyXDM.Socket({
                remote: `${baseURL}programacion.php`,
                container: document.getElementById("navbar-prev-programacion"),
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
        });

        $("#editar").click(function () {
            //Al dar click en switch de previsualizar, removemos el iframe e insertamos otro
            $("#navbar-prev-programacion iframe").remove();
            new easyXDM.Socket(confIframe);
        });
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

              this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";

          }
      });
  </script>`);
            $("#navbar-prev-programacion").html(` <script>
            new easyXDM.Socket({
                remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/programacion-edi-cinema.php",
                container: "navbar-prev-programacion",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";

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

                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);
            $("#navbar-prev-programacion").html(` <script>
            new easyXDM.Socket({
            remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/programacion-edi-concert.php",
            container: "navbar-prev-programacion",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";

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

    // Canal Claro

    let landingCanalClaro = {
        // remote: `${baseURL}concert-channel-edi.php`,
        // remote: `http://localhost/MaquetaCNetworks/concert-channel-edi.php`,
        remote: `http://localhost:8888/MaquetaCNetworks/claro-canal-edi.php`,
        container: document.getElementById("navbar-prev-canal-claro"),
        onMessage: function (message, origin) {
            let json = JSON.parse(message);
            console.log('buenas', json);
            if (typeof json == "object") {
                switch (json.type) {
                    case "claro-header":
                        console.log('header funciona ok');
                        $('#modal-header').modal("show");
                        break;
                    case "claro-programacion":
                        console.log('header funciona ok');
                        $('#modal-edi-claro').modal("show");
                        break;
                    case "claro-title":
                        console.log('header funciona ok');
                        $('#modal-title').modal("show");
                        break;
                    case "claro-promo":
                        console.log('header funciona ok');
                        $('#modal-promo').modal("show");
                        break;
                }
            }
            this.container.getElementsByTagName("iframe")[0].style.height =
                message + "px";
            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    }
    let menuClaroCanal = document.getElementById("navbar-prev-canal-claro");
    if (menuClaroCanal) {
        $('#navbar-prev-canal-claro iframe').remove();
        console.log('enviando....');
        new easyXDM.Socket(landingCanalClaro);
    }

    // Canal Claro

    $('#btn-test').click(function () {
        console.log('funciona');
        $("#modaledi-claro").modal("show");
    })
}

export {
    eventsGrilla
};

function eveClaroCanal() {
    // Modal


    $('#promo-claro').change(function () {
        File(this)
    })

    $('#header-claro').change(function () {
        File(this)
    })

    function File(objFileInput) {
        if (objFileInput.files[0]) {
            var fileReader = new FileReader();
            fileReader.onload = function (e) {
                $("#" + objFileInput.name).html('<img src="' + e.target.result + '" />');
            }
            fileReader.readAsDataURL(objFileInput.files[0]);
        }
    }
    // Modal
}
