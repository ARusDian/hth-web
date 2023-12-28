import React from 'react';
import {
  Box,
  InputLabel,
  Tab,
  Tabs,
  TextField,
} from '@mui/material';
import { Controller, UseFormReturn } from 'react-hook-form';
import 'cropperjs/dist/cropper.css';
import { ReasonModel } from '@/Models/Reason';
import { SymptomModel } from '@/Models/Symptom';
import { DiseaseModel } from '@/Models/Disease';
import { TreatmentModel } from '@/Models/Treatment';
import MRTSelectRowTable from '@/Components/MRTSelectRowTable';
import { BaseSubDiseaseModel } from '@/Models/SubDisease';
import Select from 'react-select';
import InputError from '@/Components/Jetstream/InputError';

interface Props extends React.HTMLAttributes<HTMLElement> {
  form: UseFormReturn<BaseSubDiseaseModel>;
  diseases: DiseaseModel[];
  treatments: TreatmentModel[];
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
  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
            label="Data Sub Penyakit"
            {...a11yProps(0)}
          />
          <Tab
            className="flex-1"
            // icon={<MapRounded />}
            wrapped
            label="Rencana Perawatan Penyakit"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel value={tabIndex} index={0}>
        <div className={`flex-col gap-5 ${props.className}`}>
          <div className="form-control w-full mt-4">
            <TextField
              {...form.register('name', { required: true })}
              label="Nama Penyakit"
              className="mt-1 block w-full"
              defaultValue={form.formState.defaultValues?.name}
              error={form.formState.errors?.name != null}
              helperText={form.formState.errors.name?.message}
            />
          </div>
          <div className="form-control w-full mt-4">
            <Controller
              control={form.control}
              name="disease"
              render={({ field }) => {
                return (
                  <>
                    <InputLabel htmlFor="roles">Penyakit</InputLabel>
                    <Select
                      ref={field.ref}
                      options={props.diseases}
                      getOptionValue={it => `${it.id}`}
                      getOptionLabel={it => it.name}
                      value={field.value}
                      onChange={value => {
                        field.onChange(value);
                      }}
                    />
                    <InputError
                      message={form.formState.errors.disease?.message}
                      className="mt-2"
                    />
                  </>
                );
              }}
            />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <div className={`flex-col gap-5 ${props.className}`}>
          <MRTSelectRowTable<TreatmentModel, BaseSubDiseaseModel>
            form={form}
            name="treatments"
            tableOptions={{
              columns: [
                {
                  accessorKey: 'description',
                  header: 'Rencana Perawatan',
                },
              ], // Add the columns property here
              data: props.treatments, // Add the data property here
              state: {
                rowSelection: form.formState.defaultValues?.treatments?.reduce((acc, cur) => {
                  if (cur) {
                    acc[cur.id!] = true;
                  }
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
