<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubDiseaseSymptom extends Model
{
    use HasFactory;

    protected $fillable = [
        'sub_disease_id',
        'symptom_id',
    ];

    public function subDisease()
    {
        return $this->belongsTo(SubDisease::class);
    }

    public function symptom()
    {
        return $this->belongsTo(Symptom::class);
    }
}
