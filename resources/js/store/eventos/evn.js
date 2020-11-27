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

function dateCalendar() {
    $(".litepicker").remove();
    $(".date-modal").remove();

    let date = new Date();
    let calendarYear = date.getFullYear();
    let calendarMonth = date.getMonth() + 1;
    let calendarDay = date.getDate();

    let picker = new Litepicker({
        element: document.getElementById("programming-modal"),
        format: "YYYY-MM-DD",
        delimiter: ",",
        minDate: `${calendarYear}-${calendarMonth}-${calendarDay}`,
        onShow: function () {
            picker.picker.style.left = "50%";
            picker.picker.style.top = "50%";
            picker.picker.style.transform = "translate(-50%, -50%)";
            $(".litepicker").wrap("<div class='date-modal' id='modal-container'></div>");
            $("#modal-container").css("display", "block");
        },
        onHide: function () {
            $("#modal-container").css("display", "none");
        },
        onSelect: function () {
            let fullDate = document.getElementById("programming-modal").value.split(",");
            let startDate = fullDate[0];
            let startDateSplit = startDate.split("-");
            let startDateFull = `${startDateSplit[2]}-${startDateSplit[1]}-${startDateSplit[0]}`;
            $("#start-date-text").text(startDateFull);

            let endDate = fullDate[1];
            let endDateSplit = endDate.split("-");
            let endDateFull = `${endDateSplit[2]}-${endDateSplit[1]}-${endDateSplit[0]}`;
            $("#end-date-text").text(endDateFull);
        },
        numberOfMonths: 1,
        numberOfColumns: 1,
        singleMode: false
    });
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
        $('.show-url').modal('hide')
    })
}

export { previewImage, modalUrl, modalClose, modalUrlClose, dateCalendar }