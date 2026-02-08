import Featured from "@/components/pages/home/Featured";
import Hero from "@/components/pages/home/Hero";
import { FEATURED_PROJECTS } from "@/sanity/lib/queries";
import AboutMe from "@/components/pages/home/AboutMe";
import { sanityFetch } from "@/sanity/lib/live";

export const metadata = {
  title: "Home",
  description: "A showcase of my work and projects.",
};

const HomePage = async () => {
  const projects = await sanityFetch({
    query: FEATURED_PROJECTS,
    params: {},
    tags: ["project"],
  });

  return (
    <>
      <Hero />
      <div className="section-divider" />
      <Featured projects={projects.data} />
      <div className="section-divider" />
      <AboutMe />
    </>
  );
};

export default HomePage;
