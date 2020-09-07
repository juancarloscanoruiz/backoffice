@extends('layaout.app')

@section('scripts')
    <script src="{{ asset('/js/lib/easyXDM.min.js')  }}"></script>
    <script src="{{ asset('/js/lib/easyXDM.min.js')  }}"></script>
    <script>
        new easyXDM.Socket({
            remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/programacion-edi.php",
            container: "programacion-container",
            onMessage: function(message, origin) {
                console.log(message);
                this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
            }
        });
    </script>
@endsection

@section('content')

    <style>
        #inp_programing {
            display: none;
        }
    </style>

<body>
    <main>
    @include('partials.headers.headerPrograGeneral')
        <div class="justify-content-center centro mx-auto position-title">
            <span class="text-titulo">PROGRAMACIÓN GENERAL <br> DEL </span>
        <span class="text-titulo-rojo text-uppercase">{{$respuesta->data->first_day}} <span class="text-titulo">AL</span>  {{$respuesta->data->last_day}}</span>
        </div>

        <nav class="d-flex col-xl-12 navbar-expand-sm justify-content-center position-nav pt-5">
            <ul class="d-flex justify-content-center navbar-nav">
                <li class="nav-item br-r ">
                    <button class="btn-menu-select a-btn-basic-medium text-normal menu bn-nav text-uppercase" id="grilla-canal-claro-button">Canal Claro</button>

                </li>
                <li class="nav-item br-r">
                    <button id="grilla-concert-channel-button" class="btn-menu-all a-btn-basic-medium a-text-bold-brown-two text-plus bn-nav text-uppercase">Concert Channel</button>
                </li>
                <li class="nav-item br-r">
                    <button id="grilla-claro-cinema-button" class="btn-menu-all  a-btn-basic-medium a-text-bold-brown-two text-plus bn-nav text-uppercase">Claro Cinema</button>
                </li>
                <li class="nav-item br-r">
                    <button class="btn-menu-inac a-btn-basic-medium text-plus a-text-bold-light text-uppercase">Nuestra Visión*</button>
                </li>
                <li class="nav-item br-r ">
                    <button class="btn-menu-inac  a-btn-basic-medium  text-plus a-text-bold-light text-uppercase">Claro Sport*</button>
                </li>
                <li class="nav-item ">
                    <button id="grilla-home-button" class="btn-menu-all a-btn-basic-medium  a-text-bold-brown-two text-plus bn-nav text-uppercase"> Home</button>
                </li>
            </ul>
        </nav>
        <!--Botones de grilla-->
        <div class="grilla-claro-canal">
    <div class="ml-5 float-left">
      
        <div><span class="a-text-black-light text-plus">Última edición : <span class="zona">septiembre 17 2019</span> </span></div>
        <span class="a-text-black-light text-plus">Editado por: <label class="zona"> Antonio Pérez López (<label class="zona ">Usuario aprobador</label>)</label></span>
    </div> 
    <div class="d-flex float-right mr-5 ">
        <button class="btn-landing a-btn-basic-small text-uppercase a-text-semi-brown-two   text-plus mr-3 gril-claro" id="btn-grilla"><span>Grilla</span></button>
        <button class="text-uppercase btn-grilla a-btn-basic-small a-text-MBlack text-plus lan-claro" id="btn-landing"><span>Landing</span></button>
    </div>
    <div class="clearfix"></div>
</div>
       

    </main>
<!--submenu-->
            <nav class="d-flex col-xl-11 navbar-expand-sm justify-content-center mb-5" id="option">
                <div class="navbar-progra d-flex align-items-center justify-content-center mt-2">
                    <img src="./images/arrow-gray.svg" alt="flecha" class="arrow-progra arrow-progra-left">
                    <div class="navbar-progra-item navbar-progra-item-border  navbar-canal-claro"
                        navbar-index="1" rel="navbar-prev-canal-claro">
                        <div class="navbar-progra-item-container ml-3 mr-3">
                            <p class="py-2 px-3 mb-0 a-text-regular-blacktwo">CANAL CLARO</p>

                        </div>
                    </div>

                    <div class="navbar-progra-item navbar-progra-item-border navbar-sinopsis" navbar-index="2"
                        rel="navbar-prev-sinopsis">
                        <div class="navbar-progra-item-container ml-3 mr-3">
                            <p class="a-text-regular-blacktwo py-2 px-3 mb-0">SINOPSIS</p>
                        </div>
                    </div>


                    <div class="navbar-progra-item navbar-progra-item-border  navbar-progra-active navbar-programacion navbar-prev-programacion"
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

    <!--landing de programación-->
    <div id="title" class="mt-3">
        <div class="float-left ml-5 mb-2 " style="margin-left: 7%;">
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
            <div class="d-flex float-right mb-4 mr-5 ">
            <form action="" name="formilariosexo" id="formulariosexo" class="formulario">
                    <div class=" d-flex prev text-small a-text-medium-brownish location mt-2">
                      <input type="radio" name="sexo" id="edit" checked />
                      <label for="edit" id="editar" class="mujer-estilo d-flex align-items-center pl-4 pt-3">
                        <p class=" a-prev-title">EDITAR</p></label>
                      <input type="radio" name="sexo" id="prev" />
                      <label for="prev" id="previsualiza" class="hombre-estilo pl-2 pt-3">
                      <p class=" a-prev-title ">PREVISUALIZAR</p></label>
                    </div>
                  </form>
                <div class="pt-2">
                    <img src="./images/mobile.svg" class="a-prev-image ml-3 mr-3" alt="mobile" id="prev-mobile">
                    <img src="./images/tablet.svg" class="a-prev-image" alt="tablet" id="prev-tablet">
                    <img src="./images/pc.svg" class="a-prev-image ml-3" alt="pc" id="prev-desktop">
                </div>
            </div>  
            <div class="clearfix"></div>
                       
           
            <div class=" mr-5 d-flex float-right ">
            <button class="btn-zona zona">Zona horaria <img src="./images/paises/chile.svg" class="Icon_paises1" /></button>
        </div>
        <div class="clearfix"></div> 
        <div class="centro">
            <div class="navbar-progra-content  mb-5 mt-4 pt-2" id="programacion-container">
            </div>
        </div>
    </body>

</body>

@endsection
