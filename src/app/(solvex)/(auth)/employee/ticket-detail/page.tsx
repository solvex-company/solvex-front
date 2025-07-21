import React from "react";
import TicketDetail from "../../components/TicketDetail/TicketDetail";
import { otherDetailTicketData } from "@/helpers/ticketData";

function EmTicketDetail() {
  return (
    <div className="py-5 w-[967px]">
      <h2 className="font-bold text-2xl pb-5">Detalle de MI ticket</h2>
      <TicketDetail />
      <div className="w-full pt-6">
        <h3>Fecha</h3>
        <p className="border border-accent rounded-md  p-2">{otherDetailTicketData.date}</p>
      </div>
    </div>
  );
}

export default EmTicketDetail;
