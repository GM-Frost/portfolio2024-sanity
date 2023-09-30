"use client";
import React from "react";
import { motion } from "framer-motion";
import { About } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  aboutInfo: About[];
};
const AboutSection = ({ aboutInfo }: Props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="min-h-screen overflow-y-auto"
      >
        <div className="flex flex-col relative  text-center md:text-left md:flex-row max-w-7xl px-4 md:px-10 lg:px-20 xl:px-32 justify-evenly mx-auto items-center">
          <h3 className="absolute top-16 md:top-[80px] uppercase tracking-[15px] text-gray-600 text-2xl">
            About
          </h3>
          <h3 className="absolute top-[120px] md:top-28 uppercase tracking-[3px] text-gray-600 text-sm">
            I Know that{" "}
            <span className="text-primary font-bold">
              Good Development <br />
            </span>{" "}
            means{" "}
            <span className="text-yellow-500 font-bold">Good Business</span>
          </h3>

          <div className="absolute top-[300px] px-4 py-8 sm:py-12 left-0 right-0  flex flex-row justify-center items-center -mt-40 flex-wrap mb-8 mx-0 ">
            <motion.div
              whileInView={{ x: [300, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 snap-x snap-mandatory p-1   z-10"
            >
              {aboutInfo?.map((about) => (
                <div
                  className="flex flex-col p-4 rounded-lg bg-white text-gray-600 transition-all duration-300 ease-in-out transform hover:shadow-xl mx-2 "
                  key={about._id}
                >
                  <div className="w-full relative app__flex">
                    <img
                      className="w-full h-60 md:h-80 xl:h-[250px] rounded-lg object-cover cursor-pointer"
                      src={urlFor(about?.aboutImage).url()}
                      alt={about?.aboutTitle}
                    />
                  </div>
                  <div className="justify-center items-center text-center p-2 w-full relative  flex-col app__flex">
                    <h4 className="font-bold mt-4 leading-normal">
                      {about?.aboutTitle}
                    </h4>
                    <p className="p-text mt-3 md:mt-5">{about?.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutSection;
