import $ from "jquery";

import { claroCinemaProgramacion, canalClaroHome, concertChannelHome, claroCinemaHome } from '../index'

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
                case "concert-channel":
                    $("#navbar-prev-home-concert iframe").remove();
                    concertChannelHome()
                    $('.modal').modal('hide');
                    $(".loader-view-container").remove();
                    break;
                case "claro-cinema":
                    $("#navbar-prev-home-cinema iframe").remove();
                    claroCinemaHome()
                    $('.modal').modal('hide');
                    $(".loader-view-container").remove();
                    break;
                case "admin":
                    break;
                default:
                    break;
            }
        }
    });
}

export { setImgCarruselHome, setBannerProgramacion, setBannerHome }