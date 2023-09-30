"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Link from "next/link";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo?: PageInfo | null;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi, My Name is ${pageInfo?.name}`,
      "I love to code",
      "<Code/> Loads so good",
      "A Developer With Factor",
      "Code-Blooded!",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <>
      <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative">
        <BackgroundCircle />

        {pageInfo?.heroImage && (
          <img
            src={urlFor(pageInfo.heroImage).url()}
            alt={pageInfo.name}
            className="rounded-full h-32 w-32 lg:h-48 lg:w-48 mx-auto object-cover"
          />
        )}
        <h2 className="text-xs  md:text-sm uppercase text-gray-600 pb-2 tracking-[15px] flex flex-wrap justify-center items-center">
          <span className="bg-indigo-600/40 text-white border md:rounded-r-none md:mx-0 rounded-full p-2 mx-1 ">
            Full Stack
          </span>
          <span className="bg-orange-300/40 text-black border md:rounded-l-none md:mx-0 rounded-full sm:rounded-full p-2 mx-1 my-1">
            Developer
          </span>
        </h2>
        <div className="z-20">
          <h1 className="text-3xl lg:text-6xl font-semibold px-4 lg:px-10">
            <span>{text}</span>
            <Cursor cursorColor="#f5c798" />
          </h1>
        </div>
        <div className="pt-5 flex flex-col space-y-3 lg:flex-row lg:space-x-3 lg:space-y-0 z-10">
          <Link href="#about">
            <button className="heroBtnClass">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroBtnClass">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroBtnClass">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroBtnClass">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="heroBtnClass">Contact</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
