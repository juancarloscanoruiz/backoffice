import $ from "jquery";
import "bootstrap";

import { getChapterInfo } from "./services/landing.js";
import { getProgramacion } from './store/getters'
import { addImagesModalIcons } from "./services/generalSchedule.js";

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



export { claroCinemaProgramacion }