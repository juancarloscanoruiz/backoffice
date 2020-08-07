//JQUERY
import $ from "jquery";

function updateImagesOfProgrammingSlider(data) {
    $.ajax({
        type: "POST",
        data: data,
        processData: false, //esto es para poder pasar el archivo
        contentType: false, //esto es para poder pasar el archivo
        url: "landing/update-programming-carrusel",
        success: function (result) {
            console.log(result);
        }
    });

}
function getChapterInfo(data) {
    $.ajax({
        type: "GET",
        url: "landing/get-chapter-info/"+data,
        success: function (result) {
            let data = JSON.parse(result);
            console.log(data.program.title);
            //$('#prog_titulo_programa').prop("title","ok");
           $('#prog_sinopsis').val(data.program.synopsis)
           
            $(".calendar-slider").slick({
                slidesToShow: 11,
                slidesToScroll: 11,
                infinite: true,
                dots: false,
                centerMode: false,
                arrows: true,
                prevArrow: '<img src="../images/prev.png" class="arrow-prev" />',
                nextArrow: '<img src="../images/next.png" class="arrow-next" />'
            });
            $(".modal-edit-program").modal("show");
        }
    });
}


export {
    getChapterInfo,
    updateImagesOfProgrammingSlider
}
