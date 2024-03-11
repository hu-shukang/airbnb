'use client';

import { useLoginModal } from '@/hooks';
import { LoginModel, initLoginModel } from '@/models';
import { useRouter } from 'next/navigation';
import Input from '@/components/ui/Input';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Modal from '../ui/Modal';

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const [loading, setLoading] = useState(false);
  const form = useForm<LoginModel>({
    defaultValues: initLoginModel,
  });

  const onSubmit = (data: LoginModel) => {
    console.log(data);
  };

  return (
    <Modal
      disabled={loading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="登录"
      onSubmit={form.handleSubmit(onSubmit)}
      onClose={loginModal.onClose}
    >
      <FormProvider {...form}>
        <form className="flex flex-col gap-4">
          <Input name="email" label="邮箱" />
          <Input name="password" label="用户名" />
        </form>
      </FormProvider>
    </Modal>
  );
};

export default LoginModal;
