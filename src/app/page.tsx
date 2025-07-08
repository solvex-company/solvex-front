import Image from "next/image";
import React from "react";

function Home() {
  return (
    <>
      <div>
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
      </div>

      <div>
        <h2>Caracteristicas</h2>
        <div>
          <h3></h3>
          <p></p>
          <Image src={""} alt="imgHome" width={800} height={288} />
        </div>
        <div>
          <h3></h3>
          <p></p>
          <Image src={""} alt="imgHome" width={800} height={288} />
        </div>
        <div>
          <h3></h3>
          <p></p>
          <Image src={""} alt="imgHome" width={800} height={288} />
        </div>
      </div>
    </>
  );
}

export default Home;
