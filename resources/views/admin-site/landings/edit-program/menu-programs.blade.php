@extends('layaout.app')

@section('content')

    <body>
        @include('partials.headers.headerPrograGeneral')
        <div class="ml-5 float-left">
            <div>
                <span class="a-text-black-light text-plus">Última edición : <span class="zona"> </span> </span>
            </div>
            <span class="a-text-black-light text-plus">Editado por:</span>
        </div>
        <div class="clearfix"></div>
        <div class="clearfix"></div>
        <h3 class="a-text-bold-black h3 ml-5 mt-4">CANAL CLARO</h3>
        <h4 class="a-text-bold-black mt-4 text-plus ml-5 mb-4"> CARGAR IMÁGENES EN FORMATO JPG</h4>
        <h2 class="h2 text-center a-text-black-brown-two ">MENÚ DE CANALES</h2>
        <hr class="d-flex align-content-center separationhr col-11 mt-5 mb-5">
<!--div padre-->
      <div class="d-flex justify-content-around col-11 mb-5">
          <!--Div primer logo-->
            <div class="d-flex justify-content-center mt-5">
                <!--pagination-->
                <div class=" d-flex programming-dots ">
                     <p class='a-text-bold-teal slider-pagination slider-pagination-active '>1</p>
                </div>
                  <div class="centro position-relative mb-3">
                         <div class="bor mx-auto position-relative thumbnail-image-program" id="thumbnail-home-horizontal">
                            <input type="file" name="image-horizontal" id="imageThumb-horizontal" class="input-image-program d-none">
                                  <label for="imageThumb-horizontal" class="mb-0 cursor-pointer d-flex justify-content-center align-items-center h-100 flex-column">
                                         <img src="{{asset('/images/synopsis/camara.svg')}}" alt="add-photo"  class="add-photo"/>
                                         <span class="a-text-bold-warm text-plus p-2 pr-3 pl-3  white-shadow">472px X 295px</span>
                                         <img src="{{asset('/images/synopsis/image-synopsis-horizontal.png')}}" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                                 </label>
                         </div>
                        
                        <!--Div de los url-->
                        <div class="mt-5 d-flex justify-content-center">
                            <img src="{{asset('/images/basic-icons/link.svg')}}" alt="logo-link" class="mr-3">
                            <input type="text" name="links" id="links-logo" class="urls a-text-bold-warm text-normal" placeholder=" Enlace o URL">
                            
                            </div>
                    
                    </div>
</div>
                    <div class="d-flex justify-content-center mt-5">
                        <!--pagination-->
                            <div class=" d-flex programming-dots ">
                            <p class='a-text-bold-teal slider-pagination pag '>2</p>
                            </div>
                            <!--cargar imagenes-->
                        <div class="centro position-relative mb-3">
                                 <div class="bor mx-auto position-relative thumbnail-image-program" id="thumbnail-home-horizontal">
                                     <input type="file" name="image-horizontal" id="imageThumb-horizontal" class="input-image-program d-none">
                                         <label for="imageThumb-horizontal" class="mb-0 cursor-pointer d-flex justify-content-center align-items-center h-100 flex-column">
                                            <img src="{{asset('/images/synopsis/camara.svg')}}" alt="add-photo"  class="add-photo"/>
                                            <span class="a-text-bold-warm text-plus  p-2 pr-3 pl-3  white-shadow">472px X 295px</span>
                                            <img src="{{asset('/images/synopsis/image-synopsis-horizontal.png')}}" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                                     </label>
                                  </div>                                          
                        <!--div urls-->
                        <div class="mt-5 d-flex justify-content-center">
                            <img src="{{asset('/images/basic-icons/link.svg')}}" alt="logo-link" class="mr-3">
                            <input type="text" name="links" id="links-logo" class="urls a-text-bold-warm text-normal" placeholder=" Enlace o URL">
                           
                        </div>
                    </div>   
</div>
                    <div class="d-flex justify-content-center mt-5">
                        <!--pagination-->
                    <div class=" programming-dots ">
                    <p class='a-text-bold-teal slider-pagination '>3 </p>
                    </div>
                    <!--cargar imagenes-->
                        <div class="centro position-relative mb-3">
                            <div class="bor mx-auto position-relative thumbnail-image-program" id="thumbnail-home-horizontal">
                                  <input type="file" name="image-horizontal" id="imageThumb-horizontal" class="input-image-program d-none">
                                         <label for="imageThumb-horizontal" class="mb-0 cursor-pointer d-flex justify-content-center align-items-center h-100 flex-column">
                                            <img src="{{asset('/images/synopsis/camara.svg')}}" alt="add-photo"  class="add-photo"/>
                                            <span class="a-text-bold-warm text-plus  white-shadow  p-2 pr-3 pl-3  ">472px X 295px</span>
                                            <img src="{{asset('/images/synopsis/image-synopsis-horizontal.png')}}" class="w-100 h-100 cursor-pointer image-cover prev-image-program thumbnail-image-program" />
                                         </label>

                            </div>                
                        <!--div urls-->
                        <div class="mt-5 d-flex justify-content-center">
                            <img src="{{asset('/images/basic-icons/link.svg')}}" alt="logo-link" class="mr-3">
                            <input type="text" name="links" id="links-logo" class="urls a-text-bold-warm text-normal" placeholder=" Enlace o URL">
                           
                            </div>
                    </div>        
      </div>
     
</div>
     <!--div botones-->
     <div class="text-center mt-5 mb-5">
                  <button class="d-inline-block mr-3 text-uppercase btn-grilla a-btn-basic-small btn-grilla a-btn-basic-small text-uppercase a-text-MBlack text-plus">ACEPTAR</button>
            <button  class="d-inline-block text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal">CANCELAR</button>
        </div>

        </body>
@endsection