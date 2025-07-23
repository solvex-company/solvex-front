"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale, // necesario para el eje X
  LinearScale, // necesario para el eje Y
  BarElement, // necesario para dibujar las barras
  Tooltip,
  Legend,
  TooltipItem,
} from "chart.js";

// registrar los elementos necesarios para el grafico
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface SupportAgentPerformance {
  id: number;
  nombre: string;
  resueltas: number;
  tiempoPromedio: string;
}

interface SupportAgentBarChartProps {
  data: SupportAgentPerformance[];
}

const SupportBarChart: React.FC<SupportAgentBarChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map((agent) => agent.nombre),
    datasets: [
      {
        label: "Incidencias Resueltas", // etiqueta de la serie de datos
        data: data.map((agent) => agent.resueltas), // numero de incidencias resueltas para las barras
        backgroundColor: "rgba(54, 162, 235, 0.7)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
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
          label: function (context: TooltipItem<"bar">) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += `${context.parsed.y} incidencias`;
            }
            return label;
          },
        },
      },
    },
    scales: {
      // configuracion específica para los ejes X e Y en el grafico de barras
      x: {
        //  X (categorías)
        grid: {
          display: false, // no mostrar las lineas de la cuadricula en el eje X
        },
        ticks: {
          color: "#666", // Color de las etiquetas del eje X
        },
      },
      y: {
        //Y (valores numericos)
        beginAtZero: true, //  el eje Y comienza en 0
        grid: {
          color: "rgba(0, 0, 0, 0.1)", // color de las líneas de la cuadrícula
        },
        ticks: {
          color: "#666", // color de las etiquetas del eje Y
        },
      },
    },
  };

  // --- Renderizado del Gráfico ---
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full h-80 flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Rendimiento de Empleados de Soporte
      </h2>
      <div className="relative w-full h-64">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default SupportBarChart;
