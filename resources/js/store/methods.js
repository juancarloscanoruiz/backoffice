import $ from "jquery";

import { setImgCarruselHome, setBannerProgramacion } from './setters'

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

export { setImgCarruselVertical, setBanner }