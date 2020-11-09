import {
    changeNameRol,
    changeImagesRolPermissions,
    cambiaracti,
    showUserBO,
    showModalDeleteUserBO,
    getNameCountry,
    getNameGender,
    showModalDeleteUserFront
} from "../UI/UI.js";

//VALIDATIONS
import { validateKeyUpEmail, validateKeyUpPassword } from "../form/form.js";

import CryptoJS from "crypto-js";

import $ from "jquery";

function sendUserEmail(inputEmail) {
    let email = inputEmail.val();

    let emailUser = {
        email: email
    };

    $.ajax({
        type: "POST",
        data: emailUser,
        url:
            "http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/user/reset_send",
        success: function(result) {
            console.log("succes", result);
            if (result.data) {
                location.href =
                    "http://www.claronetworks.openofficedospuntocero.info/email-sent.php";
            }
        }
    });
}

function sendNewPassword(inputPassword, secondInputPassword) {
    let newPassowrd = inputPassword.val();
    let confirmedNewPassowrd = secondInputPassword.val();
    let user_id = $("#user_id").val();
    let url = location.href;
    let arrayUrl = url.split("?");
    let token = arrayUrl[1];

    let info_user = {
        token: token,
        password: newPassowrd,
        confirm: confirmedNewPassowrd
    };

    $.ajax({
        type: "POST",
        data: info_user,
        url:
            "http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/user/reset_password",
        success: function(result) {
            console.log("succes", result);
            if (result.code == 200) {
                console.log("succes", result);
                location.href =
                    "http://www.claronetworks.openofficedospuntocero.info/success-password.php";
            }
        }
    });
}

/*function signIn(email, password) {
    let dataUser = {
        email: email,
        password: password
    };

    $.ajax({
        type: "POST",
        data: dataUser,
        url: "/BackofficeClaroNetworks/public/auth/login",
        beforeSend: function() {
            const loader = `
      <div class="loader-container">
        <img src="./images/loader.gif" class="loader" alt="">
      </div>
      `;
            let formContainer = $(".fondolog-reco");
            formContainer.prepend(loader);
        },
        success: function(result) {
            console.log(result);
            window.location.href = "admin";
        }
    });
}*/

function registerUser(name, email, rol) {
    let user = {
        name: name,
        email: email,
        rol: rol
    };

    $.ajax({
        type: "POST",
        data: user,
        url: "user/backoffice/create",
        beforeSend: function() {
            $(".register-user-content")
                .prepend(`<img src="./images/loader.gif" class="loader"/>`)
                .css({
                    backgorund: "white",
                    opacity: "0.5",
                    pointerEvents: "none"
                });
        },
        success: function(result) {
            let json = JSON.parse(result);
            console.log(json);
            if (json.code == 200) {
                $(".register-user-content").css({
                    backgorund: "white",
                    opacity: "1",
                    pointerEvents: "all"
                });
                $(".loader").remove();
                $(".modal-register-username").text(`${json.data.name},`);
                let modalPrivileges = "";
                switch (json.data.rol_id) {
                    case "1":
                        //ROOT

                        $(".user-rol").text("Súper Usuario,");

                        modalPrivileges = `
            <div class="text-rol mb-4">
            <div class="d-flex align-items-center pb-3 no-gutters">
              <div class="col-xl-4 d-flex align-items-center">
                <div class="no-gutters d-flex align-items-center w-100">
                    <img src="./images/ojo-naranja.svg" alt="" class="visualize-icon mr-3">
                    <span>Visualizar<br> cambios </span>
                </div>
              </div>

              <div class="col-xl-4 d-flex align-items-center">
                <div class="no-gutters d-flex w-100">
                    <img src="./images/coment-naranja.svg" alt="" class="commentary-icon mr-3">
                    <span>Hacer<br> comentarios</span>
                </div>
              </div>

              <div class="col-xl-4 d-flex align-items-center">
                <div class="no-gutters d-flex align-items-center w-100">
                    <img src="./images/edit-naranja.svg" alt="" class="edit-icon mr-3">
                    <span>Editar</span>
                </div>
              </div>
            </div>
            <div class="d-flex align-items-center pb-3  no-gutters">
              <div class="col-xl-4 d-flex align-items-center">
                <div class="no-gutters d-flex w-100">
                    <img src="./images/recha-naranja.svg" alt="" class="reject-icon mr-3">
                    <span>Rechazar<br> cambios</span>
                </div>
              </div>
              <div class="col-xl-4 d-flex align-items-center">
                <div class="no-gutters d-flex align-items-center w-100">
                    <img src="./images/apro-naranja.svg" alt="" class="aprove-orange-icon mr-3">
                    <span>Aprobar<br> cambios</span>
                </div>
              </div>
              <div class="col-xl-4 d-flex align-items-center">
                <div class="no-gutters d-flex align-items-center w-100">
                    <img src="./images/admi-naranja.svg" alt="" class="manage-user-icon mr-3">
                    <span> Administrar<br> usuarios</span>
                </div>
              </div>
            </div>
          </div>
            `;
                        break;
                    case "2":
                        //APROBADOR
                        modalPrivileges = `
            <div class="text-rol mb-4">
            <div class="d-flex align-items-center pb-3 no-gutters">
              <div class="col-xl-4 d-flex align-items-center">
                <div class="no-gutters d-flex align-items-center w-100">
                  <img src="./images/ojo-naranja.svg" alt="" class="visualize-icon mr-3">
                  <span>Visualizar<br> cambios </span>
                </div>
              </div>

              <div class="col-xl-4 d-flex align-items-center">
                <div class="no-gutters d-flex w-100">
                  <img src="./images/coment-naranja.svg" alt="" class="commentary-icon mr-3">
                  <span>Hacer<br> comentarios</span>
                </div>
              </div>

              <div class="col-xl-4 d-flex align-items-center">
                <div class="no-gutters d-flex align-items-center w-100">
                  <img src="./images/edit-naranja.svg" alt="" class="edit-icon mr-3">
                  <span>Editar</span>
                </div>
              </div>
            </div>
            <div class="d-flex align-items-center pb-3  no-gutters">
              <div class="col-xl-4 d-flex align-items-center">
                <div class="no-gutters d-flex w-100">
                  <img src="./images/recha-naranja.svg" alt="" class="reject-icon mr-3">
                  <span>Rechazar<br> cambios</span>
                </div>
              </div>
              <div class="col-xl-4 d-flex align-items-center">
                <div class="no-gutters d-flex align-items-center w-100">
                  <img src="./images/apro-naranja.svg" alt="" class="aprove-orange-icon mr-3">
                  <span>Aprobar<br> cambios</span>
                </div>
              </div>
            </div>
          </div>
              `;
                        break;
                    case "3":
                        //EDITOR
                        modalPrivileges = `
            <div class="text-rol mb-4">
            <div class="d-flex align-items-center pb-3 no-gutters">
              <div class="col-xl-4 d-flex align-items-center">
                <div class="no-gutters d-flex align-items-center w-100">
                  <img src="./images/ojo-naranja.svg" alt="" class="visualize-icon mr-3">
                  <span>Visualizar<br> cambios </span>
                </div>
              </div>

              <div class="col-xl-4 d-flex align-items-center">
                <div class="no-gutters d-flex w-100">
                  <img src="./images/coment-naranja.svg" alt="" class="commentary-icon mr-3">
                  <span>Hacer<br> comentarios</span>
                </div>
              </div>

              <div class="col-xl-4 d-flex align-items-center">
                <div class="no-gutters d-flex align-items-center w-100">
                  <img src="./images/edit-naranja.svg" alt="" class="edit-icon mr-3">
                  <span>Editar</span>
                </div>
              </div>
            </div>
          </div>
              `;
                        break;
                    case "4":
                        //VISUALIZADOR
                        modalPrivileges = `
            <div class="text-rol mb-4">
            <div class="d-flex justify-content-center align-items-center no-gutters">
              <div class="d-flex align-items-center mr-3">
                <div class="no-gutters d-flex align-items-center w-100">
                  <img src="./images/ojo-naranja.svg" alt="" class="visualize-icon mr-3">
                  <span>Visualizar<br> cambios </span>
                </div>
              </div>
              <div class="d-flex align-items-center ml-3">
                <div class="no-gutters d-flex w-100">
                  <img src="./images/coment-naranja.svg" alt="" class="commentary-icon mr-3">
                  <span>Hacer<br> comentarios</span>
                </div>
              </div>
            </div>
          </div>
              `;
                        break;
                    default:
                        break;
                }

                $(".modal-user-privileges").html(modalPrivileges);
                $(".modal-newuser-bo").modal("show");
            } else if (json.code == 422) {
                $(".register-user-content").css({
                    backgorund: "white",
                    opacity: "1",
                    pointerEvents: "all"
                });
                $(".loader").remove();
                if (json.data.email) {
                    $("#error_email")
                        .text("El email ya ha sido registrado")
                        .css("color", "red");
                    $(".error").attr(
                        "src",
                        "http://www.claronetworks.openofficedospuntocero.info/images/registro/alerta.svg"
                    );
                }
            }
        }
    });
}

/* GET ALL USERS BACKOFFICE */
function getAllUsersBO() {
    let dataUser = {
        function: "getAllUsersBO"
    };

    $.ajax({
        type: "POST",
        data: dataUser,
        url: "user/backoffice",
        beforeSend: function() {
            $("#Adm-users-BO").html(
                `<img src="./images/loader.gif" class="loader"/>`
            );
        },
        success: function(result) {
            let json = JSON.parse(result);
            console.log(json);
            if (json.code == 200) {
                let userBO = "";
                localStorage.setItem("usersBO", JSON.stringify(json.data));
                //let users = JSON.parse(localStorage.getItem("usersBO"));
                let users = json.data;
                users.forEach(user => {
                    let rol = changeNameRol(user.rol_id);

                    userBO += `
          <div class="pd-5">${user.name}</div>
          <div class="pd-10">${rol}</div>
          <div class='justify-content-center' _id="${user.id}">
            <!--Acciones-->
            <input type='image' src='./images/ver-acti.svg' class=' btn-focus view-user-icon images' id='visual'></input>
            <input type='image' src='./images/edit-ac.svg' class='ml-3 btn-focus images edit-user-icon'></input>
            <input type='image' src='./images/eliminar-acti.svg' class='ml-3 btn-focus images delete-userbo-icon' _username="${user.name}"></input>
          </div>
          `;
                });
                $("#Adm-users-BO").html(
                    `
        <div class="col-xl-10 position-btn-alta">
          <button class="btn-alta text-public mb-4 d-flex align-items-center" id="btnAlta">Agregar nuevo usuario</button>
        </div>
        <div class="sombras2 trans10 mb-5">
          <div class="grid-users texto-general users-backoffice-table">
            <header>
            <div class="text-title">Usuario</div>
            </header>
            <section class="section">
              <div class="text-title ">Rol</div>
            </section>
            <aside>
              <div class="text-title ">Acciones</div>
            </aside>
            ${userBO}
          </div>
        </div>


          <div>
          <ul class="description">
          <li class="posi">
          <input type="image" src="./images/ver-muestra.svg" class="btn-focus  tam "></input>
          <div class="describe"><img src="./images/recuadro1-hover.svg"><span class="text-veri">Visualizar</span></div>
          </li>
          <li class="posi">
          <input type="image" src="./images/edita-muestra.svg" class="btn-focus  tam"></input>
          <div class="describe"><img src="./images/recuadro1-hover.svg"><span class="text-edita">Editar</span></div>
          </li>
          <li class="posi">
          <input type="image" src="./images/borrar-muestra.svg" class="btn-focus  tam"></input>
          <div class="describe"><img src="./images/recuadro1-hover.svg"><span class="text-borra">Borrar</span></div>
          </li>
          </ul>

          </div>

        `
                );

                showModalDeleteUserBO();

                /*showDescriptions();
                showUserBO();*/
            }
        }
    });
}

function getUser(id) {
    let data = {
        id: id
    };

    $.ajax({
        type: "POST",
        data: data,
        url: "user/backoffice/get",
        beforeSend: function() {
            $("#Adm-users-BO")
                .append(`<img src="./images/loader.gif" class="loader"/>`)
                .css({
                    backgorund: "white",
                    opacity: "0.5",
                    pointerEvents: "none"
                });
        },
        success: function(result) {
            let json = JSON.parse(result);
            if (json.code == 200) {
                $.ajax({
                    type: "POST",
                    url: "view",
                    data: { view: "view-userbackoffice" },
                    success: function(result) {
                        $("#cambio").html("");
                        $("#cambio").html(result);
                        let rol = changeNameRol(json.data.rol.id);
                        $(".show-username").html(json.data.name);
                        $(".show-email").html(json.data.email);
                        $(".show-rol").html(rol);
                    }
                });
                /*$("#cambio").load("VisualUser.php", function() {
                    let rol = changeNameRol(json.data.rol.id);
                    $("#usuarios").html(`
          <div class="col-xl-7 trans10 mx-auto title-altauser tamaño-edi ">
        <div class="pr-4 pl-5 pt-2 pb-2"><strong class=""> VISUALIZAR DATOS DE USUARIO</strong></div>
        <img src="./images/equis.svg" alt="" class="equis2 shadow closeViewBO">
      </div>
          <div class=" col-xl-7 trans10 mx-auto texto-general " id="visual">
            <div class="container shadow tamaño mt-0 mb-2">

                <div class="w3-card-4 bg-white d-flex">

                    <div class=" col-xl-12 mx-auto mt-xl-3 mb-xl-2 pl-5 pr-5 ">
                        <form>
                            <div>
                                <p class="insert-data pb-2 pt-2 show-username">${json.data.name}</p>
                            </div>
                            <div>
                                <p class="insert-data  input-email  mt-4 pt-2 pb-2 show-email">
                                  ${json.data.email}
                                </p>
                            </div></input>
                            <div>
                                <p class="insert-data input-password mt-4 pt-2 pb-2" type="password" id="login-password" name="login-password" autocomplete="off">***********</p>
                            </div>

                            </input>

                            <p class="mt-4 ml-2">Rol de usuario</p>
                            <button type="button" class=" btn-succes text-sucess mb-4 show-rol" id="login-button">
                              ${rol}
                            </button>
                        </form>
                        <br>
                    </div>

                </div>
            </div>
          </div>
          `);
                    closeViewAdminBO();
                });*/
            }
        }
    });
}

/* GET ALL FRONT USERS */
function getAllUserFront() {
    $.ajax({
        type: "POST",
        url: "user/front",
        beforeSend: function() {
            $("#Admin-users-Front").html(
                `<img src="./images/loader.gif" class="loader"/>`
            );
        },
        success: function(result) {
            let json = JSON.parse(result);
            console.log(json);
            if (json.code == 200) {
                //localStorage.setItem("usersFront", JSON.stringify(json.data));
                let users = json.data;
                let userF = "";
                users.forEach(user => {
                    userF += `
          <div class="pd-5">${user.name}</div>
          <div class='justify-content-center' _id="${user.id}">
            <input type='image' src='./images/ojito-acti.svg' class='show-user-front-icon  btn-focus images'></input>
            <input type='image' src='./images/edit-ac.svg' class='ml-3 btn-focus images edit-user-front'></input>
            <input type='image' src='./images/eliminar-acti.svg' class='ml-3 btn-focus delete-user-front-icon images' _username="${user.name}"></input>
          </div>
          `;
                });

                $("#Admin-users-Front").html(`
        <div class="sombras1 trans10 mb-5 ">
          <div class="grid texto-general users-front-table">
            <header>
              <div class="text-title">Usuario</div>
            </header>
            <section class="section">
              <div class="text-title">Acciones</div>
            </section>
            ${userF}
          </div>

        </div>
        <div class="col-xl-1 user-front-table">

        <div>
        <ul class="description">
        <li class="posi">
        <input type="image" src="./images/ver-muestra.svg" class="btn-focus  tam "></input>
        <div class="describe"><img src="./images/recuadro1-hover.svg"><span class="text-veri">Visualizar</span></div>
        </li>
        <li class="posi">
        <input type="image" src="./images/edita-muestra.svg" class="btn-focus  tam"></input>
        <div class="describe"><img src="./images/recuadro1-hover.svg"><span class="text-edita">Editar</span></div>
        </li>
        <li class="posi">
        <input type="image" src="./images/borrar-muestra.svg" class="btn-focus  tam"></input>
        <div class="describe"><img src="./images/recuadro1-hover.svg"><span class="text-borra">Borrar</span></div>
        </li>
        </ul>

        </div>

        </div>
        `);
                showModalDeleteUserFront();
                /*showUserFront();
                showModalDeleteUserFront();

                showDescriptions();*/
            }
        }
    });
}

function updateDataUser(id, name, email, password, repassword, rolId) {
    let dataUser = {
        id_admin_user: id,
        name: name,
        email: email,
        password: password,
        repassword: repassword,
        rol_id: rolId
    };
    console.log(dataUser);
    $.ajax({
        type: "POST",
        data: dataUser,
        url: "user/backoffice/update",
        beforeSend: function() {
            $(".edit-userbo-content")
                .prepend(`<img src="./images/loader.gif" class="loader"/>`)
                .css({
                    backgorund: "white",
                    opacity: "0.5",
                    pointerEvents: "none"
                });
        },
        success: function(result) {
            console.log(result);
            let json = JSON.parse(result);
            $(".loader").remove();
            $(".edit-userbo-content").css({
                backgorund: "white",
                opacity: "1",
                pointerEvents: "all"
            });
            if (json.code == 200) {
                $(".modal-edit-username").text(json.data.name);
                let modalPrivileges = "";

                switch (json.data.rol_id) {
                    case 1:
                        //ROOT
                        $(".user-rol").text("Súper Usuario,");
                        modalPrivileges = `
            <div class="text-rol mb-4">
            <div class="d-flex align-items-center pb-3 no-gutters">
              <div class="col-xl-4 d-flex align-items-center">
                <div class="no-gutters d-flex align-items-center w-100">
                    <img src="./images/ojo-naranja.svg" alt="" class="visualize-icon mr-3">
                    <span>Visualizar<br> cambios </span>
                </div>
              </div>
              <div class="col-xl-4 d-flex align-items-center">
                <div class="no-gutters d-flex w-100">
                    <img src="./images/coment-naranja.svg" alt="" class="commentary-icon mr-3">
                    <span>Hacer<br> comentarios</span>
                </div>
              </div>
              <div class="col-xl-4 d-flex align-items-center">
                <div class="no-gutters d-flex align-items-center w-100">
                    <img src="./images/edit-naranja.svg" alt="" class="edit-icon mr-3">
                    <span>Editar</span>
                </div>
              </div>
            </div>
            <div class="d-flex align-items-center pb-3  no-gutters">
              <div class="col-xl-4 d-flex align-items-center">
                <div class="no-gutters d-flex w-100">
                    <img src="./images/recha-naranja.svg" alt="" class="reject-icon mr-3">
                    <span>Rechazar<br> cambios</span>
                </div>
              </div>
              <div class="col-xl-4 d-flex align-items-center">
                <div class="no-gutters d-flex align-items-center w-100">
                    <img src="./images/apro-naranja.svg" alt="" class="aprove-orange-icon mr-3">
                    <span>Aprobar<br> cambios</span>
                </div>
              </div>
              <div class="col-xl-4 d-flex align-items-center">
                <div class="no-gutters d-flex align-items-center w-100">
                    <img src="./images/admi-naranja.svg" alt="" class="manage-user-icon mr-3">
                    <span> Administrar<br> usuarios</span>
                </div>
              </div>
            </div>
          </div>
            `;
                        break;
                    case 2:
                        //APROBADOR
                        $(".user-rol").text("Usuario Aprobador,");
                        modalPrivileges = `
            <div class="text-rol mb-4">
            <div class="d-flex align-items-center pb-3 no-gutters">
              <div class="col-xl-4 d-flex align-items-center">
                <div class="no-gutters d-flex align-items-center w-100">
                  <img src="./images/ojo-naranja.svg" alt="" class="visualize-icon mr-3">
                  <span>Visualizar<br> cambios </span>
                </div>
              </div>
              <div class="col-xl-4 d-flex align-items-center">
                <div class="no-gutters d-flex w-100">
                  <img src="./images/coment-naranja.svg" alt="" class="commentary-icon mr-3">
                  <span>Hacer<br> comentarios</span>
                </div>
              </div>
              <div class="col-xl-4 d-flex align-items-center">
                <div class="no-gutters d-flex align-items-center w-100">
                  <img src="./images/edit-naranja.svg" alt="" class="edit-icon mr-3">
                  <span>Editar</span>
                </div>
              </div>
            </div>
            <div class="d-flex align-items-center pb-3  no-gutters">
              <div class="col-xl-4 d-flex align-items-center">
                <div class="no-gutters d-flex w-100">
                  <img src="./images/recha-naranja.svg" alt="" class="reject-icon mr-3">
                  <span>Rechazar<br> cambios</span>
                </div>
              </div>
              <div class="col-xl-4 d-flex align-items-center">
                <div class="no-gutters d-flex align-items-center w-100">
                  <img src="./images/apro-naranja.svg" alt="" class="aprove-orange-icon mr-3">
                  <span>Aprobar<br> cambios</span>
                </div>
              </div>
            </div>
          </div>
              `;
                        break;
                    case 3:
                        //EDITOR
                        $(".user-rol").text("Usuario Editor,");
                        modalPrivileges = `
            <div class="text-rol mb-4">
            <div class="d-flex align-items-center pb-3 no-gutters">
              <div class="col-xl-4 d-flex align-items-center">
                <div class="no-gutters d-flex align-items-center w-100">
                  <img src="./images/ojo-naranja.svg" alt="" class="visualize-icon mr-3">
                  <span>Visualizar<br> cambios </span>
                </div>
              </div>
              <div class="col-xl-4 d-flex align-items-center">
                <div class="no-gutters d-flex w-100">
                  <img src="./images/coment-naranja.svg" alt="" class="commentary-icon mr-3">
                  <span>Hacer<br> comentarios</span>
                </div>
              </div>
              <div class="col-xl-4 d-flex align-items-center">
                <div class="no-gutters d-flex align-items-center w-100">
                  <img src="./images/edit-naranja.svg" alt="" class="edit-icon mr-3">
                  <span>Editar</span>
                </div>
              </div>
            </div>
          </div>
              `;
                        break;
                    case 4:
                        //VISUALIZADOR
                        $(".user-rol").text("Usuario Visualizador,");
                        modalPrivileges = `
            <div class="text-rol mb-4">
            <div class="d-flex justify-content-center align-items-center no-gutters">
              <div class="d-flex align-items-center mr-3">
                <div class="no-gutters d-flex align-items-center w-100">
                  <img src="./images/ojo-naranja.svg" alt="" class="visualize-icon mr-3">
                  <span>Visualizar<br> cambios </span>
                </div>
              </div>
              <div class="d-flex align-items-center ml-3">
                <div class="no-gutters d-flex w-100">
                  <img src="./images/coment-naranja.svg" alt="" class="commentary-icon mr-3">
                  <span>Hacer<br> comentarios</span>
                </div>
              </div>
            </div>
          </div>
              `;
                        break;
                    default:
                        break;
                }
                $(".modal-body-edit-userbo").html(modalPrivileges);
                $(".modal-edit-user").modal("show");
            } else if (json.code == 422) {
                if (json.data.email) {
                    $("#error_email")
                        .text("El email ya ha sido registrado")
                        .css("color", "red");
                    $(".error").attr(
                        "src",
                        "http://www.claronetworks.openofficedospuntocero.info/images/registro/alerta.svg"
                    );
                }
            }
        }
    });
}

function getUserToUpdate(id) {
    let data = {
        id: id
    };
    $.ajax({
        type: "POST",
        data: data,
        url: "user/backoffice/get",
        beforeSend: function() {
            $("#Adm-users-BO")
                .append(`<img src="./images/loader.gif" class="loader"/>`)
                .css({
                    backgorund: "white",
                    opacity: "0.5",
                    pointerEvents: "none"
                });
        },
        success: function(result) {
            let json = JSON.parse(result);
            $.ajax({
                type: "POST",
                url: "view",
                data: { view: "edit-userbackoffice" },
                success: function(result) {
                    $("#cambio").html("");
                    $("#cambio")
                        .html(result)
                        .promise()
                        .done(function() {
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

                            //VALIDATE PASSWORD

                            $(".input-password").keyup(function() {
                                validateKeyUpPassword(
                                    $(this),
                                    $(".warning-password-text")
                                );
                            });

                            $("#edit-input-username").val(json.data.name);
                            $("#edit-input-email").val(json.data.email);

                            switch (json.data.rol.id) {
                                case 1:
                                    $("#button-root").addClass(
                                        "btn-rol-select"
                                    );
                                    cambiaracti("1");
                                    break;
                                case 2:
                                    $("#button-aprobador").addClass(
                                        "btn-rol-select"
                                    );
                                    cambiaracti("3");
                                    break;
                                case 3:
                                    $("#button-editor").addClass(
                                        "btn-rol-select"
                                    );
                                    cambiaracti("2");
                                    break;
                                case 4:
                                    $("#button-visualizador").addClass(
                                        "btn-rol-select"
                                    );
                                    cambiaracti("4");
                                    break;
                                default:
                                    break;
                            }

                            //GET THE VALUES OF THE FORM TO UPDATE A BACKOFFICE USER
                            $(".save-button-edit").click(function() {
                                let name = $("#edit-input-username").val();
                                let email = $("#edit-input-email").val();
                                if (email == json.data.email) {
                                    email = "nada@nada.com";
                                }
                                let password = "";
                                let repassword = "";
                                let rolId = $(".btn-rol-select").attr("id_rol");
                                updateDataUser(
                                    json.data.id,
                                    name,
                                    email,
                                    password,
                                    repassword,
                                    rolId
                                );
                            });
                            changeImagesRolPermissions();
                        });
                }
            });
        }
    });
}

function getUserFrontToUpdate(id) {
    let data = {
        id: id
    };

    $.ajax({
        type: "POST",
        data: data,
        url: "user/front/get",
        beforeSend: function() {
            $("#Admin-users-Front")
                .append(`<img src="./images/loader.gif" class="loader"/>`)
                .css({
                    backgorund: "white",
                    opacity: "0.5",
                    pointerEvents: "none"
                });
        },
        success: function(result) {
            let json = JSON.parse(result);
            console.log(json);
            if (json.code == 200) {
                $.ajax({
                    type: "POST",
                    data: { view: "edit-userfront" },
                    url: "view",
                    success: function(result) {
                        $("#cambio").html("");
                        $("#cambio")
                            .html(result)
                            .promise()
                            .done(function() {
                                $(".Dias").click(function() {
                                    var value = $(this).attr("value");
                                    var select = $(this).attr("id-select");
                                    $("#" + select + " > p").text(value);
                                });

                                //ELEGIR MES
                                $(".Meses").click(function() {
                                    var value = $(this).attr("value");
                                    var select = $(this).attr("id-select");

                                    //ELEGIR AÑO
                                    $("#" + select + " > p").text(value);
                                });

                                $(".Años").click(function() {
                                    var value = $(this).attr("value");
                                    var select = $(this).attr("id-select");

                                    $("#" + select + " > p").text(value);
                                });

                                //CHOSE COUNTRY
                                $(".option").click(function() {
                                    var value = $(this).attr("value");
                                    var select = $(this).attr("id-select");

                                    $("#" + select + " > p").text(value);
                                });

                                //VALIDATE PASSWORD
                                $(".input-password").keyup(function() {
                                    validateKeyUpPassword(
                                        $(this),
                                        $(".caracteres-min")
                                    );
                                });

                                $("#edit-front-input-username").val(
                                    json.data.name
                                );
                                $("#edit-front-input-email").val(
                                    json.data.email
                                );
                                switch (json.data.gender) {
                                    case "M":
                                        $("#mujer").prop("checked", false);
                                        $("#hombre").prop("checked", true);
                                        break;
                                    case "F":
                                        $("#mujer").prop("checked", true);
                                        $("#hombre").prop("checked", false);
                                        break;
                                    default:
                                        break;
                                }
                                // COUNTRY
                                let country = getNameCountry(
                                    json.data.country_id
                                );
                                let countryName = country.countryName;
                                $(".SeleccionPaisLista").text(countryName);

                                if (json.data.birthday) {
                                    let userBirthday = json.data.birthday.split(
                                        "-"
                                    );
                                    let year = userBirthday[0];
                                    let month = userBirthday[1];
                                    let day = userBirthday[2];
                                    $(".SeleccionDiaLista").text(day);
                                    $(".SeleccionMesLista").text(month);
                                    $(".SeleccionAñoLista").text(year);
                                }

                                // SEND DATA'S FRONT USER
                                $(".btn-save-data-front").click(function() {
                                    let id = json.data.id;

                                    let name = $(
                                        "#edit-front-input-username"
                                    ).val();
                                    let email = $(
                                        "#edit-front-input-email"
                                    ).val();

                                    // PASSWORD TO SEND
                                    let passwordHash = CryptoJS.SHA1(
                                        $("#edit-user-front-password").val()
                                    );

                                    let passwordResult = CryptoJS.enc.Hex.stringify(
                                        passwordHash
                                    );

                                    let confirmPasswordHash = CryptoJS.SHA1(
                                        $("#edit-user-front-password").val()
                                    );

                                    let confirmPasswordResult = CryptoJS.enc.Hex.stringify(
                                        confirmPasswordHash
                                    );

                                    /*let password = $(
                                        "#edit-user-front-password"
                                    ).val();*/

                                    if (passwordResult == "") {
                                        passwordResult = 0;
                                    }
                                    /*let rePassword = $(
                                        "#edit-user-front-repassword"
                                    ).val();*/

                                    if (confirmPasswordResult == "") {
                                        confirmPasswordResult = 0;
                                    }

                                    let day = $(".SeleccionDiaLista").text();
                                    let month = $(".SeleccionMesLista").text();
                                    let year = $(".SeleccionAñoLista").text();
                                    let date = year + "-" + month + "-" + day;
                                    if (
                                        day == "Día" &&
                                        month == "Mes" &&
                                        year == "Año"
                                    ) {
                                        $(".error_birthday")
                                            .text(
                                                "La fecha debe estar completa"
                                            )
                                            .css("color", "red");
                                        return false;
                                    }

                                    let genderMale = $("#hombre");
                                    let genderFemale = $("#mujer");
                                    var gender;
                                    if (genderMale.is(":checked")) {
                                        gender = "M";
                                    } else if (genderFemale.is(":checked")) {
                                        gender = "F";
                                    }

                                    let country = $(
                                        ".SeleccionPaisLista"
                                    ).text();

                                    updateDataUserFront(
                                        id,
                                        name,
                                        email,
                                        gender,
                                        date,
                                        country,
                                        passwordResult,
                                        confirmPasswordResult
                                    );
                                });
                            });
                    }
                });
            }
        }
    });
}

function updateDataUserFront(
    id,
    name,
    email,
    gender,
    date,
    country,
    password,
    passwordConfirm
) {
    let data = {
        id_user: id,
        name: name,
        email: email,
        gender: gender,
        birthday: date,
        country: country,
        password: password,
        password_confirm: passwordConfirm
    };
    console.log(data);
    $.ajax({
        type: "POST",
        data: data,
        url: "user/front/update",
        beforeSend: function() {
            $(".edit-userfront-content")
                .append(`<img src="./images/loader.gif" class="loader"/>`)
                .css({
                    backgorund: "white",
                    opacity: "0.5",
                    pointerEvents: "none"
                });
        },
        success: function(result) {
            let json = JSON.parse(result);
            console.log(json);
            $(".loader").remove();
            $(".edit-userfront-content").css({
                backgorund: "white",
                opacity: "1",
                pointerEvents: "all"
            });
            if (json.code == 200) {
                $(".modal-edit-user-front").modal("show");
            }
        }
    });
}

function deleteUserBO(id) {
    let data = {
        id_admin_user: id
    };

    $.ajax({
        type: "POST",
        data: data,
        url: "user/backoffice/delete",
        beforeSend: function() {
            $("#Adm-users-BO")
                .append(`<img src="./images/loader.gif" class="loader"/>`)
                .css({
                    backgorund: "white",
                    opacity: "0.5",
                    pointerEvents: "none"
                });
        },
        success: function(result) {
            let json = JSON.parse(result);
            console.log(json);
            $(".loader").remove();
            $("#Adm-users-BO").css({
                backgorund: "white",
                opacity: "1",
                pointerEvents: "all"
            });
            if (json.code == 200) {
                localStorage.setItem("usersBO", JSON.stringify(json.data));
                //let users = JSON.parse(localStorage.getItem("usersBO"));
                let users = json.data;
                let userBO = "";
                users.forEach(user => {
                    let rol = changeNameRol(user.rol_id);

                    userBO += `
          <div class="pd-5 username-bo">${user.name}</div>
          <div class="pd-10">${rol}</div>
          <div class='justify-content-center' _id="${user.id}">
            <!--Acciones-->
            <input type='image' src='./images/ver-acti.svg' class='ml-3 btn-focus view-user-icon images' id='visual'></input>
            <input type='image' src='./images/edit-ac.svg' class='ml-3 btn-focus images edit-user-icon'></input>
            <input type='image' src='./images/eliminar-acti.svg' class='ml-3 btn-focus images delete-userbo-icon' _username="${user.name}" ></input>
          </div>
          `;
                });
                $(".users-backoffice-table").html(`
        <header>
        <div class="text-title ">Usuario</div>
        </header>
        <section>
          <div class="text-title ">Rol</div>
        </section>
        <aside>
          <div class="text-title ">Acciones</div>
        </aside>
        ${userBO}
        `);
                $(".modal-delete-user").modal("hide");
                showModalDeleteUserBO();
                //showUserBO();
            }
        }
    });
}

function deleteUserFront(id) {
    let data = {
        id_user: id
    };

    $.ajax({
        type: "POST",
        data: data,
        url: "user/front/delete",
        beforeSend: function() {
            $("#Admin-users-Front")
                .append(`<img src="./images/loader.gif" class="loader"/>`)
                .css({
                    backgorund: "white",
                    opacity: "0.5",
                    pointerEvents: "none"
                });
        },
        success: function(result) {
            let json = JSON.parse(result);
            console.log(json);
            $(".loader").remove();
            $("#Admin-users-Front").css({
                backgorund: "white",
                opacity: "1",
                pointerEvents: "all"
            });
            if (json.code == 200) {
                localStorage.setItem("usersFront", JSON.stringify(json.data));
                //let users = JSON.parse(localStorage.getItem("usersFront"));
                let users = json.data;
                let userBO = "";
                users.forEach(user => {
                    userBO += `
          <div class="pd-5">${user.name}</div>
          <div class='justify-content-center' _id="${user.id}">
            <!--Acciones-->
            <input type='image' src='./images/ver-acti.svg' class='ml-3 btn-focus show-user-front-icon images' id='visual'></input>
            <input type='image' src='./images/edit-ac.svg' class='ml-3 btn-focus images edit-user-front'></input>
            <input type='image' src='./images/eliminar-acti.svg' class='ml-3 btn-focus images delete-user-front-icon' _username="${user.name}"></input>
          </div>
          `;
                });
                $(".users-front-table").html(`
        <header>
          <div class="text-title">Usuario</div>
        </header>
        <section>
          <div class="text-title">Acciones</div>
        </section>
        ${userBO}
        `);
                $(".modal-delete-user-front").modal("hide");
                //showModalDeleteUserFront();
                //showUserFront();
            }
        }
    });
}

function getUserFront(id) {
    let data = {
        id: id
    };

    $.ajax({
        type: "POST",
        data: data,
        url: "user/front/get",
        beforeSend: function() {
            $("#Admin-users-Front")
                .append(`<img src="./images/loader.gif" class="loader"/>`)
                .css({
                    backgorund: "white",
                    opacity: "0.5",
                    pointerEvents: "none"
                });
        },
        success: function(result) {
            let json = JSON.parse(result);
            if (json.code == 200) {
                $.ajax({
                    type: "POST",
                    url: "view",
                    data: { view: "view-userfront" },
                    success: function(result) {
                        $("#cambio").html("");
                        $("#cambio")
                            .html(result)
                            .promise()
                            .done(function() {
                                $(".username-front").text(json.data.name);
                                $(".email-front").text(json.data.email);
                                let country = getNameCountry(
                                    json.data.country_id
                                );
                                let countryName = country.countryName;
                                let countryImage = country.countryImage;
                                $(".section-pais").append(`
                      <label class=" pl-5 pais"> <img src="${countryImage}" class="Icon_paises " /><span class="padding-pais user-front-country">${countryName}</span> </label>
                      `);
                                $(".user-front-birthday").text(
                                    json.data.birthday
                                );

                                let gender = getNameGender(json.data.gender);
                                let genderName = gender.genderName;
                                let genderImage = gender.genderImage;
                                $(".section-sexo").append(`
                      <label for="mujer" id="mujerestado" class="mujer-estilo1 textp-general pl-4">
                      <img id="women" src="${genderImage}" /> ${genderName}</label>
                      `);
                            });
                    }
                });
            }
        }
    });
}

function sendEmailResetPassword(input) {
    let email = input.val();

    let data = {
        email: email
    };

    $.ajax({
        data: data,
        url: "reset",
        type: "POST",
        beforeSend: function() {
            const loader = `
      <div class="loader-container">
        <img src="./images/loader.gif" class="loader" alt="">
      </div>
      `;
            let formContainer = $(".fondolog-reco");
            formContainer.prepend(loader);
        },
        success: function(result) {
            console.log(result);
            let json = JSON.parse(result);
            $(".loader-container").remove();
            if (json.code == 201) {
                $("#modal-send-email").modal("show");
            }
        }
    });
}

export {
    sendUserEmail,
    sendNewPassword,
    updateDataUser,
    registerUser,
    getAllUsersBO,
    getUser,
    getAllUserFront,
    getUserToUpdate,
    deleteUserBO,
    getUserFront,
    deleteUserFront,
    getUserFrontToUpdate,
    sendEmailResetPassword
};
