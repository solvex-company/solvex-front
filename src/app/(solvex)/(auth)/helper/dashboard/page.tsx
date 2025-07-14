import AdminInfo from "../../admin/dashboard/components/AdminInfo";
import AdminPassword from "../../admin/dashboard/components/AdminPassword";

function dashboardHelper() {
  return (
    <div>
      <h2 className="text-3xl font-bold pt-5 underline">Datos del Usuario</h2>
      <AdminInfo />

      <h3 className="text-2xl font-bold pt-5">Cambiar contraseña</h3>
      <AdminPassword />
    </div>
  );
}

export default dashboardHelper;
