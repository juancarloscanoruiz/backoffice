import $ from "jquery";

import { claroCinemaProgramacion } from '../index'

function setImgCarruselHome(data) {
    $.ajax({
        type: "POST",
        data: data,
        processData: false, //esto es para poder pasar el archivo
        contentType: false, //esto es para poder pasar el archivo
        cache: false,
        url: "landing/setImgCarruselHome",
        success: function (res) {
            console.log(res)
            $(".loader-view-container").remove();
            // $('#iframe-programacion').html('');
            // programacion()
            // $('#show-banner').modal('hide');
        }
    })
}

function setBannerProgramacion(data) {
    $.ajax({
        type: "POST",
        data: data,
        processData: false, //esto es para poder pasar el archivo
        contentType: false, //esto es para poder pasar el archivo
        cache: false,
        url: "landing/update-programming-carrusel",
        success: function (res) {
            console.log(res)
            $("#navbar-prev-programacion-cinema iframe").remove();
            claroCinemaProgramacion()
            $('.modal').modal('hide');
            $(".loader-view-container").remove();
        }
    })
}

export { setImgCarruselHome, setBannerProgramacion }