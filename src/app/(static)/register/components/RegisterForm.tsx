"use client";

import Image from "next/image";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { postRegister } from "@/services/auth";
import { useRouter } from "next/navigation";

const RegisterForm: React.FC = () => {
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es requerido"),
    lastname: Yup.string().required("El apellido es requerido"),
    typeId: Yup.string()
      .required("Debes seleccionar un tipo de identificación") // Campo obligatorio
      .oneOf(["1", "2", "3"], "Tipo de identificación no válido"),
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
      .min(6, "La contraseña debe tener al menos 6 caracteres")
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
          console.log(values);
          setSubmitting(false);
          try {
            const res = await postRegister(values);
            if (res.errors) {
              console.log("1-", res.errors);
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
          } catch (error) {
            console.log("2-", error);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            <div className="flex flex-col items-center">
              <Field
                name="name"
                type="text"
                className="mt-3 p-1 pl-4 bg-inputBg w-[380px] h-[40px] rounded-md placeholder-gray-600"
                placeholder="Nombre"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="error text-red-300 align-left"
              />
            </div>

            <div className="flex flex-col items-center">
              <Field
                name="lastname"
                type="text"
                className="mt-3 p-1 pl-4 bg-inputBg w-[380px] h-[40px] rounded-md placeholder-gray-600"
                placeholder="Apellido"
              />
              <ErrorMessage
                name="lastname"
                component="div"
                className="error text-red-300 text-left"
              />
            </div>
            <div className="flex flex-col items-center">
              <Field
                name="typeId"
                as="select"
                className="mt-3 p-1 pl-4 bg-inputBg w-[380px] h-[40px] rounded-md placeholder-gray-600"
              >
                <option value="">Tipo de Identificación</option>
                <option value="1">CC</option>
                <option value="2">DNI</option>
                <option value="3">Pasaporte</option>
              </Field>
              <ErrorMessage
                name="typeId"
                component="div"
                className="error text-red-300 text-left"
              />
            </div>
            <div className="flex flex-col items-center">
              <Field
                name="identification_number"
                type="number"
                className="mt-3 p-1 pl-4 bg-inputBg w-[380px] h-[40px] rounded-md placeholder-gray-600"
                placeholder="Número de Identificación"
              />
              <ErrorMessage
                name="identification_number"
                component="div"
                className="error text-red-300 text-left"
              />
            </div>
            <div className="flex flex-col items-center">
              <Field
                name="phone"
                type="number"
                className="mt-3 p-1 pl-4 bg-inputBg w-[380px] h-[40px] rounded-md placeholder-gray-600"
                placeholder="Telefono"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="error text-red-300 text-left"
              />
            </div>
            <div className="flex flex-col items-center">
              <Field
                name="email"
                type="email"
                className="mt-3 p-1 pl-4 bg-inputBg w-[380px] h-[40px] rounded-md placeholder-gray-600"
                placeholder="Correo Ej: ejemplo@mail.com"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error text-red-300 text-left"
              />
            </div>
            <div className="flex flex-col items-center">
              <Field
                name="password"
                type="password"
                className="mt-3 p-1 pl-4 bg-inputBg w-[380px] h-[40px] rounded-md placeholder-gray-600"
                placeholder="Contraseña"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error text-red-300 text-left"
              />
            </div>
            <div className="flex flex-col items-center">
              <Field
                name="password2"
                type="password"
                className="mt-3 p-1 pl-4 bg-inputBg w-[380px] h-[40px] rounded-md placeholder-gray-600"
                placeholder="Repite tu contraseña"
              />
              <ErrorMessage
                name="password2"
                component="div"
                className="error text-red-300 text-left"
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
      <div className="flex flex-col items-center pt-4">
        <Link
          href={"#"}
          className="flex bg-gray-300 w-[380px] h-[40px] rounded-md hover:bg-gray-200"
        >
          <Image
            src={"https://ik.imagekit.io/SolvexCompany/Google.png"}
            width={20}
            height={20}
            alt="Solvex Company"
            className="object-contain ml-3"
          />
          <span className="flex flex-col items-center justify-center w-[300px] h-[40px]">
            Google
          </span>
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
