"use client";
import Appearance from "@/components/animations/Appearance";
import { FooterLink } from "@/components/layout/Footer";
import NextLink from "@/components/ui/NextLink";
import { ArrowUpRight02Icon } from "@hugeicons/core-free-icons/index";
import { motion } from "motion/react";

const email = process.env.NEXT_PUBLIC_EMAIL_ADDRESS;

const ContactInformation = () => {
  return (
    <section className="content-col contact__info contact-card">
      <header className="contact__info--header">
        <span className="contact__tag">Get in Touch</span>
        <h2 className="contact__title">
          Let's build something <span className="text-accent">together.</span>
        </h2>
        <p className="contact__description">
          Whether you have a specific project in mind or just want to say hi,{" "}
          <br /> my inbox is open.
        </p>
      </header>

      <Appearance delay={0.5} y={5}>
        <div className="availability-wrapper">
          <div className="status-dot-container">
            <motion.span
              className="status-dot-ping"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{
                scale: [1, 1.8, 2.5],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            <motion.span
              className="status-dot-core"
              animate={{
                opacity: [0.8, 1, 0.8],
                scale: [0.95, 1, 0.9],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          <p className="availability-text">Available for work</p>
        </div>
      </Appearance>

      <section className="contact__details contact__info--footer">
        <div className="contact__item contact__item-send-email">
          <NextLink
            href={`mailto:${email}?subject=Project Inquiry - [Your Name]`}
            icon={ArrowUpRight02Icon}
            iconPosition="right"
            iconSize={22}
            className="animate-up-right contact__link"
          >
            Email Me
          </NextLink>
        </div>

        <section className="contact__item contact__section--socials-links">
          <span className="contact__label contact__social-links-label">
            Socials
          </span>
          <div className="contact__social-links">
            <FooterLink href={"#"} className="socials-link">
              LinkedIn
            </FooterLink>
            <FooterLink href={"#"} className="socials-link">
              Github
            </FooterLink>
            <FooterLink href={"#"} className="socials-link">
              X
            </FooterLink>
          </div>
        </section>
      </section>
    </section>
  );
};

export default ContactInformation;
