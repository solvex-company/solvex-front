// import { useState } from "react";
import { ITickets } from "./types/ITickets";

const TicketsTable: React.FC<{ tickets: ITickets[] }> = ({ tickets }) => {
  return (
    <div>
      <table className="flex w-full flex-col h-max gap-2 mt-5">
        <thead>
          <tr className="w-full flex justify-between px-5 py-2 font-semibold">
            <th className="w-1/4 text-left text-lg">Código</th>
            <th className="w-1/4 text-left text-lg">Titulo</th>
            <th className="w-1/4 text-left text-lg">Fecha</th>
            <th className="w-1/4 text-left text-lg">Empleado</th>
          </tr>
        </thead>
        <tbody className="flex flex-col gap-3">
          {tickets.map((ticket) => {
            return (
              <tr
                key={ticket.id}
                className="w-full flex justify-between px-5 py-2  border-2 border-accent rounded-lg"
              >
                <td className="w-1/4">{ticket.id}</td>
                <td className="w-1/4">{ticket.title}</td>
                <td className="w-1/4">{ticket.date}</td>
                <td className="w-1/4">{ticket.employee}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TicketsTable;
