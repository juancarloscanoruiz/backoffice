require('./bootstrap');

window.Vue = require('vue');

import store from './store'

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('sinopsis-component', require('./components/landings/Sinopsis.vue').default);

// Vue.component('menu-component', require('./components/menu/Menu.vue').default);
// Vue.component('btn-component', require('./components/mvh/Buttons.vue').default);
// // Vue.component('calendar-slider-component', require('./components/mvh/CalendarSlider.vue').default);

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// Vue.component('claro-networks-component', require('./components/ClaroNetworks.vue').default);
// Vue.component('canal-claro-component', require('./components/landings/CanalClaro.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

export default new Vue({
    el: '#app',
    store,
});

(function () { mvh() })();

function mvh() {
    console.log('mvh')

    $(".list-channel-item").on('click', function () {
        $('.list-channel-item').removeClass("list-channel-active");
        $(this).addClass("list-channel-active");
    })

    $(".synopsis-calendar-item").on('click', function () {
        $(".synopsis-calendar-item").removeClass("programming-item-active");
        $(this).addClass("programming-item-active");
        store.commit('getSinopsysProgramsLanding', $(this).attr("date"))
    })
}
export { mvh }