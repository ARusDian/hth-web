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
        Schema::create('periodontal_tissues', function (Blueprint $table) {
            $table->id();
            $table->foreignId('medical_record_id')->constrained('medical_records');
            $table->string('tooth_number');
            $table->string('location');
            // pocket
            $table->string('pocket_true');
            $table->string('pocket_false');
            $table->string('pocket_depth');
            // inflammation
            $table->string('inflammation_rubor');
            $table->string('inflammation_tumor');
            $table->string('inflammation_kolor');
            $table->string('inflammation_dolor');
            $table->string('inflammation_functio_laesa');
            // attachment
            $table->string('attachment_normal');
            $table->string('attachment_decline');

            $table->string('PUS');
            $table->string('other');
            $table->string('problem');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('periodontal_tissues');
    }
};
