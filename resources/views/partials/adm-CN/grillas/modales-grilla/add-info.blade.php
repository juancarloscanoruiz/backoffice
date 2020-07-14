
@extends('layaout.app')

<div class=" modal show modal-delete-row" id=" abrirListo" role="dialog">
      <div class="modal-dialog modal-lg modal-dialog-centered" style="max-width:1000px">
        <div class="modal-content  ">
          <div class="modal-body ">
          <img src="images/basic-icons/delete.svg" alt="advertencia de borrado" class="mx-auto d-flex mt-5 ">
            <p class="a-text-medium-warm-grey-three h3 mt-5 centro">Ya existe información para esas fechas.<br> ¿Qué quieres hacer?</p>
          </div>
        
          <div class="text-center mb-5 mt-2 pt-3 pb-4">
            <button type="button" class="a-btn-basic-large a-btn-border-tomato mr-3 a-text-bold-tomato text-normal" id="modal-button" data-dismiss="modal">REMPLAZAR INFORMACIÓN</button>
            <button type="button" class="a-btn-basic-large a-btn-border-tomato mr-3 a-text-bold-tomato text-normal" id="modal-button" data-dismiss="modal">ADICIONAR INFORMACIÓN</button>
            <button type="button" class="a-btn-basic-large a-btn-tomato  a-text-MBlack  text-normal" id="modal-button" data-dismiss="modal">CANCELAR</button>
          </div>
        </div>
      </div>
    </div>

  </div>
