@section('scripts')
<div class="modal modal-landing-sinopsis pr-0" id="modaledi" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" style="padding: 0px !important; overflow: auto; ">
    <div class="modal-dialog modal-dialog-centered m-0" role="document" style="max-width: 100%;">
        <div class="modal-content">
            <div class="modal-body">
                <div id="title" class="mt-3">
                    <div class="float-left ml-5 mb-2 " style="margin-left: 7%;">
                        <div class="d-flex  ">
                            <button class="btn-apro  text-grilla mr-3 gril-claro" id="btn-grilla"><span>Aprobar
                                    cambios</span></button>
                            <button class="btn-recha  text-grilla lan-claro" id="btn-landing"><span>Rechazar cambios</span></button>
                        </div>
                    </div>
                    <div class="d-flex float-right mb-4 mr-5 ">
                        <form action="" name="formilariosexo" id="formulariosexo" class="formulario">
                            <div class=" d-flex prev text-small a-text-medium-brownish location mt-2">
                                <input type="radio" name="sexo" id="edit-synopsis" checked />
                                <label for="edit-synopsis" id="editar" class="mujer-estilo d-flex align-items-center pl-4 pt-3">
                                    <p class=" a-prev-title">EDITAR</p>
                                </label>
                                <input type="radio" name="sexo" id="prev-synopsis" />
                                <label for="prev-synopsis" id="previsualiza" class="hombre-estilo pl-2 pt-3">
                                    <p class=" a-prev-title ">PREVISUALIZAR</p>
                                </label>
                            </div>
                        </form>
                        <div class="pt-2">
                            <img src="./images/mobile.svg" class="a-prev-image ml-3 mr-3 op-inac pointer-none" alt="mobile" id="prev-mobile">
                            <img src="./images/tablet.svg" class="a-prev-image op-inac pointer-none" alt="tablet" id="prev-tablet">
                            <img src="./images/pc.svg" class="a-prev-image ml-3 op-ac cursor-pointer" alt="pc" id="prev-desktop">
                         </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="ml-5 float-left ">
                        <div><span class="a-text-black-light text-plus">Última edición : <span class="zona date-edit" id="date-edit">septiembre 17
                                    2019</span> </span></div>
                        <span class="a-text-black-light text-plus">Editado por: <label class="zona"> {{ session('name') }} (<label class="zona ">{{ session('rol_name') }}</label>)</label></span>
                    </div>

                    <div class=" mr-5 d-flex float-right ">
                        <button class="btn-zona zona">Zona horaria <img src={{ asset('images/gmt-icon.svg') }} class="Icon_paises1" width="32px" /></div></button>

                </div>
                <div class="clearfix"></div>
                <div class="mr-5 float-right">
                    <div class="d-flex  align-items-center justify-content-center mb-2 mt-2">
                        <span class="a-text-semibold-black text-normal mr-3">Establecer sinopsis como:</span>
                        <input type="radio" id="yes-program" name="program-chapter" value="1" class="program-chpater-synopsis" />
                        <label for="yes-program" id="siestado-landing" class="mb-0 si-estilo cursor-pointer switch-label width-program">
                            Programa</label>
                        <input type="radio" id="yes-chapter" name="program-chapter" value="0" class="program-chpater-synopsis" checked />
                        <label for="yes-chapter" id="noestado-landing" class="mb-0 no-estilo cursor-pointer switch-label width-program">
                            Capítulo</label>
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class=" mx-auto">
                    <h3 class="a-text-black-brown-two h3 d-flex justify-content-center mt-3">SINOPSIS</h3>
                    <hr class="d-flex align-content-center separationhr col-11 mt-4 mb-5">

                </div>
                <div class="centro">
                    <div class="  mb-5" id="sinopsis-container">
                    </div>
                </div>
                <!--Buttons-->
                <div class="text-center mb-3 d-flex justify-content-center">
                    <button class="edit-landing-modal-button d-flex mr-3 text-uppercase  m-0 btn-grilla a-btn-basic-small btn-grilla a-btn-basic-small text-uppercase a-text-MBlack text-plus" id="image-programming-button" landin="canal claro" data-dismiss="modal">aceptar</button>
                    <a href="#delete-info-encabezado" role="button" class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel" data-toggle="modal">CANCELAR</a>

                    <!-- <button
                                              class="d-inline-block text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal" data-toggle="modal"   >cancelar</button>-->
                </div>
            </div>

        </div>
    </div>
</div>
@include('partials.adm-CN.modals-sinopsis.banner-sinopsis')
@include('partials.adm-CN.modals-sinopsis.image-synopsis')
@include('partials.adm-CN.modals-sinopsis.edit-synopsis')
@include('partials.adm-CN.modals-sinopsis.images-synopsis')
@include('partials.adm-CN.modals-sinopsis.info-synopsis')
