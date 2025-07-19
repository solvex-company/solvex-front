// vedors
import { useMutation } from "@tanstack/react-query";

// services
import { updateUserRole } from "../services/adminServices";

export const useUpdateUserRole = () => {
  return useMutation({
    mutationFn: updateUserRole,
  });
};

export default useUpdateUserRole;
