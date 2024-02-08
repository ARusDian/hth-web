import { MedicalRecordModel } from "@/Models/MedicalRecord";
import { Divider } from "@mui/material";
import React from "react";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

export interface Props {
    medical_record: MedicalRecordModel;
}

const REGION = [
    // Top
    [
        // Milk
        [
            // Left
            [
                55, 54, 53, 52, 51
            ],
            // Right
            [
                61, 62, 63, 64, 65
            ]
        ],
        // Adult
        [
            // Left
            [
                18, 17, 16, 15, 14, 13, 12, 11
            ],
            // Right
            [
                21, 22, 23, 24, 25, 26, 27, 28
            ]
        ]
    ],
    // Bottom
    [
        // Adult
        [
            // Left
            [
                48, 47, 46, 45, 44, 43, 42, 41
            ],
            // Right
            [
                31, 32, 33, 34, 35, 36, 37, 38
            ]
        ],
        // Milk
        [
            // Left
            [
                85, 84, 83, 82, 81
            ],
            // Right
            [
                71, 72, 73, 74, 75
            ]
        ],
    ],
];

export default function DentalAbnormalitiesShow(props: Props) {
    const { medical_record } = props;

    return (
        <>
            <div className=''>
                <h2 className="text-xl font-semibold">Kelainan Gigi Geligi</h2>
                <div className="max-w-7xl mx-auto flex flex-col gap-1">
                    {
                        REGION[0].map((row, i) => (
                            <div className={`grid grid-cols-2 ${i + 1 < REGION[0].length ? "border-b-4 border-gray-100" : ""}`} key={i}>
                                {
                                    row.map((half, j) => (
                                        <div className={`grid grid-cols-8 gap-2 ${j % 2 == 1 ? "place-content-end border-l-2 border-gray-100" : "place-content-start border-r-2 border-gray-100"}`}
                                            key={
                                                (i * 2) + j
                                            }
                                        >
                                            {
                                                i == 0 && j == 0 && (
                                                    <div className=" p-1 text-center col-span-3">
                                                    </div>
                                                )
                                            }
                                            {
                                                half.map((it, k) => (
                                                    <div className="border border-black grid-1" key={(i * 2) + j + k}>
                                                        <div className="text-center h-8">
                                                            {medical_record.odontogram[it] ?? " "}
                                                        </div>
                                                        <div className="border border-t-black p-1 text-center">
                                                            {it}
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                    {
                        REGION[1].map((row, i) => (
                            <div className={`grid grid-cols-2 ${i + 1 < REGION[1].length ? "border-b-4 border-gray-100" : ""}`} key={i}>
                                {
                                    row.map((half, j) => (
                                        <div className={`grid grid-cols-8 gap-1 ${j % 2 == 1 ? "place-content-end border-l-2 border-gray-100" : " place-content-start border-r-2 border-gray-100"}`}
                                            key={
                                                (i * 2) + j
                                            }
                                        >
                                            {
                                                i === 1 && j == 0 && (
                                                    <div className=" p-1 text-center col-span-3">

                                                    </div>
                                                )
                                            }
                                            {
                                                half.map((it, k) => (
                                                    <div className="border border-black" key={(i * 2) + j + k}>
                                                        <div className="border border-b-black p-1 text-center">
                                                            {it}
                                                        </div>
                                                        <div className="text-center h-8">
                                                            {medical_record.odontogram[it] ?? " "}
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex gap-5">
                <div className="basis-2/3 flex flex-col gap-3">
                    <p className="font-semibold">Kode Status Karies Gigi</p>
                    <table className="border border-black w-full">
                        <thead>
                            <tr className="border border-black">
                                <th colSpan={2} className="border border-black">GIGI</th>
                                <th rowSpan={2} className="border border-black">Status/Kondisi</th>
                            </tr>
                            <tr className="border border-black">
                                <th className="border border-black">
                                    Tetap
                                </th>
                                <th className="border border-black">
                                    Susu
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border border-black">
                                <td className="border border-black text-center">0</td>
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
                                <td className="border border-black p-1">Gigi tidak termasuk kriteria di atas</td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <p className="font-semibold">
                            Kelainan Gigi
                        </p>
                        <table className="border border-black w-full">
                            <thead>
                                <tr className="border border-black">
                                    <th className="border border-black">Kelainan Gigi</th>
                                    <th className="border border-black">Keterangan</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border border-black">
                                    <td className="border border-black">Bentuk Gigi</td>
                                    <td className="border border-black text-center">{medical_record.is_teeth_shape_normal ? <span><CheckIcon /> Normal</span> : <span><CloseIcon /> Tidak Normal</span>}</td>
                                </tr>
                                <tr className="border border-black">
                                    <td className="border border-black">Jumlah Gigi</td>
                                    <td className="border border-black text-center">{medical_record.is_teeth_amount_normal ? <span><CheckIcon /> Normal</span> : <span><CloseIcon /> Tidak Normal</span>}</td>
                                </tr>
                                <tr className="border border-black">
                                    <td className="border border-black">Warna Gigi</td>
                                    <td className="border border-black text-center">{medical_record.is_teeth_color_normal ? <span><CheckIcon /> Normal</span> : <span><CloseIcon /> Tidak Normal</span>}</td>
                                </tr>
                                <tr className="border border-black">
                                    <td className="border border-black">Posisi Gigi</td>
                                    <td className="border border-black text-center">{medical_record.is_teeth_position_normal ? <span><CheckIcon /> Normal</span> : <span><CloseIcon /> Tidak Normal</span>}</td>
                                </tr>
                                <tr className="border border-black">
                                    <td className="border border-black">Ukuran Gigi</td>
                                    <td className="border border-black text-center">{medical_record.is_teeth_size_normal ? <span><CheckIcon /> Normal</span> : <span><CloseIcon /> Tidak Normal</span>}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="basis-1/3">
                    <p className="font-semibold">Kelainan Jaringan Keras Gigi</p>
                    <div className="">
                        <label className="block">
                            Gigi Tetap :
                        </label>
                        <div className="mx-8 flex flex-col gap-2">
                            <div className="flex gap-3">
                                <label className="my-auto basis-1/6">
                                    D :
                                </label>
                                <p>
                                    {medical_record.hard_tissue_abnormalities.permanent_teeth.d}
                                </p>
                            </div>
                            <div className="flex gap-3 w-full">
                                <label className="my-auto basis-1/6">
                                    M :
                                </label>
                                <p>
                                    {medical_record.hard_tissue_abnormalities.permanent_teeth.m}
                                </p>
                            </div>
                            <div className="flex gap-3 w-full">
                                <label className="my-auto basis-1/6">
                                    F :
                                </label>
                                <p>
                                    {medical_record.hard_tissue_abnormalities.permanent_teeth.f}
                                </p>
                            </div>
                            <Divider></Divider>
                            <div className="flex gap-3 w-full">
                                <label className="my-auto basis-1/6">
                                    DMF-T :
                                </label>
                                <p>
                                    {medical_record.hard_tissue_abnormalities.permanent_teeth.dmft}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block">
                            Gigi Susu :
                        </label>
                        <div className="mx-8 flex flex-col gap-2">
                            <div className="flex gap-3 w-full">
                                <label className="my-auto basis-1/6">
                                    d :
                                </label>
                                <p>
                                    {medical_record.hard_tissue_abnormalities.milk_teeth.d}
                                </p>
                            </div>
                            <div className="flex gap-3 w-full">
                                <label className="my-auto basis-1/6">
                                    e :
                                </label>
                                <p>
                                    {medical_record.hard_tissue_abnormalities.milk_teeth.e}
                                </p>
                            </div>
                            <div className="flex gap-3 w-full">
                                <label className="my-auto basis-1/6">
                                    f :
                                </label>
                                <p>
                                    {medical_record.hard_tissue_abnormalities.milk_teeth.f}
                                </p>
                            </div>
                            <Divider></Divider>
                            <div className="flex gap-3 w-full">
                                <label className="my-auto basis-1/6">
                                    def-t :
                                </label>
                                <p>
                                    {medical_record.hard_tissue_abnormalities.milk_teeth.deft}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
