import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  GithubIcon,
  DribbbleIcon,
  NewTwitterRectangleIcon,
  Behance02Icon,
  Linkedin01Icon,
} from "@hugeicons/core-free-icons/index";
import Typewriter from "../pages/about/Typewriter";

const SOCIALS = [
  {
    icon: DribbbleIcon,
    text: "Dribbble",
    href: "https://dribbble.com/maskor_",
  },
  {
    icon: Behance02Icon,
    text: "Behance",
    href: "https://www.behance.net/maskor_",
  },
  {
    icon: NewTwitterRectangleIcon,
    text: "X",
    href: "https://x.com/martinedev_",
  },
  {
    icon: Linkedin01Icon,
    text: "Linkedin",
    href: "https://www.linkedin.com/in/martineskor/",
  },
];

export const FooterLink = ({ href, children, icon: Icon }) => (
  <Link
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className="footer__link"
    aria-label={href}
    title={href}
  >
    {Icon && <HugeiconsIcon icon={Icon} size={24} strokeWidth={1.5} />}
    {children}
  </Link>
);

const Footer = () => {
  return (
    <footer className="footer__wrapper">
      <section className="footer__section">
        <section className="footer__section-top">
          <p className="footer__section-top--text">
            Designed in <FooterLink href="https://figma.com">Figma</FooterLink>{" "}
            and coded in{" "}
            <FooterLink href="https://code.visualstudio.com">VSC</FooterLink>.
            <br />
            Built with{" "}
            <FooterLink href="https://nextjs.org">Next.js</FooterLink>,
            <FooterLink href="https://sanity.io"> Sanity.io</FooterLink>,
            <FooterLink href="https://sass-lang.com"> SCSS</FooterLink>,{" "}
            <FooterLink href="https://motion.dev/"> Motion</FooterLink> and
            deployed with{" "}
            <FooterLink href="https://vercel.com">Vercel</FooterLink>.
          </p>
          <div className="footer__section-top--text-source">
            <FooterLink
              className="footer__link capitalize"
              href="https://github.com/MarSkor/portfolio-v2"
            >
              Portfolio Source Code
            </FooterLink>
          </div>
        </section>
        <section className="footer__section-bottom">
          <div className="footer__section-bottom--socials">
            {SOCIALS.map((social) => (
              <FooterLink
                key={social.text}
                href={social.href}
                className="footer__section-bottom--socials-link"
              >
                {social.text}
              </FooterLink>
            ))}
          </div>
        </section>
        <Typewriter text={["Building for the web.", "Designing with logic."]} />
      </section>
    </footer>
  );
};

export default Footer;
