"use client";

import React, { useState, useEffect } from "react";
import { useFormikContext } from "formik";
import { getAreaTicket } from "@/services/tickets";

import { TicketFormValues } from "@/types/ITickets";
import { Area } from "@/types/ITickets";
import { useAuthContext } from "@/context/AuthContext";

function TicketHeaderFields() {
  const { values, setFieldValue, touched, errors } =
    useFormikContext<TicketFormValues>();
  const [areas, setAreas] = useState<Area[]>([]);
  const { token } = useAuthContext();

  useEffect(() => {
    const fetchAreas = async () => {
      if (!token) {
        return;
      }

      try {
        const areasData = await getAreaTicket(token);

        if (Array.isArray(areasData)) {
          setAreas(areasData);
        } else {
          setAreas([]);
        }
      } catch (error) {
        if (error) throw new Error("Hubo un error aqui");
        setAreas([]);
      }
    };

    fetchAreas();
  }, [token]);

  const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAreaId = parseInt(e.target.value);
    if (selectedAreaId) {
      const selectedArea = areas.find(
        (area) => area.id_area === selectedAreaId
      );
      if (selectedArea) {
        setFieldValue("area", selectedArea);
      }
    } else {
      setFieldValue("area", null);
    }
  };

  return (
    <div className="flex gap-4 items-start justify-between">
      <div className="flex flex-col w-[588px]">
        <label htmlFor="area">Área de la que se genera el ticket</label>
        <select
          name="area"
          id="area"
          value={
            values.area && typeof values.area === "object"
              ? values.area.id_area
              : values.area || ""
          }
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
        <div className="min-h">
          {touched.area && errors.area && (
            <p className="text-red-500 text-lg">{errors.area}</p>
          )}
        </div>
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
