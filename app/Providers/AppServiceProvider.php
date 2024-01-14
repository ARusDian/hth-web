<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        if ($this->app->environment('production'))
        {
            \URL::forceScheme('https');
        }
        else
        {
            \URL::forceScheme('http');
            $this->app->register('Barryvdh\Debugbar\ServiceProvider');
        }
    }
}
