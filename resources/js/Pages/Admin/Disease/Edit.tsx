import React from 'react';
import route from 'ziggy-js';


import Form from './Form';
import AdminFormLayout from '@/Layouts/Admin/AdminFormLayout';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import Api from '@/Utils/Api';
import {  ReasonModel } from '@/Models/Reason';
import { BaseDiseaseModel } from '@/Models/Disease';
import { SymptomModel } from '@/Models/Symptom';
import { TreatmentModel } from '@/Models/Treatment';

interface Props {
  reasons: ReasonModel[];
  symptoms: SymptomModel[];
  treatments: TreatmentModel[];
  disease: BaseDiseaseModel;
}

export default function Edit(props: Props) {
  let disease = props.disease;
  let form = useForm<BaseDiseaseModel>({
    defaultValues: disease,
  });

  async function onSubmit(value: any) {
    await Api.postAsync({
      route: route('disease.update', disease.id),
      value: {
        ...value,
        _method: 'PUT',
      },
      form,
    });
  }

  return (
    <AdminFormLayout
      title="Edit Penyakit"
      backRoute={route('disease.show', disease.id)}
      backRouteTitle="Kembali"
    >
      <form
        className="flex-col gap-5 py-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Form
          form={form}
          reasons={props.reasons}
          symptoms={props.symptoms}
          treatments={props.treatments}
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
