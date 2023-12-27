<?php

namespace App\Http\Controllers;

use App\Models\Symptom;
use Illuminate\Http\Request;

class SymptomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //

        $symptoms = Symptom::whereColumns($request->get('columnFilters'))->paginate($request->get('perPage') ?? 10);
        return inertia('Admin/Symptom/Index', [
            'symptoms' => $symptoms,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return inertia('Admin/Symptom/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'description' => 'required',
        ]);

        Symptom::create($request->all());

        return redirect()->route('symptom.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Symptom $symptom)
    {
        //
        return inertia('Admin/Symptom/Show', [
            'symptom' => $symptom,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Symptom $symptom)
    {
        //
        return inertia('Admin/Symptom/Edit', [
            'symptom' => $symptom,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Symptom $symptom)
    {
        //
        $request->validate([
            'description' => 'required',
        ]);

        $symptom->update($request->all());

        return redirect()->route('symptom.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Symptom $symptom)
    {
        //

        $symptom->delete();
    }
}
