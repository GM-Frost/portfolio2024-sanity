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
    <div className="group relative flex cursor-pointer">
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
        className="rounded-full border border-primary/40 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out "
      />
      <div className="absolute opacity-0  group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 md:w-28 md:h-28  xl:w-32 xl:h-32 rounded-full z-0">
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
