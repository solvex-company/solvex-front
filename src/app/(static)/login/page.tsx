import React from "react";

//components
import LoginForm from "./components/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="bg-white p-8 w-full max-w-md">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Ingresa a la página
      </h1>
      <LoginForm />
      
    </div>
  );
};

export default Login;
