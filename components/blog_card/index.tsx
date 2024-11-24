"use client";

import { motion } from "framer-motion";

export default function BlogCard({
  blogNumber,
  description
}: {
  blogNumber: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: {
          delay: 0.1,
          duration: 0.2,
        },
      }}
      className="flex cursor-pointer items-center h-32 xd:h-24 xd:w-full w-4/5 bg-[url(/images/background.png)] bg-[0_0] bg-[size:200px] bg-[#16171b] shadow-[0_0_0_1px_rgba(255,255,255,.2)] rounded-xl"
    >
      <div className="min-w-20 h-3/4 px-4 ml-4 rounded-xl items-center justify-center flex bg-[url(/images/background.png)] bg-[0_0] bg-[size:200px] bg-[rgba(65,66,69,0.1)] shadow-[0_0_0_1px_rgba(255,255,255,.2)]">
        <h2 className="text-5xl xd:text-lg font-extrabold text-outline text-transparent">
          {blogNumber}
        </h2>
      </div>
      <h2 className="text-[28px] xd:text-[14px] font-bold leading-none text-white ml-4 truncate underline">
        {description}
      </h2>
    </motion.div>
  );
}
