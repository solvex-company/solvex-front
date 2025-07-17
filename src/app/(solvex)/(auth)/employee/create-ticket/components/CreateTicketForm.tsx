"use client";

import { useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import TicketHeaderFields from "./TicketHeaderFields";
import { TicketFormValues } from "@/types/ITickets";
import ImageUpload from "./ImageUpload";

export default function CreateTicketForm() {
  const [images, setImages] = useState<File[]>([]);

  const formik = useFormik<TicketFormValues>({
    initialValues: {
      codigo: "COD-01",
      area: "TI",
      fecha: new Date().toISOString().split("T")[0],
      titulo: "",
      descripcion: "",
    },
    validationSchema: Yup.object({
      area: Yup.string().required("Área es requerida"),
      titulo: Yup.string().min(3, "Mínimo 3 caracteres").required("Requerido"),
      descripcion: Yup.string().min(10, "Mínimo 10 caracteres").required("Requerido"),
    }),
    onSubmit: (values) => {
      const formData = new FormData();
      images.forEach((img) => formData.append("imagenes", img));
      for (const key in values) {
        formData.append(key, values[key as keyof TicketFormValues]);
      }

      console.log("Ticket enviado:", values);
      console.log("Imágenes adjuntas:", images);
      alert("Ticket creado exitosamente!");
      // Podés hacer un fetch o axios.post acá
    },
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 w-[967px] mx-auto mt-8">
        {/* Componente separado con los campos: código, área y fecha */}
        <TicketHeaderFields />

        {/* Título del ticket */}
        <div className="flex flex-col">
          <label htmlFor="titulo">Titulo</label>
          <input
            name="titulo"
            id="titulo"
            placeholder="Ej: No me carga el dashboard"
            value={formik.values.titulo}
            onChange={formik.handleChange}
            className="border border-accent bg-mainBg rounded-md p-2"
          />
          {formik.touched.titulo && formik.errors.titulo && <p className="text-red-500 text-sm">{formik.errors.titulo}</p>}
        </div>

        {/* Descripción del problema */}
        <div className="flex flex-col">
          <label htmlFor="descripcion">Descripcion del problema</label>
          <textarea
            name="descripcion"
            id="descripcion"
            placeholder="Ej: No me carga el dashboard, me aparece un error 500..."
            value={formik.values.descripcion}
            onChange={formik.handleChange}
            className="border border-accent bg-mainBg rounded-md p-2 h-32"
          />
          {formik.touched.descripcion && formik.errors.descripcion && (
            <p className="text-red-500 text-sm">{formik.errors.descripcion}</p>
          )}
        </div>

        {/* Imágenes adjuntas */}
        <ImageUpload images={images} setImages={setImages} />

        {/* Botón de envío */}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600">
          Crear Ticket
        </button>
      </form>
    </FormikProvider>
  );
}
