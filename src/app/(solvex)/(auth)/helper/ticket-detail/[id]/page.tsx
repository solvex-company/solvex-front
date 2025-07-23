"use client";

//React
import React, { useEffect, useState, use, useRef } from "react";

//Types, Services y context
import { IDetailTicket } from "@/types/ITickets";
import { getTicketById } from "@/services/tickets";
import { useAuthContext } from "@/context/AuthContext";

//Components
import TicketDetail from "../../../components/TicketDetail/TicketDetail";
import TicketRespond from "./components/TicketRespond";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

function HelTicketDetail({ params }: Props) {
  //Para el useEffect
  const { token } = useAuthContext();
  const [ticket, setTicket] = useState<IDetailTicket | null>(null);
  const { id } = use(params);

  //Para el handler (respuesta del ticket)
  const [showTicketRespond, setShowTicketRespond] = useState(false);
  const ticketRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchTicket = async () => {
      if (!token) return;

      const data = await getTicketById(id, token);
      setTicket(data);
    };
    fetchTicket();
  }, [token, id]);

  // Efecto para hacer scroll cuando el componente se muestra
  useEffect(() => {
    if (showTicketRespond && ticketRef.current) {
      setTimeout(() => {
        ticketRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [showTicketRespond]);

  if (!ticket) return <div>Cargando ticket...</div>;

  const handleTicketClick = () => {
    setShowTicketRespond(true);
  };

  return (
    <div className="py-5 w-[967px]">
      <h2 className="font-bold text-2xl pb-5">Detalle del Ticket del Empleado</h2>
      <TicketDetail ticket={ticket} />

      <div className="flex justify-between gap-4 pt-6">
        <div className="w-full">
          <h3>Empleado que genero el ticket</h3>
          <p className="border border-accent rounded-md  p-2 ">
            {ticket.id_empleado.name} {ticket.id_empleado.lastname}
          </p>
        </div>
      </div>

      <button
        onClick={handleTicketClick}
        className="w-[967px] text-white text-center text-xl bg-accent rounded-md hover:opacity-70 p-2 mt-6"
      >
        Gestionar Ticket
      </button>

      {showTicketRespond && <TicketRespond ticketRef={ticketRef} />}
    </div>
  );
}

export default HelTicketDetail;
