// vedors
import { useQuery } from "@tanstack/react-query";

// services
import { passwordNullService } from "../services/passwordNullService";

export const usePasswordNull = () => {
  return useQuery<boolean>({
    queryKey: ["passwordNull"],
    queryFn: passwordNullService,
  });
};

export default usePasswordNull;
