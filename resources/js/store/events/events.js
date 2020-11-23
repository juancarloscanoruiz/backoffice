import $ from "jquery";

const LOADER = `<div class="loader-view-container" id="loader1"><img src="./images/loader.gif" class="loader" alt=""></div>`;

import { showModalSinopsis, sinopsisPrev, iframePrev, clearIframe, showlanding, home } from '../../index'
import { previewPage } from "../../preview/prev.js";
import { getProgramacionDate } from "../getters";

import { getChapterInfo } from "../../services/landing.js";

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

function modalUrl() {
    let evn;
    $('.show-url').on('click', function () {
        evn = $(this.children[1].children);
        $('#show-url').modal('show');
        $('#modal-link').val(evn.val())
    })
    $('#btn-acepta-url').on('click', function () {
        evn.val($('#modal-link').val())
        $('#modal-link').val('')
        evn = '';
    })
}

function dateCalendar() {
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





// function closeModals() {
//     console.log('watch modal close')

//     $(".close-modal-concert").click(function () {
//         $("#delete-info").modal("hide");
//         $(".modal-programming-carousel").modal("hide");
//         $(".modal-edit-icons").modal("hide");
//         $(".modal-landing-sinopsis").modal("hide");
//         $("#modal-logo-home").modal("hide");
//         $("#modal-carrusel-home").modal("hide");
//         $("#modal-terminos-footer").modal("hide");
//         $("#modal-privacy-footer").modal("hide");
//         $("#url").modal("hide");
//         $("#modaledi").modal("hide");
//         $(".modal").modal("hide");
//         $(".modal-backdrop").removeClass('modal-backdrop');
//         $(".modal-backdrop").remove();
//         console.log('si llega')
//     });

//     $('#close-modal').on('click', function () {
//         $('.modal').modal('hide')
//         $('#sinopsis-iframe iframe').remove();
//     })
// }

// function closeModalUrl() {
//     $('#close-modal-url').on('click', function () {
//         $('#show-url').modal('hide')
//     })
// }

// function evnUrl() {
//     let evn;
//     $('.show-url').on('click', function () {
//         evn = $(this.children[1].children);
//         $('#show-url').modal('show');
//         console.log(evn)
//     })
//     $('#btn-acepta-url').on('click', function () {
//         evn.val($('#modal-link').val())
//         $('#modal-link').val('')
//         evn = '';
//     })
// }

// function evnCalendar() {
//     // let date = new Date();
//     // let calendarYear = date.getFullYear();
//     // let calendarMonth = date.getMonth() + 1;
//     // let calendarDay = date.getDate();
//     // let picker = new Litepicker({
//     //     element: document.getElementById("programming-modal"),
//     //     format: "YYYY-MM-DD",
//     //     delimiter: ",",
//     //     minDate: `${calendarYear}-${calendarMonth}-${calendarDay}`,
//     //     onShow: function () {
//     //         picker.picker.style.left = "50%";
//     //         picker.picker.style.top = "50%";
//     //         picker.picker.style.transform = "translate(-50%, -50%)";
//     //         $(".litepicker").wrap("<div class='date-modal' id='modal-container'></div>");
//     //         $("#modal-container").css("display", "block");
//     //     },
//     //     onHide: function () {
//     //         $("#modal-container").css("display", "none");
//     //     },
//     //     onSelect: function () {
//     //         let fullDate = document.getElementById("programming-modal").value.split(",");
//     //         let startDate = fullDate[0];
//     //         let startDateSplit = startDate.split("-");
//     //         let startDateFull = `${startDateSplit[2]}-${startDateSplit[1]}-${startDateSplit[0]}`;
//     //         $("#start-date-text").text(startDateFull);

//     //         let endDate = fullDate[1];
//     //         let endDateSplit = endDate.split("-");
//     //         let endDateFull = `${endDateSplit[2]}-${endDateSplit[1]}-${endDateSplit[0]}`;
//     //         $("#end-date-text").text(endDateFull);
//     //     },
//     //     numberOfMonths: 1,
//     //     numberOfColumns: 1,
//     //     singleMode: false
//     // });
// }

// function evnSinopsis() {
//     $('.edi').on('click', function () {
//         let chapter_id = $(this).attr('id')
//         let type = $(this).attr('name')
//         $.ajax({
//             type: "POST",
//             data: { chapter_id: chapter_id },
//             cache: false,
//             url: "landing/getSynopsis",
//             success: function (res) {
//                 if (type == 'edi') {
//                     showModalSinopsis(JSON.stringify(JSON.parse(res)))
//                     $(".loader-container").remove();
//                 } else {
//                     sinopsisPrev(JSON.stringify(JSON.parse(res)))
//                 }
//             }
//         })
//     })

//     $('.synopsis-calendar-item').on('click', function () {
//         $("body").append(LOADER);
//         $(".synopsis-calendar-item").removeClass("programming-item-active");
//         $(this).addClass("programming-item-active");
//         getProgramacionDate($(this).attr("date"), 2)
//     })
// }

// function loadRoll() {
//     let mvh;
//     $('#editar').on('click', function () {
//         $(".mvhImg").load("imports #mvh-edit");
//         mvh = $(this).attr('mvh');
//         switch (mvh) {
//             case '0':
//                 clearIframe()
//                 // programacion('programacion-edi.php')
//                 break
//             case '1':
//                 console.log('en proseso')
//                 break
//             case '2':
//                 clearIframe()
//                 showlanding('claro-canal-edi.php')
//                 break
//             case '3':
//                 clearIframe()
//                 home('home-edi-claro.php')
//                 break
//         }
//     })

//     $('#previsualiza').on('click', function () {
//         $(".mvhImg").load("imports #mvh-prev", function () {
//             $(".a-prev-image").click(function () {
//                 previewPage($(this));
//             });
//         });
//         mvh = $(this).attr('mvh');
//         switch (mvh) {
//             case '0':
//                 clearIframe()
//                 // iframePrev('programacion-prev.php')
//                 break
//             case '1':
//                 console.log('en proseso')
//                 break
//             case '2':
//                 clearIframe()
//                 iframePrev('claro-canal.php')
//                 break
//             case '3':
//                 clearIframe()
//                 iframePrev('home-prev.php')
//                 break
//         }
//     })
// }

// function synopsisCalendarItem() {
//     $('.synopsis-calendar-item').on('click', function () {
//         $("body").append(LOADER);
//         $(".synopsis-calendar-item").removeClass("programming-item-active");
//         $(this).addClass("programming-item-active");
//         getProgramacionDate($(this).attr("date"), 1)
//     })
// }

// function evnProgramacion() {
//     $('.pencil-edit').on('click', function () {
//         getChapterInfo($(this).attr('chapter_id'))
//     })
// }

export {
    previewImage, modalClose, dateCalendar, modalUrlClose, modalUrl
    // closeModals, closeModalUrl, evnUrl, evnSinopsis, loadRoll, synopsisCalendarItem, evnProgramacion
}