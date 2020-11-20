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

    Route::get('#img-{id}', "ProgramacionGeneralController@index")->name('programacion_general_id');
    Route::post('getFirstGrilla', "ProgramacionGeneralController@getFirstGrilla")->name('programacion_general_id');
    // Route::get('#entrada-{id}', "ProgramacionGeneralController@index")->name('programacion_general_id');
});

//RUTAS PARA LANDING
Route::get("/canal-claro", "landingController@showCanalClaroLanding")->name('canal-claro');
Route::get("/concert-channel", "landingController@showConcertChannelLanding")->name('concert-channel');
Route::get("/claro-cinema", "landingController@showClaroCinemaLanding")->name('claro-cinema');
Route::get("/programacion", "landingController@showProgramacionLanding")->name('programacion');
Route::get("/home", "landingController@showHomeLanding")->name('home');
Route::get("/footer", "landingController@showFooterLanding")->name('footer');
Route::get("/sinopsis", "landingController@showSinopsisLanding")->name('sinopsis');

Route::group(['prefix' => 'landing', 'middleware' => 'session_user'], function () {
    Route::get('edit-program', "landingController@showEditProgramView");
    Route::get("/get-chapter-info/{id}", "landingController@getChapterInfo");
    Route::get("/programming-carrusel", "landingController@showProgrammingSlider");
    Route::post("/update-programming-carrusel", "landingController@updateProgramminSliderImages")->name("updateProgrammingSlider");
    Route::post("/updateLandingLogo", "landingController@updateLandingLogo");
    Route::post("/updateImageProgram", "landingController@updateImageProgramOfLanding");
    Route::post("/newProgram", "landingController@newProgram");
    Route::post("/newProgramByDate", "landingController@newProgramByDate");
    Route::post("/getSection/{section}", "landingController@getSection")->name('getSection');
    Route::post("/getProgramming", "landingController@getProgramming");
    Route::post("/concertChannel", "landingController@getContentConcertChannel");
    Route::post("/claroCinema", "landingController@getContentClaroCinema");
    Route::post("/editHeaderLanding", "landingController@editHeaderLanding");
    Route::post("/editElementLanding", "landingController@editElementLanding");
    // Route::get("/getProgrammingLanding", "landingController@getProgrammingLanding");
    Route::post("/getProgrammingLanding", "landingController@getProgrammingLanding");
    Route::post("/setImageSliderBanner", "landingController@setImageSliderBanner");
    Route::post("/getPromotionalsProgramsCarousel", "landingController@getPromotionalsProgramsCarousel");
    Route::post("/getProgrammingSynopsisTable", "landingController@getProgrammingSynopsisTable");
    Route::post("/getSynopsis", "landingController@getSynopsis");
    Route::post("/editBlockSynopsis", "landingController@editBlockSynopsis");
    Route::post("/updateImagesSynopsis", "landingController@updateImages");
    Route::post("/home", "landingController@getContentHome");
    Route::get('/header', "landingController@getModalsCanalClaro");
    Route::get("/getCarrusel1", "landingController@getCarrusel1");
    Route::post("/editHeaderLandingClaro", "landingController@editHeaderLandingClaro");
    Route::post("/editElementLandingClaro", "landingController@editElementLandingClaro");
    Route::post("/editPromoLandingClaro", "landingController@editPromoLandingClaro");
    Route::post("/editPromoLandingCinema", "landingController@editPromoLandingCinema");
    Route::post("/homeCarrusel", "landingController@homeCarrusel");
    Route::post("/editHeaderHome", "landingController@editHeaderHome");
    Route::post("/editHomeHeader", "landingController@editHomeHeader");
    Route::get("/getContentFooter", "landingController@getContentFooter");
    Route::post("/updateInfoFooter", "landingController@updateInfoFooter");
    Route::post("/getContentRights", "landingController@getContentRights");
    Route::post("/updateInfoTermsAndPrivacy", "landingController@updateInfoTermsAndPrivacy");
    Route::post("/captureImagesForChapter", "landingController@captureImagesForChapter");

    Route::post("/setImgCarruselHome", "landingController@setImgCarruselHome");
    Route::post("/getSynopsisTable", "landingController@getSynopsisTable");
    Route::post("/getCanalClaro", "landingController@getCanalClaro");
    Route::post("/setTitulo", "landingController@setTitulo");
    Route::post("/getProgramacionDate", "landingController@getProgramacionDate");
    // MODAL CLARO
});

//Rutas para la edición de un programa en el sitio


//RUTA PARA CARGAR CONTENIDO HTML
Route::post('/view', "ViewsController@index")->middleware('session_user');

Route::get('/upimage/{idimages}', "ProgramacionGeneralController@getImages")->name('upimage')->middleware('session_user');


//RUTA PARA EDITAR ATRIBUTOS DE PROGRAMAS EN GRILLA
Route::group(['prefix' => 'program', 'middleware' => 'session_user'], function () {
    Route::post('editAttribute', "ProgramacionGeneralController@editAttribute")->name("editAttribute");
    Route::post('logout', "AuthController@signOut")->name("logout");
    Route::post('exit', "AuthController@exit")->name('exit');
    Route::post('editSynopsis', "ProgramacionGeneralController@editSynopsis")->name('exit');
});

//RUTA PRUEBA DE MODALES
Route::get('/menus', function () {
    return view('admin-site.landings.edit-program.menu-programs');
});

Route::get('/menurris', function () {
    return view('partials.adm-CN.modals-home.modal-banner');
});
//RUTA PARA REGRESAR A LANDING DE PROGRAMACIÓN
Route::group(['prefix' => 'lan-claro', "middleware" => "session_user"], function () {
    Route::get('/', "ProgramacionGeneralController@onlyday")->name('landings');
});
Route::get('/imports',  function () {
    return view('components.imports');
});

Route::get('/zaid',  function () {
    return view('test');
});
