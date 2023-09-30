"use client";
import React from "react";

import { motion } from "framer-motion";
import AllProjects from "./AllProjects";
import { Project } from "@/typings";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <>
      <motion.div className="min-h-screen relative flex overflow-auto flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-16 md:top-[80px] uppercase tracking-[15px] text-gray-600 text-2xl">
          Projects
        </h3>
        <h3 className="absolute top-[120px] md:top-30 uppercase tracking-[3px] text-gray-600 text-xl mb-10">
          My Creative{" "}
          <span className="text-indigo-600 underline decoration-orange-300 font-bold">
            Portfolio
          </span>{" "}
          Works
        </h3>
        <div className="w-full flex flex-wrap mt-24 container">
          <AllProjects projects={projects} />
        </div>

        <div className="w-full h-full absolute top-[30%] bg-indigo-500/10 left-0  -skew-y-12" />
        <div className="w-full h-full absolute top-[30%] bg-indigo-500/10 left-0  skew-y-12" />
      </motion.div>
    </>
  );
};

export default Projects;
