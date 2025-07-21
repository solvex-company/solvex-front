"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export const Provider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  // Add this line where you create your query client
  // window.__TANSTACK_QUERY_CLIENT__ = queryClient;

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
