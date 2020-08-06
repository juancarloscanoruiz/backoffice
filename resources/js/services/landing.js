//JQUERY
import $ from "jquery";

function updateImagesOfProgrammingSlider(data) {
    $.ajax({
        type: "POST",
        data: data,
        processData: false, //esto es para poder pasar el archivo
        contentType: false, //esto es para poder pasar el archivo
        url: "landing/update-programming-carrusel",
        success: function (result) {
            console.log(result);
        }
    });

}

export {
    updateImagesOfProgrammingSlider
}
