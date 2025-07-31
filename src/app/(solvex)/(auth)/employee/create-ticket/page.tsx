import React from "react";
import CreateTicketForm from "./components/CreateTicketForm";

function CreateTicket() {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col justify-center py-5 w-[967px]">
        <h2 className="font-bold text-start text-2xl">Generar Ticket</h2>
        <CreateTicketForm />
      </div>
    </div>
  );
}

export default CreateTicket;
