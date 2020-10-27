<div class='col-sm-12 no-gutters col-md-6  no-gutters col-lg-12  col-xl-12'>
    <img src='./images/registro/group-10.svg' class='image-pink-fondo' /></div>
<div class='col-sm-4 col-md-4 col-lg-4 no-gutters'>
    <img src='./images/blue.svg' class='image-blue' />
    <img src='./images/registro/group-12.svg' class='image-email' />
</div>
<div class='bg-color'>
    <span class='d-flex align-items-center justify-content-between  py-xl-2'>
        <a href="{{ route('admin')}}"><span class='ml-5'><img src='./images/home/claro-logo.svg'> </span></a>

        <span class='text-light1 mr-5'>Administrador de contenido</span>
    </span>
</div>
<div id='user_information' class='o-user-info-container d-flex align-items-center justify-content-between pt-xl-1 '>
    <div class='ml-5'>
        <span class='a-text-black-bold a-name-user'>{{ session('name') }}</span><br>
        <span class='text-light1 '>{{ session('rol_name') }}</span>
    </div>
    <div class='mr-5'>
        <form method="POST" action="{{ route('logout') }}">
            {{ csrf_field() }}
            <button type="submit" class='btn-cerrar textcerrar load-photo' id='signout-button'>CERRAR SESIÓN</button>
        </form>
    </div>
</div>