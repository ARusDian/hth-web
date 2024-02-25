import React from 'react';
import route from 'ziggy-js';


import Form from './Form';
import AdminFormLayout from '@/Layouts/Admin/AdminFormLayout';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import Api from '@/Utils/Api';
import { BaseEvaluationMethodModel } from '@/Models/EvaluationMethod';

interface Props {
  evaluation_method: BaseEvaluationMethodModel;
}

export default function Edit(props: Props) {
  let evaluationMethod = props.evaluation_method;
  let form = useForm<BaseEvaluationMethodModel>({
    defaultValues: evaluationMethod,
  });

  async function onSubmit(value: any) {
    await Api.postAsync({
      route: route('evaluation-method.update', evaluationMethod.id),
      value: {
        ...value,
        _method: 'PUT',
      },
      form,
    });
  }

  return (
    <AdminFormLayout
      title="Edit Metode Evaluasi"
      backRoute={route('evaluation-method.show', evaluationMethod.id)}
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
