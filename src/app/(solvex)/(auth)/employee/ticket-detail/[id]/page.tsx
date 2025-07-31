
"use client";

import React, { useEffect, useState, use, useRef } from "react";
import TicketDetail from "../../../components/TicketDetail/TicketDetail";

import { getTicketById, getTicketResponseByTicketId } from "@/services/tickets";
import { useAuthContext } from "@/context/AuthContext";
import { IDetailTicket, IGetTicketResponse } from "@/types/ITickets";
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
  const [ticketResponses, setTicketResponses] = useState<IGetTicketResponse[]>([]);

  const fetchTicket = async () => {
    if (!token) return;

    const data = await getTicketById(id, token);
    setTicket(data);
  };

  const fetchTicketResponses = async () => {
    if (!token || !id) return;

    const data = await getTicketResponseByTicketId(id, token);

    // Verificar si hay error en la respuesta
    if (data.message && data.errors) {
      setTicketResponses([]);
    } else {
      setTicketResponses(Array.isArray(data) ? data : []);
    }
  };

  useEffect(() => {
    fetchTicket();
    fetchTicketResponses();
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
    <div className="flex justify-center w-full">
      <div className=" flex flex-col justify-center py-5 w-[967px]">
        <h2 className="font-bold text-2xl pb-5">Detalle de mi ticket</h2>
        <TicketDetail ticket={ticket} />

        {ticketResponses.length > 0 ? (
          <>
            <button
              onClick={handleTicketClick}
              className="w-[967px] text-white text-center text-xl bg-accent rounded-md hover:opacity-70 p-2 mt-6"
            >
              Ver respuesta del ticket
            </button>

            {showTicketRespond && (
              <div ref={ticketRef}>
                {ticketResponses.map((response, index) => (
                  <ViewTicketResponse key={response.id_resolution_ticket} response={response} index={index} />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="text-center mt-10">
            <h2 className="text-accent italic text-2xl mb-2">No hay ninguna respuesta a este ticket de momento</h2>
            <p className="text-secondText text-xl">Espera a que algun soporte revise tu caso</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default EmTicketDetail;
