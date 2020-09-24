import $ from "jquery";
import LandingController from "../controllers/landing.js";
let landingController = new LandingController();

export default class LandingView {

    renderHomeHeaderConcertChannel() {
        let data = landingController.getContentHome();
        data.then(data => {
            if (data.code == 200) {
                // Add name
                $("#landing_name").attr('value', 'Concert Channel');
                //Add a class to the button
                $("#dinamic_btn").addClass('btn-pink');
                //set the width of the image
                $("#img-logo-home").addClass('img-logo-home');
                //Set the width of the container
                $("#dinamic_width").addClass('modal-img-home');
                $('#inp_canales_subtitulo').val(data.data.block_4_subtitle)
                $('#inp_url').val(data.data.block_4_icon_channel_url)
                //Change the logo
                $("#img-logo-home").attr('src', data.data.block_4_icon_channel);
                //Modal
                $("#modal-logo-home").modal("show");
                console.log(data);
            }
        })
    }

    renderHomeHeaderClaroCinema() {
        let data = landingController.getContentHome();
        data.then(data => {
            if (data.code == 200) {
                // Add name
                $("#landing_name").attr('value', 'Claro Cinema');
                //Add a class to the button
                $("#dinamic_btn").addClass('btn-red');
                //set the width of the image
                $("#img-logo-home").addClass('img-logo-home');
                //Set the width of the container
                $("#dinamic_width").addClass('modal-img-home');
                $('#inp_canales_subtitulo').val(data.data.block_5_subtitle)
                $('#inp_url').val(data.data.block_5_icon_channel_url)
                //Change the logo
                $("#img-logo-home").attr('src', data.data.block_5_icon_channel);
                //Modal
                $("#modal-logo-home").modal("show");
                console.log(data);
            }
        })
    }


    renderFooterClaroNetworks() {
        let that = this
        let containerFooterClaroNetworks = document.getElementById("claro-networks-programing")
        let FooterClaroNetworks = {
            //remote: `${baseURL}sinopsis-edi.php`,
            remote: `http://localhost:8888/MaquetaCNetworks/footer-edition.php`,
            container: document.getElementById("claro-networks-programing"),
            onMessage: function (message, origin) {
                let json = JSON.parse(message);

                if (typeof json == "object") {
                    let loader = `
                            <div class="loader-view-container" id="loader1">
                                <img src="./images/loader.gif" class="loader" alt="">
                            </div>
                                `;

                    switch (json.type) {
                        case "footer-claro-networks":
                            that.renderContentFooter();
                        default:
                            break;
                    }
                }
                this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
            }

        };
        if (containerFooterClaroNetworks) {
            var socketFooterClaroNetworks = new easyXDM.Socket(FooterClaroNetworks);
        }
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
                //evaluamos cuál footer es
                switch (landingFooter) {
                    case "footer-claro-networks":
                        $('#social-media-container').remove();
                        $('#social-media-title').remove();
                        break;

                    default:
                        break;
                }
                let imageRight = data.data.image_right;
                let imageLeft = data.data.image_left;
                //Imágenes de arriba
                $('.footer-image-right').attr("src", imageRight);
                $('.footer-image-left').attr("src", imageLeft);
                //Menu 1
                let optionTitle1 = data.data.menu_1_opcion_1_title;
                let optionLink1 = data.data.menu_1_opcion_1_url;
                $('#footer-menu-1-opcion1-title').val(optionTitle1)
                $('#footer-menu-1-opcion1-link').val(optionLink1)
                let optionTitle2 = data.data.menu_1_opcion_2_title;
                let optionLink2 = data.data.menu_1_opcion_2_url;
                $('#footer-menu-1-opcion2-title').val(optionTitle1)
                $('#footer-menu-1-opcion2-link').val(optionLink1)
                $('.loader-view-container').remove();
                $('.modal-footer').modal("show");
            }
        })
    }

    renderFooterClaroCanal() {
        let containerFooterClaroCanal = document.getElementById("claro-canal-programing")
        let FooterClaroCanalOptions = {
            //remote: `${baseURL}sinopsis-edi.php`,
            remote: `http://localhost:8888/MaquetaCNetworks/footer-claro-edi.php`,
            container: containerFooterClaroCanal,
            onMessage: function (message, origin) {
                let json = JSON.parse(message);
                if (typeof json == "object") {
                    let loader = `
                            <div class="loader-view-container" id="loader1">
                                <img src="./images/loader.gif" class="loader" alt="">
                            </div>
                                `;

                    switch (json.type) {

                        default:
                            break;
                    }
                }
                this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
            }

        };
        if (containerFooterClaroCanal) {
            var socketFooterClaroCanal = new easyXDM.Socket(FooterClaroCanalOptions);
        }
    }

    renderFooterConcertChannel() {
        let containerFooterConcertChannel = document.getElementById("concert-channel-programing")
        let FooterConcertChannelOptions = {
            //remote: `${baseURL}sinopsis-edi.php`,
            remote: `http://localhost:8888/MaquetaCNetworks/footer-concert-edi.php`,
            container: containerFooterConcertChannel,
            onMessage: function (message, origin) {
                let json = JSON.parse(message);
                if (typeof json == "object") {
                    let loader = `
                            <div class="loader-view-container" id="loader1">
                                <img src="./images/loader.gif" class="loader" alt="">
                            </div>
                                `;

                    switch (json.type) {

                        default:
                            break;
                    }
                }
                this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
            }

        };
        if (containerFooterConcertChannel) {
            var socketFooterConcertChannel = new easyXDM.Socket(FooterConcertChannelOptions);
        }
    }

    renderFooterClaroCinema() {
        let containerFooterClaroCinema = document.getElementById("claro-cinema-programing")
        let FooterClaroCinemaOptions = {
            //remote: `${baseURL}sinopsis-edi.php`,
            remote: `http://localhost:8888/MaquetaCNetworks/footer-cinema-edi.php`,
            container: containerFooterClaroCinema,
            onMessage: function (message, origin) {
                let json = JSON.parse(message);
                if (typeof json == "object") {
                    let loader = `
                            <div class="loader-view-container" id="loader1">
                                <img src="./images/loader.gif" class="loader" alt="">
                            </div>
                                `;

                    switch (json.type) {

                        default:
                            break;
                    }
                }
                this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
            }

        };
        if (containerFooterClaroCinema) {
            var socketFooterClaroCinema = new easyXDM.Socket(FooterClaroCinemaOptions);
        }
    }

    goToLandingFooter() {
        let iconsLandingFooter = $('.list-channel-item');
        let footersContainer = $('.navbar-prev-footers');
        footersContainer.hide()
        $('.navbar-prev-footers:first').show()
        let that = this;
        iconsLandingFooter.click(function () {
            iconsLandingFooter.removeClass('list-channel-active');
            $(this).addClass('list-channel-active')
            let rel = $(this).attr("rel");
            footersContainer.hide();
            $("#" + rel).show();
        })
    }

}
