import React from 'react';
import route from 'ziggy-js';


import Form from './Form';
import AdminFormLayout from '@/Layouts/Admin/AdminFormLayout';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import Api from '@/Utils/Api';
import { BaseTreatmentGoalModel } from '@/Models/TreatmentGoal';

interface Props {
  treatment_goal: BaseTreatmentGoalModel;
}

export default function Edit(props: Props) {
  let treatmentGoal = props.treatment_goal;
  let form = useForm<BaseTreatmentGoalModel>({
    defaultValues: treatmentGoal,
  });

  async function onSubmit(value: any) {
    await Api.postAsync({
      route: route('treatment-goal.update', treatmentGoal.id),
      value: {
        ...value,
        _method: 'PUT',
      },
      form,
    });
  }

  return (
    <AdminFormLayout
      title="Edit Tujuan Perawatan"
      backRoute={route('treatment-goal.show', treatmentGoal.id)}
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
