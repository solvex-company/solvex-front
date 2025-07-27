"use server";

import axios from "axios";
import { FormikValues } from "formik";
import { cookies } from "next/headers"

const axiosApiBack = axios.create({
  baseURL: process.env.API_URL, //localhost:4000
});

export const postRegister = async (data: FormikValues) => {
  console.log(data);
  try {
    const res = await axiosApiBack.post("/auth/signup", data);

    if (!res.data) {
      console.log(1, res.data);
      return {
        message: "Error al registrar al usuario",
        errors: res.data,
      };
    }
    return {
      message: "Usuario registrado correctamente",
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.code === "ECONNABORTED") {
        return {
          message: "Error de conexion",
          errors: "El servidor no respondio",
          statusCode: 408,
        };
      } else if (error.code === "ECONNREFUSED" || !error.response) {
        return {
          message: "Error de conexion",
          errors: "No se pudo conectar con el servidor",
          statusCode: 503,
        };
      } else {
        // 👈 Verifica si es un error de Axios
        const errorMessage = error.response?.data?.message || error.message;
        const statusCode = error.response?.status; // 👈 Obtiene el código (ej: 409)
        console.warn(`Error ${statusCode}:`, errorMessage);

        return {
          message: "Error al registrar al usuario",
          errors: errorMessage,
          statusCode, // 👈 Incluye el código en la respuesta
        };
      }
    }
    return {
      message: "Error desconocido",
      errors: "Ocurrió un error inesperado",
    };
  }
};

export async function deleteTokenCookie() {
  (await cookies()).delete('token');
}

export async function createTokenCookie(cookie: string) {
  (await cookies()).set('token', cookie, {
      httpOnly: true,
      secure: ['development', 'production'].includes(process.env.NODE_ENV),
      maxAge: 60 * 60 * 24,
      path: '/',
    });
}

export const postLogin = async (data: FormikValues) => {
  try {
    const res = await axiosApiBack.post("/auth/signin", data);
    console.log("Respuesta del servidor:", res.data);

    if (!res.data) {
      console.warn("Formato de datos de inicio de sesion invalido", res.data);
      return {
        success: false,
        message: "Error al iniciar sesion",
        errors: res.data,
      };
    }
    console.log("Respuesta del servidor:", res);
    await createTokenCookie(res.data);
    return {
      success: true,
      message: "Usuario ha iniciado sesion correctamente",
      data: res.data,
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.code === "ECONNABORTED") {
        return {
          message: "Error de conexion",
          errors: "El servidor no respondio",
          statusCode: 408,
        };
      } else if (error.code === "ECONNREFUSED" || !error.response) {
        return {
          message: "Error de conexion",
          errors: "No se pudo conectar con el servidor",
          statusCode: 503,
        };
      } else {
        //Verifica si es un error de Axios
        const errorMessage = error.response?.data?.message || error.message;
        const statusCode = error.response?.status; //Obtiene el código (ej: 409)
        console.warn(`Error ${statusCode}:`, errorMessage);

        return {
          success: false,
          message: "Error al registrar al usuario",
          errors: errorMessage,
          statusCode, //Incluye el código en la respuesta
        };
      }
    }

    return {
      success: false,
      message: "Error desconocido",
      errors: "Ocurrió un error inesperado",
    };
  }
};

export const getUsersInfo = async (token: string) => {
  try {
    const res = await axiosApiBack.get("/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data; // Esto debería ser el array directamente
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message;
      console.warn("Error al obtener informacion del usuario", errorMessage);
      return {
        message: "Error al obtener la informacion del usuario",
        errors: errorMessage,
      };
    }
    return {
      message: "Error desconocido",
      errors: "Ocurrió un error inesperado",
    };
  }
};
