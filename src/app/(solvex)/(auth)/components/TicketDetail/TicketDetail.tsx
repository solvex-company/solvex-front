import { IDetailTicket } from "@/types/ITickets";
import Image from "next/image";
import React from "react";

type Props = {
  ticket: IDetailTicket;
};

// Función para asignar color según estado
const getStatusColor = (estado: string) => {
  switch (estado) {
    case "pending":
      return "bg-pending";
    case "Completed":
      return "bg-resolved";
  }
};

const translateStatus = (statusName: string) => {
  switch (statusName) {
    case "pending":
      return "PENDIENTE";
    case "Completed":
      return "RESUELTO";
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  // Formatear fecha: DD/MM/YYYY HH:MM
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day}/${month}/${year} | ${hours}:${minutes} hs`;
};

function TicketDetail({ ticket }: Props) {
  return (
    <div className="w-[967px]">
      <section className="flex justify-between pb-5">
        <div className="flex justify-start gap-4">
          <div>
            <h3>Codigo</h3>
            <p className="text-center border border-accent rounded-md w-[99px] p-2 ">
              COD-{ticket.id_ticket}
            </p>
          </div>

          <div className="w-max">
            <h3>Fecha</h3>
            <p className="border border-accent rounded-md w-[223px] p-2">
              {formatDate(ticket.creation_date)}
            </p>
          </div>
        </div>
        <div>
          <h3>Estado</h3>
          <p
            className={`text-center text-white rounded-md w-[194px] p-2 ${getStatusColor(
              ticket.id_status.name
            )}`}
          >
            {translateStatus(ticket.id_status.name)}
          </p>
        </div>
      </section>

      <section className="flex gap-4 pb-5">
        <div>
          <h3>Titulo</h3>
          <p className="border border-accent rounded-md w-[494px] truncate p-2 ">
            {ticket.title}
          </p>
        </div>
        <div>
          <h3>Area del ticket</h3>
          <p className="border border-accent rounded-md w-[456px] p-2 ">
            {ticket.area.name}
          </p>
        </div>
      </section>

      <div className="pb-6">
        <h3>Descripción</h3>
        <p className="border border-accent rounded-md w-full p-2 whitespace-pre-wrap break-words">
          {ticket.description}
        </p>
      </div>

      <div>
        <h3>Imágenes adjuntas</h3>
        <div className="border border-accent rounded-md flex justify-center items-center gap-5 p-5">
          {(() => {
            const images = [ticket.img_1, ticket.img_2, ticket.img_3].filter(
              (img) => img && img !== "no image"
            );

            return images.length ? (
              images.map((url, index) => (
                <Image
                  key={index}
                  src={url!}
                  alt={`Imagen adjunta ${index + 1}`}
                  width={300}
                  height={300}
                />
              ))
            ) : (
              <p className="italic text-gray-500">
                No se adjunto ninguna imagen a este ticket.
              </p>
            );
          })()}
        </div>
      </div>
    </div>
  );
}

export default TicketDetail;
