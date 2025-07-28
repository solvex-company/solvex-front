export interface TicketFormValues {
  area: Area | null;
  fecha: string;
  titulo: string;
  descripcion: string;
}

export interface ImageUploadProps {
  images: File[];
  setImages: (images: File[]) => void;
}

export interface Employee {
  id_user: string;
  name: string;
  lastname: string;
}

export interface TicketStatus {
  id_status: number;
  name: string;
}
export interface Area {
  id_area: number;
  name: string;
}

export interface IDetailTicket {
  id_ticket: string;
  area: Area;
  title: string;
  description: string;
  img_1?: string;
  img_2?: string;
  img_3?: string;
  creation_date: string;
  id_status: TicketStatus;
  id_empleado: Employee;
  id_resolution_ticket?: number;
}

export interface TicketResponseData {
  id_ticket: string;
  response: string;
  ticketStatus: string;
  helperEmail: string;
}

export interface TicketResolutionData {
  id_resolution_ticket: number;
  response: string;
  date: string;
  id_helper: {
    id_user: string;
    name: string;
    lastname: string;
    identification_number: string;
    phone: string;
  };
}
