<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalRecord extends Model
{
    use HasFactory;

    protected $allowed = [
        "name",
        "address",
        "date_of_birth",
        "NIK",
        "phone_number",
    ];

    protected $fillable = [
    'name',
    'address',
    'date_of_birth',
    'NIK',
    'gender',
    'race',
    'occupation',
    'phone_number',
    'family_phone_number',
    'main_complaint',
    'additional_complaint',
    'blood_type',
    'blood_pressure',
    'pulse',
    'body_temperature',
    'is_respiratory_congestion',
    'is_heart_disease',
    'is_diabetes',
    'is_hemophilia',
    'is_hepatitis',
    'is_mag',
    'another_disease',
    'food_allergy',
    'drug_allergy',
    'symptoms_arr',
    ];

    protected $casts = [
        "symptoms_arr" => "array"
    ];

    public function diseases()
    {
        return $this->belongsToMany(Disease::class, "disease_records", "medical_record_id", "disease_id");
    }

    public function getSymptomAttribute($value)
    {
        return json_decode($value);
    }

    public function setSymptomAttribute($value)
    {
        $this->attributes["symptoms_arr"] = json_encode($value);
    }

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
}
