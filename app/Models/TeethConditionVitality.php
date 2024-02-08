<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeethConditionVitality extends Model
{
    use HasFactory;

    protected $fillable = [
        'medical_record_id',
        'tooth_number',
        'inspection',
        'thermis',
        'sondasi',
        'percussion',
        'druk',
        'mobility',
        'problem'
    ];

    public function medicalRecord()
    {
        return $this->belongsTo(MedicalRecord::class);
    }
}
