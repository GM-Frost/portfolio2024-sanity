"use client";
import React from "react";
import { motion } from "framer-motion";
import "./about.css";
import {
  AboutBG,
  CircleImg,
  NodeImg,
  ReactImg,
  ReduxImg,
  SpringImg,
} from "./assets";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo?: PageInfo | null;
};

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Greetings = ({ pageInfo }: Props) => {
  if (!pageInfo) {
    // Handle the case when pageInfo is undefined
    return <div>Loading...</div>; // or any other fallback UI
  }

  return (
    <>
      <div
        className="bg-repeat bg-cover bg-center relative"
        style={{ backgroundImage: `url(${AboutBG})` }}
      >
        <div className="min-h-screen flex flex-col space-y-8 items-center justify-center text-center relative">
          <h3 className="absolute top-16 md:top-[80px] uppercase tracking-[15px] text-gray-600 text-2xl">
            Greetings
          </h3>

          <div
            id="home"
            className="app__header flex justify-center items-center"
          >
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__header-info"
            >
              <div className="app__header-badge">
                <div className="badge-cmp flex justify-center items-center">
                  <span className="animate-bounce">👋</span>
                  <div style={{ marginLeft: 20 }}>
                    <p className="text-gray-600">Hello, I am</p>
                    <h1 className="nameclass text-6xl text-gray-600">
                      {" "}
                      {pageInfo?.name.split(" ")[0]}
                    </h1>
                  </div>
                </div>
                <div className="flex tag-cmp justify-center items-center ">
                  <p className="text-gray-600">
                    <span className="underline decoration-secondary">
                      {pageInfo?.role}
                    </span>
                  </p>
                  <p className="text-gray-600">Designer</p>
                  <p className="text-gray-600">Artist</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delayChildren: 0.5 }}
              className="app__header-img"
            >
              {pageInfo?.profilePic && (
                <img src={urlFor(pageInfo.profilePic).url()} alt="profile_bg" />
              )}
              <motion.img
                whileInView={{ scale: [0, 1] }}
                transition={{ duration: 1, ease: "easeInOut" }}
                src={CircleImg}
                alt="profile_circle"
                className="overlay_circle"
              />
            </motion.div>
            <motion.div
              variants={scaleVariants}
              whileInView={scaleVariants.whileInView}
              className="app__header-circles"
            >
              {[ReactImg, NodeImg, ReduxImg, SpringImg].map((icons, index) => (
                <div className="circle-cmp app__flex" key={index}>
                  <img src={icons} alt="icons" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Greetings;
