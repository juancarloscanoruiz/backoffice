//JQUERY
import $ from "jquery";

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
            let json = JSON.parse(result);
            if (json.code == 200) {
                $(".loader-container").remove();
                $(".modal-programming-carousel").modal("hide");
            } else {
                $(".modal-programming-carousel").modal("hide");
            }
        }
    });
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
        success: function (result) {

            let data = JSON.parse(result);
            $('.edit-program-data-container').attr("chapter_id", data.program.chapter_id)
            console.log(data)
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
                $('.edit-landing-time-begin').val(landingBeginDateTime[1])
            }

            if (data.program.in_landing_expiration) {
                let landingExpirationDateTime = data.program.in_landing_expiration.split(" ");
                let fullDate = landingExpirationDateTime[0].split("-")
                $('.edit-landing-date-end').val(`${fullDate[2]}-${fullDate[1]}-${fullDate[0]}`);
                $('.edit-landing-time-end').val(landingExpirationDateTime[1]);
            }


            //Verficar si el programa se encuentra en el home
            if (data.program.in_home == 0) {
                $('.edit-in-home-no').prop("checked", true)
            } else {
                $('.edit-in-home-yes').prop("checked", true)
            }
            if (data.program.in_home_begin) {
                let homeBeginDateTime = data.program.in_home_begin.split(" ");
                $('.edit-home-date-begin').val(homeBeginDateTime[0])
                $('.edit-home-time-begin').val(homeBeginDateTime[1])
            }

            if (data.program.in_home_expiration) {
                let homeExpirationDateTime = data.program.in_home_expiration.split(" ");
                let fullDate = homeExpirationDateTime[0].split("-")
                $('.edit-home-date-end').val(`${fullDate[2]}-${fullDate[1]}-${fullDate[0]}`);
                $('.edit-home-time-end').val(homeExpirationDateTime[1]);
            }

            //Schedule Item Date Time
            let scheduleItemDate = data.program.day.split("-")
            $('.edit-schedule-date').val(`${scheduleItemDate[2]}-${scheduleItemDate[1]}-${scheduleItemDate[0]}`)
            $('.edit-schedule-item-time').val(data.program.hour);

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
