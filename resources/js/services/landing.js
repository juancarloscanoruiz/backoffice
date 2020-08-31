//JQUERY
import $ from "jquery";

import {
    editAttributeProgram,

} from "./generalSchedule.js";


//Configraciones para la librería de Cleave JS
import {
    calendarSlick
} from "../config/slick.js";

import {
    createSlickSlider,
    createCalendarDays
} from "../vendor/slick.js";

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
        cache: false,
        url: "landing/update-programming-carrusel",
        beforeSend: function () {
            $(".modal-programming-carousel .modal-content").append(
                `<div class="loader-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
        },
        success: function (result) {

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
        cache: false,
        beforeSend: function () {
            $(".modal-edit-icons .modal-content").append(
                `<div class="loader-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
        },
        url: "landing/updateLandingLogo",
        success: function (result) {
            let json = JSON.parse(result);
            if (json.code == 200) {
                $(".loader-container").remove();
                $(".modal-edit-icons").modal("hide");
            }
        }
    });
}



function updateImageProgramOfLanding(data) {
    $.ajax({
        type: "POST",
        data: data,
        processData: false, //esto es para poder pasar el archivo
        contentType: false, //esto es para poder pasar el archivo
        cache: false,
        url: "landing/updateImageProgram",
        success: function (result) {
            console.log(result);
        }
    });
}

function getChapterInfo(data) {
    $.ajax({
        type: "GET",
        url: "landing/get-chapter-info/" + data,
        cache: false,
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
            let data = JSON.parse(result);
            $('.loader-view-container').remove();
            $('.loader-container').remove();
            let date = new Date();
            /* Número de días del mes actual */
            let currentMonthDays = getDays(1);

            /* Número de mes actual*/
            let currentMonth = date.getUTCMonth();


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

            //Siguiente mes
            let nextMonth = ("0" + (dateUTC.getUTCMonth() + 2)).slice(-2)

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
                            <li class="programming-item" date="${yearUTC}-${nextMonth}-0${i}" section_id="${data.program.section_id}">
                                <div class="day">
                                    <p class="day-text">${getDayName(currentMonth + 1, i)}</p>
                                    <p class="day-number">${i}</p>
                                </div>
                            </li>
                        `;
                    } else {
                        daysSlider += `
                            <li class="programming-item" date="${yearUTC}-${nextMonth}-${i}" section_id="${data.program.section_id}">
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
            const dropdownTitles = $("#prog_titulo_programa")
            dropdownTitles.selectpicker('destroy');
            dropdownTitles.selectpicker();

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
                editAttributeProgram(chapter_id, key, keyValue);
            });

            let imageTriangle = `
            <img src="./images/triangle.svg" alt="" class="position-absolute cursor-pointer dropimg">
        `;
            $('.edit-program-image .bootstrap-select').append(imageTriangle);
            $('.dropimg').click(function () {
                dropdownTitles.selectpicker('toggle');
            })

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
            //End if

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

function newProgram(landing, schedule) {
    $.ajax({
        type: "POST",
        data: {
            schedule: schedule,
            landing: landing
        },
        cache: false,

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
            let data = JSON.parse(result);
            getChapterInfo(data.chapter_id);
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
        cache: false,
        beforeSend: function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
        },
        url: "landing/getProgramming",
        success: function (result) {
            $('.loader-view-container').remove();
            let data = JSON.parse(result);

            if (data.id_status >= 1) {

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

                    editAttributeProgram(chapter_id, key, keyValue);
                });
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

                $("#edit-genre-container .filter-option-inner-inner").text(data.program.program.genre);

                $('.available').click(function () {
                    let channel = $(this).attr("section");
                    switch (channel) {
                        case "1":
                            channel = "Claro Canal";
                            break;
                        case "2":
                            channel = "Concert Channel";
                            break;
                        case "3":
                            channel = "Claro Cinema";
                            break;

                        default:
                            break;
                    }
                    let schedule = $(this).attr("schedule");
                    newProgram(channel, schedule);
                    // getProgramming(date, section, schedule)
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
            } else {
                newProgramByDate(section, date, time);
                //getProgramming(date, section, time);
            }
        }
    })
}

function newProgramByDate(section, date, time) {
    $.ajax({
        type: "POST",
        data: {
            day: date,
            landing: section,
            time: time
        },
        cache: false,
        beforeSend: function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
        },
        url: "landing/newProgramByDate",
        success: function (result) {
            $('.loader-view-container').remove();
            let data = JSON.parse(result);
            getChapterInfo(data.chapter_id);
        }
    });
}


//Landing concert channel
function getContentConcertChannelHeader() {

    $.ajax({
        type: "POST",
        cache: false,
        beforeSend: function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                        <img src="./images/loader.gif" class="loader"/>
                    </div>`
            );
        },
        url: "landing/concertChannel",
        success: function (result) {
            let data = JSON.parse(result);
            console.log(data);
            if (data.code == 200) {
                //Título en header de concert channel color blanco
                let headerTitle1 = $('.modal-header-concert-channel .modal-header-title-1');
                //Título en header de concert channel color azul
                let headerTitle2 = $('.modal-header-concert-channel .modal-header-title-2');
                headerTitle1.val(data.data.block_2_title_1);
                headerTitle2.val(data.data.block_2_title_2);
                $('.modal-header-concert-channel .modal-header-button-title').val(data.data.block_2_button_title);
                $('.modal-header-concert-channel .modal-header-button-title').text(data.data.block_2_button_title);
                $('.modal-header-concert-channel .modal-header-button-link').val(data.data.block_2_button_url);
                if (data.data.block_2_icon_channel) {
                    $(".label-no-image").remove();
                }
                $('#icon_canal_claro_edit').attr("src", data.data.block_2_icon_channel);
                //Mostramos el modal
                $('.modal-header-concert-channel').modal("show");
                //Eliminamos
                $('.loader-view-container').remove();

            }

        }
    })
}

function getContentConcertChannelBlockHeader3() {
    $.ajax({
        type: "POST",
        cache: false,
        beforeSend: function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                        <img src="./images/loader.gif" class="loader"/>
                    </div>`
            );
        },
        url: "landing/concertChannel",
        success: function (result) {
            let data = JSON.parse(result);
            if (data.code == 200) {
                let landingTitle = $('.modal-titles .section-landing-title');
                let landingSubtitle = $('.modal-titles .section-landing-subtitle');
                landingTitle.attr("key", "block_3_title");
                landingSubtitle.attr("key", "block_3_subtitle");
                landingTitle.val(data.data.block_3_title);
                landingSubtitle.val(data.data.block_3_subtitle);
                $('.modal-titles').modal("show");

                $('.loader-view-container').remove();
            }
        }
    })
}

function getContentConcertChannelBlock4One() {
    $.ajax({
        type: "POST",
        cache: false,
        beforeSend: function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                        <img src="./images/loader.gif" class="loader"/>
                    </div>`
            );
        },
        url: "landing/concertChannel",
        success: function (result) {
            let data = JSON.parse(result);
            if (data.code == 200) {
                let landingTitle = $('.modal-titles .section-landing-title');
                let landingSubtitle = $('.modal-titles .section-landing-subtitle');
                landingTitle.attr("key", "block_4_carrusel_1_title");
                landingSubtitle.attr("key", "block_4_carrusel_1_subtitle");
                landingTitle.val(data.data.block_4_carrusel_1_title);
                landingSubtitle.val(data.data.block_4_carrusel_1_subtitle);
                $('.modal-titles').modal("show");

                $('.loader-view-container').remove();
            }
        }
    })
}

function getContentConcertChannelBlock4OTwo() {
    $.ajax({
        type: "POST",
        cache: false,
        beforeSend: function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                        <img src="./images/loader.gif" class="loader"/>
                    </div>`
            );
        },
        url: "landing/concertChannel",
        success: function (result) {
            let data = JSON.parse(result);
            if (data.code == 200) {
                let landingTitle = $('.modal-titles .section-landing-title');
                let landingSubtitle = $('.modal-titles .section-landing-subtitle');
                landingTitle.attr("key", "block_4_carrusel_2_title");
                landingSubtitle.attr("key", "block_4_carrusel_2_subtitle");
                landingTitle.val(data.data.block_4_carrusel_2_title);
                landingSubtitle.val(data.data.block_4_carrusel_2_subtitle);
                $('.modal-titles').modal("show");
                $('.loader-view-container').remove();
            }
        }
    })
}

//Obtenemos el video promocional en el landing de concert channel
function getConcertChannelPromo() {
    $.ajax({
        type: "POST",
        beforeSend: function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                        <img src="./images/loader.gif" class="loader"/>
                    </div>`
            );
        },
        url: "landing/concertChannel",
        success: function (result) {
            let json = JSON.parse(result);
            if (json.code == 200) {
                $(".modal-promos-concert").modal("show");
                $('#upload-concert-promo-button').attr("key", "block_3_video_url");
                //Checamos si existe el vídeo de promoción en concert channel
                if (json.data.block_3_video_url) {
                    let promoContainer = $('#concert-promo-container');
                    //Verificamos si la url es de una imagen
                    if (json.data.block_3_video_url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
                        promoContainer.html(`
                        <img src="${json.data.block_3_video_url}" alt="" class="d-flex w-100" id="promo-image-concert">
                        `);
                    } else {
                        //La url es de un video
                        promoContainer.html(`
                        <video class="w-100 h-100" id="video-promo-concert" style="display: block" controls muted autoplay>
                        <source src="${json.data.block_3_video_url}" type="video/mp4">
                         </video>
                        `);

                    }

                } else {
                    promoContainer.html(`
                    <img src="./images/synopsis/background-promo.svg" alt="" class="d-flex w-100" id="promo-image-concert">
                    `);

                }
            }
            $('.loader-view-container').remove();
        }
    })
}

function editHeaderLanding(data) {
    $.ajax({
        type: "POST",
        cache: false,
        data: data,
        processData: false,
        contentType: false,
        beforeSend: function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
        },
        url: "landing/editHeaderLanding",
        success: function (result) {
            let json = JSON.parse(result);
            console.log(json);
            if (json.code == 200) {
                $('.modal-header-concert-channel').modal("hide");
            }
            $('.loader-view-container').remove();
        }
    })
}

function editElementLanding(data) {
    $.ajax({
        type: "POST",
        data: data,
        beforeSend: function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
        },
        url: "landing/editElementLanding",
        success: function (result) {
            console.log(result);
            $('.loader-view-container').remove();
        }
    })
}

function editPromoLanding(data) {
    $.ajax({
        type: "POST",
        data: data,
        processData: false,
        contentType: false,
        beforeSend: function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
        },
        url: "landing/editElementLanding",
        success: function (result) {
            console.log(result);
            let json = JSON.parse(result)
            if (json.code == 200) {
                $(".modal-promos-concert").modal("hide");

            }
            $('.loader-view-container').remove();
        }
    })
}

//Conseguir la programación de un landing por primera vez, abriendo el modal con programas
function getProgrammingLanding(date) {
    $.ajax({
        type: "POST",
        beforeSend: function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
        },
        data: {
            date

        },
        url: "landing/getProgrammingLanding",
        success: function (result) {
            let json = JSON.parse(result);
            console.log(json);
            if (json.code == 200) {
                let concertChannelProgramming = json.data[0].programing[0].programs;
                if (concertChannelProgramming.length > 0) {
                    let programConcert = ""
                    for (const program of concertChannelProgramming) {
                        programConcert += `
                        <div class="p-3 border-t border-r border-l border-b position-relative mb-3">
                        <img src="./images/pencil.svg" alt="" class="pencil-edit programming-pencil-concert"
                            chapter_id="${program.chapter_id}">
                        <div class="schedule-container col-12 p-5 mx-auto mt-0">
                            <p class="mb-3 h3 schedule-title a-text-plus a-text-black-brown-two">
                                ${program.Program_Title} - ${program.chapter_title}
                            </p>
                            <div class="schedule-item-body">
                                <div class="schedule-poster">
                                    <div class="poster">
                                        <div class="thumbnail-edit" _id="${program.chapter_id}">
                                            <img src="${program.image}"
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
                                                class="button-none add-favorites programing-button" type="button" _id="">
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
                                            id="synopsis-edi">${program.sinopsis}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        `
                    }
                    $('.concert-programming-contanier').html(programConcert);
                }
                $(".modal-programming-landing").modal("show");
                let calendarSlider2 = $(".calendar-slider2");
                createCalendarDays(calendarSlider2, "programming-concert-landing");
                try {
                    calendarSlider2.slick("unslick");
                    createSlickSlider(calendarSlider2, calendarSlick);
                } catch (error) {
                    createSlickSlider(calendarSlider2, calendarSlick);
                }
            }
            $('.loader-view-container').remove();
        }
    })
}


//Conseguir únicamente programas de un landing, sin mostrar el modal
function getProgramsLanding(date) {
    $.ajax({
        type: "POST",
        beforeSend: function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
        },
        data: {
            date

        },
        url: "landing/getProgrammingLanding",
        success: function (result) {
            let json = JSON.parse(result);
            console.log(json);
            if (json.code == 200) {
                let concertChannelProgramming = json.data[0].programing[0].programs;
                if (concertChannelProgramming.length > 0) {
                    let programConcert = "";
                    for (const program of concertChannelProgramming) {
                        programConcert += `
                        <div class="p-3 border-t border-r border-l border-b position-relative mb-3">
                        <img src="./images/pencil.svg" alt="" class="pencil pencil-edit"
                            chapter_id="${program.chapter_id}">
                        <div class="schedule-container col-12 p-5 mx-auto mt-0">
                            <p class="mb-3 h3 schedule-title a-text-plus a-text-black-brown-two">
                                ${program.Program_Title} - ${program.chapter_title}
                            </p>
                            <div class="schedule-item-body">
                                <div class="schedule-poster">
                                    <div class="poster">
                                        <div class="thumbnail-edit" _id="${program.chapter_id}">
                                            <img src="${program.image}"
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
                                                class="button-none add-favorites programing-button" type="button" _id="">
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
                                            id="synopsis-edi">${program.sinopsis}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        `
                    }
                    $('.concert-programming-contanier').html(programConcert);
                }
            }
            $('.loader-view-container').remove();
        }
    })
}

// CLARO CANAL
function getModalsCanalClaro(type) {
    $.ajax({
        type: "GET", url: "landing/header",
        success: function (result) {
            let obj = JSON.parse(result); switch (type) {
                // GET HEADER                
                case "claro-header":
                    $('#img-header-claro').html('<img src="' + obj.data.block_2_icon_channel + '">')
                    $('.inp-text-modal-1').val(obj.data.block_2_title_1)
                    $('.inp-text-modal-2').val(obj.data.block_2_title_2)
                    $('.inp-text-modal-3').val(obj.data.block_2_button_title)
                    break
                // GET HEADER                
                // GET TITLE               
                case "claro-title":
                    $('.inp-title-modal').val(obj.data.block_3_title)
                    $(".inp-title-modal").attr("key", "block_3_title");
                    $('.inp-sub-title-modal').val(obj.data.block_3_subtitle)
                    $('.inp-sub-title-modal').attr("block_3_subtitle")
                    break
                // GET TITLE
                // GET PROMO                
                case "claro-promo":
                    $('#back-promo-claro').html('<video autoplay controls class="img-back-modal img-promo" src="' + obj.data.block_3_video_url + '" /></video>')
                    break
                // GET PROMO         
                // GET TITLE CARRUSEL 1     
                case "claro-carrusel-title":
                    $('.inp-title-modal').val(obj.data.block_4_carrusel_1_title)
                    $('.inp-title-modal').attr("block_4_carrusel_1_title")
                    $('.inp-sub-title-modal').val(obj.data.block_4_carrusel_1_subtitle)
                    $('.inp-sub-title-modal').attr("block_4_carrusel_1_subtitle")
                    break
                // GET TITLE CARRUSEL 1       
                // GET TITLE CARRUSEL 1    
                case "claro-carrusel-title2":
                    $('.inp-title-modal').val(obj.data.block_4_carrusel_2_title)
                    $('.inp-title-modal').attr("block_4_carrusel_2_title")
                    $('.inp-sub-title-modal').val(obj.data.block_4_carrusel_2_subtitle)
                    $('.inp-sub-title-modal').attr("block_4_carrusel_2_subtitle")
                    break
                // GET TITLE CARRUSEL 1     
            }
            fileReader.readAsDataURL(objFileInput.files[0]);
        }
    })
}

function editHeaderLandingClaro(data) {
    $.ajax({
        type: "POST",
        cache: false,
        data: data,
        processData: false,
        contentType: false,
        beforeSend: function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
        },
        url: "landing/editHeaderLandingClaro",
        success: function (result) {
            let json = JSON.parse(result);
            console.log(json);
            if (json.code == 200) {
                $('#modal-header').modal("hide");
            }
            $('.loader-view-container').remove();
        }
    })
}

function editElementLandingClaro(data) {
    $.ajax({
        type: "POST",
        data: data,
        beforeSend: function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
        },
        url: "landing/editElementLandingClaro",
        success: function (result) {
            let json = JSON.parse(result);
            console.log(json);
            if (json.code == 200) {
                $('#modal-title').modal("hide");
            }
            $('.loader-view-container').remove();
        }
    })
}

function editPromoLandingClaro(data) {
    $.ajax({
        type: "POST",
        cache: false,
        data: data,
        processData: false,
        contentType: false,
        beforeSend: function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
        },
        url: "landing/editPromoLandingClaro",
        success: function (result) {
            let json = JSON.parse(result);
            console.log(json);
            if (json.code == 200) {
                $('#modal-promo').modal("hide");
            }
            $('.loader-view-container').remove();
        }
    })
}

// CLARO CANAL

export {
    getChapterInfo,
    updateImagesOfProgrammingSlider,
    updateLogosOfLanding,
    updateImageProgramOfLanding,
    getProgramming,
    getContentConcertChannelHeader,
    getContentConcertChannelBlockHeader3,
    getContentConcertChannelBlock4One,
    getContentConcertChannelBlock4OTwo,
    editHeaderLanding,
    editElementLanding,
    getConcertChannelPromo,
    editPromoLanding,
    getProgrammingLanding,
    getProgramsLanding,
    getModalsCanalClaro,
    editHeaderLandingClaro,
    editElementLandingClaro,
    editPromoLandingClaro
};
