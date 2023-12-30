import { BaseDiseaseModel } from '@/Models/Disease';
import { SymptomModel } from '@/Models/Symptom';
import { Button } from '@mui/material';
import {
    type MRT_ColumnDef,
    MaterialReactTable,
    useMaterialReactTable,
    MRT_RowData,
    MRT_TableOptions,
    MRT_RowSelectionState
} from 'material-react-table'
import React, { useEffect } from 'react';
import { useMemo } from 'react';
import { Controller, FieldValues, Path, PathValue, UseFormReturn } from 'react-hook-form';

interface Props<T extends MRT_RowData, P extends FieldValues> {
    tableOptions: MRT_TableOptions<T>
    form: UseFormReturn<P>;
    name: Path<P>;
    insertFunction?: (data: PathValue<P, Path<P>>, rowSelection: MRT_RowSelectionState) => PathValue<P, Path<P>>;
}

export default function MRTSelectRowTable<T extends MRT_RowData, P extends FieldValues>(props: Props<T, P>) {
    
    const insertFunction = props.insertFunction ?? defaultInsertFunction;

    const dataColumns = useMemo<MRT_ColumnDef<T>[]>(
        () => props.tableOptions.columns, []) as MRT_ColumnDef<T>[]

    const [rowSelection, setRowSelection] = React.useState<MRT_RowSelectionState>(
        props.tableOptions.state?.rowSelection ?? {}
    );

    useEffect(() => props.form.setValue(props.name,
        insertFunction(props.tableOptions.data as PathValue<P, Path<P>>, rowSelection)
    ), [rowSelection]);

    const table = useMaterialReactTable<T>({
        ...props.tableOptions,
        onRowSelectionChange: setRowSelection,
        columns: dataColumns,
        enableRowSelection: true,
        enableSelectAll: true,
        data: props.tableOptions.data,
        getRowId: (row) => row.id,
        state: {
            ...props.tableOptions.state,
            rowSelection
        },
        renderTopToolbarCustomActions: () => (
            <div className="flex gap-3 justify-around">
                <Button
                    variant="contained"
                    color="warning"
                    onClick={() => {
                        if (Object.keys(rowSelection).length == 0) {
                            const obje = Object.fromEntries(
                                props.tableOptions.data.map(it => [it.id, true]),
                            );
                            setRowSelection(obje);
                        } else {
                            setRowSelection({});
                        }
                    }}
                >
                    Pilih Semua
                </Button>
            </div>
        )
    });

    return (
        <MaterialReactTable table={table} />
    )
}

const defaultInsertFunction = <P extends FieldValues>(data: PathValue<P, Path<P>> , rowSelection: MRT_RowSelectionState) => {
    return data.filter((it: { id: string | number; }) => rowSelection[it.id] as boolean);
}
