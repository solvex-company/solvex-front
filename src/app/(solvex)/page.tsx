import Image from "next/image";
import React from "react";

function Home() {
  return (
    <>
      <section>
        <h1>Gestión Centralizada de Incidentes</h1>
        <p>
          Bienvenido a la plataforma de gestión centralizada de incidentes de Solvex. Aquí podrás registrar, gestionar y resolver
          incidentes de manera eficiente.
        </p>
        <Image
          src={"https://ik.imagekit.io/SolvexCompany/hero1-1.png?updatedAt=1752011567139"}
          alt="imgHome"
          width={800}
          height={288}
        />
      </section>

      <section>
        <h2>Caracteristicas</h2>
        <div>
          <h3>Reporta un nuevo incidente</h3>
          <p>Inicia el proceso de resolución registrando los detalles del problema.</p>
          <Image
            src={"https://ik.imagekit.io/SolvexCompany/anadir.png?updatedAt=1751901538346"}
            alt="imgCruz"
            width={800}
            height={288}
          />
        </div>
        <div>
          <h3>Gestiona incidentes activos</h3>
          <p>Revisa, prioriza o reasigna casos en progreso.</p>
          <Image
            src={"https://ik.imagekit.io/SolvexCompany/gestionar.png?updatedAt=1751901538624"}
            alt="imgRueda"
            width={800}
            height={288}
          />
        </div>
        <div>
          <h3>Cierra o archiva casos resueltos</h3>
          <p>Marca incidentes como solucionados y libera recursos.</p>
          <Image
            src={"https://ik.imagekit.io/SolvexCompany/eliminar.png?updatedAt=1751901538530"}
            alt="imgTacho"
            width={800}
            height={288}
          />
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
