<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Admin\CategoryController;

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
Route::get('admin/logout', [AdminController::class, 'AdminLogout'])->name('admin.logout');
Route::get('/password/logout', [AdminController::class, 'ChangePasswordLogout'])->name('password.logout');

// ========= All Admin ROUTES =========
Route::prefix('admin')->group(function () {
    Route::get('/user/profile', [AdminController::class, 'UserProfile'])->name('user.profile');
    Route::post('/user/profile/store', [AdminController::class, 'UserProfileStore'])->name('user.profile.store');
    Route::get('/change/password', [AdminController::class, 'ChangePassword'])->name('change.password');
    Route::post('/change/password/update', [AdminController::class, 'ChangePasswordUpdate'])->name('change.password.update');
});

// ========= Category Route =========
Route::prefix('category')->group(function () {
    Route::get('/all', [CategoryController::class, 'AllCategory'])->name('all.category');
    Route::get('/add', [CategoryController::class, 'AddCategory'])->name('add.category');
    Route::post('/store', [CategoryController::class, 'StoreCategory'])->name('store.category');
    Route::get('/edit/{id}', [CategoryController::class, 'EditCategory'])->name('edit.category');
    Route::post('/update', [CategoryController::class, 'UpdateCategory'])->name('update.category');
    Route::get('/delete/{id}', [CategoryController::class, 'DeleteCategory'])->name('delete.category');
});

// ========= SubCategory Route =========
Route::prefix('subcategory')->group(function () {
    Route::get('/all', [CategoryController::class, 'AllSubCategory'])->name('all.subcategory');
});
