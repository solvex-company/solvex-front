"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS, // renombrar chart a chartJS para evitar conflictos
  ArcElement, // necesario para los segmentos del grafico de torta
  Tooltip, // burbuja de información al pasar el ratón
  Legend, // leyenda del gráfico
  TooltipItem,
} from "chart.js";

// registrar los elementos de chartjs
// registrar todos los tipos de gráficos, escalas y elementos que se usen
ChartJS.register(ArcElement, Tooltip, Legend);

interface IncidenceStatus {
  name: string;
  value: number;
}

interface IncidenceDoughnutChartProps {
  data: IncidenceStatus[];
}

const IncidenceDoughnutChart: React.FC<IncidenceDoughnutChartProps> = ({
  data,
}) => {
  // transfor datos para chart.js
  // chart.js necesita los datos en un formato específico (labels y datasets)
  const chartData = {
    labels: data.map((item) => item.name), // nombres (ej. 'Pendientes') para las etiquetas
    datasets: [
      {
        label: "Número de Incidencias", // etiqueta de la leyenda y el tooltip
        data: data.map((item) => item.value), // valores numéricos
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  // Se puede personalizar el comportamiento y la apariencia del grafico.
  const chartOptions = {
    responsive: true, // al grafico se adapta al tamaño de su contenedor padre
    maintainAspectRatio: false, // permite que el contenedor controle el aspecto del grafico (no forzar 1:1)
    plugins: {
      legend: {
        position: "top" as const, // posicion de la leyenda
        labels: {
          font: {
            size: 14,
            weight: "bold" as const,
          },
          color: "#333",
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<"doughnut">) {
            // Funcion para personalizar el texto del tooltip
            let label = context.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed !== null) {
              label += `${context.parsed} incidencias`; // mostrar el valor y la unidad
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full h-80 flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Estado de Incidencias
      </h2>

      <div className="relative w-full h-64">
        <Doughnut data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default IncidenceDoughnutChart;
