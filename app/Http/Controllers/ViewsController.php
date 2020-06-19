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
                case 'admin-site-home':
                    return view('admin-site.admin-home');
                    break;
                case 'view-userbackoffice':
                    return view('admin-users.users-backoffice.user');
                    break;
                case 'create-userbackoffice-form':
                    return view('admin-users.users-backoffice.formCreateUser');
                    break;
                case 'edit-userbackoffice':
                    return view('admin-users.users-backoffice.formEditUser');
                    break;
                case 'view-userfront':
                    return view('admin-users.users-claronetworks.user');
                    break;
                case 'edit-userfront':
                    return view('admin-users.users-claronetworks.formEditUser');
                    break;
                default:
                    # code...
                    break;
            }
        }
    }
}
