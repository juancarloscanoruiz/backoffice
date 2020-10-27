<template>
<div>
    <button type="button" class="btn btn-primary" v-on:click="this.modalVerticalCarrusel">
        Launch demo modal
    </button>
    <verticalCarrusel></verticalCarrusel>
</div>
</template>

<script>
import store from '../store'
import verticalCarrusel from './VerticalCarrusel'
import {
    filtro
} from '../filters/index'

export default {
    data: function () {
        return {
            landing: 'Canal Claro',
            VerticalCarrusel: 'modal-vertical-carrusel',
        }
    },
    mounted() {
        store.commit('getVerticalCarrusel', this.landing)
    },
    components: {
        verticalCarrusel
    },
    methods: {
        modalVerticalCarrusel: function () {
            store.commit('slickShow')
            store.commit('modalShow', this.VerticalCarrusel)
            filtro()
        },
    }
};
</script>
