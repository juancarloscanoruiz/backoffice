import $ from "jquery";
import "bootstrap";

import { getProgramacion, getSynopsis } from './store/getters'
import { getBannerSinopsis, } from './store/actions'

const URLBASE = "http://www.claronetworks.openofficedospuntocero.info/v1.2/";
const LOADER = `<div class="loader-view-container" id="loader1"><img src="./images/loader.gif" class="loader" alt=""></div>`;

// (function () { sinopsis() })();x

function mvh() {
    $('.navbar-prev-programacion').on('click', function () {
        $('#iframe-canal-claro').html('');
        $('.monthSliderCalendar').html('');
        $('.slick-show').html('');
        $('.show-sinopsis-table').html('')
        programacion('programacion-edi.php')
    })

    $('.navbar-sinopsis').on('click', function () {
        $('#iframe-canal-claro').html('');
        sinopsis()
    })
}

function programacion(landing) {
    $("body").append(LOADER);
    let iframeProgramacion = {
        remote: URLBASE + landing,
        container: document.getElementById("iframe-canal-claro"),
        onMessage: function (message, origin) {
            let json = JSON.parse(message);
            $(".loader-view-container").remove();
            if (typeof json == "object") {
                console.log(json.type)
                switch (json.type) {
                    case "slider-pagination":
                        $("body").append(LOADER);
                        getProgramacion('banner')
                        break;
                    case "menu-logos":
                        $("body").append(LOADER);
                        getProgramacion('logos')
                        break;
                }
            }
            this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
            this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
            $(".loader-view-container").remove();
        }
    };
    new easyXDM.Socket(iframeProgramacion);
}

function sinopsis() {
    $("body").append(LOADER);
    getSynopsis()
}

function showModalSinopsis(obj) {
    let LandingSinopsis = {
        remote: `${URLBASE}sinopsis-edi.php`,
        container: document.getElementById("sinopsis-iframe"),
        onMessage: function (message, origin) {
            $('#modalSinopsis').modal('show')
            let json = JSON.parse(message);
            if (typeof json == "object") {
                switch (json.type) {
                    case 'slider-pagination':
                        $("body").append(LOADER);
                        getBannerSinopsis(JSON.parse(obj))
                        break
                }
            }
            this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
            this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };
    let socket = new easyXDM.Socket(LandingSinopsis);
    socket.postMessage(obj);
}


export {
    mvh,
    programacion,
    showModalSinopsis
}