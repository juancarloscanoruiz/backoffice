<template>
<div>
    <div id="modal-vertical-carrusel" class="fade modal modal-edit-program-carrusel" style="overflow: auto;">
        <div class="modal-dialog-centered modal-dialog max-width-modal-xl">
            <div class="modal-content modal-carrusel-home">
                <!-- TEXTO -->
                <p class="text-normal d-flex text-center a-text-black-brown-two">CARGAR IMÁGENES EN FORMATO JPG</p>
                <h2 class="h2 text-center a-text-black-brown-two pt-2 text-uppercase ">HOME - <span class="changelanding text-uppercase">{{this.landing}}</span> - CARRUSEL PROMO</h2>
                <hr class="hr">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 mx-auto">
                            <div class="row">
                                <div class="col-12 p-0">
                                    <!-- DOCTS -->
                                    <div class="float-right">
                                        <div class="d-flex">
                                            <div class="position-relative slaider-docts slaider-home-dots carrusel1-slider-dots1 my-3"></div>
                                            <!-- <img src="{{ asset('images/add-icon.svg') }}" class="add-programming-image mb-3 cursor-pointer"> -->
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 p-0 mb-5">
                                    <!--Estado y alertas del programa-->
                                    <section class="d-flex justify-content-between">
                                        <div class="col-5">
                                            <h3 class="h3 a-text-semibold-warmgrey text-uppercase mb-4">Estado</h3>
                                            <div class="state-container py-2 d-flex align-items-center justify-content-center">
                                                <img src="/images/basic-icons/pencil-edit-teal.svg" alt="">
                                                <p class="mb-0 ml-3 a-text-bold-teal">En edición</p>
                                            </div>
                                        </div>
                                        <div class="col-5">
                                            <h3 class="h3 a-text-semibold-warmgrey text-uppercase mb-4">Alerta</h3>
                                            <div class="py-2 alert-container d-flex align-items-center justify-content-center">
                                                <img src="/images/basic-icons/warning-orange-icon.svg" alt="">
                                                <p class="mb-0 ml-3 a-text-bold-orange">Proporcionar información</p>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                                <div v-for="data in this.chapters" v-bind:key="data.chapter.id">
                                    <img :src="data.chapter.program.thumbnail_list_vertical" alt="" width="100px" height="100px">
                                    <p>{{data.chapter.program.thumbnail_list_vertical}}</p>
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
    data: function () {
        return {
            landing: 'Canal Claro'
        }
    },
    mounted() {
        store.commit('getVerticalCarrusel', this.landing)
    },
    computed: {
        chapters() {
            return store.state.chapters
        }
    }
};
</script>
