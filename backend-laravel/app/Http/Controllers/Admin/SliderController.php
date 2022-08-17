<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\HomeSlider;
use Image;

class SliderController extends Controller
{
    public function AllSlider()
    {
        $result = HomeSlider::all();
        return $result;
    } // End Method

    // ========= START SLIDER ALL METHOD =========
    public function GetAllSlider()
    {
        $slider = HomeSlider::latest()->get();
        return view('backend.slider.slider_view', compact('slider'));
    } // End Method

    public function AddSlider()
    {
        return view('backend.slider.slider_add');
    } // End Method

    public function StoreSlider(Request $request)
    {
        $request->validate(
            [
                'slider_image' => 'required',
            ],
            [
                'slider_image.required' => 'Slider Image is required!',
            ]
        );

        // Working with Image
        $image = $request->file('slider_image');
        $name_gen = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();
        Image::make($image)->resize(1976, 688)->save('upload/slider/' . $name_gen);
        $save_url = 'http://127.0.0.1:8000/upload/slider/' . $name_gen;

        HomeSlider::insert([
            'slider_image' => $save_url,
        ]);

        $notification = array(
            'message' => 'Slider Image Inserted Successfully',
            'alert-type' => 'success',
        );

        return redirect()->route('all.slider')->with($notification);
    } // End Method

    public function EditSlider($id)
    {
        $slider = HomeSlider::findOrFail($id);
        return view('backend.slider.slider_edit', compact('slider'));
    } // End Method

    public function UpdateSlider(Request $request)
    {
        $slider_id = $request->id;

        $request->validate(
            [
                'slider_image' => 'required',
            ],
            [
                'slider_image.required' => 'Slider Image is required!',
            ]
        );

        // Working with Image
        $image = $request->file('slider_image');
        $name_gen = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();
        Image::make($image)->resize(1976, 688)->save('upload/slider/' . $name_gen);
        $save_url = 'http://127.0.0.1:8000/upload/slider/' . $name_gen;

        HomeSlider::findOrFail($slider_id)->update([
            'slider_image' => $save_url,
        ]);

        $notification = array(
            'message' => 'Slider Image Updated Successfully',
            'alert-type' => 'success',
        );

        return redirect()->route('all.slider')->with($notification);
    } // End Method

    public function DeleteSlider($id)
    {
        HomeSlider::findOrFail($id)->delete();
        $notification = array(
            'message' => 'Slider Deleted Successfully',
            'alert-type' => 'success',
        );
        return redirect()->back()->with($notification);
    } // End Method
}
