import Link from "next/link";
import React from "react";

function PasarelaPagos() {
  return (
    <section className="m-auto w-[850px] pt-14 flex flex-col items-center justify-center">
      <h1 className="text-4xl text-center text-mainText font-bold pb-3">
        Plan
      </h1>
      <p className="text-xl pt-3">
        Al adquirir el plan premium, desbloquearás acceso exclusivo a un panel
        de notificaciones integrado en la barra de navegación, diseñado para
        mantenerte del desempeño de tus colaboradores. Todo organizado de manera
        intuitiva para que estés siempre informado.
      </p>

      <Link href={"/helper/checkout"}>
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
