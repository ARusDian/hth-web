import React from 'react';
import {
  Box,
  Divider,
  FormControlLabel,
  InputLabel,
  Tab,
  Tabs,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { Controller, UseFormReturn } from 'react-hook-form';
import 'cropperjs/dist/cropper.css';
import { SymptomModel } from '@/Models/Symptom';
import MRTSelectRowTable from '@/Components/MRTSelectRowTable';
import Select from 'react-select';
import InputError from '@/Components/Jetstream/InputError';
import { BaseMedicalRecordModel } from '@/Models/MedicalRecord';
import Checkbox from '@mui/material/Checkbox';

interface Props extends React.HTMLAttributes<HTMLElement> {
  form: UseFormReturn<BaseMedicalRecordModel>;
  symptoms: SymptomModel[];
  className?: string;
}

// Function for Tab
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div className="text-lg">
            {children}
          </div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
// End Function for Tab

export default function Form(props: Props) {
  const { form } = props;

  const [tabIndex, setValue] = React.useState(0);

  console.log(form.formState.errors);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  console.log(form.getValues('symptoms_arr'));

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginX: 'auto' }}>
        <Tabs
          value={tabIndex ?? 1}
          onChange={handleTabChange}
          aria-label="basic tabs example"
          className="flex"
          centered
        >
          <Tab
            className="flex-1"
            // icon={<StorageRounded />}
            wrapped
            label="Data Pasien"
            {...a11yProps(0)}
          />
          <Tab
            className="flex-1"
            // icon={<StorageRounded />}
            wrapped
            label="Pemeriksaan"
            {...a11yProps(1)}
          />
          <Tab
            className="flex-1"
            // icon={<MapRounded />}
            wrapped
            label="Gejala"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={tabIndex} index={0}>
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
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
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
            name="gender"
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
                    message={form.formState.errors.gender?.message}
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
              label="Tekanan Darah"
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
      </TabPanel >
      <TabPanel value={tabIndex} index={2}>
        <div className={`flex-col gap-5 ${props.className}`}>
          <MRTSelectRowTable<SymptomModel, BaseMedicalRecordModel>
            form={form}
            name="symptoms_arr"
            insertFunction={(data, rowSelection) => (data as SymptomModel[])!.filter((d, i) => {
              return rowSelection[d.id];
            }).map(it => it.id)}
            tableOptions={{
              columns: [
                {
                  accessorKey: 'id',
                  header: 'ID',
                },
                {
                  accessorKey: 'description',
                  header: 'Gejala',
                },
              ], // Add the columns property here
              data: props.symptoms, // Add the data property here
              state: {
                rowSelection: (form.formState.defaultValues?.symptoms_arr as number[])?.reduce((acc, it) => {
                  acc[it as number] = true;
                  return acc;
                }, {} as Record<number, boolean>) ?? {},
              },
            }}
          />
        </div>
      </TabPanel>
    </>
  );
}
