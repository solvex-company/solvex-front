import { frontend, backend } from "./helper/developers";
import Card from "./card/Card";
import CardProps from "./card/interface";
import Technologies from "./technologies/technologies";

const AboutSection: React.FC = () => {
  return (
    <section className="w-full my-4 flex flex-col justify-center items-center ">
      <Technologies />
      <h1 className="text-5xl mb-5 mt-3 tracking-wider">
        Equipo de Desarrollo
      </h1>
      <div className="w-full flex flex-col items-center gap-4 mb-8 p-3">
        <h2 className="text-2xl my-4">Desarrolladores de Front-End</h2>
        <div className="flex flex-wrap justify-center gap-9">
          {frontend.map((dev: CardProps) => (
            <Card
              key={dev.name}
              imgSrc={dev.imgSrc}
              name={dev.name}
              hobbies={dev.hobbies}
              linkedInSrc={dev.linkedInSrc}
              githubSrc={dev.githubSrc}
              className={dev.name === "" ? "" : "bg-accent"}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-4 mb-5 p-3">
        <h2 className="text-2xl mt-8 mb-4">Desarrolladores de Back-End</h2>
        <div className="flex flex-wrap justify-center gap-5">
          {backend.map((dev: CardProps) => (
            <Card
              key={dev.name}
              imgSrc={dev.imgSrc}
              name={dev.name}
              hobbies={dev.hobbies}
              linkedInSrc={dev.linkedInSrc}
              githubSrc={dev.githubSrc}
              className={dev.name === "" ? "" : "bg-secondBg"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
