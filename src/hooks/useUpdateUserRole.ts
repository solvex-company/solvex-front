// vedors
import { useMutation, useQueryClient } from "@tanstack/react-query";

// services
import { updateUserRole } from "../services/adminServices";

export const useUpdateUserRole = () => {
  // Obtiene la instancia del QueryClient que está siendo usada por QueryClientProvider
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUserRole,
    // Invalidar la cache de usuarios después de actualizar el rol
    // Esto asegura que la lista de usuarios se actualice automáticamente
    onSuccess: () => {
      console.log("Invalidando caché de usuarios...");
      // Invalida la consulta de usuarios para que se vuelva a obtener la lista actualizada
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

export default useUpdateUserRole;
