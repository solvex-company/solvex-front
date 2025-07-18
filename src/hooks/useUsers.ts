// vedors
import { useQuery } from "@tanstack/react-query";

// services
import fetchUsers from "../services/adminServices";

interface User {
  id: string;
  name: string;
  email: string;
  currentRole: "employee" | "support";
}

export const useUsers = () => {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
};

export default useUsers;
