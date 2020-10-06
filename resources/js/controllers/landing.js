import LandingModel from "../models/landing.js";
let landingModel = new LandingModel();
export default class LandingController {
    getContentHome() {
        let data = landingModel.getContentHome();
        return data;
    }

    getContentFooter() {
        let data = landingModel.getContentFooter();
        return data;
    }

    uploadImageFooter(image, key) {
        let data = new FormData();
        data.append("image", image);
        data.append("key", key);
        let response = landingModel.updateInfoFooter(data);
        return response;
    }

    updateInfoFooter(text, key) {
        let data = new FormData();
        data.append("text", text);
        data.append("key", key);
        let response = landingModel.updateInfoFooter(data);
        return response;
    }

    getContentRights() {
        let data = landingModel.getContentTerms();
        return data;
    }

    updateInfoTermsAndPrivacy(text, title, landing) {
        let data = new FormData();
        data.append("text", text);
        data.append("title", title);
        data.append("landing", landing);
        let response = landingModel.updateInfoTermsAndPrivacy(data);
        return response;
    }

    uploadHomeBannerImages(data) {
        let response = landingModel.uploadHomeBannerImages(data);
        return response;
    }
}
