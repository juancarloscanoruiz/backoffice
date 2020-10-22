<template>
<div>
    <div class=" d-flex">
        <!--Fecha de inicio de calendario-->
        <div class="position-relative">
            <input type="text" id="date-start-input" landing="Claro Canal">
            <label for="date-start-input" class="mb-0 ml-5 date-button date-start-table d-flex align-items-center pl-3 pr-3" id="date-start-table" data-toggle="modal" data-target="#calendar">
                <img src="/images/calendario.svg" alt="">
                <div class="ml-3">
                    <p class="text-small d-block mb-0 a-text-semibold-warmgrey">Inicio</p>
                    <p class="text-normal mb-0 a-text-bold-charcoal" id="start-date-text"></p>
                </div>
            </label>
        </div>
        <!--Fecha de fin de calendario-->
        <label for="date-start-input" class="mb-0 ml-5 date-button date-end-table d-flex align-items-center pl-3 pr-3" data-toggle="modal" data-target="#calendar">
            <img src="/images/calendario.svg" alt="">
            <div class="ml-3">
                <p class="text-small d-block mb-0 a-text-semibold-warmgrey">Fin</p>
                <p class="text-normal mb-0 a-text-bold-charcoal" id="end-date-text"></p>
            </div>
        </label>
    </div>

    <!-- Button trigger modal
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#calendar">
        Launch demo modal
    </button>
    -->
    <!-- Modal -->
    <div class="modal fade" id="calendar" style="overflow: auto;">
        <div class="modal-dialog modal-dialog-centered max-width-calendar">
            <div class="modal-content" style="min-height: 500px;">
                <div class="container-fluid">
                    <div class="row">
                        <div class="modal-header col-10 offset-1 mb-2 px-0 d-flex align-items-center">
                            <span class="text-light1">confirma las fechas <br> seleccionadas</span>
                            <div class="text-light1 customDateActive">
                                <span>Inicio:</span>
                                <span>{{this.dataInit}}</span>
                            </div>
                            <div class="text-light1 customDate">
                                <span>Fin:</span>
                                <span>{{this.dataEnd}}</span>
                            </div>
                        </div>
                        <div class="col-8 offset-2 text-center">
                            <div class="navbar">
                                <img v-on:click="getLastMonth" id="last_month" class="arrow-progra" src="/images/arrow-gray.svg">
                                <span id="month" class="a-text-bold-brown-two text-plus"></span>
                                <img v-on:click="getNextMonth" id="next_month" class="arrow-progra-right arrow-progra" src="/images/arrow-gray.svg">
                            </div>
                        </div>
                        <div class="col-10 offset-1 program-original px-0 mt-3 text-center">
                            <div class="days-text">
                                <div>Dom</div>
                                <div>Lun</div>
                                <div>Mar</div>
                                <div>Mie</div>
                                <div>Jue</div>
                                <div>Vie</div>
                                <div>Sab</div>
                            </div>
                            <div class="content-days" v-on:mouseover="hoverDataPicket($event)" v-on:click=" datePicker($event)">
                            </div>
                        </div>
                        <div class="modal-footer col-10 offset-1 px-0">
                            <button v-on:click="getFinalityDate()" data-dismiss="modal" class="m-0 btn-grilla a-btn-basic-small a-text-MBlack" style="height: 40px;border-radius: 10px;">ACEPTAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import store from '../store'
import $ from 'jquery'

const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];
const currentMonths = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
];

var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var currentMonth = month;
var year = date.getFullYear();

var lastMonth = month - 1;
var totalDays;

export default {
    data: function () {
        return {
            e: 0,
            id: 0,
            dataInit: 'DD-MM-YYYY',
            dataEnd: 'DD-MM-YYYY',
            dataGrilla: 'DD-MM-YYYY',
            landing: 'Claro Canal',
        }
    },
    mounted() {
        this.initCalender()

        $('#start-date-text').append(day + '-' + (month + 1) + '-' + year)
        $('#end-date-text').append(totalDays + '-' + (month + 1) + '-' + year)
    },
    methods: {
        initCalender: function () {
            $('#month').text(months[month]);
            $(".days").remove();
            for (let i = this.startDay(); i > 0; i--) {
                $(".content-days").append(`<div class="days a-text-bold-brown-two" style="opacity: .4;" id="disable">${this.getTotalDays(lastMonth)-(i-1)}</div>`);
            }
            totalDays = this.getTotalDays(month)
            for (let i = 1; i <= totalDays; i++) {
                $(".content-days").append(`<div class="days a-text-bold-brown-two cursor-pointer day-active" id="${i}"><span id="${i}">${i}</span></div>`);
            }
        },
        getNextMonth: function () {
            if (month !== 11) {
                month++;
            } else {
                month = 0;
            }
            this.initCalender()
        },
        getLastMonth: function () {
            if (month !== 0) {
                month--;
            } else {
                month = 11;
            }
            this.initCalender()
        },
        getTotalDays: function (Month) {
            if (Month === -1) Month = 11;
            var numMonthReal = Month + 1;
            if (numMonthReal == 1 || numMonthReal == 3 || numMonthReal == 5 || numMonthReal == 7 || numMonthReal == 8 || numMonthReal == 10 || numMonthReal == 12) {
                return 31;
            }
            if (numMonthReal == 4 || numMonthReal == 6 || numMonthReal == 9 || numMonthReal == 11) {
                return 30;
            }
            if (numMonthReal == 2) {
                // return leapMonth() ? 29 : 28;
                return 28;
            }
        },
        leapMonth: function () {
            return ((year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0));
        },
        startDay: function () {
            var start = new Date(year, month, 1);
            return ((start.getDate() - 1) === -1) ? 6 : start.getDay();
        },
        datePicker: function (event) {
            if (event.explicitOriginalTarget.id !== 'disable') {
                if (this.e == 0) {
                    this.e = 1
                    this.initDay(event.explicitOriginalTarget.id, this.e)
                } else {
                    this.e = 0
                    this.finishDay(event.explicitOriginalTarget.id, this.e)
                }
            }
        },
        hoverDataPicket: function (event) {
            let idFather = event.explicitOriginalTarget.id;
            if (this.e == 1) {
                for (let i = this.id; i <= idFather; i++) {
                    $('#' + i).addClass('days-hover')
                    for (let j = i + 1; j <= 31; j++) {
                        $('#' + j).removeClass('days-hover')
                    }
                }
            }
        },
        initDay: function (id, e) {

            let idFather = event.explicitOriginalTarget.id;
            this.id = idFather;

            $('.day-active').removeClass('days-select days-hover days-end-select')
            $('#' + idFather).addClass('days-select')

            this.dataInit = idFather + '-' + currentMonths[month] + '-' + year;
            this.dataGrilla = (idFather - 1) + '-' + currentMonths[month] + '-' + year;
        },
        finishDay: function (id, e) {

            let idFather = event.explicitOriginalTarget.id;

            $('#' + idFather).addClass('days-end-select')

            this.dataEnd = idFather + '-' + currentMonths[month] + '-' + year;
        },
        getFinalityDate: function () {
            $('#start-date-text').html('')
            $('#end-date-text').html('')
            $('#start-date-text').append(this.dataInit)
            $('#end-date-text').append(this.dataEnd)
            let dataGrilla = this.dataGrilla;
            let dataEnd = this.dataEnd;
            let landing = this.landing;
            store.commit('filterDates', {
                dataGrilla,
                dataEnd,
                landing
            })
        }
    },
}
</script>

<style>
.text-light1 {
    font-size: 14px;
    color: #4a4a4a;
}

.arrow-progra {
    width: 30px;
}

.days:hover span {
    border: 1px solid #da291c;
    padding: 3px 24px;
    border-radius: 10px;
}

.days-select span {
    background: #da291c !important;
    padding: 4px 25px !important;
    border-top-left-radius: 10px !important;
    border-top-right-radius: 25px !important;
    border-bottom-left-radius: 10px !important;
    border-bottom-right-radius: 25px !important;
    color: #ffffff;
    z-index: 1;
}

.days-end-select span {
    background: #da291c !important;
    padding: 4px 25px !important;
    border-top-left-radius: 25px !important;
    border-top-right-radius: 10px !important;
    border-bottom-left-radius: 25px !important;
    border-bottom-right-radius: 10px !important;
    color: #ffffff;
    z-index: 1;
}

.days-hover span {
    background: #d5d7d7;
    padding: 4px 40px;
}

.customDateActive {
    box-shadow: #0097a9 0 0 5px 1px;
    padding: 4px;
    border-radius: 10px;
}

.customDate {
    box-shadow: #444 0 0 5px 1px;
    padding: 4px;
    border-radius: 10px;
}

.max-width-calendar {
    max-width: 600px !important;
}

.content-days,
.days-text {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.days,
.days-text div {
    width: calc(498px / 7);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
