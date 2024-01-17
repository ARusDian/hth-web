import LazyLoadMRT from '@/Components/LazyLoadMRT';
import { router } from '@inertiajs/react';
import AdminTableLayout from '@/Layouts/Admin/AdminTableLayout';
import { User } from '@/types';

import {
  MRT_ColumnFiltersState,
  MRT_PaginationState,
  type MRT_ColumnDef,
  MaterialReactTable,
  useMaterialReactTable
} from 'material-react-table'

import React, { useMemo } from 'react';
import route from 'ziggy-js';

interface UserActivity {
  id: number;
  description: string;
  causer: User;
  properties: {
    method:
    | 'CREATE'
    | 'UPDATE'
    | 'DELETE'
    | 'RESTORE'
    | 'FORCE_DELETE'
    | 'IMPORT'
    | 'EXPORT';
  };
  subject_type: string;
  created_at: string;
}

interface Props {
  activities: {
    data: UserActivity[];
    per_page: number;
    total: number;
    current_page: number;
  };
}

const color = {
  CREATE: 'text-green-500',
  IMPORT: 'text-purple-500',
  EXPORT: 'text-blue-500',
  UPDATE: 'text-yellow-500',
  DELETE: 'text-red-400',
  RESTORE: 'text-blue-500',
  FORCE_DELETE: 'text-red-600',
};

export default function UserActivityIndex({ activities }: Props) {

  const columns = useMemo<MRT_ColumnDef<UserActivity>[]>(
    () => [
      {
        header: 'Akun',
        accessorKey: 'causer.name',
      },
      {
        header: 'Objek',
        accessorFn: (originalRow: UserActivity) => {
          return originalRow.subject_type.replace('App\\Models\\', '');
        },
      },
      {
        header: 'Method',
        accessorFn: (originalRow: UserActivity) => {
          return (
            <p className={color[originalRow.properties.method]}>
              {originalRow.properties.method}
            </p>
          );
        },
        enableColumnFilter: false,
      },
      {
        header: 'Waktu',
        accessorFn: (originalRow: UserActivity) => {
          return new Date(originalRow.created_at).toLocaleString('id');
        },
        enableColumnFilter: false,
      },
    ], []);

  const [columnFilters, setColumnFilters] =
    React.useState<MRT_ColumnFiltersState>([]);

  const [pagination, setPagination] = React.useState<MRT_PaginationState>({
    pageIndex: activities.current_page - 1,
    pageSize: activities.per_page,
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
      only: ['activities'],
      onFinish: () => {
        setIsLoading(false);
      },
    });
  }, [pagination.pageIndex, pagination.pageSize, columnFilters]);

  const activityData = useMemo(() => {
    return activities.data.map(activity => {
      return {
        ...activity,
        causer: activity.causer,
        subject_type: activity.subject_type,
        properties: activity.properties,
        created_at: activity.created_at,
      };
    });
  }, [activities]);

  const table = useMaterialReactTable<UserActivity>({
    columns: columns,
    data: activityData,
    rowCount: activities.total,
    enableColumnActions: true,
    enableColumnFilters: true,
    enablePagination: true,
    enableSorting: true,
    enableBottomToolbar: true,
    enableTopToolbar: true,
    enableExpanding: true,
    enableExpandAll: true,
    muiTableBodyRowProps: { hover: false },
    positionActionsColumn: 'last',
    muiTableHeadCellProps: {
      sx: {
        fontWeight: 'bold',
        fontSize: '16px',
      },
    },
    state: {
      pagination,
      isLoading,
      columnFilters,
    },
    getRowId: it => it.id?.toString(),
    manualPagination: true,
    onPaginationChange: setPagination,
    onColumnFiltersChange: setColumnFilters,
    renderDetailPanel: row => {
      return (
        <p className="flex justify-center">{row.row.original.description}</p>
      );
    },
  });

  return (
    <AdminTableLayout title="User Activity">
      <div className="mb-12 p-7 text-gray-800 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50 w-full flex flex-col gap-3">
        <MaterialReactTable table={table} />
      </div>
    </AdminTableLayout>
  );
}
