"use client";
import { useClickAway } from "@uidotdev/usehooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, MenuCircleIcon } from "@hugeicons/core-free-icons/index";
import ThemeToggle from "../ui/ThemeToggle";

const NavLinks = [
  { href: "/", label: "Home" },
  { href: "/work-archive", label: "Archive" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const NavLink = ({ href, label, closeNav }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <li className="nav__list-item">
      <Link
        onClick={closeNav}
        href={href}
        className={`nav__link ${isActive ? "active" : ""}`}
      >
        {label}
      </Link>
    </li>
  );
};

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [navbarScroll, setNavbarScroll] = useState(false);

  const ref = useClickAway(() => {
    setNavActive(false);
  });

  useEffect(() => {
    const navbarOnChange = () => {
      if (window.scrollY >= 10) {
        setNavbarScroll(true);
      } else {
        setNavbarScroll(false);
      }
    };

    window.addEventListener("scroll", navbarOnChange);
    return () => window.removeEventListener("scroll", navbarOnChange);
  }, []);

  const toggleMenu = () => {
    setNavActive((prev) => !prev);
  };

  const closeNav = () => setNavActive(false);

  return (
    <header className="nav__wrapper">
      <nav
        className={`nav__inner ${navbarScroll ? "nav-scroll" : ""}`}
        ref={ref}
      >
        <div className="nav__logo-wrapper">
          <Link href={"/"} className="nav__logo">
            M
          </Link>
        </div>
        <div className={`nav__inner-menu ${navActive ? "active" : "hide"}`}>
          <ul className="nav__inner-menu-list">
            {NavLinks.map((item, i) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                closeNav={closeNav}
              />
            ))}
          </ul>
        </div>
        <div className="nav__action-section">
          <ThemeToggle />
          <div
            className={`nav__menu-toggle ${navActive ? "menu-toggle-off" : "menu-toggle-on"}`}
            onClick={toggleMenu}
          >
            {navActive ? (
              <HugeiconsIcon
                size={24}
                color="currentColor"
                strokeWidth={1.5}
                icon={Cancel01Icon}
                aria-label="click to close"
              />
            ) : (
              <HugeiconsIcon
                size={24}
                color="currentColor"
                strokeWidth={1.5}
                icon={MenuCircleIcon}
                aria-label="click to open"
              />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
