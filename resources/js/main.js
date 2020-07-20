//JQUERY
import $ from "jquery";
//BOOTSTRAP
import "bootstrap";
//VENDOR
import Cleave from "cleave.js";
import Litepicker from "litepicker";
import "slick-carousel/slick/slick";
import "bootstrap-select";

import { previewPage } from "./preview/prev.js";
import { showContentNav } from "./nav/nav.js";

//CONFIG
import {
    cleaveConfig,
    scheduleTimeConfig,
    timeWithSeconds,
    year
} from "./config/config.js";

//UI
import {
    showPageUsersBO,
    showPageUsersFront,
    createNavbarProgramacionGeneral,
    showLandingSchedule,
    showlanding,
    showAdminSite,
    showFormCreateUser,
    showUserFront,
    selectRow,
    selectColumn,
    showModalDeleteUserBO,
    deleteUserUI
} from "./UI/UI.js";

//FORM VALIDATIONS
import {
    validateNewPassword,
    validateKeyUpEmail,
    validatePassword,
    validateEmail,
    validateKeyUpPassword,
    ShowHidePassword
} from "./form/form.js";

//SERVICES
import {
    registerUser,
    sendEmailResetPassword,
    getUserToUpdate,
    getUser,
    getUserFrontToUpdate
} from "./services/user.js";

import { editAttributeProgram } from "./services/generalSchedule.js";

$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
    }
});

$(document).ready(function() {
    //selectpicker
    $('.selectpicker').selectpicker({
        // showTick: true,    
        filter:true,
        multipleSeparator:"<br>* ",
             });
    //endselect
    $("#agregar-canal-claro").click(function() {
        let data = $("#data_for_api").val();
        $.ajax({
            type: "POST",
            url: "general-program/newRow",
            data: data,
            success: function(result) {
                //var fila =
                //' <div class="contenedor-fila"><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div></div> ';
                $(".grilla-body").append(result);
                console.log("php responde");
                console.log(result);
            }
        });
    });

    $("#subir-archivos").click(function() {
        let disabled = $("#inp_programing_claro_canal").prop("disabled");
        if (disabled == true) {
            var pregunta = confirm(
                "Este día ya tiene programacion,¿Quieres subir un archivo?"
            );
            if (pregunta == true) {
                $("#inp_programing_claro_canal").prop("disabled", false);
            }
        }
    });

    //SLIDER DE SINOPSIS
    $(".synopsis-image-slider").slick({
        slidesToShow: 1,
        dots: true,
        arrows: true,
        prevArrow:
            '<img src="../images/synopsis/arrow.svg" class="cursor-pointer arrow-left-synopsis" />',
        nextArrow:
            '<img src="../images/synopsis/arrow.svg" class="cursor-pointer arrow-right-synopsis" />',
        customPaging: function(slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return (
                "<p class='a-text-bold-teal slider-pagination-item'>" +
                (i + 1) +
                "</p>"
            );
        }
    });
    //CAMBIAR EL NÚMERO DE LA IMAGEN EN EL SLIDER DE SINOPSIS
    $(".synopsis-image-slider").on("afterChange", function(
        slick,
        currentSlide
    ) {
        $(".current-slide-number").text(currentSlide.currentSlide + 1);
    });
    
  
    /* Previsualizar una imagen a la hora de
        subir un archivo
    */
    $(".input-image-program").change(function() {
        let currentInput = $(this);
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                currentInput
                    .next()
                    .children(".prev-image-program")
                    .attr("src", e.target.result)
                    .addClass("h-100 w-100")
                    .css("z-index", "2");
            };
            reader.readAsDataURL(this.files[0]);
        }
    });

    /* Al dar click en el switch de "Establecer en lading", aplicamos ciertos estilos */
    $(".grilla-body").on("click", ".switch-landing", function() {
        let currentColumn = $(this).closest(".contenedor-columna");
        let landingOptionsChecks = currentColumn.children(
            ".establecer-options"
        );
        if ($(this).val() == 1) {
            landingOptionsChecks.css("pointer-events", "all");
            currentColumn
                .next()
                .children(".programar-content")
                .css("pointer-events", "all");
        } else {
            landingOptionsChecks.css("pointer-events", "none");
            //Hacemos que no se pueda escribir en los campos siguientes
            currentColumn
                .next()
                .children(".programar-content")
                .css("pointer-events", "none");

            //"Vaciar" inputs al momento de que el usuario da click en "No"
            currentColumn
                .next()
                .find("input")
                .val("");
            currentColumn
                .children(".establecer-options")
                .find("input")
                .prop("checked", false);
        }
    });
    /* Al dar click en el switch de "Establecer en Home", aplicamos ciertos estilos */
    $(".grilla-body").on("click", ".switch-home", function() {
        let currentColumn = $(this).closest(".contenedor-columna");

        if ($(this).val() == 1) {
            currentColumn
                .next()
                .children(".programar-content")
                .css("pointer-events", "all");
        } else {
            //Hacemos que no se pueda escribir en los campos siguientes
            currentColumn
                .next()
                .children(".programar-content")
                .css("pointer-events", "none");

            //"Vaciar" inputs al momento de que el usuario da click en "No"
            currentColumn
                .next()
                .find("input")
                .val("");
            currentColumn
                .children(".establecer-options")
                .find("input")
                .prop("checked", false);
        }
    });

    //Mostrar la sinópsis completa en modal
    $(".see-more").click(function() {
        let currentColumn = $(this).closest(".contenedor-columna");
        let synopsis = currentColumn.attr("synopsis");
        let chapterId = currentColumn.attr("chapter_id");
        let key = currentColumn.attr("key");
        $(".modal-textarea").val(synopsis);
        $(".modal-program-title").text($(this).attr("program_title"));
        $(".modal-synopsis").modal("show");
        $(".edit-synopsis-button").click(function() {
            let keyValue = $("#synopsis-content").val();
            console.log(keyValue);
            editAttributeProgram(chapterId, key, keyValue);
        });
    });

    //modal delete row
    $(".trash-row").click(function() {
        let allRows = $(".contenedor-fila");
        allRows.removeClass("row-selected");
        $(this).attr("src", "./images/eliminar-acti.svg");
        let row = $(this).closest(".contenedor-fila");
        $(this)
            .prev()
            .attr("src", "./images/basic-icons/pencil-edit-des.svg");
        row.addClass("row-selected");
        $(".modal-delete-row").modal("show");
    });

    $("#modal-button-delete").click(function() {
        let aa = $(this).attr("chapter_id");
        console.log(aa);
        $(".trash-row")
            .prev()
            .attr("src", "./images/basic-icons/pencil-edit-teal.svg");
    });

    //Truncar texto de sinópsis con "..."
    $(".lb-synopsis").each(function(index, element) {
        if ($(this).text().length > 200) {
            let text =
                $(this)
                    .text()
                    .substr(0, 200) + "...";
            $(this).text(text);
        }
    });

    let dateStartInput = document.getElementById("date-start-input");
    if (dateStartInput) {
        //ELEGIR FECHA DE INICIO Y FIN EN LA GRILLA
        let picker = new Litepicker({
            element: document.getElementById("date-start-input"),
            format: "YYYY-MM-DD",
            delimiter: ",",
            minDate: new Date(),
            onShow: function() {
                picker.picker.style.left = "50%";
                picker.picker.style.top = "50%";
                picker.picker.style.transform = "translate(-50%, -50%)";
                $(".litepicker").wrap(
                    "<div class='date-modal' id='modal-container'></div>"
                );
                $("#modal-container").css("display", "block");
            },
            onHide: function() {
                $("#modal-container").css("display", "none");
            },
            onSelect: function() {
                let fullDate = document
                    .getElementById("date-start-input")
                    .value.split(",");
                //  Fecha inicial del datepicker
                let startDate = fullDate[0];
                let startDateSplit = startDate.split("-");
                let startDateFull = `${startDateSplit[2]}-${startDateSplit[1]}-${startDateSplit[0]}`;
                $("#start-date-text").text(startDateFull);
                //   Fecha final del datepicker
                let endDate = fullDate[1];
                let endDateSplit = endDate.split("-");
                let endDateFull = `${endDateSplit[2]}-${endDateSplit[1]}-${endDateSplit[0]}`;
                $("#end-date-text").text(endDateFull);
            },
            numberOfMonths: 1,
            numberOfColumns: 1,
            singleMode: false
        });
    }

    /* Al dar "enter" cancelamos el salto de línea,
        conseguimos el valor del campo de la grilla
        y hacemos la petición
    */

    $(".editable-attribute").keydown(function(e) {
        if (e.which === 13 && !e.shiftKey) {
            let key = $(this)
                .closest(".contenedor-columna")
                .attr("key");
            let keyValue = "";
            switch (key) {
                case "day":
                    let date = $(this)
                        .val()
                        .split("-");
                    keyValue = `${date[2]}-${date[1]}-${date[0]}`;
                    break;
                case "program_year_produced":
                    keyValue = parseInt($(this).val());
                    break;
                default:
                    keyValue = $(this).val();
                    break;
            }

            let chapterId = $(this)
                .closest(".contenedor-columna")
                .attr("chapter_id");
            e.preventDefault();
            $(this).blur();
            console.log(typeof keyValue);
            editAttributeProgram(chapterId, key, keyValue);
            return false;
        }
    });
    $(".editable-attribute").blur(function() {
        let currentColumn = $(this).closest(".contenedor-columna");
        let keyValue = $(this).val();
        let chapterId = currentColumn.attr("chapter_id");
        let key = currentColumn.attr("key");
        editAttributeProgram(chapterId, key, keyValue);
    });
    //Sacar los valores de los switches en la grilla
    $(".switch-table").click(function() {
        let currentColumn = $(this).closest(".contenedor-columna");
        let keyValue = $(this).val();
        let chapterId = currentColumn.attr("chapter_id");
        let key = currentColumn.attr("key");
        editAttributeProgram(chapterId, key, keyValue);
    });

    /*
    Permite a todos los campos de Schedule item log time tener el formato
    tiempo en hh:mm
    */
    $(".schedule-time-input")
        .toArray()
        .forEach(scheduleTime => {
            new Cleave(scheduleTime, scheduleTimeConfig);
        });
    /*
    Permite a todos los campos de Schedule item log datetener el formato YYYY-MM-DD
    */
    $(".schedule-date-input")
        .toArray()
        .forEach(scheduleDate => {
            new Cleave(scheduleDate, cleaveConfig);
        });
    /*
    Permite a todos los input con la clase time-seconds-input el formato de tiempo hh:mm:ss
    */
    $(".time-seconds-input")
        .toArray()
        .forEach(timeInput => {
            new Cleave(timeInput, timeWithSeconds);
        });

    /*
    Permite a todos los input con la clase year-input tener el formato YYYY
    */
    $(".year-input")
        .toArray()
        .forEach(yearInput => {
            new Cleave(yearInput, year);
        });
    showUserFront();

    //GET USER
    $("#cambio").on("click", ".view-user-icon", function() {
        let id = $(this)
            .parent()
            .attr("_id");
        getUser(id);
    });

    $(".buttonall").click(function() {
        $(".buttonall").removeClass("btn-nav-select");
        $(this).addClass("btn-nav");
        $(".buttonall").removeClass("btn-nav");
        $(this).addClass("btn-nav-select");
    });

    //RENDER PAGE TO CREATE A BACKOFFICE'S USER
    showFormCreateUser();

    //REGISTER A USER
    $("#cambio").on("click", ".register-user-button", function() {
        let rol = $(".btn-rol-select").attr("id_rol");
        let email = $("#email-user-bo").val();
        let username = $("#name-user-bo").val();
        validateEmail($(".input-email"), $(".warning-email-text"));
        registerUser(username, email, rol);
    });

    $("#cambio").on("click", ".delete-userbo-icon", function() {
        let id = $(this)
            .parent()
            .attr("_id");
        let username = $(this).attr("_username");
        console.log(username);
        $(".modal-delete-username-bo").text(username);
        $(".modal-delete-user").modal("show");
        deleteUserUI(id);
    });

    //BACK TO THE FRONTPAGE USERS' PAGE
    $("#cambio").on("click", ".closeViewFront", function() {
        showPageUsersFront();
    });

    //BACK TO BACKOFFICE USERS' PAGE
    $("#cambio").on("click", ".closeViewBO", function() {
        showPageUsersBO();
    });

    //UPDATE CLARO NETWORKS USER
    $("#cambio").on("click", ".edit-user-front", function() {
        let id = $(this)
            .parent()
            .attr("_id");
        getUserFrontToUpdate(id);
    });

    //UPDATE USERS BACKOFFICE
    $("#cambio").on("click", ".edit-user-icon", function() {
        console.log("update");
        let id = $(this)
            .parent()
            .attr("_id");
        getUserToUpdate(id);
    });
    //CHANGE TO LANDING

    //CARGA DE LANDING Y GRILLA DE CLARO
    $(".lan-claro").click(function(event) {
        showlanding();
    });

    //CHANGE TO grilla claro
    $(".gril-claro").click(function(event) {
        console.log("Grilla canal claro");
        $.ajax({
            type: "POST",
            url: "view",
            data: { view: "grilla-canal-claro-button" },
            success: function(result) {
                $("#general-programming").html("");
                $("#general-programming").html(result);
            }
        });
    });
    //CHANGE TO grilla cinema
    $(".gril-cinema").click(function(event) {
        $.ajax({
            type: "POST",
            url: "view",
            data: { view: "grilla-claro-cinema-button" },
            success: function(result) {
                console.log("Grilla claro cinema");
                $("#general-programming").html("");
                $("#general-programming").html(result);
            }
        });
    });
    // CHANGE TO LANDING CINEMA
    $(".lan-cinema").click(function(event) {
        $.ajax({
            type: "POST",
            url: "view",
            data: { view: "lan-cinema" },
            success: function(result) {
                $("#bodymenu").html("");
                $("#bodymenu").html(result);
            }
        });
    });

    //CHANGE TO grilla concert
    $(".gril-concert").click(function(event) {
        $.ajax({
            type: "POST",
            url: "view",
            data: { view: "grilla-concert-channel-button" },
            success: function(result) {
                console.log("grilla Concert Channel");
                $("#general-programming").html("");
                $("#general-programming").html(result);
            }
        });
    });
    //CHANGE TO LANDING CONCERT
    $(".lan-concert").click(function(event) {
        $.ajax({
            type: "POST",
            url: "view",
            data: { view: "lan-concert" },
            success: function(result) {
                $("#bodymenu").html("");
                $("#bodymenu").html(result);
            }
        });
    });
    //CHANGE TO grilla home
    $(".gril-home").click(function(event) {
        $.ajax({
            type: "POST",
            url: "view",
            data: { view: "grilla-home-button" },
            success: function(result) {
                console.log("Grilla Home");
                $("#general-programming").html("");
                $("#general-programming").html(result);
            }
        });
    });
    //CHANGE TO LANDING HOME
    $(".lan-home").click(function(event) {
        $.ajax({
            type: "POST",
            url: "view",
            data: { view: "lan-home" },
            success: function(result) {
                $("#bodymenu").html("");
                $("#bodymenu").html(result);
            }
        });
    });

    //EDITAR CLARO CANAL
    $("#edit").click(function() {
        if ($('input[id="edit"]').is(":checked")) {
            $("#navbar-prev-canal-claro").html(` <script>
            new easyXDM.Socket({
                remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/claro-canal-edi.php",
                container: "navbar-prev-canal-claro",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";

                }
            });
            </script>`);
            $("#navbar-prev-home").html(` <script>
            new easyXDM.Socket({
                remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/home-edi.php",
                container: "navbar-prev-home",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);
            $("#navbar-prev-programacion").html(` <script>
            new easyXDM.Socket({
            remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/programacion-edi.php",
            container: "navbar-prev-programacion",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);
        }
    });

    //PREV CLARO CANAL
    $("#prev").click(function() {
        if ($('input[id="prev"]').is(":checked")) {
            $("#navbar-prev-canal-claro").html(` <script>
            new easyXDM.Socket({
                remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/claro-canal-prev.php",
                container: "navbar-prev-canal-claro",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);

            $("#navbar-prev-programacion").html(` <script>
            new easyXDM.Socket({
            remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/programacion-prev.php",
            container: "navbar-prev-programacion",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);
            $("#navbar-prev-home").html(` <script>
            new easyXDM.Socket({
            remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/home-prev.php",
            container: "navbar-prev-home",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);
        }
    });

    //EDITAR CINEMA
    $(".edi-cinema").click(function() {
        if ($('input[id="edit"]').is(":checked")) {
            $("#navbar-prev-claro-cinema").html(` <script>
      new easyXDM.Socket({
        remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/claro-cinema-edi.php",
        container: "navbar-prev-claro-cinema",
          onMessage: function(message, origin) {
              console.log(message);
              this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
              this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
              this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";

          }
      });
  </script>`);
            $("#navbar-prev-programacion").html(` <script>
            new easyXDM.Socket({
                remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/programacion-edi.php",
                container: "navbar-prev-programacion",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);
            $("#navbar-prev-home").html(` <script>
            new easyXDM.Socket({
                remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/home-edi.php",
                container: "navbar-prev-home",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);
        }
    });
    //PREV CINEMA
    $(".prev-cinema").click(function() {
        if ($('input[id="prev"]').is(":checked")) {
            $("#navbar-prev-claro-cinema").html(` <script>
            new easyXDM.Socket({
                remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/claro-cinema-prev.php",
                container: "navbar-prev-claro-cinema",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);
            $("#navbar-prev-programacion").html(` <script>
            new easyXDM.Socket({
            remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/programacion-prev.php",
            container: "navbar-prev-programacion",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);

            $("#navbar-prev-home").html(` <script>
            new easyXDM.Socket({
            remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/home-prev.php",
            container: "navbar-prev-home",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);
        }
    });
    //EDITAR CONCERT
    $(".edi-concert").click(function() {
        if ($('input[id="edit"]').is(":checked")) {
            $("#navbar-prev-concert-channel").html(` <script>
            new easyXDM.Socket({
            remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/concert-channel-edi.php",
            container: "navbar-prev-concert-channel",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";

                }
            });
            </script>`);
            $("#navbar-prev-programacion").html(` <script>
            new easyXDM.Socket({
            remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/programacion-prev.php",
            container: "navbar-prev-programacion",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);
            $("#navbar-prev-home").html(` <script>
            new easyXDM.Socket({
              remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/home-edi.php",
              container: "navbar-prev-home",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);
        }
    });
    //PREV CONCERT
    $(".prev-concert").click(function() {
        if ($('input[id="prev"]').is(":checked")) {
            $("#navbar-prev-concert-channel").html(` <script>
            new easyXDM.Socket({
                remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/claro-cinema-prev.php",
                container: "navbar-prev-concert-channel",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);
            $("#navbar-prev-programacion").html(` <script>
            new easyXDM.Socket({
            remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/programacion-prev.php",
            container: "navbar-prev-programacion",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);
            $("#navbar-prev-home").html(` <script>
            new easyXDM.Socket({
              remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/home-prev.php",
              container: "navbar-prev-home",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);
        }
    });
    //EDITAR HOME
    $(".edi-home").click(function() {
        if ($('input[id="edit"]').is(":checked")) {
            $("#navbar-prev-home").html(` <script>
            new easyXDM.Socket({
            remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/home-edi.php",
            container: "navbar-prev-home",
            onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";

                }
            });
            </script>`);
            $("#navbar-prev-programacion").html(` <script>
            new easyXDM.Socket({
            remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/programacion-prev.php",
            container: "navbar-prev-programacion",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);
        }
    });
    //PREV HOME
    $(".prev-home").click(function() {
        if ($('input[id="prev"]').is(":checked")) {
            $("#navbar-prev-home").html(` <script>
            new easyXDM.Socket({
                remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/home-edi.php",
                container: "navbar-prev-home",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);
            $("#navbar-prev-programacion").html(` <script>
            new easyXDM.Socket({
            remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/programacion-prev.php",
            container: "navbar-prev-programacion",
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
            </script>`);
        }
    });

    $(".option").click(function() {
        var value = $(this).attr("value");
        var select = $(this).attr("id-select");

        $("#" + select + " > p").text(value);
    });

    //CHOOSE DAY
    $(".Dias").click(function() {
        var value = $(this).attr("value");
        var select = $(this).attr("id-select");
        console.log($(this));
        $("#" + select + " > p").text(value);
    });
    //CHOOSE MONTH
    $(".Meses").click(function() {
        var value = $(this).attr("value");
        var select = $(this).attr("id-select");

        $("#" + select + " > p").text(value);
    });

    //CHOOSE YEAR
    $(".Años").click(function() {
        var value = $(this).attr("value");
        var select = $(this).attr("id-select");

        $("#" + select + " > p").text(value);
    });

    $("#mujer").click(function() {
        if ($('input[id="mujer"]').is(":checked")) {
            $("#women").attr(
                "src",
                "images/datos-adicionales/femenino-activo.svg"
            );
            $("#men").attr(
                "src",
                "images/datos-adicionales/masculino-inactivo.svg"
            );
        }
    });

    $("#hombre").click(function() {
        if ($('input[id="hombre"]').is(":checked")) {
            $("#women").attr(
                "src",
                "images/datos-adicionales/femenino-inactivo.svg"
            );
            $("#men").attr(
                "src",
                "images/datos-adicionales/masculino-activo.svg"
            );
        }
    });

    //NAVBAR PROGRAMACIÓN GENERAL
    createNavbarProgramacionGeneral();
    //END NAVBAR PROGRAMACIÓN GENERAL

    /* LOGIN */
    $("#button-login").click(function() {
        let inputEmail = $(".input-email");
        let inputPassword = $(".input-password");
        let messageError = $(".warning-email-text");
        let messagePasswordError = $(".caracteres-min");

        if (
            validateEmail(inputEmail, messageError) &&
            validatePassword(inputPassword, messagePasswordError)
        ) {
            /*let email = inputEmail.val();
            let hash = CryptoJS.SHA1(inputPassword.val());
            let result = CryptoJS.enc.Hex.stringify(hash);*/
            const loader = `
            <div class="loader-container">
              <img src="./images/loader.gif" class="loader" alt="">
            </div>
            `;
            let formContainer = $(".fondolog-reco");
            formContainer.prepend(loader);
            //signIn(email, result);

            return true;
        } else {
            console.log("errro");
            return false;
        }
    });

    /*REGISTER NEW USER*/
    $(".register-user-button").click(function() {
        let rol = $(".btn-rol-select").attr("id_rol");
        let email = $("#email-user-bo").val();
        let username = $("#name-user-bo").val();
        let password = $("#password-user-bo").val();
        registerUser(username, email, password, rol);
    });

    /* DELETE USER */

    /* 2.- UI  */
    $(".grilla-body").on("click", ".edit-row-pencil", selectRow);
    $(".grilla-body").on("click", ".selectable-column", selectColumn);
    //$(".edit-row-pencil").on("click", selectRow);
    //$(".selectable-column").click(selectColumn);

    //Mostrar grilla de concert channel
    $(".bn-nav").click(function() {
        let id = $(this).attr("id");
        showLandingSchedule(id);
    });

    $(".btn-nav").click(function() {
        let rel = $(this).attr("rel");
        console.log(rel);
    });

    /* Show the form to create a new user */

    $("#admin-users-section").click(function() {
        showPageUsersBO();
    });

    /* SHOW VIEW USERS FRONT */
    $("#admin-users-front-section").click(function() {
        showPageUsersFront();
    });

    /* SHOW VIEW ADMIN SITE */
    $(".admin-site-button").click(function() {
        showAdminSite();
    });

    /* Previsualizar contenido en diferentes tamaños */
    const prevImage = $(".a-prev-image");

    prevImage.click(function() {
        let prevContainer = $("iframe");
        previewPage($(this));
    });

    /* Nav de administrador */
    let adminNavItem = $(".admin-item-nav");
    let adminContent = $(".admin-content");
    let activeClass = "active-admin-nav";

    adminContent.hide();
    $(".admin-content:first").show();

    adminNavItem.click(function() {
        showContentNav(adminContent, $(this), adminNavItem, activeClass);
    });
    /* End Navigation*/
    /* END UI */

    /*login*/
    const inputPassword1 = $("#signup-password");
    const caracteresMin1 = $(".caracteres-min");
    const listo1 = $(".listo");
    inputPassword1.keyup(function() {
        if (
            inputPassword1.val().length < 8 &&
            inputPassword1.val().length >= 1
        ) {
            caracteresMin1.css("color", "red");
            listo1.css("display", "inline-block");
            listo1.attr("src", "../images/registro/alerta.svg");
        } else if (inputPassword1.val().length == 0) {
            caracteresMin1.css("color", "#666262");
            listo1.css("display", "none");
        } else {
            caracteresMin1.css("color", "green");
            listo1.css("display", "inline-block");
            listo1.attr("src", "../images/registro/listo.svg");
        }
    });

    const inputCorreo = $(".input-email");

    inputCorreo.keyup(function() {
        const correoValido = $(".correo-valido");
        const imagenError = $(".error");
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        validateKeyUpEmail(inputCorreo, filter, imagenError, correoValido);
    });

    /* VALIDATE LOGIN PASSWORD */
    $(".input-password").keyup(function() {
        validateKeyUpPassword($(this), $(".caracteres-min"));
    });

    /* Validar email para reestablecer contraseña*/

    const inputReEmail = $(".input-email");
    const messageError = $(".correo-valido");
    $("#reset-email").click(function() {
        if (validateEmail(inputReEmail, messageError)) {
            sendEmailResetPassword(inputReEmail);
        } else {
            return false;
        }
    });

    /*Validar nueva contraseña */
    const inputNewPassword = $("#new-password");
    const inputConfirmPassword = $("#new-confirm-password");
    const newPasswordButton = $("#send-password-button");

    newPasswordButton.click(function() {
        if (validateNewPassword(inputNewPassword, inputConfirmPassword)) {
            sendNewPassword(inputNewPassword, inputConfirmPassword);
            return true;
        } else {
            return false;
        }
    });
    var iconPassword = document.querySelectorAll(".icon-eye");
    var iconLength = iconPassword.length;

    if (iconPassword !== null) {
        for (let i = 0; i < iconLength; i++) {
            iconPassword[i].addEventListener("click", function() {
                ShowHidePassword(this);
            });
        }
    }

    /**
     *
     * METODOS PARA SUBIR PROGRAMACION
     */

    /**
     * Obtener el archivo subido
     */

    $("#inp_programing_claro_canal").on("change", function() {
        /**
         * JS hace dos cambios en el submit, por lo que se hacen dos llamados a esta funcion
         * esto para no caursar poroblemas mayores se manda a null e value del form
         * saldra un error de Jquery ignorar -> TypeError: "this.files[0] is undefined"
         */
        try {
            var file = this.files[0];
            var filename = this.files[0].name;

            if (filename != null) {
                var splName = filename.split(".");
                var fileFormat = splName[splName.length - 1];
                if (fileFormat != "xlsx" && fileFormat != "xls") {
                    alert("formato invalido, por favor sube un excel");
                } else {
                    var data_for_api = $("#data_for_api").val();
                    sendFilePHP(file, data_for_api);
                    console.log(this.files[0].name);
                }
            }
        } catch (error) {
            console.log(error);
        }
        this.value = null; //aqui para evitar que se hagan registros dobles
    });
    /**
     * Eviar archivo mediante ajax a un "controlador" php
     */

    function sendFilePHP(file, data_for_api) {
        console.log("enviando a php");
        //creamos un dato de formulario para pasarlo en el ajax
        let data = new FormData();
        data.append("file", file);
        data.append("datos", data_for_api);

        //Realizamos el ajax
        $.ajax({
            type: "POST",
            data: data,
            processData: false, //esto es para poder pasar el archivo
            contentType: false, //esto es para poder pasar el archivo
            url: "general-program/captureExcel",
            success: function(result) {
                var programas = JSON.parse(result);
                //console.log("php responde:" + result);
                console.log(programas.data);
                //console.log(result.data);
                //$("#rempla-claro-canal").replaceWith(result);
            }
        }).fail(function(e) {
            console.log(e);
        });
    }
    //para agregar una nueva fila
    $("#agregar").click(function() {
        agregar();
    });
    function agregar(data) {
        console.log(data);
        var fila =
            ' <div class="contenedor-fila"><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div></div> ';
        $("#tb1").append(fila);
    }
});

/**para la seleccion de paises */
$(document).on("click", function(e) {
    let container = $("#drop-paises, .cuadro-fecha");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $("#selectPais").prop("checked", false);
        $("#selectDay").prop("checked", false);
        $("#selectMonth").prop("checked", false);
        $("#selectYear").prop("checked", false);
    }
});
