<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DiseaseTreatmentGoal extends Model
{
    use HasFactory;

    protected $fillable = [
        'disease_id',
        'treatment_goal_id',
    ];

    public function disease()
    {
        return $this->belongsTo(Disease::class);
    }

    public function treatmentGoal()
    {
        return $this->belongsTo(TreatmentGoal::class);
    }
}
