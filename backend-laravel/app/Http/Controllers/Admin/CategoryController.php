<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Subcategory;

class CategoryController extends Controller
{
    public function GetCategory()
    {
        $categories = Category::all();
        $categoryDetailsArray = [];

        foreach ($categories as $value) {
            $subcategory = Subcategory::where('category_name', $value['category_name'])->get();
            $item = [
                'category_name' => $value['category_name'],
                'category_image' => $value['category_image'],
                'subcategory_name' => $subcategory
            ];
            array_push($categoryDetailsArray, $item);
        }

        return $categoryDetailsArray;
    } // End Method

    public function AllCategory()
    {
        $category = Category::latest()->get();
        return view('backend.category.category_view', compact('category'));
    } // End Method
}
