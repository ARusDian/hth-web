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
    'place_of_birth',
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
    'is_symetric_face',
    'spleen_gland',
    'odontogram',
    'hard_tissue_abnormalities',
    'is_teeth_shape_normal',
    'is_teeth_amount_normal',
    'is_teeth_color_normal',
    'is_teeth_position_normal',
    'is_teeth_size_normal',
    'occlusion',
    'is_teeth_shape_anomaly',
    'is_teeth_color_anomaly',
    'is_teeth_position_anomaly',
    'is_teeth_size_anomaly',
    'is_teeth_structure_anomaly',
    'mucose_tongue',
    'mucose_cheek',
    'mucose_palatum',
    'mucose_gingiva',
    'mucose_lips',
    ];

    protected $casts = [
        "symptoms_arr" => "array",
        "hard_tissue_abnormalities" => "array",
        "spleen_gland" => "array",
        "odontogram" => "array",
        "mucose_tongue" => "array",
        "mucose_cheek" => "array",
        "mucose_palatum" => "array",
        "mucose_gingiva" => "array",
        "mucose_lips" => "array",
    ];

    public function teethConditionVitalities()
    {
        return $this->hasMany(TeethConditionVitality::class);
    }

    public function periodontalTissues()
    {
        return $this->hasMany(PeriodontalTissue::class);
    }

    public function diseaseRecords()
    {
        return $this->hasMany(DiseaseRecord::class);
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
