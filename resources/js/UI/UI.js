//SERVICES
import {
    deleteUserBO,
    getAllUsersBO,
    getUserFront,
    deleteUserFront,
    getAllUserFront
} from "../services/user.js";

import { validateKeyUpEmail } from "../form/form.js";

/**
 * Configuramos el header de futuras peticiones POST con token de laravel
 */

/*
We use this method when you click on close icon in some view of
Admin User BO
*/

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
        url: "view",
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
        url: "view",
        data: { view: "admin-users-bo" },
        success: function(result) {
            $("#cambio").html("");
            $("#cambio").html(result);
            getAllUsersBO();
        }
    });

    /*
    showDescriptions();
    */
}
function showlanding() {
    $.ajax({
        type: "POST",
        url: "view",
        data: { view: "lan-claro" },
        success: function(result) {
            $("#bodymenu").html("");
            $("#bodymenu")
                .html(result)
                .promise();
        }
    });
}

function showFormCreateUser() {
    $("#cambio").on("click", "#btnAlta", function(event) {
        $.ajax({
            type: "POST",
            url: "view",
            data: { view: "create-userbackoffice-form" },
            success: function(result) {
                $("#cambio").html("");
                $("#cambio")
                    .html(result)
                    .promise()
                    .done(function() {
                        changeImagesRolPermissions();
                        const inputCorreo = $(".input-email");
                        inputCorreo.keyup(function() {
                            const correoValido = $(".warning-email-text");
                            const imagenError = $(".error");
                            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                            validateKeyUpEmail(
                                inputCorreo,
                                filter,
                                imagenError,
                                correoValido
                            );
                        });
                    });
            }
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
    $("#cambio").on("click", ".show-user-front-icon", function() {
        let id = $(this)
            .parent()
            .attr("_id");
        getUserFront(id);
    });
}

function showPageUsersFront() {
    $.ajax({
        type: "POST",
        url: "view",
        data: { view: "admin-users-front" },
        success: function(result) {
            $("#cambio").html("");
            $("#cambio").html(result);
            getAllUserFront();
        }
    });
}

function showLandingSchedule(id) {
    let generalSchedule = $("#general-programming");
    switch (id) {
        case "grilla-canal-claro-button":
            //  generalSchedule.load("./views/grillas/grilla-claro-canal.php");
            $.ajax({
                type: "POST",
                url: "view",
                data: { view: "grilla-canal-claro-button" },
                success: function(result) {
                    $("#general-programming").html("");
                    $("#general-programming")
                        .html(result)
                        .promise();
                }
            });
            break;

        case "grilla-concert-channel-button":
            //   generalSchedule.load("./views/grillas/grilla-concert-channel.php");
            $.ajax({
                type: "POST",
                url: "view",
                data: { view: "grilla-concert-channel-button" },
                success: function(result) {
                    $("#general-programming").html("");
                    $("#general-programming")
                        .html(result)
                        .promise();
                }
            });
            break;

        case "grilla-claro-cinema-button":
            //  generalSchedule.load("./views/grillas/grilla-claro-cinema.php");
            $.ajax({
                type: "POST",
                url: "view",
                data: { view: "grilla-claro-cinema-button" },
                success: function(result) {
                    $("#general-programming").html("");
                    $("#general-programming")
                        .html(result)
                        .promise();
                }
            });
            break;

        case "grilla-home-button":
            //  generalSchedule.load("./views/grillas/grilla-home.php");
            $.ajax({
                type: "POST",
                url: "view",
                data: { view: "grilla-home-button" },
                success: function(result) {
                    $("#general-programming").html("");
                    $("#general-programming")
                        .html(result)
                        .promise();
                }
            });
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

function selectRow() {
    //Estilos para las demás filas
    let allRows = $(".contenedor-fila");
    allRows.removeClass("row-selected");
    $(".editable-column").css("pointer-events", "none");
    //Estilos para la fila seleccionada para editar
    let allColumnsSelected = $(this)
        .closest(".contenedor-fila")
        .children(".editable-column");
    allColumnsSelected.css("pointer-events", "all");
    let row = $(this).closest(".contenedor-fila");
    row.addClass("row-selected");
}

function selectColumn() {
    //Seleccionamos todas las columnas y quitamos la clase column-select
    let allColumns = $(".contenedor-columna");
    allColumns.removeClass("column-select");
    //Añadimos a la columna actual la clase column-select
    let column = $(this);
    column.addClass("column-select");
    //Agregamos estilos al encabezado de la columna
    let tableHeader = $(".title-table").removeClass("active-title-table");
    let rel = $(this).attr("rel");
    $("#" + rel).addClass("active-title-table");
}

export {
    showPageUsersBO,
    showUserFront,
    showFormCreateUser,
    changeNameRol,
    changeImagesRolPermissions,
    cambiaracti,
    deleteUserUI,
    showModalDeleteUserBO,
    showPageUsersFront,
    getNameCountry,
    getNameGender,
    showModalDeleteUserFront,
    showDescriptions,
    createNavbarProgramacionGeneral,
    showlanding,
    showLandingSchedule,
    showAdminSite,
    changeActiveBlackButton,
    selectRow,
    selectColumn
};
