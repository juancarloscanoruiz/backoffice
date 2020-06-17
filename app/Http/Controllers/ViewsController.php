<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ViewsController extends Controller
{
    public function index(Request $request)
    {

        if ($request->ajax()) {
            switch ($request->input('view')) {
                case 'admin-users-bo':
                    return view('admin-users.Adm-users-BO');
                    break;
                case 'admin-users-front':
                    return view('admin-users.Admin-users-front');
                    break;
                default:
                    # code...
                    break;
            }
        }
    }
}
