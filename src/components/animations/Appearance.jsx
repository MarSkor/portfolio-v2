"use client";
import { motion } from "motion/react";
import { useEffect } from "react";

const Appearance = ({ children, delay = 0, y = 15, resetScroll = false }) => {
  useEffect(() => {
    if (resetScroll) {
      window.scrollTo(0, 0);
    }
  }, [resetScroll]);

  return (
    <motion.div
      initial={{ opacity: 0, y: y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: delay,
        ease: [0.2, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default Appearance;
