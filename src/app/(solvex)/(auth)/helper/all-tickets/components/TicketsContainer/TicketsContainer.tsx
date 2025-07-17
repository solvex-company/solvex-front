import ticketsHelper from "./components/TicketsTable/ticketsHelper";
import TicketsTable from "./components/TicketsTable/TicketsTable";

const TicketsContainer: React.FC = () => {
  return (
    <>
      <h1 className="font-bold text-xl">TODOS LOS TICKETS</h1>
      <TicketsTable tickets={ticketsHelper} />
    </>
  );
};

export default TicketsContainer;
