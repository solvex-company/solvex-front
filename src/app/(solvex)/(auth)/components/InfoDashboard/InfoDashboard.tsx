"use client";
import React from "react";
import { adminData } from "@/helpers/usersData";
import { useAuthContext } from "@/context/AuthContext";

function InfoDashboard() {
  const { user } = useAuthContext();
  const fullName = user?.name ? `${user.name} ${user.lastname}` : `Nombre del usuario`;
  return (
    <section className="grid grid-cols-2 justify-center items-center w-full gap-3 py-6">
      <div>
        <h2>Nombre</h2>
        <h3 className="border border-accent rounded-lg p-1">{fullName}</h3>
      </div>
      <div>
        <h2>Correo</h2>
        <h3 className="border border-accent rounded-lg p-1">
          {user ? user.email: `Correo del usuario`}
        </h3>
      </div>
      <div>
        <h2>Numero de identificacion (DNI)</h2>
        <h3 className="border border-accent rounded-lg p-1">
          {user?.identification_number ? user.identification_number : `Numero de identificacion del usuario`}
        </h3>
      </div>
      <div>
        <h2>Numero de Telefono</h2>
        <h3 className="border border-accent rounded-lg p-1">
          {user?.phone ? user.phone : `Numero de telefono del usuario`}
        </h3>
      </div>
    </section>
  );
}

export default InfoDashboard;
