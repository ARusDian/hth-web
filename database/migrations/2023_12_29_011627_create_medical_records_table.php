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
        Schema::create('medical_records', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text("address");
            $table->date("date_of_birth");
            $table->string("NIK");
            $table->enum("gender",["L","P"]);
            $table->string("race")->nullable();
            $table->string("occupation");
            $table->string("phone_number");
            $table->string("family_phone_number")->nullable();
            $table->text("main_complaint");
            $table->text("additional_complaint")->nullable();
            $table->enum("blood_type",["A","B","AB","O"])->nullable();
            $table->string("blood_pressure");
            $table->integer("pulse");
            $table->integer("body_temperature");
            $table->boolean("is_respiratory_congestion");
            $table->boolean("is_heart_disease");
            $table->boolean("is_diabetes");
            $table->boolean("is_hemophilia");
            $table->boolean("is_hepatitis");
            $table->boolean("is_mag");
            $table->text("another_disease")->nullable();
            $table->text("food_allergy")->nullable();
            $table->text("drug_allergy")->nullable();
            $table->json('symptoms_arr');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('medical_records');
    }
};
