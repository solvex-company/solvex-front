import { NextResponse, type NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "jwt-decode";

// Configuración de rutas
const PUBLIC_ROUTES = ['/login', '/register', '/about', '/']; // Añade aquí tus rutas públicas
const ADMIN_ROUTES = ['/admin']; // Protege TODAS las rutas /admin/*
const HELPER_ROUTES = ['/helper']; // Protege TODAS las rutas /helper/*
const EMPLOYEE_ROUTES = ['/employee']; // Protege TODAS las rutas /employee/*

export interface CustomJwtPayload extends JwtPayload {
  id_role: number;
  // Aquí puedes añadir más campos personalizados de tu token si los hay
}

export enum UserRole {
  ADMIN = 1,
  HELPER = 2,
  EMPLOYEE = 3
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token = (await cookies()).get('token')?.value; // Asume que el token está en una cookie llamada 'token'

  // 1. Redirección si el usuario está logueado y trata de acceder a rutas públicas
  if (PUBLIC_ROUTES.some(route => pathname.startsWith(route))) {
    if (token) {
      try {
        const decoded = jwtDecode<CustomJwtPayload>(token);
        // Redirige según el rol
        switch (decoded.id_role) {
          case UserRole.ADMIN:
            return NextResponse.redirect(new URL('/admin/dashboard', request.url));
          case UserRole.HELPER:
            return NextResponse.redirect(new URL('/helper/dashboard', request.url));
          case UserRole.EMPLOYEE:
            return NextResponse.redirect(new URL('/employee/dashboard', request.url));
          default:
            return NextResponse.redirect(new URL('/', request.url));
        }
      } catch (error) {
        // Token inválido, permite el acceso a la ruta pública
        console.warn(error);
        return NextResponse.next();
      }
    }
    // Si no hay token, permite el acceso a la ruta pública
    return NextResponse.next();
  }

  // 2. Protección de rutas para usuarios logueados
  if (!token) {
    // Si no hay token y no es una ruta pública, redirige al login
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    const decoded = jwtDecode<CustomJwtPayload>(token);
    const userRole = decoded.id_role;

    // 3. Verificación de roles para rutas protegidas
    if (ADMIN_ROUTES.some(route => pathname.startsWith(route)) && userRole !== UserRole.ADMIN) {
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }
    
    if (HELPER_ROUTES.some(route => pathname.startsWith(route)) && userRole !== UserRole.HELPER) {
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }
    
    if (EMPLOYEE_ROUTES.some(route => pathname.startsWith(route)) && userRole !== UserRole.EMPLOYEE) {
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }

    // 4. Evitar que usuarios accedan a rutas de otros roles
    // Ejemplo: si un employee trata de acceder a rutas de admin
    /* if (userRole === UserRole.EMPLOYEE && 
        (ADMIN_ROUTES.some(route => pathname.startsWith(route)) || 
         HELPER_ROUTES.some(route => pathname.startsWith(route)))) {
      return NextResponse.redirect(new URL('/employee/dashboard', request.url));
    } */

    // Si todo está bien, permite el acceso
    return NextResponse.next();

  } catch (error) {
    // Token inválido, redirige al login
    console.warn(error);
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

// Configuración del middleware para que se ejecute en las rutas especificadas
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|admin|helper|employee|unauthorized).*)',
  ],
};