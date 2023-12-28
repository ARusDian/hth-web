import React from 'react';
import route from 'ziggy-js';
import { router } from '@inertiajs/react';
import AdminShowLayout from '@/Layouts/Admin/AdminShowLayout';
import { useConfirm } from 'material-ui-confirm';
import { DiseaseModel } from '@/Models/Disease';
import { SubDiseaseModel } from '@/Models/SubDisease';

interface Props {
  sub_disease: SubDiseaseModel;
}

export default function Show(props: Props) {
  let sub_disease = props.sub_disease;
  const confirm = useConfirm();

  const handleDelete = () => {
    confirm({
      description: `Ini akan menghapus seluruh data ${sub_disease.name} selamanya.`,
      confirmationButtonProps: { autoFocus: true },
    })
      .then(() => router.delete(route('sub-disease.destroy', [sub_disease.id])))
      .catch(e => console.log(e, 'Deletion cancelled.'));
  };

  return (
    <AdminShowLayout
      title={`Sub Penyakit`}
      headerTitle={'Data Sub Penyakit'}
      backRoute={route('sub-disease.index')}
      backRouteTitle="Kembali"
      editRoute={route('sub-disease.edit', sub_disease.id)}
      editRouteTitle='Edit'
      onDelete={handleDelete}
      deleteTitle={"Hapus Sub Penyakit"}
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
              <td className="py-3 text-center">{sub_disease.name}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Penyakit</td>
              <td className="py-3 text-center">{sub_disease.disease.name}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Masalah</td>
              <td className="py-3 text-center">{sub_disease.disease.problem}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Diagnosis</td>
              <td className="py-3 text-center">{sub_disease.disease.diagnosis}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="m-8 mb-12 p-7 text-gray-800 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50">
        <div className=''>
          <h2 className="text-2xl font-semibold">Gejala</h2>
        </div>
        {sub_disease.disease.symptoms && sub_disease.disease.symptoms.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr className="border-b py-3 border-black">
                <th className="">No</th>
                <th className="">Gejala</th>
              </tr>
            </thead>
            <tbody>
              {sub_disease.disease.symptoms.map((symptom, index) => (
                <tr className="border-b py-3 border-black" key={index}>
                  <td className="py-3 text-center">{index + 1}</td>
                  <td className="py-3 text-center">{symptom.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Tidak ada gejala</span>
          </div>
        )}
      </div>
      <div className="m-8 mb-12 p-7 text-gray-800 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50">
        <div className=''>
          <h2 className="text-2xl font-semibold">Kemungkinan Penyebab Masalah</h2>
        </div>
        {sub_disease.disease.reasons && sub_disease.disease.reasons.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr className="border-b py-3 border-black">
                <th className="">No</th>
                <th className="">Penyebab Masalah</th>
              </tr>
            </thead>
            <tbody>
              {sub_disease.disease.reasons.map((reason, index) => (
                <tr className="border-b py-3 border-black" key={index}>
                  <td className="py-3 text-center">{index + 1}</td>
                  <td className="py-3 text-center">{reason.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Tidak ada Kemungkinan Penyebab Masalah</span>
          </div>
        )}
      </div>
      <div className="m-8 mb-12 p-7 text-gray-800 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50">
        <div className=''>
          <h2 className="text-2xl font-semibold">Perawatan</h2>
        </div>
        {sub_disease.treatments && sub_disease.treatments.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr className="border-b py-3 border-black">
                <th className="">No</th>
                <th className="">Perawatan</th>
              </tr>
            </thead>
            <tbody>
              {sub_disease.treatments.map((treatment, index) => (
                <tr className="border-b py-3 border-black" key={index}>
                  <td className="py-3 text-center">{index + 1}</td>
                  <td className="py-3 text-center">{treatment.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex flex-col gap-2">
              <span className="font-semibold">Tidak Ada Perawatan</span>
          </div>
        )}
      </div>
    </AdminShowLayout>
  );
}
