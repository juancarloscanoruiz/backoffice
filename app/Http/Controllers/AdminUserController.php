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
        var_dump($response->getBody()->getContents());
    }

    public function getUsersFront(Request $request)
    {
        $client = new Client();
        $response = $client->get(
            "http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/admin_user/all/" . session('id_user')
        );
        echo (session('id_user'));
    }
}
