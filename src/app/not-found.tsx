import Image from "next/image";
import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-col items-center p-6 w-1/3 border-2 rounded-md bg-gray-100">
        <Image src="https://ik.imagekit.io/SolvexCompany/error-404.png" width={256} height={256} alt="Error 404" />
        <h2 className="p-3 text-5xl text-blue-500">¡Ooops!</h2>
        <p className="text-2xl">¡Te hemos perdido! ¿Dónde estás?</p>
        <span className="text-xl">
          Rápido,{" "}
          <Link className="text-blue-500 underline underline-offset-1 hover:text-blue-800" href="/">
            vuelve
          </Link>{" "}
          con nosotros
        </span>
      </div>
    </div>
  );
};

export default notFound;
