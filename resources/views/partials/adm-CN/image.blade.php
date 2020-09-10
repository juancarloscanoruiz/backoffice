@extends('layaout.app')

@section('content')
<div class='bg-color'>
    <span class='d-flex align-items-center justify-content-between  py-xl-2'>
        <a href="{{ route('admin')}}"><span class='ml-5'><img src="{{asset('/images/home/claro-logo.svg')}}"> </span></a>
        <span class='text-light1 mr-5'>Administrador de contenido</span>
    </span>
</div>

<div id='user_information' class='o-user-info-container d-flex align-items-center justify-content-between pt-xl-1 '>
    <div class='ml-5'>
        <span class='a-text-black-bold a-name-user'>{{ session('name') }}</span><br>
        <span class='text-light1 '>{{ session('rol_name') }}</span>
    </div>
    <div class='mr-5'>
        <a href="{{route('programacion_general')}}">
            <button class='mt-4 btn-return-sitio  a-btn-basic-small text-return load-picture'>REGRESAR</button>
        </a>
    </div>
</div>

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
    <div>
        <span class="a-text-black-light text-plus">Última edición : <span class="zona"> {{$response["last_edition"]}} </span> </span>
    </div>
    <span class="a-text-black-light text-plus">Editado por: {{$response["edited_for"]}} ({{$rol}})</span>
</div>

<div class="clearfix"></div>

<h3 class="a-text-bold-black h3 ml-5 mt-4">{{$landing}}</h3>

<h4 class="a-text-bold-black mt-4 text-plus ml-5 mb-4"> CARGAR IMÁGENES EN FORMATO JPG</h4>

<!--Título del programa-->
<div class="mb-5 ml-5">
    <span class="text-plus a-text-bold-two mx-auto a-btn-white d-inline-block text-uppercase px-4 py-3">{{$response["title"]}}</span>
</div>

<!-- Total de imágenes -->
<div class="text-right mr-5">
    <img src="../images/basic-icons/advertencia.svg" alt="signo de admiracion" class="mb-3 pt-1">
    <span class="a-text-bold-tomato h3"> {{($response['cantity_img_program'])}}/9</span>
</div>

<!-- Total de imágenes en HOME -->
<?php
    $countHome = 0;
    if(!empty($response['thumbnail_list_horizontal'])){
        $countHome += 1;
    }
    if(!empty($response['thumbnail_list_vertical'])){
        $countHome += 1;
    }
?>

<hr class="d-flex align-content-center separationhr col-11 mt-5">

<div class="position-relative">
    <h3 class="a-text-black-brown-two h3 d-flex justify-content-center mb-5 mt-5">HOME</h3>
    <div class="counter-images-program">
        <img src="../images/basic-icons/advertencia.svg" alt="signo de admiracion" class="mb-3 pt-1">
        <label for="" class="a-text-bold-tomato h3"> {{$countHome}}/2/9</label>
    </div>
</div>

<div class='col-sm-12 no-gutters col-md-6  no-gutters col-lg-12  col-xl-12'>
    <img src='../images/registro/group-10.svg' class='image-pink-fondo' />
</div>

<div class='col-sm-4 col-md-4 col-lg-4 no-gutters'>
    <img src='../images/blue.svg' class='image-blue' />
</div>

<div class="clearfix"></div>

<!--FORMULARIO PARA SUBIR IMÁGENES-->
<form action="{{route('updateImages')}}" method="post" enctype="multipart/form-data">
    {{ csrf_field() }}
    <!--Nombre del programa-->
    <input type="hidden" name="title" value="{{$response['title']}}" >
    <!--ID-->
    <input type="hidden" name="id" value="{{Crypt::encrypt($response['chapter_id'])}}" >
    <!--LANDING-->
    <input type="hidden" name="landing_id" value="{{Crypt::encrypt($response['landing_id'])}}" >


    <!-- Sección Home -->
    <div class="d-flex justify-content-around col-12 mt-5">
        <div class="col-6">
            <div class="mb-4 text-center">
                <span class="text-plus a-text-bold-two mx-auto a-btn-white d-inline-block px-4 py-3">THUMBNAIL</span>
            </div>
            <!--IMAGEN HORIZONTAL DEL PROGRAMA-->
                @if(empty($response['thumbnail_list_horizontal']))
                    <div class="d-flex justify-content-center">
                        <div class="centro position-relative mb-3">
                            <div class="bor mx-auto position-relative thumbnail-image-program" id="thumbnail-home-horizontal">
                                <input type="file" name="image-horizontal" id="imageThumb-horizontal" class="input-image-program d-none">
                                <label for="imageThumb-horizontal" class="mb-0 cursor-pointer d-flex justify-content-center align-items-center h-100 flex-column">
                                    <img src="{{asset('/images/synopsis/camara.svg')}}" alt="add-photo"  class="add-photo load-picture"/>
                                <span class="a-text-bold-warm text-plus mt-3">472px X 295px</span>
                                <img src="{{asset('/images/synopsis/image-synopsis-horizontal.png')}}" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                    @else
                        <div class="centro position-relative mb-3">
                            <div class="bor mx-auto position-relative thumbnail-image-program" id="thumbnail-home-horizontal">
                                <input type="file" name="image-horizontal" id="imageThumb-horizontal" class="input-image-program d-none">
                                <label for="imageThumb-horizontal" class="h-100 mb-0 d-flex justify-content-center align-items-center flex-column load-picture">
                                    <img src="{{asset('/images/basic-icons/pencil-edit-teal.svg')}}" alt="add-photo" class="edit-image-icon cursor-pointer"/>
                                    <img src="{{$response['thumbnail_list_horizontal']}}" alt="" class="image-cover thumbnail-image-program prev-image-program w-100 h-100">
                                </label>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <span class="text-plus a-text-bold-brown-two"></span>
                        </div>
                    </div>
                @endif

            <!--IMAGEN VERTICAL DEL PROGRAMA-->
            <div class="col-6">
                <div class="mb-4 text-center">
                    <span class="text-plus a-text-bold-two mx-auto a-btn-white d-inline-block px-4 py-3">VERTICAL</span>
                </div>
                @if(empty($response['thumbnail_list_vertical']))
                    <div class="d-flex justify-content-center">
                        <div class="centro mb-3">
                            <div class="bor position-relative mx-auto thumbnail-image-program" id="thumbnail-home-vertical">
                                <input type="file" name="image-vertical" id="imageThumb-vertical" class="input-image-program d-none">
                                <label for="imageThumb-vertical" class="mb-0 cursor-pointer d-flex justify-content-center align-items-center h-100 flex-column load-picture">
                                    <img src="{{asset('/images/synopsis/camara.svg')}}" alt="add-photo"  class="add-photo cursor-pointer"/>
                                <span class="a-text-bold-warm text-plus mt-3">295px X 472px</span>
                                <img src="{{asset('/images/synopsis/image-synopsis-horizontal.png')}}" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                                </label>
                            </div>
                        </div>
                    @else
                        <div class="centro mb-3">
                            <div class="bor position-relative mx-auto thumbnail-image-program" id="thumbnail-home-vertical">
                                <input type="file" name="image-vertical" id="imageThumb-vertical" class="input-image-program d-none">
                                <label for="imageThumb-vertical" class="h-100 mb-0 d-flex justify-content-center align-items-center flex-column load-picture">
                                    <img src="{{asset('/images/basic-icons/pencil-edit-teal.svg')}}" alt="add-photo"  class="edit-image-icon"/>
                                    <img src="{{$response['thumbnail_list_vertical']}}" alt="" class="w-100 h-100 thumbnail-image-program prev-image-program cursor-pointer image-cover">
                                </label>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <span class="text-plus a-text-bold-brown-two"></span>
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </div>

    <!-- Sección SINOPSIS - CARRUSEL -->
    <hr class="d-flex align-content-center separationhr col-11 mt-5 mb-5">
    <?php
        $countSynopsisSlider = 0;
        if(!empty($response["image_background_1"])){
            $countSynopsisSlider += 1;
        }
        if(!empty($response["image_background_2"])){
            $countSynopsisSlider += 1;
        }
        if(!empty($response["image_background_3"])){
            $countSynopsisSlider += 1;
        }
    ?>

    <div class="position-relative">
        <h3 class="a-text-black-brown-two h3 d-flex justify-content-center mt-5 mb-5"> SINOPSIS - CARRUSEL</h3>
        <div class="counter-images-program">
            <img src="../images/basic-icons/advertencia.svg" alt="signo de admiracion" class="mb-3 pt-1">
            <span class="a-text-bold-tomato h3">{{$countSynopsisSlider}}/3/9</span>
        </div>
    </div>


            <!--IMÁGENES DE SINOPSIS DEL PROGRAMA-->

            <!--IMÁGENES DEL SLIDER EN SINOPSIS-->

            <div class="current-slide-container a-text-bold-teal mb-4">
                <p class="mb-0 a-text-bold-teal current-slide-number">1</p>
            </div>
            <div class="synopsis-image-slider mx-auto">
                @if (empty($response['image_background_1']))
                    <div class="bor thumbnail-image-program position-relative h-100" >
                        <input type="file" name="image_background_1" id="image_background_1" class="input-image-program d-none">
                        <label for="image_background_1" class="h-100 mb-0 d-flex justify-content-center align-items-center flex-column load-picture">
                        <img src="{{asset('/images/synopsis/camara.svg')}}" alt="add-photo"  class=" cursor-pointer add-photo"/>
                            <span class="a-text-bold-warm text-plus mt-3">1000px X 342px</span>
                        <img src="{{asset('/images/synopsis/image-synopsis-carrusel.jpg')}}" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                        </label>
                    </div>
                @else
                    <div class="bor thumbnail-image-program position-relative h-100" >
                        <input type="file" name="image_background_1" id="image_background_1" class="input-image-program d-none">
                        <label for="image_background_1" class="h-100 mb-0 d-flex justify-content-center align-items-center flex-column load-picture">
                            <img src="{{asset('/images/basic-icons/pencil-edit-teal.svg')}}" alt="add-photo" class="edit-image-icon cursor-pointer"/>
                            <img src="{{$response['image_background_1']}}" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                        </label>
                    </div>
                @endif

                @if (empty($response['image_background_2']))
                    <div class="bor thumbnail-image-program position-relative h-100" >
                        <input type="file" name="image_background_2" id="image_background_2" class="input-image-program d-none">
                        <label for="image_background_2" class="h-100 mb-0 d-flex justify-content-center align-items-center flex-column load-picture">
                            <img src="{{asset('/images/synopsis/camara.svg')}}" alt="add-photo"  class=" cursor-pointer add-photo"/>
                            <span class="a-text-bold-warm text-plus mt-3">1000px X 342px</span>
                            <img src="{{asset('/images/synopsis/image-synopsis-carrusel.jpg')}}" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                        </label>
                    </div>
                @else
                    <div class="bor thumbnail-image-program position-relative h-100" >
                        <input type="file" name="image_background_2" id="image_background_2" class="input-image-program d-none">
                        <label for="image_background_2" class="h-100 mb-0 d-flex justify-content-center align-items-center flex-column load-picture">
                            <img src="{{asset('/images/basic-icons/pencil-edit-teal.svg')}}" alt="add-photo" class="edit-image-icon cursor-pointer"/>
                            <img src="{{$response['image_background_2']}}" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                        </label>
                    </div>
                @endif
                @if (empty($response['image_background_3']))
                    <div class="bor thumbnail-image-program position-relative h-100" >
                        <input type="file" name="image_background_3" id="image_background_3" class="input-image-program d-none">
                        <label for="image_background_3" class="h-100 mb-0 d-flex justify-content-center align-items-center flex-column load-picture">
                            <img src="{{asset('/images/synopsis/camara.svg')}}" alt="add-photo"  class=" cursor-pointer add-photo"/>
                                <span class="a-text-bold-warm text-plus mt-3">1000px X 342px</span>
                            <img src="{{asset('/images/synopsis/image-synopsis-carrusel.jpg')}}" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                        </label>
                    </div>
                @else
                    <div class="bor thumbnail-image-program position-relative h-100" >
                        <input type="file" name="image_background_3" id="image_background_3" class="input-image-program d-none">
                        <label for="image_background_3" class="h-100 mb-0 d-flex justify-content-center align-items-center flex-column load-picture">
                            <img src="{{asset('/images/basic-icons/pencil-edit-teal.svg')}}" alt="add-photo" class="edit-image-icon cursor-pointer"/>
                            <img src="{{$response['image_background_3']}}" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                        </label>
                    </div>
                @endif


            </div>
            <hr class="d-flex align-content-center separationhr col-11 mt-5 mb-5">
            <?php
            $countSynopsis = 0;
                if(!empty($response["image_synopsis"])){
                    $countSynopsis += 1;
                }
                if(!empty($response["image_synopsis_frame_1"])){
                    $countSynopsis += 1;
                }
                if(!empty($response["image_synopsis_frame_2"])){
                    $countSynopsis += 1;
                }
                if(!empty($response["image_synopsis_frame_3"])){
                    $countSynopsis += 1;
                }
             ?>
             <div class="position-relative">
                <h3 class="a-text-black-brown-two h3 d-flex justify-content-center mt-5 mb-5"> SINÓPSIS </h3>
                <div class="counter-images-program">
                    <img src="../images/basic-icons/advertencia.svg" alt="signo de admiracion" class="mb-3 pt-1">
                    <span class="a-text-bold-tomato h3"> {{$countSynopsis}}/4/9</span>
                </div>
             </div>

            <!--IMÁGEN PRINCIPAL DE LA SINOPSIS-->
            @if(empty($response['image_synopsis']))
            <div class="ml-5 mb-5">
                <div class="bor mb-2 thumbnail-image-program position-relative" id="image_synopsis">
                    <input type="file" name="image-synopsis" id="imageThumb-synopsis" class="input-image-program d-none">
                    <label for="imageThumb-synopsis" class="mb-0 d-flex justify-content-center align-items-center h-100 flex-column load-picture">
                        <img src="{{asset('/images/synopsis/camara.svg')}}" alt="add-photo"  class="add-photo"/>
                        <span class="a-text-bold-warm text-plus mt-3">552px X 366px</span>
                        <img src="{{asset('/images/synopsis/image-synopsis-horizontal.png')}}" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                    </label>
                </div>
            </div>
            @else
            <div class="ml-5 mb-5">
                <div class="bor mb-2 thumbnail-image-program position-relative" id="image_synopsis">
                    <input type="file" name="image-synopsis" id="imageThumb-synopsis" class="input-image-program d-none" />
                    <label for="imageThumb-synopsis" class="mb-0 d-flex justify-content-center align-items-center h-100 flex-column load-picture">
                        <img src="{{asset('/images/basic-icons/pencil-edit-teal.svg')}}" alt="add-photo" class="edit-image-icon cursor-pointer"/>
                        <img src="{{$response['image_synopsis']}}" alt="" class="h-100 w-100 image-cover cursor-pointer prev-image-program thumbmail-image-program">
                    </label>
                </div>
                <span class="text-plus a-text-bold-brown-two"></span>
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
                            <label for="imageThumb-synopsis-1" class="mb-0 cursor-pointer d-flex justify-content-center align-items-center h-100 flex-column load-picture">
                                <img src="{{asset('/images/synopsis/camara.svg')}}" alt="add-photo" class="add-photo" />
                                <span class="a-text-bold-warm text-plus mt-3">375px X 215px</span>
                                <img src="{{asset('/images/synopsis/image-synopsis-horizontal.png')}}" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />

                            </label>
                        </div>
                    </div>
                    @else
                    <div class="col-4">
                        <div class="bor thumbnail-image-program image-synopsis-frame position-relative mb-3">
                            <input type="file" name="image-synopsis-1" id="imageThumb-synopsis-1" class="d-none input-image-program">
                            <label for="imageThumb-synopsis-1" class="mb-0 d-flex justify-content-center align-items-center h-100 flex-column load-picture">
                                <img src="{{asset('/images/basic-icons/pencil-edit-teal.svg')}}" alt="add-photo" class="edit-image-icon cursor-pointer"/>
                                <img src="{{$response['image_synopsis_frame_1']}}" alt="add-photo" class="w-100 h-100 image-cover prev-image-program cursor-pointer thumbnail-image-program">
                            </label>
                        </div>
                        <span class="text-plus a-text-bold-brown-two "></span>
                    </div>
                    @endif
                    <!--IMAGEN SINOPSIS 2-->
                    @if(empty($response['image_synopsis_frame_2']))
                    <div class="col-4">
                        <div class="bor image-synopsis-frame thumbnail-image-program position-relative">
                            <input type="file" name="image-synopsis-2" id="imageThumb-synopsis-2" class="input-image-program d-none">
                            <label for="imageThumb-synopsis-2" class="mb-0 cursor-pointer d-flex justify-content-center align-items-center h-100 flex-column load-picture">
                                <img src="{{asset('/images/synopsis/camara.svg')}}" alt="add-photo"  class="add-photo cursor-pointer"/>
                                <span class="a-text-bold-warm text-plus mt-3">375px X 215px</span>
                                <img src="{{asset('/images/synopsis/image-synopsis-horizontal.png')}}" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />

                            </label>
                        </div>
                    </div>
                    @else
                    <div class="col-4">
                        <div class="mb-3 bor thumbnail-image-program image-synopsis-frame position-relative">
                            <input type="file" name="image-synopsis-2" id="imageThumb-synopsis-2" class="input-image-program d-none">
                            <label for="imageThumb-synopsis-2" class="mb-0 d-flex justify-content-center align-items-center h-100 flex-column load-picture">
                                <img src="{{asset('/images/basic-icons/pencil-edit-teal.svg')}}" alt="add-photo" class="edit-image-icon cursor-pointer"/>
                                <img src="{{$response['image_synopsis_frame_2']}}" alt="add-photo" class="w-100 h-100 prev-image-program cursor-pointer image-cover thumbnail-image-program">
                            </label>
                        </div>

                        <span class="text-plus a-text-bold-brown-two "></span>
                    </div>
                    @endif
                    <!--IMAGEN SINOPSIS 3-->
                    @if(empty($response['image_synopsis_frame_3']))
                    <div class="col-4">
                        <div class="bor image-synopsis-frame thumbnail-image-program position-relative">
                            <input type="file" name="image-synopsis-3" id="imageThumb-synopsis-3" class="input-image-program d-none">
                            <label for="imageThumb-synopsis-3" class="mb-0 cursor-pointer d-flex justify-content-center align-items-center h-100 flex-column load-picture">
                                <img src="{{asset('/images/synopsis/camara.svg')}}" alt="add-photo"  class="add-photo cursor-pointer"/>
                                <span class="a-text-bold-warm text-plus mt-3">375px X 215px</span>
                                <img src="{{asset('/images/synopsis/image-synopsis-horizontal.png')}}" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                            </label>
                        </div>
                    </div>
                    @else
                    <div class="col-4">
                        <div class="mb-3 bor thumbnail-image-program image-synopsis-frame position-relative">
                            <input type="file" name="image-synopsis-3" id="imageThumb-synopsis-3" class="input-image-program d-none">
                            <label for="imageThumb-synopsis-3" class="mb-0 d-flex justify-content-center align-items-center h-100 flex-column load-picture">
                                <img src="{{asset('/images/basic-icons/pencil-edit-teal.svg')}}" alt="add-photo" class="edit-image-icon cursor-pointer"/>
                                <img src="{{$response['image_synopsis_frame_3']}}" alt="add-photo" class="w-100 h-100 cursor-pointer image-cover thumbnail-image-program prev-image-program">
                            </label>
                        </div>
                        <span class="text-plus a-text-bold-brown-two "></span>
                    </div>
                    @endif
                </div>
            </div>

            <div class="d-flex justify-content-center mb-5">
                <input type="submit" class="text-uppercase d-flex justify-content-center a-btn-basic-medium a-btn-teal a-text-bold-white text-normal load-picture" value="Guardar">
            </div>
</form>
@endsection
