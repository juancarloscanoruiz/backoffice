//JQUERY
import $ from "jquery";
import ProgramController from "../controllers/program.js";
let programController = new ProgramController();

export default class ProgramView {
    renderSynopsis(id, socket) {
        let response = programController.getSynopsis(id);
        response.then(data => {
            if (data.code == 200) {
                let dataStringified = JSON.stringify(data);
                socket.postMessage(dataStringified);
            }
            $(".loader-view-container").remove();
        });
    }

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
            $("#duration-synopsis").val(data.data.duration);
            $("#year-synopsis").val(data.data.year);
            $("#seasons-synopsis").val(data.data.seasons);
            $("#rating-synopsis").val(data.data.rating);
            $("#details-synopsis-modal-button").attr(
                "chapter_id",
                data.data.chapter_id
            );
            //Show the modal
            $(".modal-info-synopsis").modal("show");
            //Remove the loader
            $(".loader-view-container").remove();
        });
    }

    renderDescriptionSynopsis(id) {
        $("body").append(
            `<div class="loader-view-container pointer-none">
                <img src="./images/loader.gif" class="loader"/>
            </div>`
        );
        let response = programController.getSynopsis(id);
        response.then(data => {
            if (data.code == 200) {

                let editSynopsisButton = $(
                    "#edit-synopsis-modal-button"
                );

                $(".edit-text-synopsis").val(
                    data.data.sinopsis
                );
                editSynopsisButton.attr(
                    "chapter_id",
                    data.data.chapter_id
                );
                editSynopsisButton.attr("key", "synopsis");
                $(".synopsis-modal-title").val(
                    data.data.subtitle
                );
                //Mostrar el modal
                $(".modal-edit-synopsis").modal("show");
                //Quitar loader
                $(".loader-view-container").remove();
            }
        });
    }

    editDetailsSynopsis(socket) {
        $("#details-synopsis-modal-button").click(function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
            let chapter_id = $(this).attr("chapter_id");
            //let duration = $('#duration-synopsis').val()
            let duration = "";
            let year = $("#year-synopsis").val();
            let seasons = $("#seasons-synopsis").val();
            let rating = $("#rating-synopsis").val();
            let details = {
                chapter_id,
                duration,
                year,
                seasons,
                rating
            };
            let response = programController.editDetailsSynopsis(details);
            response.then(data => {
                if (data.code == 200) {
                    return programController.getSynopsis(chapter_id);
                    /*                     let data = programController.getSynopsis(chapter_id);
                                        socket.postMessage(data);
                                        $(".loader-view-container").remove(); */
                }
            }).then(data => {
                if (data.code == 200) {
                    let dataStringified = JSON.stringify(data);
                    socket.postMessage(dataStringified);
                    $(".loader-view-container").remove()
                }
            })
        });
    }
}
