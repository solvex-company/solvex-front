"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";

// comoponents
import Loader from "@/app/components/Loader/Loader";

export default function AuthCallbackPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname(); // Get the current pathname

  const { user, saveUserData } = useAuthContext();

  useEffect(() => {
    const token = searchParams.get("token");

    if (token) {
      const login = true;
      saveUserData({ token, login });
    } else {
      if (!user) {
        router.push("/login");
        return;
      }
    }

    if (user) {
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
    }
  }, [user, router, saveUserData, searchParams, pathname]);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full gap-3">
      <h2 className="text-xl">Procesando autenticación...</h2>
      <Loader />
    </div>
  );
}
