'use client';
import { useAuthContext } from '@/context/authContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const usePublic = () => {
  const router = useRouter();
  const { user, isAuth } = useAuthContext();
  useEffect(() => {
    if (isAuth) {
      router.push('/not-found');
      if (user?.id_role === 1) {
        router.push('/admin/dashboard');
      } else if (user?.id_role === 2) {
        router.push('/helper/dashboard');
      } else if (user?.id_role === 3) {
        router.push('/employee/dashboard');
      }
    };
  }, [isAuth, router]);
  return <div>Verificando ruta...</div>;
};

export default usePublic;