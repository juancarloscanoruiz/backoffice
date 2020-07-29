<script src="{{ asset('/js/lib/easyXDM.min.js') }}"></script>


<script>
    new easyXDM.Socket({
        remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/claro-cinema-edi.php",
        container: "navbar-prev-claro-cinema",
        onMessage: function(message, origin) {
            console.log(message);
            this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
            this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";

        }
    });

</script>
<script>
    new easyXDM.Socket({
        remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/programacion-prev.php",
        container: "navbar-prev-programacion",
        onMessage: function(message, origin) {
            console.log(message);
            this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
            this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";

        }
    });

</script>
<script>
    new easyXDM.Socket({
        remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/home-edi.php",
        container: "navbar-prev-home",
        onMessage: function(message, origin) {
            console.log(message);
            this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
            this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";

        }
    });

</script>


<body>
    <main>

        <div id="menu">
            <nav class="d-flex col-xl-11 navbar-expand-sm justify-content-center mb-5" id="option">
                <div class="navbar-progra d-flex align-items-center justify-content-center mt-5">
                    <img src="./images/arrow-gray.svg" alt="flecha" class="arrow-progra arrow-progra-left">
                    <div class="navbar-progra-item navbar-progra-item-border navbar-progra-active navbar-canal-claro"
                        navbar-index="1" rel="navbar-prev-claro-cinema">
                        <div class="navbar-progra-item-container ml-3 mr-3">
                            <p class="py-2 px-3 mb-0 a-text-regular-blacktwo">CLARO CINEMA</p>

                        </div>
                    </div>
                    <div class="navbar-progra-item navbar-progra-item-border navbar-sinopsis" navbar-index="2"
                        rel="navbar-prev-sinopsis">
                        <div class="navbar-progra-item-container ml-3 mr-3">
                            <p class="a-text-regular-blacktwo py-2 px-3 mb-0">SINÓPSIS</p>
                        </div>
                    </div>
                    <div class="navbar-progra-item navbar-progra-item-border navbar-programacion navbar-prev-programacion"
                        navbar-index="3" rel="navbar-prev-programacion">
                        <div class="navbar-progra-item-container ml-3 mr-3">
                            <p class="a-text-regular-blacktwo py-2 px-3 mb-0">PROGRAMACIÓN</p>
                        </div>

                    </div>
                    <div class="navbar-progra-item navbar-prev-home navbar-home" navbar-index="4"
                        rel="navbar-prev-home">
                        <div class="navbar-progra-item-container ml-3 mr-3">
                            <p class="a-text-regular-blacktwo py-2 px-3 mb-0">HOME</p>
                        </div>
                    </div>
                    <img src="./images/arrow-gray.svg" alt="flecha" class="arrow-progra arrow-progra-right">
                    <!--<span class="p-3 arrow arrow-right">><span>-->
                </div>

            </nav>
            <div class="d-flex float-right mb-0 mr-5">
                <form action="" name="formilariosexo" id="formulariosexo" class="formulario">
                    <div class=" d-flex prev text-small a-text-medium-brownish location mt-2">
                        <input type="radio" name="sexo" id="edit" class="edi-cinema" checked />
                        <label for="edit" id="editar" class="mujer-estilo d-flex align-items-center pl-4 pt-3">
                            <p class=" a-prev-title">EDITAR</p>
                        </label>
                        <input type="radio" name="sexo" id="prev" class="prev-cinema" />
                        <label for="prev" id="previsualiza" class="hombre-estilo pl-2 pt-3">
                            <p class=" a-prev-title ">PREVISUALIZAR</p>
                        </label>
                    </div>
                </form>
                <div class="pt-2">
                    <img src="./images/mobile.svg" class="a-prev-image ml-3 mr-3" alt="mobile" id="prev-mobile">
                    <img src="./images/tablet.svg" class="a-prev-image" alt="tablet" id="prev-tablet">
                    <img src="./images/pc.svg" class="a-prev-image ml-3" alt="pc" id="prev-desktop">
                </div>
            </div>
            <div class="float-left pl-3 mb-5 " style="margin-left: 7%;">
                <div>
                    <label class=" d-inline-block mr-4 pl-4 mb-5 mt-3 checksquare" style="vertical-align: middle;">
                        <input type="checkbox" id="viewcarga">
                        <span class="checkmark1 border-green"></span>
                    </label><span class=" ml-2 a-text-green mr-4">Guardar cambios</span>
                    <label class=" d-inline-block mr-4 pl-4 mb-5 mt-3 checksquare" style="vertical-align: middle;">
                        <input type="checkbox">
                        <span class="checkmark2  border-red"></span>
                    </label><span class=" ml-2 a-text-red">No guardar cambios</span>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class=" mr-5 d-flex float-right po-zona">
                <button class="btn-zona zona">Zona horaria <img src="./images/paises/chile.svg"
                        class="Icon_paises1" /></button>
            </div>
            <div class="centro">
                <div class="navbar-progra-content navbar-prev-claro-cinema mb-5" id="navbar-prev-claro-cinema">
                </div>
            </div>
            <div class="navbar-progra-content navbar-sinopsis" id="navbar-prev-sinopsis">
                <div id="prev-sinopsis">
                    <div class="mx-auto shadow mt-5  mb-5 content-table">
                        <div class="contenedor-fila">
                            <div class="contenedor-columna centro program titletable">
                                <span class="a-text-white-regular a-text-prev">Programa</span>
                            </div>
                            <div class="contenedor-columna centro channel titletable">
                                <span class="a-text-white-regular a-text-prev">Canal</span>
                            </div>
                            <div class="contenedor-columna centro channel titletable">
                                <span class="a-text-white-regular a-text-prev">Acciones</span>
                            </div>
                            <div class="contenedor-columna centro channel  titletable">
                                <span class="a-text-white-regular a-text-prev">Revisión</span>
                            </div>
                        </div>
                        <div class="contenedor-fila">
                            <div class="contenedor-columna">
                                <span class="a-text-medium-black text-normal pd-5">Mad Men</span>
                            </div>
                            <div class="contenedor-columna centro">
                                <span class="a-text-medium-black text-normal ">Canal Claro</span>
                            </div>
                            <div class="contenedor-columna centro">
                                <input type="image" src="./images/lapiz-acti.svg" alt="" class=" btn-focus edi"
                                    onClick="watchsinopsis()" />
                            </div>
                            <div class="contenedor-columna centro ">
                                <label class=" d-inline-block mr-4 pl-4 mb-5 mt-3 checksquare">
                                    <input type="checkbox">
                                    <span class="checkmark1"></span>
                                </label>
                            </div>
                        </div>
                        <div class="contenedor-fila">
                            <div class="contenedor-columna">
                                <span class="a-text-medium-black text-normal pd-5">Mad Men</span>
                            </div>
                            <div class="contenedor-columna centro">
                                <span class="a-text-medium-black  text-normal ">Canal Claro</span>
                            </div>
                            <div class="contenedor-columna centro">
                                <input type="image" src="./images/lapiz-acti.svg" alt="" class=" btn-focus edi" />
                            </div>
                            <div class="contenedor-columna centro ">
                                <label class=" d-inline-block mr-4 pl-4 mb-5 mt-3 checksquare">
                                    <input type="checkbox">
                                    <span class="checkmark1"></span>
                                </label>
                            </div>
                        </div>
                        <div class="contenedor-fila">
                            <div class="contenedor-columna">
                                <span class="a-text-medium-black text-normal pd-5">Mad Men</span>
                            </div>
                            <div class="contenedor-columna centro ">
                                <span class="a-text-medium-black text-normal ">Canal Claro</span>
                            </div>
                            <div class="contenedor-columna centro ">
                                <input type="image" src="./images/lapiz-acti.svg" alt="" class=" btn-focus edi" />
                            </div>
                            <div class="contenedor-columna centro">
                                <label class=" d-inline-block mr-4 pl-4 mb-5 mt-3 checksquare">
                                    <input type="checkbox">
                                    <span class="checkmark1"></span>
                                </label>
                            </div>
                        </div>
                        <div class="contenedor-fila">
                            <div class="contenedor-columna">
                                <span class="a-text-medium-black text-normal pd-5">Mad Men</span>
                            </div>
                            <div class="contenedor-columna centro ">
                                <span class="a-text-medium-black text-normal ">Canal Claro</span>
                            </div>
                            <div class="contenedor-columna centro">
                                <input type="image" src="./images/lapiz-acti.svg" alt="" class=" btn-focus edi" />
                            </div>
                            <div class="contenedor-columna centro">
                                <label class=" d-inline-block mr-4 pl-4 mb-5 mt-3 checksquare">
                                    <input type="checkbox">
                                    <span class="checkmark1"></span>
                                </label>
                            </div>
                        </div>
                        <div class="contenedor-fila">
                            <div class="contenedor-columna">
                                <span class="a-text-medium-black text-normal pd-5">Mad Men</span>
                            </div>
                            <div class="contenedor-columna centro ">
                                <span class="a-text-medium-black text-normal ">Canal Claro</span>
                            </div>
                            <div class="contenedor-columna centro">
                                <input type="image" src="./images/lapiz-acti.svg" alt="" class=" btn-focus edi" />
                            </div>
                            <div class="contenedor-columna centro">
                                <label class=" d-inline-block mr-4 pl-4 mb-5 mt-3 checksquare">
                                    <input type="checkbox">
                                    <span class="checkmark1"></span>
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="centro ">
                <div class="navbar-progra-content mb-5 navbar-prev-programacion" id="navbar-prev-programacion">
                </div>
            </div>
            <div class="centro ">
                <div class="navbar-progra-content mb-5" id="navbar-prev-home">
                </div>
            </div>
        </div>
    </main>
</body>
<div class="modal show modal-delete-user" id="savesino" role="dialog">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content align-item-center centro  modal-save">
            <div class="modal-body ">
                <img src="./images/bien.svg" alt="aprovado" class="m-3">
                <h3 class="h3 a-text-medium-brownish mt-3 mb-3">Fueron guardados los cambios en la sinópsis de:</h3>
                <div class="d-flex justify-content-center mb-5">
                    <label for="" class="h3 a-text-bold-brownish">Mad Men</label>
                </div>
                <div class="d-flex justify-content-center mb-5">
                    <button type="button" class="a-btn-border-teal  a-btn-general-modal text-no  mr-5 btn-focus"
                        id="back-list" data-dismiss="modal">VOLVER AL LISTADO</button>

                    <button type="button" class="a-btn-teal  a-btn-general-modal text-si  btn-focus" id="modal-button"
                        data-dismiss="modal">SIGUIENTE SINÓPSIS</button>
                </div>
            </div>
        </div>
    </div>
