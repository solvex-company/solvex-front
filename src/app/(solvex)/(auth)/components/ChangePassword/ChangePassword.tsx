import React from "react";
import { adminData } from "@/helpers/usersData";
import ChangePassForm from "./ChangePassForm/ChangePassForm";

function ChangePassword() {
  return (
    <section className="py-5">
      <div>
        <h2>Contraseña actual</h2>
        <h3 className="border border-accent rounded-lg w-[480px] p-1">{adminData.password}</h3>
        <ChangePassForm />
      </div>
    </section>
  );
}

export default ChangePassword;
