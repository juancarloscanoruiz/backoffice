@extends('layaout.app')

@section('content')

    <body>
        <!--Header-->
        @include('partials.headers.headers-claro.header-programacion')
        <div class="ml-5 float-left">
            <div>
                <span class="a-text-black-light text-plus">Última edición : <span class="zona"> </span> </span>
            </div>
            <span class="a-text-black-light text-plus">Editado por:</span>
        </div>
        <div class="clearfix"></div>
        <h3 class="a-text-bold-black h3 ml-5 mt-4">CANAL CLARO</h3>
        <h4 class="a-text-bold-black mt-4 text-plus ml-5 mb-4"> CARGAR IMÁGENES EN FORMATO JPG</h4>
        <h2 class="h2 text-center a-text-black-brown-two ">BANNER PROGRAMACIÓN - CARRUSEL </h2>
        <hr class="d-flex align-content-center separationhr col-11 mt-5 mb-0">
        <!--Slider pagination-->
        <div class="dots-container mx-auto d-flex justify-content-between">
            <div class="d-flex">
                <!--dots-->
                <div class="programming-slider-dots mt-5 mb-5"></div>
                <!--add slide-->
                <img src="{{ asset('images/add-icon.svg') }}" class="add-programming-image cursor-pointer">
            </div>
            <!--Calendar-->
            <div class="d-flex align-items-center">
                <div>
                    <h3 class="text-uppercase h3 a-text-black-brown-two">Vigencia</h3>
                </div>
                <input type="text" id="date-start-input">
                <label for="date-start-input"
                    class="ml-4 mb-0 date-button date-start-table d-flex align-items-center pl-3 pr-3"
                    id="date-start-table">
                    <img src="./images/calendario.svg" alt="">
                    <div class="ml-3">
                        <p class="text-small d-block mb-0 a-text-semibold-warmgrey">Inicio</p>
                        <p class="text-normal mb-0 a-text-bold-charcoal" id="start-date-text">DD-MM-YYYY</p>
                    </div>
                </label>

                <!--Fecha de fin de calendario-->
                <label for="date-start-input"
                    class="mb-0 ml-4 date-button date-end-table d-flex align-items-center pl-3 pr-3">
                    <img src="./images/calendario.svg" alt="">
                    <div class="ml-3">
                        <p class="text-small d-block mb-0 a-text-semibold-warmgrey">Fin</p>
                        <p class="text-normal mb-0 a-text-bold-charcoal" id="end-date-text">DD-MM-YYYY</p>
                    </div>
                </label>
            </div>
        </div>

        <!--Slider-->
        <div class="programming-slider mx-auto">
            <!--Slide-->
            <div class="bor thumbnail-image-program position-relative h-100">
                <input type="file" name="image_programming_1" id="image_background_1" class="input-image-program d-none">
                <label for="image_programming_1"
                    class="h-100 mb-0 d-flex justify-content-center align-items-center flex-column">
                    <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                        class=" cursor-pointer add-photo" />
                    <span class="a-text-bold-warm text-plus mt-3">1000px X 342px</span>
                    <img src="{{ asset('/images/synopsis/image-synopsis-carrusel.jpg') }}"
                        class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                </label>
            </div>
            <!--Slide-->
            <div class="bor thumbnail-image-program position-relative h-100">
                <input type="file" name="image_programming_2" id="image_programming_2" class="input-image-program d-none">
                <label for="image_programming_2"
                    class="h-100 mb-0 d-flex justify-content-center align-items-center flex-column">
                    <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                        class=" cursor-pointer add-photo" />
                    <span class="a-text-bold-warm text-plus mt-3">1000px X 342px</span>
                    <img src="{{ asset('/images/synopsis/image-synopsis-carrusel.jpg') }}"
                        class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                </label>
            </div>
            <!--Slide-->
            <div class="bor thumbnail-image-program position-relative h-100">
                <input type="file" name="image_programming_3" id="image_programming_3" class="input-image-program d-none">
                <label for="image_programming_3"
                    class="h-100 mb-0 d-flex justify-content-center align-items-center flex-column">
                    <img src="{{ asset('/images/synopsis/camara.svg') }}" alt="add-photo"
                        class=" cursor-pointer add-photo" />
                    <span class="a-text-bold-warm text-plus mt-3">1000px X 342px</span>
                    <img src="{{ asset('/images/synopsis/image-synopsis-carrusel.jpg') }}"
                        class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                </label>
            </div>
        </div>
        <!--End slider-->
        <!--Buttons-->
        <div class="text-center mb-5">
            <button
                class="d-inline-block mr-3 text-uppercase btn-grilla a-btn-basic-small btn-grilla a-btn-basic-small text-uppercase a-text-MBlack text-plus">aceptar</button>
            <button
                class="d-inline-block text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal">cancelar</button>
        </div>
    </body>
@endsection
