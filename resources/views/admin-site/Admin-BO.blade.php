@extends('layaout.app')

@section('content')
<body class="scroll">
    <main>
      <!--header-->
        @include('partials.headers.header')
      <!--Botones de navegación-->
      <nav class='navbar navbar-expand-sm mx-auto ' style="display:flex; justify-content:space-around; margin-top:-10px">
        <ul class='navbar-nav'>
          <li class='nav-item'>
            <button class='admin-site-button buttonall btn-nav btn-nav-select ml-xl-4 pr-4 pl-4  ' type='button' id="btn-nav" rel='Admin-home-BO'>Administrar sitio</button>
          </li>
          <li class='nav-item'>
              <button class='buttonall btn-nav ml-xl-4 pr-2 pl-2 ' type='button' id='admin-users-section' rel='Adm-users-BO'>Administrar usuario BO</button>
            </li>
            <li class='nav-item'>
              <button class='buttonall btn-nav ml-xl-4 pr-1 pl-1 ' type='button' id='admin-users-front-section' rel='Admin-users-Front'>Administrar usuarios Front</button>
            </li>
            <li class='nav-item'>
              <button class='buttonall btn-nav ml-xl-4 pr-1 pl-1' type='button' id='modal' onclick="getModal()">Modal</button>
            </li>
        </ul>

      </nav>
      <hr class=' mt-2 ml-3 mr-3' />
      <br>
      
      <!--Div para el cambio-->
      <div id="cambio">
        @include('admin-site.admin-home');
      </div>
    </main>

  </body>
@endsection

<div id="modal" class="modal fade">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-body modLogin">
                <img src="img/logo.png" alt="Logo">
                <p id="txtP"></p>
                <p id="txtS"></p>
                <nav class="mt-4">
                    <a id="registro" class="btn btn-outline-dark float-left" href="registro.jsp">Registrarme</a>
                    <a class="btn btn-dark float-right" href="#" data-dismiss="modal">Cerrar</a>
                </nav>
            </div>
        </div>
    </div>
</div>
