"use client";

// components/charts/SupportAgentBarChart.tsx
import React from "react";
import { Bar } from "react-chartjs-2"; // Importamos el componente Bar de react-chartjs-2
import {
  Chart as ChartJS,
  CategoryScale, // Necesario para el eje X (categorías como nombres de agentes)
  LinearScale, // Necesario para el eje Y (valores numéricos como cantidad de resueltas)
  BarElement, // Necesario para dibujar las barras
  Tooltip,
  Legend,
  TooltipItem,
} from "chart.js";

// --- Paso CRÍTICO: Registrar los elementos necesarios para un gráfico de barras ---
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// --- Interfaz para los Props ---
interface SupportAgentPerformance {
  id: number;
  nombre: string;
  resueltas: number;
  tiempoPromedio: string;
}

interface SupportAgentBarChartProps {
  data: SupportAgentPerformance[]; // Esperamos un array de agentes de soporte
}

// --- Componente React del Gráfico de Barras ---
const SupportBarChart: React.FC<SupportAgentBarChartProps> = ({ data }) => {
  // --- Transformación de Datos para Chart.js ---
  const chartData = {
    labels: data.map((agent) => agent.nombre), // Nombres de los agentes para el eje X
    datasets: [
      {
        label: "Incidencias Resueltas", // Etiqueta de la serie de datos
        data: data.map((agent) => agent.resueltas), // Número de incidencias resueltas para las barras
        backgroundColor: "rgba(54, 162, 235, 0.7)", // Color de las barras (azul claro)
        borderColor: "rgba(54, 162, 235, 1)", // Color del borde de las barras
        borderWidth: 1,
      },
    ],
  };

  // --- Opciones de Configuración del Gráfico ---
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
      // Configuración específica para los ejes X e Y en un gráfico de barras
      x: {
        // Eje X (categorías)
        grid: {
          display: false, // No mostrar las líneas de la cuadrícula en el eje X
        },
        ticks: {
          color: "#666", // Color de las etiquetas del eje X
        },
      },
      y: {
        // Eje Y (valores numéricos)
        beginAtZero: true, // Asegura que el eje Y comience en 0
        grid: {
          color: "rgba(0, 0, 0, 0.1)", // Color de las líneas de la cuadrícula
        },
        ticks: {
          color: "#666", // Color de las etiquetas del eje Y
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
