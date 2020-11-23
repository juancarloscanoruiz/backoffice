import $ from "jquery";

import { setImgCarruselHome } from './setters'

function setImgCarruselVertical() {
    $('.previewImage').on('change', function (e) {
        let img = e.target.files[0];
        let id = $(this).attr('chapter_id')
        let landing = $(this).attr('landing')
        let data = new FormData();
        data.append("thumbnail_list_vertical", img);
        data.append("chapter_id", id);
        data.append("landing", landing);
        setImgCarruselHome(data);
    })
}

export { setImgCarruselVertical }