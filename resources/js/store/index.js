import Vue from 'vue';
import Vuex from 'vuex';
import { filterDates } from "../services/generalSchedule";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        landing: 'Canal Claro',
    },
    mutations: {
        updateLanding(state, data) {
            state.landing = data.l1
        },
        filterDates(state, data) {
            filterDates(data.dataInit, data.dataEnd, data.landing);
        },
    }
})