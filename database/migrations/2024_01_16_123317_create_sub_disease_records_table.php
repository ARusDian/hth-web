<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sub_disease_records', function (Blueprint $table) {
            $table->id();
            $table->foreignId("disease_record_id")->constrained("disease_records")->cascadeOnDelete();
            $table->foreignId("sub_disease_id")->constrained("sub_diseases")->cascadeOnDelete();
            $table->json("region")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sub_disease_records');
    }
};
