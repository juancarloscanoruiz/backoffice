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


//VERIFY PASSWORD
Route::get('/verify/{token}', "AuthController@verifyToken");

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

//RUTA PARA CARGAR CONTENIDO HTML


//RUTA PARA MENU
Route::get('/general-program', "ProgramacionGeneralController@index")->name('programacion_general');


Route::post('/view', "ViewsController@index")->middleware('session_user');

Route::get('/histo', function () {
    return view('partials.adm-CN.historial');
})->name('histo');