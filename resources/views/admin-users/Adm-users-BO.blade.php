
<body>
    <div id="segunda">
      <!--div para el cambio-->
      <div id="Adm-users-BO">
        <div class="col-xl-10 position-btn-alta">
          <button class=" d-flex align-items-center btn-alta text-public mb-4" id="btnAlta">Agregar nuevo usuario</button>
        </div>
        <div class="sombras2 trans10 mb-5">
          <!--titulos de la tabla-->
          <div class="grid-users  texto-general users-backoffice-table">

        <!--  </div>

            <div class="row descri4">
              <input type="image" src="./images/ver-muestra.svg" class="btn-focus ver tam "></input>
              <input type="image" src="./images/edita-muestra.svg" class="btn-focus edi tam"></input>
              <input type="image" src="./images/borrar-muestra.svg" class="btn-focus borrar tam"></input>
            </div>
            <div class="descri2">
              <div class="veri"><img src="./images/recuadro1-hover.svg"><span class="text-veri">Visualizar</span></div>
              <div class="edita"><img src="./images/recuadro1-hover.svg"><span class="text-edita">Editar</span></div>
              <div class="borra"><img src="./images/recuadro1-hover.svg"><span class="text-borra">Borrar</span></div>
            </div>

          </div>-->
        </div>

        <!--Para funcionalidad-->

      </div>
    </div>
      <!--modal borrar-->
  <div class="modal show modal-delete-user" id="abrirBorrar" role="dialog">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content align-item-center centro  modal-defi1 ">
        <div class="modal-body ">
          <img src="./images/advertencia.svg" alt="" class="mb-3">
          <p class="modal-text">¿Desea eliminar este usuario?</p>
          <p class="text-modal-text1 modal-delete-username-bo"></p>
        </div>
        <div class="pb-4 align-item-center centro">
          <button type="button" class=" btn-no text-no" id="modal-button" data-dismiss="modal">No</button>
          <button type="button" class="btn-si text-si modal-delete-button-confirm" id="modal-button">Sí</button>

        </div>
      </div>
    </div>
  </div>
</body>

