<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use HasRoles;
    use Notifiable;
    use TwoFactorAuthenticatable;
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
    'name',
    'email',
    'phone_number',
    'password',
    'active_year',
    'profile_photo_path',
    'gender',
    'address',
    ];

    protected $allowed = [
    'name',
    'email',
    'phone_number',
    'active_year',
    'roles.name',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
    'password',
    'remember_token',
    'two_factor_recovery_codes',
    'two_factor_secret',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
    'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['profile_photo_url'];

    public function isAdmin()
    {
        return $this->hasAnyRole(['admin', 'super-admin']);
    }

    public function scopeWhereColumns($query, $filters)
    {
        if (isset($filters))
        {
            foreach (json_decode($filters) as $value)
            {
                $key = explode('.', $value->id);

                if (!in_array($value->id, $this->allowed))
                {
                    continue;
                }

                if (count($key) > 1)
                {
                    $query->whereHas($key[0], function ($query) use ($value, $key, )
                    {
                        return $query->where(
                            $key[1],
                            'like',
                            '%' . $value->value . '%',
                        );
                    });
                }
                else
                {
                    $query->where($value->id, 'like', "%{$value->value}%");
                }
            }
        }
    }
}
