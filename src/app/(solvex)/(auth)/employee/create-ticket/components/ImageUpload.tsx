"use client";
import { ImageUploadProps } from "@/types/ITickets";
import Image from "next/image";
import { useRef } from "react";

export default function ImageUpload({ images, setImages }: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const fileArray = Array.from(files); // Máximo 3 imágenes
    const combined = [...images, ...fileArray].slice(0, 3); // Usar directamente el estado actual
    setImages(combined);
  };

  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">Imágenes adjuntas (max 3)</label>

      {/* Vista previa de imagen */}
      {images.length > 0 ? (
        <div className="flex flex-wrap justify-center items-center border border-accent rounded-md bg-mainBg min-h-[150px] gap-4 mt-4">
          {images.map((img, i) => (
            <Image
              key={i}
              src={URL.createObjectURL(img)}
              alt={`preview-${i}`}
              width={300}
              height={300}
              className=" object-cover rounded border"
            />
          ))}
        </div>
      ) : (
        <div className="border border-accent rounded-md bg-mainBg p-3 text-gray-400">No hay imagenes adjuntadas </div>
      )}

      {/* Botón para seleccionar archivos */}
      <div className="mt-2">
        <label
          htmlFor="fileInput"
          className="block w-full text-center bg-gray-500 text-white py-2 rounded cursor-pointer hover:bg-gray-600"
        >
          Adjuntar Imagen
        </label>
        <input
          id="fileInput"
          ref={inputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
}
