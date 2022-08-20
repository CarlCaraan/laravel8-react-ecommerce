@extends('admin.admin_master')

@section('title')All Review | Admin @endsection

@section('content')
<div class="page-wrapper">
    <div class="page-content">
        <!--breadcrumb-->
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="breadcrumb-title pe-3">All Review</div>
            <div class="ps-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">All Review</li>
                    </ol>
                </nav>
            </div>
        </div>
        <!--end breadcrumb-->
        <div class="container">
            <div class="main-body">
                <div class="table-responsive">
                    <table id="datatable" class="table table-striped table-bordered bg-white border" style="width:100%">
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Product Name</th>
                                <th>Reviewer Name</th>
                                <th>Rating</th>
                                <th>Comments</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($review as $key => $item)
                            <tr>
                                <td>{{ $key+1 }}</td>
                                <td>{{ $item->product_name }}</td>
                                <td>{{ $item->reviewer_name }}</td>
                                <td>{{ $item->reviewer_rating }}</td>
                                <td>{{ $item->reviewer_comments }}</td>
                                <td>
                                    <a href="{{ route('delete.message', $item->id) }}" id="delete" class="btn btn-danger">Delete</a>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection