<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductList;
use App\Models\Category;
use App\Models\SubCategory;
use App\Models\ProductDetails;
use Image;

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

    public function AddProduct()
    {
        $category = Category::orderBy('category_name', 'ASC')->get();
        $subcategory = SubCategory::orderBy('subcategory_name', 'ASC')->get();
        return view('backend.product.product_add', compact('category', 'subcategory'));
    } // End Method

    public function StoreProduct(Request $request)
    {
        $request->validate(
            [
                'title' => 'required',
                'product_code' => 'required',
            ],
            [
                'title.required' => 'Product Title is required!',
                'product_code.required' => 'Product Code is required!',
            ]
        );

        // Working with Image
        $image = $request->file('image');
        $name_gen = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();
        Image::make($image)->resize(900, 900)->save('upload/product/' . $name_gen);
        $save_url = 'http://127.0.0.1:8000/upload/product/' . $name_gen;

        $product_id = ProductList::insertGetId([
            'title' => $request->title,
            'price' => $request->price,
            'special_price' => $request->special_price,
            'category' => $request->category,
            'subcategory' => $request->subcategory,
            'remark' => $request->remark,
            'brand' => $request->brand,
            'product_code' => $request->product_code,
            'image' => $save_url,
        ]);

        // ========= Insert Into Product Details =========
        $image1 = $request->file('image_one');
        $name_gen1 = hexdec(uniqid()) . '.' . $image1->getClientOriginalExtension();
        Image::make($image1)->resize(900, 900)->save('upload/productdetails/' . $name_gen1);
        $save_url1 = 'http://127.0.0.1:8000/upload/productdetails/' . $name_gen1;

        $image2 = $request->file('image_two');
        $name_gen2 = hexdec(uniqid()) . '.' . $image2->getClientOriginalExtension();
        Image::make($image2)->resize(900, 900)->save('upload/productdetails/' . $name_gen2);
        $save_url2 = 'http://127.0.0.1:8000/upload/productdetails/' . $name_gen2;

        $image3 = $request->file('image_three');
        $name_gen3 = hexdec(uniqid()) . '.' . $image3->getClientOriginalExtension();
        Image::make($image3)->resize(900, 900)->save('upload/productdetails/' . $name_gen3);
        $save_url3 = 'http://127.0.0.1:8000/upload/productdetails/' . $name_gen3;

        ProductDetails::insert([
            'product_id' => $product_id,
            'image_one' => $save_url1,
            'image_two' => $save_url2,
            'image_three' => $save_url3,
            'short_description' => $request->short_description,
            'size' => $request->size,
            'color' => $request->color,
            'long_description' => $request->long_description,
        ]);

        $notification = array(
            'message' => 'Product Inserted Successfully',
            'alert-type' => 'success',
        );

        return redirect()->route('all.product')->with($notification);
    } // End Method

    public function EditProduct($id)
    {
        $category = Category::orderBy('category_name', 'ASC')->get();
        $subcategory = SubCategory::orderBy('subcategory_name', 'ASC')->get();

        $product = ProductList::findOrFail($id);
        $details = ProductDetails::where('product_id', $id)->get();
        return view('backend.product.product_edit', compact('category', 'subcategory', 'product', 'details'));
    } // End Method

    public function UpdateProduct(Request $request)
    {
        $product_id = $request->id;

        $request->validate(
            [
                'title' => 'required',
                'product_code' => 'required',
            ],
            [
                'title.required' => 'Product Title is required!',
                'product_code.required' => 'Product Code is required!',
            ]
        );

        // Working with Image
        $image = $request->file('image');
        $name_gen = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();
        Image::make($image)->resize(900, 900)->save('upload/product/' . $name_gen);
        $save_url = 'http://127.0.0.1:8000/upload/product/' . $name_gen;

        $product_id = ProductList::findOrFail($product_id)->update([
            'title' => $request->title,
            'price' => $request->price,
            'special_price' => $request->special_price,
            'category' => $request->category,
            'subcategory' => $request->subcategory,
            'remark' => $request->remark,
            'brand' => $request->brand,
            'product_code' => $request->product_code,
            'image' => $save_url,
        ]);

        // ========= Insert Into Product Details =========
        $image1 = $request->file('image_one');
        $name_gen1 = hexdec(uniqid()) . '.' . $image1->getClientOriginalExtension();
        Image::make($image1)->resize(900, 900)->save('upload/productdetails/' . $name_gen1);
        $save_url1 = 'http://127.0.0.1:8000/upload/productdetails/' . $name_gen1;

        $image2 = $request->file('image_two');
        $name_gen2 = hexdec(uniqid()) . '.' . $image2->getClientOriginalExtension();
        Image::make($image2)->resize(900, 900)->save('upload/productdetails/' . $name_gen2);
        $save_url2 = 'http://127.0.0.1:8000/upload/productdetails/' . $name_gen2;

        $image3 = $request->file('image_three');
        $name_gen3 = hexdec(uniqid()) . '.' . $image3->getClientOriginalExtension();
        Image::make($image3)->resize(900, 900)->save('upload/productdetails/' . $name_gen3);
        $save_url3 = 'http://127.0.0.1:8000/upload/productdetails/' . $name_gen3;

        ProductDetails::findOrFail($product_id)->update([
            'product_id' => $product_id,
            'image_one' => $save_url1,
            'image_two' => $save_url2,
            'image_three' => $save_url3,
            'short_description' => $request->short_description,
            'size' => $request->size,
            'color' => $request->color,
            'long_description' => $request->long_description,
        ]);

        $notification = array(
            'message' => 'Product Update Successfully',
            'alert-type' => 'success',
        );

        return redirect()->route('all.product')->with($notification);
    } // End Method
}
