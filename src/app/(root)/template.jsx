"use client";
import { motion } from "motion/react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const Template = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: [0.2, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default Template;
