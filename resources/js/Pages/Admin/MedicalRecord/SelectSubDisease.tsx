import MRTSelectRowTable from "@/Components/MRTSelectRowTable";
import AdminFormLayout from "@/Layouts/Admin/AdminFormLayout";
import { DiseaseModel } from "@/Models/Disease";
import { DiseaseRecordModel } from "@/Models/MedicalRecord";
import { SubDiseaseModel } from "@/Models/SubDisease";
import Api from "@/Utils/Api";
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import route from "ziggy-js";

interface Props {
    medical_record: number;
    record: DiseaseRecordModel;
    disease: DiseaseModel;
    sub_diseases: SubDiseaseModel[];

}



export default function SelectSubDisease(props: Props) {

    const form = useForm<DiseaseRecordModel>({
        defaultValues: {
            sub_diseases: props.record.sub_diseases || [],
        },
    });

    async function onSubmit(value: any) {
        await Api.postAsync({
            route: route('medical-record.store-sub-disease', [
                props.medical_record,
                props.record
            ]), value, form
        });
    }
    return (
        <AdminFormLayout
            title="Pilih Sub Penyakit untuk Penyakit"

        >
            <div className=''>
                <h2 className="text-2xl font-semibold">Pilih Sub Penyakit {props.disease.name}</h2>
            </div>
            <form
                className="flex-col gap-5 py-5"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <div className={`flex-col gap-5`}>
                    <MRTSelectRowTable<SubDiseaseModel, DiseaseRecordModel>
                        form={form}
                        name="sub_diseases"
                        insertFunction={(data, rowSelection) => (data as SubDiseaseModel[])!.filter((d, i) => {
                            return rowSelection[d.id];
                        }).map(it => it.id)}
                        tableOptions={{
                            columns: [
                                {
                                    accessorKey: 'id',
                                    header: 'ID',
                                },
                                {
                                    accessorKey: 'name',
                                    header: 'Sub Penyakit',
                                },
                            ], // Add the columns property here
                            data: props.sub_diseases, // Add the data property here
                            state: {
                                rowSelection: form.formState.defaultValues?.sub_diseases?.reduce((acc, cur) => {
                                    if (cur) {
                                        acc[cur.id!] = true;
                                    }
                                    return acc;
                                }, {} as Record<number, boolean>) ?? {},
                            },
                        }}
                    />
                </div>
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
        </AdminFormLayout>
    )
}
