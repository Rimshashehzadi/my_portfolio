"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNode,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "I'm provide a services of web development  from 24/7 and all time you can contact me for  better experience",

  info: [
    {
      fieldName: "Name",
      fieldValue: " Rimsha Amin",
    },
    {
      fieldName: "Phone",
      fieldValue: " (+92) 3134489739",
    },
    {
      fieldName: "Experiencce",
      fieldValue: " 2+ year",
    },
    {
      fieldName: "Skyp",
      fieldValue: " Rimsha.01",
    },
    {
      fieldName: "Nationality",
      fieldValue: " Pakistani",
    },
    {
      fieldName: "Language",
      fieldValue: " English,Urud,Punjabi",
    },
    {
      fieldName: "Freelance",
      fieldValue: " Available",
    },
    {
      fieldName: "Email",
      fieldValue: " rimshashehzadi79@gmail.com",
    },
  ],
};
//experience
const experience = {
  icon: "",
  title: "My Experience",
  description:
    "I'm provide a services of web development  from 24/7 and all time you can contact me for  better experience",
  items: [
    {
      company: "Tech Solution Inc.",
      postion: "Full Stack Developer",
      duration: "2023-Present",
    },
    {
      company: "Web Design Studio",
      postion: "Front-end Developer Intern",
      duration: "2022-Present",
    },
    {
      company: "E-comerce StartUp",
      postion: "Freelance Web Developer",
      duration: "22023-Present",
    },
    {
      company: "Tech Acadmy",
      postion: "Teaching Assistant",
      duration: "2019-2022",
    },
    {
      company: "Software Development Firm",
      postion: "Junior Developer",
      duration: "2022-Present",
    },
    {
      company: "Digital Agency",
      postion: "UI/UX Designer",
      duration: "2023-Present",
    },
  ],
};
//education
const education = {
  icon: "",
  title: "My Education",
  description:
    "I'm provide a services of web development  from 24/7 and all time you can contact me for  better experience",
  items: [
    {
      institution: "Government Graduate College",
      degree: "Intermediate In Computer Science",
      duration: "2016-2017",
    },
    {
      institution: "Sheikhupura College Comerce",
      degree: "Bsc(Bachelor In Computer Science)",
      duration: "2018-2019",
    },
    {
      institution: "University Of Sarghoda",
      degree: "Msc.IT(Information Technology)",
      duration: "2020-2022",
    },
    {
      institution: "PIAIC (Online)",
      degree: "CNC (Cloud Native Computing)",
      duration: "2023",
    },

    {
      institution: "Online Cource (Panaverse Dao)",
      degree: "Figma Designer",
      duration: "2023",
    },
    {
      institution: "University Of Management & Technology",
      degree: "Certified Cloud Applied Generative AI",
      duration: "2024-Present",
    },
  ],
};
// Skill data
const skills = {
  title: "My Skills",
  description:
    "I'm provide a services of web development  from 24/7 and all time you can contact me for  better experience",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html5",
    },
    {
      icon: <FaCss3 />,
      name: "css3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },

    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindcss",
    },
    {
      icon: <FaNode />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delaay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about me">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((items, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{items.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {items.postion}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{items.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((items, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{items.duration}</span>
                          <h3
                            className="text-xl max-w-[260px] min-h-[60px] text-center
                           lg:text-left"
                          >
                            {items.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{items.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about me */}
            <TabsContent
              value="about me"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
