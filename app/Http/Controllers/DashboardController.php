<?php

namespace App\Http\Controllers;

use App\Models\Disease;
use Inertia\Inertia;

class DashboardController extends Controller
{
    //
    public function index()
    {

        return Inertia::render('Admin/Dashboard', [
        ]);
    }

    public function guide()
    {
        dd(Disease::all());
    }
}
