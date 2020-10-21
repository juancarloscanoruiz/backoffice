import Vue from 'vue';
import Vuex from 'vuex';
import $ from "jquery";
import "slick-carousel";
import { editAttributeProgram } from "../services/generalSchedule";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        landing: "",
        chapters: [],
    },
    mutations: {
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
            }).then(respuesta => {
                state.chapters = respuesta.data.data.chapters;

            })
        },
        slickShow() {
            try {
                $(".slick-show").slick("unslick");
                $('.slick-show').slick({
                    dots: true,
                    fade: true,
                    arrows: false,
                    appendDots: $(".slick-dots"),
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
                    appendDots: $(".slick-dots"),
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
        modalShow(state, id) {
            $('#' + id).modal('show')
        },
        updateData(state, data) {
            editAttributeProgram(data.id, data.key, data.value)
        },
    },
})