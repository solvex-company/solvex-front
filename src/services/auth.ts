'use server';

import axios from 'axios';
import { FormikValues } from 'formik';

const axiosApiBack = axios.create({
    baseURL: process.env.API_URL,//localhost:4000
});

export const postRegister = async (data: FormikValues) => {
  console.log(data);
    try {
       const res = await axiosApiBack.post('/auth/signup', data);

       if (!res.data) {
            return{
                message: 'Error al registrar al usuario',
                errors: res.data,
            };
       }
       return {
        message: 'Usuario registrado correctamente',
       };
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.warn('Error al hacer el post de registro', error.message); // Error es seguro aquí
        } 
        return{
            message: 'Error al registrar al usuario',
            errors: (error as Error).message || 'Error desconocido',
        };
    }
}

