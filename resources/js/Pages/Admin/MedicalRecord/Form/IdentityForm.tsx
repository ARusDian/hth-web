
import InputError from '@/Components/Jetstream/InputError';
import { BaseMedicalRecordModel } from '@/Models/MedicalRecord';
import { TextField, InputLabel, ToggleButtonGroup, ToggleButton } from '@mui/material';
import React from 'react'
import { UseFormReturn, Controller } from 'react-hook-form';

interface Props {
    form: UseFormReturn<BaseMedicalRecordModel>;
    className?: string;
}

export default function IdentityForm(props: Props) {
    const { form } = props;
    return (
        <>
            <div className={`flex-col gap-5 ${props.className}`}>
                <div className="form-control w-full mt-4">
                    <TextField
                        {...form.register('name', { required: true })}
                        label="Nama Pasien"
                        required
                        className="mt-1 block w-full"
                        defaultValue={form.formState.defaultValues?.name}
                        error={form.formState.errors?.name != null}
                        helperText={form.formState.errors.name?.message}
                    />
                </div>
                <div className="form-control w-full mt-4">
                    <TextField
                        {...form.register('address', { required: true })}
                        label="Alamat Pasien"
                        required
                        className="mt-1 block w-full"
                        defaultValue={form.formState.defaultValues?.address}
                        error={form.formState.errors?.address != null}
                        helperText={form.formState.errors.address?.message}
                    />
                </div>
            </div>
            <div className="form-control w-full mt-4">
                <TextField
                    {...form.register('place_of_birth', { required: true })}
                    label="Tempat Lahir Pasien"
                    required
                    className="mt-1 block w-full"
                    defaultValue={form.formState.defaultValues?.place_of_birth}
                    error={form.formState.errors?.place_of_birth != null}
                    helperText={form.formState.errors.name?.message}
                />
            </div>
            <div className="form-control w-full mt-4">
                <TextField
                    {...form.register('date_of_birth', { required: true })}
                    type='date'
                    required
                    InputLabelProps={{ shrink: true }}
                    label="Tanggal Lahir Pasien"
                    className="mt-1 block w-full"
                    defaultValue={form.formState.defaultValues?.date_of_birth}
                    error={form.formState.errors?.date_of_birth != null}
                    helperText={form.formState.errors.date_of_birth?.message}
                />
            </div>
            <div className="form-control w-full mt-4">
                <TextField
                    {...form.register('NIK', { required: true })}
                    label="NIK Pasien"
                    required
                    className="mt-1 block w-full"
                    defaultValue={form.formState.defaultValues?.NIK}
                    error={form.formState.errors?.NIK != null}
                    helperText={form.formState.errors.NIK?.message}
                />
            </div>
            <div className="form-control w-full mt-4">
                <Controller
                    control={form.control}
                    name="gender"
                    render={({ field }) => {
                        return (
                            <>
                                <InputLabel htmlFor="type">Gender</InputLabel>
                                <ToggleButtonGroup
                                    id="type"
                                    color="primary"
                                    value={field.value}
                                    exclusive
                                    onChange={(_e: React.MouseEvent<HTMLElement>, v: 'L' | 'P') =>
                                        field.onChange(v)
                                    }
                                    aria-label="text alignment"
                                >
                                    <ToggleButton value="L" aria-label="left aligned">
                                        Laki - laki
                                    </ToggleButton>
                                    <ToggleButton value="P" aria-label="centered">
                                        Perempuan
                                    </ToggleButton>
                                </ToggleButtonGroup>
                                <InputError
                                    className="mt-2"
                                    message={form.formState.errors.gender?.message}
                                />
                            </>
                        );
                    }}
                />
            </div>
            <div className="form-control w-full mt-4">
                <TextField
                    {...form.register('race')}
                    label="Ras Pasien"
                    className="mt-1 block w-full"
                    defaultValue={form.formState.defaultValues?.race}
                    error={form.formState.errors?.race != null}
                    helperText={form.formState.errors.race?.message}
                />
            </div>
            <div className="form-control w-full mt-4">
                <TextField
                    {...form.register('occupation', { required: true })}
                    label="Pekerjaan Pasien"
                    required
                    className="mt-1 block w-full"
                    defaultValue={form.formState.defaultValues?.occupation}
                    error={form.formState.errors?.occupation != null}
                    helperText={form.formState.errors.occupation?.message}
                />
            </div>
            <div className="form-control w-full mt-4">
                <TextField
                    {...form.register('phone_number', { required: true })}
                    label="Nomor Telepon Pasien"
                    required
                    className="mt-1 block w-full"
                    defaultValue={form.formState.defaultValues?.phone_number}
                    error={form.formState.errors?.phone_number != null}
                    helperText={form.formState.errors.phone_number?.message}
                />
            </div>
            <div className="form-control w-full mt-4">
                <TextField
                    {...form.register('family_phone_number')}
                    label="Nomor Telepon Keluarga Pasien"
                    className="mt-1 block w-full"
                    defaultValue={form.formState.defaultValues?.family_phone_number}
                    error={form.formState.errors?.family_phone_number != null}
                    helperText={form.formState.errors.family_phone_number?.message}
                />
            </div>
        </>
    )
}
