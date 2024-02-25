<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DiseaseSuccessIndicator extends Model
{
    use HasFactory;

    protected $fillable = [
        'disease_id',
        'success_indicator_id',
    ];

    public function disease()
    {
        return $this->belongsTo(Disease::class);
    }

    public function successIndicator()
    {
        return $this->belongsTo(SuccessIndicator::class);
    }
}
