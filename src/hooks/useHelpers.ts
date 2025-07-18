// vedors
import { useQuery } from "@tanstack/react-query";

// services
import { fetchHelpers } from "../services/adminServices";

// dto
import { UserDto } from "@/dto/userDto";

export const useHelpers = () => {
  return useQuery<UserDto[]>({
    queryKey: ["helpers"],
    queryFn: fetchHelpers,
  });
};

export default useHelpers;
