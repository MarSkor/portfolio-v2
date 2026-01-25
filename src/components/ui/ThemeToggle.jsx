"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HugeiconsIcon } from "@hugeicons/react";
import { Sun01Icon, Moon02Icon } from "@hugeicons/core-free-icons/index";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="nav__theme-switch-wrapper theme-toggle__wrapper">
      <button
        className="theme-toggle__btn"
        type="button"
        aria-label="toggle theme"
        title="Toggle theme"
        data-theme={resolvedTheme}
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        <div className="theme-toggle__icon theme-toggle__icon--light">
          <HugeiconsIcon
            focusable="true"
            icon={Sun01Icon}
            size={24}
            color="currentColor"
            strokeWidth={1.5}
          />
        </div>
        <div className="theme-toggle__icon theme-toggle__icon--dark">
          <HugeiconsIcon
            focusable="true"
            icon={Moon02Icon}
            size={24}
            color="currentColor"
            strokeWidth={1.5}
          />
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;
