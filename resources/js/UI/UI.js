//SERVICES
import {
    deleteUserBO,
    getAllUsersBO,
    getUserFront,
    deleteUserFront,
    getAllUserFront
} from "../services/user.js";
import {
    previewPage
} from "../preview/prev.js";
import {
    validateKeyUpEmail
} from "../form/form.js";
import $ from "jquery";
import {
    eventsGrilla
} from "../operaciones_grilla";
import {
    getProgrammingSynopsis,
    confLandingHome
} from "../services/landing.js";
import {
    createSlickSlider,
    createCalendarDays
} from "../vendor/slick.js";
import {
    calendarSlick
} from "../config/slick.js";
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
    $(".button-rol").click(function () {
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
    $(".modal-delete-button-confirm").click(function () {
        deleteUserBO(id);
    });
}

function deleteUserFrontUI(id) {
    $(".modal-delete-front-confirm").click(function () {
        deleteUserFront(id);
    });
}

function showModalDeleteUserBO() {
    $(".delete-userbo-icon").click(function () {
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
    $(".delete-user-front-icon").click(function () {
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
        function () {
            $(".histori").css("display", "block");
        },
        function () {
            $(".histori").css("display", "none");
        }
    );
    $(".editar").hover(
        function () {
            $(".edit").css("display", "block");
        },
        function () {
            $(".edit").css("display", "none");
        }
    );
    $(".notify").hover(
        function () {
            $(".noti").css("display", "block");
        },
        function () {
            $(".noti").css("display", "none");
        }
    );
    $(".ver").hover(
        function () {
            $(".veri").css("display", "block");
        },
        function () {
            $(".veri").css("display", "none");
        }
    );
    $(".edi").hover(
        function () {
            $(".edita").css("display", "block");
        },
        function () {
            $(".edita").css("display", "none");
        }
    );
    $(".borrar").hover(
        function () {
            $(".borra").css("display", "block");
        },
        function () {
            $(".borra").css("display", "none");
        }
    );
    $(".ver").hover(
        function () {
            $(".veri1").css("display", "block");
        },
        function () {
            $(".veri1").css("display", "none");
        }
    );
    $(".edi").hover(
        function () {
            $(".edita1").css("display", "block");
        },
        function () {
            $(".edita1").css("display", "none");
        }
    );
    $(".borrar").hover(
        function () {
            $(".borra1").css("display", "block");
        },
        function () {
            $(".borra1").css("display", "none");
        }
    ); //fin
}

/*
    Función que nos permite crear la navbar para previsualizar los diferentes landings
*/
function createNavbarProgramacionGeneral() {

    //Escondemos todos los div
    $(".navbar-progra-content").hide();

    //mostramos el primero
    $(".navbar-progra-content:first").show();

    let navbarPrograItems = $(".navbar-progra-item");
    let arrowLeft = $(".arrow-progra-left");
    let arrowRight = $(".arrow-progra-right");
    navbarPrograItems.click(function () {
        navbarPrograItems.removeClass("navbar-progra-active");
        $(this).addClass("navbar-progra-active");
        if ($(this).hasClass("navbar-canal-claro")) {
            changeContentProgramacionGeneral($(this).attr("rel"));
        } else if ($(this).hasClass("navbar-sinopsis")) {
            changeContentProgramacionGeneral($(this).attr("rel"));
        } else if ($(this).hasClass("navbar-programacion")) {
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

    $(".arrow-progra").click(function () {
        let currentNavbarItem = $(".navbar-progra-active");
        navbarPrograItems.removeClass("navbar-progra-active");

        if ($(this).hasClass("arrow-progra-left")) {
            currentNavbarItem.prev().addClass("navbar-progra-active");
            changeContentProgramacionGeneral(
                currentNavbarItem.prev().attr("rel")
            );
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
    if (nameSection == "navbar-prev-sinopsis") {
        try {
            let calendarsinopsis = $(".calendar-sinopsis-slider");
            calendarsinopsis.slick("unslick");
            $(".calendar-sinopsis-slider").slick({
                slidesToShow: 11,
                slidesToScroll: 11,
                infinite: true,
                dots: false,
                centerMode: false,
                arrows: true,
                prevArrow: '<img src="./images/prev.png" class="arrow-prev" />',
                nextArrow: '<img src="./images/next.png" class="arrow-next" />'
            });


        } catch (error) {
            $(".calendar-sinopsis-slider").slick({
                slidesToShow: 11,
                slidesToScroll: 11,
                infinite: true,
                dots: false,
                centerMode: false,
                arrows: true,
                prevArrow: '<img src="./images/prev.png" class="arrow-prev" />',
                nextArrow: '<img src="./images/next.png" class="arrow-next" />'
            });
        }
    }
}

//Función para mostrar la vista principal de edición de landings y programación general
function showAdminSite() {
    $.ajax({
        type: "POST",
        url: "view",
        data: {
            view: "admin-site-home"
        },
        success: function (result) {
            $("#cambio").html("");
            $("#cambio").html(result);
        }
    });
}

//Función para mostrar los usuarios que se encuentran registrados en el backoffice
function showPageUsersBO() {
    $.ajax({
        type: "POST",
        url: "view",
        data: {
            view: "admin-users-bo"
        },
        success: function (result) {
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
        data: {
            view: "lan-claro"
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
            $("#bodymenu").html("");
            $("#bodymenu").html(result);

            $(".loader-view-container").remove();
            //Volvemos a llamar la función para hacer que funcione la navbar de landing
            createNavbarProgramacionGeneral();
            //para activar el prev de los iconos
            /* Previsualizar contenido en diferentes tamaños */
            const prevImage = $(".a-prev-image");

            prevImage.click(function () {
                let prevContainer = $("iframe");
                previewPage($(this));
            });
            eventsGrilla();
            let date = new Date();
            let day = ('0' + date.getUTCDate()).slice(-2);
            let month = ('0' + (date.getUTCMonth() + 1)).slice(-2);
            let year = date.getUTCFullYear();
            getProgrammingSynopsis("canal-claro", `${year}-${month}-${day}`);
        }
    });
}
//Mandamos traer con ajax la vista de previsualizacion de concert channel
function showlanconcert() {
    $.ajax({
        type: "POST",
        url: "view",
        data: {
            view: "lan-concert"
        },
        beforeSend: function () {
            //Insertamos el loader
            const loader = `
            <div class="loader-view-container">
              <img src="./images/loader.gif" class="loader" alt="">
            </div>
            `;
            //Insertamos el loader en el body
            $("body").append(loader);
        },
        success: function (result) {
            $("#bodymenu").html("");
            $("#bodymenu").html(result);
            //Quitamos el loeader
            $(".loader-view-container").remove();
            //Volvemos a llamar la función para hacer que funcione la navbar de landing
            createNavbarProgramacionGeneral();
            //para activar el prev de los iconos
            /* Previsualizar contenido en diferentes tamaños */
            const prevImage = $(".a-prev-image");
            eventsGrilla();
            let date = new Date();
            let day = ('0' + date.getUTCDate()).slice(-2);
            let month = ('0' + (date.getUTCMonth() + 1)).slice(-2);
            let year = date.getUTCFullYear();
            getProgrammingSynopsis("concert-channel", `${year}-${month}-${day}`);
            prevImage.click(function () {
                let prevContainer = $("iframe");
                previewPage($(this));
            });
        }
    });
}

function showlancinema() {
    $.ajax({
        type: "POST",
        url: "view",
        data: {
            view: "lan-cinema"
        },
        //Insertamos un loader
        beforeSend: function () {
            const loader = `
                <div class="loader-view-container">
                  <img src="./images/loader.gif" class="loader" alt="">
                </div>
                `;
            $("body").append(loader);
        },
        success: function (result) {
            //Insertamos la vista que recibimos en la vista actual
            $("#bodymenu").html("");
            $("#bodymenu").html(result);
            //Habilitamos las acciones que se pueden hacer en la grilla

            //Quitamos el loader
            $(".loader-view-container").remove();
            //Mandamos llamar la función para crear de nuevo la navbar para previsualizar los landings
            createNavbarProgramacionGeneral();
            //para activar el prev de los iconos
            /* Previsualizar contenido en diferentes tamaños */
            const prevImage = $(".a-prev-image");
            eventsGrilla();
            let date = new Date();
            let day = ('0' + date.getUTCDate()).slice(-2);
            let month = ('0' + (date.getUTCMonth() + 1)).slice(-2);
            let year = date.getUTCFullYear();
            getProgrammingSynopsis("claro-cinema", `${year}-${month}-${day}`);
            prevImage.click(function () {
                let prevContainer = $("iframe");
                previewPage($(this));
            });
        }
    });
}

//Función para mostrar la vista de crear un usuario del backoffice
function showFormCreateUser() {
    $("#cambio").on("click", "#btnAlta", function (event) {
        $.ajax({
            type: "POST",
            url: "view",
            data: {
                view: "create-userbackoffice-form"
            },
            success: function (result) {
                $("#cambio").html("");
                $("#cambio")
                    .html(result)
                    .promise()
                    .done(function () {
                        changeImagesRolPermissions();
                        const inputCorreo = $(".input-email");
                        //Validamos el formato del email
                        inputCorreo.keyup(function () {
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
    $(".btn-rol-all").click(function () {
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
    $("#cambio").on("click", ".show-user-front-icon", function () {
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
        data: {
            view: "admin-users-front"
        },
        success: function (result) {
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
                    console.log("grilla");
                    $("#general-programming").html("");
                    $("#general-programming").html(result);
                    $(".loader-view-container").remove();
                    $(".litepicker").remove();
                    $(".date-modal").remove();
                    eventsGrilla();
                }
            });
            break;

        case "grilla-concert-channel-button":
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
                    console.log("grilla concert");

                    $("#general-programming").html("");
                    $("#general-programming").html(result);
                    $(".loader-view-container").remove();
                    $(".litepicker").remove();
                    $(".date-modal").remove();
                    eventsGrilla();
                }
            });
            break;

        case "grilla-claro-cinema-button":
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
                    $(".loader-view-container").remove();
                    $(".litepicker").remove();
                    $(".date-modal").remove();
                    eventsGrilla();
                }
            });
            break;

        case "grilla-home-button":
            $.ajax({
                type: "POST",
                url: "view",
                data: {
                    view: "grilla-home-button"
                },
                success: function (result) {
                    $("#general-programming").html("");
                    $("#general-programming")
                        .html(result)
                        .promise();
                        let baseURL = "http://www.claronetworks.openofficedospuntocero.info/v1.2/"
                        // let baseURL = "https://localhost/MaquetaCNetworks/"
                        confLandingHome(baseURL);
                        const prevImage = $(".a-prev-image");

            prevImage.click(function () {
                let prevContainer = $("iframe");
                previewPage($(this));
            });
                        eventsGrilla();
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
    //Cambiamos todos los lápices a azules y permitimos pointer events
    $(".delete-row-pencil")
        .attr("src", "./images/eliminar-acti.svg")
        .css("pointer-events", "all");
    let row = $(this).closest(".contenedor-fila");
    /*$(this)
        .next()
        .attr("src", "./images/basic-icons/trash.svg");*/
    $(this).attr("src", "./images/basic-icons/pencil-edit-teal.svg");
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
    showlanconcert,
    showLandingSchedule,
    showAdminSite,
    changeActiveBlackButton,
    selectRow,
    selectColumn,
    showlancinema
};
