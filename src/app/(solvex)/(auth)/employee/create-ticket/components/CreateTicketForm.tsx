"use client";

//Para el form
import { useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

//Componentes
import TicketHeaderFields from "./TicketHeaderFields";
import ImageUpload from "./ImageUpload";

//Otros (Tipos, servicios, contextos)
import { TicketFormValues } from "@/types/ITickets";
import { postCreateTicket } from "@/services/tickets";
import { useAuthContext } from "@/context/AuthContext";

export default function CreateTicketForm() {
  const [images, setImages] = useState<File[]>([]);
  const { token } = useAuthContext();
  const router = useRouter();

  const formik = useFormik<TicketFormValues>({
    initialValues: {
      area: null,
      fecha: new Date().toISOString().split("T")[0],
      titulo: "",
      descripcion: "",
    },
    validationSchema: Yup.object({
      area: Yup.object().required("Área es requerida"),

      titulo: Yup.string()
        .min(3, "Mínimo 3 caracteres")
        .max(50, "El título no puede exceder 50 caracteres")
        .required("Requerido"),

      descripcion: Yup.string()
        .min(10, "Mínimo 10 caracteres")
        .required("Requerido"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const formData = new FormData();

        images.forEach((img) => formData.append("images", img));

        // Manejar cada campo por separado
        formData.append("id_area", values.area?.id_area.toString() ?? "");
        formData.append("title", values.titulo);
        formData.append("description", values.descripcion);

        const response = await postCreateTicket(formData, token!);
        console.log("Respuesta del post:", response);

        Swal.fire({
          title: "Ticket creado exitosamente!",
          text: "Gracias por reportar el problema.",
          icon: "success",
        });

        resetForm(); // Limpiar el formulario
        setImages([]); // Limpiar las imágenes
        router.push("/employee/dashboard");
      } catch (error) {
        if (error) throw new Error("Hubo un error aqui");

        Swal.fire({
          title: "Error",
          text: "Hubo un problema al crear el ticket. Intenta nuevamente.",
          icon: "error",
        });
      }
    },
  });

  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-4 w-[967px] mx-auto mt-6"
      >
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
          {formik.touched.titulo && formik.errors.titulo && (
            <p className="text-red-500 text-lg">{formik.errors.titulo}</p>
          )}
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
            <p className="text-red-500 text-lg">{formik.errors.descripcion}</p>
          )}
        </div>

        {/* Imágenes adjuntas */}
        <ImageUpload images={images} setImages={setImages} />

        {/* Botón de envío */}
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className={`h-12 text-white text-xl font-bold p-2 rounded
             ${
               formik.isSubmitting
                 ? "bg-gray-400 cursor-not-allowed"
                 : "bg-blue-500 hover:bg-blue-600"
             }
            `}
        >
          {formik.isSubmitting ? "Enviando..." : "Crear Ticket"}
        </button>
      </form>
    </FormikProvider>
  );
}
