{{-- <script>
    new easyXDM.Socket({
        remote: "http://localhost:8888/MaquetaCNetworks/claro-canal-edi.php",
        container: "navbar-prev-canal-claro",
        onMessage: function(message, origin) {
            this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
            this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
            this.container.getElementsByTagName("iframe")[0].style.boxShadow =
                "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    });

</script> --}}

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
                <div class="navbar-progra d-flex align-items-center justify-content-center mt-2">
                    <img src="./images/arrow-gray.svg" alt="flecha" class="arrow-progra arrow-progra-left">
                    <div class="navbar-progra-item navbar-progra-item-border navbar-programacion   navbar-progra-active navbar-prev-programacion"
                        navbar-index="1" rel="navbar-prev-programacion">
                        <div class="navbar-progra-item-container ml-3 mr-3">
                            <p class="a-text-bold-two py-2 px-3 mb-0">PROGRAMACIÓN</p>
                        </div>
                    </div>
                    <div class="navbar-progra-item navbar-progra-item-border navbar-sinopsis pointer-none"
                        navbar-index="2" rel="navbar-prev-sinopsis">
                        <div class="navbar-progra-item-container ml-3 mr-3">
                            <p class=" a-text-bold-light py-2 px-3 mb-0">SINÓPSIS</p>
                        </div>
                    </div>

                    <div class="navbar-progra-item navbar-progra-item-border navbar-canal-claro" navbar-index="3"
                        rel="navbar-prev-canal-claro">
                        <div class="navbar-progra-item-container ml-3 mr-3">
                            <p class="py-2 px-3 mb-0 a-text-bold-two">CANAL CLARO</p>
                        </div>
                    </div>
                    <!--fin de claro canal-->

                    <div class="navbar-progra-item navbar-prev-home navbar-home pointer-none" navbar-index="4"
                        rel="navbar-prev-home">
                        <div class="navbar-progra-item-container ml-3 mr-3">
                            <p class=" a-text-bold-light py-2 px-3 mb-0">HOME</p>
                        </div>

                    </div>

                    <img src="./images/arrow-gray.svg" alt="flecha" class="arrow-progra arrow-progra-right">
                    <!--<span class="p-3 arrow arrow-right">><span>-->
                </div>

            </nav>

            <div class="d-flex float-right mb-4 pb-2 mr-5">
                <form action="" name="formilariosexo" id="formulariosexo" class="formulario">
                    <div class=" d-flex prev text-small a-text-medium-brownish location mt-2">
                        <input type="radio" name="sexo" id="edit" checked />
                        <label for="edit" id="editar" class="mujer-estilo d-flex align-items-center pl-4 pt-3">
                            <p class=" a-prev-title">EDITAR</p>
                        </label>
                        <input type="radio" name="sexo" id="prev" />
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
            <div class="float-left ml-5 mb-4 ">
                <div class="d-flex  ">
                    <button class="btn-apro  text-grilla mr-3 gril-claro" id="btn-grilla"><span>Aprobar
                            cambios</span></button>
                    <button class="btn-recha  text-grilla lan-claro" id="btn-landing"><span>Rechazar
                            cambios</span></button>
                </div>
                <!-- <div>
                    <label class=" d-inline-block mr-4 pl-4 mb-5 mt-3 checksquare" style="vertical-align: middle;">
                        <input type="checkbox" id="viewcarga">
                        <span class="checkmark1 border-green"></span>
                    </label><span class=" ml-2 a-text-green mr-4">Guardar cambios</span>
                    <label class=" d-inline-block mr-4 pl-4 mb-5 mt-3 checksquare" style="vertical-align: middle;">
                        <input type="checkbox">
                        <span class="checkmark2  border-red"></span>
                    </label><span class=" ml-2 a-text-red">No guardar cambios</span>
                </div>-->
            </div>
            <div class="clearfix"></div>
            <div class=" mr-5 d-flex float-right mb-5">
                <div class="btn-zona zona"><span class="mr-3">Zona horaria</span> <img
                        src={{ asset('images/gmt-icon.svg') }} class="Icon_paises1" width="32px" /></div>
            </div>
            <div class="clearfix"></div>
            <!--colocacion de ifram de programacion-->
            <div class="centro ">
                <div class="load-view pointer-none" id="loader-view"> </div>
                <div class="navbar-progra-content mb-5 navbar-prev-programacion " onload='preloader()'
                    id="navbar-prev-programacion" style="display:none;">
                </div>
            </div>

            <!--colocacion de iframde sinopsis-->
            <div class="navbar-progra-content navbar-sinopsis" id="navbar-prev-sinopsis">
                <div id="prev-sinopsis">
                </div>
                <div class="clearfix"></div>
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
                                onClick="watchsinopsis()">
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
                            <input type="image" src="./images/lapiz-acti.svg" alt="" class=" btn-focus edi ">
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
                            <input type="image" src="./images/lapiz-acti.svg" alt="" class=" btn-focus edi">
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
                            <input type="image" src="./images/lapiz-acti.svg" alt="" class=" btn-focus edi">
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
                            <input type="image" src="./images/lapiz-acti.svg" alt="" class=" btn-focus edi">
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
            <!--iframe de canal claro-->
            <div class="centro">
                <div class="navbar-progra-content navbar-prev-canal-claro mb-5" id="navbar-prev-canal-claro">
                </div>
            </div>
            <!--iframe de home-->
            <div class="centro ">
                <div class="navbar-progra-content mb-5" id="navbar-prev-home">
                </div>
            </div>
        </div>
    </main>

    @include('partials.adm-CN.modals-claro.index')

</body>
