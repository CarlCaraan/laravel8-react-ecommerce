<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Models\User;
use DB;
use Exception;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\ResetRequest;

class ResetController extends Controller
{
    public function ResetPassword(ResetRequest $request)
    {
        $email = $request->email;
        $token = $request->token;
        $password = Hash::make($request->password);

        $emailcheck = DB::table('password_resets')->where('email', $email)->first();
        $pincheck = DB::table('password_resets')->where('token', $token)->first();
        if (!$emailcheck) {
            return response([
                'message' => 'Email Not Found',
            ], 401);
        }
        if (!$pincheck) {
            return response([
                'message' => 'Pin Code Invalid!',
            ], 401);
        }

        DB::table('users')->where('email', $email)->update([
            'password' => $password
        ]);
        DB::table('password_resets')->where('email', $email)->delete();
        return response([
            'message' => 'Password Changed Successfully'
        ], 200);
    } // End Method
}
