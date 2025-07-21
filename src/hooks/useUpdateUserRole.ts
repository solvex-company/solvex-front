// vedors
import { useMutation, QueryClient } from "@tanstack/react-query";

// services
import { updateUserRole } from "../services/adminServices";

export const useUpdateUserRole = () => {
  return useMutation({
    mutationFn: updateUserRole,
    // Invalidar la cache de usuarios después de actualizar el rol
    // Esto asegura que la lista de usuarios se actualice automáticamente
    onSuccess: () => {
      const queryClient = new QueryClient();
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

export default useUpdateUserRole;
