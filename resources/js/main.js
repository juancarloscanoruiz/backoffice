import { previewPage } from "./preview/prev.js";
import { showContentNav } from "./nav/nav.js";

//UI
import {
    showPageUsersBO,
    showUserBO,
    showFormCreateUser,
    deleteUserUI,
    showPageUsersFront,
    createNavbarProgramacionGeneral,
    showLandingSchedule,
    showAdminSite
} from "./UI/UI.js";

//Validations
import {
    validateNewPassword,
    validateKeyUpEmail,
    validatePassword,
    validateEmail,
    validateKeyUpPassword,
    ShowHidePassword
} from "./form/form.js";

// import { validateUser } from "./form/form.js";
// import { validateToken } from "./form/form.js";

/* Service User
 */
import {
    registerUser,
    getAllUsersBO,
    getAllUserFront,
    sendEmailResetPassword
} from "./services/user.js";

$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
    }
});

$(document).ready(function() {
    //CONFIGURACIÓN DE DATEPICKER
    let dateScheduleLanding = document.querySelector("#date-schedule-landing");
    if (dateScheduleLanding) {
        const picker = datepicker(dateScheduleLanding, {
            customMonths: [
                "Enero",
                "Febrero",
                "Marzo",
                "Abril",
                "Mayo",
                "Junio",
                "Julio",
                "Agosto",
                "Septiembre",
                "Octubre",
                "Noviembre",
                "Diciembre"
            ],
            customDays: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
            onSelect: (instance, date) => {
                let nameDays = [
                    "DOMINGO",
                    "LUNES",
                    "MARTES",
                    "MIÉRCOLES",
                    "JUEVES",
                    "VIERNES",
                    "SÁBADO"
                ];

                let nameMonths = [
                    "ENERO",
                    "FEBRERO",
                    "MARZO",
                    "ABRIL",
                    "MAYO",
                    "JUNIO",
                    "JULIO",
                    "AGOSTO",
                    "SEPTIEMBRE",
                    "OCTUBRE",
                    "NOVIEMBRE",
                    "DICIEMBRE"
                ];

                let currentNamesDay = nameDays[date.getDay()];
                let currentNamesMonth = nameMonths[picker.currentMonth];

                let completeDay = `${currentNamesDay}  ${date.getDate()}`;
                $("#schedule-day").text(completeDay);
                $(".progra-month").text(currentNamesMonth);
            },
            minDate: new Date()
        });
        //ELEGIR DÍA EN PROGRAMACIÓN GENERAL
        $(".calendar").click(function(e) {
            e.stopPropagation();
            const isHidden = picker.calendarContainer.classList.contains(
                "qs-hidden"
            );
            picker[isHidden ? "show" : "hide"]();
            //console.log(picker.currentMonth);
        });
    }

    //CHANGE TO LANDING
    function landing() {
        $("#btn-landing").on("click", function (event) {
          showlanding();
        });
      }
      
function showlanding() {
    $.ajax({
      type: "POST",
      url: "view",
      data: {
        view: "landing"
      },
      success: function success(result) {
        $("#bodymenu").html("");
        $("#bodymenu").html(result);
      }
    });
  }
   
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

    /* GET ALL USERS FRONT */
    //getAllUserFront();

    /* GET ALL USERS BACKOFFICE */
    //getAllUsersBO();

    //GET USER BACKOFFICE
    showUserBO();

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

    $(".admin-users-section").click(function() {
        showPageUsersBO();
    });

    /* SHOW VIEW USERS FRONT */
    $(".admin-users-front-section").click(function() {
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
