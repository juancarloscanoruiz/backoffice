import $ from "jquery";
export default class ProgramModel {

    //Edit block of data at the bottom of the synopsis landing
    async editBlockSynopsis(details) {
        let options = {
            method: "POST",
            body: JSON.stringify(
                details
            ),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content")
            }
        };
        let response = await fetch("landing/editBlockSynopsis", options);
        let data = await response.json();
        return data;
    }

    async getSynopsis(chapter_id) {
        let options = {
            method: "POST",
            body: JSON.stringify({
                chapter_id
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content")
            }
        };
        let response = await fetch("landing/getSynopsis", options);
        let data = await response.json();
        return data;
    }


}

//http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/program/editBolckSinopsis
