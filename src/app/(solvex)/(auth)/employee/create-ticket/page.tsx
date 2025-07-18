import React from "react";
import CreateTicketForm from "./components/CreateTicketForm";

function CreateTicket() {
  return (
    <div>
      <h2 className="font-bold text-start text-2xl ml-8">Generar Ticket</h2>
      <CreateTicketForm />
    </div>
  );
}

export default CreateTicket;
