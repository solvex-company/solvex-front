import Link from "next/link";
import React from "react";

function PasarelaPagos() {
  return (
    <section className="m-auto w-[850px] pt-14 flex flex-col items-center justify-center">
      <h1 className="text-4xl text-center text-mainText font-bold pb-3">
        Plan
      </h1>
      <p className="text-xl pt-3">
        Adquiriendo este plan, recibirás notificaciones instantáneas al correo
        electrónico cuando:
      </p>
      <ol className="list-disc pl-5 pt-3 text-lg flex flex-col gap-2 mt-2">
        <li>Cree un ticket nuevo, para estar al tanto de sus tickets.</li>
        <li>
          Cuando respondan un ticket, y puede dar seguimiento rápidamente.
        </li>
        <li>
          Tu rol de usuario ha sido cambiado, de empleado a soporte o viceversa.
        </li>
      </ol>

      <Link href={"/employee/checkout"}>
        <div className="flex justify-between items-center gap-10 p-10">
          <div className="flex flex-col justify-center items-center w-[300px] h-[200px] border border-accent border-t-[20px] rounded-xl ">
            <h3 className="text-4xl font-bold text-mainText pb-8">Premium</h3>
            <h2 className="text-4xl text-accent font-bold">$5</h2>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default PasarelaPagos;
