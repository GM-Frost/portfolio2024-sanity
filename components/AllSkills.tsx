"use client";
import { urlFor } from "@/sanity";
import { ISkill } from "@/typings";
import { motion } from "framer-motion";

type Props = {
  skills?: ISkill;
  directionLeft?: boolean;
};

const AllSkills = ({ skills, directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer ">
      <motion.img
        viewport={{ once: true }}
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skills?.image).url()}
        alt="Skills Logo"
        className="rounded-full border border-primary/40 object-cover w-16 h-16 sm:w-14 sm:h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out "
      />
      <div className="absolute opacity-0  group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 sm:w-14 sm:h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-indigo-600 opacity-100">
            {skills?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllSkills;
