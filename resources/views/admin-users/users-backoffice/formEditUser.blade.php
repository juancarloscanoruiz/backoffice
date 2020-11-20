<div id="general">
    <!--Div para cambio-->
    <div class="col-xl-6 trans10 mx-auto title-altauser tamaño-edi ">
        <div class="pr-4 pl-4  pt-2 pb-2"><strong class=""> EDITAR DATOS DE USUARIO</strong></div>
    <img src="./images/equis.svg" alt="" class="equis1 shadow closeViewBO">
      </div>
    <div class="col-xl-6 trans10 shadow mx-auto tamaño edit-userbo-content position-relative">
      <form class="no-gutters">
        <div class="col-xl-11 mx-auto">

          <input id="edit-input-username" class="insert-data a-text-medium-brownish mb-2" type="text " value="" placeholder="Nombre">

          </input>
          <input id="edit-input-email" class="insert-data input-email a-text-medium-brownish" type="text " value="" placeholder="Correo "></input>
          <div class="d-flex align-items-center mt-2 mb-2">
            <p class="a-text-medium-orange mt-0 mb-0 warning-email-text" id="error_email">
              Correo válido
            </p>
            <img src="http://www.claronetworks.openofficedospuntocero.info/images/registro/alerta.svg" class="error ml-2" />
          </div>

          <!--<div class="pt-0 mt-1">
            <input id="edit-input-password" class="insert-data a-text-medium-brownish input-password" type="password" id="login-password" name="login-password" placeholder="Asignar nueva contraseña" autocomplete="off" />
            <div class="d-flex align-items-center mb-2">
              <p class="a-text-medium-orange mt-1 mb-0 warning-password-text">
                8 caractéres mínimo
              </p>

              <img src="http://www.claronetworks.openofficedospuntocero.info/images/registro/listo.svg" class="listo ml-2 mt-1" />
            </div>

            <input id="edit-input-repassword" class="insert-data a-text-medium-brownish pt-2 mb-4" type="password" id="login-password" name="login-password" placeholder="Confirmar nueva contraseña" autocomplete="off" />

          </div>-->
          <div class="mt-4 mb-2 a-text-medium-brownish d-flex flex-column mx-auto">

            <div class="d-flex align-items-center w-100">
              <span class="mr-2">Rol</span>
              <div class="alineacion buttons-rol-container">
                <button id="button-visualizador" type="button" class="a-text-medium-brownish button-rol bt-rol-register btn-rol-all btn-rol ml-2" rel='User-Visua' id_button="4" id_rol="4">Usuario<br> Visualizador</button>
                <button id="button-editor" type="button" class="a-text-medium-brownish button-rol bt-rol-register btn-rol-all btn-rol ml-2" rel='User-Edit' id_button="2" id_rol="3">Usuario<br> Editor</button>
                <button id="button-aprobador" type="button" class="a-text-medium-brownish button-rol bt-rol-register btn-rol-all btn-rol  ml-2" rel='User-Apro' id_button="3" id_rol="2">Usuario<br> Aprobador</button>
                <button id="button-root" type="button" class="a-text-medium-brownish btn-rol button-rol ml-2" id_button="1" id_rol="1" rel='User-Raiz'>Súper<br>Usuario </button>
              </div>
            </div>

            <div class="no-gutters">
              <!--RAÍZ-->
              <div class="text-rol col-11 mx-auto mt-4" id="User-Raiz" hidden="true">
                <div class="d-flex mb-3 justify-content-between">
                  <div class="col-xl-4 d-flex align-items-center">
                    <div class="no-gutters d-flex w-100">
                      <div class="col-6 d-flex align-items-center justify-content-center">
                        <img src="./images/ojo-naranja.svg" alt="" class="img-tam">
                      </div>
                      <div class="col-6 d-flex align-items-center">
                        <span>Visualizar<br> cambios </span>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-4 d-flex align-items-center">
                    <div class="no-gutters d-flex w-100">
                      <div class="col-6 d-flex align-items-center justify-content-center">
                        <img src="./images/coment-naranja.svg" alt="" class="img-tam">
                      </div>
                      <div class="col-6 d-flex align-items-center">
                        <span>Hacer<br> comentarios</span>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-4 d-flex align-items-center">
                    <div class="no-gutters d-flex w-100">
                      <div class="col-6 d-flex align-items-center justify-content-center">
                        <img src="./images/edit-naranja.svg" alt="" class="img-tam">
                      </div>
                      <div class="col-6 d-flex align-items-center">
                        <span>Editar</span>
                      </div>
                    </div>

                  </div>

                </div>
                <div class="d-flex justify-content-between">
                  <div class="col-xl-4 d-flex align-items-center">
                    <div class="no-gutters d-flex w-100">
                      <div class="col-6 d-flex align-items-center justify-content-center">
                        <img src="./images/recha-naranja.svg" alt="" class="img-tam">
                      </div>
                      <div class="col-6 d-flex align-items-center">
                        <span>Rechazar<br> cambios</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 d-flex align-items-center">
                    <div class="no-gutters d-flex align-items-center w-100">
                      <div class="col-6 d-flex align-items-center justify-content-center">
                        <img src="./images/apro-naranja.svg" alt="" class="img-tam">
                      </div>
                      <div class="col-6 d-flex align-items-center">
                        <span>Aprobar<br> cambios</span>
                      </div>
                    </div>

                  </div>
                  <div class="col-xl-4 d-flex align-items-center">
                    <div class="no-gutters d-flex align-items-center w-100">
                      <div class="col-6 d-flex align-items-center justify-content-center">
                        <img src="./images/admi-naranja.svg" alt="" class="img-tam">
                      </div>
                      <div class="col-6 d-flex align-items-center">
                        <span> Administrar<br> usuarios</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--APROBADOR-->
            <div class="no-gutters">
              <div class="text-rol col-11 mx-auto mt-4" id="User-Apro" hidden="true">
                <div class="d-flex mb-3 justify-content-between">
                  <div class="col-xl-4 d-flex align-items-center">
                    <div class="no-gutters d-flex w-100">
                      <div class="col-6 d-flex align-items-center justify-content-center">
                        <img src="./images/ojo-naranja.svg" alt="" class="img-tam">
                      </div>
                      <div class="col-6 d-flex align-items-center">
                        <span class="text-rol">Visualizar<br> cambios </span>
                      </div>
                    </div>

                  </div>

                  <div class="col-xl-4 d-flex align-items-center">
                    <div class="no-gutters d-flex w-100">
                      <div class="col-6 d-flex align-items-center justify-content-center">
                        <img src="./images/coment-naranja.svg" alt="" class="img-tam">
                      </div>
                      <div class="col-6 d-flex align-items-center">
                        <span class="text-rol">Hacer<br> comentarios</span>
                      </div>
                    </div>

                  </div>
                  <div class="col-xl-4 d-flex align-items-center">
                    <div class="no-gutters d-flex w-100">
                      <div class="col-6 d-flex align-items-center justify-content-center">
                        <img src="./images/edit-naranja.svg" alt="" class="img-tam">
                      </div>
                      <div class="col-6 d-flex align-items-center">
                        <span class="text-rol">Editar</span>
                      </div>
                    </div>

                  </div>

                </div>
                <div class="d-flex justify-content-between">
                  <div class="col-xl-4 d-flex align-items-center">
                    <div class="no-gutters d-flex w-100">
                      <div class="col-6 d-flex align-items-center justify-content-center">
                        <img src="./images/recha-naranja.svg" alt="" class="img-tam">
                      </div>
                      <div class="col-6 d-flex align-items-center">
                        <span class="text-rol">Rechazar<br> cambios</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 d-flex align-items-center">
                    <div class="no-gutters d-flex align-items-center w-100">
                      <div class="col-6 d-flex align-items-center justify-content-center">
                        <img src="./images/apro-naranja.svg" alt="" class="img-tam">
                      </div>
                      <div class="col-6 d-flex align-items-center">
                        <span class="text-rol">Aprobar<br> cambios</span>
                      </div>
                    </div>

                  </div>
                  <div class="col-xl-4 d-flex align-items-center">
                    <div class="no-gutters d-flex align-items-center w-100">
                      <div class="col-6 d-flex align-items-center justify-content-center">
                        <img src="./images/gris-admi.svg" alt="" class="img-tam">
                      </div>
                      <div class="col-6 d-flex align-items-center">
                        <span class="text-rol-inac">Administrar<br> usuarios</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--EDITOR-->
            <div class="no-gutters">
              <div class="text-rol col-11 mx-auto mt-4" id="User-Edit" hidden="true">
                <div class="d-flex mb-3 justify-content-between">
                  <div class="col-xl-4 d-flex align-items-center">
                    <div class="no-gutters d-flex w-100">
                      <div class="col-6 d-flex align-items-center justify-content-center">
                        <img src="./images/ojo-naranja.svg" alt="" class="img-tam">
                      </div>
                      <div class="col-6 d-flex align-items-center">
                        <span class="text-rol">Visualizar<br> cambios </span>
                      </div>
                    </div>

                  </div>

                  <div class="col-xl-4 d-flex align-items-center">
                    <div class="no-gutters d-flex w-100">
                      <div class="col-6 text-center d-flex align-items-center justify-content-center">
                        <img src="./images/coment-naranja.svg" alt="" class="img-tam">
                      </div>
                      <div class="col-6 d-flex align-items-center">
                        <span class="text-rol">Hacer<br> comentarios</span>
                      </div>
                    </div>

                  </div>
                  <div class="col-xl-4 d-flex align-items-center">
                    <div class="no-gutters d-flex w-100">
                      <div class="col-6 text-center d-flex align-items-center justify-content-center">
                        <img src="./images/edit-naranja.svg" alt="" class="img-tam">
                      </div>
                      <div class="col-6 d-flex align-items-center">
                        <span class="text-rol">Editar</span>
                      </div>
                    </div>

                  </div>

                </div>
                <div class="d-flex justify-content-between">
                  <div class="col-xl-4 d-flex align-items-center">
                    <div class="no-gutters d-flex w-100">
                      <div class="col-6 text-center d-flex align-items-center justify-content-center">
                        <img src="./images/recha-inac.svg" alt="" class="img-tam">
                      </div>
                      <div class="col-6 d-flex align-items-center">
                        <span class="text-rol-inac">Rechazar<br> cambios</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 d-flex align-items-center">
                    <div class="no-gutters d-flex align-items-center w-100">
                      <div class="col-6 text-center d-flex align-items-center justify-content-center">
                        <img src="./images/apro-inac.svg" alt="" class="img-tam">
                      </div>
                      <div class="col-6 d-flex align-items-center">
                        <span class="text-rol-inac">Aprobar<br> cambios</span>
                      </div>
                    </div>

                  </div>
                  <div class="col-xl-4 d-flex align-items-center">
                    <div class="no-gutters d-flex align-items-center w-100">
                      <div class="col-6 text-center d-flex align-items-center justify-content-center">
                        <img src="./images/gris-admi.svg" alt="" class="img-tam">
                      </div>
                      <div class="col-6 d-flex align-items-center">
                        <span class="text-rol-inac">Administrar<br> usuarios</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--VISUALIZADOR-->
            <div class="no-gutters">
              <div class="text-rol col-11 mx-auto mt-4" id="User-Visua" hidden="true">
                <div class="d-flex mb-3 justify-content-between">
                  <div class="col-xl-4 d-flex align-items-center">
                    <div class="no-gutters d-flex w-100">
                      <div class="col-6 d-flex align-items-center justify-content-center">
                        <img src="./images/ojo-naranja.svg" alt="" class="img-tam">
                      </div>
                      <div class="col-6 d-flex align-items-center">
                        <span class="text-rol">Visualizar<br> cambios </span>
                      </div>
                    </div>

                  </div>

                  <div class="col-xl-4 d-flex align-items-center">
                    <div class="no-gutters d-flex w-100">
                      <div class="col-6 d-flex align-items-center justify-content-center">
                        <img src="./images/coment-naranja.svg" alt="" class="img-tam">
                      </div>
                      <div class="col-6 d-flex align-items-center">
                        <span class="text-rol">Hacer<br> comentarios</span>
                      </div>
                    </div>

                  </div>
                  <div class="col-xl-4 d-flex align-items-center">
                    <div class="no-gutters d-flex w-100">
                      <div class="col-6 d-flex align-items-center justify-content-center">
                        <img src="./images/lapiz-inac.svg" alt="" class="img-tam">
                      </div>
                      <div class="col-6 d-flex align-items-center">
                        <span class="text-rol-inac">Editar</span>
                      </div>
                    </div>

                  </div>

                </div>
                <div class="d-flex justify-content-between">
                  <div class="col-xl-4 d-flex align-items-center">
                    <div class="no-gutters d-flex w-100">
                      <div class="col-6 d-flex align-items-center justify-content-center">
                        <img src="./images/recha-inac.svg" alt="" class="img-tam">
                      </div>
                      <div class="col-6 d-flex align-items-center">
                        <span class="text-rol-inac">Rechazar<br> cambios</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 d-flex align-items-center">
                    <div class="no-gutters d-flex align-items-center w-100">
                      <div class="col-6 d-flex align-items-center justify-content-center">
                        <img src="./images/apro-inac.svg" alt="" class="img-tam">
                      </div>
                      <div class="col-6 d-flex align-items-center">
                        <span class="text-rol-inac">Aprobar<br> cambios</span>
                      </div>
                    </div>

                  </div>
                  <div class="col-xl-4 d-flex align-items-center">
                    <div class="no-gutters d-flex align-items-center w-100">
                      <div class="col-6 d-flex align-items-center justify-content-center">
                        <img src="./images/gris-admi.svg" alt="" class="img-tam">
                      </div>
                      <div class="col-6 d-flex align-items-center">
                        <span class="text-rol-inac">Administrar<br> usuarios</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-12 align-item-center mt-5 pb-5 centro space">
            <button type="button" class="a-button-pill-teal-outline a-button-pill-padding  a-text-bold-teal mr-4 closeViewBO">CANCELAR</button>
            <button type="button" class="a-button-pill-teal-primary a-button-pill-padding  save-button-edit a-text-bold-white">GUARDAR</button>
          </div>
      </form>


    </div>

  </div>
  <!--modal regis-->
  <div class="modal show modal-edit-user" id="abrirsave" role="dialog">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content modal-regis-listo ">
        <div class="modal-body  ">
          <span class="a-text-medium  modal-regis-text modal-edit-username"></span>
          <p class="modal-regis-text1 pt-4 mb-4">Se ha registrado con los siguientes privilegios:</p>
          <div class="text-rol modal-body-edit-userbo">

          </div>
        </div>
        <div class="text-center">
          <button type="button" class="btn-si text-si" id="modal-button" data-dismiss="modal">ACEPTAR</button>
        </div>
      </div>
    </div>
  </div>
