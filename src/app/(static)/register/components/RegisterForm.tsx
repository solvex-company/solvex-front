'use client';

import Image from "next/image";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { postRegister } from "@/services/auth";

const RegisterForm: React.FC = () => {
    const validationSchema = Yup.object().shape({
      email: Yup.string().email('Email inválido').required('Campo requerido'),
    });

    return(
      <div className=" w-full">
        <Formik
          initialValues={{email: ''}}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
            postRegister(values);
          }}
        >
        {({ isSubmitting }) => (
          <Form noValidate>
            <div className="flex flex-col items-center">
                <Field 
                    name="first_name"
                    type="text"
                    className="mb-3 p-1 pl-4 bg-inputBg w-[380px] h-[40px] rounded-md placeholder-gray-600"
                    placeholder="Nombre"
                    />
                <ErrorMessage name="first_name" component="div" className="error text-red-300 text-left" />
            </div>
            
            <div className="flex flex-col items-center">
                <Field 
                    name="first_surname"
                    type="text"
                    className="mb-3 p-1 pl-4 bg-inputBg w-[380px] h-[40px] rounded-md placeholder-gray-600"
                    placeholder="Apellido"
                    />
                <ErrorMessage name="first_surname" component="div" className="error text-red-300 text-left" />
            </div>
            <div className="flex flex-col items-center">
                <Field 
                    name="typeId"
                    as="select"
                    className="mb-3 p-1 pl-4 bg-inputBg w-[380px] h-[40px] rounded-md placeholder-gray-600"
                >
                  <option value="">Tipo de Identificación</option>
                  <option value="1">CC</option>
                  <option value="2">DNI</option>
                  <option value="3">Pasaporte</option>
                </Field>
                <ErrorMessage name="typeId" component="div" className="error text-red-300 text-left" />
            </div>
            <div className="flex flex-col items-center">
                <Field 
                    name="identification_number"
                    type="number"
                    className="mb-3 p-1 pl-4 bg-inputBg w-[380px] h-[40px] rounded-md placeholder-gray-600"
                    placeholder="Número de Identificación"
                    />
                <ErrorMessage name="identification_number" component="div" className="error text-red-300 text-left" />
            </div>
            <div className="flex flex-col items-center">
                <Field 
                    name="phone"
                    type="number"
                    className="mb-3 p-1 pl-4 bg-inputBg w-[380px] h-[40px] rounded-md placeholder-gray-600"
                    placeholder="Telefono"
                    />
                <ErrorMessage name="phone" component="div" className="error text-red-300 text-left" />
            </div>
            <div className="flex flex-col items-center">
                <Field 
                    name="email"
                    type="email"
                    className="mb-3 p-1 pl-4 bg-inputBg w-[380px] h-[40px] rounded-md placeholder-gray-600"
                    placeholder="Correo Ej: ejemplo@mail.com"
                    />
                <ErrorMessage name="email" component="div" className="error text-red-300 text-left" />
            </div>
            <div className="flex flex-col items-center">
                <Field 
                    name="password"
                    type="password"
                    className="mb-3 p-1 pl-4 bg-inputBg w-[380px] h-[40px] rounded-md placeholder-gray-600"
                    placeholder="Contraseña"
                    />
                <ErrorMessage name="password" component="div" className="error text-red-300 text-left" />
            </div>
            <div className="flex flex-col items-center">
                <Field 
                    name="password"
                    type="password"
                    className="mb-3 p-1 pl-4 bg-inputBg w-[380px] h-[40px] rounded-md placeholder-gray-600"
                    placeholder="Repite tu contraseña"
                    />
                <ErrorMessage name="password" component="div" className="error text-red-300 text-left" />
            </div>
            
            <div className="flex flex-col items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-3 p-1 bg-black w-[380px] h-[40px] rounded-md text-md text-mainBg hover:bg-secondText"
                >
                  Registrarse
                </button>
            </div>
            <div className="flex flex-col items-center pt-4">
                <p>¿Ya tienes cuenta? <Link className="text-blue-500 hover:text-blue-800" href='/login'>Inicia sesión</Link> </p>
            </div>
          </Form>
          )}
        </Formik>
          <div className="flex flex-col items-center pt-4">
              <p className="text-gray-400">———————— o continuar con ————————</p>
          </div>
          <div className="flex flex-col items-center pt-4">
            <Link 
              href={'#'}
              className="flex bg-gray-300 w-[380px] h-[40px] rounded-md hover:bg-gray-200">
              <Image 
                src={'https://ik.imagekit.io/SolvexCompany/Google.png'} 
                width={20} 
                height={20} 
                alt='Solvex Company'
                className="object-contain ml-3"
              />
              <span className="flex flex-col items-center justify-center w-[300px] h-[40px]">Google</span>
            </Link>
          </div>
      </div>
    )
}

export default RegisterForm;