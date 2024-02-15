import {
  MRT_ColumnFiltersState,
  MRT_PaginationState,
  type MRT_ColumnDef,
  MaterialReactTable,
  useMaterialReactTable
} from 'material-react-table'
import React from 'react';
import route from 'ziggy-js';
import AdminTableLayout from '@/Layouts/Admin/AdminTableLayout';
import MuiInertiaLinkButton from '@/Components/MuiInertiaLinkButton';
import { router } from '@inertiajs/react';
import { MedicalRecordModel } from '@/Models/MedicalRecord';


interface Props {
  medical_records: {
    data: MedicalRecordModel[];
    per_page: number;
    total: number;
    current_page: number;
  };
}

export default function Index(props: Props) {
  const medicalRecords = props.medical_records;


  const [columnFilters, setColumnFilters] =
    React.useState<MRT_ColumnFiltersState>([]);

  const [pagination, setPagination] = React.useState<MRT_PaginationState>({
    pageIndex: medicalRecords.current_page - 1,
    pageSize: medicalRecords.per_page,
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
      only: ['medical_records'],
      onFinish: () => {
        setIsLoading(false);
      },
    });
  }, [pagination.pageIndex, pagination.pageSize, columnFilters]);

  const dataColumns = React.useMemo<MRT_ColumnDef<MedicalRecordModel>[]>(
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
        accessorKey: 'NIK',
        header: 'NIK',
      },
      {
        accessorKey: 'name',
        header: 'Rekam Medis',
      },
      {
        accessorKey: 'date_of_birth',
        header: 'Tanggal Lahir',
      },
      {
        accessorKey: 'address',
        header: 'Alamat',
      },
      {
        accessorKey: 'phone_number',
        header: 'Nomor Telepon',
      }
    ], []) as MRT_ColumnDef<MedicalRecordModel>[]

  const table = useMaterialReactTable({
    columns: dataColumns,
    data: medicalRecords.data,
    rowCount: medicalRecords.total,
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
          href={route('medical-record.show', row.original.id)}
        >
          Show
        </MuiInertiaLinkButton>
      </div>
    ),
    renderDetailPanel: ({ row }) => (
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <span className="font-semibold">Keluhan Utama</span>
          <span>{row.original.main_complaint}</span>
        </div>
        {row.original.main_complaint && (
          <div className="flex flex-col gap-1">
            <span className="font-semibold">Keluhan Tambahan</span>
            <span>{row.original.additional_complaint}</span>
          </div>
        )}
      </div>
    )
  }); 

  return (
    <AdminTableLayout
      title="Daftar Rekam Medis"
      addRoute={route('medical-record.create')}
      addRouteTitle='Tambah Rekam Medis'
    >
      <div className="mt-6 p-7 text-gray-500 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50 flex flex-col gap-3">
        <MaterialReactTable table={table} />
      </div>
    </AdminTableLayout>
  );
}
