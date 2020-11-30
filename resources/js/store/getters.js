import $ from "jquery";
$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
    }
});

import { getBanner } from './actions'

function getProgramacion(type, id_slide) {
    $.ajax({
        type: "POST",
        cache: false,
        url: "landing/getSection/programation",
        success: function (res) {
            
            if (type == 1) {
               // let total = JSON.parse(totales);
                 let initial =JSON.parse(id_slide);
                getBanner(JSON.parse(res), 1,initial);
            }
        }
    })
}

export { getProgramacion }