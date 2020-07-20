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
                    $respuesta = $programacion[0];
                    $firstDate = $programacion[1];
                    $lastDate = $programacion[2];
                    return view('partials.adm-CN.grillas.grilla-claro-canal', compact("respuesta", "firstDate", "lastDate"));
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
    public function getDateCalendar($date)
    {
        $dateArray = explode("-", $date);

        switch ($dateArray[1]) {
            case '01':
                $nameMonth = "Ene";
                break;
            case '02':
                $nameMonth = "Feb";
                break;
            case '03':
                $nameMonth = "Mar";
                break;
            case '04':
                $nameMonth = "Abr";
                break;
            case '05':
                $nameMonth = "May";
                break;
            case '06':
                $nameMonth = "Jun";
                break;
            case '07':
                $nameMonth = "Jul";
                break;
            case '08':
                $nameMonth = "Ago";
                break;
            case '09':
                $nameMonth = "Sep";
                break;
            case '10':
                $nameMonth = "Oct";
                break;
            case '11':
                $nameMonth = "Nov";
                break;
            case '12':
                $nameMonth = "Dic";
                break;
            default:
                # code...
                break;
        }
        $finalDate = $dateArray[2] . " " . $nameMonth . " " . $dateArray[0];
        return $finalDate;
    }

    public function getGrilla($grilla)
    {
        //se obtine la version que se peuda editar
        //si el usuario tiene una version se muestra si no se muestra la version maestra del dia
        //en caso de que ninguna tenga datos se mostrara la maestra pero cn valores vacios, es decir al grilla aparecera en blanco
        //el dia en que inicia la version maestra es:
        //$hoy = '2020-07-02';

        $firstDay = date('Y-m-d');
        $client = new Client();
        $response = $client->get(
            $this->url . "program/getProgramingGrillFirst/" . $firstDay . "&" . $grilla . "&" . session('id_user')
        );

        $respuesta =  json_decode($response->getBody());

        $firstDate = $this->getDateCalendar($respuesta->data->first_day_calendar);
        $lastDate = $this->getDateCalendar($respuesta->data->last_day_calendar);
        if ($respuesta->code == 200) {
            return array($respuesta, $firstDate, $lastDate);
        } else {
            return null;
        };
    }
}
