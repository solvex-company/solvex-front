"use client";

import React from "react";
import { useState } from "react";

// icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

//hooks
import { useChangePassword } from "@/hooks/useChangePassword";
import { useAuthContext } from "@/context/AuthContext";

// dto
import { ChangePasswordPayload } from "@/services/changePasswordServices";

interface FormData {
  oldPassword: string;
  newPassword: string;
  newPassword2: string;
}

interface FormErrors {
  oldPassword?: string;
  newPassword?: string;
  newPassword2?: string;
}

const ChangePasswordComponentForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    oldPassword: "",
    newPassword: "",
    newPassword2: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // estados para mostrar/ocultar contraseñas
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewPassword2, setShowNewPassword2] = useState(false);

  const toggleShowOldPassword = () => setShowOldPassword((prev) => !prev);
  const toggleShowNewPassword = () => setShowNewPassword((prev) => !prev);
  const toggleShowNewPassword2 = () => setShowNewPassword2((prev) => !prev);

  // Obtener el usuario del contexto de autenticación para pasar ID
  const { user } = useAuthContext();
  const { mutate, isPending } = useChangePassword();

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
        [name]: null,
      }));
    }
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.oldPassword.trim()) {
      newErrors.oldPassword = "La contraseña actual es requerida";
    }

    if (!formData.newPassword.trim()) {
      newErrors.newPassword = "La nueva contraseña es requerida";
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword =
        "La nueva contraseña debe tener al menos 8 caracteres";
    }

    if (!formData.newPassword2.trim()) {
      newErrors.newPassword2 = "Confirma tu contraseña";
    } else if (formData.newPassword !== formData.newPassword2) {
      newErrors.newPassword2 = "Las contraseñas deben coincidir";
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

    // preparar datos para enviar
    const payLoad: ChangePasswordPayload = {
      oldPassword: formData.oldPassword,
      newPassword: formData.newPassword,
      newPassword2: formData.newPassword2,
    };

    if (!user?.id_user) {
      console.error("No se encontró el ID del usuario");
      return;
    }

    // llamar al hook de cambio de contraseña
    mutate({ userId: user.id_user, data: payLoad });
  };

  return (
    <section className="text-mainText pt-5">
      <div className="w-1/2 mb-3 ">
        <label htmlFor="oldPassword">
          Contraseña actual
          <div className="relative flex items-center justify-center border border-accent bg-mainBg rounded-lg w-full p-1">
            <input
              type={showOldPassword ? "text" : "password"}
              name="oldPassword"
              placeholder="Escribe tu contraseña actual aqui"
              value={formData.oldPassword}
              onChange={handleInputChange}
              className=" bg-mainBg w-full outline-none"
              id="oldPassword"
            />
            <span
              className="cursor-pointer mr-2"
              onClick={toggleShowOldPassword}
            >
              {showOldPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </div>
        </label>

        {errors.oldPassword && (
          <div className="text-red-500 text-sm mt-1">{errors.oldPassword}</div>
        )}
      </div>

      <div className="flex gap-3">
        <div className="w-1/2">
          <label htmlFor="newPassword">
            Nueva contraseña
            <div className="flex items-center justify-center border border-accent bg-mainBg rounded-lg w-full p-1">
              <input
                type={showNewPassword ? "text" : "password"}
                name="newPassword"
                placeholder="Escribe tu nueva contraseña aqui"
                value={formData.newPassword}
                onChange={handleInputChange}
                className=" bg-mainBg  w-full outline-none"
                id="newPassword"
              />
              <span
                className="cursor-pointer mr-2"
                onClick={toggleShowNewPassword}
              >
                {showNewPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </span>
            </div>
          </label>

          {errors.newPassword && (
            <div className="text-red-500 text-sm mt-1">
              {errors.newPassword}
            </div>
          )}
        </div>

        <div className="w-1/2">
          <label htmlFor="newPassword2">Repetir Contraseña</label>
          <div className="flex items-center justify-center border border-accent bg-mainBg rounded-lg w-full p-1">
            <input
              type={showNewPassword2 ? "text" : "password"}
              name="newPassword2"
              placeholder="Repite tu contraseña para confirmar"
              value={formData.newPassword2}
              onChange={handleInputChange}
              className="  bg-mainBg w-full outline-none"
              id="newPassword2"
            />
            <span
              className="cursor-pointer mr-2"
              onClick={toggleShowNewPassword2}
            >
              {showNewPassword2 ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </div>

          {errors.newPassword2 && (
            <div className="text-red-500 text-sm mt-1">
              {errors.newPassword2}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end pt-3">
        <button
          onClick={handleSubmit}
          disabled={isPending}
          className="w-[279px] h-[40px] bg-accent text-2xl text-white rounded-lg hover:bg-secondBg transition duration-300"
        >
          {isPending ? "Cambiando..." : "Cambiar contraseña"}
        </button>
      </div>
    </section>
  );
};

export default ChangePasswordComponentForm;
