"use client";

import React, { useEffect, useState } from "react";
import TicketDetail from "../../../components/TicketDetail/TicketDetail";
import { useAuthContext } from "@/context/AuthContext";
import { IDetailTicket } from "@/types/ITickets";
import { getTicketById } from "@/services/tickets";
import TicketRespond from "./components/TicketRespond";

type Props = {
  params: {
    id: string;
  };
};

function HelTicketDetail({ params }: Props) {
  const { token } = useAuthContext();
  const [ticket, setTicket] = useState<IDetailTicket | null>(null);

  useEffect(() => {
    const fetchTicket = async () => {
      if (!token) return;

      const resolvedParams = await params;
      const data = await getTicketById(resolvedParams.id, token);
      setTicket(data);
    };
    fetchTicket();
  }, [token, params]);

  if (!ticket) return <div>Cargando ticket...</div>;

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

      <button className="w-[967px] text-white text-center text-xl bg-accent rounded-md hover:opacity-70 p-2 mt-6">
        Gestionar Ticket
      </button>

      <TicketRespond />
    </div>
  );
}

export default HelTicketDetail;
