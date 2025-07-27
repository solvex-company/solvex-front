"use client";

import PaymentConfirmation from "./PaymentConfirmation";
import { useAuthContext } from "@/context/AuthContext";

const PaySubscriptionContainer = () => {
  const { user } = useAuthContext();

  if (!user) return;

  return (
    <PaymentConfirmation userName={user?.name} userLastName={user?.lastname} />
  );
};

export default PaySubscriptionContainer;
