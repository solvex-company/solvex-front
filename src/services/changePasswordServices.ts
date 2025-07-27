import axios from "axios";
import AxiosApi from "@/app/api/axiosInstance";

export type ChangePasswordResponse = string;

export interface ChangePasswordPayload {
  oldPassword: string;
  newPassword: string;
  newPassword2: string;
}

interface BackendErrorResponse {
  message: string[]; // Es un array de strings
  error: string;
  statusCode: number;
}

export const changePasswordServices = async (
  id_user: string,
  data: ChangePasswordPayload
): Promise<ChangePasswordResponse> => {
  try {
    const response = await AxiosApi.put<string>(
      `/auth/changePassword/${id_user}`,
      data
    );

    if (!response.data) {
      throw new Error("No se pudo cambiar la contraseña");
    }

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      let errorMessage = "Error desconocido al cambiar la contraseña.";

      if (error.response && error.response.data) {
        const errorData = error.response.data as BackendErrorResponse;

        if (
          Array.isArray(errorData.message) &&
          errorData.message.every((item) => typeof item === "string")
        ) {
          errorMessage = errorData.message.join(", ");
        } else if (typeof errorData.message === "string") {
          errorMessage = errorData.message;
        } else {
          errorMessage = error.response.statusText || error.message;
        }
      } else {
        errorMessage =
          error.message || "Error de red o el servidor no respondió.";
      }

      throw new Error(errorMessage);
    }

    throw new Error("Error desconocido al cambiar la contraseña");
  }
};
