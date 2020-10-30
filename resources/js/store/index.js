import Vue from 'vue';
import Vuex from 'vuex';
import { filterDates } from "../services/generalSchedule";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        viewLandingCanalClaro: false,
        landing: 'Canal Claro',
        land: 'canal_claro'
    },
    mutations: {
        updateLanding(state, data) {
            state.landing = data.l1
            state.land = data.l2
        },
        filterDates(state, data) {
            filterDates(data.dataInit, data.dataEnd, data.landing);
        },
    }
})