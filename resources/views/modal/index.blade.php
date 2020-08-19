@extends('layaout.app')

<body class="bg-dark">
    <!-- Modal 1 -->
    <div id="modal-encabezado" class="modal-encabezado d-none">
        <p class="p-text-bold-black">CARGAR IMAGENES FORMATO PNG</p>
        <p class="p-title-black">ENCABEZADO</p>
        <hr>
        <div class="content">
            <div class="img-content">
                <label for="encabezadoImg">
                    <img src="images/modal/img-base.png">
                    <input required class="d-none" id="encabezadoImg" name="encabezadoImg" type="file">
                </label>
                <small class="error">INTENTA DE NUEVO CON UNA IMAGEN PNG</small>
            </div>
            <div class="txt-content">
                <p>HOY EN</p>
            </div>
            <div class="txt-content">
                <span>CANAL CLARO</span>
            </div>
            <div class="programacion-content">
                <a class="btn-tomato" href="#">VER PROGRAMACIÓN</a>
            </div>
        </div>
        <div class="url-content">
            <img src="images/basic-icons/link.svg">
            <input class="input-url" placeholder="Enlace o URL" type="text">
        </div>
        <div class="modal-footer">
            <div class="btn-content m-auto">
                <button disabled class="a-btn-basic-small a-button-outline-teal" style="opacity: .3;">ACEPTAR</button>
                <button data-dismiss="modal" class="ml-5 a-btn-basic-small a-button-outline-teal">CANCELAR</button>
            </div>
        </div>
    </div>
    <!-- modal 1 -->
    <!-- Modal 2 -->
    <div id="modal-url" class="modal-url">
        <p>Vínculo a una página web existente</p>
        <div class="url-modal-content">
            <img width="57px" src="images/basic-icons/link.svg" alt="">
            <input class="input-url-modal" placeholder="Pega el enlace o URL" type="text">
            <small class="error">INTENTA DE NUEVO CON UNA IMAGEN PNG</small>
        </div>
        <div class="modal-footer">
            <div class="m-auto">
                <button class="a-btn-basic-small a-button-outline-teal a-text-bold-teal text-plus" style="opacity: .3;">ACEPTAR</button>
                <button data-dismiss="modal" class="ml-5 a-btn-basic-small a-button-outline-teal a-text-bold-teal text-plus ">CANCELAR</button>
            </div>
        </div>
    </div>
    <!-- Modal 2 -->

    <!--IMAGEN-->
    <script>
        $(document).ready(function() {
            Img();
        });
    </script>
</body>