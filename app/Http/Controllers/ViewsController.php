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
                case 'grilla-canal-claro-button':
                    return view('layaout.adm-CN.grillas.grilla-claro-canal');
                break;
                case 'grilla-concert-channel-button':
                    return view('layaout.adm-CN.grillas.grilla-concert-channel');
                break;
                case 'grilla-claro-cinema-button':
                    return view('layaout.adm-CN.grillas.grilla-claro-cinema');
                break;
                case 'grilla-home-button':
                    return view('layaout.adm-CN.grillas.grilla-home');
                break;
                case 'landing':
                    return view('layaout.adm-CN.submenus.submenu-claro-canal');
                break;
                default:
                    # code...
                    break;
            }
        }
    }
}
