<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\Session;
use App\Models\User;

class AdminController extends Controller
{
    public function AdminLogout()
    {
        Auth::logout();
        Session::flush();
        return Redirect()->route('login');
    } // End Method

    public function UserProfile()
    {
        $adminData = Auth::user();
        return view('backend.admin.admin_profile', compact('adminData'));
    }

    public function UserProfileStore(Request $request)
    {
    } // End Method
}
