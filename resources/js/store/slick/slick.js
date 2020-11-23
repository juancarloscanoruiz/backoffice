import $ from "jquery";
import "slick-carousel";

var index

function slickShowArrow(slick, dots) {
    try {
        slick.slick("unslick");
        slick.slick({
            dots: true,
            arrows: true,
            prevArrow: '<img src="./images/synopsis/arrow.svg" class="cursor-pointer arrow-left-programming" style="width: 40px;" />',
            nextArrow: '<img src="./images/synopsis/arrow.svg" class="cursor-pointer arrow-right-programming" style="width: 40px;" />',
            fade: true,
            appendDots: dots,
            customPaging: function (slider, i) {
                index = (i + 1)
                return (
                    "<p class='a-text-bold-teal slider-pagination-item'>" +
                    (i + 1) +
                    "</p>"
                );
            }
        });
    } catch (error) {
        slick.slick({
            dots: true,
            arrows: true,
            prevArrow: '<img src="./images/synopsis/arrow.svg" class="cursor-pointer arrow-left-programming" style="width: 40px;"/>',
            nextArrow: '<img src="./images/synopsis/arrow.svg" class="cursor-pointer arrow-right-programming" style="width: 40px;"/>',
            fade: true,
            appendDots: dots,
            customPaging: function (slider, i) {
                index = (i + 1)
                return (
                    "<p class='a-text-bold-teal slider-pagination-item'>" +
                    (i + 1) +
                    "</p>"
                );
            }
        });
    }
    $(".slick-dots-mvh .slick-dots").append('<img src="./images/add-icon.svg" class="add-dots-image cursor-pointer">');
    addSlickDots(index)
}

function addSlickDots(sliderLengt) {
    $('.add-dots-image').on('click', function () {
        sliderLengt++;
        $('.slick-show').slick('slickAdd', `<div class="container-banner"><img class="banner bor responsi-img img_banner_${sliderLengt}" src="./images/synopsis/image-synopsis-carrusel.jpg" alt="" /><input class="d-none previewImage" id="img_banner_${sliderLengt}" type="file" accept="image/*" index="${sliderLengt}" /><div class="container-camera"><label for="img_banner_${sliderLengt}" class="cursor-pointer"><p class="text-center a-text-bold-warm text-plus mb-0"><img class="camera_${sliderLengt}" src="./images/basic-icons/camara.svg" /><span>1920px X 657px</span></p></label></div></div>`);
        $(".slick-dots-mvh .slick-dots").append('<img src="./images/add-icon.svg" class="add-dots-image cursor-pointer">');
        addSlickDots(sliderLengt)
    });
}

function slickShowCalendar(slick, index) {
    if (index >= 12) {
        try {
            slick.slick("unslick");
            slick.slick({
                infinite: true,
                slidesToShow: 11,
                slidesToScroll: 11,
                dots: false,
                arrows: true,
                prevArrow: '<img src="./images/prev.png" class="arrow-prev" />',
                nextArrow: '<img src="./images/next.png" class="arrow-next" />'
            });
            console.log(dots)
        } catch (error) {
            slick.slick({
                infinite: true,
                slidesToShow: 11,
                slidesToScroll: 11,
                dots: false,
                arrows: true,
                prevArrow: '<img src="./images/prev.png" class="arrow-prev" />',
                nextArrow: '<img src="./images/next.png" class="arrow-next" />'
            });
        }
    } else {
        index = (index - 1)
        try {
            slick.slick("unslick");
            slick.slick({
                infinite: true,
                slidesToShow: index,
                slidesToScroll: index,
                dots: false,
                arrows: true,
                prevArrow: '<img src="./images/prev.png" class="arrow-prev" />',
                nextArrow: '<img src="./images/next.png" class="arrow-next" />'
            });
            console.log(dots)
        } catch (error) {
            slick.slick({
                infinite: true,
                slidesToShow: index,
                slidesToScroll: index,
                dots: false,
                arrows: true,
                prevArrow: '<img src="./images/prev.png" class="arrow-prev" />',
                nextArrow: '<img src="./images/next.png" class="arrow-next" />'
            });
        }
    }
}

export { slickShowArrow, slickShowCalendar }