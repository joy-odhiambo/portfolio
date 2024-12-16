"use client";

import "swiper/css";
import PageTransition from "@/components/page_transition";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as swiper_t } from "swiper/types";
import { SiCanva } from "react-icons/si";
import { FaGoogleDrive } from "react-icons/fa";
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
    canva:
      "https://www.canva.com/design/DAGWz0pT0K8/8151iStoBcfHAYYkn9eCZQ/edit?utm_content=DAGWz0pT0K8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    num: "02",
    category: "HR Reports",
    title: "HR Reports",
    description:
      "Recruitment strategies, Hiring Process, Candidate Sourcing, Interview Outcomes & Time to fill metrics.",
    stack: [{ name: "Canva" }, { name: "Excel" }, { name: "Word" }],
    image: "/images/nexgen-recruitment-report-2.jpg",
    canva:
      "https://www.canva.com/design/DAGWz0pT0K8/8151iStoBcfHAYYkn9eCZQ/edit?utm_content=DAGWz0pT0K8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    num: "03",
    category: "Employee Benefits",
    title: "Employee Benefits",
    description:
      "Employee Benefits Packages, Employee Well being & Employee needs.",
    stack: [{ name: "Canva" }],
    image: "/images/employee-benefit.jpg",
    canva:
      "https://www.canva.com/design/DAGVIHjS_GI/pekjbl3UF0LlKRlwc8WpxA/edit?utm_content=DAGVIHjS_GI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    num: "04",
    category: "Annual Events",
    title: "Annual Events",
    description: "Public Holiday analysis & Employee Engagement",
    stack: [{ name: "Canva" }, { name: "Calender" }],
    image: "/images/nexgen-annual-events.jpg",
    canva:
      "https://www.canva.com/design/DAGYU6i_21g/dyUwlmQN3WNln7qnTmiSSg/edit?utm_content=DAGYU6i_21g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    num: "05",
    category: "Annual Events",
    title: "Annual Events",
    description: "Public Holiday analysis & Employee Engagement",
    stack: [{ name: "Canva" }, { name: "Calender" }],
    image: "/images/nexgen-annual-events-2.jpg",
    canva:
      "https://www.canva.com/design/DAGYU6i_21g/dyUwlmQN3WNln7qnTmiSSg/edit?utm_content=DAGYU6i_21g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    num: "06",
    category: "Policies & Procedures",
    title: "Employee Welfare Policies",
    description:
      "Implementing policies and procedures that align with organization's goals and legal requirements.",
    stack: [{ name: "Word" }],
    image: "/images/employee_welfare_policy.png",
    googleDrive:
      "https://drive.google.com/file/d/1zai75_mvGuTP1qPTE-5lFPtf_wU77fTG/view?usp=sharing",
  },
  {
    num: "07",
    category: "Perfomance Management",
    title: "360 degrees evaluation form",
    description:
      "Creating systems and processes to ensure employee achieve their goals and contribute to the organization's success.",
    stack: [{ name: "Word" }],
    image: "/images/360_degree_evaluation_form.png",
    googleDrive:
      "https://docs.google.com/document/d/1H85e3jKJXRJTfzbXialXs8NwzETDsYk0/edit?usp=sharing&ouid=110807206956507014340&rtpof=true&sd=true",
  },
  {
    num: "08",
    category: "Perfomance Management",
    title: "Employee Evaluation Form",
    description:
      "Creating systems and processes to ensure employee achieve their goals and contribute to the organization's success.",
    stack: [{ name: "Word" }],
    image: "/images/employee_evaluation_form.png",
    googleDrive:
      "https://drive.google.com/file/d/1j-WbDzHUQJZDBnYlehwp_CGH8m3b2MRk/view?usp=sharing",
  },
  {
    num: "09",
    category: "Perfomance Management",
    title: "Perfomance Review Form",
    description:
      "Creating systems and processes to ensure employee achieve their goals and contribute to the organization's success.",
    stack: [{ name: "Word" }],
    image: "/images/perfomance_review_form.png",
    googleDrive:
      "https://docs.google.com/document/d/1trJhcw8Zc3xjdbSYSaAesnbN5IlGquO6/edit?usp=sharing&ouid=110807206956507014340&rtpof=true&sd=true",
  },
  {
    num: "10",
    category: "Perfomance Improvement Plan",
    title: "Perfomance Improvement Plan",
    description:
      "Identifying perfomance gaps. Setting clear and achievable goals and outlining specific actions to improve employee perfomance and productivity.",
    stack: [{ name: "Word" }],
    image: "/images/perfomance_improvement_plan.png",
    googleDrive:
      "https://docs.google.com/document/d/1-Fmbv3pkLEINFkQnl4D5iUVurfJo_PJM/edit?usp=sharing&ouid=110807206956507014340&rtpof=true&sd=true",
  },
  {
    num: "11",
    category: "Recruitment & Onboarding",
    title: "Job description",
    description:
      "Creating clear and accurate outlines of responsibilities, qualifications and skills requried for each position.",
    stack: [{ name: "Word" }],
    image: "/images/job_description.png",
    googleDrive:
      "https://docs.google.com/document/d/1hE__Xt89UxgHDr6JMUQdK2mdZ0Froi1g/edit?usp=sharing&ouid=110807206956507014340&rtpof=true&sd=true",
  },
  {
    num: "12",
    category: "Employee Engagement",
    title: "Employee recogntion.",
    description:
      "Building strong treams by creating a positive work environment, where employees feel valued and motivated.",
    stack: [{ name: "Word" }],
    image: "/images/employee_engagement.gif",
    canva:
      "https://www.canva.com/design/DAGY6X5lEgk/hjzLq7OZfyRNR3dQVfpSzw/edit?utm_content=DAGY6X5lEgk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
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

                {project.canva && (
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
                )}

                {project.googleDrive && (
                  <Link
                    href={project.googleDrive}
                    target="_blank"
                    className="w-[70px] h-[70px]"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full flex bg-white/5 justify-center items-center group">
                          <FaGoogleDrive className="text-white text-3xl group-hover:text-[#ff4d4d]" />
                        </TooltipTrigger>

                        <TooltipContent>
                          <p>Google Drive</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
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
