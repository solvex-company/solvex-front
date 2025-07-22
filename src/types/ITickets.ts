export interface Area {
  id_area: number;
  name: string;
}
export interface TicketFormValues {
  codigo: string;
  area: Area | null;
  fecha: string;
  titulo: string;
  descripcion: string;
}

export interface ImageUploadProps {
  images: File[];
  setImages: (images: File[]) => void;
}

export interface IDetailTicket {
  id_ticket: string;
  estado?: string; // Opcional porque no viene en la respuesta
  title: string;
  description: string;
  img_1?: string;
  img_2?: string;
  img_3?: string;
  creation_date: string;
  empleado?: string; // Opcional porque no viene en la respuesta
}
