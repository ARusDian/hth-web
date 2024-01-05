<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DiseaseRecord extends Model
{
    use HasFactory;

    protected $fillable = [
        "medical_record_id",
        "disease_id",
        "sub_disease_id",
    ];

    public function disease()
    {
        return $this->belongsTo(Disease::class);
    }

    public function subDisease()
    {
        return $this->belongsTo(SubDisease::class);
    }
}
