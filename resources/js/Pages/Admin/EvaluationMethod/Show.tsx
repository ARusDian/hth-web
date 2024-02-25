import React from 'react';
import route from 'ziggy-js';
import { router } from '@inertiajs/react';
import AdminShowLayout from '@/Layouts/Admin/AdminShowLayout';
import { useConfirm } from 'material-ui-confirm';
import { EvaluationMethodModel } from '@/Models/EvaluationMethod';

interface Props {
  evaluation_method: EvaluationMethodModel;
}

export default function Show(props: Props) {
  let evaluation_method = props.evaluation_method;
  const confirm = useConfirm();

  const handleDelete = () => {
    confirm({
      description: `Ini akan menghapus seluruh data ${evaluation_method.name} selamanya.`,
      confirmationButtonProps: { autoFocus: true },
    })
      .then(() => router.delete(route('evaluation-method.destroy', [evaluation_method.id])))
      .catch(e => console.log(e, 'Deletion cancelled.'));
  };

  return (
    <AdminShowLayout
      title={`Metode Evaluasi`}
      headerTitle={'Data Metode Evaluasi'}
      backRoute={route('evaluation-method.index')}
      backRouteTitle="Kembali"
      editRoute={route('evaluation-method.edit', evaluation_method.id)}
      editRouteTitle='Edit'
      onDelete={handleDelete}
      deleteTitle={"Hapus Metode Evaluasi"}
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
              <td className="py-3 text-center">{evaluation_method.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminShowLayout>
  );
}
