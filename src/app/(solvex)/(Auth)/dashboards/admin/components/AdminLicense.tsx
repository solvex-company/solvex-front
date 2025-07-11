import React from "react";
import { adminData } from "@/helpers/usersData";

function AdminLicense() {
  return (
    <section className="flex items-center justify-between border border-resolved border-l-[30px] w-[967px] h-[78px] rounded-lg p-5 my-10 m-auto ">
      <h3 className="text-4xl font-bold">Plan {adminData.license}</h3>
      <h4 className="text-3xl">Quedan 300 dias</h4>
    </section>
  );
}

export default AdminLicense;
