import React from "react";
import Link from "next/link";

//components
import LoginForm from "./components/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="bg-white p-8   w-full max-w-sm">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Ingresa a la página
      </h1>
      <LoginForm />
      <div className="flex gap-2 items-center mt-4 justify-center">
        <span>¿No tienes cuenta?</span>
        <Link className="text-blue-500 hover:text-blue-800" href="/register">
          Registrate
        </Link>
      </div>
    </div>
  );
};

export default Login;
