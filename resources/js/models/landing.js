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
}
