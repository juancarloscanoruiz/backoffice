@extends('layaout.app')

@section('content')

<body>
    <main>
        <div class="container-fluid subMenuLandingCase" landing="Canal Claro">
            <div class="row">
                <div class="col-8 mx-auto">
                    <h3 class="monthSliderCalendar d-none a-text-semibold-brownish-grey-three text-uppercase"></h3>
                    <div class="calendar-sinopsis-slider"></div>
                </div>

                <div class="col-11 mx-auto p-0 content-table show-sinopsis-table"></div>

                <div class="col-12 text-center">
                    <div id="iframe-canal-claro"></div>
                </div>
            </div>
        </div>
    </main>
</body>
@include('components.modals.banner')
@include('components.modals.logos')
@include('components.modals.header')
@include('components.modals.programacion')
@include('components.modals.titulo')

@include('components.modals.generic.advertencia')
@include('components.modals.generic.advertencia-url')
@include('components.modals.generic.url')
@endsection