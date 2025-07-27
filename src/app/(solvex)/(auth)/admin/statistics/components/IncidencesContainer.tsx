"use client";

// helper
import mockDashboardData from "./mockStats";
import useStatistics from "@/hooks/useStatistics";

// components
import IncidenceDoughnutChart from "./chart/IncidenceDoughnutChart";
import SupportBarChart from "./chart/SupportBarChart";
import Loader from "@/app/components/Loader/Loader";

const IncidencesContainer: React.FC = () => {
  const { data, isLoading, error } = useStatistics();

  // desestructuramos los datos que necesitamos de nuestro useStatistics hook
  const { empleadosSoporte } = mockDashboardData;

  if (!data) return <div>No hay datos disponibles</div>;

  if (isLoading) return <Loader />;

  if (error) return <div>¡Hubo un error al cargar las estadísticas!</div>;

  return (
    // Contenedor principal de la página con estilos Tailwind
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Panel de Administración de Incidencias
      </h1>

      {/* Tarjeta de Resumen de Métricas Clave */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          Métricas Clave
        </h2>
        <p className="text-lg text-gray-700">
          Total de Incidencias:{" "}
          <span className="font-bold text-blue-600">
            {data.totalIncidencias}
          </span>
        </p>
      </div>

      {/* Contenedor para los gráficos, usando grid para un diseño responsivo */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Renderizamos el gráfico de dona, pasándole solo los datos necesarios */}
        <IncidenceDoughnutChart data={data.incidenciasPorEstado} />

        {/* Renderizamos el gráfico de barras, pasándole los datos de rendimiento de agentes */}
        <SupportBarChart data={empleadosSoporte} />
      </div>
    </div>
  );
};

export default IncidencesContainer;
