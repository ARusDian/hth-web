<?php

namespace App\Http\Controllers;

use App\Models\MedicalRecord;
use App\Models\Symptom;
use Illuminate\Http\Request;

class MedicalRecordController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //
        $medical_records = MedicalRecord::whereColumns($request->get('columnFilters'))->paginate($request->get('perPage') ?? 10);

        return inertia('Admin/MedicalRecord/Index', [
            'medical_records' => $medical_records,
        ]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $symptoms = Symptom::all();

        return inertia('Admin/MedicalRecord/Create', [
            'symptoms' => $symptoms,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //

        $request->validate([
        'name' => 'required|string',
        'address' => 'required|string',
        'date_of_birth' => 'required|date',
        'NIK' => 'required|string',
        'gender' => 'required|in:L,P',
        'race' => 'required|string',
        'occupation' => 'required|string',
        'phone_number' => 'required|string',
        'family_phone_number' => 'nullable|string',
        'main_complaint' => 'required|string',
        'additional_complaint' => 'nullable|string',
        'blood_type' => 'nullable|in:A,B,AB,O',
        'blood_pressure' => 'required|string',
        'pulse' => 'required|integer',
        'body_temperature' => 'required|integer',
        'is_respiratory_congestion' => 'required|boolean',
        'is_heart_disease' => 'required|boolean',
        'is_diabetes' => 'required|boolean',
        'is_hemophilia' => 'required|boolean',
        'is_hepatitis' => 'required|boolean',
        'is_mag' => 'required|boolean',
        'another_disease' => 'nullable|string',
        'food_allergy' => 'nullable|string',
        'drug_allergy' => 'nullable|string',
        'symptoms_arr' => 'array',
        ]);

        $symptoms = Symptom::with('diseases')->whereIn('id', $request->symptoms_arr)->get();

        $diseases = $symptoms->map(function ($item)
        {
            return $item->diseases;
        })->flatten()->unique();

        $request->merge([
            'diseases' => $diseases->map(function ($item)
            {
                return $item->id;
            }),
        ]);


        $medical_record = MedicalRecord::create($request->all());

        $medical_record->diseases()->attach($request->diseases);

        return redirect()->route('medical-record.index')->banner('Medical Record created.');
    }

    /**
     * Display the specified resource.
     */
    public function show(MedicalRecord $medicalRecord)
    {
        //

        $medicalRecord->load(['diseases.treatments', 'diseases.subDiseases.treatments']);

        $medicalRecord->symptoms = Symptom::with('diseases')->whereIn('id',$medicalRecord->symptoms_arr)->get();

        $medicalRecord->treatments = $medicalRecord->diseases->map(function ($item)
        {
            $treatments = [];
            $item->subDiseases->each(function ($subDisease) use (&$treatments)
            {
                $treatments = array_merge($treatments, $subDisease->treatments->toArray());
            });
            return array_merge($treatments, $item->treatments->toArray());
        });

        $treatments = [];

        $medicalRecord->treatments->each(function ($item) use (&$treatments)
        {
            $treatments = array_merge($treatments, $item);
        });

        $medicalRecord->treatments = collect($treatments)->unique('id')->values();

        return inertia('Admin/MedicalRecord/Show', [
            'medical_record' => $medicalRecord,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(MedicalRecord $medicalRecord)
    {
        //

        $symptoms = Symptom::all();

        $medicalRecord->symptoms = Symptom::with('diseases')->whereIn('id', $medicalRecord->symptoms_arr)->get();

        return inertia('Admin/MedicalRecord/Edit', [
            'medical_record' => $medicalRecord,
            'symptoms' => $symptoms,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, MedicalRecord $medicalRecord)
    {
        //

        $request->validate([
        'name' => 'required|string',
        'address' => 'required|string',
        'date_of_birth' => 'required|date',
        'NIK' => 'required|string',
        'gender' => 'required|in:L,P',
        'race' => 'required|string',
        'occupation' => 'required|string',
        'phone_number' => 'required|string',
        'family_phone_number' => 'nullable|string',
        'main_complaint' => 'required|string',
        'additional_complaint' => 'nullable|string',
        'blood_type' => 'nullable|in:A,B,AB,O',
        'blood_pressure' => 'required|string',
        'pulse' => 'required|integer',
        'body_temperature' => 'required|integer',
        'is_respiratory_congestion' => 'required|boolean',
        'is_heart_disease' => 'required|boolean',
        'is_diabetes' => 'required|boolean',
        'is_hemophilia' => 'required|boolean',
        'is_hepatitis' => 'required|boolean',
        'is_mag' => 'required|boolean',
        'another_disease' => 'nullable|string',
        'food_allergy' => 'nullable|string',
        'drug_allergy' => 'nullable|string',
        'symptoms_arr' => 'array',
        ]);

        $symptoms = Symptom::with('diseases')->whereIn('id', $request->symptoms_arr)->get();

        $diseases = $symptoms->map(function ($item)
        {
            return $item->diseases;
        })->flatten()->unique();

        $request->merge([
            'diseases' => $diseases->map(function ($item)
            {
                return $item->id;
            }),
        ]);

        $medicalRecord->update($request->all());

        $medicalRecord->diseases()->sync($request->diseases);

        return redirect()->route('medical-record.index')->banner('Medical Record updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MedicalRecord $medicalRecord)
    {
        //
    }
}
