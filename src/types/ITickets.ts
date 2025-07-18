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
