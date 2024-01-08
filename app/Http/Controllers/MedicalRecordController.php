<?php

namespace App\Http\Controllers;

use App\Models\Disease;
use App\Models\DiseaseRecord;
use App\Models\MedicalRecord;
use App\Models\Symptom;
use Illuminate\Http\Request;
use PDF;

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
        'place_of_birth' => 'required|string',
        'date_of_birth' => 'required|date',
        'NIK' => 'required|string',
        'gender' => 'required|in:L,P',
        'race' => 'nullable|string',
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
        })->flatten()->unique('id')->values();

        $medical_record = MedicalRecord::create($request->all());

        $medical_record->diseaseRecords()->createMany($diseases->map(function ($item)
        {
            return [
                'disease_id' => $item->id,
            ];
        }));


        return redirect()->route('medical-record.index')->banner('Medical Record created.');
    }

    /**
     * Display the specified resource.
     */
    public function show(MedicalRecord $medicalRecord)
    {
        //

        $medicalRecord->load(['diseaseRecords.disease.treatments', 'diseaseRecords.disease.subDiseases', 'diseaseRecords.subDisease.treatments']);

        $medicalRecord->symptoms = Symptom::with('diseases')->whereIn('id', $medicalRecord->symptoms_arr)->get();

        $diseases = $medicalRecord->diseaseRecords->map(function ($item)
        {
            return $item->disease;
        });

        $sub_diseases = $medicalRecord->diseaseRecords->map(function ($item)
        {
            return $item->subDisease;
        });

        $medicalRecord->treatments = $diseases->map(function ($item)
        {
            return $item->treatments;
        })->flatten()->merge($sub_diseases->map(function ($item)
        {
            return $item->treatments ?? [];
        })->flatten())->unique('id')->values();

        return inertia('Admin/MedicalRecord/Show', [
            'medical_record' => $medicalRecord,
        ]);
    }

    public function exportPDF(MedicalRecord $medicalRecord)
    {
        $medicalRecord->load(['diseaseRecords.disease.treatments', 'diseaseRecords.disease.subDiseases', 'diseaseRecords.subDisease.treatments']);

        $medicalRecord->symptoms = Symptom::with('diseases')->whereIn('id', $medicalRecord->symptoms_arr)->get();

        $diseases = $medicalRecord->diseaseRecords->map(function ($item)
        {
            return $item->disease;
        });

        $sub_diseases = $medicalRecord->diseaseRecords->map(function ($item)
        {
            return $item->subDisease;
        });

        $medicalRecord->treatments = $diseases->map(function ($item)
        {
            return $item->treatments;
        })->flatten()->merge($sub_diseases->map(function ($item)
        {
            return $item->treatments ?? [];
        })->flatten())->unique('id')->values();
        

        $medicalRecord->reasons = $diseases->map(function ($item)
        {
            return $item->reasons;
        })->flatten()->unique('id')->values();

        $pdf = PDF::loadView('exports.exportMedicalRecord', [
            'medicalRecord' => $medicalRecord,
        ]);

        return $pdf->download('medical-record.pdf');
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
        'place_of_birth' => 'required|string',
        'date_of_birth' => 'required|date',
        'NIK' => 'required|string',
        'gender' => 'required|in:L,P',
        'race' => 'nullable|string',
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

        $medicalRecord->update($request->all());

        $medicalRecord->diseaseRecords()->whereNotIn('disease_id', $diseases->pluck('id'))->delete();

        $diseases->each(function ($item) use ($medicalRecord)
        {
            $medicalRecord->diseaseRecords()->updateOrCreate([
                'disease_id' => $item->id,
            ], [
                'disease_id' => $item->id,
            ]);
        });


        return redirect()->route('medical-record.show', $medicalRecord)->banner('Medical Record updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MedicalRecord $medicalRecord)
    {
        //
        $medicalRecord->delete();

        return redirect()->route('medical-record.index')->banner('Medical Record deleted.');
    }

    public function selectSubDisesase(
        $medical_record,
        DiseaseRecord $record
    ) {
        $disease = DiseaseRecord::find($record->id)->disease;

        $sub_diseases = $disease->subDiseases;

        return inertia('Admin/MedicalRecord/SelectSubDisease', [
            'medical_record' => $medical_record,
            'record' => $record,
            'disease' => $disease,
            'sub_diseases' => $sub_diseases
        ]);
    }

    public function setSubDisease(
        $medical_record,
        $record,
        Request $request)
    {
        $request->validate([
            'sub_disease_id' => 'required|exists:sub_diseases,id',
        ]);

        $disease_record = DiseaseRecord::find($request->record);

        $disease_record->sub_disease_id = $request->sub_disease_id;

        $disease_record->save();


        return redirect()->route('medical-record.show', $request->medical_record)->banner('Sub Disease set.');
    }
}
