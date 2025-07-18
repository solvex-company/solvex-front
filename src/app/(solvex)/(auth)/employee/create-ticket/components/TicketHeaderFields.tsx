"use client";

import React, { useState, useEffect } from "react";
import { useFormikContext } from "formik";
import { getAreaTicket } from "@/services/tickets";

import { TicketFormValues } from "@/types/ITickets";
import { Area } from "@/types/ITickets";

function TicketHeaderFields() {
  const { values, setFieldValue } = useFormikContext<TicketFormValues>();
  const [areas, setAreas] = useState<Area[]>([]);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const areasData = await getAreaTicket();

        // Verificar si es un array (respuesta exitosa)
        if (Array.isArray(areasData)) {
          setAreas(areasData);
        } else {
          // Es un objeto de error
          console.error("Error al obtener áreas:", areasData.message);
          setAreas([]); // Establecer array vacío
        }
      } catch (error) {
        console.error("Error fetching areas:", error);
        setAreas([]); // Establecer array vacío
      }
    };

    fetchAreas();
  }, []);

  const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAreaId = parseInt(e.target.value);
    if (selectedAreaId) {
      const selectedArea = areas.find((area) => area.id_area === selectedAreaId);
      if (selectedArea) {
        setFieldValue("area", selectedArea);
      }
    } else {
      setFieldValue("area", null);
    }
  };

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
          value={values.area && typeof values.area === "object" ? values.area.id_area : values.area || ""}
          onChange={handleAreaChange}
          className="bg-mainBg border border-accent rounded-md p-2 h-[45px] w-full"
        >
          <option value="">Seleccione un área</option>
          {areas.map((area: Area) => (
            <option key={area.id_area} value={area.id_area}>
              {area.name}
            </option>
          ))}
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
