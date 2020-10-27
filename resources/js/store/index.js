import Vue from 'vue';
import Vuex from 'vuex';
import $ from "jquery";
import "slick-carousel";
import { editAttributeProgram, filterDates } from "../services/generalSchedule";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        landing: "",
        sliderLengt: 1,
        imageData: "",
        img: false,
        slider: [],
        landingCanalClaro: [],
        landingProgramacion: [],
        chapters: [],
        title: 'My title'
    },
    mutations: {
        // BANNERS
        getLandingProgramacion(state) {
            axios.post('landing/getSection/programation').then(res => {
                state.landingProgramacion = res.data;
                while (state.landingProgramacion[`image_slider_${state.sliderLengt}`]) {
                    if (state.landingProgramacion[`image_slider_${state.sliderLengt}`]) {
                        let url = state.landingProgramacion[`image_slider_${state.sliderLengt}`]
                        let img = { img: url }
                        state.slider.push(img);
                        state.sliderLengt++
                    }
                }
            })
        },
        getLandingCanalClaro(state) {
            axios.post('landing/getLandingCanalClaro').then(res => {
                state.landingCanalClaro = res.data.data;
                while (state.landingCanalClaro[`block_1_image_slider_${state.sliderLengt}`]) {
                    if (state.landingCanalClaro[`block_1_image_slider_${state.sliderLengt}`]) {
                        let url = state.landingCanalClaro[`block_1_image_slider_${state.sliderLengt}`]
                        let img = { img: url }
                        state.slider.push(img);
                        state.sliderLengt++
                    }
                }
            })
        },
        // METODOS VARIADOS
        previewImage(state, evn) {
            let id = $('.' + evn.id);
            let index = $('.camera_' + evn.attributes[4].nodeValue);
            let reader = new FileReader();
            if (evn.files && evn.files[0]) {
                reader.onload = (e) => {
                    id.attr('src', e.target.result)
                    index.attr('src', './images/lapiz-acti.svg')
                }
                reader.readAsDataURL(evn.files[0]);
            }
        },
        // SLICK EVENTOS
        slickShow() {
            try {
                $(".slick-show").slick("unslick");
                $('.slick-show').slick({
                    dots: true,
                    fade: true,
                    arrows: false,
                    appendDots: $(".slick-dots-mvh"),
                    customPaging: function (slider, i) {
                        return (
                            "<p class='a-text-bold-teal slider-pagination-item'>" +
                            (i + 1) +
                            "</p>"
                        );
                    }
                });
            } catch (error) {
                $('.slick-show').slick({
                    dots: true,
                    fade: true,
                    arrows: false,
                    appendDots: $(".slick-dots-mvh"),
                    customPaging: function (slider, i) {
                        return (
                            "<p class='a-text-bold-teal slider-pagination-item'>" +
                            (i + 1) +
                            "</p>"
                        );
                    }
                });
            }
        },
        slickShowArrow() {
            try {
                $(".slick-show").slick("unslick");
                $('.slick-show').slick({
                    dots: true,
                    arrows: true,
                    prevArrow: '<img src="./images/synopsis/arrow.svg" class="cursor-pointer arrow-left-programming" style="width: 40px;" />',
                    nextArrow: '<img src="./images/synopsis/arrow.svg" class="cursor-pointer arrow-right-programming" style="width: 40px;" />',
                    fade: true,
                    appendDots: $(".slick-dots-mvh"),
                    customPaging: function (slider, i) {
                        return (
                            "<p class='a-text-bold-teal slider-pagination-item'>" +
                            (i + 1) +
                            "</p>"
                        );
                    }
                });
            } catch (error) {
                $('.slick-show').slick({
                    dots: true,
                    arrows: true,
                    prevArrow: '<img src="./images/synopsis/arrow.svg" class="cursor-pointer arrow-left-programming" style="width: 40px;"/>',
                    nextArrow: '<img src="./images/synopsis/arrow.svg" class="cursor-pointer arrow-right-programming" style="width: 40px;"/>',
                    fade: true,
                    appendDots: $(".slick-dots-mvh"),
                    customPaging: function (slider, i) {
                        return (
                            "<p class='a-text-bold-teal slider-pagination-item'>" +
                            (i + 1) +
                            "</p>"
                        );
                    }
                });
            }
        },
        getVerticalCarrusel(state, landing) {
            switch (landing) {
                case "Canal Claro":
                    landing = "canal_claro";
                    break;

                case "Concert Channel":
                    landing = "concert_channel";
                    break;

                case "Claro Cinema":
                    landing = "claro_cinema";
                    break;
                default:
                    break;
            }
            axios.post('landing/homeCarrusel', {
                landing
            }).then(res => {
                state.chapters = res.data.data.chapters;

            })
        },
        // modalShow(state, id) {
        //     $('#' + id).modal('show')
        // },
        // ACTUALIZACION DE DATOS
        updateData(state, data) {
            editAttributeProgram(data.id, data.key, data.value)
        },
        filterDates(state, data) {
            filterDates(data.dataInit, data.dataEnd, data.landing);
        }
    },
})