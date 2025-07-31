import React from "react";
import AdminInfo from "../../components/InfoDashboard/InfoDashboard";
import ChangePasswordComponentForm from "@/app/components/ChangePasswordComponent/ChangePasswordComponent";

function AdminDash() {
  return (
    <div>
      <h2 className="text-3xl font-bold pt-5 underline">Datos del Usuario</h2>
      <AdminInfo />

      <h3 className="text-2xl font-bold pt-5">Cambiar contraseña</h3>
      <ChangePasswordComponentForm />
    </div>
  );
}

export default AdminDash;
