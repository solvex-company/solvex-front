import axios from "axios";

const axiosApiBack = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Debe ser NEXT_PUBLIC para client-side
});

export const postCreateTicket = async (formData: FormData, token: string) => {
  try {
    const res = await axiosApiBack.post("/tickets/createTicket", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message;
      const statusCode = error.response?.status;
      console.warn(`Error ${statusCode}:`, errorMessage);
      return {
        message: "Error al crear el ticket",
        errors: errorMessage,
        statusCode,
      };
    }
    return {
      message: "Error desconocido",
      errors: "Ocurrió un error inesperado",
    };
  }
};

export const getAreaTicket = async (token: string) => {
  try {
    const res = await axiosApiBack.get("/tickets/getAreas", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data; // Esto debería ser el array directamente
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message;
      console.warn("Error al obtener áreas:", errorMessage);
      return {
        message: "Error al obtener las áreas",
        errors: errorMessage,
      };
    }
    return {
      message: "Error desconocido",
      errors: "Ocurrió un error inesperado",
    };
  }
};

export const getTicketById = async (ticketId: string, token: string) => {
  try {
    const res = await axiosApiBack.get(`/tickets/${ticketId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data; // Esto debería ser el ticket directamente
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message;
      console.warn("Error al obtener el ticket:", errorMessage);
      return {
        message: "Error al obtener el ticket",
        errors: errorMessage,
      };
    }
    return {
      message: "Error desconocido",
      errors: "Ocurrió un error inesperado",
    };
  }
};
