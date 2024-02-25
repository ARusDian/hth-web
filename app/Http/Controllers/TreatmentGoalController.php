<?php

namespace App\Http\Controllers;

use App\Models\TreatmentGoal;
use Illuminate\Http\Request;

class TreatmentGoalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //

        $treatment_goals = TreatmentGoal::whereColumns($request->get('columnFilters'))->paginate($request->get('perPage') ?? 10);

        return inertia('Admin/TreatmentGoal/Index', [
            'treatment_goals' => $treatment_goals,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //

        return inertia('Admin/TreatmentGoal/Create');
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

        TreatmentGoal::create($request->all());

        return redirect()->route('treatment-goal.index')->banner('Data Tujuan Terapi berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(TreatmentGoal $treatment_goal)
    {
        //

        return inertia('Admin/TreatmentGoal/Show', [
            'treatment_goal' => $treatment_goal,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TreatmentGoal $treatment_goal)
    {
        //

        return inertia('Admin/TreatmentGoal/Edit', [
            'treatment_goal' => $treatment_goal,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TreatmentGoal $treatment_goal)
    {
        //

        $request->validate([
            'name' => 'required',
        ]);

        $treatment_goal->update($request->all());

        return redirect()->route('treatment-goal.index')->banner('Data Tujuan Terapi berhasil diubah');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TreatmentGoal $treatment_goal)
    {
        //

        $treatment_goal->delete();

        return redirect()->route('treatment-goal.index')->banner('Data Tujuan Terapi berhasil dihapus');
    }
}
