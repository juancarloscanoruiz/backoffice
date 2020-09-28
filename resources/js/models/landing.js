import $ from "jquery";

export default class LandingModel {
    async getContentHome() {
        let response = await fetch("landing/home");
        let data = await response.json();
        return data;
    }

    async getContentFooter() {
        let response = await fetch("landing/getContentFooter");
        let data = await response.json();
        return data;
    }

    async updateInfoFooter(dataFooter) {
        let options = {
            method: "POST",
            body: dataFooter,
            headers: {
                "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content")
            }
        };
        let response = await fetch("landing/updateInfoFooter", options);
        let data = await response.json();
        return data;
    }

    async getContentTerms() {
        let response = await fetch("landing/getContentRights");
        let data = await response.json();
        return data;
    }

    async updateInfoTermsAndPrivacy(dataTermsPrivacy) {
        let options = {
            method: "POST",
            body: dataTermsPrivacy,
            headers: {
                "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content")
            }
        };
        let response = await fetch("landing/updateInfoTermsAndPrivacy", options);
        let data = await response.json();
        return data;
    }
}
