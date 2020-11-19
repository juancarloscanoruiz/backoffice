import $ from "jquery";

const LOADER = `<div class="loader-view-container" id="loader1"><img src="./images/loader.gif" class="loader" alt=""></div>`;

import { showModalSinopsis, sinopsisPrev, programacion, iframePrev, clearIframe, showlanding, home } from '../../index'
import { previewPage } from "../../preview/prev.js";

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
        console.log(evn)
    })
    $('#btn-acepta-url').on('click', function () {
        evn.val($('#modal-link').val())
        $('#modal-link').val('')
        evn = '';
    })
}

function evnSinopsis() {
    $('.edi').on('click', function () {
        $("body").append(LOADER);
        let chapter_id = $(this).attr('id')
        let type = $(this).attr('name')
        $.ajax({
            type: "POST",
            data: { chapter_id: chapter_id },
            cache: false,
            url: "landing/getSynopsis",
            success: function (res) {
                if (type == 'edi') {
                    showModalSinopsis(JSON.stringify(JSON.parse(res)))
                } else {
                    sinopsisPrev(JSON.stringify(JSON.parse(res)))
                }
            }
        })
    })
}

function loadRoll() {
    let mvh;
    $('#editar').on('click', function () {
        $(".mvhImg").load("imports #mvh-edit");
        mvh = $(this).attr('mvh');
        switch (mvh) {
            case '0':
                clearIframe()
                programacion('programacion-edi.php')
                break
            case '1':
                console.log('en proseso')
                break
            case '2':
                clearIframe()
                showlanding('claro-canal-edi.php')
                break
            case '3':
                clearIframe()
                home('home-edi-claro.php')
                break
        }
    })

    $('#previsualiza').on('click', function () {
        $(".mvhImg").load("imports #mvh-prev", function () {
            $(".a-prev-image").click(function () {
                previewPage($(this));
            });
        });
        mvh = $(this).attr('mvh');
        switch (mvh) {
            case '0':
                clearIframe()
                iframePrev('programacion-prev.php')
                break
            case '1':
                console.log('en proseso')
                break
            case '2':
                clearIframe()
                iframePrev('claro-canal.php')
                break
            case '3':
                clearIframe()
                iframePrev('home-prev.php')
                break
        }
    })
}

export {
    closeModals,
    closeModalUrl,
    previewImage,
    evnUrl,
    evnSinopsis,
    loadRoll
}