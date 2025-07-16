import { EmployeeTicketsData } from "@/helpers/ticketData";
// import Link from "next/link";
import React from "react";

function TicketCards() {
  // Función para asignar color según estado
  const getBorderColor = (estado: string) => {
    switch (estado) {
      case "Pendiente":
        return "border-pending";
      case "En proceso":
        return "border-process";
      case "Resuelto":
        return "border-resolved";
    }
  };

  return (
    <div className="grid grid-cols-3 gap-5 pt-5">
      {EmployeeTicketsData.map((ticket, index) => (
        // <Link href={""}>
        <div
          key={index}
          className={`flex flex-col justify-between items-center w-[300px] h-[200px] border border-l-[20px] rounded-md p-5 gap-5 
            ${getBorderColor(ticket.estado)}`}
        >
          <h2 className="text-xl text-center font-bold underline">{ticket.titulo}</h2>
          <p className="text-xl">
            <strong>Fecha:</strong> {ticket.fecha}
          </p>
          <p className="text-xl">
            <strong>Estado: </strong>
            {ticket.estado}
          </p>
        </div>
        // </Link>
      ))}
    </div>
  );
}

export default TicketCards;
