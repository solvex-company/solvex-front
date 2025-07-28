import { ResponseTicketData } from "@/helpers/ticketData";

import React from "react";

type Props = {
  ticketRef: React.RefObject<HTMLDivElement | null>;
};

function ViewTicketResponse({ ticketRef }: Props) {
  return (
    <div ref={ticketRef} className="mt-10 bg-mainBg border border-secondText rounded-xl">
      <h2 className="font-bold text-start text-3xl ml-4 my-6">Respuesta del Ticket</h2>
      <div className="flex flex-col  items-start ml-4 mb-6">
        <h3>Descripcion de la respuesta</h3>
        <p className="border border-accent rounded-md p-2 bg-white w-[923px] h-[170px]">{ResponseTicketData.description}</p>
      </div>
      <section className="flex justify-center  gap-4 w-[920px] pb-6 ml-4">
        <div className="flex flex-col w-full ">
          <h3>Soporte que respondio el ticket</h3>
          <p className="border border-accent rounded-md p-2  h-[45px] w-max-[453px] text-black bg-white">
            {ResponseTicketData.helper}
          </p>
        </div>
        <div className="flex flex-col w-full">
          <h3>Fecha en la que se respondio al ticket</h3>
          <p className="border border-accent rounded-md p-2 bg-white h-[45px] w-max-[453px]">{ResponseTicketData.date}</p>
        </div>
      </section>
    </div>
  );
}

export default ViewTicketResponse;
