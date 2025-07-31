// query
import { useQuery, QueryObserverResult } from "@tanstack/react-query";

// services
import checkoutService from "../services/checkoutService";

// dto
import { payloadCheckout } from "@/dto/checkoutDto";

interface useCheckoutResult {
  data: payloadCheckout | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  isFetching: boolean;
  refetch: () => Promise<QueryObserverResult<payloadCheckout, Error>>;
}

const useCheckout = (): useCheckoutResult => {
  const { data, isLoading, isError, error, isFetching, refetch } = useQuery<
    payloadCheckout,
    Error
  >({
    queryKey: ["checkoutData"],
    queryFn: checkoutService,
    enabled: false, // la consulta no se ejecuta automaticamente
    staleTime: Infinity,
    refetchOnWindowFocus: false, // evita refetch al cambiar de pestaña
    refetchOnMount: false, // evita refetch al montar el componente
  });

  return {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
  };
};

export default useCheckout;
