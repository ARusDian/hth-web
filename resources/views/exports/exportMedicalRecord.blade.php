<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rekam Medis</title>
    <style>
        /* Warna dan border untuk Tailwind CSS */
        .bg-slate-200 {
            background-color: #90a4ae;
        }

        .border-slate-300 {
            border-color: #78909c;
        }

        .text-slate-900 {
            color: #263238;
        }

        /* Ukuran dan layout untuk Tailwind CSS */
        .max-w-5xl {
            max-width: 64rem;
        }

        .mx-auto {
            margin-right: auto;
            margin-left: auto;
        }

        .flex {
            display: flex;
        }

        .flex-col {
            flex-direction: column;
        }

        .gap-3 {
            gap: 0.75rem;
        }

        .m-7 {
            margin: 1.75rem;
        }

        .w-full {
            width: 100%;
        }

        .w-3-4 {
            width: 75%;
        }

        /* Teks dan font untuk Tailwind CSS */
        .text-2xl {
            font-size: 1.5rem;
        }

        .font-semibold {
            font-weight: 600;
        }

        .text-xl {
            font-size: 1.25rem;
        }

        .font-bold {
            font-weight: 700;
        }

        .list-none {
            list-style: none;
        }

        .text-sm {
            font-size: 0.875rem;
        }

        .text-md {
            font-size: 1rem;
        }

        /* Gaya khusus untuk HTML ini */
        .border-b-2 {
            border-bottom-width: 2px;
        }

        .p-3 {
            padding: 0.75rem;
        }

        /* Gaya tambahan untuk konten */

        ul {
            padding-left: 1.25rem;
        }

        ol {
            list-style-type: decimal;
            padding-left: 1.25rem;
        }

        /* Border Tabel */

        .d-tabel {
            border-collapse: collapse;
            width: 100%;
            border: 1px solid;
        }

        .d-tabel th,
        .d-tabel td {
            padding: 4px;
            border: 1px solid;
        }
    </style>
</head>

<body>
    <header class="max-w-5xl mx-auto">
        <header>
            <p class="text-2xl font-semibold bg-slate-200 p-3 border-slate-300 border-b-2">Hasil Diagnosa</p>
        </header>
        <div class="flex flex-col gap-3 m-7 ">
            <div class="w-full">
                <p class="text-xl font-bold">Data Pasien :</p>
                <table class="w-3-4">
                    <tr>
                        <td>Nama</td>
                        <td>:</td>
                        <td>{{ $medicalRecord->name }}</td>
                    </tr>
                    <tr>
                        <td>Alamat</td>
                        <td>:</td>
                        <td>{{ $medicalRecord->address }}</td>
                    </tr>
                    <tr>
                        <td>Tempat dan Tanggal Lahir</td>
                        <td>:</td>
                        <td>{{ $medicalRecord->place_of_birth }}, {{ $medicalRecord->date_of_birth }}</td>
                    </tr>
                    <tr>
                        <td>NIK</td>
                        <td>:</td>
                        <td>{{ $medicalRecord->NIK }}</td>
                    </tr>
                    <tr>
                        <td>Jenis Kelamin</td>
                        <td>:</td>
                        <td>{{ $medicalRecord->gender == 'L' ? 'Laki-laki' : 'Perempuan' }}</td>
                    </tr>
                    <tr>
                        <td>Ras</td>
                        <td>:</td>
                        <td>{{ $medicalRecord->race ?? '-' }}</td>
                    </tr>
                    <tr>
                        <td>Pekerjaan</td>
                        <td>:</td>
                        <td>{{ $medicalRecord->occupation }}</td>
                    </tr>
                    <tr>
                        <td>Nomor Telepon</td>
                        <td>:</td>
                        <td>{{ $medicalRecord->phone_number }}</td>
                    </tr>
                    <tr>
                        <td>Nomor Telepon Keluarga</td>
                        <td>:</td>
                        <td>{{ $medicalRecord->family_phone_number ?? '-' }}</td>
                    </tr>
                    <tr>
                        <td>Tanggal Pemeriksaan</td>
                        <td>:</td>
                        <td>{{ $medicalRecord->created_at }}</td>
                    </tr>
                </table>
            </div>
            <div class="w-full">
                <p class="text-xl font-bold">Hasil Pemeriksaan :</p>

                <table class="w-3-4">
                    <tr>
                        <td>Keluhan Utama</td>
                        <td>:</td>
                        <td>{{ $medicalRecord->main_complaint }}</td>
                    </tr>
                    <tr>
                        <td>Keluhan Tambahan</td>
                        <td>:</td>
                        <td>{{ $medicalRecord->additional_complaint ?? '-' }}</td>
                    </tr>
                    <tr>
                        <td>Golongan Darah</td>
                        <td>:</td>
                        <td>{{ $medicalRecord->blood_type ?? '-' }}</td>
                    </tr>
                    <tr>
                        <td>Tekanan Darah</td>
                        <td>:</td>
                        <td>{{ $medicalRecord->blood_pressure }}</td>
                    </tr>
                    <tr>
                        <td>Denyut Nadi</td>
                        <td>:</td>
                        <td>{{ $medicalRecord->pulse }}/Menit</td>
                    </tr>
                    <tr>
                        <td>Suhu Tubuh</td>
                        <td>:</td>
                        <td>{{ $medicalRecord->body_temperature }} °C</td>
                    </tr>

                </table>
                <div class="w-full">
                    <p class="text-xl font-bold">Penyakit Bawaan </p>
                    <div class="w-3-4">
                        <ul class="list-none">
                            <li>
                                <input type="checkbox" {{ $medicalRecord->is_heart_disease ? 'checked' : '' }}
                                    disabled>
                                <label for="hypertension">Penyakit Jantung</label>
                            <li>
                                <input type="checkbox" {{ $medicalRecord->is_diabetes ? 'checked' : '' }} disabled>
                                <label for="diabetes">Diabetes</label>
                            </li>
                            <li>
                                <input type="checkbox" {{ $medicalRecord->is_hemophilia ? 'checked' : '' }} disabled>
                                <label for="cancer">Hemofilia</label>
                            </li>
                            <li>
                                <input type="checkbox" {{ $medicalRecord->is_hepatitis ? 'checked' : '' }} disabled>
                                <label for="cancer">Hepatitis</label>
                            </li>
                            <li>
                                <input type="checkbox" {{ $medicalRecord->is_mag ? 'checked' : '' }} disabled>
                                <label for="cancer">Maag</label>
                            </li>
                        </ul>
                        <p class="text-sm">*Centang jika ada</p>
                        <table class="w-3-4">
                            <tr>
                                <td>Penyakit Lainnya</td>
                                <td>:</td>
                                <td>{{ $medicalRecord->other_disease ?? '-' }}</td>
                            </tr>
                            <tr>
                                <td>Alergi Makanan</td>
                                <td>:</td>
                                <td>{{ $medicalRecord->food_allergy ?? '-' }}</td>
                            </tr>
                            <tr>
                                <td>Alergi Obat</td>
                                <td>:</td>
                                <td>{{ $medicalRecord->drug_allergy ?? '-' }}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <div>
                <p class="text-xl font-bold">Gejala yang dirasakan :</p>
                <div>
                    <table class="d-tabel">
                        <tr>
                            <th style="width:5%;">No</th>
                            <th style="width:40%">Nama Gejala</th>
                            <th>Penyakit</th>
                            <th>Sub Penyakit</th>
                        </tr>
                        @foreach ($medicalRecord->symptoms as $symptom)
                            <tr>
                                <td style="text-align: center;">
                                    {{ $loop->iteration }}
                                </td>
                                <td>
                                    {{ $symptom->description }}
                                </td>
                                <td>
                                    <ul className='list-disc'>
                                        @foreach ($symptom->diseases as $disease)
                                            <li>{{ $disease->name }}</li>
                                        @endforeach
                                    </ul>
                                </td>
                                <td>
                                    <ul className='list-disc'>
                                        @foreach ($symptom->subDiseases as $subDisease)
                                            <li>{{ $subDisease->name }}</li>
                                        @endforeach
                                    </ul>
                                </td>
                            </tr>
                        @endforeach
                    </table>
                </div>
            </div>
            <div>
                <p class="text-xl font-bold">Penyakit :</p>
                <div>
                    <ol>
                        @foreach ($medicalRecord->diseaseRecords as $record)
                            <li>{{ $record->disease->name }}
                                <b>
                                    {{ isset($record->disease->subDiseases) && count($record->disease->subDiseases) < 1
                                        ? ($record->region
                                            ? ' : ' . join(', ', $record->region)
                                            : ' : Belum Pilih Region')
                                        : '' }}
                                </b>
                                @if (isset($record->subDiseaseRecords) && count($record->subDiseaseRecords) > 0)
                                    <ul>
                                        @foreach ($record->subDiseaseRecords as $subDiseaseRecord)
                                            <li>{{ $subDiseaseRecord->subDisease->name }}
                                                <b>
                                                    {{ $subDiseaseRecord->region ? ' : ' . join(', ', $subDiseaseRecord->region) : ' : Belum Pilih Region' }}
                                                </b>
                                            </li>
                                        @endforeach
                                    </ul>
                                @else
                                    @if (isset($record->disease->subDiseases) && count($record->disease->subDiseases) > 0)
                                        <ul>
                                            <li>
                                                <b>Belum Pilih Sub Penyakit</b>
                                            </li>
                                        </ul>
                                    @endif
                                @endif
                        @endforeach
                        </li>
                    </ol>
                </div>
            </div>
            <div>
                <p class="text-xl font-bold">Kemungkinan Penyebab Masalah :</p>
                <div>
                    <table class="d-tabel">
                        <tr>
                            <th style="width:5%;">No</th>
                            <th style="width:50%">Kemungkinan Penyebab Masalah</th>
                            <th>Penyakit</th>
                        </tr>
                        @foreach ($medicalRecord->reasons as $reason)
                            <tr>
                                <td style="text-align: center;">
                                    {{ $loop->iteration }}
                                </td>
                                <td>
                                    {{ $reason->description }}
                                </td>
                                <td>
                                    <ul className='list-disc'>
                                        @foreach ($reason->diseases as $disease)
                                            <li>{{ $disease->name }}</li>
                                        @endforeach
                                    </ul>
                                </td>
                            </tr>
                        @endforeach
                    </table>
                </div>
            </div>
            <div>
                <p class="text-xl font-bold">Masalah :</p>
                <div>
                    <table class="d-tabel">
                        <tr>
                            <th style="width:5%;">No</th>
                            <th style="width:50%">Masalah</th>
                            <th>Penyakit</th>
                        </tr>
                        @foreach ($medicalRecord->diseaseRecords as $record)
                            <tr>
                                <td style="text-align: center;">
                                    {{ $loop->iteration }}
                                </td>
                                <td>
                                    {{ $record->disease->problem }}
                                </td>
                                <td>
                                    {{ $record->disease->name }}
                                </td>
                            </tr>
                        @endforeach
                    </table>
                    </table>
                </div>
                <div>
                    <p class="text-xl font-bold">Diagnosa :</p>
                    <div>
                        <table class="d-tabel">
                            <tr>
                                <th style="width:5%;">No</th>
                                <th style="width:50%">Diagnosa</th>
                                <th>Penyakit</th>
                            </tr>

                            @foreach ($medicalRecord->diseaseRecords as $record)
                                <tr>
                                    <td style="text-align: center;">
                                        {{ $loop->iteration }}
                                    </td>
                                    <td>
                                        {{ $record->disease->diagnosis }}
                                    </td>
                                    <td>
                                        {{ $record->disease->name }}
                                    </td>
                                </tr>
                            @endforeach
                        </table>
                    </div>
                </div>
                <div>
                    <p class="text-xl font-bold">Rencana Perawatan :</p>
                    <div>
                        <table class="d-tabel">
                            <tr>
                                <th style="width:5%;">No</th>
                                <th style="width:40%">Rencana Perawatan :</th>
                                <th>Penyakit</th>
                                <th>Sub Penyakit</th>
                            </tr>
                            @foreach ($medicalRecord->treatments as $treatment)
                                <tr>
                                    <td style="text-align: center;">
                                        {{ $loop->iteration }}
                                    </td>
                                    <td>
                                        {{ $treatment->description }}
                                    </td>
                                    <td>
                                        <ul className='list-disc'>
                                            @foreach ($treatment->diseases as $disease)
                                                <li>{{ $disease->name }}</li>
                                            @endforeach
                                        </ul>
                                    </td>
                                    <td>
                                        <ul className='list-disc'>
                                            @foreach ($treatment->subDiseases as $subDisease)
                                                <li>{{ $subDisease->name }} - {{$subDisease->disease->name}}</li>
                                            @endforeach
                                        </ul>
                                    </td>
                                </tr>
                            @endforeach
                        </table>
                    </div>
                    <p class='text-sm font-semibold'>
                        * Rencana perawatan semakin lengkap jika semua penyakit telah dipilih sub penyakitnya.
                    </p>
                </div>
            </div>
    </header>
</body>

</html>
