import { BaseMedicalRecordModel, TeethConditionVitality } from '@/Models/MedicalRecord';
import { useMemo, useState } from 'react';
import InputLabel from "@/Components/Jetstream/InputLabel";
import React from 'react'
import { UseFormReturn } from 'react-hook-form';
import { getUniqueKey } from '@/Models/Helper';

interface Props {
    form: UseFormReturn<BaseMedicalRecordModel>;
    className?: string;
}

export default function ConditionVitalityForm(props: Props) {
    const { form } = props;

    const addRow = () => {
        form.setValue('teeth_condition_vitalities', [
            ...form.getValues('teeth_condition_vitalities'),
            {
                id: Math.random(),
                tooth_number: '',
                inspection: '',
                thermis: '',
                sondasi: '',
                percussion: '',
                druk: '',
                mobility: '',
                problem: '',
            },
        ]);
    };

    const removeRow = (id: number) => {
        form.setValue(
            'teeth_condition_vitalities',
            form.getValues('teeth_condition_vitalities').filter((row) => row.id !== id)
        );
    };

    const editRow = (id: number, field: keyof TeethConditionVitality, value: string) => {
        form.setValue(
            'teeth_condition_vitalities',
            form.getValues('teeth_condition_vitalities').map((row) => {
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
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded"
                onClick={addRow}
            >
                Tambah Baris
            </button>
            <table className="border-collapse border border-gray-400 w-full">
                <thead>
                    <tr>
                        <th className="border border-gray-400 px-4 py-2 w-[1%]">Elemen Gigi</th>
                        <th className="border border-gray-400 px-4 py-2 w-[1%]">Inspeksi</th>
                        <th className="border border-gray-400 px-4 py-2 w-[1%]">Thermis</th>
                        <th className="border border-gray-400 px-4 py-2 w-[1%]">Sondasi</th>
                        <th className="border border-gray-400 px-4 py-2 w-[1%]">Perkusi</th>
                        <th className="border border-gray-400 px-4 py-2 w-[1%]">Druk</th>
                        <th className="border border-gray-400 px-4 py-2 w-[15%]">Mobility</th>
                        <th className="border border-gray-400 px-4 py-2">Masalah</th>
                        <th className="border border-gray-400 px-4 py-2 w-[1%]">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {form.watch('teeth_condition_vitalities').length > 0 ? form.watch('teeth_condition_vitalities').map((row, index) => (
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
                                    value={row.inspection}
                                    onChange={(e) =>
                                        editRow(row.id!, 'inspection', e.target.value)
                                    }
                                    className="w-full border-none text-center"
                                />
                            </td>
                            <td className="border border-gray-400 py-2">
                                <input
                                    type="text"
                                    value={row.thermis}
                                    onChange={(e) => editRow(row.id!, 'thermis', e.target.value)}
                                    className="w-full border-none text-center"
                                />
                            </td>
                            <td className="border border-gray-400 py-2">
                                <input
                                    type="text"
                                    value={row.sondasi}
                                    onChange={(e) => editRow(row.id!, 'sondasi', e.target.value)}
                                    className="w-full border-none text-center"
                                />
                            </td>
                            <td className="border border-gray-400 py-2">
                                <input
                                    type="text"
                                    value={row.percussion}
                                    onChange={(e) => editRow(row.id!, 'percussion', e.target.value)}
                                    className="w-full border-none text-center"
                                />
                            </td>
                            <td className="border border-gray-400 py-2">
                                <input
                                    type="text"
                                    value={row.druk}
                                    onChange={(e) => editRow(row.id!, 'druk', e.target.value)}
                                    className="w-full border-none text-center"
                                />
                            </td>
                            <td className="border border-gray-400 py-2">
                                <input
                                    type="text"
                                    value={row.mobility}
                                    onChange={(e) => editRow(row.id!, 'mobility', e.target.value)}
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
                            <td className="border border-gray-400 px-4 py-2">
                                <button
                                    type="button"
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => removeRow(row.id!)}
                                >
                                    Hapus
                                </button>
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
    );

}
