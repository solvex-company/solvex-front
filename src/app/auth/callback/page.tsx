"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAuthContext} from "@/context/AuthContext";
import { createTokenCookie } from "@/services/auth";

export default function AuthCallbackPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const { user, saveUserData } = useAuthContext();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      const login = true;
      saveUserData({ token, login });
      const createCookie = async () => {
        await createTokenCookie(token);
      }

      createCookie();

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
