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
            $table->string("place_of_birth");
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
            $table->boolean("is_symetric_face");

            $table->json('spleen_gland');

            $table->json('odontogram');
            $table->json('hard_tissue_abnormalities');

            // Teeth Abnormalities
            $table->boolean("is_teeth_shape_normal");
            $table->boolean("is_teeth_amount_normal");
            $table->boolean("is_teeth_color_normal");
            $table->boolean("is_teeth_position_normal");
            $table->boolean("is_teeth_size_normal");

            // Teeth Anomalies
            $table->enum("occlusion",["Normal Bite","Cross Bite","Steep Bite"]);
            $table->boolean("is_teeth_shape_anomaly");
            $table->boolean("is_teeth_color_anomaly");
            $table->boolean("is_teeth_position_anomaly");
            $table->boolean("is_teeth_size_anomaly");
            $table->boolean("is_teeth_structure_anomaly");

            // Mouth Mucosa
            $table->json('mucose_tongue');
            $table->json('mucose_cheek');
            $table->json('mucose_palatum');
            $table->json('mucose_gingiva');
            $table->json('mucose_lips');

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
