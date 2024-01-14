<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubDisease extends Model
{
    use HasFactory;

    protected $allowed = [
        'name',
        'disease_id',
    ];

    protected $fillable = [
        'name',
        'disease_id',
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

    public function disease()
    {
        return $this->belongsTo(Disease::class);
    }
    
    public function treatments()
    {
        return $this->belongsToMany(Treatment::class, 'sub_disease_treatments');
    }

    public function symptoms()
    {
        return $this->belongsToMany(Symptom::class, 'sub_disease_symptoms');
    }


}
