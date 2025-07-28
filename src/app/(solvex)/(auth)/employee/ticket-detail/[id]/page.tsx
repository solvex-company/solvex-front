"use client";

import React, { useEffect, useState, use, useRef } from "react";
import TicketDetail from "../../../components/TicketDetail/TicketDetail";

import { getTicketById } from "@/services/tickets";
import { useAuthContext } from "@/context/AuthContext";
import { IDetailTicket } from "@/types/ITickets";
import ViewTicketResponse from "./components/ViewTicketResponse";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

function EmTicketDetail({ params }: Props) {
  const { token } = useAuthContext();
  const [ticket, setTicket] = useState<IDetailTicket | null>(null);

  const { id } = use(params);

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
      <h2 className="font-bold text-2xl pb-5">Detalle de MI ticket</h2>
      <TicketDetail ticket={ticket} />
      <button
        onClick={handleTicketClick}
        className="w-[967px] text-white text-center text-xl bg-accent rounded-md hover:opacity-70 p-2 mt-6"
      >
        Ver respuesta del ticket
      </button>

      {showTicketRespond && <ViewTicketResponse ticketRef={ticketRef} />}
    </div>
  );
}

export default EmTicketDetail;
