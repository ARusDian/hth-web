<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubDiseaseTreatment extends Model
{
    use HasFactory;

    protected $fillable = [
        "sub_disease_id",
        "treatment_id",
    ];

    public function subDisease()
    {
        return $this->belongsTo(SubDisease::class);
    }

    public function treatment()
    {
        return $this->belongsTo(Treatment::class);
    }
}
