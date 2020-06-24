@extends('layaout.app')

@section('content')
    <div id="email-newPassword">
        <div class="fondo-BO newpassword-container">
            <span class="d-flex align-items-center justify-content-between py-xl-2">
          <span class="ml-5"></span>
          <span class="text-light mr-5 pt-2">Administrador de contenido</span>
        </span>
        <hr class="bg-light ml-3 mr-3 mt-2" />

        <div class="login-container">
          <div class="login-form no-gutters mb-4">
            <div class="col-sm-12 no-gutters col-md-6 no-gutters col-lg-4 col-xl-3 shadow1 fondolog-reco mb-4">
              <img src="{{ asset('./images/registro/group-10.svg')}}" class="ubicacion5" />
              <img src="{{asset('./images/registro/group-12.svg')}}" class="ubicacion3-1" />

              <div class="row ma-no no-gutters">
                <div class="col-sm-12 col-md-12 col-lg-12 no-gutters">
                  <img src="{{asset('./images/registro/group-3.svg')}}" class="form-image-blue" />
                  <a href="login.php">
                    <img src="{{ asset('./images/registro/group-24.svg')}}" class="ubicacion1" /></a>
                </div>
              </div>
              <div class="col-12 col-md-12 col-lg-12 mx-auto">
                <h1 class="a-text-bold-cool pt-3 pb-4 text-center">¡Hola!</h1>
              </div>
              <div class="col-xl-10 mx-auto">
                <div class="col-xl-12">
                  <p class="a-text-regular-brownish card-text text-center pb-3">
                    Se ha enviado un <br>correo a tu email con <br>la nueva contraseña.
                  </p>
                  <p class="a-text-bold-brownish card-text mb-0 pb-3 text-center">
                    Atentamente,
                  </p>
                  <p class="a-text-bold-brownish card-text mb-0 pb-5 text-center">
                    El equipo de <br><span class="a-text-bold-cool">Claro Networks</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
@endsection
