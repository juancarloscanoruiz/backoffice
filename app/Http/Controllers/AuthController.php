<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class AuthController extends Controller
{

    private $url = "http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/";

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
            $this->url . "admin_user/login",
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
        } else {
            return back()->with("error", "Tu correo o contraseña no coinciden. Por favor, verifica de nuevo");
        }
    }

    public function signOut()
    {
        session()->flush();
        return redirect('/');
    }

    public function exit()
    {
        // session()->flush();
        return redirect('/admin');
    }


    public function indexResetPassword()
    {
        return view('auth.resetPassword');
    }

    public function resetPassword(Request $request)
    {
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);
        $response = $client->post(
            $this->url . "admin_user/reset_send",
            ['body' => json_encode(
                [
                    'email' => $request->input('email'),
                ]
            )]
        );

        return $response->getBody()->getContents();
    }

    //VERIFY PASSWORD
    public function verifyToken($token)
    {
        $client = new Client();
        $response = $client->get(
            $this->url . "admin_user/reset_verify/" . $token
        );
        $responseArray = json_decode($response->getBody()->getContents(), true);
        if ($responseArray["code"] == 200) {
            return view('auth.verifyToken');
        } else {
            return $responseArray;
        }
    }
}
