import { IDetailTicket } from "@/types/ITickets";
import Image from "next/image";
import React from "react";

type Props = {
  ticket: IDetailTicket;
};

function TicketDetail({ ticket }: Props) {
  return (
    <div className="w-[967px]">
      <section className="flex justify-between pb-5">
        <div>
          <h3>Codigo</h3>
          <p className="text-center border border-accent rounded-md w-[99px] p-2 ">{ticket.codigo}</p>
        </div>

        <div>
          <h3>Titulo</h3>
          <p className="border border-accent rounded-md w-[597px] p-2 ">{ticket.titulo}</p>
        </div>

        <div>
          <h3>Estado</h3>
          <p className="text-center text-white bg-pending rounded-md w-[194px] p-2 ">{ticket.estado}</p>
        </div>
      </section>
      <div className="pb-6">
        <h3>Descripción</h3>
        <p className="border border-accent rounded-md  h-[179px] p-2">{ticket.descripcion}</p>
      </div>

      <div>
        <h3>Imágenes adjuntas</h3>
        <div className="border border-accent rounded-md flex justify-center items-center gap-5 p-5">
          {ticket.imagenesAdjuntas?.length ? (
            ticket.imagenesAdjuntas.map((url, index) => (
              <Image key={index} src={url} alt={`Imagen adjunta ${index + 1}`} width={300} height={300} />
            ))
          ) : (
            <p className="italic text-gray-500">No hay imágenes adjuntas.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TicketDetail;
