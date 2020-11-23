
    <div id="register-userbo-view">
      <!--Div para cambio-->
      <div class="register-user-content mb-4">
        <div class="col-xl-6 trans10 mx-auto title-altauser tamaño-alta1 ">
          <!--Inicio para tarjeta-->
          <img src="./images/equis.svg" alt="" class="equis shadow closeViewBO" />
          <div class="pr-4 pl-3 ml-1 pt-2 pb-2"><strong class=""> ALTA DE DATOS DE USUARIO</strong></div>
        </div>
        <div class="col-xl-6 trans10 shadow mx-auto tamaño-alta">
          <div class="col-xl-12 mx-auto px-3 pt-3">
            <form>
              <input class="insert-data input-username a-text-medium-brownish pt-2 mb-2" id="name-user-bo" type="text" placeholder="Nombre del usuario"></input>
              <input class="insert-data input-email a-text-medium-brownish pt-2 " type="text" id="email-user-bo" placeholder="Correo"></input>
              <div class="d-flex align-items-center mt-2">
                <p class="a-text-medium-orange mt-0 mb-0 warning-email-text" id="error_email">
                  Correo válido
                </p>
                <img src="http://www.claronetworks.openofficedospuntocero.info/images/registro/alerta.svg" class="error ml-2" />
              </div>


              <!--<div class="pt-0 mt-0">
                <input class="insert-data input-password texto-general pt-2 mt-0 " type="password" id="password-user-bo" name="login-password" placeholder=" Contraseña" autocomplete="off" />
                <p class="caracteres-min mt-1 ml-2">
                  8 caractéres mínimo
                  <img src="./images/registro/listo.svg" class="listo" />
                </p>
              </div>-->
              <div class="pl-2 pr-2 mt-4 pb-4 a-text-medium-brownish d-flex flex-column mx-auto">
                <div class="d-flex align-items-center w-100">
                  <span class="mr-2">Rol</span>
                  <div class="alineacion buttons-rol-container">
                    <button id="button-visualizador" type="button" class="btn-rol-select a-text-medium-brownish button-rol btn-rol ml-2" rel='User-Visua' id_button="4" id_rol="4">Usuario<br> Visualizador</button>
                    <button id="button-editor" type="button" class="a-text-medium-brownish button-rol btn-rol ml-2" rel='User-Edit' id_button="2" id_rol="3">Usuario<br> Editor</button>
                    <button id="button-aprobador" type="button" class="a-text-medium-brownish button-rol btn-rol  ml-2" rel='User-Apro' id_button="3" id_rol="2">Usuario<br> Aprobador</button>
                    <button id="button-root" type="button" class="a-text-medium-brownish btn-rol button-rol ml-2" id_button="1" id_rol="1" rel='User-Raiz'>Súper<br> Usuario </button>
                  </div>
                </div>

                <div class="no-gutters">
                  <!--RAÍZ-->
                  <div class="text-rol col-11 mx-auto mt-4" id="User-Raiz" hidden="true">
                    <div class="d-flex mb-3 justify-content-between">
                      <div class="col-xl-4 d-flex align-items-center">
                        <div class="no-gutters d-flex w-100">
                          <div class="col-6 text-center">
                            <img src="./images/ojo-naranja.svg" alt="" class="img-tam">
                          </div>
                          <div class="col-6 d-flex align-items-center">
                            <span>Visualizar<br> cambios </span>
                          </div>
                        </div>

                      </div>

                      <div class="col-xl-4 d-flex align-items-center">
                        <div class="no-gutters d-flex w-100">
                          <div class="col-6 text-center">
                            <img src="./images/coment-naranja.svg" alt="" class="img-tam">
                          </div>
                          <div class="col-6 d-flex align-items-center">
                            <span>Hacer<br> comentarios</span>
                          </div>
                        </div>

                      </div>
                      <div class="col-xl-4 d-flex align-items-center">
                        <div class="no-gutters d-flex w-100">
                          <div class="col-6 text-center">
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
                          <div class="col-6 text-center">
                            <img src="./images/recha-naranja.svg" alt="" class="img-tam">
                          </div>
                          <div class="col-6 d-flex align-items-center">
                            <span>Rechazar<br> cambios</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-4 d-flex align-items-center">
                        <div class="no-gutters d-flex align-items-center w-100">
                          <div class="col-6 text-center">
                            <img src="./images/apro-naranja.svg" alt="" class="img-tam">
                          </div>
                          <div class="col-6 d-flex align-items-center">
                            <span>Aprobar<br> cambios</span>
                          </div>
                        </div>

                      </div>
                      <div class="col-xl-4 d-flex align-items-center">
                        <div class="no-gutters d-flex align-items-center w-100">
                          <div class="col-6 text-center">
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
                          <div class="col-6 text-center">
                            <img src="./images/ojo-naranja.svg" alt="" class="img-tam">
                          </div>
                          <div class="col-6 d-flex align-items-center">
                            <span class="text-rol">Visualizar<br> cambios </span>
                          </div>
                        </div>

                      </div>

                      <div class="col-xl-4 d-flex align-items-center">
                        <div class="no-gutters d-flex w-100">
                          <div class="col-6 text-center">
                            <img src="./images/coment-naranja.svg" alt="" class="img-tam">
                          </div>
                          <div class="col-6 d-flex align-items-center">
                            <span class="text-rol">Hacer<br> comentarios</span>
                          </div>
                        </div>

                      </div>
                      <div class="col-xl-4 d-flex align-items-center">
                        <div class="no-gutters d-flex w-100">
                          <div class="col-6 text-center">
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
                          <div class="col-6 text-center">
                            <img src="./images/recha-naranja.svg" alt="" class="img-tam">
                          </div>
                          <div class="col-6 d-flex align-items-center">
                            <span class="text-rol">Rechazar<br> cambios</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-4 d-flex align-items-center">
                        <div class="no-gutters d-flex align-items-center w-100">
                          <div class="col-6 text-center">
                            <img src="./images/apro-naranja.svg" alt="" class="img-tam">
                          </div>
                          <div class="col-6 d-flex align-items-center">
                            <span class="text-rol">Aprobar<br> cambios</span>
                          </div>
                        </div>

                      </div>
                      <div class="col-xl-4 d-flex align-items-center">
                        <div class="no-gutters d-flex align-items-center w-100">
                          <div class="col-6 text-center">
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
                          <div class="col-6 text-center">
                            <img src="./images/ojo-naranja.svg" alt="" class="img-tam">
                          </div>
                          <div class="col-6 d-flex align-items-center">
                            <span class="text-rol">Visualizar<br> cambios </span>
                          </div>
                        </div>

                      </div>

                      <div class="col-xl-4 d-flex align-items-center">
                        <div class="no-gutters d-flex w-100">
                          <div class="col-6 text-center">
                            <img src="./images/coment-naranja.svg" alt="" class="img-tam">
                          </div>
                          <div class="col-6 d-flex align-items-center">
                            <span class="text-rol">Hacer<br> comentarios</span>
                          </div>
                        </div>

                      </div>
                      <div class="col-xl-4 d-flex align-items-center">
                        <div class="no-gutters d-flex w-100">
                          <div class="col-6 text-center">
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
                          <div class="col-6 text-center">
                            <img src="./images/recha-inac.svg" alt="" class="img-tam">
                          </div>
                          <div class="col-6 d-flex align-items-center">
                            <span class="text-rol-inac">Rechazar<br> cambios</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-4 d-flex align-items-center">
                        <div class="no-gutters d-flex align-items-center w-100">
                          <div class="col-6 text-center">
                            <img src="./images/apro-inac.svg" alt="" class="img-tam">
                          </div>
                          <div class="col-6 d-flex align-items-center">
                            <span class="text-rol-inac">Aprobar<br> cambios</span>
                          </div>
                        </div>

                      </div>
                      <div class="col-xl-4 d-flex align-items-center">
                        <div class="no-gutters d-flex align-items-center w-100">
                          <div class="col-6 text-center">
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
                  <div class="text-rol col-11 mx-auto mt-4" id="User-Visua">
                    <div class="d-flex mb-3 justify-content-between">
                      <div class="col-xl-4 d-flex align-items-center">
                        <div class="no-gutters d-flex w-100">
                          <div class="col-6 text-center">
                            <img src="./images/ojo-naranja.svg" alt="" class="img-tam">
                          </div>
                          <div class="col-6 d-flex align-items-center">
                            <span class="text-rol">Visualizar<br> cambios </span>
                          </div>
                        </div>

                      </div>

                      <div class="col-xl-4 d-flex align-items-center">
                        <div class="no-gutters d-flex w-100">
                          <div class="col-6 text-center">
                            <img src="./images/coment-naranja.svg" alt="" class="img-tam">
                          </div>
                          <div class="col-6 d-flex align-items-center">
                            <span class="text-rol">Hacer<br> comentarios</span>
                          </div>
                        </div>

                      </div>
                      <div class="col-xl-4 d-flex align-items-center">
                        <div class="no-gutters d-flex w-100">
                          <div class="col-6 text-center">
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
                          <div class="col-6 text-center">
                            <img src="./images/recha-inac.svg" alt="" class="img-tam">
                          </div>
                          <div class="col-6 d-flex align-items-center">
                            <span class="text-rol-inac">Rechazar<br> cambios</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-4 d-flex align-items-center">
                        <div class="no-gutters d-flex align-items-center w-100">
                          <div class="col-6 text-center">
                            <img src="./images/apro-inac.svg" alt="" class="img-tam">
                          </div>
                          <div class="col-6 d-flex align-items-center">
                            <span class="text-rol-inac">Aprobar<br> cambios</span>
                          </div>
                        </div>

                      </div>
                      <div class="col-xl-4 d-flex align-items-center">
                        <div class="no-gutters d-flex align-items-center w-100">
                          <div class="col-6 text-center">
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

            </form>
            <div class="pb-4 text-center">
              <button type="button" class="register-user-button a-button-pill-teal-primary a-button-pill-padding a-text-bold-white">REGISTRAR</button>
            </div>

          </div>
        </div>
        <div class="col-xl-8 position-btn-regis  mx-auto ">

          <!--<button type="button" class="btn-regis text-public register-user-button">REGISTRAR</button>-->
        </div>
      </div>
      <!--modal regis-->
      <div class=" modal show modal-newuser-bo" id=" abrirListo" role="dialog">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content modal-regis-listo p-5">
            <div class="modal-body modal-body-register-userbo p-0">
              <h3 class="h3 a-text-bold-brownish modal-register-username mb-0 pb-4"></h3>
              <p class="a-text-medium-brownish mb-4">Ha sido registrado como <span class="a-text-bold-brownish user-rol"></span> ahora puede:</p>
              <div class="modal-user-privileges">

              </div>
            </div>
            <div class=" mb-4 text-center">
              <button type="button" class="a-button-pill-teal-primary a-button-pill-fixed closeViewBO" id="modal-button" data-dismiss="modal"><span class="a-text-bold-white">ACEPTAR</span></button>
            </div>
          </div>
        </div>
      </div>

    </div>

