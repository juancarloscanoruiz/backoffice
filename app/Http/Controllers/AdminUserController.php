<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class AdminUserController extends Controller
{
    //MÉTODOS PARA USUARIOS DEL BACKOFFICE DE CLARO NETWORKS
    public function getUsersBackoffice(Request $request)
    {
        $client = new Client();
        $response = $client->get(
            "http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/admin_user/all/" . session('id_user')
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
            "http://api.claronetworks.openofficedospuntocero.info/API_Claro_Networks/public/admin_user",
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
            "http://api.claronetworks.openofficedospuntocero.info/API_Claro_Networks/public/admin_user/" . $request->input('id')
        );

        return $response->getBody()->getContents();
    }

    public function updateDataUserBackoffice(Request $request)
    {
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);
        $response = $client->post(
            "http://api.claronetworks.openofficedospuntocero.info/API_Claro_Networks/public/admin_user/editAdmin",
            ['body' => json_encode(
                [
                    'id_root' => session('id_user'),
                    'id_admin_user' => $request->input('id_admmin_user'),
                    'name' => $request->input('name'),
                    "email" => $request->input('email'),
                    "password" => $request->input('password'),
                    "password_confirm" => $request->input('repassword'),
                    "rol_id" => $request->input('rol_id')
                ]
            )]
        );

        return $response->getBody()->getContents();
    }

    public function deleteUserBackoffice(Request $request)
    {
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);
        $response = $client->post(
            "http://api.claronetworks.openofficedospuntocero.info/API_Claro_Networks/public/admin_user/down",
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
            "http://api.claronetworks.openofficedospuntocero.info/API_Claro_Networks/public/user"
        );
        return $response->getBody()->getContents();
    }

    public function getUserFront(Request $request)
    {
        $client = new Client();
        $response = $client->get(
            "http://api.claronetworks.openofficedospuntocero.info/API_Claro_Networks/public/user/" . $request->input('id')
        );
        return $response->getBody()->getContents();
    }

    public function deleteUserFront(Request $request)
    {
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);
        $response = $client->post(
            "http://api.claronetworks.openofficedospuntocero.info/API_Claro_Networks/public/admin_user/deleteUser",
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
            "http://api.claronetworks.openofficedospuntocero.info/API_Claro_Networks/public/admin_user/editUser",
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
