<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SymptomSeeder extends Seeder
{
    protected $data = [
    "Ngilu ringan",
    "Ngilu saat makan/minum yang dingin",
    "Makanan sering menyangkut",
    "Sakit/nyeri Berdenyut tiba tiba Makanan sering menyangkut",
    "Tes termis positif",
    "Perubahan warna pada gigi yang berlubang",
    "Pasien pernah merasakan sakit pada gigi yang berlubang",
    "Tes termis negatif",
    "Mobility",
    "Bau mulut Permukaan gigi terasa kasar dan kotor pada gigi posterior",
    "Mengurangi estetika kesan wajah yang sehat",
    "Permukaan gigi terasa kasar dan kotor pada gigi anterior",
    "Ceruk dalam dan sempit",
    "Kegoyangan gigi tidak dirasakan oleh pasien",
    "Kegoyangan gigi dapat dirasakan oleh pasien",
    "Gigi dapat digoyangkan menggunakan lidah pasien",
    "Gigi mudah digoyangkan",
    "Gigi berjejal Pengetahuan perkembangan gigi rendah"
    ];

    protected $disease = [
    [
    "disease_id" => 1,
    "symptom_id" => 1,
    ],
    [
    "disease_id" => 2,
    "symptom_id" => 2,
    ],
    [
    "disease_id" => 2,
    "symptom_id" => 3,
    ],
    [
    "disease_id" => 3,
    "symptom_id" => 4,
    ],
    [
    "disease_id" => 3,
    "symptom_id" => 5,
    ],
    [
    "disease_id" => 4,
    "symptom_id" => 6,
    ],
    [
    "disease_id" => 4,
    "symptom_id" => 7,
    ],
    [
    "disease_id" => 4,
    "symptom_id" => 8,
    ],
    [
    "disease_id" => 5,
    "symptom_id" => 6,
    ],
    [
    "disease_id" => 5,
    "symptom_id" => 7,
    ],
    [
    "disease_id" => 5,
    "symptom_id" => 8,
    ],
    [
    "disease_id" => 5,
    "symptom_id" => 9,
    ],
    [
    "disease_id" => 6,
    "symptom_id" => 10,
    ],
    [
    "disease_id" => 7,
    "symptom_id" => 11,
    ],
    [
    "disease_id" => 7,
    "symptom_id" => 12,
    ],
    [
    "disease_id" => 8,
    "symptom_id" => 13,
    ],
    [
    "disease_id" => 9,
    "symptom_id" => 14,
    ],
    [
    "disease_id" => 10,
    "symptom_id" => 15,
    ],
    [
    "disease_id" => 11,
    "symptom_id" => 16,
    ],
    [
    "disease_id" => 12,
    "symptom_id" => 17,
    ],
    [
    "disease_id" => 13,
    "symptom_id" => 18,
    ]
    ];


    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        foreach ($this->data as $data)
        {
            \App\Models\Symptom::create([
                'description' => $data,
            ]);
        }

        foreach ($this->disease as $disease)
        {
            \App\Models\DiseaseSymptom::create([
                'disease_id' => $disease['disease_id'],
                'symptom_id' => $disease['symptom_id'],
            ]);
        }
    }
}
