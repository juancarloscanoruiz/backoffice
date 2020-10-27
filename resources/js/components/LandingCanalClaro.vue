<template>
<div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="navbar-progra-content navbar-prev-canal-claro mb-5 mt-5" id="navbar-prev-canal-claro"></div>
            </div>
        </div>
    </div>
    <banner></banner>
</div>
</template>

<script>
import store from '../store'
import banner from './BannerModal'

import {
    mvh
} from '../app'

export default {
    mounted() {
        mvh();
        store.commit('getLandingCanalClaro');
    },
    components: {
        banner
    }
};
</script>
