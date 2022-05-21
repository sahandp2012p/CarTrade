<?php

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('home');
});

Route::get('/about', function () {
    return view('about');
});

Route::get('/whychooseus', function () {
    return view('whychooseus');
});

Route::post('/signup', function () {
    User::create([
        "name" => $_REQUEST['name'],
        "email" => $_REQUEST['email'],
        "password" => Hash::make($_REQUEST["password"])
    ]);

    Auth::attempt([
        "email" => $_REQUEST['email'],
        "password" => $_REQUEST['password']
    ]);

    return "ok";
});

Route::get('/signup', function () {
    return view('signup');
});

Route::get('/login', function () {
    return view('login');
});