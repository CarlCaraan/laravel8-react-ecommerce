<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\Session;
use Exception;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AdminController extends Controller
{
    public function AdminLogout()
    {
        Auth::logout();
        Session::flush();
        return Redirect()->route('login');
    } // End Method

    public function ChangePasswordLogout()
    {
        Auth::logout();
        Session::flush();
        return redirect()->route('login')->with('success', 'User Password Updated Successfully');
    }

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

    public function ChangePassword()
    {
        return view('backend.admin.change_password');
    } // End Method

    public function ChangePasswordUpdate(Request $request)
    {
        $validateData = $request->validate(
            [
                'oldpassword' => 'required',
                'password' => 'required|confirmed',
            ],
            // ~Custom Error messages
            [
                'oldpassword.required' => 'Current Password field is required!',
            ]
        );

        $hashedPassword = Auth::user()->password;
        if (Hash::check($request->oldpassword, $hashedPassword)) {
            $user = User::find(Auth::id());
            $user->password = Hash::make($request->password);
            $user->save();

            $notification = array(
                'message' => 'User Password Updated Successfully',
                'alert-type' => 'info',
            );

            return redirect()->route('password.logout')->with($notification);
        } else {
            $notification = array(
                'message' => 'Current Password Incorrect!',
                'alert-type' => 'error',
            );

            return redirect()->back()->with($notification);
        }
    } // End Method
}
