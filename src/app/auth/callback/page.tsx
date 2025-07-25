"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";

function AuthCallbackPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const { user, saveUserData } = useAuthContext();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      const login = true;
      saveUserData({ token, login });
      /* localStorage.setItem('token', token); // Guarda el token
      router.push('/employee/dashboard'); // Redirige al dashboard */
      /* const payload = jwtDecode<User>(token);
      console.log("El payload google es:", payload); */

      if (!user) return;

      if (user.id_role === 1) {
        router.push("/admin/dashboard");
      } else if (user.id_role === 2) {
        router.push("/helper/dashboard");
      } else if (user.id_role === 3) {
        router.push("/employee/dashboard");
      }
    } else {
      router.push("/login"); // Si no hay token, redirige al login
    }
  }, [user, router, saveUserData, searchParams]);

  return <div>Procesando autenticación...</div>;
}

export default function Page() {
  return (
    <Suspense fallback={<div>Procesando autenticación...</div>}>
      <AuthCallbackPage />
    </Suspense>
  );
}
