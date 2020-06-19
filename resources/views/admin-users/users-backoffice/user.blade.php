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
                            <p class="insert-data pb-2 pt-2 show-username"><!--${json.data.name}--></p>
                        </div>
                        <div>
                            <p class="insert-data  input-email  mt-4 pt-2 pb-2 show-email">
                              <!--${json.data.email}-->
                            </p>
                        </div></input>
                        <div>
                            <p class="insert-data input-password mt-4 pt-2 pb-2" type="password" id="login-password" name="login-password" autocomplete="off">***********</p>
                        </div>

                        </input>

                        <p class="mt-4 ml-2">Rol de usuario</p>
                        <button type="button" class=" btn-succes text-sucess mb-4 show-rol" id="login-button">
                          <!--${rol}-->
                        </button>
                    </form>
                    <br>
                </div>

            </div>
        </div>
      </div>
