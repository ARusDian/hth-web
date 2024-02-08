import { MedicalRecordModel } from "@/Models/MedicalRecord";
import React from "react";

interface Props {
    medical_record: MedicalRecordModel;
}

export default function PeriodontalTissueShow(props: Props) {
    const { medical_record } = props;

    return (
        <>
            <div className=''>
                <h2 className="text-xl font-semibold">Pemeriksaan Jaringan Periodontal</h2>
            </div>
            <table className="border-collapse border border-gray-400 w-full">
                <thead>
                    <tr>
                        <th className="border border-gray-400 py-2 w-[4%]" rowSpan={2}>No</th>
                        <th className="border border-gray-400 py-2 rotate-90 w-[5%]" rowSpan={2}>Gigi</th>
                        <th className="border border-gray-400 py-2  rotate-90 w-[10%]" rowSpan={2}>Lokasi</th>
                        <th className="border border-gray-400 py-2 w-[7%]" colSpan={3}>Pocket</th>
                        <th className="border border-gray-400 py-2 w-[12%]" colSpan={5}>Peradangan</th>
                        <th className="border border-gray-400 py-2 w-[6%]" colSpan={2}>Attachment</th>
                        <th className="border border-gray-400 py-2 rotate-90 w-[2%]" rowSpan={2}>PUS</th>
                        <th className="border border-gray-400 py-2 rotate-90 w-[5%]" rowSpan={2}>Lain-lain</th>
                        <th className="border border-gray-400 py-2" rowSpan={2}>Masalah</th>
                    </tr>
                    <tr>
                        <th className="border border-gray-400 py-2 rotate-90">False</th>
                        <th className="border border-gray-400 py-2 rotate-90">True</th>
                        <th className="border border-gray-400 py-2 rotate-90">Depth (mm)</th>
                        <th className="border border-gray-400 py-2 rotate-90">Rubor</th>
                        <th className="border border-gray-400 py-2 rotate-90">Tumor</th>
                        <th className="border border-gray-400 py-2 rotate-90">Kolor</th>
                        <th className="border border-gray-400 py-2 rotate-90">Dolor</th>
                        <th className="border border-gray-400 py-2 px-1 rotate-90">Functio Laesa</th>
                        <th className="border border-gray-400 py-2 rotate-90">Normal</th>
                        <th className="border border-gray-400 py-2 rotate-90">Menurun</th>
                    </tr>
                </thead>
                <tbody>
                    {medical_record.periodontal_tissues.length > 0 ? medical_record.periodontal_tissues.map((row, index) => (
                        <tr key={row.id}>
                            <td className="border border-gray-400 py-2 text-center">
                                {index + 1}
                            </td>
                            <td className="border border-gray-400 py-2 text-center">
                                {row.tooth_number}
                            </td>
                            <td className="border border-gray-400 py-2 text-center">
                                {row.location}
                            </td>
                            <td className="border border-gray-400 py-2 text-center">
                                {row.pocket_true}
                            </td>
                            <td className="border border-gray-400 py-2 text-center">
                                {row.pocket_false}
                            </td>
                            <td className="border border-gray-400 py-2 text-center">
                                {row.pocket_depth}
                            </td>
                            <td className="border border-gray-400 py-2 text-center">
                                {row.inflammation_rubor}
                            </td>
                            <td className="border border-gray-400 py-2 text-center">
                                {row.inflammation_tumor}
                            </td>
                            <td className="border border-gray-400 py-2 text-center">
                                {row.inflammation_kolor}
                            </td>
                            <td className="border border-gray-400 py-2 text-center">
                                {row.inflammation_dolor}
                            </td>
                            <td className="border border-gray-400 py-2 text-center">
                                {row.inflammation_functio_laesa}
                            </td>
                            <td className="border border-gray-400 py-2 text-center">
                                {row.attachment_normal}
                            </td>
                            <td className="border border-gray-400 py-2 text-center">
                                {row.attachment_decline}
                            </td>
                            <td className="border border-gray-400 py-2 text-center">
                                {row.PUS}
                            </td>
                            <td className="border border-gray-400 py-2 text-center">
                                {row.other}
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
        </>
    );
}
