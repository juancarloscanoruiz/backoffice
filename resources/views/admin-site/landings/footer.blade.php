@extends('layaout.app')


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
                    <img src="./images/mobile.svg" class="a-prev-image ml-3 mr-3 cursor-pointer op-inac" alt="mobile" id="prev-mobile" >
                    <img src="./images/tablet.svg" class="a-prev-image cursor-pointer op-inac" alt="tablet" id="prev-tablet" >
                    <img src="./images/pc.svg" class="a-prev-image ml-3 cursor-pointer op-ac" alt="pc" id="prev-desktop" >
                </div>
            </div>  
            <div class="clearfix"></div>
            <div class="ml-5 float-left mb-4">
        <div><span class="a-text-black-light text-plus">Última edición : <span class="zona">septiembre 17 2019</span> </span></div>
        <span class="a-text-black-light text-plus">Editado por: <label class="zona"> Antonio Pérez López (<label class="zona ">Usuario aprobador</label>)</label></span>
    </div>            
           
            <div class=" mr-5 d-flex float-right ">
            <button class="btn-zona zona">Zona horaria <img src="./images/gmt-icon.svg"  class="Icon_paises1"style="width:32px" /></button>
        </div>
        <div class="clearfix"></div> 
        <h2 class="h2 text-center a-text-black-brown-two pt-3">FOOTER </h2>
                <hr class="d-flex align-content-center separationhr col-11 mt-3 mb-0">
        <div class="centro ">
            <!--menu-->
        <div class="row no-gutters">
                    <ul class="tv-list-programming col-md-9 mt-5">
                    <div class="col-md centro no-gap border-r d-flex justify-content-center">
                            <li rel="claro-canal-programing" class=" active-navItem nav-li d-flex align-content-center">
                                <img class="claro-nav-image" src="{{asset('/images/home/claro-logo.svg')}}" alt="" id="icon_canal_claro" />
                            </li>
                        </div>
                        <div class="col-md centro no-gap border-r d-flex justify-content-center">
                            <li rel="claro-canal-programing" class=" active-navItem nav-li d-flex align-content-center">
                                <img class="claro-nav-image" src="./images/home/tv-1.svg" alt="" id="icon_canal_claro" />
                            </li>
                        </div>
                        <div class="col-md centro no-gap border-r d-flex justify-content-center">
                            <li rel="concert-channel-programing" class=" active-navItem nav-li d-flex align-content-center">
                                <img class="nav-image" src="{{ asset('/images/concert-black-icon.svg') }}" alt="" id="icon_concert_channel" />
                            </li>
                        </div>
                        <div class="col-md centro no-gap d-flex justify-content-center">
                            <li rel="claro-cinema-programing" class="active-navItem nav-li d-flex align-content-center">
                                <img class="nav-image" src="{{ asset('/images/home/cinema-home-img.svg') }}" alt="" id="icon_claro_cinema" style="    width: 55px;" />
                            </li>
                        </div>


                    </ul>
                </div>

<!--iframes-->
                <div class="load-view pointer-none" id="loader-view"> </div>
                <div class="navbar-progra-content mt-5 mb-5 navbar-prev-footers" onload='preloader()'
                    id="navbar-prev-footers" >
                </div>
            </div>


    </body>