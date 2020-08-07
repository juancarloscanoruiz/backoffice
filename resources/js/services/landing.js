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
            $(".modal-edit-icons .modal-content").append(
                `<div class="loader-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
        },
        success: function(result) {
            let json = JSON.parse(result);
            if (json.code == 200) {
                $(".loader-view-container").remove();
                $(".modal-edit-icons").modal("hide");
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
            let json = JSON.parse(result);
            if (json.code == 200) {
                $(".loader-view-container").remove();
                $(".modal-edit-icons").modal("hide");
            }
        }
    });
}

export { updateImagesOfProgrammingSlider, updateLogosOfLanding };
