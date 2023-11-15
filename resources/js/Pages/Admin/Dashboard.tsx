import React from 'react';
import AppLayout from '@/Layouts/Admin/DashboardAdminLayout';
import { User } from '@/types';
import useTypedPage from '@/Hooks/useTypedPage';


interface Props{

}


export default function Dashboard(props: Props) {

  const page = useTypedPage<Props>();

  return (
    <AppLayout title="Dashboard">
      <div className="mx-auto sm:px-6 lg:px-8">
        <div className="my-4 flex flex-col gap-5 text-[#3A63F5]  font-bold">
          <div className="text-3xl lg:text-6xl">
            Selamat Datang, {page.props.user.name}
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col w-full gap-5">
              <div className="flex justify-between gap-3 p-7 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50 py-auto h-full">
                <p className="my-auto">
                  <span className="text-xl text-black ">Semua Akun</span>
                </p>
                <p className="m-auto ">
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
