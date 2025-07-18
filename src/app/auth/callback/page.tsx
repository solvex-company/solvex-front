"use client";

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function AuthCallbackPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      localStorage.setItem('token', token); // Guarda el token
      router.push('/employee/dashboard'); // Redirige al dashboard
    } else {
      router.push('/login'); // Si no hay token, redirige al login
    }
  }, []);

  return <div>Procesando autenticación...</div>;
}