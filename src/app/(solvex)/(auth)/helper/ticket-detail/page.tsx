import React from "react";
import TicketDetail from "../../components/TicketDetail/TicketDetail";
import { otherTicketData } from "@/helpers/ticketData";

function HelTicketDetail() {
  return (
    <div className="py-5 w-[967px]">
      <h2 className="font-bold text-2xl pb-5">Detalle del Ticket del Empleado</h2>
      <TicketDetail />

      <div className="flex justify-between gap-4 pt-6">
        <div className="w-full">
          <h3>Empleado que genero el ticket</h3>
          <p className="border border-accent rounded-md  p-2 ">{otherTicketData.employee}</p>
        </div>
        <div className="w-full">
          <h3>Fecha</h3>
          <p className="border border-accent rounded-md  p-2">{otherTicketData.date}</p>
        </div>
      </div>

      <button className="w-[967px] text-white text-center text-xl bg-accent rounded-md hover:opacity-70 p-2 mt-6">
        Gestionar Ticket
      </button>
    </div>
  );
}

export default HelTicketDetail;
