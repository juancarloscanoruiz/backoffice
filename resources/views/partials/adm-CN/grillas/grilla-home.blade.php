<div class="grilla-home">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-md-6 pl-0">
                <!-- ULTIMA EDICION -->
                <div class="ml-5">
                    <span cass="a-text-black-light text-normal">Última edición : </span>
                    <label class=" zona text-normal separacion">09 Septiembre, </label>
                    <label class="zona-text-normal">2020 20:22:58 GMT</label>
                </div>
                <div class=" mb-2 ml-5 ">
                    <span class="a-text-black-light">Por : </span>
                    <label class="zona text-normal separacion">Hugo</label>
                    <label class="zona text-normal">(Súper Usuario)</label>
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
                    <div class="pt-2">
                        <img src="./images/mobile.svg" class="a-prev-image ml-3 mr-3" alt="mobile" id="prev-mobile">
                        <img src="./images/tablet.svg" class="a-prev-image" alt="tablet" id="prev-tablet">
                        <img src="./images/pc.svg" class="a-prev-image ml-3" alt="pc" id="prev-desktop">
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 pl-0">
                <!--Buttons-->
                <div class="float-left ml-5 mb-4 ">
                    <div class="d-flex">
                        <button class="btn-apro  text-grilla mr-3 gril-claro" id="btn-grilla"><span>Aprobar cambios</span></button>
                        <button class="btn-recha  text-grilla lan-claro" id="btn-landing"><span>Rechazar cambios</span></button>
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