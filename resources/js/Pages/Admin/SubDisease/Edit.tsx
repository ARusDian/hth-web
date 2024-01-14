import React from 'react';
import route from 'ziggy-js';


import Form from './Form';
import AdminFormLayout from '@/Layouts/Admin/AdminFormLayout';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import Api from '@/Utils/Api';
import { TreatmentModel } from '@/Models/Treatment';
import { BaseSubDiseaseModel } from '@/Models/SubDisease';
import { DiseaseModel } from '@/Models/Disease';
import { SymptomModel } from '@/Models/Symptom';

interface Props {
  diseases: DiseaseModel[];
  sub_disease:BaseSubDiseaseModel;
  treatments: TreatmentModel[];
  symptoms: SymptomModel[];
}

export default function Edit(props: Props) {
  let sub_disease = props.sub_disease;
  let form = useForm<BaseSubDiseaseModel>({
    defaultValues: sub_disease,
  });

  async function onSubmit(value: any) {
    await Api.postAsync({
      route: route('sub-disease.update', sub_disease.id),
      value: {
        ...value,
        _method: 'PUT',
      },
      form,
    });
  }

  return (
    <AdminFormLayout
      title="Edit Sub Penyakit"
      backRoute={route('sub-disease.show', sub_disease.id)}
      backRouteTitle="Kembali"
    >
      <form
        className="flex-col gap-5 py-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Form
          form={form}
          diseases={props.diseases}
          treatments={props.treatments}
          symptoms={props.symptoms}
          className="my-5 mx-2"
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            variant="contained"
            color="warning"
            size="large"
            disabled={form.formState.isSubmitting}
          >
            Update
          </Button>
        </div>
      </form>
    </AdminFormLayout>
  );
}
