import $ from "jquery";
import "bootstrap";

import { getProgramacion, getSynopsis, getCanalClaro, getModalProgramacion, getLastDateCalendar } from './store/getters'
import { getBannerSinopsis, } from './store/actions'
import { loadRoll, } from './store/events/events'

import { getChapterInfo } from "./services/landing.js";

const URLBASE = "http://www.claronetworks.openofficedospuntocero.info/v1.2/";
const LOADER = `<div class="loader-view-container" id="loader1"><img src="./images/loader.gif" class="loader" alt=""></div>`;

// (function () { showlanding('claro-canal-edi.php'); mvh() })();
// (function () { sinopsis(); })();

function mvh() {

    $(".mvhImg").load("imports #mvh-edit", function () { });
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

    getLastDateCalendar()
}

function programacion(landing) {
    let iframeProgramacion = {
        remote: URLBASE + landing,
        container: document.getElementById("iframe-canal-claro"),
        onMessage: function (message, origin) {
            let json = JSON.parse(message);
            if (typeof json == "object") {
                console.log(json.type);
                switch (json.type) {
                    case "slider-pagination":
                        $("body").append(LOADER);
                        getProgramacion('banner')
                        break;
                    case "menu-logos":
                        $("body").append(LOADER);
                        getProgramacion('logos')
                        break;
                    case "program":
                        $("body").append(LOADER);
                        getChapterInfo(json.chapterId);
                        break;
                }
            }
            this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
            this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };
    new easyXDM.Socket(iframeProgramacion);
}

function iframePrev(landing) {
    let iframePrev = {
        remote: URLBASE + landing,
        container: document.getElementById("iframe-canal-claro"),
        onMessage: function (message, origin) {
            console.log(message)
            this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
            this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };
    new easyXDM.Socket(iframePrev);
}

function sinopsisPrev(obj) {
    let iframePrev = {
        remote: `${URLBASE}sinopsis-prev.php`,
        container: document.getElementById("sinopsis-iframe"),
        onMessage: function (message, origin) {
            $('#modalSinopsis').modal('show')
            loadRoll()
            this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
            this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };
    let socket = new easyXDM.Socket(iframePrev);
    socket.postMessage(obj);
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

function showlanding(landing) {
    let iframeLanding = {
        remote: URLBASE + landing,
        container: document.getElementById("iframe-canal-claro"),
        onMessage: function (message, origin) {
            let json = JSON.parse(message);
            if (typeof json == "object") {
                switch (json.type) {
                    case "slider-pagination":
                        $("body").append(LOADER);
                        getCanalClaro('banner');
                        break;
                    case "claro-header":
                        $("body").append(LOADER);
                        getCanalClaro('header');
                        break;
                    case "claro-programacion":
                        $("body").append(LOADER);
                        getModalProgramacion();
                        break;
                    case "claro-title":
                        $("body").append(LOADER);
                        getCanalClaro('title-1');
                        break;
                    case "claro-promo":
                        $("body").append(LOADER);
                        getCanalClaro('promo');
                        break;
                    case "claro-carrusel-title":
                        $("body").append(LOADER);
                        getCanalClaro('title-2');
                        break;
                    case "claro-carrusel1":
                        break;
                    case "claro-carrusel-title2":
                        $("body").append(LOADER);
                        getCanalClaro('title-3');
                        break;
                    case "claro-carrusel2":
                        break;
                }
            }
            this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
            this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };
    new easyXDM.Socket(iframeLanding);
}

function home(landing) {
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
    sinopsisPrev,
    iframePrev,
    clearIframe,
    showlanding,
    home
}