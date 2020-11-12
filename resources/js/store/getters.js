import $ from "jquery";
$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
    }
});

import { getBannerProgramacion } from './actions'

function getBanner() {
    $.ajax({
        type: "POST",
        cache: false,
        url: "landing/getSection/programation",
        success: function (res) {
            getBannerProgramacion(JSON.parse(res))
        }
    })
}

export {
    getBanner
}