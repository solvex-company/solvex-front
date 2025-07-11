"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { postLogin } from "@/services/auth";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

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

      // redirigir al usuario
      router.push("/dashboard");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="correoelectrónico@dominio.com"
          className={`w-full px-4 py-3 rounded-lg text-gray-700 placeholder-gray-500 bg-green-50 focus:outline-none ${
            formik.touched.email && formik.errors.email
              ? "border-red-500 border-2"
              : ""
          }`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
        )}
      </div>
      <div className="mb-6">
        <div
          className={`flex justify-between w-full px-4 py-3 rounded-lg text-gray-700  placeholder-gray-500 bg-green-50 focus:outline-none  ${
            formik.touched.password && formik.errors.password
              ? "border-red-500 border-2"
              : ""
          }`}
        >
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="contraseña"
            className="text-gray-700  placeholder-gray-500 bg-green-50 focus:outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <span
            className=" text-gray-500 cursor-pointer text-2xl"
            onClick={() => setShowPassword((prev) => !prev)}
            tabIndex={-1}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>

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
  );
};

export default LoginForm;
