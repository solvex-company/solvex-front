// vedors
import axios from "axios";
import AxiosApi from "@/app/api/axiosInstance";

// services
import { ITicketsDto } from "../dto/ticketsDto";

export const fetchAllTickets = async (): Promise<ITicketsDto[]> => {
  try {
    const response = await AxiosApi.get("/tickets/getAllTickets");

    if (!response.data) {
      return [];
    }

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message;
      throw new Error("Error de axios", errorMessage);
    }

    throw new Error("Error desconocido");
  }
};
