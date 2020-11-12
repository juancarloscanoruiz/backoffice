import $ from "jquery";

import { getBanner } from './store/getters'

const URLBASE = "http://www.claronetworks.openofficedospuntocero.info/v1.2/";
const LOADER = `<div class="loader-view-container" id="loader1"><img src="./images/loader.gif" class="loader" alt=""></div>`;

(function () { mvh() })();

function mvh() {
    programacion()
}

function programacion() {
    let iframeProgramacion = {
        remote: `${URLBASE}programacion-edi.php`,
        container: document.getElementById("iframe-programacion"),
        onMessage: function (message, origin) {
            let json = JSON.parse(message);
            $(".loader-view-container").remove();
            if (typeof json == "object") {
                switch (json.type) {
                    case "slider-pagination":
                        $("body").append(LOADER);
                        getBanner()
                        break;
                }
            }
            this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
            this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    };
    new easyXDM.Socket(iframeProgramacion);
}
export {
    programacion
}