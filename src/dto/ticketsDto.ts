export interface ITicketsDto {
  id_ticket: number;
  title: string;
  description: string;
  creation_date: string;
  closing_date: null;
  img_1: string;
  id_status: {
    id_status: number;
    name: string;
  };
  id_empleado: {
    id_user: string;
    name: string;
    lastname: string;
    identification_number: string;
    phone: string;
  };
  area: {
    id_area: number;
    name: string;
  };
}
