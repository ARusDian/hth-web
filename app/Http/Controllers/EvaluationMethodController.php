<?php

namespace App\Http\Controllers;

use App\Models\EvaluationMethod;
use Illuminate\Http\Request;

class EvaluationMethodController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //
        $evaluation_methods = EvaluationMethod::whereColumns($request->get('columnFilters'))->paginate($request->get('perPage') ?? 10);

        return inertia('Admin/EvaluationMethod/Index', [
            'evaluation_methods' => $evaluation_methods,
        ]);


    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //

        return inertia('Admin/EvaluationMethod/Create');
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

        EvaluationMethod::create($request->all());

        return redirect()->route('evaluation-method.index')->banner('Data Metode Evaluasi berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(EvaluationMethod $evaluation_method)
    {
        //

        return inertia('Admin/EvaluationMethod/Show', [
            'evaluation_method' => $evaluation_method,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(EvaluationMethod $evaluation_method)
    {
        //

        return inertia('Admin/EvaluationMethod/Edit', [
            'evaluation_method' => $evaluation_method,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, EvaluationMethod $evaluation_method)
    {
        //

        $request->validate([
            'name' => 'required',
        ]);

        $evaluation_method->update($request->all());

        return redirect()->route('evaluation-method.index')->banner('Data Metode Evaluasi berhasil diubah');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //

        $evaluation_method = EvaluationMethod::find($id);

        $evaluation_method->delete();

        return redirect()->route('evaluation-method.index')->banner('Data Metode Evaluasi berhasil dihapus');
    }
}

