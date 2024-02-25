<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TreatmentGoalDisease extends Model
{
    use HasFactory;

    protected $fillable = ['treatment_goal_id', 'disease_id'];

    public function treatmentGoal()
    {
        return $this->belongsTo(TreatmentGoal::class);
    }

    public function disease()
    {
        return $this->belongsTo(Disease::class);
    }
}
