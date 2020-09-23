import LandingModel from "../models/landing.js";
let landingModel = new LandingModel();
export default class LandingController {

    getContentHome() {
        let data = landingModel.getContentHome();
        return data;
    }
}
