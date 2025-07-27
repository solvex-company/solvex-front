import { payloadCheckout } from "@/dto/checkoutDto";
import AxiosApi from "@/app/api/axiosInstance";
import axios from "axios";

const checkoutService = async (): Promise<payloadCheckout> => {
  try {
    const response = await AxiosApi.get("/payments/checkout");

    if (!response.data) {
      console.error("No se retorno la data");
      throw new Error("El servicio de checkout no retorno data");
    }

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message;
      throw new Error(`Error en el servicio checkout: ${errorMessage}`);
    }

    throw new Error("Error desconocido en el servicio de checkout");
  }
};

export default checkoutService;
