@extends('layaout.app')

@section('content')
@include('partials.headers.headerPrograGeneral')
<?php
    $rol = "";
    switch ($response["rol_id"]) {
        case 1:
            $rol = "Súper Usuario";
            break;
        default:
            # code...
            break;
    }

    $landing = "";

    switch ($response["landing_id"]) {
        case 1:
           $landing = "CANAL CLARO";
            break;

        default:
            # code...
            break;
    }


?>

<div class="ml-5 float-left">
    <div><span class="a-text-black-light text-plus">Última edición : <span class="zona"> {{$response["last_edition"]}} </span> </span></div>
<span class="a-text-black-light text-plus">Editado por: {{$response["edited_for"]}} ({{$rol}})</span>

</div>
<div class="clearfix"></div>
<h3 class="a-text-bold-black h3 ml-5 mt-4">{{$landing}}</h3>
<h4 class="a-text-bold-black mt-4 text-plus ml-5 mb-4"> CARGAR IMÁGENES</h4>
<!--Título del programa-->
<div class="d-flex justify-content-center align-items-center a-btn-basic-large a-text-bold-brown-two a-btn-white text-normal ml-5 ">{{$response["title"]}}</div>
<h3 class="a-text-black-brown-two h3 d-flex justify-content-center mb-4">HOME</h3>
<div class='col-sm-12 no-gutters col-md-6  no-gutters col-lg-12  col-xl-12'>
    <img src='../images/registro/group-10.svg' class='image-pink-fondo' />
</div>
<div class='col-sm-4 col-md-4 col-lg-4 no-gutters'>
    <img src='../images/blue.svg' class='image-blue' />
</div>
<hr class="d-flex align-content-center separationhr col-11">
<div class="float-right mr-5 mt-2">
    <img src="../images/basic-icons/advertencia.svg" alt="signo de admiracion" class="mb-3 pt-1">
    <label for="" class="a-text-bold-tomato h3"> {{($response['cantity_img_program'])}}/6</label>
</div>
<h3 class="a-text-bold-brown-two ml-5 h3 mt-4">Recuerda subir la imagen en jpg</h3>
<div class="clearfix"></div>
<img src="{{ asset('storage/canal-claro/sinopsis3/UnaMujerDesconocida153_sinopsis3.jpeg') }}" alt="">
<!--FORMULARIO PARA SUBIR IMÁGENES-->
<form action="{{route('updateImages')}}" method="post" enctype="multipart/form-data">
    {{ csrf_field() }}
    <!--Nombre del programa-->
    <input type="hidden" name="title" value="{{$response['title']}}" >
    <!--ID-->
    <input type="hidden" name="id" value="{{Crypt::encrypt($response['chapter_id'])}}" >
    <!--LANDING-->
    <input type="hidden" name="landing_id" value="{{Crypt::encrypt($response['landing_id'])}}" >
    <div class="d-flex justify-content-around col-12 mt-5">
        <div class="col-6">
            <div class="d-flex align-items-center justify-content-center mb-4 a-btn-basic-medium a-text-bold-two a-btn-white text-plus mx-auto"><p class="mb-0">THUMBNAIL</p></div>
            <!--IMAGEN HORIZONTAL DEL PROGRAMA -->
            @if(empty($response['thumbnail_list_horizontal']))
            <div class="d-flex justify-content-center">
                <div class="centro">
                    <div class="bor thumbnail-image-program" id="thumbnail-home-horizontal">
                        <input type="file" name="image-horizontal" id="imageThumb-horizontal" class="d-none">
                        <label for="imageThumb-horizontal" class="">
                            <img src="../images/basic-icons/plus.svg" alt="add-photo" class="cursor-pointer add-photo">
                            <span class="a-text-bold-warm text-plus position-absolute mt-5"> 472px X 295px </span>
                            <img src="" alt="" class="image-cover prev-image-program thumbnail-image-program cursor-pointer">
                        </label>
                    </div>
                </div>
                @else
                <div class="centro position-relative mb-3">
                    <div class="bor mx-auto position-relative thumbnail-image-program" id="thumbnail-home-horizontal">
                        <input type="file" name="image-horizontal" id="imageThumb-horizontal" class="input-image-program d-none">
                        <label for="imageThumb-horizontal" class="mb-0">
                            <img src="{{$response['thumbnail_list_horizontal']}}" alt="" class="image-cover thumbnail-image-program prev-image-program">
                        </label>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <span class="text-plus a-text-bold-brown-two">CaballerosDelZodiaco_Thumbnail_CanalClaro_20200702.jpg</span>
                </div>
            </div>
            @endif

            <!--IMAGEN VERTICAL DEL PROGRAMA-->
            <div class="col-6">
                <div class="align-items-center d-flex justify-content-center mb-4 a-btn-basic-medium a-text-bold-two a-btn-white text-plus mx-auto">VERTICAL</div>
                @if(empty($response['thumbnail_list_vertical']))
                <div class="d-flex justify-content-center">
                    <div class="centro">
                        <div class="bor mx-auto thumbnail-image-program" id="thumbnail-home-vertical">
                            <input type="file" name="image-vertical" id="imageThumb-vertical" class="d-none">
                            <label for="imageThumb-vertical" class="d-flex justify-content-center align-items-center h-100 flex-column">
                                <img src="../images/basic-icons/plus.svg" alt="add-photo"  class="add-photo"/>
                                <span class="a-text-bold-warm text-plus mt-3">295px X 472px</span>
                                <img class="cursor-pointer image-cover prev-image-program thumbnail-image-program" />

                            </label>
                        </div>
                    </div>
                    @else
                    <div class="centro mb-3">
                        <div class="bor position-relative mx-auto thumbnail-image-program" id="thumbnail-home-vertical">
                            <input type="file" name="image-vertical" id="imageThumb-vertical" class="input-image-program d-none">
                            <label for="imageThumb-vertical" class="mb-0 d-flex align-items-center justify-content-center">
                                <img src="{{$response['thumbnail_list_vertical']}}" alt="" class="thumbnail-image-program prev-image-program cursor-pointer image-cover">
                            </label>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <span class="text-plus a-text-bold-brown-two">CaballerosDelZodiaco_Vertical_CanalClaro_20200702.jpg</span>
                    </div>
                </div>
            </div>

            @endif
            <!--IMÁGENES DE SINOPSIS DEL PROGRAMA-->
            <h3 class="a-text-black-brown-two h3 d-flex justify-content-center mt-4 mb-5"> SINÓPSIS </h3>
            <hr class="d-flex align-content-center separationhr col-11 mb-5">
            <!--IMÁGEN PRINCIPAL DE LA SINOPSIS-->
            @if(empty($response['image_synopsis']))
            <div class="ml-5 mb-5">
                <div class="bor mb-2 thumbnail-image-program position-relative" id="image_synopsis">
                    <input type="file" name="image-synopsis" id="imageThumb-synopsis" class="input-image-program d-none">
                    <label for="imageThumb-synopsis" class="d-flex justify-content-center align-items-center h-100 flex-column">
                        <img src="../images/basic-icons/plus.svg" alt="add-photo"  class="add-photo"/>
                        <span class="a-text-bold-warm text-plus mt-3">553px X 366px</span>
                        <img class="cursor-pointer image-cover prev-image-program thumbnail-image-program" />

                    </label>
                </div>
            </div>
            @else
            <div class="ml-5 mb-5">
                <div class="bor mb-3 thumbnail-image-program position-relative" id="image_synopsis">
                    <input type="file" name="image-synopsis" id="imageThumb-synopsis" class="input-image-program d-none" />
                    <label for="imageThumb-synopsis" class="">
                        <img src="../images/basic-icons/plus.svg" alt="add-photo" class="add-photo">
                        <img src="" alt="" class="image-cover cursor-pointer prev-image-program thumbmail-image-program">
                    </label>
                </div>
                <span class="text-plus a-text-bold-brown-two">CaballerosDelZodiaco_Thumbnail_CanalClaro_20200702.jpg</span>
            </div>
            @endif
            <!--IMÁGENES COMPLEMENTARIAS DE LA SINOPSIS-->
            <!--IMÁGENES SINÓPSIS 1-->
            <div class="ml-5 no-gutters">
                <div class="d-flex no-gutters justify-content-around col-12 mb-5">
                    @if(is_null($response['image_synopsis_frame_1']))

                    <div class="col-4">
                        <div class="bor image-synopsis-frame thumbnail-image-program position-relative">
                            <input type="file" name="image-synopsis-1" id="imageThumb-synopsis-1" class="input-image-program d-none">
                            <label for="imageThumb-synopsis-1" class="d-flex justify-content-center align-items-center h-100 flex-column">
                                <img src="../images/basic-icons/plus.svg" alt="add-photo" class="add-photo" />
                                <span class="a-text-bold-warm text-plus mt-3">375px X 215px</span>
                                <img class="cursor-pointer image-cover prev-image-program thumbnail-image-program" />

                            </label>
                        </div>
                    </div>
                    @else
                    <div class="col-4">
                        <div class="bor thumbnail-image-program image-synopsis-frame position-relative mb-3">
                            <input type="file" name="image-synopsis-1" id="imageThumb-synopsis-1" class="d-none input-image-program">
                            <label for="imageThumb-synopsis-1" class="">
                                <img src="../images/basic-icons/plus.svg" alt="add-photo" class="cursor-pointer add-photo">
                                <img src="{{$response['image_synopsis_frame_1']}}" alt="add-photo" class="image-cover prev-image-program cursor-pointer thumbnail-image-program">
                            </label>
                        </div>
                        <span class="text-plus a-text-bold-brown-two ">CaballerosDelZodiaco_Thumbnail_<br />CanalClaro_20200702.jpg</span>
                    </div>
                    @endif
                    <!--IMAGEN SINOPSIS 2-->
                    @if(empty($response['image_synopsis_frame_2']))
                    <div class="col-4">
                        <div class="bor image-synopsis-frame thumbnail-image-program position-relative">
                            <input type="file" name="image-synopsis-2" id="imageThumb-synopsis-2" class="input-image-program d-none">
                            <label for="imageThumb-synopsis-2" class="d-flex justify-content-center align-items-center h-100 flex-column">
                                <img src="../images/basic-icons/plus.svg" alt="add-photo"  class="add-photo"/>
                                <span class="a-text-bold-warm text-plus mt-3">375px X 215px</span>
                                <img class="cursor-pointer image-cover prev-image-program thumbnail-image-program" />

                            </label>
                        </div>
                    </div>
                    @else
                    <div class="col-4">
                        <div class="mb-3 bor thumbnail-image-program image-synopsis-frame position-relative">
                            <input type="file" name="image-synopsis-2" id="imageThumb-synopsis-2" class="input-image-program d-none">
                            <label for="imageThumb-synopsis-2" class="">
                                <img src="../images/basic-icons/plus.svg" alt="add-photo" class="cursor-pointer add-photo">
                                <img src="{{$response['image_synopsis_frame_2']}}" alt="add-photo" class="prev-image-program cursor-pointer image-cover thumbnail-image-program">
                            </label>
                        </div>

                        <span class="text-plus a-text-bold-brown-two ">CaballerosDelZodiaco_Thumbnail_<br />CanalClaro_20200702.jpg</span>
                    </div>
                    @endif
                    <!--IMAGEN SINOPSIS 3-->
                    @if(empty($response['image_synopsis_frame_3']))
                    <div class="col-4">
                        <div class="bor image-synopsis-frame thumbnail-image-program position-relative">
                            <input type="file" name="image-synopsis-3" id="imageThumb-synopsis-3" class="input-image-program d-none">
                            <label for="imageThumb-synopsis-3" class="d-flex justify-content-center align-items-center h-100 flex-column">
                                <img src="../images/basic-icons/plus.svg" alt="add-photo"  class="add-photo"/>
                                <span class="a-text-bold-warm text-plus mt-3">375px X 215px</span>
                                <img class="cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                            </label>
                        </div>
                    </div>
                    @else
                    <div class="col-4">
                        <div class="mb-3 bor thumbnail-image-program image-synopsis-frame position-relative">
                            <input type="file" name="image-synopsis-3" id="imageThumb-synopsis-3" class="input-image-program d-none">
                            <label for="imageThumb-synopsis-3" class="">
                                <img src="../images/basic-icons/plus.svg" alt="add-photo" class="cursor-pointer add-photo">
                                <img src="{{$response['image_synopsis_frame_2']}}" alt="add-photo" class="cursor-pointer image-cover thumbnail-image-program prev-image-program">
                            </label>
                        </div>
                        <span class="text-plus a-text-bold-brown-two ">CaballerosDelZodiaco_Thumbnail_<br />CanalClaro_20200702.jpg</span>
                    </div>
                    @endif
                </div>
            </div>

            <div class="d-flex justify-content-center mb-5">
                <input type="submit" class="d-flex justify-content-center a-btn-basic-medium a-btn-teal a-text-bold-white text-normal" value="Guardar">

            </div>
</form>

@endsection
