<div class="modal fade" id="modalSinopsis">
    <div class="modal-dialog modal-dialog-centered m-0" style="min-width: 100%;">
        <div class="modal-content">
            <div class="container-fluid mt-4 mb-5">
                <div class="row">
                    <div class="col-12">
                        @include('components.previsualizacion')
                        <div class="navbar">
                            <!-- ULTIMA EDICIÒN -->
                            <div>
                                <span class="a-text-black-light text-plus">Última edición :<samp class="zona ml-2"></samp></span>
                                <span class="a-text-black-light text-plus d-block">Editado por :<samp class="zona ml-2"></samp></span>
                            </div>
                            <!-- ZONA HORARIA -->
                            <div>
                                <button class="btn-zona zona my-2">Zona horaria<img :src="'./images/gmt-icon.svg'" alt="Zona Horaria" class="ml-2" style="width: 32px;"></button>
                            </div>
                        </div>
                        <div class="navbar">
                            <div></div>
                            <!-- ESTABLECER SINOPSIS -->
                            <div class="d-flex align-items-center justify-content-center">
                                <span class="a-text-semibold-black text-normal mr-3">Establecer sinopsis como:</span>
                                <input type="radio" id="yes-program" name="program-chapter" value="1" class="program-chpater-synopsis" />
                                <label for="yes-program" id="siestado-landing" class="mb-0 si-estilo cursor-pointer switch-label width-program">Programa</label>
                                <input type="radio" id="yes-chapter" name="program-chapter" value="0" class="program-chpater-synopsis" checked />
                                <label for="yes-chapter" id="noestado-landing" class="mb-0 no-estilo cursor-pointer switch-label width-program">Capítulo</label>
                            </div>
                        </div>
                        <!-- TITULO -->
                        <div class="mt-5 px-4">
                            <h2 class="text-center a-text-black-brown-two">SINOPSIS</h2>
                            <hr class="hr">
                        </div>
                        <div class="text-center pt-4">
                            <div id="sinopsis-iframe"></div>
                        </div>
                        <!-- BOTONES -->
                        <div class="content mt-4">
                            <div class="d-flex justify-content-center">
                                <button class="m-0 mr-4 btn-grilla a-btn-basic-small text-plus a-text-MBlack" data-dismiss="modal">ACEPTAR</button>
                                <a href="#delete-info" role="button" class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel" data-toggle="modal">CANCELAR</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>