@extends('layaout.app')
@section('content')

<body>
    <main>
        <div id="app">
            <div class="container-fluid px-4">
                <div class="row">
                    <div class="col-12">
                        <!-- LOGO -->
                        <div class="bg-color">
                            <div class="navbar">
                                <a href="{{route('admin')}}"><img src="./images/home/claro-logo.svg" alt="Logo Claro Networks"></a>
                                <span class="text-light1">Administrador de contenido</span>
                            </div>
                        </div>
                        <!-- ROLL DE USUARIO S-->
                        <div class="navbar mt-2">
                            <div>
                                <span class="a-text-black-bold d-block">{{ session('name') }}</span>
                                <span class="text-light1">{{ session('rol_name') }}</span>
                            </div>
                            <!-- BOTON REGRESAR -->
                            <div>
                                <a href="{{route('admin')}}">
                                    <button class="btn-return-sitio a-btn-basic-small text-return mt-2">REGRESAR</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <sinopsis-component></sinopsis-component>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>
@endsection