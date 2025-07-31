import { NextResponse, type NextRequest } from "next/server";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "jwt-decode";

// Configuración de rutas
const PUBLIC_ROUTES = ["/login", "/register", "/about", "/"];
const ADMIN_ROUTES = ["/admin"];
const HELPER_ROUTES = ["/helper"];
const EMPLOYEE_ROUTES = ["/employee"];

export interface CustomJwtPayload extends JwtPayload {
  id_role: number;
}

export enum UserRole {
  ADMIN = 1,
  HELPER = 2,
  EMPLOYEE = 3,
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token = (await cookies()).get("token")?.value;

  console.log("Middleware ejecutándose en:", pathname);

  // Verificar si es una ruta pública
  const isPublicRoute = PUBLIC_ROUTES.some((route) => {
    if (route === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(route);
  });

  // Si no hay token
  if (!token) {
    // Si es ruta pública, permitir acceso
    if (isPublicRoute) {
      return NextResponse.next();
    }
    // Si no es ruta pública, redirigir a login
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Si hay token, decodificarlo
  try {
    const decoded = jwtDecode<CustomJwtPayload>(token);
    const userRole = decoded.id_role;

    // Definir el dashboard correcto para cada rol
    const roleDashboards = {
      [UserRole.ADMIN]: "/admin/dashboard",
      [UserRole.HELPER]: "/helper/dashboard",
      [UserRole.EMPLOYEE]: "/employee/dashboard",
    };

    const userDashboard = roleDashboards[userRole as UserRole];

    // Si está en una ruta pública y tiene token válido
    if (isPublicRoute) {
      // Solo redirigir si no está ya en su dashboard
      if (pathname !== userDashboard) {
        return NextResponse.redirect(new URL(userDashboard, request.url));
      }
      return NextResponse.next();
    }

    // Verificar acceso a rutas protegidas por rol
    if (ADMIN_ROUTES.some((route) => pathname.startsWith(route))) {
      if (userRole !== UserRole.ADMIN) {
        return NextResponse.redirect(new URL("/unauthorized", request.url));
      }
    }

    if (HELPER_ROUTES.some((route) => pathname.startsWith(route))) {
      if (userRole !== UserRole.HELPER) {
        return NextResponse.redirect(new URL("/unauthorized", request.url));
      }
    }

    if (EMPLOYEE_ROUTES.some((route) => pathname.startsWith(route))) {
      if (userRole !== UserRole.EMPLOYEE) {
        return NextResponse.redirect(new URL("/unauthorized", request.url));
      }
    }

    // Si llegó hasta aquí, tiene acceso
    return NextResponse.next();
  } catch (error) {
    // Token inválido
    console.warn("Token inválido:", error);

    // Si está en ruta pública, permitir acceso (eliminando cookie inválida sería ideal)
    if (isPublicRoute) {
      return NextResponse.next();
    }

    // Si no es ruta pública, redirigir a login
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// Configuración del middleware - INCLUIR todas las rutas excepto APIs
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes) - IMPORTANTE: excluir TODAS las APIs
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api/|_next/static|_next/image|favicon.ico|auth/callback).*)",
  ],
};
