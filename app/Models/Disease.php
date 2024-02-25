<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Disease extends Model
{
    use HasFactory;

    protected $allowed = [
        'name',
        'problem',
        'diagnosis',
    ];

    protected $fillable = [
        'name',
        'problem',
        'diagnosis',
    ];

    public function scopeWhereColumns($query, $filters)
    {
        if (isset($filters))
        {
            foreach (json_decode($filters) as $value)
            {
                $key = explode('.', $value->id);

                if (!in_array($value->id, $this->allowed))
                {
                    continue;
                }

                if (count($key) > 1)
                {
                    $query->whereHas($key[0], function ($query) use ($value, $key, )
                    {
                        return $query->where(
                            $key[1],
                            'LIKE',
                            "%" . $value->value . "%",
                        );
                    });
                }
                else
                {
                    $query->where($value->id, 'LIKE', "%" . $value->value . "%");
                }
            }
        }
        else
        {
            return $query;
        }
    }

    public function reasons()
    {
        return $this->belongsToMany(Reason::class, 'disease_reasons');
    }

    public function symptoms()
    {
        return $this->belongsToMany(Symptom::class, 'disease_symptoms');
    }

    public function subDiseases()
    {
        return $this->hasMany(SubDisease::class);
    }

    public function treatments()
    {
        return $this->belongsToMany(Treatment::class, 'disease_treatments');
    }

    public function treatmentGoals()
    {
        return $this->belongsToMany(TreatmentGoal::class, 'disease_treatment_goals');
    }

    public function successIndicators()
    {
        return $this->belongsToMany(SuccessIndicator::class, 'disease_success_indicators');
    }

    public function evaluationMethods()
    {
        return $this->belongsToMany(EvaluationMethod::class, 'disease_evaluation_methods');
    }
}
