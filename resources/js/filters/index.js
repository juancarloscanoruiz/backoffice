import $ from "jquery";
import {
    cleaveConfig,
    scheduleTimeConfig,
    timeWithSeconds,
    year
} from "../config/config.js";

function filtro() {
    /*
    Permite a todos los campos de Schedule item log time tener el formato
    tiempo en hh:mm
    */
    $(".schedule-time-input")
        .toArray()
        .forEach(scheduleTime => {
            new Cleave(scheduleTime, scheduleTimeConfig);
        });
    /*
    Permite a todos los campos de Schedule item log date tener el formato YYYY-MM-DD
    */
    $(".schedule-date-input")
        .toArray()
        .forEach(scheduleDate => {
            new Cleave(scheduleDate, cleaveConfig);
        });
    /*
    Permite a todos los input con la clase time-seconds-input el formato de tiempo hh:mm:ss
    */
    $(".time-seconds-input")
        .toArray()
        .forEach(timeInput => {
            new Cleave(timeInput, timeWithSeconds);
        });
    /*
    Permite a todos los input con la clase year-input tener el formato YYYY
    */
    $(".year-input")
        .toArray()
        .forEach(yearInput => {
            new Cleave(yearInput, year);
        });
}

export {
    filtro
}