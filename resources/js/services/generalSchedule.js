import $ from "jquery";

$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
    }
});
function getGeneralSchedule() {
    let data = {
        function: "getGeneralSchedule"
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

function editAttributeProgram(chapter_id, key, keyValue) {
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

export { editAttributeProgram };
