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

function editAttributeProgram(id_version, id_program, metakey, valueMetakey) {
    let data = {
        id_version: id_version,
        id_program: id_program,
        metakey: metakey,
        valueMetakey: valueMetakey
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
