import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let date = new Date()
let firstDay = (date.getFullYear() + '-' + (date.getMonth() + 1) + '-0' + date.getDate())

export default new Vuex.Store({
    state: {
        last_edition: '',
        edited_for: '',
        user_rol: '',
        sinopsysPrograms: '',
        sinopsys: '',
    },
    mutations: {
        getGrilla(state) {
            axios.post('general-program/getGrilla', {
                firstDay
            }).then(res => {
                state.last_edition = res.data.data.grilla[0].last_edition;
                state.edited_for = res.data.data.grilla[0].edited_for;
                if (res.data.data.grilla[0].user_rol == 'root') {
                    state.user_rol = 'Sùper Usuario';
                }
            });
        },
        getSinopsysPrograms(state) {
            axios.post('landing/getSynopsisTable', {
                firstDay
            }).then(res => {
                state.sinopsys = res.data.data;
                state.sinopsysPrograms = state.sinopsys[0].programing[0].programs
            });
        },
        getSinopsysProgramsLanding(state, firstDay) {
            axios.post('landing/getSynopsisTable', {
                firstDay
            }).then(res => {
                state.sinopsys = res.data.data;
                state.sinopsysPrograms = state.sinopsys[0].programing[0].programs
            });
        },
        sinopsisRoll(state, i) {
            state.sinopsysPrograms = state.sinopsys[i].programing[0].programs
        }
    },
    actions: {},
    methods: {},
    getters: {}
})