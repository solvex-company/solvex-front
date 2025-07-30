"use client";

//React
import React, { useEffect, useState, use, useRef } from "react";

//Types, Services y context
import { IDetailTicket } from "@/types/ITickets";
import { getTicketById } from "@/services/tickets";
import { useAuthContext } from "@/context/AuthContext";

//Components
import TicketDetail from "../../../components/TicketDetail/TicketDetail";
import TicketResponse from "./components/TicketResponse";

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

  const fetchTicket = async () => {
    if (!token) return;

    const data = await getTicketById(id, token);
    setTicket(data);
  };

  useEffect(() => {
    fetchTicket();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <div className="flex justify-center w-full">
      <div className="flex flex-col justify-center py-5 w-[967px]">
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

        {ticket.id_status.name === "pending" ? (
          <>
            <button
              onClick={handleTicketClick}
              className="w-[967px] text-white text-center text-xl bg-accent rounded-md hover:opacity-70 p-2 mt-6"
            >
              Gestionar Ticket
            </button>

            {showTicketRespond && <TicketResponse ticketId={ticket.id_ticket} ticketRef={ticketRef} />}
          </>
        ) : (
          <div className="text-center mt-10">
            <h2 className="text-accent italic text-2xl mb-2">
              Este ticket ya ha sido <span className="text-resolved font-bold">RESUELTO</span>
            </h2>
            <p className="text-secondText text-xl">No es posible realizar más acciones sobre este ticket</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HelTicketDetail;
