@extends('layaout.app')
@section('scripts')
   
@endsection

@section('content')
@include('partials.headers.headerPrograGeneral')
        <div class="ml-5 float-left">
            <div><span class="a-text-black-light text-plus">Última edición : <span class="zona"> hey lo </span> </span></div>
            <span class="a-text-black-light text-plus">Por : </span>
            <label class="zona  separacion"> annet </label>
            <label class="zona ">Super usuario</label>
        </div>
        <div class="clearfix"></div>
       <h3 class="a-text-bold-black h3 ml-5 mt-4"> CANAL CLARO </h3>
       <h4 class="a-text-bold-black mt-4 text-plus ml-5 mb-4"> CARGAR IMAGENES</h4>
       <button class="a-btn-basic-large a-text-bold-brown-two a-btn-white text-normal ml-5 "> LOS CABALLEROS DEL ZODIACO</button>
       <h3 class="a-text-black-brown-two h3 d-flex justify-content-center mb-4"> HOME </h3>
       <div class='col-sm-12 no-gutters col-md-6  no-gutters col-lg-12  col-xl-12'>
    <img src='./images/registro/group-10.svg'class='image-pink-fondo' /></div>
    <div class='col-sm-4 col-md-4 col-lg-4 no-gutters'>
        <img src='./images/blue.svg'class='image-blue'/>
    </div>
       <hr class="d-flex align-content-center separationhr col-11">
       <div class="float-right mr-5 mt-2">
           <img src="" alt="signo de admiracion">
           <label for="" class="a-text-bold-tomato h3"> 0/6</label>
       </div>
       <h3 class="a-text-bold-brown-two ml-5 h3 mt-4"> Recuerda subir la imagen en jpg</h3>
       <div class="clearfix"></div>
       <div class="d-flex justify-content-around mt-5">   
           <div class="col-4"> 
           <button class="d-flex justify-content-center mb-4 a-btn-basic-medium a-text-bold-two a-btn-white text-plus mx-auto">THUMBNAIL</button>
           <label for=""class="bor imagethumb d-flex justify-content-center">
               <input type="file" name="imageThumb" id="imageThumb" class="d-none" >
               <label for="imageThumb" class="d-flex align-items-center justify-content-center">
                   <img src="images/basic-icons/plus.svg" alt="add-photo"  style="cursor:pointer;" class="mb-5">
                   <span class="a-text-bold-warm text-plus position-absolute mt-5">  472px  X  295px  </span>

               </label>
            </label>
            <span class="text-plus a-text-bold-brown-two">CaballerosDelZodiaco_Thumbnail_CanalClaro_20200702.jpg</span>
           </div>
           <div class="">
           <button class="d-flex justify-content-center mb-4 a-btn-basic-medium a-text-bold-two a-btn-white text-plus mx-auto">VERTICAL</button>
           <label for=""class="bor imagevertical d-flex justify-content-center">
               <input type="file" name="imageThumb" id="imageThumb" class="d-none" >
               <label for="imageThumb" class="d-flex align-items-center justify-content-center">
                   <img src="images/basic-icons/plus.svg" alt="add-photo"  style="cursor:pointer;" class="mb-5">
                   <span class="a-text-bold-warm text-plus position-absolute mt-5"> 472px  X  295px </span>

               </label>
            </label>
            <span class="text-plus a-text-bold-brown-two">CaballerosDelZodiaco_Vartical_CanalClaro_20200702.jpg</span>

           </div>

       </div>
       <h3 class="a-text-black-brown-two h3 d-flex justify-content-center mt-4 mb-5"> SINÓPSIS </h3>
       <hr class="d-flex align-content-center separationhr col-11 mb-5">
       <div class="ml-5 mb-5"> 
         
           <label for=""class="bor imagethumb d-flex justify-content-center">
               <input type="file" name="imageThumb" id="imageThumb" class="d-none" >
               <label for="imageThumb" class="d-flex align-items-center justify-content-center">
                   <img src="images/basic-icons/plus.svg" alt="add-photo"  style="cursor:pointer;" class="mb-5">
                   <span class="a-text-bold-warm text-plus position-absolute mt-5">  472px  X  295px  </span>

               </label>
            </label>
            <span class="text-plus a-text-bold-brown-two">CaballerosDelZodiaco_Thumbnail_CanalClaro_20200702.jpg</span>
           </div>
           <div class="d-flex justify-content-around col-12 mb-5">
           <div class="col-4"> 
         
         <label for=""class="bor imagesinop d-flex justify-content-center">
             <input type="file" name="imageThumb" id="imageThumb" class="d-none" >
             <label for="imageThumb" class="d-flex align-items-center justify-content-center">
                 <img src="images/basic-icons/plus.svg" alt="add-photo"  style="cursor:pointer;" class="mb-5">
                 <span class="a-text-bold-warm text-plus position-absolute mt-5">  472px  X  295px  </span>

             </label>
          </label>
          <span class="text-plus a-text-bold-brown-two ">CaballerosDelZodiaco_Thumbnail_</br>CanalClaro_20200702.jpg</span>
         </div>
         <div class="col-4"> 
         
         <label for=""class="bor imagesinop d-flex justify-content-center">
             <input type="file" name="imageThumb" id="imageThumb" class="d-none" >
             <label for="imageThumb" class="d-flex align-items-center justify-content-center">
                 <img src="images/basic-icons/plus.svg" alt="add-photo"  style="cursor:pointer;" class="mb-5">
                 <span class="a-text-bold-warm text-plus position-absolute mt-5">  472px  X  295px  </span>

             </label>
          </label>
          <span class="text-plus a-text-bold-brown-two ">CaballerosDelZodiaco_Thumbnail_</br>CanalClaro_20200702.jpg</span>
         </div>
         <div class="col-4"> 
         
         <label for=""class="bor imagesinop d-flex justify-content-center">
             <input type="file" name="imageThumb" id="imageThumb" class="d-none" >
             <label for="imageThumb" class="d-flex align-items-center justify-content-center">
                 <img src="images/basic-icons/plus.svg" alt="add-photo"  style="cursor:pointer;" class="mb-5">
                 <span class="a-text-bold-warm text-plus position-absolute mt-5">  472px  X  295px  </span>

             </label>
          </label>
          <span class="text-plus a-text-bold-brown-two ">CaballerosDelZodiaco_Thumbnail_</br>CanalClaro_20200702.jpg</span>
         </div>

           </div>




@endsection