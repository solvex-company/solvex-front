import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const notFound = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <div className='flex flex-col items-center p-6 w-1/3 border-2 border-accent rounded-md'>
        <Image 
          src="https://ik.imagekit.io/SolvexCompany/error-404.png" 
          width={360} 
          height={360} 
          alt='Error 404'
          className="object-contain"/>
        <h2 className='p-3 text-5xl text-accent'>¡Uy!</h2>
        <p className='text-3xl'>¿Dónde estás? ¡Te hemos perdido de vista! </p>
        <span className='text-2xl'>Rápido, <Link className='text-accent underline underline-offset-1 hover:text-blue-800' href='/'> vuelve</Link> a Solvex Company</span>
      </div>
    </div>
  )
}

export default notFound;