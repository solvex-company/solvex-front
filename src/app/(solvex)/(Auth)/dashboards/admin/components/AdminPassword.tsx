import React from "react";
import { adminData } from "@/helpers/usersData";
import ChangePassForm from "./ChangePassForm";

function AdminPassword() {
  return (
    <section className="py-5">
      <div>
        <h2>Constraseña actual</h2>
        <h3 className="border border-accent rounded-lg w-[480px] p-1">{adminData.password}</h3>
        <ChangePassForm />
      </div>
    </section>
  );
}

export default AdminPassword;
