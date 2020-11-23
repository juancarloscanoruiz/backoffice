import $ from "jquery";

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

export { setImgCarruselHome }