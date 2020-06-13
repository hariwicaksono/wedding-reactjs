<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Orang extends Model
{
    //
    protected $table = 'orang';
    protected $fillable = ['id', 'nama', 'ucapan', 'qr_code', 'foto' ,'konfirmasi', 'grup', 'link'];
    public $incrementing = false;
}
