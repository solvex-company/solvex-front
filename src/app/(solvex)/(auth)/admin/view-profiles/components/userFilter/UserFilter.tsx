import React, { useState } from "react";

// Definición de las props para el componente UserFilter
interface UserFilterProps {
  onFilterChange: (filters: {
    searchTerm: string;
    userType: "all" | "support" | "employee";
  }) => void;
}

// Componente funcional UserFilter
const UserFilter: React.FC<UserFilterProps> = ({ onFilterChange }) => {
  // Estado para el término de búsqueda (nombre o email)
  const [searchTerm, setSearchTerm] = useState<string>("");
  // Estado para el tipo de usuario a filtrar (todos, soporte, empleado)
  const [userType, setUserType] = useState<"all" | "support" | "employee">(
    "all"
  );

  // Manejador para el cambio en el input de búsqueda
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    // Llama a la función onFilterChange para aplicar el filtro
    onFilterChange({ searchTerm: newSearchTerm, userType });
  };

  // Manejador para el cambio en el select de tipo de usuario
  const handleUserTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newUserType = event.target.value as "all" | "support" | "employee";
    setUserType(newUserType);
    // Llama a la función onFilterChange para aplicar el filtro
    onFilterChange({ searchTerm, userType: newUserType });
  };

  return (
    <div className="mt-2 p-4 bg-gray-400 rounded-lg shadow-md mb-6">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="search"
            className="block text-sm font-medium text-gray-800 "
          >
            Buscar por Nombre o Email
          </label>
          <input
            type="text"
            id="search"
            className="mt-1 block w-full bg-gray-300 px-3 py-2 border border-gray-300 rounded-md shadow-sm outline-none sm:text-sm placeholder-gray-600"
            placeholder="Ej: John Doe o john@example.com"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {/* Selector de tipo de usuario */}
        <div>
          <label
            htmlFor="userType"
            className="block text-sm font-medium text-gray-800 mb-1"
          >
            Filtrar por Tipo de Usuario
          </label>
          <select
            id="userType"
            className="mt-1 block w-full text-gray-800 bg-gray-300 px-3 py-2 border border-gray-300 rounded-md shadow-sm outline-none sm:text-sm "
            value={userType}
            onChange={handleUserTypeChange}
          >
            <option value="all" className="text-gray-800">
              Todos
            </option>
            <option value="support" className="text-gray-800">
              Soportes
            </option>
            <option value="employee" className="text-gray-800">
              Empleados
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default UserFilter;
