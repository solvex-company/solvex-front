// vedors
import { useQuery } from "@tanstack/react-query";

// services
import { fetchEmployees } from "../services/adminServices";

// dto
import { UserDto } from "@/dto/userDto";

export const useEmployees = () => {
  return useQuery<UserDto[]>({
    queryKey: ["employees"],
    queryFn: fetchEmployees,
  });
};

export default useEmployees;
