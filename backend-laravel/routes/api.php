<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Admin\VisitorController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\SiteInfoController;
use App\Http\Controllers\Admin\CategoryController;

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Get Visitor Route
Route::get('/getvisitor', [VisitorController::class, 'GetVisitorDetails']);

// Contact Page Route
Route::post('/postcontact', [ContactController::class, 'PostContactDetails']);

// Site Info Route
Route::get('/getsiteinfo', [SiteInfoController::class, 'GetSiteInfo']);

// Category Route
Route::get('/getcategory', [CategoryController::class, 'GetCategory']);
