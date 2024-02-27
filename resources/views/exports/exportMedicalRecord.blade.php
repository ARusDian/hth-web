<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rekam Medis</title>

    <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"
        integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script>
        function exportPDF() {
            const element = document.getElementById('export');
            html2pdf().set({
                pagebreak: {
                    mode: ['avoid-all', 'css'],
                    before: '.page-break-before',
                }
            }).from(element).save();
        }
    </script>
    <style>
        .table {
            border-collapse: collapse;
            width: 100%;
            border: 1px solid black;
        }

        .table th {
            border-right: 1px solid black;
            padding: 2px;
        }

        .table td {
            border: 1px solid black;
            padding: 2px;
        }

        .table th {
            text-align: center;
        }
    </style>
</head>

<body>
    <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        onclick="exportPDF()">
        Cetak
    </button>
    <div class="max-w-5xl mx-auto" id="export">
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

            <div class="w-full page-break-before">
                <p class="text-xl font-bold">Pemeriksaan Tambahan :</p>
                <div>
                    <div class="w-3-4">
                        <p class="text-lg font-semibold">Wajah dan Kelenjar Limfa</h2>
                    </div>
                    <table class="w-full border border-black">
                        <thead>
                            <tr class="border-b py-3 border-black">
                                <th class="border-r border-black" colspan="2">Kolom</th>
                                <th class="">Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b py-3 border-black">
                                <td class="py-3 text-center border-r border-black" colspan="2">Wajah Simetris</td>
                                <td class="py-3 text-center">
                                    {{ $medicalRecord->is_symetric_face ? ' Simetris' : 'Tidak Simetris' }}
                                </td>
                            </tr>
                            <tr>
                                <td class="py-3 text-center border-r border-b border-black" rowspan="6">Kelenjar
                                    Limfa
                                </td>
                                <td class="py-3 text-center border-b border-r border-black" rowspan="3">Kanan</td>
                                <td class="py-3">
                                    {{ $medicalRecord->spleen_gland['right']['is_palpable'] ? ' Teraba' : 'Tidak Teraba' }}
                                </td>
                            </tr>
                            <tr>
                                <td class="py-3">
                                    {{ $medicalRecord->spleen_gland['right']['is_hard'] ? ' Keras' : 'Tidak Keras' }}
                                </td>
                            </tr>
                            <tr>
                                <td class="py-3 border-b border-black">
                                    {{ $medicalRecord->spleen_gland['right']['is_painful'] ? ' Nyeri' : 'Tidak Nyeri' }}
                                </td>
                            </tr>
                            <tr>
                                <td class="py-3 text-center border-r border-b border-black" rowspan="3">Kiri</td>
                                <td class="py-3">
                                    {{ $medicalRecord->spleen_gland['left']['is_palpable'] ? ' Teraba' : 'Tidak Teraba' }}
                                </td>
                            </tr>
                            <tr>
                                <td class="py-3">
                                    {{ $medicalRecord->spleen_gland['left']['is_hard'] ? ' Keras' : 'Tidak Keras' }}
                                </td>
                            </tr>
                            <tr>
                                <td class="py-3 border-b border-black">
                                    {{ $medicalRecord->spleen_gland['left']['is_painful'] ? 'Nyeri' : 'Tidak Nyeri' }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="page-break-before flex flex-col gap-1">
                    <h2 class="text-lg font-semibold">Kelainan Gigi Geligi</h2>
                    <div class="max-w-7xl mx-auto flex flex-col gap-1">
                        @foreach ($REGION[0] as $i => $row)
                            <div
                                class="grid grid-cols-2 {{ $i + 1 < count($REGION[0]) ? 'border-b-4 border-gray-100' : '' }}">
                                @foreach ($row as $j => $half)
                                    <div
                                        class="grid grid-cols-8 gap-2 {{ $j % 2 == 1 ? 'place-content-end border-l-2 border-gray-100' : 'place-content-start border-r-2 border-gray-100' }}">
                                        @if ($i == 0 && $j == 0)
                                            <div class="p-1 text-center col-span-3">
                                            </div>
                                        @endif
                                        @foreach ($half as $k => $it)
                                            <div class="border border-black grid-1">
                                                <div class="text-center h-7">
                                                    {{ $medicalRecord->odontogram[$it] ?? ' ' }}
                                                </div>
                                                <div class="border border-t-black p-1 text-center">
                                                    {{ $it }}
                                                </div>
                                            </div>
                                        @endforeach
                                    </div>
                                @endforeach
                            </div>
                        @endforeach
                        @foreach ($REGION[1] as $i => $row)
                            <div class="grid grid-cols-2 {{ $i + 1 < count($REGION[1]) ? 'border-b-4 border-gray-100' : '' }}"
                                key="{{ $i }}">
                                @foreach ($row as $j => $half)
                                    <div class="grid grid-cols-8 gap-1 {{ $j % 2 == 1 ? 'place-content-end border-l-2 border-gray-100' : ' place-content-start border-r-2 border-gray-100' }}"
                                        key="{{ $i * 2 + $j }}">
                                        @if ($i === 1 && $j == 0)
                                            <div class="p-1 text-center col-span-3">
                                            </div>
                                        @endif
                                        @foreach ($half as $k => $it)
                                            <div class="border border-black" key="{{ $i * 2 + $j + $k }}">
                                                <div class="border border-b-black p-1 text-center">
                                                    {{ $it }}
                                                </div>
                                                <div class="text-center h-7">
                                                    {{ $medicalRecord->odontogram[$it] ?? ' ' }}
                                                </div>
                                            </div>
                                        @endforeach
                                    </div>
                                @endforeach
                            </div>
                        @endforeach
                    </div>
                    <div class="flex gap-5 mt-2">
                        <div class="basis-2/3 flex flex-col gap-3">
                            <p class="font-semibold">Kode Status Karies Gigi</p>
                            <table class="border border-black w-full table">
                                <thead>
                                    <tr class="border border-black">
                                        <th colspan="2" class="border border-black">GIGI</th>
                                        <th rowspan="2" class="">Status/Kondisi</th>
                                    </tr>
                                    <tr class="border border-black">
                                        <th class="border border-black">
                                            Tetap
                                        </th>
                                        <th class="border border-black">
                                            Susu
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border border-black">
                                        <td className="border-black text-center">0</td>
                                        <td className="border border-black text-center">A</td>
                                        <td className="border border-black p-1">Sehat</td>
                                    </tr>
                                    <tr className="border border-black">
                                        <td className="border border-black text-center">1</td>
                                        <td className="border border-black text-center">B</td>
                                        <td className="border border-black p-1">Gigi Berlubang</td>
                                    </tr>
                                    <tr className="border border-black">
                                        <td className="border border-black text-center">2</td>
                                        <td className="border border-black text-center">C</td>
                                        <td className="border border-black p-1">Tumpatan dengan Karies</td>
                                    </tr>
                                    <tr className="border border-black">
                                        <td className="border border-black text-center">3</td>
                                        <td className="border border-black text-center">D</td>
                                        <td className="border border-black p-1">Tumpatan tanpa karies</td>
                                    </tr>
                                    <tr className="border border-black">
                                        <td className="border border-black text-center">4</td>
                                        <td className="border border-black text-center">E</td>
                                        <td className="border border-black p-1">Gigi dicabut karena karies</td>
                                    </tr>
                                    <tr className="border border-black">
                                        <td className="border border-black text-center">5</td>
                                        <td className="border border-black text-center">-</td>
                                        <td className="border border-black p-1">Gigi dicabut oleh sebab lain</td>
                                    </tr>
                                    <tr className="border border-black">
                                        <td className="border border-black text-center">6</td>
                                        <td className="border border-black text-center">-</td>
                                        <td className="border border-black p-1">Sealant,Varnish</td>
                                    </tr>
                                    <tr className="border border-black">
                                        <td className="border border-black text-center">7</td>
                                        <td className="border border-black text-center">F</td>
                                        <td className="border border-black p-1">Abutment, Mahkota Khusus</td>
                                    </tr>
                                    <tr className="border border-black">
                                        <td className="border border-black text-center">8</td>
                                        <td className="border border-black text-center">G</td>
                                        <td className="border border-black p-1">Gigi Tidak tumbuh</td>
                                    </tr>
                                    <tr className="border border-black">
                                        <td className="border border-black text-center">9</td>
                                        <td className="border border-black text-center">-</td>
                                        <td className="border border-black p-1">Gigi tidak termasuk kriteria di atas
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div>
                                <p class="font-semibold">
                                    Kelainan Gigi
                                </p>
                                <table class="border border-black w-full table">
                                    <thead>
                                        <tr class="border border-black">
                                            <th class="border border-black">Kelainan Gigi</th>
                                            <th class="border border-black">Keterangan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border border-black">
                                            <td class="border border-black">Bentuk Gigi</td>
                                            <td class="border border-black text-center">
                                                {{ $medicalRecord->is_teeth_shape_normal ? 'Normal' : 'Tidak Normal' }}
                                            </td>
                                        </tr>
                                        <tr class="border border-black">
                                            <td class="border border-black">Jumlah Gigi</td>
                                            <td class="border border-black text-center">
                                                {{ $medicalRecord->is_teeth_amount_normal ? 'Normal' : 'Tidak Normal' }}
                                            </td>
                                        </tr>
                                        <tr class="border border-black">
                                            <td class="border border-black">Warna Gigi</td>
                                            <td class="border border-black text-center">
                                                {{ $medicalRecord->is_teeth_color_normal ? 'Normal' : 'Tidak Normal' }}
                                            </td>
                                        </tr>
                                        <tr class="border border-black">
                                            <td class="border border-black">Posisi Gigi</td>
                                            <td class="border border-black text-center">
                                                {{ $medicalRecord->is_teeth_position_normal ? 'Normal' : 'Tidak Normal' }}
                                            </td>
                                        </tr>
                                        <tr class="border border-black">
                                            <td class="border border-black">Ukuran Gigi</td>
                                            <td class="border border-black text-center">
                                                {{ $medicalRecord->is_teeth_size_normal ? 'Normal' : 'Tidak Normal' }}
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                        <div class="basis-1/3">
                            <p class="font-semibold">Kelainan Jaringan Keras Gigi</p>
                            <div class="">
                                <label class="block">
                                    Gigi Tetap :
                                </label>
                                <div class="mx-4 flex flex-col gap-2">
                                    <div class="flex gap-3">
                                        <label class="my-auto basis-2/6">
                                            D :
                                        </label>
                                        <p>
                                            {{ $medicalRecord->hard_tissue_abnormalities['permanent_teeth']['d'] }}
                                        </p>
                                    </div>
                                    <div class="flex gap-3 w-full">
                                        <label class="my-auto basis-2/6">
                                            M :
                                        </label>
                                        <p>
                                            {{ $medicalRecord->hard_tissue_abnormalities['permanent_teeth']['m'] }}
                                        </p>
                                    </div>
                                    <div class="flex gap-3 w-full border-b border-black">
                                        <label class="my-auto basis-2/6">
                                            F :
                                        </label>
                                        <p>
                                            {{ $medicalRecord->hard_tissue_abnormalities['permanent_teeth']['f'] }}
                                        </p>
                                    </div>
                                    <Divider></Divider>
                                    <div class="flex gap-3 w-full">
                                        <label class="my-auto basis-2/6">
                                            DMF-T :
                                        </label>
                                        <p>
                                            {{ $medicalRecord->hard_tissue_abnormalities['permanent_teeth']['dmft'] }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label class="block">
                                    Gigi Susu :
                                </label>
                                <div class="mx-4 flex flex-col gap-2">
                                    <div class="flex gap-3 w-full">
                                        <label class="my-auto basis-2/6">
                                            d :
                                        </label>
                                        <p>
                                            {{ $medicalRecord->hard_tissue_abnormalities['milk_teeth']['d'] }}
                                        </p>
                                    </div>
                                    <div class="flex gap-3 w-full">
                                        <label class="my-auto basis-2/6">
                                            e :
                                        </label>
                                        <p>
                                            {{ $medicalRecord->hard_tissue_abnormalities['milk_teeth']['e'] }}
                                        </p>
                                    </div>
                                    <div class="flex gap-3 w-full border-b border-black">
                                        <label class="my-auto basis-2/6">
                                            f :
                                        </label>
                                        <p>
                                            {{ $medicalRecord->hard_tissue_abnormalities['milk_teeth']['f'] }}
                                        </p>
                                    </div>
                                    <div class="flex gap-3 w-full">
                                        <label class="my-auto basis-2/6">
                                            def-t :
                                        </label>
                                        <p>
                                            {{ $medicalRecord->hard_tissue_abnormalities['milk_teeth']['deft'] }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page-break-before flex flex-col gap-1">
                    <p class="text-lg font-semibold">Kondisi Vitalitas Gigi</p>
                    <table class="border-collapse border w-full table">
                        <thead>
                            <tr>
                                <th class="border px-4 py-2 w-[1%]">Elemen Gigi</th>
                                <th class="border px-4 py-2 w-[1%]">Inspeksi</th>
                                <th class="border px-4 py-2 w-[1%]">Thermis</th>
                                <th class="border px-4 py-2 w-[1%]">Sondasi</th>
                                <th class="border px-4 py-2 w-[1%]">Perkusi</th>
                                <th class="border px-4 py-2 w-[1%]">Druk</th>
                                <th class="border px-4 py-2 w-[15%]">Mobility</th>
                                <th class="border px-4 py-2">Masalah</th>
                            </tr>
                        </thead>
                        <tbody>
                            @if (count($medicalRecord->teethConditionVitalities) > 0)
                                @foreach ($medicalRecord->teethConditionVitalities as $index => $row)
                                    <tr>
                                        <td class="border py-2 text-center">
                                            {{ $row->tooth_number }}
                                        </td>
                                        <td class="border py-2 text-center">
                                            {{ $row->inspection }}
                                        </td>
                                        <td class="border py-2 text-center">
                                            {{ $row->thermis }}
                                        </td>
                                        <td class="border py-2 text-center">
                                            {{ $row->sondasi }}
                                        </td>
                                        <td class="border py-2 text-center">
                                            {{ $row->percussion }}
                                        </td>
                                        <td class="border py-2 text-center">
                                            {{ $row->druk }}
                                        </td>
                                        <td class="border py-2 text-center">
                                            {{ $row->mobility }}
                                        </td>
                                        <td class="border py-2">
                                            {{ $row->problem }}
                                        </td>
                                    </tr>
                                @endforeach
                            @else
                                <tr>
                                    <td colspan="8" class="border px-4 py-2 text-center">
                                        Tidak ada data
                                    </td>
                                </tr>
                            @endif
                        </tbody>
                    </table>
                </div>
                <div class="page-break-before flex flex-col gap-1">
                    <p class="text-lg font-semibold">Kelainan/Anomali Gigi</p>
                    <table class="border-collapse border w-full table">
                        <thead>
                            <tr>
                                <th class="border px-4 py-2">Kolom</th>
                                <th class="border px-4 py-2">Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b py-3 border-black">
                                <td class="py-3 text-center border-r border-black">Occlusi</td>
                                <td class="py-3 text-center">{{ $medicalRecord->occlusion }}</td>
                            </tr>
                            <tr class="border-b py-3 border-black">
                                <td class="py-3 text-center border-r border-black">Bentuk Gigi</td>
                                <td class="py-3 text-center">
                                    {{ $medicalRecord->is_teeth_shape_anomaly ? 'Normal' : 'Tidak Normal' }}
                                </td>
                            </tr>
                            <tr class="border-b py-3 border-black">
                                <td class="py-3 text-center border-r border-black">Warna Gigi</td>
                                <td class="py-3 text-center">
                                    {{ $medicalRecord->is_teeth_color_anomaly ? 'Normal' : 'Tidak Normal' }}
                                </td>
                            </tr>
                            <tr class="border-b py-3 border-black">
                                <td class="py-3 text-center border-r border-black">Posisi Gigi</td>
                                <td class="py-3 text-center">
                                    {{ $medicalRecord->is_teeth_position_anomaly ? 'Normal' : 'Tidak Normal' }}
                                </td>
                            </tr>
                            <tr class="border-b py-3 border-black">
                                <td class="py-3 text-center border-r border-black">Ukuran Gigi</td>
                                <td class="py-3 text-center">
                                    {{ $medicalRecord->is_teeth_size_anomaly ? 'Normal' : 'Tidak Normal' }}
                                </td>
                            </tr>
                            <tr class="border-b py-3 border-black">
                                <td class="py-3 text-center border-r border-black">Struktur Gigi</td>
                                <td class="py-3 text-center">
                                    {{ $medicalRecord->is_teeth_structure_anomaly ? 'Normal' : 'Tidak Normal' }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="page-break-before flex flex-col gap-1">
                    <p class="text-lg font-semibold">Mukosa Mulut</p>
                    <table class="border-collapse border w-full table">
                        <thead>
                            <tr>
                                <th class="border px-4 py-2">Kolom</th>
                                <th class="border px-4 py-2">Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b py-3 border-black">
                                <td class="py-3 text-center border-r border-black">Lidah</td>
                                <td class="py-3 text-center">
                                    <ul>
                                        <li>{{ $medicalRecord->mucose_tongue['is_color_change'] ? 'Ada Perubahan Warna' : 'Tidak Ada Perubahan Warna' }}
                                        </li>
                                        <li>{{ $medicalRecord->mucose_tongue['is_inflammation'] ? 'Ada Inflamasi' : 'Tidak Ada Inflamasi' }}
                                        </li>
                                        <li>{{ $medicalRecord->mucose_tongue['is_ulcer'] ? 'Ada Ulserasi' : 'Tidak Ada Ulserasi' }}
                                        </li>
                                    </ul>

                                </td>
                            </tr>
                            <tr class="border-b py-3 border-black">
                                <td class="py-3 text-center border-r border-black">Pipi</td>
                                <td class="py-3 text-center">
                                    <ul>
                                        <li>{{ $medicalRecord->mucose_cheek['is_color_change'] ? 'Ada Perubahan Warna' : 'Tidak Ada Perubahan Warna' }}
                                        </li>
                                        <li>{{ $medicalRecord->mucose_cheek['is_inflammation'] ? 'Ada Inflamasi' : 'Tidak Ada Inflamasi' }}
                                        </li>
                                        <li>{{ $medicalRecord->mucose_cheek['is_ulcer'] ? 'Ada Ulserasi' : 'Tidak Ada Ulserasi' }}
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="border-b py-3 border-black">
                                <td class="py-3 text-center border-r border-black">Palatum</td>
                                <td class="py-3 text-center">
                                    <ul>
                                        <li>{{ $medicalRecord->mucose_palatum['is_color_change'] ? 'Ada Perubahan Warna' : 'Tidak Ada Perubahan Warna' }}
                                        </li>
                                        <li>{{ $medicalRecord->mucose_palatum['is_inflammation'] ? 'Ada Inflamasi' : 'Tidak Ada Inflamasi' }}
                                        </li>
                                        <li>{{ $medicalRecord->mucose_palatum['is_ulcer'] ? 'Ada Ulserasi' : 'Tidak Ada Ulserasi' }}
                                        </li>
                                    </ul>

                                </td>
                            </tr>
                            <tr class="border-b py-3 border-black">
                                <td class="py-3 text-center border-r border-black">Gingiva</td>
                                <td class="py-3 text-center">
                                    <ul>
                                        <li>{{ $medicalRecord->mucose_gingiva['is_color_change'] ? 'Ada Perubahan Warna' : 'Tidak Ada Perubahan Warna' }}
                                        </li>
                                        <li>{{ $medicalRecord->mucose_gingiva['is_inflammation'] ? 'Ada Inflamasi' : 'Tidak Ada Inflamasi' }}
                                        </li>
                                        <li>{{ $medicalRecord->mucose_gingiva['is_ulcer'] ? 'Ada Ulserasi' : 'Tidak Ada Ulserasi' }}
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="border-b py-3 border-black">
                                <td class="py-3 text-center border-r border-black">Bibir</td>
                                <td class="py-3 text-center">
                                    <ul>
                                        <li>{{ $medicalRecord->mucose_lips['is_color_change'] ? 'Ada Perubahan Warna' : 'Tidak Ada Perubahan Warna' }}
                                        </li>
                                        <li>{{ $medicalRecord->mucose_lips['is_inflammation'] ? 'Ada Inflamasi' : 'Tidak Ada Inflamasi' }}
                                        </li>
                                        <li>{{ $medicalRecord->mucose_lips['is_ulcer'] ? 'Ada Ulserasi' : 'Tidak Ada Ulserasi' }}
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="page-break-before flex flex-col gap-1">
                    <div class=''>
                        <h2 class="text-xl font-semibold">Pemeriksaan Jaringan Periodontal</h2>
                    </div>
                    <table class="border-collapse border w-full table">
                        <thead>
                            <tr>
                                <th class="border py-2 w-[5%]" rowspan="2">Gigi</th>
                                <th class="border py-2  w-[10%]" rowspan="2">Lokasi</th>
                                <th class="border py-2 w-[7%]" colspan="3">Pocket</th>
                                <th class="border py-2 w-[12%]" colspan="5">Peradangan</th>
                                <th class="border py-2 w-[6%]" colspan="2">Attachment</th>
                                <th class="border py-2 w-[2%]" rowspan="2">PUS</th>
                                <th class="border py-2 w-[5%]" rowspan="2">Lain-lain</th>
                                <th class="border py-2" rowspan="2">Masalah</th>
                            </tr>
                            <tr>
                                <th class="border py-2">False</th>
                                <th class="border py-2">True</th>
                                <th class="border py-2">Depth (mm)</th>
                                <th class="border py-2">Rubor</th>
                                <th class="border py-2">Tumor</th>
                                <th class="border py-2">Kolor</th>
                                <th class="border py-2">Dolor</th>
                                <th class="border py-2 px-1">Functio Laesa</th>
                                <th class="border py-2">Normal</th>
                                <th class="border py-2">Menurun</th>
                            </tr>
                        </thead>
                        <tbody>
                            @if ($medicalRecord->periodontalTissues->isNotEmpty())
                                @foreach ($medicalRecord->periodontalTissues as $index => $row)
                                    <tr>
                                        <td class="border py-2 text-center">{{ $row->tooth_number }}
                                        </td>
                                        <td class="border py-2 text-center">{{ $row->location }}</td>
                                        <td class="border py-2 text-center">{{ $row->pocket_true }}
                                        </td>
                                        <td class="border py-2 text-center">{{ $row->pocket_false }}
                                        </td>
                                        <td class="border py-2 text-center">{{ $row->pocket_depth }}
                                        </td>
                                        <td class="border py-2 text-center">
                                            {{ $row->inflammation_rubor }}</td>
                                        <td class="border py-2 text-center">
                                            {{ $row->inflammation_tumor }}</td>
                                        <td class="border py-2 text-center">
                                            {{ $row->inflammation_kolor }}</td>
                                        <td class="border py-2 text-center">
                                            {{ $row->inflammation_dolor }}</td>
                                        <td class="border py-2 text-center">
                                            {{ $row->inflammation_functio_laesa }}</td>
                                        <td class="border py-2 text-center">
                                            {{ $row->attachment_normal }}</td>
                                        <td class="border py-2 text-center">
                                            {{ $row->attachment_decline }}</td>
                                        <td class="border py-2 text-center">{{ $row->PUS }}</td>
                                        <td class="border py-2 text-center">{{ $row->other }}</td>
                                        <td class="border py-2">{{ $row->problem }}</td>
                                    </tr>
                                @endforeach
                            @else
                                <tr>
                                    <td colspan="14" class="border px-4 py-2 text-center">Tidak ada
                                        data</td>
                                </tr>
                            @endif
                        </tbody>
                    </table>

                </div>
            </div>
            <div class="page-break-before">
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
                                                    {{ $subDiseaseRecord->region
                                                        ? ' : ' . join(', ', $subDiseaseRecord->region)
                                                        : '
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                : Belum Pilih Region' }}
                                                </b>
                                            </li>
                                        @endforeach
                                    </ul>
                                @else
                                    @if (isset($record->disease->subDiseases) && count($record->disease->subDiseases) > 0)
                                        <ul>
                                            <li>Belum Pilih Sub Penyakit</li>
                                        </ul>
                                    @endif
                                @endif
                            </li>
                        @endforeach

                    </ol>
                </div>
            </div>
            <div>
                <p class="text-xl font-bold">Masalah :</p>
                <div>
                    <ol>
                        @foreach ($medicalRecord->diseaseRecords as $record)
                            <li>{{ $record->disease->problem }} - <b>{{ $record->disease->name }}</b></li>
                        @endforeach
                    </ol>
                </div>
            </div>
            <div>
                <p class="text-xl font-bold">Kemungkinan Penyebab Masalah :</p>
                <div>
                    <ol>
                        @foreach ($medicalRecord->reasons as $reason)
                            <li>{{ $reason->description }}</li>
                        @endforeach
                    </ol>
                </div>
            </div>
            <div>
                <p class="text-xl font-bold">Diagnosa :</p>
                <div>
                    <ol>
                        @foreach ($medicalRecord->diseaseRecords as $record)
                            <li>{{ $record->disease->diagnosis }} - <b>{{ $record->disease->name }}</b></li>
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
            <div class="page-break-before">
                <p class="text-xl font-bold text-center">PENGKAJIAN</p>
                <table class="border border-black w-full table">
                    <thead>
                        <tr class="border border-black">
                            <th class="border border-black">Tanda dan Gejala</th>
                            <th class="border border-black">Penyakit</th>
                            <th class="border border-black">Masalah</th>
                            <th class="border border-black">Kemungkinan Penyebab Masalah</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($medicalRecord->diseaseRecords as $record)
                            <tr class="border border-black">
                                <td class="border border-black">
                                    <ul>
                                        @foreach ($record->disease->symptoms as $symptom)
                                            <li>{{ $symptom->description }}</li>
                                        @endforeach
                                    </ul>
                                </td>
                                <td class="border border-black">
                                    <ul>
                                        <li><b>{{ $record->disease->name }}</b>
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
                                                            <p>
                                                                <b>
                                                                    {{ $subDiseaseRecord->region
                                                                        ? ' - ' . join(', ', $subDiseaseRecord->region)
                                                                        : '
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            : Belum Pilih Region' }}
                                                                </b>
                                                            </p>
                                                        </li>
                                                    @endforeach
                                                </ul>
                                            @else
                                                @if (isset($record->disease->subDiseases) && count($record->disease->subDiseases) > 0)
                                                    <ul>
                                                        <li>Belum Pilih Sub Penyakit</li>
                                                    </ul>
                                                @endif
                                            @endif
                                        </li>
                                    </ul>
                                </td>
                                <td class="border border-black">
                                    <ul>
                                        <li>{{ $record->disease->problem }}</li>
                                    </ul>
                                </td>
                                <td class="border border-black">
                                    <ul>
                                        @foreach ($record->disease->reasons as $reason)
                                            <li>{{ $reason->description }}</li>
                                        @endforeach
                                    </ul>
                                </td>
                        @endforeach
                    </tbody>
                </table>
            </div>
            <div class="page-break-before">
                <p class="text-xl font-bold text-center">DIAGNOSA ASUHAN KESEHATAN GIGI DAN MULUT</p>
                <table class="border border-black w-full table">
                    <thead>
                        <tr class="border border-black">
                            <th class="border border-black">Data</th>
                            <th class="border border-black">Masalah</th>
                            <th class="border border-black">Kemungkinan Penyebab Masalah</th>
                            <th class="border border-black">Diagnosa</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($medicalRecord->diseaseRecords as $record)
                            <tr class="border border-black">
                                <td class="border border-black">
                                    <ul>
                                        <b>
                                            {{ $record->disease->name }}
                                        </b>
                                        @if (isset($record->subDiseaseRecords) && count($record->subDiseaseRecords) > 0)
                                            <ul>
                                                @foreach ($record->subDiseaseRecords as $subDiseaseRecord)
                                                    <li>- {{ $subDiseaseRecord->subDisease->name }}
                                                    </li>
                                                @endforeach
                                            </ul>
                                        @else
                                            @if (isset($record->disease->subDiseases) && count($record->disease->subDiseases) > 0)
                                                <ul>
                                                    <li>Belum Pilih Sub Penyakit</li>
                                                </ul>
                                            @endif
                                        @endif
                                    </ul>
                                </td>
                                <td class="border border-black">
                                    <ul>
                                        <li>{{ $record->disease->problem }}</li>
                                    </ul>
                                </td>
                                <td class="border border-black">
                                    <ul>
                                        @foreach ($record->disease->reasons as $reason)
                                            <li>{{ $reason->description }}</li>
                                        @endforeach
                                    </ul>
                                </td>
                                <td class="border border-black">
                                    <ul>
                                        <li>{{ $record->disease->diagnosis }}</li>
                                    </ul>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
            <div class="page-break-before">
                <p class="text-xl font-bold text-center">PERENCANAAN INTERVENSI</p>
                <table class="border border-black w-full table">
                    <thead>
                        <tr class="border border-black">
                            <th class="border border-black">Penyakit</th>
                            <th class="border border-black">Rencana Perawatan</th>
                            <th class="border border-black">Tujuan Perawatan</th>
                            <th class="border border-black">Indikator Keberhasilan</th>
                            <th class="border border-black">Metode Evaluasi</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($medicalRecord->diseaseRecords as $record)
                            <tr class="border border-black">
                                <td class="border border-black">
                                    <ul>
                                        <b>
                                            {{ $record->disease->name }}
                                        </b>
                                        @if (isset($record->subDiseaseRecords) && count($record->subDiseaseRecords) > 0)
                                            <ul>
                                                @foreach ($record->subDiseaseRecords as $subDiseaseRecord)
                                                    <li>- {{ $subDiseaseRecord->subDisease->name }}
                                                    </li>
                                                @endforeach
                                            </ul>
                                        @else
                                            @if (isset($record->disease->subDiseases) && count($record->disease->subDiseases) > 0)
                                                <ul>
                                                    <li>Belum Pilih Sub Penyakit</li>
                                                </ul>
                                            @endif
                                        @endif
                                    </ul>
                                </td>
                                <td class="border border-black">
                                    <ul>
                                        @foreach ($record->treatments as $item)
                                            <li>{{ $item->description }}</li>
                                        @endforeach
                                    </ul>
                                </td>
                                <td class="border border-black">
                                    <ul>
                                        @foreach ($record->disease->treatmentGoals as $item)
                                            <li>{{ $item->name }}</li>
                                        @endforeach
                                    </ul>
                                </td>
                                <td class="border border-black">
                                    <ul>
                                        @foreach ($record->disease->successIndicators as $item)
                                            <li>{{ $item->name }}</li>
                                        @endforeach
                                    </ul>
                                </td>
                                <td class="border border-black">
                                    <ul>
                                        @foreach ($record->disease->evaluationMethods as $item)
                                            <li>{{ $item->name }}</li>
                                        @endforeach
                                    </ul>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
        </header>
</body>

</html>
