<template>
<div>
    <!-- Modal -->
    <div class="modal fade" id="calendar" style="overflow: auto;">
        <div class="modal-dialog modal-dialog-centered max-width-calendar">
            <div class="modal-content" style="min-height: 600px;">
                <div class="container-fluid">
                    <div class="row">
                        <div class="modal-header col-10 offset-1 mb-2 px-0 d-flex align-items-center mt-3">
                            <span class="text-light1">Selecciona fechas</span>
                            <div class="text-light1 customDateActive" id="date1">
                                <span>Inicio:</span>
                                <span>{{this.dataInit}}</span>
                            </div>
                            <div class="text-light1 customDate" id="date2">
                                <span>Fin:</span>
                                <span>{{this.dataEnd}}</span>
                            </div>
                        </div>
                        <div class="col-8 offset-2 text-center">
                            <div class="navbar">
                                <img v-on:click="getLastMonth" id="last_month" class="arrow-progra" :src="'./images/arrow-gray.svg'">
                                <span id="month" class="a-text-bold-brown-two text-plus"></span>
                                <img v-on:click="getNextMonth" id="next_month" class="arrow-progra-right arrow-progra" :src="'./images/arrow-gray.svg'">
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
                            <div class="content-days" v-on:mouseover="hoverDataPicket($event)" v-on:click="datePicker($event)"></div>
                        </div>
                        <div class="modal-footer col-10 offset-1 px-0 mb-3" style="position: absolute;bottom: 0;">
                            <button v-on:click="getFinalityDate()" data-dismiss="modal" class="m-0 btn-grilla a-btn-basic-small a-text-MBlack btn-calendar">ACEPTAR</button>
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
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const currentMonths = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

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
            month: 0,
            dataInit: 'DD-MM-YYYY',
            dataEnd: 'DD-MM-YYYY',
            dataInitG: '',
            dataEndG: '',
        }
    },
    mounted() {
        this.initCalender()
        $('#month').text(months[month]);
        this.month = month;
    },
    methods: {
        initCalender: function () {
            let i = 0;
            let j;
            let k = 1;
            let l;
            do {
                for (l = this.getTotalDays(i - 1) - (this.startDay(year, i) - 1); l < (this.getTotalDays(i - 1) + 1); l++) {
                    if (month == i) {
                        $(".content-days").append(`<div index="" mvh="12" class="days a-text-bold-brown-two cursor-pointer day-disable prev-${months[i]}" id="disable"><span index="" mvh="12">${l}</span></div>`);
                    } else {
                        $(".content-days").append(`<div index="" mvh="12" class="days a-text-bold-brown-two cursor-pointer day-disable prev-${months[i]} d-none" id="disable"><span index="" mvh="12">${l}</span></div>`);
                    }
                }
                for (j = 1; j <= this.getTotalDays(i); j++) {
                    if (month == i) {
                        $(".content-days").append(`<div index="${k}" mvh="${i}" cuak="${i + 1}" class="days a-text-bold-brown-two cursor-pointer day-active ${'day-' + k} ${months[i]}"><span index="${k}" mvh="${i}" cuak="${i + 1}">${j}</span></div>`);
                        this.month = i
                    } else {
                        $(".content-days").append(`<div index="${k}" mvh="${i}" cuak="${i + 1}" class="days a-text-bold-brown-two cursor-pointer day-active ${'day-' + k} ${months[i]} d-none"><span index="${k}" mvh="${i}" cuak="${i + 1}">${j}</span></div>`);
                    }
                    k++
                }
                i++
                j++
            }
            while (i <= 11);
        },
        getNextMonth: function () {
            $('.' + months[this.month]).addClass('d-none')
            $('.prev-' + months[this.month]).addClass('d-none')
            if (this.month !== 11) {
                this.month++;
                $('.' + months[this.month]).removeClass('d-none')
                $('.prev-' + months[this.month]).removeClass('d-none')
                $('#month').text(months[this.month]);
            } else {
                this.month = 0;
                $('.' + months[this.month]).removeClass('d-none')
                $('.prev-' + months[this.month]).removeClass('d-none')
                $('#month').text(months[this.month]);
            }
        },
        getLastMonth: function () {
            $('.' + months[this.month]).addClass('d-none')
            $('.prev-' + months[this.month]).addClass('d-none')
            if (this.month !== 0) {
                this.month--;
                $('.' + months[this.month]).removeClass('d-none')
                $('.prev-' + months[this.month]).removeClass('d-none')
                $('#month').text(months[this.month]);
            } else {
                this.month = 11;
                $('.' + months[this.month]).removeClass('d-none')
                $('.prev-' + months[this.month]).removeClass('d-none')
                $('#month').text(months[this.month]);
            }
        },
        getTotalDays: function (Month) {
            if (Month === -1) Month = 11;
            let numMonthReal = Month + 1;
            if (numMonthReal == 1 || numMonthReal == 3 || numMonthReal == 5 || numMonthReal == 7 || numMonthReal == 8 || numMonthReal == 10 || numMonthReal == 12) {
                return 31;
            }
            if (numMonthReal == 4 || numMonthReal == 6 || numMonthReal == 9 || numMonthReal == 11) {
                return 30;
            }
            if (numMonthReal == 2) {
                if (2028 % 4 == 0) {
                    return 29
                } else {
                    return 28
                }
            }
        },
        startDay: function (y, m) {
            let start = new Date(y, m, 1);
            return start.getDay()
        },
        datePicker: function (event) {
            if (event.target.attributes[1].value != 12) {
                if (this.e == 0) {
                    this.e = 1
                    this.id = event.target.attributes[0].value
                    this.initDay(event.target.attributes[0].value, event.target.attributes[1].value)

                    this.dataInit = event.target.innerText + '-' + currentMonths[event.target.attributes[1].value] + '-' + year;
                    if (event.target.innerText == 1 || event.target.innerText == 2 || event.target.innerText == 3 || event.target.innerText == 4 || event.target.innerText == 5 || event.target.innerText == 6 || event.target.innerText == 7 || event.target.innerText == 8 || event.target.innerText == 9) {
                        this.dataInitG = year + '-' + (event.target.attributes[2].value) + '-0' + event.target.innerText;
                    } else {
                        this.dataInitG = year + '-' + (event.target.attributes[2].value) + '-' + event.target.innerText;
                    }
                } else {
                    this.e = 0
                    $('.day-' + event.target.attributes[0].value).addClass('days-end-select');
                    this.dataEnd = event.target.innerText + '-' + currentMonths[event.target.attributes[1].value] + '-' + year;
                    if (event.target.innerText == 1 || event.target.innerText == 2 || event.target.innerText == 3 || event.target.innerText == 4 || event.target.innerText == 5 || event.target.innerText == 6 || event.target.innerText == 7 || event.target.innerText == 8 || event.target.innerText == 9) {
                        this.dataEndG = year + '-' + event.target.attributes[2].value + '-0' + event.target.innerText;
                    } else {
                        this.dataEndG = year + '-' + event.target.attributes[2].value + '-' + event.target.innerText;
                    }
                }
            }
        },
        hoverDataPicket: function (event) {
            if (this.e == 1) {
                let i = this.id;
                let j = event.target.attributes[0].value
                do {
                    $('.day-' + i).addClass('days-hover')
                    let test = this.getTotalDays(event.target.attributes[1].value)
                    do {
                        $('.day-' + j).removeClass('days-hover')
                        j++
                    } while (j <= 40)
                    i++
                } while (i <= event.target.attributes[0].value)
            }
        },
        initDay: function (mvh) {

            $('.day-active').removeClass('days-select days-hover days-end-select')
            $('.day-' + mvh).addClass('days-select')

            $('#date1').removeClass('customDateActive')
            $('#date1').addClass('customDate')

            $('#date2').removeClass('customDate')
            $('#date2').addClass('customDateActive')
        },
        getFinalityDate: function () {
            $('#start-date-text').html(this.dataInit)
            $('#end-date-text').html(this.dataEnd)
            let dataInit = this.dataInitG;
            let dataEnd = this.dataEndG;
            let landing = this.$store.state.landing;
            console.log(dataInit, dataEnd, landing);
            this.$store.commit('filterDates', {
                dataInit,
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
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.day-disable span {
    opacity: .4;
}

.day-disable:hover span {
    background: #9b9b9b;
    padding: 3px 10px;
    border-radius: 10px;
}

.day-active:hover span {
    border: 1px solid #da291c;
    padding: 3px 15px;
    border-radius: 10px;
    background: #ffffff;
    z-index: 1;
}

.days-select span {
    background: #da291c !important;
    color: #ffffff;
    width: 47px;
    height: 33px;
    position: relative;
    border-top-left-radius: 10px;
    border-top-right-radius: 15px !important;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 15px !important;
    padding: 4px 0 0 0 !important;
    border: none !important;
}

.days-select span:before {
    content: "";
    position: absolute;
    left: 41px;
    top: 3px;
    width: 0;
    height: 0;
    border-top: 14px solid transparent;
    border-left: 13px solid #da291c;
    border-bottom: 14px solid transparent;
}

.days-end-select span {
    background: #da291c !important;
    color: #ffffff;
    width: 47px;
    height: 33px;
    position: relative;
    border-top-left-radius: 15px !important;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 15px !important;
    border-bottom-right-radius: 10px;
    padding: 4px 0 0 0 !important;
    border: none !important;
}

.days-end-select span:before {
    content: "";
    position: absolute;
    right: 41px;
    top: 3px;
    width: 0;
    height: 0;
    border-top: 14px solid transparent;
    border-right: 13px solid #da291c;
    border-bottom: 14px solid transparent;
}

.days-hover span {
    background: #d5d7d7;
    padding: 4px 51px;
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
</style>
