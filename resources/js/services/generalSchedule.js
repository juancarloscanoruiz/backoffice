import $ from "jquery";
import { eventsGrilla } from "../operaciones_grilla";
import { createLazyLoad } from "../vendor/lozad";
//Helper
import PrevImageHelper from "../helpers/PrevImage.js";
$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
    }
});

function editAttributeProgram(chapter_id, key, keyValue) {
    debugger;
    let data = {
        chapter_id,
        key,
        keyValue
    };
    $.ajax({
        type: "POST",
        data: data,
        url: "program/editAttribute",
        success: function(result) {
            console.log(result);
        }
    });
}

function filterDates(startDate, lastDate, landing) {
    let data = {
        startDate,
        lastDate,
        landing
    };
    $.ajax({
        type: "POST",
        data: data,
        url: "general-program/filterDates",
        beforeSend: function() {
            $(".grilla-body").prepend(
                `<div class="loader-container pointer-none">
                    <img src="./images/loader.gif" class="loader-table"/>
                </div>`
            );
        },
        success: function(result) {
            let json = JSON.parse(result);

            let grills = json.data.grilla;
            //Géneros
            let genres = json.data.genres;

            let genreOption = "";
            genres.forEach(genre => {
                genreOption += `
                <option class="a-text-regular-brownishtwo text-normal" value="${genre.title}">
                    ${genre.title}
                </option>
                `;
            });

            let header = `
            <div class="contenedor-fila" id="grilla-header">
                <div class="contenedor-columna centro centro title-table" id="acciones">
                    <span class="a-text-semibold-white text-normal">Acciones</span>
                </div>
                <div class="contenedor-columna centro centro title-table" id="estado">
                    <span class="a-text-semibold-white text-normal">Estado</span>
                </div>
                <div class="contenedor-columna centro centro title-table" id="alerta">
                    <span class="a-text-semibold-white text-normal">Alerta</span>
                </div>

                <div class="contenedor-columna centro centro title-table" id="program-title-original">
                    <span class="a-text-semibold-white text-normal">Program Title Original</span>
                </div>

                <div class="contenedor-columna centro  centro title-table" id="establecer-landing" style="width: 241px">
                    <span class="a-text-semibold-white text-normal">Establecer en landing</span>
                </div>
                <div class="contenedor-columna centro  centro title-table" id="landing-programar">
                    <span class="a-text-semibold-white text-normal">Landing de Canal Claro <br />Programar publicación</span>
                </div>

                <div class="contenedor-columna centro  centro title-table" id="establecer-home">
                    <span class="a-text-semibold-white text-normal">Establecer en Home</span>
                </div>
                <div class="contenedor-columna centro  centro title-table" id="programar-home-publicacion">
                    <span class="a-text-semibold-white text-normal">Home<br /> Progamar publicación</span>
                </div>
                <div class="contenedor-columna centro centro title-table" id="imagenes">
                    <span class="a-text-semibold-white text-normal">Imágenes</span>
                </div>
                <div class="contenedor-columna centro centro title-table" id="schedule-item-date-time">
                    <span class="a-text-semibold-white text-normal">Schedule Item<br> Date Time</span>
                </div>
                <div class="contenedor-columna centro centro title-table" id="schedule-item-date">
                    <span class="a-text-semibold-white text-normal">Schedule Item<br> Long Date</span>
                </div>
                <div class="contenedor-columna centro centro title-table" id="schedule-item-time">
                    <span class="a-text-semibold-white text-normal">Schedule Item<br> Long Time (GMT)</span>
                </div>
                <div class="contenedor-columna centro centro title-table" id="estimated-duration">
                    <span class="a-text-semibold-white text-normal">Estimated Schedule Item Duration</span>
                </div>
                <div class="contenedor-columna centro  centro title-table" id="program-year">
                    <span class="a-text-semibold-white text-normal">Program Year<br> Produced</span>
                </div>
                <div class="contenedor-columna centro centro title-table" id="program-genre">
                    <span class="a-text-semibold-white text-normal">Program Genre List</span>
                </div>
                <div class="contenedor-columna centro centro title-table" id="program-title-alternate">
                    <span class="a-text-semibold-white text-normal">Program Title Alternate </span>
                </div>
                <div class="contenedor-columna centro  centro title-table" id="program-episode-season">
                    <span class="a-text-semibold-white text-normal">Program Episode<br> Season</span>
                </div>
                <div class="contenedor-columna centro  centro title-table" id="program-episode-number">
                    <span class="a-text-semibold-white text-normal">Program Episode<br> Number</span>
                </div>
                <div class="contenedor-columna centro centro title-table" id="synopsis">
                    <span class="a-text-semibold-white text-normal">Synopsis</span>
                </div>
                <div class="contenedor-columna centro centro title-table" id="rating-code">
                    <span class="a-text-semibold-white text-normal">Schedule Item<br> Rating Code</span>
                </div>
                <div class="contenedor-columna centro  centro title-table" id="subbed">
                    <span class="a-text-semibold-white text-normal">Scheduled<br> Version SUBBED</span>
                </div>
                <div class="contenedor-columna centro centro title-table" id="dubbed">
                    <span class="a-text-semibold-white text-normal">Scheduled Version DUBBED </span>
                </div>
                <div class="contenedor-columna centro  centro title-table" id="audio" style="width: 126px">
                    <span class="a-text-semibold-white text-normal">Audio 5.1<br> available</span>
                </div>
            </div>
            `;
            let rows = "";
            grills.forEach(grill => {
                let programs = grill.programs;
                programs.forEach(program => {
                    /* Validamos si el programa está en algunas de las secciones del landing */
                    let inLanding = "";
                    switch (program.in_landing) {
                        case 0:
                            inLanding = `
                            <div class='yes-no mt-3'>
                                <input type="radio" name="sino-landing-${program.chapter_id}" id="yes-landing-${program.chapter_id}" value="1"  class="switch-landing" />
                                <label for="yes-landing-${program.chapter_id}" id="siestado-landing-${program.chapter_id}" class="si-estilo cursor-pointer switch-label">
                                    Sí</label>
                                <input type="radio" name="sino-landing-${program.chapter_id}" id="no-landing-${program.chapter_id}" value="0" checked class="switch-landing switch-table" />
                                <label for="no-landing-${program.chapter_id}" id="noestado-landing-${program.chapter_id}" class="no-estilo cursor-pointer switch-label">
                                    No</label>
                            </div>
                            <div class="establecer-options pointer-none">
                                <div class=" d-flex mt-2 ml-2 pt-2">
                                    <label class="checkradio d-flex  ml-2">
                                        <input type="radio" name="dontlose" value="1" class="switch-table">
                                        <span class="checkmark"></span>
                                    </label>
                                    <span class="cursor-pointer a-text-medium-warmgrey ml-2">Tienes que verlo</span>
                                </div>
                                <div class="d-flex ml-2 pt-2 pb-2">
                                    <label class="checkradio d-flex ml-2">
                                        <input type="radio" name="dontlose" value="2" class="switch-table">
                                        <span class="checkmark"></span>
                                    </label>
                                    <span class="cursor-pointer a-text-medium-warmgrey ml-2">Contenido exclusivo</span>
                                </div>
                            </div>
                            `;
                            break;
                        case 1:
                            inLanding = `
                            <div class='yes-no mt-3'>
                                <input type="radio" name="sino-landing-${program.chapter_id}" id="yes-landing-${program.chapter_id}" value="1" checked class="switch-landing" />
                                <label for="yes-landing-${program.chapter_id}" id="siestado-landing-${program.chapter_id}" class="si-estilo cursor-pointer switch-label">
                                    Sí</label>
                                <input type="radio" name="sino-landing-${program.chapter_id}" id="no-landing-${program.chapter_id}" value="0" class="switch-landing switch-table" />
                                <label for="no-landing-${program.chapter_id}" id="noestado-landing-${program.chapter_id}" class="no-estilo cursor-pointer switch-label">
                                    No</label>
                            </div>
                            <div class="establecer-options pointer-none">
                                <div class=" d-flex mt-2 ml-2 pt-2">
                                    <label class="checkradio d-flex  ml-2">
                                        <input type="radio" checked name="dontlose" value="1" class="switch-table">
                                        <span class="checkmark"></span>
                                    </label>
                                    <span class="cursor-pointer a-text-medium-warmgrey ml-2">Tienes que verlo</span>
                                </div>
                                <div class="d-flex ml-2 pt-2 pb-2">
                                    <label class="checkradio d-flex ml-2">
                                        <input type="radio" name="dontlose" value="2" class="switch-table">
                                        <span class="checkmark"></span>
                                    </label>
                                    <span class="cursor-pointer a-text-medium-warmgrey ml-2">Contenido exclusivo</span>
                                </div>
                            </div>
                            `;
                            break;
                        case 2:
                            inLanding = `
                                <div class='yes-no mt-3'>
                                    <input type="radio" name="sino-landing-${program.chapter_id}" id="yes-landing-${program.chapter_id}" value="1" checked class="switch-landing" />
                                    <label for="yes-landing-${program.chapter_id}" id="siestado-landing-${program.chapter_id}" class="si-estilo cursor-pointer switch-label">
                                        Sí</label>
                                    <input type="radio" name="sino-landing-${program.chapter_id}" id="no-landing-${program.chapter_id}" value="0" class="switch-landing switch-table" />
                                    <label for="no-landing-${program.chapter_id}" id="noestado-landing-${program.chapter_id}" class="no-estilo cursor-pointer switch-label">
                                        No</label>
                                </div>
                                <div class="establecer-options pointer-none">
                                    <div class=" d-flex mt-2 ml-2 pt-2">
                                        <label class="checkradio d-flex  ml-2">
                                            <input type="radio" name="dontlose" value="1" class="switch-table">
                                            <span class="checkmark"></span>
                                        </label>
                                        <span class="cursor-pointer a-text-medium-warmgrey ml-2">Tienes que verlo</span>
                                    </div>
                                    <div class="d-flex ml-2 pt-2 pb-2">
                                        <label class="checkradio d-flex ml-2">
                                            <input type="radio" checked name="dontlose" value="2" class="switch-table">
                                            <span class="checkmark"></span>
                                        </label>
                                        <span class="cursor-pointer a-text-medium-warmgrey ml-2">Contenido exclusivo</span>
                                    </div>
                                </div>
                                `;
                            break;
                        default:
                            break;
                    }
                    /* Si hay algún programa en la sección de algún landing */
                    let inLandingExpiration = "";

                    if (program.in_landing == 0) {
                        inLandingExpiration = `
                        <div class="programar-content pointer-none">
                            <div class="programar-schedule d-flex justify-content-end" key="in_landing_begin">
                                <div>
                                    <label for="programar-landing" class="a-text-bold-brownish text-normal">Inicio: </label>
                                    <input type="text" id="programar-landing" class="editable-attribute landing-start-day schedule-date-input a-text-medium-brownish table-input" placeholder="00-00-0000">
                                </div>
                                <div>
                                    <input type="text" id="programar-landing" class="editable-attribute landing-start-hours time-seconds-input a-text-medium-brownish table-input" placeholder="00:00:00">
                                </div>
                            </div>
                            <div class="programar-schedule d-flex justify-content-end" key="in_landing_expiration">
                                <div>
                                    <label for="programar-landing-end-date" class="a-text-bold-brownish text-normal">Fin: </label>
                                    <input type="text" id="programar-landing-end-date" class="landing-expiration-day schedule-date-input a-text-medium-brownish table-input editable-attribute" placeholder="00-00-0000">
                                </div>
                                <div>
                                    <input type="text" id="programar-landing-end-hrs" class="landing-expiration-hours time-seconds-input a-text-medium-brownish table-input editable-attribute" placeholder="00:00:00">
                                </div>
                            </div>
                        </div>
                        `;
                    } else {
                        let inputsBegin = `
                        <div class="programar-schedule d-flex justify-content-end" key="in_landing_begin">
                            <div>
                                <label for="programar-landing" class="a-text-bold-brownish text-normal">Inicio: </label>
                                <input type="text" id="programar-landing" class="landing-start-day editable-attribute schedule-date-input a-text-medium-brownish table-input" value="" placeholder="00-00-0000">
                            </div>
                            <div>
                                <input type="text" id="programar-landing" class="landing-start-hours editable-attribute time-seconds-input a-text-medium-brownish table-input" value="" placeholder="00:00:00">
                            </div>
                        </div>
                        `;

                        let inputsExpiration = `
                        <div class="d-flex justify-content-end programar-schedule" key="in_landing_expiration">
                            <div>
                                <label for="programar-landing-end-date" class="a-text-bold-brownish text-normal">Fin: </label>
                                <input type="text" id="programar-landing-end-date" class="landing-expiration-day editable-attribute schedule-date-input a-text-medium-brownish table-input" value="" placeholder="00-00-0000">
                            </div>
                            <div>
                                <input type="text" id="programar-landing-end-hrs" class="landing-expiration-hours editable-attribute time-seconds-input a-text-medium-brownish table-input" value="" placeholder="00:00:00">
                            </div>
                        </div>
                        `;

                        //Obtenemos la fecha y hora de inicio
                        if (program.in_landing_begin) {
                            var scheduleBegin = program.in_landing_begin.split(
                                " "
                            );
                            //Obtenemos la fecha de inicio
                            var dateBegin = scheduleBegin[0].split("-");
                            //Obtenemos el año, el mes y el día por separado
                            var dateBeginYear = dateBegin[0];
                            var dateBeginMonth = dateBegin[1];
                            var dateBeginDay = dateBegin[2];
                            //Obtenemos la hora de inicio
                            var timeBegin = scheduleBegin[1];
                            inputsBegin = `
                            <div class="programar-schedule d-flex justify-content-end" key="in_landing_begin">
                                <div>
                                    <label for="programar-landing" class="a-text-bold-brownish text-normal">Inicio: </label>
                                    <input type="text" id="programar-landing" class="landing-start-day editable-attribute schedule-date-input a-text-medium-brownish table-input" value="" placeholder="00-00-0000">
                                </div>
                                <div>
                                    <input type="text" id="programar-landing" class="landing-start-hours editable-attribute time-seconds-input a-text-medium-brownish table-input" value="" placeholder="00:00:00">
                                </div>
                            </div>
                            `;
                        }

                        if (program.in_landing_expiration) {
                            //Obtenemos la fecha y hora final
                            let scheduleExpiration = program.in_landing_expiration.split(
                                " "
                            );
                            //Obtenemos la fecha final
                            let dateExpiration = scheduleExpiration[0].split(
                                "-"
                            );

                            //Obtenemos el año, mes y día por separado
                            let dateExpirationYear = dateExpiration[0];
                            let dateExpirationMonth = dateExpiration[1];
                            let dateExpirationDay = dateExpiration[2];
                            //Verificamos si existe la hora, en todo caso que no, la variable es null
                            let timeExpiration = scheduleExpiration[1]
                                ? scheduleExpiration[1]
                                : "00:00:0000";
                            inputsExpiration = `
                                <div class="d-flex justify-content-end programar-schedule" key="in_landing_expiration">
                                    <div>
                                        <label for="programar-landing-end-date" class="a-text-bold-brownish text-normal">Fin: </label>
                                        <input type="text" id="programar-landing-end-date" class="landing-expiration-day editable-attribute schedule-date-input a-text-medium-brownish table-input" value="${dateExpirationDay}-${dateExpirationMonth}-${dateExpirationYear}" placeholder="00-00-0000">
                                    </div>
                                    <div>
                                        <input type="text" id="programar-landing-end-hrs" class="landing-expiration-hours editable-attribute time-seconds-input a-text-medium-brownish table-input" value="${timeExpiration}" placeholder="00:00:00">
                                    </div>
                                </div>
                                `;
                        }

                        inLandingExpiration = `
                        <div class="programar-content">
                            ${inputsBegin}
                            ${inputsExpiration}
                        </div>
                        `;
                    }
                    //Verificamos si algún programa se encuentra en el home
                    let inHome = "";
                    let inHomeExpiration = "";
                    if (program.in_home == 0) {
                        inHome = `
                        <div class="yes-no">
                            <input type="radio" name="yes-no-${program.chapter_id}" id="programar-si-${program.chapter_id}" value="1" class="switch-home switch-table"/>
                            <label for="programar-si-${program.chapter_id}" id="siestado-${program.chapter_id}" class=" switch-label si-estilo cursor-pointer">
                                Sí</label>
                            <input type="radio" name="yes-no-${program.chapter_id}" id="programar-no-${program.chapter_id}" value="0" class="switch-home switch-table" checked />
                            <label for="programar-no-${program.chapter_id}" id="noestado-${program.chapter_id}" class="switch-label no-estilo cursor-pointer">
                                No</label>
                        </div>
                        `;
                        inHomeExpiration = `
                        <div class="programar-content pointer none">
                            <div class="programar-schedule d-flex justify-content-end" key="in_home_begin">
                                <div>
                                    <label for="programar-home-date" class="a-text-bold-brownish text-normal">Inicio: </label>
                                    <input type="text" id="programar-home-start-date" class="editable-attribute home-start-day schedule-date-input a-text-medium-brownish table-input" placeholder="00-00-0000">
                                </div>
                                <div>
                                    <input type="text" id="programar-home-start-hrs" class="editable-attribute home-start-hours time-seconds-input a-text-medium-brownish table-input" placeholder="00:00:00">
                                </div>
                            </div>
                            <div class="programar-schedule d-flex justify-content-end" key="in_home_expiration">
                                <div>
                                    <label for="programar-home-end-date" class="a-text-bold-brownish text-normal">Fin: </label>
                                    <input type="text" id="programar-home-end-date" class="editable-attribute home-expiration-day schedule-date-input a-text-medium-brownish table-input" placeholder="00-00-0000">
                                </div>
                                <div>
                                    <input type="text" id="programar-home-end-hrs" class="editable-attribute home-expiration-hours time-seconds-input a-text-medium-brownish table-input" placeholder="00:00:00">
                                </div>
                            </div>
                        </div>
                        `;
                    } else {
                        //Extraemos la fecha y hora de inicio
                        let inHomeBegin = program.in_home_begin
                            ? program.in_home_begin.split(" ")
                            : "";
                        //En caso de que no exista la fecha, ponemos la fecha en 0
                        let inHomeBeginDate = inHomeBegin[0]
                            ? inHomeBegin[0].split("-")
                            : "";
                        //Obtenemos el año
                        let inHomeBeginYear = inHomeBeginDate[0]
                            ? inHomeBeginDate[0]
                            : "0000";
                        //Obtenemos el mes
                        let inHomeBeginMonth = inHomeBeginDate[1]
                            ? inHomeBeginDate[1]
                            : "00";
                        //Obtenemos el día
                        let inHomeBeginDay = inHomeBeginDate[2]
                            ? inHomeBeginDate[2]
                            : "00";
                        //En caso de que no exista la hora, ponemos la hora en 0
                        let inHomeBeginTime = inHomeBegin[1]
                            ? inHomeBegin[1]
                            : "00:00:00";

                        //Obtenemos la fecha y hora de fin
                        let inHomeExp = program.in_home_expiration.split(" ");
                        //Obtenemos la fecha y verificamos si efectivamente existe
                        let inHomeExpDate = inHomeExp[0]
                            ? inHomeExp[0].split("-")
                            : "00-00-0000";
                        //Obtenemos el año de la fecha extraida
                        let inHomeExpYear = inHomeExpDate[0]
                            ? inHomeExpDate[0]
                            : "0000";
                        //Obtenemos el mes
                        let inHomeExpMonth = inHomeExpDate[1]
                            ? inHomeExpDate[1]
                            : "00";
                        //Obtenemos el día
                        let inHomeExpDay = inHomeExpDate[2]
                            ? inHomeExpDate[2]
                            : "00";

                        inHome = `
                        <div class="yes-no">
                            <input type="radio" name="yes-no-${program.chapter_id}" id="programar-si-${program.chapter_id}" value="1" class="switch-home switch-table" checked/>
                            <label for="programar-si-${program.chapter_id}" id="siestado-${program.chapter_id}" class=" switch-label si-estilo cursor-pointer">
                                Sí</label>
                            <input type="radio" name="yes-no-${program.chapter_id}" id="programar-no-${program.chapter_id}" value="0" class="switch-home switch-table" />
                            <label for="programar-no-${program.chapter_id}" id="noestado-${program.chapter_id}" class="switch-label no-estilo cursor-pointer">
                                No</label>
                        </div>
                        `;
                        inHomeExpiration = `
                        <div class="programar-content pointer none">
                            <div class="programar-schedule d-flex justify-content-end" key="in_home_begin">
                                <div>
                                    <label for="programar-home-date" class="a-text-bold-brownish text-normal">Inicio: </label>
                                    <input type="text" id="programar-home-start-date" value="${inHomeBeginDay}-${inHomeBeginMonth}-${inHomeBeginYear}" class="editable-attribute home-expiration-day schedule-date-input a-text-medium-brownish table-input" placeholder="00-00-0000">
                                </div>
                                <div>
                                    <input type="text" value="${inHomeBeginTime}" id="programar-home-start-hrs" class="editable-attribute home-expiration-hours time-seconds-input a-text-medium-brownish table-input" placeholder="00:00:00">
                                </div>
                            </div>
                            <div class="programar-schedule d-flex justify-content-end" key="in_home_expiration">
                                <div>
                                    <label for="programar-home-end-date" class="a-text-bold-brownish text-normal">Fin: </label>
                                    <input type="text" value="${inHomeExpDay}-${inHomeExpMonth}-${inHomeExpYear}" id="programar-home-end-date" class="editable-attribute home-expiration-day schedule-date-input a-text-medium-brownish table-input" placeholder="00-00-0000">
                                </div>
                                <div>
                                    <input type="text" id="programar-home-end-hrs" class="editable-attribute home-expiration-hours time-seconds-input a-text-medium-brownish table-input" placeholder="00:00:00">
                                </div>
                            </div>
                        </div>
                        `;
                    }
                    //Verificamos el número de imágenes que tiene cada programa
                    let images = "";

                    if (program.images.cantity_images_uploaded < 9) {
                        images = `
                        <div class="contenedor-columna selectable-column centro editable-column" rel="imagenes">
                            <a href="upimage/${program.chapter_id}">
                                <div class="image-ta position-relative">
                                    <img src="./images/add-icon.svg" alt="añadir imagenes" class="add-images-icon">
                                    <img src="${program.images.thumbnail_list_horizontal}" alt="${program.title}" class="image-program">
                                </div>
                            </a>
                            <span class="d-block a-text-regular-brownishtwo pt-2">Añade imágenes</span>
                            <div>
                                <span class="a-text-regular-brownishtwo">${program.images.cantity_images_uploaded}</span><span class="a-text-regular-brownishtwo">/9</span>
                            </div>
                        </div>
                        `;
                    } else {
                        images = `
                        <div class="contenedor-columna selectable-column centro editable-column" rel="imagenes">
                            <a href="upimage/${program.chapter_id}">
                                <div class="image-ta position-relative">
                                    <img src="./images/basic-icons/pencil-edit-teal.svg" alt="añadir imagenes" class="add-images-icon">
                                    <img src="${program.images.thumbnail_list_horizontal}" alt="" class="image-program">
                                </div>
                            </a>
                            <span class="d-block a-text-regular-brownishtwo pt-2">Modifica imágenes</span>
                            <div>
                                <span class="a-text-regular-brownishtwo">${program.images.cantity_images_uploaded}</span><span class="a-text-regular-brownishtwo">/9</span>
                            </div>
                        </div>
                        `;
                    }

                    //Cambiamos el formato de la fecha del campo schedule item long date time
                    let scheduleItemLongDateTime = program.day.split("-");

                    //Evaluamos si el programa está subtitulado
                    let subbed = "";
                    if (program.subbed == 0) {
                        subbed = `
                        <div class="contenedor-columna selectable-column centro editable-column" rel="subbed" key="subbed" chapter_id="${program.chapter_id}" >
                            <div class="schedule-date">
                                <div class="yes-no">
                                    <input type="radio" id="yes-subbed-${program.chapter_id}" name="subbed-${program.chapter_id}" value="1"  class="switch-table" />
                                    <label for="yes-subbed-${program.chapter_id}" id="siestado-date2" class="switch-label cursor-pointer si-estilo">
                                        Sí</label>
                                    <input type="radio" checked id="no-subbed-${program.chapter_id}" name="subbed-${program.chapter_id}" value="0" class="switch-table" />
                                    <label for="no-subbed-${program.chapter_id}" id="noestado-date2" class="switch-label cursor-pointer no-estilo">
                                        No</label>
                                </div>
                            </div>
                        </div>
                        `;
                    } else {
                        subbed = `
                        <div class="contenedor-columna selectable-column centro editable-column" rel="subbed" key="subbed" chapter_id="${program.chapter_id}" >
                            <div class="schedule-date">
                                <div class="yes-no">
                                    <input type="radio" id="yes-subbed-${program.chapter_id}" name="subbed-${program.chapter_id}" checked value="1" class="switch-table" />
                                    <label for="yes-subbed-{{$programs[$indexPrograms]->chapter_id}}" id="siestado-date2" class="switch-label cursor-pointer si-estilo">
                                        Sí</label>
                                    <input type="radio" id="no-subbed-${program.chapter_id}" name="subbed-${program.chapter_id}" value="0" class="switch-table"/>
                                    <label for="no-subbed-${program.chapter_id}" id="noestado-date2" class="switch-label cursor-pointer no-estilo">
                                        No</label>
                                </div>
                            </div>
                        </div>
                        `;
                    }
                    //Verificamos si el programa está doblado
                    let dubbed = "";
                    if (program.dubbed == 0) {
                        dubbed = `
                        <div class="contenedor-columna selectable-column centro editable-column" rel="dubbed" key="dubbed" chapter_id="${program.chapter_id}">
                            <div class="schedule-date">
                                <div class="yes-no" chapter_id="${program.chapter_id}">
                                    <input type="radio" id="yes-dubbed-${program.chapter_id}" name="dubbed-${program.chapter_id}" value="1" class="switch-table"/>
                                    <label for="yes-dubbed-${program.chapter_id}" id="siestado-date1" class="switch-label cursor-pointer si-estilo">
                                        Sí</label>
                                    <input type="radio" id="no-dubbed-${program.chapter_id}" name="dubbed-${program.chapter_id}" value="0"  class="switch-table" checked/>
                                    <label for="no-dubbed-${program.chapter_id}" id="noestado-date1" class="switch-label cursor-pointer no-estilo">
                                        No</label>
                                </div>
                            </div>
                        </div>
                        `;
                    } else {
                        dubbed = `
                        <div class="contenedor-columna selectable-column centro editable-column" rel="dubbed" key="dubbed" chapter_id="${program.chapter_id}">
                            <div class="schedule-date">
                                <div class="yes-no" chapter_id="${program.chapter_id}">
                                    <input type="radio" id="yes-dubbed-${program.chapter_id}" name="dubbed-${program.chapter_id}" value="1" class="switch-table" checked />
                                    <label for="yes-dubbed-${program.chapter_id}" id="siestado-date1" class="switch-label cursor-pointer si-estilo">
                                        Sí</label>
                                    <input type="radio" id="no-dubbed-${program.chapter_id}" name="dubbed-${program.chapter_id}" value="0"  class="switch-table" >
                                    <label for="no-dubbed-${program.chapter_id}" id="noestado-date1" class="switch-label cursor-pointer no-estilo">
                                        No</label>
                                </div>
                            </div>
                        </div>
                        `;
                    }
                    //Verificamos si el programa tiene la característica de audio 5.1
                    let audio5 = "";
                    if (program.audio5 == 0) {
                        audio5 = `
                        <div class="contenedor-columna selectable-column centro editable-column" rel="audio" key="audio5" chapter_id="${program.chapter_id}">
                            <div class="schedule-date">
                                <div class="yes-no" chapter_id="${program.chapter_id}">
                                    <input type="radio" id="yes-audio-${program.chapter_id}" name="audio-${program.chapter_id}" value="1" class="switch-table"/>
                                    <label for="yes-audio-${program.chapter_id}" id="siestado-date" class="switch-label cursor-pointer si-estilo">
                                        Sí</label>
                                    <input type="radio" id="no-audio-${program.chapter_id}" name="audio-${program.chapter_id}" value="0" class="switch-table" checked />
                                    <label for="no-audio-${program.chapter_id}" id="noestado-date" class="switch-label cursor-pointer no-estilo">
                                        No</label>
                                </div>
                            </div>
                        </div>
                        `;
                    } else {
                        audio5 = `
                        <div class="contenedor-columna selectable-column centro editable-column" rel="audio" key="audio5" chapter_id="${program.chapter_id}">
                            <div class="schedule-date">
                                <div class="yes-no" chapter_id="${program.chapter_id}">
                                    <input type="radio" id="yes-audio-${program.chapter_id}" name="audio-${program.chapter_id}" value="1" class="switch-table" checked />
                                    <label for="yes-audio-${program.chapter_id}" id="siestado-date" class="switch-label cursor-pointer si-estilo">
                                        Sí</label>
                                    <input type="radio" id="no-audio-${program.chapter_id}" name="audio-${program.chapter_id}" value="0" class="switch-table"  />
                                    <label for="no-audio-${program.chapter_id}" id="noestado-date" class="switch-label cursor-pointer no-estilo">
                                        No</label>
                                </div>
                            </div>
                        </div>
                        `;
                    }
                    //Guardamos todos los programas
                    rows += `
                    <div class="contenedor-fila" id="programacion-claro-${program.chapter_id}">
                        <div class="contenedor-columna selectable-column centro cursor-pointer" id="entrada-${program.chapter_id}" rel="acciones"><img src="./images/basic-icons/pencil-edit-teal.svg" class="mr-3 edit-row-pencil" alt="pencil"><img src="./images/eliminar-acti.svg" class="delete-row-pencil trash-row" alt="trash" chapter_id="${program.chapter_id}"></div>
                        <!--ESTADO-->
                        <div class="contenedor-columna centro editable-column cursor-pointer" id="estado-${program.chapter_id}">
                            <span class="program-original">Aprobado</span>
                        </div>
                        <!--ALERTA-->
                        <div class="contenedor-columna centro editable-column" id="alerta-${program.chapter_id}"></div>
                        <!--PROGRAM TITLE ORIGINAL-->
                        <div class="contenedor-columna selectable-column centro centro editable-column" chapter_id="${program.chapter_id}" key="title" rel="program-title-original" id="title-${program.chapter_id}">
                            <textarea id="program-title" name="" class="editable-attribute program-original edit-cell" id="lb-title-${program.chapter_id}">${program.title}</textarea>
                        </div>
                        <!--ESTABLECER EN LANDING-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="establecer-landing" chapter_id="${program.chapter_id}" key="in_landing">
                            ${inLanding}
                        </div>
                        <!--Programar publicacición landing-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="landing-programar" chapter_id="${program.chapter_id}" key="in_landing_publicacion">
                            ${inLandingExpiration}
                        </div>
                        <!--ESTABLECER EN HOME-->
                        <div class="contenedor-columna selectable-column centro editable-column" id="programar-${program.chapter_id}" rel="establecer-home" chapter_id="${program.chapter_id}" key="in_home">
                            ${inHome}
                        </div>
                        <!--HOME PROGRAMAR PUBLICACIÓN-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="programar-home-publicacion" chapter_id="${program.chapter_id}" key="in_home_publicacion">
                            ${inHomeExpiration}
                        </div>
                        <!--IMÁGENES-->
                        ${images}
                        <!--SCHEDULE ITEM LONG DATE TIME-->
                        <div class="contenedor-columna centro editable-column" rel="schedule-item-date-time">
                            <div class="schedule-date">
                                <label class='a-text-medium-brownish d-flex justify-content-center  pb-2' type=date>${scheduleItemLongDateTime[2]}-${scheduleItemLongDateTime[1]}-${scheduleItemLongDateTime[0]}</label> <label class='a-text-medium-brownish d-flex justify-content-center' type='time' style='line-height:0px;'>${program.duration} HRS</label>
                            </div>
                        </div>
                        <!--SCHEDULE ITEM LONG DATE-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="schedule-item-date" chapter_id="${program.chapter_id}" key="day">
                            <div class="schedule-date">
                                <input type="text" name="" class="editable-attribute table-input schedule-date-input text-center a-text-regular-brownishtwo" value="${scheduleItemLongDateTime[2]}-${scheduleItemLongDateTime[1]}-${scheduleItemLongDateTime[0]}">
                            </div>
                        </div>
                        <!--Schedule Item Long Time (GMT)-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="schedule-item-time" chapter_id="${program.chapter_id}" key="programing">
                            <div class="schedule-date">
                                <input type="text" class="editable-attribute table-input text-center schedule-time-input a-text-regular-brownishtwo" value="${program.programing}">
                            </div>
                        </div>
                        <!--Estimated Schedule Item Duration-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="estimated-duration" chapter_id="${program.chapter_id}" key="duration">
                            <div class="schedule-date">
                                <input type="text" class="editable-attribute table-input text-center time-seconds-input a-text-regular-brownishtwo" value="${program.duration}">
                            </div>
                        </div>
                        <!--Program Year Produced-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="program-year" chapter_id="${program.chapter_id}" key="program_year_produced">
                            <div class="schedule-date">
                                <input type="text" class="w-100 editable-attribute table-input text-center year-input a-text-regular-brownishtwo" value="${program.program_year_produced}" placeholder="YYYY">
                            </div>
                        </div>
                        <!--Program genre list-->
                        <div class="contenedor-columna selectable-column centro editable-column a-text-regular-brownishtwo" rel="program-genre" chapter_id="${program.chapter_id}" key="genre">
                            <div class="schedule-date">
                                <div class="d-flex justify-content-center">
                                    <select class="selectpicker dropup a-text-regular-brownishtwo text-normal show-tick" title="Select Option" multiple data-live-search="true" data-live-search-placeholder="Buscar" data-header="Program List"  data-dropup-auto="false">
                                        ${genreOption}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <!--PROGRAM TITLE ALTERNATE (subtítulo de la película o nombre del capítulo
                            de la serie-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="program-title-alternate" chapter_id="${program.chapter_id}" key="subtitle">
                            <textarea class="editable-attribute program-original edit-cell" id="lb-subtitle-${program.chapter_id}">${program.subtitle}</textarea>
                        </div>
                        <!--PROGRAM EPISODE SEASON-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="program-episode-season" key="season" chapter_id="${program.chapter_id}">
                            <input class="a-text-regular-brownishtwo text-center editable-attribute table-input" value="${program.seasons}" />
                        </div>
                        <!--PROGRAM EPISODE NUMBER-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="program-episode-number" chapter_id="${program.chapter_id}" key="program_episode_number">
                            <input class="a-text-regular-brownishtwo table-input text-center editable-attribute" value="${program.program_episode_number}" />
                        </div>
                        <!--SYNOPSIS-->
                        <div class="contenedor-columna selectable-column centro editable-column" rel="synopsis" chapter_id="${program.chapter_id}" key="synopsis" synopsis="${program.synopsis}">
                            <div class="program-original text-left edit-cell" id="lb-synopsis-${program.chapter_id}">
                                <span class="mb-0 lb-synopsis">${program.synopsis}</span>
                                <span class="text-normal cursor-pointer a-text-bold-teal see-more" program_title="${program.title}">Ver más...</span>
                            </div>
                        </div>
                        <!--RATING-->
                        <div class="contenedor-columna selectable-column centro" rel="rating-code" chapter_id="${program.chapter_id}" key="rating">
                            <div class="schedule-date">
                                <input class="editable-attribute text-center table-input a-text-regular-brownishtwo" value="${program.rating}" />
                            </div>
                        </div>
                        <!--SUBBED-->
                        ${subbed}
                        <!--DUBBED-->
                        ${dubbed}
                        <!--AUDIO 5.1-->
                        ${audio5}
                    </div>
                    `;
                });
            });

            let newGrill = `
                ${header}
                ${rows}
            `;
            $(".grilla-body").html("");
            $(".grilla-body").html(newGrill);
            let options = {
                load: function(el) {
                    el.classList.add("fade-grilla");
                }
            };
            createLazyLoad(".contenedor-fila", options);
            eventsGrilla();
        }
    });
}

function addImageToProgram(id_version, id_program, image) {
    let data = {
        id_version: id_version,
        id_program: id_program,
        image: image,
        function: "addIMageToProgram"
    };

    $.ajax({
        type: "POST",
        data: data,
        url: "./adapters/generalSchedule.php",
        success: function(result) {
            console.log(result);
        }
    });
}

function deleteProgram(id_program, id_version) {
    let data = {
        id_program: id_program,
        id_version: id_version,
        function: "deleteProgram"
    };

    $.ajax({
        type: "POST",
        data: data,
        url: "./adapters/generalSchedule.php",
        success: function(result) {
            console.log(result);
        }
    });
}

function addImagesModalIcons() {
    $.ajax({
        type: "POST",
        url: "landing/getSection/programation",
        cache: false,
        success: function(result) {
            result = JSON.parse(result);
            $("#icon_canal_claro_edit").attr("src", result.icon_canal_claro);
            $("#icon_claro_cinema_edit").attr("src", result.icon_claro_cinema);
            $("#icon_concert_channel_edit").attr(
                "src",
                result.icon_concert_channel
            );
        }
    });
}
/**
 * Se consulta a la API y se colocan las imagenes que se encuentren
 */
function addImagesModalBanner() {
    $.ajax({
        type: "POST",
        cache: false,
        url: "landing/getSection/programation",
        success: function(result) {
            result = JSON.parse(result);
            let slider = "";
            let counter = 1;
            $(".programming-slider-dots .slick-dots").append(
                ` <img src="./images/add-icon.svg" class="add-programming-image cursor-pointer">`
            );

            while (true) {
                try {
                    if (result["image_slider_" + counter]) {
                        slider =
                            slider +
                            `
                    <div class="bor thumbnail-image-program position-relative h-100" id="${counter}">
                    <input type="file" name="image_programming[]" id="image_programming_${counter}" class="input-image-program d-none image_programming" data-index="${counter}">
                    <label for="image_programming_${counter}"
                        class="h-100 mb-0 d-flex justify-content-center align-items-center  flex-column load-programming-carousel" data-index="${counter}">
                        <img src="http://back.claronetworks.openofficedospuntocero.info/backoffice/public/images/synopsis/camara.svg" alt="add-photo"
                            class=" cursor-pointer add-photo" />
                        <span class="a-text-bold-warm text-plus mt-3">1920px X 657px</span>
                        <img src="${result["image_slider_" + counter]}"
                            class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program img_image_programming_${counter}"/>
                    </label>
                </div>`;

                        counter++;
                    } else {
                        break;
                    }
                } catch (error) {
                    break;
                }
            }

            let conf = {
                slidesToShow: 1,
                dots: true,
                appendDots: $(".programming-slider-dots"),
                initialSlide: 0,
                infinite: false,
                arrows: true,
                prevArrow:
                    '<img src="./images/synopsis/arrow.svg" class="cursor-pointer arrow-left-programming" />',
                nextArrow:
                    '<img src="./images/synopsis/arrow.svg" class="cursor-pointer arrow-right-programming" />',
                customPaging: function(slider, i) {
                    var thumb = $(slider.$slides[i]).data();
                    return (
                        "<p class='mb-0 a-text-bold-teal slider-pagination-item mr-4 mb-3'>" +
                        (i + 1) +
                        "</p>"
                    );
                }
            };

            const programmingSlider = $(".programming-slider");
            /*  $(".programming-slider").slick("slickAdd", slider); //agregar la información al slider */
            programmingSlider.html(""); //agregar la información al slider
            programmingSlider.html(slider); //agregar la información al slider
            try {
                programmingSlider.slick("unslick");
                programmingSlider.slick(conf);
                $(".programming-slider-dots .slick-dots").append(
                    ` <img src="./images/add-icon.svg" class="add-programming-image cursor-pointer">`
                );
            } catch (error) {
                programmingSlider.slick(conf);
                $(".programming-slider-dots .slick-dots").append(
                    ` <img src="./images/add-icon.svg" class="add-programming-image cursor-pointer">`
                );
            }

            $(".add-programming-image").click(function() {
                //Cada vez que se haga click, el contador incrementa
                let slideIndex = $(".load-programming-carousel").length;

                //Agregamos un slide al slider de programación
                $(".programming-slider").slick(
                    "slickAdd",
                    `
                    <div class="slick-slide">
                        <div>
                            <div class="bor thumbnail-image-program position-relative h-100" id="${counter}">
                            <input type="file" name="image_programming[]" id="image_programming_${counter}" class="input-image-program d-none image_programming" tabindex="0" data-index="${counter}">
                                <label for="image_programming_${counter}" class="h-100 mb-0 d-flex justify-content-center align-items-center flex-column load-programming-carousel">
                                    <img src="./images/synopsis/camara.svg" alt="add-photo" class=" cursor-pointer add-photo">
                                    <span class="a-text-bold-warm text-plus mt-3">1920px X 657px</span>
                                    <img src="./images/synopsis/image-synopsis-carrusel.jpg" class="w-100 h-100 cursor-pointer image-cover prev-image-program img_image_programming_${counter}">
                                </label>
                            </div>
                        </div>
                    </div>
                    `
                );
                $(".programming-slider-dots .slick-dots").append(
                    ` <img src="./images/add-icon.svg" class="add-programming-image cursor-pointer">`
                );

                $(".thumbnail-image-program").click(function() {
                    let id = this.attributes[1].value;
                    $("#image_programming_" + id).change(function() {
                        let data = this;
                        var fileSrt = new FileReader();
                        if (data.files[0]) {
                            fileSrt.onload = function(e) {
                                $(".img_image_programming_" + id).attr(
                                    "src",
                                    e.target.result
                                );
                            };
                        }
                        fileSrt.readAsDataURL(data.files[0]);
                    });
                });
            });

            // $('.load-programming-carousel').click(function () {
            //     alert($('.load-programming-carousel').attr('data-index'));
            // });

            // $(".input-image-program").change(function () {
            //     let currentInput = $(this);
            //     if (this.files && this.files[0]) {
            //         var reader = new FileReader();
            //         reader.onload = function (e) {
            //             currentInput
            //                 .next()
            //                 .children(".prev-image-program")
            //                 .attr("src", e.target.result)
            //                 .addClass("h-100 w-100")
            //                 .css("z-index", "2");
            //         };
            //         reader.readAsDataURL(this.files[0]);
            //     }
            // });
        }
    });
}

export {
    addImagesModalBanner,
    addImagesModalIcons,
    editAttributeProgram,
    filterDates
};
