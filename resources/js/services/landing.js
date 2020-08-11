//JQUERY
import $ from "jquery";

import {
    editAttributeProgram,

} from "./generalSchedule.js";

function getMonth(idMonth) {
    let date = new Date();
    let month = date.getUTCMonth() + idMonth;
    return month;
}

function getNextMonth(month) {
    let date = new Date();
    return new Date(date.getUTCFullYear(), date.getUTCMonth() + month, getUTCDate());
}

function getDays(month) {
    let date = new Date();
    return new Date(date.getUTCFullYear(), date.getUTCMonth() + month, 0).getUTCDate();
}

function getDay() {
    let date = new Date();
    return date.getUTCDate();
}

function getDayName(month, day) {
    let date = new Date();
    let currentDay = new Date(date.getUTCFullYear(), month, day).getUTCDay();

    let days = ["DOM", "LUN", "MAR", "MIER", "JUE", "VIE", "SAB"];

    return days[currentDay];
}

function getYear() {
    let date = new Date();
    return date.getFullYear();
}

function getMonthAndYear(month) {
    let date = new Date();
    let year = date.getUTCFullYear();
    let months = [
        "ENERO",
        "FEBRERO",
        "MARZO",
        "ABRIL",
        "MAYO",
        "JUNIO",
        "JULIO",
        "AGOSTO",
        "SEPTIEMBRE",
        "OCTUBRE",
        "NOVIEMBRE",
        "DICIEMBRE"
    ];

    return `${months[month]} ${year}`;
}


function updateImagesOfProgrammingSlider(data) {
    $.ajax({
        type: "POST",
        data: data,
        processData: false, //esto es para poder pasar el archivo
        contentType: false, //esto es para poder pasar el archivo
        url: "landing/update-programming-carrusel",
        beforeSend: function () {
            $(".modal-programming-carousel .modal-content").append(
                `<div class="loader-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
        },
        success: function (result) {
            console.log(result);
            $(".loader-container").remove();
            let json = JSON.parse(result);
            if (json.code == 200) {
                $(".modal-programming-carousel").modal("hide");
            } else {
                $(".loader-container").remove();
                $(".modal-programming-carousel").modal("hide");

            }
        }
    }).fail(function (e) {
        $(".loader-container").remove();
        $(".modal-programming-carousel").modal("hide");
        console.log(e);
    });;
}

function updateLogosOfLanding(data) {
    $.ajax({
        type: "POST",
        data: data,
        processData: false, //esto es para poder pasar el archivo
        contentType: false, //esto es para poder pasar el archivo
        beforeSend: function () {
            $(".modal-edit-icons .modal-content").append(
                `<div class="loader-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
        },
        url: "landing/updateLandingLogo",
        success: function (result) {
            console.log(result);
            let json = JSON.parse(result);
            if (json.code == 200) {
                $(".loader-container").remove();
                $(".modal-edit-icons").modal("hide");
            }
        }
    });
}

function getChapterInfo(data) {
    $.ajax({
        type: "GET",
        url: "landing/get-chapter-info/" + data,
        beforeSend: function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
            $(".modal-edit-program .modal-content").append(
                `<div class="loader-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
        },

        success: function (result) {
            $('.loader-view-container').remove();
            $('.loader-container').remove();
            let data = JSON.parse(result);
            console.log(data);

            let date = new Date();

            /* Número de días del mes actual */
            let currentMonthDays = getDays(1);

            /* Número de mes actual*/
            let currentMonth = date.getUTCMonth();

            /*Número de días del mes siguiente */
            let nextMonth = getDays(2);

            /* Número de días restantes del mes actual */
            let numberLastDays = getDays(1) - getDay();

            var totalDaysSlider = 0;

            var daysSlider = "";
            //Pegamos el nombre del mes y el año
            $("#slider-calendar-current-date").html(getMonthAndYear(date.getMonth()));
            //Obtenemos la hora GMT
            let dateUTC = new Date();
            //Día en horario central
            let dayUTC = "";
            //Mes en horario central
            let monthUTC = "";
            //Año en horario central
            let yearUTC = dateUTC.getUTCFullYear();

            if (dateUTC.getUTCMonth() < 10) {
                monthUTC = `0${dateUTC.getUTCMonth() + 1}`
            } else {
                monthUTC = dateUTC.getUTCMonth() + 1;
            }
            if (dateUTC.getUTCDate() < 10) {
                dayUTC = `0${dateUTC.getUTCDate()}`
            } else {
                dayUTC = dateUTC.getUTCDate();
            }
            if (numberLastDays <= 15) {
                totalDaysSlider = getDays(2) + (getDays(1) - getDay());
                //Días del primer mes
                for (let i = getDay(); i <= getDays(1); i++) {

                    //Día actual
                    if (i == getDay()) {
                        if (i < 10) {
                            daysSlider += `
                            <li
                            0
                        )}" class="programming-item programming-item-active" date="${yearUTC}-${monthUTC}-0${i}" section_id="${data.program.section_id}">
                            <div class="day">
                                <p class="day-text">${getDayName(currentMonth, i)}</p>
                                <p class="day-number">${i}</p>
                            </div>
                            </li>
                        `;
                        } else {
                            daysSlider += `
                            <li
                            0
                        )}" class="programming-item programming-item-active" date="${yearUTC}-${monthUTC}-${i}" section_id="${data.program.section_id}">
                            <div class="day">
                                <p class="day-text">${getDayName(currentMonth, i)}</p>
                                <p class="day-number">${i}</p>
                            </div>
                            </li>
                        `;
                        }

                    } else {
                        if (i < 10) {
                            //Días restantes
                            daysSlider += `
                        <li class="programming-item" date="${yearUTC}-${monthUTC}-0${i}" section_id="${data.program.section_id}">
                        <div class="day">
                            <p class="day-text">${getDayName(currentMonth, i)}</p>
                            <p class="day-number">${i}</p>
                        </div>
                        </li>

                         `;
                        } else {
                            //Días restantes
                            daysSlider += `
                        <li class="programming-item" date="${yearUTC}-${monthUTC}-${i}" section_id="${data.program.section_id}">
                        <div class="day">
                            <p class="day-text">${getDayName(currentMonth, i)}</p>
                            <p class="day-number">${i}</p>
                        </div>
                        </li>

                         `;
                        }

                    }
                }

                //Días del mes siguiente
                for (let i = 1; i <= getDays(2); i++) {
                    if (i < 10) {
                        daysSlider += `
                        <li class="programming-item" date="${yearUTC}-${dateUTC.getUTCMonth + 2}-0${i}" section_id="${data.program.section_id}">
                            <div class="day">
                                <p class="day-text">${getDayName(currentMonth + 1, i)}</p>
                                <p class="day-number">${i}</p>
                            </div>
                        </li>
                    `;
                    } else {
                        daysSlider += `
                        <li class="programming-item" date="${yearUTC}-${dateUTC.getUTCMonth + 2}-${i}" section_id="${data.program.section_id}">
                            <div class="day">
                                <p class="day-text">${getDayName(currentMonth + 1, i)}</p>
                                <p class="day-number">${i}</p>
                            </div>
                        </li>
                    `;
                    }

                }
            } else {

                //En caso de que al mes le falten más de 15 días para terminar
                totalDaysSlider = currentMonthDays;
                for (let i = getDay(); i <= totalDaysSlider; i++) {
                    if (i == getDay()) {
                        if (i < 10) {
                            //Día actual activo
                            daysSlider += `
                            <li class="programming-item programming-item-active" date="${yearUTC}-${monthUTC}-0${i}" section_id="${data.program.section_id}">
                            <div class="day">
                                <p class="day-text">${getDayName(currentMonth, i)}</p>
                                <p class="day-number">${i}</p>
                            </div>
                            </li>
                        `;
                        } else {
                            //Día actual activo
                            daysSlider += `
                            <li class="programming-item programming-item-active" date="${yearUTC}-${monthUTC}-${i}" section_id="${data.program.section_id}">
                            <div class="day">
                                <p class="day-text">${getDayName(currentMonth, i)}</p>
                                <p class="day-number">${i}</p>
                            </div>
                            </li>
                        `;
                        }


                    } else {
                        if (i < 10) {
                            //Días siguientes
                            daysSlider += `
                        <li class="programming-item" date="${yearUTC}-${monthUTC}-${i}" section_id="${data.program.section_id}">
                        <div class="day">
                            <p class="day-text">${getDayName(currentMonth, i)}</p>
                            <p class="day-number">${i}</p>
                        </div>
                        </li>
                        `;
                        } else {
                            //Días siguientes
                            daysSlider += `
                                <li class="programming-item" date="${yearUTC}-${monthUTC}-${i}" section_id="${data.program.section_id}">
                                <div class="day">
                                    <p class="day-text">${getDayName(currentMonth, i)}</p>
                                    <p class="day-number">${i}</p>
                                </div>
                                </li>
                                `;
                        }


                    }
                }

            }

            $('.calendar-slider').html(daysSlider);
            //End caledario

            $('.programming-item').click(function () {
                let date = $(this).attr("date")
                let section = $(this).attr("section_id");
                let time = $('.current').attr("schedule");
                console.log(date, section, time);
                getProgramming(date, section, time);
            })

            let modaTitle = $('.edit-program-modal-title');
            $('.edit-program-data-container').attr("chapter_id", data.program.chapter_id);
            $('.edit-program-data-container').attr("section", data.program.section_id);
            $('.edit-program-data-container').attr("program", data.program.program.title);
            modaTitle.attr("chapter_id", data.program.chapter_id)
            modaTitle.attr("section", data.program.section_id)
            modaTitle.attr("program", data.program.program.title)
            $('.thumbnail-header1').attr("title", data.program.title)
            //thermometer
            let thermometer = data.thermometer;
            //Container completo que representa una hora en el termometro
            let itemThermometer = "";
            //Container que representa media hora en el termómetro
            let itemHalfThermometer = "";
            let index = 1
            //Recorremos el terommétro
            for (const key in thermometer) {
                let status = thermometer[key].status;
                let classStatus = "";
                switch (status) {
                    case "Disponible":
                        classStatus = "available";
                        break;
                    case "Ocupado":
                        classStatus = "unavailable";
                        break;
                    default:
                        classStatus = "current";
                        break;
                }
                itemHalfThermometer += `
                    <div schedule="${key}" class="w-50 h-100 thermometer-half-item cursor-pointer ${classStatus}" status="${thermometer[key].status}" section="${data.program.section_id}" chapter_id="${thermometer[key].chapter_id}" style="background: ${thermometer[key].color};"></div>
                `;

                if (index % 2 == 0) {
                    itemThermometer += `
                        <li class="thermometer-schedule-item mr-1 d-flex align-items-center">
                            ${itemHalfThermometer}
                        </li>
                        `;
                    itemHalfThermometer = "";
                }
                index++;
            }

            //Insertamos el contenido en el termómetro
            $('.thermometer-schedule-list').html(itemThermometer);
            //Insertamos la imagen del capítulo
            if (data.image_program) {
                $('.edit-program-icon-image').attr("src", "./images/basic-icons/pencil-edit-teal.svg").css({
                    width: "80px",
                    "margin-bottom": "16px"
                });
            }
            $('.edit-image-program').attr("src", data.image_program);
            //Catalogo de programas
            let options = "";
            data.program_catalogue.forEach(program => {
                options += `
                <option class="edit-program-input text-uppercase a-text-black-warmrey  backwhite h2"
                value="${program.title}">${program.title}</option>
                `
            });
            $('.programs-catalogue').append(options);
            //selectpicker pra ls titulos de los programas
            //selectpicker pra ls titulos de los programas
            $("#prog_titulo_programa").selectpicker('destroy');
            $("#prog_titulo_programa").selectpicker();
            let selectheader = $(".thumbnail-header1");
            selectheader.on("hide.bs.select", function () {
                let keyValue = "";
                let key = $("#prog_titulo_programa").attr("key");
                let chapter_id = $(".edit-program-data-container").attr(
                    "chapter_id"
                );
                if ($(this).val()) {
                    keyValue = $(this).val();
                } else {
                    $(this).val($('#prog_titulo_programa .filter-option-inner-inner').text());
                    keyValue = $(this).val();
                }
                console.log(keyValue);
                editAttributeProgram(chapter_id, key, keyValue);
            });

            data
            //Genres
            let optionGenre = ""
            data.genres.forEach(genre => {
                optionGenre += `
                <option value="${genre.title}">${genre.title}</option>
                `
            });
            $('.list1').append(optionGenre);
            $(".list1").selectpicker('destroy');
            $(".list1").selectpicker({
                filter: true,
                multipleSeparator: ", "
            });
            let editProgramLandingGenres = "";
            let selectGenres = $("#edit-program-genres");
            //Verificamos si el usuario ha seleccionado un género o categoría
            selectGenres.on("change", function () {
                //Obtenemos los valores del selectpicker
                let selected = $(this).val();
                //Obtenemos el número de valores que hemos obtenido del arreglo
                let selectedLength = selected.length;
                editProgramLandingGenres = "";
                for (let index = 0; index < selectedLength; index++) {
                    //Si es la primera palabra o la última, no agregamos una coma
                    if (selectedLength - 1 == index) {
                        editProgramLandingGenres += `${selected[index]}`;
                    } else {
                        editProgramLandingGenres += `${selected[index]},`;
                    }
                }
                console.log("Géneros agregados: " + editProgramLandingGenres);
            });
            $("#edit-genre-container .filter-option-inner-inner").text(data.program.program.genre);
            //Evento para cuando cerramos el selectpicker
            selectGenres.on("hide.bs.select", function () {
                let chapterId = $(".edit-program-data-container").attr(
                    "chapter_id"
                );
                //Obtenemos la key
                let key = $("#edit-program-genres").attr("key");
                //Obtenemos los géneros que pudo haber seleccionado el usuario
                let keyValue = editProgramLandingGenres;
                //Hacemos la petición

                editAttributeProgram(chapterId, key, keyValue);
            });

            $('.available').click(function () {
                let section = $(this).attr("section");
                switch (section) {
                    case "1":
                        section = "Claro Canal";
                        break;
                    case "2":
                        section = "Concert Channel";
                        break;
                    case "3":
                        section = "Claro Cinema";
                        break;

                    default:
                        break;
                }
                let schedule = $(this).attr("schedule");
                newProgram(section, schedule);
            });

            //Verificamos si el programa está en algunas de las secciones del landing
            switch (data.program.in_landing) {
                case 0:
                    $('.edit-landing-no').prop("checked", true);
                    $('.edit-carrusel-1').prop("checked", false);
                    $('.edit-carrusel-2').prop("checked", false);
                    break;
                case 1:
                    $('.edit-landing-yes').prop("checked", true);
                    $('.edit-carrusel-1').prop("checked", true);
                    break;
                case 2:
                    $('.edit-landing-yes').prop("checked", true);
                    $('.edit-carrusel-2').prop("checked", true);
                default:
                    break;
            }

            if (data.program.in_landing_begin) {
                let landingBeginDateTime = data.program.in_landing_begin.split(" ");
                let fullDate = landingBeginDateTime[0].split("-")
                $('.edit-landing-date-begin').val(`${fullDate[2]}-${fullDate[1]}-${fullDate[0]}`)
                if (landingBeginDateTime[1] == "00:00:00") {
                    $('.edit-landing-time-begin').val("");
                } else {
                    $('.edit-landing-time-begin').val(landingBeginDateTime[1])
                }


            }
            if (data.program.in_landing_expiration) {
                let landingExpirationDateTime = data.program.in_landing_expiration.split(" ");
                let fullDate = landingExpirationDateTime[0].split("-")
                $('.edit-landing-date-end').val(`${fullDate[2]}-${fullDate[1]}-${fullDate[0]}`);
                if (landingExpirationDateTime[1] == "00:00:00") {
                    $('.edit-landing-time-end').val("");
                } else {
                    $('.edit-landing-time-end').val(landingExpirationDateTime[1]);
                }

            }
            //Verficar si el programa se encuentra en el home
            if (data.program.in_home == 0) {
                $('.edit-in-home-no').prop("checked", true)
            } else {
                $('.edit-in-home-yes').prop("checked", true)
            }
            if (data.program.in_home_begin) {
                let homeBeginDateTime = data.program.in_home_begin.split(" ");
                let fullDate = homeBeginDateTime[0].split("-")
                $('.edit-home-date-begin').val(`${fullDate[2]}-${fullDate[1]}-${fullDate[0]}`)
                if (homeBeginDateTime[1] == "00:00:00") {
                    $('.edit-home-time-begin').val("");
                } else {
                    $('.edit-home-time-begin').val(homeBeginDateTime[1]);
                }
            }

            if (data.program.in_home_expiration) {
                let homeExpirationDateTime = data.program.in_home_expiration.split(" ");
                let fullDate = homeExpirationDateTime[0].split("-")
                $('.edit-home-date-end').val(`${fullDate[2]}-${fullDate[1]}-${fullDate[0]}`);
                if (homeExpirationDateTime[1] == "00:00:00") {
                    $('.edit-home-time-end').val("");
                } else {
                    $('.edit-home-time-end').val(homeExpirationDateTime[1])
                }
            }

            //Schedule Item Date Time
            let scheduleItemDate = data.program.day.split("-");
            $('.edit-schedule-date').val(`${scheduleItemDate[2]}-${scheduleItemDate[1]}-${scheduleItemDate[0]}
                ${$('.edit-schedule-item-time').val(data.program.hour)}`);

            //Synopsis
            $('.edit-program-textarea').val(data.program.synopsis);
            //Season
            $('.edit-program-season').val(data.program.season);
            //Program episode number
            $('.edit-episode-number').val(data.program.episode_number);
            //Year
            $('.edit-year-produced').val(data.program.program.year);
            //Subtitle
            $('.edit-program-subtitle').val(data.program.subtitle);
            //Rating
            $('.edit-rating-code').val(data.program.program.rating);
            //Duration
            $('.edit-program-duration').val(data.program.duration);
            //Subbed
            if (data.program.subbed == 0) {
                $('.edit-subbed-no').prop("checked", true);
            } else {
                $('.edit-subbed-yes').prop("checked", true);
            }
            //Dubbed
            if (data.program.dubbed == 0) {
                $('.edit-dubbed-no').prop("checked", true);
            } else {
                $('.edit-dubbed-yes').prop("checked", true);
            }

            //Audio 5.0
            if (data.program.audio5 == 0) {
                $('.edit-audio5-no').prop("checked", true);
            } else {
                $('.edit-audio5-yes').prop("checked", true);
            }

            $(".modal-edit-program").modal("show");
            setTimeout(() => {
                try {
                    $(".calendar-slider").slick("unslick");
                    $(".calendar-slider").slick({
                        slidesToShow: 11,
                        slidesToScroll: 11,
                        infinite: true,
                        dots: false,
                        centerMode: false,
                        arrows: true,
                        prevArrow: '<img src="./images/prev.png" class="arrow-prev" />',
                        nextArrow: '<img src="./images/next.png" class="arrow-next" />'
                    });
                } catch (error) {
                    console.log(error)
                    $(".calendar-slider").slick({
                        slidesToShow: 11,
                        slidesToScroll: 11,
                        infinite: true,
                        dots: false,
                        centerMode: false,
                        arrows: true,
                        prevArrow: '<img src="./images/prev.png" class="arrow-prev" />',
                        nextArrow: '<img src="./images/next.png" class="arrow-next" />'
                    });
                }


            }, 250);

        }
    });
}

function updateImageProgramOfLanding(data) {
    $.ajax({
        type: "POST",
        data: data,
        processData: false, //esto es para poder pasar el archivo
        contentType: false, //esto es para poder pasar el archivo
        url: "landing/updateImageProgram",
        success: function (result) {
            console.log(result);
        }
    });
}


function newProgram(landing, schedule) {
    $.ajax({
        type: "POST",
        data: {
            schedule: schedule,
            landing: landing
        },
        beforeSend: function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
        },
        url: "landing/newProgram",
        success: function (result) {
            $('.loader-view-container').remove();
            //Nuevo programa
            $('.edit-info-container').html(result);
            //Editar imagen
            $('#edit-image-horizontal').on("change", function () {
                let image = this.files[0];
                let editProgramDataContainer = $(".edit-program-data-container");
                let name = editProgramDataContainer.attr(
                    "program"
                );
                let landing = editProgramDataContainer.attr(
                    "section"
                );
                let chapter_id = editProgramDataContainer.attr(
                    "chapter_id"
                );

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
                            let date = $(".edit-landing-date-end").val().split("-");
                            value = `${date[2]}-${date[1]}-${date[0]} ${$(
                                ".edit-landing-time-end"
                            ).val()}`;
                            editAttributeProgram(chapter_id, key, value);
                            $(this).blur();
                        } else if (
                            $(".edit-landing-date-end").val() &&
                            !$(".edit-landing-time-end").val()
                        ) {
                            let date = $(".edit-landing-date-end").val().split("-");
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

            $(".list1").selectpicker('destroy');
            $(".list1").selectpicker({
                filter: true,
                multipleSeparator: ", "
            });

            $("#prog_titulo_programa").selectpicker('destroy');
            $("#prog_titulo_programa").selectpicker();
            let selectheader = $(".thumbnail-header1");
            selectheader.on("hide.bs.select", function () {
                let keyValue = "";
                let key = $("#prog_titulo_programa").attr("key");
                let chapter_id = $(".edit-program-data-container").attr(
                    "chapter_id"
                );
                if ($(this).val()) {
                    keyValue = $(this).val();
                } else {
                    $(this).val($('#prog_titulo_programa .filter-option-inner-inner').text());
                    keyValue = $(this).val();
                }
                console.log(keyValue);
                editAttributeProgram(chapter_id, key, keyValue);
            });

            let editProgramLandingGenres = "";
            let selectGenres = $("#edit-program-genres");
            //Verificamos si el usuario ha seleccionado un género o categoría
            selectGenres.on("change", function () {
                //Obtenemos los valores del selectpicker
                let selected = $(this).val();
                //Obtenemos el número de valores que hemos obtenido del arreglo
                let selectedLength = selected.length;
                editProgramLandingGenres = "";
                for (let index = 0; index < selectedLength; index++) {
                    //Si es la primera palabra o la última, no agregamos una coma
                    if (selectedLength - 1 == index) {
                        editProgramLandingGenres += `${selected[index]}`;
                    } else {
                        editProgramLandingGenres += `${selected[index]},`;
                    }
                }
                console.log("Géneros agregados: " + editProgramLandingGenres);
            });

            selectGenres.on("hide.bs.select", function () {
                let chapterId = $(".edit-program-data-container").attr(
                    "chapter_id"
                );
                //Obtenemos la key
                let key = $("#edit-program-genres").attr("key");
                //Obtenemos los géneros que pudo haber seleccionado el usuario
                let keyValue = editProgramLandingGenres;
                //Hacemos la petición

                editAttributeProgram(chapterId, key, keyValue);
            });
        }
    });
}

function getProgramming(date, section, time) {
    $.ajax({
        type: "POST",
        data: {
            date: date,
            section: section,
            time: time
        },
        beforeSend: function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
        },
        url: "landing/getProgramming",
        success: function (result) {

            let data = JSON.parse(result);
            console.log(data);
            let modaTitle = $('.edit-program-modal-title');
            $('.edit-program-data-container').attr("chapter_id", data.program.chapter_id);
            $('.edit-program-data-container').attr("section", data.program.section_id);
            $('.edit-program-data-container').attr("program", data.program.program.title);
            modaTitle.attr("chapter_id", data.program.chapter_id)
            modaTitle.attr("section", data.program.section_id)
            modaTitle.attr("program", data.program.program.title)
            $('.thumbnail-header1').attr("title", data.program.title)
            //thermometer
            let thermometer = data.thermometer;
            //Container completo que representa una hora en el termometro
            let itemThermometer = "";
            //Container que representa media hora en el termómetro
            let itemHalfThermometer = "";
            let index = 1
            //Recorremos el terommétro
            for (const key in thermometer) {
                let status = thermometer[key].status;
                let classStatus = "";
                switch (status) {
                    case "Disponible":
                        classStatus = "available";
                        break;
                    case "Ocupado":
                        classStatus = "unavailable";
                        break;
                    default:
                        classStatus = "current";
                        break;
                }
                itemHalfThermometer += `
                    <div schedule="${key}" class="w-50 h-100 thermometer-half-item cursor-pointer ${classStatus}" status="${thermometer[key].status}" section="${data.program.section_id}" chapter_id="${thermometer[key].chapter_id}" style="background: ${thermometer[key].color};"></div>
                `;

                if (index % 2 == 0) {
                    itemThermometer += `
                        <li class="thermometer-schedule-item mr-1 d-flex align-items-center">
                            ${itemHalfThermometer}
                        </li>
                        `;
                    itemHalfThermometer = "";
                }
                index++;
            }

            //Insertamos el contenido en el termómetro
            $('.thermometer-schedule-list').html(itemThermometer);

            if (data.image_program) {
                $('.edit-program-icon-image').attr("src", "./images/basic-icons/pencil-edit-teal.svg").css({
                    width: "80px",
                    "margin-bottom": "16px"
                });
            }
            $('.edit-image-program').attr("src", data.image_program);
            //Catalogo de programas
            let options = "";
            data.program_catalogue.forEach(program => {
                options += `
                <option class="edit-program-input text-uppercase a-text-black-warmrey  backwhite h2"
                value="${program.title}">${program.title}</option>
                `
            });
            $('.programs-catalogue').append(options);
            //selectpicker pra ls titulos de los programas
            //selectpicker pra ls titulos de los programas
            $("#prog_titulo_programa").selectpicker('destroy');
            $("#prog_titulo_programa").selectpicker();
            let selectheader = $(".thumbnail-header1");
            selectheader.on("hide.bs.select", function () {
                let keyValue = "";
                let key = $("#prog_titulo_programa").attr("key");
                let chapter_id = $(".edit-program-data-container").attr(
                    "chapter_id"
                );
                if ($(this).val()) {
                    keyValue = $(this).val();
                } else {
                    $(this).val($('#prog_titulo_programa .filter-option-inner-inner').text());
                    keyValue = $(this).val();
                }
                console.log(keyValue);
                editAttributeProgram(chapter_id, key, keyValue);
            });

            data
            //Genres
            let optionGenre = ""
            data.genres.forEach(genre => {
                optionGenre += `
                <option value="${genre.title}">${genre.title}</option>
                `
            });
            $('.list1').append(optionGenre);
            $(".list1").selectpicker('destroy');
            $(".list1").selectpicker({
                filter: true,
                multipleSeparator: ", "
            });
            let editProgramLandingGenres = "";
            let selectGenres = $("#edit-program-genres");
            //Verificamos si el usuario ha seleccionado un género o categoría
            selectGenres.on("change", function () {
                //Obtenemos los valores del selectpicker
                let selected = $(this).val();
                //Obtenemos el número de valores que hemos obtenido del arreglo
                let selectedLength = selected.length;
                editProgramLandingGenres = "";
                for (let index = 0; index < selectedLength; index++) {
                    //Si es la primera palabra o la última, no agregamos una coma
                    if (selectedLength - 1 == index) {
                        editProgramLandingGenres += `${selected[index]}`;
                    } else {
                        editProgramLandingGenres += `${selected[index]},`;
                    }
                }
                console.log("Géneros agregados: " + editProgramLandingGenres);
            });
            $("#edit-genre-container .filter-option-inner-inner").text(data.program.program.genre);
            //Evento para cuando cerramos el selectpicker
            selectGenres.on("hide.bs.select", function () {
                let chapterId = $(".edit-program-data-container").attr(
                    "chapter_id"
                );
                //Obtenemos la key
                let key = $("#edit-program-genres").attr("key");
                //Obtenemos los géneros que pudo haber seleccionado el usuario
                let keyValue = editProgramLandingGenres;
                //Hacemos la petición

                editAttributeProgram(chapterId, key, keyValue);
            });

            $('.available').click(function () {
                let section = $(this).attr("section");
                switch (section) {
                    case "1":
                        section = "Claro Canal";
                        break;
                    case "2":
                        section = "Concert Channel";
                        break;
                    case "3":
                        section = "Claro Cinema";
                        break;

                    default:
                        break;
                }
                let schedule = $(this).attr("schedule");
                newProgram(section, schedule);
            });

            //Verificamos si el programa está en algunas de las secciones del landing
            switch (data.program.in_landing) {
                case 0:
                    $('.edit-landing-no').prop("checked", true);
                    $('.edit-carrusel-1').prop("checked", false);
                    $('.edit-carrusel-2').prop("checked", false);
                    break;
                case 1:
                    $('.edit-landing-yes').prop("checked", true);
                    $('.edit-carrusel-1').prop("checked", true);
                    break;
                case 2:
                    $('.edit-landing-yes').prop("checked", true);
                    $('.edit-carrusel-2').prop("checked", true);
                default:
                    break;
            }

            if (data.program.in_landing_begin) {
                let landingBeginDateTime = data.program.in_landing_begin.split(" ");
                let fullDate = landingBeginDateTime[0].split("-")
                $('.edit-landing-date-begin').val(`${fullDate[2]}-${fullDate[1]}-${fullDate[0]}`)
                if (landingBeginDateTime[1] == "00:00:00") {
                    $('.edit-landing-time-begin').val("");
                } else {
                    $('.edit-landing-time-begin').val(landingBeginDateTime[1])
                }


            }
            if (data.program.in_landing_expiration) {
                let landingExpirationDateTime = data.program.in_landing_expiration.split(" ");
                let fullDate = landingExpirationDateTime[0].split("-")
                $('.edit-landing-date-end').val(`${fullDate[2]}-${fullDate[1]}-${fullDate[0]}`);
                if (landingExpirationDateTime[1] == "00:00:00") {
                    $('.edit-landing-time-end').val("");
                } else {
                    $('.edit-landing-time-end').val(landingExpirationDateTime[1]);
                }

            }
            //Verficar si el programa se encuentra en el home
            if (data.program.in_home == 0) {
                $('.edit-in-home-no').prop("checked", true)
            } else {
                $('.edit-in-home-yes').prop("checked", true)
            }
            if (data.program.in_home_begin) {
                let homeBeginDateTime = data.program.in_home_begin.split(" ");
                let fullDate = homeBeginDateTime[0].split("-")
                $('.edit-home-date-begin').val(`${fullDate[2]}-${fullDate[1]}-${fullDate[0]}`)
                if (homeBeginDateTime[1] == "00:00:00") {
                    $('.edit-home-time-begin').val("");
                } else {
                    $('.edit-home-time-begin').val(homeBeginDateTime[1]);
                }
            }

            if (data.program.in_home_expiration) {
                let homeExpirationDateTime = data.program.in_home_expiration.split(" ");
                let fullDate = homeExpirationDateTime[0].split("-")
                $('.edit-home-date-end').val(`${fullDate[2]}-${fullDate[1]}-${fullDate[0]}`);
                if (homeExpirationDateTime[1] == "00:00:00") {
                    $('.edit-home-time-end').val("");
                } else {
                    $('.edit-home-time-end').val(homeExpirationDateTime[1])
                }
            }

            //Schedule Item Date Time
            let scheduleItemDate = data.program.day.split("-");
            $('.edit-schedule-date').val(`${scheduleItemDate[2]}-${scheduleItemDate[1]}-${scheduleItemDate[0]}
                ${$('.edit-schedule-item-time').val(data.program.hour)}`);

            //Synopsis
            $('.edit-program-textarea').val(data.program.synopsis);
            //Season
            $('.edit-program-season').val(data.program.season);
            //Program episode number
            $('.edit-episode-number').val(data.program.episode_number);
            //Year
            $('.edit-year-produced').val(data.program.program.year);
            //Subtitle
            $('.edit-program-subtitle').val(data.program.subtitle);
            //Rating
            $('.edit-rating-code').val(data.program.program.rating);
            //Duration
            $('.edit-program-duration').val(data.program.duration);
            //Subbed
            if (data.program.subbed == 0) {
                $('.edit-subbed-no').prop("checked", true);
            } else {
                $('.edit-subbed-yes').prop("checked", true);
            }
            //Dubbed
            if (data.program.dubbed == 0) {
                $('.edit-dubbed-no').prop("checked", true);
            } else {
                $('.edit-dubbed-yes').prop("checked", true);
            }

            //Audio 5.0
            if (data.program.audio5 == 0) {
                $('.edit-audio5-no').prop("checked", true);
            } else {
                $('.edit-audio5-yes').prop("checked", true);
            }

            $('.loader-view-container').remove();
        }
    })
}

export {
    getChapterInfo,
    updateImagesOfProgrammingSlider,
    updateLogosOfLanding,
    updateImageProgramOfLanding,
    newProgram
};
