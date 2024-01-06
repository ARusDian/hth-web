import React from 'react';
import route from 'ziggy-js';
import { router } from '@inertiajs/react';
import AdminShowLayout from '@/Layouts/Admin/AdminShowLayout';
import { useConfirm } from 'material-ui-confirm';
import { MedicalRecordModel } from '@/Models/MedicalRecord';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import MuiInertiaLinkButton from '@/Components/MuiInertiaLinkButton';

interface Props {
  medical_record: MedicalRecordModel;
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
      <div className="m-8 mb-12 p-7 text-gray-800 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50 flex flex-col gap-3">
        <div className='flex justify-between'>
          <h2 className="text-2xl font-semibold">Data Pasien</h2>
          <MuiInertiaLinkButton
            href={route('medical-record.export', medical_record.id)}
            color="primary"
            isNextPage
          >
            Cetak PDF
          </MuiInertiaLinkButton>
        </div>
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
              <td className="py-3 text-center">{medical_record.name}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Alamat</td>
              <td className="py-3 text-center">{medical_record.address}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Tanggal Lahir</td>
              <td className="py-3 text-center">{medical_record.place_of_birth}, {medical_record.date_of_birth}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">NIK</td>
              <td className="py-3 text-center">{medical_record.NIK}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Jenis Kelamin</td>
              <td className="py-3 text-center">{medical_record.gender === "L" ? "Laki-laki" : "Perempuan"}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Ras</td>
              <td className="py-3 text-center">{medical_record.race ?? "-"}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Pekerjaan</td>
              <td className="py-3 text-center">{medical_record.occupation}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Nomor Telepon</td>
              <td className="py-3 text-center">{medical_record.phone_number}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Nomor Telepon Keluarga</td>
              <td className="py-3 text-center">{medical_record.family_phone_number ?? "-"}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="m-8 mb-12 p-7 text-gray-800 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50 flex flex-col gap-3">
        <div className=''>
          <h2 className="text-2xl font-semibold">Data Pemeriksaan</h2>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b py-3 border-black">
              <th className="">Properti</th>
              <th className="">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Keluhan Utama</td>
              <td className="py-3 text-center">{medical_record.main_complaint}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Keluhan Tambahan</td>
              <td className="py-3 text-center">{medical_record.additional_complaint}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Golongan Darah</td>
              <td className="py-3 text-center">{medical_record.blood_type ?? "-"}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Tekanan Darah</td>
              <td className="py-3 text-center">{medical_record.blood_pressure}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Denyut Nadi</td>
              <td className="py-3 text-center">{medical_record.pulse}/Menit</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Suhu Tubuh</td>
              <td className="py-3 text-center">{medical_record.body_temperature} °C</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Sesak Nafas</td>
              <td className="py-3 text-center">{medical_record.is_respiratory_congestion ? <CheckIcon /> : <CloseIcon />}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Penyakit Jantung</td>
              <td className="py-3 text-center">{medical_record.is_heart_disease ? <CheckIcon /> : <CloseIcon />}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Diabetes</td>
              <td className="py-3 text-center">{medical_record.is_diabetes ? <CheckIcon /> : <CloseIcon />}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Hemofilia</td>
              <td className="py-3 text-center">{medical_record.is_hemophilia ? <CheckIcon /> : <CloseIcon />}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Hepatitis</td>
              <td className="py-3 text-center">{medical_record.is_hepatitis ? <CheckIcon /> : <CloseIcon />}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Maag</td>
              <td className="py-3 text-center">{medical_record.is_mag ? <CheckIcon /> : <CloseIcon />}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Penyakit Lainnya</td>
              <td className="py-3 text-center">{medical_record.another_disease ?? "-"}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Alergi Makanan</td>
              <td className="py-3 text-center">{medical_record.food_allergy ?? "-"}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Alergi Obat</td>
              <td className="py-3 text-center">{medical_record.drug_allergy ?? "-"}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="m-8 mb-12 p-7 text-gray-800 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50 flex flex-col gap-3">
        <div className=''>
          <h2 className="text-2xl font-semibold">Gejala</h2>
        </div>
        {medical_record.symptoms && medical_record.symptoms.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr className="border-b py-3 border-black">
                <th className="">No</th>
                <th className="">Nama</th>
              </tr>
            </thead>
            <tbody>
              {medical_record.symptoms.map((symptom, index) => (
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
          <h2 className="text-2xl font-semibold">Penyakit</h2>
        </div>
        {medical_record.disease_records && medical_record.disease_records.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr className="border-b py-3 border-black">
                <th className="">No</th>
                <th className="">Penyakit</th>
                <th className="">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {medical_record.disease_records.map((record, index) => (
                <tr className="border-b py-3 border-black" key={index}>
                  <td className="py-3 text-center">{index + 1}</td>
                  <td className="py-3 text-center">{record.disease!.name} {record.sub_disease ? " - " + record.sub_disease.name : ""}</td>
                  <td className="py-3 text-center flex justify-center gap-3">
                    <MuiInertiaLinkButton
                      color="primary"
                      href={route('disease.show', record.disease!.id)}
                    >
                      Lihat Penyakit
                    </MuiInertiaLinkButton>
                    {
                      record.disease!.sub_diseases && record.disease!.sub_diseases.length > 0 ?
                        (
                          <>
                            {record.sub_disease ? (
                              <MuiInertiaLinkButton
                                color="primary"
                                href={route('sub-disease.show', record.sub_disease!.id)}
                              >
                                Lihat Sub Penyakit
                              </MuiInertiaLinkButton>
                            ) : (
                              null
                            )}
                            <MuiInertiaLinkButton
                              color="warning"
                              href={route('medical-record.select-sub-disease', [
                                medical_record,
                                record.id,
                              ])}
                            >
                              Pilih Sub Penyakit
                            </MuiInertiaLinkButton>
                            
                          </>
                        ) : null
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Tidak ada Penyakit</span>
          </div>
        )}
      </div>
      <div className="m-8 mb-12 p-7 text-gray-800 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50 flex flex-col gap-3">
        <div className=''>
          <h2 className="text-2xl font-semibold">Rencana Perawatan</h2>
        </div>
        {medical_record.treatments && medical_record.treatments.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr className="border-b py-3 border-black">
                <th className="">No</th>
                <th className="">Perawatan</th>
              </tr>
            </thead>
            <tbody>
              {medical_record.treatments.map((treatment, index) => (
                <tr className="border-b py-3 border-black" key={index}>
                  <td className="py-3 text-center">{index + 1}</td>
                  <td className="py-3 text-center">{treatment.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Tidak ada Rencana Perawatan</span>
          </div>
        )}
        <p className='text-md font-semibold'>
          * Rencana perawatan semakin lengkap jika semua penyakit telah dipilih sub penyakitnya.
        </p>
      </div>

    </AdminShowLayout>
  );
}
