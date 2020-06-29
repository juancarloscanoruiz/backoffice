<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class ViewsController extends Controller
{
    private $url = "http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/";

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
                    $programacion = $this->getGrilla('Claro Canal');
                    return view('partials.adm-CN.grillas.grilla-claro-canal')->with('respuesta', $programacion);
                break;
                case 'grilla-concert-channel-button':
                    $programacion = $this->getGrilla('Concert Channel');
                    return view('partials.adm-CN.grillas.grilla-concert-channel')->with('respuesta', $programacion);
                break;
                case 'grilla-claro-cinema-button':
                    $programacion = $this->getGrilla('Claro Cinema');
                    return view('partials.adm-CN.grillas.grilla-claro-cinema')->with('respuesta', $programacion);
                break;
                case 'grilla-home-button':
                    return view('partials.adm-CN.grillas.grilla-home');
                break;
                case 'lan-claro':
                    return view('partials.adm-CN.submenus.submenu-claro-canal');
                 
                break;
                case 'lan-cinema':
                    return view('partials.adm-CN.submenus.submenu-claro-cinema');
                 
                break;
                case 'lan-concert':
                    return view('partials.adm-CN.submenus.submenu-concert-channel');
                 
                break;
                case 'lan-home':
                    return view('partials.adm-CN.submenus.submenu-home');
                 
                break;
               
                default:
                    # code...
                    break;
            }
        }
    }
    public function getGrilla($grilla){
        //se obtine la version que se peuda editar
        //si el usuario tiene una version se muestra si no se muestra la version maestra del dia
        //en caso de que ninguna tenga datos se mostrara la maestra pero cn valores vacios, es decir al grilla aparecera en blanco
        //el dia en que inicia la version maestra es:
        //$hoy = '2020-2-8';
        $hoy = date('Y-n-j');
       $client = new Client();
        $response = $client->get(
            $this->url . "program/VersionEditable/".$hoy."&".$grilla."&" . session('id_user')
        );
        $respuesta =  json_decode($response->getBody()); 
      
        if($respuesta->code == 200){
            return $respuesta;

        }else{
            return null;
        };
    } 
}
