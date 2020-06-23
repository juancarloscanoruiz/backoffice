<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class AdminUserController extends Controller
{
    private $url = "http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/";

    //MÉTODOS PARA USUARIOS DEL BACKOFFICE DE CLARO NETWORKS

    public function getUsersBackoffice()
    {
        $client = new Client();
        $response = $client->get(
            $this->url . "admin_user/all/" . session('id_user')
        );
        return $response->getBody()->getContents();
    }


    public function createUserBackOffice(Request $request)
    {
        $idAdminUser = session('id_user');
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);
        $response = $client->post(
            $this->url . "admin_user",
            ['body' => json_encode(
                [
                    'name' => $request->input('name'),
                    'email' => $request->input('email'),
                    'rol_id' => $request->input('rol'),
                    "admin_user_id" => $idAdminUser
                ]
            )]
        );
        return $response->getBody()->getContents();
    }

    public function getUserBackoffice(Request $request)
    {
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);
        $response = $client->get(
            $this->url . "admin_user/" . $request->input('id')
        );

        return $response->getBody()->getContents();
    }

    public function updateDataUserBackoffice(Request $request)
    {
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);
        $response = $client->post(
            $this->url . "admin_user/AdminEdition",
            ['body' => json_encode(
                [
                    'id_root' => session('id_user'),
                    'id_admin_user' => $request->input('id_admin_user'),
                    'name' => $request->input('name'),
                    "email" => $request->input('email'),
                    "password" => "",
                    "password_confirm" => "",
                    "rol_id" => $request->input('rol_id')
                ]
            )]
        );

        return $response->getBody()->getContents();
        /*return json_encode(
            [
                'id_root' => session('id_user'),
                'id_admin_user' => $request->input('id_admin_user'),
                'name' => $request->input('name'),
                "email" => $request->input('email'),
                "password" => "",
                "password_confirm" => "",
                "rol_id" => $request->input('rol_id')
            ]
        );*/
    }

    public function deleteUserBackoffice(Request $request)
    {
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);
        $response = $client->post(
            $this->url . "admin_user/down",
            ['body' => json_encode(
                [
                    'id_root' => session('id_user'),
                    'id_admin_user' => $request->input('id_admin_user')
                ]
            )]
        );
        return $response->getBody()->getContents();
    }

    //MÉTODOS PARA USUARIOS DE CLARO NETWORKS
    public function getUsersFront()
    {
        $client = new Client();
        $response = $client->get(
            $this->url . "user"
        );
        return $response->getBody()->getContents();
    }

    public function getUserFront(Request $request)
    {
        $client = new Client();
        $response = $client->get(
            $this->url . "user/" . $request->input('id')
        );
        return $response->getBody()->getContents();
    }

    public function deleteUserFront(Request $request)
    {
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);
        $response = $client->post(
            $this->url . "admin_user/deleteUser",
            ['body' => json_encode(
                [
                    'id_admin' => session('id_user'),
                    'id_user' => $request->input('id_user')
                ]
            )]
        );
        return $response->getBody()->getContents();
    }

    public function updateDataUserFront(Request $request)
    {
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);
        $response = $client->post(
            $this->url . "admin_user/editUser",
            ['body' => json_encode(
                [
                    'id_admin' => session('id_user'),
                    'id_user' => $request->input('id_user'),
                    'name' => $request->input('name'),
                    'email' => $request->input('email'),
                    'gender' => $request->input('gender'),
                    'birthday' => $request->input('birthday'),
                    'country' => $request->input('country'),
                    'password' => $request->input('password'),
                    'password_confirm' => $request->input('password_confirm')
                ]
            )]
        );
        return $response->getBody()->getContents();
    }
}
