"use client";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const usePrivate = () => {
  const router = useRouter();
  const { isAuth } = useAuthContext();
  useEffect(() => {
    if (isAuth === false) {
      router.replace("/");
    }
  }, [isAuth, router]);
  return null;
};

export default usePrivate;

// usePrivate usado para que la recarga de la página no redirija a dashboard siempre.
/*
"use client";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter, usePathname } from "next/navigation"; // Asegúrate de importar usePathname
import { useEffect } from "react";

const usePrivate = () => {
  const router = useRouter();
  const pathname = usePathname(); // Obtén la ruta actual
  // Asegúrate de que isLoading se obtiene del contexto
  const { user, isAuth, isLoading } = useAuthContext();

  useEffect(() => {
    // 1. Si la autenticación aún está en proceso de carga, NO HAGAS NADA.
    // Esto es CRUCIAL para evitar redirecciones prematuras.
    if (isLoading) {
      return;
    }

    // 2. Si el usuario NO está autenticado (y la carga ya terminó)
    if (!isAuth) {
      router.replace("/login"); // Redirige al login (o a la raíz si esa es tu página de login)
      return; // Detiene la ejecución del resto del efecto
    }

    // 3. Si el usuario SÍ está autenticado (isAuth es true y isLoading es false),
    // entonces verifica el rol para la ruta actual.
    let requiredRole = 0; // Por defecto, sin rol específico si no es un path de dashboard

    // Determina el rol requerido basado en el segmento inicial de la URL
    // Ajusta estas rutas según la estructura real de tu aplicación
    if (pathname.startsWith("/admin")) {
      requiredRole = 1; // Rol de Admin
    } else if (pathname.startsWith("/helper")) {
      requiredRole = 2; // Rol de Helper
    } else if (pathname.startsWith("/employee")) {
      requiredRole = 3; // Rol de Employee
    }
    // Puedes añadir más casos si tienes rutas específicas que no comienzan con /admin, /helper, /employee
    // Por ejemplo: si tienes una ruta /profile que es para todos los roles, no tendría un requiredRole

    // Si hay un rol requerido para esta ruta (no es 0)
    // Y el rol del usuario LOGUEADO no coincide con el rol requerido
    if (requiredRole !== 0 && user?.id_role !== requiredRole) {
      console.warn(
        `Acceso denegado. Rol ${user?.id_role} intentó acceder a ${pathname}`
      );

      // Redirigir al usuario a su propio dashboard o a una página de "acceso denegado"
      let redirectDashboard = "/"; // Fallback por si acaso
      if (user?.id_role === 1) {
        redirectDashboard = "/admin/dashboard";
      } else if (user?.id_role === 2) {
        redirectDashboard = "/helper/dashboard";
      } else if (user?.id_role === 3) {
        redirectDashboard = "/employee/dashboard";
      }
      router.replace(redirectDashboard);
      return; // Detiene la ejecución
    }

    // Si llega aquí, significa:
    // 1. La carga terminó (isLoading es false).
    // 2. El usuario está autenticado (isAuth es true).
    // 3. El rol del usuario coincide con el requerido para la ruta (o la ruta no requiere un rol específico).
    // En este caso, no se hace ninguna redirección, y el usuario permanece en la página.
  }, [isAuth, router, user, pathname, isLoading]); // Añade user, pathname, isLoading a las dependencias

  // Este componente no debe renderizar nada visible.
  // Es mejor un "null" o un indicador de carga solo si isLoading es true.
  if (isLoading) {
    return <div>Verificando permisos...</div>;
  }
  return null;
};

export default usePrivate;

 */
