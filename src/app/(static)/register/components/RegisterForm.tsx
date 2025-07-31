"use client";

import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { postRegister } from "@/services/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import usePublic from "@/hooks/usePublic";
import GoogleLoginButton from "./GoogleLoginButton";

const RegisterForm: React.FC = () => {
  usePublic();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es requerido"),
    lastname: Yup.string().required("El apellido es requerido"),
    typeId: Yup.number()
      .required("Debes seleccionar un tipo de identificación") // Campo obligatorio
      .oneOf([1, 2, 3], "Tipo de identificación no válido"),
    email: Yup.string()
      .email("Email inválido")
      .required("El correo es requerido"),
    identification_number: Yup.string()
      .min(4, "El numero de identificación debe tener 4 numeros")
      .required("El numero de identificación es requerido"),
    phone: Yup.string()
      .min(4, "El numero de teléfono debe tener 4 números")
      .required("El teléfono es requerido"),
    password: Yup.string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .matches(
        /^(?=.*[A-Z])/,
        "La contraseña debe contener al menos una mayúscula"
      )
      .matches(
        /^(?=.*[!@#$%^&*(),.?":{}|<>])/,
        "La contraseña debe contener al menos un carácter especial"
      )
      .required("La contraseña es requerida"),
    password2: Yup.string()
      .required("Confirma tu contraseña")
      .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
  });

  return (
    <div className=" w-full">
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          typeId: "",
          identification_number: "",
          phone: "",
          email: "",
          password: "",
          password2: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          try {
            const res = await postRegister(values);

            if (
              !res.errors &&
              res.message === "Usuario registrado correctamente"
            ) {
              return Swal.fire({
                icon: "success",
                title: "Éxito",
                text: "El usuario ha sido registrado",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "#4da6ff",
              }).then((result) => {
                if (result.isConfirmed) {
                  router.push("/login");
                }
              });
            }

            if (res.errors) {
              if (res.statusCode === 503 || res.statusCode === 408) {
                return Swal.fire({
                  icon: "error",
                  title: "Error de conexion",
                  text: "No se pudo conectar con el servidor. Por favor intente mas tarde.",
                  confirmButtonText: "Aceptar",
                  confirmButtonColor: "#4da6ff",
                });
              }

              if (res.errors.includes("Email")) {
                return Swal.fire({
                  icon: "error",
                  title: "Error",
                  text: "El correo ya está registrado",
                  confirmButtonText: "Aceptar",
                  confirmButtonColor: "#4da6ff",
                });
              }
              if (res.errors.includes("identification")) {
                return Swal.fire({
                  icon: "error",
                  title: "Error",
                  text: "El número de identificación ya está registrado",
                  confirmButtonText: "Aceptar",
                  confirmButtonColor: "#4da6ff",
                });
              }
            }

            return Swal.fire({
              icon: "error",
              title: "Error",
              text: "Ocurrio un error al registrar",
              confirmButtonText: "Aceptar",
              confirmButtonColor: "#4da6ff",
            });
          } catch (error) {
            if (error) throw new Error("Hubo un error aqui");
            return Swal.fire({
              icon: "error",
              title: "Error inesperado",
              text: "Ocurrio un problema desconocido",
              confirmButtonText: "Aceptar",
              confirmButtonColor: "#4da6ff",
            });
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            <div className="flex flex-col items-center">
              <label className="mt-1 w-[380px] text-sm">Nombre</label>
              <Field
                name="name"
                type="text"
                className="p-1 pl-4 bg-inputBg w-[380px] h-[40px] rounded-md placeholder-gray-600"
                placeholder="Nombre"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="error w-[380px] text-red-500 text-left"
              />
            </div>

            <div className="flex flex-col items-center">
              <label className="mt-1 w-[380px] text-sm">Apellido</label>
              <Field
                name="lastname"
                type="text"
                className="p-1 pl-4 bg-inputBg w-[380px] h-[40px] rounded-md placeholder-gray-600"
                placeholder="Apellido"
              />
              <ErrorMessage
                name="lastname"
                component="div"
                className="error w-[380px] text-red-500 text-left"
              />
            </div>

            <div className="flex flex-col items-center">
              <label className="mt-1 w-[380px] text-sm">
                Tipo de Identificación
              </label>
              <Field
                name="typeId"
                as="select"
                className="p-1 pl-4 bg-inputBg w-[380px] h-[40px] rounded-md placeholder-gray-600"
              >
                <option value={0}>Tipo de Identificación</option>
                <option value={1}>CC</option>
                <option value={2}>DNI</option>
                <option value={3}>Pasaporte</option>
              </Field>
              <ErrorMessage
                name="typeId"
                component="div"
                className="error w-[380px] text-red-500 text-left"
              />
            </div>

            <div className="flex flex-col items-center">
              <label className="mt-1 w-[380px] text-sm">
                Número de Identificación
              </label>
              <Field
                name="identification_number"
                type="number"
                className="p-1 pl-4 bg-inputBg w-[380px] h-[40px] rounded-md placeholder-gray-600"
                placeholder="Número de Identificación"
              />
              <ErrorMessage
                name="identification_number"
                component="div"
                className="error w-[380px] text-red-500 text-left"
              />
            </div>

            <div className="flex flex-col items-center">
              <label className="mt-1 w-[380px] text-sm">Teléfono</label>
              <Field
                name="phone"
                type="number"
                className="p-1 pl-4 bg-inputBg w-[380px] h-[40px] rounded-md placeholder-gray-600"
                placeholder="Telefono"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="error w-[380px] text-red-500 text-left"
              />
            </div>

            <div className="flex flex-col items-center">
              <label className="mt-1 w-[380px] text-sm">Correo</label>
              <Field
                name="email"
                type="email"
                className="p-1 pl-4 bg-inputBg w-[380px] h-[40px] rounded-md placeholder-gray-600"
                placeholder="Correo Ej: ejemplo@mail.com"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error w-[380px] text-red-500 text-left"
              />
            </div>
            <div className="flex flex-col items-center">
              <label className="mt-1 w-[380px] text-sm">Contraseña</label>
              <div className="flex justify-between w-[380px] relative">
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="p-1 pl-4 bg-inputBg w-full h-[40px] rounded-md placeholder-gray-600"
                  placeholder="Contraseña"
                />
                <span
                  className="absolute -m-2 -mr-1 top-1/2 right-2 text-gray-500 cursor-pointer text-2xl"
                  onClick={() => setShowPassword((prev) => !prev)}
                  tabIndex={-1}
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="error w-[380px] text-red-500 text-left"
              />
            </div>
            <div className="flex flex-col items-center">
              <label className="mt-1 w-[380px] text-sm">
                Repetir Contraseña
              </label>
              <div className="flex justify-between w-[380px] relative">
                <Field
                  name="password2"
                  type={showPassword2 ? "text" : "password"}
                  className="p-1 pl-4 bg-inputBg w-[380px] h-[40px] rounded-md placeholder-gray-600"
                  placeholder="Repite tu contraseña"
                />
                <span
                  className="absolute -m-2 -mr-1 top-1/2 right-2 text-gray-500 cursor-pointer text-2xl"
                  onClick={() => setShowPassword2((prev) => !prev)}
                  tabIndex={-1}
                >
                  {showPassword2 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
              <ErrorMessage
                name="password2"
                component="div"
                className="error w-[380px] text-red-500 text-left"
              />
            </div>

            <div className="flex flex-col items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-7 p-1 bg-black w-[380px] h-[40px] rounded-md text-md text-mainBg hover:bg-gray-800 transition duration-200"
              >
                Registrarse
              </button>
            </div>
            <div className="flex flex-col items-center pt-4">
              <p>
                ¿Ya tienes cuenta?{" "}
                <Link
                  className="text-blue-500 hover:text-blue-800"
                  href="/login"
                >
                  Inicia sesión
                </Link>{" "}
              </p>
            </div>
          </Form>
        )}
      </Formik>
      <div className="flex flex-col items-center pt-4">
        <p className="text-gray-400">———————— o continuar con ————————</p>
      </div>
      <GoogleLoginButton />
    </div>
  );
};

export default RegisterForm;
