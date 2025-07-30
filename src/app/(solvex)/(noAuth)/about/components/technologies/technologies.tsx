import Image from "next/image";

const Technologies: React.FC = () => {
  return (
    <div className="w-full h-44 bg-sky-100 mb-10 shadow-xl">
      <ul className="flex items-center justify-center gap-12">
        <ol>
          <Image
            src={
              "https://ik.imagekit.io/SolvexCompany/node-js-logo.png?updatedAt=1753815331346"
            }
            alt="Node js logo"
            width={130}
            height={100}
          />
        </ol>
        <ol>
          <Image
            src={
              "https://ik.imagekit.io/SolvexCompany/cloudinary-logo.png?updatedAt=1753815331316"
            }
            alt="Cloudinary logo"
            width={150}
            height={100}
          />
        </ol>
        <ol>
          <Image
            src={
              "https://ik.imagekit.io/SolvexCompany/express-js-logo.png?updatedAt=1753815331285"
            }
            alt="Express js logo"
            width={110}
            height={100}
          />
        </ol>
        <ol>
          <Image
            src={
              "https://ik.imagekit.io/SolvexCompany/ts-logo-256.png?updatedAt=1753815331127"
            }
            alt="Typescript logo"
            width={75}
            height={75}
          />
        </ol>
        <ol>
          <Image
            src={
              "https://ik.imagekit.io/SolvexCompany/react-logo.png?updatedAt=1753815331125"
            }
            alt="React js logo"
            width={75}
            height={75}
          />
        </ol>
        <ol>
          <Image
            src={
              "https://ik.imagekit.io/SolvexCompany/nestjs-logo.png?updatedAt=1753815331073"
            }
            alt="Nest js logo"
            width={130}
            height={100}
          />
        </ol>
        <ol>
          <Image
            src={
              "https://ik.imagekit.io/SolvexCompany/tailwind-logo.png?updatedAt=1753815331087"
            }
            alt="Tailwind logo"
            width={180}
            height={100}
          />
        </ol>
        <ol>
          <Image
            src={
              "https://ik.imagekit.io/SolvexCompany/nextjs-logo.png?updatedAt=1753815331073"
            }
            alt="Next js logo"
            width={110}
            height={100}
          />
        </ol>
      </ul>
    </div>
  );
};

export default Technologies;
