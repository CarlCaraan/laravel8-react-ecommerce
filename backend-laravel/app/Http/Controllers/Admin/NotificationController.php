<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Notification;

class NotificationController extends Controller
{
    public function NotificaitonHistory()
    {
        $result = Notification::get();
        return $result;
    } // End Notification
}
