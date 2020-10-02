import $ from "jquery";

let h;
function previewPage(icon) {
    let pageContainer = $("iframe");
    let iframeCanalClaro = $("#navbar-prev-canal-claro iframe");
    let iframeProgramacion = $("#navbar-prev-programacion iframe");
    let iframeHome = $("#navbar-prev-home iframe");
    let iframeHomeGrilla = $("#navbar_prev_home_landing iframe");
    let iframeClaroCinema = $("#navbar-prev-claro-cinema iframe");
    let iframeFooterCinema = $("#claro-cinema-programing iframe");
    let iframeFooterConcert = $("#concert-channel-programing iframe");
    let iframeFooterClaro = $("#claro-canal-programing iframe");
    let iframeFooterNetworks = $("#claro-networks-programing iframe");   
    let prevMobileIcon = $("#prev-mobile");
    let prevTabletIcon = $("#prev-tablet");
    let prevDesktopIcon = $("#prev-desktop");

    //MOBILE
    if (icon.is("#prev-mobile")) {
        prevMobileIcon.css("opacity", "1");
        prevTabletIcon.css("opacity", "0.4");
        prevDesktopIcon.css("opacity", "0.4");
        pageContainer.css("width", "375px");
        pageContainer.css(
            "box-shadow",
            "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px"
        );
        iframeHome.css("height", "4400px");
        iframeHomeGrilla.css("height", "4400px");
        iframeProgramacion.css("height", "5000px");
        iframeCanalClaro.css("height", "2800px");
        iframeClaroCinema.css("height", "2600px");
        iframeFooterClaro.css("height", "1050px");
        iframeFooterConcert.css("height", "1050px");
        iframeFooterCinema.css("height", "920px");
        iframeFooterNetworks.css("height", "930px");
    }
    //TABLET
    else if (icon.is("#prev-tablet")) {
        prevMobileIcon.css("opacity", "0.4");
        prevTabletIcon.css("opacity", "1");
        prevDesktopIcon.css("opacity", "0.4");
        pageContainer.css("width", "1024px");
        pageContainer.css(
            "box-shadow",
            "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px"
        );
        iframeHome.css("height", "5100px");
        iframeHomeGrilla.css("height", "5100px");
        iframeProgramacion.css("height", "12000px");
        iframeCanalClaro.css("height", "2800px");
        iframeFooterCinema.css("height", "750px");
        iframeFooterNetworks.css("height", "750px");
        iframeFooterConcert.css("height", "950px");
        iframeFooterClaro.css("height", "950px");

      
    }
    //PC
    else {
        pageContainer.css("width", "1200px");
        prevMobileIcon.css("opacity", "0.4");
        prevTabletIcon.css("opacity", "0.4");
        prevDesktopIcon.css("opacity", "1");
        pageContainer.css(
           "box-shadow",
            "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px"
        );
        iframeHome.css("height", "4300px");
        iframeHomeGrilla.css("height", "4300px");
        iframeProgramacion.css("height", "2700px");
        iframeCanalClaro.css("height", "2900px");
        iframeFooterCinema.css("height", "790px");
        iframeFooterNetworks.css("height", "850px");
        iframeFooterConcert.css("height", "1050px");
        iframeFooterClaro.css("height", "1050px");
    }
}

export { previewPage };
