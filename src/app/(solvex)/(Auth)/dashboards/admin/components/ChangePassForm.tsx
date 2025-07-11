"use client";

import React from "react";
import { useState } from "react";

interface FormData {
  newPassword: string;
  confirmPassword: string;
}

interface FormErrors {
  newPassword?: string;
  confirmPassword?: string;
}

const ChangePassForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpiar errores cuando el usuario empieza a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.newPassword) {
      newErrors.newPassword = "La contraseña es requerida";
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = "La contraseña debe tener al menos 8 caracteres";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirma tu contraseña";
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas deben coincidir";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    console.log("Formulario enviado:", formData);

    // Simular envío
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Contraseña cambiada exitosamente");
    }, 1000);
  };

  return (
    <section className="text-mainText pt-5">
      <div className="flex gap-3">
        <div className="w-full">
          <label className="">Nueva contraseña</label>
          <input
            type="password"
            name="newPassword"
            placeholder="Escribe tu nueva contraseña aqui"
            value={formData.newPassword}
            onChange={handleInputChange}
            className="border border-accent bg-mainBg rounded-lg w-full p-1"
          />
          {errors.newPassword && <div className="text-red-500 text-sm mt-1">{errors.newPassword}</div>}
        </div>

        <div className="w-full">
          <label className="">Repetir Contraseña</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Repite tu contraseña para confirmar"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="border border-accent bg-mainBg rounded-lg w-full p-1"
          />
          {errors.confirmPassword && <div className="text-red-500 text-sm mt-1">{errors.confirmPassword}</div>}
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-[279px] h-[40px] bg-accent text-2xl text-white rounded-lg"
        >
          {isSubmitting ? "Cambiando..." : "Cambiar contraseña"}
        </button>
      </div>
    </section>
  );
};

export default ChangePassForm;
