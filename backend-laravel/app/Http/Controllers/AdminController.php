<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\Session;
use Exception;

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
        $validatedData = $request->validate(
            [
                'first_name' => 'required',
                'last_name' => 'required',
                'email' => 'required',
                'profile_photo_path' => 'image|mimes:jpeg,png,jpg|max:10000'
            ],
            // ~Custom Error messages
            [
                'image' => 'File format must be JPG, PNG nad JPEG!',
            ]
        );

        try {
            $data = Auth::user();
            $data->first_name = $request->first_name;
            $data->last_name = $request->last_name;
            $data->email = $request->email;

            if ($request->file('profile_photo_path')) {
                $file = $request->file('profile_photo_path');
                @unlink(public_path('upload/admin_images/' . $data->profile_photo_path));
                $filename = date('YmdHi') . $file->getClientOriginalName();
                $file->move(public_path('upload/admin_images'), $filename);
                $data['profile_photo_path'] = $filename;
            }
            $data->save();

            $notification = array(
                'message' => 'Profile Updated Successfully',
                'alert-type' => 'success'
            );
        } catch (Exception $e) {
            $notification = array(
                'message' => 'Email already Exist!',
                'alert-type' => 'error'
            );
        }


        return redirect()->route('user.profile')->with($notification);
    } // End Method
}
