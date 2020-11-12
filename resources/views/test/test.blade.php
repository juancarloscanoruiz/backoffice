@extends('layaout.app')

@section('content')

<body class="bg-dark">
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 text-center">
                    <div id="iframe-programacion"></div>
                </div>
            </div>
        </div>
        @include('components.modals.banner')
        @include('components.modals.advertencia')
    </main>
</body>

@endsection