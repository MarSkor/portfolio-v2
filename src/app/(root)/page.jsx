import Featured from "@/components/pages/home/Featured";
import Hero from "@/components/pages/home/Hero";
import { FEATURED_PROJECTS } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import AboutMe from "@/components/pages/home/AboutMe";

export const metadata = {
  title: "Home",
  description: "A showcase of my work and projects.",
};

const HomePage = async () => {
  const projects = await client.fetch(FEATURED_PROJECTS);
  return (
    <>
      <Hero />
      <div className="section-divider" />
      <Featured projects={projects} />
      <div className="section-divider" />
      <AboutMe />
    </>
  );
};

export default HomePage;
