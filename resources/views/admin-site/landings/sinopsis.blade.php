@extends('layaout.app')

@section('content')

<body>
    @include('partials.headers.headerPrograGeneral')
    <div>
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
        <div class="sinopsis-cont centro mt-5">
            <div class="centro">
                <!--menu-->
                <div class="row no-gutters">
                    <ul class="tv-list-programming col-md-9 mt-5 mb-5">
                        <div class="col-md centro no-gap border-r d-flex justify-content-center btn-sis" key="canal-claro">
                            <li rel="claro-canal-programing" class="px-5 py-4 list-channel-item d-flex align-content-center list-channel-active">
                                <img class="claro-nav-image" src="./images/home/tv-1.svg" alt="" id="icon_canal_claro" style="width: 150px" />
                            </li>
                        </div>
                        <div class="col-md centro no-gap border-r d-flex justify-content-center btn-sis" key="concert-channel">
                            <li rel="concert-channel-programing" class="px-5 py-4 list-channel-item d-flex align-content-center">
                                <img class="nav-image" src="{{ asset('/images/concert-black-icon.svg') }}" alt="" id="icon_concert_channel" style="width: 200px;" />
                            </li>
                        </div>
                        <div class="col-md centro no-gap d-flex justify-content-center btn-sis" key="claro-cinema">
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
    <!-- MODAL -->
    <div class="modal modal-landing-sinopsis pr-0" id="modaledi" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" style="padding: 0px !important; overflow: auto; ">
        <div class="modal-dialog modal-dialog-centered m-0" role="document" style="max-width: 100%;">
            <div class="modal-content">
                <div class="modal-body">
                    <div id="title" class="mt-3">
                        <div class="float-left ml-5 mb-2 " style="margin-left: 7%;">
                            <div class="d-flex  ">
                                <button class="btn-apro  text-grilla mr-3 gril-claro" id="btn-grilla"><span>Aprobar
                                        cambios</span></button>
                                <button class="btn-recha  text-grilla lan-claro" id="btn-landing"><span>Rechazar cambios</span></button>
                            </div>
                        </div>
                        <div class="d-flex float-right mb-4 mr-5 ">
                            <form action="" name="formilariosexo" id="formulariosexo" class="formulario">
                                <div class=" d-flex prev text-small a-text-medium-brownish location mt-2">
                                    <input type="radio" name="sexo" id="edit-synopsis" checked />
                                    <label for="edit-synopsis" id="editar" class="mujer-estilo d-flex align-items-center pl-4 pt-3">
                                        <p class=" a-prev-title">EDITAR</p>
                                    </label>
                                    <input type="radio" name="sexo" id="prev-synopsis" />
                                    <label for="prev-synopsis" id="previsualiza" class="hombre-estilo pl-2 pt-3">
                                        <p class=" a-prev-title ">PREVISUALIZAR</p>
                                    </label>
                                </div>
                            </form>
                            <div id="device-size">
                                <div class="pt-2">
                                    <img src="./images/pc.svg" class="a-prev-image ml-3 op-ac" alt="pc" id="prev-desktop">
                                </div>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="ml-5 float-left ">
                            <div><span class="a-text-black-light text-plus">Última edición : <span class="zona date-edit" id="date-edit">septiembre 17
                                        2019</span> </span></div>
                            <span class="a-text-black-light text-plus">Editado por: <label class="zona"> {{ session('name') }} (<label class="zona ">{{ session('rol_name') }}</label>)</label></span>
                        </div>

                        <div class=" mr-5 d-flex float-right ">
                            <button class="btn-zona zona">Zona horaria <img src={{ asset('images/gmt-icon.svg') }} class="Icon_paises1" width="32px" /></div></button>

                    </div>
                    <div class="clearfix"></div>
                    <div class="mr-5 float-right">
                        <div class="d-flex  align-items-center justify-content-center mb-2 mt-2">
                            <span class="a-text-semibold-black text-normal mr-3">Establecer sinopsis como:</span>
                            <input type="radio" id="yes-program" name="program-chapter" value="1" class="program-chpater-synopsis" />
                            <label for="yes-program" id="siestado-landing" class="mb-0 si-estilo cursor-pointer switch-label width-program">
                                Programa</label>
                            <input type="radio" id="yes-chapter" name="program-chapter" value="0" class="program-chpater-synopsis" checked />
                            <label for="yes-chapter" id="noestado-landing" class="mb-0 no-estilo cursor-pointer switch-label width-program">
                                Capítulo</label>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class=" mx-auto">
                        <h3 class="a-text-black-brown-two h3 d-flex justify-content-center mt-3">SINOPSIS</h3>
                        <hr class="d-flex align-content-center separationhr col-11 mt-4 mb-5">

                    </div>
                    <div class="centro">
                        <div class="  mb-5" id="sinopsis-container">
                        </div>
                    </div>
                    <!--Buttons-->
                    <div class="text-center mb-3 d-flex justify-content-center">
                        <button class="edit-landing-modal-button d-flex mr-3 text-uppercase  m-0 btn-grilla a-btn-basic-small btn-grilla a-btn-basic-small text-uppercase a-text-MBlack text-plus" id="image-programming-button" landin="canal claro" data-dismiss="modal">aceptar</button>
                        <a href="#delete-info-encabezado" role="button" class="d-flex m-0 text-none text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal cancel" data-toggle="modal">CANCELAR</a>

                        <!-- <button
                                              class="d-inline-block text-uppercase btn-landing a-btn-basic-small text-plus a-text-bold-teal" data-toggle="modal"   >cancelar</button>-->
                    </div>
                </div>

            </div>
        </div>
    </div>
    @include('partials.adm-CN.modals-sinopsis.banner-sinopsis')
    @include('partials.adm-CN.modals-sinopsis.image-synopsis')
    @include('partials.adm-CN.modals-sinopsis.edit-synopsis')
    @include('partials.adm-CN.modals-sinopsis.images-synopsis')
    @include('partials.adm-CN.modals-sinopsis.info-synopsis')
</body>
@endsection