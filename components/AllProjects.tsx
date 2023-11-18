"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  projects: Project[];
};

const categories = {
  name: ["Others", "PHP", "React JS", "Python", "All"],
};

const AllProjects: React.FC<Props> = ({ projects }: Props) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [filterProjects, setFilterProjects] = useState<Project[]>([]);

  const MAX_SUMMARY_LENGTH = 151;

  const truncateSummary = (summary: string) => {
    if (summary.length > MAX_SUMMARY_LENGTH) {
      return summary.substring(0, MAX_SUMMARY_LENGTH) + "...";
    }
    return summary;
  };

  const handleProjectFilter = (category: any) => {
    setActiveFilter(category);
    setProjectsData(projects);
    setAnimateCard({ y: 100, opacity: 0 });
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (category === "All") {
        setFilterProjects(projects);
      } else {
        setFilterProjects(
          projectsData.filter((work) => work?.tags.includes(category))
        );
        setProjectsData(projects);
      }
    }, 500);
  };

  useEffect(() => {
    if (activeFilter === "All") {
      setFilterProjects(projects);
    }
  }, [projects]);

  return (
    <>
      <div className="absolute -mt-64 left-0 right-0 flex flex-row justify-center items-center flex-wrap mb-8 mx-0 z-10">
        {categories.name.map((items, index) => (
          <div
            key={index}
            onClick={() => handleProjectFilter(items)}
            className={`px-4 py-2 border rounded-lg  text-gray-600 font-extrabold cursor-pointer transition-all duration-[0.3s] ease-[ease] m-2 hover:text-white hover:bg-indigo-700 hover:border-indigo-900 xl:px-8 xl:py-4 app__flex p-text ${
              activeFilter === items
                ? "text-white bg-indigo-800"
                : "bg-white text-gray-600"
            }`}
          >
            {items}
          </div>
        ))}
      </div>
      <div className="absolute px-4 py-8 sm:py-12 left-0 right-0  flex flex-row justify-center items-center -mt-40 flex-wrap mb-8 mx-0 ">
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 snap-x snap-mandatory p-1   z-10"
        >
          {filterProjects.map((work) => (
            <div
              className="flex flex-col p-2 rounded-lg bg-white text-gray-600 transition-all duration-300 ease-in-out transform hover:shadow-xl mx-2 "
              key={work._id}
            >
              <div className="w-full relative app__flex">
                <img
                  className="w-full h-60 md:h-80 xl:h-[250px] rounded-lg object-fill cursor-pointer"
                  src={urlFor(work?.image).url()}
                  alt={work?.title}
                />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className=" absolute inset-0  top-0 left-0 right-0 bottom-0 w-full h-full bg-black bg-opacity-[0.5] opacity-0 cursor-pointer rounded-lg app__flex flex justify-center items-center"
                >
                  <a href={work?.linkToBuild} target="_blank">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 rounded-full bg-black bg-opacity-50 text-white m-4 font-extrabold cursor-pointer app__flex flex justify-center items-center"
                    >
                      <HiMiniViewfinderCircle className="w-1/2 h-1/2" />
                    </motion.div>
                  </a>
                  <a href={work?.linkToGit} target="_blank">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 rounded-full bg-black bg-opacity-50 text-white m-4 font-extrabold cursor-pointer app__flex flex justify-center items-center"
                    >
                      <FaGithub className="w-1/2 h-1/2" />
                    </motion.div>
                  </a>
                </motion.div>
              </div>
              <div className="justify-center items-center text-center p-2 w-full relative flex-col ">
                <h4 className="font-bold mt-4 leading-normal">{work?.title}</h4>
                <p className="p-text mt-3 md:mt-5">
                  {truncateSummary(work?.summary)}
                </p>

                <div className="relative mt-2 px-2  items-center justify-center text-center">
                  {work?.technologies.map((tech) => (
                    <span
                      key={tech._id}
                      className="inline-block bg-gray-200 rounded-full px-1 py-1 text-[10px] font-semibold text-gray-700 mr-2 mb-2"
                    >
                      #{tech.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AllProjects;
