"use client";

// components
import CardComponentForAdmin from "./cardComponent/CardComponentForAdmin";
import ButtonComponent from "./buttonComponent/ButtonComponent";

// types
import { UserDto } from "@/dto/userDto";

// vedors
import Swal from "sweetalert2";

// helpers
// import { employees, supportStaff } from "./helper";

// hooks
import useUsers from "@/hooks/useUsers";

const ManageProfiles: React.FC = () => {
  const { data, isLoading, error } = useUsers();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error al cargar productos</div>;

  console.log(data);

  const handleEmployeeToSupport = async (user: UserDto) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esta acción!",
      icon: "warning",
      showCancelButton: true, // Muestra el botón de cancelar
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
      customClass: {
        confirmButton:
          "text-#545454 font-semibold bg-green-700 hover:bg-green-600 hover:shadow-md px-4 py-2 rounded ",
        cancelButton:
          "text-#545454 font-semibold bg-red-700 hover:bg-red-600 hover:shadow-md px-4 py-2 rounded  ",
      },
    });

    if (result.isConfirmed) {
      Swal.fire({
        title: "¡Empleado modificado!",
        text: `¡El empleado ${user.name} ahora pertenece a Empleados`,
        icon: "success",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        customClass: {
          popup: "swal2-popup--success", // Añade esta clase personalizada
        },

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
        customClass: {
          popup: "swal2-popup--cancel", // clase personalizada
        },
      });
    }
  };

  const handleSupportToEmployee = async (user: UserDto) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: `¡El usuario ${user.name} será modificado!`,
      icon: "warning",
      showCancelButton: true, // Muestra el botón de cancelar
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
      customClass: {
        confirmButton:
          "text-#545454 font-semibold bg-green-700 hover:bg-green-600 hover:shadow-md px-4 py-2 rounded ",
        cancelButton:
          "text-#545454 font-semibold bg-red-700 hover:bg-red-600 hover:shadow-md px-4 py-2 rounded  ",
      },
    });

    if (result.isConfirmed) {
      Swal.fire({
        title: "¡Soporte modificado!",
        text: `¡El soporte ${user.name} ahora pertenece a Soporte`,
        icon: "success",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        customClass: {
          popup: "swal2-popup--success", // Añade esta clase personalizada
        },

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
        customClass: {
          popup: "swal2-popup--cancel", // clase personalizada
        },
      });
    }

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
          {data?.map((soporte) => {
            return (
              <CardComponentForAdmin key={soporte.id_user} user={soporte}>
                <ButtonComponent
                  handleClick={() => handleEmployeeToSupport(soporte)}
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
          {data?.map((employee) => {
            return (
              <CardComponentForAdmin key={employee.id_user} user={employee}>
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
