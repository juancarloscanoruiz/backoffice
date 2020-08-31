<!-- @extends('layaout.app') -->

@section('scripts')
    <script src="{{ asset('/js/lib/easyXDM.min.js')  }}"></script>
    <script>
        new easyXDM.Socket({
                remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/home-apro.php",
                container: "navbar-prev-home",
                onMessage: function(message, origin) {
                    this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                    this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                    this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
                }
            });
    </script>
@endsection
@section('content')
<body>
    @include('partials.headers.headerPrograGeneral')
    <div id="title">
        <div>
            <div class="d-flex float-left mb-5 mt-4  ml-5 mr-5 ">
                <button class="btn-apro  text-grilla mr-3 gril-claro" id="btn-grilla"><span>Aprobar cambios</span></button>
                <button class="btn-recha  text-grilla lan-claro" id="btn-landing" ><span>Rechazar cambios</span></button>
            </div>

            <div class="d-flex float-right mt-4 mr-5">
                <span class="text-normal a-text-medium-black mt-3"> PREVISUALIZAR</span>
                <img src="./images/mobile.svg" class="a-prev-image ml-3 mr-3" alt="mobile" id="prev-mobile">
                <img src="./images/tablet.svg" class="a-prev-image" alt="tablet" id="prev-tablet">
                <img src="./images/pc.svg" class="a-prev-image ml-3" alt="pc" id="prev-desktop">
            </div>
            <div class="clearfix"></div>

        </div>
        <div class=" ml-5"> <span cass="zona">Última edición : </span>
            <label class=" text-menu-selec separacion">septiembre 17 2019</label>
                <label class="text-menu-selec">18:33:25</label>
            </div>
            <div class="float-right mb-5 mr-5 ali">
            <span class="zona">Por : </span><label class="text-menu-selec separacion"><span> Antonio Pérez López</span> </label> <label class="text-menu-selec">Usuario aprobador</label>
            </div>
        </div>
        <div class="clearfix"></div>
    <div class="centro">
    <div class=" navbar-prev-home mb-5" id="navbar-prev-home">
        </div>
    </div>
 </body>
@endsection


