import $ from "jquery";

import { setImgBannerProgramacion, setImgCarruselHome, setlogoLnading, setHeader, setTitulo, setImgBannerCanalClaro } from './setters'

const LOADER = `<div class="loader-view-container" id="loader1"><img src="./images/loader.gif" class="loader" alt=""></div>`;
var img = [], index = [];

function setBannerProgramacion(lang) {
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
        if (lang == 'programacion') {
            setImgBannerProgramacion(data)
        }
        if (lang == 'canal') {
            data.append("landing", "Canal Claro");
            setImgBannerCanalClaro(data)
        }

        img = [];
        index = [];
    })
}

function setLogosProgramacion() {
    $('#btn-acepta-logos').on('click', function () {
        let logo;
        let data = new FormData();
        for (let i = 0; i <= 2; i++) {
            logo = document.getElementById('img_logo_' + i).files[0] || "";
            data.append($('#img_logo_' + i).attr('mvh'), logo);
        }
        let urlCanalClaro = $("#link-logo-canal-claro").val() || "";
        console.log(urlCanalClaro)
        data.append("urlCanalClaro", urlCanalClaro);
        let urlConertChannel = $("#link-logo-concert-channel").val() || "";
        data.append("urlConcertChannel", urlConertChannel);
        let urlClaroCinema = $("#link-logo-claro-cinema").val() || "";
        data.append("urlClaroCinema", urlClaroCinema);
        setlogoLnading(data)
    })
}

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

function setHeaderCanalClaro() {
    $('#btn-acepta-header').on('click', function () {
        let landing = "Canal Claro";
        let title1 = $(".inp-text-modal-1").val() || "";
        let title2 = $(".inp-text-modal-2").val() || "";
        let logo = document.getElementById("img-header").files[0] || "";
        let link = $("#inp-text-modal-4").val() || "";
        let data = new FormData();
        data.append("landing", landing);
        data.append("title1", title1);
        data.append("title2", title2);
        data.append("logo", logo);
        data.append("link", link);
        setHeader(data)
    })
}

function setTituloCanalClaro() {
    $('#btn-acepta-titulo').on('click', function () {

        let data = new FormData();
        let landing = "Canal Claro";

        let value = $(".inp-title-modal").val();
        let key = $(".inp-title-modal").attr("key");
        setTitulo({
            value: value,
            key: key,
            landing: landing
        });
        let valueSub = $(".inp-sub-title-modal").val();
        let keySub = $(".inp-sub-title-modal").attr("key");
        setTitulo({
            value: valueSub,
            key: keySub,
            landing: landing
        });
    })
}

export {
    setBannerProgramacion,
    setLogosProgramacion,
    setImgCarruselVertical,
    setHeaderCanalClaro,
    setTituloCanalClaro
}