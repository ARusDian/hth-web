import React from 'react';
import {
  Box,
  Tab,
  Tabs,
  TextField,
} from '@mui/material';
import { UseFormReturn } from 'react-hook-form';
import 'cropperjs/dist/cropper.css';
import { ReasonModel } from '@/Models/Reason';
import { SymptomModel } from '@/Models/Symptom';
import { BaseDiseaseModel } from '@/Models/Disease';
import { TreatmentModel } from '@/Models/Treatment';
import MRTSelectRowTable from '@/Components/MRTSelectRowTable';

interface Props extends React.HTMLAttributes<HTMLElement> {
  form: UseFormReturn<BaseDiseaseModel>;
  reasons: ReasonModel[];
  symptoms: SymptomModel[];
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
            label="Data Penyakit"
            {...a11yProps(0)}
          />
          <Tab
            className="flex-1"
            // icon={<MapRounded />}
            wrapped
            label="Gejala Penyakit"
            {...a11yProps(3)}
          />
          <Tab
            className="flex-1"
            // icon={<MapRounded />}
            wrapped
            label="Kemungkinan Penyebab Penyakit"
            {...a11yProps(1)}
          />
          <Tab
            className="flex-1"
            // icon={<MapRounded />}
            wrapped
            label="Rencana Perawatan Penyakit"
            {...a11yProps(2)}
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
            <TextField
              {...form.register('problem', { required: true })}
              label="Masalah"
              className="mt-1 block w-full"
              defaultValue={form.formState.defaultValues?.problem}
              error={form.formState.errors?.problem != null}
              helperText={form.formState.errors.problem?.message}
            />
          </div>
          <div className="form-control w-full mt-4">
            <TextField
              {...form.register('diagnosis', { required: true })}
              label="Diagnosis"
              className="mt-1 block w-full"
              defaultValue={form.formState.defaultValues?.diagnosis}
              error={form.formState.errors?.diagnosis != null}
              helperText={form.formState.errors.diagnosis?.message}
            />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <div className={`flex-col gap-5 ${props.className}`}>
          <MRTSelectRowTable<SymptomModel, BaseDiseaseModel>
            form={form}
            name="symptoms"
            tableOptions={{
              columns: [
                {
                  accessorKey: 'description',
                  header: 'Gejala',
                },
              ], // Add the columns property here
              data: props.symptoms, // Add the data property here
              state: {
                rowSelection: form.formState.defaultValues?.symptoms?.reduce((acc, cur) => {
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
      <TabPanel value={tabIndex} index={2}>
        <div className={`flex-col gap-5 ${props.className}`}>
          <MRTSelectRowTable<ReasonModel, BaseDiseaseModel>
            form={form}
            name="reasons"
            tableOptions={{
              columns: [
                {
                  accessorKey: 'description',
                  header: 'Kemungkinan Penyebab',
                },
              ], // Add the columns property here
              data: props.reasons, // Add the data property here
              state: {
                rowSelection: form.formState.defaultValues?.reasons?.reduce((acc, cur) => {
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
      <TabPanel value={tabIndex} index={3}>
        <div className={`flex-col gap-5 ${props.className}`}>
          <MRTSelectRowTable<TreatmentModel, BaseDiseaseModel>
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
