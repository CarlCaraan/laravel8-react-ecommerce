<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SiteInfo;

class SiteInfoController extends Controller
{
    public function GetSiteInfo()
    {
        $result = SiteInfo::get();
        return $result;
    } // End Method

    public function AllSiteInfo()
    {
        $siteinfo = SiteInfo::find(1);
        return view('backend.siteinfo.siteinfo_update', compact('siteinfo'));
    } // End Method

    public function UpdateSiteInfo(Request $request)
    {
        $siteinfo_id = $request->id;

        $request->validate(
            [
                'about' => 'required',
                'privacy' => 'required',
                'address' => 'required',
                'android_app_link' => 'required',
                'ios_app_link' => 'required',
                'facebook_link' => 'required',
                'twitter_link' => 'required',
                'instagram_link' => 'required',
                'copyright_text' => 'required',
            ],
        );

        SiteInfo::findOrFail($siteinfo_id)->update([
            'about' => $request->about,
            'privacy' => $request->privacy,
            'address' => $request->address,
            'android_app_link' => $request->android_app_link,
            'ios_app_link' => $request->ios_app_link,
            'facebook_link' => $request->facebook_link,
            'twitter_link' => $request->twitter_link,
            'instagram_link' => $request->instagram_link,
            'copyright_text' => $request->copyright_text,
        ]);

        $notification = array(
            'message' => 'All Site Info Updated Successfully',
            'alert-type' => 'success',
        );

        return redirect()->back()->with($notification);
    } // End Method
}
