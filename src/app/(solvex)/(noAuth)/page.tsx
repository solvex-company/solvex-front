import Image from "next/image";
import Link from "next/link";
import React from "react";

function Home() {
  return (
    <>
      <section className=" relative bg-banner bg-contain bg-no-repeat bg-center h-[640px] flex flex-col items-start justify-center text-white pl-40">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="text-5xl font-bold z-10">Gestión Centralizada de Incidentes</h1>
        <p className="text-2xl pt-52 z-10">
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

      <section className="m-auto h-[600px] w-[850px]">
        <h2 className="text-3xl text-center text-mainText font-bold pb-3">Planes</h2>
        <p className="text-lg pt-3">
          Obtén un perfil de administrador y potencia la gestión de tu mesa de soporte. <br /> Con un perfil de administrador,
          tendrás acceso a herramientas exclusivas que te permitirán:
        </p>
        <ol className="list-disc pl-5 pt-3 text-lg">
          <li>Asignar usuarios al rol de soporte para que puedean atender tickets.</li>
          <li>Visualizar estadísticas clave como resolución de incidencias .</li>
        </ol>
        <p className="pt-4 text-lg">
          Simplifica la operación diaria, toma decisiones basadas en datos y mejora la eficiencia de tu servicio. <br />
          <strong>¡Actualiza ahora y lleva tu soporte al siguiente nivel! </strong>
        </p>

        <Link href={"/login"} className="">
          <div className="flex justify-between items-center gap-10 p-10">
            <div className="flex flex-col justify-center items-center w-[300px] h-[200px] border border-resolved border-t-[20px] rounded-xl ">
              <h3 className="text-4xl font-bold text-mainText pb-8">Basico</h3>
              <h2 className="text-4xl text-resolved font-bold">$100</h2>
              <p className="text-2xl text-resolved">1 año</p>
            </div>
            <div className="flex flex-col justify-center items-center w-[300px] h-[200px] border border-process border-t-[20px] rounded-xl ">
              <h3 className="text-4xl font-bold text-mainText pb-8">Plus</h3>
              <h2 className="text-4xl text-process font-bold">$255</h2>
              <p className="text-2xl text-process">3 año</p>
            </div>
            <div className="flex flex-col justify-center items-center w-[300px] h-[200px] border border-pending border-t-[20px] rounded-xl ">
              <h3 className="text-4xl font-bold text-mainText pb-8">Premium</h3>
              <h2 className="text-4xl text-pending font-bold">$375</h2>
              <p className="text-2xl text-pending">5 año</p>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}

export default Home;
