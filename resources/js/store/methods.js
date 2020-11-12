import $ from "jquery";

import { getImgBannerProgramacion } from './setters'

const LOADER = `<div class="loader-view-container" id="loader1"><img src="./images/loader.gif" class="loader" alt=""></div>`;
var img = [], index = [];

function setBannerProgramacion() {
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
        getImgBannerProgramacion(data)
        img = [];
        index = [];
    })
}

export {
    setBannerProgramacion
}