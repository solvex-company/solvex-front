function pending() {
  return (
    <section className="flex flex-col items-center justify-center h-full">
      <div className="bg-gray-100 m-5 w-[400px] h-60 px-8 rounded-md flex flex-col gap-2 items-center justify-center shadow-lg">
        <h1 className="text-3xl text-pending font-bold mb-4 ">Pendiente</h1>
        <p className="text-xl text-gray-700 text-center">
          Tu pago está pendiente de confirmación.
        </p>
      </div>
    </section>
  );
}

export default pending;
