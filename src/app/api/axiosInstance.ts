import axios from "axios";

// Crear una instancia base de Axios
const AxiosApi = axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosApi;
