"use client";

// components
import CardStaff from "./cardComponent/CardStaff";

// types
import User from "./types";

// helpers
import { employees, supportStaff } from "./helper";

const ManageProfiles: React.FC = () => {
  const handleEmployeeToSupport = (user: User) => {
    console.log(`Cambiando a ${user.name} a Soporte`);
    // Lógica específica para cambiar a soporte
  };

  const handleSupportToEmployee = (user: User) => {
    console.log(`Cambiando a ${user.name} a Empleado`);
    // Lógica específica para cambiar a empleado
  };

  return (
    <div className="w-full h-screen">
      <h2 className="text-2xl font-bold">Administrar Perfiles</h2>
      <div className="p-3 mb-4">
        <h3 className="font-semibold mt-5 mb-1 tracking-wider text-lg">
          Soporte
        </h3>
        <div className="flex flex-wrap gap-8">
          {supportStaff.map((helper) => {
            return (
              <CardStaff key={helper.id} user={helper}>
                <button
                  className="bg-gray-400 hover:bg-accent hover:shadow-md px-4 py-2 rounded transition-bg duration-300"
                  onClick={() => handleEmployeeToSupport(helper)}
                >
                  Cambiar a empleado
                </button>
              </CardStaff>
            );
          })}
        </div>
      </div>

      <div className="p-3">
        <h3 className="font-semibold mt-5 mb-1 tracking-wider text-lg">
          Empleados
        </h3>
        <div className="flex flex-wrap gap-8">
          {employees.map((employee) => {
            return (
              <CardStaff key={employee.id} user={employee}>
                <button
                  className="bg-gray-400 hover:bg-accent hover:shadow-md px-4 py-2 rounded transition-bg duration-300"
                  onClick={() => handleSupportToEmployee(employee)}
                >
                  Cambiar a Soporte
                </button>
              </CardStaff>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ManageProfiles;
