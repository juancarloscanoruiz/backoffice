import $ from "jquery";
$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
    }
});

import { getBanner, getHomeBanner } from './actions'

function getProgramacion(type, id_slide) {
    $.ajax({
        type: "POST",
        cache: false,
        url: "landing/getSection/programation",
        success: function (res) {
            if (type == 1) {
                let initial = JSON.parse(id_slide);
                getBanner(JSON.parse(res), 1, initial);
            }
        }
    })
}

function getHome() {
    $.ajax({
        type: "GET",
        cache: false,
        url: "landing/home",
        success: function (res) {
            getHomeBanner(JSON.parse(res))
        }
    })
}

export { getProgramacion, getHome }