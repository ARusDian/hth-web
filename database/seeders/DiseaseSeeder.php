<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DiseaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    protected $data = [
    [
    "name" => "KME",
    "problem" => "Lubang gigi KME",
    "diagnosis" => "Tidak terpenuhinya kondisi biologis gigi geligi yang baik sehubungan adanya karies mencapai email",
    ],
    [
    "name" => "KMD",
    "problem" => "Lubang gigi KMD",
    "diagnosis" => "Tidak terpenuhinya kondisi biologis gigi geligi yang baik sehubungan adanya karies mencapai dentin",
    ],
    [
    "name" => "KMP Vital",
    "problem" => "Lubang gigi KMP Vital",
    "diagnosis" => "Tidak terpenuhinya kebutuhan akan bebas dari rasa nyeri pada kepala dan leher sehubungan dengan adanya karies mencapai pulpa",
    ],
    [
    "name" => "KMP Non Vital",
    "problem" => "Lubang gigi KMP Non Vital",
    "diagnosis" => "Tidak terpenuhinya kebutuhan akan bebas dari rasa cemas/stress sehubungan dengan adanya gigi mobility",
    ],
    [
    "name" => "KMP Non Vital disertai Mobility",
    "problem" => "Lubang gigi KMP Non Vital disertai Mobility",
    "diagnosis" => "Tidak terpenuhinya kebutuhan akan bebas dari rasa cemas/stress sehubungan dengan karies mencapai pulpa disertai mobilty",
    ],
    [
    "name" => "Kalkulus pada gigi posterior/seluruh permukaan gigi",
    "problem" => "Penumpukan kalkulus",
    "diagnosis" => "Tidak terpenuhinya kebutuhan untuk bertanggung jawab akan kesehatan gigi dan mulut sehubungan dengan adanya kalkulus",
    ],
    [
    "name" => "Kalkulus pada gigi anterior",
    "problem" => "Penumpukan kalkulus",
    "diagnosis" => "Tidak terpenuhinya kebutuhan akan kesan wajah yang sehat sehubungan dengan adanya kalkulus pada gigi anterior",
    ],
    [
    "name" => "Pit dan fissure yang dalam dan sempit",
    "problem" => "Pit dan fissure yang dalam dan sempit",
    "diagnosis" => "Tidak terpenuhinya keutuhan akan perlindungan dari resiko penyakit gigi dan mulut sehubungan dengan adanya pit dan fissure yang dalam dan sempit",
    ],
    [
    "name" => "Persistensi",
    "problem" => "Persistensi",
    "diagnosis" => "Tidak terpenuhinya kondisi biologis gigi geligi yang baik sehubungan dengan persistensi",
    ],
    ];

    public function run(): void
    {
        //

        foreach ($this->data as $data)
        {
            \App\Models\Disease::create($data);
        }
    }
}
