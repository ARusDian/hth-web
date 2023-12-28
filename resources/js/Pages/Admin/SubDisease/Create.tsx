import React from 'react';
import route from 'ziggy-js';

import Form from './Form';
import AdminFormLayout from '@/Layouts/Admin/AdminFormLayout';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import _ from 'lodash';
import Api from '@/Utils/Api';
import { TreatmentModel } from '@/Models/Treatment';
import { BaseSubDiseaseModel } from '@/Models/SubDisease';
import { DiseaseModel } from '@/Models/Disease';

interface Props {
  diseases : DiseaseModel[];
  treatments : TreatmentModel[];
}

export default function Create(props: Props) {
  let form = useForm<BaseSubDiseaseModel>({
    defaultValues: {
      name: '',
      disease : {},
    },
  });

  async function onSubmit(value: any) {
    await Api.postAsync({ route: route('sub-disease.store'), value, form });
  }

  return (
    <AdminFormLayout
      title="Tambah Sub Penyakit"
      backRoute={route('sub-disease.index')}
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
          className="my-5 mx-2"
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={form.formState.isSubmitting}
          >
            Submit
          </Button>
        </div>
      </form>
    </AdminFormLayout>
  );
}
