import React from 'react';
import route from 'ziggy-js';
import { router } from '@inertiajs/react';
import AdminShowLayout from '@/Layouts/Admin/AdminShowLayout';
import { useConfirm } from 'material-ui-confirm';
import { SuccessIndicatorModel } from '@/Models/SuccessIndicator';


interface Props {
  success_indicator: SuccessIndicatorModel;
}

export default function Show(props: Props) {
  let successIndicator = props.success_indicator;
  const confirm = useConfirm();

  const handleDelete = () => {
    confirm({
      description: `Ini akan menghapus seluruh data ${successIndicator.name} selamanya.`,
      confirmationButtonProps: { autoFocus: true },
    })
      .then(() => router.delete(route('success-indicator.destroy', [successIndicator.id])))
      .catch(e => console.log(e, 'Deletion cancelled.'));
  };

  return (
    <AdminShowLayout
      title={`Indikator Keberhasilan`}
      headerTitle={'Data Indikator Keberhasilan'}
      backRoute={route('success-indicator.index')}
      backRouteTitle="Kembali"
      editRoute={route('success-indicator.edit', successIndicator.id)}
      editRouteTitle='Edit'
      onDelete={handleDelete}
      deleteTitle={"Hapus Indikator Keberhasilan"}
      onDeleteMessage={
        'Apakah anda yakin ingin menghapus data ini?'
      }
    >
      <div className="m-8 mb-12 p-7 text-gray-800 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50">
        <table className="w-full">
          <thead>
            <tr className="border-b py-3 border-black">
              <th className="">Properti</th>
              <th className="">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Nama</td>
              <td className="py-3 text-center">{successIndicator.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminShowLayout>
  );
}
