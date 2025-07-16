'use client';
import React from "react";
import { adminData } from "@/helpers/usersData";
import { useAuthContext } from "@/context/authContext";

function InfoDashboard() {
  const { user } = useAuthContext();
  const fullName = user && `${user.name} ${user.lastname}`;
  return (
    <section className="grid grid-cols-2 justify-center items-center w-full gap-3 py-6">
      <div>
        <h2>Nombre</h2>
        <h3 className="border border-accent rounded-lg p-1">
          {fullName}
        </h3>
      </div>
      <div>
        <h2>Correo</h2>
        <h3 className="border border-accent rounded-lg p-1">
          {user && user.email}
        </h3>
      </div>
      <div>
        <h2>Numero de identificacion (DNI)</h2>
        <h3 className="border border-accent rounded-lg p-1">
          {user && user.identification_number}
        </h3>
      </div>
      <div>
        <h2>Numero de Telefono</h2>
        <h3 className="border border-accent rounded-lg p-1">
          {user && user.phone}
        </h3>
      </div>
    </section>
  );
}

export default InfoDashboard;
