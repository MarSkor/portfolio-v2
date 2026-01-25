"use client";
import { ThemeProvider } from "next-themes";

const NextThemesProvider = ({ children }) => {
  return (
    <ThemeProvider attribute={"data-theme"} defaultTheme="dark" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default NextThemesProvider;
