import $ from "jquery";
import "bootstrap";

import { getChapterInfo, getProgrammingLanding, getCarruselHome } from "./services/landing.js";
import { addImagesModalIcons } from "./services/generalSchedule.js";
import LandingView from "./views/landing";
let landingView = new LandingView();

import { getProgramacion, getHome } from './store/getters'

const URLBASE = "http://www.claronetworks.openofficedospuntocero.info/v1.2/";
const LOADER = `<div class="loader-view-container" id="loader1"><img src="./images/loader.gif" class="loader" alt=""></div>`;

// PROGRAMACION
function claroCinemaProgramacion() {
    let iframeProgramacion = {
        remote: URLBASE + 'programacion-edi-cinema.php',
        container: document.getElementById("navbar-prev-programacion-cinema"),
        onMessage: function (message, origin) {
            let json = JSON.parse(message);
            if (typeof json == "object") {
                switch (json.type) {
                    case "slider-pagination":
                        $("body").append(LOADER);
                        getProgramacion(1, id_slide);
                        break;
                    case "menu-logos":
                        $("body").append(LOADER);
                        setTimeout(function () {
                            addImagesModalIcons();
                            $(".modal-edit-icons").modal("show");
                            $("#loader1").remove();
                        }, 3000);
                        break;
                    case "program":
                        $('.edit-landing-modal-button').attr('landing', 'cinema')
                        getChapterInfo(json.chapterId, 'thumbnail-header-cinema');
                        break;
                }
            }
            this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
            this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };
    new easyXDM.Socket(iframeProgramacion);
}
// PROGRAMACION

// HOME
function canalClaroHome() {
    let home = {
        remote: URLBASE + 'home-edi-claro.php',
        container: document.getElementById("navbar-prev-home"),
        onMessage: function (message, origin) {
            let json = JSON.parse(message);
            if (typeof json == "object") {
                switch (json.type) {
                    case "slider-pagination":
                        $("body").append(LOADER);
                        getHome()
                        break;
                    case "home-claro-carrousel-main":
                        let date = new Date();
                        let day = ("0" + date.getUTCDate()).slice(-2);
                        let month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
                        let year = date.getUTCFullYear();
                        let currentDate = `${year}-${month}-${day}`;
                        getProgrammingLanding(currentDate, "canal-claro");
                        break;
                    case "claro-home-header":
                        landingView.renderHomeHeaderCanalClaro();
                        break;
                    case "claro-home-slider":
                        let landing = "Canal Claro";
                        getCarruselHome(landing);
                        break;
                    default:
                        break;
                }
            }
            this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
            this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };
    new easyXDM.Socket(home);
}
// HOME

export { claroCinemaProgramacion, canalClaroHome }