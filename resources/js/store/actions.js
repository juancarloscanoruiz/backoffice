import $ from "jquery";

import { slickShowArrow, slickShowCalendar } from './slick/slick'
import { closeModals, closeModalUrl, previewImage, evnUrl, evnSinopsis } from './events/events'
import { setBannerProgramacion, setLogosProgramacion } from './methods'
import { slickCalendar } from './calendar/calendar'

function getBannerProgramacion(res) {
    console.log(res)
    let slider = "";
    let counter = 1;

    while (true) {
        try {
            if (res["image_slider_" + counter]) {
                slider += `
            <div class="container-banner">
                <img class="banner bor responsi-img img_banner_${counter}" src="${res["image_slider_" + counter]}" alt="" />
                <input class="d-none previewImage" id="img_banner_${counter}" type="file" accept="image/*" index="${counter}"/>
                <div class="container-camera">
                    <label for="img_banner_${counter}" class="cursor-pointer">
                        <p class="text-center a-text-bold-warm text-plus mb-0">
                            <img class="camera_${counter}" src="./images/basic-icons/camara.svg" /><span>1920px X 657px</span>
                        </p>
                    </label>
                </div>
            </div>`
                counter++;
            } else {
                break;
            }
        } catch (error) {
            break;
        }
    }
    $(".slick-mvh").addClass('slick-programacion-canal');
    $(".slick-dots-mvh").addClass('slick-dots-programacion-canal');
    let slick = $('.slick-programacion-canal');
    let dots = $('.slick-dots-programacion-canal');
    slick.html(slider);

    slickShowArrow(slick, dots)

    previewImage()
    closeModals()
    setBannerProgramacion()

    $('#show-banner').modal('show');

    $(".loader-view-container").remove();
}

function getLogosProgramacion(res) {
    $(".img_logo_0").attr("src", res.icon_canal_claro);
    $(".img_logo_1").attr("src", res.icon_concert_channel);
    $(".img_logo_2").attr("src", res.icon_claro_cinema);

    $("#link-logo-canal-claro").attr("value", res.url_canal_claro);
    $("#link-logo-concert-channel").attr("value", res.url_concert_channel);
    $("#link-logo-claro-cinema").attr("value", res.url_claro_cinema);

    previewImage()
    closeModals()
    closeModalUrl()
    evnUrl()
    setLogosProgramacion()

    $('#show-logos').modal('show');

    $(".loader-view-container").remove();
}

function getSynopsisTable(res, lastMonth, lastDay) {
    // let table = `<div class="contenedor-columna synop titletable text-center"><span class="a-text-MBlack a-text-prev">Programa</span></div><div class="contenedor-columna landins titletable text-center"><span class="a-text-MBlack a-text-prev">Caracteres</span></div><div class="contenedor-columna landins titletable text-center"><span class="a-text-MBlack a-text-prev">Imágenes</span></div><div class="contenedor-columna landins titletable text-center"><span class="a-text-MBlack a-text-prev">Acciones</span></div><div class="contenedor-columna landins titletable text-center"><span class="a-text-MBlack a-text-prev">Landing</span></div>`;
    // let landing;
    // let index;
    // let sinopsis_len;
    // let cant_imagenes;
    // let cant_imagenes_switch;

    // slickCalendar(lastMonth, lastDay);
    // slickShowCalendar()

    // landing = $('.subMenuLandingCase').attr('landing')

    // if (landing == 'Canal Claro') {
    //     index = 0;
    // }
    // if (landing == 'Concert Channel') {
    //     index = 1;
    // }
    // if (landing == 'Claro Cinema') {
    //     index = 2
    // }

    // res[index].programing[0].programs.forEach(programs => {

    //     if (programs.sinopsis_info.sinopsis_len < 21) {
    //         sinopsis_len = `<span class="a-text-semibold-tomato text-normal">${programs.sinopsis_info.sinopsis_len}</span>`
    //     }
    //     if (programs.sinopsis_info.sinopsis_len > 21 && programs.sinopsis_info.sinopsis_len < 144) {
    //         sinopsis_len = `<span class="a-text-semibold-orange text-normal">${programs.sinopsis_info.sinopsis_len}</span>`
    //     }
    //     if (programs.sinopsis_info.sinopsis_len > 144) {
    //         sinopsis_len = `<span class="a-text-semibold-greyish-brown-two text-normal">${programs.sinopsis_info.sinopsis_len}</span>`
    //     }

    //     if (programs.sinopsis_info.cant_imagenes <= 4) {
    //         cant_imagenes = `<span class="a-text-semibold-tomato text-normal">${programs.sinopsis_info.cant_imagenes}/8</span>`
    //         cant_imagenes_switch = `
    //     <div v-if="programs.sinopsis_info.cant_imagenes <= 4" class="d-flex align-items-center justify-content-center mb-2 mt-2">
    //         <label for="yes-synopsis" id="yes-synopsis" class="mb-0 si-estilo cursor-pointer switch-label">Sí</label>
    //         <label for="no-synopsis" id="noestado-landing" class="mb-0 no-estilo label-active cursor-pointer switch-label">No</label>
    //     </div>`
    //     }
    //     if (programs.sinopsis_info.cant_imagenes > 4 && programs.sinopsis_info.cant_imagenes < 8) {
    //         cant_imagenes = `<span class="a-text-semibold-orange text-normal">${programs.sinopsis_info.cant_imagenes}/8</span>`
    //         cant_imagenes_switch = `
    //     <div v-if="programs.sinopsis_info.cant_imagenes > 4 && programs.sinopsis_info.cant_imagenes <= 8" class="d-flex align-items-center justify-content-center mb-2 mt-2">
    //         <label for="yes-synopsis" id="yes-synopsis" class="mb-0 label-active si-estilo cursor-pointer switch-label">Sí</label>
    //         <label for="no-synopsis" id="noestado-landing" class="mb-0 no-estilo  cursor-pointer switch-label">No</label>
    //     </div>`
    //     }
    //     if (programs.sinopsis_info.cant_imagenes >= 8) {
    //         cant_imagenes = `<span class="a-text-semibold-greyish-brown-two text-normal">${programs.sinopsis_info.cant_imagenes}/8</span>`
    //         cant_imagenes_switch = `
    //     <div v-if="programs.sinopsis_info.cant_imagenes > 4 && programs.sinopsis_info.cant_imagenes <= 8" class="d-flex align-items-center justify-content-center mb-2 mt-2">
    //         <label for="yes-synopsis" id="yes-synopsis" class="mb-0 label-active si-estilo cursor-pointer switch-label">Sí</label>
    //         <label for="no-synopsis" id="noestado-landing" class="mb-0 no-estilo  cursor-pointer switch-label">No</label>
    //     </div>`
    //     }

    //     table += `
    // <div class="contenedor-fila">
    //     <div class="contenedor-columna pl-4">
    //         <span class="a-text-medium-black text-normal">${programs.chapter_title}</span>
    //     </div>
    //     <div class="contenedor-columna text-center">${sinopsis_len}</div>
    //     <div class="contenedor-columna text-center">${cant_imagenes}</div>
    //     <div class="contenedor-columna text-center">
    //         <input id="${programs.chapter_id}" type="image" src="./images/lapiz-acti.svg" alt="Editar" class="edi mr-3" name="edi" />
    //         <input id="${programs.chapter_id}" type="image" src="./images/ojito-acti.svg" alt="Vizualizar" class="edi" name="prev" />
    //     </div>
    //     <div class="contenedor-columna text-center">${cant_imagenes_switch}</div>
    // </div>`
    // });

    // $('.show-sinopsis-table').addClass('mt-5')
    // $('.show-sinopsis-table').html(table)

    // evnSinopsis()
    // closeModals()

    // $(".loader-view-container").remove();
}

function getBannerSinopsis(res) {
    // res = res.data
    // let slider = "";
    // let counter = 1;

    // while (true) {
    //     try {
    //         if (res['image_background_' + counter]) {
    //             console.log(res['image_background_' + counter])
    //             slider += `
    //             <div class="container-banner">
    //                 <img class="banner bor responsi-img img_banner_${counter}" src="${res["image_background_" + counter]}" alt="" />
    //                 <input class="d-none previewImage" id="img_banner_${counter}" type="file" accept="image/*" index="${counter}"/>
    //                 <div class="container-camera">
    //                     <label for="img_banner_${counter}" class="cursor-pointer">
    //                         <p class="text-center a-text-bold-warm text-plus mb-0">
    //                             <img class="camera_${counter}" src="./images/basic-icons/camara.svg" /><span>1920px X 657px</span>
    //                         </p>
    //                     </label>
    //                 </div>
    //             </div>`
    //             counter++;
    //         } else {
    //             break;
    //         }
    //     } catch (error) {
    //         break;
    //     }
    // }
    // $(".slick-show").html(slider);

    // slickShowArrow()

    // previewImage()
    // closeModals()
    // // setBannerProgramacion()

    // $('#show-banner').modal('show');

    // $(".loader-view-container").remove();
}

export { getBannerProgramacion, getLogosProgramacion, getSynopsisTable, getBannerSinopsis }