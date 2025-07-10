"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { postLogin } from "@/services/auth";

const Login: React.FC = () => {
  // 1. Definimos el esquema de validación con Yup
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Formato de correo electrónico inválido")
      .required("El correo electrónico es requerido"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("La contraseña es requerida"),
  });

  // 2. Inicializa Formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      // Aquí manejamos el envio del formulario
      console.log("Valores del formulario:", values);
      postLogin(values);
      alert("Login exitoso (simulado)! Revisa la consola para los datos.");
      // redirigir al usuario
    },
  });

  return (
    <div className="bg-white p-8   w-full max-w-sm">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Ingresa a la página
      </h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="correoelectrónico@dominio.com"
            className={`w-full px-4 py-3 rounded-lg text-gray-700 placeholder-gray-500 bg-green-50 focus:outline-none focus:ring-2 ${
              formik.touched.email && formik.errors.email
                ? "border-red-500 border-2"
                : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.email}
            </div>
          )}
        </div>
        <div className="mb-6">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="contraseña"
            className={`w-full px-4 py-3 rounded-lg text-gray-700 placeholder-gray-500 bg-green-50 focus:outline-none focus:ring-2  ${
              formik.touched.password && formik.errors.password
                ? "border-red-500 border-2"
                : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.password}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition duration-200"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Iniciando Sesión..." : "Iniciar Sesión"}
        </button>
      </form>
      <p>
        ¿No tienes cuenta?
        <Link className="text-blue-500 hover:text-blue-800" href="/register">
          Registrate
        </Link>
      </p>
    </div>
  );
};

export default Login;
