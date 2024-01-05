<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubDiseaseSeeder extends Seeder
{

    protected $data = [
    [
    "disease_id" => 1,
    "name" => "Kelas 1 (Karies pada bagian Oklusal gigi posterior dan palatal atau lingual gigi anterior)",
    ],
    [
    "disease_id" => 1,
    "name" => "Kelas 2 (Karies pada bagian mesial dan distal gigi posterior)"
    ],
    [
    "disease_id" => 1,
    "name" => "Kelas 3 (Karies pada bagian mesial dan distal yang tidak mengenai tepi insisal gigi anterior)"
    ],
    [
    "disease_id" => 1,
    "name" => "Kelas 4 (Karies pada bagian mesial dan distal yang sampai mengenai tepi insisal gigi anterior)"
    ],
    [
    "disease_id" => 1,
    "name" => "Kelas 5 (Karies pada sepertiga servikal semua gigi)"
    ],
    [
    "disease_id" => 1,
    "name" => "Kelas 6 (Karies pada bagian puncak tonjol/cups semua gigi)"
    ],
    [
    "disease_id" => 2,
    "name" => "Kelas 1 (Karies pada bagian Oklusal gigi posterior dan palatal atau lingual gigi anterior)",
    ],
    [
    "disease_id" => 2,
    "name" => "Kelas 2 (Karies pada bagian mesial dan distal gigi posterior)"
    ],
    [
    "disease_id" => 2,
    "name" => "Kelas 3 (Karies pada bagian mesial dan distal yang tidak mengenai tepi insisal gigi anterior)"
    ],
    [
    "disease_id" => 2,
    "name" => "Kelas 4 (Karies pada bagian mesial dan distal yang sampai mengenai tepi insisal gigi anterior)"
    ],
    [
    "disease_id" => 2,
    "name" => "Kelas 5 (Karies pada sepertiga servikal semua gigi)"
    ],
    [
    "disease_id" => 2,
    "name" => "Kelas 6 (Karies pada bagian puncak tonjol/cups semua gigi)"
    ],
    [
    "disease_id" => 3,
    "name" => "Kelas 1 (Karies pada bagian Oklusal gigi posterior dan palatal atau lingual gigi anterior)",
    ],
    [
    "disease_id" => 3,
    "name" => "Kelas 2 (Karies pada bagian mesial dan distal gigi posterior)"
    ],
    [
    "disease_id" => 3,
    "name" => "Kelas 3 (Karies pada bagian mesial dan distal yang tidak mengenai tepi insisal gigi anterior)"
    ],
    [
    "disease_id" => 3,
    "name" => "Kelas 4 (Karies pada bagian mesial dan distal yang sampai mengenai tepi insisal gigi anterior)"
    ],
    [
    "disease_id" => 3,
    "name" => "Kelas 5 (Karies pada sepertiga servikal semua gigi)"
    ],
    [
    "disease_id" => 3,
    "name" => "Kelas 6 (Karies pada bagian puncak tonjol/cups semua gigi)"
    ],
    [
    "disease_id" => 4,
    "name" => "Kelas 1 (Karies pada bagian Oklusal gigi posterior dan palatal atau lingual gigi anterior)",
    ],
    [
    "disease_id" => 4,
    "name" => "Kelas 2 (Karies pada bagian mesial dan distal gigi posterior)"
    ],
    [
    "disease_id" => 4,
    "name" => "Kelas 3 (Karies pada bagian mesial dan distal yang tidak mengenai tepi insisal gigi anterior)"
    ],
    [
    "disease_id" => 4,
    "name" => "Kelas 4 (Karies pada bagian mesial dan distal yang sampai mengenai tepi insisal gigi anterior)"
    ],
    [
    "disease_id" => 4,
    "name" => "Kelas 5 (Karies pada sepertiga servikal semua gigi)"
    ],
    [
    "disease_id" => 4,
    "name" => "Kelas 6 (Karies pada bagian puncak tonjol/cups semua gigi)"
    ],
    [
    "disease_id" => 5,
    "name" => "Mobilitas 1",
    ],
    [
    "disease_id" => 5,
    "name" => "Mobilitas 2",
    ],
    [
    "disease_id" => 5,
    "name" => "Mobilitas 3",
    ],
    [
    "disease_id" => 5,
    "name" => "Mobilitas 4",
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
            \App\Models\SubDisease::create($data);
        }
    }
}
