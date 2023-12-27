import React from 'react';
import route from 'ziggy-js';
import { router } from '@inertiajs/react';
import AdminShowLayout from '@/Layouts/Admin/AdminShowLayout';
import { useConfirm } from 'material-ui-confirm';
import { SypmtomModel } from '@/Models/Symptom';

interface Props {
  symptom: SypmtomModel;
}

export default function Show(props: Props) {
  let symptom = props.symptom;
  const confirm = useConfirm();

  const handleDelete = () => {
    confirm({
      description: `Ini akan menghapus seluruh data ${symptom.description} selamanya.`,
      confirmationButtonProps: { autoFocus: true },
    })
      .then(() => router.delete(route('symptom.destroy', [symptom.id])))
      .catch(e => console.log(e, 'Deletion cancelled.'));
  };

  return (
    <AdminShowLayout
      title={`${symptom.description}`}
      headerTitle={'Data symptom'}
      backRoute={route('symptom.index')}
      backRouteTitle="Kembali"
      editRoute={route('symptom.edit', symptom.id)}
      editRouteTitle='Edit'
      onDelete={handleDelete}
      deleteTitle={"Hapus Gejala"}
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
              <td className="py-3 text-center">{symptom.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminShowLayout>
  );
}
