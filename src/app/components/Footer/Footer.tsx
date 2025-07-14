import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex justify-between bg-mainText p-2 pl-12 pr-12">
      <div className="flex">
        <Image
          src={"https://ik.imagekit.io/SolvexCompany/logoSolvex3.png"}
          width={100}
          height={100}
          alt="Solvex Logo"
          className="object-contain"
        />
        <Image
          src={"https://ik.imagekit.io/SolvexCompany/SolvexCompany.png"}
          width={250}
          height={20}
          alt="Solvex Company"
          className="object-contain ml-9"
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-lg text-mainBg">Contáctanos en: companysolvex@gmail.com</span>
        <span className="text-lg text-mainBg">Hecho con 💙 © 2025</span>
      </div>
    </footer>
  );
};

export default Footer;
