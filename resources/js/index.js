import $ from "jquery";
import "bootstrap";

import { getProgramacion, getSynopsis, getCanalClaro } from './store/getters'
import { getBannerSinopsis, } from './store/actions'
import { loadRoll, } from './store/events/events'

const URLBASE = "http://www.claronetworks.openofficedospuntocero.info/v1.2/";
const LOADER = `<div class="loader-view-container" id="loader1"><img src="./images/loader.gif" class="loader" alt=""></div>`;

// (function () { sinopsis() })();

function mvh() {

    $("#mvhImg").load("imports #mvh-edit", function () { });
    loadRoll()

    $('.navbar-programacion').on('click', function () {
        clearIframe()
        programacion('programacion-edi.php')
        $('#editar').attr('mvh', '0')
        $('#previsualiza').attr('mvh', '0')
    })

    $('.navbar-sinopsis').on('click', function () {
        clearIframe()
        sinopsis()
        $('#editar').attr('mvh', '1')
        $('#previsualiza').attr('mvh', '1')
    })

    $('.navbar-canal-claro').on('click', function () {
        clearIframe()
        // showlanding('concert-channel-edi.php')
        showlanding('claro-canal-edi.php')
        $('#editar').attr('mvh', '2')
        $('#previsualiza').attr('mvh', '2')
    })

    $('.navbar-home').on('click', function () {
        clearIframe()
        home('home-edi-claro.php')
        $('#editar').attr('mvh', '3')
        $('#previsualiza').attr('mvh', '3')
    })
}

function programacion(landing) {
    $("body").append(LOADER);
    let iframeProgramacion = {
        remote: URLBASE + landing,
        container: document.getElementById("iframe-canal-claro"),
        onMessage: function (message, origin) {
            let json = JSON.parse(message);
            if (typeof json == "object") {
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

function iframePrev(landing) {
    $("body").append(LOADER);
    let iframePrev = {
        remote: URLBASE + landing,
        container: document.getElementById("iframe-canal-claro"),
        onMessage: function (message, origin) {
            console.log(message)
            this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
            this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
            $(".loader-view-container").remove();
        }
    };
    new easyXDM.Socket(iframePrev);
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
            $(".loader-view-container").remove();
        }
    };
    let socket = new easyXDM.Socket(LandingSinopsis);
    socket.postMessage(obj);
}

function showlanding(landing) {
    $("body").append(LOADER);
    let iframeLanding = {
        remote: URLBASE + landing,
        container: document.getElementById("iframe-canal-claro"),
        onMessage: function (message, origin) {
            let json = JSON.parse(message);
            if (typeof json == "object") {
                switch (json.type) {
                    case "slider-pagination":
                        $("body").append(LOADER);
                        getCanalClaro();
                        break;
                    case "claro-header":
                        break;
                    case "claro-programacion":
                        break;
                    case "claro-title":
                        break;
                    case "claro-promo":
                        break;
                    case "claro-carrusel-title":
                        break;
                    case "claro-carrusel1":
                        break;
                    case "claro-carrusel-title2":
                        break;
                    case "claro-carrusel2":
                        break;
                }
            }
            this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
            this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
            $(".loader-view-container").remove();
        }
    };
    new easyXDM.Socket(iframeLanding);
}

function home(landing) {
    $("body").append(LOADER);
    let iframeLanding = {
        remote: URLBASE + landing,
        container: document.getElementById("iframe-canal-claro"),
        onMessage: function (message, origin) {
            let json = JSON.parse(message);
            console.log(json)
            if (typeof json == "object") {
                switch (json.type) {
                    case 'slider-pagination':
                        break
                    case 'home-claro-carrousel-main':
                        break
                    case 'claro-home-header':
                        break
                    case 'claro-home-slider':
                        break
                }
            }
            this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
            this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
            $(".loader-view-container").remove();
        }
    };
    new easyXDM.Socket(iframeLanding);
}

function clearIframe() {
    $('#iframe-canal-claro iframe').remove();
    $('#iframe-canal-claro').html('');
    $('.monthSliderCalendar').html('');
    $('.slick-calendario').html('');
    $('.show-sinopsis-table').html('')

    $('.slick-banner').remove();
    $('.slick-dots-banner').html('');
    $('.slick-mvh').html('<div class="slick-banner"></div>');
}

export {
    mvh,
    programacion,
    showModalSinopsis,
    iframePrev,
    clearIframe,
    showlanding
}