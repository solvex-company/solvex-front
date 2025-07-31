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

/**
 {
    "incidenciasPorEstado": [
        {
            "name": "Pendientes",
            "value": 2
        },
        {
            "name": "En Progreso",
            "value": 0
        },
        {
            "name": "Completados",
            "value": 0
        }
    ],
    "empleadosSoporte": [
        {
            "id": "64a1dcee-3430-4bcf-9db9-162d2decffac",
            "nombre": "Soporte Técnico"
        },
        {
            "id": "0bf77fbd-627b-48e0-a247-fa8e837491cc",
            "nombre": "John Smith"
        },
        {
            "id": "eec0e40e-d6f9-43c2-86c9-6d5f488bea4d",
            "nombre": "Emily Johnson"
        },
        {
            "id": "f484b744-9a6f-4b4a-bcfe-6f5f4d6514d9",
            "nombre": "Michael Williams"
        },
        {
            "id": "a8372707-d689-4c5c-b253-dc95c42be429",
            "nombre": "Sarah Brown"
        },
        {
            "id": "719f1a05-301c-4460-be0f-366ca3d381cf",
            "nombre": "David Jones"
        }
    ],
    "totalIncidencias": 2
}
 */
