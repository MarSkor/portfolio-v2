"use client";
import Appearance from "@/components/animations/Appearance";
import { motion } from "motion/react";
import Link from "next/link";

const Card = ({ number, title, description }) => (
  <div className="process__step-card">
    <div className="process__step-card--top-wrapper">
      <span className="process__step-card--slash">/</span>
      <span className="process__step-card--number">{number}</span>
    </div>
    <span className="process__step-card--title">{title}</span>
    <p>{description}</p>
  </div>
);

const Process = () => {
  const images = {
    wireframe: {
      id: "wireframe",
      title: "01. Wireframing",
      src: "/assets/about/low-fi.png",
      projectLink:
        "https://www.behance.net/gallery/192173985/E-commerce-Sales-Dashboard-CRM",
    },

    hifi: {
      id: "hifi",
      title: "02. Final UI",
      src: "/assets/about/high-fi.png",
      projectLink:
        "https://www.behance.net/gallery/192173985/E-commerce-Sales-Dashboard-CRM",
    },
  };

  return (
    <section className="process">
      <section className="process__visuals">
        <section className="process__visuals-text">
          <section className="process__header-wrapper">
            <Appearance delay={0.1}>
              <header className="process__header">
                <span className="eyebrow">My Approach</span>
                <h2 className="display-text">Figma to Final Commit</h2>
              </header>
            </Appearance>
          </section>
          <Appearance delay={0.4}>
            <p className="content-large-paragraph">
              I believe the best way to start a project is with a plan. If we
              map over the user experience by sketching or in figma, we reduce a
              lot of technical debt. <br /> This way we'll ensure that the final
              product is as intuitive as it is performant, which is the
              foundation of any successful digital product.
            </p>
          </Appearance>
        </section>

        <section className="process__comparison">
          {Object.values(images).map((img, idx) => (
            <Appearance key={img.id} delay={0.6 + idx * 0.2}>
              <figure className={`frame frame--${img.id}`}>
                <Link
                  href={img.projectLink}
                  className="frame__link"
                  target="_blank"
                >
                  <motion.div className="image-container">
                    <motion.img src={img.src} alt={img.title} />
                  </motion.div>
                  <figcaption className="frame-info">
                    <span className="frame-info--label">{img.title}</span>
                    <span className="frame-info--action">View Project</span>
                  </figcaption>
                </Link>
              </figure>
            </Appearance>
          ))}
        </section>
      </section>

      <section className="process__steps-grid">
        <Appearance delay={0.1}>
          <Card
            number="01"
            title="Discover"
            description="Deep diving into the project goals and user pain points to establish a solid foundation."
          />
        </Appearance>
        <Appearance delay={0.2}>
          <Card
            number="02"
            title="Design"
            description="Crafting wireframes and interactive prototypes in Figma to validate the user experience."
          />
        </Appearance>
        <Appearance delay={0.3}>
          <Card
            number="03"
            title="Develop"
            description="Turning design into reality using clean, maintainable code and smooth interactions."
          />
        </Appearance>
      </section>
    </section>
  );
};

export default Process;
