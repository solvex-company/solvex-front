import AxiosApi from "@/app/api/axiosInstance";
import axios from "axios";

export const passwordNullService = async (): Promise<boolean> => {
  try {
    const response = await AxiosApi.get("/users/is-password-null");
    console.log(response);

    if (!response.data) {
      console.log("Error, no llego la data");
      throw new Error("Error al fetchear la data");
    }

    return response.data;
  } catch (error: unknown) {
    console.log("error de tipo: ", error);

    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message;

      throw new Error("Error de axios ", errorMessage);
    }

    throw new Error("Error desconocido");
  }
};
