import React from 'react';
import route from 'ziggy-js';
import { router } from '@inertiajs/react';
import AdminShowLayout from '@/Layouts/Admin/AdminShowLayout';
import { useConfirm } from 'material-ui-confirm';
import { MedicalRecordModel } from '@/Models/MedicalRecord';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import MuiInertiaLinkButton from '@/Components/MuiInertiaLinkButton';
import { Box, Tabs, Tab } from '@mui/material';
import GeneralShow from '../Show/GeneralShow';
import AdditionInspectionShow from '../Show/AdditionInspectionShow';

interface Props {
  medical_record: MedicalRecordModel;
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

export default function Show(props: Props) {
  const medical_record = props.medical_record;

  const confirm = useConfirm();

  const handleDelete = () => {
    confirm({
      description: `Ini akan menghapus data selamanya.`,
      confirmationButtonProps: { autoFocus: true },
    })
      .then(() => router.delete(route('medical-record.destroy', [medical_record.id])))
      .catch(e => console.log(e, 'Deletion cancelled.'));
  };

  console.log(medical_record);

  const [tabIndex, setValue] = React.useState(1);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  return (
    <AdminShowLayout
      title={`Rekam Medis`}
      headerTitle={'Data Rekam Medis'}
      backRoute={route('medical-record.index')}
      backRouteTitle="Kembali"
      editRoute={route('medical-record.edit', medical_record.id)}
      editRouteTitle='Edit'
      onDelete={handleDelete}
      deleteTitle={"Hapus Rekam Medis"}
      onDeleteMessage={
        'Apakah anda yakin ingin menghapus data ini?'
      }
    >
      <div className="mx-8">
        <MuiInertiaLinkButton
          href={route('medical-record.export', medical_record.id)}
          color="primary"
          isNextPage
        >
          Cetak PDF
        </MuiInertiaLinkButton>
      </div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginX: 'auto', }}>
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
            label="Pemeriksaan Umum"
            {...a11yProps(0)}
          />
          <Tab
            className="flex-1"
            // icon={<StorageRounded />}
            wrapped
            label="Pemeriksaan Tambahan"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <TabPanel value={tabIndex} index={0}>
          <GeneralShow medical_record={medical_record} />
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          <AdditionInspectionShow medical_record={medical_record} />
        </TabPanel>
      </Box>
    </AdminShowLayout>
  );
}
