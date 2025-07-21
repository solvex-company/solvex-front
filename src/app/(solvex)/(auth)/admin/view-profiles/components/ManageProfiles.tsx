"use client";

// components
import CardComponentForAdmin from "./cardComponent/CardComponentForAdmin";
import ButtonComponent from "./buttonComponent/ButtonComponent";
import Loader from "@/app/components/Loader/Loader";

// types
import { UserDto } from "@/dto/userDto";

// vedors
import Swal from "sweetalert2";

// hooks
import useUpdateUserRole from "@/hooks/useUpdateUserRole";
import useUsers from "@/hooks/useUsers";

const ManageProfiles: React.FC = () => {
  const {
    data: users,
    isLoading: isLoadingusers,
    error: errorUsers,
  } = useUsers();

  const employees = users?.filter((user) => user.role.role_name === "Empleado");

  const helpers = users?.filter((user) => user.role.role_name === "Soporte");

  const { mutate: changeUserRole, isPending: isUpdating } = useUpdateUserRole();

  if (isLoadingusers) return <Loader />;
  if (errorUsers) return <div>Error al cargar usuarios</div>;

  // crear una funcion generica

  const handleRoleChange = async (user: UserDto) => {
    const confirmText = `¡El usuario ${user.name} ${
      user.lastname
    } será modificado a ${
      user.role.role_name === "employee" ? "Empleado" : "Soporte"
    }!`;
    const successTitle =
      user.role.role_name === "employee"
        ? "¡Empleado modificado!"
        : "¡Soporte modificado!";
    const successText =
      user.role.role_name === "employee"
        ? `¡El empleado ${user.name} ${user.lastname} ahora pertenece a Empleados!`
        : `¡El soporte ${user.name} ${user.lastname} ahora pertenece a Soporte!`;

    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: confirmText,
      icon: "warning",
      showCancelButton: true,
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
      try {
        await changeUserRole(user.id_user);

        Swal.fire({
          title: successTitle,
          text: successText,
          icon: "success",
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
          customClass: {
            popup: "swal2-popup--success", // Añade esta clase personalizada
          },
        });
      } catch (error) {
        // error es el error que lanza `updateUserRole` o TanStack Query
        let errorMessage = "Hubo un error desconocido al modificar el rol.";
        if (error instanceof Error) {
          errorMessage = error.message; // Usa el mensaje del error
        }

        Swal.fire({
          title: "¡Error!",
          text: `Hubo un error al modificar el rol de ${user.name} ${user.lastname}. Detalles: ${errorMessage}`,
          icon: "error",
          timer: 4000, // Dar un poco más de tiempo para leer el error
          timerProgressBar: true,
          showConfirmButton: true, // Deja el botón para que el usuario lo cierre
          customClass: {
            popup: "swal2-popup--error",
          },
        });
        console.error(
          "Error al confirmar cambio de rol después del Swal:",
          error
        );
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire({
        title: "¡Cancelado!",
        text: "¡No hubo modificaciones!",
        icon: "error",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        customClass: {
          popup: "swal2-popup--cancel",
        },
      });
    }
  };

  return (
    <div className="w-full h-screen">
      <h2 className="text-2xl font-bold">Administrar Perfiles</h2>
      <div className="p-3 mb-4">
        <h3 className="font-semibold mt-5 mb-1 tracking-wider text-lg">
          Soporte
        </h3>
        <div className="flex flex-wrap gap-8">
          {helpers?.map((soporte) => {
            return (
              <CardComponentForAdmin key={soporte.id_user} user={soporte}>
                <ButtonComponent
                  handleClick={() => handleRoleChange(soporte)}
                  disabled={isUpdating}
                >
                  {"Cambiar a empleado"}
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
          {employees?.map((employee) => {
            return (
              <CardComponentForAdmin key={employee.id_user} user={employee}>
                <ButtonComponent
                  handleClick={() => handleRoleChange(employee)}
                  disabled={isUpdating}
                >
                  {"Cambiar a soporte"}
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
