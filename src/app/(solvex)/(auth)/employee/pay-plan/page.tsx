import Link from "next/link";
import React from "react";

function PasarelaPagos() {
  return (
    <section className="m-auto w-[850px] pt-14">
      <h2 className="text-3xl text-center text-mainText font-bold pb-3">
        Planes
      </h2>
      <p className="text-lg pt-3">
        Con un perfil de administrador, tendrás acceso a herramientas exclusivas
        que te permitirán:
      </p>
      <ol className="list-disc pl-5 pt-3 text-lg">
        <li>
          Asignar usuarios al rol de soporte para que puedean atender tickets.
        </li>
        <li>Visualizar estadísticas clave como resolución de incidencias .</li>
      </ol>

      <Link href={"/employee/pay-subscription"}>
        <div className="flex justify-between items-center gap-10 p-10">
          <div
            // onClick={() => console.log("Basico $100")}
            className="flex flex-col justify-center items-center w-[300px] h-[200px] border border-resolved border-t-[20px] rounded-xl "
          >
            <h3 className="text-4xl font-bold text-mainText pb-8">Basico</h3>
            <h2 className="text-4xl text-resolved font-bold">$100</h2>
            <p className="text-2xl text-resolved">1 año</p>
          </div>
          <div
            // onClick={() => console.log("Plus $255")}
            className="flex flex-col justify-center items-center w-[300px] h-[200px] border border-process border-t-[20px] rounded-xl "
          >
            <h3 className="text-4xl font-bold text-mainText pb-8">Plus</h3>
            <h2 className="text-4xl text-process font-bold">$255</h2>
            <p className="text-2xl text-process">3 año</p>
          </div>
          <div
            // onClick={() => console.log("Premium $375")}
            className="flex flex-col justify-center items-center w-[300px] h-[200px] border border-pending border-t-[20px] rounded-xl "
          >
            <h3 className="text-4xl font-bold text-mainText pb-8">Premium</h3>
            <h2 className="text-4xl text-pending font-bold">$375</h2>
            <p className="text-2xl text-pending">5 año</p>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default PasarelaPagos;
