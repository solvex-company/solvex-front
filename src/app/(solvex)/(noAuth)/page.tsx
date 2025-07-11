import Image from "next/image";
import React from "react";

function Home() {
  return (
    <>
      <section className="bg-banner bg-contain bg-no-repeat bg-center h-[640px] flex flex-col items-start justify-center text-white pl-40">
        <h1 className="text-5xl font-bold">Gestión Centralizada de Incidentes</h1>
        <p className="text-2xl pt-52">
          Bienvenido a la plataforma de gestión centralizada de incidentes de Solvex. <br /> Reporta problemas tecnicos o de
          seguridad de manera eficiente.
        </p>
      </section>

      <h2 className="text-center text-5xl text-mainText font-bold p-24">Caracteristicas</h2>
      <section className="flex justify-center items-center pb-32 gap-10 text-white">
        <div className="relative flex flex-col justify-start bg-secondBg h-[237px] w-[310px] rounded-lg p-4 z-0">
          <Image
            src={"https://ik.imagekit.io/SolvexCompany/anadir.png?updatedAt=1751901538346"}
            alt="imgCruz"
            width={120}
            height={120}
            className="absolute bottom-0 right-0 mb-1 mr-1 z-[-10]"
          />
          <h3 className="text-3xl font-bold pb-8">Reporta un nuevo incidente</h3>
          <p className="text-xl w-[268px] ">Inicia el proceso de resolución registrando los detalles del problema.</p>
        </div>
        <div className="relative flex flex-col justify-start bg-secondBg h-[237px] w-[310px] rounded-lg p-4 z-0">
          <Image
            src={"https://ik.imagekit.io/SolvexCompany/gestionar.png?updatedAt=1751901538624"}
            alt="imgRueda"
            width={120}
            height={120}
            className="absolute bottom-0 right-0 mb-1 mr-1 z-[-10]"
          />
          <h3 className="text-3xl font-bold pb-8">Gestiona incidentes activos</h3>
          <p className="text-xl w-[268px]">Revisa, prioriza o reasigna casos en progreso. Con chat de ayuda integrado.</p>
        </div>
        <div className="relative flex flex-col justify-start bg-secondBg h-[237px] w-[310px] rounded-lg p-4 z-0">
          <Image
            src={"https://ik.imagekit.io/SolvexCompany/eliminar.png?updatedAt=1751901538530"}
            alt="imgTacho"
            width={120}
            height={120}
            className="absolute bottom-0 -right-3 z-[-10]"
          />
          <h3 className="text-3xl font-bold pb-8">Cierra o archiva casos resueltos</h3>
          <p className="text-xl w-[268px]">Marca incidentes como solucionados y libera recursos.</p>
        </div>
      </section>

      <section className="flex items-center bg-mainBg h-[527px] p-24 mb-16 gap-7">
        <Image
          src={"https://ik.imagekit.io/SolvexCompany/hero2.png?updatedAt=1751902001380"}
          alt="imgAbout"
          width={471.5}
          height={318}
          className="object-contain"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl text-mainText font-bold pb-3">Sobre la pagina</h2>
          <p className=" text-lg text-mainText w-[600px]">
            Este sistema centraliza la gestión de incidentes internos, permitiendo reportar fallas técnicas, operativas o de
            seguridad de manera estructurada. Está diseñado para equipos ágiles, facilitando la colaboración entre departamentos y
            el seguimiento en tiempo real. Los usuarios autorizados pueden escalar problemas, adjuntar evidencias (logs, imágenes)
            y recibir notificaciones automatizadas. Su uso optimiza tiempos de respuesta y reduce el impacto en operaciones
            críticas.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
