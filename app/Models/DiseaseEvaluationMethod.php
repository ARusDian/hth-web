<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DiseaseEvaluationMethod extends Model
{
    use HasFactory;

    protected $fillable = [
        'disease_id',
        'evaluation_method_id',
    ];

    public function disease()
    {
        return $this->belongsTo(Disease::class);
    }
}
