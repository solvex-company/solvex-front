// vedors
import { useQuery } from "@tanstack/react-query";

// services
import { approvedPaymentService } from "../services/approvedPaymentService";

// dto
import { approvedPaymentPayload } from "../services/approvedPaymentService";

export const useApprovedPayment = () => {
  return useQuery<approvedPaymentPayload>({
    queryKey: ["approvedPayment"],
    queryFn: approvedPaymentService,
  });
};

export default useApprovedPayment;
