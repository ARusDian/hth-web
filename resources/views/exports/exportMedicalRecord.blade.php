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

        .w-3/4 {
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

        /* Tambahkan class-class Tailwind CSS atau gaya khusus lainnya sesuai kebutuhan */
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
                <table class="w-3/4">
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
                        <td>{{ $medicalRecord->date_of_birth }}</td>
                    </tr>
                    <tr>
                        <td>NIK</td>
                        <td>:</td>
                        <td>{{ $medicalRecord->NIK }}</td>
                    </tr>
                    <tr>
                        <td>Jenis Kelamin</td>
                        <td>:</td>
                        <td>{{$medicalRecord->gender == "L" ? "Laki-laki" : "Perempuan"}}</td>
                    </tr>
                    <tr>
                        <td>Ras</td>
                        <td>:</td>
                        <td>{{ $medicalRecord->race ?? "-" }}</td>
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
                        <td>{{ $medicalRecord->family_phone_number ?? "-" }}</td>
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

                <table class="w-3/4">
                    <tr>
                        <td>Keluhan Utama</td>
                        <td>:</td>
                        <td>{{ $medicalRecord->main_complaint }}</td>
                    </tr>
                    <tr>
                        <td>Keluhan Tambahan</td>
                        <td>:</td>
                        <td>{{ $medicalRecord->additional_complaint ?? "-"}}</td>
                    </tr>
                    <tr>
                        <td>Golongan Darah</td>
                        <td>:</td>
                        <td>{{ $medicalRecord->blood_type ?? "-" }}</td>
                    </tr>
                    <tr>
                        <td>Tekanan Darah</td>
                        <td>:</td>
                        <td>{{ $medicalRecord->blood_pressure }}</td>
                    </tr>
                    <tr>
                        <td>Denyut Nadi</td>
                        <td>:</td>
                        <td>{{$medicalRecord->pulse}}/Menit</td>
                    </tr>
                    <tr>
                        <td>Suhu Tubuh</td>
                        <td>:</td>
                        <td>{{ $medicalRecord->body_temperature}} °C</td>
                    </tr>

                </table>
                <div class="w-full">
                    <p class="text-xl font-bold">Penyakit Bawaan </p>
                    <div>
                        <ul class="list-none">
                            <li>
                                <input type="checkbox" {{ $medicalRecord->is_heart_disease ? 'checked' : '' }} disabled>
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
                        <table class="w-3/4">
                            <tr>
                                <td>Penyakit Lainnya</td>
                                <td>:</td>
                                <td>{{ $medicalRecord->other_disease ?? "-" }}</td>
                            </tr>
                            <tr>
                                <td>Alergi Makanan</td>
                                <td>:</td>
                                <td>{{ $medicalRecord->food_allergy ?? "-" }}</td>
                            </tr>
                            <tr>
                                <td>Alergi Obat</td>
                                <td>:</td>
                                <td>{{ $medicalRecord->drug_allergy ?? "-" }}</td>
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
                    <ol>
                        @foreach ($medicalRecord->symptoms as $symptom)
                        <li>{{ $symptom->description }}</li>
                        @endforeach
                    </ol>
                </div>
            </div>
            <div>
                <p class="text-xl font-bold">Hasil Diagnosa Penyakit :</p>
                <div>
                    <ol>
                        @foreach ($medicalRecord->diseaseRecords as $record)
                        <li>{{ $record->disease->name }} {{$record->subDisease ? " - " . $record->subDisease->name :
                            ""}}</li>
                        @endforeach
                    </ol>
                </div>
            </div>
            <div>
                <p class="text-xl font-bold">Rencana Perawatan :</p>
                <div>
                    <ol>
                        @foreach ($medicalRecord->treatments as $treatment)
                        <li>{{ $treatment->description }} </li>
                        @endforeach
                    </ol>
                </div>
                <p class='text-sm font-semibold'>
                    * Rencana perawatan semakin lengkap jika semua penyakit telah dipilih sub penyakitnya.
                </p>
            </div>
        </div>
    </header>
</body>

</html>
