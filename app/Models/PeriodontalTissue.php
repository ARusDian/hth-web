<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PeriodontalTissue extends Model
{
    use HasFactory;

    protected $fillable = [
        'medical_record_id',
        'tooth_number',
        'location',
        'pocket_true',
        'pocket_false',
        'pocket_depth',
        'inflammation_rubor',
        'inflammation_tumor',
        'inflammation_kolor',
        'inflammation_dolor',
        'inflammation_functio_laesa',
        'attachment_normal',
        'attachment_decline',
        'PUS',
        'other',
        'problem'
    ];
}
