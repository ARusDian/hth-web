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

    const form = useForm<{
        sub_disease_id: number;
    }>({
        defaultValues: {
            sub_disease_id: props.record.sub_disease_id || props.sub_diseases[0].id
        }
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
                    <Controller
                        control={form.control}
                        name="sub_disease_id"
                        render={({ field }) => (
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">Sub Penyakit yang dipilih</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                    defaultValue={form.formState.defaultValues?.sub_disease_id || props.sub_diseases[0].id}
                                    onChange={field.onChange}
                                >
                                    {props.sub_diseases.map((sub_disease) => (
                                        <FormControlLabel
                                            key={sub_disease.id}
                                            control={<Radio />}
                                            label={sub_disease.name}
                                            value={sub_disease.id}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        )}
                    />
                </div>
                <div className="flex justify-end">
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
