"use client";

// components/PaymentConfirmation/PaymentConfirmation.tsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; // Importa Yup para validación de esquemas
import Image from "next/image"; // Asegúrate de tener Next.js configurado para manejar imágenes

// Define la interfaz para las props que recibirá el componente
interface PaymentConfirmationProps {
  userName: string;
  productsTotal: number;
  paymentsTotal: number;
}

const PaymentConfirmation: React.FC<PaymentConfirmationProps> = ({
  userName,
  productsTotal,
  paymentsTotal,
}) => {
  // Define el esquema de validación con Yup
  const validationSchema = Yup.object({
    installments: Yup.string().required("Por favor, selecciona las cuotas."),
  });

  // Inicializa Formik
  const formik = useFormik({
    initialValues: {
      installments: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Esta función solo se llama si la validación es exitosa
      // onPay(values.installments, values.securityCode);
      console.log("Formulario enviado con éxito:", values);
    },
  });

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen p-4 sm:p-8 justify-center items-start">
      <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 w-full lg:w-3/5 xl:w-2/5 mb-6 lg:mb-0 lg:mr-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
          Para terminar, confirma tu pago
        </h2>

        <div className="mb-6 border border-gray-200 rounded-md p-4 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src={
                  "https://ik.imagekit.io/SolvexCompany/icons8-usuario-30%20(1).png?updatedAt=1753285728595"
                }
                alt="usuario"
                width={30}
                height={30}
              />
              <span className="text-gray-800 font-medium pl-3">{userName}</span>
            </div>
          </div>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Y elegi la cantidad de cuotas
          </h3>

          {/* Campo de Cuotas */}
          <div className="mb-4">
            <label
              htmlFor="installments"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Cuotas
            </label>
            <div className="relative">
              <select
                id="installments"
                {...formik.getFieldProps("installments")} // Enlaza con Formik
                className={`block w-full px-4 py-2 border rounded-md shadow-sm sm:text-sm appearance-none pr-8 bg-gray-500
                  ${
                    formik.touched.installments && formik.errors.installments
                      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  }
                `}
              >
                <option value="" disabled>
                  Elige
                </option>
                <option value="1">1 cuota sin interés</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-200">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.59 4.59z" />
                </svg>
              </div>
            </div>

            {formik.touched.installments && formik.errors.installments ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.installments}
              </div>
            ) : null}
          </div>

          <div className="mb-6 flex flex-col">
            <span className="text-md  text-gray-700 my-1">
              Solo aceptamos MercadoPago como método de pago
            </span>

            <Image
              src={
                "https://ik.imagekit.io/SolvexCompany/MP_RGB_HANDSHAKE_color_horizontal.svg?updatedAt=1753285176489"
              }
              alt="CVV location"
              className="m-auto"
              width={250}
              height={150}
            />
          </div>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 w-full lg:w-2/5 xl:w-1/4">
        <h2 className="flex items-center text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
          <Image
            src={
              "https://ik.imagekit.io/SolvexCompany/logo%20Solvex.png?updatedAt=1751640593158"
            }
            alt="Solvex Logo"
            className="mr-3"
            width={55}
            height={55}
          />
          Solvex
        </h2>

        <div className="mb-6">
          <p className="text-gray-700 font-medium mb-2">
            Detalles de tu compra
          </p>
          <div className="flex justify-between items-center text-gray-600 mb-2">
            <span>Productos</span>
            <span>${productsTotal.toLocaleString("es-AR")}</span>{" "}
          </div>
          <div className="flex justify-between items-center text-gray-800 font-semibold border-t pt-2 mt-2 border-gray-200">
            <span>Pagos</span>
            <span>${paymentsTotal.toLocaleString("es-AR")}</span>{" "}
          </div>
        </div>

        <button
          type="submit"
          onClick={() => formik.handleSubmit()}
          disabled={formik.isSubmitting || !formik.isValid} // Deshabilita el botón mientras se envía o si el formulario es inválido
          className={`w-full font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-75 transition duration-200 ease-in-out
            ${
              formik.isSubmitting || !formik.isValid // Estilos condicionales para el botón
                ? "bg-blue-400 text-gray-200 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
            }
          `}
        >
          {formik.isSubmitting ? "Procesando..." : "Pagar"}
        </button>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
