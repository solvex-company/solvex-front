import axios from "axios";
import AxiosApi from "@/app/api/axiosInstance";

import { UserDto, UpdateUserDto } from "@/dto/userDto";
import { IStatisticsDto } from "@/dto/statisticsDto";

export const fetchEmployees = async (): Promise<UserDto[]> => {
  try {
    const response = await AxiosApi.get("/users/employees");

    if (!response.data) {
      return [];
    }

    return response.data;
  } catch (error: unknown) {
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
      throw new Error("No hay data retornada");
    }

    return response.data;
  } catch (error: unknown) {
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
      throw new Error("No hay data retornada");
    }

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message;

      throw new Error(`Error al modificar los usuarios: ${errorMessage}`);
    }
  }

  throw new Error("Error desconocido");
};

export const fetchAllUsers = async (): Promise<UserDto[]> => {
  try {
    const response = await AxiosApi.get("/users");

    if (!response.data) {
      throw new Error("No hay data retornada");
    }

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message;

      throw new Error(`Error al obtener los usuarios: ${errorMessage}`);
    }

    throw new Error("Error desconocido");
  }
};

export const fetchStatistics = async (): Promise<IStatisticsDto> => {
  try {
    const response = await AxiosApi.get("/tickets/report/summary");

    if (!response.data) {
      throw new Error("No hay data retornada");
    }

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message;

      throw new Error(`Error al obtener las estadisticas: ${errorMessage}`);
    }

    throw new Error("Error desconocido");
  }
};
