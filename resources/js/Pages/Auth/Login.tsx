import classNames from 'classnames';
import React from 'react';

import AuthenticationCard from '@/Components/Jetstream/AuthenticationCard';
import Checkbox from '@/Components/Jetstream/Checkbox';
import InputError from '@/Components/Jetstream/InputError';
import InputLabel from '@/Components/Jetstream/InputLabel';
import PrimaryButton from '@/Components/Jetstream/PrimaryButton';
import TextInput from '@/Components/Jetstream/TextInput';
import useRoute from '@/Hooks/useRoute';
import { Head, Link, useForm } from '@inertiajs/react';

interface Props {
  canResetPassword: boolean;
  status: string;
}

export default function Login({ canResetPassword, status }: Props) {
  const route = useRoute();
  const form = useForm({
    email: '',
    password: '',
    remember: '',
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    form.post(route('login'), {
      onFinish: () => form.reset('password'),
    });
  }

  return (
    <AuthenticationCard>
      <Head title="login" />

      {status && (
        <div className="mb-4 font-medium text-sm text-green-600">{status}</div>
      )}

      <form onSubmit={onSubmit}>
        <div>
          <InputLabel htmlFor="email">Email</InputLabel>
          <TextInput
            id="email"
            type="email"
            className="mt-1 block w-full"
            value={form.data.email}
            onChange={e => form.setData('email', e.currentTarget.value)}
            required
            autoFocus
          />
          <InputError className="mt-2" message={form.errors.email} />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="password">Password</InputLabel>
          <TextInput
            id="password"
            type="password"
            className="mt-1 block w-full"
            value={form.data.password}
            onChange={e => form.setData('password', e.currentTarget.value)}
            required
            autoComplete="current-password"
          />
          <InputError className="mt-2" message={form.errors.password} />
        </div>

        <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-end md:space-y-0 mt-4">

          <div className="flex items-center">
            <Link
              href={route('register')}
              className="underline text-sm text-gray-600 hover:text-gray-900"
            >
              Need an account?
            </Link>
            <PrimaryButton
              className={classNames('ml-4', { 'opacity-25': form.processing })}
              disabled={form.processing}
            >
              Log in
            </PrimaryButton>
          </div>
        </div>
      </form>
    </AuthenticationCard>
  );
}
