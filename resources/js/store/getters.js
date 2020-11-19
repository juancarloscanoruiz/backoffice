import $ from "jquery";
$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
    }
});

import { getBannerProgramacion, getLogosProgramacion, getSynopsisTable, getBannerCanalClaro, getHeaderCanalClaro, getProgramacionCanalClaro, getTitleCanalClaro } from './actions'

var lastMonth, lastDay;

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
            getSynopsisTable(JSON.parse(res), lastMonth, lastDay);
        }
    })
}

function getLastDateCalendar() {
    $.ajax({
        type: "POST",
        cache: false,
        url: "general-program/getFirstGrilla",
        success: function (res) {
            lastMonth = JSON.parse(res).data.last_day_calendar.split('-')[1]
            lastDay = JSON.parse(res).data.last_day_calendar.split('-')[2]
        }
    })
}

function getCanalClaro(type) {
    $.ajax({
        type: "POST",
        cache: false,
        url: "landing/getCanalClaro",
        success: function (res) {
            if (type == 'banner') {
                getBannerCanalClaro(JSON.parse(res))
            }
            if (type == 'header') {
                getHeaderCanalClaro(JSON.parse(res))
            }
            if (type == 'title-1') {
                getTitleCanalClaro(JSON.parse(res), 1)
            }
            if (type == 'title-2') {
                getTitleCanalClaro(JSON.parse(res), 2)
            }
            if (type == 'title-3') {
                getTitleCanalClaro(JSON.parse(res), 3)
            }
        }
    })
}

function getModalProgramacion() {
    $.ajax({
        type: "POST",
        cache: false,
        url: "landing/getProgrammingLanding",
        success: function (res) {
            getProgramacionCanalClaro(JSON.parse(res), lastMonth, lastDay)
        }
    })
}

export { getProgramacion, getSynopsis, getCanalClaro, getModalProgramacion, getLastDateCalendar }