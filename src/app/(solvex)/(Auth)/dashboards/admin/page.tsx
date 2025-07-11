import React from "react";
import AdminInfo from "./components/AdminInfo";
import AdminPassword from "./components/AdminPassword";
import AdminLicense from "./components/AdminLicense";

function AdminDash() {
  return (
    <div className="w-[967px] m-auto">
      <h1>Datos del Usuario</h1>
      <AdminInfo />

      <h2>Cambiar contraseña</h2>
      <AdminPassword />

      <h2>Tu Licencia / Suscripcion</h2>
      <AdminLicense />
    </div>
  );
}

export default AdminDash;
