//JQUERY
import $ from "jquery";
//BOOTSTRAP
import "bootstrap";
//VENDOR
import Cleave from "cleave.js";

import {
    showlanding
} from "./UI/UI.js";

import "slick-carousel/slick/slick";
import "bootstrap-select";

import {
    eventsGrilla
} from "./operaciones_grilla";
import {
    previewPage
} from "./preview/prev.js";
import {
    showContentNav
} from "./nav/nav.js";

//UI
import {
    showPageUsersBO,
    showlanconcert,
    showPageUsersFront,
    createNavbarProgramacionGeneral,
    showLandingSchedule,
    showAdminSite,
    showFormCreateUser,
    showUserFront,
    deleteUserUI,
    showlancinema
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
import {
    createLazyLoad
} from "./vendor/lozad.js";

$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
    },
    cache: false
});

import LandingView from "./views/landing";
let landingView = new LandingView();

import {
    calendarSlick
} from "./config/slick.js";

import {
    createSlickSlider,
    createCalendarDays
} from "./vendor/slick.js";

$(document).ready(function () {


    landingView.goToLandingFooter();
    let optionsFooterClaroNetworks = landingView.renderFooterClaroNetworks();
    if (optionsFooterClaroNetworks) {
        var socketFooterClaroNetworks = new easyXDM.Socket(
            optionsFooterClaroNetworks);
    }
    let optionsFooterCanalClaro = landingView.renderFooterClaroCanal();
    if (optionsFooterCanalClaro) {
        var socketFooterCanalClaro = new easyXDM.Socket(
            optionsFooterCanalClaro);
    }

    let optionsFooterConcertChannel = landingView.renderFooterConcertChannel();
    if (optionsFooterConcertChannel) {
        var socketFooterConcertChannel = new easyXDM.Socket(
            optionsFooterConcertChannel);
    }

    let optionsFooterClaroCinema = landingView.renderFooterClaroCinema();
    if (optionsFooterClaroCinema) {
        var socketFooterClaroCinema = new easyXDM.Socket(
            optionsFooterClaroCinema);
    }
    let sockets = [socketFooterClaroNetworks, socketFooterCanalClaro, socketFooterConcertChannel, socketFooterClaroCinema]
    landingView.getContentTerms();
    landingView.updateInfoTermsAndPrivacy(sockets);
    landingView.uploadImageFooter(sockets);
    landingView.updateInfoFooter(sockets)
    landingView.renderFooterPrev(sockets);
    landingView.renderFooterEdit(sockets);

    // let options = {
    //     load: function (el) {
    //         el.classList.add("fade-grilla");
    //     },
    // }
    // createLazyLoad(".contenedor-fila", options);

    //loader, images
    $(".load-picture").on("click", function () {
        const loader = `
        <div class="loader-view-container" id="loader1">
          <img src="../images/loader.gif" class="loader" alt="">
        </div>
        `;
        $("body").append(loader);

        setTimeout(function () {
            $("#loader1").remove();
            console.log("si lo borra");
        }, 3000);
    });
    //loader, antes de subir un archivo
    $(".load-photo").on("click", function () {
        const loader = `
        <div class="loader-view-container" id="loader1">
          <img src="./images/loader.gif" class="loader" alt="">
        </div>
        `;
        $("body").append(loader);
        console.log("si lo agrega");
        setTimeout(function () {
            $("#loader1").remove();
            console.log("si lo borra");
        }, 3000);
    });

    $("#close_modals-claro").click(function () {
        $(".modal").modal("hide");
    });
    //para mostrar un modal de url-promo encima del otro
    $(".url-promo").on("show.bs.modal", function () {
        var modalParent = $(this).attr("data-modal-parent");
    });

    $(".url-promo").on("hidden.bs.modal", function () {
        var modalParent = $(this).attr("data-modal-parent");
    });
    //para mostrar un modal de url-encabezado encima del otro
    $(".url-encabezado").on("show.bs.modal", function () {
        var modalParent = $(this).attr("data-modal-parent");
    });

    $(".url-encabezado").on("hidden.bs.modal", function () {
        var modalParent = $(this).attr("data-modal-parent");
    });
    //Div en donde hacemos el intercambio de grillas de los diferentes canales
    let divGrilla = $("#general-programming");

    //Borrar un programa de la grilla
    divGrilla.on("click", "#modal-button-delete", function () {
        let program = $(this).attr("program");
        let chapter_id = $(this).attr("chapter_id");
        $.ajax({
            type: "POST",
            url: "general-program/deleteChapter",
            data: {
                chapter_id: chapter_id
            },
            success: function (result) {
                console.log(result);
                result = JSON.parse(result);
                if (result.code == 200) {
                    $("#" + program).remove();
                    $("#programacion-claro-" + chapter_id).html("");
                    $(".modal-delete-row").modal("hide");
                    $("#confirmation-delete").modal("show");
                } else {
                    alert("No se puede borrar");
                    $(".modal-delete-row").modal("hide");
                    $(".trash-row")
                        .prev()
                        .attr(
                            "src",
                            "./images/basic-icons/pencil-edit-teal.svg"
                        );
                }
            }
        });
    });

    divGrilla.on("click", ".trash-row", function () {
        let allRows = $(".contenedor-fila");
        allRows.removeClass("row-selected");
        $(this).attr("src", "./images/eliminar-acti.svg");
        let row = $(this).closest(".contenedor-fila");
        /*$(this)
            .prev()
            .attr("src", "./images/basic-icons/pencil-edit-des.svg");*/
        let chapterId = $(this).attr("chapter_id");
        let program = $(this)
            .closest(".contenedor-fila")
            .attr("id");
        let modalButtonDelete = $("#modal-button-delete");
        modalButtonDelete.attr("chapter_id", chapterId);
        modalButtonDelete.attr("program", program);
        row.addClass("row-selected");
        $(".modal-delete-row").modal("show");
    });

    divGrilla.on("click", "#agregar-canal-claro", function () {
        $.ajax({
            type: "POST",
            url: "general-program/newRow",
            data: {
                // landing: "Claro Canal"
                landing: "Canal Claro"
            },
            success: function (result) {
                $(".grilla-body").append(result);
                eventsGrilla();
            }
        });
    });
    divGrilla.on("click", "#agregar-claro-cinema", function () {
        $.ajax({
            type: "POST",
            url: "general-program/newRow",
            data: {
                landing: "Claro Cinema"
            },
            success: function (result) {
                $(".grilla-body").append(result);
                eventsGrilla();
            }
        });
    });
    divGrilla.on("click", "#agregar-concert-channel", function () {
        $.ajax({
            type: "POST",
            url: "general-program/newRow",
            data: {
                landing: "Concert Channel"
            },
            success: function (result) {
                $(".grilla-body").append(result);
                eventsGrilla();
            }
        });
    });
    /*divGrilla.on("click", "#agregar-concert-channel", function () {
        $.ajax({
            type: "POST",
            url: "general-program/newRow",
            data: {
                landing: "Concert Channel"
            },
            success: function (result) {
                $(".grilla-body").append(result);
                eventsGrilla();
            }
        });
    });
    divGrilla.on("click", "#agregar-claro-cinema", function () {
        $.ajax({
            type: "POST",
            url: "general-program/newRow",
            data: {
                landing: "Claro Cinema"
            },
            success: function (result) {
                $(".grilla-body").append(result);
                eventsGrilla();
            }
        });
    });*/
    eventsGrilla();
    //SLIDER DE CINEMA
    $(".cinema-image-slider").slick({
        slidesToShow: 1,
        dots: true,
        appendDots: $(".programming-slider-dots1"),
        initialSlide: 0,
        infinite: false,


        customPaging: function (slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return (
                "<p class='a-text-bold-teal slider-pagination-item'>" +
                (i + 1) +
                "</p>"
            );
        }
    });

    //CAMBIAR EL NÚMERO DE LA IMAGEN EN EL SLIDER DE SINOPSIS
    $(".cinema-image-slider").on("afterChange", function (
        slick,
        currentSlide
    ) {
        $(".current-slide-number").text(currentSlide.currentSlide + 1);
    });

    //SLIDER DE SINOPSIS
    $(".synopsis-image-slider").slick({
        slidesToShow: 1,
        dots: true,
        initialSlide: 0,
        infinite: false,
        arrows: true,
        prevArrow: '<img src="../images/synopsis/arrow.svg" class="cursor-pointer arrow-left-synopsis" />',
        nextArrow: '<img src="../images/synopsis/arrow.svg" class="cursor-pointer arrow-right-synopsis" />',
        customPaging: function (slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return (
                "<p class='a-text-bold-teal slider-pagination-item'>" +
                (i + 1) +
                "</p>"
            );
        }
    });

    //CAMBIAR EL NÚMERO DE LA IMAGEN EN EL SLIDER DE SINOPSIS
    $(".synopsis-image-slider").on("afterChange", function (
        slick,
        currentSlide
    ) {
        $(".current-slide-number").text(currentSlide.currentSlide + 1);
    });

    /* Previsualizar una imagen a la hora de
        subir un archivo
    */
    $(".input-image-program").change(function () {
        let currentInput = $(this);
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
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

    $("#modal-button-delete").click(function () {
        let aa = $(this).attr("chapter_id");

        $(".trash-row")
            .prev()
            .attr("src", "./images/basic-icons/pencil-edit-teal.svg");
    });

    showUserFront();

    //GET USER
    $("#cambio").on("click", ".view-user-icon", function () {
        let id = $(this)
            .parent()
            .attr("_id");
        getUser(id);
    });

    $(".buttonall").click(function () {
        $(".buttonall").removeClass("btn-nav-select");
        $(this).addClass("btn-nav");
        $(".buttonall").removeClass("btn-nav");
        $(this).addClass("btn-nav-select");
    });

    //Mostramos la vista para crear un usuario
    showFormCreateUser();

    //Al dar click en el botón, hacemos el registro del usuario
    $("#cambio").on("click", ".register-user-button", function () {
        let rol = $(".btn-rol-select").attr("id_rol");
        let email = $("#email-user-bo").val();
        let username = $("#name-user-bo").val();
        //Verificamos si el email tiene el formato correcto
        validateEmail($(".input-email"), $(".warning-email-text"));
        //Hacemos la petición
        registerUser(username, email, rol);
    });

    $("#cambio").on("click", ".delete-userbo-icon", function () {
        let id = $(this)
            .parent()
            .attr("_id");
        let username = $(this).attr("_username");

        $(".modal-delete-username-bo").text(username);
        $(".modal-delete-user").modal("show");
        deleteUserUI(id);
    });

    //BACK TO THE FRONTPAGE USERS' PAGE
    $("#cambio").on("click", ".closeViewFront", function () {
        showPageUsersFront();
    });

    //BACK TO BACKOFFICE USERS' PAGE
    $("#cambio").on("click", ".closeViewBO", function () {
        showPageUsersBO();
    });

    //UPDATE CLARO NETWORKS USER
    $("#cambio").on("click", ".edit-user-front", function () {
        let id = $(this)
            .parent()
            .attr("_id");
        getUserFrontToUpdate(id);
    });

    //UPDATE USERS BACKOFFICE
    $("#cambio").on("click", ".edit-user-icon", function () {
        let id = $(this)
            .parent()
            .attr("_id");
        getUserToUpdate(id);
    });
    //CHANGE TO LANDING

    divGrilla.on("click", ".lan-claro", function () {
        showlanding();
    });

    //Cargamos la pantalla en donde previsualizamos el landing de concert channel
    divGrilla.on("click", ".lan-concert", function () {
        showlanconcert();
    });

    // Damos click en el botón de "landing" en grilla de claro cinema
    divGrilla.on("click", ".lan-cinema", function (event) {
        //Hacemos una petición ajax para recibir una vista
        showlancinema();
    });

    //CHANGE TO grilla claro
    divGrilla.on("click", ".gril-claro", function (event) {
        $.ajax({
            type: "POST",
            url: "view",
            data: {
                view: "grilla-canal-claro-button"
            },
            beforeSend: function () {
                const loader = `
                <div class="loader-view-container">
                  <img src="./images/loader.gif" class="loader" alt="">
                </div>
                `;
                $("body").append(loader);
            },
            success: function (result) {
                console.log(result);
                $("#general-programming").html("");
                $("#general-programming").html(result);
                eventsGrilla();
                $(".loader-view-container").remove();
            }
        });
    });
    //CHANGE TO grilla cinema
    divGrilla.on("click", ".gril-cinema", function (event) {
        $.ajax({
            type: "POST",
            url: "view",
            data: {
                view: "grilla-claro-cinema-button"
            },
            beforeSend: function () {
                const loader = `
                <div class="loader-view-container">
                  <img src="./images/loader.gif" class="loader" alt="">
                </div>
                `;
                $("body").append(loader);
            },
            success: function (result) {
                $("#general-programming").html("");
                $("#general-programming").html(result);
                eventsGrilla();
                $(".loader-view-container").remove();
            }
        });
    });

    //CHANGE TO grilla concert
    divGrilla.on("click", ".gril-concert", function (event) {
        $.ajax({
            type: "POST",
            url: "view",
            data: {
                view: "grilla-concert-channel-button"
            },
            beforeSend: function () {
                const loader = `
                <div class="loader-view-container">
                  <img src="./images/loader.gif" class="loader" alt="">
                </div>
                `;
                $("body").append(loader);
            },

            success: function (result) {
                $("#general-programming").html("");
                $("#general-programming").html(result);
                eventsGrilla();
                $(".loader-view-container").remove();
            }
        });
    });

    //CHANGE TO grilla home
    $(".gril-home").click(function (event) {
        $.ajax({
            type: "POST",
            url: "view",
            data: {
                view: "grilla-home-button"
            },
            success: function (result) {
                $("#general-programming").html("");
                $("#general-programming").html(result);
            }
        });
    });
    //CHANGE TO LANDING HOME
    $(".lan-home").click(function (event) {
        $.ajax({
            type: "POST",
            url: "view",
            data: {
                view: "lan-home"
            },
            success: function (result) {
                $("#bodymenu").html("");
                $("#bodymenu").html(result);
            }
        });
    });

    $(".option").click(function () {
        var value = $(this).attr("value");
        var select = $(this).attr("id-select");

        $("#" + select + " > p").text(value);
    });

    //CHOOSE DAY
    $(".Dias").click(function () {
        var value = $(this).attr("value");
        var select = $(this).attr("id-select");

        $("#" + select + " > p").text(value);
    });
    //CHOOSE MONTH
    $(".Meses").click(function () {
        var value = $(this).attr("value");
        var select = $(this).attr("id-select");

        $("#" + select + " > p").text(value);
    });

    //CHOOSE YEAR
    $(".Años").click(function () {
        var value = $(this).attr("value");
        var select = $(this).attr("id-select");

        $("#" + select + " > p").text(value);
    });

    $("#mujer").click(function () {
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

    $("#hombre").click(function () {
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
    $("#button-login").click(function () {
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
            /*             $(".correo-valido")
                .text("Ingresa un email")
                .css("color", "red");
            $(".caracteres-min")
                .text("Ingresa una contraseña")
                .css("color", "red");
            $(".error")
                .attr(
                    "src",
                    "http://www.claronetworks.openofficedospuntocero.info/images/registro/alerta.svg"
                )
                .css("display", "block"); */
            return false;
        }
    });

    /*REGISTER NEW USER*/
    $(".register-user-button").click(function () {
        let rol = $(".btn-rol-select").attr("id_rol");
        let email = $("#email-user-bo").val();
        let username = $("#name-user-bo").val();
        let password = $("#password-user-bo").val();
        registerUser(username, email, password, rol);
    });

    /* DELETE USER */

    /* 2.- UI  */

    //$(".edit-row-pencil").on("click", selectRow);
    //$(".selectable-column").click(selectColumn);

    //Mostrar grilla de concert channel
    $(".bn-nav").click(function () {
        let id = $(this).attr("id");
        showLandingSchedule(id);
    });

    $(".btn-nav").click(function () {
        let rel = $(this).attr("rel");
        console.log(rel);
    });

    /* Show the form to create a new user */

    $("#admin-users-section").click(function () {
        showPageUsersBO();
    });

    /* SHOW VIEW USERS FRONT */
    $("#admin-users-front-section").click(function () {
        showPageUsersFront();
    });

    /* SHOW VIEW ADMIN SITE */
    $(".admin-site-button").click(function () {
        showAdminSite();
    });

    /* Previsualizar contenido en diferentes tamaños */
    const prevImage = $(".a-prev-image");

    prevImage.click(function () {
        let prevContainer = $("iframe");
        previewPage($(this));
    });

    /* Nav de administrador */
    let adminNavItem = $(".admin-item-nav");
    let adminContent = $(".admin-content");
    let activeClass = "active-admin-nav";

    adminContent.hide();
    $(".admin-content:first").show();

    adminNavItem.click(function () {
        showContentNav(adminContent, $(this), adminNavItem, activeClass);
    });
    /* End Navigation*/
    /* END UI */

    /*login*/
    const inputPassword1 = $("#signup-password");
    const caracteresMin1 = $(".caracteres-min");
    const listo1 = $(".listo");
    inputPassword1.keyup(function () {
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

    inputCorreo.keyup(function () {
        const correoValido = $(".correo-valido");
        const imagenError = $(".error");
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        validateKeyUpEmail(inputCorreo, filter, imagenError, correoValido);
    });

    /* VALIDATE LOGIN PASSWORD */
    $(".input-password").keyup(function () {
        validateKeyUpPassword($(this), $(".caracteres-min"));
    });

    /* Validar email para reestablecer contraseña*/

    const inputReEmail = $(".input-email");
    const messageError = $(".correo-valido");
    $("#reset-email").click(function () {
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

    newPasswordButton.click(function () {
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
            iconPassword[i].addEventListener("click", function () {
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

    $("#inp_programing").on("change", function () {
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
                    $(".load-file").modal("show");
                } else {
                    var data_for_api = $(this).attr("api");
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

    /*     function sendFilePHP(file, data_for_api) {
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
                beforeSend: function () {
                    $("body").prepend(
                        `<div class="loader-view-container pointer-none">
                            <img src="./images/loader.gif" class="loader-table"/>
                        </div>`
                    );
                },
                success: function (result) {
                    var existe_programacion = JSON.parse(result);
                    $(".loader-view-container").remove();
                    if (existe_programacion.data == 1) {
                        console.log("Preguntamos al usuario");
                        $("#programas_procesados_por_el_excel").val(result);
                        $(".modal-information").modal("show");
                    } else {
                        if (existe_programacion.data == -1) {
                            console.log("es de un dia anterior");
                            $(".modal-before").modal("show");
                        } else {
                            console.log("se agregó la programación");
                        }
                    }
                }
            }).fail(function (e) {
                $(".loader-view-container").remove();
                console.log(e);
            });
        }
        $("#acccion-programacion-remplaza").click(function () {
            console.log("Se remplaza la programacion");
            let data = JSON.parse($("#programas_procesados_por_el_excel").val());
            console.log(data);
    
            $.ajax({
                type: "POST",
                data: data,
                url: "general-program/changePrograming",
                beforeSend: function () {
                    $(".modal-information .modal-content").prepend(
                        `<div class="loader-container pointer-none">
                            <img src="./images/loader.gif" class="loader-table"/>
                        </div>`
                    );
                },
                success: function (result) {
                    $(".loader-container").remove();
                    $(".modal-information").modal("hide");
                    console.log(JSON.parse(result));
                }
            }).fail(function (e) {
                console.log(e);
            });
        });
    
        $("#acccion-programacion-agrega").click(function () {
            console.log("Se agrega la programacion");
            let data = JSON.parse($("#programas_procesados_por_el_excel").val());
            console.log(data);
            $.ajax({
                type: "POST",
                data: data,
                url: "general-program/addPrograming",
                beforeSend: function () {
                    $(".modal-information .modal-content").prepend(
                        `<div class="loader-container pointer-none">
                            <img src="./images/loader.gif" class="loader-table"/>
                        </div>`
                    );
                },
                success: function (result) {
                    $(".loader-container").remove();
                    $(".modal-information").modal("hide");
                    console.log(JSON.parse(result));
                }
            }).fail(function (e) {
                console.log(e);
            });
        });
        $("#acccion-programacion-cancela").click(function () {
            console.log("Se cancela la programacion");
            $("#programas_procesados_por_el_excel").val(" ");
            let programas = $("#programas_procesados_por_el_excel").val();
            console.log(programas);
            $(".modal-information").modal("hide");
        }); */

    $("#agregar").click(function () {
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
$(document).on("click", function (e) {
    let container = $("#drop-paises, .cuadro-fecha");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $("#selectPais").prop("checked", false);
        $("#selectDay").prop("checked", false);
        $("#selectMonth").prop("checked", false);
        $("#selectYear").prop("checked", false);
    }
});
