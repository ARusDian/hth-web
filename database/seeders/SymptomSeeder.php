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
    }
}
