import axios from "axios";
import AxiosApi from "@/app/api/axiosInstance";

import { UserDto, UpdateUserDto } from "@/dto/userDto";

export const fetchEmployees = async (): Promise<UserDto[]> => {
  try {
    const response = await AxiosApi.get("/users/employees");

    if (!response.data) {
      console.error("No data found");
      return [];
    }

    return response.data;
  } catch (error: unknown) {
    console.log("Hubo un error al obtener los usuarios", error);

    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message;

      throw new Error(`Error al obtener los usuarios: ${errorMessage}`);
    }
  }

  throw new Error("Error desconocido al obtener los usuarios");
};

export const fetchHelpers = async (): Promise<UserDto[]> => {
  try {
    const response = await AxiosApi.get("/users/helpers");

    if (!response.data) {
      console.log("Data not found");

      throw new Error("No hay data retornada");
    }

    return response.data;
  } catch (error: unknown) {
    console.log("error al fetchear usuarios", error);

    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message;

      throw new Error(`Error al obtener los usuarios: ${errorMessage}`);
    }
  }

  throw new Error("Error desconocido");
};

export const updateUserRole = async (id: string): Promise<UpdateUserDto> => {
  try {
    const response = await AxiosApi.put(`/users/changeRol/${id}`);

    if (!response.data) {
      console.log("Data not found");

      throw new Error("No hay data retornada");
    }

    return response.data;
  } catch (error: unknown) {
    console.log("error al modificar usuarios", error);

    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message;

      throw new Error(`Error al modificar los usuarios: ${errorMessage}`);
    }
  }

  throw new Error("Error desconocido");
};
