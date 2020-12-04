import $ from "jquery";

import { setImgCarruselHome, setBannerProgramacion, setBannerHome } from './setters'

const LOADER = `<div class="loader-view-container" id="loader1"><img src="./images/loader.gif" class="loader" alt=""></div>`;
var img = [], index = [];

function setImgCarruselVertical() {
    $('.previewImage').on('change', function (e) {
        let img = e.target.files[0];
        let id = $(this).attr('chapter_id')
        let landing = $(this).attr('landing')
        let data = new FormData();
        data.append("thumbnail_list_vertical", img);
        data.append("chapter_id", id);
        data.append("landing", landing);
        setImgCarruselHome(data);
    })
}

function setBanner(id) {
    $('.previewImage').on('change', function (e) {
        img.push(e.target.files[0]);
        index.push($(this).attr('index'));
    })

    $('#btn-acepta-banner').on('click', function () {
        $("body").append(LOADER);
        let data = new FormData();
        for (let i = 0; i < img.length; i++) {
            let file = "file" + (i + 1).toString();
            data.append(file, img[i]);
        }
        data.append("positions", index);
        data.append("date", $("#programming-modal").val());
        if (id == 1) {
            setBannerProgramacion(data)
        }
        img = [];
        index = [];
    })
}

function setHomeBanner(landing) {
    $(".modal-home-encabezado").on("click", "#edit-home-encabezado", function () {
        $("body").append(LOADER);

        let videoimage = document.getElementById("video-promo-header-home").files[0] || "";
        let title = $(".modal-home-encabezado .header-title-1").val() || "";
        let subtitle = $(".modal-home-encabezado .header-title-2").val() || "";

        let data = new FormData();
        data.append("video", videoimage);
        data.append("title", title);
        data.append("subtitle", subtitle);

        setBannerHome(data, landing)
    });
}

export { setImgCarruselVertical, setBanner, setHomeBanner }