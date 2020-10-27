<template>
<div>
    <div id="modal-banner" class="modal" style="overflow: auto;">
        <div class="modal-dialog-centered modal-dialog" style="max-width: 100%;">
            <div class="modal-content">
                <h2 class="h2 text-center a-text-black-brown-two pt-3">BANNER PROGRAMACIÓN - CARRUSEL </h2>
                <hr class="hr col-11">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 mx-auto">
                            <div class="container">
                                <div class="navbar px-0">
                                    <!-- DOCTS -->
                                    <div class="d-flex align-items-center">
                                        <div class="position-relative carrusel1-slider-dots1 slick-dots-mvh"></div>
                                        <img :src="'./images/add-icon.svg'" class="mb-3 cursor-pointer">
                                    </div>
                                    <div class="">
                                        <h3 class="text-uppercase h3 a-text-black-brown-two">Vigencia</h3>
                                    </div>
                                    <div>
                                        <calendario-component></calendario-component>
                                    </div>
                                </div>
                                <div class="slick-show">
                                    <div v-for="(slider, index) in this.sliders" v-bind:key="index" class="container-banner">
                                        <img :class="'responsi-img img_banner_' + index" :src="slider.img" alt="">
                                        <input class="d-none" :id="'img_banner_' + index" type="file" v-on:change="previewImage($event)" accept="image/*" :index="index">
                                        <div class="container-camera ">
                                            <label :for="'img_banner_' + index" class="cursor-pointer">
                                                <p class="text-center a-text-bold-warm text-plus mb-0"><img :class="'camera_' + index" :src="'./images/basic-icons/camara.svg'" /><span>1920px X 657px</span></p>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import store from '../store'
export default {
    computed: {
        sliders() {
            return store.state.slider
        },
        landingCanalClaro() {
            return store.state.landingCanalClaro
        },
    },
    methods: {
        previewImage: function (evn) {
            store.commit('previewImage', evn.target);
        },
    }
}
</script>

<style scoped>
.responsi-img {
    width: 100%;
    height: 100%;
}

.container-camera {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    align-items: center;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container-camera img {
    width: 80px;
    margin: auto auto 5px;
}

.container-camera span {
    background: #fff;
    border-radius: 10px;
    padding: 5px 10px;
    display: inline;
    opacity: 0.8;
}

.container-banner {
    height: 385px;
}
</style>
