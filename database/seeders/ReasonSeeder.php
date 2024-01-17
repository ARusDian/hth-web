<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReasonSeeder extends Seeder
{
    protected $data = [
    "Plak",
    "Kebiasaan makan makanan kariogenik",
    "Perilaku menyikat gigi tidak tepat",
    "Karies yang tidak segera dirawat",
    "Proses alamiah waktunya erupsi gigi",
    "Mengunyah satu sisi",
    "Gigi yang baru tumbuh dengan bentuk anatomi pit dan fissure yang dalam dan sempit",
    "Reasorbsi akar secara fisiologis",
    "Pengetahuan perkembangan gigi masih rendah",
    ];

    protected $disease = [
    [
    "disease_id" => 1,
    "reason_id" => 1,
    ],
    [
    "disease_id" => 1,
    "reason_id" => 2,
    ],
    [
    "disease_id" => 1,
    "reason_id" => 3,
    ],
    [
    "disease_id" => 2,
    "reason_id" => 1,
    ],
    [
    "disease_id" => 2,
    "reason_id" => 2,
    ],
    [
    "disease_id" => 2,
    "reason_id" => 3,
    ],
    [
    "disease_id" => 3,
    "reason_id" => 1,
    ],
    [
    "disease_id" => 3,
    "reason_id" => 2,
    ],
    [
    "disease_id" => 3,
    "reason_id" => 3,
    ],
    [
    "disease_id" => 3,
    "reason_id" => 4,
    ],
    [
    "disease_id" => 4,
    "reason_id" => 1,
    ],
    [
    "disease_id" => 4,
    "reason_id" => 2,
    ],
    [
    "disease_id" => 4,
    "reason_id" => 3,
    ],
    [
    "disease_id" => 4,
    "reason_id" => 4,
    ],
    [
    "disease_id" => 5,
    "reason_id" => 1,
    ],
    [
    "disease_id" => 5,
    "reason_id" => 2,
    ],
    [
    "disease_id" => 5,
    "reason_id" => 3,
    ],
    [
    "disease_id" => 5,
    "reason_id" => 4,
    ],
    [
    "disease_id" => 5,
    "reason_id" => 5,
    ],
    [
    "disease_id" => 5,
    "reason_id" => 8,
    ],
    [
    "disease_id" => 6,
    "reason_id" => 1,
    ],
    [
    "disease_id" => 6,
    "reason_id" => 2,
    ],
    [
    "disease_id" => 6,
    "reason_id" => 3,
    ],
    [
    "disease_id" => 6,
    "reason_id" => 6,
    ],
    [
    "disease_id" => 7,
    "reason_id" => 1,
    ],
    [
    "disease_id" => 7,
    "reason_id" => 2,
    ],
    [
    "disease_id" => 7,
    "reason_id" => 3,
    ],
    [
    "disease_id" => 8,
    "reason_id" => 7,
    ],
    [
    "disease_id" => 9,
    "reason_id" => 9,
    ],
    ];

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        foreach ($this->data as $reason)
        {
            \App\Models\Reason::create([
                'description' => $reason,
            ]);
        }

        foreach ($this->disease as $reason)
        {
            \App\Models\DiseaseReason::create([
                'disease_id' => $reason['disease_id'],
                'reason_id' => $reason['reason_id'],
            ]);
        }
    }
}
