<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-Equiv="Cache-Control" Content="no-cache" />
    <meta http-Equiv="Pragma" Content="no-cache" />
    <meta http-Equiv="Expires" Content="0" />
    <link rel="icon" href="{{ asset('images/favicon/claro-fav.png') }}" type="image/png" />
    @include('partials.styles')
    @yield('styles')
    @include('partials.scripts')
    @yield('scripts')
    <title>@yield('title')</title>

</head>

@yield('content')


</html>
