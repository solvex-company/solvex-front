import { mainDetailTicketData } from "@/helpers/ticketData";
import Image from "next/image";
import React from "react";

function TicketDetail() {
  return (
    <div className="w-[967px]">
      <section className="flex justify-between pb-5">
        <div>
          <h3>Codigo</h3>
          <p className="text-center border border-accent rounded-md w-[99px] p-2 ">{mainDetailTicketData.codigo}</p>
        </div>

        <div>
          <h3>Titulo</h3>
          <p className="border border-accent rounded-md w-[597px] p-2 ">{mainDetailTicketData.titulo}</p>
        </div>

        <div>
          <h3>Estado</h3>
          <p className="text-center text-white bg-pending rounded-md w-[194px] p-2 ">{mainDetailTicketData.estado}</p>
        </div>
      </section>
      <div className="pb-6">
        <h3>Descripción</h3>
        <p className="border border-accent rounded-md  h-[179px] p-2">{mainDetailTicketData.descripcion}</p>
      </div>

      <div>
        <h3>Imágenes adjuntas</h3>
        <div className="border border-accent rounded-md flex justify-center items-center gap-5 p-5">
          {mainDetailTicketData.imagenesAdjuntas.map((imagen, index) => (
            <Image key={index} src={imagen} alt={`Imagen adjunta ${index + 1}`} width={300} height={300} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TicketDetail;
