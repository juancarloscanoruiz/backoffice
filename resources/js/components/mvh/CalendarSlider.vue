<template>
<div>
    <div class="slider-calendar calendar-sinopsis-slider"></div>
</div>
</template>

<script>
import "slick-carousel";
import $ from "jquery";

var days = ["DOM", "LUN", "MAR", "MIER", "JUE", "VIE", "SAB"]

var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();

export default {
    mounted() {
        for (let i = day; i <= this.getTotalDays(month); i++) {
            if (i == day) {
                $('.slider-calendar').append(`<div class="synopsis-calendar-item programming-item programming-item-active" date="${year + '-0' + (month + 1) + '-' + i}"><p>${days[this.startDay(year, month, i)]}</p><p>${i}</p></div>`);
            } else {
                $('.slider-calendar').append(`<div class="synopsis-calendar-item programming-item" date="${year + '-0' + (month + 1) + '-' + i}"><p>${days[this.startDay(year, month, i)]}</p><p>${i}</p></div>`);
            }
        }
        for (let i = 1; i <= this.getTotalDays(month + 1); i++) {
            $('.slider-calendar').append(`<div class="synopsis-calendar-item programming-item" date="${year + '-0' + (month + 2) + '-' + i}"><p>${days[this.startDay(year, (month + 1), i)]}</p><p>${i}</p></div>`);
        }
        this.slickShowCalendar()
    },
    methods: {
        slickShowCalendar: function () {
            try {
                $(".slider-calendar").slick("unslick");
                $('.slider-calendar').slick({
                    infinite: true,
                    slidesToShow: 11,
                    slidesToScroll: 11,
                    dots: false,
                    arrows: true,
                    prevArrow: '<img src="./images/prev.png" class="arrow-prev" />',
                    nextArrow: '<img src="./images/next.png" class="arrow-next" />'
                });
            } catch (error) {
                $('.slider-calendar').slick({
                    infinite: true,
                    slidesToShow: 11,
                    slidesToScroll: 11,
                    dots: false,
                    arrows: true,
                    prevArrow: '<img src="./images/prev.png" class="arrow-prev" />',
                    nextArrow: '<img src="./images/next.png" class="arrow-next" />'
                });
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
        startDay: function (y, m, d) {
            let start = new Date(y, m, d);
            return start.getDay()
        },
    }
}
</script>

<style>

</style>
