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
        "Penumpukan Plak",
        "Mengunyah satu sisi",
        "Gigi yang baru tumbuh dengan bentuk anatomi pit dan fissure yang dalam dan sempit",
        "Reasorbsi akar secara fisiologis",
        "Pengetahuan perkembangan gigi masih rendah",
    ];

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        foreach ($this->data as $reason) {
            \App\Models\Reason::create([
                'description' => $reason,
            ]);
        }
    }
}
