<template>
<div class="row">
    <div class="col-12">
        <div class="navbar">
            <!-- BOTONES APROBAR Y RECHAZAR CAMBIOS -->
            <div class="d-flex">
                <button class="a-text-MBlack btn-apro mr-3">Aprobar cambios</button>
                <button class="a-text-MBlack btn-recha">Rechazar cambios</button>
            </div>
            <!-- ZONA HORARIA -->
            <button class="btn-zona zona">Zona horaria<img :src="'./images/gmt-icon.svg'" alt="Zona Horaria" class="ml-2" style="width: 32px;"></button>
        </div>
        <!-- ULTIMA EDICIÒN -->
        <div class="m-3">
            <span class="a-text-black-light text-plus">Última edición :<samp class="zona ml-2">{{this.$store.state.last_edition}}</samp></span>
            <span class="a-text-black-light text-plus d-block">Editado por :<samp class="zona ml-2">{{this.$store.state.edited_for + ' (' + this.$store.state.user_rol + ')'}}</samp></span>
        </div>
        <!-- TITULO -->
        <div class="mt-5 px-4">
            <h2 class="text-center a-text-black-brown-two">SINOPSIS</h2>
            <hr class="hr">
        </div>
    </div>
    <div class="col-9 mx-auto my-5">
        <div class="row">
            <!-- CANAL CLARO -->
            <div class="col-4" v-on:click="sinopsisRoll(0)">
                <div class="d-flex justify-content-center border-r">
                    <li class="px-5 py-4 list-channel-item d-flex list-channel-active">
                        <img class="claro-nav-image" :src="'./images/home/tv-1.svg'" alt="Canal Claro" style="width: 150px" />
                    </li>
                </div>
            </div>
            <!-- CONCERT CHANNEL -->
            <div class="col-4" v-on:click="sinopsisRoll(1)">
                <div class="d-flex justify-content-center border-r">
                    <li class="px-5 py-4 list-channel-item d-flex">
                        <img class="claro-nav-image" :src="'./images/concert-black-icon.svg'" alt="Concert Channel" style="width: 150px" />
                    </li>
                </div>
            </div>
            <!-- CLARO CINEMA -->
            <div class="col-4" v-on:click="sinopsisRoll(2)">
                <div class="d-flex justify-content-center">
                    <li class="px-5 py-4 list-channel-item d-flex">
                        <img class="claro-nav-image" :src="'./images/home/cinema-home-img.svg'" alt="Claro Cinema" style="width: 150px" />
                    </li>
                </div>
            </div>
        </div>
    </div>
    <div class="col-8 mx-auto mt-5">
        <!-- MES -->
        <h3 class="monthSliderCalendar a-text-semibold-brownish-grey-three text-uppercase mb-5"></h3>
        <!-- CALENDARIO SLIDER -->
        <div class="slider-calendar calendar-sinopsis-slider"></div>
    </div>
    <!-- TABLA -->
    <div class="col-11 mx-auto my-5 p-0 content-table">
        <!-- HEADER TABLA -->
        <div class="contenedor-columna synop titletable text-center">
            <span class="a-text-MBlack a-text-prev">Programa</span>
        </div>
        <div class="contenedor-columna landins titletable text-center">
            <span class="a-text-MBlack a-text-prev">Caracteres</span>
        </div>
        <div class="contenedor-columna landins titletable text-center">
            <span class="a-text-MBlack a-text-prev">Imágenes</span>
        </div>
        <div class="contenedor-columna landins titletable text-center">
            <span class="a-text-MBlack a-text-prev">Acciones</span>
        </div>
        <div class="contenedor-columna landins titletable text-center">
            <span class="a-text-MBlack a-text-prev">Landing</span>
        </div>
        <!-- BODY TABLA -->
        <div class="contenedor-fila" v-for="(programs, index) in this.$store.state.sinopsysPrograms" :key="index">
            <div class="contenedor-columna pl-4">
                <span class="a-text-medium-black text-normal">{{programs.chapter_title}}</span>
            </div>
            <div class="contenedor-columna text-center">
                <span v-if="programs.sinopsis_info.sinopsis_len < 21" class="a-text-semibold-tomato text-normal">{{programs.sinopsis_info.sinopsis_len}}</span>
                <span v-if="programs.sinopsis_info.sinopsis_len > 21 && programs.sinopsis_info.sinopsis_len < 144" class="a-text-semibold-orange text-normal">{{programs.sinopsis_info.sinopsis_len}}</span>
                <span v-if="programs.sinopsis_info.sinopsis_len > 144" class="a-text-semibold-greyish-brown-two text-normal">{{programs.sinopsis_info.sinopsis_len}}</span>
            </div>
            <div class="contenedor-columna text-center">
                <span v-if="programs.sinopsis_info.cant_imagenes <= 4" class="a-text-semibold-tomato text-normal">{{programs.sinopsis_info.cant_imagenes}}/8</span>
                <span v-if="programs.sinopsis_info.cant_imagenes > 4 && programs.sinopsis_info.cant_imagenes < 8" class="a-text-semibold-orange text-normal">{{programs.sinopsis_info.cant_imagenes}}/8</span>
                <span v-if="programs.sinopsis_info.cant_imagenes >= 8" class="a-text-semibold-greyish-brown-two text-normal">{{programs.sinopsis_info.cant_imagenes}}/8</span>
            </div>
            <div class="contenedor-columna text-center">
                <input chapter_id="${program.chapter_id}" type="image" src="./images/lapiz-acti.svg" alt="" class="edit-synopsis-pencil btn-focus sinopsis edi mr-3" />
                <input chapter_id="${program.chapter_id}" type="image" src="./images/ojito-acti.svg" alt="" class="prev-synopsis-pencil btn-focus edi" />
            </div>
            <div class="contenedor-columna text-center ">
                <div v-if="programs.sinopsis_info.cant_imagenes <= 4" class="d-flex align-items-center justify-content-center mb-2 mt-2">
                    <label for="yes-synopsis" id="yes-synopsis" class="mb-0 si-estilo cursor-pointer switch-label">Sí</label>
                    <label for="no-synopsis" id="noestado-landing" class="mb-0 no-estilo label-active cursor-pointer switch-label">No</label>
                </div>
                <div v-if="programs.sinopsis_info.cant_imagenes > 4 && programs.sinopsis_info.cant_imagenes <= 8" class="d-flex align-items-center justify-content-center mb-2 mt-2">
                    <label for="yes-synopsis" id="yes-synopsis" class="mb-0 label-active si-estilo cursor-pointer switch-label">Sí</label>
                    <label for="no-synopsis" id="noestado-landing" class="mb-0 no-estilo  cursor-pointer switch-label">No</label>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import store from '../../store'
import $ from "jquery";
import "slick-carousel";

let date = new Date()
let firstDay = (date.getFullYear() + '-' + (date.getMonth() + 1) + '-0' + date.getDate())
let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
var days = ["DOM", "LUN", "MAR", "MIER", "JUE", "VIE", "SAB"]

export default {
    data() {
        return {

        }
    },
    mounted() {
        // MONTAMOS EL MES
        $('.monthSliderCalendar').append(months[date.getMonth()] + ' ' + date.getFullYear())
        // PETICION PARA LA GRILLA
        store.commit('getGrilla');
        // PETISION PARA LA TABLA
        store.commit('getSinopsysPrograms');
        // FOR PARA LLENAR LOS DIAS
        for (let i = date.getDate(); i <= this.getTotalDays((date.getMonth() + 1)); i++) {
            if (i == date.getDate()) {
                $('.slider-calendar').append(`<div class="synopsis-calendar-item programming-item programming-item-active" date="${date.getFullYear() + '-' + (date.getMonth() + 1) + '-0' + i}"><p>${days[this.days(date.getFullYear(), date.getMonth(), i)]}</p><p>${i}</p></div>`);
            } else {
                $('.slider-calendar').append(`<div class="synopsis-calendar-item programming-item" date="${date.getFullYear() + '-' + (date.getMonth() + 1) + '-0' + i}"><p>${days[this.days(date.getFullYear(), date.getMonth(), i)]}</p><p>${i}</p></div>`);
            }
        }
        // LLAMAMOS EL SLIDER PARA EL CARRUSEL
        this.slickShowCalendar()
    },
    methods: {
        getTotalDays: function (Month) {
            if (Month == 1 || Month == 3 || Month == 5 || Month == 7 || Month == 8 || Month == 10 || Month == 12) {
                return 31;
            }
            if (Month == 4 || Month == 6 || Month == 9 || Month == 11) {
                return 30;
            }
            if (Month == 2) {
                if (date.getFullYear() %
                    4 == 0) {
                    return 29
                } else {
                    return 28
                }
            }
        },
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
        days: function (y, m, d) {
            let start = new Date(y, m, d);
            return start.getDay()
        },
        sinopsisRoll: function (i) {
            store.commit('sinopsisRoll', i);
        },

    },
    components: {}
}
</script>
