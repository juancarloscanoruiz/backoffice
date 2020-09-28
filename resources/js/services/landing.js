//JQUERY
import $ from "jquery";

import {
    editAttributeProgram
} from "./generalSchedule.js";
import LandingView from "../views/landing";
let landingView = new LandingView();
//Configraciones para la librería de Cleave JS
import {
    cleaveConfig,
    scheduleTimeConfig,
    timeWithSeconds,
    year
} from "../config/config.js";

import {
    calendarSlick
} from "../config/slick.js";

import {
    createSlickSlider,
    createCalendarDays
} from "../vendor/slick.js";

import {
   
    addImagesModalIcons
    
} from "../services/generalSchedule.js";
function getMonth(idMonth) {
    let date = new Date();
    let month = date.getUTCMonth() + idMonth;
    return month;
}

function getNextMonth(month) {
    let date = new Date();
    return new Date(
        date.getUTCFullYear(),
        date.getUTCMonth() + month,
        getUTCDate()
    );
}

function getDays(month) {
    let date = new Date();
    return new Date(
        date.getUTCFullYear(),
        date.getUTCMonth() + month,
        0
    ).getUTCDate();
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
    });
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

function getChapterInfo(data, landing) {
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

            let capsule = '';

            switch (landing) {
                case 'canal-claro':
                    capsule =
                        `
<div class="d-flex justify-content-center my-5">
    <div class="position-relative d-inline-block mx-auto">
        <div class="row no-gutters col-12">
            <ul class="d-flex list-progra pl-0">
                <!--Logo canal claro-->
                <div class="text-center no-gap  mr-2 capsule-claro capsule">
                    <li rel="claro-canal-programing-edit" class="navs-li active-navItems navbar-progra-item-container d-inline-block" style="width: 200px !important;">

                        <div class=" mx-auto position-relative thumbnail-image-program " id="images-logo">

                            <label for="imagelogo" class="mb-0 d-flex p-2 m-3 justify-content-center align-items-center h-100 flex-column">
                                <img class="claro-nav-image thumbnail-image-program" src="http://www.claronetworks.openofficedospuntocero.info/images/home/tv-1.svg?v=1600801074416" alt="" id="icon_canal_claro_edi">

                            </label>
                        </div>
                    </li>
                </div>
                <!--Logo concert channel-->
                <div class=" text-center no-gap border-r border-l pr-2 pl-2 capsule-channel">
                    <li rel="concert-channel-programing-edit" class="navs-li d-inline-block" style="width: 200px !important;">
                        <!--  <img class="nav-image" src="./images/home/tv-2.svg" alt="" />-->
                        <div class=" mx-auto position-relative thumbnail-image-program" id="images-logo">
                            <!--  <input type="file" name="image-to-logo" id="imagelogo" class="input-image-program d-none">-->
                            <!--class to update image-->
                            <label for="imagelogo" class="mb-0 d-flex p-2 m-3 justify-content-center align-items-center h-100 flex-column">
                                <img class="claro-nav-image cursor-auto thumbnail-image-program" src="http://www.claronetworks.openofficedospuntocero.info/v1.2/images/home/tv-2.svg?v=1600801074418" alt="" id="icon_concert_channel_edi">

                                <!--    <span class="a-text-bold-warm text-plus mt-5 mb-5 shadow-contrast">472px X 295px</span>-->
                            </label>
                        </div>
                    </li>
                </div>
                <!--Logo claro cinema-->
                <div class=" text-center no-gap  ml-2 capsule-cinema">
                    <li rel="claro-cinema-programing-edit" class="navs-li d-inline-block" style="width: 200px !important;">
                        <div class=" mx-auto position-relative thumbnail-image-program" id="images-logo">
                            <label for="imagelogo" class="mb-0 d-flex p-2 m-3 justify-content-center align-items-center h-100 flex-column">
                                <img class="cursor-auto claro-nav-image thumbnail-image-program" src="http://www.claronetworks.openofficedospuntocero.info/v1.2/images/home/tv-3.svg?v=1600801074419" alt="" id="icon_claro_cinema_edi">
                            </label>
                        </div>
                    </li>
                </div>
            </ul>
        </div>
    </div>
</div>
`;
                    break
                case 'concert-channel':
                    capsule =
                        `
<div class="d-flex justify-content-center my-5">
    <div class="position-relative d-inline-block mx-auto">
        <div class="row no-gutters col-12">
            <ul class="d-flex list-progra pl-0">
                <!--Logo canal claro-->
                <div class="text-center no-gap  mr-2 capsule-claro">
                    <li rel="claro-canal-programing-edit" class="navs-li active-navItems navbar-progra-item-container d-inline-block" style="width: 200px !important;">

                        <div class=" mx-auto position-relative thumbnail-image-program " id="images-logo">

                            <label for="imagelogo" class="mb-0 d-flex p-2 m-3 justify-content-center align-items-center h-100 flex-column">
                                <img class="claro-nav-image thumbnail-image-program" src="http://www.claronetworks.openofficedospuntocero.info/images/home/tv-1.svg?v=1600801074416" alt="" id="icon_canal_claro_edi">

                            </label>
                        </div>
                    </li>
                </div>
                <!--Logo concert channel-->
                <div class=" text-center no-gap border-r border-l pr-2 pl-2 capsule-channel capsule">
                    <li rel="concert-channel-programing-edit" class="navs-li d-inline-block" style="width: 200px !important;">
                        <!--  <img class="nav-image" src="./images/home/tv-2.svg" alt="" />-->
                        <div class=" mx-auto position-relative thumbnail-image-program" id="images-logo">
                            <!--  <input type="file" name="image-to-logo" id="imagelogo" class="input-image-program d-none">-->
                            <!--class to update image-->
                            <label for="imagelogo" class="mb-0 d-flex p-2 m-3 justify-content-center align-items-center h-100 flex-column">
                                <img class="claro-nav-image cursor-auto thumbnail-image-program" src="http://www.claronetworks.openofficedospuntocero.info/v1.2/images/home/tv-2.svg?v=1600801074418" alt="" id="icon_concert_channel_edi">

                                <!--    <span class="a-text-bold-warm text-plus mt-5 mb-5 shadow-contrast">472px X 295px</span>-->
                            </label>
                        </div>
                    </li>
                </div>
                <!--Logo claro cinema-->
                <div class=" text-center no-gap  ml-2 capsule-cinema">
                    <li rel="claro-cinema-programing-edit" class="navs-li d-inline-block" style="width: 200px !important;">
                        <div class=" mx-auto position-relative thumbnail-image-program" id="images-logo">
                            <label for="imagelogo" class="mb-0 d-flex p-2 m-3 justify-content-center align-items-center h-100 flex-column">
                                <img class="cursor-auto claro-nav-image thumbnail-image-program" src="http://www.claronetworks.openofficedospuntocero.info/v1.2/images/home/tv-3.svg?v=1600801074419" alt="" id="icon_claro_cinema_edi">
                            </label>
                        </div>
                    </li>
                </div>
            </ul>
        </div>
    </div>
</div>
`;
                    break
                case 'claro-cinema':
                    capsule =
                        `
<div class="d-flex justify-content-center my-5">
    <div class="position-relative d-inline-block mx-auto">
        <div class="row no-gutters col-12">
            <ul class="d-flex list-progra pl-0">
                <!--Logo canal claro-->
                <div class="text-center no-gap  mr-2 capsule-claro capsule">
                    <li rel="claro-canal-programing-edit" class="navs-li active-navItems navbar-progra-item-container d-inline-block" style="width: 200px !important;">

                        <div class=" mx-auto position-relative thumbnail-image-program " id="images-logo">

                            <label for="imagelogo" class="mb-0 d-flex p-2 m-3 justify-content-center align-items-center h-100 flex-column">
                                <img class="claro-nav-image thumbnail-image-program" src="http://www.claronetworks.openofficedospuntocero.info/images/home/tv-1.svg?v=1600801074416" alt="" id="icon_canal_claro_edi">

                            </label>
                        </div>
                    </li>
                </div>
                <!--Logo concert channel-->
                <div class=" text-center no-gap border-r border-l pr-2 pl-2 capsule-channel">
                    <li rel="concert-channel-programing-edit" class="navs-li d-inline-block" style="width: 200px !important;">
                        <!--  <img class="nav-image" src="./images/home/tv-2.svg" alt="" />-->
                        <div class=" mx-auto position-relative thumbnail-image-program" id="images-logo">
                            <!--  <input type="file" name="image-to-logo" id="imagelogo" class="input-image-program d-none">-->
                            <!--class to update image-->
                            <label for="imagelogo" class="mb-0 d-flex p-2 m-3 justify-content-center align-items-center h-100 flex-column">
                                <img class="claro-nav-image cursor-auto thumbnail-image-program" src="http://www.claronetworks.openofficedospuntocero.info/v1.2/images/home/tv-2.svg?v=1600801074418" alt="" id="icon_concert_channel_edi">

                                <!--    <span class="a-text-bold-warm text-plus mt-5 mb-5 shadow-contrast">472px X 295px</span>-->
                            </label>
                        </div>
                    </li>
                </div>
                <!--Logo claro cinema-->
                <div class=" text-center no-gap  ml-2 capsule-cinema capsule">
                    <li rel="claro-cinema-programing-edit" class="navs-li d-inline-block" style="width: 200px !important;">
                        <div class=" mx-auto position-relative thumbnail-image-program" id="images-logo">
                            <label for="imagelogo" class="mb-0 d-flex p-2 m-3 justify-content-center align-items-center h-100 flex-column">
                                <img class="cursor-auto claro-nav-image thumbnail-image-program" src="http://www.claronetworks.openofficedospuntocero.info/v1.2/images/home/tv-3.svg?v=1600801074419" alt="" id="icon_claro_cinema_edi">
                            </label>
                        </div>
                    </li>
                </div>
            </ul>
        </div>
    </div>
</div>
`;
                    break
            }

            let data = JSON.parse(result);
            $(".loader-view-container").remove();
            $(".loader-container").remove();
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
            $("#slider-calendar-current-date").html(
                getMonthAndYear(date.getMonth())
            );
            //Obtenemos la hora GMT
            let dateUTC = new Date();
            //Día en horario central
            let dayUTC = "";
            //Mes en horario central
            let monthUTC = "";
            //Año en horario central
            let yearUTC = dateUTC.getUTCFullYear();

            //Siguiente mes
            let nextMonth = ("0" + (dateUTC.getUTCMonth() + 2)).slice(-2);

            if (dateUTC.getUTCMonth() < 10) {
                monthUTC = `0${dateUTC.getUTCMonth() + 1}`;
            } else {
                monthUTC = dateUTC.getUTCMonth() + 1;
            }
            if (dateUTC.getUTCDate() < 10) {
                dayUTC = `0${dateUTC.getUTCDate()}`;
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
                            )}" class="programming-item programming-item-active" date="${yearUTC}-${monthUTC}-0${i}" section_id="${data.program.section_id
                                }">
                                <div class="day">
                                    <p class="day-text">${getDayName(
                                    currentMonth,
                                    i
                                )}</p>
                                    <p class="day-number">${i}</p>
                                </div>
                                </li>
                            `;
                        } else {
                            daysSlider += `
                                <li
                                0
                            )}" class="programming-item programming-item-active" date="${yearUTC}-${monthUTC}-${i}" section_id="${data.program.section_id
                                }">
                                <div class="day">
                                    <p class="day-text">${getDayName(
                                    currentMonth,
                                    i
                                )}</p>
                                    <p class="day-number">${i}</p>
                                </div>
                                </li>
                            `;
                        }
                    } else {
                        if (i < 10) {
                            //Días restantes
                            daysSlider += `
                            <li class="programming-item" date="${yearUTC}-${monthUTC}-0${i}" section_id="${data.program.section_id
                                }">
                            <div class="day">
                                <p class="day-text">${getDayName(
                                    currentMonth,
                                    i
                                )}</p>
                                <p class="day-number">${i}</p>
                            </div>
                            </li>

                             `;
                        } else {
                            //Días restantes
                            daysSlider += `
                            <li class="programming-item" date="${yearUTC}-${monthUTC}-${i}" section_id="${data.program.section_id
                                }">
                            <div class="day">
                                <p class="day-text">${getDayName(
                                    currentMonth,
                                    i
                                )}</p>
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
                            <li class="programming-item" date="${yearUTC}-${nextMonth}-0${i}" section_id="${data.program.section_id
                            }">
                                <div class="day">
                                    <p class="day-text">${getDayName(
                                currentMonth + 1,
                                i
                            )}</p>
                                    <p class="day-number">${i}</p>
                                </div>
                            </li>
                        `;
                    } else {
                        daysSlider += `
                            <li class="programming-item" date="${yearUTC}-${nextMonth}-${i}" section_id="${data.program.section_id
                            }">
                                <div class="day">
                                    <p class="day-text">${getDayName(
                                currentMonth + 1,
                                i
                            )}</p>
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
                                <li class="programming-item programming-item-active" date="${yearUTC}-${monthUTC}-0${i}" section_id="${data.program.section_id
                                }">
                                <div class="day">
                                    <p class="day-text">${getDayName(
                                    currentMonth,
                                    i
                                )}</p>
                                    <p class="day-number">${i}</p>
                                </div>
                                </li>
                            `;
                        } else {
                            //Día actual activo
                            daysSlider += `
                                <li class="programming-item programming-item-active" date="${yearUTC}-${monthUTC}-${i}" section_id="${data.program.section_id
                                }">
                                <div class="day">
                                    <p class="day-text">${getDayName(
                                    currentMonth,
                                    i
                                )}</p>
                                    <p class="day-number">${i}</p>
                                </div>
                                </li>
                            `;
                        }
                    } else {
                        if (i < 10) {
                            //Días siguientes
                            daysSlider += `
                            <li class="programming-item" date="${yearUTC}-${monthUTC}-${i}" section_id="${data.program.section_id
                                }">
                            <div class="day">
                                <p class="day-text">${getDayName(
                                    currentMonth,
                                    i
                                )}</p>
                                <p class="day-number">${i}</p>
                            </div>
                            </li>
                            `;
                        } else {
                            //Días siguientes
                            daysSlider += `
                                    <li class="programming-item" date="${yearUTC}-${monthUTC}-${i}" section_id="${data.program.section_id
                                }">
                                    <div class="day">
                                        <p class="day-text">${getDayName(
                                    currentMonth,
                                    i
                                )}</p>
                                        <p class="day-number">${i}</p>
                                    </div>
                                    </li>
                                    `;
                        }
                    }
                }
            }

            $(".calendar-slider").html(daysSlider);
            //End caledario
            let modaTitle = $(".edit-program-modal-title");
            $(".edit-program-data-container").attr(
                "chapter_id",
                data.program.chapter_id
            );
            $(".edit-program-data-container").attr(
                "section",
                data.program.section_id
            );
            $(".edit-program-data-container").attr(
                "program",
                data.program.program.title
            );
            modaTitle.attr("chapter_id", data.program.chapter_id);
            modaTitle.attr("section", data.program.section_id);
            modaTitle.attr("program", data.program.program.title);
            $(".thumbnail-header1").attr("title", data.program.title);
            //thermometer
            let thermometer = data.thermometer;
            //Container completo que representa una hora en el termometro
            let itemThermometer = "";
            //Container que representa media hora en el termómetro
            let itemHalfThermometer = "";
            let index = 1;
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
            $(".thermometer-schedule-list").html(itemThermometer);

            //Insertamos la imagen del capítulo
            if (data.image_program) {
                $(".edit-program-icon-image")
                    .attr("src", "./images/basic-icons/pencil-edit-teal.svg")
                    .css({
                        width: "80px",
                        "margin-bottom": "16px"
                    });
            }

            $(".edit-image-program").attr("src", data.image_program);
            //Catalogo de programas
            let options = "";
            data.program_catalogue.forEach(program => {
                options += `
                    <option class="edit-program-input text-uppercase a-text-black-warmrey  backwhite h2"
                    value="${program.title}">${program.title}</option>
                    `;
            });

            $(".programs-catalogue").append(options);
            //selectpicker pra ls titulos de los programas
            //selectpicker pra ls titulos de los programas
            const dropdownTitles = $("#prog_titulo_programa");
            dropdownTitles.selectpicker("destroy");
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
                    $(this).val(
                        $(
                            "#prog_titulo_programa .filter-option-inner-inner"
                        ).text()
                    );
                    keyValue = $(this).val();
                }
                editAttributeProgram(chapter_id, key, keyValue);
            });

            let imageTriangle = `
            <img src="./images/triangle.svg" alt="" class="position-absolute cursor-pointer dropimg">
        `;
            $(".edit-program-image .bootstrap-select").append(imageTriangle);
            $(".dropimg").click(function () {
                dropdownTitles.selectpicker("toggle");
            });

            data;
            //Genres
            let optionGenre = "";
            data.genres.forEach(genre => {
                optionGenre += `
                    <option value="${genre.title}">${genre.title}</option>
                    `;
            });
            $(".list1").append(optionGenre);
            $(".list1").selectpicker("destroy");
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

            $(".available").click(function () {
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
                    $(".edit-landing-no").prop("checked", true);
                    $(".edit-carrusel-1").prop("checked", false);
                    $(".edit-carrusel-2").prop("checked", false);
                    break;
                case 1:
                    $(".edit-landing-yes").prop("checked", true);
                    $(".edit-carrusel-1").prop("checked", true);
                    break;
                case 2:
                    $(".edit-landing-yes").prop("checked", true);
                    $(".edit-carrusel-2").prop("checked", true);
                default:
                    break;
            }

            if (data.program.in_landing_begin) {
                let landingBeginDateTime = data.program.in_landing_begin.split(
                    " "
                );
                let fullDate = landingBeginDateTime[0].split("-");
                $(".edit-landing-date-begin").val(
                    `${fullDate[2]}-${fullDate[1]}-${fullDate[0]}`
                );
                if (landingBeginDateTime[1] == "00:00:00") {
                    $(".edit-landing-time-begin").val("");
                } else {
                    $(".edit-landing-time-begin").val(landingBeginDateTime[1]);
                }
            }
            if (data.program.in_landing_expiration) {
                let landingExpirationDateTime = data.program.in_landing_expiration.split(
                    " "
                );
                let fullDate = landingExpirationDateTime[0].split("-");
                $(".edit-landing-date-end").val(
                    `${fullDate[2]}-${fullDate[1]}-${fullDate[0]}`
                );
                if (landingExpirationDateTime[1] == "00:00:00") {
                    $(".edit-landing-time-end").val("");
                } else {
                    $(".edit-landing-time-end").val(
                        landingExpirationDateTime[1]
                    );
                }
            }
            //Verficar si el programa se encuentra en el home
            if (data.program.in_home == 0) {
                $(".edit-in-home-no").prop("checked", true);
            } else {
                $(".edit-in-home-yes").prop("checked", true);
            }

            if (data.program.in_home_begin) {
                let homeBeginDateTime = data.program.in_home_begin.split(" ");
                let fullDate = homeBeginDateTime[0].split("-");
                $(".edit-home-date-begin").val(
                    `${fullDate[2]}-${fullDate[1]}-${fullDate[0]}`
                );
                if (homeBeginDateTime[1] == "00:00:00") {
                    $(".edit-home-time-begin").val("");
                } else {
                    $(".edit-home-time-begin").val(homeBeginDateTime[1]);
                }
            }

            if (data.program.in_home_expiration) {
                let homeExpirationDateTime = data.program.in_home_expiration.split(
                    " "
                );
                let fullDate = homeExpirationDateTime[0].split("-");
                $(".edit-home-date-end").val(
                    `${fullDate[2]}-${fullDate[1]}-${fullDate[0]}`
                );
                if (homeExpirationDateTime[1] == "00:00:00") {
                    $(".edit-home-time-end").val("");
                } else {
                    $(".edit-home-time-end").val(homeExpirationDateTime[1]);
                }
            }

            //Schedule Item Date Time
            let scheduleItemDate = data.program.day.split("-");
            $(".edit-schedule-date").val(`${scheduleItemDate[2]}-${scheduleItemDate[1]
                }-${scheduleItemDate[0]}
                ${$(".edit-schedule-item-time").val(data.program.hour)}`);
            //Synopsis
            $(".edit-program-textarea").val(data.program.synopsis);
            //Season
            $(".edit-program-season").val(data.program.season);
            //Program episode number
            $(".edit-episode-number").val(data.program.episode_number);
            //Year
            $(".edit-year-produced").val(data.program.program.year);
            //Subtitle
            $(".edit-program-subtitle").val(data.program.subtitle);

            //Rating
            $(".edit-rating-code").val(data.program.program.rating);
            //Duration
            $(".edit-program-duration").val(data.program.duration);
            //Subbed
            if (data.program.subbed == 0) {
                $(".edit-subbed-no").prop("checked", true);
            } else {
                $(".edit-subbed-yes").prop("checked", true);
            }
            //Dubbed
            if (data.program.dubbed == 0) {
                $(".edit-dubbed-no").prop("checked", true);
            } else {
                $(".edit-dubbed-yes").prop("checked", true);
            }

            //Audio 5.0
            if (data.program.audio5 == 0) {
                $(".edit-audio5-no").prop("checked", true);
            } else {
                $(".edit-audio5-yes").prop("checked", true);
            }

            $('.cj').html(capsule);

            // $().addClass('capsule');

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
    reload(1, "Canal Claro");
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
            $(".loader-view-container").remove();
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
            $(".loader-view-container").remove();
            let data = JSON.parse(result);

            if (data.id_status >= 1) {
                let modaTitle = $(".edit-program-modal-title");
                $(".edit-program-data-container").attr(
                    "chapter_id",
                    data.program.chapter_id
                );
                $(".edit-program-data-container").attr(
                    "section",
                    data.program.section_id
                );
                $(".edit-program-data-container").attr(
                    "program",
                    data.program.program.title
                );
                modaTitle.attr("chapter_id", data.program.chapter_id);
                modaTitle.attr("section", data.program.section_id);
                modaTitle.attr("program", data.program.program.title);
                $(".thumbnail-header1").attr("title", data.program.title);
                //thermometer
                let thermometer = data.thermometer;
                //Container completo que representa una hora en el termometro
                let itemThermometer = "";
                //Container que representa media hora en el termómetro
                let itemHalfThermometer = "";
                let index = 1;
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
                $(".thermometer-schedule-list").html(itemThermometer);

                if (data.image_program) {
                    $(".edit-program-icon-image")
                        .attr(
                            "src",
                            "./images/basic-icons/pencil-edit-teal.svg"
                        )
                        .css({
                            width: "80px",
                            "margin-bottom": "16px"
                        });
                }

                $(".edit-image-program").attr("src", data.image_program);
                //Catalogo de programas
                let options = "";
                data.program_catalogue.forEach(program => {
                    options += `
                    <option class="edit-program-input text-uppercase a-text-black-warmrey  backwhite h2"
                    value="${program.title}">${program.title}</option>
                    `;
                });
                $(".programs-catalogue").append(options);
                //selectpicker pra ls titulos de los programas
                //selectpicker pra ls titulos de los programas
                $("#prog_titulo_programa").selectpicker("destroy");
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
                        $(this).val(
                            $(
                                "#prog_titulo_programa .filter-option-inner-inner"
                            ).text()
                        );
                        keyValue = $(this).val();
                    }

                    editAttributeProgram(chapter_id, key, keyValue);
                });
                //Genres
                let optionGenre = "";
                data.genres.forEach(genre => {
                    optionGenre += `
                <option value="${genre.title}">${genre.title}</option>
                `;
                });
                $(".list1").append(optionGenre);
                $(".list1").selectpicker("destroy");
                $(".list1").selectpicker({
                    filter: true,
                    multipleSeparator: ", "
                });

                $("#edit-genre-container .filter-option-inner-inner").text(
                    data.program.program.genre
                );

                $(".available").click(function () {
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
                        $(".edit-landing-no").prop("checked", true);
                        $(".edit-carrusel-1").prop("checked", false);
                        $(".edit-carrusel-2").prop("checked", false);
                        break;
                    case 1:
                        $(".edit-landing-yes").prop("checked", true);
                        $(".edit-carrusel-1").prop("checked", true);
                        break;
                    case 2:
                        $(".edit-landing-yes").prop("checked", true);
                        $(".edit-carrusel-2").prop("checked", true);
                    default:
                        break;
                }
                if (data.program.in_landing_begin) {
                    let landingBeginDateTime = data.program.in_landing_begin.split(
                        " "
                    );
                    let fullDate = landingBeginDateTime[0].split("-");
                    $(".edit-landing-date-begin").val(
                        `${fullDate[2]}-${fullDate[1]}-${fullDate[0]}`
                    );
                    if (landingBeginDateTime[1] == "00:00:00") {
                        $(".edit-landing-time-begin").val("");
                    } else {
                        $(".edit-landing-time-begin").val(
                            landingBeginDateTime[1]
                        );
                    }
                }
                if (data.program.in_landing_expiration) {
                    let landingExpirationDateTime = data.program.in_landing_expiration.split(
                        " "
                    );
                    let fullDate = landingExpirationDateTime[0].split("-");
                    $(".edit-landing-date-end").val(
                        `${fullDate[2]}-${fullDate[1]}-${fullDate[0]}`
                    );
                    if (landingExpirationDateTime[1] == "00:00:00") {
                        $(".edit-landing-time-end").val("");
                    } else {
                        $(".edit-landing-time-end").val(
                            landingExpirationDateTime[1]
                        );
                    }
                }
                //Verficar si el programa se encuentra en el home
                if (data.program.in_home == 0) {
                    $(".edit-in-home-no").prop("checked", true);
                } else {
                    $(".edit-in-home-yes").prop("checked", true);
                }
                if (data.program.in_home_begin) {
                    let homeBeginDateTime = data.program.in_home_begin.split(
                        " "
                    );
                    let fullDate = homeBeginDateTime[0].split("-");
                    $(".edit-home-date-begin").val(
                        `${fullDate[2]}-${fullDate[1]}-${fullDate[0]}`
                    );
                    if (homeBeginDateTime[1] == "00:00:00") {
                        $(".edit-home-time-begin").val("");
                    } else {
                        $(".edit-home-time-begin").val(homeBeginDateTime[1]);
                    }
                }
                if (data.program.in_home_expiration) {
                    let homeExpirationDateTime = data.program.in_home_expiration.split(
                        " "
                    );
                    let fullDate = homeExpirationDateTime[0].split("-");
                    $(".edit-home-date-end").val(
                        `${fullDate[2]}-${fullDate[1]}-${fullDate[0]}`
                    );
                    if (homeExpirationDateTime[1] == "00:00:00") {
                        $(".edit-home-time-end").val("");
                    } else {
                        $(".edit-home-time-end").val(homeExpirationDateTime[1]);
                    }
                }
                //Schedule Item Date Time
                let scheduleItemDate = data.program.day.split("-");
                $(".edit-schedule-date").val(`${scheduleItemDate[2]}-${scheduleItemDate[1]
                    }-${scheduleItemDate[0]}
                ${$(".edit-schedule-item-time").val(data.program.hour)}`);

                //Synopsis
                $(".edit-program-textarea").val(data.program.synopsis);
                //Season
                $(".edit-program-season").val(data.program.season);
                //Program episode number
                $(".edit-episode-number").val(data.program.episode_number);
                //Year
                $(".edit-year-produced").val(data.program.program.year);
                //Subtitle
                $(".edit-program-subtitle").val(data.program.subtitle);
                //Rating
                $(".edit-rating-code").val(data.program.program.rating);
                //Duration
                $(".edit-program-duration").val(data.program.duration);
                //Subbed
                if (data.program.subbed == 0) {
                    $(".edit-subbed-no").prop("checked", true);
                } else {
                    $(".edit-subbed-yes").prop("checked", true);
                }
                //Dubbed
                if (data.program.dubbed == 0) {
                    $(".edit-dubbed-no").prop("checked", true);
                } else {
                    $(".edit-dubbed-yes").prop("checked", true);
                }
                //Audio 5.0
                if (data.program.audio5 == 0) {
                    $(".edit-audio5-no").prop("checked", true);
                } else {
                    $(".edit-audio5-yes").prop("checked", true);
                }
            } else {
                newProgramByDate(section, date, time);
                //getProgramming(date, section, time);
            }
        }
    });
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
            $(".loader-view-container").remove();
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
                let headerTitle1 = $(
                    ".modal-header-concert-channel .modal-header-title-1"
                );
                //Título en header de concert channel color azul
                let headerTitle2 = $(
                    ".modal-header-concert-channel .modal-header-title-2"
                );
                headerTitle1.val(data.data.block_2_title_1);
                headerTitle2.val(data.data.block_2_title_2);
                $(
                    ".modal-header-concert-channel .modal-header-button-title"
                ).val(data.data.block_2_button_title);
                $(
                    ".modal-header-concert-channel .modal-header-button-title"
                ).text(data.data.block_2_button_title);
                $(
                    ".modal-header-concert-channel .modal-header-button-link"
                ).val(data.data.block_2_button_url);
                if (data.data.block_2_icon_channel) {
                    $(".label-no-image").remove();
                }
                $("#icon_canal_claro_edit").attr(
                    "src",
                    data.data.block_2_icon_channel
                );
                //Mostramos el modal
                $(".modal-header-concert-channel").modal("show");
                //Eliminamos
                $(".loader-view-container").remove();
            }
        }
    });
}
//home
function getCarruselHome(landing) {
    switch (landing) {
        case 'Canal Claro':
            $(".changelanding").text(landing);
            landing = 'canal_claro';
            break;

        case 'Concert Channel':
            $(".changelanding").text(landing);
            landing = 'concert_channel';
            break;

        case 'Claro Cinema':
            $(".changelanding").text(landing);
            landing = 'claro_cinema';
            break;
        default:
            break;
    }
    $.ajax({
        type: "POST",
        url: "landing/homeCarrusel",
        data: {
            landing
        },
        cache: false,
        beforeSend: function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
        },
        success: function (result) {
            let data = JSON.parse(result);
            console.log(data);
            if (data.code == 200) {
                let program = "";
                let programmingSlider = $(".carrusel-home-obj");

                let inLandingSwitch = "";
                let inLandingDates = "";
                let inLandingTimes = "";

                //HOME
                let inHomeSwitch = "";
                let inHomeDates = "";
                let inHomeTimes = "";

                $(".carrusel-home-obj").html("");

                for (const chapter of data.data.chapters) {

                    let chapter_id_master = chapter.chapter.chapter_id;

                    //Fechas
                    let dateExpirationLanding = "";
                    let timeExpiration = "";
                    let dateTimeExpiration = "";
                    let dateExpiration = "";
                    if (chapter.chapter.in_landing_expiration) {
                        dateTimeExpiration = chapter.chapter.in_landing_expiration.split(" ");
                        dateExpiration = dateTimeExpiration[0].split("-");
                        dateExpirationLanding = `${dateExpiration[2]}-${dateExpiration[1]}-${dateExpiration[0]}`;
                        timeExpiration = dateTimeExpiration[1];
                    };

                    let dateBeginLanding = "";
                    let timeBegin = "";
                    let dateTimeBegin = "";
                    let dateBegin = "";
                    //Revisamos si
                    if (chapter.chapter.in_landing_begin) {
                        dateTimeBegin = chapter.chapter.in_landing_begin.split(" ");
                        dateBegin = dateTimeBegin[0].split("-");
                        dateBeginLanding = `${dateBegin[2]}-${dateBegin[1]}-${dateBegin[0]}`;
                        timeBegin = dateTimeBegin[1];
                    };

                    // PARA SWITCH DE HOME
                    //Fechas
                    let dateHomeExpiration = "";
                    let timeHomeExpiration = "";
                    let dateTimeHomeExpiration = "";
                    if (chapter.chapter.in_home_expiration) {
                        dateTimeHomeExpiration = chapter.chapter.in_home_expiration.split(" ");
                        let dateHome = dateTimeHomeExpiration[0].split("-");
                        dateHomeExpiration = `${dateHome[2]}-${dateHome[1]}-${dateHome[0]}`;
                        timeHomeExpiration = dateTimeHomeExpiration[1];
                    }

                    let dateHomeBegin = "";
                    let timeHomeBegin = "";
                    let dateHomeTimeBegin = "";
                    //Revisamos si
                    if (chapter.chapter.in_home_begin) {
                        dateHomeTimeBegin = chapter.chapter.in_home_begin.split(" ");
                        let dateHome = dateHomeTimeBegin[0].split("-");
                        dateHomeBegin = `${dateHome[2]}-${dateHome[1]}-${dateHome[0]}`;
                        timeHomeBegin = dateHomeTimeBegin[1];
                    }

                    let scheduleDate = chapter.chapter.day.split("-");

                    let subbed = "";
                    if (chapter.chapter.subbed == 0) {
                        subbed = `
                        <div class="d-flex">
                            <input type="radio" id="yes-subbed-${chapter.chapter.id}" name="subbed-${chapter.chapter.id}" value="1" chapter_id="${chapter.chapter.id}" class="edit-program-switch switch-landing edit-subbed-yes" key="subbed" />
                            <label for="yes-subbed-${chapter.chapter.id}" id="siestado-landing" class="si-estilo cursor-pointer mb-0 switch-label">Sí</label>
                            <input type="radio" name="subbed-${chapter.chapter.id}" id="no-subbed-${chapter.chapter.id}" value="0" checked chapter_id="${chapter.chapter.id}" class="edit-program-switch switch-landing switch-table-edit edit-subbed-no" key="subbed" />
                            <label for="no-subbed-${chapter.chapter.id}" id="noestado-landing" class="mb-0 no-estilo cursor-pointer switch-label">No</label>
                        </div>
                        `;
                    } else {
                        subbed = `
                        <div class="d-flex">
                            <input type="radio" name="subbed-${chapter.chapter.id}" id="yes-subbed-${chapter.chapter.id}" checked value="1" chapter_id="${chapter.chapter.id}" class="edit-program-switch switch-landing edit-subbed-yes" key="subbed" />
                            <label for="yes-subbed-${chapter.chapter.id}" id="siestado-landing" class="si-estilo cursor-pointer mb-0 switch-label">Sí</label>
                            <input type="radio" name="subbed-${chapter.chapter.id}" id="no-subbed-${chapter.chapter.id}" value="0" chapter_id="${chapter.chapter.id}" class="edit-program-switch switch-landing switch-table-edit edit-subbed-no" key="subbed" />
                            <label for="no-subbed-${chapter.chapter.id}" id="noestado-landing" class="mb-0 no-estilo cursor-pointer switch-label">No</label>
                        </div>
                        `;
                    }

                    let dubbed = "";
                    if (chapter.chapter.dubbed == 0) {
                        dubbed = `
                        <div class="d-flex">
                            <input type="radio" id="yes-dubbed-${chapter.chapter.id}" value="1" name="dubbed-${chapter.chapter.id}"
                                class="edit-program-switch switch-landing edit-dubbed-yes"
                                key="dubbed" chapter_id="${chapter.chapter.id}"/>
                            <label for="yes-dubbed-${chapter.chapter.id}" id="siestado-landing"
                                class="si-estilo cursor-pointer mb-0 switch-label">
                                Sí</label>
                            <input type="radio" id="no-dubbed-${chapter.chapter.id}" value="0" checked name="dubbed-${chapter.chapter.id}"
                                class="edit-program-switch switch-landing switch-table-edit edit-dubbed-no"
                                key="dubbed" chapter_id="${chapter.chapter.id}"/>
                            <label for="no-dubbed-${chapter.chapter.id}" id="noestado-landing"
                                class="mb-0 no-estilo cursor-pointer switch-label">
                                No</label>
                        </div>
                        `;
                    } else {
                        dubbed = `
                        <div class="d-flex">
                            <input type="radio" id="yes-dubbed-${chapter.chapter.id}" name="dubbed-${chapter.chapter.id}" value="1" checked
                                class="edit-program-switch switch-landing edit-dubbed-yes"
                                key="dubbed" chapter_id="${chapter.chapter.id}"/>
                            <label for="yes-dubbed-${chapter.chapter.id}" id="siestado-landing"
                                class="si-estilo cursor-pointer mb-0 switch-label">
                                Sí</label>
                            <input type="radio" id="no-dubbed-${chapter.chapter.id}" name="dubbed-${chapter.chapter.id}" value="0"
                                class="edit-program-switch switch-landing switch-table-edit edit-dubbed-no"
                                key="dubbed" chapter_id="${chapter.chapter.id}"/>
                            <label for="no-dubbed-${chapter.chapter.id}" id="noestado-landing"
                                class="mb-0 no-estilo cursor-pointer switch-label">
                                No</label>
                        </div>
                        `;
                    }

                    let audio5 = "";
                    if (chapter.chapter.audio5 == 0) {
                        audio5 = `
                        <div class="d-flex">
                            <input type="radio" id="yes-audio5-${chapter.chapter.id}" value="1"
                                class="edit-program-switch switch-landing edit-audio5-yes"
                                key="audio5" chapter_id="${chapter.chapter.id}" name="audio5-${chapter.chapter.id}"/>
                            <label for="yes-audio5-${chapter.chapter.id}" id="siestado-landing"
                                class="si-estilo cursor-pointer mb-0 switch-label">
                                Sí</label>
                            <input type="radio" id="no-audio5-${chapter.chapter.id}" value="0" checked
                                class="edit-program-switch switch-landing switch-table-edit edit-audio5-no"
                                key="audio5" chapter_id="${chapter.chapter.id}" name="audio5-${chapter.chapter.id}"/>
                            <label for="no-audio5-${chapter.chapter.id}" id="noestado-landing"
                                class="mb-0 no-estilo cursor-pointer switch-label">
                                No</label>
                        </div>
                        `;
                    } else {
                        audio5 = `
                        <div class="d-flex">
                            <input type="radio" id="yes-audio5-${chapter.chapter.id}" value="1"
                                class="edit-program-switch switch-landing edit-audio5-yes" checked
                                key="audio5" chapter_id="${chapter.chapter.id}" name="audio5-${chapter.chapter.id}"/>
                            <label for="yes-audio5-${chapter.chapter.id}" id="siestado-landing"
                                class="si-estilo cursor-pointer mb-0 switch-label">
                                Sí</label>
                            <input type="radio" id="no-audio5-${chapter.chapter.id}" value="0"
                                class="edit-program-switch switch-landing switch-table-edit edit-audio5-no"
                                key="audio5" chapter_id="${chapter.chapter.id}" name="audio5-${chapter.chapter.id}"/>
                            <label for="no-audio5-${chapter.chapter.id}" id="noestado-landing"
                                class="mb-0 no-estilo cursor-pointer switch-label">
                                No</label>
                        </div>
                        `;
                    }

                    if (chapter.chapter.in_landing == 1) {
                        //Switch de landing
                        inLandingSwitch = `
                        <div class="d-flex align-items-center mb-3 pl-5">
                            <input type="radio" name="yes-landing-carrusel-${chapter.chapter.id}" id="yes-landing-carrusel-${chapter.chapter.id}" value="1" class="edit-switch-landing edit-landing-yes edit-program-switch" chapter_id="${chapter.chapter.id}" key="in_landing" checked />
                            <label for="yes-landing-carrusel-${chapter.chapter.id}" id="siestado-landing" class="mb-0 si-estilo cursor-pointer switch-label">Sí</label>
                            <input type="radio" name="yes-landing-carrusel-${chapter.chapter.id}"  id="no-landing-carrusel-${chapter.chapter.id}" value="0" class="edit-switch-landing edit-program-switch edit-landing-no" chapter_id="${chapter.chapter.id}" key="in_landing" />
                            <label for="no-landing-carrusel-${chapter.chapter.id}" id="noestado-landing" class="mb-0 no-estilo cursor-pointer switch-label">No</label>
                        </div>`;

                        inLandingDates = `
                        <div class="row">
                            <div class="col-6 mb-4">
                                <div class="text-center edit-rectangle-max-container py-2 d-flex align-content-center justify-content-center">
                                    <p class="text-small-rectangle a-text-bold-warm">Inicio</p>
                                    <img src="./images/calendario.svg" alt="" class="mr-3">
                                    <span class="a-text-bold-warm mt-3">
                                        <input key="in_landing_begin" type=" text" class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date edit-program-attribute-text edit-landing-date-begin" placeholder="00-00-0000" chapter_id="${chapter.chapter.id}" value="${dateBeginLanding}"></span>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="text-center edit-rectangle-max-container py-2 d-flex align-content-center justify-content-center">
                                    <p class="text-small-rectangle a-text-bold-warm">Fin</p>
                                    <img src="./images/calendario.svg" alt="" class="mr-3">
                                    <span class="a-text-bold-warm mt-3">
                                        <input key="in_landing_expiration" type=" text" class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date edit-program-attribute-text edit-landing-date-end" placeholder="00-00-0000" chapter_id="${chapter.chapter.id}" value="${dateExpirationLanding}"></span>
                                </div>
                            </div>
                        </div>`;

                        inLandingTimes = `
                    <div class="row">
                        <div class="col-6">
                            <div class="text-center edit-rectangle-max-container py-2 d-flex align-content-center justify-content-center">
                                <p class="text-small-rectangle a-text-bold-warm">Inicio</p>
                                <img src="./images/reloj.svg" alt="" class="mr-3">
                                <span class="a-text-bold-warm mt-3">
                                    <input key="in_landing_begin" type="text" class="edit-program-attribute-text input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date edit-landing-time-begin" placeholder="00:00:00" chapter_id="${chapter.chapter.id}" key="in_landing_begin" value="${timeBegin}"></span>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="text-center edit-rectangle-max-container py-2 d-flex align-content-center justify-content-center">
                                <p class="text-small-rectangle a-text-bold-warm">Fin</p>
                                <img src="./images/reloj.svg" alt="" class="mr-3">
                                <span class="a-text-bold-warm mt-3">
                                    <input key="in_landing_expiration" type="text" class="edit-program-attribute-text input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date edit-landing-time-end" placeholder="00:00:00" chapter_id="${chapter.chapter.id}" key="in_landing_expiration" value="${timeExpiration}"></span>
                            </div>
                        </div>
                    </div>`;
                    } else {
                        inLandingSwitch = `
                        <div class="d-flex align-items-center mb-3 pl-5">
                            <input type="radio" name="yes-landing-carrusel-${chapter.chapter.id}" id="yes-landing-carrusel-${chapter.chapter.id}" value="1" class="edit-switch-landing edit-landing-yes edit-program-switch " chapter_id="${chapter.chapter.id}" key="in_landing" />
                            <label for="yes-landing-carrusel-${chapter.chapter.id}" id="siestado-landing" class="mb-0 si-estilo cursor-pointer switch-label">Sí</label>
                            <input type="radio" name="yes-landing-carrusel-${chapter.chapter.id}"  id="no-landing-carrusel-${chapter.chapter.id}" value="0" class="edit-switch-landing edit-program-switch edit-landing-no" chapter_id="${chapter.chapter.id}" key="in_landing" checked />
                            <label for="no-landing-carrusel-${chapter.chapter.id}" id="noestado-landing" class="mb-0 no-estilo cursor-pointer switch-label">No</label>
                        </div>`;
                        inLandingDates = `
                    <div class="row">
                        <div class="col-6 mb-4">
                            <div class="text-center edit-rectangle-max-container py-2 d-flex align-content-center justify-content-center">
                                <p class="text-small-rectangle a-text-bold-warm">Inicio</p>
                                <img src="./images/calendario.svg" alt="" class="mr-3">
                                <span class="a-text-bold-warm mt-3">
                                    <input key="in_landing_begin" type=" text" class="edit-program-attribute-text input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date edit-landing-date-begin" placeholder="00-00-0000" chapter_id="${chapter.chapter.id}" value=""></span>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="text-center edit-rectangle-max-container py-2 d-flex align-content-center justify-content-center">
                                <p class="text-small-rectangle a-text-bold-warm">Fin</p>
                                <img src="./images/calendario.svg" alt="" class="mr-3">
                                <span class="a-text-bold-warm mt-3">
                                    <input key="in_landing_expiration" type=" text" class="edit-program-attribute-text input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date edit-landing-time-begin" placeholder="00-00-0000" chapter_id="${chapter.chapter.id}" value=""></span>
                            </div>
                        </div>
                    </div>`;
                        inLandingTimes = `
                    <div class="row">
                        <div class="col-6">
                            <div class="text-center edit-rectangle-max-container py-2 d-flex align-content-center justify-content-center">
                                <p class="text-small-rectangle a-text-bold-warm">Inicio</p>
                                <img src="./images/reloj.svg" alt="" class="mr-3">
                                <span class="a-text-bold-warm mt-3">
                                    <input key="in_landing_begin" type="text" class="edit-program-attribute-text input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date edit-landing-date-end" placeholder="00:00:00" chapter_id="${chapter.chapter.id}" key="in_landing_begin" value=""></span>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="text-center edit-rectangle-max-container py-2 d-flex align-content-center justify-content-center">
                                <p class="text-small-rectangle a-text-bold-warm">Fin</p>
                                <img src="./images/reloj.svg" alt="" class="mr-3">
                                <span class="a-text-bold-warm mt-3">
                                    <input key="in_landing_expiration" type="text" class="edit-program-attribute-text input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date edit-landing-time-end" placeholder="00:00:00" chapter_id="${chapter.chapter.id}" key="in_landing_expiration" value=""></span>
                            </div>
                        </div>
                    </div>`;
                    }

                    if (chapter.chapter.in_home == 1) {
                        //Switch de home
                        inHomeSwitch = `
                        <div class="d-flex align-items-center mb-3 pl-5">
                            <input type="radio" name="yes-home-carrusel-${chapter.chapter.id}" id="yes-home-carrusel-${chapter.chapter.id}" value="1" class="edit-switch-home edit-home-yes edit-program-switch " chapter_id="${chapter.chapter.id}" key="in_home" checked />
                            <label for="yes-home-carrusel-${chapter.chapter.id}" id="siestado-home" class="mb-0 si-estilo cursor-pointer switch-label">Sí</label>
                            <input type="radio" name="yes-home-carrusel-${chapter.chapter.id}"  id="no-home-carrusel-${chapter.chapter.id}" value="0" class="edit-switch-home edit-program-switch edit-home-no" chapter_id="${chapter.chapter.id}" key="in_home" />
                            <label for="no-home-carrusel-${chapter.chapter.id}" id="noestado-home" class="mb-0 no-estilo cursor-pointer switch-label">No</label>
                        </div>`;

                        inHomeDates = `
                        <div class="row">
                            <div class="col-6 mb-4">
                                <div class="text-center edit-rectangle-max-container py-2 d-flex align-content-center justify-content-center">
                                    <p class="text-small-rectangle a-text-bold-warm">Inicio</p>
                                    <img src="./images/calendario.svg" alt="" class="mr-3">
                                    <span class="a-text-bold-warm mt-3">
                                        <input key="in_home_begin" type=" text" class="edit-program-attribute-text input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date edit-home-date-begin" placeholder="00-00-0000" chapter_id="${chapter.chapter.id}" value="${dateHomeBegin}"></span>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="text-center edit-rectangle-max-container py-2 d-flex align-content-center justify-content-center">
                                    <p class="text-small-rectangle a-text-bold-warm">Fin</p>
                                    <img src="./images/calendario.svg" alt="" class="mr-3">
                                    <span class="a-text-bold-warm mt-3">
                                        <input key="in_home_expiration" type=" text" class="edit-program-attribute-text input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date edit-home-time-begin" placeholder="00-00-0000" chapter_id="${chapter.chapter.id}" value="${dateHomeExpiration}"></span>
                                </div>
                            </div>
                        </div>`;

                        inHomeTimes = `
                    <div class="row">
                        <div class="col-6">
                            <div class="text-center edit-rectangle-max-container py-2 d-flex align-content-center justify-content-center">
                                <p class="text-small-rectangle a-text-bold-warm">Fin</p>
                                <img src="./images/reloj.svg" alt="" class="mr-3">
                                <span class="a-text-bold-warm mt-3">
                                    <input key="in_home_begin" type="text" class="edit-program-attribute-text input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date edit-home-date-end" placeholder="00:00:00" chapter_id="${chapter.chapter.id}" key="in_landing_begin" value="${timeHomeBegin}"></span>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="text-center edit-rectangle-max-container py-2 d-flex align-content-center justify-content-center">
                                <p class="text-small-rectangle a-text-bold-warm">Fin</p>
                                <img src="./images/reloj.svg" alt="" class="mr-3">
                                <span class="a-text-bold-warm mt-3">
                                    <input key="in_home_expiration" type="text" class="edit-program-attribute-text input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date edit-home-time-end" placeholder="00:00:00" chapter_id="${chapter.chapter.id}" key="in_landing_expiration" value="${dateHomeExpiration}"></span>
                            </div>
                        </div>
                    </div>`;
                    } else {
                        inHomeSwitch = `
                        <div class="d-flex align-items-center mb-3 pl-5">
                            <input type="radio" name="yes-home-carrusel-${chapter.chapter.id}" id="yes-home-carrusel-${chapter.chapter.id}" value="1" class="edit-switch-home edit-home-yes" edit-program-switch chapter_id="${chapter.chapter.id}" key="in_home" />
                            <label for="yes-home-carrusel-${chapter.chapter.id}" id="siestado-home" class="mb-0 si-estilo cursor-pointer switch-label">Sí</label>
                            <input type="radio" name="yes-home-carrusel-${chapter.chapter.id}"  id="no-home-carrusel-${chapter.chapter.id}" value="0" class="edit-switch-home edit-program-switch edit-home-no" chapter_id="${chapter.chapter.id}" key="in_home" checked />
                            <label for="no-home-carrusel-${chapter.chapter.id}" id="noestado-home" class="mb-0 no-estilo cursor-pointer switch-label">No</label>
                        </div>`;

                        inHomeDates = `
                        <div class="row">
                            <div class="col-6 mb-4">
                                <div class="text-center edit-rectangle-max-container py-2 d-flex align-content-center justify-content-center">
                                    <p class="text-small-rectangle a-text-bold-warm">Inicio</p>
                                    <img src="./images/calendario.svg" alt="" class="mr-3">
                                    <span class="a-text-bold-warm mt-3">
                                        <input key="in_home_begin" type=" text" class="edit-program-attribute-text input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date edit-home-date-begin" placeholder="00-00-0000" chapter_id="${chapter.chapter.id}" value=""></span>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="text-center edit-rectangle-max-container py-2 d-flex align-content-center justify-content-center">
                                    <p class="text-small-rectangle a-text-bold-warm">Fin</p>
                                    <img src="./images/calendario.svg" alt="" class="mr-3">
                                    <span class="a-text-bold-warm mt-3">
                                        <input key="in_home_expiration" type=" text" class="edit-program-attribute-text input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date edit-home-time-begin" placeholder="00-00-0000" chapter_id="${chapter.chapter.id}" value=""></span>
                                </div>
                            </div>
                        </div>`;
                        inHomeTimes = `
                    <div class="row">
                        <div class="col-6">
                            <div class="text-center edit-rectangle-max-container py-2 d-flex align-content-center justify-content-center">
                                <p class="text-small-rectangle a-text-bold-warm">Fin</p>
                                <img src="./images/reloj.svg" alt="" class="mr-3">
                                <span class="a-text-bold-warm mt-3">
                                    <input key="in_home_begin" type="text" class="edit-program-attribute-text input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date edit-home-date-end" placeholder="00:00:00" chapter_id="${chapter.chapter.id}" key="in_landing_begin" value=""></span>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="text-center edit-rectangle-max-container py-2 d-flex align-content-center justify-content-center">
                                <p class="text-small-rectangle a-text-bold-warm">Fin</p>
                                <img src="./images/reloj.svg" alt="" class="mr-3">
                                <span class="a-text-bold-warm mt-3">
                                    <input key="in_home_expiration" type="text" class="edit-program-attribute-text input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date edit-home-time-end" placeholder="00:00:00" chapter_id="${chapter.chapter.id}" key="in_landing_expiration" value=""></span>
                            </div>
                        </div>
                    </div>`;
                    }

                    program +=
                        `
            <div class="container-fluid">
            <input type="hidden" id="chapter_id_master" class="chapter_id_master" value="${chapter_id_master}">
            <div class="row">
                <div class="col-8">
                    <div class="row">
                        <!--Landing-->
                        <div class="col-6 edit-program-data-container">
                            <div class="edit-data-container">
                                <p class="mb-3 text-plus text-plus text-uppercase a-text-bold-coolgray float-left">Estableceren landing</p>
                                <!--Switch-->
                                ${inLandingSwitch}
                                <!--Inputs radio-->
                                <div class="d-flex align-items-center mb-3">
                                    <span class="a-text-bold-silver cursor-pointer ml-2 text-uppercase">Carrusel 1</span>
                                </div>
                                <div>
                                    <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Fecha</p>
                                    ${inLandingDates}
                                    <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                                    ${inLandingTimes}
                                </div>
                            </div>
                        </div>
                        <!-- DATA TIME -->
                        <div class="col-6 edit-program-data-container">
                            <div class="edit-data-container">
                                <p class="text-plus text-plus text-uppercase a-text-bold-coolgray" style="margin-bottom: 72px;">Schedule Item Date time</p>
                                <div class="row">
                                    <div class="col-6 mb-4">
                                        <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Fecha</p>
                                        <div class="text-center edit-rectangle-max-container py-2 d-flex align-content-center justify-content-center" style="margin-bottom: 99px">
                                            <img src="./images/calendario.svg" alt="" class="mr-3">
                                            <span class="a-text-bold-warm mt-2">
                                                <input key="" type="text" class="edit-program-attribute-text input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date" placeholder="00-00-0000" value="${scheduleDate[2]}-${scheduleDate[1]}-${scheduleDate[0]}"></span>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                                        <div class="text-center edit-rectangle-max-container d-flex align-content-center justify-content-center py-2">
                                            <img src="./images/reloj.svg" alt="" class="mr-3">
                                            <span class="a-text-bold-warm mt-2">
                                                <input type="text" class="edit-program-attribute-text time-seconds-input input-basic edit-program-input a-text-bold-warm edit-schedule-item-time text-uppercase" placeholder="00:00:00" value="${chapter.chapter.hour}"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--Home-->
                        <div class="col-6 edit-program-data-container mt-3">
                            <div class="edit-data-container">
                                <p class="mb-3 text-plus text-plus text-uppercase a-text-bold-coolgray float-left">Establecer en home</p>
                                <!--Switch-->
                                ${inHomeSwitch}
                                <div>
                                    <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Fecha</p>
                                    ${inHomeDates}
                                    <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                                    ${inHomeTimes}
                                </div>
                            </div>
                        </div>
                        <!-- UNICOS Y DIFERENTES -->
                        <div class="col-6 mt-3">
                            <div class="edit-data-container d-flex justify-content-between m-schedule">
                                <p class="mb-0 text-plus text-uppercase a-text-bold-brown-two">Schedule version <br> subbed</p>
                                ${subbed}
                            </div>
                            <div class="edit-data-container d-flex justify-content-between m-schedule">
                                <p class="mb-0 text-plus text-uppercase a-text-bold-brown-two">Schedule version <br> dubbed</p>
                                ${dubbed}
                            </div>
                            <div class="edit-data-container d-flex justify-content-between">
                                <p class="mb-0 text-plus text-uppercase a-text-bold-brown-two">Audio 5.1 available</p>
                                ${audio5}
                            </div>
                        </div>
                        <!-- UNICOS Y DIFERENTES -->
                    </div>
                </div>
                <div class="col-4 p-0" id="img_carrusel_home">
                    <div>
                        <!-- IMG -->
                        <div class="position-relative text-center">
                            <img class="img-back-modal img-carrusel-home" id="img-carrusel-home-${chapter.chapter.id}" src="${chapter.chapter.thumbnail_list_vertical}">
                        </div>
                        <!-- BTN ICONOS -->
                        <div class="modal-img-carrusel">
                            <!-- INPUTS -->
                            <input class="d-none load-carrusel" id="img_carrusel_${chapter.chapter.id}" name="img-carrusel_${chapter.chapter.id}" type="file" key="thumbnail_list_vertical">
                            <!-- LABEL -->
                            <label for="img_carrusel_${chapter.chapter.id}" class="add-file load-programming-carousel">
                                <img id="${chapter.chapter.id}" class="add-file-carrusel cursor-pointer mb-2" src="./images/basic-icons/camara.svg" alt="add-photo" />
                                <br>
                                <p class="a-text-bold-warm text-plus">472px X 295px</p>
                            </label>
                        </div>
                    </div>
                </div>
                <!-- NOMBRE DE LA IMAGEN -->
                <div class="offset-8 col-4 p-0">
                    <span class="a-text-bold-brown-two text-plus my-4 d-block">NombreDeLaImagen_Home_Vertical_20200709.jpg</span>
                </div>
                <!-- SINOPSIS -->
                <div class="col-12">
                    <section class=" edit-program-data-container" chapter_id="${chapter.chapter.id}">
                        <h3 class="h3 text-uppercase a-text-bold-brown-two mb-3">Sinopsis</h3>
                        <!--Textarea-->
                        <textarea chapter_id="${chapter.chapter.id}" key="synopsis" class="edit-synopsis edit-program-textarea edit-program-attribute-text a-text-semibold-warmgrey p-3" id="prog_sinopsis">${chapter.chapter.synopsis}</textarea>
                        <button class="a-btn-teal a-btn-basic-small text-normal a-text-MBlack float-right btn-actual d-flex align-items-center justify-content-center" ><img src="./images/basic-icons/enter.svg" alt=""> ACTUALIZAR</button>
                        <div class="clearfix"></div>
                        </section>
                </div>
                <div class="col-12">
                    <div class="row">
                        <!--Program episode season-->
                        <div class="col-4 edit-program-data-container" chapter_id="${chapter.chapter.id}">
                            <div class="edit-data-container">
                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program episode season</p>
                                <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                                    <input chapter_id="${chapter.chapter.id}" value="${chapter.chapter.season}" type="text" key="season" class="edit-program-season text-center input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase" placeholder="00">
                                </div>
                            </div>
                        </div>
                        <!--Program episode number-->
                        <div class="col-4 edit-program-data-container" chapter_id="${chapter.chapter.id}">
                            <div class="edit-data-container">
                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program episode number</p>
                                <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                                    <input chapter_id="${chapter.chapter.id}" value="${chapter.chapter.program_episode_number}" type="text" key="program_episode_number" class="text-center edit-episode-number input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase" placeholder="000">
                                </div>
                            </div>
                        </div>
                        <!--Program year produced-->
                        <div class="col-4 edit-program-data-container" chapter_id="${chapter.chapter.id}">
                            <div class="edit-data-container">
                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program year produced</p>
                                <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                                    <input chapter_id="${chapter.chapter.id}" value="${chapter.chapter.program.year}" type="text" key="program_year_produced" class="year-input text-center edit-year-produced input-basic edit-program-attribute-text edit-program-input a-text-bold-warm text-uppercase" placeholder="YYYY">
                                </div>
                            </div>
                        </div>
                        <!--Program title alternate-->
                        <div class="col-4 edit-program-data-container mt-3 chapter_id="${chapter.chapter.id}"">
                            <div class="edit-data-container">
                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program title alternate</p>
                                <div class="mb-3 edit-rectangle-container p-3">
                                    <input chapter_id="${chapter.chapter.id}" value="${chapter.chapter.subtitle}" type="text" key="subtitle" class="w-100 edit-program-subtitle input-basic edit-program-input edit-program-attribute-text a-text-bold-warm" placeholder="Program Title Alternate">
                                </div>
                            </div>
                        </div>
                        <!--Program genre list-->
                        <div class="col-4 edit-program-data-container position-relative mt-3" id="edit-genre-container" chapter_id="${chapter.chapter.id}">
                            <div class="edit-data-container">
                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program genre list</p>
                                <div class="mb-3 edit-rectangle-container borrando">
                                    <select
                                        class="list1 edit-program-genres mb-0 a-text-regular-brownishtwo text-normal  input-basic show-tick"
                                         title="Genere list" multiple
                                        data-live-search="true" data-live-search-placeholder="Buscar"
                                        data-header="Program List" data-dropup-auto="false" key="genre" chapter_id="${chapter.chapter.id}">
                                    </select>
                                </div>
                            </div>
                        </div>
                        <!-- CODE -->
                        <div class="col-4 edit-program-data-container mt-3" chapter_id="${chapter.chapter.id}">
                            <div class="edit-data-container">
                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule item rating code</p>
                                <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                                    <input chapter_id="${chapter.chapter.id}" value="${chapter.chapter.program.rating}" type="text" key="rating" class="text-center edit-program-attribute-text input-basic edit-program-input a-text-bold-warm text-uppercase edit-rating-code" placeholder="PG-00">
                                </div>
                            </div>
                        </div>
                        <!-- DATE -->
                        <div class="col-4 edit-program-data-container mt-3" chapter_id="${chapter.chapter.id}">
                            <div class="edit-data-container d-flex flex-column justify-content-between h-100">
                                <p class="text-plus text-uppercase a-text-bold-brown-two">Schedule item log date</p>
                                <p class="a-text-medium-brown-two text-plus text-uppercase">Fecha</p>
                                <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3 d-flex align-items-center justify-content-center">
                                    <img src="{{ asset('images/calendario.svg') }}" alt="" class="mr-3">
                                    <input chapter_id="${chapter.chapter.id}" value="${scheduleDate[2]}-${scheduleDate[1]}-${scheduleDate[0]}" type="text" key="day" class="edit-schedule-date edit-program-attribute-text schedule-date-input input-basic edit-program-input a-text-bold-warm text-uppercase" placeholder="DD:MM:YY">
                                </div>
                            </div>
                        </div>
                        <!-- GMT -->
                        <div class="col-4 edit-program-data-container mt-3" chapter_id="${chapter.chapter.id}">
                            <div class="edit-data-container h-100 d-flex flex-column justify-content-between">
                                <p class="text-plus text-uppercase a-text-bold-brown-two pb-4">Schedule item log time (gmt)</p>
                                <p class="a-text-medium-brown-two text-plus text-uppercase ">HORA</p>
                                <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3 d-flex align-items-center justify-content-center">
                                    <img src="{{ asset('images/reloj.svg') }}" alt="" class="mr-3">
                                    <input chapter_id="${chapter.chapter.id}" value="${chapter.chapter.hour}" type="text" key="programing" class="edit-schedule-item-time edit-program-attribute-text time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase" placeholder="00:00:00">
                                </div>
                            </div>
                        </div>
                        <!-- DURATION -->
                        <div class="col-4 edit-program-data-container mt-3" chapter_id="${chapter.chapter.id}">
                            <div class="edit-data-container d-flex flex-column justify-content-between h-100">
                                <p class=" text-plus text-uppercase a-text-bold-brown-two">estimated schedule item duration</p>
                                <p class="a-text-medium-brown-two text-plus text-uppercase ">HORA</p>
                                <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3 d-flex align-items-center justify-content-center">
                                    <img src="{{ asset('images/reloj.svg') }}" alt="" class="mr-3">
                                    <input chapter_id="${chapter.chapter.id}" value="${chapter.chapter.duration}" type="text" key="duration" class="edit-program-duration edit-program-attribute-text time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase" placeholder="00:00:00">
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
                    `;
                }
                $("#modal-carrusel-home").modal("show");


                $(".loader-view-container").remove();

                try {
                    $(".carrusel-home-obj").slick("unslick");
                    programmingSlider.html(program);
                    programmingSlider.slick({
                        slidesToShow: 1,
                        dots: true,
                        appendDots: $(".slaider-home-dots"),
                        initialSlide: 0,
                        infinite: false,
                        customPaging: function (slider, i) {
                            var thumb = $(slider.$slides[i]).data();
                            return (
                                "<p class='a-text-bold-teal slider-pagination-item'>" +
                                (i + 1) +
                                "</p>"
                            );
                        }
                    });
                } catch (error) {
                    programmingSlider.html(program);
                    programmingSlider.slick({
                        slidesToShow: 1,
                        dots: true,
                        appendDots: $(".slaider-home-dots"),
                        initialSlide: 0,
                        infinite: false,
                        customPaging: function (slider, i) {
                            var thumb = $(slider.$slides[i]).data();
                            return (
                                "<p class='a-text-bold-teal slider-pagination-item'>" +
                                (i + 1) +
                                "</p>"
                            );
                        }
                    });
                }

                //Genres
                let optionGenre = "";
                data.data.genres.forEach(genre => {
                    optionGenre += `<option value="${genre.title}">${genre.title}</option>`;
                });

                $(".list1").append(optionGenre);
                $(".list1").selectpicker({
                    filter: true,
                    multipleSeparator: ", "
                });
                /*
                Permite a todos los campos de Schedule item log time tener el formato
                tiempo en hh:mm
                */
                $(".schedule-time-input")
                    .toArray()
                    .forEach(scheduleTime => { new Cleave(scheduleTime, scheduleTimeConfig); });
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
                    .forEach(timeInput => { new Cleave(timeInput, timeWithSeconds); });
                /*
                Permite a todos los input con la clase year-input tener el formato YYYY
                */
                $(".year-input")
                    .toArray()
                    .forEach(yearInput => { new Cleave(yearInput, year); });

                for (const chapter of data.data.chapters) {
                    $("#edit-genre-container .filter-option-inner").html(
                        '<div class="filter-option-inner-inner">' +
                        chapter.chapter.program.genre +
                        "</div>"
                    );
                }

            }

            $('.add-file-carrusel').click(function () {
                let id = $(this).attr("id");
                let key = $('.load-carrusel').attr("key");
                imgCarruselHome(id, key);

            })
        }
    });
}

function imgCarruselHome(id, key) {
    $("#img_carrusel_" + id).change(function () {
        viewImg(this, "#img-carrusel-home-" + id, id, key);
        viewEdit();
    });
}

function viewImg(objFileInput, container, id, key) {
    let fileSrt = new FileReader();
    if (objFileInput.files[0]) {
        fileSrt.onload = function (e) {
            $(container).attr('src', e.target.result);
        };
        fileSrt.readAsDataURL(objFileInput.files[0]);
    }
    actualizarImgCarrusel(id, key);
}
function viewEdit() {
    $('.camera_carrusel').attr('src', './images/lapiz-acti.svg')
}


function actualizarImgCarrusel(id, key) {
    debugger
    let logo = document.getElementById("img_carrusel_" + id).files[0].name || "";
    let url = 'http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-vertical/' + logo;
    editAttributeProgram(id, key, url);
}

function getContentHomeCinema(type) {
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
        url: "landing/home",
        success: function (result) {
            let data = JSON.parse(result);
            console.log(data);
            if (data.code == 200) {
                switch (type) {
                    case 'claro-home-header':
                        // Add name
                        $("#landing_name").attr('value', 'Claro Cinema');
                        //Add a class to the button
                        $("#dinamic_btn").addClass('btn-red');
                        //set the width of the image
                        $("#img-logo-home").addClass('img-logo-home');
                        //Set the width of the container
                        $("#dinamic_width").addClass('modal-img-home');
                        $('#inp_canales_subtitulo').val(data.data.block_5_subtitle)
                        $('#inp_url').val(data.data.block_5_icon_channel_url)
                        //Change the logo
                        $("#img-logo-home").attr('src', data.data.block_5_icon_channel);
                        //Modal
                        $("#modal-logo-home").modal("show");
                        $(".loader-view-container").remove();
                        break
                }

            }
        }
    });
}

function getContentHomeHeader(type) {
    $.ajax({
        type: "GET",
        cache: false,
        beforeSend: function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                        <img src="./images/loader.gif" class="loader"/>
                    </div>`
            );
        },
        url: "landing/home",
        success: function (result) {
            let data = JSON.parse(result);
            console.log(data);
            if (data.code == 200) {
                switch (type) {
                    case 'slider-pagination':
                        //Título en header de home
                        let headerTitle1 = $(
                            ".modal-home-encabezado .header-title-1"
                        );
                        //Subtítulo de home
                        let headerTitle2 = $(
                            ".modal-home-encabezado .header-title-2"
                        );
                        //let headerVideo = $(".modal-home-encabezado .video-header");

                        headerTitle1.val(data.data.block_1_title);
                        headerTitle2.val(data.data.block_1_subtitle);
                        // headerVideo.val(data.data.block_1_video_name);
                        if (data.data.block_1_video_name) {
                            let headerVideo = $(".modal-home-encabezado .video-header");
                            //Verificamos si la url es de una imagen
                            if (
                                data.data.block_1_video_name.match(
                                    /\.(jpeg|jpg|gif|png)$/
                                ) != null
                            ) {
                                headerVideo.html(`
                                <img src="${data.data.block_1_video_name}" alt="" class="d-flex w-100" id="image-promo-header-home">
                                `);
                            } else {
                                //La url es de un video
                                headerVideo.html(`
                                <img src="./images/basic-icons/pencil-edit-teal.svg" alt="add-photo" class="add-photo promo-icon cursor-pointer" style="width: 62px;
                                position: absolute;
                                transform: translate(215px, -112px);" />
                                <span class="a-text-bold-warm text-plus p-2 pr-3 pl-3 white-shadow position-absolute " style="    transform: translate(207px, -40px);">Añade tu archivo <br>
                                jpg 472px X 295px </span>
                                <video class="w-100 h-100 home-video" id="video-promo-header-home" style="display: block" controls muted autoplay>
                                <source src="${data.data.block_1_video_name}" type="video/mp4">
                                
                                 </video>`);
                            }
                        }
                        $(".programming-slider-home").slick({
                            slidesToShow: 1,
                            dots: true,
                            appendDots: $(
                                ".programming-slider-dots-home"
                            ),
                            initialSlide: 0,
                            
                            arrows: true,
                            prevArrow: '<img src="./images/prev.png" class="arrow-prev" />',
                            nextArrow: '<img src="./images/next.png" class="arrow-next" />',
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

                        //Mostramos el modal
                        $(".modal-home-encabezado").modal("show");
                        //Eliminamos
                        $(".loader-view-container").remove();
                        break

                    case 'claro-home-header':
                        $("#landing_name").attr('value', 'Canal Claro');
                        $("#img-logo-home").addClass('img-logo-home-claro');
                        $("#dinamic_width").addClass('modal-img-home-claro');
                        $("#dinamic_btn").addClass('btn-red');
                        if (data.data.block_3_icon_channel == "") {
                            $("#img-logo-home").attr('src', './images/modals/img-back-promo.png');
                        } else {
                            $("#img-logo-home").attr('src', data.data.block_3_icon_channel);
                        }
                        $("#inp_canales_subtitulo").val(data.data.block_3_subtitle);
                        $("#inp_url").val(data.data.block_3_icon_channel_url);
                        $("#modal-logo-home").modal("show");
                        $(".loader-view-container").remove();
                        break
                }
            }
        }
    });
}

function getContentHomeHeaderCinema() {
    $.ajax({
        type: "GET",
        cache: false,
        beforeSend: function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                        <img src="./images/loader.gif" class="loader"/>
                    </div>`
            );
        },
        url: "landing/home",
        success: function (result) {
            let data = JSON.parse(result);
            console.log(data);
            if (data.code == 200) {

                $("#landing_name").attr('value', 'Claro Cinema');
                //Add a class to the button
                $("#dinamic_btn").addClass('btn-red');
                //set the width of the image
                $("#img-logo-home").addClass('img-logo-home-claro');
                //Set the width of the container
                $("#dinamic_width").addClass('modal-img-home-claro');
                $('#inp_canales_subtitulo').val(data.data.block_5_subtitle)
                $('#inp_url').val(data.data.block_5_button1_url)
                //Change the logo
                $("#img-logo-home").attr('src', data.data.block_5_icon_channel);
                //Modal
                $("#modal-logo-home").modal("show");
                $(".loader-view-container").remove();



            }
        }
    });

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
                let landingTitle = $(".modal-titles .section-landing-title");
                let landingSubtitle = $(
                    ".modal-titles .section-landing-subtitle"
                );
                landingTitle.attr("key", "block_3_title");
                landingSubtitle.attr("key", "block_3_subtitle");
                landingTitle.val(data.data.block_3_title);
                landingSubtitle.val(data.data.block_3_subtitle);
                $(".modal-titles").modal("show");

                $(".loader-view-container").remove();
            }
        }
    });
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
                let landingTitle = $(".modal-titles .section-landing-title");
                let landingSubtitle = $(
                    ".modal-titles .section-landing-subtitle"
                );
                landingTitle.attr("key", "block_4_carrusel_1_title");
                landingSubtitle.attr("key", "block_4_carrusel_1_subtitle");
                landingTitle.val(data.data.block_4_carrusel_1_title);
                landingSubtitle.val(data.data.block_4_carrusel_1_subtitle);
                $(".modal-titles").modal("show");

                $(".loader-view-container").remove();
            }
        }
    });
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
                let landingTitle = $(".modal-titles .section-landing-title");
                let landingSubtitle = $(
                    ".modal-titles .section-landing-subtitle"
                );
                landingTitle.attr("key", "block_4_carrusel_2_title");
                landingSubtitle.attr("key", "block_4_carrusel_2_subtitle");
                landingTitle.val(data.data.block_4_carrusel_2_title);
                landingSubtitle.val(data.data.block_4_carrusel_2_subtitle);
                $(".modal-titles").modal("show");
                $(".loader-view-container").remove();
            }
        }
    });
}

function getContentConcertChannel(type) {
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
                switch (type) {
                    case "slider-pagination":
                        let programmingSlider = $(
                            ".programming-slider-concert-channel"
                        );
                        let counter = 1;
                        let image = "";
                        while (true) {
                            try {
                                if (
                                    data.data[`block_1_image_slider_${counter}`]
                                ) {
                                    image += `
                                    <div class="bor thumbnail-image-program position-relative h-100">
                                        <input type="file" name="image_programming[]" id="image_programming_1" class="input-image-program d-none image_programming " data-index="1">
                                        <label for="image_programming_1"
                                            class="h-100 mb-0 d-flex justify-content-center  align-items-center flex-column   load-programming-carousel">
                                            <img src="./images/synopsis/camara.svg" alt="add-photo"
                                                class=" cursor-pointer add-photo " />
                                            <span class="a-text-bold-warm banner-text text-plus mt-3">1000px X 342px</span>
                                            <img src="${data.data["block_1_image_slider_" + counter]
                                        }"
                                                class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                                        </label>
                                    </div>
                                    `;

                                    counter++;
                                } else {
                                    break;
                                }
                            } catch (error) {
                                break;
                            }
                        }

                        $(".programming-slider-concert-channel").html(image);
                        $(".modal-programming-carousel-concert").modal("show");
                        try {
                            programmingSlider.slick("unslick");
                            programmingSlider.slick({
                                slidesToShow: 1,
                                dots: true,
                                appendDots: $(
                                    ".programming-slider-dots-concert-channel"
                                ),
                                initialSlide: 0,
                                infinite: false,
                                customPaging: function (slider, i) {
                                    var thumb = $(slider.$slides[i]).data();
                                    return (
                                        "<p class='a-text-bold-teal slider-pagination-item'>" +
                                        (i + 1) +
                                        "</p>"
                                    );
                                }
                            });
                        } catch (error) {
                            programmingSlider.slick({
                                slidesToShow: 1,
                                dots: true,
                                appendDots: $(
                                    ".programming-slider-dots-concert-channel"
                                ),
                                initialSlide: 0,
                                infinite: false,
                                customPaging: function (slider, i) {
                                    var thumb = $(slider.$slides[i]).data();
                                    return (
                                        "<p class='a-text-bold-teal slider-pagination-item'>" +
                                        (i + 1) +
                                        "</p>"
                                    );
                                }
                            });
                        }
                        $(".add-banner-image-concert").click(function () {
                            //Cada vez que se haga click, el contador incrementa
                            let slideIndex =
                                $(".load-programming-carousel").length + 1;

                            //Agregamos un slide al slider de programación
                            $(".programming-slider-concert-channel").slick(
                                "slickAdd",
                                `
                                <div class="slick-slide">
                                    <div>
                                        <div class="bor thumbnail-image-program position-relative h-100">
                                            <input type="file" name="image_programming[]" id="image_programming_${slideIndex}" class="input-image-program image_programming" data-index="${slideIndex}" d-none" tabindex="0">
                                            <label for="image_programming_${slideIndex}" class="h-100 mb-0 d-flex justify-content-center align-items-center flex-column load-programming-carousel">
                                                <img src="./images/synopsis/camara.svg" alt="add-photo" class=" cursor-pointer add-photo">
                                                <span class="a-text-bold-warm banner-text text-plus mt-3">1000px X 342px</span>
                                                <img src="./images/synopsis/image-synopsis-carrusel.jpg" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program">
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                `
                            );
                        });
                        $(".banner-slider-button").click(function () {
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
                                    imagesPositions.push(
                                        $(this).attr("data-index")
                                    );
                                }
                                imagesProgramming.push(this.files[0]);
                            });

                            let data = new FormData();
                            //Hacemos un for para mandar file1, file2, etc. en el form data
                            for (
                                let index = 0; index < imagesProgramming.length; index++
                            ) {
                                let file = "file" + (index + 1).toString();
                                file = file.toString();
                                data.append(file, imagesProgramming[index]);
                            }
                            //Posiciones de las imágenes
                            data.append("positions", imagesPositions);
                            //Hora inicio y fin
                            data.append("date", $("#date-start-input").val());
                            data.append("landing", "Concert Channel");
                            setImageSliderBanner(data);
                        });

                        break;
                    default:
                        break;
                }
            }
            $(".loader-view-container").remove();
        }
    });
}

//Obtenemos el video promocional en el landing de concert channel
function getConcertChannelPromo() {
    $.ajax({
        type: "POST",
        beforeSend: function () {
            $("body").append(
                ` <div class = "loader-view-container pointer-none">
                <img src = "./images/loader.gif" class = "loader"/>
                </div>`
            );
        },
        url: "landing/concertChannel",
        success: function (result) {
            let json = JSON.parse(result);
            if (json.code == 200) {
                $(".modal-promos-concert").modal("show");
                $("#upload-concert-promo-button").attr(
                    "key",
                    "block_3_video_url"
                );
                //Checamos si existe el vídeo de promoción en concert channel
                if (json.data.block_3_video_url) {
                    let promoContainer = $("#concert-promo-container");
                    //Verificamos si la url es de una imagen
                    if (
                        json.data.block_3_video_url.match(
                            /\.(jpeg|jpg|gif|png)$/
                        ) != null
                    ) {
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
            $(".loader-view-container").remove();
        }
    });
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
                $(".modal-header-concert-channel").modal("hide");
            }
            $(".loader-view-container").remove();
        }
    });
}

//edit header home

function editHomeHeader(data) {
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
        url: "landing/editHomeHeader",
        success: function (result) {
            let json = JSON.parse(result);
            console.log(json);
            if (json.code == 200) {
                $(".modal-home-encabezado").modal("hide");
            }
            $(".loader-view-container").remove();

        }
    });
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
            $(".loader-view-container").remove();
        }
    });
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
            let json = JSON.parse(result);
            if (json.code == 200) {
                $(".modal-promos-concert").modal("hide");
                $(".modal-promo-cinema").modal("hide");
            }
            $(".loader-view-container").remove();
        }
    });
}

function editPromoLandingCinema(data) {
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
        url: "landing/editPromoLandingCinema",
        success: function (result) {
            console.log(result);
            let json = JSON.parse(result);
            if (json.code == 200) {
                $(".modal-promos-concert").modal("hide");
                $(".modal-promo-cinema").modal("hide");
            }
            $(".loader-view-container").remove();
        }
    });
}

//Conseguir la programación de un landing por primera vez, abriendo el modal con programas
function getProgrammingLanding(date, landing) {
    $.ajax({
        type: "GET",
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
                let programming = "";
                let landingClass = "";
                switch (landing) {
                    case "canal-claro":
                        programming = json.data[0].programing[0].programs;
                        landingClass = "programming-canal-landing";
                        break;
                    case "concert-channel":
                        programming = json.data[1].programing[0].programs;
                        landingClass = "programming-concert-landing";
                        break;
                    case "claro-cinema":
                        programming = json.data[2].programing[0].programs;
                        landingClass = "programming-cinema-landing";
                        break;
                    default:
                        break;
                }

                if (programming.length > 0) {
                    let chapter = "";
                    for (const program of programming) {
                        chapter += `
                        <div class="p-3 border-t border-r border-l border-b position-relative mb-3 cursor-pointer">
                        <img src="./images/pencil.svg" alt="" class="pencil-edit programming-pencil-${landing}"
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
                        `;
                    }

                    $(".modal-programming-contanier").html(chapter);
                }
                $(".modal-programming-landing").modal("show");
                let calendarSlider2 = $(".calendar-slider2");
                createCalendarDays(calendarSlider2, landingClass);
                try {
                    calendarSlider2.slick("unslick");
                    createSlickSlider(calendarSlider2, calendarSlick);
                } catch (error) {
                    createSlickSlider(calendarSlider2, calendarSlick);
                }
            }
            $(".loader-view-container").remove();
        }
    });
}

//Conseguir únicamente programas de un landing, sin mostrar el modal
function getProgramsLanding(date, landing = "") {
    $.ajax({
        type: "GET",
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
                let programming = "";
                let container = $(".modal-programming-contanier");
                switch (landing) {
                    case "canal-claro":
                        programming = json.data[0].programing[0].programs;

                        break;
                    case "concert-channel":
                        programming = json.data[1].programing[0].programs;
                        break;
                    case "claro-cinema":
                        programming = json.data[2].programing[0].programs;
                        break;

                    default:
                        break;
                }
                if (programming.length > 0) {
                    let chapter = "";
                    for (const program of programming) {
                        chapter += `
                        <div class="p-3 border-t border-r border-l border-b position-relative mb-3">
                        <img src="./images/pencil.svg" alt="" class="pencil pencil-edit programming-pencil-${landing}"
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
                        `;
                    }
                    container.html(chapter);
                }
            }
            $(".loader-view-container").remove();
        }
    });
}

// CLARO CANAL
function getModalsCanalClaro(type) {
    $.ajax({
        type: "GET",
        beforeSend: function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
        },
        url: "landing/header",
        success: function (result) {
            let obj = JSON.parse(result);
            if (obj.code == 200) {
                console.log(obj);
                switch (type) {
                    // GET HEADER
                    case "slider-pagination":
                        let counter = 1;
                        let image = "";

                        let programmingSlider = $(
                            ".programming-slider-canal-claro"
                        );
                        while (true) {
                            if (obj.data[`block_1_image_slider_${counter}`]) {
                                image += `
                                <div class="bor thumbnail-image-program position-relative h-100">
                                    <input type="file" name="image_programming[]" id="image_programming_${counter}" class="input-image-program d-none image_programming " data-index="${counter}">
                                    <label for="image_programming_${counter}"
                                        class="h-100 mb-0 d-flex justify-content-center  align-items-center flex-column   load-programming-carousel">
                                        <img src="./images/synopsis/camara.svg" alt="add-photo"
                                            class="cursor-pointer add-photo " />
                                        <span class="a-text-bold-warm text-plus p-2 banner-text mt-3">1000px X 342px</span>
                                        <img src="${obj.data[
                                    "block_1_image_slider_" +
                                    counter
                                    ]
                                    }"
                                            class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                                    </label>
                                </div>
                                `;
                                counter++;
                            } else {
                                break;
                            }
                        }

                        programmingSlider.html(image);
                        $(".modal-programming-carousel-claro").modal("show");
                        try {
                            programmingSlider.slick("unslick");
                            programmingSlider.not(".slick-initialized").slick({
                                slidesToShow: 1,
                                dots: true,
                                appendDots: $(
                                    ".programming-slider-dots-canal-claro"
                                ),
                                initialSlide: 0,
                                infinite: false,
                                customPaging: function (slider, i) {
                                    var thumb = $(slider.$slides[i]).data();
                                    
                                    return (
                                        
                                        "<p class='a-text-bold-teal slider-pagination-item'>" +
                                        (i + 1) + "</br>"+
                                        "</p>"

                                    );
                              

                                }
                            });
                        } catch (error) {
                            programmingSlider.not(".slick-initialized").slick({
                                slidesToShow: 1,
                                dots: true,
                                appendDots: $(
                                    ".programming-slider-dots-canal-claro"
                                ),
                                initialSlide: 0,
                                infinite: false,
                                customPaging: function (slider, i) {
                                    var thumb = $(slider.$slides[i]).data();
                                    return (
                                        "<p class='a-text-bold-teal slider-pagination-item'>" +
                                        (i + 1) +
                                        "</p>"
                                    );
                                }
                            });
                        }

                        $(".banner-slider-button").click(function () {
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
                                    imagesPositions.push(
                                        $(this).attr("data-index")
                                    );
                                }
                                imagesProgramming.push(this.files[0]);
                            });

                            let data = new FormData();
                            //Hacemos un for para mandar file1, file2, etc. en el form data
                            for (
                                let index = 0; index < imagesProgramming.length; index++
                            ) {
                                let file = "file" + (index + 1).toString();
                                file = file.toString();
                                data.append(file, imagesProgramming[index]);
                            }
                            //Posiciones de las imágenes
                            data.append("positions", imagesPositions);
                            //Hora inicio y fin
                            data.append("date", $("#date-start-input").val());
                            data.append("landing", "Canal Claro");
                            setImageSliderBanner(data);
                        });

                        break;
                    case "claro-header":
                        $("#img-header-claro").html(
                            '<img src="' + obj.data.block_2_icon_channel + '">'
                        );
                        $(".inp-text-modal-1").val(obj.data.block_2_title_1);
                        $(".inp-text-modal-2").val(obj.data.block_2_title_2);
                        $(".inp-text-modal-3").val(
                            obj.data.block_2_button_title
                        );
                        $("#modal-header").modal("show");
                        break;
                    // GET HEADER
                    // GET TITLE
                    case "claro-title":
                        $(".inp-title-modal").val(obj.data.block_3_title);
                        $(".inp-title-modal").attr("key", "block_3_title");
                        $(".inp-sub-title-modal").val(obj.data.block_3_subtitle);
                        $(".inp-sub-title-modal").attr("block_3_subtitle");
                        $("#modal-title").modal("show");
                        break;
                    // GET TITLE
                    // GET PROMO
                    case "claro-promo":
                        $("#back-promo-claro").html(
                            '<video autoplay muted controls class="img-back-modal img-promo" src="' +
                            obj.data.block_3_video_url +
                            '" /></video>'
                        );
                        $("#modal-promo").modal("show");
                        break;
                    // GET PROMO
                    // GET TITLE CARRUSEL 1
                    case "claro-carrusel-title":
                        $(".inp-title-modal").val(
                            obj.data.block_4_carrusel_1_title
                        );
                        $(".inp-title-modal").attr("block_4_carrusel_1_title");
                        $(".inp-sub-title-modal").val(
                            obj.data.block_4_carrusel_1_subtitle
                        );
                        $(".inp-sub-title-modal").attr(
                            "block_4_carrusel_1_subtitle"
                        );
                        $("#modal-title").modal("show");
                        break;
                    // GET TITLE CARRUSEL 1
                    // GET TITLE CARRUSEL 1
                    case "claro-carrusel-title2":
                        $(".inp-title-modal").val(
                            obj.data.block_4_carrusel_2_title
                        );
                        $(".inp-title-modal").attr("block_4_carrusel_2_title");
                        $(".inp-sub-title-modal").val(
                            obj.data.block_4_carrusel_2_subtitle
                        );
                        $(".inp-sub-title-modal").attr(
                            "block_4_carrusel_2_subtitle"
                        );
                        $("#modal-title").modal("show");
                        break;
                    // GET TITLE CARRUSEL 1
                }
            }

            $(".loader-view-container").remove();
        }
    });
}

function setImageSliderBanner(data) {
    $.ajax({
        type: "POST",
        data: data,
        processData: false, //esto es para poder pasar el archivo
        contentType: false, //esto es para poder pasar el archivo
        cache: false,
        url: "landing/setImageSliderBanner",
        beforeSend: function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
        },
        success: function (result) {
            console.log(result);
            $(".loader-view-container").remove();
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
    });
}

function FileHeader(objFileInput) {
    $("body").append(LOADER);
    if (objFileInput.files[0]) {
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            $("#" + objFileInput.name).html(
                '<img src="' + e.target.result + '" />'
            );
            $(".loader-view-container").remove();
        };
    }
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
                $("#modal-header").modal("hide");
            }
            $(".loader-view-container").remove();
        }
    });
}

function FilePromoImg(objFileInput) {
    $("body").append(LOADER);
    if (objFileInput.files[0]) {
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            $("#back-promo-claro").html(
                '<img class="img-back-modal img-promo" src="' +
                e.target.result +
                '" />'
            );
        };
    }
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
                $("#modal-title").modal("hide");
            }
            $(".loader-view-container").remove();
        }
    });

    // Canal Claro
}

function FilePromoVideo(objFileInput) {
    $("body").append(LOADER);
    if (objFileInput.files[0]) {
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            $("#back-promo-claro").html(
                '<video autoplay controls class="img-back-modal img-promo" src="' +
                e.target.result +
                '" /></video>'
            );
            $(".loader-view-container").remove();
        };
        fileReader.readAsDataURL(objFileInput.files[0]);
    }
}

//Obtener los programas que se encuentran en los carruseles de hasta abajo en cada landing
function getPromotionalsProgramsCarousel(
    idCarousel,
    landing,
    landingClass = "thumbnail-header"
) {
    $.ajax({
        type: "POST",
        url: "landing/getPromotionalsProgramsCarousel",
        data: {
            idCarousel,
            landing
        },
        cache: false,
        beforeSend: function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
        },

        success: function (result) {
            let data = JSON.parse(result);
            console.log(data);
            $(".loader-view-container").remove();
            let program = "";
            let titles = "";
            let idLanding = "";
            let classButton = ""; //Nos sirve para distinguir a qué modal y en qué landing damos click
            //Limpiamos input en donde se encuentran las imágenes
            $(".edit-image-carrusel").val("");
            //Verificamos cuál landing es y de ahí asignamos un id
            switch (landing) {
                case "Canal Claro":
                    idLanding = 1;
                    classButton = "button-modal-canal-claro";
                    break;
                case "Concert Channel":
                    idLanding = 2;
                    classButton = "button-modal-concert-channel";
                    break;
                case "Claro Cinema":
                    idLanding = 3;
                    break;

                default:
                    break;
            }
            //Capítulos que se encuentran en el carrusel
            $(".carrusel1-slider-concert").html("");

            $("#numCarrusel").html(
                '<h2 class="edit-program-modal-title h2 text-center a-text-black-brown-two pt-5">PROGRAMACIÓN PRINCIPAL - CARRUSEL ' +
                idCarousel +
                "</h2>"
            );

            for (const chapter of data.data.chapters) {
                //Variables a evaluar
                //Imagen del programa
                titles += `<option value="${chapter.chapter.title}">${chapter.chapter.title}</option>`;
                let image =
                    chapter.chapter.program.thumbnail_list_horizontal ||
                    "./images/synopsis/image-synopsis-carrusel.jpg";
                let inLandingSwitch = "";
                let inLandingDates = "";
                let inLandingTimes = "";
                //Validaciones de si el programa se encuentra en algún landing
                if (chapter.chapter.in_landing == 1) {
                    //Switch de landing
                    inLandingSwitch = `
                    <!--Switch-->
                    <div class="d-flex align-items-center mb-3">
                        <input name="yes-landing-carrusel-${chapter.chapter.id}" type="radio" id="yes-landing-carrusel-${chapter.chapter.id}" key="in_landing_begin value="1" chapter_id="${chapter.chapter.id}"
                            class="edit-switch-landing edit-landing-yes" checked />
                        <label for="yes-landing-carrusel-${chapter.chapter.id}" id="siestado-landing"
                            class="mb-0 si-estilo cursor-pointer switch-label">
                            Sí</label>
                        <input type="radio" id="no-landing-carrusel-${chapter.chapter.id}" value="0"
                            class="edit-switch-landing switch-table-edit edit-landing-no"
                             name="yes-landing-carrusel-${chapter.chapter.id}" key="in_landing" chapter_id="${chapter.chapter.id}"/>
                        <label for="no-landing-carrusel-${chapter.chapter.id}" id="noestado-landing"
                            class="mb-0 no-estilo cursor-pointer switch-label">
                            No</label>
                    </div>
                    `;

                    //Fechas
                    var dateExpirationLanding = "";
                    var timeExpiration = "";
                    if (chapter.chapter.in_landing_expiration) {
                        var dateTimeExpiration = chapter.chapter.in_landing_expiration.split(
                            " "
                        );
                        let dateExpiration = dateTimeExpiration[0].split("-");
                        dateExpirationLanding = `${dateExpiration[2]}-${dateExpiration[1]}-${dateExpiration[0]}`;
                        timeExpiration = dateTimeExpiration[1];
                    }
                    var dateBeginLanding = "";
                    var timeBegin = "";

                    //Revisamos si
                    if (chapter.chapter.in_landing_begin) {
                        var dateTimeBegin = chapter.chapter.in_landing_begin.split(
                            " "
                        );
                        let dateBegin = dateTimeBegin[0].split("-");
                        dateBeginLanding = `${dateBegin[2]}-${dateBegin[1]}-${dateBegin[0]}`;
                        timeBegin = dateTimeBegin[1];
                    }
                    console.log(chapter.chapter.in_landing_begin);

                    inLandingDates = `
                    <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                        <span class="a-text-bold-warm">Inicio: <input type="text"
                                class="input-basic edit-program-input a-text-bold-warm edit-program-attribute-text schedule-date-input edit-landing-date-begin"
                                placeholder="00-00-0000" key="in_landing_begin" chapter_id="${chapter.chapter.id}" value="${dateBeginLanding}" /></span>
                    </div>
                    <div class="mb-4 text-center edit-rectangle-small-container backwhite py-3">
                        <span class="a-text-bold-warm">Fin: <input type="text"
                                class="input-basic edit-program-input a-text-bold-warm edit-program-attribute-text schedule-date-input edit-landing-date-end"
                                key="in_landing_expiration" chapter_id="${chapter.chapter.id}" placeholder="00-00-0000" value="${dateExpirationLanding}"></span>
                    </div>
                    `;

                    inLandingTimes = `
                    <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                    <span class="a-text-bold-warm">Inicio: <input chapter_id="${chapter.chapter.id}" type="text"
                            class="time-seconds-input input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase edit-landing-time-begin"
                            key="in_landing_begin" value="${timeBegin}" placeholder="00:00:00"></span>
                    </div>
                    <div class="text-center edit-rectangle-small-container backwhite py-3">
                        <span class="a-text-bold-warm">Fin: <input type="text"
                                class="time-seconds-input input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase edit-landing-time-end"
                                key="in_landing_expiration" chapter_id="${chapter.chapter.id}" value="${timeExpiration}" placeholder="00:00:00"></span>
                    </div>
                    `;
                } else {
                    inLandingSwitch = `
                    <!--Switch-->
                    <div class="d-flex align-items-center mb-3">
                        <input name="yes-landing-carrusel-${chapter.chapter.id}" type="radio" id="yes-landing-carrusel-${chapter.chapter.id}" value="1" chapter_id="${chapter.chapter.id}" class="edit-switch-landing switch-table-edit edit-landing-yes" key="in_landing" />
                        <label for="yes-landing-carrusel-${chapter.chapter.id}" id="siestado-landing"
                            class="mb-0 si-estilo cursor-pointer switch-label">
                            Sí</label>
                        <input type="radio" id="no-landing-carrusel-${chapter.chapter.id}" value="0"
                            class="edit-switch-landing switch-table-edit edit-landing-no" chapter_id="${chapter.chapter.id}"
                            checked name="yes-landing-carrusel-${chapter.chapter.id}" key="in_landing"/>
                        <label for="no-landing-carrusel-${chapter.chapter.id}" id="noestado-landing"
                            class="mb-0 no-estilo cursor-pointer switch-label">
                            No</label>
                    </div>
                    `;
                    inLandingTimes = `
                    <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                    <span class="a-text-bold-warm">Inicio: <input type="text"
                            class="time-seconds-input input-basic edit-program-input edit-program-attribute-text chapter_id="${chapter.chapter.id}" a-text-bold-warm text-uppercase edit-landing-time-begin"
                            key="in_landing_begin" value="" placeholder="00:00:00"></span>
                    </div>
                    <div class="text-center edit-rectangle-small-container backwhite py-3">
                        <span class="a-text-bold-warm">Fin: <input type="text"
                                class="time-seconds-input input-basic edit-program-input edit-program-attribute-text  a-text-bold-warm text-uppercase edit-landing-time-end" chapter_id="${chapter.chapter.id}"
                                key="in_landing_expiration" value="" placeholder="00:00:00"></span>
                    </div>
                    `;
                    inLandingDates = `
                    <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                        <span class="a-text-bold-warm">Inicio: <input type="text"
                                class="input-basic edit-program-input a-text-bold-warm edit-program-attribute-text schedule-date-input edit-landing-date-begin"
                                placeholder="00-00-0000" chapter_id="${chapter.chapter.id}" key="in_landing_begin" value="" /></span>
                    </div>
                    <div class="mb-4 text-center edit-rectangle-small-container backwhite py-3">
                        <span class="a-text-bold-warm">Fin: <input type="text"
                                class="input-basic edit-program-input a-text-bold-warm edit-program-attribute-text schedule-date-input edit-landing-date-end"
                                key="in_landing_expiration" placeholder="00-00-0000" chapter_id="${chapter.chapter.id}" value=""></span>
                    </div>`;
                }

                //HOME
                let inHomeSwitch = "";
                let inHomeDates = "";
                let inHomeTimes = "";
                //Verificamos si el programa se encuentra en el home
                if (chapter.chapter.in_home == 1) {
                    inHomeSwitch = `
                    <div class="d-flex align-items-center edit-switches-home-container">
                        <input type="radio" name="switch-home-carrusel-${chapter.chapter.id}" id="edit-in-home-yes-${chapter.chapter.id}" value="1" chapter_id="${chapter.chapter.id}"
                            class="edit-switch-home edit-program-switch edit-in-home-yes"
                            key="in_home" checked/>
                        <label for="edit-in-home-yes-${chapter.chapter.id}" id="siestado-landing"
                            class="si-estilo cursor-pointer mb-0 switch-label">
                            Sí</label>
                        <input type="radio" name="switch-home-carrusel-${chapter.chapter.id}"  id="edit-in-home-no-${chapter.chapter.id}" value="0" chapter_id="${chapter.chapter.id}"
                            class="edit-switch-home edit-program-switch edit-in-home-no"
                            key="in_home" />
                        <label for="edit-in-home-no-${chapter.chapter.id}" id="noestado-landing"
                            class="mb-0 no-estilo cursor-pointer switch-label">
                            No</label>
                    </div>
                    `;

                    //Fechas
                    let dateHomeExpiration = "";
                    let timeHomeExpiration = "";
                    let dateTimeHomeExpiration = "";
                    if (chapter.chapter.in_home_expiration) {
                        dateTimeHomeExpiration = chapter.chapter.in_home_expiration.split(
                            " "
                        );
                        let dateHome = dateTimeHomeExpiration[0].split("-");
                        dateHomeExpiration = `${dateHome[2]}-${dateHome[1]}-${dateHome[0]}`;
                        timeHomeExpiration = dateTimeHomeExpiration[1];
                    }

                    //
                    let dateHomeBegin = "";
                    let timeHomeBegin = "";
                    let dateHomeTimeBegin = "";
                    //Revisamos si
                    if (chapter.chapter.in_home_begin) {
                        dateHomeTimeBegin = chapter.chapter.in_home_begin.split(
                            " "
                        );
                        let dateHome = dateHomeTimeBegin[0].split("-");
                        dateHomeBegin = `${dateHome[2]}-${dateHome[1]}-${dateHome[0]}`;
                        timeHomeBegin = dateHomeTimeBegin[1];
                    }

                    inHomeDates = `
                    <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                    <span class="a-text-bold-warm">Inicio: <input key="in_home_begin"
                            type="text" value="${dateHomeBegin}"
                            class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-home-date-begin edit-program-attribute-text"
                            placeholder="00-00-0000" chapter_id="${chapter.chapter.id}" /></span>
                    </div>
                    <div class="mb-4 text-center edit-rectangle-small-container  backwhite py-3">
                        <span class="a-text-bold-warm">Fin:
                            <input type="text" key="in_home_expiration"
                                class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-home-date-end edit-program-attribute-text" chapter_id="${chapter.chapter.id}" value="${dateHomeExpiration}"
                                placeholder="00-00-0000"></span>
                    </div>
                    `;
                    inHomeTimes = `
                    <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                    <span class="a-text-bold-warm">Inicio: <input key="in_home_begin"
                            type="text" value="${timeHomeBegin}" chapter_id="${chapter.chapter.id}"
                            class="time-seconds-input edit-program-attribute-text input-basic edit-program-input a-text-bold-warm text-uppercase edit-home-time-begin"
                            placeholder="00:00:00"></span>
                    </div>
                    <div class="text-center edit-rectangle-small-container backwhite py-3">
                        <span class="a-text-bold-warm">Fin: <input type="text" key="in_home_expiration" chapter_id="${chapter.chapter.id}"
                                class="time-seconds-input edit-program-attribute-text input-basic edit-program-input a-text-bold-warm text-uppercase edit-home-time-end" value="${timeHomeExpiration}"
                                placeholder="00:00:00"></span>
                    </div>
                    `;
                } else {
                    inHomeSwitch = `
                    <div class="d-flex align-items-center edit-switches-home-container">
                        <input type="radio" name="switch-home-carrusel-${chapter.chapter.id}" chapter_id="${chapter.chapter.id}" id="edit-in-home-yes-${chapter.chapter.id}" value="1"
                            class="edit-switch-home edit-program-switch edit-in-home-yes"
                            key="in_home" />
                        <label for="edit-in-home-yes-${chapter.chapter.id}" id="siestado-landing"
                            class="si-estilo cursor-pointer mb-0 switch-label">
                            Sí</label>
                        <input type="radio" name="switch-home-carrusel-${chapter.chapter.id}" chapter_id="${chapter.chapter.id}" id="edit-in-home-no-${chapter.chapter.id}" value="0"
                            class="edit-switch-home edit-program-switch edit-in-home-no"
                            key="in_home" checked/>
                        <label for="edit-in-home-no-${chapter.chapter.id}" id="noestado-landing"
                            class="mb-0 no-estilo cursor-pointer switch-label">
                            No</label>
                    </div>
                    `;
                    inHomeDates = `
                    <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                    <span class="a-text-bold-warm">Inicio: <input key="in_home_begin"
                            type="text" value=""
                            class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-home-date-begin edit-program-attribute-text"
                            placeholder="00-00-0000" chapter_id="${chapter.chapter.id}" /></span>
                    </div>
                    <div class="mb-4 text-center edit-rectangle-small-container backwhite py-3">
                        <span class="a-text-bold-warm">Fin:
                            <input type="text" key="in_home_expiration"
                                class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-home-date-end edit-program-attribute-text" chapter_id="${chapter.chapter.id}" value=""
                                placeholder="00-00-0000"></span>
                    </div>
                    `;
                    inHomeTimes = `
                    <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                    <span class="a-text-bold-warm">Inicio: <input key="in_home_begin"
                            type="text" value=""
                            class="time-seconds-input edit-program-attribute-text input-basic edit-program-input a-text-bold-warm text-uppercase edit-home-time-begin" chapter_id="${chapter.chapter.id}"
                            placeholder="00:00:00"></span>
                    </div>
                    <div class="text-center edit-rectangle-small-container backwhite py-3">
                        <span class="a-text-bold-warm">Fin: <input type="text" key="in_home_expiration"
                                class="time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase edit-program-attribute-text edit-home-time-end" value=""
                                placeholder="00:00:00" chapter_id="${chapter.chapter.id}"></span>
                    </div>
                    `;
                }
                let scheduleDate = chapter.chapter.day.split("-");
                let subbed = "";
                if (chapter.chapter.subbed == 0) {
                    subbed = `
                    <div class="d-flex">
                        <input type="radio" id="yes-subbed-${chapter.chapter.id}" name="subbed-${chapter.chapter.id}" value="1" chapter_id="${chapter.chapter.id}"
                            class="edit-program-switch switch-landing edit-subbed-yes"
                            key="subbed" />
                        <label for="yes-subbed-${chapter.chapter.id}" id="siestado-landing"
                            class="si-estilo cursor-pointer mb-0 switch-label">
                            Sí</label>
                        <input type="radio" name="subbed-${chapter.chapter.id}" id="no-subbed-${chapter.chapter.id}" value="0" checked chapter_id="${chapter.chapter.id}"
                            class="edit-program-switch switch-landing switch-table-edit edit-subbed-no"
                            key="subbed" />
                        <label for="no-subbed-${chapter.chapter.id}" id="noestado-landing"
                            class="mb-0 no-estilo cursor-pointer switch-label">
                            No</label>
                    </div>
                    `;
                } else {
                    subbed = `
                    <div class="d-flex">
                        <input type="radio" name="subbed-${chapter.chapter.id}" id="yes-subbed-${chapter.chapter.id}" checked value="1" chapter_id="${chapter.chapter.id}"
                            class="edit-program-switch switch-landing edit-subbed-yes"
                            key="subbed" />
                        <label for="yes-subbed-${chapter.chapter.id}" id="siestado-landing"
                            class="si-estilo cursor-pointer mb-0 switch-label">
                            Sí</label>
                        <input type="radio" name="subbed-${chapter.chapter.id}" id="no-subbed-${chapter.chapter.id}" value="0" chapter_id="${chapter.chapter.id}"
                            class="edit-program-switch switch-landing switch-table-edit edit-subbed-no"
                            key="subbed" />
                        <label for="no-subbed-${chapter.chapter.id}" id="noestado-landing"
                            class="mb-0 no-estilo cursor-pointer switch-label">
                            No</label>
                    </div>
                    `;
                }
                let dubbed = "";
                if (chapter.chapter.dubbed == 0) {
                    dubbed = `
                    <div class="d-flex">
                        <input type="radio" id="yes-dubbed-${chapter.chapter.id}" value="1" name="dubbed-${chapter.chapter.id}"
                            class="edit-program-switch switch-landing edit-dubbed-yes"
                            key="dubbed" chapter_id="${chapter.chapter.id}"/>
                        <label for="yes-dubbed-${chapter.chapter.id}" id="siestado-landing"
                            class="si-estilo cursor-pointer mb-0 switch-label">
                            Sí</label>
                        <input type="radio" id="no-dubbed-${chapter.chapter.id}" value="0" checked name="dubbed-${chapter.chapter.id}"
                            class="edit-program-switch switch-landing switch-table-edit edit-dubbed-no"
                            key="dubbed" chapter_id="${chapter.chapter.id}"/>
                        <label for="no-dubbed-${chapter.chapter.id}" id="noestado-landing"
                            class="mb-0 no-estilo cursor-pointer switch-label">
                            No</label>
                    </div>
                    `;
                } else {
                    dubbed = `
                    <div class="d-flex">
                        <input type="radio" id="yes-dubbed-${chapter.chapter.id}" name="dubbed-${chapter.chapter.id}" value="1" checked
                            class="edit-program-switch switch-landing edit-dubbed-yes"
                            key="dubbed" chapter_id="${chapter.chapter.id}"/>
                        <label for="yes-dubbed-${chapter.chapter.id}" id="siestado-landing"
                            class="si-estilo cursor-pointer mb-0 switch-label">
                            Sí</label>
                        <input type="radio" id="no-dubbed-${chapter.chapter.id}" name="dubbed-${chapter.chapter.id}" value="0"
                            class="edit-program-switch switch-landing switch-table-edit edit-dubbed-no"
                            key="dubbed" chapter_id="${chapter.chapter.id}"/>
                        <label for="no-dubbed-${chapter.chapter.id}" id="noestado-landing"
                            class="mb-0 no-estilo cursor-pointer switch-label">
                            No</label>
                    </div>
                    `;
                }

                let audio5 = "";
                if (chapter.chapter.audio5 == 0) {
                    audio5 = `
                    <div class="d-flex">
                        <input type="radio" id="yes-audio5-${chapter.chapter.id}" value="1"
                            class="edit-program-switch switch-landing edit-audio5-yes"
                            key="audio5" chapter_id="${chapter.chapter.id}" name="audio5-${chapter.chapter.id}"/>
                        <label for="yes-audio5-${chapter.chapter.id}" id="siestado-landing"
                            class="si-estilo cursor-pointer mb-0 switch-label">
                            Sí</label>
                        <input type="radio" id="no-audio5-${chapter.chapter.id}" value="0" checked
                            class="edit-program-switch switch-landing switch-table-edit edit-audio5-no"
                            key="audio5" chapter_id="${chapter.chapter.id}" name="audio5-${chapter.chapter.id}"/>
                        <label for="no-audio5-${chapter.chapter.id}" id="noestado-landing"
                            class="mb-0 no-estilo cursor-pointer switch-label">
                            No</label>
                    </div>
                    `;
                } else {
                    audio5 = `
                    <div class="d-flex">
                        <input type="radio" id="yes-audio5-${chapter.chapter.id}" value="1"
                            class="edit-program-switch switch-landing edit-audio5-yes" checked
                            key="audio5" chapter_id="${chapter.chapter.id}" name="audio5-${chapter.chapter.id}"/>
                        <label for="yes-audio5-${chapter.chapter.id}" id="siestado-landing"
                            class="si-estilo cursor-pointer mb-0 switch-label">
                            Sí</label>
                        <input type="radio" id="no-audio5-${chapter.chapter.id}" value="0"
                            class="edit-program-switch switch-landing switch-table-edit edit-audio5-no"
                            key="audio5" chapter_id="${chapter.chapter.id}" name="audio5-${chapter.chapter.id}"/>
                        <label for="no-audio5-${chapter.chapter.id}" id="noestado-landing"
                            class="mb-0 no-estilo cursor-pointer switch-label">
                            No</label>
                    </div>
                    `;
                }

                let carruselImg = "";

                if (image) {
                    carruselImg = `
                    <section class="edit-program-image">
                        <select
                            class="carrusel-concert-select ${landingClass} w-100 a-text-MBlack h2 d-flex align-items-center justify-content-between position-relative programs-catalogue"
                            title="${chapter.chapter.title}" id="prog_titulo_programa" data-live-search="true"
                            data-live-search-placeholder="Agregar título de nuevo programa"
                            name="thumbnail-header1" key="title" chapter_id="${chapter.chapter.id}">
                        </select>
                        <!--Imagen del programa--->
                        <div class="edit-thumbnail position-relative">
                            <input type="file" name="image-horizontal"
                                class="input-image-program d-none edit-image-carrusel" id="edit-image-carrusel-${chapter.chapter.id}" chapter_id="${chapter.chapter.id}" landing="${idLanding}" program="${chapter.chapter.program.title}">
                            <label for="edit-image-carrusel-${chapter.chapter.id}"
                                class="load-modal-programming load-photo d-inline" id="imagenes">
                                <img src="./images/heart-icon.svg" class="thumbnail-heart-icon"
                                    alt="heart-icon" />
                                <div class="edit-program-camera text-center">
                                    <img src="./images/synopsis/camara.svg"
                                        class="edit-program-icon-image" alt="camera" />
                                    <p
                                        class="p-2 mb-0 text-center size-thumbnail-text text-plus a-text-bold-brown-two">
                                        295
                                        x 180px</p>
                                </div>
                                <img src="${image}" alt=""
    class="thumbnail-image-prev edit-image-program prev-image-program" />


                            </label>
                        </div>
                        <!--Nombre de la imagen-->
                        <p class="a-text-bold-brown-two text-plus mt-4 mb-5">NombreDeLaImagen</p>
                    </section>
                    `;
                } else {
                    carruselImg = `
                    <section class="edit-program-image">
                        <select
                            class="carrusel-concert-select ${landingClass} w-100 a-text-MBlack h2 d-flex align-items-center justify-content-between position-relative programs-catalogue"
                            title="${chapter.chapter.title}" id="prog_titulo_programa" data-live-search="true"
                            data-live-search-placeholder="Agregar título de nuevo programa"
                            name="thumbnail-header1" key="title" chapter_id="${chapter.chapter.id}">
                        </select>
                        <!--Imagen del programa--->
                        <div class="edit-thumbnail position-relative">
                            <input type="file" name="image-horizontal"
                                class="input-image-program d-none edit-image-carrusel" id="edit-image-carrusel-${chapter.chapter.id}" chapter_id="${chapter.chapter.id}" landing="${idLanding}" program="${chapter.chapter.program.title}">
                            <label for="edit-image-carrusel-${chapter.chapter.id}"
                                class="load-modal-programming load-photo d-inline" id="imagenes">
                                <img src="./images/heart-icon.svg" class="thumbnail-heart-icon"
                                    alt="heart-icon" />
                                <div class="edit-program-camera text-center">
                                    <img src="./images/synopsis/camara.svg"
                                        class="edit-program-icon-image" alt="camera" />
                                    <p
                                        class="p-2 mb-0 text-center size-thumbnail-text text-plus a-text-bold-brown-two">
                                        295
                                        x 180px</p>
                                </div>
                                <img src="${chapter.image_program}" alt=""
    class="thumbnail-image-prev edit-image-program prev-image-program" />


                            </label>
                        </div>
                        <!--Nombre de la imagen-->
                        <p class="a-text-bold-brown-two text-plus mt-4 mb-5">NombreDeLaImagen</p>
                    </section>
                    `;
                }

                program += `
                <div>
                ${carruselImg}
                <!--Establecer en landing, home, schedule item date time-->
                <section class="mb-5">
                    <div class="row">
                        <!--Landing-->
                        <div class="col-4 edit-program-data-container edit-data-container-large" chapter_id="${chapter.chapter.id}">
                            <div class="edit-data-container h-100">
                                <p class="mb-3 text-plus text-plus text-uppercase a-text-bold-coolgray">
                                    Establecer
                                    en landing
                                </p>
                                    ${inLandingSwitch}
                                <!--Inputs radio-->
                                <div class="d-flex align-items-center mb-3">

                                    <span
                                        class="a-text-bold-silver cursor-pointer ml-2 text-uppercase">Carrusel
                                        1</span>

                                </div>
                                <div>
                                    <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">
                                        Fecha
                                    </p>
                                    ${inLandingDates}
                                </div>
                                <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                                ${inLandingTimes}
                            </div>
                        </div>
                        <!--Home-->
                        <div class="col-4 edit-program-data-container edit-data-container-large" chapter_id="${chapter.chapter.id}">
                            <div class="edit-data-container h-100">
                                <p class="mb-3 text-plus text-plus text-uppercase a-text-bold-coolgray">
                                    Establecer
                                    en home
                                </p>
                                <!--Switch-->
                                ${inHomeSwitch}
                                <div>
                                    <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">
                                        Fecha
                                    </p>
                                    ${inHomeDates}
                                </div>
                                <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                                ${inHomeTimes}
                            </div>
                        </div>
                        <div class="col-4 edit-program-data-container edit-data-container-large" chapter_id="${chapter.chapter.id}">
                            <div class="edit-data-container h-100">
                                <p
                                    class="edit-date-time-title text-plus text-plus text-uppercase a-text-bold-coolgray">
                                    Schedule Item Date time
                                </p>
                                <div>
                                    <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">
                                        Fecha
                                    </p>
                                    <div class="text-center edit-rectangle-small-container backwhite py-2 d-flex align-content-center justify-content-center"
                                        style="margin-bottom: 81px">
                                        <img src="{{ asset('images/calendario.svg') }}" alt="" class="mr-3">
                                        <span class="a-text-bold-warm mt-3">

                                            <input key="" type=" text"
                                                class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date"
                                                placeholder="00-00-0000" value="${scheduleDate[2]}-${scheduleDate[1]}-${scheduleDate[0]}"></span>
                                    </div>
                                </div>
                                <p class="mb-3 pt-3 text-plus a-text-medium-coolgray text-uppercase">
                                    Hora
                                </p>
                                <div
                                    class="text-center edit-rectangle-small-container backwhite d-flex align-content-center justify-content-center py-2">
                                    <img src="{{ asset('images/reloj.svg') }}" alt="" class="mr-3">
                                    <span class="a-text-bold-warm mt-3"><input type="text"
                                            class="time-seconds-input input-basic edit-program-input a-text-bold-warm edit-schedule-item-time text-uppercase"
                                            placeholder="00:00:00" value="${chapter.chapter.hour}"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!--Sinopsis-->
                <section class="edit-program-data-container" chapter_id="${chapter.chapter.id}">
                    <h3 class="h3 text-uppercase a-text-bold-brown-two mb-3">Sinopsis</h3>
                    <!--Textarea-->
                    <textarea chapter_id="${chapter.chapter.id}" key="synopsis"
                        class="edit-synopsis edit-program-textarea edit-program-attribute-text a-text-semibold-warmgrey p-3"
                        id="prog_sinopsis">${chapter.chapter.synopsis}</textarea>
                        <button class="a-btn-teal a-btn-basic-small text-normal a-text-MBlack float-right btn-actual d-flex align-items-center justify-content-center" ><img src="./images/basic-icons/enter.svg" alt=""> ACTUALIZAR</button>
                        <div class="clearfix"></div>
                </section>
                <section class="mb-3">
                    <div class="row">
                        <!--Program episode season-->
                        <div class="col-4 edit-program-data-container" chapter_id="${chapter.chapter.id}">
                            <div class="edit-data-container">
                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program
                                    episode
                                    season
                                </p>
                                <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                                    <input type="text" key="season" value="${chapter.chapter.season}"
                                        class="edit-program-season text-center input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase"
                                        placeholder="00" chapter_id="${chapter.chapter.id}">
                                </div>
                            </div>
                        </div>
                        <!--Program episode number-->
                        <div class="col-4 edit-program-data-container" chapter_id="${chapter.chapter.id}">
                            <div class="edit-data-container">
                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program
                                    episode
                                    number
                                </p>
                                <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                                    <input type="text" key="program_episode_number" value="${chapter.chapter.program_episode_number}"
                                        class="text-center edit-episode-number input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase"
                                        placeholder="000" chapter_id="${chapter.chapter.id}">
                                </div>
                            </div>
                        </div>
                        <!--Program year produced-->
                        <div class="col-4 edit-program-data-container" chapter_id="${chapter.chapter.id}">
                            <div class="edit-data-container">
                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program
                                    year
                                    produced
                                </p>
                                <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                                    <input type="text" key="program_year_produced" ${chapter.chapter.program.year}
                                        class="year-input text-center edit-year-produced input-basic edit-program-attribute-text edit-program-input a-text-bold-warm text-uppercase"
                                        placeholder="YYYY" chapter_id="${chapter.chapter.id}">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="mb-3">
                    <div class="row">
                        <!--Program title alternate-->
                        <div class="col-4 edit-program-data-container" chapter_id="${chapter.chapter.id}">
                            <div class="edit-data-container">
                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program
                                    title
                                    alternate
                                </p>
                                <div class="mb-3 edit-rectangle-container p-3">
                                    <input type="text" key="subtitle" value="${chapter.chapter.subtitle}"
                                        class="w-100 edit-program-subtitle input-basic edit-program-input edit-program-attribute-text a-text-bold-warm"
                                        placeholder="Program Title Alternate" chapter_id="${chapter.chapter.id}">
                                </div>
                            </div>
                        </div>
                        <!--Program genre list-->
                        <div class="col-4 edit-program-data-container position-relative"
                            id="edit-genre-container" chapter_id="${chapter.chapter.id}">
                            <div class="edit-data-container">
                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program
                                    genre
                                    list
                                </p>
                                <div class="mb-3 edit-rectangle-container">
                                    <select
                                        class="list1 edit-program-genres mb-0 a-text-regular-brownishtwo text-normal  input-basic show-tick"
                                         title="Genere list" multiple
                                        data-live-search="true" data-live-search-placeholder="Buscar"
                                        data-header="Program List" data-dropup-auto="false" key="genre" chapter_id="${chapter.chapter.id}">
                                    </select>
                                </div>
                            </div>
                        </div>
                        <!---->
                        <div class="col-4 edit-program-data-container" chapter_id="${chapter.chapter.id}">
                            <div class="edit-data-container">
                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule
                                    item
                                    rating
                                    code
                                </p>
                                <div class="mb-3 text-center edit-rectangle-small-container backwhite py-3">
                                    <input type="text" key="rating" value="${chapter.chapter.program.rating}"
                                        class="text-center edit-program-attribute-text input-basic edit-program-input a-text-bold-warm text-uppercase edit-rating-code"
                                        placeholder="PG-00" chapter_id="${chapter.chapter.id}">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="mb-3">
                    <div class="row">
                        <!--Schedule item log date-->
                        <div class="col-4 edit-program-data-container" chapter_id="${chapter.chapter.id}">
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
                                        class="mb-3 text-center edit-rectangle-small-container backwhite py-3 d-flex align-items-center justify-content-center">
                                        <img src="{{ asset('images/calendario.svg') }}" alt="" class="mr-3">
                                        <input type="text" key="day" value="${scheduleDate[2]}-${scheduleDate[1]}-${scheduleDate[0]}"
                                            class="edit-schedule-date edit-program-attribute-text schedule-date-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                            placeholder="DD:MM:YY" chapter_id="${chapter.chapter.id}">
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-4 edit-program-data-container" chapter_id="${chapter.chapter.id}">
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
                                        <input type="text" key="programing" value="${chapter.chapter.hour}"
                                            class="edit-schedule-item-time  edit-program-attribute-text time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                            placeholder="00:00:00" chapter_id="${chapter.chapter.id}">
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-4 edit-program-data-container" chapter_id="${chapter.chapter.id}">
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
                                        <input type="text" key="duration" value="${chapter.chapter.duration}"
                                            class="edit-program-duration edit-program-attribute-text time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                            placeholder="00:00:00" chapter_id="${chapter.chapter.id}">
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section class="mb-5">
                    <div class="row">
                        <!--Schedule item log date-->
                        <div class="col-4 edit-program-data-container" chapter_id="${chapter.chapter.id}">
                            <div class="edit-data-container d-flex justify-content-between">
                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule
                                    version
                                    subbed
                                </p>
                                ${subbed}
                            </div>
                        </div>
                        <div class="col-4 edit-program-data-container" chapter_id="${chapter.chapter.id}">
                            <div class="edit-data-container d-flex justify-content-between">
                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule
                                    version
                                    dubbed
                                </p>
                                ${dubbed}
                            </div>
                        </div>
                        <div class="col-4 edit-program-data-container" chapter_id="${chapter.chapter.id}">
                            <div class="edit-data-container d-flex justify-content-between">
                                <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Audio
                                    5.1<br>
                                    available
                                </p>
                                ${audio5}

                            </div>
                        </div>
                    </div>
                </section>
                <div class=" d-flex justify-content-center">
                    <section class="text-center mb-3 d-flex justify-content-center">
                        <button
                            class="d-flex ${classButton} mr-3  m-0 text-uppercase btn-grilla a-btn-basic-small btn-grilla a-btn-basic-small text-uppercase a-text-MBlack text-plus edit-landing-modal-button"
                            data-dismiss="modal" id="edit-program-modal-button">ACEPTAR</button>
                    </section>

                </div>
            </div>
                `;
            }

            //Mostramos el modal
            $(".modal-edit-program-carrusel").modal("show");
            //Volvemos a crear el slider
            try {
                $(".carrusel1-slider-concert").slick("unslick");
                $(".carrusel1-slider-concert").html(program);
                $(".carrusel1-slider-concert").slick({
                    slidesToShow: 1,
                    dots: true,
                    appendDots: $(".carrusel1-slider-dots1"),
                    initialSlide: 0,
                    infinite: false,
                    customPaging: function (slider, i) {
                        var thumb = $(slider.$slides[i]).data();
                        return (
                            "<p class='a-text-bold-teal slider-pagination-item'>" +
                            (i + 1) +
                            "</p>"
                        );
                    }
                });
            } catch (error) {
                $(".carrusel1-slider-concert").html(program);
                $(".carrusel1-slider-concert").slick({
                    slidesToShow: 1,
                    dots: true,
                    appendDots: $(".carrusel1-slider-dots1"),
                    initialSlide: 0,
                    infinite: false,
                    customPaging: function (slider, i) {
                        var thumb = $(slider.$slides[i]).data();
                        return (
                            "<p class='a-text-bold-teal slider-pagination-item'>" +
                            (i + 1) +
                            "</p>"
                        );
                    }
                });
            }

            $(".modal-edit-program-carrusel .carrusel1-slider-concert").on(
                "afterChange",
                function (slick, currentSlide) {
                    $(".current-slide-number").text(
                        currentSlide.currentSlide + 1
                    );
                }
            );

            //Genres
            let optionGenre = "";
            data.data.genres.forEach(genre => {
                optionGenre += `
                                         <option value="${genre.title}">${genre.title}</option>
                                         `;
            });
            //Géneros
            $(".list1").append(optionGenre);
            $(".list1").selectpicker("destroy");
            $(".list1").selectpicker({
                filter: true,
                multipleSeparator: ", "
            });
            //Añadir géneros
            let index = 0;
            for (const chapter of data.data.chapters) {
                $(
                    ".modal-edit-program-carrusel .edit-program-genres .filter-option-inner-inner"
                )[index].innerText = "";
                $(
                    ".modal-edit-program-carrusel .edit-program-genres .filter-option-inner-inner"
                )[index].innerText = chapter.chapter.program.genre;
                index++;
            }
            let editProgramLandingGenres = "";
            let selectGenres = $(
                ".modal-edit-program-carrusel .edit-program-genres"
            ).children(".list1");
            //Verificamos si el usuario ha seleccionado un género o categoría
            selectGenres.on("changed.bs.select", function () {
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
                console.log(editProgramLandingGenres);
            });
            //Evento para cuando cerramos el selectpicker
            selectGenres.on("hide.bs.select", function () {
                let chapterId = $(this).attr("chapter_id");

                //Obtenemos la key
                let key = $(this).attr("key");
                //Obtenemos los géneros que pudo haber seleccionado el usuario
                let keyValue = editProgramLandingGenres;
                //Hacemos la petición
                console.log(chapterId, key, keyValue);
                editAttributeProgram(chapterId, key, keyValue);
            });
            $(".carrusel-concert-select").append(titles);
            $(".carrusel-concert-select").selectpicker("destroy");
            $(".carrusel-concert-select").selectpicker({
                filter: true,
                multipleSeparator: ", "
            });
            let selectheader = $(
                ".modal-edit-program-carrusel .carrusel-concert-select"
            ).children(".carrusel-concert-select");
            selectheader.on("hide.bs.select", function () {
                let keyValue = "";
                let key = $(this).attr("key");
                let chapter_id = $(this).attr("chapter_id");
                if ($(this).val()) {
                    keyValue = $(this).val();
                } else {
                    $(this).val(
                        $(
                            "#prog_titulo_programa .filter-option-inner-inner"
                        ).text()
                    );
                    keyValue = $(this).val();
                }
                editAttributeProgram(chapter_id, key, keyValue);
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
            let imageTriangle = `
                <img src="./images/triangle.svg" alt="" class="position-absolute cursor-pointer dropimg">
            `;
            $(
                ".modal-edit-program-carrusel .edit-program-image .bootstrap-select"
            ).append(imageTriangle);
            $(".dropimg").click(function () {
                $(".carrusel-concert-select").selectpicker("toggle");
            });
            $(".edit-program-attribute-text").blur(function (e) {
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
            });
        }
    });

    //reload(idCarousel, landing)
}

function reload(idCarousel, landing) {
    $.ajax({
        type: "POST",
        url: "landing/getPromotionalsProgramsCarousel",
        data: {
            idCarousel,
            landing
        },
        cache: false,
        success: function (result) {
            let data = JSON.parse(result);
            console.log(data);
            $("#edit-genre-container .dropdown-toggle").removeClass(
                "bs-placeholder"
            );
            for (const chapter of data.data.chapters) {
                $("#edit-genre-container .filter-option-inner").html(
                    '<div class="filter-option-inner-inner">' +
                    chapter.chapter.program.genre +
                    "</div>"
                );
            }
        }
    });
}

//Landing concert channel
function getContentClaroCinema(type) {
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
        url: "landing/claroCinema",
        success: function (result) {
            let data = JSON.parse(result);
            console.log(data);
            if (data.code == 200) {
                switch (type) {
                    // SLAIDER
                    case "slider-pagination":
                        let counter = 1;
                        let image = "";
                        let programmingSlider = $(
                            ".programming-slider-claro-cinema"
                        );
                        while (true) {
                            if (data.data[`block_1_image_slider_${counter}`]) {
                                image += `
                        <div class="bor thumbnail-image-program position-relative h-100">
                            <input type="file" name="image_programming[]" id="image_programming_${counter}" class="input-image-program d-none image_programming " data-index="1">
                                <label for="image_programming_${counter}" class="h-100 mb-0 d-flex justify-content-center  align-items-center flex-column   load-programming-carousel">
                                    <img src="./images/synopsis/camara.svg" alt="add-photo" class=" cursor-pointer add-photo " />
                                    <span class="a-text-bold-warm text-plus p-2 banner-text mt-3">1000px X 342px</span>
                                    <img src="${data.data[
                                    "block_1_image_slider_" + counter
                                    ]
                                    }" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                                </label>
                        </div>
                        `;
                                counter++;
                            } else {
                                break;
                            }
                        }
                        programmingSlider.html(image);
                        $(".modal-programming-carousel-cinema").modal("show");
                        try {
                            programmingSlider.slick("unslick");
                            programmingSlider.not(".slick-initialized").slick({
                                slidesToShow: 1,
                                dots: true,
                                appendDots: $(
                                    ".programming-slider-dots-cinema"
                                ),
                                initialSlide: 0,
                                infinite: false,
                                customPaging: function (slider, i) {
                                    var thumb = $(slider.$slides[i]).data();
                                    return (
                                        "<p class='a-text-bold-teal slider-pagination-item'>" +
                                        (i + 1) +
                                        "</p>"
                                    );
                                }
                            });
                        } catch (error) {
                            console.log(error);
                            programmingSlider.not(".slick-initialized").slick({
                                slidesToShow: 1,
                                dots: true,
                                appendDots: $(
                                    ".programming-slider-dots-cinema"
                                ),
                                initialSlide: 0,
                                infinite: false,
                                customPaging: function (slider, i) {
                                    let thumb = $(slider.$slides[i]).data();
                                    return (
                                        "<p class='a-text-bold-teal slider-pagination-item'>" +
                                        (i + 1) +
                                        "</p>"
                                    );
                                }
                            });
                        }
                        $("#image-programming-button-cinema").click(function () {
                            let imagesPositions = [];
                            let imagesProgramming = [];
                            $(".image_programming").each(function () {
                                if (this.files[0]) {
                                    imagesPositions.push(
                                        $(this).attr("data-index")
                                    );
                                }
                                imagesProgramming.push(this.files[0]);
                            });
                            let data = new FormData();
                            for (
                                let index = 0; index < imagesProgramming.length; index++
                            ) {
                                let file = "file" + (index + 1).toString();
                                file = file.toString();
                                data.append(file, imagesProgramming[index]);
                            }
                            data.append("positions", imagesPositions);
                            data.append("date", $("#date-start-input").val());
                            data.append("landing", "Claro Cinema");
                            setImageSliderBanner(data);
                        });
                        $("#close_modals").click(function () {
                            console.log("cerreer");
                            $(".modal").modal("hide");
                            $("#modaledi").modal("hide");
                            $(".modal").modal("hide");
                        });
                        break;
                    // HEADER
                    // SLAIDER

                    case "header-landing-cinema":
                        $(".cinema-header-input-title1").val(
                            data.data.block_2_title_1
                        );
                        $(".cinema-header-input-title2").val(
                            data.data.block_2_title_2
                        );
                        $(".btn-header-claro-cinema").val(
                            data.data.block_2_button_title
                        );
                        $(".link-button-header-cinema").val(
                            data.data.block_2_button_url
                        );
                        $(".input-url-modal").val(data.data.block_2_button_url);
                        let logo =
                            data.data.block_2_icon_channel ||
                            "./images/synopsis/image-synopsis-horizontal.png";
                        $(".logo-header-claro-cinema").attr("src", logo);
                        $(".modal-encabezado-cinema").modal("show");
                        break;
                    case "title-cinema":
                        $(".modal-title-claro-cinema").text("título");
                        $(".modal-input-title1-cinema").val(data.data.block_3_title_1);
                        $(".modal-input-title1-cinema").attr("key", "block_3_title_1");
                        $(".modal-input-title2-cinema").val(data.data.block_3_title_2);
                        $(".modal-input-title2-cinema").attr("key", "block_3_title_2");
                        $(".modal-input-subtitle-cinema").val(data.data.block_3_subtitle);
                        $(".modal-input-subtitle-cinema").attr("key", "block_3_subtitle");
                        $(".modal-title-cinema").modal("show");
                        break;

                    case "promo-cinema":
                        $(".modal-promo-cinema").modal("show");
                        $(".upload-promo-button").attr(
                            "key",
                            "block_3_video_url"
                        );
                        //Checamos si existe el vídeo de promoción en concert channel
                        if (data.data.block_3_video_url) {
                            let promoContainer = $("#cinema-promo-container");
                            //Verificamos si la url es de una imagen
                            if (
                                data.data.block_3_video_url.match(
                                    /\.(jpeg|jpg|gif|png)$/
                                ) != null
                            ) {
                                promoContainer.html(`
                                <img src="${data.data.block_3_video_url}" alt="" class="d-flex w-100" id="promo-image-concert">
                                `);
                            } else {
                                //La url es de un video
                                promoContainer.html(`
                                <video class="w-100 h-100" id="video-promo-concert" style="display: block" controls muted autoplay>
                                <source src="${data.data.block_3_video_url}" type="video/mp4">
                                 </video>
                                `);
                            }
                        } else {
                            promoContainer.html(`
                            <img src="./images/synopsis/background-promo.svg" alt="" class="d-flex w-100" id="promo-image-concert">
                            `);
                        }
                        break;
                    case "title-carrusel1":
                        $("#ipt-titulo-cinema-2").remove("a-text-black-yellow-two");
                        $("#ipt-titulo-cinema-2").addClass("a-text-bold-teal");
                        $(".modal-title-claro-cinema").text("carrusel 1");
                        $(".modal-input-title1-cinema").val(data.data.block_4_carrusel_1_title_1);
                        $(".modal-input-title2-cinema").val(data.data.block_4_carrusel_1_title_2);
                        $(".modal-input-subtitle-cinema").val(data.data.block_4_carrusel_1_subtitle);
                        $(".modal-input-title1-cinema").attr("key", "block_4_carrusel_1_title_1");
                        $(".modal-input-title2-cinema").attr("key", "block_4_carrusel_1_title_2");
                        $(".modal-input-subtitle-cinema").attr("key", "block_4_carrusel_1_subtitle");
                        // $(".modal-title-carrusel1").modal("show");
                        $(".modal-title-cinema").modal("show");
                        break;
                    case "title-carrusel2":
                        $(".modal-title-claro-cinema").text("carrusel 2");
                        $(".modal-input-title1-cinema").val(data.data.block_4_carrusel_2_title_1);
                        $(".modal-input-title2-cinema").val(data.data.block_4_carrusel_2_title_2);
                        $(".modal-input-subtitle-cinema").val(data.data.block_4_carrusel_2_subtitle);
                        $(".modal-input-title1-cinema").attr("key", "block_4_carrusel_2_title_1");
                        $(".modal-input-title2-cinema").attr("key", "block_4_carrusel_2_title_2");
                        $(".modal-input-subtitle-cinema").attr("key", "block_4_carrusel_2_subtitle");
                        // $(".modal-title-cinema").modal("show");
                        $(".modal-title-cinema").modal("show");
                        break;

                    case "current-programming-cinema":
                        let calendarSlider2 = $(".calendar-slider2");
                        // $(".modal-programming-landing").modal("show");
                        createCalendarDays(calendarSlider2);
                        try {
                            calendarSlider2.slick("unslick");
                            createSlickSlider(calendarSlider2, calendarSlick);
                        } catch (error) {
                            createSlickSlider(calendarSlider2, calendarSlick);
                        }
                        break;

                    default:
                        break;
                }

                $(".loader-view-container").remove();
            }
        }
    });
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
                $("#modal-promo").modal("hide");
            }
            $(".loader-view-container").remove();
        }
    });
}

function getProgrammingSynopsis(landing, date) {
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
        url: "landing/getProgrammingSynopsisTable",
        success: function (result) {
            let json = JSON.parse(result);
            console.log("Sinopsis", json);
            if (json.code == 200) {
                let programming = "";
                let container = "";
                let header = `
                    <div class="contenedor-fila">
                        <div class="contenedor-columna centro synop titletable">
                            <span class="a-text-MBlack a-text-prev">Programa</span>
                        </div>
                        <div class="contenedor-columna centro  landins titletable">
                            <span class="a-text-MBlack a-text-prev">Caracteres</span>
                        </div>
                        <div class="contenedor-columna centro landins titletable">
                            <span class="a-text-MBlack a-text-prev">Imágenes</span>
                        </div>
                        <div class="contenedor-columna centro landins titletable">
                            <span class="a-text-MBlack a-text-prev">Acciones</span>
                        </div>
                        <div class="contenedor-columna centro landins titletable">
                            <span class="a-text-MBlack a-text-prev">Landing</span>
                        </div>
                    </div>
                    `;
                switch (landing) {
                    case "canal-claro":
                        programming = json.data[0].programing[0].programs;
                        container = $("#synopsis-table-canal-claro");
                        break;
                    case "concert-channel":
                        programming = json.data[1].programing[0].programs;
                        container = $("#synopsis-table-concert-channel");
                        break;
                    case "claro-cinema":
                        programming = json.data[2].programing[0].programs;
                        container = $("#synopsis-table-claro-cinema");
                        break;
                    default:
                        break;
                }

                let row = "";
                let colorText = "";
                let colorTextSynopsis = "";
                let labelActive = "";
                for (const program of programming) {
                    if (program.sinopsis_info.sinopsis_len <= 21) {
                        colorTextSynopsis = "a-text-semibold-tomato";
                    } else if (
                        program.sinopsis_info.sinopsis_len > 21 &&
                        program.sinopsis_info.sinopsis_len < 144
                    ) {
                        colorTextSynopsis = "a-text-semibold-orange";
                    } else {
                        colorTextSynopsis = "a-text-semibold-greyish-brown-two";
                    }

                    if (program.sinopsis_info.cant_imagenes <= 4) {
                        colorText = "a-text-semibold-tomato";
                        labelActive = `
                        <label for="yes-synopsis" id="yes-synopsis"
                        class="mb-0 si-estilo cursor-pointer switch-label">
                        Sí</label>
                        <label for="no-synopsis" id="noestado-landing"
                        class="mb-0 no-estilo label-active cursor-pointer switch-label">
                        No</label>
                        `;
                    } else if (
                        program.sinopsis_info.cant_imagenes > 4 &&
                        program.sinopsis_info.cant_imagenes < 8
                    ) {
                        colorText = "a-text-semibold-orange";
                        labelActive = `
                        <label for="yes-synopsis" id="yes-synopsis"
                        class="mb-0 si-estilo label-active cursor-pointer switch-label">
                        Sí</label>
                        <label for="no-synopsis" id="noestado-landing"
                        class="mb-0 no-estilo cursor-pointer switch-label">
                        No</label>
                        `;
                    } else {
                        colorText = "a-text-semibold-greyish-brown-two";
                        labelActive = `
                        <label for="yes-synopsis" id="yes-synopsis"
                        class="mb-0 label-active si-estilo cursor-pointer switch-label">
                        Sí</label>
                        <label for="no-synopsis" id="noestado-landing"
                        class="mb-0 no-estilo  cursor-pointer switch-label">
                        No</label>
                        `;
                    }
                    row += `
                    <div class="contenedor-fila">
                        <div class="contenedor-columna pl-4">
                            <span class="a-text-medium-black text-normal ">${program.chapter_title}</span>
                        </div>
                        <div class="contenedor-columna centro">
                            <span class="${colorTextSynopsis} text-normal pl-3 ">${program.sinopsis_info.sinopsis_len}</span>
                        </div>
                        <div class="contenedor-columna centro">
                            <span class="${colorText} text-normal ">${program.sinopsis_info.cant_imagenes}/8</span>
                        </div>
                        <div class="contenedor-columna centro">
                            <input chapter_id="${program.chapter_id}" type="image" src="./images/lapiz-acti.svg" alt="" class="edit-synopsis-pencil btn-focus sinopsis edi mr-3" />
                            <input type="image" src="./images/ojito-acti.svg" alt="" class=" btn-focus edi" />
                        </div>
                        <div class="contenedor-columna centro ">
                            <div class="d-flex align-items-center justify-content-center mb-2 mt-2">
                                ${labelActive}
                            </div>
                        </div>
                    </div>

                    `;
                }

                container.html(`
                ${header}
                ${row}
                `);
            }
            $(".loader-view-container").remove();
            $(".sinopsis").click(function () {

                //$(".modal-landing-sinopsis").modal("show");
            });



        }
    });
}

async function getSynopsis(chapter_id) {
    let options = {
        method: "POST",
        body: JSON.stringify({
            chapter_id
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content")
        }
    };
    let response = await fetch("landing/getSynopsis", options);
    let data = await response.json();

    return data;
}

async function editAttributeSynopsis(chapter_id, key, keyValue) {
    let options = {
        method: "POST",
        body: JSON.stringify({
            chapter_id,
            key,
            keyValue
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content")
        }
    };
    let response = await fetch("program/editSynopsis", options);
    let data = await response.json();
    return data;
}

async function updateImagesSynopsis(images) {
    let options = {
        method: "POST",
        body: images,
        headers: {
            "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content")
        }
    };
    let response = await fetch("landing/updateImagesSynopsis", options);
    let data = await response.json();
    return data;
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
        url: "landing/updateImagesSynopsis",
        success: function (result) {
            let json = JSON.parse(result);
            if (json.code == 200) {
                console.log("imágenes subidas correctamente", json)
            }


            $(".loader-view-container").remove();
        }
    });
}

function confLandingHome(baseURL) {
    let confLandingHome = {
        remote: `${baseURL}home-edi.php`,
        container: document.getElementById("navbar_prev_home_landing"),
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
                            let landingclaro = 'Canal Claro';
                            getCarruselHome(landingclaro);
                            break;
                        case "channel-home-header":
                            landingView.renderHomeHeaderConcertChannel();
                             break;
                         case "channel-home-slider":
                                let landingconcert= 'Concert Channel';
                                getCarruselHome(landingconcert);
                                break;
                        case "cinema-home-header":
                             getContentHomeHeaderCinema();
                             break;
                    case "cinema-home-slider":
                        let landingcinema = 'Claro Cinema';
                        getCarruselHome(landingcinema);
                        break;
                    default:
                        break;
                }
            }
            this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
            this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    }

    let navbarPrevHome = document.getElementById("navbar_prev_home_landing");
    if (navbarPrevHome) {
        console.log('Llamando iframe')
        $("#navbar_prev_home_landing iframe").remove();
        new easyXDM.Socket(confLandingHome);
    }
}



// HOME

function editHeaderHome(data) {

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
        url: "landing/editHeaderHome",
        success: function (result) {
            let json = JSON.parse(result);
            console.log(json);
            if (json.code == 200) {
                $("#modal-logo-home").modal("hide");
            }
            $(".loader-view-container").remove();
        }
    });
}
// HOME



export {
    getProgrammingSynopsis,
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
    getContentClaroCinema,
    editPromoLandingClaro,
    getContentConcertChannel,
    getSynopsis,
    editAttributeSynopsis,
    updateImagesSynopsis,
    confLandingHome,
    getContentHomeHeader,
    getCarruselHome,
    editHeaderHome,
    getContentHomeCinema,
    getContentHomeHeaderCinema

};
