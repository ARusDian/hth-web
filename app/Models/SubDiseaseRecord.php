<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubDiseaseRecord extends Model
{
    use HasFactory;

    protected $fillable = [
        "disease_record_id",
        "sub_disease_id",
        "region",
    ];

    protected $casts = [
        'region' => 'array',
    ];

    public function diseaseRecord()
    {
        return $this->belongsTo(DiseaseRecord::class);
    }

    public function subDisease()
    {
        return $this->belongsTo(SubDisease::class);
    }
}
