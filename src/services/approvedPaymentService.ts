import AxiosApi from "@/app/api/axiosInstance";
import axios from "axios";

export interface approvedPaymentPayload {
  paymentApproved: boolean;
  token: string;
}

export const approvedPaymentService =
  async (): Promise<approvedPaymentPayload> => {
    try {
      const response = await AxiosApi.get("/payments/is-approved");

      // if (response.data) {
      //   console.log("Error, no llego la data");
      //   throw new Error("Error al fetchear la data");
      // }

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
