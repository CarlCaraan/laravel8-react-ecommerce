<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\Session;

class AdminController extends Controller
{
    public function AdminLogout()
    {
        Auth::logout();
        Session::flush();
        return Redirect()->route('login');
    } // End Method
}
