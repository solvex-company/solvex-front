"use client";

// import ticketsHelper from "./components/TicketsTable/ticketsHelper";
import TicketsTable from "./components/TicketsTable/TicketsTable";
import useTickets from "@/hooks/useTickets";

// components
import Loader from "@/app/components/Loader/Loader";

const TicketsContainer: React.FC = () => {
  const { data: tickets, isLoading, error } = useTickets();

  if (isLoading) return <Loader />;

  if (error) return <div>¡Error al cargar tickets!</div>;

  if (!tickets || tickets?.length === 0) {
    return <div>¡No hay tickets para mostrar!</div>;
  }

  return (
    <>
      <h1 className="font-bold text-xl">TODOS LOS TICKETS</h1>
      <TicketsTable tickets={tickets} />
    </>
  );
};

export default TicketsContainer;
