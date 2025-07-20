"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { postLogin } from "@/services/auth";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { useAuthContext } from "@/context/AuthContext";
/* import usePublic from "@/hooks/usePublic"; */
import Link from "next/link";
import GoogleLoginButton from "../../register/components/GoogleLoginButton";

const LoginForm: React.FC = () => {
  /* usePublic(); */
  const router = useRouter();
  const { saveUserData } = useAuthContext();
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
    onSubmit: async (values) => {
      try {
        const response = await postLogin(values);
        if (response.success) {
          Swal.fire({
            icon: "success",
            title: "¡Login exitoso!",
            text: response.message || "Bienvenido",
          });

          const { message, data, success } = response;
          void message;
          const login = success;
          const token = data;
          saveUserData({ token, login });
          router.push("/admin/dashboard");
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Credenciales incorrectas",
          });
        }
      } catch (error: unknown) {
        let errorMessage = "Intenta nuevamente más tarde";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        Swal.fire({
          icon: "error",
          title: "Error de conexión",
          text: errorMessage || "Intenta nuevamente más tarde",
        });
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="mt-3 text-sm ">
            Email
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correoelectrónico@dominio.com"
              className={`w-full text-md p-1 pl-4 h-[40px] rounded-md text-gray-700 placeholder-gray-600 bg-inputBg focus:outline-none ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500 border-2"
                  : ""
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </label>

          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.email}
            </div>
          )}
        </div>
        <div className="mb-6 ">
          <label
            htmlFor="password"
            className="flex flex-col text-sm items-start"
          >
            Contraseña
            <div
              className={`flex justify-between items-center w-full p-1 pl-4 h-[40px] rounded-md text-gray-700   bg-inputBg focus:outline-none  ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500 border-2"
                  : ""
              }`}
            >
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="********"
                className="text-md text-gray-700  placeholder-gray-600 bg-inputBg focus:outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <span
                className=" text-gray-500 cursor-pointer text-2xl items-end"
                onClick={() => setShowPassword((prev) => !prev)}
                tabIndex={-1}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>
          </label>

          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.password}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white p-1 h-[40px] rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition duration-200"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Iniciando Sesión..." : "Iniciar Sesión"}
        </button>
      </form>

      <div className="flex gap-2 items-center mt-4 justify-center">
        <span>¿No tienes cuenta?</span>
        <Link className="text-blue-500 hover:text-blue-800" href="/register">
          Registrate
        </Link>
      </div>

      <div className="flex flex-col items-center pt-4">
        <p className="text-gray-400">———————— o continuar con ————————</p>
      </div>
      <GoogleLoginButton />
    </div>
  );
};

export default LoginForm;
