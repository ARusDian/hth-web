import React from 'react';
import route from 'ziggy-js';
import { router } from '@inertiajs/react';
import AdminShowLayout from '@/Layouts/Admin/AdminShowLayout';
import { useConfirm } from 'material-ui-confirm';
import { ReasonModel } from '@/Models/Reason';

interface Props {
  reason: ReasonModel;
}

export default function Show(props: Props) {
  let reason = props.reason;
  const confirm = useConfirm();

  const handleDelete = () => {
    confirm({
      description: `Ini akan menghapus seluruh data ${reason.description} selamanya.`,
      confirmationButtonProps: { autoFocus: true },
    })
      .then(() => router.delete(route('reason.destroy', [reason.id])))
      .catch(e => console.log(e, 'Deletion cancelled.'));
  };

  return (
    <AdminShowLayout
      title={`Penyebab Masalah`}
      headerTitle={'Data Penyebab Masalah'}
      backRoute={route('reason.index')}
      backRouteTitle="Kembali"
      editRoute={route('reason.edit', reason.id)}
      editRouteTitle='Edit'
      onDelete={handleDelete}
      deleteTitle={"Hapus Penyebab Masalah"}
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
              <td className="py-3 text-center">{reason.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminShowLayout>
  );
}
