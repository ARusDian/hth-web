import React from 'react';
import route from 'ziggy-js';
import { User } from '@/types';
import { router } from '@inertiajs/react';
import AdminShowLayout from '@/Layouts/Admin/AdminShowLayout';
import MuiInertiaLinkButton from '@/Components/MuiInertiaLinkButton';
import { asset } from '@/Models/Helper';
import { Button } from '@mui/material';
import { useConfirm } from 'material-ui-confirm';

interface Props {
  user_data: User;
}

export default function Show(props: Props) {
  let user = props.user_data;
  const confirm = useConfirm();

  let editProps = {};

  if (!user.deleted_at) {
    editProps = {
      editRoute: route('user.edit', user.id),
      editRouteTitle: 'Edit',
    };
  }

  const handleDelete = () => {
    confirm({
      description: `Ini akan menghapus seluruh data ${user.name} selamanya.`,
      confirmationButtonProps: { autoFocus: true },
    })
      .then(() => router.delete(route('user.force-delete', [user.id])))
      .catch(e => console.log(e, 'Deletion cancelled.'));
  };

  return (
    <AdminShowLayout
      title={`Pengguna ${user.name}`}
      headerTitle={'Data User'}
      backRoute={route('user.index')}
      backRouteTitle="Kembali"
      {...editProps}
      isRestore={user.deleted_at ? true : false}
      onDelete={() => {
        user.deleted_at
          ? router.post(route('user.restore', [user.id]))
          : router.delete(route('user.destroy', [user.id]));
      }}
      deleteTitle={user.deleted_at ? 'Restore' : 'Nonaktifkan'}
      onDeleteMessage={
        user.deleted_at
          ? `Ini akan mengembalikan Akun ${user.name}`
          : `Ini akan menonaktifkan Akun ${user.name}`
      }
    >
      <div className="m-8 mb-12 p-7 text-gray-800 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50">
        <div className="flex justify-between my-3 flex-row-reverse">

          <div className="flex justify-between gap-3">
            <div className="flex flex-col justify-center">
              <Button
                variant="contained"
                color="error"
                onClick={handleDelete}
                size="large"
              >
                <label htmlFor="my-modal">Hapus Total</label>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            className="rounded-full h-40 w-40 object-cover border"
            src={
              user.profile_photo_path
                ? asset('public', user.profile_photo_path)
                : asset('root', 'assets/image/default-profile.png')
            }
            alt={user.name}
          />
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
              <td className="py-3 text-center">{user.name}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Email</td>
              <td className="py-3 text-center">{user.email}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">No Telepon</td>
              <td className="py-3 text-center">{user.phone_number}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Alamat</td>
              <td className="py-3 text-center">{user.address}</td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Gender</td>
              <td className="py-3 text-center">
                {user.gender === 'L'
                  ? 'Laki laki'
                  : user.gender === 'P'
                  ? 'Perempuan'
                  : 'Tidak Diketahui'}
              </td>
            </tr>
            <tr className="border-b py-3 border-black">
              <td className="py-3 text-center">Status</td>
              <td className="py-3 text-center">
                {user.roles.map(role => role.name).join(', ')}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminShowLayout>
  );
}
