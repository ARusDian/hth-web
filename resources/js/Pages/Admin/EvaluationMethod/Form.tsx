import React from 'react';
import {
  TextField,
} from '@mui/material';
import { UseFormReturn } from 'react-hook-form';
import 'cropperjs/dist/cropper.css';
import { BaseEvaluationMethodModel } from '@/Models/EvaluationMethod';

interface Props extends React.HTMLAttributes<HTMLElement> {
  form: UseFormReturn<BaseEvaluationMethodModel>;
  className?: string;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  p: 4,
};

export default function Form(props: Props) {
  const { form } = props;

  return (
    <div className={`flex-col gap-5 ${props.className}`}>
      <div className="form-control w-full mt-4">
        <TextField
          {...form.register('name', { required: true })}
          label="Metode Evaluasi"
          className="mt-1 block w-full"
          defaultValue={form.formState.defaultValues?.name}
          error={form.formState.errors?.name != null}
          helperText={form.formState.errors.name?.message}
        />
      </div>
    </div>
  );
}
