"use server";

import axios from "axios";
import { FormikValues } from "formik";

const axiosApiBack = axios.create({
  baseURL: process.env.API_URL, //localhost:4000
});

export const postRegister = async (data: FormikValues) => {
  console.log(data);
  try {
    const res = await axiosApiBack.post("/auth/signup", data);

    if (!res.data) {
      console.log(1, res.data)
      return {
        message: "Error al registrar al usuario",
        errors: res.data,
      };
    }
    return {
      message: "Usuario registrado correctamente",
    };
  } catch (error: unknown) {
      if (axios.isAxiosError(error)) {  // 👈 Verifica si es un error de Axios
        const errorMessage = error.response?.data?.message || error.message;
        const statusCode = error.response?.status; // 👈 Obtiene el código (ej: 409)
        console.warn(`Error ${statusCode}:`, errorMessage);

        return {
          message: "Error al registrar al usuario",
          errors: errorMessage,
          statusCode,  // 👈 Incluye el código en la respuesta
        };
      }

      return {
        message: "Error desconocido",
        errors: "Ocurrió un error inesperado",
      };
    }
};

export const postLogin = async (data: FormikValues) => {
  try {
    const res = await axiosApiBack.post("/auth/signin", data);

    if (!res.data) {
      console.warn("Formato de datos de inicio de sesion invalido", res.data);
      return {
        message: "Error al iniciar sesion",
        errors: res.data,
      };
    }
    return {
      message: "Usuario ha iniciado sesion correctamente",
      data: res.data,
    };
  } catch (error: unknown) {
      if (axios.isAxiosError(error)) {  //Verifica si es un error de Axios
        const errorMessage = error.response?.data?.message || error.message;
        const statusCode = error.response?.status; //Obtiene el código (ej: 409)
        console.warn(`Error ${statusCode}:`, errorMessage);

        return {
          message: "Error al registrar al usuario",
          errors: errorMessage,
          statusCode,  //Incluye el código en la respuesta
        };
      }

      return {
        message: "Error desconocido",
        errors: "Ocurrió un error inesperado",
      };
    }
};
