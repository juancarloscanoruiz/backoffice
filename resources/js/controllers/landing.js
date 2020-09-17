import LandingModel from "../models/landing";
let landingModel = new LandingModel();
export default class LandingController {

    getContentHome() {
        let data = landingModel.getContentHome();
        return data;
    }
}
