import $ from "jquery";

import { showModalSinopsis } from '../../index'

function previewImage() {
    $('.previewImage').on('change', function (e) {
        let evn = e.target;
        let reader = new FileReader();
        if (evn.files && evn.files[0]) {
            reader.onload = (e) => {
                $('.' + evn.id).attr('src', e.target.result)
            }
            reader.readAsDataURL(evn.files[0]);
        }
    })
}

function closeModals() {
    $('#close-modal').on('click', function () {
        $('.modal').modal('hide')
    })
}

function closeModalUrl() {
    $('#close-modal-url').on('click', function () {
        $('#show-url').modal('hide')
    })
}

function evnUrl() {
    let evn;
    $('.show-url').on('click', function () {
        evn = $(this.children[1].children);
        $('#show-url').modal('show');
    })

    $('#btn-acepta-url').on('click', function () {
        console.log('llego')
        console.log(evn)
        evn.val($('#modal-link').val())
        $('#modal-link').val('')
        evn = '';
    })
}

function evnSinopsis() {
    $('.edi').on('click', function () {
        let chapter_id = $(this).attr('id')
        let type = $(this).attr('name')
        $.ajax({
            type: "POST",
            data: { chapter_id: chapter_id },
            cache: false,
            url: "landing/getSynopsis",
            success: function (res) {
                eveRollEdiPrev(type)
                if (type == 'edi') {
                    showModalSinopsis(JSON.stringify(JSON.parse(res)))
                }

                // if ($(this).attr('name') == 'edi') {
                //     let json = JSON.parse(res)
                //     sinopsis(json.data)
                //     // while (state.landingSinopsis[`image_background_${state.sliderLengt}`]) {
                //     //     let url = state.landingSinopsis[`image_background_${state.sliderLengt}`]
                //     //     let img = { img: url }
                //     //     state.slider.push(img);
                //     //     state.sliderLengt++
                //     // }
                //     // sinopsis(JSON.stringify(state.sinopsis))
                //     // state.editable = true;
                // } else {
                //     // sinopsisPrev(JSON.stringify(state.sinopsis))
                //     // state.previsualizacion = true;
                // }
            }
        })
    })
}

function eveRollEdiPrev(type) {
    if (type == 'edi') {
        $('.rollEdiPrev').html(`
    <div class="d-flex prev text-small a-text-medium-brownish location mt-2">
        <input type="radio" name="rol" id="edit-syn" checked />
        <label for="edit-syn" id="editar" class="mujer-estilo d-flex align-items-center pl-4 pt-3">
            <p class=" a-prev-title">EDITAR</p>
        </label>
        <input type="radio" name="rol" id="prev-syn" />
        <label for="prev-syn" id="previsualiza" class="hombre-estilo pl-2 pt-3 a-prev-title">
            <p>PREVISUALIZAR</p>
        </label>
        <img src="./images/mobile.svg" class="a-prev-image ml-3 mr-3 op-inac" alt="mobile">
        <img src="./images/tablet.svg" class="a-prev-image op-inac" alt="tablet">
        <img src="./images/pc.svg" class="a-prev-image ml-3 op-inac" alt="pc">
    </div>`)
    } else {
        $('.rollEdiPrev').html(`
    <div class="d-flex prev text-small a-text-medium-brownish location mt-2">
        <input type="radio" name="rol" id="edit-syn" />
        <label for="edit-syn" id="editar" class="mujer-estilo d-flex align-items-center pl-4 pt-3" name="edi">
            <p class=" a-prev-title">EDITAR</p>
        </label>
        <input type="radio" name="rol" id="prev-syn" checked />
        <label for="prev-syn" id="previsualiza" class="hombre-estilo pl-2 pt-3 a-prev-title" name="prev">
            <p>PREVISUALIZAR</p>
        </label>
        <img src="./images/mobile.svg" class="a-prev-image ml-3 mr-3 op-inac cursor-pointer" alt="mobile" id="prev-mobile">
        <img src="./images/tablet.svg" class="a-prev-image op-inac cursor-pointer" alt="tablet" id="prev-tablet">
        <img src="./images/pc.svg" class="a-prev-image ml-3 op-ac cursor-pointer" alt="pc" id="prev-desktop">
    </div>`)
    }

}

export {
    closeModals,
    closeModalUrl,
    previewImage,
    evnUrl,
    evnSinopsis
}