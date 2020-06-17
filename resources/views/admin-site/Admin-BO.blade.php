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
              <button class='admin-users-section  buttonall btn-nav ml-xl-4 pr-2 pl-2 ' type='button' id='btn-nav' rel='Adm-users-BO'>Administrar usuario BO</button>
            </li>
            <li class='nav-item'>
              <button class='admin-users-front-section  buttonall btn-nav ml-xl-4 pr-1 pl-1 ' type='button' id='btn-nav' rel='Admin-users-Front'>Administrar usuarios Front</button>
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
