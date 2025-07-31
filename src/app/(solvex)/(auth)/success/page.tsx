function success() {
  return (
    <section className="flex flex-col items-center justify-center h-full">
      <div className="bg-gray-100 m-5 w-[400px] h-60 px-8 rounded-md flex flex-col gap-2 items-center justify-center shadow-lg">
        <h1 className="text-4xl font-bold text-resolved mb-4">Éxito!</h1>
        <p className="text-lg text-gray-700 text-center">
          Tu operación se completó correctamente.
        </p>
      </div>
    </section>
  );
}
export default success;
