<body>
    <!-- Modal 1 -->
    <div id="modal-enacabezado" class="modal fade modal-encabezado">
        <p class="p-text-bold-black">CARGAR IMAGENES FORMATO PNG</p>
        <p class="p-title-black">ENCABEZADO</p>
        <hr>
        <div class="content">
            <div class="img-content">
                <label for="encabezadoImg">
                    <div id="imgEncabezado"></div>
                    <input required class="d-none" onChange="File(this)" id="encabezadoImg" name="encabezadoImg"
                        type="file">
                </label>
                <small>INTENTA DE NUEVO CON UNA IMAGEN PNG</small>
            </div>
            <div class="txt-content">
                <p>HOY EN</p>
            </div>
            <div class="txt-content">
                <span>CANAL CLARO</span>
            </div>
            <div class="programacion-content">
                <a class="a-btn-tomato" href="#">VER PROGRAMACIÓN</a>
            </div>
        </div>
        <div class="url-content">
            <img src="img/oval.svg" alt="">
            <input class="input-url" placeholder="Enlace o URL" type="text">
        </div>
        <div class="modal-footer">
            <div class="m-auto">
                <button class="a-btn-basic-small a-button-outline-teal a-text-bold-teal text-plus">ACEPTAR</button>
                <button data-dismiss="modal"
                    class="ml-5 a-btn-basic-small a-button-outline-teal a-text-bold-teal text-plus ">CANCELAR</button>
            </div>
        </div>
    </div>
    <!-- modal 1 -->
    <!-- Modal 2 -->
    <div id="modal-url" class="modal fade modal-url">
        <p>Vínculo a una página web existente</p>
        <div class="url-modal-content">
            <img width="57px" class="img-url" src="img/oval.svg" alt="">
            <input class="input-url-modal" placeholder="Pega el enlace o URL" type="text">
            <small class="error">INTENTA DE NUEVO CON UNA IMAGEN PNG</small>
        </div>
        <div class="modal-footer mt-3">
            <div class="m-auto">
                <button class="a-btn-basic-small a-button-outline-teal a-text-bold-teal text-plus">ACEPTAR</button>
                <button data-dismiss="modal"
                    class="ml-5 a-btn-basic-small a-button-outline-teal a-text-bold-teal text-plus ">CANCELAR</button>
            </div>
        </div>
    </div>
    <!-- Modal 2 -->
</body>