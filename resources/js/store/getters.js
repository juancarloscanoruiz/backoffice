import $ from "jquery";
$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
    }
});

import { getBannerProgramacion, getLogosProgramacion, getSynopsisTable } from './actions'

function getProgramacion(type) {
    $.ajax({
        type: "POST",
        cache: false,
        url: "landing/getSection/programation",
        success: function (res) {
            if (type == 'banner') {
                getBannerProgramacion(JSON.parse(res))
            } else if (type == 'logos') {
                getLogosProgramacion(JSON.parse(res))
            }
        }
    })
}

function getSynopsis() {
    $.ajax({
        type: "POST",
        cache: false,
        url: "landing/getSynopsisTable",
        success: function (res) {
            getLastDateCalendar(JSON.parse(res))
        }
    })
}

function getLastDateCalendar(sinopsis) {
    $.ajax({
        type: "POST",
        cache: false,
        url: "general-program/getFirstGrilla",
        success: function (res) {
            getSynopsisTable(sinopsis.data, JSON.parse(res).data.last_day_calendar.split('-')[1], JSON.parse(res).data.last_day_calendar.split('-')[2]);
        }
    })
}

export { getProgramacion, getSynopsis}