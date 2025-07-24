"use client";

import { useAuthContext } from "@/context/AuthContext";
import { postTicketResponse } from "@/services/tickets";

import { Formik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import * as Yup from "yup";

type Props = {
  ticketRef: React.RefObject<HTMLDivElement | null>;
  ticketId: string;
};

const validationSchema = Yup.object({
  description: Yup.string().min(10, "Mínimo 10 caracteres").required("Descripcion es requerida"),
  status: Yup.string().required("Estado es requerido"),
});

function TicketResponse({ ticketRef, ticketId }: Props) {
  const { user, token } = useAuthContext();
  const fullName = user?.name ? `${user.name} ${user.lastname}` : `Nombre del usuario`;

  const initialValues = {
    date: new Date().toISOString().split("T")[0],
    description: "",
    helper: fullName,
    status: "",
  };

  const handleOnSubmit = async (values: typeof initialValues, { resetForm }: { resetForm: () => void }) => {
    try {
      // Crear el objeto de datos
      const requestData = {
        id_ticket: String(ticketId),
        response: values.description.trim(),
        ticketStatus: values.status,
        helperEmail: user!.email,
      };

      const response = await postTicketResponse(requestData, token!);
      console.log(requestData);

      // Verificar si hay error del servicio (statusCode >= 400)
      if (response.statusCode && response.statusCode >= 400) {
        Swal.fire({
          title: "Error",
          text: "No se pudo procesar la respuesta del ticket. Por favor, intenta nuevamente.",
          icon: "error",
        });
        return;
      }

      // Verificar si la respuesta fue exitosa
      if (response.id_resolution_ticket) {
        Swal.fire({
          title: "¡Ticket respondido correctamente!",
          text: "Gracias por tu cooperación.",
          icon: "success",
        });

        resetForm();
      } else {
        Swal.fire({
          title: "Error",
          text: "No se pudo procesar la respuesta del ticket. Por favor, intenta nuevamente.",
          icon: "error",
        });
      }
    } catch (error) {
      // Log del error solo para desarrollo (opcional)
      console.error("Error al responder el ticket:", error);

      Swal.fire({
        title: "Error",
        text: "Hubo un problema al procesar tu solicitud. Por favor, intenta nuevamente.",
        icon: "error",
      });
    }
  };

  return (
    <div ref={ticketRef} className="mt-10 bg-mainBg border border-secondText rounded-xl">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleOnSubmit}>
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <section className="flex justify-between items-center py-4">
              <h2 className="font-bold text-start text-3xl ml-4">Respuesta del Ticket</h2>
              <div className="flex flex-col mr-6 ">
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
              <label htmlFor="description">Descripcion de la respuesta</label>
              <textarea
                id="description"
                name="description"
                placeholder="Añade tus comentarios sobre la solución de este ticket"
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
                  <option value="" className="text-secondText">
                    Selecciona el estado del Ticket
                  </option>
                  <option value="pending">Pendiente</option>
                  <option value="Completed">Resuelto</option>
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

export default TicketResponse;
