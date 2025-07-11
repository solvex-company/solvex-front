import React from "react";
import AdminInfo from "./components/AdminInfo";
import AdminPassword from "./components/AdminPassword";
import AdminLicense from "./components/AdminLicense";

function AdminDash() {
  return (
    <div className="w-[967px] m-auto py-10">
      <h2 className="text-3xl font-bold">Datos del Usuario</h2>
      <AdminInfo />

      <h3 className="text-2xl font-bold pt-5">Cambiar contraseña</h3>
      <AdminPassword />

      <h2 className="text-3xl font-bold pt-5">Tu Licencia / Suscripcion</h2>
      <AdminLicense />
    </div>
  );
}

export default AdminDash;
