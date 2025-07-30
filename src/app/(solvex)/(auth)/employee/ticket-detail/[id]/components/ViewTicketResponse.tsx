import { IGetTicketResponse } from "@/types/ITickets";

import React from "react";

type Props = {
  response: IGetTicketResponse;
  index: number;
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  // Formatear fecha: DD/MM/YYYY HH:MM
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day}/${month}/${year} | ${hours}:${minutes} hs`;
};

function ViewTicketResponse({ response, index }: Props) {
  return (
    <div className="mt-10 bg-mainBg border border-secondText rounded-xl">
      <h2 className="font-bold text-start text-3xl ml-4 my-6">Respuesta del Ticket #{index + 1}</h2>
      <div className="flex flex-col  items-start ml-4 mb-6">
        <h3>Descripcion de la respuesta</h3>

        <p className="border border-accent rounded-md p-2 bg-white w-[923px] whitespace-pre-wrap break-words">
          {response.response}
        </p>

      </div>
      <section className="flex justify-center  gap-4 w-[920px] pb-6 ml-4">
        <div className="flex flex-col w-full ">
          <h3>Soporte que respondio el ticket</h3>
          <p className="border border-accent rounded-md p-2  h-[45px] w-max-[453px] text-black bg-white">
            {response.id_helper.name} {response.id_helper.lastname}
          </p>
        </div>
        <div className="flex flex-col w-full">
          <h3>Fecha en la que se respondio al ticket</h3>
          <p className="border border-accent rounded-md p-2 bg-white h-[45px] w-max-[453px]">{formatDate(response.date)}</p>
        </div>
      </section>
    </div>
  );
}

export default ViewTicketResponse;
