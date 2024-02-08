import InputLabel from "@/Components/Jetstream/InputLabel";
import { FormControlLabel, Checkbox, Divider } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import ConditionVitalityForm from "./ConditionVitalityForm";
import PeriodontalTissueForm from "./PeriodontalTissueForm";

interface Props {
    form: any;
    className?: string;
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




export default function AdditionInspectionForm(props: Props) {
    const { form } = props;
    return (
        <div className={`flex flex-col gap-3 ${props.className}`}>
            <div className="form-control w-full mt-4">
                <InputLabel >
                    Wajah
                </InputLabel>
                <Controller
                    control={form.control}
                    name='is_symetric_face'
                    render={({ field }) => (
                        <>
                            <FormControlLabel control={
                                <Checkbox checked={field.value} onChange={
                                    (e) => {
                                        field.onChange(e.target.checked)
                                    }
                                } />
                            }
                                label="Wajah Simetris"
                            />
                        </>
                    )}
                />
            </div>
            <div className="form-control w-full mt-4">
                <InputLabel >
                    Kelenjar Limfa
                </InputLabel>
                <div className="flex gap-5 px-20 w-full">
                    <div className="flex-1">
                        <InputLabel >
                            Kanan
                        </InputLabel>
                        <Controller
                            control={form.control}
                            name='spleen_gland.right.is_palpable'
                            render={({ field }) => (
                                <>
                                    <FormControlLabel control={
                                        <Checkbox checked={field.value} onChange={
                                            (e) => {
                                                field.onChange(e.target.checked)
                                            }
                                        } />
                                    }
                                        label="Teraba"
                                    />
                                </>
                            )}
                        />
                        <Controller
                            control={form.control}
                            name='spleen_gland.right.ishard'
                            render={({ field }) => (
                                <>
                                    <FormControlLabel control={
                                        <Checkbox checked={field.value} onChange={
                                            (e) => {
                                                field.onChange(e.target.checked)
                                            }
                                        } />
                                    }
                                        label="Keras"
                                    />
                                </>
                            )}
                        />
                        <Controller
                            control={form.control}
                            name='spleen_gland.right.is_painful'
                            render={({ field }) => (
                                <>
                                    <FormControlLabel control={
                                        <Checkbox checked={field.value} onChange={
                                            (e) => {
                                                field.onChange(e.target.checked)
                                            }
                                        } />
                                    }
                                        label="Nyeri"
                                    />
                                </>
                            )}
                        />
                    </div>
                    <div className="flex-1">
                        <InputLabel >
                            Kiri
                        </InputLabel>
                        <Controller
                            control={form.control}
                            name='spleen_gland.left.is_palpable'
                            render={({ field }) => (
                                <>
                                    <FormControlLabel control={
                                        <Checkbox checked={field.value} onChange={
                                            (e) => {
                                                field.onChange(e.target.checked)
                                            }
                                        } />
                                    }
                                        label="Teraba"
                                    />
                                </>
                            )}
                        />
                        <Controller
                            control={form.control}
                            name='spleen_gland.left.ishard'
                            render={({ field }) => (
                                <>
                                    <FormControlLabel control={
                                        <Checkbox checked={field.value} onChange={
                                            (e) => {
                                                field.onChange(e.target.checked)
                                            }
                                        } />
                                    }
                                        label="Keras"
                                    />
                                </>
                            )}
                        />
                        <Controller
                            control={form.control}
                            name='spleen_gland.left.is_painful'
                            render={({ field }) => (
                                <>
                                    <FormControlLabel control={
                                        <Checkbox checked={field.value} onChange={
                                            (e) => {
                                                field.onChange(e.target.checked)
                                            }
                                        } />
                                    }
                                        label="Nyeri"
                                    />
                                </>
                            )}
                        />
                    </div>
                </div>
            </div>
            <div className="form-control w-full mt-4">
                <InputLabel >
                    Kelainan Gigi geligi
                </InputLabel>
                <Controller
                    control={form.control}
                    name='odontogram'
                    render={({ field }) => (
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
                                                                <div className="">
                                                                    <input
                                                                        className="w-full border-none text-center"
                                                                        type="text"
                                                                        value={form.watch('odontogram')?.[it]}
                                                                        onChange={(e) => {
                                                                            form.setValue('odontogram', { ...form.watch('odontogram'), [it]: e.target.value });
                                                                        }}
                                                                    />
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
                                                                <div className="">
                                                                    <input
                                                                        className="w-full border-none text-center"
                                                                        type="text"
                                                                        value={form.watch('odontogram')?.[it]}
                                                                        onChange={(e) => {
                                                                            form.setValue('odontogram', { ...form.watch('odontogram'), [it]: e.target.value });
                                                                        }}
                                                                    />
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
                    )}
                />
                <div className="flex gap-5">
                    <div className="basis-2/3">
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
                            <ul className="">
                                <li className="flex gap-3">
                                    <label
                                        className="my-auto"
                                    >
                                        - Bentuk Gigi :
                                    </label>
                                    <Controller
                                        control={form.control}
                                        name='is_teeth_shape_normal'
                                        render={({ field }) => (
                                            <FormControlLabel control={
                                                <Checkbox checked={field.value} onChange={
                                                    (e) => {
                                                        field.onChange(e.target.checked)
                                                    }
                                                } />
                                            }
                                                label="Normal"
                                            />
                                        )}
                                    />
                                </li>
                                <li className="flex gap-3">
                                    <label
                                        className="my-auto"
                                    >
                                        - Jumlah Gigi :
                                    </label>
                                    <Controller
                                        control={form.control}
                                        name='is_teeth_amount_normal'
                                        render={({ field }) => (
                                            <FormControlLabel control={
                                                <Checkbox checked={field.value} onChange={
                                                    (e) => {
                                                        field.onChange(e.target.checked)
                                                    }
                                                } />
                                            }
                                                label="Normal"
                                            />
                                        )}
                                    />
                                </li>
                                <li className="flex gap-3">
                                    <label
                                        className="my-auto"
                                    >
                                        - Warna Gigi :
                                    </label>
                                    <Controller
                                        control={form.control}
                                        name='is_teeth_color_normal'
                                        render={({ field }) => (
                                            <FormControlLabel control={
                                                <Checkbox checked={field.value} onChange={
                                                    (e) => {
                                                        field.onChange(e.target.checked)
                                                    }
                                                } />
                                            }
                                                label="Normal"
                                            />
                                        )}
                                    />
                                </li>
                                <li className="flex gap-3">
                                    <label
                                        className="my-auto"
                                    >
                                        - Posisi Gigi :
                                    </label>
                                    <Controller
                                        control={form.control}
                                        name='is_teeth_position_normal'
                                        render={({ field }) => (
                                            <FormControlLabel control={
                                                <Checkbox checked={field.value} onChange={
                                                    (e) => {
                                                        field.onChange(e.target.checked)
                                                    }
                                                } />
                                            }
                                                label="Normal"
                                            />
                                        )}
                                    />
                                </li>
                                <li className="flex gap-3">
                                    <label
                                        className="my-auto"
                                    >
                                        - Ukuran Gigi :
                                    </label>
                                    <Controller
                                        control={form.control}
                                        name='is_teeth_size_normal'
                                        render={({ field }) => (
                                            <FormControlLabel control={
                                                <Checkbox checked={field.value} onChange={
                                                    (e) => {
                                                        field.onChange(e.target.checked)
                                                    }
                                                } />
                                            }
                                                label="Normal"
                                            />
                                        )}
                                    />
                                </li>
                            </ul>
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
                                    <label className="my-auto basis-3/12">
                                        D :
                                    </label>
                                    <Controller
                                        control={form.control}
                                        name='hard_tissue_abnormalities.permanent_teeth.d'
                                        render={({ field }) => (
                                            <input
                                                type="text"
                                                value={field.value}
                                                onChange={(e) => {
                                                    field.onChange(e.target.value);
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                                <div className="flex gap-3 w-full">
                                    <label className="my-auto basis-3/12">
                                        M :
                                    </label>
                                    <Controller
                                        control={form.control}
                                        name='hard_tissue_abnormalities.permanent_teeth.m'
                                        render={({ field }) => (
                                            <input
                                                type="text"
                                                value={field.value}
                                                onChange={(e) => {
                                                    field.onChange(e.target.value);
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                                <div className="flex gap-3 w-full">
                                    <label className="my-auto basis-3/12">
                                        F :
                                    </label>
                                    <Controller
                                        control={form.control}
                                        name='hard_tissue_abnormalities.permanent_teeth.f'
                                        render={({ field }) => (
                                            <input
                                                type="text"
                                                value={field.value}
                                                onChange={(e) => {
                                                    field.onChange(e.target.value);
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                                <Divider></Divider>
                                <div className="flex gap-3 w-full">
                                    <label className="my-auto basis-3/12">
                                        DMF-T :
                                    </label>
                                    <Controller
                                        control={form.control}
                                        name='hard_tissue_abnormalities.permanent_teeth.dmft'
                                        render={({ field }) => (
                                            <input
                                                type="text"
                                                value={field.value}
                                                onChange={(e) => {
                                                    field.onChange(e.target.value);
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block">
                                Gigi Susu :
                            </label>
                            <div className="mx-8 flex flex-col gap-2">
                                <div className="flex gap-3 w-full">
                                    <label className="my-auto basis-3/12">
                                        d :
                                    </label>
                                    <Controller
                                        control={form.control}
                                        name='hard_tissue_abnormalities.milk_teeth.d'
                                        render={({ field }) => (
                                            <input
                                                type="text"
                                                value={field.value}
                                                onChange={(e) => {
                                                    field.onChange(e.target.value);
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                                <div className="flex gap-3 w-full">
                                    <label className="my-auto basis-3/12">
                                        e :
                                    </label>
                                    <Controller
                                        control={form.control}
                                        name='hard_tissue_abnormalities.milk_teeth.e'
                                        render={({ field }) => (
                                            <input
                                                type="text"
                                                value={field.value}
                                                onChange={(e) => {
                                                    field.onChange(e.target.value);
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                                <div className="flex gap-3 w-full">
                                    <label className="my-auto basis-3/12">
                                        f :
                                    </label>
                                    <Controller
                                        control={form.control}
                                        name='hard_tissue_abnormalities.milk_teeth.f'
                                        render={({ field }) => (
                                            <input
                                                type="text"
                                                value={field.value}
                                                onChange={(e) => {
                                                    field.onChange(e.target.value);
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                                <Divider></Divider>
                                <div className="flex gap-3 w-full">
                                    <label className="my-auto basis-3/12">
                                        def-t :
                                    </label>
                                    <Controller
                                        control={form.control}
                                        name='hard_tissue_abnormalities.milk_teeth.deft'
                                        render={({ field }) => (
                                            <input
                                                type="text"
                                                value={field.value}
                                                onChange={(e) => {
                                                    field.onChange(e.target.value);
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-control w-full mt-4">
                <ConditionVitalityForm
                    form={form}
                />
            </div>
            <div className="form-control w-full mt-4">
                <div>
                    <p className="font-semibold">
                        Anomali Gigi
                    </p>
                    <ul className="">
                        <li className="flex gap-3">
                            <label
                                className="my-auto"
                            >
                                - Occlusi :
                            </label>
                            <Controller
                                control={form.control}
                                name='occlusion'
                                render={({ field }) => (
                                    <div className="flex gap-5">
                                        <div className="flex gap-1">
                                            <input
                                                className="my-auto"
                                                type="radio"
                                                value="Normal Bite"
                                                checked={field.value === "Normal Bite"}
                                                onChange={(e) => {
                                                    field.onChange(e.target.value);
                                                }}
                                            />
                                            <label className="my-auto">
                                                Normal Bite
                                            </label>
                                        </div>
                                        <div className="flex gap-1">
                                            <input
                                                className="my-auto"
                                                type="radio"
                                                value="Cross Bite"
                                                checked={field.value === "Cross Bite"}
                                                onChange={(e) => {
                                                    field.onChange(e.target.value);
                                                }}
                                            />
                                            <label className="my-auto">
                                                Cross Bite
                                            </label>
                                        </div>
                                        <div className="flex gap-1">
                                            <input
                                                className="my-auto"
                                                type="radio"
                                                value="Steep Bite"
                                                checked={field.value === "Steep Bite"}
                                                onChange={(e) => {
                                                    field.onChange(e.target.value);
                                                }}
                                            />
                                            <label className="my-auto">
                                                Steep Bite
                                            </label>
                                        </div>
                                    </div>
                                )}
                            />
                        </li>
                        <li className="flex gap-3">
                            <label
                                className="my-auto"
                            >
                                - Bentuk Gigi :
                            </label>
                            <Controller
                                control={form.control}
                                name='is_teeth_shape_anomaly'
                                render={({ field }) => (
                                    <FormControlLabel control={
                                        <Checkbox checked={field.value} onChange={
                                            (e) => {
                                                field.onChange(e.target.checked)
                                            }
                                        } />
                                    }
                                        label="Normal"
                                    />
                                )}
                            />
                        </li>
                        <li className="flex gap-3">
                            <label
                                className="my-auto"
                            >
                                - Warna Gigi :
                            </label>
                            <Controller
                                control={form.control}
                                name='is_teeth_color_anomaly'
                                render={({ field }) => (
                                    <FormControlLabel control={
                                        <Checkbox checked={field.value} onChange={
                                            (e) => {
                                                field.onChange(e.target.checked)
                                            }
                                        } />
                                    }
                                        label="Normal"
                                    />
                                )}
                            />
                        </li>
                        <li className="flex gap-3">
                            <label
                                className="my-auto"
                            >
                                - Posisi Gigi :
                            </label>
                            <Controller
                                control={form.control}
                                name='is_teeth_position_anomaly'
                                render={({ field }) => (
                                    <FormControlLabel control={
                                        <Checkbox checked={field.value} onChange={
                                            (e) => {
                                                field.onChange(e.target.checked)
                                            }
                                        } />
                                    }
                                        label="Normal"
                                    />
                                )}
                            />
                        </li>
                        <li className="flex gap-3">
                            <label
                                className="my-auto"
                            >
                                - Ukuran Gigi :
                            </label>
                            <Controller
                                control={form.control}
                                name='is_teeth_size_anomaly'
                                render={({ field }) => (
                                    <FormControlLabel control={
                                        <Checkbox checked={field.value} onChange={
                                            (e) => {
                                                field.onChange(e.target.checked)
                                            }
                                        } />
                                    }
                                        label="Normal"
                                    />
                                )}
                            />
                        </li>
                        <li className="flex gap-3">
                            <label
                                className="my-auto"
                            >
                                - Struktur Gigi :
                            </label>
                            <Controller
                                control={form.control}
                                name='is_teeth_structure_anomaly'
                                render={({ field }) => (
                                    <FormControlLabel control={
                                        <Checkbox checked={field.value} onChange={
                                            (e) => {
                                                field.onChange(e.target.checked)
                                            }
                                        } />
                                    }
                                        label="Normal"
                                    />
                                )}
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="form-control w-full mt-4">
                <InputLabel >
                    Mukosa Mulut
                </InputLabel>
                <div className="mx-10">
                    <table className="w-full">
                        <tbody>
                            <tr className="border-y">
                                <td>
                                    <InputLabel >
                                        Lidah
                                    </InputLabel>
                                </td>
                                <td className="flex flex-col">
                                    <Controller
                                        control={form.control}
                                        name='mucose_tongue.is_color_change'
                                        render={({ field }) => (
                                            <FormControlLabel control={
                                                <Checkbox checked={field.value} onChange={
                                                    (e) => {
                                                        field.onChange(e.target.checked)
                                                    }
                                                } />
                                            }
                                                label="Perubahan Warna"
                                            />
                                        )}
                                    />
                                    <Controller
                                        control={form.control}
                                        name='mucose_tongue.is_inflammation'
                                        render={({ field }) => (
                                            <FormControlLabel control={
                                                <Checkbox checked={field.value} onChange={
                                                    (e) => {
                                                        field.onChange(e.target.checked)
                                                    }
                                                } />
                                            }
                                                label="Inflamasi"
                                            />
                                        )}
                                    />
                                    <Controller
                                        control={form.control}
                                        name='mucose_tongue.is_ulcer'
                                        render={({ field }) => (
                                            <FormControlLabel control={
                                                <Checkbox checked={field.value} onChange={
                                                    (e) => {
                                                        field.onChange(e.target.checked)
                                                    }
                                                } />
                                            }
                                                label="Ulserasi"
                                            />
                                        )}
                                    />
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td>
                                    <InputLabel >
                                        Pipi
                                    </InputLabel>
                                </td>
                                <td className="flex flex-col">
                                    <Controller
                                        control={form.control}
                                        name='mucose_cheek.is_color_change'
                                        render={({ field }) => (
                                            <FormControlLabel control={
                                                <Checkbox checked={field.value} onChange={
                                                    (e) => {
                                                        field.onChange(e.target.checked)
                                                    }
                                                } />
                                            }
                                                label="Perubahan Warna"
                                            />
                                        )}
                                    />
                                    <Controller
                                        control={form.control}
                                        name='mucose_cheek.is_inflammation'
                                        render={({ field }) => (
                                            <FormControlLabel control={
                                                <Checkbox checked={field.value} onChange={
                                                    (e) => {
                                                        field.onChange(e.target.checked)
                                                    }
                                                } />
                                            }
                                                label="Inflamasi"
                                            />
                                        )}
                                    />
                                    <Controller
                                        control={form.control}
                                        name='mucose_cheek.is_ulcer'
                                        render={({ field }) => (
                                            <FormControlLabel control={
                                                <Checkbox checked={field.value} onChange={
                                                    (e) => {
                                                        field.onChange(e.target.checked)
                                                    }
                                                } />
                                            }
                                                label="Ulserasi"
                                            />
                                        )}
                                    />
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td>
                                    <InputLabel >
                                        Palatum
                                    </InputLabel>
                                </td>
                                <td className="flex flex-col">
                                    <Controller
                                        control={form.control}
                                        name='mucose_palatum.is_color_change'
                                        render={({ field }) => (
                                            <FormControlLabel control={
                                                <Checkbox checked={field.value} onChange={
                                                    (e) => {
                                                        field.onChange(e.target.checked)
                                                    }
                                                } />
                                            }
                                                label="Perubahan Warna"
                                            />
                                        )}
                                    />
                                    <Controller
                                        control={form.control}
                                        name='mucose_palatum.is_inflammation'
                                        render={({ field }) => (
                                            <FormControlLabel control={
                                                <Checkbox checked={field.value} onChange={
                                                    (e) => {
                                                        field.onChange(e.target.checked)
                                                    }
                                                } />
                                            }
                                                label="Inflamasi"
                                            />
                                        )}
                                    />
                                    <Controller
                                        control={form.control}
                                        name='mucose_palatum.is_ulcer'
                                        render={({ field }) => (
                                            <FormControlLabel control={
                                                <Checkbox checked={field.value} onChange={
                                                    (e) => {
                                                        field.onChange(e.target.checked)
                                                    }
                                                } />
                                            }
                                                label="Ulserasi"
                                            />
                                        )}
                                    />
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td>
                                    <InputLabel >
                                        Gusi
                                    </InputLabel>
                                </td>
                                <td className="flex flex-col">
                                    <Controller
                                        control={form.control}
                                        name='mucose_gingiva.is_color_change'
                                        render={({ field }) => (
                                            <FormControlLabel control={
                                                <Checkbox checked={field.value} onChange={
                                                    (e) => {
                                                        field.onChange(e.target.checked)
                                                    }
                                                } />
                                            }
                                                label="Perubahan Warna"
                                            />
                                        )}
                                    />
                                    <Controller
                                        control={form.control}
                                        name='mucose_gingiva.is_inflammation'
                                        render={({ field }) => (
                                            <FormControlLabel control={
                                                <Checkbox checked={field.value} onChange={
                                                    (e) => {
                                                        field.onChange(e.target.checked)
                                                    }
                                                } />
                                            }
                                                label="Inflamasi"
                                            />
                                        )}
                                    />
                                    <Controller
                                        control={form.control}
                                        name='mucose_gingiva.is_ulcer'
                                        render={({ field }) => (
                                            <FormControlLabel control={
                                                <Checkbox checked={field.value} onChange={
                                                    (e) => {
                                                        field.onChange(e.target.checked)
                                                    }
                                                } />
                                            }
                                                label="Ulserasi"
                                            />
                                        )}
                                    />
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td>
                                    <InputLabel >
                                        Bibir
                                    </InputLabel>
                                </td>
                                <td className="flex flex-col">
                                    <Controller
                                        control={form.control}
                                        name='mucose_lips.is_color_change'
                                        render={({ field }) => (
                                            <FormControlLabel control={
                                                <Checkbox checked={field.value} onChange={
                                                    (e) => {
                                                        field.onChange(e.target.checked)
                                                    }
                                                } />
                                            }
                                                label="Perubahan Warna"
                                            />
                                        )}
                                    />
                                    <Controller
                                        control={form.control}
                                        name='mucose_lips.is_inflammation'
                                        render={({ field }) => (
                                            <FormControlLabel control={
                                                <Checkbox checked={field.value} onChange={
                                                    (e) => {
                                                        field.onChange(e.target.checked)
                                                    }
                                                } />
                                            }
                                                label="Inflamasi"
                                            />
                                        )}
                                    />
                                    <Controller
                                        control={form.control}
                                        name='mucose_lips.is_ulcer'
                                        render={({ field }) => (
                                            <FormControlLabel control={
                                                <Checkbox checked={field.value} onChange={
                                                    (e) => {
                                                        field.onChange(e.target.checked)
                                                    }
                                                } />
                                            }
                                                label="Ulserasi"
                                            />
                                        )}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <div className="form-control w-full mt-4">
                <PeriodontalTissueForm form={form} />
            </div>
        </div>
    );
}
