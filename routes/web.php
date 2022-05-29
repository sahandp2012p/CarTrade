<?php

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
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

    $mail_data = [
        'recipient' => $_REQUEST['email'],
        'fromEmail' => 'sahndpourjavad@gmail.com',
        'fromName' => 'CarTrade',
        'subject' => 'Thank you',
        'body' => 'Thank you for signing up to CarTrade'
    ];

    Mail::send('email-template', $mail_data, function($message) use ($mail_data) {
        $message->to($mail_data["recipient"])
                ->from($mail_data['fromEmail'], $mail_data['fromName'])
                ->subject($mail_data['subject']);
    });

    return "ok";
});

Route::get('/signup', function () {
    return view('signup');
});

Route::post('/login', function () {
    Auth::logout();
    
    Auth::attempt([
        "email" => $_REQUEST['email'],
        "password" => $_REQUEST['password']
    ]);

    if (Auth::user()) {
        return "Ok";
    }

    return "Invalid username or password";
});

Route::get('/login', function () {
    return view('login');
});

Route::get('/password/reset', function () {
    return view('password.reset', ["sended" => ""]);
});

Route::put('/password/reset', function () {
    $user = User::where([
        "email" => $_REQUEST['email']
    ])->first();

    if(!$user) {
        return "User not found";
    };

    $mail_data = [
        'recipient' => $_REQUEST['email'],
        'fromEmail' => 'sahndpourjavad@gmail.com',
        'fromName' => 'CarTrade',
        'subject' => 'Password reset',
        'body' => $user,
        'link' => url('/')
    ];

    Mail::send('password.email', $mail_data, function($message) use ($mail_data) {
        $message->to($mail_data["recipient"])
                ->from($mail_data['fromEmail'], $mail_data['fromName'])
                ->subject($mail_data['subject']);
    });

    return view("password.reset", ["sended" => true]);
});

Route::get('/password/reset/{email}', function ($email) {
    return view('password.form', ["email" => $email]);
});

Route::put('/password/reset/{email}', function ($email) {
    if($_REQUEST["password"] == $_REQUEST["password_confirm"]) {
        $user = User::where([
            "email" => $email
        ])->first();

        $user->password = Hash::make($_REQUEST["password"]);
        
        $user->save();

        Auth::attempt([
            "email" => $email,
            "password" => $user->password
        ]);

        return redirect('/');
    } else {
        return redirect('/password/reset/' . $email);
    };
});

Route::get('/isloggedin', function () {
    if (Auth::user()) {
        return "Ok";
    }

    return "Not logged in";
});