function failure() {
  return (
    <section className="flex flex-col items-center justify-center h-full">
      <div className="bg-gray-100 m-5 w-[450px] h-60 px-8 rounded-md flex flex-col gap-2 items-center justify-center shadow-lg">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Pago Fallido!</h1>
        <p className="text-lg text-gray-700 text-center">
          Lamentablemente, no pudimos procesar tu pago. Por favor, inténtalo de
          nuevo.
        </p>
      </div>
    </section>
  );
}
export default failure;
