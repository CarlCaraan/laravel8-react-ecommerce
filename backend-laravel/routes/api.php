<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Admin\VisitorController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\SiteInfoController;
use App\Http\Controllers\Admin\CategoryController;

use App\Http\Controllers\Admin\ProductListController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\ProductDetailsController;
use App\Http\Controllers\Admin\ProductReviewController;
use App\Http\Controllers\Admin\ProductCartController;
use App\Http\Controllers\Admin\NotificationController;

use App\Http\Controllers\User\AuthController;
use App\Http\Controllers\User\ForgotController;
use App\Http\Controllers\User\ResetController;
use App\Http\Controllers\User\UserController;


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// ========= Start All React Routes =========
// Get Visitor Route
Route::get('/getvisitor', [VisitorController::class, 'GetVisitorDetails']);

// Contact Page Route
Route::post('/postcontact', [ContactController::class, 'PostContactDetails']);

// Site Info Route
Route::get('/getsiteinfo', [SiteInfoController::class, 'GetSiteInfo']);

// All Category Route
Route::get('/getcategory', [CategoryController::class, 'GetCategory']);

// ProductList Route
Route::get('/productlistbyremark/{remark}', [ProductListController::class, 'ProductListByRemark']);
Route::get('/productlistbycategory/{category}', [ProductListController::class, 'ProductListByCategory']);
Route::get('/productlistbysubcategory/{category}/{subcategory}', [ProductListController::class, 'ProductListBySubCategory']);

// Slider Route
Route::get('/allslider', [SliderController::class, 'AllSlider']);

// Product Details Route
Route::get('/productdetails/{id}', [ProductDetailsController::class, 'ProductDetails']);

// Notification 
Route::get('/notification', [NotificationController::class, 'NotificaitonHistory']);

// Search Route 
Route::get('/search/{key}', [ProductListController::class, 'ProductBySearch']);
// ========= End All React Routes =========


// ========= Start User Authentication API =========
Route::post('/login', [AuthController::class, 'Login']);
Route::post('/register', [AuthController::class, 'Register']);
Route::post('/forgotpassword', [ForgotController::class, 'ForgotPassword']);
Route::post('/resetpassword', [ResetController::class, 'ResetPassword']);
Route::get('/user', [UserController::class, 'User'])->middleware('auth:api');
// ========= End User Authentication API =========

// Similar Product Route
Route::get('/similar/{subcategory}', [ProductListController::class, 'SimilarProduct']);

// Product Review Route
Route::get('/reviewlist/{id}', [ProductReviewController::class, 'ReviewList']);

// Product Cart Route
Route::post('/addtocart', [ProductCartController::class, 'AddToCart']);
