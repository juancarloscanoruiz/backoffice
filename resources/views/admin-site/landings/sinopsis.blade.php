@section('content')
<div id="prev-sinopsis">
    <div class="mx-auto shadow mt-5 col-10 p-0 mb-5 content-table" id="synopsis-table-canal-claro">
        <div class="contenedor-fila">
            <div class="contenedor-columna centro synop titletable">
                <span class="a-text-MBlack a-text-prev">Programa</span>
            </div>
            <div class="contenedor-columna centro  landins titletable">
                <span class="a-text-MBlack a-text-prev">Caracteres</span>
            </div>
            <div class="contenedor-columna centro landins titletable">
                <span class="a-text-MBlack a-text-prev">Imágenes</span>
            </div>
            <div class="contenedor-columna centro landins titletable">
                <span class="a-text-MBlack a-text-prev">Acciones</span>
            </div>
            <div class="contenedor-columna centro landins titletable">
                <span class="a-text-MBlack a-text-prev">Landing</span>
            </div>
        </div>
        <!--fin de titulos-->
        <div class="contenedor-fila">
            <div class="contenedor-columna">
                <span class="a-text-medium-black text-normal pd-5">Mad Men</span>
            </div>
            <div class="contenedor-columna centro">
                <span class="a-text-semibold-tomato text-normal pl-3 ">0</span>
            </div>
            <div class="contenedor-columna centro">
                <span class="a-text-semibold-tomato text-normal ">0/8</span>
            </div>
            <div class="contenedor-columna centro">
                <input type="image" src="./images/lapiz-acti.svg" alt="" class=" btn-focus edi load-file sinopsis  mr-3" />
                <input type="image" src="./images/ojito-acti.svg" alt="" class=" btn-focus edi" />
            </div>
            <div class="contenedor-columna centro ">
                <div class="d-flex align-items-center justify-content-center mb-2 mt-2">
                    <input type="radio" name="landing1" id="yes-landing" value="3" class="edit-switch-landing edit-landing-yes" />
                    <label for="yes-landing" id="siestado-landing" class="mb-0 si-estilo cursor-pointer switch-label">
                        Sí</label>
                    <input type="radio" name="landing1" id="no-landing" value="0" class="edit-switch-landing switch-table-edit edit-landing-no" checked />
                    <label for="no-landing" id="noestado-landing" class="mb-0 no-estilo cursor-pointer switch-label">
                        No</label>
                </div>
            </div>
        </div>

        <div class="contenedor-fila">
            <div class="contenedor-columna">
                <span class="a-text-medium-black text-normal pd-5">Dress Code</span>
            </div>
            <div class="contenedor-columna centro ">
                <span class="a-text-semibold-orange text-normal ">143</span>
            </div>
            <div class="contenedor-columna centro ">
                <span class="a-text-semibold-orange text-normal ">5/8</span>
            </div>
            <div class="contenedor-columna centro">
                <input type="image" src="./images/lapiz-acti.svg" alt="" class=" btn-focus edi mr-3" />
                <input type="image" src="./images/ojito-acti.svg" alt="" class=" btn-focus edi" />
            </div>
            <div class="contenedor-columna centro ">
                <div class="d-flex align-items-center justify-content-center mb-2 mt-2">
                    <input type="radio" id="yes-landing2" name="landing2" value="3" class="edit-switch-landing edit-landing-yes" />
                    <label for="yes-landing2" id="siestado-landing" class="mb-0 si-estilo cursor-pointer switch-label">
                        Sí</label>
                    <input type="radio" id="no-landing2" name="landing2" value="0" class="edit-switch-landing switch-table-edit edit-landing-no" checked />
                    <label for="no-landing2" id="noestado-landing" class="mb-0 no-estilo cursor-pointer switch-label">
                        No</label>
                </div>
            </div>
        </div>
        <div class="contenedor-fila">
            <div class="contenedor-columna">
                <span class="a-text-medium-black text-normal pd-5">Gran Hotel</span>
            </div>
            <div class="contenedor-columna centro ">
                <span class="a-text-semibold-greyish-brown-two  text-normal ">144</span>
            </div>
            <div class="contenedor-columna centro ">
                <span class="a-text-semibold-greyish-brown-two text-normal ">8/8</span>
            </div>
            <div class="contenedor-columna centro">
                <input type="image" src="./images/lapiz-acti.svg" alt="" class=" btn-focus edi mr-3" />
                <input type="image" src="./images/ojito-acti.svg" alt="" class=" btn-focus edi" />
            </div>
            <div class="contenedor-columna centro ">
                <div class="d-flex align-items-center justify-content-center mb-2 mt-2">
                    <input type="radio" id="yes-landing3" value="3" name="landing3" class="edit-switch-landing edit-landing-yes" checked />
                    <label for="yes-landing3" id="siestado-landing" class="mb-0 si-estilo cursor-pointer switch-label">
                        Sí</label>
                    <input type="radio" id="no-landing3" value="0" name="landing3" class="edit-switch-landing switch-table-edit edit-landing-no" />
                    <label for="no-landing3" id="noestado-landing" class="mb-0 no-estilo cursor-pointer switch-label">
                        No</label>
                </div>
            </div>
        </div>
        <div class="contenedor-fila">
            <div class="contenedor-columna">
                <span class="a-text-medium-black text-normal pd-5">Planeta Tierra</span>
            </div>
            <div class="contenedor-columna centro ">
                <span class="a-text-semibold-tomato text-normal pl-2">20</span>
            </div>
            <div class="contenedor-columna centro ">
                <span class="a-text-semibold-tomato text-normal ">4/8</span>
            </div>

            <div class="contenedor-columna centro">
                <input type="image" src="./images/lapiz-acti.svg" alt="" class=" btn-focus edi mr-3" />
                <input type="image" src="./images/ojito-acti.svg" alt="" class=" btn-focus edi" />
            </div>
            <div class="contenedor-columna centro ">
                <div class="d-flex align-items-center justify-content-center mb-2 mt-2">
                    <input type="radio" id="yes-landing4" value="3" name="landing4" class="edit-switch-landing edit-landing-yes" />
                    <label for="yes-landing4" id="siestado-landing" class="mb-0 si-estilo cursor-pointer switch-label">
                        Sí</label>
                    <input type="radio" id="no-landing4" value="0" name="landing4" class="edit-switch-landing switch-table-edit edit-landing-no" checked />
                    <label for="no-landing4" id="noestado-landing" class="mb-0 no-estilo cursor-pointer switch-label">
                        No</label>
                </div>
            </div>
        </div>

        <div class="contenedor-fila">
            <div class="contenedor-columna">
                <span class="a-text-medium-black text-normal pd-5">La Caja de Pandora</span>
            </div>
            <div class="contenedor-columna centro ">
                <span class="a-text-semibold-orange text-normal ">143</span>
            </div>
            <div class="contenedor-columna centro ">
                <span class="a-text-semibold-orange text-normal ">5/8</span>
            </div>
            <div class="contenedor-columna centro">
                <input type="image" src="./images/lapiz-acti.svg" alt="" class=" btn-focus edi mr-3" />
                <input type="image" src="./images/ojito-acti.svg" alt="" class=" btn-focus edi" />
            </div>
            <div class="contenedor-columna centro ">
                <div class="d-flex align-items-center justify-content-center mb-2 mt-2">
                    <input type="radio" id="yes-landing5" value="3" name="landing5" class="edit-switch-landing edit-landing-yes" />
                    <label for="yes-landing5" id="siestado-landing" class="mb-0 si-estilo cursor-pointer switch-label">
                        Sí</label>
                    <input type="radio" id="no-landing5" value="0" name="landing5" class="edit-switch-landing switch-table-edit edit-landing-no" checked />
                    <label for="no-landing5" id="noestado-landing" class="mb-0 no-estilo cursor-pointer switch-label">
                        No</label>
                </div>
            </div>
        </div>
    </div>

</div>
</div>
@endsection