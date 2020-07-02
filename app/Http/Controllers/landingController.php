<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class landingController extends Controller
{
    public function showCanalClaroLanding()
    {
        return view('admin-site.landings.apro-claro');
    }

    public function showConcertChannelLanding()
    {
        return view('admin-site.landings.apro-concert');
    }

    public function showClaroCinemaLanding()
    {
        return view('admin-site.landings.claro-cinema');
    }

    public function showProgramacionLanding()
    {
        return view('admin-site.landings.programacion');
    }

    public function showHomeLanding()
    {
        return view('admin-site.landings.home');
    }
}
