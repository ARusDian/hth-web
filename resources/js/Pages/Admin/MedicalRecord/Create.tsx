import React from 'react';
import route from 'ziggy-js';

import Form from './Form';
import AdminFormLayout from '@/Layouts/Admin/AdminFormLayout';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import _ from 'lodash';
import Api from '@/Utils/Api';
import { SymptomModel } from '@/Models/Symptom';
import { BaseMedicalRecordModel } from '@/Models/MedicalRecord';

interface Props {
  symptoms: SymptomModel[];
}

export default function Create(props: Props) {
  let form = useForm<BaseMedicalRecordModel>({
    defaultValues: {
      name: '',
      address: '',
      place_of_birth: '',
      date_of_birth: '',
      NIK: '',
      gender: 'L',
      race: '',
      occupation: '',
      phone_number: '',
      family_phone_number: null,
      main_complaint: '',
      additional_complaint: null,
      blood_type: null,
      blood_pressure: '',
      pulse: 0,
      body_temperature: 0,
      is_respiratory_congestion: false,
      is_heart_disease: false,
      is_diabetes: false,
      is_hemophilia: false,
      is_hepatitis: false,
      is_mag: false,
      another_disease: null,
      food_allergy: null,
      drug_allergy: null,
      symptoms_arr: [],
    },
  });

  async function onSubmit(value: any) {
    await Api.postAsync({ route: route('medical-record.store'), value, form });
  }

  return (
    <AdminFormLayout
      title="Tambah Rekam Medis"
      backRoute={route('medical-record.index')}
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
            color="primary"
            size="large"
          >
            Submit
          </Button>
        </div>
      </form>
    </AdminFormLayout>
  );
}
