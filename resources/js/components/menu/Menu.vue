<template>
<div>
    <nav class="d-flex col-xl-12 navbar-expand-sm justify-content-center position-nav pt-5">
        <ul class="d-flex justify-content-center navbar-nav">
            <li class="nav-item br-r ">
                <button class="btn-menu-select a-btn-basic-medium text-normal menu bn-nav text-uppercase" id="grilla-canal-claro-button" v-on:click="updateLanding('Canal Claro', 'canal_claro', 'Claro Canal')">Canal Claro</button>
            </li>
            <li class="nav-item br-r">
                <button id="grilla-concert-channel-button" class="btn-menu-all a-btn-basic-medium a-text-bold-brown-two text-plus bn-nav text-uppercase" v-on:click="updateLanding('Concert Channel', 'concert_channel', '')">Concert Channel</button>
            </li>
            <li class="nav-item br-r">
                <button id="grilla-claro-cinema-button" class="btn-menu-all  a-btn-basic-medium a-text-bold-brown-two text-plus bn-nav text-uppercase" v-on:click="updateLanding('Claro Cinema', 'claro_cinema', '')">Claro Cinema</button>
            </li>
            <li class="nav-item br-r">
                <button class="btn-menu-inac a-btn-basic-medium text-plus a-text-bold-light text-uppercase">Nuestra Visión*</button>
            </li>
            <li class="nav-item br-r ">
                <button class="btn-menu-inac  a-btn-basic-medium  text-plus a-text-bold-light text-uppercase">Claro Sports*</button>
            </li>
            <li class="nav-item ">
                <button id="grilla-home-button" class="btn-menu-all a-btn-basic-medium  a-text-bold-brown-two text-plus bn-nav text-uppercase btn-home-iframe"> Home</button>
            </li>
        </ul>
    </nav>
</div>
</template>

<script>
export default {
    methods: {
        updateLanding: function (l1, l2, l3) {
            this.$store.commit('updateLanding', {
                l1,
                l2,
                l3
            })
        }
    }
}
</script>
