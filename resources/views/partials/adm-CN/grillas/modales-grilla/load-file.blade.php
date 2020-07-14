
@extends('layaout.app')

<div class=" modal show load-file" id=" abrirListo" role="dialog">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content  ">
          <div class="modal-body p-4">
          <img src="images/basic-icons/delete.svg" alt="advertencia de borrado" class="mx-auto d-flex mt-5 ">

              <div class="col-10 mx-auto">
            <p class="a-text-medium-warm-grey-three h3 mt-5  ">La tabla de programación sólo acepta la carga de archivos<span class="h3 a-text-bold-warm-grey-three">  *xlsx.  </span>
            </p>
           <p class="a-text-medium-warm-grey-three h3 mt-5  mt-3"> Por favor, verifica el archivo y reintenta la carga.</p>
           </div>
          </div>
        
          <div class="text-center mb-5 mt-4 pt-3 pb-4 mx-auto">
          <button type="button" class="a-btn-basic-small a-btn-border-teal mr-3 a-text-bold-teal text-normal" id="modal-button" data-dismiss="modal">ACEPTAR</button>
            <button type="button" class="a-btn-basic-small a-btn-teal  a-text-MBlack  text-normal" id="modal-button" data-dismiss="modal">CANCELAR</button>
          </div>
        </div>
      </div>
    </div>

  </div>
