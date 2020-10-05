//JQUERY
import $ from "jquery";
import ProgramController from "../controllers/program.js";
let programController = new ProgramController();

import { previewPage } from "../preview/prev.js";

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
     * @param {Object} socket Socket del landing al que queremos mandar la información de la sinopsis
     */
    renderSynopsis(id, socket) {
        let response = programController.getSynopsis(id);
        response.then(data => {
            if (data.code == 200) {
                $('#prev-synopsis').attr("chapter_id", data.data.chapter_id)
                $('#edit-synopsis').attr("chapter_id", data.data.chapter_id)
                let dataStringified = JSON.stringify(data);
                socket.postMessage(dataStringified);
                $(".modal-landing-sinopsis").modal("show");
            }
            $(".loader-view-container").remove();
        });
    }


    renderPrevSynopsis() {

        const baseURL = "http://www.claronetworks.openofficedospuntocero.info/v1.2/";
        let options = {
            remote: `${baseURL}sinopsis-prev.php`,
            //remote: `http://localhost:8888/MaquetaCNetworks/sinopsis-prev.php`,
            container: document.getElementById("sinopsis-container"),
            onMessage: function (message, origin) {
                this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                    "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
            }
        }
        $('#prev-synopsis').click(function () {

            $('#sinopsis-container iframe').remove();
            let response = programController.getSynopsis($(this).attr("chapter_id"));
            var socketSynopsis = new easyXDM.Socket(options);
            response.then(data => {
                if (data.code == 200) {
                    let dataStringified = JSON.stringify(data);
                    socketSynopsis.postMessage(dataStringified);
                }
                $("#device-size").load("imports #device-size-prev", function () {
                    $(".a-prev-image").click(function () {
                        previewPage($(this));
                    });
                });
            })
        })
    }

    /**
     *
     * @param {Object} options configuraciones de easyXDM para poder crear el socket
     */
    renderEditSynopsis(socketSynopsis, options) {
        let that = this;
        $('#edit-synopsis').click(function () {
            let id = $(this).attr("chapter_id");
            let response = programController.getSynopsis(id);

            $('#sinopsis-container iframe').remove();

            socketSynopsis = new easyXDM.Socket(options);
            response.then(data => {
                if (data.code == 200) {
                    let dataStringified = JSON.stringify(data);
                    socketSynopsis.postMessage(dataStringified);
                    that.editDetailsSynopsis(socketSynopsis)
                    that.editAttributesSynopsis(socketSynopsis)
                    that.editImagesBanner(socketSynopsis);
                    that.editImageSynopsis(socketSynopsis);
                    that.editImagesBanner(socketSynopsis);
                }
                $("#device-size").load("imports #device-size-edit");
            })
        })
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
        })

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

            let change = $('.program-chpater-synopsis:checked').val();
            let synopsis = $(".edit-text-synopsis").val();
            let title = $('.synopsis-modal-title').val();

            let response = programController.editAttributesSynopsis(chapterId, change, synopsis, title);
            //editamos primero la sinopsis
            response.then(data => {
                if (data.code == 200) {
                    return programController.getSynopsis(chapterId);
                }

            }).then(data => {
                if (data.code == 200) {
                    let dataStringified = JSON.stringify(data);
                    socket.postMessage(dataStringified);

                }
                $(".modal-edit-synopsis").modal("hide");
                $(".loader-view-container").remove()
            })
                .catch(err => {
                    console.log(err);
                })
        });
    }

    editImagesSynopsis(socket) {
        $("#images-synopsis-modal-button").click(function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
            //Obtenemos las imágenes
            let imageSynopsis1 = document.getElementById("image-synopsis-1")
                .files[0];
            let imageSynopsis2 = document.getElementById("image-synopsis-2")
                .files[0];
            let imageSynopsis3 = document.getElementById("image-synopsis-3")
                .files[0];
            //Obtenemos el id del landing para saber en qué carpeta guardar la imagen
            let landingId = $(this).attr("landing_id");
            //Obtenemos el id del capítulo
            let chapterId = $(this).attr("chapter_id");
            let data = new FormData();
            data.append("image-synopsis-1", imageSynopsis1);
            data.append("image-synopsis-2", imageSynopsis2);
            data.append("image-synopsis-3", imageSynopsis3);
            data.append("landing_id", landingId);
            data.append("chapter_id", chapterId);

            let imagesResponse = programController.updateImagesSynopsis(data);
            imagesResponse.then(data => {
                if (data.code == 200) {
                    return programController.getSynopsis(chapterId);
                }
            }).then(data => {
                if (data.code == 200) {
                    let dataStringified = JSON.stringify(data);
                    socket.postMessage(dataStringified);
                }
                $(".modal-synopsis-images-container").modal("hide");
                $(".loader-view-container").remove()
            })
            //update();
        });
    }

    //Editar imagen principal en landing de sinopsis
    editImageSynopsis(socket) {
        $("#upload-image-synopsis").click(function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
            //Obtenemos el archivo;
            let imageSynopsis = document.getElementById("image-synopsis").files[0];
            let landingId = $(this).attr("landing_id");
            let chapterId = $(this).attr("chapter_id");
            let data = new FormData();
            data.append("image-synopsis", imageSynopsis);
            data.append("landing_id", landingId);
            data.append("chapter_id", chapterId);
            let imageResponse = programController.updateImagesSynopsis(data);
            imageResponse.then(data => {
                if (data.code == 200) {
                    return programController.getSynopsis(chapterId);
                }

            }).then(data => {
                if (data.code == 200) {
                    let dataStringified = JSON.stringify(data);
                    socket.postMessage(dataStringified);
                }
                $(".loader-view-container").remove();
                $(".modal-image-synopsis").modal("hide");

            })

        });
    }

    editImagesBanner(socket) {
        //Editar las imágenes del banner
        $("#banner-sinopsis-modal-button").click(function () {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                <img src="./images/loader.gif" class="loader"/>
            </div>`
            );
            let imageSynopsis1 = document.getElementById("image_banner_synopsis_1")
                .files[0];
            let imageSynopsis2 = document.getElementById("image_banner_synopsis_2")
                .files[0];
            let imageSynopsis3 = document.getElementById("image_banner_synopsis_3")
                .files[0];
            let landingId = $(this).attr("landing_id");
            let chapterId = $(this).attr("chapter_id");
            let data = new FormData();
            data.append("image_background_1", imageSynopsis1);
            data.append("image_background_2", imageSynopsis2);
            data.append("image_background_3", imageSynopsis3);
            data.append("landing_id", landingId);
            data.append("chapter_id", chapterId);
            let imageBannerResponse = programController.updateImagesSynopsis(data);
            imageBannerResponse.then(data => {
                if (data.code == 200) {
                    return programController.getSynopsis(chapterId);
                }
            }).then(data => {
                if (data.code === 200) {
                    let dataStringified = JSON.stringify(data);
                    socket.postMessage(dataStringified);
                }
                $(".modal-programming-sinopsis").modal("hide");
                $(".loader-view-container").remove();
            })

        });
    }
}
