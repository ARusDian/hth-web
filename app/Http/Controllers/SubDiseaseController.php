<?php

namespace App\Http\Controllers;

use App\Models\Disease;
use App\Models\SubDisease;
use App\Models\Treatment;
use Illuminate\Http\Request;

class SubDiseaseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //
        $sub_diseases = SubDisease::with("disease")->whereColumns($request->get('columnFilters'))->paginate($request->get('perPage') ?? 10);

        return inertia('Admin/SubDisease/Index', [
            'sub_diseases' => $sub_diseases,
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $diseases = Disease::all();
        $treatments = Treatment::all();

        return inertia('Admin/SubDisease/Create', [
            'diseases' => $diseases,
            'treatments' => $treatments,
        ]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'name' => 'required',
            'disease.id' => 'required',
        ]);

        $sub_disease = SubDisease::create(
            [
                'name' => $request->name,
                'disease_id' => $request->disease['id'],
            ]
        );

        $sub_disease->treatments()->sync(array_map(function ($item)
        {
            return $item['id'];
        }, $request->treatments));

        return redirect()->route('sub-disease.index')->banner('Data Sub Penyakit berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(SubDisease $subDisease)
    {
        //
        $subDisease->load('disease.symptoms', 'disease.reasons', 'treatments');
        return inertia('Admin/SubDisease/Show', [
            'sub_disease' => $subDisease,
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SubDisease $subDisease)
    {
        //
        $diseases = Disease::all();
        $treatments = Treatment::all();

        $subDisease->load('disease', 'treatments');

        return inertia('Admin/SubDisease/Edit', [
            'sub_disease' => $subDisease,
            'diseases' => $diseases,
            'treatments' => $treatments,
        ]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SubDisease $subDisease)
    {
        //

        $request->validate([
            'name' => 'required',
            'disease_id' => 'required',
        ]);

        $subDisease->update($request->all());

        $subDisease->treatments()->sync(array_map(function ($item)
        {
            return $item['id'];
        }, $request->treatments));

        return redirect()->route('sub-disease.index')->banner('Data Sub Penyakit berhasil diubah.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SubDisease $subDisease)
    {
        //

        $subDisease->delete();

        return redirect()->route('sub-disease.index')->banner('Data Sub Penyakit berhasil dihapus.');
    }
}
