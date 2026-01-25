import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  GithubIcon,
  DribbbleIcon,
  NewTwitterRectangleIcon,
  Behance02Icon,
  Linkedin01Icon,
} from "@hugeicons/core-free-icons/index";

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

const FooterLink = ({ href, children, icon: Icon }) => (
  <Link
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className="footer__link"
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
            <FooterLink href="https://sass-lang.com"> SCSS</FooterLink> and
            deployed with{" "}
            <FooterLink href="https://vercel.com">Vercel</FooterLink>.
          </p>
          <div className="footer__section-top--text-source">
            <FooterLink
              className="footer__section-top--text-source"
              href="https://github.com/MarSkor/portfolio-v2"
              icon={GithubIcon}
            >
              Source code
            </FooterLink>
          </div>
        </section>
        <section className="footer__section-bottom">
          <div className="footer__section-bottom--socials">
            {SOCIALS.map((social) => (
              <FooterLink
                key={social.text}
                href={social.href}
                icon={social.icon}
              />
            ))}
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
