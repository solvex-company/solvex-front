"use client";

import { Provider } from "./Provider";
import { AuthProvider } from "../context/AuthContext";

import { ReactNode } from "react";

export const ClientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AuthProvider>
      <Provider>{children}</Provider>
    </AuthProvider>
  );
};
