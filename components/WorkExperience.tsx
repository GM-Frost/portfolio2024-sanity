"use client";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience as ExperienceType } from "@/typings";

type Props = {
  experiences: ExperienceType[];
};

const WorkExperience = ({ experiences }: Props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-5 md:px-10 lg:px-20 xl:px-32 justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-600 text-2xl">
          Work Experience
        </h3>
        <div className="absolute top-52 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-100/50 scrollbar-thumb-secondary">
          {experiences?.map((experience) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default WorkExperience;
