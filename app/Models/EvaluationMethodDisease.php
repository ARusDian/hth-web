<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EvaluationMethodDisease extends Model
{
    use HasFactory;

    protected $fillable = ['evaluation_method_id', 'disease_id'];

    public function evaluationMethod()
    {
        return $this->belongsTo(EvaluationMethod::class);
    }

    public function disease()
    {
        return $this->belongsTo(Disease::class);
    }
}
