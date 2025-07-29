"use client";

// components
import Loader from "@/app/components/Loader/Loader";

// hook
import useTickets from "@/hooks/useTickets";
import { useAuthContext } from "@/context/AuthContext";

// services
import React from "react";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";
import { useRouter } from "next/navigation";

function TicketCards() {
  const { user } = useAuthContext();
  const { data: tickets, isLoading, error } = useTickets();
  const router = useRouter();

  console.log("Tickets:", tickets);

  const filteredTickets = tickets?.filter((ticket) => ticket.id_empleado.identification_number === user?.identification_number);

  if (isLoading) return <Loader />;

  if (error) return <div>¡Hubo un error al cargar los tickets!</div>;

  if (!filteredTickets || filteredTickets.length === 0) {
    return <div>¡No hay tickets para mostrar!</div>;
  }

  // Función para asignar color según estado
  const getBorderColor = (estado: string) => {
    switch (estado) {
      case "pending":
        return "border-pending";
      case "Completed":
        return "border-resolved";
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

  return (
    <div className="grid grid-cols-3 gap-5 pt-5 cursor-pointer">
      {filteredTickets.map((ticket, index) => (
        <div
          key={index}
          onClick={() => router.push(`/employee/ticket-detail/${ticket.id_ticket}`)}
          className={`flex flex-col justify-between items-center w-[300px] h-[200px] border border-l-[20px] rounded-md p-5 gap-5 
            ${getBorderColor(ticket.id_status.name)}`}
        >
          <h2 className="text-xl text-center truncate font-bold underline w-full">{ticket.title}</h2>
          <p className="text-xl">
            <strong>Fecha:</strong>{" "}
            {format(parseISO(ticket.creation_date), "dd/MM/yyyy HH:ss", {
              locale: es,
            })}
          </p>
          <p className="text-xl">
            <strong>Estado: </strong>
            {translateStatus(ticket.id_status.name)}
          </p>
        </div>
      ))}
    </div>
  );
}

export default TicketCards;
