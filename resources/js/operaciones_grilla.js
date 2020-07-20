//JQUERY
import $ from "jquery";
import { selectRow, selectColumn } from "./UI/UI.js";
import Litepicker from "litepicker";
import {
    editAttributeProgram,
    filterDates
} from "./services/generalSchedule.js";
//CONFIG
import {
    cleaveConfig,
    scheduleTimeConfig,
    timeWithSeconds,
    year
} from "./config/config.js";
function eventsGrilla() {
    /* Al dar click en el switch de "Establecer en lading", aplicamos ciertos estilos */
    $(".switch-landing").click(function() {
        let currentColumn = $(this).closest(".contenedor-columna");
        let landingOptionsChecks = currentColumn.children(
            ".establecer-options"
        );
        if ($(this).val() == 1) {
            landingOptionsChecks.css("pointer-events", "all");
            currentColumn
                .next()
                .children(".programar-content")
                .css("pointer-events", "all");
        } else {
            landingOptionsChecks.css("pointer-events", "none");
            //Hacemos que no se pueda escribir en los campos siguientes
            currentColumn
                .next()
                .children(".programar-content")
                .css("pointer-events", "none");

            //"Vaciar" inputs al momento de que el usuario da click en "No"
            currentColumn
                .next()
                .find("input")
                .val("");
            currentColumn
                .children(".establecer-options")
                .find("input")
                .prop("checked", false);
        }
    });

    /* Al dar click en el switch de "Establecer en Home", aplicamos ciertos estilos */
    $(".switch-home").click(function() {
        let currentColumn = $(this).closest(".contenedor-columna");

        if ($(this).val() == 1) {
            currentColumn
                .next()
                .children(".programar-content")
                .css("pointer-events", "all");
        } else {
            //Hacemos que no se pueda escribir en los campos siguientes
            currentColumn
                .next()
                .children(".programar-content")
                .css("pointer-events", "none");

            //"Vaciar" inputs al momento de que el usuario da click en "No"
            currentColumn
                .next()
                .find("input")
                .val("");
            currentColumn
                .children(".establecer-options")
                .find("input")
                .prop("checked", false);
        }
    });
    //Mostrar la sinópsis completa en modal
    $(".see-more").click(function() {
        let currentColumn = $(this).closest(".contenedor-columna");
        let synopsis = currentColumn.attr("synopsis");
        let chapterId = currentColumn.attr("chapter_id");
        let key = currentColumn.attr("key");
        $(".modal-textarea").val(synopsis);
        $(".modal-program-title").text($(this).attr("program_title"));
        $(".modal-synopsis").modal("show");
        $(".edit-synopsis-button").click(function() {
            let keyValue = $("#synopsis-content").val();
            console.log(keyValue);
            editAttributeProgram(chapterId, key, keyValue);
        });
    });

    let dateStartInput = document.getElementById("date-start-input");
    if (dateStartInput) {
        //ELEGIR FECHA DE INICIO Y FIN EN LA GRILLA
        let picker = new Litepicker({
            element: document.getElementById("date-start-input"),
            format: "YYYY-MM-DD",
            delimiter: ",",
            minDate: new Date(),
            onShow: function() {
                picker.picker.style.left = "50%";
                picker.picker.style.top = "50%";
                picker.picker.style.transform = "translate(-50%, -50%)";
                $(".litepicker").wrap(
                    "<div class='date-modal' id='modal-container'></div>"
                );
                $("#modal-container").css("display", "block");
            },
            onHide: function() {
                $("#modal-container").css("display", "none");
            },
            onSelect: function() {
                let fullDate = document
                    .getElementById("date-start-input")
                    .value.split(",");
                //  Fecha inicial del datepicker
                let startDate = fullDate[0];

                let startDateSplit = startDate.split("-");
                let startDateFull = `${startDateSplit[2]}-${startDateSplit[1]}-${startDateSplit[0]}`;
                $("#start-date-text").text(startDateFull);
                //   Fecha final del datepicker

                let endDate = fullDate[1];
                filterDates(startDate, endDate);
                let endDateSplit = endDate.split("-");
                let endDateFull = `${endDateSplit[2]}-${endDateSplit[1]}-${endDateSplit[0]}`;
                $("#end-date-text").text(endDateFull);
            },
            numberOfMonths: 1,
            numberOfColumns: 1,
            singleMode: false
        });
    }

    /* Al dar "enter" cancelamos el salto de línea,
        conseguimos el valor del campo de la grilla
        y hacemos la petición
    */

    $(".editable-attribute").keydown(function(e) {
        if (e.which === 13 && !e.shiftKey) {
            let key = $(this)
                .closest(".contenedor-columna")
                .attr("key");
            let keyValue = "";
            switch (key) {
                case "day":
                    let date = $(this)
                        .val()
                        .split("-");
                    keyValue = `${date[2]}-${date[1]}-${date[0]}`;
                    break;
                case "program_year_produced":
                    keyValue = parseInt($(this).val());
                    break;
                default:
                    keyValue = $(this).val();
                    break;
            }

            let chapterId = $(this)
                .closest(".contenedor-columna")
                .attr("chapter_id");
            e.preventDefault();
            $(this).blur();
            console.log(typeof keyValue);
            editAttributeProgram(chapterId, key, keyValue);
            return false;
        }
    });
    $(".editable-attribute").blur(function() {
        let currentColumn = $(this).closest(".contenedor-columna");
        let keyValue = $(this).val();
        let chapterId = currentColumn.attr("chapter_id");
        let key = currentColumn.attr("key");
        editAttributeProgram(chapterId, key, keyValue);
    });

    //Sacar los valores de los switches en la grilla
    $(".switch-table").click(function() {
        let currentColumn = $(this).closest(".contenedor-columna");
        let keyValue = $(this).val();
        let chapterId = currentColumn.attr("chapter_id");
        let key = currentColumn.attr("key");
        editAttributeProgram(chapterId, key, keyValue);
    });

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
Permite a todos los campos de Schedule item log datetener el formato YYYY-MM-DD
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

    //Truncar texto de sinópsis con "..."
    $(".lb-synopsis").each(function(index, element) {
        if ($(this).text().length > 200) {
            let text =
                $(this)
                    .text()
                    .substr(0, 200) + "...";
            $(this).text(text);
        }
    });

    $(".edit-row-pencil").click(selectRow);
    $(".selectable-column").click(selectColumn);
}

export { eventsGrilla };