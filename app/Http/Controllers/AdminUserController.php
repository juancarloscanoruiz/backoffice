<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class AdminUserController extends Controller
{
    public function getUsersBackoffice(Request $request)
    {
        $client = new Client();
        $response = $client->get(
            "http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/admin_user/all/" . session('id_user')
        );
        return $response->getBody()->getContents();
    }

    public function getUsersFront()
    {
        $client = new Client();
        $response = $client->get(
            "http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/user"
        );
        return $response->getBody()->getContents();
    }
}
