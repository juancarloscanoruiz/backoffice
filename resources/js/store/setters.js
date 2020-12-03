import $ from "jquery";

import { claroCinemaProgramacion, canalClaroHome } from '../index'

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

function setBannerHome(data, landing) {
    $.ajax({
        type: "POST",
        cache: false,
        data: data,
        processData: false,
        contentType: false,
        url: "landing/editHomeHeader",
        success: function (res) {
            console.log(JSON.parse(res));
            switch (landing) {
                case "canal-claro":
                    $("#navbar-prev-home iframe").remove();
                    canalClaroHome()
                    $('.modal').modal('hide');
                    $(".loader-view-container").remove();
                    break;
                case "admin":
                    break;
                case "claro-cinema":
                    break;
                case "concert-channel":
                    break;
                default:
                    break;
            }
        }
    });
}

export { setImgCarruselHome, setBannerProgramacion, setBannerHome }