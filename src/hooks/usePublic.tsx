"use client";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const usePublic = () => {
  const router = useRouter();
  const { user, isAuth } = useAuthContext();
  useEffect(() => {
    if (isAuth) {
      router.push("/not-found");
      if (user?.id_role === 1) {
        router.push("/admin/dashboard");
      } else if (user?.id_role === 2) {
        router.push("/helper/dashboard");
      } else if (user?.id_role === 3) {
        router.push("/employee/dashboard");
      }
    }
  }, [isAuth, router, user]);
  return <div>Verificando ruta...</div>;
};

export default usePublic;

// modificacion del usePublic para que no se redireccione a dashboard siempre
/*

"use client";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter, usePathname } from "next/navigation"; // Importa usePathname
import { useEffect } from "react";

const usePublic = () => {
  const router = useRouter();
  const pathname = usePathname(); // Obtiene la ruta actual
  const { user, isAuth, isLoading } = useAuthContext(); // Asumo que isAuth y loading vienen del contexto

  useEffect(() => {
    // Espera hasta que la autenticación haya terminado de cargar para evitar redirecciones tempranas
    if (isLoading) {
      return;
    }

    // Si el usuario está autenticado, queremos redirigirlo fuera de las páginas "públicas"
    if (isAuth) {
      let targetDashboard = "";
      if (user?.id_role === 1) {
        targetDashboard = "/admin/dashboard";
      } else if (user?.id_role === 2) {
        targetDashboard = "/helper/dashboard";
      } else if (user?.id_role === 3) {
        targetDashboard = "/employee/dashboard";
      }

      // Definir las rutas que SÍ son públicas y de las que queremos redirigir a los usuarios logueados
      const publicOnlyRoutes = ["/login", "/register", "/", "/auth-callback"]; // Añade las rutas que consideres "públicas"

      // Solo redirige si la ruta actual es una de las rutas "públicas"
      // Y si la ruta actual NO es ya el dashboard o una sub-ruta del dashboard
      // (Esta segunda condición es redundante si solo redirigimos desde publicOnlyRoutes)
      if (publicOnlyRoutes.includes(pathname)) {
        // Redirige al dashboard apropiado
        if (targetDashboard && pathname !== targetDashboard) {
          // Evita redirigir si ya estás en el dashboard exacto
          router.replace(targetDashboard); // Usar replace para evitar acumular en el historial
        }
      }
      // Si el usuario está logueado y NO está en una ruta pública (ej. /employee/tickets),
      // NO HAGAS NADA, déjalo en la página actual.
    }
    // Si NO está autenticado (isAuth es false), este hook no hace nada,
    // permitiendo que el usuario permanezca en la página pública.
    // Otro hook (e.g., usePrivate) se encargaría de redirigir si intenta acceder a una ruta protegida.
  }, [isAuth, router, user, pathname, isLoading]); // Asegúrate de incluir pathname y loading en las dependencias

  // Este componente no renderiza nada visible, solo maneja la lógica de redirección.
  // El mensaje "Verificando ruta..." es útil mientras se decide la redirección.
  if (isLoading) {
    return <div>Verificando ruta...</div>;
  }
  return null; // O un spinner/loading si es necesario
};

export default usePublic;
 */
