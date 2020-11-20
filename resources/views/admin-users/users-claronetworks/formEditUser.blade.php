<div id="edit-front">
    <!--Div para cambio-->
    <div class="col-xl-7 trans10 mx-auto title-altauser tamaño-edi ">
        <div class="pr-4 pl-3 pt-2 pb-2"><strong class=""> EDITAR DATOS DE USUARIO DEL FRONT</strong></div>
        <img src="./images/equis.svg" alt="" class="equis2 shadow closeViewFront">
      </div>
    <div class="col-xl-7 trans10 mx-auto edit-userfront-content">
      <div class="container shadow tamaño ">

        <div class="bg-white ">

          <div class=" col-xl-12 mx-auto mt-xl-1 ">
            <form>
              <input id="edit-front-input-username" class="insert-data a-text-medium-brownish mb-4 " type="text " value="" placeholder="" disabled></input>
              <input id="edit-front-input-email" class="insert-data a-text-medium-brownish input-email mb-4  " type="text " value="" placeholder="" disabled></input>
              <input class="insert-data input-password a-text-medium-brownish" type="password" id="edit-user-front-password" name="login-password" placeholder="Contraseña" autocomplete="off" />
              <div class="d-flex align-items-center mb-2">
                <p class="a-text-medium-orange mt-1 mb-0 caracteres-min">
                  8 caractéres mínimo
                </p>

                <img src="http://www.claronetworks.openofficedospuntocero.info/images/registro/listo.svg" class="listo ml-2 mt-1" />
              </div>
              <div class="position-relative mb-4">
                <input class="insert-data input-password2 a-text-medium-brownish" type="password" id="edit-user-front-repassword" name="login-password" placeholder="Confirmar contraseña" autocomplete="off" />
             
              </div>

              <div class="d-flex align-items-center mb-4 mx-auto mt-2 ">
                <div class="col-xl-4 margin-sex1 ">
                  <p class="margin-front text-small a-text-medium-brownish ml-3">Sexo</p>
                  <form action="" name="formilariosexo" id="formulariosexo" class="formulario">
                    <div class="sexo text-small a-text-medium-brownish">
                      <input type="radio" name="sexo" id="mujer" checked />
                      <label for="mujer" id="mujerestado" class="mujer-estilo d-flex align-items-center">
                        <img id="women" src="./images/datos-adicionales/femenino-activo.svg" class="women ml-1 " />
                        <span class="">Femenino</span></label>
                      <input type="radio" name="sexo" id="hombre" />
                      <label for="hombre" id="hombreestado" class="hombre-estilo pl-2">
                        <span>Masculino</span>
                        <img id="men" src="./images/datos-adicionales/masculino-inactivo.svg" class="men" /></label>
                    </div>
                  </form>
                </div>

                <div class="col-xl-4 ml-4" id="drop-paises">
                  <p class="margin-front text-small a-text-medium-brownish ml-3">País de residencia</p>

                  <input type="checkbox" id="selectPais" class="texto-general" />
                  <label for="selectPais" id="select-Pais" class="ml-2">
                    <p class="SeleccionPaisLista text-small a-text-medium-brownish">
                      <img src="" class="Icon_paises" />Selecciona tu país
                    </p>
                    <ul class="ListaDesplegablePaises text-small a-text-medium-brownish">
                      <li class="option" id-select="select-Pais " value="USA">
                        <img src="./images/paises/usa.svg" class="Icon_paises" />USA
                      </li>
                      <li class="option" id-select="select-Pais" value="Argentina">
                        <img src="./images/paises/argentina.svg" class="Icon_paises" /><span>Argentina</span>
                      </li>
                      <li class="option" id-select="select-Pais" value="Brazil">
                        <img src="./images/paises/brazil.svg" class="Icon_paises" />Brazil
                      </li>
                      <li class="option" id-select="select-Pais" value="Chile">
                        <img src="./images/paises/chile.svg" class="Icon_paises" />Chile
                      </li>
                      <li class="option" id-select="select-Pais" value="Colombia">
                        <img src="./images/paises/colombia.svg" class="Icon_paises" />Colombia
                      </li>
                      <li class="option" id-select="select-Pais" value="Costa Rica">
                        <img src="./images/paises/costa-rica.svg" class="Icon_paises" />Costa Rica
                      </li>
                      <li class="option" id-select="select-Pais" value="Ecuador">
                        <img src="./images/paises/ecuador.svg" class="Icon_paises" />Ecuador
                      </li>
                      <li class="option" id-select="select-Pais" value="El salvador">
                        <img src="./images/paises/el-salvador.svg" class="Icon_paises" />El Salvador
                      </li>
                      <li class="option" id-select="select-Pais" value="Guatemala">
                        <img src="./images/paises/guatemala.svg" class="Icon_paises" />Guatemala
                      </li>
                      <li class="option" id-select="select-Pais" value="Honduras">
                        <img src="./images/paises/honduras.svg" class="Icon_paises" />Honduras
                      </li>
                      <li class="option" id-select="select-Pais" value="Nicaragua">
                        <img src="./images/paises/nicaragua.svg" class="Icon_paises" />Nicaragua
                      </li>
                      <li class="option" id-select="select-Pais" value="Panamá">
                        <img src="./images/paises/panama.svg" class="Icon_paises" />Panamá
                      </li>
                      <li class="option" id-select="select-Pais" value="Paraguay">
                        <img src="./images/paises/paraguay.svg" class="Icon_paises" />Paraguay
                      </li>
                      <li class="option" id-select="select-Pais" value="Perú">
                        <img src="./images/paises/peru.svg" class="Icon_paises" />Perú
                      </li>
                      <li class="option" id-select="select-Pais" value="Puerto Rico">
                        <img src="./images/paises/puerto-rico.svg" class="Icon_paises" />Puerto Rico
                      </li>
                      <li class="option" id-select="select-Pais" value="Dominican Republic">
                        <img src="./images/paises/dominican-republic.svg" class="Icon_paises" />Dominican Republic
                      </li>
                      <li class="option" id-select="select-Pais" value="Uruguay">
                        <img src="./images/paises/uruguay.svg" class="Icon_paises" />Uruguay
                      </li>
                    </ul>
                  </label>
                </div>

                <div class="col-xl-4 fecha-margi text-small a-text-medium-brownish">
                  <p class="margin-fecha">Fecha de nacimiento</p>
                  <div class=" mb-4 p21 cuadro-fecha">
                    <div class="cuadro-dia">

                      <input type="checkbox" id="selectDay" />
                      <label for="selectDay" id="select-Dia">


                        <p class="SeleccionDiaLista">Día</p>
                        <ul class="ListaDesplegableDias">
                          <li class="Dias" id-select="select-Dia" value="01">
                            01
                          </li>
                          <li class="Dias" id-select="select-Dia" value="02">
                            02
                          </li>
                          <li class="Dias" id-select="select-Dia" value="03">
                            03
                          </li>
                          <li class="Dias" id-select="select-Dia" value="04">
                            04
                          </li>
                          <li class="Dias" id-select="select-Dia" value="05">
                            05
                          </li>
                          <li class="Dias" id-select="select-Dia" value="06">
                            06
                          </li>
                          <li class="Dias" id-select="select-Dia" value="07">
                            07
                          </li>
                          <li class="Dias" id-select="select-Dia" value="08">
                            08
                          </li>
                          <li class="Dias" id-select="select-Dia" value="09">
                            09
                          </li>
                          <li class="Dias" id-select="select-Dia" value="10">
                            10
                          </li>
                          <li class="Dias" id-select="select-Dia" value="11">
                            11
                          </li>
                          <li class="Dias" id-select="select-Dia" value="12">
                            12
                          </li>
                          <li class="Dias" id-select="select-Dia" value="13">
                            13
                          </li>
                          <li class="Dias" id-select="select-Dia" value="14">
                            14
                          </li>
                          <li class="Dias" id-select="select-Dia" value="15">
                            15
                          </li>
                          <li class="Dias" id-select="select-Dia" value="16">
                            16
                          </li>
                          <li class="Dias" id-select="select-Dia" value="17">
                            17
                          </li>
                          <li class="Dias" id-select="select-Dia" value="18">
                            18
                          </li>
                          <li class="Dias" id-select="select-Dia" value="19">
                            19
                          </li>
                          <li class="Dias" id-select="select-Dia" value="20">
                            20
                          </li>
                          <li class="Dias" id-select="select-Dia" value="21">
                            21
                          </li>
                          <li class="Dias" id-select="select-Dia" value="22">
                            22
                          </li>
                          <li class="Dias" id-select="select-Dia" value="23">
                            23
                          </li>
                          <li class="Dias" id-select="select-Dia" value="24">
                            24
                          </li>
                          <li class="Dias" id-select="select-Dia" value="25">
                            25
                          </li>
                          <li class="Dias" id-select="select-Dia" value="26">
                            26
                          </li>
                          <li class="Dias" id-select="select-Dia" value="27">
                            27
                          </li>
                          <li class="Dias" id-select="select-Dia" value="28">
                            28
                          </li>
                          <li class="Dias" id-select="select-Dia" value="29">
                            29
                          </li>
                          <li class="Dias" id-select="select-Dia" value="30">
                            30
                          </li>
                          <li class="Dias" id-select="select-Dia" value="31">
                            31
                          </li>
                        </ul>
                      </label>
                    </div>
                    <div class="cuadro-dia">
                      <input type="checkbox" id="selectMonth" class="" />
                      <label for="selectMonth" id="select-Mes">
                        <p class="SeleccionMesLista">Mes</p>
                        <ul class="ListaDesplegableMeses">
                          <li class="Meses" id-select="select-Mes" value="Ene">
                            Ene
                          </li>
                          <li class="Meses" id-select="select-Mes" value="Feb">
                            Feb
                          </li>
                          <li class="Meses" id-select="select-Mes" value="Mzo">
                            Mzo
                          </li>
                          <li class="Meses" id-select="select-Mes" value="Abr">
                            Abr
                          </li>
                          <li class="Meses" id-select="select-Mes" value="May">
                            May
                          </li>
                          <li class="Meses" id-select="select-Mes" value="Jun">
                            Jun
                          </li>
                          <li class="Meses" id-select="select-Mes" value="Jul">
                            Jul
                          </li>
                          <li class="Meses" id-select="select-Mes" value="Ago">
                            Ago
                          </li>
                          <li class="Meses" id-select="select-Mes" value="Sep">
                            Sep
                          </li>
                          <li class="Meses" id-select="select-Mes" value="Oct">
                            Oct
                          </li>
                          <li class="Meses" id-select="select-Mes" value="Nov">
                            Nov
                          </li>
                          <li class="Meses" id-select="select-Mes" value="Dic">
                            Dic
                          </li>
                        </ul>
                      </label>
                    </div>
                    <div class="cuadro-dia">
                      <input type="checkbox" id="selectYear" class="" />
                      <label for="selectYear" id="select-Año">
                        <p class="SeleccionAñoLista">Año</p>
                        <ul class="ListaDesplegableAños">
                          <li class="Años" id-select="select-Año" value="2019">
                            2019
                          </li>
                          <li class="Años" id-select="select-Año" value="2018">
                            2018
                          </li>
                          <li class="Años" id-select="select-Año" value="2017">
                            2017
                          </li>
                          <li class="Años" id-select="select-Año" value="2016">
                            2016
                          </li>
                          <li class="Años" id-select="select-Año" value="2015">
                            2015
                          </li>
                          <li class="Años" id-select="select-Año" value="2014">
                            2014
                          </li>
                          <li class="Años" id-select="select-Año" value="2013">
                            2013
                          </li>
                          <li class="Años" id-select="select-Año" value="2012">
                            2012
                          </li>
                          <li class="Años" id-select="select-Año" value="2011">
                            2011
                          </li>
                          <li class="Años" id-select="select-Año" value="2010">
                            2010
                          </li>
                          <li class="Años" id-select="select-Año" value="2009">
                            2009
                          </li>
                          <li class="Años" id-select="select-Año" value="2008">
                            2008
                          </li>
                          <li class="Años" id-select="select-Año" value="2007">
                            2007
                          </li>
                          <li class="Años" id-select="select-Año" value="2006">
                            2006
                          </li>
                          <li class="Años" id-select="select-Año" value="2005">
                            2005
                          </li>
                          <li class="Años" id-select="select-Año" value="2004">
                            2004
                          </li>
                          <li class="Años" id-select="select-Año" value="2003">
                            2003
                          </li>
                          <li class="Años" id-select="select-Año" value="2002">
                            2002
                          </li>
                          <li class="Años" id-select="select-Año" value="2001">
                            2001
                          </li>
                          <li class="Años" id-select="select-Año" value="2000">
                            2000
                          </li>
                          <li class="Años" id-select="select-Año" value="1999">
                            1999
                          </li>
                          <li class="Años" id-select="select-Año" value="1998">
                            1998
                          </li>
                          <li class="Años" id-select="select-Año" value="1997">
                            1997
                          </li>
                          <li class="Años" id-select="select-Año" value="1996">
                            1996
                          </li>
                          <li class="Años" id-select="select-Año" value="1995">
                            1995
                          </li>
                          <li class="Años" id-select="select-Año" value="1994">
                            1994
                          </li>
                          <li class="Años" id-select="select-Año" value="1993">
                            1993
                          </li>
                          <li class="Años" id-select="select-Año" value="1992">
                            1992
                          </li>
                          <li class="Años" id-select="select-Año" value="1991">
                            1991
                          </li>
                          <li class="Años" id-select="select-Año" value="1990">
                            1990
                          </li>
                          <li class="Años" id-select="select-Año" value="1989">
                            1989
                          </li>
                          <li class="Años" id-select="select-Año" value="1988">
                            1988
                          </li>
                          <li class="Años" id-select="select-Año" value="1987">
                            1987
                          </li>
                          <li class="Años" id-select="select-Año" value="1986">
                            1986
                          </li>
                          <li class="Años" id-select="select-Año" value="1985">
                            1985
                          </li>
                          <li class="Años" id-select="select-Año" value="1984">
                            1984
                          </li>
                          <li class="Años" id-select="select-Año" value="1983">
                            1983
                          </li>
                          <li class="Años" id-select="select-Año" value="1982">
                            1982
                          </li>
                          <li class="Años" id-select="select-Año" value="1981">
                            1981
                          </li>
                          <li class="Años" id-select="select-Año" value="1980">
                            1980
                          </li>
                          <li class="Años" id-select="select-Año" value="1979">
                            1979
                          </li>
                          <li class="Años" id-select="select-Año" value="1978">
                            1978
                          </li>
                          <li class="Años" id-select="select-Año" value="1977">
                            1977
                          </li>
                          <li class="Años" id-select="select-Año" value="1976">
                            1976
                          </li>
                          <li class="Años" id-select="select-Año" value="1975">
                            1975
                          </li>
                          <li class="Años" id-select="select-Año" value="1974">
                            1974
                          </li>
                          <li class="Años" id-select="select-Año" value="1973">
                            1973
                          </li>
                          <li class="Años" id-select="select-Año" value="1972">
                            1972
                          </li>
                          <li class="Años" id-select="select-Año" value="1971">
                            1971
                          </li>
                          <li class="Años" id-select="select-Año" value="1970">
                            1970
                          </li>
                          <li class="Años" id-select="select-Año" value="1969">
                            1969
                          </li>
                          <li class="Años" id-select="select-Año" value="1968">
                            1968
                          </li>
                          <li class="Años" id-select="select-Año" value="1967">
                            1967
                          </li>
                          <li class="Años" id-select="select-Año" value="1966">
                            1966
                          </li>
                          <li class="Años" id-select="select-Año" value="1965">
                            1965
                          </li>
                          <li class="Años" id-select="select-Año" value="1964">
                            1964
                          </li>
                          <li class="Años" id-select="select-Año" value="1963">
                            1963
                          </li>
                          <li class="Años" id-select="select-Año" value="1962">
                            1962
                          </li>
                          <li class="Años" id-select="select-Año" value="1961">
                            1961
                          </li>
                          <li class="Años" id-select="select-Año" value="1960">
                            1960
                          </li>
                          <li class="Años" id-select="select-Año" value="1959">
                            1959
                          </li>
                          <li class="Años" id-select="select-Año" value="1958">
                            1958
                          </li>
                          <li class="Años" id-select="select-Año" value="1957">
                            1957
                          </li>
                          <li class="Años" id-select="select-Año" value="1956">
                            1956
                          </li>
                          <li class="Años" id-select="select-Año" value="1955">
                            1955
                          </li>
                          <li class="Años" id-select="select-Año" value="1954">
                            1954
                          </li>
                          <li class="Años" id-select="select-Año" value="1953">
                            1953
                          </li>
                          <li class="Años" id-select="select-Año" value="1952">
                            1952
                          </li>
                          <li class="Años" id-select="select-Año" value="1951">
                            1951
                          </li>
                          <li class="Años" id-select="select-Año" value="1950">
                            1950
                          </li>
                          <li class="Años" id-select="select-Año" value="1949">
                            1949
                          </li>
                          <li class="Años" id-select="select-Año" value="1948">
                            1948
                          </li>
                          <li class="Años" id-select="select-Año" value="1947">
                            1947
                          </li>
                          <li class="Años" id-select="select-Año" value="1946">
                            1946
                          </li>
                          <li class="Años" id-select="select-Año" value="1945">
                            1945
                          </li>
                          <li class="Años" id-select="select-Año" value="1944">
                            1944
                          </li>
                          <li class="Años" id-select="select-Año" value="1943">
                            1943
                          </li>
                          <li class="Años" id-select="select-Año" value="1942">
                            1942
                          </li>
                          <li class="Años" id-select="select-Año" value="1941">
                            1941
                          </li>
                          <li class="Años" id-select="select-Año" value="1940">
                            1940
                          </li>
                          <li class="Años" id-select="select-Año" value="1939">
                            1939
                          </li>
                          <li class="Años" id-select="select-Año" value="1938">
                            1938
                          </li>
                          <li class="Años" id-select="select-Año" value="1937">
                            1937
                          </li>
                          <li class="Años" id-select="select-Año" value="1936">
                            1936
                          </li>
                          <li class="Años" id-select="select-Año" value="1935">
                            1935
                          </li>
                          <li class="Años" id-select="select-Año" value="1934">
                            1934
                          </li>
                          <li class="Años" id-select="select-Año" value="1933">
                            1933
                          </li>
                          <li class="Años" id-select="select-Año" value="1932">
                            1932
                          </li>
                          <li class="Años" id-select="select-Año" value="1931">
                            1931
                          </li>
                          <li class="Años" id-select="select-Año" value="1930">
                            1930
                          </li>
                          <li class="Años" id-select="select-Año" value="1929">
                            1929
                          </li>
                        </ul>
                      </label>
                    </div>
                  </div>
                 <!-- <p class="mb-0 a-text-medium-black" id="error_birthday">Error</p>-->
                </div>
              </div>

              <div class="navbar navbar-expand-sm justify-content-center mx-auto texto ml-xl-2 pb-3 ">
                <button type="button" class="a-button-pill-teal-outline a-button-pill-padding  a-text-bold-teal mr-4 closeViewFront">CANCELAR</button>
                <button type="button" class="a-button-pill-teal-primary a-button-pill-padding  btn-save-data-front a-text-bold-white">GUARDAR</button>
              </div>
              <div>

              </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  < <!--MODAL EDITAR-->
    <div class="modal modal-edit-user-front show" id="abrirBorrar" role="dialog">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content centro modal-edit-usersfront-content">
          <div class="modal-body">
            <img src="./images/aprove-icon.png" alt="" class="mb-3 aprove-icon mt-5">
            <h3 class="a-text-bold-brownish h3 mb-3">Edición Exitosa</h3>
            <p class="a-text-medium-brownish modal-delete-username-front">Los datos se han actualizado correctamente</p>
          </div>
          <div class="pb-4 align-item-center centro pb-5">
            <button type="button" class="a-button-pill-teal-primary a-button-pill-fixed" data-dismiss="modal" id="modal-button"><span class="a-text-bold-white">OK</span></button>

          </div>
        </div>
      </div>
    </div>
