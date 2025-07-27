"use client";
import { useAuthContext } from "@/context/AuthContext";
import { deleteTokenCookie } from "@/services/auth";
// import usePrivate from "@/hooks/usePrivate";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const NavbarAuth = () => {
  // usePrivate();
  const router = useRouter();
  const { user, isAuth, resetUserData } = useAuthContext();

  let isAdmin = false;
  let isHelper = false;
  let isEmployee = false;
  const license = true;

  const logout = async () => {
    resetUserData();
    await deleteTokenCookie();
    location.href = "/";
  };

  if (user?.id_role === 1) {
    isAdmin = true;
  }
  if (user?.id_role === 2) {
    isHelper = true;
  }
  if (user?.id_role === 3) {
    isEmployee = true;
  }

  useEffect(() => {
    if (!user) return;

    if (user.id_role === 1) {
      router.push("/admin/dashboard");
    } else if (user.id_role === 2) {
      router.push("/helper/dashboard");
    } else if (user.id_role === 3) {
      router.push("/employee/dashboard");
    }
  }, [user, router]);

  if (isAuth) {
    return (
      <div className="flex flex-col h-full w-[250px] bg-navAuthBg place-content-between">
        {/* [calc(100vh-206px)] */}
        <div>
          <Image
            src={"https://ik.imagekit.io/SolvexCompany/solvex.png"}
            width={242}
            height={80}
            alt="Logo de Solvex azul"
            className="mb-6"
          />

          {isAdmin && ( //Es un usuario ADMIN
            <div className="flex flex-col">
              <span className="text-[24px] text-center">
                {user?.name || "Nombre de Usuario"}
              </span>
              <span className="text-[24px] text-center font-bold">ADMIN</span>
              <span className="pl-3 text-[20px] font-medium">Información</span>
              <Link
                href={"/admin/dashboard"}
                className="flex flex-col m-1 ml-3 mr-3 h-[40px] justify-center text-center text-[24px] text-secondText rounded-lg hover:text-mainBg hover:bg-accent"
              >
                Inicio
              </Link>
              <span className="pl-3 text-[20px] font-medium">
                Gestión de Soporte
              </span>
              <Link
                href={"/admin/view-profiles"}
                className="flex flex-col m-1 ml-3 mr-3 h-[40px] justify-center text-center text-[24px] text-secondText rounded-lg hover:text-mainBg hover:bg-accent"
              >
                Soportes
              </Link>
              <Link
                href={"/admin/estadisticas"}
                className="flex flex-col m-1 ml-3 mr-3 h-[40px] justify-center text-center text-[24px] text-secondText rounded-lg hover:text-mainBg hover:bg-accent"
              >
                Estadísticas
              </Link>
            </div>
          )}

          {isHelper && ( //Es un usuario HELPER
            <div className="flex flex-col">
              <span className="text-[24px] text-center">
                {user?.name || "Nombre de Usuario"}
              </span>
              <span className="text-[24px] text-center font-bold">SOPORTE</span>
              <span className="pl-3 text-[20px] font-medium">Información</span>
              <Link
                href={"/helper/dashboard"}
                className="flex flex-col m-1 ml-3 mr-3 h-[40px] justify-center text-center text-[24px] text-secondText rounded-lg hover:text-mainBg hover:bg-accent"
              >
                Inicio
              </Link>
              <span className="pl-3 text-[20px] font-medium">
                Gestión de Soporte
              </span>
              <Link
                href={"/helper/all-tickets"}
                className="flex flex-col m-1 ml-3 mr-3 h-[40px] justify-center text-center text-[24px] text-secondText rounded-lg hover:text-mainBg hover:bg-accent"
              >
                Tickets
              </Link>
              <Link
                href={"/helper/chat"}
                className="flex flex-col m-1 ml-3 mr-3 h-[40px] justify-center text-center text-[24px] text-secondText rounded-lg hover:text-mainBg hover:bg-accent"
              >
                Chat
              </Link>
            </div>
          )}

          {isEmployee && ( //Es un usuario EMPLOYEE
            <div className="flex flex-col">
              <span className="text-[24px] text-center">
                {user?.name || "Nombre de Usuario"}
              </span>
              <span className="text-[24px] text-center font-bold">
                EMPLEADO
              </span>
              <span className="pl-3 text-[20px] font-medium">Información</span>
              <Link
                href={"/employee/dashboard"}
                className="flex flex-col m-1 ml-3 mr-3 h-[40px] justify-center text-center text-[24px] text-secondText rounded-lg hover:text-mainBg hover:bg-accent"
              >
                Inicio
              </Link>
              <span className="pl-3 text-[20px] font-medium">
                Gestión de Soporte
              </span>
              <Link
                href={"/employee/create-ticket"}
                className="flex flex-col m-1 ml-3 mr-3 h-[40px] justify-center text-center text-[24px] text-secondText rounded-lg hover:text-mainBg hover:bg-accent"
              >
                Crear Ticket
              </Link>
              <Link
                href={"/employee/my-tickets"}
                className="flex flex-col m-1 ml-3 mr-3 h-[40px] justify-center text-center text-[24px] text-secondText rounded-lg hover:text-mainBg hover:bg-accent"
              >
                Mis Tickets
              </Link>
              <Link
                href={"/employee/chat"}
                className="flex flex-col m-1 ml-3 mr-3 h-[40px] justify-center text-center text-[24px] text-secondText rounded-lg hover:text-mainBg hover:bg-accent"
              >
                Chat
              </Link>
            </div>
          )}
        </div>

        <div className="flex flex-col mb-6">
          {(isEmployee || isHelper) && license && (
            <Link
              href="/employee/pay-plan"
              className="flex flex-col m-1 ml-3 mr-3 h-[80px] justify-center text-center text-[24px] rounded-lg bg-secondText text-mainBg hover:text-mainBg hover:bg-accent"
            >
              Adquiere más beneficios
            </Link>
          )}
          <button
            onClick={logout}
            className="flex flex-col m-1 ml-3 mr-3 h-[40px] justify-center text-center text-[24px] text-secondText rounded-lg bg-mainText hover:text-mainBg hover:bg-accent"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    );
  }
};

export default NavbarAuth;
