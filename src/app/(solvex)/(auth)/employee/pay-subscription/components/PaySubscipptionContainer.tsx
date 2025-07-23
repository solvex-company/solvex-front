import PaymentConfirmation from "./PaymentConfirmation";

const PaySubscriptionContainer = () => {
  return (
    <PaymentConfirmation
      userName="Franco Paganoni"
      productsTotal={255}
      paymentsTotal={255}
    />
  );
};

/* cardNumber,
  cardBank,
  productsTotal,
  paymentsTotal,*/

export default PaySubscriptionContainer;
