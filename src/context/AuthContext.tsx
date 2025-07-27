"use client";

import AxiosApi from "@/app/api/axiosInstance";
import { getUsersInfo } from "@/services/auth";
import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";

export interface User {
  id_user: string;
  email?: string;
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
  user: User | null;
  token: string | null;
  isAuth: boolean;
  isLoading: boolean;
  //Actions
  saveUserData: (data: SaveUserPayload) => void;
  resetUserData: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USER_LOCAL_KEY = "user";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const saveUserData = async (data: SaveUserPayload) => {
    try {
      setToken(data.token);
      setIsAuth(data.login);

      const decodedPayload = jwtDecode<User>(data.token);

      const fullUserInfo = await getUsersInfo(data.token);

      const userData: User = {
        id_user: fullUserInfo.id_user,
        email: decodedPayload.email,
        id_role: decodedPayload.id_role,
        name: fullUserInfo.name,
        lastname: fullUserInfo.lastname,
        phone: fullUserInfo.phone,
        identification_number: fullUserInfo.identification_number,
      };

      setUser(userData);

      localStorage.setItem(
        USER_LOCAL_KEY,
        JSON.stringify({
          token: data.token,
          isAuth: data.login,
          user: userData,
        })
      );
    } catch (error) {
      console.error("Error al guardar datos de usuario:", error);
      resetUserData();
    }
  };

  const resetUserData = () => {
    setUser(null);
    setToken(null);
    setIsAuth(false);
    localStorage.removeItem(USER_LOCAL_KEY);
  };

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedAuthData = JSON.parse(
          localStorage.getItem(USER_LOCAL_KEY) || "{}"
        );

        if (
          storedAuthData &&
          storedAuthData.token &&
          storedAuthData.user &&
          storedAuthData.isAuth
        ) {
          setToken(storedAuthData.token);
          setUser(storedAuthData.user);
          setIsAuth(storedAuthData.isAuth);
        } else {
          resetUserData();
        }
      } catch (error) {
        console.error(
          "Error al inicializar la autenticación desde localStorage:",
          error
        );
        resetUserData();
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  useEffect(() => {
    const requestInterceptor = AxiosApi.interceptors.request.use(
      (config) => {
        // Leer el token directamente de localStorage en el momento de la petición
        const storedAuthData = JSON.parse(
          localStorage.getItem(USER_LOCAL_KEY) || "{}"
        );
        const currentToken = storedAuthData.token;

        if (currentToken) {
          config.headers.Authorization = `Bearer ${currentToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const responseInterceptor = AxiosApi.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          console.warn("Requerimiento NO autorizado. Limpiando sesión.");
          resetUserData();
        }
        return Promise.reject(error);
      }
    );

    return () => {
      AxiosApi.interceptors.request.eject(requestInterceptor);
      AxiosApi.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuth,
        isLoading,
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
