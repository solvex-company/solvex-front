'use client';

import { createContext, useContext, useEffect, useState } from "react";

interface User {
  email: string;
  id_role: number;
}

type SaveUserPayload = {
  token: string;
  login: boolean;
}

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

const USER_LOCAL_KEY = 'user';

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuth, setIsAuth] = useState<AuthContextType['isAuth']>(null);

  const saveUserData = (data: SaveUserPayload) => {
    setToken(data.token);
    setIsAuth(data.login);

    const payload = JSON.parse(atob(data.token.split('.')[1]));
    console.log(payload.email);

    const userData:User = {
      email: payload.email,
      id_role: payload.id_role,
    }
    
    setUser(userData);
    localStorage.setItem(USER_LOCAL_KEY, JSON.stringify({
      token: data.token,
      login: data.login,
      user: userData,
    }));
  };

  const resetUserData = () => {
    setUser(null);
    setToken(null);
    setIsAuth(false);
    localStorage.removeItem(USER_LOCAL_KEY);
  };

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem(USER_LOCAL_KEY) || '{}');

    if (storage === undefined || !Object.keys(storage)?.length) {
      setIsAuth(false);
      return;
    };

    const storageType: Storage = storage;
    setUser(storage.user);
    setToken(storageType?.token);
    setIsAuth(storage?.login);
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      token,
      isAuth,
      saveUserData,
      resetUserData
    }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('El useAuthContext debe usarse dentro de un AuthProvider');
  };

  return context;
};