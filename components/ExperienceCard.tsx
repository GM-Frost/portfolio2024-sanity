"use client";
import { urlFor } from "@/sanity";
import { motion } from "framer-motion";
import { Experience as ExperienceType } from "@/typings";
type Props = {
  experience: ExperienceType;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <>
      <article
        className="flex flex-col md:flex-row rounded-lg items-center  space-y-4 md:space-x-6 flex-shrink-0 w-full xl:h-screen/2 md:w-[600px] xl:w-[900px] snap-center bg-[#f9f9f9] p-4 md:p-6 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden
      "
      >
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-24 h-24 rounded-full md:w-32 md:h-32 xl:w-48 xl:h-48 object-cover object-center"
          src={urlFor(experience?.companyImage).url()}
          alt="Image of a company"
        />
        <div className="px-2 md:px-4 flex-1">
          <h4 className="text-3xl md:text-2xl font-light">
            {experience?.jobTitle}
          </h4>
          <p className="font-bold text-sm md:text-xm  mt-1">Tech</p>
          <div className="flex space-x-1 my-2 overflow-x-scroll scrollbar-none">
            {experience.technologies.map((technology) => (
              <img
                key={technology._id}
                src={urlFor(technology.image).url()}
                alt=""
                className="h-8 w-8 md:h-10 md:w-10 xl:h-12 xl:w-12 rounded-full object-cover
                "
              />
            ))}
          </div>
          <p className="uppercase py-2 text-gray-600 text-xs md:text-sm">
            {new Date(experience.dateStarted).toLocaleString("en-US", {
              month: "short",
              year: "numeric",
            })}
            -{" "}
            {experience.isCurrentlyWorkingHere
              ? "Present"
              : new Date(experience.dateEnded).toLocaleString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
          </p>
          <ul className="list-disc ml-3 space-y-2 md:space-y-4 md:ml-5 text-sm md:text-lg max-h-32 md:max-h-96 p-2 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-secondary">
            {experience.responsibility.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </article>
    </>
  );
};

export default ExperienceCard;
