import $ from "jquery";
import LandingController from "../controllers/landing";
let landingController = new LandingController();

export default class LandingView {



    renderHomeHeaderConcertChannel() {
        let data = landingController.getContentHome();
        data.then(data => {
            if (data.code == 200) {
                //Add a class to the button
                $("#dinamic_btn").addClass('btn-pink');
                //set the width of the image
                $("#img-logo-home").addClass('img-logo-home-concert');
                //Set the width of the container
                $("#dinamic_width").addClass('modal-img-home-concert');
                $('#inp_canales_subtitulo').val(data.data.block_4_subtitle)
                $('#inp_url').val(data.data.block_4_icon_channel_url)
                //Change the logo
                $("#img-logo-home").attr('src', data.data.block_4_icon_channel);
                //Modal
                $("#modal-logo-home").modal("show");
                console.log(data);
            }
        })
    }
}
