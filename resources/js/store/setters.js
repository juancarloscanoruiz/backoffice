import $ from "jquery";

import { programacion } from '../index';

function setImgBannerProgramacion(data) {
    $.ajax({
        type: "POST",
        data: data,
        processData: false, //esto es para poder pasar el archivo
        contentType: false, //esto es para poder pasar el archivo
        cache: false,
        url: "landing/update-programming-carrusel",
        success: function (res) {
            console.log(res)
            $('#iframe-canal-claro').html('');
            programacion('programacion-edi.php')
            $('.modal').modal('hide');
        }
    })
}

function setlogoLnading(data) {
    $.ajax({
        type: "POST",
        data: data,
        processData: false, //esto es para poder pasar el archivo
        contentType: false, //esto es para poder pasar el archivo
        cache: false,
        url: "landing/updateLandingLogo",
        success: function (res) {
            console.log(res)
            $('#iframe-canal-claro').html('');
            programacion('programacion-edi.php')
            $('.modal').modal('hide');
        }
    })
}

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
            // $('#iframe-programacion').html('');
            // programacion()
            // $('#show-banner').modal('hide');
        }
    })
}
export {
    setImgBannerProgramacion,
    setlogoLnading,
    setImgCarruselHome
}