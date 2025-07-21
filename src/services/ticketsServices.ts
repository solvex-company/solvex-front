// vedors
import axios from "axios";
import AxiosApi from "@/app/api/axiosInstance";

// services
import { ITicketsDto } from "../dto/ticketsDto";

export const fetchAllTickets = async (): Promise<ITicketsDto[]> => {
  try {
    const response = await AxiosApi.get("/tickets/getAllTickets");

    if (!response.data) {
      console.log("No hay respuesta");
      return [];
    }

    return response.data;
  } catch (error: unknown) {
    console.log("hubo un error", error);

    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message;
      throw new Error("Error de axios", errorMessage);
    }

    throw new Error("Error desconocido");
  }
};
