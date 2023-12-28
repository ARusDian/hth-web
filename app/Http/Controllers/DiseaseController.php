<?php

namespace App\Http\Controllers;

use App\Models\Disease;
use App\Models\Reason;
use App\Models\Symptom;
use App\Models\Treatment;
use Illuminate\Http\Request;

class DiseaseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //
        // $reasons = Reason::whereColumns($request->get('columnFilters'))->paginate($request->get('perPage') ?? 10);

        $diseases = Disease::with([
            "reasons",
            "symptoms",
            "subDiseases.treatments",
            "treatments",
            ])
            ->whereColumns($request->get('columnFilters'))->paginate($request->get('perPage') ?? 10);

        return inertia('Admin/Disease/Index', [
            'diseases' => $diseases,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $reasons = Reason::all();
        $symptoms = Symptom::all();
        $treatments = Treatment::all();

        return inertia('Admin/Disease/Create', [
            'reasons' => $reasons,
            'symptoms' => $symptoms,
            'treatments' => $treatments,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        dd($request->all());

        $request->validate([
            'name' => 'required',
            'problem' => 'required',
            'diagnosis' => 'required',
            'reasons' => 'array|required',
            'symptoms' => 'array|required',
            'treatments' => 'array|nullable',
        ]);

        $disease = Disease::create([
            'name' => $request->name,
            'problem' => $request->problem,
            'diagnosis' => $request->diagnosis,
        ]);

        $disease->reasons()->sync(array_map(function ($reason) {
            return $reason['id'];
        }, $request->reasons));

        $disease->symptoms()->sync(array_map(function ($symptom) {
            return $symptom['id'];
        }, $request->symptoms));

        $disease->treatments()->sync(array_map(function ($treatment) {
            return $treatment['id'];
        }, $request->treatments));

        return redirect()->route('disease.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Disease $disease)
    {
        //

        $disease->load([
            "reasons",
            "symptoms",
            "subDiseases.treatments",
            "treatments",
            ]);

        return inertia('Admin/Disease/Show', [
            'disease' => $disease,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Disease $disease)
    {
        //
        $reasons = Reason::all();
        $symptoms = Symptom::all();
        $treatments = Treatment::all();

        $disease->load([
            "reasons",
            "symptoms",
            "treatments",
            ]);


        return inertia('Admin/Disease/Edit', [
            'disease' => $disease,
            'reasons' => $reasons,
            'symptoms' => $symptoms,
            'treatments' => $treatments,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Disease $disease)
    {
        //


        $request->validate([
            'name' => 'required',
            'problem' => 'required',
            'diagnosis' => 'required',
            'reasons' => 'array|required',
            'symptoms' => 'array|required',
            'treatments' => 'array|nullable',
        ]);

        $disease->update([
            'name' => $request->name,
            'problem' => $request->problem,
            'diagnosis' => $request->diagnosis,
        ]);

        $disease->reasons()->sync(array_map(function ($reason) {
            return $reason['id'];
        }, $request->reasons));

        $disease->symptoms()->sync(array_map(function ($symptom) {
            return $symptom['id'];
        }, $request->symptoms));

        $disease->treatments()->sync(array_map(function ($treatment) {
            return $treatment['id'];
        }, $request->treatments));

        return redirect()->route('disease.show', $disease->id);


    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Disease $disease)
    {
        //

        $disease->delete();

        return redirect()->route('disease.index');
    }
}
