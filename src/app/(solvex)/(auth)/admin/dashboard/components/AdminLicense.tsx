import React from "react";
import { adminData } from "@/helpers/usersData";

function AdminLicense() {
  return (
    <section className=" ">
      <div className="flex items-center justify-between border border-resolved border-l-[30px] w-[967px] h-[78px] rounded-lg p-5 mt-5 m-auto">
        <h3 className="text-4xl font-bold text-mainText">Plan {adminData.license}</h3>
        <h4 className="text-3xl text-secondText">Quedan 300 dias</h4>
      </div>
    </section>
  );
}

export default AdminLicense;
