//JQUERY
import $ from "jquery";
import ProgramController from "../controllers/program.js";
let programController = new ProgramController();

/**
 * @class Clase para mostrar todo el contenido en relacionado a un programa en las diferentes vistas
 * y esuchcar eventos
 */
export default class ProgramView {
    /**
     * Método para mandar la información de sinopsis de un programa a
     * al socket y abrir modal
     *
     * @param {*} id  Id del programa a obtener la sinopsis
     * @param {*} socket Socket del landing al que queremos mandar la información de la sinopsis
     */
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

    /**
     * Método para renderizar en el modal los detalles de la sinopsis de un programa
     *
     * @param {*} id Id del capítulo del que queremos obtener la sinopsis
     */
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

    /**
     * Método para renderizar la sinopsis en modal para editar título y sinopsis
     *
     * @param {*} id Id del programa del que queremos obtener la sinopsis
     */

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


    /**
     * Este método permite editar los datos de un programa en la sinopsis, como duración, año, rating
     * y número de temporadas
     *
     * @param {Object} socket Socket al que queremos mandar la información de toda la sinopsis de un programa
     */
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

    /**
     * Método para editar el título y la sinopsis de un programa en modal
     *
     * @param {Object} socket Socket al que queremos mandar la información de toda la sinopsis de un programa
     */
    editAttributesSynopsis(socket) {
        $("#edit-synopsis-modal-button").click(function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                <img src="./images/loader.gif" class="loader"/>
            </div>`
            );
            let chapterId = $(this).attr("chapter_id");
            let key = $(this).attr("key");
            let title = $('.synopsis-modal-title').val();
            let value = $(".edit-text-synopsis").val();
            let response = programController.editAttributesSynopsis(chapterId, key, value);
            //editamos primero la sinopsis
            response.then(data => {
                    if (data.code == 200) {
                        //Si todo fue correcto, editamos el título
                        return programController.editAttributesSynopsis(chapterId, "title", title);
                    }
                })
                .then(data => {
                    if (data.code == 200) {
                        //Si todo fue correcto obtenemos la sinopsis de nuevo
                        return programController.getSynopsis(chapterId);
                    }
                })
                .then(data => {
                    if (data.code === 200) {
                        //Mandamos la sinopsis a través del socket
                        let dataStringified = JSON.stringify(data);
                        socket.postMessage(dataStringified);
                    }
                    $(".modal-edit-synopsis").modal("hide");
                    $(".loader-view-container").remove()
                }).catch(err => {
                    console.log(err);
                })
        });
    }
}
