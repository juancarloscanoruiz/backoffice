//JQUERY
import $ from "jquery";

import {
    editAttributeProgram,

} from "./generalSchedule.js";

import {
    resetIframe
} from "../vendor/easyXDM.js";

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
                    $('#video-promo-concert').html(`<source src="${json.data.block_3_video_url}" type="video/mp4">`).css("display", "block");
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


function getProgrammingLanding() {
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
        url: "landing/getProgrammingLanding",
        success: function (result) {
            console.log(result);
            $('.loader-view-container').remove();
        }
    })

    // Canal Claro
    const LOADER = `<div class="loader-view-container" id="loader1">
        <img src="./images/loader.gif" class="loader" alt="">
        </div>`;

    let landingCanalClaro = {
        remote: `http://www.claronetworks.openofficedospuntocero.info/v1.2/claro-canal-edi.php`,
        container: document.getElementById("navbar-prev-canal-claro"),
        onMessage: function (message, origin) {
            let json = JSON.parse(message);
            console.log('buenas', json);
            if (typeof json == "object") {

                switch (json.type) {
                    case "claro-header":
                        $("body").append(LOADER);
                        $('#modal-header').modal("show");
                        getModalsCanalClaro(json.type);
                        $('.loader-view-container').remove();
                        break;
                    case "claro-programacion":
                        $("body").append(LOADER);
                        $('#modal-edi-claro').modal("show");
                        getModalsCanalClaro('claro-programacion');
                        $('.loader-view-container').remove();
                        break;
                    case "claro-title":
                        $("body").append(LOADER);
                        $('#modal-title').modal("show");
                        getModalsCanalClaro(json.type);
                        $('.loader-view-container').remove();
                        break;
                    case "claro-promo":
                        $("body").append(LOADER);
                        $('#modal-promo').modal("show");
                        getModalsCanalClaro(json.type);
                        $('.loader-view-container').remove();
                        break;
                    case "claro-carrusel1":
                        $("body").append(LOADER);
                        $('#modal-edi-carrusel-1').modal("show");
                        getModalsCanalClaro(json.type);
                        $('.loader-view-container').remove();
                        break;
                    case "claro-carrusel2":
                        $("body").append(LOADER);
                        $('#modal-edi-carrusel-2').modal("show");
                        getModalsCanalClaro(json.type);
                        $('.loader-view-container').remove();
                        break;
                    case "claro-carrusel-title":
                        $("body").append(LOADER);
                        $('#modal-title').modal("show");
                        getModalsCanalClaro(json.type);
                        $('.loader-view-container').remove();
                        break;
                    case "claro-carrusel-title2":
                        $("body").append(LOADER);
                        $('#modal-title').modal("show");
                        getModalsCanalClaro(json.type);
                        $('.loader-view-container').remove();
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

    $('#btn-test').click(function () {
        $("#modal-promo").modal("show");
        getModalsCanalClaro('claro-promo');
    })
    $('#url-encabezado').click(function () {
        $("#modal-url").modal("show");
    })
    $('#url-promo').click(function () {
        $("#modal-url").modal("show");
    })
    $('#banner-claro').change(function () {
        File(this)
    })

    function File(objFileInput) {
        $("body").append(LOADER);
        if (objFileInput.files[0]) {
            var fileReader = new FileReader();
            fileReader.onload = function (e) {
                $("#" + objFileInput.name).html('<img class="img-claro-back" src="' + e.target.result + '" /> <img class="img-add-photo" src="images/basic-icons/pencil-edit-teal.svg" alt="add-photo" /> <span class="text-add-photo">472px X 295px</span>');
                $('.loader-view-container').remove();
            }
            fileReader.readAsDataURL(objFileInput.files[0]);
        }
    }
    $('#img-header').change(function () {
        FileHeader(this)
    })
    function FileHeader(objFileInput) {
        $("body").append(LOADER);
        if (objFileInput.files[0]) {
            var fileReader = new FileReader();
            fileReader.onload = function (e) {
                $("#" + objFileInput.name).html('<img src="' + e.target.result + '" />');
                $('.loader-view-container').remove();
            }
            fileReader.readAsDataURL(objFileInput.files[0]);
        }
    }
    $('#promo-claro-img').change(function () {
        FilePromoImg(this)
    })
    function FilePromoImg(objFileInput) {
        $("body").append(LOADER);
        if (objFileInput.files[0]) {
            var fileReader = new FileReader();
            fileReader.onload = function (e) {
                $("#back-promo-claro").html('<img class="img-back-modal img-promo" src="' + e.target.result + '" />');
            }
            fileReader.readAsDataURL(objFileInput.files[0]);
            $('.loader-view-container').remove();
        }
    }
    $('#promo-claro-video').change(function () {
        FilePromoVideo(this)
    })
    function FilePromoVideo(objFileInput) {
        $("body").append(LOADER);
        if (objFileInput.files[0]) {
            var fileReader = new FileReader();
            fileReader.onload = function (e) {
                $("#back-promo-claro").html('<video autoplay controls class="img-back-modal img-promo" src="' + e.target.result + '" /></video>');
                $('.loader-view-container').remove();
            }
            fileReader.readAsDataURL(objFileInput.files[0]);
        }
    }
    // Canal Claro
}

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
    getProgrammingLanding
};
