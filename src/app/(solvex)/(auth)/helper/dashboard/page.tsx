'use client';
import { useAuthContext } from "@/context/AuthContext";
import AdminLicense from "../../admin/dashboard/components/AdminLicense";
import AdminInfo from "../../components/InfoDashboard/InfoDashboard";
import ChangePasswordComponentForm from "@/app/components/ChangePasswordComponent/ChangePasswordComponent";

function DashboardHelper() {
  const { user } = useAuthContext();
  return (
    <div>
        <h2 className="text-3xl font-bold pt-5 underline">Datos del Usuario</h2>
        <AdminInfo />
       
        <h3 className="text-2xl font-bold pt-5">Cambiar contraseña</h3>
        <ChangePasswordComponentForm />

        {user?.paymentApproved && (<><h2 className="text-2xl font-bold pt-5">Tu plan de Solvex</h2><AdminLicense /></>)}
      </div>
  );
}

export default DashboardHelper;
