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
        "region",
    ];

    protected $casts = [
        'region' => 'array',
    ];

    public function disease()
    {
        return $this->belongsTo(Disease::class);
    }

    public function medicalRecord()
    {
        return $this->belongsTo(MedicalRecord::class);
    }

    public function subDiseaseRecords()
    {
        return $this->hasMany(SubDiseaseRecord::class);
    }

    public function subDiseases(){
        return $this->belongsToMany(SubDisease::class,"sub_disease_records","disease_record_id","sub_disease_id");
    }
}
