import axios from "axios";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_BASE_URL) {
  console.error(
    "Error: La variable de entorno NEXT_PUBLIC_API_URL no está definida."
  );
}

// Crear una instancia base de Axios
const AxiosApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosApi;
