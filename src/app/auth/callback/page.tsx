"use client";

import { Suspense, useEffect } from "react";

import { createTokenCookie } from "@/services/auth";
import { useSearchParams, useRouter /* , usePathname */ } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";

// comoponents
import Loader from "@/app/components/Loader/Loader";

function AuthCallbackContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  /* const pathname = usePathname(); // Get the current pathname */

  const { user, saveUserData } = useAuthContext();

  useEffect(() => {
    const token = searchParams.get("token");

    if (token) {
      const login = true;
      setTimeout(() => {
        saveUserData({ token, login });
      }, 2000);
      const createCookie = async () => {
        await createTokenCookie(token);
      };

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
      if (!user) {
        router.push("/login");
        return;
      }
    }

    /* if (user) {
      let targetDashboard = "";
      if (user.id_role === 1) {
        targetDashboard = "/admin/dashboard";
      } else if (user.id_role === 2) {
        targetDashboard = "/helper/dashboard";
      } else if (user.id_role === 3) {
        targetDashboard = "/employee/dashboard";
      }

      if (targetDashboard && !pathname.startsWith(targetDashboard)) {
        router.push(targetDashboard);
      }
    } */
  }, [user, router, saveUserData, searchParams]);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full gap-3">
      <h2 className="text-xl">Procesando autenticación...</h2>
      <Loader />
    </div>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center h-screen w-full gap-3">
          <h2 className="text-xl">Cargando...</h2>
          <Loader />
        </div>
      }
    >
      <AuthCallbackContent />
    </Suspense>
  );
}
