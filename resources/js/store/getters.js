import $ from "jquery";
$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
    }
});

import { getBanner } from './actions'

function getProgramacion(type) {
    $.ajax({
        type: "POST",
        cache: false,
        url: "landing/getSection/programation",
        success: function (res) {
            if (type == 1) {
                getBanner(JSON.parse(res), 1)
            }
        }
    })
}

export { getProgramacion }