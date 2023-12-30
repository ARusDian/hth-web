import React from 'react';
import route from 'ziggy-js';
import { router } from '@inertiajs/react';
import AdminShowLayout from '@/Layouts/Admin/AdminShowLayout';
import { useConfirm } from 'material-ui-confirm';
import { DiseaseModel } from '@/Models/Disease';
import MuiInertiaLinkButton from '@/Components/MuiInertiaLinkButton';

interface Props {
  disease: DiseaseModel;
}

export default function Show(props: Props) {
  let disease = props.disease;
  const confirm = useConfirm();

  const handleDelete = () => {
    confirm({
      description: `Ini akan menghapus seluruh data ${disease.name} selamanya.`,
      confirmationButtonProps: { autoFocus: true },
    })
      .then(() => router.delete(route('disease.destroy', [disease.id])))
      .catch(e => console.log(e, 'Deletion cancelled.'));
  };

  return (
    <AdminShowLayout
      title={`Penyakit`}
      headerTitle={'Data Penyakit'}
      backRoute={route('disease.index')}
      backRouteTitle="Kembali"
      editRoute={route('disease.edit', disease.id)}
      editRouteTitle='Edit'
      onDelete={handleDelete}
      deleteTitle={"Hapus Penyakit"}
      onDeleteMessage={
        'Apakah anda yakin ingin menghapus data ini?'
      }
    >
      <div className="m-8 mb-12 p-7 text-gray-800 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50 flex flex-col gap-3">
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
              <td className="py-3 text-center">{disease.name}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Masalah</td>
              <td className="py-3 text-center">{disease.problem}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Diagnosis</td>
              <td className="py-3 text-center">{disease.diagnosis}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {
        disease.sub_diseases && disease.sub_diseases.length > 0 ? (
          <div className="m-8 mb-12 p-7 text-gray-800 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50 flex flex-col gap-3">
            <div className=''>
              <h2 className="text-2xl font-semibold">Sub Penyakit</h2>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b py-3 border-black">
                  <th className="">No</th>
                  <th className="">Nama</th>
                  <th className="">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {disease.sub_diseases.map((subDisease, index) => (
                  <tr className="border-b py-3 border-black" key={index}>
                    <td className="py-3 text-center">{index + 1}</td>
                    <td className="py-3 text-center">{subDisease.name}</td>
                    <td className="py-3 text-center">
                      <MuiInertiaLinkButton
                        color="primary"
                        href={route('sub-disease.show', subDisease.id)}
                      >
                        Show
                      </MuiInertiaLinkButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="m-8 mb-12 p-7 text-gray-800 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50 flex flex-col gap-3">
            <div className=''>
              <h2 className="text-2xl font-semibold">Sub Penyakit</h2>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold">Tidak ada sub penyakit</span>
            </div>
          </div>
        )
      }
      <div className="m-8 mb-12 p-7 text-gray-800 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50 flex flex-col gap-3">
        <div className=''>
          <h2 className="text-2xl font-semibold">Gejala</h2>
        </div>
        {disease.symptoms && disease.symptoms.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr className="border-b py-3 border-black">
                <th className="">No</th>
                <th className="">Nama</th>
              </tr>
            </thead>
            <tbody>
              {disease.symptoms.map((symptom, index) => (
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
      <div className="m-8 mb-12 p-7 text-gray-800 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50 flex flex-col gap-3">
        <div className=''>
          <h2 className="text-2xl font-semibold">Kemungkinan Penyebab Masalah</h2>
        </div>
        {disease.reasons && disease.reasons.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr className="border-b py-3 border-black">
                <th className="">No</th>
                <th className="">Penyebab Masalah</th>
              </tr>
            </thead>
            <tbody>
              {disease.reasons.map((reason, index) => (
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
      <div className="m-8 mb-12 p-7 text-gray-800 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50 flex flex-col gap-3">
        <div className=''>
          <h2 className="text-2xl font-semibold">Perawatan</h2>
        </div>
        {disease.treatments && disease.treatments.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr className="border-b py-3 border-black">
                <th className="">No</th>
                <th className="">Perawatan</th>
              </tr>
            </thead>
            <tbody>
              {disease.treatments.map((treatment, index) => (
                <tr className="border-b py-3 border-black" key={index}>
                  <td className="py-3 text-center">{index + 1}</td>
                  <td className="py-3 text-center">{treatment.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex flex-col gap-2">
            <span className="font-semibold">{disease.sub_diseases && disease.sub_diseases.length > 0 ? "Perawatan Tersedia pada Tiap Sub Penyakit" : "Tidak ada Perawatan"}</span>
          </div>
        )}
      </div>

    </AdminShowLayout>
  );
}
