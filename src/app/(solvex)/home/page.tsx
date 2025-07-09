import Image from "next/image";
import React from "react";

function Home() {
  return (
    <>
      <section className="bg-banner bg-contain bg-center h-[600px] text-white p-8">
        <h1>Gestión Centralizada de Incidentes</h1>
        <p>
          Bienvenido a la plataforma de gestión centralizada de incidentes de Solvex. Aquí podrás registrar, gestionar y resolver
          incidentes de manera eficiente.
        </p>
      </section>

      <h2>Caracteristicas</h2>
      <section className="flex gap-2">
        <div className="bg-secondBg bg-cruz">
          <h3>Reporta un nuevo incidente</h3>
          <p>Inicia el proceso de resolución registrando los detalles del problema.</p>
        </div>
        <div className="bg-secondBg bg-rueda">
          <h3>Gestiona incidentes activos</h3>
          <p>Revisa, prioriza o reasigna casos en progreso.</p>
        </div>
        <div className="bg-secondBg bg-tacho">
          <h3>Cierra o archiva casos resueltos</h3>
          <p>Marca incidentes como solucionados y libera recursos.</p>
        </div>
      </section>

      <section>
        <div>
          <Image
            src={"https://ik.imagekit.io/SolvexCompany/hero2.png?updatedAt=1751902001380"}
            alt="imgAbout"
            width={800}
            height={288}
          />
          <h2>Sobre la pagina</h2>
          <p>
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
