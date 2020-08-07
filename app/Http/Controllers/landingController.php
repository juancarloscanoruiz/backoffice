<?php

namespace App\Http\Controllers;
use GuzzleHttp\Client;

use Illuminate\Http\Request;

class landingController extends Controller
{

    private $url = "http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/";

    public function showCanalClaroLanding()
    {
        return view('admin-site.landings.apro-claro');
    }

    public function showConcertChannelLanding()
    {
        return view('admin-site.landings.apro-concert');
    }

    public function showClaroCinemaLanding()
    {
        return view('admin-site.landings.claro-cinema');
    }

    public function showProgramacionLanding()
    {
        return view('admin-site.landings.programacion');
    }

    public function showHomeLanding()
    {
        return view('admin-site.landings.home');
    }

    public function showEditProgramView()
    {
        return view('.admin-site.landings.edit-program.edit-program');
    }

    public function showProgrammingSlider()
    {
        return view('admin-site.landings.programming-carrusel');
    }

    public function storeImages($name, $file, $url)
    {
        $extension = $file->extension();
        $path = url('/storage') . "/" . substr($file->storeAs($url, $name . "." . $extension), 7);
        return $path;
    }

    public function updateProgramminSliderImages(Request $request)
    {
        //Imágene que subió el usuario
        $files = $request->file();
        //POsiciones de las imágenes
        $positions = explode(",", $request->input("positions"));
        $dates = ["00-00-0000", "00-00-0000"];
        if($request->input("dates")){
            $dates = explode(",", $request->input("date"));
        }
        $counter = 0;
        $images = [];
        foreach ($files as $file) {
            $newFile = $this->storeImages("imageProgrammingSlider" . $positions[$counter], $file, "public/programacion/banner");
            $counter++;
            array_push($images, $newFile);
        }
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);

        $response = $client->post(
            $this->url . "programation/setImageSlider",
            ['body' => json_encode(
                [
                    'usuario_id' => session('id_user'),
                    'value' => $images,
                    'positions' => $positions,
                    'schedule_date' => $dates[0],
                    'expiration_date' => $dates[1]
                ]
            )]
        );
        $respuesta =  $response->getBody()->getContents();
        var_dump($respuesta);
    }
    public function getChapterInfo($id){
        $client = new Client();
        $response = $client->get(
            $this->url . "programation/getChapter/". $id
        );

        $respuesta =  json_decode($response->getBody());
        echo(json_encode($respuesta->data));
    }
}
