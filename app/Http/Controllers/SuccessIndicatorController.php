<?php

namespace App\Http\Controllers;

use App\Models\SuccessIndicator;
use Illuminate\Http\Request;

class SuccessIndicatorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //
        $success_indicators = SuccessIndicator::whereColumns($request->get('columnFilters'))->paginate($request->get('perPage') ?? 10);

        return inertia('Admin/SuccessIndicator/Index', [
            'success_indicators' => $success_indicators,
        ]);
        

    }
    
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        
        return inertia('Admin/SuccessIndicator/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //

        $request->validate([
            'name' => 'required',
        ]);

        SuccessIndicator::create($request->all());

        return redirect()->route('success-indicator.index')->banner('Data Indikator Keberhasilan berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(SuccessIndicator $success_indicator)
    {
        //

        return inertia('Admin/SuccessIndicator/Show', [
            'success_indicator' => $success_indicator,
        ]);
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SuccessIndicator $success_indicator)
    {
        //

        return inertia('Admin/SuccessIndicator/Edit', [
            'success_indicator' => $success_indicator,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SuccessIndicator $success_indicator)
    {
        //

        $request->validate([
            'name' => 'required',
        ]);

        $success_indicator->update($request->all());

        return redirect()->route('success-indicator.index')->banner('Data Indikator Keberhasilan berhasil diubah');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SuccessIndicator $success_indicator)
    {
        //

        $success_indicator->delete();

        return redirect()->route('success-indicator.index')->banner('Data Indikator Keberhasilan berhasil dihapus');
        
    }
}
