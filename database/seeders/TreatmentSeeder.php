<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TreatmentSeeder extends Seeder
{
    protected $data = [
    "Melakukan penambalan KME Kelas 1",
    "Melakukan penambalan KMD Kelas 1",
    "Melakukan penambalan KMD Kelas 5",
    "Rujuk Ke Dokter Gigi",
    "Melakukan Perawatan Saluran Akar",
    "Melakukan pencabutan gigi",
    "Melakukan scaling",
    "Melakukan pelapisan pit dan fissure dengan bahan Fuji VII",
    "Melakukan pecabutan gigi dengan Anastesi Infiltrasi",
    "Melakukan pencabutan gigi dengan Topical Anastesi Chrolethyl"
    ];

    protected $disease = [
    [
    "disease_id" => 3,
    "treatment_id" => 4,
    ],
    [
    "disease_id" => 3,
    "treatment_id" => 5,
    ],
    [
    "disease_id" => 4,
    "treatment_id" => 4,
    ],
    [
    "disease_id" => 4,
    "treatment_id" => 5,
    ],
    [
    "disease_id" => 5,
    "treatment_id" => 6,
    ],
    [
    "disease_id" => 6,
    "treatment_id" => 7,
    ],
    [
    "disease_id" => 7,
    "treatment_id" => 7,
    ],
    [
    "disease_id" => 8,
    "treatment_id" => 8,
    ],
    [
    "disease_id" => 9,
    "treatment_id" => 9,
    ],
    [
    "disease_id" => 10,
    "treatment_id" => 9,
    ],
    [
    "disease_id" => 11,
    "treatment_id" => 10,
    ],
    [
    "disease_id" => 12,
    "treatment_id" => 10,
    ],
    [
    "disease_id" => 13,
    "treatment_id" => 10,
    ],
    ];

    protected $sub_disease = [
    [
    "sub_disease_id" => 1,
    "treatment_id" => 1,
    ],
    [
    "sub_disease_id" => 2,
    "treatment_id" => 4,
    ],
    [
    "sub_disease_id" => 3,
    "treatment_id" => 4,
    ],
    [
    "sub_disease_id" => 4,
    "treatment_id" => 4,
    ],
    [
    "sub_disease_id" => 5,
    "treatment_id" => 1,
    ],
    [
    "sub_disease_id" => 6,
    "treatment_id" => 4,

    ],
    [
    "sub_disease_id" => 7,
    "treatment_id" => 2,
    ],
    [
    "sub_disease_id" => 8,
    "treatment_id" => 4,
    ],
    [
    "sub_disease_id" => 9,
    "treatment_id" => 4,
    ],
    [
    "sub_disease_id" => 10,
    "treatment_id" => 4,
    ],
    [
    "sub_disease_id" => 11,
    "treatment_id" => 3,
    ],
    [
    "sub_disease_id" => 12,
    "treatment_id" => 4,
    ]
    ];

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        foreach ($this->data as $value)
        {
            \App\Models\Treatment::create([
            'description' => $value,
            ]);
        }

        foreach ($this->disease as $value)
        {
            \App\Models\DiseaseTreatment::create($value);
        }

        foreach ($this->sub_disease as $value)
        {
            \App\Models\SubDiseaseTreatment::create($value);
        }

    }
}
