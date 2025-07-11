import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavbarAuth = () => {
  return (
    <div className="h-[calc(100vh-206px)] w-[250px] bg-navAuthBg">
      <Image
        src={"https://ik.imagekit.io/SolvexCompany/solvex.png"}
        width={242}
        height={80}
        alt="Logo de Solvex azul"
        className="m-1 mt-3 mb-6"
      />
      <div className="flex flex-col">
        <span className="text-[24px] text-center">Nombre de Usuario</span>
        <span className="text-[24px] text-center font-bold">ADMIN</span>
        <span className="pl-3 text-[20px] font-medium">Información</span>
        <Link
          href={""}
          className="flex flex-col m-1 ml-3 mr-3 h-[40px] justify-center text-center text-[24px] text-secondText rounded-lg hover:text-mainBg hover:bg-accent"
        >
          Inicio
        </Link>
        <span className="pl-3 text-[20px] font-medium">Gestión de Soporte</span>
        <Link
          href={""}
          className="flex flex-col m-1 ml-3 mr-3 h-[40px] justify-center text-center text-[24px] text-secondText rounded-lg hover:text-mainBg hover:bg-accent"
        >
          Soportes
        </Link>
        <Link
          href={""}
          className="flex flex-col m-1 ml-3 mr-3 h-[40px] justify-center text-center text-[24px] text-secondText rounded-lg hover:text-mainBg hover:bg-accent"
        >
          Estadísticas
        </Link>
      </div>
    </div>
  );
};

export default NavbarAuth;
