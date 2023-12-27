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
        
    }
}
