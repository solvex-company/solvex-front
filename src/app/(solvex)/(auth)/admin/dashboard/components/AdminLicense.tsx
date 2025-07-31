import React from "react";
import { adminData } from "@/helpers/usersData";

function AdminLicense() {
  return (
    <section>
      <div className="flex items-center justify-between border border-accent border-l-[30px] h-[78px] rounded-lg p-5 mt-5 m-auto">
        <h3 className="text-3xl font-bold text-mainText">Plan {adminData.license}</h3>
      </div>
    </section>
  );
}

export default AdminLicense;
