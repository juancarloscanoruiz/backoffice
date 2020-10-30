<template>
<div class="d-flex float-right mr-5 ">
    <button class="btn-grilla a-btn-basic-small text-uppercase a-text-MBlack  text-plus mr-3 gril-claro" id="btn-grilla"><span>Grilla</span></button>
    <button :class="'text-uppercase btn-landing a-btn-basic-small a-text-semi-brown-two text-plus lan_claro'" id="btn-landing" v-on:click="test()"><span>Landing</span></button>
</div>
</template>

<script>
import store from '../../store'
export default {
    methods: {
        test: function () {
            store.state.viewLandingCanalClaro = true
        }
    }
}
</script>
