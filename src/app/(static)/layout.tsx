import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface ILayout {
  children: React.ReactNode;
}

export const LayoutAuth: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="flex w-screen h-screen bg-blue-500">
      <div className="flex-[.5] flex flex-col justify-center items-center bg-blue-500">
        <Link href="/" className="flex flex-col items-center">
          <Image
            src={"https://ik.imagekit.io/SolvexCompany/logoSolvex3-1.png"}
            width={350}
            height={450}
            alt="Solvex Company"
            className="object-contain"
          />
        </Link>
      </div>
      <div className="flex-[.5] flex flex-col justify-center items-center rounded-l-3xl bg-white">
        {children}
      </div>
    </div>
  );
};

export default LayoutAuth;
