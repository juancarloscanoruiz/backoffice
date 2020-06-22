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

    public function changeNameRol($id)
    {
        $rol = "";
        switch ($id) {
            case 1:
                $rol = "Súper Usuario";
                return $rol;
                break;
            case 2:
                $rol = "Aprobador";
                return $rol;
                break;

            case 3:
                $rol = "Editor";
                return $rol;
                break;

            case 4:
                $rol = "Visualizador";
                return $rol;
                break;

            default:
                # code...
                break;
        }
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
                    'email' => $request->input('login-email'),
                    'password' => sha1($request->input('login-password'))
                ]
            )]
        );
        $responseArray = json_decode($response->getBody()->getContents(), true);
        if ($responseArray["code"] == 200) {

            session(['status' => 1, "name" => $responseArray["data"]["name"], "id_user" => $responseArray["data"]["id"], "id_rol" => $responseArray["data"]["rol"]["id"], "rol_name" => $this->changeNameRol($responseArray["data"]["rol"]["id"])]);
            return redirect()->route('admin');
        }
    }

    public function signOut(Request $request)
    {
        session()->flush();
        return redirect('/');
    }
    public function exit(Request $request)
    {
        session()->flush();
        return redirect('/admin');
    }
}
