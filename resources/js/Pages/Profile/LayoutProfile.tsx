import DashboardAdminLayout from '@/Layouts/Admin/DashboardAdminLayout';
import { User } from '@/types';
import React from 'react';

interface Props {
  user: User;
  title: string;
  children: React.ReactNode;
}

export default function LayoutProfile({ user, title, children }: Props) {

  return <DashboardAdminLayout title={title}>{children}</DashboardAdminLayout>

}
