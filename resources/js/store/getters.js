import $ from "jquery";
$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
    }
});

import { getBanner, getLogos, getProgramChapter, getBannerProgramacion, getLogosProgramacion, getSynopsisTable, getBannerCanalClaro, getHeaderCanalClaro, getProgramacionCanalClaro, getTitleCanalClaro, updateProgramacion, getPromoCanalClaro, updateSinopsis } from './actions'

var lastMonth, lastDay;
var first_day_calendar, last_day_calendar

function getProgramacion(type) {
    $.ajax({
        type: "POST",
        cache: false,
        url: "landing/getSection/programation",
        success: function (res) {
            if (type == 1) {
                getBanner(JSON.parse(res), 1)
            }
            if (type == 2) {
                getLogos(JSON.parse(res))
            }
        }
    })
}

function getProgramId(id) {
    $.ajax({
        type: "POST",
        data: { id },
        cache: false,
        url: "landing/getProgramId",
        success: function (res) {
            getProgramChapter(JSON.parse(res), first_day_calendar, last_day_calendar)
        }
    })
}

function getLastDateCalendar() {
    $.ajax({
        type: "POST",
        cache: false,
        url: "general-program/getFirstGrilla",
        success: function (res) {
            res = JSON.parse(res)
            first_day_calendar = res.data.first_day_calendar.split('-')
            last_day_calendar = res.data.last_day_calendar.split('-')
        }
    })
}

// function getSynopsis() {
//     $.ajax({
//         type: "POST",
//         cache: false,
//         url: "landing/getSynopsisTable",
//         success: function (res) {
//             getSynopsisTable(JSON.parse(res), lastMonth, lastDay);
//         }
//     })
// }

// function getProgramacionDate(date, id) {
//     $.ajax({
//         type: "POST",
//         data: { date },
//         cache: false,
//         url: "landing/getProgramacionDate",
//         success: function (res) {
//             if (id == '1') {
//                 updateProgramacion(JSON.parse(res))
//             } else {
//                 updateSinopsis(JSON.parse(res))
//             }
//         }
//     })
// }

// function getLastDateCalendar() {
//     $.ajax({
//         type: "POST",
//         cache: false,
//         url: "general-program/getFirstGrilla",
//         success: function (res) {
//             lastMonth = JSON.parse(res).data.last_day_calendar.split('-')[1]
//             lastDay = JSON.parse(res).data.last_day_calendar.split('-')[2]
//         }
//     })
// }

// function getCanalClaro(type) {
//     $.ajax({
//         type: "POST",
//         cache: false,
//         url: "landing/getCanalClaro",
//         success: function (res) {
//             if (type == 'banner') {
//                 getBannerCanalClaro(JSON.parse(res))
//             }
//             if (type == 'header') {
//                 getHeaderCanalClaro(JSON.parse(res))
//             }
//             if (type == 'title-1') {
//                 getTitleCanalClaro(JSON.parse(res), 1)
//             }
//             if (type == 'promo') {
//                 getPromoCanalClaro(JSON.parse(res))
//             }
//             if (type == 'title-2') {
//                 getTitleCanalClaro(JSON.parse(res), 2)
//             }
//             if (type == 'title-3') {
//                 getTitleCanalClaro(JSON.parse(res), 3)
//             }
//         }
//     })
// }

// function getClaroCinema(type) {
//     $.ajax({
//         type: "POST",
//         cache: false,
//         url: "landing/claroCinema",
//         success: function (res) {
//             if (type == 'banner') {
//                 getBannerCanalClaro(JSON.parse(res))
//             }
//         }
//     })
// }

// function getModalProgramacion() {
//     $.ajax({
//         type: "POST",
//         cache: false,
//         url: "landing/getProgrammingLanding",
//         success: function (res) {
//             getProgramacionCanalClaro(JSON.parse(res), lastMonth, lastDay)
//         }
//     })
// }

export {
    getProgramacion, getProgramId, getLastDateCalendar
    // getSynopsis, getCanalClaro, getModalProgramacion, getLastDateCalendar, getProgramacionDate, getClaroCinema
}