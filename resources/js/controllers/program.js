import ProgramModel from "../models/program";
let programModel = new ProgramModel();

export default class ProgramController {
    getSynopsis(id) {
        let data = programModel.getSynopsis(id);
        return data;

    }

    editDetailsSynopsis(data) {
        let response = programModel.editBlockSynopsis(data);
        return response;
    }
}
