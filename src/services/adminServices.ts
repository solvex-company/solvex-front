import axios from "axios";
import AxiosApi from "@/app/api/axiosInstance";

import { UserDto } from "@/dto/userDto";

const fetchUsers = async (): Promise<UserDto[]> => {
  try {
    const response = await AxiosApi.get("/users");

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

export default fetchUsers;
