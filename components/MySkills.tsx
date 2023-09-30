"use client";
import { motion } from "framer-motion";
import AllSkills from "./AllSkills";
import { ISkill } from "@/typings";
type Props = {
  skills: ISkill[];
};

const MySkills = ({ skills }: Props) => {
  return (
    <>
      <motion.div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center overflow-y-scroll">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-600 text-2xl">
          Skills
        </h3>
        <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-600 text-sm">
          Hover over a skill for current proficiency
        </h3>

        <div className="absolute grid top-52 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-3 mt-24">
          {skills?.map((allskill) => (
            <AllSkills key={allskill._id} skills={allskill} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default MySkills;
