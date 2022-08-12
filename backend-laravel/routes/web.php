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

// Logout Route
Route::get('/logout', [AdminController::class, 'AdminLogout'])->name('admin.logout');

// ========= All Admin ROUTES =========
Route::prefix('admin')->group(function () {
    Route::get('/user/profile', [AdminController::class, 'UserProfile'])->name('user.profile');
    Route::post('/user/profile/store', [AdminController::class, 'UserProfileStore'])->name('user.profile.store');
});
