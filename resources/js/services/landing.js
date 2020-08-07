//JQUERY
import $ from "jquery";

function updateImagesOfProgrammingSlider(data) {
    $.ajax({
        type: "POST",
        data: data,
        processData: false, //esto es para poder pasar el archivo
        contentType: false, //esto es para poder pasar el archivo
        url: "landing/update-programming-carrusel",
        beforeSend: function() {
            $(".modal-programming-carousel .modal-content").append(
                `<div class="loader-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
        },
        success: function(result) {
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
        beforeSend: function() {
            $(".modal-edit-icons .modal-content").append(
                `<div class="loader-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
        },
        url: "landing/updateLandingLogo",
        success: function(result) {
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
        data: data,
        url: "landing/get-chapter-info/" + data,
        success: function(result) {
            let data = JSON.parse(result);
            console.log(data.program.title);
            //$('#prog_titulo_programa').prop("title","ok");
            $("#prog_sinopsis").val(data.program.synopsis);

            $(".calendar-slider").slick({
                slidesToShow: 11,
                slidesToScroll: 11,
                infinite: true,
                dots: false,
                centerMode: false,
                arrows: true,
                prevArrow:
                    '<img src="../images/prev.png" class="arrow-prev" />',
                nextArrow: '<img src="../images/next.png" class="arrow-next" />'
            });
            $(".modal-edit-program").modal("show");
        }
    });
}

export {
    getChapterInfo,
    updateImagesOfProgrammingSlider,
    updateLogosOfLanding
};
