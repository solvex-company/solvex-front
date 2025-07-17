export interface TicketFormValues {
  codigo: string;
  area: string;
  fecha: string;
  titulo: string;
  descripcion: string;
}

export interface ImageUploadProps {
  images: File[];
  setImages: (images: File[]) => void;
}
