import $ from "jquery";
import LandingController from "../controllers/landing.js";
let landingController = new LandingController();
const LOADER =
    `<div class="loader-view-container pointer-none">
    <img src="./images/loader.gif" class="loader"/>
</div>`

export default class LandingView {

    renderHomeHeaderCanalClaro() {
        $("body").append(LOADER);
        let data = landingController.getContentHome();
        data.then(data => {
            if (data.code == 200) {
                // Add name
                $("#landing_name").attr('value', 'Canal Claro');
                //Add a class to the button
                $("#dinamic_btn").addClass('btn-red');
                //set the width of the image
                $("#img-logo-home").addClass('img-logo-home-claro');
                //Set the width of the container
                $("#dinamic_width").addClass('modal-img-home-claro');
                $("#inp_canales_subtitulo").val(data.data.block_3_subtitle);
                $("#inp_url").val(data.data.block_3_icon_channel_url);
                //Change the logo
                $("#img-logo-home").attr('src', data.data.block_3_icon_channel);
                //Modal
                $("#modal-logo-home").modal("show");
                // Remove loader
                $(".loader-view-container").remove();
            }
        })
    }

    renderHomeHeaderConcertChannel() {
        $("body").append(LOADER);
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
                // Remove loader
                $(".loader-view-container").remove();
            }
        })
    }

    renderHomeHeaderClaroCinema() {
        $("body").append(LOADER);
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
                // Remove loader
                $(".loader-view-container").remove();
            }
        })
    }
    renderHomeBanner() {
        $("body").append(LOADER);
        let data = landingController.getContentHome();
        data.then(data => {
            if (data.code == 200) {
                //Título en header de home
                let headerTitle1 = $(".modal-home-encabezado .header-title-1");
                //Subtítulo de home
                let headerTitle2 = $(".modal-home-encabezado .header-title-2");
                //let headerVideo = $(".modal-home-encabezado .video-header");
                headerTitle1.val(data.data.block_1_title);
                headerTitle2.val(data.data.block_1_subtitle);
                // headerVideo.val(data.data.block_1_video_name);
                if (data.data.block_1_video_name) {
                    let headerVideo = $(".modal-home-encabezado .video-header");
                    //Verificamos si la url es de una imagen
                    if (data.data.block_1_video_name.match(/\.(jpeg|jpg|gif|png)$/) != null) {
                        headerVideo.html(`<img src="${data.data.block_1_video_name}" alt="" class="d-flex w-100" id="image-promo-header-home">`);
                    } else {
                        //La url es de un video
                        headerVideo.html(`
                <img src="./images/basic-icons/pencil-edit-teal.svg" alt="add-photo" class="add-photo promo-icon cursor-pointer" style="width: 62px; position: absolute; transform: translate(215px, -112px);" />
                <span class="a-text-bold-warm text-plus p-2 pr-3 pl-3 white-shadow position-absolute " style="    transform: translate(207px, -40px);">Añade tu archivo <br> jpg 472px X 295px </span>
                <video class="w-100 h-100 home-video" id="video-promo-header-home" style="display: block" controls muted autoplay>
                    <source src="${data.data.block_1_video_name}" type="video/mp4">
                </video>`);
                    }
                }
                //Mostramos el modal
                $(".modal-home-encabezado").modal("show");
                //Eliminamos
                $(".loader-view-container").remove();
            }
        })
    }


    renderFooterClaroNetworks() {
        let that = this
        let containerFooterClaroNetworks = document.getElementById("claro-networks-programing")
        let FooterClaroNetworks = {
            //remote: `${baseURL}sinopsis-edi.php`,
            // remote: `http://localhost:8888/MaquetaCNetworks/footer-edition.php`,
            remote: `http://localhost/MaquetaCNetworks/footer-edition.php`,
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
                            that.renderContentFooter("footer-claro-networks");
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


    renderFooterClaroCanal() {
        let that = this;
        let containerFooterClaroCanal = document.getElementById("claro-canal-programing")
        let FooterClaroCanalOptions = {
            //remote: `${baseURL}sinopsis-edi.php`,
            remote: `http://localhost:8888/MaquetaCNetworks/footer-claro-edi.php`,
            container: containerFooterClaroCanal,
            onMessage: function (message, origin) {
                let json = JSON.parse(message);
                if (typeof json == "object") {

                    switch (json.type) {
                        case "footer-canal-claro":
                            that.renderContentFooter("footer-canal-claro")
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
        let that = this;
        let containerFooterConcertChannel = document.getElementById("concert-channel-programing")
        let FooterConcertChannelOptions = {
            //remote: `${baseURL}sinopsis-edi.php`,
            remote: `http://localhost:8888/MaquetaCNetworks/footer-concert-edi.php`,
            container: containerFooterConcertChannel,
            onMessage: function (message, origin) {
                let json = JSON.parse(message);
                if (typeof json == "object") {

                    switch (json.type) {
                        case "footer-concert-channel":
                            that.renderContentFooter("footer-concert-channel")
                            break;
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
        let that = this;
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
                        case "footer-claro-cinema":
                            that.renderContentFooter("footer-claro-cinema")
                            break;
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

    renderContentFooter(landingFooter) {
        debugger
        $("body").append(
            `<div class="loader-view-container pointer-none">
                <img src="./images/loader.gif" class="loader"/>
            </div>`
        );
        let data = landingController.getContentFooter();
        data.then(data => {
            if (data.code == 200) {
                let socialMedia = $('#social-media');
                //Instagram
                let socialMedia2 = $('#social-media-2');
                //Twitter
                let socialMedia3 = $('#social-media-3');
                //youtube
                let socialMedia4 = $('#social-media-4');
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
                        let iconSocialMediaCanalClaro1 = data.data.facebook_canal_claro_icon;
                        let linkSocialMediaCanalClaro1 = data.data.facebook_canal_claro_url;
                        $('#footer-social-media-icon-1').attr("src", iconSocialMediaCanalClaro1)
                        $('#footer-social-media-link-1').val(linkSocialMediaCanalClaro1)
                        $('#footer-social-media-link-1').addClass('media-link-1')
                        $('#footer-social-media-link-1').attr('free','media-link-1')
                        $('#media-link-1').attr('free','media-link-1')
                        //Social media 2
                        let iconSocialMediaCanalClaro2 = data.data.instagram_canal_claro_icon;
                        let linkSocialMediaCanalClaro2 = data.data.instagram_canal_claro_url;
                        $('#footer-social-media-icon-2').attr("src", iconSocialMediaCanalClaro2)
                        $('#footer-social-media-link-2').val(linkSocialMediaCanalClaro2)
                        $('#footer-social-media-link-2').addClass('media-link-2')
                        $('#footer-social-media-link-2').attr('free','media-link-2')
                        $('#media-link-2').attr('free','media-link-2')
                        //Social media 3
                        let iconSocialMediaCanalClaro3 = data.data.twitter_canal_claro_icon;
                        let linkSocialMediaCanalClaro3 = data.data.twitter_canal_claro_url;
                        $('#footer-social-media-icon-3').attr("src", iconSocialMediaCanalClaro3)
                        $('#footer-social-media-link-3').val(linkSocialMediaCanalClaro3)
                        $('#footer-social-media-link-3').addClass('media-link-3')
                        $('#footer-social-media-link-3').attr('free','media-link-3')
                        $('#media-link-3').attr('free','media-link-3')
                        //Social media 4
                        let iconSocialMediaCanalClaro4 = data.data.youtube_canal_claro_icon;
                        let linkSocialMediaCanalClaro4 = data.data.youtube_canal_claro_url;
                        $('#footer-social-media-icon-4').attr("src", iconSocialMediaCanalClaro4)
                        $('#footer-social-media-link-4').val(linkSocialMediaCanalClaro4)
                        $('#footer-social-media-link-4').addClass('media-link-4')
                        $('#footer-social-media-link-4').attr('free','media-link-4')
                        $('#media-link-4').attr('free','media-link-4')
                        break;
                    case "footer-concert-channel":
                        socialMedia.show();
                        socialMedia2.hide()
                        socialMedia4.hide()
                        //Social media 1
                        let iconSocialMediaConcertChannel1 = data.data.facebook_concert_channel_icon;
                        let linkSocialMediaConcertChannel1 = data.data.facebook_concert_channel_url;
                        $('#footer-social-media-icon-1').attr("src", iconSocialMediaConcertChannel1)
                        $('#footer-social-media-link-1').val(linkSocialMediaConcertChannel1)
                        $('#footer-social-media-link-1').addClass('media-link-1')
                        $('#footer-social-media-link-1').attr('free','media-link-1')
                        $('#media-link-1').attr('free','media-link-1')
                        //Social media 3
                        let iconSocialMediaConcertChannel3 = data.data.twitter_concert_channel_icon;
                        let linkSocialMediaConcertChannel3 = data.data.twitter_concert_channel_url;
                        $('#footer-social-media-icon-3').attr("src", iconSocialMediaConcertChannel3)
                        $('#footer-social-media-link-3').val(linkSocialMediaConcertChannel3)
                        $('#footer-social-media-link-3').addClass('media-link-3')
                        $('#footer-social-media-link-3').attr('free','media-link-3')
                        $('#media-link-3').attr('free','media-link-3')
                        break;

                    case "footer-claro-cinema":
                        socialMedia.hide();
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
                //Opción 1
                let optionTitle1 = data.data.menu_1_opcion_1_title;
                let optionLink1 = data.data.menu_1_opcion_1_url;
                $('#footer-menu-1-opcion1-title').val(optionTitle1)
                $('#footer-menu-1-opcion1-link').val(optionLink1)
                $('#footer-menu-1-opcion1-link').addClass('opcion1')
                $('#footer-menu-1-opcion1-link').attr('free','opcion1')
                $('#opcion1-link').attr('free','opcion1')
                //Opción 2
                let optionTitle2 = data.data.menu_1_opcion_2_title;
                let optionLink2 = data.data.menu_1_opcion_2_url;
                $('#footer-menu-1-opcion2-title').val(optionTitle2)
                debugger
                $('#footer-menu-1-opcion2-link').val(optionLink2)
                $('#footer-menu-1-opcion2-link').addClass('opcion2')
                $('#footer-menu-1-opcion2-link').attr('free','opcion2')
                $('#opcion2-link').attr('free','opcion2')
                //Opción 3
                let optionTitle3 = data.data.menu_1_opcion_3_title;
                let optionLink3 = data.data.menu_1_opcion_3_url;
                $('#footer-menu-1-opcion3-title').val(optionTitle3)
                $('#footer-menu-1-opcion3-link').val(optionLink3)
                $('#footer-menu-1-opcion3-link').addClass('opcion3')
                $('#footer-menu-1-opcion3-link').attr('free','opcion3')
                $('#opcion3-link').attr('free','opcion3')
                //Opción 4
                let optionTitle4 = data.data.menu_1_opcion_4_title;
                let optionLink4 = data.data.menu_1_opcion_4_url;
                $('#footer-menu-1-opcion4-title').val(optionTitle4)
                $('#footer-menu-1-opcion4-link').val(optionLink4)
                $('#footer-menu-1-opcion4-link').addClass('opcion4')
                $('#footer-menu-1-opcion4-link').attr('free','opcion4')
                $('#opcion4-link').attr('free','opcion4')
                //Opción 5
                let optionTitle5 = data.data.menu_1_opcion_5_title;
                let optionLink5 = data.data.menu_1_opcion_5_url;
                $('#footer-menu-1-opcion5-title').val(optionTitle5)
                $('#footer-menu-1-opcion5-link').val(optionLink5)
                $('#footer-menu-1-opcion5-link').addClass('opcion5')
                $('#footer-menu-1-opcion5-link').attr('free','opcion5')
                $('#opcion5-link').attr('free','opcion5')
                //Opción 6
                let optionTitle6 = data.data.menu_1_opcion_6_title;
                let optionLink6 = data.data.menu_1_opcion_6_url;
                $('#footer-menu-1-opcion6-title').val(optionTitle6)
                $('#footer-menu-1-opcion6-link').val(optionLink6)
                $('#footer-menu-1-opcion6-link').addClass('opcion6')
                $('#footer-menu-1-opcion6-link').attr('free','opcion6')
                $('#opcion6-link').attr('free','opcion6')
                //Icon claro networks footer
                let iconClaroNetworksFooter = data.data.about_icon;
                $('#footer-about-icon').attr("src", iconClaroNetworksFooter);
                //rights legend
                let rightsLegend = data.data.about_legend
                $('#footer-rights-legend').val(rightsLegend);
                //Footer terms legend
                let termsLegend = data.data.about_link_1_title;
                //privacy legend
                let privacyLegend = data.data.about_link_2_title;
                $('#footer-legend-privacy').text(privacyLegend)
                $('#footer-legend-terms').text(termsLegend)
                //Footer icon 1
                let footerIcon1 = data.data.menu_2_opcion_1_icon
                let footerIconLink1 = data.data.menu_2_opcion_1_url
                $("#footer-icon-1").attr("src", footerIcon1);
                $("#footer-icon-link-1").val(footerIconLink1);
                $("#footer-icon-link-1").addClass('link-1');
                $("#footer-icon-link-1").attr('free', 'link-1');
                $("#link-1").attr('free','link-1');
                //Footer icon 2
                let footerIcon2 = data.data.menu_2_opcion_2_icon
                let footerIconLink2 = data.data.menu_2_opcion_2_url
                $("#footer-icon-2").attr("src", footerIcon2);
                $("#footer-icon-link-2").val(footerIconLink2);
                $("#footer-icon-link-2").addClass('link-2');
                $("#footer-icon-link-2").attr('free', 'link-2');
                $("#link-2").attr('free','link-2');
                //Footer icon 3
                let footerIcon3 = data.data.menu_2_opcion_3_icon
                let footerIconLink3 = data.data.menu_2_opcion_3_url
                $("#footer-icon-3").attr("src", footerIcon3);
                $("#footer-icon-link-3").val(footerIconLink3);
                $("#footer-icon-link-3").addClass('link-3');
                $("#footer-icon-link-3").attr('free', 'link-3');
                $("#link-3").attr('free','link-3');
                //Footer icon 4
                let footerIcon4 = data.data.menu_2_opcion_4_icon
                let footerIconLink4 = data.data.menu_2_opcion_4_url
                $("#footer-icon-4").attr("src", footerIcon4);
                $("#footer-icon-link-4").val(footerIconLink4);
                $("#footer-icon-link-4").addClass('link-4');
                $("#footer-icon-link-4").attr('free', 'link-4');
                $("#link-4").attr('free','link-4');
                //Footer icon 5
                let footerIcon5 = data.data.menu_2_opcion_5_icon
                let footerIconLink5 = data.data.menu_2_opcion_5_url
                $("#footer-icon-5").attr("src", footerIcon5);
                $("#footer-icon-link-5").val(footerIconLink5);
                $("#footer-icon-link-5").addClass('link-5');
                $("#footer-icon-link-5").attr('free', 'link-5');
                $("#link-5").attr('free','link-5');
                //Footer icon 6
                let footerIcon6 = data.data.menu_2_opcion_6_icon
                let footerIconLink6 = data.data.menu_2_opcion_6_url
                $("#footer-icon-6").attr("src", footerIcon6);
                $("#footer-icon-link-6").val(footerIconLink6);
                $("#footer-icon-link-6").addClass('link-6');
                $("#footer-icon-link-6").attr('free', 'link-6');
                $("#link-6").attr('free','link-6');
                //Footer icon 7
                let footerIcon7 = data.data.menu_2_opcion_7_icon
                let footerIconLink7 = data.data.menu_2_opcion_7_url
                $("#footer-icon-7").attr("src", footerIcon7);
                $("#footer-icon-link-7").val(footerIconLink7);
                $("#footer-icon-link-7").addClass('link-7');
                $("#footer-icon-link-7").attr('free', 'link-7');
                $("#link-7").attr('free','link-7');
                $('.loader-view-container').remove();
                $('.modal-footer').modal("show");
            }
        })
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
