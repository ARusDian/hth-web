import { MedicalRecordModel } from "@/Models/MedicalRecord";
import React from "react";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DentalAbnormalitiesShow from "./DentalAbnormalitiesShow";
import PeriodontalTissueShow from "./PeriodontalTissueShow";
interface Props {
    medical_record: MedicalRecordModel;
}

export default function AdditionInspectionShow(props: Props) {
    const { medical_record } = props;
    return (
        <>
            <div className="m-8 mb-12 p-7 text-gray-800 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50 flex flex-col gap-3">
                <div className=''>
                    <h2 className="text-xl font-semibold">Wajah dan Kelenjar Limfa</h2>
                </div>
                <table className="w-full">
                    <thead>
                        <tr className="border-b py-3 border-black">
                            <th className="border-r border-black" colSpan={2}>Kolom</th>
                            <th className="">Keterangan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b py-3 border-black">
                            <td className="py-3 text-center border-r border-black" colSpan={2}>Wajah Simetris</td>
                            <td className="py-3 text-center">{medical_record.is_symetric_face ? <span><CheckIcon />  Simetris</span> : <span><CloseIcon />Tidak Simetris</span>}</td>
                        </tr>
                        <tr>
                            <td className="py-3 text-center border-r border-b border-black" rowSpan={6}>Kelenjar Limfa</td>
                            <td className="py-3 text-center  border-b border-r border-black" rowSpan={3}>Kanan</td>
                            <td className="py-3">{medical_record.spleen_gland.right.is_palpable ? <span><CheckIcon />  Teraba</span> : <span><CloseIcon />Tidak Teraba</span>}</td>
                        </tr>
                        <tr>
                            <td className="py-3">{medical_record.spleen_gland.right.is_hard ? <span><CheckIcon />  Keras</span> : <span><CloseIcon />Tidak Keras</span>}</td>
                        </tr>
                        <tr>
                            <td className="py-3 border-b border-black">{medical_record.spleen_gland.right.is_painful ? <span><CheckIcon />  Nyeri</span> : <span><CloseIcon />Tidak Nyeri</span>}</td>
                        </tr>
                        <tr>
                            <td className="py-3 text-center border-r border-b border-black" rowSpan={3}>Kiri</td>
                            <td className="py-3">{medical_record.spleen_gland.left.is_palpable ? <span><CheckIcon />  Teraba</span> : <span><CloseIcon />Tidak Teraba</span>}</td>
                        </tr>
                        <tr>
                            <td className="py-3">{medical_record.spleen_gland.left.is_hard ? <span><CheckIcon />  Keras</span> : <span><CloseIcon />Tidak Keras</span>}</td>
                        </tr>
                        <tr>
                            <td className="py-3 border-b border-black">{medical_record.spleen_gland.left.is_painful ? <span><CheckIcon />  Nyeri</span> : <span><CloseIcon />Tidak Nyeri</span>}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="m-8 mb-12 p-7 text-gray-800 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50 flex flex-col gap-3">
                <DentalAbnormalitiesShow medical_record={medical_record} />
            </div>
            <div className="m-8 mb-12 p-7 text-gray-800 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50 flex flex-col gap-3">
                <div className=''>
                    <h2 className="text-xl font-semibold">Kondisi Vitalitas Gigi</h2>
                </div>
                <table className="border-collapse border border-gray-400 w-full">
                    <thead>
                        <tr>
                            <th className="border border-gray-400 px-4 py-2 w-[1%]">No</th>
                            <th className="border border-gray-400 px-4 py-2 w-[1%]">Elemen Gigi</th>
                            <th className="border border-gray-400 px-4 py-2 w-[1%]">Inspeksi</th>
                            <th className="border border-gray-400 px-4 py-2 w-[1%]">Thermis</th>
                            <th className="border border-gray-400 px-4 py-2 w-[1%]">Sondasi</th>
                            <th className="border border-gray-400 px-4 py-2 w-[1%]">Perkusi</th>
                            <th className="border border-gray-400 px-4 py-2 w-[1%]">Druk</th>
                            <th className="border border-gray-400 px-4 py-2 w-[15%]">Mobility</th>
                            <th className="border border-gray-400 px-4 py-2">Masalah</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medical_record.teeth_condition_vitalities.length > 0 ? medical_record.teeth_condition_vitalities.map((row, index) => (
                            <tr key={row.id}>
                                <td className="border border-gray-400 py-2 text-center">
                                    {index + 1}
                                </td>
                                <td className="border border-gray-400 py-2 text-center">
                                    {row.tooth_number}
                                </td>
                                <td className="border border-gray-400 py-2 text-center">
                                    {row.inspection}
                                </td>
                                <td className="border border-gray-400 py-2 text-center">
                                    {row.thermis}
                                </td>
                                <td className="border border-gray-400 py-2 text-center">
                                    {row.sondasi}
                                </td>
                                <td className="border border-gray-400 py-2 text-center">
                                    {row.percussion}
                                </td>
                                <td className="border border-gray-400 py-2 text-center">
                                    {row.druk}
                                </td>
                                <td className="border border-gray-400 py-2 text-center">
                                    {row.mobility}
                                </td>
                                <td className="border border-gray-400 py-2">
                                    {row.problem}
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan={9} className="border border-gray-400 px-4 py-2 text-center">
                                    Tidak ada data
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="m-8 mb-12 p-7 text-gray-800 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50 flex flex-col gap-3">
                <div className=''>
                    <h2 className="text-xl font-semibold">Kelainan/Anomali Gigi</h2>
                </div>
                <table className="border-collapse border border-gray-400 w-full">
                    <thead>
                        <tr>
                            <th className="border border-gray-400 px-4 py-2">Kolom</th>
                            <th className="border border-gray-400 px-4 py-2">Keterangan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b py-3 border-black">
                            <td className="py-3 text-center border-r border-black">Occlusi</td>
                            <td className="py-3 text-center">{medical_record.occlusion}</td>
                        </tr>
                        <tr className="border-b py-3 border-black">
                            <td className="py-3 text-center border-r border-black">Bentuk Gigi</td>
                            <td className="py-3 text-center">{medical_record.is_teeth_shape_anomaly ? <span><CheckIcon />  Normal</span> : <span><CloseIcon />Tidak Normal</span>}</td>
                        </tr>
                        <tr className="border-b py-3 border-black">
                            <td className="py-3 text-center border-r border-black">Warna Gigi</td>
                            <td className="py-3 text-center">{medical_record.is_teeth_color_anomaly ? <span><CheckIcon />  Normal</span> : <span><CloseIcon />Tidak Normal</span>}</td>
                        </tr>
                        <tr className="border-b py-3 border-black">
                            <td className="py-3 text-center border-r border-black">Posisi Gigi</td>
                            <td className="py-3 text-center">{medical_record.is_teeth_position_anomaly ? <span><CheckIcon />  Normal</span> : <span><CloseIcon />Tidak Normal</span>}</td>
                        </tr>
                        <tr className="border-b py-3 border-black">
                            <td className="py-3 text-center border-r border-black">Ukuran Gigi</td>
                            <td className="py-3 text-center">{medical_record.is_teeth_size_anomaly ? <span><CheckIcon />  Normal</span> : <span><CloseIcon />Tidak Normal</span>}</td>
                        </tr>
                        <tr className="border-b py-3 border-black">
                            <td className="py-3 text-center border-r border-black">Struktur Gigi</td>
                            <td className="py-3 text-center">{medical_record.is_teeth_structure_anomaly ? <span><CheckIcon />  Normal</span> : <span><CloseIcon />Tidak Normal</span>}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="m-8 mb-12 p-7 text-gray-800 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50 flex flex-col gap-3">
                <div className=''>
                    <h2 className="text-xl font-semibold">Mukosa Mulut</h2>
                </div>
                <table className="border-collapse border border-gray-400 w-full">
                    <thead>
                        <tr>
                            <th className="border border-gray-400 px-4 py-2">Kolom</th>
                            <th className="border border-gray-400 px-4 py-2">Keterangan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b py-3 border-black">
                            <td className="py-3 text-center border-r border-black" rowSpan={3}>Lidah</td>
                            <td className="py-3 text-center">{medical_record.mucose_tongue.is_color_change ? <span><CheckIcon />  Ada Perubahan Warna </span> : <span><CloseIcon />Tidak Ada Perubahan Warna</span>}</td>
                        </tr>
                        <tr className="border-b py-3 border-black">
                            <td className="py-3 text-center">{medical_record.mucose_tongue.is_inflammation ? <span><CheckIcon />  Ada Inflamasi </span> : <span><CloseIcon />Tidak Ada Inflamasi</span>}</td>
                        </tr>
                        <tr className="border-b py-3 border-black">
                            <td className="py-3 text-center">{medical_record.mucose_tongue.is_ulcer ? <span><CheckIcon />  Ada Ulserasi</span> : <span><CloseIcon />Tidak Ada Ulserasi</span>}</td>
                        </tr>
                        <tr className="border-b py-3 border-black">
                            <td className="py-3 text-center border-r border-black" rowSpan={3}>Pipi</td>
                            <td className="py-3 text-center">{medical_record.mucose_cheek.is_color_change ? <span><CheckIcon />  Ada Perubahan Warna </span> : <span><CloseIcon />Tidak Ada Perubahan Warna</span>}</td>
                        </tr>
                        <tr className="border-b py-3 border-black">
                            <td className="py-3 text-center">{medical_record.mucose_cheek.is_inflammation ? <span><CheckIcon />  Ada Inflamasi </span> : <span><CloseIcon />Tidak Ada Inflamasi</span>}</td>
                        </tr>
                        <tr className="border-b py-3 border-black">
                            <td className="py-3 text-center">{medical_record.mucose_cheek.is_ulcer ? <span><CheckIcon />  Ada Ulserasi</span> : <span><CloseIcon />Tidak Ada Ulserasi</span>}</td>
                        </tr>
                        <tr className="border-b py-3 border-black">
                            <td className="py-3 text-center border-r border-black" rowSpan={3}>Palatum</td>
                            <td className="py-3 text-center">{medical_record.mucose_palatum.is_color_change ? <span><CheckIcon />  Ada Perubahan Warna </span> : <span><CloseIcon />Tidak Ada Perubahan Warna</span>}</td>
                        </tr>
                        <tr className="border-b py-3 border-black">
                            <td className="py-3 text-center">{medical_record.mucose_palatum.is_inflammation ? <span><CheckIcon />  Ada Inflamasi </span> : <span><CloseIcon />Tidak Ada Inflamasi</span>}</td>
                        </tr>
                        <tr className="border-b py-3 border-black">
                            <td className="py-3 text-center">{medical_record.mucose_palatum.is_ulcer ? <span><CheckIcon />  Ada Ulserasi</span> : <span><CloseIcon />Tidak Ada Ulserasi</span>}</td>
                        </tr>
                        <tr className="border-b py-3 border-black">
                            <td className="py-3 text-center border-r border-black" rowSpan={3}>Gingiva</td>
                            <td className="py-3 text-center">{medical_record.mucose_gingiva.is_color_change ? <span><CheckIcon />  Ada Perubahan Warna </span> : <span><CloseIcon />Tidak Ada Perubahan Warna</span>}</td>
                        </tr>
                        <tr className="border-b py-3 border-black">
                            <td className="py-3 text-center">{medical_record.mucose_gingiva.is_inflammation ? <span><CheckIcon />  Ada Inflamasi </span> : <span><CloseIcon />Tidak Ada Inflamasi</span>}</td>
                        </tr>
                        <tr className="border-b py-3 border-black">
                            <td className="py-3 text-center">{medical_record.mucose_gingiva.is_ulcer ? <span><CheckIcon />  Ada Ulserasi</span> : <span><CloseIcon />Tidak Ada Ulserasi</span>}</td>
                        </tr>
                        <tr className="border-b py-3 border-black">
                            <td className="py-3 text-center border-r border-black" rowSpan={3}>Bibir</td>
                            <td className="py-3 text-center">{medical_record.mucose_lips.is_color_change ? <span><CheckIcon />  Ada Perubahan Warna </span> : <span><CloseIcon />Tidak Ada Perubahan Warna</span>}</td>
                        </tr>
                        <tr className="border-b py-3 border-black">
                            <td className="py-3 text-center">{medical_record.mucose_lips.is_inflammation ? <span><CheckIcon />  Ada Inflamasi </span> : <span><CloseIcon />Tidak Ada Inflamasi</span>}</td>
                        </tr>
                        <tr className="border-b py-3 border-black">
                            <td className="py-3 text-center">{medical_record.mucose_lips.is_ulcer ? <span><CheckIcon />  Ada Ulserasi</span> : <span><CloseIcon />Tidak Ada Ulserasi</span>}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="m-8 mb-12 p-7 text-gray-800 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50 flex flex-col gap-3">
                <PeriodontalTissueShow medical_record={medical_record} />
            </div>
        </>
    );
}
