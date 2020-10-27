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

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('landing-canal-claro-component', require('./components/LandingCanalClaro.vue').default);
Vue.component('vertical-carrusel-component', require('./components/VerticalCarrusel.vue').default);
Vue.component('doct-component', require('./components/doct.vue').default);
Vue.component('test-component', require('./components/test.vue').default);

Vue.component('calendario-component', require('./components/Calendario.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

export default new Vue({
    el: '#app',
    store,
});

function mvh() {
    const baseURL = "http://www.claronetworks.openofficedospuntocero.info/v1.2/";

    $('.vueCalendar').on('click', function () {
        $('#calendar').modal('show')
    })

    let landingCanalClaro = {
        remote: `${baseURL}claro-canal-edi.php`,
        container: document.getElementById("navbar-prev-canal-claro"),
        onMessage: function (message, origin) {
            let json = JSON.parse(message);
            if (typeof json == "object") {
                switch (json.type) {
                    case "slider-pagination":
                        store.commit('slickShowArrow')
                        $("#modal-banner").modal("show");
                        break;
                    default:
                        break
                }
                /*
                switch (json.type) {
                    case "claro-header":
                        getModalsCanalClaro(json.type);
                        break;
                    case "claro-programacion":
                        $("body").append(LOADER);
                        setTimeout(function () {
                            let date = new Date();
                            let day = ("0" + date.getUTCDate()).slice(-2);
                            let month = ("0" + (date.getUTCMonth() + 1)).slice(
                                -2
                            );
                            let year = date.getUTCFullYear();
                            let currentDate = `${year}-${month}-${day}`;
                            getProgrammingLanding(
                                currentDate,
                                "canal-claro",
                                ""
                            );
                            $("#loader1").remove();
                        }, 3000);
                        break;
                    case "claro-title":
                        getModalsCanalClaro(json.type);
                        break;
                    case "claro-promo":
                        getModalsCanalClaro(json.type);
                        break;
                    case "claro-carrusel1":
                        let id = 1;
                        let landing = "Canal Claro";
                        getPromotionalsProgramsCarousel(
                            id,
                            landing,
                            "thumbnail-header-claro"
                        );

                        break;
                    case "claro-carrusel2":
                        id = 2;
                        landing = "Canal Claro";
                        getPromotionalsProgramsCarousel(
                            id,
                            landing,
                            "thumbnail-header-claro "
                        );
                        break;
                    case "claro-carrusel-title":
                        getModalsCanalClaro(json.type);
                        break;
                    case "claro-carrusel-title2":
                        getModalsCanalClaro(json.type);
                        break;
                    case "btn-redirect-header":
                        getModalsCanalClaro(json.type);
                        break;
                    case "slider-pagination":
                        getModalsCanalClaro("slider-pagination");
                        break;
                }
                */
            }
            this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
            this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };

    let navbarLandingCanalClaro = document.getElementById("navbar-prev-canal-claro");
    if (navbarLandingCanalClaro) {
        $("#navbar-prev-canal-claro iframe").remove();
        new easyXDM.Socket(landingCanalClaro);
    }
}
export { mvh }