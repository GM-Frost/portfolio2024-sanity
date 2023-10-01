"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Greetings from "@/components/Greetings";
import AboutSection from "@/components/AboutSection";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { GoTop } from "@/components/assets";
import {
  About,
  Experience,
  ISkill,
  ITopTech,
  PageInfo,
  Project,
  Social,
} from "@/typings";
import { useEffect, useState } from "react";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocial } from "@/utils/fetchSocials";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchAboutInfo } from "@/utils/fetchAboutInfo";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchProjects } from "@/utils/fetchProjects";
import MySkills from "@/components/MySkills";
import { fetchTopTech } from "@/utils/fetchTopTech";

type Props = {};

const HomePage = (props: Props) => {
  const [allSkillsData, setSkillsData] = useState<ISkill[]>([]);
  const [socialIconsData, setSocialIconsData] = useState<Social[]>([]);
  const [topTechsData, setTopTechsData] = useState<ITopTech[]>([]);
  const [profileInfo, setProfileInfo] = useState<PageInfo | null>(null);
  const [aboutInfoData, setAboutInfoData] = useState<About[]>([]);
  const [experiencesData, setExperiencesData] = useState<Experience[]>([]);
  const [projectsData, setProjectsData] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pageInfo = await fetchPageInfo();
        setProfileInfo(pageInfo);
        const topTechData = await fetchTopTech();
        setTopTechsData(topTechData);
        const skillsData = await fetchSkills();
        setSkillsData(skillsData);
        const socialIcons = await fetchSocial();
        setSocialIconsData(socialIcons);
        const aboutInfos = await fetchAboutInfo();
        setAboutInfoData(aboutInfos);
        const experiencesInfo = await fetchExperiences();
        setExperiencesData(experiencesInfo);
        const projects = await fetchProjects();
        setProjectsData(projects);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-indigo-400/20 scrollbar-thumb-secondary">
        <Header socials={socialIconsData} />

        {/* HERO SECTION */}
        <section id="hero" className="snap-start">
          <Hero pageInfo={profileInfo} />
        </section>

        {/* ABOUT SECTION */}

        <section id="greetings" className="snap-start">
          <Greetings pageInfo={profileInfo} topTech={topTechsData} />
        </section>
        <section id="about" className="snap-center">
          <AboutSection aboutInfo={aboutInfoData} />
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="snap-start">
          <WorkExperience experiences={experiencesData} />
        </section>
        {/* SKILLS SECTION */}
        <section id="skills" className="snap-start">
          <MySkills skills={allSkillsData} />
        </section>
        {/* PROJECTS SECTION */}
        <section id="projects" className="snap-start">
          <Projects projects={projectsData} />
        </section>
        {/* CONTACT ME SECTION */}
        <section id="contact" className="snap-start">
          <Contact />
        </section>

        {/* FOOTER */}
        <Link href="#hero">
          <footer className="fixed bottom-5 right-5">
            <button className="flex items-center justify-center">
              <img
                className="hover:animate-bounce h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
                src={GoTop}
                alt=""
              />
            </button>
          </footer>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
