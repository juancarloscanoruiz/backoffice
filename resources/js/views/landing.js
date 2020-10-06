//jQuery
import $ from "jquery";
//Controller
import LandingController from "../controllers/landing.js";
let landingController = new LandingController();

const LOADER = `<div class="loader-view-container pointer-none">
    <img src="./images/loader.gif" class="loader"/>
</div>`;

//Helper
import PrevImageHelper from "../helpers/PrevImage.js";

import { resetIframe } from "../vendor/easyXDM.js";

export default class LandingView {
    renderHomeHeaderCanalClaro() {
        $("body").append(LOADER);
        let data = landingController.getContentHome();
        data.then(data => {
            if (data.code == 200) {
                // Add name
                $("#landing_name").attr("value", "Canal Claro");
                //Add a class to the button
                $("#dinamic_btn").addClass("btn-red");
                //set the width of the image
                $("#img-logo-home").addClass("img-logo-home-claro");
                //Set the width of the container
                $("#dinamic_width").addClass("modal-img-home-claro");
                $("#inp_canales_subtitulo").val(data.data.block_3_subtitle);
                $("#inp_url").val(data.data.block_3_icon_channel_url);
                //Change the logo
                $("#img-logo-home").attr("src", data.data.block_3_icon_channel);
                //Modal
                $("#modal-logo-home").modal("show");
                // Remove loader
                $(".loader-view-container").remove();
            }
        });
    }

    renderHomeHeaderConcertChannel() {
        $("body").append(LOADER);
        let data = landingController.getContentHome();
        data.then(data => {
            if (data.code == 200) {
                // Add name
                $("#landing_name").attr("value", "Concert Channel");
                //Add a class to the button
                $("#dinamic_btn").addClass("btn-pink");
                //set the width of the image
                $("#img-logo-home").addClass("img-logo-home");
                //Set the width of the container
                $("#dinamic_width").addClass("modal-img-home");
                $("#inp_canales_subtitulo").val(data.data.block_4_subtitle);
                $("#inp_url").val(data.data.block_4_icon_channel_url);
                //Change the logo
                $("#img-logo-home").attr("src", data.data.block_4_icon_channel);
                //Modal
                $("#modal-logo-home").modal("show");
                // Remove loader
                $(".loader-view-container").remove();
            }
        });
    }

    renderHomeHeaderClaroCinema() {
        $("body").append(LOADER);
        let data = landingController.getContentHome();
        data.then(data => {
            if (data.code == 200) {
                // Add name
                $("#landing_name").attr("value", "Claro Cinema");
                //Add a class to the button
                $("#dinamic_btn").addClass("btn-red");
                //set the width of the image
                $("#img-logo-home").addClass("img-logo-home");
                //Set the width of the container
                $("#dinamic_width").addClass("modal-img-home");
                $("#inp_canales_subtitulo").val(data.data.block_5_subtitle);
                $("#inp_url").val(data.data.block_5_icon_channel_url);
                //Change the logo
                $("#img-logo-home").attr("src", data.data.block_5_icon_channel);
                //Modal
                $("#modal-logo-home").modal("show");
                // Remove loader
                $(".loader-view-container").remove();
            }
        });
    }
    renderHomeBanner() {
        $("body").append(LOADER);
        let data = landingController.getContentHome();
        data.then(data => {
            if (data.code == 200) {
                //Imágenes para móvil
                let count = 1;
                let imagesMobile = [];
                while (true) {
                    if (data.data[`block_1_image_background_${count}`]) {
                        imagesMobile.push(
                            data.data[`block_1_image_background_${count}`]
                        );
                        count++;
                    } else {
                        break;
                    }
                }

                //Título en header de home
                let headerTitle1 = $(".modal-home-encabezado .header-title-1");
                //Subtítulo de home
                let headerTitle2 = $(".modal-home-encabezado .header-title-2");
                let title = data.data.block_1_title;
                let subtitle = data.data.block_1_subtitle;
                //let headerVideo = $(".modal-home-encabezado .video-header");

                // headerVideo.val(data.data.block_1_video_name);
                $("#pc").prop("checked", true);
                let file = "";
                if (data.data.block_1_video_name) {
                    //Verificamos si la url es de una imagen
                    if (
                        data.data.block_1_video_name.match(
                            /\.(jpeg|jpg|gif|png)$/
                        ) != null
                    ) {
                        file = `<img src="${data.data.block_1_video_name}" alt="" class="d-flex w-100" id="image-promo-header-home">`;
                    } else {
                        //La url es de un video
                        file = `
                <img src="./images/basic-icons/pencil-edit-teal.svg" alt="add-photo" class="add-photo promo-icon cursor-pointer" style="width: 62px; position: absolute; transform: translate(215px, -112px);" />
                <span class="a-text-bold-warm text-plus p-2 pr-3 pl-3 white-shadow position-absolute " style="    transform: translate(207px, -40px);">Añade tu archivo <br> jpg 472px X 295px </span>
                <video class="w-100 h-100 home-video" id="video-promo-header-home" style="display: block" controls muted autoplay>
                    <source src="${data.data.block_1_video_name}" type="video/mp4">
                </video>`;
                    }
                }
                $(".pc").html("");
                $(".pc").html(`
                <!-- parte del home-->
                <div class="d-flex col-12 mb-5 mx-auto">
                  <div class="mr-5">
                    <img src="./images/home/claro-logo.svg" class="d-flex mb-2 ml-4" />
                    <!--navbar-->
                    <div class="claro-navbar d-flex ml-3 mt-0 claro-navbar-black">
                      <div>
                        <a href="" class="navbar-link text-decoration-none">
                          <p class="navbar-item-black text-semibold">Canal Claro</p>
                        </a>
                      </div>
                      <div>
                        <a href="" class="navbar-link text-decoration-none">
                          <p class="navbar-item-black text-semibold">Concert Channel</p>
                        </a>
                      </div>
                      <div>
                        <a href="" class="navbar-link text-decoration-none">
                          <p class="navbar-item-black text-semibold">Claro Cinema</p>
                        </a>
                      </div>
                      <div>
                        <a target="_blank" href="" class="navbar-link text-decoration-none">
                          <p class="navbar-item-black text-semibold">Nuestra Visión</p>
                        </a>
                      </div>
                      <div>
                        <a href="" target="_blank" class="navbar-link text-decoration-none">
                          <p class="navbar-item-black text-semibold">Claro Sports</p>
                        </a>
                      </div>
                      <!-- <div>
                            <a href="programacion.php" class="navbar-link text-decoration-none">
                                <p class="navbar-item">Programación</p>
                            </a>
                            </div>-->
                    </div>
                    <!--<div class="login">
                                <a href="" class="login-item"><img class="login-country" alt="" src="./images/paises/ecuador.svg"></a>
                            </div>-->

                    <!--inputs-->
                    <input
                      type="text"
                      name=""
                      id=""
                      class="input-title-home a-text-black-teal title-home text-uppercase pl-4 mt-6 title-home-enca border-none opa-holder ml-3 header-title-1 d-flex"
                      placeholder="TITULO"
                      value="${title}"/>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="input-subtitle-home a-text-black-blacktwo title-home text-uppercase pl-4 subtitle-home-enca border-none opa-holder mt-2 ml-3 header-title-2 d-flex"
                      placeholder="SUBTITULO"
                      value="${subtitle}"/>
                  </div>
                  <div class="d-flex justify-content-around">
                    <input
                      type="file"
                      name=""
                      id="video-promo-header-home"
                      class="d-none file-video"
                      accept="video/*"/>
                    <label
                      for="video-promo-header-home"
                      class="mb-0 cursor-pointer circle-video d-flex justify-content-center align-items-center flex-column load-modales video-header">
                        ${file}
                    </label>
                    <!--  <input type="file" name="" id="image-promo-header-home" class="d-none">
                            <label for="image-promo-header-home"
                                class="mb-0 cursor-pointer  d-flex justify-content-center align-items-center h-100 mb-3 flex-column load-modales">
                                <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                                    class="add-photo promo-icon cursor-pointer" style="width:95px" />
                                <span class="a-text-bold-warm text-plus p-2 pr-3 pl-3 mr-4 white-shadow">Añade tu archivo
                                    jpg 472px X 295px </span>
                            </label>-->
                  </div>
                </div>

                <div class="float-right mr-5 mb-3">
                    <span class="a-text-bold-brown-two text-normal">
                        Nombre_Promoción_ConcertChannel_20200709.mp4
                    </span>
                </div>
                <div class="clearfix"></div>`);
                let homeHeaderButtons = $(".home-encabezado-buttons");
                homeHeaderButtons.html("");
                homeHeaderButtons.html(`
                    <div class="text-center  mb-4 d-flex justify-content-center pb-2">
                        <button
                            class="d-flex m-0  mr-3  btn-grilla a-btn-basic-small  text-uppercase a-text-MBlack text-plus edit-landing-modal-button"
                            id="edit-home-encabezado" data-dismiss="modal">ACEPTAR</button>
                        <a href="#delete-info-encabezado-home" role="button"
                            class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel"
                            data-toggle="modal">CANCELAR</a>
                    </div>`);
                $(".programming-slider-home")
                    .not(".slick-initialized")
                    .slick({
                        slidesToShow: 1,
                        dots: true,
                        appendDots: $(".programming-slider-dots-home"),
                        initialSlide: 0,
                        arrows: true,
                        prevArrow:
                            '<img src="./images/synopsis/arrow.svg" class="arrow-left-programming" />',
                        nextArrow:
                            '<img src="./images/synopsis/arrow.svg" class="arrow-right-programming" />',
                        infinite: false,
                        customPaging: function(slider, i) {
                            var thumb = $(slider.$slides[i]).data();
                            return (
                                "<p class='a-text-bold-teal slider-pagination-item'>" +
                                (i + 1) +
                                "</p>"
                            );
                        }
                    });
                //Mostramos el modal
                $(".modal-home-encabezado").modal("show");
                //Eliminamos
                $(".loader-view-container").remove();
                this.renderHomeMobile(imagesMobile);
                this.renderHomePC(
                    title,
                    subtitle,
                    data.data.block_1_video_name
                );
            }
        });
    }

    renderHomeMobile(images) {
        let _this = this;
        $("#movil").click(function() {
            let imagesArrayLength = images.length;
            let imageMobile = "";
            for (let index = 0; index < imagesArrayLength; index++) {
                imageMobile += `
                <div class="bor thumbnail-image-program position-relative h-100">
                <input
                  type="file"
                  id="image_home_slider_${index + 1}"
                  class="input-image-program d-none image-home-banner"
                  data-index="${index + 1}"
                />
                <label
                  for="image_home_slider_${index + 1}"
                  class="h-100 mb-0 d-flex justify-content-center align-items-center flex-column load-programming-carousel"
                >
                  <img
                    src="./images/synopsis/camara.svg"
                    alt="add-photo"
                    class="cursor-pointer add-photo"
                  />
                  <span class="p-1 a-text-bold-warm text-plus mt-3 banner-text"
                    >665px X 426px
                  </span>
                  <img
                    src="${images[index]}"
                    class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program"
                  />
                </label>
              </div>
                `;
            }

            //Al dar click en switch de previsualizar, removemos el iframe e insertamos otro
            $(".pc").html("");
            $(".pc").html(`
                <div class="d-flex col-12 mb-5 mx-auto">
                    <div class="mr-5 mx-auto">
                    <div class="d-flex">
                        <!--dots-->
                        <div class="programming-slider-dots-home mt-5 mb-5"></div>
                        <!--add slide-->
                        <img
                        src="./images/add-icon.svg"
                        class="cursor-pointer mb-3" id="add-home-banner-image"
                        />
                    </div>
                    <!--  <div class="shadowblack position-absolute">
                    <img src="./images/basic-icons/GMT-White.svg" alt="" class="float-right">
                    </div>-->
                    <div class="home-slider-container position-relative">
                        <div class="menu-mobile">
                            <div class="d-flex justify-content-between">
                                <img src="./images/home/responsive-menu.svg" alt="menu-icon" />
                                <img class="menu-mobile__logo" src="./images/home/claro-networks-white.svg" alt="Claro Networks Logo" />
                                <img src="./images/gmt2-icon.svg" alt="gmt icon" />
                            </div>
                        </div>
                        <div class="programming-slider-home mx-auto">
                        ${imageMobile}
                        </div>
                    </div>
                    </div>
                </div>
                <div class="d-flex mr-5 mb-3">
                    <span class="a-text-bold-brown-two text-normal"
                    >Nombre_Promoción_ConcertChannel_20200709.mp4</span
                    >
                </div>
                <div class="clearfix"></div>
            `);
            let homeHeaderButtons = $(".home-encabezado-buttons");
            homeHeaderButtons.html("");
            homeHeaderButtons.html(`
                <div class="text-center  mb-4 d-flex justify-content-center pb-2">
                    <button
                        class="d-flex m-0  mr-3  btn-grilla a-btn-basic-small  text-uppercase a-text-MBlack text-plus edit-landing-modal-button"
                        id="edit-home-encabezado-mobile" data-dismiss="modal">ACEPTAR</button>
                    <a href="#delete-info-encabezado" role="button"
                        class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel"
                        data-toggle="modal">CANCELAR</a>
                </div>
            `);
            let programmingSliderHome = $(".programming-slider-home");
            try {
                programmingSliderHome.slick("unslick");
                programmingSliderHome.not(".slick-initialized").slick({
                    slidesToShow: 1,
                    dots: true,
                    appendDots: $(".programming-slider-dots-home"),
                    initialSlide: 0,
                    arrows: true,
                    prevArrow:
                        '<img src="./images/synopsis/arrow.svg" class="arrow-left-programming" />',
                    nextArrow:
                        '<img src="./images/synopsis/arrow.svg" class="arrow-right-programming" />',
                    infinite: false,
                    customPaging: function(slider, i) {
                        var thumb = $(slider.$slides[i]).data();
                        return (
                            "<p class='a-text-bold-teal slider-pagination-item'>" +
                            (i + 1) +
                            "</p>"
                        );
                    }
                });
            } catch (error) {
                programmingSliderHome.not(".slick-initialized").slick({
                    slidesToShow: 1,
                    dots: true,
                    appendDots: $(".programming-slider-dots-home"),
                    initialSlide: 0,
                    arrows: true,
                    prevArrow:
                        '<img src="./images/synopsis/arrow.svg" class="arrow-left-programming" />',
                    nextArrow:
                        '<img src="./images/synopsis/arrow.svg" class="arrow-right-programming" />',
                    infinite: false,
                    customPaging: function(slider, i) {
                        var thumb = $(slider.$slides[i]).data();
                        return (
                            "<p class='a-text-bold-teal slider-pagination-item'>" +
                            (i + 1) +
                            "</p>"
                        );
                    }
                });
            }
            //Añadir una imagen al slider
            _this.addImageToHomeBanner();
            PrevImageHelper.prevUploadedImage();
        });
    }

    renderHomePC(title, subtitle, media) {
        $("#pc").click(function() {
            //Hacemos una validación para saber si es imagen o es un video
            let file = "";
            if (media) {
                //Verificamos si la url es de una imagen
                if (media.match(/\.(jpeg|jpg|gif|png)$/) != null) {
                    file = `<img src="${media}" alt="" class="d-flex w-100" id="image-promo-header-home">`;
                } else {
                    file = `
                    <img src="./images/basic-icons/pencil-edit-teal.svg" alt="add-photo" class="add-photo promo-icon cursor-pointer" style="width: 62px; position: absolute; transform: translate(215px, -112px);" />
                    <span class="a-text-bold-warm text-plus p-2 pr-3 pl-3 white-shadow position-absolute " style="transform: translate(207px, -40px);">Añade tu archivo <br> jpg 472px X 295px </span>
                    <video class="w-100 h-100 home-video" id="video-promo-header-home d-block" controls muted autoplay>
                        <source src="${media}" type="video/mp4">
                    </video>`;
                }
            }
            $(".pc").html("");
            $(".pc").html(`
            <!-- parte del home-->
            <div class="d-flex col-12 mb-5 mx-auto">
              <div class="mr-5">
                <img src="./images/home/claro-logo.svg" class="d-flex mb-2 ml-4" />
                <!--navbar-->
                <div class="claro-navbar d-flex ml-3 mt-0 claro-navbar-black">
                  <div>
                    <a href="" class="navbar-link text-decoration-none">
                      <p class="navbar-item-black text-semibold">Canal Claro</p>
                    </a>
                  </div>
                  <div>
                    <a href="" class="navbar-link text-decoration-none">
                      <p class="navbar-item-black text-semibold">Concert Channel</p>
                    </a>
                  </div>
                  <div>
                    <a href="" class="navbar-link text-decoration-none">
                      <p class="navbar-item-black text-semibold">Claro Cinema</p>
                    </a>
                  </div>
                  <div>
                    <a target="_blank" href="" class="navbar-link text-decoration-none">
                      <p class="navbar-item-black text-semibold">Nuestra Visión</p>
                    </a>
                  </div>
                  <div>
                    <a href="" target="_blank" class="navbar-link text-decoration-none">
                      <p class="navbar-item-black text-semibold">Claro Sports</p>
                    </a>
                  </div>
                  <!-- <div>
                        <a href="programacion.php" class="navbar-link text-decoration-none">
                            <p class="navbar-item">Programación</p>
                        </a>
                        </div>-->
                </div>
                <!--<div class="login">
                            <a href="" class="login-item"><img class="login-country" alt="" src="./images/paises/ecuador.svg"></a>
                        </div>-->

                <!--inputs-->
                <input
                  type="text"
                  name=""
                  id=""
                  class="input-title-home a-text-black-teal title-home text-uppercase pl-4 mt-6 title-home-enca border-none opa-holder ml-3 header-title-1 d-flex"
                  placeholder="TITULO"
                  value="${title}"/>
                <input
                  type="text"
                  name=""
                  id=""
                  class="input-subtitle-home a-text-black-blacktwo title-home text-uppercase pl-4 subtitle-home-enca border-none opa-holder mt-2 ml-3 header-title-2 d-flex"
                  placeholder="SUBTITULO"
                  value="${subtitle}"/>
              </div>
              <div class="d-flex justify-content-around">
                <input
                  type="file"
                  name=""
                  id="video-promo-header-home"
                  class="d-none file-video"
                  accept="video/*"/>
                <label
                  for="video-promo-header-home"
                  class="mb-0 cursor-pointer circle-video d-flex justify-content-center align-items-center flex-column load-modales video-header">
                    ${file}
                </label>
                <!--  <input type="file" name="" id="image-promo-header-home" class="d-none">
                        <label for="image-promo-header-home"
                            class="mb-0 cursor-pointer  d-flex justify-content-center align-items-center h-100 mb-3 flex-column load-modales">
                            <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                                class="add-photo promo-icon cursor-pointer" style="width:95px" />
                            <span class="a-text-bold-warm text-plus p-2 pr-3 pl-3 mr-4 white-shadow">Añade tu archivo
                                jpg 472px X 295px </span>
                        </label>-->
              </div>
            </div>

            <div class="float-right mr-5 mb-3">
                <span class="a-text-bold-brown-two text-normal">
                    Nombre_Promoción_ConcertChannel_20200709.mp4
                </span>
            </div>
            <div class="clearfix"></div>`);
        });
        let homeHeaderButtons = $(".home-encabezado-buttons");
        homeHeaderButtons.html("");
        homeHeaderButtons.html(`
        <div class="text-center  mb-4 d-flex justify-content-center pb-2">
            <button
                class="d-flex m-0  mr-3  btn-grilla a-btn-basic-small  text-uppercase a-text-MBlack text-plus edit-landing-modal-button"
                id="edit-home-encabezado" data-dismiss="modal">ACEPTAR</button>
            <a href="#delete-info-encabezado-home" role="button"
                class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel"
                data-toggle="modal">CANCELAR</a>
        </div>
    `);
    }

    addImageToHomeBanner() {
        $("#add-home-banner-image").click(function() {
            let slideIndex = $(".programming-slider-home").length + 1;
            //Cada vez que se haga click, el contador incrementa

            //Agregamos un slide al slider de programación
            $(".programming-slider-home").slick(
                "slickAdd",
                `
                <div class="slick-slide">
                    <div class="bor thumbnail-image-program position-relative h-100">
                        <input
                        type="file"
                        name="image_programming[]"
                        id="image_home_slider_${slideIndex}"
                        class="input-image-program d-none image_programming"
                        data-index="${slideIndex}"
                        />
                        <label
                        for="image_home_slider_${slideIndex}"
                        class="h-100 mb-0 d-flex justify-content-center align-items-center flex-column load-programming-carousel"
                        >
                        <img
                            src="./images/synopsis/camara.svg"
                            alt="add-photo"
                            class="cursor-pointer add-photo"
                        />
                        <span class="p-1 a-text-bold-warm text-plus mt-3 banner-text"
                            >665px X 426px
                        </span>
                        <img
                            src="./images/synopsis/image-synopsis-carrusel.jpg"
                            class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program"
                        />
                        </label>
                    </div>
                </div>
                `
            );
        });
    }

    uploadHomeBannerImages(container, options) {
        $("body").append(
            `<div class="loader-view-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
        );
        let imagesPositions = [];
        let imagesProgramming = [];
        //Input donde suben la imagen
        $(".image-home-banner").each(function() {
            if (this.files[0]) {
                imagesPositions.push($(this).attr("data-index"));
            }
            imagesProgramming.push(this.files[0]);
        });
        let data = new FormData();
        //Guardamos las imágenes en un array
        for (let index = 0; index < imagesProgramming.length; index++) {
            let file = "file" + (index + 1).toString();
            file = file.toString();
            data.append(file, imagesProgramming[index]);
        }
        //data.append("images", imagesProgramming);
        data.append("positions", imagesPositions);
        let response = landingController.uploadHomeBannerImages(data);
        response
            .then(data => {
                $(".loader-view-container").remove();
                $(".modal-home-encabezado").modal("hide");
                resetIframe(container, options);
            })
            .catch(err => console.log(err));
    }

    renderFooterClaroNetworks() {
        let that = this;
        const baseURL =
            "http://www.claronetworks.openofficedospuntocero.info/v1.2/";
        let containerFooterClaroNetworks = document.getElementById(
            "claro-networks-programing"
        );
        let FooterClaroNetworks = {
            remote: `${baseURL}footer-edition.php`,
            //remote: `http://localhost:8888/MaquetaCNetworks/footer-edition.php`,
            container: document.getElementById("claro-networks-programing"),
            onMessage: function(message, origin) {
                let json = JSON.parse(message);

                if (typeof json == "object") {
                    switch (json.type) {
                        case "footer-claro-networks":
                            that.renderContentFooter("footer-claro-networks");
                        default:
                            break;
                    }
                }
                this.container.getElementsByTagName("iframe")[0].style.height =
                    message + "px";
                this.container
                    .getElementsByTagName("iframe")[0]
                    .setAttribute("scrolling", "no");
                this.container.getElementsByTagName(
                    "iframe"
                )[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
            }
        };
        if (containerFooterClaroNetworks) {
            /*             var socketFooterClaroNetworks = new easyXDM.Socket(
                            FooterClaroNetworks
                        ); */
            return FooterClaroNetworks;
        }
    }

    renderFooterClaroCanal() {
        let that = this;
        const baseURL =
            "http://www.claronetworks.openofficedospuntocero.info/v1.2/";
        let containerFooterClaroCanal = document.getElementById(
            "claro-canal-programing"
        );
        let FooterClaroCanalOptions = {
            remote: `${baseURL}footer-claro-edi.php`,
            //remote: `http://localhost:8888/MaquetaCNetworks/footer-claro-edi.php`,
            container: containerFooterClaroCanal,
            onMessage: function(message, origin) {
                let json = JSON.parse(message);
                if (typeof json == "object") {
                    switch (json.type) {
                        case "footer-canal-claro":
                            that.renderContentFooter("footer-canal-claro");

                        default:
                            break;
                    }
                }
                this.container.getElementsByTagName("iframe")[0].style.height =
                    message + "px";
                this.container
                    .getElementsByTagName("iframe")[0]
                    .setAttribute("scrolling", "no");
                this.container.getElementsByTagName(
                    "iframe"
                )[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
            }
        };
        if (containerFooterClaroCanal) {
            return FooterClaroCanalOptions;
            /*             var socketFooterClaroCanal = new easyXDM.Socket(
                            FooterClaroCanalOptions
                        ); */
        }
    }

    renderFooterConcertChannel() {
        let that = this;
        const baseURL =
            "http://www.claronetworks.openofficedospuntocero.info/v1.2/";
        let containerFooterConcertChannel = document.getElementById(
            "concert-channel-programing"
        );
        let FooterConcertChannelOptions = {
            remote: `${baseURL}footer-concert-edi.php`,
            //remote: `http://localhost:8888/MaquetaCNetworks/footer-concert-edi.php`,
            container: containerFooterConcertChannel,
            onMessage: function(message, origin) {
                let json = JSON.parse(message);
                if (typeof json == "object") {
                    switch (json.type) {
                        case "footer-concert-channel":
                            that.renderContentFooter("footer-concert-channel");

                            break;
                        default:
                            break;
                    }
                }
                this.container.getElementsByTagName("iframe")[0].style.height =
                    message + "px";
                this.container
                    .getElementsByTagName("iframe")[0]
                    .setAttribute("scrolling", "no");
                this.container.getElementsByTagName(
                    "iframe"
                )[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
            }
        };
        if (containerFooterConcertChannel) {
            return FooterConcertChannelOptions;
            /*             var socketFooterConcertChannel = new easyXDM.Socket(
                            FooterConcertChannelOptions
                        ); */
        }
    }

    renderFooterClaroCinema() {
        let that = this;
        const baseURL =
            "http://www.claronetworks.openofficedospuntocero.info/v1.2/";
        let containerFooterClaroCinema = document.getElementById(
            "claro-cinema-programing"
        );
        let FooterClaroCinemaOptions = {
            remote: `${baseURL}footer-cinema-edi.php`,
            //remote: `http://localhost:8888/MaquetaCNetworks/footer-cinema-edi.php`,
            container: containerFooterClaroCinema,
            onMessage: function(message, origin) {
                let json = JSON.parse(message);
                if (typeof json == "object") {
                    switch (json.type) {
                        case "footer-claro-cinema":
                            that.renderContentFooter("footer-claro-cinema");

                            break;
                        default:
                            break;
                    }
                }
                this.container.getElementsByTagName("iframe")[0].style.height =
                    message + "px";
                this.container
                    .getElementsByTagName("iframe")[0]
                    .setAttribute("scrolling", "no");
                this.container.getElementsByTagName(
                    "iframe"
                )[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
            }
        };
        if (containerFooterClaroCinema) {
            return FooterClaroCinemaOptions;
            /*
                        var socketFooterClaroCinema = new easyXDM.Socket(
                            FooterClaroCinemaOptions
                        ); */
        }
    }

    renderFooterPrev(sockets) {
        const baseURL =
            "http://www.claronetworks.openofficedospuntocero.info/v1.2/";
        $("#prev-footer").click(function() {
            $(".navbar-prev-footers iframe").remove();
            let footerClaroNetoworksPrev = {
                remote: `${baseURL}footer-prev.php`,
                //remote: `http://localhost:8888/MaquetaCNetworks/footer-prev.php`,
                container: document.getElementById("claro-networks-programing"),
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName(
                        "iframe"
                    )[0].style.height = message + "px";
                    this.container
                        .getElementsByTagName("iframe")[0]
                        .setAttribute("scrolling", "no");
                    this.container.getElementsByTagName(
                        "iframe"
                    )[0].style.boxShadow =
                        "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            };
            let footerCanalClaroPrev = {
                remote: `${baseURL}footer-claro-prev.php`,
                //remote: `http://localhost:8888/MaquetaCNetworks/footer-claro-prev.php`,
                container: document.getElementById("claro-canal-programing"),
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName(
                        "iframe"
                    )[0].style.height = message + "px";
                    this.container
                        .getElementsByTagName("iframe")[0]
                        .setAttribute("scrolling", "no");
                    this.container.getElementsByTagName(
                        "iframe"
                    )[0].style.boxShadow =
                        "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            };
            let footerConcertChannelPrev = {
                remote: `${baseURL}footer-concert-prev.php`,
                //remote: `http://localhost:8888/MaquetaCNetworks/footer-concert-prev.php`,
                container: document.getElementById(
                    "concert-channel-programing"
                ),
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName(
                        "iframe"
                    )[0].style.height = message + "px";
                    this.container
                        .getElementsByTagName("iframe")[0]
                        .setAttribute("scrolling", "no");
                    this.container.getElementsByTagName(
                        "iframe"
                    )[0].style.boxShadow =
                        "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            };
            let footerClaroCinemaPrev = {
                remote: `${baseURL}footer-cinema-prev.php`,
                //remote: `http://localhost:8888/MaquetaCNetworks/footer-cinema-prev.php`,
                container: document.getElementById("claro-cinema-programing"),
                onMessage: function(message, origin) {
                    console.log(message);
                    this.container.getElementsByTagName(
                        "iframe"
                    )[0].style.height = message + "px";
                    this.container
                        .getElementsByTagName("iframe")[0]
                        .setAttribute("scrolling", "no");
                    this.container.getElementsByTagName(
                        "iframe"
                    )[0].style.boxShadow =
                        "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            };

            //Iframes
            sockets[0] = new easyXDM.Socket(footerClaroNetoworksPrev);
            sockets[1] = new easyXDM.Socket(footerCanalClaroPrev);
            sockets[2] = new easyXDM.Socket(footerConcertChannelPrev);
            sockets[3] = new easyXDM.Socket(footerClaroCinemaPrev);

            $("#prev-mobile")
                .removeClass("pointer-none")
                .addClass("cursor-pointer");
            $("#prev-tablet")
                .removeClass("pointer-none")
                .addClass("cursor-pointer");
        });
    }

    renderFooterEdit(sockets) {
        let that = this;
        $("#edit-footer").click(function() {
            $(".navbar-prev-footers iframe").remove();
            let optionsFooterClaroNetworks = that.renderFooterClaroNetworks();
            let optionsFooterCanalClaro = that.renderFooterClaroCanal();
            let optionsFooterConcertChannel = that.renderFooterConcertChannel();
            let optionsFooterClaroCinema = that.renderFooterClaroCinema();
            //Iframes
            sockets[0] = new easyXDM.Socket(optionsFooterClaroNetworks);
            sockets[1] = new easyXDM.Socket(optionsFooterCanalClaro);
            sockets[2] = new easyXDM.Socket(optionsFooterConcertChannel);
            sockets[3] = new easyXDM.Socket(optionsFooterClaroCinema);

            $("#prev-mobile")
                .removeClass("cursor-pointer")
                .addClass("pointer-none");
            $("#prev-mobile").css("opacity", "0.4");
            $("#prev-tablet")
                .removeClass("cursor-pointer")
                .addClass("pointer-none");
            $("#prev-tablet").css("opacity", "0.4");
            $("#prev-desktop").css("opacity", "1");
        });
    }
    renderContentFooter(landingFooter) {
        $("body").append(
            `<div class="loader-view-container pointer-none">
                <img src="./images/loader.gif" class="loader"/>
            </div>`
        );
        let data = landingController.getContentFooter();
        data.then(data => {
            if (data.code == 200) {
                let socialMedia = $("#social-media");
                //Instagram
                let socialMedia2 = $("#social-media-2");
                //Twitter
                let socialMedia3 = $("#social-media-3");
                //youtube
                let socialMedia4 = $("#social-media-4");
                //evaluamos cuál footer es

                switch (landingFooter) {
                    case "footer-claro-networks":
                        socialMedia.hide();
                        break;
                    case "footer-canal-claro":
                        socialMedia.show();
                        socialMedia2.show();
                        socialMedia4.show();
                        //Social media 1
                        let iconSocialMediaCanalClaro1 =
                            data.data.facebook_canal_claro_icon;
                        let linkSocialMediaCanalClaro1 =
                            data.data.facebook_canal_claro_url;
                        $("#footer-social-media-icon-1").attr(
                            "src",
                            iconSocialMediaCanalClaro1
                        );
                        $("#footer-social-media-link-1").val(
                            linkSocialMediaCanalClaro1
                        );
                        $("#footer-social-media-link-1").addClass(
                            "media-link-1"
                        );
                        $("#footer-social-media-link-1").attr({
                            free: "media-link-1",
                            key: "facebook_canal_claro_url"
                        });
                        $("#social-media-1-input").attr(
                            "key",
                            "facebook_canal_claro_icon"
                        );
                        $("#media-link-1").attr({
                            free: "media-link-1",
                            key: "facebook_canal_claro_url"
                        });
                        //Social media 2
                        let iconSocialMediaCanalClaro2 =
                            data.data.instagram_canal_claro_icon;
                        let linkSocialMediaCanalClaro2 =
                            data.data.instagram_canal_claro_url;
                        $("#footer-social-media-icon-2").attr(
                            "src",
                            iconSocialMediaCanalClaro2
                        );
                        $("#footer-social-media-link-2").val(
                            linkSocialMediaCanalClaro2
                        );
                        $("#footer-social-media-link-2").addClass(
                            "media-link-2"
                        );
                        $("#footer-social-media-link-2").attr({
                            free: "media-link-2",
                            key: "instagram_canal_claro_url"
                        });
                        $("#social-media-2-input").attr(
                            "key",
                            "instagram_canal_claro_icon"
                        );
                        $("#media-link-2").attr({
                            free: "media-link-2",
                            key: "instagram_canal_claro_url"
                        });
                        //Social media 3
                        let iconSocialMediaCanalClaro3 =
                            data.data.twitter_canal_claro_icon;
                        let linkSocialMediaCanalClaro3 =
                            data.data.twitter_canal_claro_url;
                        $("#footer-social-media-icon-3").attr(
                            "src",
                            iconSocialMediaCanalClaro3
                        );
                        $("#footer-social-media-link-3").val(
                            linkSocialMediaCanalClaro3
                        );
                        $("#footer-social-media-link-3").addClass(
                            "media-link-3"
                        );
                        $("#footer-social-media-link-3").attr({
                            free: "media-link-3",
                            key: "twitter_canal_claro_url"
                        });
                        $("#social-media-3-input").attr(
                            "key",
                            "twitter_canal_claro_icon"
                        );
                        $("#media-link-3").attr({
                            free: "media-link-3",
                            key: "twitter_canal_claro_url"
                        });
                        //Social media 4
                        let iconSocialMediaCanalClaro4 =
                            data.data.youtube_canal_claro_icon;
                        let linkSocialMediaCanalClaro4 =
                            data.data.youtube_canal_claro_url;
                        $("#footer-social-media-icon-4").attr(
                            "src",
                            iconSocialMediaCanalClaro4
                        );
                        $("#footer-social-media-link-4").val(
                            linkSocialMediaCanalClaro4
                        );
                        $("#footer-social-media-link-4").addClass(
                            "media-link-4"
                        );
                        $("#footer-social-media-link-4").attr({
                            free: "media-link-4",
                            key: "youtube_canal_claro_url"
                        });
                        $("#social-media-4-input").attr(
                            "key",
                            "youtube_canal_claro_icon"
                        );
                        $("#media-link-4").attr({
                            free: "media-link-4",
                            key: "youtube_canal_claro_url"
                        });
                        break;
                    case "footer-concert-channel":
                        socialMedia.show();
                        socialMedia2.hide();
                        socialMedia4.hide();
                        //Social media 1
                        let iconSocialMediaConcertChannel1 =
                            data.data.facebook_concert_channel_icon;
                        let linkSocialMediaConcertChannel1 =
                            data.data.facebook_concert_channel_url;
                        $("#footer-social-media-icon-1").attr(
                            "src",
                            iconSocialMediaConcertChannel1
                        );
                        $("#footer-social-media-link-1").val(
                            linkSocialMediaConcertChannel1
                        );
                        $("#footer-social-media-link-1").addClass(
                            "media-link-1"
                        );
                        $("#footer-social-media-link-1").attr({
                            free: "media-link-1",
                            key: "facebook_concert_channel_icon"
                        });
                        $("#social-media-1-input").attr(
                            "key",
                            "facebook_concert_channel_icon"
                        );
                        $("#media-link-1").attr({
                            free: "media-link-1",
                            key: "facebook_concert_channel_icon"
                        });
                        //Social media 3
                        let iconSocialMediaConcertChannel3 =
                            data.data.twitter_concert_channel_icon;
                        let linkSocialMediaConcertChannel3 =
                            data.data.twitter_concert_channel_url;
                        $("#footer-social-media-icon-3").attr(
                            "src",
                            iconSocialMediaConcertChannel3
                        );
                        $("#footer-social-media-link-3").val(
                            linkSocialMediaConcertChannel3
                        );
                        $("#footer-social-media-link-3").addClass(
                            "media-link-3"
                        );
                        $("#footer-social-media-link-3").attr({
                            free: "media-link-3",
                            key: "twitter_concert_channel_url"
                        });
                        $("#social-media-3-input").attr(
                            "key",
                            "twitter_concert_channel_icon"
                        );
                        $("#media-link-3").attr({
                            free: "media-link-3",
                            key: "twitter_concert_channel_url"
                        });
                        break;

                    case "footer-claro-cinema":
                        socialMedia.hide();
                        break;
                    default:
                        break;
                }

                let imageRight = data.data.image_right;

                let imageLeft = data.data.image_left;
                if (imageRight) {
                    $(".footer-image-right")
                        .closest("label")
                        .find(".add-photo")
                        .attr(
                            "src",
                            "./images/basic-icons/pencil-edit-teal.svg"
                        );
                } else {
                    imageRight =
                        "./images/synopsis/image-synopsis-horizontal.png";
                }

                if (imageLeft) {
                    $(".footer-image-left")
                        .closest("label")
                        .find(".add-photo")
                        .attr(
                            "src",
                            "./images/basic-icons/pencil-edit-teal.svg"
                        );
                } else {
                    imageLeft =
                        "./images/synopsis/image-synopsis-horizontal.png";
                }
                //Imágenes de arriba
                $(".footer-image-right").attr("src", imageRight);
                $(".footer-image-left").attr("src", imageLeft);
                //Menu 1
                //¿Quiénes Somos?
                let optionTitle1 = data.data.menu_1_opcion_1_title;
                let optionLink1 = data.data.menu_1_opcion_1_url;
                $("#footer-menu-1-opcion1-title").val(optionTitle1);
                $("#footer-menu-1-opcion1-link").val(optionLink1);
                $("#footer-menu-1-opcion1-link").addClass("opcion1");
                $("#footer-menu-1-opcion1-link").attr({
                    free: "opcion1",
                    key: "menu_1_opcion_1_url"
                });
                $("#opcion1-link").attr({
                    free: "opcion1",
                    key: "menu_1_opcion_1_url"
                });
                //Canal Claro
                let optionTitle2 = data.data.menu_1_opcion_2_title;
                let optionLink2 = data.data.menu_1_opcion_2_url;
                $("#footer-menu-1-opcion2-title").val(optionTitle2);

                $("#footer-menu-1-opcion2-link").val(optionLink2);
                $("#footer-menu-1-opcion2-link").addClass("opcion2");
                $("#footer-menu-1-opcion2-link").attr({
                    free: "opcion2",
                    key: "menu_1_opcion_2_url"
                });
                $("#opcion2-link").attr({
                    free: "opcion2",
                    key: "menu_1_opcion_2_url"
                });
                //Concert Channel
                let optionTitle3 = data.data.menu_1_opcion_4_title;
                let optionLink3 = data.data.menu_1_opcion_4_url;
                $("#footer-menu-1-opcion3-title").val(optionTitle3);
                $("#footer-menu-1-opcion3-link").val(optionLink3);
                $("#footer-menu-1-opcion3-link").addClass("opcion3");
                $("#footer-menu-1-opcion3-link").attr({
                    free: "opcion3",
                    key: "menu_1_opcion_4_url"
                });
                $("#opcion3-link").attr({
                    free: "opcion3",
                    key: "menu_1_opcion_4_url"
                });
                //Claro Cinema
                let optionTitle4 = data.data.menu_1_opcion_3_title;
                let optionLink4 = data.data.menu_1_opcion_3_url;
                $("#footer-menu-1-opcion4-title").val(optionTitle4);
                $("#footer-menu-1-opcion4-link").val(optionLink4);
                $("#footer-menu-1-opcion4-link").addClass("opcion4");
                $("#footer-menu-1-opcion4-link").attr({
                    free: "opcion4",
                    key: "menu_1_opcion_3_url"
                });
                $("#opcion4-link").attr({
                    free: "opcion4",
                    key: "menu_1_opcion_3_url"
                });
                //Nuestra Visión
                let optionTitle5 = data.data.menu_1_opcion_6_title;
                let optionLink5 = data.data.menu_1_opcion_6_url;
                $("#footer-menu-1-opcion5-title").val(optionTitle5);
                $("#footer-menu-1-opcion5-link").val(optionLink5);
                $("#footer-menu-1-opcion5-link").addClass("opcion5");
                $("#footer-menu-1-opcion5-link").attr({
                    free: "opcion5",
                    key: "menu_1_opcion_6_url"
                });
                $("#opcion5-link").attr({
                    free: "opcion5",
                    key: "menu_1_opcion_6_url"
                });
                //Claro Sports
                let optionTitle6 = data.data.menu_1_opcion_5_title;
                let optionLink6 = data.data.menu_1_opcion_5_url;
                $("#footer-menu-1-opcion6-title").val(optionTitle6);
                $("#footer-menu-1-opcion6-link").val(optionLink6);
                $("#footer-menu-1-opcion6-link").addClass("opcion6");
                $("#footer-menu-1-opcion6-link").attr({
                    free: "opcion6",
                    key: "menu_1_opcion_5_url"
                });
                $("#opcion6-link").attr({
                    free: "opcion6",
                    key: "menu_1_opcion_5_url"
                });
                //Icon claro networks footer
                let iconClaroNetworksFooter = data.data.about_icon;
                let footerAboutIcon = $("#footer-about-icon");
                if (iconClaroNetworksFooter) {
                    footerAboutIcon
                        .prev()
                        .attr(
                            "src",
                            "./images/basic-icons/pencil-edit-teal.svg"
                        );
                } else {
                    iconClaroNetworksFooter =
                        "./images/synopsis/image-synopsis-horizontal.png";
                }
                footerAboutIcon.attr("src", iconClaroNetworksFooter);

                //rights legend
                let rightsLegend = data.data.about_legend;
                $("#footer-rights-legend").val(rightsLegend);
                //Footer terms legend
                let termsLegend = data.data.about_link_1_title;
                //privacy legend
                let privacyLegend = data.data.about_link_2_title;
                $("#footer-legend-privacy").text(privacyLegend);
                $("#footer-legend-terms").text(termsLegend);
                //Footer icon 1
                //fuente de imagen
                let footerIcon1 = data.data.menu_2_opcion_1_icon;
                //url
                let footerIconLink1 = data.data.menu_2_opcion_1_url;
                //Input
                let footerIconLinkInput1 = $("#footer-icon-link-1");
                //Imagen
                let footerIconImage1 = $("#footer-icon-1");
                if (footerIcon1) {
                    footerIconImage1
                        .prev()
                        .attr(
                            "src",
                            "./images/basic-icons/pencil-edit-teal.svg"
                        );
                } else {
                    footerIcon1 =
                        "./images/synopsis/image-synopsis-horizontal.png";
                }
                footerIconImage1.attr("src", footerIcon1);
                footerIconLinkInput1.val(footerIconLink1);
                footerIconLinkInput1.addClass("link-1");
                footerIconLinkInput1.attr({
                    free: "link-1",
                    key: "menu_2_opcion_1_url"
                });
                $("#link-1").attr({
                    free: "link-1",
                    key: "menu_2_opcion_1_url"
                });
                //Footer icon 2
                let footerIcon2 = data.data.menu_2_opcion_2_icon;
                let footerIconLink2 = data.data.menu_2_opcion_2_url;
                $("#footer-icon-2").attr("src", footerIcon2);
                $("#footer-icon-link-2").val(footerIconLink2);
                $("#footer-icon-link-2").addClass("link-2");
                $("#footer-icon-link-2").attr({
                    free: "link-2",
                    key: "menu_2_opcion_2_url"
                });
                $("#link-2").attr({
                    free: "link-2",
                    key: "menu_2_opcion_2_url"
                });
                //Footer icon 3
                let footerIcon3 = data.data.menu_2_opcion_3_icon;
                let footerIconLink3 = data.data.menu_2_opcion_3_url;
                $("#footer-icon-3").attr("src", footerIcon3);
                $("#footer-icon-link-3").val(footerIconLink3);
                $("#footer-icon-link-3").addClass("link-3");
                $("#footer-icon-link-3").attr({
                    free: "link-3",
                    key: "menu_2_opcion_3_url"
                });
                $("#link-3").attr({
                    free: "link-3",
                    key: "menu_2_opcion_3_url"
                });
                //Footer icon 4
                let footerIcon4 = data.data.menu_2_opcion_4_icon;
                let footerIconLink4 = data.data.menu_2_opcion_4_url;
                $("#footer-icon-4").attr("src", footerIcon4);
                $("#footer-icon-link-4").val(footerIconLink4);
                $("#footer-icon-link-4").addClass("link-4");
                $("#footer-icon-link-4").attr({
                    free: "link-4",
                    key: "menu_2_opcion_4_url"
                });
                $("#link-4").attr({
                    free: "link-4",
                    key: "menu_2_opcion_4_url"
                });
                //Footer icon 5
                let footerIcon5 = data.data.menu_2_opcion_5_icon;
                let footerIconLink5 = data.data.menu_2_opcion_5_url;
                $("#footer-icon-5").attr("src", footerIcon5);
                $("#footer-icon-link-5").val(footerIconLink5);
                $("#footer-icon-link-5").addClass("link-5");
                $("#footer-icon-link-5").attr({
                    free: "link-5",
                    key: "menu_2_opcion_5_url"
                });
                $("#link-5").attr({
                    free: "link-5",
                    key: "menu_2_opcion_5_url"
                });
                //Footer icon 6
                let footerIcon6 = data.data.menu_2_opcion_6_icon;
                let footerIconLink6 = data.data.menu_2_opcion_6_url;
                $("#footer-icon-6").attr("src", footerIcon6);
                $("#footer-icon-link-6").val(footerIconLink6);
                $("#footer-icon-link-6").addClass("link-6");
                $("#footer-icon-link-6").attr({
                    free: "link-6",
                    key: "menu_2_opcion_6_url"
                });
                $("#link-6").attr("free", "link-6");
                //Footer icon 7
                let footerIcon7 = data.data.menu_2_opcion_7_icon;
                let footerIconLink7 = data.data.menu_2_opcion_7_url;
                $("#footer-icon-7").attr("src", footerIcon7);
                $("#footer-icon-link-7").val(footerIconLink7);
                $("#footer-icon-link-7").addClass("link-7");
                $("#footer-icon-link-7").attr({
                    free: "link-7",
                    key: "menu_2_opcion_7_url"
                });
                $("#link-7").attr({
                    free: "link-7",
                    key: "menu_2_opcion_7_url"
                });
                $(".loader-view-container").remove();
                $(".modal-footer").modal("show");
            }
        });
    }

    goToLandingFooter() {
        let iconsLandingFooter = $(".list-channel-item");
        let footersContainer = $(".navbar-prev-footers");
        footersContainer.hide();
        $(".navbar-prev-footers:first").show();
        let that = this;
        iconsLandingFooter.click(function() {
            iconsLandingFooter.removeClass("list-channel-active");
            $(this).addClass("list-channel-active");
            let rel = $(this).attr("rel");
            footersContainer.hide();
            $("#" + rel).show();
        });
    }

    uploadImageFooter(sockets) {
        $(".footer-input-image").change(function() {
            let currentInput = this.files[0];
            let key = $(this).attr("key");
            let response = landingController.uploadImageFooter(
                currentInput,
                key
            );
            response
                .then(data => {
                    if (data.code == 200) {
                        return landingController.getContentFooter();
                    }
                })
                .then(data => {
                    let dataStringified = JSON.stringify(data);
                    for (const socket of sockets) {
                        socket.postMessage(dataStringified);
                    }
                });
        });
    }

    updateInfoFooter(sockets) {
        //Inputs
        $(".footer-input-text").blur(function() {
            let key = $(this).attr("key");
            let value = $(this).val();
            let response = landingController.updateInfoFooter(value, key);
            response
                .then(data => {
                    if (data.code == 200) {
                        return landingController.getContentFooter();
                    }
                })
                .then(data => {
                    if (data.code == 200) {
                        let dataStringified = JSON.stringify(data);
                        for (const socket of sockets) {
                            socket.postMessage(dataStringified);
                        }
                    }
                });
        });
        //Eventos para modales de links
        $(".inp_url").click(function() {
            let type = $(this).attr("free");
            let key = $(this).attr("key");
            let url = $("." + type).val();
            $("#btn-url").attr("key", key);
            $("#inp_url_modal").val(url);
            $("#inp_url_modal").attr("free", type);
            $("#inp_url_modal").addClass(type);
            $("#url").modal("show");
        });

        //Cerrar modal y obtener valores
        $(".btn-url").click(function() {
            let type = $(".input-url-modal").attr("free");
            let url = $("#inp_url_modal").val();
            $("." + type).val(url);
            let key = $(this).attr("key");
            landingController.updateInfoFooter(url, key);
            $("#url").modal("hide");
        });
        $(".tericon").click(function() {
            $("#modal-terminos-footer").modal("show");
        });

        $("#notice-privacy").click(function() {
            $("#modal-privacy-footer").modal("show");
        });
    }

    updateInfoTermsAndPrivacy(sockets) {
        //Botón del modal de términos y condiciones
        $("#acepta_terminos-footer").click(function() {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );
            let text = $(".footer-textarea-ter").val();
            // let text = $('.footer-textarea-ter').attr('name');
            let title = $(".footer-title-ter").val();

            let landing = "terms";
            let response = landingController.updateInfoTermsAndPrivacy(
                text,
                title,
                landing
            );
            response
                .then(data => {
                    if (data.code == 200) {
                        $("#footer-legend-terms").text(title);
                        return landingController.getContentFooter();
                    }
                    $(".loader-view-container").remove();
                })
                .then(data => {
                    if (data.code == 200) {
                        $("#modal-terminos-footer").modal("hide");
                        $(".loader-view-container").remove();
                        let dataStringified = JSON.stringify(data);
                        for (const socket of sockets) {
                            socket.postMessage(dataStringified);
                        }
                    }
                });
        });

        $("#modal-privacy-button").click(function() {
            $("body").append(
                `<div class="loader-view-container pointer-none">
                    <img src="./images/loader.gif" class="loader"/>
                </div>`
            );

            debugger;
            let text = $(".footer-textarea-privacy").val();
            let title = $(".footer-title-privacy").val();

            let landing = "about";
            let response = landingController.updateInfoTermsAndPrivacy(
                text,
                title,
                landing
            );
            response
                .then(data => {
                    if (data.code == 200) {
                        console.log(data);
                        $("#footer-legend-privacy").text(title);
                        return landingController.getContentFooter();
                    }
                })
                .then(data => {
                    if (data.code == 200) {
                        $("#modal-privacy-footer").modal("hide");
                        $(".loader-view-container").remove();
                        let dataStringified = JSON.stringify(data);
                        for (const socket of sockets) {
                            socket.postMessage(dataStringified);
                        }
                    }
                });
        });
    }

    editTextFooter(input) {
        let key = input.attr("key");
        let value = input.val();
        landingController.updateInfoFooter(value, key);
    }

    getContentTerms() {
        let response = landingController.getContentRights();
        response.then(data => {
            if (data.code == 200) {
                $(".footer-textarea-ter").val(data.data.terms_text);
                $(".footer-title-ter").val(data.data.terms_title);
                $(".footer-textarea-privacy").val(data.data.about_text);
                $(".footer-title-privacy").val(data.data.about_title);

                this.test(data.data.terms_text);
            }
        });
    }

    test(valor) {
        $(".footer-textarea-ter").keydown(function(e) {
            let Final;
            let texto;
            if (e.which === 13 && !e.shiftKey) {
                texto = document.getElementById("textTerminos").value += "\n";
                $(".footer-textarea-ter").attr("name", texto);
                // valor = $('.footer-textarea-ter').attr('name');
                // valor.attr(valor + '<br>');
                // debugger
                // $('.footer-textarea-ter').click(function(){
                //      valor = $('.footer-textarea-ter').val()
                // })

                // alert(valor);
                // $('.footer-textarea-ter').attr('name', $('.footer-textarea-ter').val()+ '<br>')
                // texto = $('.footer-textarea-ter').attr('name');
                // Final += texto;
                // $('.footer-textarea-ter').val($('.footer-textarea-ter').val()+ '°')
            }
        });
    }
}
