'use client';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UnauthorizedPage() {
  const router = useRouter();
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <div className='flex flex-col items-center p-6 w-2/3 border-2 border-accent rounded-md'>
        <Image 
          src="https://ik.imagekit.io/SolvexCompany/ejemploImagen3.jpg" 
          width={360} 
          height={360} 
          alt='Error'
          className="object-contain"/>
        <h2 className='p-3 text-5xl text-accent'>Lo sentimos</h2>
        <p className='text-3xl'>No puedes acceder a esta página</p>
        <span className='text-2xl'>Rápido, <Link className='text-accent underline underline-offset-1 hover:text-blue-800' 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            router.back();
          }}> vuelve</Link> a Solvex Company</span>
      </div>
    </div>
  );
}