export interface IStatisticsDto {
  incidenciasPorEstado: [
    {
      name: string;
      value: number;
    }
  ];
  empleadosSoporte: [
    {
      id: string;
      nombre: string;
    }
  ];
  totalIncidencias: number;
}
