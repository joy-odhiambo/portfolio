"use client";

import useErrorModal from "@/stores/error_modal/use_error_modal";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef } from "react";
import ErrorModal from "../error_modal";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const { show_error_modal, set_show_error_modal } = useErrorModal();
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (show_error_modal) {
      if (timer.current) clearTimeout(timer.current);

      timer.current = setTimeout(() => set_show_error_modal(false), 2000);
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [show_error_modal, set_show_error_modal]);

  return (
    <>
      {show_error_modal && <ErrorModal />}

      <AnimatePresence>
        <motion.div
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
