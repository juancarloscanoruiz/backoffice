import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        landing: "",
        chapters: []
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
            })
                .then(respuesta => {
                    state.chapters = respuesta.data.data.chapters;
                })
        }
    }
})