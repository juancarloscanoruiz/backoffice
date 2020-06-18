//SERVICES
import {
    registerUser,
    getUser,
    getUserToUpdate,
    deleteUserBO,
    getAllUsersBO,
    getUserFront,
    deleteUserFront,
    getUserFrontToUpdate,
    getAllUserFront
} from "../services/user.js";

//VALIDATIONS
import {
    validateKeyUpEmail,
    validateKeyUpPassword,
    validateEmail,
    validatePassword
} from "../form/form.js";

/**
 * Configuramos el header de futuras peticiones POST con token de laravel
 */

/*
We use this method when you click on close icon in some view of
Admin User BO
*/
function closeViewAdminBO() {
    $(".closeViewBO").click(function() {
        showPageUsersBO();
    });
}

function closeViewFront() {
    $(".closeViewFront").click(function() {
        showPageUsersFront();
    });
}

function cambiaracti(roles) {
    switch (roles) {
        case "1":
            $("#User-Raiz").attr("hidden", false);
            $("#User-Edit").attr("hidden", true);
            $("#User-Apro").attr("hidden", true);
            $("#User-Visua").attr("hidden", true);
            break;

        case "2":
            $("#User-Raiz").attr("hidden", true);
            $("#User-Edit").attr("hidden", false);
            $("#User-Apro").attr("hidden", true);
            $("#User-Visua").attr("hidden", true);
            break;

        case "3":
            $("#User-Raiz").attr("hidden", true);
            $("#User-Edit").attr("hidden", true);
            $("#User-Apro").attr("hidden", false);
            $("#User-Visua").attr("hidden", true);
            break;
        case "4":
            $("#User-Raiz").attr("hidden", true);
            $("#User-Edit").attr("hidden", true);
            $("#User-Apro").attr("hidden", true);
            $("#User-Visua").attr("hidden", false);
            break;
    }
}

function changeImagesRolPermissions() {
    $(".button-rol").click(function() {
        let idButton = $(this).attr("id_button");
        $(".button-rol").removeClass("btn-rol-select");
        $(this).addClass("btn-rol-select");
        cambiaracti(idButton);
    });
}

/*function showFormEditUserBO() {
  $(".edit-user-icon").click(function () {
    $("#editar").replaceWith();
    $("#cambio").load("Editusers.php", function () {
      alert("iojpojpoj");
      changeActiveRolGreenButton();
      closeViewAdminBO();
      changeImagesRolPermissions();
    });
  });
}*/

function changeActiveRolGreenButton() {
    let buttonsRol = $(".btn-rol");
    $(".btn-rol-all-edit").click(function() {
        buttonsRol.removeClass("btn-rol-select");
        $(this).addClass("btn-rol");
        buttonsRol.removeClass("btn-rol");
        $(this).addClass("btn-rol-select");
    });
}

function createClickButtonRegisterUser() {
    $(".register-user-button").click(function() {
        let rol = $(".btn-rol-select").attr("id_rol");
        let email = $("#email-user-bo").val();
        let username = $("#name-user-bo").val();
        //let password = $("#password-user-bo").val();

        registerUser(username, email, rol);
        validateEmail($(".input-email"), $(".warning-email-text"));
        //validatePassword($(".input-password"), $(".caracteres-min"));
    });
}

function showUserBO() {
    $(".view-user-icon").click(function() {
        let id = $(this)
            .parent()
            .attr("_id");
        getUser(id);
    });
}

function showUserToUpdate() {
    $(".edit-user-icon").click(function() {
        let id = $(this)
            .parent()
            .attr("_id");
        getUserToUpdate(id);
    });
}

function showUserFrontToUpdate() {
    $(".edit-user-front").click(function() {
        let id = $(this)
            .parent()
            .attr("_id");
        getUserFrontToUpdate(id);
    });
}

function deleteUserUI(id) {
    $(".modal-delete-button-confirm").click(function() {
        deleteUserBO(id);
    });
}

function deleteUserFrontUI(id) {
    $(".modal-delete-front-confirm").click(function() {
        deleteUserFront(id);
    });
}

function showModalDeleteUserBO() {
    $(".delete-userbo-icon").click(function() {
        let id = $(this)
            .parent()
            .attr("_id");
        let username = $(this).attr("_username");
        $(".modal-delete-username-bo").text(username);
        $(".modal-delete-user").modal("show");
        deleteUserUI(id);
    });
}

function showModalDeleteUserFront() {
    $(".delete-user-front-icon").click(function() {
        let id = $(this)
            .parent()
            .attr("_id");
        let username = $(this).attr("_username");
        $(".modal-delete-username-front").text(username);
        $(".modal-delete-user-front").modal("show");
        deleteUserFrontUI(id);
    });
}

function showDescriptions() {
    $(".histo").hover(
        function() {
            $(".histori").css("display", "block");
        },
        function() {
            $(".histori").css("display", "none");
        }
    );
    $(".editar").hover(
        function() {
            $(".edit").css("display", "block");
        },
        function() {
            $(".edit").css("display", "none");
        }
    );
    $(".notify").hover(
        function() {
            $(".noti").css("display", "block");
        },
        function() {
            $(".noti").css("display", "none");
        }
    );
    $(".ver").hover(
        function() {
            $(".veri").css("display", "block");
        },
        function() {
            $(".veri").css("display", "none");
        }
    );
    $(".edi").hover(
        function() {
            $(".edita").css("display", "block");
        },
        function() {
            $(".edita").css("display", "none");
        }
    );
    $(".borrar").hover(
        function() {
            $(".borra").css("display", "block");
        },
        function() {
            $(".borra").css("display", "none");
        }
    );
    $(".ver").hover(
        function() {
            $(".veri1").css("display", "block");
        },
        function() {
            $(".veri1").css("display", "none");
        }
    );
    $(".edi").hover(
        function() {
            $(".edita1").css("display", "block");
        },
        function() {
            $(".edita1").css("display", "none");
        }
    );
    $(".borrar").hover(
        function() {
            $(".borra1").css("display", "block");
        },
        function() {
            $(".borra1").css("display", "none");
        }
    ); //fin
}

function landing() {
    $("#menu").replaceWith();
    $("#bodymenu").load("submenu.php");
}
function grilla() {
    $("#grilla").replaceWith();
    $("#bodymenu").load("Progra_general.php");
}

function createNavbarProgramacionGeneral() {
    $(".navbar-progra-content").hide();
    $(".navbar-progra-content:first").show();
    let navbarPrograItems = $(".navbar-progra-item");
    let arrowLeft = $(".arrow-progra-left");
    let arrowRight = $(".arrow-progra-right");
    navbarPrograItems.click(function() {
        navbarPrograItems.removeClass("navbar-progra-active");
        $(this).addClass("navbar-progra-active");
        if ($(this).hasClass("navbar-canal-claro")) {
            changeContentProgramacionGeneral($(this).attr("rel"));
        } else if ($(this).hasClass("navbar-sinopsis")) {
            changeContentProgramacionGeneral($(this).attr("rel"));
        } else if ($(this).hasClass("navbar-programacion")) {
            console.log("canal claro");
            changeContentProgramacionGeneral($(this).attr("rel"));
        } else if ($(this).hasClass("navbar-home")) {
            changeContentProgramacionGeneral($(this).attr("rel"));
        }
        if ($(this).attr("navbar-index") == 1) {
            arrowLeft.css({
                pointerEvents: "none",
                opacity: "0.5"
            });
            arrowRight.css({
                pointerEvents: "all",
                opacity: "1"
            });
        } else if (
            $(this).attr("navbar-index") > 1 &&
            $(this).attr("navbar-index") < 4
        ) {
            arrowLeft.css({
                pointerEvents: "all",
                opacity: "1"
            });

            arrowRight.css({
                pointerEvents: "all",
                opacity: "1"
            });
        } else {
            arrowRight.css({
                pointerEvents: "none",
                opacity: "0.5"
            });
            arrowLeft.css({
                pointerEvents: "all",
                opacity: "1"
            });
        }
    });

    $(".arrow-progra").click(function() {
        let currentNavbarItem = $(".navbar-progra-active");
        navbarPrograItems.removeClass("navbar-progra-active");

        if ($(this).hasClass("arrow-progra-left")) {
            currentNavbarItem.prev().addClass("navbar-progra-active");
            changeContentProgramacionGeneral(
                currentNavbarItem.prev().attr("rel")
            );
            /*if (currentNavbarItem.prev().hasClass("navbar-canal-claro")) {
        changeContentProgramacionGeneral(currentNavbarItem.prev().attr("rel"));
      } else if (currentNavbarItem.prev().hasClass("navbar-sinopsis")) {
        changeContentProgramacionGeneral(currentNavbarItem.prev().attr("rel"));
      } else if (currentNavbarItem.prev().hasClass("navbar-programacion")) {
        changeContentProgramacionGeneral(currentNavbarItem.prev().attr("rel"));
      } else if (currentNavbarItem.prev().hasClass("navbar-home")) {
        changeContentProgramacionGeneral(currentNavbarItem.prev().attr("rel"));
      }*/
            if ($(".navbar-progra-active").attr("navbar-index") == 1) {
                arrowLeft.css({
                    pointerEvents: "none",
                    opacity: "0.5"
                });
            } else if ($(".navbar-progra-active").attr("navbar-index") < 4) {
                arrowRight.css({
                    pointerEvents: "all",
                    opacity: "1"
                });
            }
        } else {
            currentNavbarItem.next().addClass("navbar-progra-active");
            changeContentProgramacionGeneral(
                currentNavbarItem.next().attr("rel")
            );
            /*if (currentNavbarItem.next().hasClass("navbar-canal-claro")) {
        changeContentProgramacionGeneral(currentNavbarItem.next().attr("rel"));
      } else if (currentNavbarItem.next().hasClass("navbar-sinopsis")) {
        changeContentProgramacionGeneral(currentNavbarItem.next().attr("rel"));
      } else if (currentNavbarItem.next().hasClass("navbar-programacion")) {
        changeContentProgramacionGeneral(currentNavbarItem.next().attr("rel"));
      } else if (currentNavbarItem.next().hasClass("navbar-home")) {
        changeContentProgramacionGeneral(currentNavbarItem.next().attr("rel"));
      }*/
            if ($(".navbar-progra-active").attr("navbar-index") == 4) {
                arrowRight.css({
                    pointerEvents: "none",
                    opacity: "0.5"
                });
            } else if ($(".navbar-progra-active").attr("navbar-index") > 1) {
                arrowLeft.css({
                    pointerEvents: "all",
                    opacity: "1"
                });
            }
        }
    });
}
function changeContentProgramacionGeneral(nameSection) {
    $(".navbar-progra-content").hide();
    $("#" + nameSection).show();
}

function showAdminSite() {
    $.ajax({
        type: "POST",
        url: "/BackofficeClaroNetworks/public/view",
        data: { view: "admin-site-home" },
        success: function(result) {
            $("#cambio").html("");
            $("#cambio").html(result);
        }
    });
}

function showPageUsersBO() {
    $.ajax({
        type: "POST",
        url: "/BackofficeClaroNetworks/public/view",
        data: { view: "admin-users-bo" },
        success: function(result) {
            $("#cambio").html("");
            $("#cambio").html(result);
            getAllUsersBO();
        }
    });
    /*
    showUserBO();
    showFormCreateUser();
    showUserToUpdate();
    showDescriptions();
    getAllUsersBO();
    */
}

function showFormCreateUser() {
    $("#btnAlta").click(function() {
        $("#general").replaceWith();
        $("#cambio").load("Alta.php", function() {
            createClickButtonRegisterUser();
            changeActiveBlackButton();
            changeImagesRolPermissions();
            closeViewAdminBO();

            //VALIDATION KEYUP
            let emailWarning = $("#error_email");
            let inputEmail = $(".input-email");
            let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            $(".insert-data").keyup(function(e) {
                if (e.target.classList.contains("input-email")) {
                    validateKeyUpEmail(
                        $(".input-email"),
                        filter,
                        null,
                        emailWarning
                    );
                } else if (e.target.classList.contains("input-password")) {
                    validateKeyUpPassword(
                        $(".input-password"),
                        $(".caracteres-min ")
                    );
                }
            });
        });
    });
}

function changeActiveBlackButton() {
    let buttonsRolRegister = $(".bt-rol-register");
    $(".btn-rol-all").click(function() {
        buttonsRolRegister.removeClass("btn-rol-select");
        $(this).addClass("btn-rol");
        buttonsRolRegister.removeClass("btn-rol");
        $(this).addClass("btn-rol-select");
    });
}

function changeNameRol(id) {
    let rol = "";
    switch (id) {
        case 1:
            rol = "Super Usuario";
            break;
        case 2:
            rol = "Aprobador";
            break;
        case 3:
            rol = "Editor";
            break;
        case 4:
            rol = "Visualizador";
            break;

        default:
            break;
    }
    return rol;
}

function changeAdminContent(rel) {
    switch (rel) {
        case "Admin-home-BO":
            $("#Admin-home-BO").replaceWith();
            $("#cambio").load("admin-home.php");
            break;

        default:
            break;
    }
}

function showUserFront() {
    $(".show-user-front-icon").click(function() {
        let id = $(this)
            .parent()
            .attr("_id");
        getUserFront(id);
    });
}

function showPageUsersFront() {
    $.ajax({
        type: "POST",
        url: "/BackofficeClaroNetworks/public/view",
        data: { view: "admin-users-front" },
        success: function(result) {
            $("#cambio").html("");
            $("#cambio").html(result);
            getAllUserFront();
        }
    });
    /*
        showUserFront();
        showModalDeleteUserFront();
        showUserFrontToUpdate();

        showDescriptions();
    */
}

function showLandingSchedule(id) {
    let generalSchedule = $("#general-programming");
    switch (id) {
        case "grilla-canal-claro-button":
            generalSchedule.load("./views/grillas/grilla-claro-canal.php");
            break;

        case "grilla-concert-channel-button":
            generalSchedule.load("./views/grillas/grilla-concert-channel.php");
            break;

        case "grilla-claro-cinema-button":
            generalSchedule.load("./views/grillas/grilla-claro-cinema.php");
            break;

        case "grilla-home-button":
            generalSchedule.load("./views/grillas/grilla-home.php");
            break;

        default:
            break;
    }
}

function getNameCountry(id) {
    let countryName = "";
    let countryImage = "";
    switch (id) {
        case 1:
            countryName = "USA";
            countryImage =
                "http://www.claronetworks.openofficedospuntocero.info/images/paises/usa.svg";
            break;
        case 2:
            countryName = "Argentina";
            countryImage =
                "http://www.claronetworks.openofficedospuntocero.info/images/paises/argentina.svg";
            break;
        case 3:
            countryName = "Brazil";
            countryImage =
                "http://www.claronetworks.openofficedospuntocero.info/images/paises/brazil.svg";
            break;
        case 4:
            countryName = "Chile";
            countryImage =
                "http://www.claronetworks.openofficedospuntocero.info/images/paises/chile.svg";
            break;
        case 5:
            countryName = "Colombia";
            countryImage =
                "http://www.claronetworks.openofficedospuntocero.info/images/paises/colombia.svg";
            break;
        case 6:
            countryName = "Costa Rica";
            countryImage =
                "http://www.claronetworks.openofficedospuntocero.info/images/paises/costa-rica.svg";
            break;
        case 7:
            countryName = "Ecuador";
            countryImage =
                "http://www.claronetworks.openofficedospuntocero.info/images/paises/ecuador.svg";
            break;
        case 8:
            countryName = "El Salvador";
            countryImage =
                "http://www.claronetworks.openofficedospuntocero.info/images/paises/el-salvador.svg";
            break;
        case 9:
            countryName = "Guatemala";
            countryImage =
                "http://www.claronetworks.openofficedospuntocero.info/images/paises/guatemala.svg";
            break;
        case 10:
            countryName = "Honduras";
            countryImage =
                "http://www.claronetworks.openofficedospuntocero.info/images/paises/honduras.svg";
            break;
        case 11:
            countryName = "Nicaragua";
            countryImage =
                "http://www.claronetworks.openofficedospuntocero.info/images/paises/nicaragua.svg";
            break;

        case 12:
            countryName = "Panamá";
            countryImage =
                "http://www.claronetworks.openofficedospuntocero.info/images/paises/panama.svg";
            break;

        case 13:
            countryName = "Paraguay";
            countryImage =
                "http://www.claronetworks.openofficedospuntocero.info/images/paises/paraguay.svg";
            break;
        case 14:
            countryName = "Perú";
            countryImage =
                "http://www.claronetworks.openofficedospuntocero.info/images/paises/peru.svg";
            break;
        case 15:
            countryName = "Puerto Rico";
            countryImage =
                "http://www.claronetworks.openofficedospuntocero.info/images/paises/puerto-rico.svg";
            break;
        case 16:
            countryName = "Dominican Republic";
            countryImage =
                "http://www.claronetworks.openofficedospuntocero.info/images/paises/dominican-republic.svg";
            break;
        case 17:
            countryName = "Paraguay";
            countryImage =
                "http://www.claronetworks.openofficedospuntocero.info/images/paises/paraguay.svg";
            break;
        default:
            countryName = "";
            countryImage = "";
            break;
    }

    let country = {
        countryName: countryName,
        countryImage: countryImage
    };

    return country;
}

function getNameGender(g) {
    let genderName = "";
    let genderImage = "";

    switch (g) {
        case "M":
            genderName = "Masculino";
            genderImage =
                "http://www.claronetworks.openofficedospuntocero.info/images/datos-adicionales/masculino-activo.svg";
            break;
        case "F":
            genderName = "Fémenino";
            genderImage =
                "http://www.claronetworks.openofficedospuntocero.info/images/datos-adicionales/femenino-activo.svg";
            break;
        default:
            genderName = "";
            genderImage = "";
            break;
    }

    let gender = {
        genderName: genderName,
        genderImage: genderImage
    };

    return gender;
}

export {
    showPageUsersBO,
    showUserBO,
    showUserFront,
    showFormCreateUser,
    closeViewAdminBO,
    changeNameRol,
    changeActiveRolGreenButton,
    changeImagesRolPermissions,
    cambiaracti,
    deleteUserUI,
    showUserToUpdate,
    showModalDeleteUserBO,
    showPageUsersFront,
    closeViewFront,
    getNameCountry,
    getNameGender,
    showModalDeleteUserFront,
    showUserFrontToUpdate,
    showDescriptions,
    createNavbarProgramacionGeneral,
    landing,
    showLandingSchedule,
    showAdminSite
};
