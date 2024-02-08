import { getUniqueKey } from "@/Models/Helper";
import { PeriodontalTissue } from "@/Models/MedicalRecord";
import { InputLabel } from "@mui/material";
import React from "react";

interface Props {
    form: any;
    className?: string;
}

export default function PeriodontalTissueForm(props: Props) {
    const { form } = props;

    const addRow = () => {
        form.setValue('periodontal_tissues', [
            ...form.getValues('periodontal_tissues'),
            {
                id: Math.random(),
                tooth_number: '',
                location: '',
                pocket_true: '',
                pocket_false: '',
                pocket_depth: '',
                inflammation_rubor: '',
                inflammation_tumor: '',
                inflammation_kolor: '',
                inflammation_dolor: '',
                inflammation_functio_laesa: '',
                attachment_normal: '',
                attachment_decline: '',
                PUS: '',
                other: '',
                problem: '',
            },
        ]);
    };

    const removeRow = (id: number) => {
        form.setValue(
            'periodontal_tissues',
            form.getValues('periodontal_tissues').filter((row: PeriodontalTissue) => row.id !== id)
        );
    };

    const editRow = (id: number, field: keyof PeriodontalTissue, value: string) => {
        form.setValue(
            'periodontal_tissues',
            form.getValues('periodontal_tissues').map((row: PeriodontalTissue) => {
                if (row.id === id) {
                    return {
                        ...row,
                        [field]: value,
                    };
                }
                return row;
            })
        );
    };

    return (
        <div className="p-4">
            <InputLabel>
                Kondisi Vitalitas Gigi
            </InputLabel>
            <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 mb-4 rounded"
                onClick={addRow}
            >
                Tambah Baris
            </button>
            <table className="border-collapse border border-gray-400 w-full">
                <thead>
                    <tr>
                        <th className="border border-gray-400 py-2 rotate-90 w-[5%]" rowSpan={2}>Gigi</th>
                        <th className="border border-gray-400 py-2  rotate-90 w-[10%]" rowSpan={2}>Lokasi</th>
                        <th className="border border-gray-400 py-2 w-[7%]" colSpan={3}>Pocket</th>
                        <th className="border border-gray-400 py-2 w-[12%]" colSpan={5}>Peradangan</th>
                        <th className="border border-gray-400 py-2 w-[6%]" colSpan={2}>Attachment</th>
                        <th className="border border-gray-400 py-2 rotate-90 w-[2%]" rowSpan={2}>PUS</th>
                        <th className="border border-gray-400 py-2 rotate-90 w-[5%]" rowSpan={2}>Lain-lain</th>
                        <th className="border border-gray-400 py-2" rowSpan={2}>Masalah</th>
                        <th className="border border-gray-400 py-2 w-[4%]" rowSpan={2}>Aksi</th>
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
                    {form.watch('periodontal_tissues').length > 0 ? form.watch('periodontal_tissues').map((row: PeriodontalTissue, index: number) => (
                        <tr key={getUniqueKey(row)}>
                            <td className="border border-gray-400 py-2">
                                <input
                                    type="text"
                                    value={row.tooth_number}
                                    onChange={(e) => editRow(row.id!, 'tooth_number', e.target.value)}
                                    className="w-full border-none text-center"
                                />
                            </td>
                            <td className="border border-gray-400 py-2">
                                <input
                                    type="text"
                                    value={row.location}
                                    onChange={(e) =>
                                        editRow(row.id!, 'location', e.target.value)
                                    }
                                    className="w-full border-none "
                                />
                            </td>
                            <td className="border border-gray-400 py-2">
                                <input
                                    type="text"
                                    value={row.pocket_false}
                                    onChange={(e) => editRow(row.id!, 'pocket_false', e.target.value)}
                                    className="w-full border-none text-center"
                                />
                            </td>
                            <td className="border border-gray-400 py-2">
                                <input
                                    type="text"
                                    value={row.pocket_true}
                                    onChange={(e) => editRow(row.id!, 'pocket_true', e.target.value)}
                                    className="w-full border-none text-center"
                                />
                            </td>
                            <td className="border border-gray-400 py-2">
                                <input
                                    type="text"
                                    value={row.pocket_depth}
                                    onChange={(e) => editRow(row.id!, 'pocket_depth', e.target.value)}
                                    className="w-full border-none text-center"
                                />
                            </td>
                            <td className="border border-gray-400 py-2">
                                <input
                                    type="text"
                                    value={row.inflammation_rubor}
                                    onChange={(e) => editRow(row.id!, 'inflammation_rubor', e.target.value)}
                                    className="w-full border-none text-center"
                                />
                            </td>
                            <td className="border border-gray-400 py-2">
                                <input
                                    type="text"
                                    value={row.inflammation_tumor}
                                    onChange={(e) => editRow(row.id!, 'inflammation_tumor', e.target.value)}
                                    className="w-full border-none text-center"
                                />
                            </td>
                            <td className="border border-gray-400 py-2">
                                <input
                                    type="text"
                                    value={row.inflammation_kolor}
                                    onChange={(e) => editRow(row.id!, 'inflammation_kolor', e.target.value)}
                                    className="w-full border-none text-center"
                                />
                            </td>
                            <td className="border border-gray-400 py-2">
                                <input
                                    type="text"
                                    value={row.inflammation_dolor}
                                    onChange={(e) => editRow(row.id!, 'inflammation_dolor', e.target.value)}
                                    className="w-full border-none text-center"
                                />
                            </td>
                            <td className="border border-gray-400 py-2">
                                <input
                                    type="text"
                                    value={row.inflammation_functio_laesa}
                                    onChange={(e) => editRow(row.id!, 'inflammation_functio_laesa', e.target.value)}
                                    className="w-full border-none text-center"
                                />
                            </td>
                            <td className="border border-gray-400 py-2">
                                <input
                                    type="text"
                                    value={row.attachment_normal}
                                    onChange={(e) => editRow(row.id!, 'attachment_normal', e.target.value)}
                                    className="w-full border-none text-center"
                                />
                            </td>
                            <td className="border border-gray-400 py-2">
                                <input
                                    type="text"
                                    value={row.attachment_decline}
                                    onChange={(e) => editRow(row.id!, 'attachment_decline', e.target.value)}
                                    className="w-full border-none text-center"
                                />
                            </td>
                            <td className="border border-gray-400 py-2">
                                <input
                                    type="text"
                                    value={row.PUS}
                                    onChange={(e) => editRow(row.id!, 'PUS', e.target.value)}
                                    className="w-full border-none text-center"
                                />
                            </td>
                            <td className="border border-gray-400 py-2">
                                <input
                                    type="text"
                                    value={row.other}
                                    onChange={(e) => editRow(row.id!, 'other', e.target.value)}
                                    className="w-full border-none text-center"
                                />
                            </td>
                            <td className="border border-gray-400 py-2">
                                <input
                                    type="text"
                                    value={row.problem}
                                    onChange={(e) => editRow(row.id!, 'problem', e.target.value)}
                                    className="w-full border-none"
                                />
                            </td>
                            <td className="border border-gray-400 py-2 ">
                                <button
                                    type="button"
                                    className="bg-red-500 hover:bg-red-700 mx-auto text-white font-bold py-2 px-3 rounded"
                                    onClick={() => removeRow(row.id!)}
                                >
                                    Hapus
                                </button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan={20} className="border border-gray-400 py-2 text-center">
                                Tidak ada data
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
