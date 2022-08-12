<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AdminController;

Route::get('/', function () {
    return view('welcome');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified'
])->group(function () {
    Route::get('/dashboard', function () {
        return view('admin.index');
    })->name('dashboard');
});

Route::get('/logout', [AdminController::class, 'AdminLogout'])->name('admin.logout');
