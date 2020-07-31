<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class programController extends Controller
{
    public function index()
    {
        return view('admin-site.landings.programming-carrusel');
    }
}
