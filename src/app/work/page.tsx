"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
// import { SwiperSlide,Swiper } from "react-icons/si";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image";
import WorkSliderButton from "@/components/ui/WorkSliderButton";


const projects=[
  {
num:'01',
category:"frontend",
title:"Calculator",
description:"this is my 1st priject in html,css,javascript",
stack:[{name:"Html5"},{name:"Css3"},{name:"JavaScript"}],
image:"/calculator.jpeg",
live:"",
github:"",
  },
  {
num:'02',
category:"frontend",
title:"Panaverse dao",
description:"this is mt 2nd project using by typescript,chakra ui and reacj.js",
stack:[{name:"TypeScrip"},{name:"ChakraUI"},{name:"React.js"}],
image:"/panaverse.png",
live:"",
github:"",
  },
  {
num:'03',
category:"frontend",
title:"Panaverse dao",
description:"this is my 3rd project using next.js,typescript and tailwind css.",
stack:[{name:"TypeScrip"},{name:"TailwindCss"},{name:"Next.js"}],
image:"/chakra.jpeg",
live:"",
github:"",
  },
  {
num:'04',
category:"frontend",
title:"E-comerce",
description:" this is my 4th project using the next.js,typescript, tailwndcss,schdn ui, and daisy ui.",
stack:[{name:"TypeScript"},{name:"TailwindCss"},{name:"Next.js"} ,{name:"schdn UI"} ,{name:"daisy UI"}],
image:"/ecomerce.jpeg",
live:"",
github:"",
  },
  {
num:'05',
category:"Full-Stack",
title:"TO-do App",
description:" this is my full stack project by using frondend language next.js,tailwind css and typescript and the backend  fastapi and python.",
stack:[{name:"TypeScript"},{name:"TailwindCss"},{name:"Next.js"} ,{name:"FastAPI"} ,{name:"Python"}],
image:"/todo.png",
live:"",
github:"",
  },
]

const Work = () => {
  const [project,setProjects] = useState(projects[0])
   const handleSlideChange =(swiper:any)=> {
    //get currentside index
    const currentIndex = swiper.activeIndex;
    // update project state base on current slide index
    setProjects(projects[currentIndex]);
   };
  
  

  return (
    <motion.div
    initial={{opacity:0}}
    animate={{
      opacity:1,
      transition:{ delay:2.4, duration:0.4, ease:"easeIn"},
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
       <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px} flex flex-col xl:justify-between order-2 xl:order-none">
            {/* outline */}
            <div className=" flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}</div>
                {/* project number */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
                <h3 className="text-[28px] font-bold leading-none text-white">{project.title}</h3>
           {/* project description */}
           <p className="text-white/60">{project.description}</p>
           {/* stack */}
           <ul className="flex gap-4">
            {project.stack.map((item,index)=>{
              return(
                <li key={index} className="text-xl text-accent">
                  {item.name}
                  {/* remove las comma */}
                  {index !== project.stack.length-1 && ","}
                </li>
              )
            })}

           </ul>
           {/* border */}
           <div className=" border border-white/20"></div>
           {/* buttons */}
           <div className="flex items-center gap-6">
            {/* live project */}
            <Link href={project.live}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />

                </TooltipTrigger>
                <TooltipContent>
                  <p>live project</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            
            </Link>
            {/* github project btn */}
            <Link href={project.github}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                <BsGithub className="text-white text-3xl group-hover:text-accent" />

                </TooltipTrigger>
                <TooltipContent>
                  <p>Github repository</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            
            </Link>
           </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
            spaceBetween={30}
            slidesPerView={1} 
           onSlideChange={handleSlideChange}>
              {projects.map((project,index)=>{
                return(
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overly */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt={project.title}
                        
                        />
                      </div>

                    </div>

                  </SwiperSlide>
                )
              })}
              <WorkSliderButton containerStyles="flex gap-2 absolute right-0 bottom-[calc
              (50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles=" bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>


            
          </div>
        </div>
       </div>
    </motion.div>
   
  )
}

export default Work