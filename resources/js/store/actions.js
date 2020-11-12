import $ from "jquery";
import "bootstrap";

import { slickShowArrow } from './slick/slick'
import { closeModals, previewImage } from './events/events'
import { setBannerProgramacion } from './methods'

function getBannerProgramacion(res) {
    let slider = "";
    let counter = 1;

    while (true) {
        try {
            if (res["image_slider_" + counter]) {
                slider += `
            <div class="container-banner">
                <img class="banner bor responsi-img img_banner_${counter}" src="${res["image_slider_" + counter]}" alt="" />
                <input class="d-none previewImage" id="img_banner_${counter}" type="file" accept="image/*" index="${counter}"/>
                <div class="container-camera">
                    <label for="img_banner_${counter}" class="cursor-pointer">
                        <p class="text-center a-text-bold-warm text-plus mb-0">
                            <img class="camera_${counter}" src="./images/basic-icons/camara.svg" /><span>1920px X 657px</span>
                        </p>
                    </label>
                </div>
            </div>`
                counter++;
            } else {
                break;
            }
        } catch (error) {
            break;
        }
    }
    $(".slick-show").html(slider);

    slickShowArrow()
    
    previewImage()
    closeModals()
    setBannerProgramacion()

    $('#show-banner').modal('show');

    $(".loader-view-container").remove();
}
export { getBannerProgramacion }