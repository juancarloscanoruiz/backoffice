import ProgramModel from "../models/program";
let programModel = new ProgramModel();

/**
 * @class Clase para recibir información de la vista y mandarla al modelo
 * Aquí se dan formato a algunos datos y se retorna el resultado del modelo a la vista
 */
export default class ProgramController {

    getSynopsis(id) {
        let data = programModel.getSynopsis(id);
        return data;
    }

    editDetailsSynopsis(data) {
        let response = programModel.editBlockSynopsis(data);
        return response;
    }

    editAttributesSynopsis(chapterId, key, value) {
        let response = programModel.editAttributeSynopsis(chapterId, key, value)
        return response;
    }
}
