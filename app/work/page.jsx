"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import { BsArrowUpRight,BsGithub } from "react-icons/bs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: '01',
    category: 'FullStack',
    title: 'Time Delivery',
    description:'Built a food delivery app using React Native, Express and MySQL, with separate dashboards for admins, clients, delivery drivers, and restaurants.',
    stack: [{name: 'React Native'}, {name: 'Express JS'}, {name: 'MySQL'}, {name: 'Socket.io'}],
    image: '/portfolioTimedelivery.png',
    live:'',
    github:'github.com/orgs/time-delivery/repositories'
   
  },
  {
    num: '02',
    category: 'FullStack',
    title: 'Escape',
    description:'Engineered an online marketplace focused on camping products with advanced features using React.js, Express.js, and MySQL; implemented user-friendly admin controls to enhance the tracking of over 1,000 product listings.',
    stack: [{name: 'React JS'}, {name: 'Tailwind css'}, {name: 'Express JS'}, {name: 'MySQL'}],
    image: '/portfolioEscape.png',
    live:'',
    github:'github.com/bechir-ghouma/Escape'
  },
  {
    num: '03',
    category: 'FullStack',
    title: 'Accounting Software',
    description:'Designed accounting software with an automated data import tool to eliminate manual entry from spreadsheets, streamlining data integration and management.',
    stack: [{name: 'React.js'}, {name: 'Express.js'}, {name: 'MySQL'}],
    image: '/Software_portfolio.png',
    live:'',
    github:'github.com/bechir-ghouma/hardware-store'
  }
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  }
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1, 
        transition: {delay:2.4, duration:0.4, ease: "easeIn"} 
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item,index)=> {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length -1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {/* <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}
                <a href={`https://${project.github}`} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </a>

              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[560px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project,index)=> {
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[500px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-fell h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-cover" alt=""/>
                    </div>
                  </div>
                </SwiperSlide>
              })}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work