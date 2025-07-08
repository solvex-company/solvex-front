import Image from "next/image";

const Footer = () => {
    return (
        <footer className="flex justify-between bg-gray-700 p-7">
            <div className="flex">
              <Image 
                src={"https://ik.imagekit.io/SolvexCompany/logoSolvex3.png"}
                width={150}
                height={150}
                alt="Solvex Logo"
                className="object-contain" />
              <Image
                src={"https://ik.imagekit.io/SolvexCompany/SolvexCompany.png"}
                width={250}
                height={20}
                alt="Solvex Company"
                className="object-contain ml-9" />
            </div>
            <div className="flex flex-col">
            <span className="text-lg">Hecho con</span>
            <span className="text-lg">© 2025</span>
            </div>  
        </footer>
    )
}

export default Footer;