function gradientMenu(navbar, elementTarget) {
  elementTarget.on("scroll ontouchmove ontouchstart ontouchend", function() {
    var posicionScroll = elementTarget.scrollTop();
    if (navbar) {
      if (posicionScroll <= 0) {
        navbar.style.background =
          "linear-gradient(to bottom, #000000, rgba(0, 0, 0, 0))";
        navbar.style.position = "absolute";
      } else if (posicionScroll > 0 && posicionScroll <= 100) {
        navbar.style.background =
          "linear-gradient(to bottom, #000000, rgba(0, 0, 0, 0))";
        navbar.style.position = "fixed";
      } else if (posicionScroll >= 101) {
        navbar.style.background = "black";
        navbar.style.position = "fixed";
      }
    }
  });
}

export { gradientMenu };
