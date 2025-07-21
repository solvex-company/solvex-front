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

// "use server";

// import axios from "axios";

// const axiosApiBack = axios.create({
//   baseURL: process.env.API_URL, //localhost:4000
// });

// export const postCreateTicket = async (formData: FormData, token: string) => {
//   console.log(formData);

//   try {
//     const res = await axiosApiBack.post("/tickets/createTicket", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     if (!res.data) {
//       console.log(1, res.data);
//       return {
//         message: "Error al crear el ticket",
//         errors: res.data,
//       };
//     }
//     return res.data;
//   } catch (error: unknown) {
//     if (axios.isAxiosError(error)) {
//       //  Verifica si es un error de Axios
//       const errorMessage = error.response?.data?.message || error.message;
//       const statusCode = error.response?.status; //  Obtiene el código (ej: 409)
//       console.warn(`Error ${statusCode}:`, errorMessage);

//       return {
//         message: "Error al crear el ticket",
//         errors: errorMessage,
//         statusCode, //  Incluye el código en la respuesta
//       };
//     }

//     return {
//       message: "Error desconocido",
//       errors: "Ocurrió un error inesperado",
//     };
//   }
// };

// export const getAreaTicket = async () => {
//   try {
//     const res = await axiosApiBack.get("/tickets/getAreas");
//     if (!res.data) {
//       return {
//         message: "Error al obtener las áreas",
//         errors: res.data,
//       };
//     }
//     return res.data;
//   } catch (error: unknown) {
//     if (axios.isAxiosError(error)) {
//       const errorMessage = error.response?.data?.message || error.message;
//       console.warn("Error al obtener áreas:", errorMessage);
//       return {
//         message: "Error al obtener las áreas",
//         errors: errorMessage,
//       };
//     }
//     return {
//       message: "Error desconocido",
//       errors: "Ocurrió un error inesperado",
//     };
//   }
// };
