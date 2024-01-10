<?php

namespace App\Http\Controllers;

use App\Models\Treatment;
use Illuminate\Http\Request;

class TreatmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //
        $treatments = Treatment::whereColumns($request->get('columnFilters'))->paginate($request->get('perPage') ?? 10);
        return inertia('Admin/Treatment/Index', [
            'treatments' => $treatments,
        ]);
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return inertia('Admin/Treatment/Create');
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

        Treatment::create($request->all());

        return redirect()->route('treatment.index')->banner('Data Perawatan berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(Treatment $treatment)
    {
        //

        return inertia('Admin/Treatment/Show', [
            'treatment' => $treatment,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Treatment $treatment)
    {
        //

        return inertia('Admin/Treatment/Edit', [
            'treatment' => $treatment,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Treatment $treatment)
    {
        //

        $request->validate([
            'description' => 'required',
        ]);

        $treatment->update($request->all());

        return redirect()->route('treatment.index')->banner('Data Perawatan berhasil diubah');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Treatment $treatment)
    {
        //
        $treatment->delete();

        return redirect()->route('treatment.index')->banner('Data Perawatan berhasil dihapus');
    }
}
