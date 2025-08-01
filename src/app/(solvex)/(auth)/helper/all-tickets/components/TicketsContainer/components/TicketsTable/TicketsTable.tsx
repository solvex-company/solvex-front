"use client";

// Format-data
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";

// Dto
import { ITicketsDto } from "@/dto/ticketsDto";

import { useRouter } from "next/navigation";

const TicketsTable: React.FC<{ tickets: ITicketsDto[] }> = ({ tickets }) => {
  const router = useRouter();

  // Filtrar tickets que NO estén resueltos
  const filteredTickets = tickets.filter(
    (ticket) => ticket.id_status.name !== "Completed"
  );

  return (
    <div>
      <table className="flex w-full flex-col h-max gap-2 mt-5 table-fixed">
        <thead>
          <tr className="w-full flex justify-between px-5 py-2 font-semibold">
            <th className="w-1/6 text-left text-lg">Código</th>
            <th className="w-2/6 text-left text-lg">Titulo</th>
            <th className="w-2/6 text-left text-lg">Fecha</th>
            <th className="w-1/6 text-left text-lg">Empleado</th>
          </tr>
        </thead>
        <tbody className="flex flex-col gap-3">
          {filteredTickets.map((ticket) => {
            // Transformar el obj a un js nativo
            const dateObject = parseISO(ticket.creation_date);
            const formattedData = format(dateObject, "dd-MM-yyyy HH:mm", {
              locale: es,
            });

            const handleClick = () => {
              router.push(`/helper/ticket-detail/${ticket.id_ticket}`);
            };

            return (
              <tr
                key={ticket.id_ticket}
                className="w-full flex items-center justify-between px-5 py-2  border-2 border-accent rounded-lg cursor-pointer"
                onClick={handleClick}
              >
                <td className="w-1/6">COD-{ticket.id_ticket}</td>
                <td className="w-2/6 truncate">{ticket.title}</td>
                <td className="w-2/6">{formattedData}Hs</td>
                <td className="w-1/6">
                  {ticket.id_empleado.name} {ticket.id_empleado.lastname}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TicketsTable;
