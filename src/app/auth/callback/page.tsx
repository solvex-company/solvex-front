"use client";

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useAuthContext, User } from '@/context/authContext';
import { jwtDecode } from 'jwt-decode';

export default function AuthCallbackPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const { saveUserData } = useAuthContext();

  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      const login = true;
      saveUserData({token, login});
      /* localStorage.setItem('token', token); // Guarda el token
      router.push('/employee/dashboard'); // Redirige al dashboard */
      const payload = jwtDecode<User>(token)
      console.log('El payload google es:', payload);
           
      if (!payload) return;
    
      if (payload.id_role === 1) {
        router.push("/admin/dashboard");
      } else if (payload.id_role === 2) {
        router.push("/helper/dashboard");
      } else if (payload.id_role === 3) {
        router.push("/employee/dashboard");
      }


    } else {
      router.push('/login'); // Si no hay token, redirige al login
    }
  }, [router]);

  return <div>Procesando autenticación...</div>;
}