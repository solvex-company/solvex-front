// vedors
import { useQuery } from "@tanstack/react-query";

// services
import { fetchAllTickets } from "../services/ticketsServices";

// dto
import { ITicketsDto } from "../dto/ticketsDto";

export const useTickets = () => {
  return useQuery<ITicketsDto[]>({
    queryKey: ["tickets"],
    queryFn: fetchAllTickets,
  });
};

export default useTickets;
