import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavbarAuth = () => {
  const isAdmin = false;
  const isHelper = true;
  const isEmployee = false;
  const license = true;

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

        { isAdmin && //Es un usuario ADMIN
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
        }

        { isHelper && //Es un usuario HELPER
          <div className="flex flex-col">
            <span className="text-[24px] text-center">Nombre de Usuario</span>
            <span className="text-[24px] text-center font-bold">SOPORTE</span>
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
              Tickets
            </Link>
            <Link
              href={""}
              className="flex flex-col m-1 ml-3 mr-3 h-[40px] justify-center text-center text-[24px] text-secondText rounded-lg hover:text-mainBg hover:bg-accent"
            >
              Chat
            </Link>
          </div> 
        }

        { isEmployee && //Es un usuario EMPLOYEE
          <div className="flex flex-col">
            <span className="text-[24px] text-center">Nombre de Usuario</span>
            <span className="text-[24px] text-center font-bold">EMPLEADO</span>
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
              Crear Ticket
            </Link>
            <Link
              href={""}
              className="flex flex-col m-1 ml-3 mr-3 h-[40px] justify-center text-center text-[24px] text-secondText rounded-lg hover:text-mainBg hover:bg-accent"
            >
              Mis Tickets
            </Link>
            <Link
              href={""}
              className="flex flex-col m-1 ml-3 mr-3 h-[40px] justify-center text-center text-[24px] text-secondText rounded-lg hover:text-mainBg hover:bg-accent"
            >
              Chat
            </Link>
          </div> 
        }


      </div>

      <div className="flex flex-col mb-6">
        {(isEmployee && license) &&
          <Link
            href=''
            className="flex flex-col m-1 ml-3 mr-3 h-[80px] justify-center text-center text-[24px] rounded-lg bg-secondText text-mainBg hover:text-mainBg hover:bg-accent"
          >
            Obtén derechos de administrador
          </Link>
        }
        <Link
          href={'/'}
          className="flex flex-col m-1 ml-3 mr-3 h-[40px] justify-center text-center text-[24px] text-secondText rounded-lg bg-mainText hover:text-mainBg hover:bg-accent"
        >Cerrar Sesión</Link>
      </div>
    </div>
  );
};

export default NavbarAuth;
