<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Models\User;
use DB;
use Exception;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\ForgotRequest;
use App\Mail\ForgotMail;
use Mail;

class ForgotController extends Controller
{
    public function ForgotPassword(ForgotRequest $request)
    {
        $email = $request->email;

        if (User::where('email', $email)->doesntExist()) {
            return response([
                'message' => 'The email does not exist!',
            ], 401);
        }

        // Generate Random Token
        $token = rand(10, 100000);

        try {
            DB::table('password_resets')->insert([
                'email' => $email,
                'token' => $token
            ]);

            //Mail Send to User
            Mail::to($email)->send(new ForgotMail($token));
            return response([
                'message' => 'Reset Password Mail send on your email',
            ], 200);
        } catch (Exception $exception) {
            return response([
                'message' => $exception->getMessage()
            ], 400);
        }
    } // End Method
}
