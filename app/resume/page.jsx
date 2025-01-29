"use client";

import { Description } from "@radix-ui/react-dialog";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";


const about = {
  title: 'About me',
  description: 'As a Fullstack Developer, I build dynamic, user-friendly web and mobile applications, handling both frontend and backend development to ensure seamless functionality and visually appealing interfaces.',
  info: [
    {
      fieldName: "Name",
      fieldValue: "Bechir Ghouma"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+216) 44 254 485"
    },
    {
      fieldName: "Experience",
      fieldValue: "2 Years"
    },
    {
      fieldName: "Skype",
      fieldValue: "bgh_113"
    },
    {
      fieldName: "Natinality",
      fieldValue: "Tunisian"
    },
    {
      fieldName: "Email",
      fieldValue: "ghouma68@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Arabic, French"
    },
  ]
}

const experience = {
  icon: '',
  title: 'My experience',
  description: 'As a Fullstack Developer, I build dynamic, user-friendly web and mobile applications, handling both frontend and backend development to ensure seamless functionality and visually appealing interfaces.',
  items: [
    {
      company: "Rebootkamp Tunisia",
      position: "Full Stack js instructor",
      duration: "2021 - 2022"
    },
    {
      company: "Go My Code",
      position: "UI/UX instructor",
      duration: "Winter 2023"
    },
    {
      company: "Quincaillerie de Sfax",
      position: "Freelance",
      duration: "Summer 2024",
    },
    {
      company: "Delievery Time",
      position: "Freelance",
      duration: "Summer - Autumn 2024 "
    },
  ]
}


const education = {
  icon: '',
  title: 'My education',
  description: 'As a Fullstack Developer, I build dynamic, user-friendly web and mobile applications, handling both frontend and backend development to ensure seamless functionality and visually appealing interfaces.',
  items: [
    {
      institution: "Dreams N Motion",
      degree: "C2 in general english",
      duration: "2020"
    },
    {
      institution: "Rebootkamp Tunisia",
      degree: "Full Stack Software development",
      duration: "2020 - 2021"
    },
    {
      institution: "Private High School El Manar",
      degree: "Baccalaureate In computer Science",
      duration: "2022 - 2023"
    },
    {
      institution: "Faculty Of Sciences Of Sfax",
      degree: "License In Computer Systems Engineering",
      duration: "2023 - 2024"
    },
  ]
}

const skills = {
  title: 'My skills',
  description:'As a Fullstack Developer, I build dynamic, user-friendly web and mobile applications, handling both frontend and backend development to ensure seamless functionality and visually appealing interfaces.',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
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
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaDatabase />,
      name: "mysql",
    },
  ]
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

import { ScrollArea} from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div 
      initial={{opacity:0}} 
      animate={{
        opacity: 1,
        transition: {delay: 2.4, duration:0.4, ease:'easeIn'}
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs 
            defaultValue="experience" 
            className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>
            <div className="min-h-[70vh] w-full">
              <TabsContent
                value="experience"
                className="w-full"
              >
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">
                    {experience.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index)=>{
                        return (<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>)
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent
                value="education"
                className="w-full"
              >
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">
                    {education.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index)=>{
                        return (<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>)
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent
                value="skills"
                className="w-full h-full  "
              >
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                      {skills.skillList.map((skill, index)=>{
                        return <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      })}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="about"
                className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item,index)=>{
                      return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
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
  )
}

export default Resume