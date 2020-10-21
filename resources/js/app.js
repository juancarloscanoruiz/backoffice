require('./bootstrap');

import store from './store'

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('landing-canal-claro-component', require('./components/LandingCanalClaro.vue').default);
Vue.component('vertical-carrusel-component', require('./components/VerticalCarrusel.vue').default);
Vue.component('doct-component', require('./components/doct.vue').default);

Vue.component('calendario-component', require('./components/Calendario.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

export default new Vue({
    el: '#app',
});