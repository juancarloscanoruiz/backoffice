<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//LOGIN
Route::get('/', "AuthController@index")->name('index')->middleware('view_login');

Route::get('/admin', function () {
    return view('admin-site.Admin-BO');
})->name('admin')->middleware('session_user');


//VERIFY TOKEN
Route::get('/verify/{token}', "AuthController@verifyToken")->name('token');

//RECUPERAR CONTRASEÑA
Route::get('/reset', "AuthController@indexResetPassword")->name('reset');
Route::post('/reset', "AuthController@resetPassword");

//RUTAS PARA ADMINSTRAR USUARIOS DE CLARO NETWORKS Y BACKOFFICE
Route::group(['prefix' => 'user', 'middleware' => 'session_user'], function () {
    Route::post('backoffice', "AdminUserController@getUsersBackoffice");
    Route::post('backoffice/create', "AdminUserController@createUserBackOffice");
    Route::post('backoffice/get', "AdminUserController@getUserBackoffice");
    Route::post('backoffice/update', "AdminUserController@updateDataUserBackoffice");
    Route::post('backoffice/delete', "AdminUserController@deleteUserBackoffice");
    Route::post('front', "AdminUserController@getUsersFront");
    Route::post('front/get', "AdminUserController@getUserFront");
    Route::post('front/delete', "AdminUserController@deleteUserFront");
    Route::post('front/update', "AdminUserController@updateDataUserFront");
});

//RUTAS PARA AUTENTICACIÓN
Route::group(['prefix' => 'auth'], function () {
    Route::post('login', "AuthController@signIn")->name("login");
    Route::post('logout', "AuthController@signOut")->name("logout");
    Route::post('exit', "AuthController@exit")->name('exit');
});



//Ruta para programación general
Route::group(['prefix' => 'general-program', "middleware" => "session_user"], function () {
    Route::get('/', "ProgramacionGeneralController@index")->name('programacion_general');
    Route::post('captureExcel', "ProgramacionGeneralController@captureExcel")->name('programacion_general.captureExcel');
    Route::post('newRow', "ProgramacionGeneralController@newRow")->name('programacion_general.newRow');
    Route::post('updateImages', "ProgramacionGeneralController@updateImages")->name('updateImages');
    Route::post('filterDates', "ProgramacionGeneralController@filterDates")->name('filterDates');
    Route::post('deleteChapter', "ProgramacionGeneralController@deleteChapter")->name('deleteChapter');
    Route::post('changePrograming', "ProgramacionGeneralController@changePrograming")->name('changePrograming');
    Route::post('addPrograming', "ProgramacionGeneralController@addPrograming")->name('addPrograming');
});



//RUTAS PARA LANDING
Route::get("/canal-claro", "landingController@showCanalClaroLanding")->name('canal-claro');
Route::get("/concert-channel", "landingController@showConcertChannelLanding")->name('concert-channel');
Route::get("/claro-cinema", "landingController@showClaroCinemaLanding")->name('claro-cinema');
Route::get("/programacion", "landingController@showProgramacionLanding")->name('programacion');
Route::get("/home", "landingController@showHomeLanding")->name('home');

Route::group(['prefix' => 'landing'], function () {
    Route::get('edit-program', "landingController@showEditProgramView");
});

//Rutas para la edición de un programa en el sitio
Route::get("/programming-carrusel", "programController@index");

//RUTA PARA CARGAR CONTENIDO HTML
Route::post('/view', "ViewsController@index")->middleware('session_user');

Route::get('/upimage/{idimages}', "ProgramacionGeneralController@getImages")->name('upimage');


//RUTA PARA EDITAR ATRIBUTOS DE PROGRAMAS EN GRILLA
Route::group(['prefix' => 'program'], function () {
    Route::post('editAttribute', "ProgramacionGeneralController@editAttribute")->name("editAttribute");
    Route::post('logout', "AuthController@signOut")->name("logout");
    Route::post('exit', "AuthController@exit")->name('exit');
});

//RUTA PRUEBA DE MODALES
Route::get('/modales', function () {
    return view('partials.adm-CN.grillas.modales-grilla.delete-row');
})->name('delete-row');
