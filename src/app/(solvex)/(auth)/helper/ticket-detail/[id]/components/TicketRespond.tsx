import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";

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

function TicketRespond() {
  const handleOnSubmit = () => {
    console.log("Respuesta enviada!");
  };

  return (
    <div className="mt-10 h-[528px] bg-mainBg border border-secondText rounded-md">
      <h2>Respuesta del Ticket</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleOnSubmit}>
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <section className="flex gap-3">
              <div className="flex flex-col ">
                <label htmlFor="title">Titulo</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  className="border border-accent rounded-md p-2 bg-white"
                />
                {formik.touched.title && formik.errors.title && <p className="text-red-500 text-lg">{formik.errors.title}</p>}
              </div>
              <div className="flex flex-col ">
                <label htmlFor="date">Fecha de Respuesta</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={formik.values.date}
                  disabled
                  className="border border-accent rounded-md p-2 h-[45px] w-full bg-white cursor-not-allowed"
                />
              </div>
            </section>

            <div className="flex flex-col ">
              <label htmlFor="description">Descripcion</label>
              <textarea
                id="description"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                className="border border-accent rounded-md p-2 bg-white"
              />
              {formik.touched.description && formik.errors.description && (
                <p className="text-red-500 text-lg">{formik.errors.description}</p>
              )}
            </div>

            <section className="flex gap-3">
              <div className="flex flex-col ">
                <label htmlFor="helper">Soporte que respondio el ticket</label>
                <input
                  type="text"
                  id="helper"
                  name="helper"
                  value={formik.values.helper}
                  onChange={formik.handleChange}
                  disabled
                  className="border border-accent rounded-md p-2 text-black bg-white cursor-not-allowed"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="status">Estado del ticket</label>
                <select
                  name="status"
                  value={formik.values.status}
                  onChange={formik.handleChange}
                  className="border border-accent rounded-md p-2 bg-white"
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
              disabled={formik.isSubmitting}
              className={`h-12 text-white text-xl font-bold p-2 rounded
             ${formik.isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}
            `}
            >
              {formik.isSubmitting ? "Enviando respuesta..." : "Responder ticket"}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default TicketRespond;
