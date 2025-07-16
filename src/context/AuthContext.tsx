"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import IAuthContext from "../types/IAuthContext";
import { User } from "../types/index";

// Crear el contexto con valores iniciales vacios

const AuthContext = createContext<IAuthContext>({
  user: null,
  token: null,
  login: () => {},
  logout: () => {},
  isLoggedIn: false,
  setUser: () => {},
});

// Crear el provider que envuelve a la app y proveer el estado de autenticación

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Guardar usuario/token en localStorage cuando cambian
  useEffect(() => {
    if (user && token) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
  }, [user, token]);

  // Recuperar usuario/token al cargar la app
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  // creamos la funcion de login
  const login = (userData: User, authToken: string) => {
    setUser(userData);
    setToken(authToken);
  };

  // cramos la funcion de logout
  const logout = () => {
    setUser(null);
    setToken(null);
  };

  // funcion que verifica si el usuario esta loggeado
  const isLoggedIn = !!user && !!token;

  // proveer los valores y funciones a los componentes hijos

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isLoggedIn,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// hook para consumir el contexto en cualquier componente
export const useAuth = () => useContext(AuthContext);
