"use client";

// components/charts/IncidenceDoughnutChart.tsx
import React from "react";
import { Doughnut } from "react-chartjs-2"; // Importamos el componente Doughnut de react-chartjs-2
import {
  Chart as ChartJS, // Renombramos Chart a ChartJS para evitar conflictos
  ArcElement, // Necesario para los segmentos del gráfico de dona/pastel
  Tooltip, // La burbuja de información al pasar el ratón
  Legend, // La leyenda del gráfico
  TooltipItem,
} from "chart.js"; // Importamos los componentes base de Chart.js

// --- Paso CRÍTICO: Registrar los elementos de Chart.js ---
// Debes registrar todos los tipos de gráficos, escalas y elementos que vayas a usar.
// Esto se hace una vez en el punto más alto donde se usen los gráficos.
ChartJS.register(ArcElement, Tooltip, Legend);

// --- Interfaz para los Props ---
// Definimos el tipo de datos que este componente espera recibir.
interface IncidenceStatus {
  name: string;
  value: number;
}

interface IncidenceDoughnutChartProps {
  data: IncidenceStatus[]; // Esperamos un array de objetos con 'name' y 'value'
}

// --- Componente React del Gráfico de Dona ---
const IncidenceDoughnutChart: React.FC<IncidenceDoughnutChartProps> = ({
  data,
}) => {
  // --- Transformación de Datos para Chart.js ---
  // Chart.js necesita los datos en un formato específico (labels y datasets).
  const chartData = {
    labels: data.map((item) => item.name), // Extraemos los nombres (ej. 'Pendientes') para las etiquetas
    datasets: [
      {
        label: "Número de Incidencias", // Etiqueta que aparecerá en la leyenda y el tooltip
        data: data.map((item) => item.value), // Extraemos los valores numéricos
        backgroundColor: [
          // Colores de fondo para cada segmento del dona
          "rgba(255, 99, 132, 0.7)", // Rojo claro para Pendientes
          "rgba(255, 206, 86, 0.7)", // Amarillo claro para En Curso
          "rgba(75, 192, 192, 0.7)", // Verde claro para Resueltas
        ],
        borderColor: [
          // Colores del borde de cada segmento
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1, // Ancho del borde
      },
    ],
  };

  // --- Opciones de Configuración del Gráfico ---
  // Aquí puedes personalizar el comportamiento y la apariencia del gráfico.
  const chartOptions = {
    responsive: true, // El gráfico se adaptará al tamaño de su contenedor padre
    maintainAspectRatio: false, // Permite que el contenedor controle el aspecto del gráfico (no forzar 1:1)
    plugins: {
      legend: {
        position: "top" as const, // Posición de la leyenda (puede ser 'top', 'bottom', 'left', 'right')
        labels: {
          font: {
            size: 14, // Tamaño de la fuente de la leyenda
            weight: "bold" as const, // Peso de la fuente
          },
          color: "#333", // Color del texto de la leyenda
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<"doughnut">) {
            // Función para personalizar el texto del tooltip
            let label = context.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed !== null) {
              label += `${context.parsed} incidencias`; // Mostrar el valor y la unidad
            }
            return label;
          },
        },
      },
    },
  };

  // --- Renderizado del Gráfico ---
  return (
    // Contenedor principal del componente con estilos Tailwind
    <div className="bg-white p-6 rounded-lg shadow-md w-full h-80 flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Estado de Incidencias
      </h2>
      {/* Contenedor con altura y ancho específicos para que el gráfico sea responsivo */}
      {/* Es importante dar un tamaño a este div para que 'responsive: true' funcione */}
      <div className="relative w-full h-64">
        <Doughnut data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default IncidenceDoughnutChart;
