@extends('layaout.app')


@section('content')
<body class="scroll">
    <h1>{{ session('name') }}</h1>
    <main>
      <!--header-->
        @include('partials.headers.header')
      <!--Botones de navegación-->
      <nav class='navbar navbar-expand-sm mx-auto ' style="display:flex; justify-content:space-around; margin-top:-10px">
        <ul class='navbar-nav'>
          <li class='nav-item'>
            <button class='buttonall btn-nav btn-nav-select ml-xl-4 pr-4 pl-4  ' type='button' id="btn-nav" rel='Admin-home-BO' onClick="muestra1()">Administrar sitio</button>
          </li>
          <li class='nav-item'>
              <button class='admin-users-section  buttonall btn-nav ml-xl-4 pr-2 pl-2 ' type='button' id='btn-nav' rel='Adm-users-BO'>Administrar usuario BO</button>
            </li>
            <li class='nav-item'>
              <button class='admin-users-front-section  buttonall btn-nav ml-xl-4 pr-1 pl-1 ' type='button' id='btn-nav' rel='Admin-users-Front'>Administrar usuarios Front</button>
            </li>
          <?php
          /*if ($_SESSION['rol_id'] == 1) {
            echo "
              <li class='nav-item'>
                <button class='admin-users-section  buttonall btn-nav ml-xl-4 pr-2 pl-2 ' type='button' id='btn-nav' rel='Adm-users-BO'>Administrar usuario BO</button>
              </li>
              <li class='nav-item'>
                <button class='admin-users-front-section  buttonall btn-nav ml-xl-4 pr-1 pl-1 ' type='button' id='btn-nav' rel='Admin-users-Front'>Administrar usuarios Front</button>
              </li>
              ";
          } else {
            echo "
            <li class='nav-item'>
              <button class='disabled-option buttonall btn-nav ml-xl-4 pr-2 pl-2 ' type='button' id='btn-nav'>Administrar usuario BO</button>
            </li>
            <li class='nav-item'>
              <button class='disabled-option buttonall btn-nav ml-xl-4 pr-1 pl-1 ' type='button' id='btn-nav'>Administrar usuarios Front</button>
            </li>
            ";
          }*/
          ?>
        </ul>

      </nav>
      <hr class=' mt-2 ml-3 mr-3' />
      <br>
      <!--Div para el cambio-->
      <div id="cambio">

      </div>
    </main>

  </body>
@endsection
