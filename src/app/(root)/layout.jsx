import Navbar from "@/components/layout/Navbar";
import "../../styles/main.scss";
import NextThemesProvider from "./provider";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Martine's Portfolio",
  description: "A showcase of my work and projects.",
};

export default function RootLayout({ children }) {
  return (
    <NextThemesProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </NextThemesProvider>
  );
}
