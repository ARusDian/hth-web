import React from 'react';
import {
  Box,
  Tab,
  Tabs,
} from '@mui/material';
import { UseFormReturn } from 'react-hook-form';
import 'cropperjs/dist/cropper.css';
import { SymptomModel } from '@/Models/Symptom';
import MRTSelectRowTable from '@/Components/MRTSelectRowTable';
import { BaseMedicalRecordModel } from '@/Models/MedicalRecord';
import IdentityForm from './Form/IdentityForm';
import GeneralInspectionForm from './Form/GeneralInspectionForm';
import AdditionInspectionForm from './Form/AdditionInspectionForm';

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

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginX: 'auto',  }}>
        <Tabs
          value={tabIndex ?? 1}
          onChange={handleTabChange}
          aria-label="basic tabs example"
          // orientation="vertical"
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
            label="Pemeriksaan Umum"
            {...a11yProps(1)}
          />
          <Tab
            className="flex-1"
            // icon={<StorageRounded />}
            wrapped
            label="Pemeriksaan Tambahan"
            {...a11yProps(2)}
          />
          <Tab
            className="flex-1"
            // icon={<MapRounded />}
            wrapped
            label="Gejala"
            {...a11yProps(3)}
          />
        </Tabs>
        <Box sx={{ flexGrow: 1 }}>
          <TabPanel value={tabIndex} index={0}>
            <IdentityForm form={form} />
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            <GeneralInspectionForm form={form} />
          </TabPanel >
          <TabPanel value={tabIndex} index={2}>
            <AdditionInspectionForm form={form} />
          </TabPanel >
          <TabPanel value={tabIndex} index={3}>
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
                    rowSelection: (form.getValues('symptoms_arr') as number[])?.reduce((acc, it) => {
                      acc[it as number] = true;
                      return acc;
                    }, {} as Record<number, boolean>) ?? {},
                  },
                }}
              />
            </div>
          </TabPanel>
        </Box>
      </Box>

    </>
  );
}
