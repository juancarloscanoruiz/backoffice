//JQUERY
import $ from "jquery";
import ProgramController from "../controllers/program.js";
let programController = new ProgramController();

export default class ProgramView {
    renderDetailsSynopsis(id) {
        $("body").append(
            `<div class="loader-view-container pointer-none">
                <img src="./images/loader.gif" class="loader"/>
            </div>`
        );
        let data = programController.getSynopsis(id);
        data.then(data => {
            console.log(data);
            //Put the data in all inputs
            $('#duration-synopsis').val(data.data.duration)
            $('#year-synopsis').val(data.data.year)
            $('#seasons-synopsis').val(data.data.seasons)
            $('#rating-synopsis').val(data.data.rating)
            $('#details-synopsis-modal-button').attr("chapter_id", data.data.chapter_id)
            //Show the modal
            $(".modal-info-synopsis").modal("show");
            //Remove the loader
            $(".loader-view-container").remove();
        })
    }

    editDetailsSynopsis(socket) {
        $('#details-synopsis-modal-button').click(function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
            let chapter_id = $(this).attr("chapter_id");
            //let duration = $('#duration-synopsis').val()
            let duration = "";
            let year = $('#year-synopsis').val()
            let seasons = $('#seasons-synopsis').val()
            let rating = $('#rating-synopsis').val()
            let details = {
                chapter_id,
                duration,
                year,
                seasons,
                rating
            }
            let response = programController.editDetailsSynopsis(details)
            response.then(data => {

                if (data.code == 200) {
                    let data = programController.getSynopsis(chapter_id);
                    socket.postMessage(data)
                    $(".loader-view-container").remove();
                }
            })
        })
        
    }

}
