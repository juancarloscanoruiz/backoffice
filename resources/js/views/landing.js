import $ from "jquery";
import LandingController from "../controllers/landing.js";
let landingController = new LandingController();
const LOADER =
    `<div class="loader-view-container pointer-none">
    <img src="./images/loader.gif" class="loader"/>
</div>`

export default class LandingView {

    renderHomeHeaderCanalClaro() {
        $("body").append(LOADER);
        let data = landingController.getContentHome();
        data.then(data => {
            if (data.code == 200) {
                // Add name
                $("#landing_name").attr('value', 'Canal Claro');
                //Add a class to the button
                $("#dinamic_btn").addClass('btn-red');
                //set the width of the image
                $("#img-logo-home").addClass('img-logo-home-claro');
                //Set the width of the container
                $("#dinamic_width").addClass('modal-img-home-claro');
                $("#inp_canales_subtitulo").val(data.data.block_3_subtitle);
                $("#inp_url").val(data.data.block_3_icon_channel_url);
                //Change the logo
                $("#img-logo-home").attr('src', data.data.block_3_icon_channel);
                //Modal
                $("#modal-logo-home").modal("show");
                // Remove loader
                $(".loader-view-container").remove();
            }
        })
    }

    renderHomeHeaderConcertChannel() {
        $("body").append(LOADER);
        let data = landingController.getContentHome();
        data.then(data => {
            if (data.code == 200) {
                // Add name
                $("#landing_name").attr('value', 'Concert Channel');
                //Add a class to the button
                $("#dinamic_btn").addClass('btn-pink');
                //set the width of the image
                $("#img-logo-home").addClass('img-logo-home');
                //Set the width of the container
                $("#dinamic_width").addClass('modal-img-home');
                $('#inp_canales_subtitulo').val(data.data.block_4_subtitle)
                $('#inp_url').val(data.data.block_4_icon_channel_url)
                //Change the logo
                $("#img-logo-home").attr('src', data.data.block_4_icon_channel);
                //Modal
                $("#modal-logo-home").modal("show");
                // Remove loader
                $(".loader-view-container").remove();
            }
        })
    }

    renderHomeHeaderClaroCinema() {
        $("body").append(LOADER);
        let data = landingController.getContentHome();
        data.then(data => {
            if (data.code == 200) {
                // Add name
                $("#landing_name").attr('value', 'Claro Cinema');
                //Add a class to the button
                $("#dinamic_btn").addClass('btn-red');
                //set the width of the image
                $("#img-logo-home").addClass('img-logo-home');
                //Set the width of the container
                $("#dinamic_width").addClass('modal-img-home');
                $('#inp_canales_subtitulo').val(data.data.block_5_subtitle)
                $('#inp_url').val(data.data.block_5_icon_channel_url)
                //Change the logo
                $("#img-logo-home").attr('src', data.data.block_5_icon_channel);
                //Modal
                $("#modal-logo-home").modal("show");
                // Remove loader
                $(".loader-view-container").remove();
            }
        })
    }
    renderHomeBanner() {
        $("body").append(LOADER);
        let data = landingController.getContentHome();
        data.then(data => {
            if (data.code == 200) {
                //Título en header de home
                let headerTitle1 = $(".modal-home-encabezado .header-title-1");
                //Subtítulo de home
                let headerTitle2 = $(".modal-home-encabezado .header-title-2");
                //let headerVideo = $(".modal-home-encabezado .video-header");
                headerTitle1.val(data.data.block_1_title);
                headerTitle2.val(data.data.block_1_subtitle);
                // headerVideo.val(data.data.block_1_video_name);
                if (data.data.block_1_video_name) {
                    let headerVideo = $(".modal-home-encabezado .video-header");
                    //Verificamos si la url es de una imagen
                    if (data.data.block_1_video_name.match(/\.(jpeg|jpg|gif|png)$/) != null) {
                        headerVideo.html(`<img src="${data.data.block_1_video_name}" alt="" class="d-flex w-100" id="image-promo-header-home">`);
                    } else {
                        //La url es de un video
                        headerVideo.html(`
                <img src="./images/basic-icons/pencil-edit-teal.svg" alt="add-photo" class="add-photo promo-icon cursor-pointer" style="width: 62px; position: absolute; transform: translate(215px, -112px);" />
                <span class="a-text-bold-warm text-plus p-2 pr-3 pl-3 white-shadow position-absolute " style="    transform: translate(207px, -40px);">Añade tu archivo <br> jpg 472px X 295px </span>
                <video class="w-100 h-100 home-video" id="video-promo-header-home" style="display: block" controls muted autoplay>
                    <source src="${data.data.block_1_video_name}" type="video/mp4">
                </video>`);
                    }
                }
                //Mostramos el modal
                $(".modal-home-encabezado").modal("show");
                //Eliminamos
                $(".loader-view-container").remove();
            }
        })
    }
}
