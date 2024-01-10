<?php

namespace App\Http\Controllers;

use App\Models\Reason;
use Illuminate\Http\Request;

class ReasonController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //
        $reasons = Reason::whereColumns($request->get('columnFilters'))->paginate($request->get('perPage') ?? 10);

        return inertia('Admin/Reason/Index', [
            'reasons' => $reasons,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //

        return inertia('Admin/Reason/Create');
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

        Reason::create($request->all());

        return redirect()->route('reason.index')->banner('Data Penyebab Masalah berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(Reason $reason)
    {
        //

        return inertia('Admin/Reason/Show', [
            'reason' => $reason,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Reason $reason)
    {
        //

        return inertia('Admin/Reason/Edit', [
            'reason' => $reason,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Reason $reason)
    {
        //

        $request->validate([
            'description' => 'required',
        ]);

        $reason->update($request->all());

        return redirect()->route('reason.index')->banner('Data Penyebab Masalah berhasil diubah');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Reason $reason)
    {
        //

        $reason->delete();

        return redirect()->route('reason.index')->banner('Data Penyebab Masalah berhasil dihapus');
    }
}
