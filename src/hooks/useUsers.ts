// vedors
import { useQuery } from "@tanstack/react-query";

// services
import { fetchAllUsers } from "../services/adminServices";

// dto
import { UserDto } from "@/dto/userDto";

export const useUsers = () => {
  return useQuery<UserDto[]>({
    queryKey: ["users"],
    queryFn: fetchAllUsers,
  });
};

export default useUsers;
