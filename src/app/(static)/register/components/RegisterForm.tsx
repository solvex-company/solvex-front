'use client';

import Image from "next/image";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegisterForm: React.FC = () => {
    const validationSchema = Yup.object().shape({
      email: Yup.string().email('* Email inválido').required('* Requerido'),
    });

    return(
      <div className=" w-full">
        <Formik
          initialValues={{email: ''}}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
        >
        {({ isSubmitting }) => (
          <Form noValidate>
            <div className="flex flex-col items-center">
                <Field 
                    name="email"
                    type="email"
                    className="p-1 pl-4 bg-inputBg w-[380px] h-[40px] rounded-md placeholder-gray-600"
                    placeholder="Ej: ejemplo@mail.com"
                    />
                <ErrorMessage name="email" component="div" className="error text-red-300 text-left" />
            </div>
            <div className="flex flex-col items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-3 p-1 bg-black w-[380px] h-[40px] rounded-md text-sm text-mainBg hover:bg-secondText">Registrarse con correo electrónico
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