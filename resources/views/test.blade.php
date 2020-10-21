<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="{{ asset('/js/lib/bootstrap.min.js') }}" defer></script>
    <link href="{{ asset('css/bootstrap-4.4.1/bootstrap.min.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

    <script src="{{ asset('/js/lib/easyXDM.min.js')  }}"></script>
    <script src="{{ asset('/js/main.js')}}?t=<?php echo time(); ?>"></script>
    <script src="{{ asset('/js/admin.js')}}"></script>
    <script src="{{ asset('/js/app.js')}}" defer></script>

    <link rel="preload" as="font" crossorigin="crossorigin" type="font/woff2" href="{{ asset('/fonts/Montserrat-Black/Montserrat-Black.woff2') }}">
    <link rel="preload" as="font" crossorigin="crossorigin" type="font/woff2" href="{{ asset('/fonts/Montserrat-Bold/Montserrat-Bold.woff2') }}">
    <link rel="preload" as="font" crossorigin="crossorigin" type="font/woff2" href="{{ asset('/fonts/Montserrat-Light/Montserrat-Light.woff2') }}">
    <link rel="preload" as="font" crossorigin="crossorigin" type="font/woff2" href="{{ asset('/fonts/Montserrat-SemiBold/Montserrat-SemiBold.woff2') }}">
    <link rel="preload" as="font" crossorigin="crossorigin" type="font/woff2" href="{{ asset('/fonts/Montserrat-Regular/Montserrat-Regular.woff2') }}">
    <link href="{{ asset('css/app.css') }}?t=<?php echo time(); ?>" rel="stylesheet">

    <link href="{{ asset('bootstrap-select/dist/css/bootstrap-select.min.css') }}" rel="stylesheet" />
    <script src="{{ asset('bootstrap-select/dist/js/bootstrap-select.min.js') }}"></script>

    <title>Pruebas</title>

</head>

<body class="bg-dark contenedor container-fluid">
    <div id="app">
        <calendario-component></calendario-component>

    </div>

</body>

</html>

<style>
    html,
    body {
        height: 100%;
    }

    .contenedor {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>