import React from 'react';
import route from 'ziggy-js';

import Form from './Form';
import AdminFormLayout from '@/Layouts/Admin/AdminFormLayout';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import _ from 'lodash';
import Api from '@/Utils/Api';
import { BaseTreatmentGoalModel } from '@/Models/TreatmentGoal';


interface Props {
}

export default function Create(props: Props) {
  let form = useForm<BaseTreatmentGoalModel>({
    defaultValues: {
      name: '',
    },
  });

  async function onSubmit(value: any) {
    await Api.postAsync({ route: route('treatment-goal.store'), value, form });
  }

  return (
    <AdminFormLayout
      title="Tambah Gejala"
      backRoute={route('treatment-goal.index')}
      backRouteTitle="Kembali"
    >
      <form
        className="flex-col gap-5 py-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Form
          form={form}
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
