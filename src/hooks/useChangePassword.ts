// vedors
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

// services
import {
  changePasswordServices,
  ChangePasswordPayload,
  ChangePasswordResponse,
} from "../services/changePasswordServices";

export const useChangePassword = () => {
  const queryClient = useQueryClient();

  return useMutation<
    ChangePasswordResponse,
    Error,
    { userId: string; data: ChangePasswordPayload }
  >({
    mutationFn: async ({ userId, data }) =>
      changePasswordServices(userId, data),
    onSuccess: () => {
      Swal.fire({
        title: "Contraseña cambiada ",
        text: "Tu contraseña ha sido actualizada exitosamente.",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },

    onError: (error) => {
      Swal.fire({
        title: "Error al cambiar la contraseña",
        text: error.message || "Ocurrió un error al cambiar la contraseña.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    },
  });
};

export default useChangePassword;
