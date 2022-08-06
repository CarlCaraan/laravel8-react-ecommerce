<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductList;
use App\Models\Favourite;

class FavouriteController extends Controller
{
    public function AddFavorite(Request $request)
    {
        $product_code = $request->product_code;
        $email = $request->email;
        $productDetails  = ProductList::where('product_code', $product_code)->get();

        $result = Favourite::insert([
            'product_name' => $productDetails[0]['title'],
            'image' => $productDetails[0]['image'],
            'product_code' => $product_code,
            'email' => $email,
        ]);

        return $request;
    } // End Method

    public function FavouriteList(Request $request)
    {
        $email = $request->email;
        $result = Favourite::where('email', $email)->get();
        return $result;
    } // End Method
}
