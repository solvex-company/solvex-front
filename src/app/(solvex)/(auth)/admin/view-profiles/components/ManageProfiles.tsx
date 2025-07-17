"use client";

// components
import CardComponentForAdmin from "./cardComponent/CardComponentForAdmin";
import ButtonComponent from "./buttonComponent/ButtonComponent";

// types
import User from "./types";

// vedors
import Swal from "sweetalert2";

// helpers
import { employees, supportStaff } from "./helper";

const ManageProfiles: React.FC = () => {
  const handleEmployeeToSupport = async (user: User) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esta acción!",
      icon: "warning",
      showCancelButton: true, // Muestra el botón de cancelar
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, ¡adelante!",
      cancelButtonText: "No, cancelar",
    });

    if (result.isConfirmed) {
      Swal.fire({
        title: "¡Empleado modificado!",
        text: `¡El empleado ${user.name} ahora pertenece a Empleados`,
        icon: "success",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,

        // Aca podemos ejecutar la lógica que depende de la confirmación:
        // Por ejemplo, llamar a una API para modificar el role.
        // Lógica específica para cambiar a soporte
      });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire({
        title: "¡Cancelado!",
        text: "¡No hubo modificaciones!",
        icon: "error",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };

  const handleSupportToEmployee = async (user: User) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: `¡El usuario ${user.name} será modificado!`,
      icon: "warning",
      showCancelButton: true, // Muestra el botón de cancelar
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, ¡adelante!",
      cancelButtonText: "No, cancelar",
    });

    if (result.isConfirmed) {
      Swal.fire({
        title: "¡Soporte modificado!",
        text: `¡El soporte ${user.name} ahora pertenece a Soporte`,
        icon: "success",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,

        // Aca podemos ejecutar la lógica que depende de la confirmación:
        // Por ejemplo, llamar a una API para modificar el role.
        // Lógica específica para cambiar a soporte
      });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire({
        title: "¡Cancelado!",
        text: "¡No hubo modificaciones!",
        icon: "error",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }

    // if (confirm(`Esdtas seguro de cambiar a ${user.name} como Empleado`))
    //   console.log(`Cambiando a ${user.name} a Empleado`);

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
              <CardComponentForAdmin key={helper.id} user={helper}>
                <ButtonComponent
                  handleClick={() => handleEmployeeToSupport(helper)}
                >
                  Cambiar a empleado
                </ButtonComponent>
              </CardComponentForAdmin>
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
              <CardComponentForAdmin key={employee.id} user={employee}>
                <ButtonComponent
                  handleClick={() => handleSupportToEmployee(employee)}
                >
                  Cambiar a Soporte
                </ButtonComponent>
              </CardComponentForAdmin>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ManageProfiles;
