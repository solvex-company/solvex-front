// "use client";

// import { useEffect } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import { useAuthContext } from "@/context/AuthContext";

// export default function AuthCallbackPage() {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const { user, saveUserData } = useAuthContext();

//   useEffect(() => {
//     const token = searchParams.get("token");
//     if (token) {
//       const login = true;
//       saveUserData({ token, login });
//       /* localStorage.setItem('token', token); // Guarda el token
//       router.push('/employee/dashboard'); // Redirige al dashboard */
//       /* const payload = jwtDecode<User>(token);
//       console.log("El payload google es:", payload); */

//       if (!user) return;

//       if (user.id_role === 1) {
//         router.push("/admin/dashboard");
//       } else if (user.id_role === 2) {
//         router.push("/helper/dashboard");
//       } else if (user.id_role === 3) {
//         router.push("/employee/dashboard");
//       }
//     } else {
//       router.push("/login"); // Si no hay token, redirige al login
//     }
//   }, [user, router, saveUserData, searchParams]);

//   return <div>Procesando autenticación...</div>;
// }

// Modificaciones para evitar redirecciones innecesarias cuando se actualiza la pagina

"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";

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

  return <div>Procesando autenticación...</div>;
}
