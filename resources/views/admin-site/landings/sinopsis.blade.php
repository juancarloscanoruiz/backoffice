@extends('layaout.app')

@section('content')

<body>
    @include('partials.headers.headerPrograGeneral')
    <div id="app">
        <!-- APROVARCAMBIOS -->
        <div id="title" class="mt-3">
            <div class="float-left ml-5 mb-2 " style="margin-left: 7%;">
                <div class="d-flex">
                    <button class="btn-apro   a-text-MBlack text-normal mr-3 gril-claro" id="btn-grilla"><span>Aprobar cambios</span></button>
                    <button class="btn-recha   a-text-MBlack text-normal lan-claro" id="btn-landing"><span>Rechazar cambios</span></button>
                </div>
            </div>
        </div>
        <!-- ZONA HORARIA -->
        <div class="d-flex float-right mb-4 mr-5 ">
            <button class="btn-zona zona">Zona horaria <img src="./images/gmt-icon.svg" class="Icon_paises1" style="width:32px" /></button>
        </div>
        <!-- ULTIMA EDICION -->
        <div class="clearfix"></div>
        <div class="ml-5 float-left mb-4">
            <div><span class="a-text-black-light text-plus">Última edición : <span class="zona" id="date-edit"> </span> </span></div>
            <span class="a-text-black-light text-plus">Editado por: <label class="zona"> {{ session('name') }} (<label class="zona ">{{ session('rol_name') }}</label>)</label></span>
        </div>

        <!-- <div id="estSis"></div> -->

        <div class="clearfix"></div>
        <h2 class="h2 text-center a-text-black-brown-two pt-3">SINOPSIS</h2>
        <hr class="d-flex align-content-center separationhr col-11 mt-3 mb-0">
        <div class="sinopsis-cont  mt-5">
            <div class="centro">
                <!--menu-->
                <div class="row no-gutters">
                    <ul class="tv-list-programming col-md-9 mt-5 mb-5">
                        <div class="col-md centro no-gap border-r d-flex justify-content-center btn-sis" mvh="canal-claro">
                            <li rel="claro-canal-programing" class="px-5 py-4 list-channel-item d-flex align-content-center list-channel-active">
                                <img class="claro-nav-image" src="./images/home/tv-1.svg" alt="" id="icon_canal_claro" style="width: 150px" />
                            </li>
                        </div>
                        <div class="col-md centro no-gap border-r d-flex justify-content-center btn-sis" mvh="concert-channel">
                            <li rel="concert-channel-programing" class="px-5 py-4 list-channel-item d-flex align-content-center">
                                <img class="nav-image" src="{{ asset('/images/concert-black-icon.svg') }}" alt="" id="icon_concert_channel" style="width: 200px;" />
                            </li>
                        </div>
                        <div class="col-md centro no-gap d-flex justify-content-center btn-sis" mvh="claro-cinema">
                            <li rel="claro-cinema-programing" class="px-5 py-4 list-channel-item d-flex align-content-center">
                                <img class="nav-image" src="{{ asset('/images/home/cinema-home-img.svg') }}" alt="" id="icon_claro_cinema" style="width: 100px;" />
                            </li>
                        </div>
                    </ul>
                </div>
            </div>

            <div class="navbar-progra-content navbar-sinopsis" id="navbar-prev-sinopsis">
                <section class="col-8 mx-auto">
                    <h3 class="h3 a-text-semibold-brownish-grey-three text-uppercase mb-5 mt-6" id="slider-calendar-current-date">Octubre 2020</h3>
                    <calendar-slider-component></calendar-slider-component>
                    <div class="mb-5 calendar-sinopsis-slider">

                    </div>
                </section>
                <div id="prev-sinopsis-landing" class="sinopsis-master">
                    <div class="mx-auto shadow mt-5 col-10 p-0 mb-5 content-table" id="synopsis-table-canal-claro"></div>
                    <div class="mx-auto shadow mt-5 col-10 p-0 mb-5 content-table" id="synopsis-table-concert-channel"></div>
                    <div class="mx-auto shadow mt-5 col-10 p-0 mb-5 content-table" id="synopsis-table-claro-cinema"></div>
                </div>
            </div>
        </div>
    </div>
    @include('partials.adm-CN.sinopsis')
    @endsection
</body>
@endsection