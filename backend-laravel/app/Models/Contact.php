<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    // protected $fillable = [
    //     'name',
    //     'email',
    //     'message',
    //     'contact_date',
    //     'contact_time',
    // ];
    protected $guarded = [];
}
