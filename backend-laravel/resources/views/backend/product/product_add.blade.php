@extends('admin.admin_master')

@section('title')Add Product | Admin @endsection

@section('content')
<div class="page-wrapper">
    <div class="page-content">

        <!--breadcrumb-->
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="breadcrumb-title pe-3">eCommerce</div>
            <div class="ps-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Add New Product</li>
                    </ol>
                </nav>
            </div>
        </div>
        <!--end breadcrumb-->

        <div class="card">
            <div class="card-body p-4">
                <h5 class="card-title">Add New Product</h5>
                <hr />
                <div class="form-body mt-4">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="border border-3 p-4 rounded">
                                <div class="mb-3">
                                    <label for="inputProductTitle" class="form-label">Product Title</label>
                                    <input type="text" name="title" class="form-control" placeholder="Enter product title">
                                    @error('title')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="mb-3">
                                    <label for="inputProductTitle" class="form-label">Product Code</label>
                                    <input type="text" name="product_code" class="form-control" placeholder="Enter product title">
                                    @error('product_code')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>

                                <div class="mb-3">
                                    <label for="inputProductTitle" class="form-label">Product Image</label>
                                    <div class="text-secondary">
                                        <input name="image" class="form-control" type="file" id="image" />
                                        @error('image')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="text-secondary">
                                        <img id="showImage" src="{{ url('upload/no_image.jpg') }}" alt="profile_preview" class="img-thumbnail shadow-sm" width="110">
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label for="inputProductTitle" class="form-label">Image One</label>
                                    <div class="text-secondary">
                                        <input name="image_one" class="form-control" type="file" />
                                        @error('image_one')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label for="inputProductTitle" class="form-label">Image Two</label>
                                    <div class="text-secondary">
                                        <input name="image_two" class="form-control" type="file" />
                                        @error('image_two')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label for="inputProductTitle" class="form-label">Image Three</label>
                                    <div class="text-secondary">
                                        <input name="image_three" class="form-control" type="file" />
                                        @error('image_three')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label for="inputProductDescription" class="form-label">Short Description</label>
                                    <textarea name="short_description" class="form-control" id="inputProductDescription" rows="3"></textarea>
                                </div>

                                <div class="mb-3">
                                    <label for="inputProductDescription" class="form-label">Long Description</label>
                                    <textarea name="long_description" class="form-control" id="mytextarea" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="border border-3 p-4 rounded">
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <label for="inputPrice" class="form-label">Price</label>
                                        <input type="text" name="price" class="form-control" placeholder="00.00">
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputCompareatprice" class="form-label">Special Price</label>
                                        <input type="text" name="special_price" class="form-control" placeholder="00.00">
                                    </div>

                                    <div class="col-12">
                                        <label for="inputProductType" class="form-label">Category</label>
                                        <select class="form-select" id="inputProductType">
                                            <option selected>Select Category</option>
                                            @foreach ($category as $item)
                                            <option value="{{ $item->category_name }}">{{ $item->category_name }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="col-12">
                                        <label for="inputProductType" class="form-label">SubCategory</label>
                                        <select class="form-select" id="inputProductType">
                                            <option selected>Select SubCategory</option>
                                            @foreach ($subcategory as $item)
                                            <option value="{{ $item->subcategory_name }}">{{ $item->subcategory_name }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="col-12">
                                        <label for="inputCollection" class="form-label">Brand</label>
                                        <select name="brand" class="form-select">
                                            <option selected>Select Brand</option>
                                            <option value="Akko">Akko</option>
                                            <option value="Kbdfans">Kbdfans</option>
                                            <option value="Fekker">Fekker</option>
                                        </select>
                                    </div>
                                    <div class="col-12">
                                        <label for="inputProductTags" class="form-label">Product Tags</label>
                                        <input type="text" class="form-control" id="inputProductTags" placeholder="Enter Product Tags">
                                    </div>
                                    <div class="col-12">
                                        <div class="d-grid">
                                            <button type="button" class="btn btn-primary">Save Product</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--end row-->
                </div>
            </div>
        </div>

    </div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<!-- Show Image Ajax -->
<script>
    $(document).ready(function() {
        $('#image').change(function(e) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#showImage').attr('src', e.target.result);
            }
            reader.readAsDataURL(e.target.files['0']);
        });
    });
</script>

<!-- Text Editor JS -->
<script src='https://cdn.tiny.cloud/1/vdqx2klew412up5bcbpwivg1th6nrh3murc6maz8bukgos4v/tinymce/5/tinymce.min.js' referrerpolicy="origin">
</script>
<script>
    tinymce.init({
        selector: '#mytextarea'
    });
</script>
@endsection