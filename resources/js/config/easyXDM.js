//


let confProgramacionConcertChannel = {
    remote: "http://localhost:8888/MaquetaCNetworks/programacion-edi-concert.php",
    container: document.getElementById(
        "navbar-prev-programacion-concert"
    ),
    onMessage: function (message, origin) {
        let json = JSON.parse(message);
        if (typeof json == "object") {
            let loader = `
                    <div class="loader-view-container" id="loader1">
                        <img src="./images/loader.gif" class="loader" alt="">
                    </div>
                        `;
            switch (json.type) {
                case "program":
                    getChapterInfo(json.chapterId);
                    break;
                case "slider-pagination":
                    $("body").append(loader);

                    setTimeout(function () {
                        $(".modal-programming-carousel").modal("show");
                        $("#loader1").remove();

                        addImagesModalBanner();
                    }, 3000);

                    break;
                case "synopsis":
                    document
                        .querySelector("body")
                        .insertAdjacentHTML("beforeend", loader);
                    window.location.href =
                        "http://back.claronetworks.openofficedospuntocero.info/backoffice/public/landing/edit-program";
                    break;
                case "menu-logos":
                    $("body").append(loader);
                    setTimeout(function () {
                        addImagesModalIcons();

                        $(".modal-edit-icons").modal("show");

                        $("#loader1").remove();
                    }, 3000);
                    break;

                default:
                    break;
            }
        }
        this.container.getElementsByTagName("iframe")[0].style.height =
            message + "px";
        this.container.getElementsByTagName("iframe")[0].style.boxShadow =
            "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
    }
};
let confProgramacionClaroCinema = {
    remote: "http://localhost:8888/MaquetaCNetworks/programacion-edi-cinema.php",
    container: document.getElementById("navbar-prev-programacion"),
    onMessage: function (message, origin) {
        let json = JSON.parse(message);
        if (typeof json == "object") {
            let loader = `
                    <div class="loader-view-container" id="loader1">
                        <img src="./images/loader.gif" class="loader" alt="">
                    </div>
                        `;
            switch (json.type) {
                case "program":
                    getChapterInfo(json.chapterId);
                    break;
                case "slider-pagination":
                    $("body").append(loader);

                    setTimeout(function () {
                        $(".modal-programming-carousel").modal("show");
                        $("#loader1").remove();

                        addImagesModalBanner();
                    }, 3000);

                    break;
                case "synopsis":
                    document
                        .querySelector("body")
                        .insertAdjacentHTML("beforeend", loader);
                    window.location.href =
                        "http://back.claronetworks.openofficedospuntocero.info/backoffice/public/landing/edit-program";
                    break;
                case "menu-logos":
                    $("body").append(loader);
                    setTimeout(function () {
                        addImagesModalIcons();

                        $(".modal-edit-icons").modal("show");

                        $("#loader1").remove();
                    }, 3000);
                    break;

                default:
                    break;
            }
        }
        this.container.getElementsByTagName("iframe")[0].style.height =
            message + "px";
        this.container.getElementsByTagName("iframe")[0].style.boxShadow =
            "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
    }
};


export {
    confProgramacionClaroCinema,
    confProgramacionConcertChannel
}
