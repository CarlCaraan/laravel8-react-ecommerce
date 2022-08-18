<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductList;

class ProductListController extends Controller
{
    public function ProductListByRemark(Request $request)
    {
        $remark = $request->remark;
        $productlist = ProductList::where('remark', $remark)->limit(8)->get();

        return $productlist;
    } // End Method

    public function ProductListByCategory(Request $request)
    {
        $category = $request->category;
        $productlist = ProductList::where('category', $category)->get();

        return $productlist;
    } // End Method

    public function ProductListBySubCategory(Request $request)
    {
        $category = $request->category;
        $subcategory = $request->subcategory;
        $productlist = ProductList::where('category', $category)->where('subcategory', $subcategory)->get();

        return $productlist;
    } // End Method

    public function ProductBySearch(Request $request)
    {
        $key = $request->key;
        $productList = ProductList::where('title', 'LIKE', "%{$key}%")
            ->orWhere('brand', 'LIKE', "%{$key}%")->get();
        return $productList;
    } // End Method

    public function SimilarProduct(Request $request)
    {
        $subcategory = $request->subcategory;
        $productlist = ProductList::where('subcategory', $subcategory)->orderBy('id', 'desc')->limit(6)->get();

        return $productlist;
    } // End Method

    // ========= BACKEND PRODUCT LIST =========
    public function GetAllProduct()
    {
        $products = ProductList::latest()->paginate(5);
        return view('backend.product.product_all', compact('products'));
    } // End Method
}
