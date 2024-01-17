<?php

namespace App\Http\Controllers;

use App\Models\Disease;
use App\Models\DiseaseRecord;
use App\Models\MedicalRecord;
use App\Models\SubDiseaseRecord;
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

        // Mengambil data gejala yang dipilih

        $symptoms = Symptom::with('diseases')->whereIn('id', $request->symptoms_arr)->get();

        $diseases_subs = [];

        // Mengambil data sub penyakit yang terkait dengan gejala yang dipilih

        $sub_diseases = $symptoms->map(function ($item)
        {
            $sub_diseases = $item->subDiseases->load('disease');

            return $sub_diseases->map(function ($item)
            {
                return [
                    'disease_id' => $item->disease->id,
                    'sub_diseases_id' => $item->id,
                ];
            });

        })->flatten(1)->unique('sub_diseases_id')->values();

        foreach ($sub_diseases as $key => $value)
        {
            $diseases_subs[$value['disease_id']][] = $value['sub_diseases_id'];
        }

        // Mengambil data penyakit yang terkait dengan gejala yang dipilih dan menggabungkan dengan data penyakit yang terkait dengan sub penyakit yang dipilih

        $diseases_subs = collect($diseases_subs)->map(function ($item, $key)
        {
            return [
                'disease_id' => $key,
                'sub_diseases_json' => collect($item)->values()->map(function ($item)
                {
                    return [
                        'sub_disease_id' => $item,
                        'region' => [],
                    ];
                })
            ];
        })->values()->merge(
            $symptoms->map(function ($item)
            {
                return $item->diseases;
            })->flatten()->unique('id')->values()->map(function ($item)
            {
                return [
                    'disease_id' => $item->id,
                ];
            })->values())->unique('disease_id')->values()->sortBy('disease_id');


        return \DB::transaction(function () use ($request, $diseases_subs)
        {
            $medical_record = MedicalRecord::create($request->all());

            foreach ($diseases_subs as $key => $value)
            {
                $medical_record->diseaseRecords()->create([
                    'disease_id' => $value['disease_id'],
                    'region' => []
                ]);

                if (isset($value['sub_diseases_json']))
                {
                    foreach ($value['sub_diseases_json'] as $key => $value)
                    {
                        SubDiseaseRecord::create([
                            'disease_record_id' => $medical_record->diseaseRecords->last()->id,
                            'sub_disease_id' => $value['sub_disease_id'],
                            'region' => $value['region'],
                        ]);
                    }
                }
            }


            return redirect()->route('medical-record.index')->banner('Data Rekam Medis berhasil ditambahkan.');
        });
    }

    /**
     * Display the specified resource.
     */
    public function show(MedicalRecord $medicalRecord)
    {
        // Mengambil data penyakit yang terkait dengan rekam medis
        $medicalRecord->load(['diseaseRecords.disease.treatments', 'diseaseRecords.disease.subDiseases', 'diseaseRecords.subDiseaseRecords.subDisease.treatments']);

        // Mengambil data gejala yang terkait dengan rekam medis

        $sub_diseases = $medicalRecord->diseaseRecords->map(function ($item)
        {
            return $item->subDiseaseRecords->map(function ($item)
            {
                return $item->subDisease;
            })->sortBy('id');
        })->flatten()->unique('id')->values()->sortBy('id');

        $diseases = $medicalRecord->diseaseRecords->map(function ($item)
        {
            return $item->disease;
        })->unique('id')->values();

        // Mengambil data gejala yang terkait dengan penyakit yang terkait dengan rekam medis

        $medicalRecord->symptoms = $diseases->map(function ($item) use ($diseases, $medicalRecord)
        {
            return $item->symptoms->load(['diseases' => function ($query) use ($diseases)
            {
                $query->whereIn('disease_id', $diseases->pluck('id')->toArray());
            }])->whereIn('id', $medicalRecord->symptoms_arr) ?? [];
        })->flatten()->merge($sub_diseases->map(function ($item) use ($sub_diseases, $medicalRecord)
        {
            return $item->symptoms->load(['subDiseases' =>
                function ($query) use ($sub_diseases)
                {
                    $query->whereIn('sub_disease_id', $sub_diseases->pluck('id'))->with('disease');
                }
            ])->whereIn('id', $medicalRecord->symptoms_arr) ?? [];
        })->flatten())->unique('id')->values()->sortBy('id')->values();

        // Mengambil data rencana perawatan yang terkait dengan rekam medis

        $medicalRecord->treatments = $diseases->map(function ($item) use ($diseases)
        {
            return $item->treatments->load(['diseases' => function ($query) use ($diseases)
            {
                $query->whereIn('disease_id', $diseases->pluck('id')->toArray());
            }]) ?? [];
        })->flatten()->merge($sub_diseases->map(function ($item) use ($sub_diseases)
        {
            return $item->treatments->load(['subDiseases' =>
                function ($query) use ($sub_diseases)
                {
                    $query->whereIn('sub_disease_id', $sub_diseases->pluck('id'))->with('disease');
                }
            ]) ?? [];
        })->flatten())->unique('id')->values();


        return inertia('Admin/MedicalRecord/Show', [
            'medical_record' => $medicalRecord,
        ]);
    }

    public function exportPDF(MedicalRecord $medicalRecord)
    {
        // Mengambil data penyakit yang terkait dengan rekam medis
        $medicalRecord->load(['diseaseRecords.disease.treatments', 'diseaseRecords.disease.subDiseases', 'diseaseRecords.subDiseaseRecords']);

        foreach ($medicalRecord->diseaseRecords as $diseaseRecord)
        {
            $diseaseRecord->subDiseaseRecords = $diseaseRecord->subDiseaseRecords->load('subDisease.treatments')->sortBy('sub_disease_id');
        }

        // Mengambil data gejala yang terkait dengan rekam medis

        $sub_diseases = $medicalRecord->diseaseRecords->map(function ($item)
        {
            return $item->subDiseaseRecords->map(function ($item)
            {
                return $item->subDisease;
            })->sortBy('id');
        })->flatten()->unique('id')->values()->sortBy('id');

        $diseases = $medicalRecord->diseaseRecords->map(function ($item)
        {
            return $item->disease;
        })->unique('id')->values();

        // Mengambil data gejala yang terkait dengan penyakit yang terkait dengan rekam medis

        $medicalRecord->symptoms = $diseases->map(function ($item) use ($diseases, $medicalRecord)
        {
            return $item->symptoms->load(['diseases' => function ($query) use ($diseases)
            {
                $query->whereIn('disease_id', $diseases->pluck('id')->toArray());
            }])->whereIn('id', $medicalRecord->symptoms_arr) ?? [];
        })->flatten()->merge($sub_diseases->map(function ($item) use ($sub_diseases, $medicalRecord)
        {
            return $item->symptoms->load(['subDiseases' =>
                function ($query) use ($sub_diseases)
                {
                    $query->whereIn('sub_disease_id', $sub_diseases->pluck('id'))->with('disease');
                }
            ])->whereIn('id', $medicalRecord->symptoms_arr) ?? [];
        })->flatten())->unique('id')->values()->sortBy('id')->values();

        // Mengambil data rencana perawatan yang terkait dengan rekam medis

        $medicalRecord->treatments = $diseases->map(function ($item) use ($diseases)
        {
            return $item->treatments->load(['diseases' => function ($query) use ($diseases)
            {
                $query->whereIn('disease_id', $diseases->pluck('id')->toArray());
            }]) ?? [];
        })->flatten()->merge($sub_diseases->map(function ($item) use ($sub_diseases)
        {
            return $item->treatments->load(['subDiseases' =>
                function ($query) use ($sub_diseases)
                {
                    $query->whereIn('sub_disease_id', $sub_diseases->pluck('id'))->with('disease');
                }
            ]) ?? [];
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


        return redirect()->route('medical-record.show', $medicalRecord)->banner('Data Rekam Medis berhasil diubah.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MedicalRecord $medicalRecord)
    {
        //
        $medicalRecord->delete();

        return redirect()->route('medical-record.index')->banner('Data Rekam Medis berhasil dihapus.');
    }

    public function selectSubDisesase(
        $medical_record,
        DiseaseRecord $record
    ) {
        $disease = DiseaseRecord::find($record->id)->disease;

        $sub_diseases = $disease->subDiseases;

        $record->load('subDiseases');

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
            'sub_diseases' => 'required|exists:sub_diseases,id|array',
        ]);

        $disease_record = DiseaseRecord::find($request->record)->load('subDiseaseRecords');

        $disease_record->subDiseases()->sync($request->sub_diseases);

        $disease_record->save();


        return redirect()->route('medical-record.show', $request->medical_record)->banner('Sub Penyakit Dipilih.');
    }

    public function selectRegion(
        $medical_record,
        DiseaseRecord $record,
        Request $request
    ) {

        $record->load('disease');
        if (isset($request->sub_record))
        {
            $sub_disease_record = SubDiseaseRecord::find($request->sub_record)->load('subDisease');
        }
        else
        {
            $sub_disease_record = null;
        }

        return inertia('Admin/MedicalRecord/SelectRegion', [
            'medical_record' => $medical_record,
            'record' => $record,
            'sub_disease_record' => $sub_disease_record,
        ]);

    }

    public function setRegion(
        $medical_record,
        $record,
        Request $request
    ) {
        $request->validate([
            'region' => 'array',
        ]);

        $region = $request->region;

        sort($region);

        if (isset($request->sub_record))
        {
            $sub_disease_record = SubDiseaseRecord::find($request->sub_record)->load('subDisease');
        }
        else
        {
            $sub_disease_record = null;
        }

        if ($sub_disease_record)
        {
            $sub_disease_record->region = $region;
            $sub_disease_record->save();
        }
        else
        {
            $disease_record = DiseaseRecord::find($record)->load('subDiseaseRecords');

            $disease_record->region = $region;
            $disease_record->save();
        }

        return redirect()->route('medical-record.show', $medical_record)->banner('Region Dipilih.');
    }


}
