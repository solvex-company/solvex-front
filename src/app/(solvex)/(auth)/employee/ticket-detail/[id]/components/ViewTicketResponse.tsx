import { useAuthContext } from "@/context/AuthContext";

import { getTicketResponseById } from "@/services/tickets";
import { TicketResolutionData } from "@/types/ITickets";

import React, { useEffect, useState } from "react";

type Props = {
  ticketRef: React.RefObject<HTMLDivElement | null>;
  resolutionTicketId: string;
};

function ViewTicketResponse({ ticketRef, resolutionTicketId }: Props) {
  const { token } = useAuthContext();
  const [resolutionData, setResolutionData] = useState<TicketResolutionData | null>(null);

  useEffect(() => {
    const fetchTicketResolution = async () => {
      if (!token || !resolutionTicketId) return;

      const data = await getTicketResponseById(resolutionTicketId, token);
      setResolutionData(data);
    };

    fetchTicketResolution();
  }, [token, resolutionTicketId]);

  if (!resolutionData) {
    return (
      <div ref={ticketRef} className="mt-10 bg-mainBg border border-secondText rounded-xl">
        <div className="flex justify-center items-center h-40">
          <p>Cargando respuesta...</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={ticketRef} className="mt-10 bg-mainBg border border-secondText rounded-xl">
      <h2 className="font-bold text-start text-3xl ml-4 my-6">Respuesta del Ticket</h2>
      <div className="flex flex-col  items-start ml-4 mb-6">
        <h3>Descripcion de la respuesta</h3>
        <p className="border border-accent rounded-md p-2 bg-white w-[923px] h-[170px]">{resolutionData.response}</p>
      </div>
      <section className="flex justify-center  gap-4 w-[920px] pb-6 ml-4">
        <div className="flex flex-col w-full ">
          <h3>Soporte que respondio el ticket</h3>
          <p className="border border-accent rounded-md p-2  h-[45px] w-max-[453px] text-black bg-white">
            {`${resolutionData.id_helper.name} ${resolutionData.id_helper.lastname}`}
          </p>
        </div>
        <div className="flex flex-col w-full">
          <h3>Fecha en la que se respondio al ticket</h3>
          <p className="border border-accent rounded-md p-2 bg-white h-[45px] w-max-[453px]">
            {" "}
            {new Date(resolutionData.date).toLocaleString("es-ES", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </section>
    </div>
  );
}

export default ViewTicketResponse;
