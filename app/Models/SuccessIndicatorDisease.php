<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SuccessIndicatorDisease extends Model
{
    use HasFactory;

    protected $fillable = ['success_indicator_id', 'disease_id'];

    public function successIndicator()
    {
        return $this->belongsTo(SuccessIndicator::class);
    }

    public function disease()
    {
        return $this->belongsTo(Disease::class);
    }
}
