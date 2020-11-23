import $ from "jquery";

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

function modalUrl() {
    let evn;
    $('.show-url').on('click', function () {
        evn = $(this.children[1].children);
        $('#show-url').modal('show');
        $('#modal-link').val(evn.val())
    })
    $('.btn-acepta-url').on('click', function () {
        evn.val($('.modal-link').val())
        $('.modal-link').val('')
        evn = '';
    })
}

function modalClose() {
    $('#close-modal').on('click', function () {
        $('.modal').modal('hide')
    })
}

function modalUrlClose() {
    $('#close-modal-url').on('click', function () {
        $('#show-url').modal('hide')
    })
}

export { previewImage, modalUrl, modalClose, modalUrlClose }