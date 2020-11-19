import $ from "jquery";

function slickCalendar(lastMonth, lastDay, slick, slickMonth) {
    let date = new Date()
    let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    let days = ["DOM", "LUN", "MAR", "MIER", "JUE", "VIE", "SAB"]
    slickMonth.html(months[date.getMonth()] + ' ' + date.getFullYear())
    for (let i = date.getDate(); i <= lastDay; i++) {
        if (i == date.getDate()) {
            slick.append(`<div class="synopsis-calendar-item programming-item programming-item-active" date="${date.getFullYear() + '-' + (date.getMonth() + 1) + '-0' + i}"><p class="day-text"></p>${days[textDay(date.getFullYear(), date.getMonth(), i)]}<p class="day-number">${i}</p></div>`)
        } else {
            slick.append(`<div class="synopsis-calendar-item programming-item" date="${date.getFullYear() + '-' + (date.getMonth() + 1) + '-0' + i}"><p class="day-text"></p>${days[textDay(date.getFullYear(), date.getMonth(), i)]}<p class="day-number">${i}</p></div>`)
        }
    }

}

function textDay(y, m, d) {
    let start = new Date(y, m, d);
    return start.getDay()
}

export { slickCalendar }