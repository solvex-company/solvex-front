// --- Definiciones de Tipos (¡Buenas prácticas con TypeScript!) ---
// Para el estado de las incidencias (Pendientes, En Curso, Resueltas)
export interface IncidenceStatus {
  name: string; // Por ejemplo: 'Pendientes'
  value: number; // Por ejemplo: 18
}

// Para el rendimiento de los empleados de soporte
export interface SupportAgentPerformance {
  id: number;
  nombre: string;
  resueltas: number; // Número de incidencias resueltas por el agente
  tiempoPromedio: string; // Tiempo promedio de resolución del agente (ej. '2h 15m')
}

// Interfaz para el conjunto completo de datos del dashboard
export interface MockDashboardData {
  incidenciasPorEstado: IncidenceStatus[];
  empleadosSoporte: SupportAgentPerformance[];
  tiempoPromedioResolucionGlobal: string; // El tiempo promedio para todas las incidencias
  totalIncidencias: number; // El total de todas las incidencias
}

// --- Datos Mockeados ---
// Estos son los datos de ejemplo que usaremos para nuestros gráficos y métricas
const mockDashboardData: MockDashboardData = {
  incidenciasPorEstado: [
    { name: "Pendientes", value: 25 },
    { name: "En Curso", value: 10 },
    { name: "Resueltas", value: 150 },
  ],
  empleadosSoporte: [
    { id: 1, nombre: "Ana García", resueltas: 60, tiempoPromedio: "2h 05m" },
    { id: 2, nombre: "Juan Pérez", resueltas: 55, tiempoPromedio: "2h 30m" },
    { id: 3, nombre: "María López", resueltas: 35, tiempoPromedio: "3h 10m" },
    { id: 4, nombre: "Carlos Ruiz", resueltas: 20, tiempoPromedio: "2h 45m" },
  ],
  tiempoPromedioResolucionGlobal: "2h 30m",
  totalIncidencias: 185, // 25 + 10 + 150
};

// Exportamos los datos para que puedan ser importados en otros componentes
export default mockDashboardData;
