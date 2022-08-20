@extends('admin.admin_master')

@section('title')Site Info | Admin @endsection

@section('content')
<div class="page-wrapper">
    <div class="page-content">
        <!--breadcrumb-->
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="breadcrumb-title pe-3">Site Info</div>
            <div class="ps-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Site Info Update</li>
                    </ol>
                </nav>
            </div>
        </div>
        <!--end breadcrumb-->
        <div class="container">
            <div class="main-body">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header bg-white">
                                <h4 class="mt-2">Site Info Update</h4>
                            </div>
                            <div class="card-body">
                                <form action="{{ route('update.siteinfo') }}" method="POST">
                                    @csrf
                                    <input type="hidden" name="id" value="{{ $siteinfo->id }}">

                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">About</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <textarea name="about" class="form-control" id="mytextarea" rows="10">{{ $siteinfo->about }}</textarea>
                                            @error('about')
                                            <span class="text-danger">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Privacy</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <textarea name="privacy" class="form-control" id="mytextarea2" rows="10">{{ $siteinfo->privacy }}</textarea>
                                            @error('privacy')
                                            <span class="text-danger">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Address</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input name="address" type="text" class="form-control" value="{{ $siteinfo->address }}" />
                                            @error('address')
                                            <span class="text-danger">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Android App Link</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input name="android_app_link" type="text" class="form-control" value="{{ $siteinfo->android_app_link }}" />
                                            @error('android_app_link')
                                            <span class="text-danger">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Ios App Link</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input name="ios_app_link" type="text" class="form-control" value="{{ $siteinfo->ios_app_link }}" />
                                            @error('ios_app_link')
                                            <span class="text-danger">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Facebook Link</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input name="facebook_link" type="text" class="form-control" value="{{ $siteinfo->facebook_link }}" />
                                            @error('facebook_link')
                                            <span class="text-danger">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Twitter Link</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input name="twitter_link" type="text" class="form-control" value="{{ $siteinfo->twitter_link }}" />
                                            @error('twitter_link')
                                            <span class="text-danger">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Instagram Link</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input name="instagram_link" type="text" class="form-control" value="{{ $siteinfo->instagram_link }}" />
                                            @error('instagram_link')
                                            <span class="text-danger">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Copyright Text</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input name="copyright_text" type="text" class="form-control" value="{{ $siteinfo->copyright_text }}" />
                                            @error('copyright_text')
                                            <span class="text-danger">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-sm-3"></div>
                                        <div class="col-sm-9 text-secondary">
                                            <input type="submit" class="btn btn-primary px-4" value="Update Site Info" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Text Editor JS -->
<script src='https://cdn.tiny.cloud/1/vdqx2klew412up5bcbpwivg1th6nrh3murc6maz8bukgos4v/tinymce/5/tinymce.min.js' referrerpolicy="origin">
</script>
<script>
    tinymce.init({
        selector: '#mytextarea'
    });
</script>
<script>
    tinymce.init({
        selector: '#mytextarea2'
    });
</script>
@endsection