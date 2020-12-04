import $ from "jquery";

import LandingView from "../views/landing";
let landingView = new LandingView();

import { slickShowArrow } from './slick/slick'
import { previewImage, modalClose, dateCalendar, closeChafa } from './eventos/evn'
import { setBanner, setHomeBanner } from './methods'

var varSetHomeBanner;
let landing;
let lang;

function getBanner(res, id, id_slide) {
    let slider = "";
    let counter = 1;

    if (id == 1) {
        $('.titulo-banner').html('BANNER PROGRAMACIÓN - CARRUSEL')
        while (true) {
            try {
                if (res["image_slider_" + counter]) {
                    slider += `
            <div class="container-banner">
                <img class="banner bor responsi-img img_banner_${counter}" src="${res["image_slider_" + counter]}" alt="" />
                <input class="d-none previewImage" id="img_banner_${counter}" type="file" accept="image/*" index="${counter}"/>
                <div class="container-camera">
                    <label for="img_banner_${counter}" class="cursor-pointer">
                        <p class="text-center a-text-bold-warm text-plus mb-0">
                            <img class="camera_${counter}" src="./images/basic-icons/camara.svg" /><span>1920px X 657px</span>
                        </p>
                    </label>
                </div>
            </div>`
                    counter++;
                } else {
                    break;
                }
            } catch (error) {
                break;
            }
        }
    }

    let slick = $('.slick-banner');
    slick.html(slider);
    let dots = $('.slick-dots-banner');
    slickShowArrow(slick, dots, id_slide)
    previewImage()
    modalClose()
    dateCalendar()
    setBanner(1)

    $('#show-banner').modal('show');
    $(".loader-view-container").remove();
}

function getHomeBanner(res) {
    if (res.code == 200) {
        let count = 1;
        let imagesMobile = [];

        res = res.data

        $(".input-title-home").val(res.block_1_title)
        $(".input-subtitle-home").val(res.block_1_subtitle)

        if (res.block_1_video_name) {
            if (res.block_1_video_name.match(/\.(jpeg|jpg|gif|png)$/) != null) {
                $(".video-header").html(`<img src="${res.block_1_video_name}" alt="" class="d-flex w-100" id="image-promo-header-home">`)
            } else {
                $(".video-header").html(`
                <img src="./images/basic-icons/pencil-edit-teal.svg" alt="add-photo" class="add-photo promo-icon cursor-pointer" style="width: 62px; position: absolute; transform: translate(215px, -112px);" />
                <span class="a-text-bold-warm text-plus p-2 pr-3 pl-3 white-shadow position-absolute " style="    transform: translate(207px, -40px);">Añade tu archivo <br> jpg 472px X 295px </span>
                <video class="w-100 h-100 home-video" id="video-promo-header-home" style="display: block" controls muted autoplay>
                    <source src="${res.block_1_video_name}" type="video/mp4">
                </video>`)
            }
        }

        while (true) {
            if (res[`block_1_image_background_${count}`]) {
                imagesMobile.push(res[`block_1_image_background_${count}`]);
                count++;
            } else {
                break;
            }
        }

        landing = $(".modal-home-encabezado").attr("landing");

        if (landing != lang) {
            varSetHomeBanner = 1
        }

        if (varSetHomeBanner == 1) {
            lang = landing
            setHomeBanner(landing)
            varSetHomeBanner++
        }

        landingView.renderHomeMobile(imagesMobile)
        landingView.renderHomePC(res.block_1_title, res.block_1_subtitle, res.block_1_video_name);
        closeChafa()

        $(".modal-home-encabezado").modal("show");
        $(".loader-view-container").remove();
    }
}

export { getBanner, getHomeBanner }