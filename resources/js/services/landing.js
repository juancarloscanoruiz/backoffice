//JQUERY
import $ from "jquery";

import {
    editAttributeProgram,

} from "./generalSchedule.js";

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
        },
        success: function (result) {
            $('.loader-view-container').remove();
            let data = JSON.parse(result);
            console.log(data);
            $('.edit-program-data-container').attr("chapter_id", data.program.chapter_id)
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
                itemHalfThermometer += `
                    <div class="w-50 h-100" status="${thermometer[key].status}" chapter_id="${thermometer[key].chapter_id}" style="background: ${thermometer[key].color};"></div>
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
                console.log(selected);
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
            $(".calendar-slider").slick({
                slidesToShow: 11,
                slidesToScroll: 11,
                infinite: true,
                dots: false,
                centerMode: false,
                arrows: true,
                prevArrow: '<img src="../images/prev.png" class="arrow-prev" />',
                nextArrow: '<img src="../images/next.png" class="arrow-next" />'
            });
        }
    });
}

export {
    getChapterInfo,
    updateImagesOfProgrammingSlider,
    updateLogosOfLanding
};
