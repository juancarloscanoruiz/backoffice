<template>
<div>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#calendar">
        Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="calendar">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="modal-header col-10 offset-1 mb-2 px-0">
                            <span class="text-light1">confirma las fechas <br> seleccionadas</span>
                        </div>
                        <hr>
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

                            <div class="content-days">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
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

var date = new Date();
var month = date.getMonth();
var year = date.getFullYear();

var lastMonth = month - 1;
var totalDays;

export default {
    mounted() {
        this.initCalender()
        this.datePicker()
    },
    methods: {
        initCalender: function () {
            $('#month').text(months[month]);
            $(".days").remove();
            for (let i = this.startDay(); i > 0; i--) {
                $(".content-days").append(`<div class="days a-text-bold-brown-two" style="opacity: .4;">${this.getTotalDays(lastMonth)-(i-1)}</div>`);
            }
            totalDays = this.getTotalDays(month)
            for (let i = 1; i <= totalDays; i++) {
                $(".content-days").append(`<div class="days a-text-bold-brown-two cursor-pointer day-active" id="${i}"><span>${i}</span></div>`);
            }
        },
        getNextMonth: function () {
            if (month !== 11) {
                month++;
            } else {
                month = 0;
            }
            this.initCalender()
            this.datePicker()
        },
        getLastMonth: function () {
            if (month !== 0) {
                month--;
            } else {
                month = 11;
            }
            this.initCalender()
            this.datePicker()
        },
        getTotalDays: function (Month) {
            if (Month === -1) Month = 11;
            var numMonthReal = Month + 1;
            if (numMonthReal == 1 || numMonthReal == 3 || numMonthReal == 5 || numMonthReal == 7 || numMonthReal == 8 || numMonthReal == 10 || numMonthReal == 12) {
                return 31;
            }
            if (numMonthReal == 4 || numMonthReal == 6 || numMonthReal == 9 || numMonthReal == 11) {
                return 30;
            } else {
                return leapMonth() ? 29 : 28;
            }
        },
        leapMonth: function () {
            return ((year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0));
        },
        startDay: function () {
            var start = new Date(year, month, 1);
            return ((start.getDate() - 1) === -1) ? 6 : start.getDay();
        },
        datePicker: function () {
            let evn = 0;
            if (evn == 0) {
                $('.day-active').on('click', function () {
                    evn = 0
                    $(this).addClass('days-select')
                    let idFather = $(this).attr('id')
                    $('.day-active').hover(function () {
                        let id = $(this).attr('id')
                        let i;
                        let j;
                        if (evn == 0) {
                            for (i = idFather; i <= id; i++) {
                                $('#' + i).addClass('days-hover')
                                for (j = i + 1; j <= 31; j++) {
                                    $('#' + j).removeClass('days-hover')
                                }
                            }
                        }
                    });
                    $('.day-active').on('click', function () {
                        $(this).addClass('days-end-select')
                        evn = 1;
                        $('.day-active').on('click', function () {
                            $('.day-active').removeClass('days-select days-hover days-end-select')
                        })
                    });
                })
            }
        },
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
</style>
