<template>
<div>
    <calendario></calendario>
    <div v-if="this.$store.state.viewLandingCanalClaro">
        <canalclaro></canalclaro>
    </div>
</div>
</template>

<script>
import {
    mvh
} from '../app'
import calendario from './modals/Calendario'
import canalclaro from './landings/CanalClaro'
export default {
    components: {
        calendario,
        canalclaro
    }
}
</script>
