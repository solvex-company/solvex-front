import Image from "next/image";
import React from "react";

const GoogleLoginButton: React.FC = () => {
  const handleLogin = async () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google/login`;
  };

  return (
    <div className="flex flex-col items-center pt-4">
      <button onClick={() => handleLogin()} className="flex bg-gray-300 w-[380px] h-[40px] rounded-md hover:bg-gray-200">
        <Image
          src={"https://ik.imagekit.io/SolvexCompany/Google.png"}
          width={20}
          height={20}
          alt="Solvex Company"
          className="object-contain ml-3"
        />
        <span className="flex flex-col items-center justify-center w-[300px] h-[40px]">Google</span>
      </button>
    </div>
  );
};

export default GoogleLoginButton;
