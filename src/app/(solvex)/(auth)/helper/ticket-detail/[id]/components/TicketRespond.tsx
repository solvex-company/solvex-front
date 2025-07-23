import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";

type Props = {
  ticketRef: React.RefObject<HTMLDivElement | null>;
};

const validationSchema = Yup.object({
  title: Yup.string().min(3, "Mínimo 3 caracteres").required("Requerido"),
  description: Yup.string().min(10, "Mínimo 10 caracteres").required("Requerido"),
  helper: Yup.string().min(3, "Mínimo 3 caracteres").required("Requerido"),
  status: Yup.string().required("Estado es requerido"),
});

const initialValues = {
  date: new Date().toISOString().split("T")[0],
  title: "",
  description: "",
  helper: "Nombre del Helper",
  status: "",
};

function TicketRespond({ ticketRef }: Props) {
  const handleOnSubmit = () => {
    console.log("Respuesta enviada!");
  };

  return (
    <div ref={ticketRef} className="mt-10 bg-mainBg border border-secondText rounded-xl">
      <h2 className="font-bold text-start text-2xl p-3 ml-2">Respuesta del Ticket</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleOnSubmit}>
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <section className="flex justify-around pb-4">
              <div className="flex flex-col items-start ml-2 ">
                <label htmlFor="title">Titulo</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  className="border border-accent rounded-md p-2 h-[45px] w-[700px] bg-white"
                />
                {formik.touched.title && formik.errors.title && <p className="text-red-500 text-lg">{formik.errors.title}</p>}
              </div>
              <div className="flex flex-col mr-4 ">
                <label htmlFor="date">Fecha de Respuesta</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={formik.values.date}
                  disabled
                  className="border border-accent rounded-md p-2 h-[45px] w-[200px] bg-white cursor-not-allowed"
                />
              </div>
            </section>

            <div className="flex flex-col  items-start ml-4 mb-6">
              <label htmlFor="description">Descripcion</label>
              <textarea
                id="description"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                className="border border-accent rounded-md p-2 bg-white w-[923px] h-[170px]"
              />
              {formik.touched.description && formik.errors.description && (
                <p className="text-red-500 text-lg">{formik.errors.description}</p>
              )}
            </div>

            <section className="flex justify-center  gap-4 w-[920px] pb-4 ml-4">
              <div className="flex flex-col w-full ">
                <label htmlFor="helper">Soporte que respondio el ticket</label>
                <input
                  type="text"
                  id="helper"
                  name="helper"
                  value={formik.values.helper}
                  onChange={formik.handleChange}
                  disabled
                  className="border border-accent rounded-md p-2  h-[45px] w-max-[453px] text-black bg-white cursor-not-allowed"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="status">Estado del ticket</label>
                <select
                  name="status"
                  value={formik.values.status}
                  onChange={formik.handleChange}
                  className="border border-accent rounded-md p-2 bg-white h-[45px] w-max-[453px]"
                >
                  <option value="">Selecciona el estado del Ticket</option>
                  <option value="pending">Pendiente</option>
                  <option value="process">En Proceso</option>
                  <option value="resolved">Resuelto</option>
                </select>
                {formik.touched.status && formik.errors.status && <p className="text-red-500 text-lg">{formik.errors.status}</p>}
              </div>
            </section>

            <button
              type="submit"
              className=" p-2 ml-4 my-4 h-12 w-[920px] text-white text-xl font-bold  rounded bg-blue-500 hover:bg-blue-600"
            >
              Responder ticket
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default TicketRespond;
