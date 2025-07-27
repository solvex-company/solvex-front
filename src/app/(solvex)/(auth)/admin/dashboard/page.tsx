import React from "react";
import AdminInfo from "../../components/InfoDashboard/InfoDashboard";
import ChangePasswordComponentForm from "@/app/components/ChangePasswordComponent/ChangePasswordComponent";
import AdminLicense from "./components/AdminLicense";

function AdminDash() {
  return (
    <div>
      <h2 className="text-3xl font-bold pt-5 underline">Datos del Usuario</h2>
      <AdminInfo />

      <h3 className="text-2xl font-bold pt-5">Cambiar contraseña</h3>
      <ChangePasswordComponentForm />

      <h2 className="text-2xl font-bold pt-5">Tu plan de Solvex</h2>
      <AdminLicense />
    </div>
  );
}

export default AdminDash;
