"use client";

import AxiosApi from "@/app/api/axiosInstance";
import { getUsersInfo } from "@/services/auth";
import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";

export interface User {
  id_user: string;
  email: string;
  id_role: number;
  name?: string;
  lastname?: string;
  phone?: string;
  identification_number?: string;
}

type SaveUserPayload = {
  token: string;
  login: boolean;
};

type AuthContextType = {
  //States
  user?: User | null;
  token?: string | null;
  isAuth: boolean | null;
  //Actions
  saveUserData: (data: SaveUserPayload) => void;
  resetUserData: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USER_LOCAL_KEY = "user";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuth, setIsAuth] = useState<AuthContextType["isAuth"]>(null);

  const saveUserData = async (data: SaveUserPayload) => {
    setToken(data.token);
    setIsAuth(data.login);

    const payload = await getUsersInfo(data.token);
    const payload2 = jwtDecode<User>(data.token);

    const userData: User = {
      id_user: payload.id_user,
      email: payload2.email,
      id_role: payload2.id_role,
      name: payload.name,
      lastname: payload.lastname,
      phone: payload.phone,
      identification_number: payload.identification_number,
    };

    setUser(userData);
    localStorage.setItem(
      USER_LOCAL_KEY,
      JSON.stringify({
        token: data.token,
        login: data.login,
        user: userData,
      })
    );
  };

  const resetUserData = () => {
    setUser(null);
    setToken(null);
    setIsAuth(false);
    localStorage.removeItem(USER_LOCAL_KEY);
  };

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem(USER_LOCAL_KEY) || "{}");

    if (storage === undefined || !Object.keys(storage)?.length) {
      setIsAuth(false);
      return;
    }

    if (storage.token) {
      setToken(storage.token);
      const payload = jwtDecode<User>(storage.token);
      setUser(payload); // Ajusta la interfaz si es necesario
    }

    const storageType: Storage = storage;
    setUser(storage.user);
    setToken(storageType?.token);
    setIsAuth(storage?.login);
  }, []);

  // configuracion de interceptor AXIOS
  // añade el token de autorizacion a cada solicitud
  // interceptor de solicitud
  useEffect(() => {
    const requestInterceptor = AxiosApi.interceptors.request.use(
      (config) => {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // interceptor de respuesta
    // para manejar errores globales, ej: token expirados
    const responseInterceptor = AxiosApi.interceptors.response.use(
      (response) => response,

      // Si la API nos devuelve un 401 - no autorizado
      (error) => {
        if (error.response && error.response.status === 401) {
          console.warn("Requerimiento NO autorizado.");
          // limpiar el estado de autenticacion
          resetUserData();
        }
        // rechazar la promesa para propagar el error
        return Promise.reject(error);
      }
    );

    // función de limpieza:
    // muy importante para eliminar los interceptores cuando el componente se desmonte
    // o cuando el token cambie, para evitar que se dupliquen o usen un token obsoleto.
    return () => {
      AxiosApi.interceptors.request.eject(requestInterceptor);
      AxiosApi.interceptors.response.eject(responseInterceptor);
    };
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuth,
        saveUserData,
        resetUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("El useAuthContext debe usarse dentro de un AuthProvider");
  }

  return context;
};
