"use client";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="container container-lg">
      <div className="hero__wrapper">
        <h1 className="hero__title">
          Hi<span className="c-span">.</span> I&apos;m Martine
          <span className="c-span">.</span> <br /> A{" "}
          <span className="hero__title-decoration title-decoration-1">
            Front-end Developer
          </span>{" "}
          <br />&{" "}
          <span className="hero__title-decoration title-decoration-2">
            UI Designer
          </span>
          <span className="c-span">.</span>
        </h1>
        <div className="container-sm hero__paragraphs">
          <p className="hero__paragraph ">
            I&apos;m passionate about designing and building web experiences
            that are enjoyable to use and easy to navigate.
          </p>
        </div>
        <div className="hero__scroll-indicator">
          <motion.div
            className="scroll-line"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 100, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="scroll-line__active"
              animate={{
                top: ["0%", "100%", "0%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
