import $ from "jquery";

import { programacion, showlanding } from '../index';

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
            $(".loader-view-container").remove();
        }
    })
}

function setImgBannerCanalClaro(data) {
    $.ajax({
        type: "POST",
        data: data,
        processData: false, //esto es para poder pasar el archivo
        contentType: false, //esto es para poder pasar el archivo
        cache: false,
        url: "landing/setImageSliderBanner",
        success: function (res) {
            console.log(res)
            $('#iframe-canal-claro').html('');
            showlanding('claro-canal-edi.php')
            $('.modal').modal('hide');
            $(".loader-view-container").remove();
        }
    })
}

function setImgBannerClaroCinema(data) {
    $.ajax({
        type: "POST",
        data: data,
        processData: false, //esto es para poder pasar el archivo
        contentType: false, //esto es para poder pasar el archivo
        cache: false,
        url: "landing/setImageSliderBanner",
        success: function (res) {
            console.log(res)
            $('.modal').modal('hide');
            $(".loader-view-container").remove();
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
            $(".loader-view-container").remove();
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
            $(".loader-view-container").remove();
            // $('#iframe-programacion').html('');
            // programacion()
            // $('#show-banner').modal('hide');
        }
    })
}

function setHeader(data) {
    $.ajax({
        type: "POST",
        data: data,
        processData: false, //esto es para poder pasar el archivo
        contentType: false, //esto es para poder pasar el archivo
        cache: false,
        url: "landing/editHeaderLandingClaro",
        success: function (res) {
            console.log(res)
            $('#iframe-canal-claro').html('');
            showlanding('claro-canal-edi.php')
            $('.modal').modal('hide');
            $(".loader-view-container").remove();
        }
    })
}

function setTitulo(data) {
    $.ajax({
        type: "POST",
        data: data,
        cache: false,
        url: "landing/setTitulo",
        success: function (res) {
            console.log(res)
            $('#iframe-canal-claro').html('');
            showlanding('claro-canal-edi.php')
            $('.modal').modal('hide');
            $(".loader-view-container").remove();
        }
    })
}

export {
    setImgBannerProgramacion,
    setlogoLnading,
    setImgCarruselHome,
    setHeader,
    setTitulo,
    setImgBannerCanalClaro,
    setImgBannerClaroCinema
}