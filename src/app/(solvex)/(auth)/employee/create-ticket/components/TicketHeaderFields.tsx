"use client";

import React from "react";
import { useFormikContext } from "formik";
import { TicketFormValues } from "@/types/ITickets";

function TicketHeaderFields() {
  const { values, handleChange } = useFormikContext<TicketFormValues>();

  return (
    <div className="flex gap-4 items-center justify-between">
      <div className="flex flex-col w-[112px] ">
        <label htmlFor="codigo">Código</label>
        <input
          name="codigo"
          id="codigo"
          value={values.codigo}
          disabled
          className="border border-accent rounded-md p-2 h-[45px] w-full bg-white cursor-not-allowed"
        />
      </div>
      <div className="flex flex-col w-[588px]">
        <label htmlFor="area">Área de la que se genera el ticket</label>
        <select
          name="area"
          id="area"
          value={values.area}
          onChange={handleChange}
          className="bg-mainBg border border-accent rounded-md p-2 h-[45px] w-full"
        >
          <option value="TI">Tecnologia</option>
          <option value="RRHH">Recursos Humanos</option>
          <option value="Finanzas">Finanzas</option>
        </select>
      </div>
      <div className="flex flex-col w-[235px]">
        <label htmlFor="fecha">Fecha de creacion</label>
        <input
          type="date"
          name="fecha"
          id="fecha"
          value={values.fecha}
          disabled
          className="border border-accent rounded-md p-2 h-[45px] w-full bg-white cursor-not-allowed"
        />
      </div>
    </div>
  );
}

export default TicketHeaderFields;
