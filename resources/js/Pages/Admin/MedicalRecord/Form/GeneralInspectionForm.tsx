import React from 'react'
import { UseFormReturn, Controller } from 'react-hook-form';
import { BaseMedicalRecordModel } from '@/Models/MedicalRecord';
import { Divider, FormControlLabel, TextField, InputLabel, ToggleButtonGroup, ToggleButton } from '@mui/material';
import InputError from '@/Components/Jetstream/InputError';
import Checkbox from '@mui/material/Checkbox';
import { ToggleButtonGroupProps } from '@mui/material/ToggleButtonGroup';

interface Props {
    form: UseFormReturn<BaseMedicalRecordModel>;
    className?: string;
}

export default function GeneralInspectionForm(props: Props) {
    const { form } = props;
    return (
        <div className={`flex-col gap-5 ${props.className}`}>
            <div className="form-control w-full mt-4">
                <TextField
                    {...form.register('main_complaint', { required: true })}
                    required
                    label="Keluhan Utama Pasien"
                    className="mt-1 block w-full"
                    defaultValue={form.formState.defaultValues?.main_complaint}
                    error={form.formState.errors?.main_complaint != null}
                    helperText={form.formState.errors.main_complaint?.message}
                />
            </div>
            <div className="form-control w-full mt-4">
                <TextField
                    {...form.register('additional_complaint')}
                    label="Keluhan Tambahan Pasien"
                    className="mt-1 block w-full"
                    defaultValue={form.formState.defaultValues?.additional_complaint}
                    error={form.formState.errors?.additional_complaint != null}
                    helperText={form.formState.errors.additional_complaint?.message}
                />
            </div>
            <Controller
                control={form.control}
                name="blood_type"
                render={({ field }) => {
                    return (
                        <>
                            <InputLabel htmlFor="type">Golongan Darah</InputLabel>
                            <ToggleButtonGroup
                                id="type"
                                color="primary"
                                value={field.value}
                                exclusive
                                onChange={(_e: React.MouseEvent<HTMLElement>, v: 'A' | 'B' | 'AB' | 'O' | null) =>
                                    field.onChange(v)
                                }
                                aria-label="text alignment"
                            >
                                <ToggleButton value="A" aria-label="left aligned">
                                    A
                                </ToggleButton>
                                <ToggleButton value="B" aria-label="centered">
                                    B
                                </ToggleButton>
                                <ToggleButton value="AB" aria-label="centered">
                                    AB
                                </ToggleButton>
                                <ToggleButton value="O" aria-label="centered">
                                    O
                                </ToggleButton>
                            </ToggleButtonGroup>
                            <InputError
                                className="mt-2"
                                message={form.formState.errors.blood_type?.message}
                            />
                        </>
                    );
                }}
            />
            <div className="form-control w-full mt-4">
                <TextField
                    {...form.register('blood_pressure', { required: true })}
                    required
                    label="Tekanan Darah"
                    className="mt-1 block w-full"
                    defaultValue={form.formState.defaultValues?.blood_pressure}
                    error={form.formState.errors?.blood_pressure != null}
                    helperText={form.formState.errors.blood_pressure?.message}
                />
            </div>
            <div className="form-control w-full mt-4">
                <TextField
                    {...form.register('pulse', { required: true })}
                    required
                    type='number'
                    label="Denyut Nadi"
                    className="mt-1 block w-full"
                    defaultValue={form.formState.defaultValues?.pulse}
                    error={form.formState.errors?.pulse != null}
                    helperText={form.formState.errors.pulse?.message}
                />
            </div>
            <div className="form-control w-full mt-4">
                <TextField
                    {...form.register('body_temperature', { required: true })}
                    required
                    type='number'
                    label="Suhu Tubuh"
                    className="mt-1 block w-full"
                    defaultValue={form.formState.defaultValues?.body_temperature}
                    error={form.formState.errors?.body_temperature != null}
                    helperText={form.formState.errors.body_temperature?.message}
                />
            </div>
            <Divider
                orientation="horizontal"
                variant="fullWidth"
            >
                Penyakit Bawaan
            </Divider>
            <div className="form-control w-full mt-4">
                <Controller
                    control={form.control}
                    name='is_respiratory_congestion'
                    render={({ field }) => (
                        <>
                            <FormControlLabel control={
                                <Checkbox checked={field.value} onChange={
                                    (e) => {
                                        field.onChange(e.target.checked)
                                    }
                                } />
                            }
                                label="Sesak Napas"
                            />
                        </>
                    )}
                />
            </div>
            <div className="form-control w-full mt-4">
                <Controller
                    control={form.control}
                    name='is_heart_disease'
                    render={({ field }) => (
                        <>
                            <FormControlLabel control={
                                <Checkbox checked={field.value} onChange={
                                    (e) => {
                                        field.onChange(e.target.checked)
                                    }
                                } />
                            }
                                label="Penyakit Jantung"
                            />
                        </>
                    )}
                />
            </div>
            <div className="form-control w-full mt-4">
                <Controller
                    control={form.control}
                    name='is_diabetes'
                    render={({ field }) => (
                        <>
                            <FormControlLabel control={
                                <Checkbox checked={field.value} onChange={
                                    (e) => {
                                        field.onChange(e.target.checked)
                                    }
                                } />
                            }
                                label="Pengidap Diabetes"
                            />
                        </>
                    )}
                />
            </div>
            <div className="form-control w-full mt-4">
                <Controller
                    control={form.control}
                    name='is_hemophilia'
                    render={({ field }) => (
                        <>
                            <FormControlLabel control={
                                <Checkbox checked={field.value} onChange={
                                    (e) => {
                                        field.onChange(e.target.checked)
                                    }
                                } />
                            }
                                label="Pengidap Hemofilia"
                            />
                        </>
                    )}
                />
            </div>
            <div className="form-control w-full mt-4">
                <Controller
                    control={form.control}
                    name='is_mag'
                    render={({ field }) => (
                        <>
                            <FormControlLabel control={
                                <Checkbox checked={field.value} onChange={
                                    (e) => {
                                        field.onChange(e.target.checked)
                                    }
                                } />
                            }
                                label="Pengidap Mag"
                            />
                        </>
                    )}
                />
            </div>
            <div className="form-control w-full mt-4">
                <TextField
                    {...form.register('another_disease')}
                    label="Penyakit Lainnya"
                    className="mt-1 block w-full"
                    defaultValue={form.formState.defaultValues?.another_disease}
                    error={form.formState.errors?.another_disease != null}
                    helperText={form.formState.errors.another_disease?.message}
                />
            </div>
            <Divider
                orientation="horizontal"
                variant="fullWidth"
            >
                Alergi
            </Divider>
            <div className="form-control w-full mt-4">
                <TextField
                    {...form.register('food_allergy')}
                    label="Alergi Makanan"
                    className="mt-1 block w-full"
                    defaultValue={form.formState.defaultValues?.food_allergy}
                    error={form.formState.errors?.food_allergy != null}
                    helperText={form.formState.errors.food_allergy?.message}
                />
            </div>
            <div className="form-control w-full mt-4">
                <TextField
                    {...form.register('drug_allergy')}
                    label="Alergi Obat"
                    className="mt-1 block w-full"
                    defaultValue={form.formState.defaultValues?.drug_allergy}
                    error={form.formState.errors?.drug_allergy != null}
                    helperText={form.formState.errors.drug_allergy?.message}
                />
            </div>
        </div>
    )
}
