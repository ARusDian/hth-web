<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TreatmentGoal extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    protected $allowed = ['name'];

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

    public function diseases()
    {
        return $this->belongsToMany(Disease::class, 'treatment_goal_diseases');
    }
}
