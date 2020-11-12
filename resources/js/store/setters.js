import $ from "jquery";

import { programacion } from '../index';

function getImgBannerProgramacion(data) {
    $.ajax({
        type: "POST",
        data: data,
        processData: false, //esto es para poder pasar el archivo
        contentType: false, //esto es para poder pasar el archivo
        cache: false,
        url: "landing/update-programming-carrusel",
        success: function (res) {
            console.log(res)
            $('#iframe-programacion').html('');
            programacion()
            $('#show-banner').modal('hide');
        }
    })
}
export {
    getImgBannerProgramacion
}