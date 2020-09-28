export default class PrevImageHelper {
    prevUploadedImage() {
        $(".input-image-program").change(function () {
            let currentInput = $(this);
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    currentInput
                        .next()
                        .children(".prev-image-program")
                        .attr("src", e.target.result)
                        .addClass("h-100 w-100")
                        .css("z-index", "2");
                };

                reader.readAsDataURL(this.files[0]);
            }
        });
    }
}
