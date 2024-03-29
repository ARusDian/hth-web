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
        Schema::create('disease_records', function (Blueprint $table) {
            $table->id();
            $table->foreignId("medical_record_id")->constrained("medical_records")->cascadeOnDelete();
            $table->foreignId("disease_id")->constrained("diseases")->cascadeOnDelete();
            $table->json("region")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('disease_records');
    }
};
