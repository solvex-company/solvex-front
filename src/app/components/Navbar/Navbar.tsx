import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between h-[80px]">
      <Image
        src="https://ik.imagekit.io/SolvexCompany/solvex.png?updatedAt=1751901538346"
        alt="Solvex Logo"
        height={80}
        width={276.92}
        className="ml-10"
      />
      <ul className="flex items-center text-secondText gap-4 mr-10">
        <li className="flex items-center justify-center h-[40px] w-[100px] bg-mainBg rounded-lg hover:bg-accent hover:text-white transition duration-300">
          <Link href={"/"} className="text-2xl font-bold">
            Inicio
          </Link>
        </li>
        <li className="flex items-center justify-center h-[40px] w-[150px] bg-mainBg rounded-lg hover:bg-accent hover:text-white transition duration-300">
          <Link href={"/about"} className="text-2xl font-bold">
            Acerca de
          </Link>
        </li>
        <li className="flex items-center justify-center h-[40px] w-[100px] bg-mainBg rounded-lg hover:bg-accent hover:text-white transition duration-300">
          <Link href={"/login"} className="text-2xl font-bold">
            Entrar
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
