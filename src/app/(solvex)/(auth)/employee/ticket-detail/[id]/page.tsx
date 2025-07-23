"use client";

import React, { useEffect, useState } from "react";
import TicketDetail from "../../../components/TicketDetail/TicketDetail";

import { getTicketById } from "@/services/tickets";
import { useAuthContext } from "@/context/AuthContext";
import { IDetailTicket } from "@/types/ITickets";

type Props = {
  params: {
    id: string;
  };
};

function EmTicketDetail({ params }: Props) {
  const { token } = useAuthContext();
  const [ticket, setTicket] = useState<IDetailTicket | null>(null);

  useEffect(() => {
    const fetchTicket = async () => {
      if (!token) return;
      const data = await getTicketById(params.id, token);
      setTicket(data);
    };
    fetchTicket();
  }, [token, params.id]);

  if (!ticket) return <div>Cargando ticket...</div>;

  return (
    <div className="py-5 w-[967px]">
      <h2 className="font-bold text-2xl pb-5">Detalle de MI ticket</h2>
      <TicketDetail ticket={ticket} />
    </div>
  );
}

export default EmTicketDetail;
