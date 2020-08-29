import $ from "jquery";

function getDays(month) {
    let date = new Date();
    return new Date(date.getUTCFullYear(), date.getUTCMonth() + month, 0).getUTCDate();
}

function getDay() {
    let date = new Date();
    return date.getUTCDate();
}

function getDayName(month, day) {
    let date = new Date();
    let currentDay = new Date(date.getUTCFullYear(), month, day).getUTCDay();

    let days = ["DOM", "LUN", "MAR", "MIER", "JUE", "VIE", "SAB"];

    return days[currentDay];
}

function getMonthAndYear(month) {
    let date = new Date();
    let year = date.getUTCFullYear();
    let months = [
        "ENERO",
        "FEBRERO",
        "MARZO",
        "ABRIL",
        "MAYO",
        "JUNIO",
        "JULIO",
        "AGOSTO",
        "SEPTIEMBRE",
        "OCTUBRE",
        "NOVIEMBRE",
        "DICIEMBRE"
    ];

    return `${months[month]} ${year}`;
}

//Creamos los días del slider de calendario
function createCalendarDays(container, calendarClass = "") {
    let date = new Date();

    /* Número de días del mes actual */
    let currentMonthDays = getDays(1);

    /* Número de mes actual*/
    let currentMonth = date.getUTCMonth();


    /* Número de días restantes del mes actual */
    let numberLastDays = getDays(1) - getDay();

    var totalDaysSlider = 0;

    var daysSlider = "";
    //Pegamos el nombre del mes y el año
    $("#slider-calendar-current-date").html(getMonthAndYear(date.getMonth()));
    //Obtenemos la hora GMT
    let dateUTC = new Date();
    //Día en horario central
    let dayUTC = "";
    //Mes en horario central
    let monthUTC = "";
    //Año en horario central
    let yearUTC = dateUTC.getUTCFullYear();

    if (dateUTC.getUTCMonth() < 10) {
        monthUTC = `0${dateUTC.getUTCMonth() + 1}`
    } else {
        monthUTC = dateUTC.getUTCMonth() + 1;
    }
    if (dateUTC.getUTCDate() < 10) {
        dayUTC = `0${dateUTC.getUTCDate()}`
    } else {
        dayUTC = dateUTC.getUTCDate();
    }

    if (numberLastDays <= 15) {
        totalDaysSlider = getDays(2) + (getDays(1) - getDay());
        //Días del primer mes
        for (let i = getDay(); i <= getDays(1); i++) {

            //Día actual
            if (i == getDay()) {
                if (i < 10) {
                    daysSlider += `
                                <li
                                0
                            )}" class="${calendarClass} programming-item programming-item-active" date="${yearUTC}-${monthUTC}-0${i}" section_id="">
                                <div class="day">
                                    <p class="day-text">${getDayName(currentMonth, i)}</p>
                                    <p class="day-number">${i}</p>
                                </div>
                                </li>
                            `;
                } else {
                    daysSlider += `
                                <li
                                0
                            )}" class="${calendarClass} programming-item programming-item-active" date="${yearUTC}-${monthUTC}-${i}" section_id="">
                                <div class="day">
                                    <p class="day-text">${getDayName(currentMonth, i)}</p>
                                    <p class="day-number">${i}</p>
                                </div>
                                </li>
                            `;
                }

            } else {
                if (i < 10) {
                    //Días restantes
                    daysSlider += `
                            <li class="${calendarClass} programming-item" date="${yearUTC}-${monthUTC}-0${i}" section_id="">
                            <div class="day">
                                <p class="day-text">${getDayName(currentMonth, i)}</p>
                                <p class="day-number">${i}</p>
                            </div>
                            </li>

                             `;
                } else {
                    //Días restantes
                    daysSlider += `
                            <li class="${calendarClass} programming-item" date="${yearUTC}-${monthUTC}-${i}" section_id="">
                            <div class="day">
                                <p class="day-text">${getDayName(currentMonth, i)}</p>
                                <p class="day-number">${i}</p>
                            </div>
                            </li>

                             `;
                }

            }
        }

        //Días del mes siguiente
        for (let i = 1; i <= getDays(2); i++) {
            if (i < 10) {
                daysSlider += `
                            <li class="${calendarClass} programming-item" date="${yearUTC}-${dateUTC.getUTCMonth() + 2}-0${i}" section_id="">
                                <div class="day">
                                    <p class="day-text">${getDayName(currentMonth + 1, i)}</p>
                                    <p class="day-number">${i}</p>
                                </div>
                            </li>
                        `;
            } else {
                daysSlider += `
                            <li class="${calendarClass} programming-item" date="${yearUTC}-${dateUTC.getUTCMonth() + 2}-${i}" section_id="">
                                <div class="day">
                                    <p class="day-text">${getDayName(currentMonth + 1, i)}</p>
                                    <p class="day-number">${i}</p>
                                </div>
                            </li>
                        `;
            }

        }
    } else {

        //En caso de que al mes le falten más de 15 días para terminar
        totalDaysSlider = currentMonthDays;
        for (let i = getDay(); i <= totalDaysSlider; i++) {
            if (i == getDay()) {
                if (i < 10) {
                    //Día actual activo
                    daysSlider += `
                                <li class="${calendarClass} programming-item programming-item-active" date="${yearUTC}-${monthUTC}-0${i}" section_id="">
                                <div class="day">
                                    <p class="day-text">${getDayName(currentMonth, i)}</p>
                                    <p class="day-number">${i}</p>
                                </div>
                                </li>
                            `;
                } else {
                    //Día actual activo
                    daysSlider += `
                                <li class="${calendarClass} programming-item programming-item-active" date="${yearUTC}-${monthUTC}-${i}" section_id="">
                                <div class="day">
                                    <p class="day-text">${getDayName(currentMonth, i)}</p>
                                    <p class="day-number">${i}</p>
                                </div>
                                </li>
                            `;
                }


            } else {
                if (i < 10) {
                    //Días siguientes
                    daysSlider += `
                            <li class="${calendarClass} programming-item" date="${yearUTC}-${monthUTC}-${i}" section_id="">
                            <div class="day">
                                <p class="day-text">${getDayName(currentMonth, i)}</p>
                                <p class="day-number">${i}</p>
                            </div>
                            </li>
                            `;
                } else {
                    //Días siguientes
                    daysSlider += `
                                    <li class="${calendarClass} programming-item" date="${yearUTC}-${monthUTC}-${i}" section_id="">
                                    <div class="day">
                                        <p class="day-text">${getDayName(currentMonth, i)}</p>
                                        <p class="day-number">${i}</p>
                                    </div>
                                    </li>
                                    `;
                }


            }
        }

    }
    container.html(daysSlider);
}

//Creamos un slider de slick slider
function createSlickSlider(container, options) {
    container.slick(options);
}

export {
    createSlickSlider,
    createCalendarDays
}
