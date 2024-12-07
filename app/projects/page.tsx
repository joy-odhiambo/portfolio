"use client";

import "swiper/css";
import PageTransition from "@/components/page_transition";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as swiper_t } from "swiper/types";
import { SiCanva } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SwiperButtons from "@/components/swiper_buttons";
import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    category: "HR Reports",
    title: "HR Reports",
    description:
      "Recruitment strategies, Hiring Process, Candidate Sourcing, Interview Outcomes & Time to fill metrics.",
    stack: [{ name: "Canva" }, { name: "Excel" }, { name: "Word" }],
    image: "/images/nexgen-recruitment-report-4.jpg",
    canva: "https://www.canva.com/design/DAGWz0pT0K8",
  },
  {
    num: "02",
    category: "HR Reports",
    title: "HR Reports",
    description:
      "Recruitment strategies, Hiring Process, Candidate Sourcing, Interview Outcomes & Time to fill metrics.",
    stack: [{ name: "Canva" }, { name: "Excel" }, { name: "Word" }],
    image: "/images/nexgen-recruitment-report-2.jpg",
    canva: "https://www.canva.com/design/DAGWz0pT0K8",
  },
  {
    num: "03",
    category: "Employee Benefits",
    title: "Employee Benefits",
    description:
      "Employee Benefits Packages, Employee Well being & Employee needs.",
    stack: [{ name: "Canva" }],
    image: "/images/employee-benefit.jpg",
    canva: "https://www.canva.com/design/DAGVIHjS_GI",
  },
  {
    num: "04",
    category: "Annual Events",
    title: "Annual Events",
    description:
      "Public Holiday analysis & Employee Engagement",
    stack: [{ name: "Canva" }, { name: "Calender" }],
    image: "/images/nexgen-annual-events.jpg",
    canva: "https://www.canva.com/design/DAGYU6i_21g",
  },
  {
    num: "05",
    category: "Annual Events",
    title: "Annual Events",
    description: "Public Holiday analysis & Employee Engagement",
    stack: [{ name: "Canva" }, { name: "Calender" }],
    image: "/images/nexgen-annual-events-2.jpg",
    canva: "https://www.canva.com/design/DAGYU6i_21g",
  },
];

export default function Projects() {
  const [project, set_project] = useState(projects[0]);
  const swipe = useRef<HTMLDivElement>(null);

  const handle_slide_change = (swiper: swiper_t) => {
    const idx = swiper.realIndex;
    set_project(projects[idx]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (swipe.current) swipe.current.style.display = "none";

      return () => clearTimeout(timer);
    }, 3600);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-[80vh] flex flex-col justify-center xl:pt-24 pt-6">
        <div className="container mx-auto">
          <div className="flex xd:flex-col flex-row xd:gap-0 gap-[30px]">
            <div className="xd:w-full w-[50%] flex flex-col justify-between xd:order-2 order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>

                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-[#ff4d4d] transition-all duration-500 capitalize">
                  {project.category}
                </h2>

                <p className="text-white/60">{project.description}</p>

                <ul className="flex gap-2 flex-wrap">
                  {project.stack.map((item, idx) => {
                    return (
                      <li
                        key={idx}
                        className="xd:text-[12px] text-xl text-[#ff4d4d]"
                      >
                        {item.name}
                        {idx !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>

                <div className="border border-white/20"></div>

                <Link
                  href={project.canva}
                  target="_blank"
                  className="w-[70px] h-[70px]"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full flex bg-white/5 justify-center items-center group">
                        <SiCanva className="text-white text-3xl group-hover:text-[#ff4d4d]" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Canva Link</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>

            <div className="xd:w-full w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop
                className="h-[520px] rounded-lg"
                onSlideChange={handle_slide_change}
              >
                {projects.map((project, idx) => {
                  return (
                    <SwiperSlide key={idx} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            fill
                            priority
                            className="object-fill"
                            alt=""
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}

                <motion.div
                  animate={{
                    scale: [2, 2, 2, 2, 2],
                    rotateZ: [0, -20, 0, 20, 0],
                    transition: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 2,
                    },
                  }}
                  ref={swipe}
                  className="flex absolute top-1/2 left-1/2 z-[100] transform translate-x-[-50%] translate-y-[-50%]"
                >
                  <div className="w-[50px] h-[50px]">
                    <Image
                      priority
                      src="/icons/swipe.svg"
                      className="object-contain"
                      width={50}
                      height={50}
                      alt=""
                    />
                  </div>
                </motion.div>

                <SwiperButtons
                  container_styles="flex gap-2 absolute right-0 xd:bottom-[calc(50%_-_22px)] bottom-0 z-20 xd:w-full w-max xd:justify-between justify-none"
                  btn_styles="bg-[#ff4d4d] hover:bg-[#f29871] text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
