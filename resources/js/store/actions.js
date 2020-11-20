import $ from "jquery";

import { slickShowArrow, slickShowCalendar } from './slick/slick'
import { closeModals, closeModalUrl, previewImage, evnUrl, evnSinopsis, synopsisCalendarItem, evnProgramacion } from './events/events'
import { setBannerProgramacion, setLogosProgramacion, setHeaderCanalClaro, setTituloCanalClaro } from './methods'
import { slickCalendar } from './calendar/calendar'

let landing;
let lang;

function getBannerProgramacion(res) {
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
    let slick = $('.slick-banner');
    let dots = $('.slick-dots-banner');
    slick.html(slider);

    slickShowArrow(slick, dots)

    previewImage()
    closeModals()
    setBannerProgramacion('programacion')

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
    let table = `<div class="contenedor-columna synop titletable text-center"><span class="a-text-MBlack a-text-prev">Programa</span></div><div class="contenedor-columna landins titletable text-center"><span class="a-text-MBlack a-text-prev">Caracteres</span></div><div class="contenedor-columna landins titletable text-center"><span class="a-text-MBlack a-text-prev">Imágenes</span></div><div class="contenedor-columna landins titletable text-center"><span class="a-text-MBlack a-text-prev">Acciones</span></div><div class="contenedor-columna landins titletable text-center"><span class="a-text-MBlack a-text-prev">Landing</span></div>`;
    let index;
    let sinopsis_len;
    let cant_imagenes;
    let cant_imagenes_switch;

    let slick = $('.slick-calendario');
    let slickMonth = $('.monthSliderCalendar');
    slickCalendar(lastMonth, lastDay, slick, slickMonth);
    slickShowCalendar(slick)

    landing = $('.subMenuLandingCase').attr('landing')

    if (landing == 'Canal Claro') {
        index = 0;
    }
    if (landing == 'Concert Channel') {
        index = 1;
    }
    if (landing == 'Claro Cinema') {
        index = 2
    }
    res = res.data[index].programing[0].programs

    res.forEach(programs => {

        if (programs.sinopsis_info.sinopsis_len < 21) {
            sinopsis_len = `<span class="a-text-semibold-tomato text-normal">${programs.sinopsis_info.sinopsis_len}</span>`
        }
        if (programs.sinopsis_info.sinopsis_len > 21 && programs.sinopsis_info.sinopsis_len < 144) {
            sinopsis_len = `<span class="a-text-semibold-orange text-normal">${programs.sinopsis_info.sinopsis_len}</span>`
        }
        if (programs.sinopsis_info.sinopsis_len > 144) {
            sinopsis_len = `<span class="a-text-semibold-greyish-brown-two text-normal">${programs.sinopsis_info.sinopsis_len}</span>`
        }

        if (programs.sinopsis_info.cant_imagenes <= 4) {
            cant_imagenes = `<span class="a-text-semibold-tomato text-normal">${programs.sinopsis_info.cant_imagenes}/8</span>`
            cant_imagenes_switch = `
                 <div v-if="programs.sinopsis_info.cant_imagenes <= 4" class="d-flex align-items-center justify-content-center mb-2 mt-2">
                     <label for="yes-synopsis" id="yes-synopsis" class="mb-0 si-estilo cursor-pointer switch-label">Sí</label>
                     <label for="no-synopsis" id="noestado-landing" class="mb-0 no-estilo label-active cursor-pointer switch-label">No</label>
                 </div>`
        }
        if (programs.sinopsis_info.cant_imagenes > 4 && programs.sinopsis_info.cant_imagenes < 8) {
            cant_imagenes = `<span class="a-text-semibold-orange text-normal">${programs.sinopsis_info.cant_imagenes}/8</span>`
            cant_imagenes_switch = `
                 <div v-if="programs.sinopsis_info.cant_imagenes > 4 && programs.sinopsis_info.cant_imagenes <= 8" class="d-flex align-items-center justify-content-center mb-2 mt-2">
                     <label for="yes-synopsis" id="yes-synopsis" class="mb-0 label-active si-estilo cursor-pointer switch-label">Sí</label>
                     <label for="no-synopsis" id="noestado-landing" class="mb-0 no-estilo  cursor-pointer switch-label">No</label>
                 </div>`
        }
        if (programs.sinopsis_info.cant_imagenes >= 8) {
            cant_imagenes = `<span class="a-text-semibold-greyish-brown-two text-normal">${programs.sinopsis_info.cant_imagenes}/8</span>`
            cant_imagenes_switch = `
                 <div v-if="programs.sinopsis_info.cant_imagenes > 4 && programs.sinopsis_info.cant_imagenes <= 8" class="d-flex align-items-center justify-content-center mb-2 mt-2">
                     <label for="yes-synopsis" id="yes-synopsis" class="mb-0 label-active si-estilo cursor-pointer switch-label">Sí</label>
                     <label for="no-synopsis" id="noestado-landing" class="mb-0 no-estilo  cursor-pointer switch-label">No</label>
                 </div>`
        }

        table += `
          <div class="contenedor-fila">
              <div class="contenedor-columna pl-4">
                  <span class="a-text-medium-black text-normal">${programs.chapter_title}</span>
              </div>
              <div class="contenedor-columna text-center">${sinopsis_len}</div>
              <div class="contenedor-columna text-center">${cant_imagenes}</div>
              <div class="contenedor-columna text-center">
                  <input id="${programs.chapter_id}" type="image" src="./images/lapiz-acti.svg" alt="Editar" class="edi mr-3" name="edi" />
                  <input id="${programs.chapter_id}" type="image" src="./images/ojito-acti.svg" alt="Vizualizar" class="edi" name="prev" />
              </div>
              <div class="contenedor-columna text-center">${cant_imagenes_switch}</div>
          </div>`
    });

    $('.show-sinopsis-table').addClass('mt-5')
    $('.show-sinopsis-table').html(table)

    evnSinopsis()
    closeModals()

    $(".loader-view-container").remove();
}

function getBannerSinopsis(res) {
    res = res.data
    let slider = "";
    let counter = 1;

    while (true) {
        try {
            if (res['image_background_' + counter]) {
                slider += `
                <div class="container-banner">
                    <img class="banner bor responsi-img img_banner_${counter}" src="${res["image_background_" + counter]}" alt="" />
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
    let slick = $('.slick-banner');
    let dots = $('.slick-dots-banner');
    slick.html(slider);
    slickShowArrow(slick, dots)

    previewImage()
    closeModals()
    // // setBannerProgramacion()

    $('#show-banner').modal('show');

    $(".loader-view-container").remove();
}

function getBannerCanalClaro(res) {
    res = res.data
    let slider = "";
    let counter = 1;

    while (true) {
        try {
            if (res["block_1_image_slider_" + counter]) {
                slider += `
            <div class="container-banner">
                <img class="banner bor responsi-img img_banner_${counter}" src="${res["block_1_image_slider_" + counter]}" alt="" />
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
    let slick = $('.slick-banner');
    let dots = $('.slick-dots-banner');
    slick.html(slider);
    $('#show-banner').modal('show');

    slickShowArrow(slick, dots)

    previewImage()
    closeModals()
    setBannerProgramacion('canal')

    $(".loader-view-container").remove();
}

function getHeaderCanalClaro(res) {
    res = res.data
    $(".img-header").attr('src', res.block_2_icon_channel);
    $(".inp-text-modal-1").val(res.block_2_title_1);
    $(".inp-text-modal-2").val(res.block_2_title_2);
    $(".inp-text-modal-3").val(res.block_2_button_title);
    $("#inp-text-modal-4").val(res.block_2_button_url);

    previewImage()
    closeModals()
    closeModalUrl()
    evnUrl()
    setHeaderCanalClaro()

    $('#modal-header').modal('show');
    $(".loader-view-container").remove();
}

function getProgramacionCanalClaro(res, lastMonth, lastDay) {

    let programacion = '';
    landing = $('.subMenuLandingCase').attr('landing')

    if (landing == 'Canal Claro') {
        res = res.data[0].programing[0].programs
        $('.moda-programming-landing-logo').attr('src', './images/home/tv-1.svg')
        $('.moda-programming-landing-logo').attr('width', '200px')
        $('.moda-programming-landing-logo').removeClass()
        lang = 'canal_claro'

    }
    if (landing == 'Concert Channel') {
        res = res.data[1].programing[0].programs
        $('.moda-programming-landing-logo').attr('src', './images/concert-black-icon.svg')
        lang = 'concert_channel'
    }
    if (landing == 'Claro Cinema') {
        res = res.data[2].programing[0].programs
        $('.moda-programming-landing-logo').attr('src', './images/home/cinema-home-img.svg')
        lang = 'claro_cinema'
    }

    let slick = $('.slick-calendarioProg');
    let slickMonth = $('.monthSliderCalendarProg');
    slickCalendar(lastMonth, lastDay, slick, slickMonth);
    slickShowCalendar(slick)
    synopsisCalendarItem()

    res.forEach(programs => {
        programacion += `
        <div class="p-3 border-t border-r border-l border-b position-relative mb-3 cursor-pointer">
            <img src="./images/pencil.svg" alt="" class="pencil-edit programming-pencil-${lang}" chapter_id="${programs.chapter_id}">
            <div class="schedule-container col-12 p-5 mx-auto mt-0">
                <p class="mb-3 h3 schedule-title a-text-plus a-text-black-brown-two">
                    ${programs.Program_Title} - ${programs.chapter_title}
                </p>
                <div class="schedule-item-body">
                    <div class="schedule-poster">
                        <div class="poster">
                            <div class="thumbnail-edit" _id="${programs.chapter_id}">
                                <img src="${programs.image}" class="w-100" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="schedule-details">
                        <div class="schedule-details-header">
                            <div>
                                <p class="schedule a-text-semi-brown-two">
                                    ${programs.time} hrs.
                                </p>
                                <p class="rating a-text-semibold-warm-grey-five">
                                    Clasificación: A
                                </p>
                            </div>
                            <div>
                                <button title="Agregar a mi lista" class="button-none add-favorites programing-button" type="button" _id="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="44" viewBox="0 0 48 44">
                                        <path class="heart-gray" fill="none" fill-rule=" evenodd" stroke="#7A7777" stroke-width="3" d="M33.709 2c-2.54 0-4.866.82-6.914 2.438-1.033.817-1.97 1.816-2.795 2.983-.825-1.166-1.762-2.166-2.795-2.983C19.157 2.821 16.83 2 14.29 2c-3.397 0-6.523 1.39-8.8 3.915C3.24 8.409 2 11.818 2 15.512c0 3.802 1.387 7.283 4.364 10.954 2.663 3.284 6.491 6.617 10.924 10.477 1.514 1.318 2.886 2.198 4.667 3.79C22.426 41.152 23.374 42 24 42c.626 0 1.574-.847 2.044-1.267 1.782-1.592 3.155-2.472 4.669-3.791 4.432-3.86 8.26-7.192 10.923-10.477C44.614 22.795 46 19.315 46 15.511c0-3.693-1.24-7.102-3.49-9.596C40.231 3.39 37.105 2 33.708 2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <span class="schedule-description a-text-regular-warm-grey-five s1" id="synopsis-edi">${programs.sinopsis}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    })

    $('.show-modal-programacion').html(programacion);
    evnProgramacion()

    $('#show-programacion').modal('show');
    $(".loader-view-container").remove();
}

function updateProgramacion(res) {

    let programacion = '';
    landing = $('.subMenuLandingCase').attr('landing')

    if (landing == 'Canal Claro') {
        res = res.data[0].programing[0].programs
    }
    if (landing == 'Concert Channel') {
        res = res.data[1].programing[0].programs
    }
    if (landing == 'Claro Cinema') {
        res = res.data[2].programing[0].programs
    }

    res.forEach(programs => {
        programacion += `
        <div class="p-3 border-t border-r border-l border-b position-relative mb-3 cursor-pointer">
            <img src="./images/pencil.svg" alt="" class="pencil-edit programming-pencil-${lang}" chapter_id="${programs.chapter_id}">
            <div class="schedule-container col-12 p-5 mx-auto mt-0">
                <p class="mb-3 h3 schedule-title a-text-plus a-text-black-brown-two">
                    ${programs.Program_Title} - ${programs.chapter_title}
                </p>
                <div class="schedule-item-body">
                    <div class="schedule-poster">
                        <div class="poster">
                            <div class="thumbnail-edit" _id="${programs.chapter_id}">
                                <img src="${programs.image}" class="w-100" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="schedule-details">
                        <div class="schedule-details-header">
                            <div>
                                <p class="schedule a-text-semi-brown-two">
                                    ${programs.time} hrs.
                                </p>
                                <p class="rating a-text-semibold-warm-grey-five">
                                    Clasificación: A
                                </p>
                            </div>
                            <div>
                                <button title="Agregar a mi lista" class="button-none add-favorites programing-button" type="button" _id="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="44" viewBox="0 0 48 44">
                                        <path class="heart-gray" fill="none" fill-rule=" evenodd" stroke="#7A7777" stroke-width="3" d="M33.709 2c-2.54 0-4.866.82-6.914 2.438-1.033.817-1.97 1.816-2.795 2.983-.825-1.166-1.762-2.166-2.795-2.983C19.157 2.821 16.83 2 14.29 2c-3.397 0-6.523 1.39-8.8 3.915C3.24 8.409 2 11.818 2 15.512c0 3.802 1.387 7.283 4.364 10.954 2.663 3.284 6.491 6.617 10.924 10.477 1.514 1.318 2.886 2.198 4.667 3.79C22.426 41.152 23.374 42 24 42c.626 0 1.574-.847 2.044-1.267 1.782-1.592 3.155-2.472 4.669-3.791 4.432-3.86 8.26-7.192 10.923-10.477C44.614 22.795 46 19.315 46 15.511c0-3.693-1.24-7.102-3.49-9.596C40.231 3.39 37.105 2 33.708 2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <span class="schedule-description a-text-regular-warm-grey-five s1" id="synopsis-edi">${programs.sinopsis}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    })

    $('.show-modal-programacion').html(programacion);
    evnProgramacion()
    $(".loader-view-container").remove();
}

function getTitleCanalClaro(res, id) {
    res = res.data
    $(".inp-title-modal").val('');
    $(".inp-sub-title-modal").val('');
    if (id == 1) {
        $(".inp-title-modal").val(res.block_3_title);
        $(".inp-title-modal").attr('key', "block_3_title");
        $(".inp-sub-title-modal").val(res.block_3_subtitle);
        $(".inp-sub-title-modal").attr('key', "block_3_subtitle");
    }
    if (id == 2) {
        $(".inp-title-modal").val(res.block_4_carrusel_1_title);
        $(".inp-title-modal").attr('key', "block_4_carrusel_1_title");
        $(".inp-sub-title-modal").val(res.block_4_carrusel_1_subtitle);
        $(".inp-sub-title-modal").attr('key', "block_4_carrusel_1_subtitle");
    }
    if (id == 3) {
        $(".inp-title-modal").val(res.block_4_carrusel_2_title);
        $(".inp-title-modal").attr('key', "block_4_carrusel_2_title");
        $(".inp-sub-title-modal").val(res.block_4_carrusel_2_subtitle);
        $(".inp-sub-title-modal").attr('key', "block_4_carrusel_2_subtitle");
    }

    closeModals()
    setTituloCanalClaro()

    $('#modal-title').modal('show');
    $(".loader-view-container").remove();
}

function getPromoCanalClaro(res) {
    res = res.data
    $("#back-promo-claro").html('<video autoplay muted controls class="img-back-modal img-promo" src="' + res.block_3_video_url +'" /></video>');

    closeModals()
    $("#modal-promo").modal("show");
    $(".loader-view-container").remove();
}

export { getBannerProgramacion, getLogosProgramacion, getSynopsisTable, getBannerSinopsis, getBannerCanalClaro, getHeaderCanalClaro, getProgramacionCanalClaro, getTitleCanalClaro, updateProgramacion, getPromoCanalClaro }

