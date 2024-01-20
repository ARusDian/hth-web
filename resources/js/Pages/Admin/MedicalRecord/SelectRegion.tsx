import CheckBoxButton from "@/Components/CheckBoxButton";
import InputError from "@/Components/Jetstream/InputError";
import AdminFormLayout from "@/Layouts/Admin/AdminFormLayout";
import { DiseaseRecordModel, MedicalRecordModel, SubDiseaseRecordModel } from "@/Models/MedicalRecord";
import Api from "@/Utils/Api";
import { InputLabel, ToggleButtonGroup, ToggleButton, Button } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import route from "ziggy-js";

interface Props {
    medical_record: MedicalRecordModel;
    record: DiseaseRecordModel;
    sub_disease_record: SubDiseaseRecordModel | null;
}

const REGION = [
    // Adult
    [
        // Top
        [
            // Left
            [
                18, 17, 16, 15, 14, 13, 12, 11
            ],
            // Right
            [
                21, 22, 23, 24, 25, 26, 27, 28
            ]
        ],
        // Bottom
        [
            // Left
            [
                48, 47, 46, 45, 44, 43, 42, 41
            ],
            // Right
            [
                31, 32, 33, 34, 35, 36, 37, 38
            ]
        ]
    ],
    // Milk
    [
        // Top
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
        // Bottom
        [
            // Left
            [
                85, 84, 83, 82, 81
            ],
            // Right
            [
                71, 72, 73, 74, 75
            ]
        ]
    ],
];



export default function SelectRegion(props: Props) {
    console.log(props.sub_disease_record);
    const form = useForm<DiseaseRecordModel | SubDiseaseRecordModel>({
        defaultValues: {
            region: props.sub_disease_record?.region || props.record.region || [],
        },
    });

    async function onSubmit(value: any) {
        await Api.postAsync({
            route: route('medical-record.store-region', {
                medical_record: props.medical_record,
                record: props.record,
                sub_record: props.sub_disease_record?.id || null
            }), value, form
        });
    }

    return (
        <AdminFormLayout
            title="Region Gigi"
            backRoute={route('medical-record.show', [props.medical_record])}
        >
            <div className="flex flex-col gap-5">
                <div className="mx-auto">
                    <p className="text-xl">
                        Gambar Indeks Region Gigi
                    </p>
                    <img src="/assets/image/teeth-region.jpg" alt=""

                        className="h-96 "
                    />
                    <p className="text-xl border-t-2 border-gray-200">
                        Gambar Indeks Region Gigi Susu
                    </p>
                    <img src="/assets/image/milk-teeth-region.jpg" alt=""

                        className="h-96 mx-auto "
                    />
                </div>
                <form
                    className=" py-5 border-t-2 border-gray-200"
                    onSubmit={form.handleSubmit(onSubmit)}
                >

                    <InputLabel htmlFor="type">Pilih Region Gigi untuk penyakit <span className="text-black font-semibold">{props.record.disease?.name} {props.sub_disease_record ? ` - ${props.sub_disease_record.sub_disease?.name}` : null}</span></InputLabel>

                    <div className="max-w-7xl mx-auto flex flex-col">
                        <p className="text-xl font-semibold">
                            Gigi Dewasa
                        </p>
                        {
                            REGION[0].map((row, i) => (
                                <div className={`grid grid-cols-2 ${i + 1 < REGION[0].length ? "border-b-4 border-gray-100" : ""}`} key={i}>
                                    {
                                        row.map((half, j) => (
                                            <div className={`grid grid-cols-8 gap-2 ${j % 2 == 1 ? "place-content--start pl-2 border-l-2 border-gray-100" : "pr-2 place-content--end border-r-2 border-gray-100"}`} key={
                                                (i * 2) + j
                                            } >
                                                {
                                                    half.map((it, k) => (
                                                        <CheckBoxButton
                                                            key={(i * 2) + j + k}
                                                            label={it.toString()}
                                                            checked={form.watch('region')?.includes(it)}
                                                            onChange={(checked) => {
                                                                console.log(checked, it, k);
                                                                if (checked) {
                                                                    form.setValue('region', [...form.watch('region') || [], it]);
                                                                } else {
                                                                    console.log(form.watch('region')!.filter((v: number) => v !== it));
                                                                    form.setValue('region', form.watch('region')!.filter((v: number) => v !== it));
                                                                }
                                                            }}
                                                        />
                                                    ))
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                        <p className="text-xl font-semibold">
                            Gigi Susu
                        </p>
                        {
                            REGION[1].map((row, i) => (
                                <div className={`grid grid-cols-2 ${i + 1 < REGION[1].length ? "border-b-4 border-gray-100" : ""}`} key={i}>
                                    {
                                        row.map((half, j) => (
                                            <div className={`grid grid-cols-5 gap-2 ${j % 2 == 1 ? "place-content--start pl-2 border-l-2 border-gray-100" : "pr-2 place-content--end border-r-2 border-gray-100"}`} key={
                                                (i * 2) + j
                                            } >
                                                {
                                                    half.map((it, k) => (
                                                        <CheckBoxButton
                                                            key={(i * 2) + j + k}
                                                            label={it.toString()}
                                                            checked={form.watch('region')?.includes(it)}
                                                            onChange={(checked) => {
                                                                console.log(checked, it, k);
                                                                if (checked) {
                                                                    form.setValue('region', [...form.watch('region') || [], it]);
                                                                } else {
                                                                    console.log(form.watch('region')!.filter((v: number) => v !== it));
                                                                    form.setValue('region', form.watch('region')!.filter((v: number) => v !== it));
                                                                }
                                                            }}
                                                        />
                                                    ))
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                    <InputError
                        className="mt-2"
                        message={form.formState.errors.region?.message}
                    />
                    <div className="flex justify-end my-5">
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>

        </AdminFormLayout>
    )
}
