import React from 'react';
import AppLayout from '@/Layouts/Admin/DashboardAdminLayout';
import { User } from '@/types';
import useTypedPage from '@/Hooks/useTypedPage';


interface Props {

}


export default function Dashboard(props: Props) {

  const page = useTypedPage<Props>();

  return (
    <AppLayout title="Dashboard">
      <div className="mx-auto sm:px-6 lg:px-8">
        <div className="my-4 text-[#3A63F5]  font-bold flex flex-col w-full gap-10">
          <div className="text-3xl lg:text-6xl mx-auto">
            Selamat Datang di Aplikasi HTH
          </div>
          <div className="my-5">
            <img src="/assets/image/dashboard.jpg" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
