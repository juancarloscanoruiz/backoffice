@extends('layaout.app')

@section('scripts')
    <script src="{{ asset('/js/lib/easyXDM.min.js')  }}"></script>
    <script>
        new easyXDM.Socket({
            remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/sinopsis-edi.php",
            container: "sinopsis-container",
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
    <body>

    @include('partials.headers.headerPrograGeneral')
    <div id="title" class="mt-3">
        <div class="float-left ml-5 mb-2 " style="margin-left: 7%;">
        <div class="d-flex  ">
                    <button class="btn-apro  text-grilla mr-3 gril-claro" id="btn-grilla"><span>Aprobar cambios</span></button>
                    <button class="btn-recha  text-grilla lan-claro" id="btn-landing" ><span>Rechazar cambios</span></button>
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
            <div class="ml-5 float-left ">
        <div><span class="a-text-black-light text-plus">Última edición : <span class="zona">septiembre 17 2019</span> </span></div>
        <span class="a-text-black-light text-plus">Editado por: <label class="zona"> Antonio Pérez López (<label class="zona ">Usuario aprobador</label>)</label></span>
    </div>            
           
            <div class=" mr-5 d-flex float-right ">
            <button class="btn-zona zona">Zona horaria  <img src={{ asset('images/gmt-icon.svg') }} class="Icon_paises1" width="32px" /></div></button>
           
        </div>
        <div class="clearfix"></div> 
        <div class="mr-5 float-right">
        <div class="d-flex  align-items-center justify-content-center mb-2 mt-2">
            <span class="a-text-semibold-black text-normal mr-3">Establecer sinópsis como:</span>
                                            <input type="radio" id="yes-landing" value="3"
                                                class="edit-switch-landing edit-landing-yes" />
                                            <label for="yes-landing" id="siestado-landing"
                                                class="mb-0 si-estilo cursor-pointer switch-label width-program">
                                            Programa</label>
                                            <input type="radio"  id="no-landing" value="0"
                                                class="edit-switch-landing switch-table-edit edit-landing-no "
                                              checked/>
                                            <label for="no-landing" id="noestado-landing"
                                                class="mb-0 no-estilo cursor-pointer switch-label width-program">
                                            Capítulo</label>
                                        </div>
        </div>
        <div class="clearfix"></div> 
        <div class=" mx-auto">
        <h3 class="a-text-black-brown-two h3 d-flex justify-content-center mt-3">SINÓPSIS</h3>
        <hr class="d-flex align-content-center separationhr col-11 mt-4 mb-5">

        </div>
        <div class="centro">
            <div class="navbar-progra-content  mb-5" id="sinopsis-container">
            </div>
        </div>
    </body>
@endsection
