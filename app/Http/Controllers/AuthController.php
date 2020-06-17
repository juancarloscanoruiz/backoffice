<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class AuthController extends Controller
{
    public function index()
    {
        return view('login');
    }

    public function signIn(Request $request)
    {
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);
        $response = $client->post(
            "http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/admin_user/login",
            ['body' => json_encode(
                [
                    'email' => $request->input('email'),
                    'password' => $request->input('password')
                ]
            )]
        );
        $responseArray = json_decode($response->getBody()->getContents(), true);
        if ($responseArray["code"] == 200) {
            session(['status' => 1, "name" => $responseArray["data"]["name"]]);
        }
    }
}
