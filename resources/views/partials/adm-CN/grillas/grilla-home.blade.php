<div class="grilla-home">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-md-6 pl-0">
                <!-- ULTIMA EDICION -->
                <div class="ml-5">
                    <div><span class="a-text-black-light text-plus">Última edición : <span class="zona date-edit" id="date-edit">
                            </span> </span></div>
                    <span class="a-text-black-light text-plus">Editado por: <label class="zona"> {{ session('name') }} (<label class="zona ">{{ session('rol_name') }}</label>)</label></span>
                </div>


            </div>
            <div class="col-12 col-md-6 pr-0">
                <!--Editar o previsualizar-->
                <div class="d-flex float-right mb-4 pb-2 mr-5">
                    <form action="" name="formilariosexo" id="formulariosexo" class="formulario">
                        <div class=" d-flex prev text-small a-text-medium-brownish location mt-2">
                            <input type="radio" name="sexo" id="edit-landing-concert" class="edi-concert" checked />
                            <label for="edit-landing-concert" id="edit-landing-concert" class="mujer-estilo d-flex align-items-center pl-4 pt-3">
                                <p class=" a-prev-title">EDITAR</p>
                            </label>
                            <input type="radio" name="sexo" id="prev-landing-concert" class="prev-concert" onload="preloader()" />
                            <label for="prev-landing-concert" id="previsualiza" class="hombre-estilo pl-2 pt-3">
                                <p class=" a-prev-title ">PREVISUALIZAR</p>
                            </label>
                        </div>
                    </form>
                    <!--Iconos para previsualizar en diferentes tamaños-->
                    <div id="device-size">
                        <div class="pt-2">
                            <img src="./images/pc.svg" class="a-prev-image ml-3 op-ac" alt="pc" id="prev-desktop">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 pl-0">
                <!--Buttons-->
                <div class="float-left ml-5 mb-4 ">
                    <div class="d-flex">
                        <button class="btn-apro a-text-MBlack text-normal mr-3 gril-claro" id="btn-grilla"><span>Aprobar
                                cambios</span></button>
                        <button class="btn-recha a-text-MBlack text-normal lan-claro" id="btn-landing"><span>Rechazar
                                cambios</span></button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 pr-0">
                <!--Botón zona horaria-->
                <div class="mr-5 d-flex float-right ">
                    <div class="btn-zona zona"><span class="mr-3">Zona horaria</span> <img src={{ asset('images/gmt-icon.svg') }} class="Icon_paises1" /></div>
                </div>
            </div>
        </div>
    </div>
    <!--iframe de home-->
    <div class="centro">
        <div class="navbar-progra-content my-5" id="navbar_prev_home_landing">

        </div>
    </div>

</div>
@include('partials.adm-CN.modals-home.home-encabezado');
@include('partials.adm-CN.modal-home.logo');
@include('partials.adm-CN.modal-home.carrusel');
@include('partials.adm-CN.modals-concert.carrusel');
@include('partials.adm-CN.modals-concert.programming')
@include('partials.adm-CN.modals-claro.index');


</div>