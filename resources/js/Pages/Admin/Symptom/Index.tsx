import {
  MRT_ColumnFiltersState,
  MRT_PaginationState,
  type MRT_ColumnDef,
  MaterialReactTable,
  useMaterialReactTable
} from 'material-react-table'
import React, { useEffect } from 'react';
import route from 'ziggy-js';
import { User } from '@/types';
import AdminTableLayout from '@/Layouts/Admin/AdminTableLayout';
import MuiInertiaLinkButton from '@/Components/MuiInertiaLinkButton';
import { asset } from '@/Models/Helper';
import { Controller, useForm } from 'react-hook-form';
import Api from '@/Utils/Api';
import { ImportFileModel } from '@/Models/FileModel';
import { Button, Modal, TextField } from '@mui/material';
import { router, usePage } from '@inertiajs/react';
import InputError from '@/Components/Jetstream/InputError';
import ReactLoading from 'react-loading';
import { BaseSymptomModel, SypmtomModel } from '@/Models/Symptom';

interface Props {
  symptoms: {
    data: SypmtomModel[];
    per_page: number;
    total: number;
    current_page: number;
  };
}

export default function Index(props: Props) {
  const symptoms = props.symptoms;


  const [columnFilters, setColumnFilters] =
    React.useState<MRT_ColumnFiltersState>([]);

  const [pagination, setPagination] = React.useState<MRT_PaginationState>({
    pageIndex: symptoms.current_page - 1,
    pageSize: symptoms.per_page,
  });

  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const url = new URL(route(route().current()!).toString());

    url.searchParams.set('columnFilters', JSON.stringify(columnFilters ?? []));
    url.searchParams.set('page', (pagination.pageIndex + 1).toString());
    url.searchParams.set('perPage', pagination.pageSize.toString());
    // url.searchParams.set('globalFilter', globalFilter ?? '');

    if (window.location.href == url.toString()) {
      return;
    }

    setIsLoading(true);
    router.reload({
      // preserveState: true,
      // preserveScroll: true,
      data: {
        page: pagination.pageIndex + 1,
        perPage: pagination.pageSize,
        columnFilters: JSON.stringify(columnFilters),
        // globalFilter: globalFilter,
      },
      only: ['symptoms'],
      onFinish: () => {
        setIsLoading(false);
      },
    });
  }, [pagination.pageIndex, pagination.pageSize, columnFilters]);

  const dataColumns = React.useMemo<MRT_ColumnDef<SypmtomModel>[]>(
    () => [
      {
        header: 'No',
        accessorFn(row) {
          return pagination.pageIndex * pagination.pageSize + row.id;
        },
        enableColumnFilter: false,
        enableSorting: false,
        size: 20,
      },
      {
        accessorKey: 'description',
        header: 'Gejala',
      },

    ], []) as MRT_ColumnDef<SypmtomModel>[]

  const table = useMaterialReactTable({
    columns: dataColumns,
    data: symptoms.data,
    rowCount: symptoms.total,
    enableGlobalFilter: false,
    enableColumnActions: true,
    enableColumnFilters: true,
    enablePagination: true,
    enableSorting: true,
    enableBottomToolbar: true,
    enableTopToolbar: true,
    enableRowActions: true,
    enableExpanding: true,
    enableExpandAll: true,
    layoutMode: 'semantic',
    positionActionsColumn: 'last',
    muiTableBodyRowProps: { hover: false },
    state: {
      pagination,
      isLoading,
      columnFilters,
    },
    getRowId: it => it.id?.toString(),
    manualPagination: true,
    onPaginationChange: setPagination,
    onColumnFiltersChange: setColumnFilters,
    muiTableHeadCellProps: {
      sx: {
        fontWeight: 'bold',
        fontSize: '16px',
      },
    },
    renderRowActions: ({ row }) => (
      <div className="flex items-center justify-center  gap-2">
        <MuiInertiaLinkButton
          color="primary"
          href={route('symptom.show', row.original.id)}
        >
          Show
        </MuiInertiaLinkButton>
      </div>
    ),
    renderDetailPanel: ({ row }) => (
      <div>

      </div>
    )
  });

  return (
    <AdminTableLayout
      title="Gejala"
      addRoute={route('symptom.create')}  
      addRouteTitle='Tambah Gejala'
    >
      <div className="mt-6 p-7 text-gray-500 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50 flex flex-col gap-3">
        <MaterialReactTable table={table} />
      </div>
    </AdminTableLayout>
  );
}
