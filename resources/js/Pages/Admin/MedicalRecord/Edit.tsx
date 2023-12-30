import React from 'react';
import route from 'ziggy-js';


import Form from './Form';
import AdminFormLayout from '@/Layouts/Admin/AdminFormLayout';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import Api from '@/Utils/Api';
import { BaseDiseaseModel } from '@/Models/Disease';
import { SymptomModel } from '@/Models/Symptom';
import { BaseMedicalRecordModel } from '@/Models/MedicalRecord';

interface Props {
  symptoms: SymptomModel[];
  medical_record: BaseMedicalRecordModel;
}

export default function Edit(props: Props) {
  let medical_record = props.medical_record;
  let form = useForm<BaseMedicalRecordModel>({
    defaultValues: medical_record,
  });

  async function onSubmit(value: any) {
    await Api.postAsync({
      route: route('medical-record.update', medical_record.id),
      value: {
        ...value,
        _method: 'PUT',
      },
      form,
    });
  }

  return (
    <AdminFormLayout
      title="Edit Rekam Medis"
      backRoute={route('medical-record.show', medical_record.id)}
      backRouteTitle="Kembali"
    >
      <form
        className="flex-col gap-5 py-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Form
          form={form}
          symptoms={props.symptoms}
          className="my-5 mx-2"
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            variant="contained"
            color="warning"
            size="large"
          >
            Update
          </Button>
        </div>
      </form>
    </AdminFormLayout>
  );
}
