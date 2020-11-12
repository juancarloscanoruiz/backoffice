import $ from "jquery";

function previewImage() {
    $('.previewImage').on('change', function (e) {
        let evn = e.target;
        let reader = new FileReader();
        if (evn.files && evn.files[0]) {
            reader.onload = (e) => {
                $('.'+ evn.id).attr('src', e.target.result)
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

export {
    closeModals,
    previewImage
}