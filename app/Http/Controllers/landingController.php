<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class landingController extends Controller
{
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
        $counter = 1;
        $images=[];
        $flag=true;
       while (true) {
           try {
            $new_file = $_FILES['file'.$counter]['name'];
            array_push($images,$new_file);
            $counter++;
           } catch (\Throwable $th) {
            break;
           }
           
            
       }
       
        echo(json_encode($images));
        /*         $images = $request->file("image_programming");

        foreach ($request->file("image_programming") as $image) {
            $path = $this->storeImages("imageSlider", $image, "public/programacion/banner");
            echo ($path);
        } */
    }
}
