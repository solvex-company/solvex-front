"use server";

import axios from "axios";

const axiosApiBack = axios.create({
  baseURL: process.env.API_URL, //localhost:4000
});

export const getNotifications = async (token: string) => {
  try {
    const res = await axiosApiBack.get("/notifications", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message;

      return {
        message: "Error al obtener las notificaciones",
        errors: errorMessage,
      };
    }
    return {
      message: "Error desconocido",
      errors: "Ocurrió un error inesperado",
    };
  }
};
