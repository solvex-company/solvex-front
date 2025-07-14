import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

// types
import CardProps from "./interface";

const Card = (props: CardProps) => {
  return (
    <div
      className={`w-[350px]  h-[430px] p-5 flex flex-col items-center rounded-3xl shadow-lg ${
        props.className ?? ""
      }`}
    >
      <Image
        src={props.imgSrc || "/default-avatar.png"}
        alt={props.name}
        width={150}
        height={150}
        className="rounded-full"
      />

      <div className="flex flex-col m-3">
        <h3 className="text-center my-2 text-2xl">{props.name}</h3>
        <span>{props.hobbies}</span>
      </div>
      <div className="flex gap-4 mt-auto">
        <Link href={props.linkedInSrc || "#"} target="_blank">
          <FaLinkedin size={30} />
        </Link>
        <Link href={props.githubSrc || "#"} target="_blank">
          <SiGithub size={30} />
        </Link>
      </div>
    </div>
  );
};

export default Card;
