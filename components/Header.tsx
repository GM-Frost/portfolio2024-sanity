"use client";

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "@/typings";

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  return (
    <header className="overflow-x-hidden sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center gap-2"
      >
        {/* social icons  */}
        {socials.map((social) => (
          <>
            <SocialIcon
              key={social._id}
              style={{ width: "40px", height: "40px" }}
              url={social.url}
            />
          </>
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-dark cursor-pointer gap-2"
      >
        <SocialIcon
          network="email"
          url="#contact"
          bgColor="#fac58e"
          style={{ width: "40px", height: "40px" }}
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
